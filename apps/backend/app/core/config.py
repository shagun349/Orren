from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    SECRET_KEY: str = "changeme"
    GOOGLE_CLIENT_ID: str
    GOOGLE_CLIENT_SECRET: str
    SUPABASE_URL: str
    SUPABASE_KEY: str
    
    class Config:
        env_file = ".env"
        extra = "ignore"

settings = Settings()
