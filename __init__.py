import json
import os
import tempfile
from aiohttp import web
from server import PromptServer

WEB_DIRECTORY = "./js"
NODE_CLASS_MAPPINGS = {}

CONFIG_PATH = os.path.join(os.path.dirname(__file__), "config.json")
PALETTE_PATH = os.path.join(os.path.dirname(__file__), "linear_dark.json")
MAX_CONFIG_BYTES = 1_000_000

@PromptServer.instance.routes.get("/linear-theme/palette")
async def get_palette(request):
    if os.path.exists(PALETTE_PATH):
        with open(PALETTE_PATH, "r") as f:
            return web.json_response(json.load(f))
    return web.json_response({})

@PromptServer.instance.routes.get("/linear-theme/config")
async def get_config(request):
    # A corrupt config must never 500 — the frontend falls back to defaults
    try:
        if os.path.exists(CONFIG_PATH):
            with open(CONFIG_PATH, "r") as f:
                return web.json_response(json.load(f))
    except (json.JSONDecodeError, OSError):
        pass
    return web.json_response({})

@PromptServer.instance.routes.post("/linear-theme/config")
async def save_config(request):
    if request.content_length and request.content_length > MAX_CONFIG_BYTES:
        return web.json_response({"error": "config too large"}, status=413)
    try:
        data = await request.json()
    except json.JSONDecodeError:
        return web.json_response({"error": "invalid JSON"}, status=400)
    # Atomic write: temp file + os.replace so a crash mid-write never corrupts the config
    fd, tmp_path = tempfile.mkstemp(dir=os.path.dirname(CONFIG_PATH), suffix=".tmp")
    try:
        with os.fdopen(fd, "w") as f:
            json.dump(data, f, indent=2)
        os.replace(tmp_path, CONFIG_PATH)
    except OSError:
        if os.path.exists(tmp_path):
            os.remove(tmp_path)
        return web.json_response({"error": "write failed"}, status=500)
    return web.json_response({"status": "ok"})
