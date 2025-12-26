from fastapi import FastAPI
from starlette.middleware.sessions import SessionMiddleware
from .core.config import settings
from .routers.auth import router as auth_router
from .routers.track import router as track_router

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Orren API")

# Add Session Middleware
app.add_middleware(
    SessionMiddleware, 
    secret_key=settings.SECRET_KEY,
    max_age=3600, 
    https_only=False,  # Essential for localhost http
    same_site="lax"
)

# Add CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(track_router)


@app.get("/")
def root():
    return {"message": "Circular Logistics API is running"}

@app.get("/health")
def health():
    return {"status": "ok"}
