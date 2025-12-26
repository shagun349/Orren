from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel
from datetime import datetime
from ..core.database import client

router = APIRouter(prefix="/track", tags=["tracking"])

class ItemInteraction(BaseModel):
    item_id: str
    item_name: str
    interaction_type: str # This maps to 'action' in DB
    condition: str | None = None
    value: str | None = None # e.g. "₹85.00"
    
@router.post("/interaction")
async def track_interaction(request: Request, data: ItemInteraction):
    try:
        user = request.session.get("user")
        # Map user_id same as auth (hashing to fit BigInt)
        import hashlib
        user_sub = user.get("sub") or user.get("email") if user else None
        
        if user_sub:
            user_id = int(hashlib.sha256(user_sub.encode()).hexdigest(), 16) % (2**63 - 1)
        else:
            user_id = None

        # Parse item_id (remove non-numeric)
        # item_id comes like "#SKU-9021" -> 9021
        clean_item_id_str = "".join(filter(str.isdigit, data.item_id))
        db_item_id = int(clean_item_id_str) if clean_item_id_str else None

        # Parse value -> resale_value (remove currency symbol)
        # value comes like "₹85.00" -> 85.0
        clean_value_str = "".join(c for c in data.value if c.isdigit() or c == '.') if data.value else "0"
        try:
            resale_val = float(clean_value_str)
        except:
            resale_val = 0.0

        # Assuming 'items' or 'item_interactions' - user didn't specify table name for second image
        # logic implies it's the tracking table.
        # Columns from image: [user_id, item_id, timestamp, object, condition, action, carbon_value, resale_value, material]
        
        result = client.table("items").insert({
            "user_id": user_id,
            "item_id": db_item_id,
            "timestamp": datetime.utcnow().isoformat(),
            "object": data.item_name,
            "condition": data.condition,
            "action": data.interaction_type,
            "resale_value": resale_val,
            # "carbon_value": 0.0, # Not provided in frontend yet
            # "material": "Plastic", # Placeholder or inferred
        }).execute()
        return {"status": "ok", "data": result.data}
    except Exception as e:
        # Log error but don't crash the request if possible, or raise 500
        print(f"Tracking error: {e}")
        raise HTTPException(status_code=500, detail=str(e))
