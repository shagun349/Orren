import requests
import json

url = "http://localhost:8000/track/interaction"
payload = {
    "item_id": "#SKU-9021",
    "item_name": "Test Item Verification",
    "interaction_type": "automated-test-action",
    "condition": "New",
    "value": "₹150.00"
}
headers = {
    "Content-Type": "application/json"
}

try:
    response = requests.post(url, json=payload, headers=headers)
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.text}")
except Exception as e:
    print(f"Error: {e}")
