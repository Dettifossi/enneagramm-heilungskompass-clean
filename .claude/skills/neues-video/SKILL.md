---
name: neues-video
description: Use when making a new short film (Kurzfilm/Video/Reel/Short) for the Enneagramm-Kompass from an article, Schaubild or Praxistipp, in German and English. Gives the whole workflow - topic choice, song, beat sync, scenes, render, versions, R2 upload, in-app video block with Teilen-Knopf, homepage section. Trigger phrases - 'nächstes Video', 'Video zu <Thema>', 'Kurzfilm', 'Reel', 'Short', 'Werbevideo'.
---

# Neues Kurzfilm-Projekt (DE + EN)

Stand: 29.10.2026. Entstanden: **Rote Pille, blauer Avatar** (Praxistipp), **Montagmorgen-Gedanken** (Schaubild), **Weihnachten: Die Maske darf fallen** (Schaubild Weihnachtswünsche), **Humor der 9 Typen** (Elefanten-Kacheln, Song »Bourbon Street Bounce«), **Geschenkideen** (Schaubild, Song »Christmas«, zweite Version), **Sprachstile der 9 Typen** (Schaubild, Song »Café Conversations«). Die Vorlagen liegen in `vorlagen/` neben dieser Datei. Der Nutzer hat an dieser Arbeit viel Freude und will insgesamt etwa **10 Themen** (nicht endlos).

## 0. Grundsätze (vom Nutzer so gewünscht)
- **Themenwahl:** Alltagssituation, die jeder kennt (Montagmorgen, Weihnachten, Urlaub, Arzt …), jeder Typ reagiert anders, Humor, kein Fachwort, am Ende Frage wie »Welche Stimme war Ihre?« und Hinweis auf den Kompass. Schwere Themen (Filme, Spiritualität) sind Nischen-Beiträge. Rangliste noch offen: Urlaub, beim Doktor (Songs vorhanden, Schaubild in der App ungeprüft), Kaffeearten/Sprachstile der 9 Typen.
- **Länge:** Ziel **45–55 s**, höchstens 70–80 s. Neun Typen = etwa 3,5–4,5 s pro Szene, Sätze höchstens ~10 Wörter.
- **Nur eigene Grafik.** Keine Filmausschnitte, Plakate oder fremde Bilder (Urheberrecht).
- **DE und EN immer zusammen** (EN-Texte aus der englischen Seite übernehmen, falls dort schon übersetzt; Schaubild-Bilder müssen nicht übersetzt werden, das Video zeichnet den Text selbst).
- **Musik:** Songs des Nutzers aus `~/Downloads` (Suno, Bezahl-Abo, Rechte laut Nutzer 28.10.2026 bei ihm). Hörproben schneiden (`ffmpeg -ss 15 -t 35`), nach `~/Documents/Marketing/Song-Proben…` legen und per `open -R` im Finder zeigen. **Der Nutzer wählt den Song**, ich kann Songs nicht anhören und kenne die Texte nicht (bei Songs mit Text den Textinhalt nachfragen).
- **Nichts posten.** Der Nutzer lädt selbst bei YouTube/Facebook/Instagram hoch und schickt die Links. Ich trage die Links nur ein.
- Dateien außerhalb des Repos immer mit `open -R <datei>` im Finder markieren und sagen: Doppelklick spielt im QuickTime Player **mit Ton** (die Chat-Vorschau spielt Videos ohne Ton).
- Videos **nur auf R2**, nie ins Repo (Homepage-Repo `.git` hat schon 1,9 GB).

## 1. Ablauf
1. **Thema + Inhalt**: Quelltext lesen (Seite in `bundle.js`/`en/bundle.js` bzw. `data/praxistipps-*/`). Fast wörtlich übernehmen, nur kürzen.
2. **Song** aussuchen lassen (Abschnitt 0). `ffmpeg -t 90 -i SONG -ac 1 -ar 11025 song.wav`, dann `python3 vorlagen/beats.py song.wav` (**ohne** `-I`, braucht numpy) → `beats.json` + `peaks.js`. BPM-Kandidaten prüfen (Halb-/Doppeltempo!). Szenenlänge in **Schlägen** festlegen (B = 60/BPM, P = Phase der ersten Betonung); Schnitte auf P + n·B legen.
3. **Arbeitsordner** im Scratchpad: Vorlage kopieren (`vorlagen/anim_*.html` → `anim.html`, dazu `cap.mjs`, `shots.mjs`, `renderall.sh`, `peaks.js`). Das nächstliegende Vorbild wählen:
   - `anim_montagmorgen.html`: neun Typ-Szenen mit Farbfläche, Bildmotiv und Denkblase (Wort für Wort).
   - `anim_weihnachten.html`: neun Typ-Szenen mit Maske, die abfällt, dann Geschenk; Schnee, Baum, Frage-Ring.
   - `anim_rote-pille.html`: fünf Themen-Szenen (Matrix-Code, Avatar-Partikel …).
   - `anim_geschenke.html`: neun Szenen mit **Geschenkpaket** (fällt herein, wackelt, Deckel fliegt ab, Sterne), danach Geschenkname und Begründung; Paket-Raster 3×3 für Einstieg und Schlussfrage; Schnee.
   - `anim_sprachstile.html`: neun Szenen mit **Sprechblase**, deren Satz je Typ in eigener Schrift und Bewegung erscheint (Predigt streng, Klagelied als Schreibschrift, Vortrag getippt …), Symbol-Plakette und Textfeld; Mini-Sprechblasen-Raster für Einstieg und Schlussfrage.
   - `anim_humor.html`: neun Szenen mit **eigenen Bildkacheln** (Polaroid-Karten, gleiten abwechselnd von links/rechts herein), Mosaik 3×3 für Einstieg und Schlussfrage; Kacheln als `t1.jpg`…`t9.jpg` im Arbeitsordner (liegen in `~/Documents/Marketing/Video-Werkstatt/humor-kacheln/`, Typ 1 und Typ 9 in korrigierter Fassung als `humor-typ-1-v2.jpg`/`humor-typ-9-v2.jpg` auf R2). Bei Bildern mit deutscher Beschriftung im EN-Video die englische Übersetzung als Bildunterschrift setzen.
   Texte (DE/EN-Objekte), Motive und die Zeitachse `S[]` anpassen. Die Seite ist eine reine Funktion `draw(t)` (Canvas 2D). Modi per URL-Hash: kein Hash = 1080×1920 DE, `#land` = 1920×1080 DE, `#en` = Hochformat EN, `#land-en`.
4. **App-Bildschirme für den Werbeblock** (Handy-Mockup): lokaler Server `python3 -m http.server 4174` im Repo-Root, dann `node shots.mjs` bzw. `node shots.mjs en`; Seiten in `pages` anpassen. Das Skript setzt `kompass:onboarding-done` und `enneagramm-kompass:tier=heilwissen` und entfernt das »Impuls für heute«-Fenster. Ergebnis `app_<name>.jpg` / `app_<name>_en.jpg`.
5. **Einzelbilder prüfen**, bevor alles gerendert wird: ein paar Frames mit `node cap.mjs <f> <f+1> <Port> port` rendern und als Kontaktbogen ansehen (ffmpeg `hstack/xstack`). Typische Fehler: Text läuft über den Rand, Überlappungen, Variable zu spät definiert (JS-Fehler lässt das Bild leer, nur Hintergrund sichtbar).
6. **Rendern**: `bash renderall.sh` im Hintergrund (4 Modi × 6 Chrome-Prozesse, ca. 1–2 min je Modus), Ergebnis in `frames/`, `framesL/`, `framesE/`, `framesLE/` (25 B/s). `cap.mjs` wartet auf `window.imgsReady`.
7. **Fassungen** (siehe `vorlagen/encode.sh`):
   - **Werbefassung** 9:16 und 16:9, DE+EN, mit App-Block und Song → `~/Documents/Marketing/<Name>_DE_9x16.mp4` usw. (YouTube/Facebook/Instagram; **Querformat für YouTube**, siehe Lehren).
   - **App-Fassung**: nur bis zum Ende der Schlussfrage (ohne App-Block), 720×1280, crf 27, ca. 3–5 MB, plus Poster-Bild.
   - **Teilen-Fassung**: Werbefassung 9:16 verkleinert (720×1280, crf 28, ca. 4–6 MB).
   - **Homepage-Fassung** (nur wenn gewünscht): Querformat ohne App-Block, 1280×720, crf 26, plus Poster.
8. **R2-Upload**: `npx wrangler r2 object put kompass-assets/assets/videos/<datei> --file <pfad> --content-type video/mp4 --remote` (Poster `image/jpeg`). Öffentliche Basis: `https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/videos/`. Danach per `curl -sI` prüfen. Pro Thema ca. 30–40 MB (R2 Gratis-Grenze 10 GB, aktuell ~1,2 GB).
9. **In die App einbauen** (DE+EN):
   - Videoblock unter dem Artikel (HTML-Vorbild: `data/praxistipps-de/kino-erwachen.js` bzw. `montagmorgenGedanken9TypenPage` in `bundle.js`): Überschrift, ein Satz, `<video controls playsinline preload="none" poster=… >`, Musikzeile (»Musik: ›…‹ von Detlef Rathmer«), darunter der **Teilen-Knopf** `<button data-share-video="<key>">`.
   - **Teilen-Knopf**: Objekt `_VS` am Anfang von `bundle.js` **und** `en/bundle.js` um einen Eintrag ergänzen (`file` = Teilen-Fassung auf R2, `name`, `title`, `text` mit Link `https://kompass.verlagshausrathmer.com` bzw. `/en/`, `yt` = YouTube-Link des **Querformats**, solange leer: R2-Link). Funktion `_vsClick` bleibt unverändert (zwei Tipps: laden → »Jetzt senden« → Teilen-Menü mit Datei; sonst Link teilen/kopieren).
   - **R2-CORS** ist einmalig gesetzt (nur GET/HEAD, nur `https://kompass.verlagshausrathmer.com`); ohne CORS kann der Knopf die Datei nicht laden. Nicht erweitern, ohne den Nutzer zu fragen.
   - `data/changelog.js`: eigener Eintrag »Neuer Kurzfilm zu …«, `route` der Seite (Text mit »Neu…« beginnen).
   - `bash scripts/bump-cache-version.sh`, `node --input-type=module --check < bundle.js` (und en/bundle.js, geänderte `data/*.js`), lokal testen (Browser-Pane: `http://127.0.0.1:4174`, nicht `localhost`; `fetch(url,{cache:'reload'})`, Tier `heilwissen` setzen): Video lädt, Dauer/Format stimmen, Knopf wird zu »Jetzt senden«.
   - Committen und pushen (Autonomie-Regel).
10. **Homepage** (nur wenn gewünscht; Repo `Verlagshaus Homepage` in iCloud): Karten im Abschnitt `#kurzfilme` von `kompass.html` und `kompass-en.html`. Dort steht der Datenschutz-Abschnitt »Videos (Cloudflare R2)« (`datenschutz.html`, `privacy-en.html`); der Text ist Entwurf und braucht rechtliche Prüfung. **Vor dem Push dort den Nutzer fragen.**
11. **Links der Querformate** (YouTube) vom Nutzer erhalten, per `https://www.youtube.com/oembed?url=<link>&format=json` den Titel prüfen und zuordnen, in `_VS.yt` eintragen. Übersicht aller Links: Memory `reference_youtube_kurzfilme_links`.

## 2. Lehren (real aufgetreten)
- **Länge/Tempo:** Bei textlastigen Themen (Geschenkideen, Sprachstile) wünscht der Nutzer ausdrücklich ruhiges Tempo: **ca. 6,5–7 s pro Szene, Gesamtlänge ca. 70–76 s**. Das Montagmorgen-Video (4,6 s pro Szene) war dafür zu schnell. Szenen als 12–14 Takte planen.
- **Parallele Aufnahme:** Bei vielen gleichzeitigen Chrome-Prozessen kann ein Bild noch den Vorgängerstand zeigen. `cap.mjs` wartet deshalb 45 ms vor jedem Screenshot und meldet Zeichenfehler (`exceptionDetails`); nach dem Rendern immer Stichproben als Kontaktbogen prüfen (jede Szene mindestens einmal).
- **Beschriftungen prüfen:** Überschriften über Textfeldern auf Sinn prüfen (»Der Redestil« statt »Der innere Satz« kostete einen kompletten Neurender).
- **YouTube Shorts überdecken unten (~ein Viertel) und rechts** die Bildmitte (Titel, Beschreibung, Knöpfe). Unsere 9:16-Layouts sind **nicht** Shorts-sicher (Link, Schlusszeile, Denkblasen liegen unten). Deshalb Querformat bei YouTube hochladen lassen. Wer Shorts will: eigenes Layout mit Inhalt in der oberen/mittleren Zone bauen, Link-Zeile weglassen.
- Der Werbeblock (»Link in der Beschreibung ↓«) passt nur für Social Media, **nicht** in die App und nicht auf die Homepage → dort die Fassung ohne App-Block.
- Chat-Anhänge spielen ohne Ton; der Nutzer hörte zuerst nichts. Immer Finder öffnen (`open -R`).
- ffmpeg: bei Dateinamen mit typografischem Apostroph (`Dawn’s …`) und Leerzeichen alles in Anführungszeichen. Bei Schleifenvariablen nicht `d` für Verzeichnisse nehmen (kollidierte einmal).
- Canvas-Code: Konstanten **vor** erster Benutzung definieren (Temporal Dead Zone → leeres Bild).
- Nur Datei-Teilen funktioniert auf Handy (Web Share API mit Dateien); Desktop fällt auf den Link zurück.
- Ich kann die Songs nicht hören, nur Tempo/Betonungen messen; beim Song-Text immer den Nutzer fragen.
- Namen im Video: Subtyp-/Typ-Namen wie in der App (Perfektionist, Helfer …); EN-Texte wie auf der englischen Seite.
