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
    # Construct the redirect URI. 
    # Ensure this matches what is configured in Google Cloud Console.
    # Typically: http://localhost:8000/auth/callback
    redirect_uri = request.url_for('auth_callback')
    return await oauth.google.authorize_redirect(request, redirect_uri)

@router.get("/callback", name="auth_callback")
async def auth_callback(request: Request):
    try:
        # Exchange the authorization code for an access token
        token = await oauth.google.authorize_access_token(request)
        # Parse the ID token to get user info
        user = token.get('userinfo')
        return {"user": user}
    except Exception as e:
        # In production, handle errors more gracefully
        return {"error": str(e)}
