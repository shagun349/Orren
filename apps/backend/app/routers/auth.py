from fastapi import APIRouter, Request
from authlib.integrations.starlette_client import OAuth
from starlette.config import Config
from ..core.config import settings

# Create the router
router = APIRouter(prefix="/auth", tags=["auth"])

# Initialize OAuth
# We use starlette config for authlib compatibility, but pull values from our settings
# Authlib Starlette integration expects a Starlette Config object or a dictionary.
config = Config(environ={
    "GOOGLE_CLIENT_ID": settings.GOOGLE_CLIENT_ID,
    "GOOGLE_CLIENT_SECRET": settings.GOOGLE_CLIENT_SECRET
})
oauth = OAuth(config)

oauth.register(
    name='google',
    server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
    client_kwargs={
        'scope': 'openid email profile'
    }
)

@router.get("/login")
async def login(request: Request):
    # Debug logging
    print(f"Login requested via: {request.url}")
    # Clear any existing session to prevent stale state issues
    request.session.clear()
    
    # Construct the redirect URI. 
    # Ensure this matches what is configured in Google Cloud Console.
    # We force localhost to avoid 127.0.0.1 mismatches if the user mixes them.
    # Create redirect URI dynamically to match the incoming request host
    redirect_uri = request.url_for('auth_callback')
    print(f"Redirect URI computed: {redirect_uri}")
    
    return await oauth.google.authorize_redirect(request, redirect_uri)

@router.get("/callback", name="auth_callback")
async def auth_callback(request: Request):
    try:
        print(f"Callback received via: {request.url}")
        print(f"Session keys at callback: {request.session.keys()}")
        
        token = await oauth.google.authorize_access_token(request)
        user = token.get('userinfo')
        request.session['user'] = user

        # Upsert user to Supabase
        from ..core.database import client
        from datetime import datetime
        import hashlib
        
        # Google returns 'email', map it to 'gmail' column
        user_email = user.get("email")
        user_sub = user.get("sub") or user.get("email") or "0"
        
        # Google IDs are too large for standard BigInt (int8).
        # We generate a deterministic 63-bit integer from the ID/email.
        user_id_hash = int(hashlib.sha256(user_sub.encode()).hexdigest(), 16) % (2**63 - 1)
        user_id = user_id_hash

        client.table("users").upsert({
            "user_id": user_id,
            "gmail": user_email,
            "user_name": user.get("name"),
            "user_profile_pic": user.get("picture"),
            "lastlogin": datetime.utcnow().isoformat()
        }).execute()

        from fastapi.responses import RedirectResponse
        # Redirect to dashboard as requested
        return RedirectResponse(url='http://localhost:3000/dashboard')
    except Exception as e:
        print(f"Auth error: {e}")
        from fastapi.responses import RedirectResponse
        # Redirect to dashboard with error, so user is not stuck on JSON page
        return RedirectResponse(url=f'http://localhost:3000/dashboard?error={str(e)}')
