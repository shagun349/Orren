from fastapi import FastAPI

app = FastAPI(title="Circular Logistics API")


@app.get("/")
def root():
    return {"message": "Circular Logistics API is running"}

@app.get("/health")
def health():
    return {"status": "ok"}
