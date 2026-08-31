# CLAUDE.md — Enneagramm-Heilungskompass

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
3. In `sw.js`: `SW_VERSION` und `BUNDLE_VERSION` hochzählen (löst den iOS-Auto-Reload-Mechanismus aus).

Dieser Schritt ist **nicht** Teil des automatisierten Post-Commit-Hooks (der kümmert sich nur um `app.js`-Sync und die Wegweiser-Wissensbasis) — er muss aktiv bei jedem Content-Commit mit erledigt werden.

### bundle.js ist ein ES-Modul — Portrait-Seitenfunktionen liegen in data/*-de/ (seit 31.08.2026)

`bundle.js` war auf 16,4 MB angewachsen und führte auf dem Handy zu Safaris „Es ist wiederholt ein Problem aufgetreten"-Absturzmeldung (WebKit-Speicherdruck) bei Seiten mit vielen Karten (z. B. „Berühmte Persönlichkeiten"). Der vorherige `bundle-parts/`-Workaround (16-fache Zerlegung in sequenzielle `<script>`-Tags) wurde durch eine echte Modularisierung ersetzt: `bundle.js` ist jetzt ein ES-Modul (`<script type="module">` in `index.html`), und die drei größten Funktionsgruppen wurden ausgelagert:
- **Berühmte Persönlichkeiten:** `data/beruehmte-de/teil1.js` … `teil18.js`
- **Kriminalpsychologie:** `data/kriminal-de/teil1.js` … `teil4.js`
- **Krankheitsporträts:** `data/krankheitsportraets-de/teil1.js` … `teil6.js`

Jede dieser Dateien exportiert eine Handvoll `...PortraitPage()`-Funktionen und importiert die gemeinsam genutzten Helfer (`shell`, `pageHeader`, `relatedLinks`, `bookTip`, `tierAvatarTop`, `tierAvatarLeft`, `animalResearcherMatchBlock`) direkt aus `bundle.js` zurück (`import { ... } from "../../bundle.js"`) — ein bewusster zirkulärer Import, der bei reinen `function`-Deklarationen unproblematisch ist, weil deren Bindungen schon beim Modul-Linking verfügbar sind, bevor irgendein Code sie tatsächlich aufruft.

**Bearbeitungsworkflow:** Bei einer neuen oder geänderten Berühmte-Persönlichkeiten-/Kriminalpsychologie-/Krankheitsporträt-Funktion die passende `teilN.js`-Datei in der jeweiligen `data/*-de/`-Mappe bearbeiten, **nicht** `bundle.js` selbst (dort stehen diese Funktionen nicht mehr). Alle Array-Einträge (`BERUEHMT_PORTRAITS`, `KRIMINAL_PORTRAITS`, `KRANKHEITS_PORTRAITS`), die Route-Map, `LEBENSMUSTERKOMPASS`, `KRANKHEITSMUSTERKOMPASS` und alle anderen Seiten (Astrologie, Bibel, Wissen, Tools, Schaubilder) bleiben unverändert in `bundle.js`. Bei einer komplett neuen Person in einer der drei Gruppen: neue Funktion in eine der bestehenden `teilN.js`-Dateien einfügen (z. B. die kürzeste) statt eine neue Datei anzulegen, außer eine `teilN.js` wird zu groß.

Nach jeder Änderung `node --input-type=module --check < bundle.js` sowie für jede geänderte `data/*-de/teilN.js` denselben Check ausführen (normales `node --check` reicht nicht, weil es `import`/`export` nicht kennt). `app.js` bleibt weiterhin eine reine `cp bundle.js app.js`-Kopie für die Wegweiser-Extraktionsskripte — die extrahierten Portrait-Arrays selbst liegen unverändert in `bundle.js`/`app.js`, nur die Rendering-Funktionen sind ausgelagert.

`en/bundle.js` ist von dieser Aufteilung **nicht** betroffen — es bleibt weiterhin eine einzelne, große ES-Modul-Datei (12,3 MB) mit `import`-Statements nur für Rohdaten aus `data/*.js`, nicht für Seitenfunktionen. Sollte die englische Version ebenfalls Safari-Speicherprobleme zeigen, wäre eine analoge Aufteilung (`data/beruehmte-en/`, `data/kriminal-en/`, `data/krankheitsportraets-en/`) das naheliegende nächste Projekt.

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

## Lebensmusterkompass — Pflichtschritt bei jedem neuen Porträt zu einem bereits bearbeiteten Subtyp

Die Rubrik „Lebensmusterkompass" (`LEBENSMUSTERKOMPASS`-Objekt in `bundle.js`, vor `function tritypenPage()`) enthält je Subtyp 3–5 „biografische Fingerabdrücke" mit `beschreibung` (abstraktes Muster) und `beleg` (konkrete Zitate/Fakten aus den Porträts). Stand August 2026: **alle 27 Subtypen sind ausgearbeitet.** Bei Bedarf (deutlich mehr neue Porträts zu einem Subtyp, neue erkennbare Muster) können bestehende Einträge überarbeitet/erweitert werden — das ist dann keine Pflicht mehr, sondern optionale Pflege.

**Grundsatz: Alle Porträt-Rubriken sind mit dem Lebensmusterkompass vernetzt, nicht Inseln für sich.** Berühmte Persönlichkeiten, Kriminalpsychologie und Krankheitsporträts sind drei verschiedene Blickwinkel auf dieselben 27 Subtypen — jedes neue Porträt in einer dieser drei Rubriken soll den Lebensmusterkompass des jeweiligen Subtyps mit befruchten, damit das Gesamtbild über die Zeit aussagekräftiger wird, statt dass die Rubriken nebeneinander herlaufen.

**Die Beispielporträts-Liste auf der Detailseite aktualisiert sich automatisch** (`lebensmusterkompassPortraitsForCode()` zieht live aus `BERUEHMT_PORTRAITS`/`KRIMINAL_PORTRAITS`/`KRANKHEITS_PORTRAITS`) — hier ist nichts weiter zu tun. Bei einer komplett neuen Porträt-Rubrik (falls je eine vierte hinzukommt) diese Funktion entsprechend erweitern, damit der Automatismus erhalten bleibt.

**Die `beleg`-Felder aktualisieren sich NICHT automatisch** — das ist Prosa, die inhaltlich passend ausgewählt werden muss. Deshalb: Sobald ein neues Porträt zu einem bereits bearbeiteten Subtyp entsteht, als zusätzlichen Schritt vor dem Commit prüfen, ob das neue Porträt zu einem der bestehenden Fingerabdrücke passt, und ein passendes Zitat/Fakt aus dem neuen Porträt in das jeweilige `beleg`-Feld einfügen. Ziel: Belege sollen möglichst aus **allen** vorliegenden Porträts des Subtyps gespeist sein, nicht nur aus einer Auswahl.

**Keine exakten Porträt-Zahlen in `beleg`/`beschreibung` verwenden** (z. B. nicht „einziger Fall unter den 14 SO4-Porträts"), da diese bei jedem neuen Porträt veralten würden und nicht automatisch mitgezählt werden. Stattdessen zahlenfreie, zeitlose Formulierungen wie „der einzige bekannte Fall dieser Art unter den SO4-Porträts dieses Kompasses" oder „die überwiegende Mehrheit der SX4 in diesem Kompass zeigt dieses Muster nicht". Trifft ein neues Porträt eine bestehende „einziger/einzige"-Aussage nicht mehr zu (z. B. weil ein zweiter vergleichbarer Fall dazukommt), muss die Formulierung entsprechend angepasst werden (z. B. zu „einer von zwei bekannten Fällen").

## Krankheitsmusterkompass — Pflichtschritt bei jedem neuen Krankheitsporträt zu einem bereits bearbeiteten Subtyp

Die Rubrik „Krankheitsmusterkompass" (`KRANKHEITSMUSTERKOMPASS`-Objekt in `bundle.js`, direkt nach `LEBENSMUSTERKOMPASS`) enthält je Subtyp 1–2 „Krankheitsmuster" mit `beschreibung` (statistisch beobachtete Tendenz) und `beleg` (konkrete Fälle aus den Krankheitsporträts). Stand August 2026 (Neuanlage der Rubrik): **alle 27 Subtypen sind angelegt**, aber bei vielen davon nur mit 1–3 dokumentierten Fällen — die Formulierungen sind bewusst zurückhaltend gehalten und teils explizit als „kleine Fallzahl, noch kein belastbares Muster" gekennzeichnet.

**Die Beispielporträts-Liste auf der Detailseite aktualisiert sich automatisch** (`krankheitsmusterkompassPortraitsForCode()` zieht live aus `KRANKHEITS_PORTRAITS`) — hier ist nichts weiter zu tun.

**Die `kernthema`-, `beschreibung`- und `beleg`-Felder aktualisieren sich NICHT automatisch** — das ist Prosa, die inhaltlich passend ausgewählt und bei Bedarf überarbeitet werden muss. Deshalb: Sobald ein neues Krankheitsporträt zu einem bereits bearbeiteten Subtyp entsteht, als zusätzlichen Schritt vor dem Commit prüfen:
1. **Fallzahl-Sprache aktualisieren.** Wechselt ein Subtyp durch das neue Porträt z. B. von einem auf zwei oder von zwei auf drei dokumentierte Fälle, muss die entsprechende Formulierung („bislang nur ein dokumentierter Fall", „mit bislang zwei Fällen ist noch kein belastbares Muster erkennbar" o. ä.) angepasst oder ganz entfernt werden, sobald die Fallzahl ein Muster plausibel trägt.
2. **Prüfen, ob das neue Porträt zu einem bestehenden Fingerabdruck passt**, und falls ja, einen passenden Fakt aus dem neuen Porträt in das jeweilige `beleg`-Feld einfügen.
3. **Prüfen, ob sich durch das neue Porträt ein zweites, eigenständiges Muster abzeichnet**, das einen weiteren Fingerabdruck-Eintrag rechtfertigt — insbesondere bei Subtypen, die bereits 4+ Fälle mit erkennbar unterschiedlichen Facetten versammeln.

**Keine exakten Porträt-Zahlen in `beleg`/`beschreibung` verwenden** (dieselbe Regel wie beim Lebensmusterkompass) — stattdessen zahlenfreie, zeitlose Formulierungen, die bei jedem neuen Porträt nicht sofort veralten.

**Kein Determinismus, immer die Entwarnung mitdenken.** Jede Ergänzung muss zum Grundton der Übersichtsseite passen: statistische Beobachtung innerhalb einer kleinen, nicht repräsentativen Stichprobe, keine Vorhersage, keine Checkliste. Nie Formulierungen wählen, die suggerieren, ein bestimmter Subtyp „bekomme" eine bestimmte Krankheit.

## Krankheitsporträts — Stresspunkt bei chronischer Erkrankung mitdenken

Bei der Typisierung für **Krankheitsporträts** (historische Personen, deren Krankheitsverlauf gedeutet wird) gilt eine wichtige methodische Faustregel, die sich am Fall Molière (SO7w6) gezeigt hat: Wer über Jahre oder Jahrzehnte in chronischem Stress lebt (z. B. durch eine lange verschwiegene, fortschreitende Krankheit), bewegt sich zunehmend entlang seiner **Stresslinie** in Richtung seines **Stresspunkts** — beim Typ 7 ist das die Eins, beim Typ 1 die Vier, usw. Dadurch zeigt die Person in ihren letzten Lebensjahren/-monaten vermehrt Verhaltensweisen des Stresspunkt-Typs (bei Molière: zunehmende Rigidität, Pflichterfüllung um jeden Preis, Unfähigkeit, Schwäche zuzugeben — alles Einser-Muster), **obwohl der Kerntyp unverändert bleibt** (bei Molière: SO7w6).

**Praktische Konsequenz:** Eine erste Typisierung, die sich stark auf späte Lebensjahre oder den Krankheitsverlauf stützt, kann leicht fälschlich beim Stresspunkt-Typ statt beim tatsächlichen Kerntyp landen (das ist bei Molière zuerst passiert — anfänglich fälschlich als SO1 statt SO7w6 gedeutet). Bei der Typisierung für Krankheitsporträts deshalb immer **auch** die frühen/mittleren Lebensjahre, das Grundtemperament und die Lebensweise vor der Erkrankung heranziehen, nicht nur die Symptomatik der letzten Phase. Die Verschiebung Richtung Stresspunkt selbst ist dann ein eigener, lohnender Teil der Deutung im Abschnitt „Die Krankheit als roter Faden" — nicht verschweigen, sondern explizit machen.

**Pflichtschritt: nach Parallelen im gleichen Subtyp suchen und verlinken.** Beim Erstellen jedes Krankheitsporträts aktiv prüfen, ob es unter den bestehenden Porträts — vor allem bei Berühmten Persönlichkeiten, aber auch bei Kriminalpsychologie, wo es passt — eine Person mit demselben Subtyp gibt, deren motivationsbedingtes Verhalten auffällig ähnlich ist (z. B. dieselbe Maskierungsstrategie, dasselbe Vermeidungsmuster, dieselbe Energiequelle). Ist die Parallele offensichtlich und konkret belegbar, gehört sie explizit ins Porträt: als eigener hervorgehobener Abschnitt mit Verlinkung zum anderen Porträt (Vorlage: der Rowan-Atkinson-Vergleich im Molière-Porträt — „Die Maske als Schutzschild", „Zurückhaltend, sobald der Vorhang fällt" usw.). Das erhöht die Zuverlässigkeit und Nachvollziehbarkeit der Typisierung, macht die Verbindungen zwischen den Rubriken sichtbar (siehe Grundsatz oben) und ist inhaltlich beeindruckend für Leser, die den Subtyp bereits von einer bekannteren Person kennen. Keine erzwungenen Vergleiche, wenn die Parallele nur oberflächlich ist — nur wenn sie wirklich trägt.

**Pflichtschritt: unbewusste Fixierung als eigener Punkt nach „Einordnung ohne Determinismus".** Der letzte Punkt im Abschnitt „Die Krankheit als roter Faden" heißt immer „Einordnung ohne Determinismus" (Grundsatz: jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp — keine erfundene, rein psychosomatische Kausalität). Direkt danach kommt bei **jedem** Krankheitsporträt ein zusätzlicher, eigens gekennzeichneter Punkt, der die zweite, ergänzende Perspektive einordnet: Die porträtierte Person kannte ihr eigenes Enneagramm-Muster in aller Regel nicht bewusst (die meisten Menschen kennen das Enneagramm überhaupt nicht) und lebte ihre Leidenschaft/Motivation deshalb unbewusst und ungebremst aus, statt rechtzeitig gegenzusteuern — nicht aus Schuld, sondern aus Unwissenheit über das eigene Muster. Das erklärt, warum sich das Lebensmuster oft bis zur gesundheitlichen Zuspitzung auslebt, statt rechtzeitig die Notbremse zu ziehen. Formulierung fallspezifisch, nicht als Textbaustein — muss auf das konkrete Verhalten der Person eingehen (Vorlage: Punkt e) im Larry-King-Krankheitsporträt, „Die unbewusste Fixierung als eigener Faktor", August 2026 ergänzt). In DE und EN, bei bestehenden wie bei allen künftigen Krankheitsporträts.

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
ex={'beruehmte-persoenlichkeiten','favoriten','beruehmte-obama'}
miss=[r for r in sorted(rr-rg) if r not in ex]
print(f'Fehlend im Register: {len(miss)}')
[print(\" \",r) for r in miss]
"
```

## Psychosomatik-Register — Textvielfalt pro Subtyp über eine ganze Kategorie hinweg (Pflichtprüfung vor jedem Commit)

Beim Schreiben der 27 Subtyp-Texte (`typen`-Array) für ein neues Krankheitsbild ist es nicht ausreichend, nur **innerhalb** dieser einen Krankheit auf variierte Formulierungen zu achten. Der eigentliche Fehler, der real aufgetreten ist (Kategorie Verdauungssystem, August 2026): Für denselben Subtyp-Code (z. B. SO4) wurde über 11 verschiedene Krankheiten hinweg praktisch derselbe Satzbau-Schablone wiederverwendet, nur mit ausgetauschtem Substantiv am Ende (z. B. „Die soziale Vier macht ihr Leiden sichtbar und findet darin einen gewissen Ausdruck – dieser Ausdruck nach außen kann als Ventil wirken, das der rein körperlichen X zumindest teilweise entgegenwirkt …" — zehnmal fast wortgleich). Nutzer prüfen typischerweise gezielt ihren eigenen Subtyp über mehrere Krankheiten hinweg (z. B. alle SO4-Texte im Verdauungssystem) — genau dort fällt die Wiederholung sofort auf, auch wenn jede einzelne Krankheitsseite für sich genommen gut variiert wirkt.

**Pflichtschritt vor dem finalen Commit einer Kategorie (oder bei Verdacht):** Für jeden der 27 Subtyp-Codes die Texte über alle Krankheiten der Kategorie hinweg extrahieren und die ersten ~6 Wörter auf Wiederholung prüfen, z. B.:
```bash
python3 -c "
import re
from collections import Counter
with open('bundle.js', encoding='utf-8') as f:
    content = f.read()
start = content.index('  ERSTE_KRANKHEIT: {')
end_block = content.index('\n  },\n', content.index('  LETZTE_KRANKHEIT: {'))
region = content[start:end_block]
codes = ['SE1','SO1','SX1','SE2','SO2','SX2','SE3','SO3','SX3','SE4','SO4','SX4',
         'SE5','SO5','SX5','SE6','SO6','SX6','SE7','SO7','SX7','SE8','SO8','SX8',
         'SE9','SO9','SX9']
for code in codes:
    texts = re.findall(r'\{ code: \"%s\", text: \"([^\"]+)\" \}' % code, region)
    prefixes = [' '.join(t.split()[:6]) for t in texts]
    most_common, cnt = Counter(prefixes).most_common(1)[0]
    if cnt >= 3:
        print(f'{code}: {cnt}/{len(texts)} teilen: {most_common!r}')
"
```
Jeder Treffer mit `cnt >= 3` ist ein Fehler und muss behoben werden, bevor die Kategorie als abgeschlossen gilt — auch wenn das bedeutet, bereits committete Krankheiten dieser Kategorie nachträglich zu überarbeiten.

**Vorbeugung beim Schreiben selbst:** Beim Verfassen einer neuen Krankheit im `typen`-Array bewusst im Kopf behalten (oder kurz nachschlagen), mit welcher Formulierung derselbe Subtyp-Code in den bereits geschriebenen Krankheiten derselben Kategorie begonnen hat, und aktiv eine andere Konstruktion wählen — anderer Satzanfang, andere grammatische Struktur (z. B. nicht immer „Die soziale X macht/lebt/hält …", sondern auch mal mit einer Beobachtung, einem Bild, einer Frage, einer Gegenüberstellung beginnen). Diese Pflicht gilt zusätzlich zur bereits bestehenden Regel, dass die Einleitungssätze innerhalb einer einzigen Krankheit nicht wortgleich aus der letzten Krankheit desselben Subtyps kopiert werden dürfen (siehe `feedback_tier_einleitung_variieren` in der Memory) — hier geht es um die zusätzliche, größere Gefahrenzone über eine ganze Kategorie (10+ Krankheiten) hinweg, die leicht übersehen wird, weil man beim Schreiben einer einzelnen Krankheit nicht mehr alle vorherigen Krankheiten der Kategorie im Blick hat.

## Inhaltsregeln

- **Keine erfundenen Zuordnungen.** Fachliche Inhalte nur aus belegten Quellen übernehmen.
- Anhänge / Originalquellen haben Vorrang.
- Unsichere Inhalte als `needs_review` markieren — nicht erfinden, nicht raten.
- Zwei getrennte Ebenen sauber halten: **Leidenschaft** und **Wunde** (`woundBehindPassion`). Nicht vermischen.

## Sprache & Stil

- App-Texte auf Deutsch, mit korrekten Umlauten und deutscher Typografie.
- Bei JS-Strings: keine deutschen Anführungszeichen `„"` wenn das schließende `"` U+0022 ist — Syntaxfehler. Stattdessen `›...‹` für Zitate innerhalb von Strings verwenden.
- **Anrede in Praxistipps vom Heilpraktiker:** Kein direktes Sie/Du in den Übungsanleitungen — neutraler, unpersönlicher Instruktionsstil (Infinitiv/Passiv, z. B. „den Ball langsam rollen", „tief in den Bauch atmen"), analog zu Faszienübungen für die Rumpfgesundheit. Rahmentext, Einleitung und „Wichtiger Hinweis"-Box bleiben beim **Sie**. Einheitlichkeit über alle Artikel der Rubrik hinweg hat Vorrang vor einem Coaching-Ton in einzelnen Artikeln.

## Wegweiser (KI-Assistent) — Wissensbasis-Aktualität

Der „Wegweiser" ist ein Cloudflare-Worker-Chatbot (`ai-prototype/worker/`), der Fragen zur App per RAG über `ai-prototype/worker/knowledge.json` (DE) und `knowledge-en.json` (EN) beantwortet. Diese Dateien werden aus `app.js`/`data/*.js` (DE) bzw. `en/bundle.js`/`data/*.js` (EN) generiert.

**Kritisch:** `app.js` ist **nur eine Kopie von `bundle.js`** (per `cp bundle.js app.js`), rein für Lesbarkeit/Diffs in den `extract-*.mjs`-Skripten. `bundle.js` bleibt die tatsächliche Quelle — **niemals `app.js` direkt bearbeiten**, die Änderung geht beim nächsten Sync verloren. Die EN-Extraktion liest dagegen direkt aus `en/bundle.js` (kein Zwischenschritt nötig).

**Automatisierung:** Der Git-`post-commit`-Hook (`.git/hooks/post-commit`) übernimmt bei jedem Commit, der `bundle.js`, `en/bundle.js` oder `data/*.js` verändert, automatisch:
1. `cp bundle.js app.js` (Sync)
2. `bash ai-prototype/update-knowledge.sh` (Wissensbasis DE+EN neu bauen)
3. `bash ai-prototype/deploy-wegweiser.sh` (Worker neu deployen — **Pflichtschritt**, da `knowledge.json` per statischem Import zur Deploy-Zeit eingebettet wird; ein reiner Datei-Commit aktualisiert die Live-Instanz *nicht*)
4. Ergebnis als Folgecommit `[wissensbasis-auto]`

Das läuft automatisch bei jedem Commit über die üblichen Workflows in diesem Projekt — keine manuelle Aktion nötig. Nur bei Änderungen **außerhalb** von git (z. B. direktes Editieren auf einem Server) müsste `bash ai-prototype/update-knowledge.sh && bash ai-prototype/deploy-wegweiser.sh` manuell nachgeholt werden.

Die Vectorize-Embeddings (`ai-prototype/embed-and-upsert.mjs`, `vectors-de/en.ndjson`) sind eine separate, semantische Suchebene und aktuell eine **pausierte Baustelle** — nicht Teil der Automatisierung, absichtlich nicht angefasst, um keine inkonsistenten IDs im Cloudflare-Vectorize-Index zu erzeugen. Die Keyword-basierte Suche über `knowledge.json` funktioniert unabhängig davon zuverlässig.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
