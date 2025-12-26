import requests
import sys

def check(url):
    try:
        r = requests.get(url, timeout=2)
        print(f"{url}: {r.status_code}")
    except Exception as e:
        print(f"{url}: Failed - {e}")

check("http://localhost:8000/health")
check("http://127.0.0.1:8000/health")
