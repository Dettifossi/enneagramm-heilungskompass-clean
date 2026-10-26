#!/usr/bin/env python3
"""Deutsche Rechtschreib-/Grammatikprüfung für Porträtfunktionen (LanguageTool lokal).

Aufruf:  python3 ai-prototype/sprachcheck.py rjMittePortraitPage [weitere ...]
Voraussetzung: brew install languagetool. Eigennamen/Fachwörter in
ai-prototype/sprachcheck-ignore.txt eintragen (ein Wort pro Zeile).
Text in ›…‹ (fremdsprachige Zitate/Titel) wird nicht geprüft.
"""
import glob, html, json, os, re, subprocess, sys, tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IGN = os.path.join(ROOT, "ai-prototype", "sprachcheck-ignore.txt")
ignore = set()
if os.path.exists(IGN):
    ignore = {l.strip().lower() for l in open(IGN, encoding="utf-8") if l.strip() and not l.startswith("#")}

def function_text(name):
    for f in glob.glob(os.path.join(ROOT, "data", "*-de", "*.js")) + glob.glob(os.path.join(ROOT, "data", "*.js")):
        s = open(f, encoding="utf-8").read()
        m = re.search(r"export function %s\(" % re.escape(name), s)
        if not m:
            continue
        rest = s[m.end():]
        n = re.search(r"\nexport function ", rest)
        seg = rest[: n.start()] if n else rest
        paras = re.findall(r'<(?:p|li)[^>]*>(.*?)</(?:p|li)>', seg, flags=re.S)
        out = []
        for p in paras:
            p = re.sub(r"<[^>]+>", "", p)
            p = html.unescape(p)
            p = re.sub(r"›[^‹]*‹", "Titel", p)
            out.append(re.sub(r"\s+", " ", p).strip())
        return f, "\n\n".join(x for x in out if x)
    return None, None

for name in sys.argv[1:]:
    f, text = function_text(name)
    if not text:
        print(f"{name}: nicht gefunden"); continue
    with tempfile.NamedTemporaryFile("w", suffix=".txt", delete=False, encoding="utf-8") as t:
        t.write(text); path = t.name
    r = subprocess.run(["languagetool", "-l", "de-DE", "--json", path], capture_output=True, text=True)
    os.unlink(path)
    raw = r.stdout[r.stdout.find("{"):] if "{" in r.stdout else "{}"
    try:
        data = json.loads(raw)
    except Exception:
        print(r.stdout[:500], r.stderr[:500]); continue
    n = 0
    speller = {}
    print(f"== {name} ({os.path.relpath(f, ROOT)})")
    for m in data.get("matches", []):
        ctx = m["context"]["text"]; o, l = m["context"]["offset"], m["context"]["length"]
        word = ctx[o:o + l]
        if m["rule"]["id"] == "GERMAN_SPELLER_RULE":
            if word.lower() not in ignore:
                speller.setdefault(word, ", ".join(x["value"] for x in m.get("replacements", [])[:3]))
            continue
        n += 1
        sug = ", ".join(x["value"] for x in m.get("replacements", [])[:3])
        print(f"  [{m['rule']['id']}] »{word}« – {m['message']}" + (f" → {sug}" if sug else ""))
        print(f"      …{ctx.strip()}…")
    print(f"  {n} Grammatik-/Stiltreffer")
    if speller:
        print("  Unbekannte Wörter (meist Namen/Fachwörter; echte Tippfehler prüfen):")
        for w, sug in speller.items():
            print(f"    {w}" + (f"  → {sug}" if sug else ""))
