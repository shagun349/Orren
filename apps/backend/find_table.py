from app.core.database import client

def check_table(name):
    try:
        print(f"Checking table '{name}'...")
        client.table(name).select("*").limit(1).execute()
        print(f"SUCCESS: Table '{name}' exists.")
        return True
    except Exception as e:
        print(f"FAILED: Table '{name}' - {e}")
        return False

tables_to_check = ["items", "item_interactions", "interactions", "tracking", "user_items", "logs", "activity"]
found = False
for t in tables_to_check:
    if check_table(t):
        found = True
        break

if not found:
    print("Could not guess the table name.")
