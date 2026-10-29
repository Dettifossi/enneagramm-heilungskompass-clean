# CLAUDE.md — Enneagramm-Heilungskompass

Diese Datei enthält die **app-kritischen** Regeln — Fehler hier machen die Live-App für Nutzer sichtbar kaputt (verschwundener Content, kaputtes Layout, unauffindbare Suche). Reine Qualitäts-/Stilregeln für Porträt-Inhalte liegen in `.claude/rules/` und werden automatisch mitgeladen:

@.claude/rules/lebensmusterkompass.md
@.claude/rules/portraet-qualitaet.md
@.claude/rules/sprache-stil.md
@.claude/rules/wegweiser.md

## 1. Sparsamer Umgang mit Dateizugriffen

- Lies niemals eine komplette Datei vollständig ein, wenn nur ein kleiner Abschnitt relevant ist. Nutze gezielte Suche (grep, Zeilenbereiche) statt vollständiger Dateilektüre.
- Bei `en/bundle.js` und `bundle.js` (beide sehr groß): für Prüfungen/Verifikation bevorzugt `grep -n`/`sed -n 'X,Yp'` statt des Read-Tools verwenden — spart bei jeder Prüfung mehrere tausend Tokens.
- Shell-Befehle laufen über den `rtk`-Hook (siehe `~/.claude/RTK.md`), das ist bereits automatisch tokenoptimiert — keine zusätzliche Aktion nötig, nur `rtk gain` bei Bedarf zur Kontrolle nutzen.
- Die Projektstruktur ist modularisiert:
  - `data/subtypes/` – ein File pro Subtyp (27 Dateien, z. B. `se1.js`, `so4.js`, `sx9.js`), zusammengeführt über `data/subtypes/index.js`
  - `data/knowledge/` – ein File pro Subtyp mit ausführlichem Wissensinhalt (27 Dateien), zusammengeführt über `data/knowledge/index.js`
- Bei Anfragen zu einem bestimmten Subtyp (z. B. „SE1"): **ausschließlich** die jeweilige Einzeldatei in `data/subtypes/` bzw. `data/knowledge/` öffnen und bearbeiten. `index.js`-Dateien und andere Subtyp-Dateien nicht anfassen, außer ausdrücklich verlangt.
- Neue Inhalte zu einem Subtyp gehören in die jeweilige Einzeldatei — **niemals** zurück in eine zentrale Sammeldatei wie `de.js`.

## 1a. Cache-Busting — Pflichtschritt nach jeder Änderung an bundle.js/en/bundle.js/changelog.js

**Kritisch:** `index.html` und `en/index.html` laden `bundle.js` und `data/changelog.js` mit einer Versions-Query (`?v=inhalt-vXXXX` bzw. `?v=NNN`). Diese Versionsnummer wird von Browsern (und dem GitHub-Pages-CDN) als Cache-Schlüssel benutzt — **ohne Erhöhung bleibt für wiederkehrende Besucher die alte, gecachte Version sichtbar**, obwohl der Inhalt bereits committed und deployt ist. Genau das ist bereits einmal passiert (neues Porträt unsichtbar trotz erfolgreichem Push).

Nach **jeder** inhaltlichen Änderung an `bundle.js`, `en/bundle.js` oder `data/changelog.js`, bevor committed wird:
1. In `index.html`: `bundle.js?v=inhalt-vXXXX` hochzählen, `data/changelog.js?v=NNN` hochzählen.
2. In `en/index.html`: dieselben zwei Versionsnummern (eigener Zähler) hochzählen.
3. In `sw.js`: `SW_VERSION` und `BUNDLE_VERSION` hochzählen (löst den iOS-Auto-Reload-Mechanismus aus). **Bei Änderungen an `en/bundle.js` zusätzlich in `en/sw.js`** dieselben zwei Zähler hochzählen — ein eigener, unabhängiger Service Worker für die EN-Seite, der leicht vergessen wird, weil er nicht im selben Atemzug wie `sw.js` genannt wird (er blieb dadurch bereits einmal von `v185`/`v972` bis weit über `v2000` hinweg unverändert stehen, während `en/index.html` längst neue Inhalte auslieferte — Auto-Reload für EN-Nutzer griff dadurch praktisch nie).
4. **Bei jeder Änderung an `data/register.js`** zusätzlich den Versions-Query im Import-Statement hochzählen: `import { registerEntries, registerEntriesEN } from "./data/register.js?v=NN";` in `bundle.js` **und** die analoge Zeile (`../data/register.js?v=NN`) in `en/bundle.js` — beide Zähler synchron hochzählen. Sonst bleibt `data/register.js` für wiederkehrende Besucher unbemerkt gecacht, obwohl `bundle.js` selbst längst neu geladen wird (der `?v=1`-Query in `bundle.js` blieb so von Projektbeginn an bis 2026-09-02 unverändert stehen — dadurch fehlten neue Registereinträge z. B. bei der Suche nach „Mohammed" trotz vorhandenem Porträt und korrektem Wiring).

Dieser Schritt ist **nicht** Teil des automatisierten Post-Commit-Hooks (der kümmert sich nur um `app.js`-Sync und die Wegweiser-Wissensbasis) — er muss aktiv bei jedem Content-Commit mit erledigt werden.

### bundle.js ist ein ES-Modul — Portrait-Seitenfunktionen liegen in data/*-de/ (seit 31.08.2026)

`bundle.js` war auf 16,4 MB angewachsen und führte auf dem Handy zu Safaris „Es ist wiederholt ein Problem aufgetreten"-Absturzmeldung (WebKit-Speicherdruck) bei Seiten mit vielen Karten (z. B. „Berühmte Persönlichkeiten"). Der vorherige `bundle-parts/`-Workaround (16-fache Zerlegung in sequenzielle `<script>`-Tags) wurde durch eine echte Modularisierung ersetzt: `bundle.js` ist jetzt ein ES-Modul (`<script type="module">` in `index.html`), und die drei größten Funktionsgruppen wurden ausgelagert:
- **Berühmte Persönlichkeiten:** `data/beruehmte-de/teil1.js` … `teil18.js`
- **Kriminalpsychologie:** `data/kriminal-de/teil1.js` … `teil4.js`
- **Krankheitsporträts:** `data/krankheitsportraets-de/teil1.js` … `teil6.js`

Jede dieser Dateien exportiert eine Handvoll `...PortraitPage()`-Funktionen. Die gemeinsam genutzten Helfer (`shell`, `pageHeader`, `relatedLinks`, `bookTip`, `tierAvatarTop`, `tierAvatarLeft`, `animalResearcherMatchBlock`) holt die Datei in der ersten Zeile aus `window.__kh` (`const { … } = window.__kh;`), das `bundle.js` am Modulende setzt. Ein früherer `import … from "../../bundle.js"` hat `bundle.js` ein zweites Mal geladen und ausgeführt (doppelter Download, doppelte Auswertung) und wurde deshalb ersetzt.

**Lazy Loading (seit 20.10.2026):** `bundle.js` und `en/bundle.js` importieren die Teil-Dateien nicht mehr statisch. Stattdessen steht dort pro Funktion eine Platzhalter-Zeile `const xyzPortraitPage = () => _lazyPage("./data/beruehmte-de/teilN.js", "xyzPortraitPage");`. Beim ersten Aufruf einer Route lädt der Browser nur die zugehörige Teil-Datei (mit der `?v=…`-Nummer von `bundle.js`) und zeichnet die Seite neu. Der Start lädt dadurch rund 10 MB statt rund 40 MB JavaScript. **Neue Porträtfunktion = neue Platzhalter-Zeile** (statt der Funktion in eine `import { … }`-Zeile einzutragen) plus der Eintrag in der Route-Map.

**Große Datenblöcke (seit 20.10.2026):** Die größten Konstanten liegen nicht mehr in `bundle.js`/`en/bundle.js`, sondern in `data/lazy/*.js` (EN: `en/data/lazy/*.js`; bei englischen Konstanten, die schon aus `data/*.js` importiert wurden, bleibt die bestehende Datei): `PSYCHOSOMATIK_KRANKHEITEN`, `BEZIEHUNGS_PAARUNGEN`, `KOMMUNIKATIONSGUIDE`, `SITUATIONSKOMPASS`, `TIERLEXIKON`, `LEBENSMUSTERKOMPASS`, `LAENDER_REGIONEN`. Die globale Suche braucht `LAENDER_REGIONEN` für Länder-Treffer und lädt ihn beim ersten Suchen im Hintergrund nach (`_prefetchData`), danach aktualisiert sie die Ergebnisse. In der Bündel-Datei steht nur noch `let NAME = null;` plus ein Eintrag in `_LAZY_DATA`. **Jede Seitenfunktion, die eine dieser Konstanten benutzt, muss mit `{ const _w = _needData("<key>"); if (_w) return _w; }` beginnen**, sonst greift sie auf `null` zu. Inhaltliche Änderungen an diesen Daten in der jeweiligen `data/lazy/…`-Datei machen (nicht in `bundle.js`). Der Wegweiser-Extraktor `extract-psychosomatik.mjs` (und die EN-Variante) liest die Psychosomatik-Daten aus `data/lazy/psychosomatik.js`.

**Bearbeitungsworkflow:** Bei einer neuen oder geänderten Berühmte-Persönlichkeiten-/Kriminalpsychologie-/Krankheitsporträt-Funktion die passende `teilN.js`-Datei in der jeweiligen `data/*-de/`-Mappe bearbeiten, **nicht** `bundle.js` selbst (dort stehen diese Funktionen nicht mehr). Alle Array-Einträge (`BERUEHMT_PORTRAITS`, `KRIMINAL_PORTRAITS`, `KRANKHEITS_PORTRAITS`), die Route-Map, `LEBENSMUSTERKOMPASS`, `KRANKHEITSMUSTERKOMPASS` und alle anderen Seiten (Astrologie, Bibel, Wissen, Tools, Schaubilder) bleiben unverändert in `bundle.js`. Bei einer komplett neuen Person in einer der drei Gruppen: neue Funktion in eine der bestehenden `teilN.js`-Dateien einfügen (z. B. die kürzeste) statt eine neue Datei anzulegen, außer eine `teilN.js` wird zu groß.

Nach jeder Änderung `node --input-type=module --check < bundle.js` sowie für jede geänderte `data/*-de/teilN.js` denselben Check ausführen (normales `node --check` reicht nicht, weil es `import`/`export` nicht kennt). `app.js` bleibt weiterhin eine reine `cp bundle.js app.js`-Kopie für die Wegweiser-Extraktionsskripte — die extrahierten Portrait-Arrays selbst liegen unverändert in `bundle.js`/`app.js`, nur die Rendering-Funktionen sind ausgelagert.

`en/bundle.js` ist von dieser Aufteilung **nicht** betroffen — es bleibt weiterhin eine einzelne, große ES-Modul-Datei (12,3 MB) mit `import`-Statements nur für Rohdaten aus `data/*.js`, nicht für Seitenfunktionen. Sollte die englische Version ebenfalls Safari-Speicherprobleme zeigen, wäre eine analoge Aufteilung (`data/beruehmte-en/`, `data/kriminal-en/`, `data/krankheitsportraets-en/`) das naheliegende nächste Projekt.

## 1b. z-index-Konvention — Pflichtprüfung bei jedem neuen Overlay/Modal

**Kritisch, bereits einmal real aufgetreten (27.09.2026):** Der fixierte EN/DE-Sprachumschalter oben rechts auf der Startseite hatte `z-index:999`. Das Onboarding-Willkommens-Overlay, das jedem Erstbesucher gezeigt wird, hatte `z-index:9999`. Dadurch lag der Umschalter unsichtbar *unter* dem Overlay — Klicks landeten auf dem Overlay-Hintergrund statt auf dem Link, der Sprachwechsel funktionierte für Erstbesucher schlicht nicht, ohne dass ein JS-Fehler sichtbar wurde (stiller UI-Bug, nur per `document.elementFromPoint()` diagnostizierbar).

**Feste Regel ab jetzt:**
- Der Sprachumschalter (beide Instanzen: die fixierte Start-Seiten-Badge `position:fixed;top:0.6rem;right:0.75rem` in `bundle.js`/`en/bundle.js` **und** die `.lang-switcher`-Klasse in `styles.css`) reserviert `z-index:10000` als **absolute Obergrenze der gesamten App**. Kein anderes Element darf diesen Wert erreichen oder überschreiten.
- Alle Overlays, Modals, Popups und Onboarding-Screens bleiben bei `z-index:9999` oder niedriger.
- **Vor jedem Hinzufügen eines neuen Vollbild-Overlays** (`position:fixed;inset:0` o. ä. mit hohem z-index) prüfen: `grep -oE "z-index:\s*[0-9]+" bundle.js styles.css en/bundle.js | sed -E 's/.*z-index:\s*//' | sort -n | uniq -c` — der neue Wert muss unter 10000 bleiben, und wenn ein bestehendes Overlay near 9999 erweitert wird, zur Sicherheit erneut mit `document.elementFromPoint()` auf den Sprachumschalter-Koordinaten testen (Beispiel im Commit vom 27.09.2026), nicht nur den Code lesen.
- Dieser Test lässt sich schnell reproduzieren: `localStorage.clear(); location.reload();` in der Konsole erzwingt das Onboarding-Overlay für einen frischen Erstbesucher-Zustand.

## 2. Antwortverhalten

- Knapp und konkret. Keine Wiederholungen, keine ausführlichen Zusammenfassungen, außer ausdrücklich gewünscht.
- Bei Code-Änderungen niemals den vollständigen Dateiinhalt zurückgeben — nur den geänderten Ausschnitt (Diff-Stil).
- Verifikationsschritte (Syntax-Check, Zeilenzahl-Abgleich) knapp im Terminal ausgeben lassen, nicht das Ergebnis nochmal im Chat ausformulieren.
- Bei mehrdeutigen Anfragen (z. B. unklarer Dateipfad): kurz nachfragen, statt das gesamte Verzeichnis zu durchsuchen.

## 3. Großdatei-Regel

- Wächst eine Datei über ~50.000 Token: aktiv darauf hinweisen und Aufteilung nach demselben Muster vorschlagen (Einzeldateien + Index), bevor weitergearbeitet wird.

## 4. Tests

- Nach strukturellen Änderungen (neue Dateien, Importe): kurzer lokaler Funktionstest (`python3 -m http.server 4174`), um sicherzustellen, dass die App weiterhin lädt.
- Bei reinen Textänderungen: kein Test nötig.

## Technik

- Statische SPA: HTML/CSS/JS, kein Framework, kein Build.
- Routen u. a.: `#start`, `#knowledge`, `#subtype/<code>` (z. B. `#subtype/SE1`).
- Lokal starten: `python3 -m http.server 4174`.
- CSS-Variablen: `--copper`, `--paper`, `--ink`, `--muted`, `--line`.
- Neue Inhalte in `data/subtypes/` oder `data/knowledge/`, NIE zurück in `de.js`.

## Register & Suchfunktion — Pflichtschritt bei jedem neuen Inhalt

**Suche = Register.** Beide greifen auf `data/register.js` zurück (`registerEntries`-Array).

**Jede neue Seite / jedes neue Portrait MUSS sofort in `data/register.js` eingetragen werden**, bevor committed wird. Sonst ist der Inhalt weder in der Suchfunktion noch im alphabetischen Register auffindbar.

Eintrag-Format:
```js
{ term: "Anzeigename",  route: "hash-route-ohne-#",  description: "Kurzbeschreibung ~80 Zeichen" },
```

- **Portraits (beruehmte-*):** `description` beginnt mit `"Portrait: SUBTYPCODE · Subtyp · Kurzinfo"`
- **Kriminalportraits:** Eintrag unter `// Kriminalpsychologie – fehlende Portraits`; zusätzlich prüfen ob `KRIMINAL_PORTRAITS`-Array in bundle.js den Eintrag hat (diese haben ein eigenes Such-Rendering)
- **Schaubilder:** `description` beginnt mit `"Schaubild: …"`
- **Astrologie-Portraits:** `description` beginnt mit `"Astrologie-Portrait: …"`

**Kontrollbefehl** (vor dem Commit ausführen, um Lücken zu finden):
```bash
python3 -c "
import re
t=open('bundle.js',encoding='utf-8').read()
rr=set(re.findall(r'\"([a-z][a-z0-9\-/]+)\"\s*:\s*\w+Page\b',t))
rf=open('data/register.js',encoding='utf-8').read()
rg=set(re.findall(r'route\s*:\s*\"([^\"]+)\"',rf))
ex={'beruehmte-persoenlichkeiten','favoriten','beruehmte-obama','enneagramm-memory-1','enneagramm-memory-2','enneagramm-memory-3','gemerkte-impulse','wegweiser-premium','intern-luecken'}
miss=[r for r in sorted(rr-rg) if r not in ex]
print(f'Fehlend im Register: {len(miss)}')
[print(\" \",r) for r in miss]
"
```

## DE/EN-Übersetzungsparität — Pflichtschritt bei jedem neuen Porträt

**Jedes neue Porträt (Berühmte Persönlichkeiten, Krankheitsporträts, Kriminalpsychologie) MUSS zeitnah auch ins Englische übersetzt und in `en/bundle.js` verdrahtet werden** — nicht „irgendwann nachziehen", sondern im selben oder im unmittelbar folgenden Arbeitsschritt. Bei Krankheitsporträts und Kriminalpsychologie wurde das bislang zuverlässig eingehalten; bei „Berühmte Persönlichkeiten" ist genau das über Monate nicht passiert und erst am 2026-10-08 auf Hinweis des Nutzers nachträglich aufgefallen (6 fehlende EN-Porträts) — ein Rückstand, der unbemerkt wuchs, weil es dafür anders als beim Register keinen festen Kontrollbefehl gab.

**Konkret bei jedem neuen `beruehmte-*`/`krankheitsportraets-*`/`kriminalpsychologie-*`-Porträt vor dem Commit:**
1. Englische Übersetzung schreiben (gleiche Struktur: `shell()`, `pageHeader("Famous Personalities")`, `bookTip`-Titel/Teaser wie unten, `relatedLinks` mit EN-Labels).
2. In die passende `en/data/*-en/teilN.js`-Datei einfügen (gleiches Prinzip wie bei DE: kürzeste Datei bevorzugen), Import + Routen-Map-Eintrag in `en/bundle.js` ergänzen.
3. Bei Berühmte Persönlichkeiten zusätzlich den `BERUEHMT_PORTRAITS`-Array-Eintrag in `en/bundle.js` ergänzen (eigenes Array, nicht geteilt mit `bundle.js`).
4. `registerEntriesEN` in `data/register.js` ergänzen (eigener Abschnitt, siehe oben).

Feststehende EN-Formulierungen für `bookTip`, damit sie konsistent bleiben:
```js
${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 personalities, 27 inner logics &ndash; the handbook for precise self- and other-awareness in the Enneagram.", "Die 27 Persönlichkeiten des Enneagramms")}
```

**Kontrollbefehl** (vor dem Commit ausführen, um DE-Porträts ohne EN-Pendant zu finden):
```bash
for prefix in "beruehmte-" "krankheitsportraets-" "kriminalpsychologie-"; do
  comm -23 <(grep -oE "\"$prefix[a-z0-9-]+\":" bundle.js | sort -u) \
           <(grep -oE "\"$prefix[a-z0-9-]+\":" en/bundle.js | sort -u) \
    | sed "s/^/Fehlt in EN ($prefix): /"
done
```
Jeder ausgegebene Treffer ist ein Rückstand und muss vor Abschluss der Arbeit an diesem Porträt behoben werden — nicht erst, wenn der Nutzer danach fragt.

## Schaubild-Bilder: Inhalt immer auch als englischer Text (Nutzerwunsch 29.10.2026)

Schaubilder liegen oft nur als **deutsche Bilder** vor; englische Bilder will der Nutzer vorerst nicht herstellen. Damit englischsprachige Nutzer nicht benachteiligt sind, muss jede englische Seite mit einem Schaubild-Bild **den Inhalt des Bildes (große Überschriften, Texte zu den neun Typen, Gruppen/Triaden) zusätzlich als englischen Text** enthalten. Bei neuen Schaubild-Seiten sofort mitliefern; bei der Humor-Seite stehen unter den Kacheln englische Übersetzungen der Sprechblasen. Prüfung bestehender Seiten: EN-Seitenfunktion lesen, Bild ansehen (liegt unter `assets/schaubilder/…`) und vergleichen. Stand 29.10.2026: **ergänzt** `ego-persoenlichkeit`, `ego-fixierungen`, `gifte-des-geistes`, `leidenschaft-und-wunde`; **geprüft, in Ordnung** `schutzdefizite`, `bewaeltigungsstrategie`, `60-sekunden-scan`, `nicht-verbundene-typen`, `prinzipien` (reines Bild), `identifikation` (Zitatbild), `wann-entsteht-der-typ`. Außerdem alle deutschen Reste (Überschriften, Bild-`alt`-Texte) auf den EN-Schaubild-Seiten übersetzt. **Noch zu prüfen:** edelsteine, verwechslungen, naehe, heilungsweg, horney-triaden, tritypen, prinzipien-verwandte, schmerzschutz, beziehungen-schaubild, enneagramm-meets-jin-shin-jyutsu, gaslighting-enneagramm, bedeutung-27-subtypen, homoeopathie-songs, tierentsprechungen, verantwortung, schaubilder-als-spiegel.

## NEU-Kennzeichnung (30 Tage) — automatisch über den Changelog

Menüpunkte (Wissen, Praxis, Schaubilder …) erhalten seit 04.10.2026 automatisch das Badge **NEU** (und der Reiter einen kleinen Punkt), solange ein Changelog-Eintrag mit `route: "<route-des-Menüpunkts>"` jünger als 30 Tage ist **und sein Text mit »Neu…« beginnt** (z. B. »Neuer Wissensartikel: …«, »Neues Schaubild: …«, »Neu: …«). Bei jeder neuen Seite/Rubrik deshalb den Changelog-Eintrag so formulieren und die `route` setzen — mehr ist nicht nötig. Für Porträts gilt weiterhin das Feld `added:` im Array-Eintrag. `SCHAUBILDER_NEU` bleibt nur als manuelle Übersteuerung.

## Blickqualitäten-Atlas — Pflichtschritt bei jedem neuen Porträt

Der Blickqualitäten-Atlas (`blickqualitaetenAtlasPage()` in `bundle.js`/`en/bundle.js`) zieht seine Porträtkacheln live aus `BERUEHMT_PORTRAITS`/`KRANKHEITS_PORTRAITS`/`KRIMINAL_PORTRAITS`; das Bild kommt aus `BQA_IMG_MAP` (Route → Bildname, URL `…/assets/portraits/<Bildname>-portrait.jpg`). Fehlt der Eintrag, bleibt die Kachel eine leere, farbige Fläche. Für Routen mit Präfix `beruehmte-` gibt es seit 04.10.2026 einen automatischen Fallback (Route = Bildname). **Bei Krankheits- und Kriminalporträts ohne Berühmte-Persönlichkeiten-Porträt derselben Person** sowie bei abweichenden Bildnamen den Eintrag in `BQA_IMG_MAP` **in beiden Bundles** ergänzen (bei Krankheitsporträts zu einer Person, die schon unter Berühmten steht: auf deren Bildnamen zeigen, z. B. `"krankheitsportraets-x": "beruehmte-x"`). Das Porträtbild selbst muss unter diesem Namen auf R2 liegen. Neue Porträtbilder gehören **nur auf R2**, nicht ins Repo (Speicherplatz: `.git` liegt bei ~0,7 GB, jedes Bild kostet dauerhaft ~1,5 MB; GitHub Pages erlaubt max. 1 GB veröffentlichte Seite). Ausnahme nur auf ausdrückliche Anweisung. Der Atlas hat einen lokalen Fallback (`/assets/portraits/…`) für Bilder, die im Repo liegen, aber das ist ein Notbehelf.

## Kurzfilme (Videos zu Artikeln und Schaubildern)

Seit 29.10.2026 gibt es Kurzfilme (45–60 s, mit Song des Nutzers, DE+EN) unter ausgewählten Artikeln: Praxistipp »Rote Pille, blauer Avatar«, Schaubild »Montagmorgen-Gedanken«, Schaubild »Weihnachtswünsche«. **Die ganze Vorgehensweise steht im Skill `.claude/skills/neues-video/SKILL.md`** (Themenwahl, Song, Takt-Synchronisation, Rendern per Chrome+ffmpeg, Fassungen, R2-Upload, Videoblock + Teilen-Knopf in der App, Homepage-Abschnitt, Lehren). Vorlagen und Skripte liegen in `.claude/skills/neues-video/vorlagen/`.

Kurzregeln: Videodateien **nur auf R2** (`kompass-assets/assets/videos/`), nie ins Repo; DE und EN immer zusammen; nur eigene Grafik, keine Filmausschnitte; der Nutzer lädt selbst bei YouTube hoch und schickt die Links (Eintrag in `_VS.yt`); in der App die Fassung **ohne** Werbeblock, zum Teilen die Fassung **mit** Link; Dateien für den Nutzer mit `open -R` im Finder zeigen; insgesamt nur etwa 10 Themen.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
