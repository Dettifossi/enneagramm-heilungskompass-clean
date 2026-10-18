#!/usr/bin/env python3
"""PostToolUse-Hook: prüft nach Edit/Write die ES-Modul-Syntax der Inhaltsdateien.

Meldet einen Fehler als Zusatzkontext an Claude, blockiert aber nie (Exit 0).
Geprüft werden nur bundle.js, en/bundle.js und data/**/*.js bzw. en/data/**/*.js.
"""
import json, os, subprocess, sys

try:
    data = json.load(sys.stdin)
    path = (data.get("tool_input") or {}).get("file_path", "")
except Exception:
    sys.exit(0)

root = os.environ.get("CLAUDE_PROJECT_DIR") or os.getcwd()
rel = os.path.relpath(path, root) if os.path.isabs(path) else path
if not rel.endswith(".js"):
    sys.exit(0)
if rel not in ("bundle.js", "en/bundle.js") and not rel.startswith(("data/", "en/data/")):
    sys.exit(0)
full = os.path.join(root, rel)
if not os.path.isfile(full):
    sys.exit(0)

try:
    with open(full, "rb") as f:
        r = subprocess.run(["node", "--input-type=module", "--check"], stdin=f,
                           capture_output=True, text=True, timeout=60)
except Exception:
    sys.exit(0)

if r.returncode != 0:
    msg = (r.stderr or "").strip()[:700]
    print(json.dumps({"hookSpecificOutput": {
        "hookEventName": "PostToolUse",
        "additionalContext": f"SYNTAXFEHLER in {rel} nach der letzten Änderung. Sofort beheben:\n{msg}"}}))
sys.exit(0)
