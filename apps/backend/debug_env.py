from app.core.config import settings
import os

print(f"Current Working Directory: {os.getcwd()}")
print(f"Looking for .env at: {os.path.abspath('.env')}")
print(f"SUPABASE_URL from settings: '{settings.SUPABASE_URL}'")
print(f"SUPABASE_KEY set: {bool(settings.SUPABASE_KEY)}")

try:
    from supabase import create_client
    create_client(settings.SUPABASE_URL, settings.SUPABASE_KEY)
    print("Supabase client creation successful")
except Exception as e:
    print(f"Supabase client creation failed: {e}")
