from fastapi import FastAPI
from starlette.middleware.sessions import SessionMiddleware
from .core.config import settings
from .routers.auth import router as auth_router

app = FastAPI(title="Circular Logistics API")

# Add Session Middleware
app.add_middleware(SessionMiddleware, secret_key=settings.SECRET_KEY)

app.include_router(auth_router)


@app.get("/")
def root():
    return {"message": "Circular Logistics API is running"}

@app.get("/health")
def health():
    return {"status": "ok"}
