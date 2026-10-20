#!/usr/bin/env python3
"""
Füllt einseitige Porträt-Querverweise auf: Verweist Porträt A auf B, bekommt B
einen Rückverweis auf A in seinem letzten relatedLinks([...])-Block. Nutzt die
Erkennung aus check_reciprocal_links.py. Idempotent.

Usage:
  python3 scripts/fill_reciprocal_links.py --lang de|en [--dry-run]
"""
import re, glob, argparse, sys
sys.path.insert(0, "scripts")
import check_reciprocal_links as c

LABELS = {
    "de": {"beruehmte-": "Porträt: {n} ({s})",
           "kriminalpsychologie-": "{n} ({s}) – Kriminalpsychologie",
           "krankheitsportraets-": "{n} ({s}) – Krankheitsporträt"},
    "en": {"beruehmte-": "Portrait: {n} ({s})",
           "kriminalpsychologie-": "{n} ({s}) – criminal psychology",
           "krankheitsportraets-": "{n} ({s}) – illness portrait"},
}

def meta(bundle):
    out = {}
    for m in re.finditer(r'\{\s*route:"([a-z][a-z0-9\-]+)"([^{}]*?)\}', bundle):
        body = m.group(2)
        n = re.search(r'name:\s*"([^"]*)"', body)
        s = re.search(r'subtyp:\s*"([^"]*)"', body)
        if n and s and m.group(1).startswith(c.PORTRAIT_PREFIXES):
            out.setdefault(m.group(1), (n.group(1), s.group(1)))
    return out

def run(lang, dry):
    bundle = c.load("bundle.js" if lang == "de" else "en/bundle.js")
    globs = (["data/beruehmte-de/*.js", "data/kriminal-de/*.js", "data/krankheitsportraets-de/*.js"] if lang == "de"
             else ["en/data/beruehmte-en/*.js", "en/data/kriminal-en/*.js", "en/data/krankheitsportraets-en/*.js"])
    route2fn, fn2route = c.route_to_function_map(bundle)
    info = meta(bundle)
    files = {p: c.load(p) for g in globs for p in sorted(glob.glob(g))}
    edges = {}
    for p, text in files.items():
        for fn, body in c.extract_function_bodies(text).items():
            r = fn2route.get(fn)
            if r:
                t = c.outgoing_routes(body); t.discard(r)
                if t: edges.setdefault(r, set()).update(t)
    need = {}
    for src, ts in edges.items():
        for tgt in ts:
            if tgt in route2fn and src not in edges.get(tgt, set()):
                need.setdefault(tgt, []).append(src)
    added = skipped = 0
    for p, text in files.items():
        starts = list(re.finditer(r"export function (\w+)\(\)\s*\{", text))
        edits = []
        for i, m in enumerate(starts):
            tgt = fn2route.get(m.group(1))
            if tgt not in need: continue
            end = starts[i+1].start() if i+1 < len(starts) else len(text)
            body = text[m.end():end]
            blocks = list(re.finditer(r'relatedLinks\(\[\n(.*?)\n(\s*)\]\)', body, re.S))
            if not blocks:
                skipped += len(need[tgt]); print("kein relatedLinks:", tgt); continue
            b = blocks[-1]
            lines = b.group(1).split("\n")
            idx = None
            for k, ln in enumerate(lines):
                if re.search(r'route\s*:\s*"(%s)' % "|".join(c.PORTRAIT_PREFIXES), ln) and "persoenlichkeiten" not in ln:
                    idx = k
            if idx is None: idx = len(lines) - 1 if lines else 0
            indent = re.match(r'\s*', lines[idx]).group(0)
            new = []
            for src in sorted(need[tgt]):
                if src not in info: skipped += 1; print("keine Meta:", src); continue
                n, s = info[src]
                pre = next(x for x in LABELS[lang] if src.startswith(x))
                new.append(f'{indent}{{route:"{src}", label:"{LABELS[lang][pre].format(n=n, s=s)}"}},')
            lines[idx+1:idx+1] = new
            added += len(new)
            edits.append((m.end() + b.start(1), m.end() + b.end(1), "\n".join(lines)))
        for a, z, rep in sorted(edits, reverse=True):
            text = text[:a] + rep + text[z:]
        if edits and not dry: open(p, "w", encoding="utf-8").write(text)
    print(lang, "ergänzt:", added, "übersprungen:", skipped)

ap = argparse.ArgumentParser(); ap.add_argument("--lang", required=True); ap.add_argument("--dry-run", action="store_true")
a = ap.parse_args(); run(a.lang, a.dry_run)
