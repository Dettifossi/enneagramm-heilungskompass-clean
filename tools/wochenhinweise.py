#!/usr/bin/env python3
"""Erzeugt data/wochenhinweise.js: jeden Mittwoch ein App-Hinweis, jeden Freitag ein Buch-Hinweis (rotierend),
als zusätzliche Einträge in CHANGELOG (Anzeige unter "Neu" und in "Alle Updates", Link zur Bibliothek).
Quellen: verknuepfungen.json der Verlags-Homepage (Apps) und werkRegister in data/de.js (Enneagramm-Bücher).
Aufruf: python3 tools/wochenhinweise.py   (nach jedem App-Start oder neuem Buch erneut ausführen:
die neueste App steht dann am nächsten Mittwoch an erster Stelle der Rotation)."""
import json, os, re, datetime

def unesc(t):
    t = re.sub(r"\\u([0-9a-fA-F]{4})", lambda m: chr(int(m.group(1), 16)), t)
    t = re.sub(r"\\x([0-9a-fA-F]{2})", lambda m: chr(int(m.group(1), 16)), t)
    return t.replace('\\"', '"').replace("\\'", "'")

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HOME = os.path.expanduser("~/Projects/verlagshaus-rathmer-homepage/verknuepfungen.json")
V = json.load(open(HOME, encoding="utf8"))
# Erscheinungsdatum neuer Apps (für "Ganz neu erschienen"); neueste zuerst in der Rotation
NEU = {"lexikon": "2026-11-26", "zoo": "2026-11-25", "klangkompass": "2026-11-25", "fuehrung": "2026-11-16", "chrono": "2026-11-17", "meta": "2026-11-17", "code": "2026-11-17"}
apps = []
for k in V["reihenfolge_apps"]:
    p = V["produkte"].get(k)
    if not p or p.get("bald") or not (p.get("kurz") or p.get("text")):
        continue
    H = "https://www.verlagshausrathmer.com/"
    ab = lambda h: h if str(h).startswith("http") else H + str(h)
    apps.append({"k": k, "h": ab(p.get("href", "")), "he": ab(p.get("href_en") or p.get("href", "")), "n": p["name"], "ne": p.get("name_en") or p["name"], "t": p.get("kurz") or p.get("text"), "te": p.get("kurz_en") or p.get("text_en") or p.get("kurz") or p.get("text"), "neu": NEU.get(k)})
apps.sort(key=lambda a: (a["neu"] or "0000"), reverse=True)

s = open(os.path.join(ROOT, "data/de.js"), encoding="utf8").read()
i = s.index("export const werkRegister = ["); j = s.index("\n];", i)
blk = s[i:j]
books = []
for m in re.finditer(r"\{\s*id: \"([^\"]+)\",\s*title: \"([^\"]+)\",\s*themes: \[([^\]]*)\],(.*?)\n  \},", blk, re.S):
    body = m.group(4)
    if 'category: "enneagramm"' not in body or 'status: "live"' not in body:
        continue
    title = unesc(m.group(2))
    th = [unesc(x[1:-1]) for x in re.findall(r'"(?:[^"\\]|\\.)*"', m.group(3))]
    lk = re.search(r'link:\s*"([^"]+)"', body)
    books.append({"id": m.group(1), "t": title, "th": th, "h": lk.group(1) if lk else ""})
books.sort(key=lambda b: b["id"])
today = datetime.date.today()
# erster Mittwoch nach heute = Beginn der Rotation
base = today + datetime.timedelta(days=(2 - today.weekday()) % 7 or 7) if today.weekday() != 2 else today
js = """// Erzeugt von tools/wochenhinweise.py (%s). Jeden Mittwoch ein App-Hinweis, jeden Freitag ein Buch-Hinweis, rotierend.
// Die Einträge erscheinen in CHANGELOG (Neu / Alle Updates) und führen in die Bibliothek.
(function () {
  if (typeof CHANGELOG === "undefined") return;
  var APPS = %s, BOOKS = %s, BASE = Date.UTC(%d, %d, %d), DAY = 86400000;
  var now = new Date(), today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  function iso(t) { var d = new Date(t); return d.getUTCFullYear() + "-" + ("0" + (d.getUTCMonth() + 1)).slice(-2) + "-" + ("0" + d.getUTCDate()).slice(-2); }
  for (var t = today; t >= today - 56 * DAY; t -= DAY) {
    var dow = new Date(t).getUTCDay(), wk = Math.floor((t - BASE) / (7 * DAY));
    if (t < BASE || (dow !== 3 && dow !== 5)) continue;
    var e;
    if (dow === 3) {
      var a = APPS[wk %% APPS.length], recent = a.neu && (t - Date.parse(a.neu)) <= 28 * DAY;
      e = { version: "wh-" + iso(t), date: iso(t), route: "library", open: true, href: a.h, href_en: a.he,
        text: (recent ? "Ganz neu erschienen: " : "App-Hinweis: ") + a.n + " \\u2013 " + a.t + " In der Bibliothek unter \\u201eApps\\u201c finden Sie die Beschreibung und den Link.",
        text_en: (recent ? "Just released: " : "App note: ") + a.ne + " \\u2013 " + a.te + " In the Library under \\u201cApps\\u201d you will find the description and the link." };
    } else {
      var b = BOOKS[wk %% BOOKS.length];
      e = { version: "wh-" + iso(t), date: iso(t), route: "library", open: true, href: b.h, href_en: b.h,
        text: "Buchtipp: \\u201e" + b.t + "\\u201c \\u2013 Themen: " + b.th.join(", ") + ". Alle B\\u00fccher des Verlagshauses finden Sie in der Bibliothek.",
        text_en: "Book tip: \\u201c" + b.t + "\\u201d (German edition) \\u2013 topics: " + b.th.join(", ") + ". All books of the publishing house are in the Library." };
    }
    CHANGELOG.push(e);
  }
  CHANGELOG.sort(function (x, y) { return x.date < y.date ? 1 : x.date > y.date ? -1 : 0; });
})();
""" % (today.isoformat(), json.dumps(apps, ensure_ascii=False), json.dumps(books, ensure_ascii=False), base.year, base.month - 1, base.day)
open(os.path.join(ROOT, "data/wochenhinweise.js"), "w", encoding="utf8").write(js)
print("Apps:", len(apps), "Bücher:", len(books), "Beginn:", base)
