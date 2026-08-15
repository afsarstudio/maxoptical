import os
import base64
import json
import urllib.request
import time

api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    print("GEMINI_API_KEY is not set.")
    exit(1)

image_dir = "public/images/max-optical/client-folder"
files = [f for f in os.listdir(image_dir) if f.endswith(".jpeg") or f.endswith(".jpg")]

url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key={api_key}"

classifications = {}
if os.path.exists("image_classifications.json"):
    try:
        with open("image_classifications.json", "r") as f:
            classifications = json.load(f)
        print(f"Loaded {len(classifications)} existing classifications.")
    except Exception as e:
        print("Could not load existing classifications:", e)

for filename in sorted(files):
    if filename in classifications:
        print(f"Skipping {filename} (already classified)")
        continue
    filepath = os.path.join(image_dir, filename)
    print(f"Classifying {filename}...")
    time.sleep(2.5)
    
    with open(filepath, "rb") as image_file:
        image_data = base64.b64encode(image_file.read()).decode("utf-8")
        
    prompt = """
    Analyze this image from Max Optical (an eyewear and eye clinic shop in Lucknow).
    First, describe briefly what is shown in the image.
    Second, classify it into exactly one of these categories:
    - "showroom_interior" (e.g. inside the shop, shelves with glasses, consulting tables, eye testing equipment, clinic counters)
    - "showroom_exterior" (e.g. outside of the shop, facade, signboards, store entrance)
    - "eyewear_closeup" (e.g. close-up photos of eyeglasses, sunglasses, cases, or branded frames)
    - "other"
    
    Respond strictly in JSON format as follows:
    {
      "description": "Short description of what is in the image",
      "category": "showroom_interior" | "showroom_exterior" | "eyewear_closeup" | "other"
    }
    """
    
    payload = {
        "contents": [{
            "parts": [
                {"text": prompt},
                {
                    "inlineData": {
                        "mimeType": "image/jpeg",
                        "data": image_data
                    }
                }
            ]
        }],
        "generationConfig": {
            "responseMimeType": "application/json"
        }
    }
    
    req = urllib.request.Request(
        url,
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json"},
        method="POST"
    )
    
    try:
        with urllib.request.urlopen(req, timeout=15) as response:
            res_data = json.loads(response.read().decode("utf-8"))
            text = res_data["candidates"][0]["content"]["parts"][0]["text"].strip()
            result = json.loads(text)
            classifications[filename] = result
            print(f"  Result: {result['category']} - {result['description']}")
            # Save incrementally after each file
            with open("image_classifications.json", "w") as f:
                json.dump(classifications, f, indent=2)
    except Exception as e:
        print(f"  Error classifying {filename}: {e}")

print("Classification completed and saved to image_classifications.json")
