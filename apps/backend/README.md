# Orren Backend

This is a Python FastAPI application.

## Setup

1.  Create a virtual environment:
    ```powershell
    python -m venv .venv
    ```
2.  Activate it:
    ```powershell
    .\.venv\Scripts\Activate
    ```
3.  Install dependencies:
    ```powershell
    pip install -r requirements.txt
    ```

## Running the Server

To start the server, run:

```powershell
.\.venv\Scripts\python -m uvicorn app.main:app --reload --port 8000
```

or if your venv is activated:

```powershell
uvicorn app.main:app --reload --port 8000
```

The API will be available at `http://localhost:8000`.
