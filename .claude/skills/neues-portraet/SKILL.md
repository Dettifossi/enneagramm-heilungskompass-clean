---
name: neues-portraet
description: "Use when adding a new portrait (Berühmte Persönlichkeiten, Kriminalpsychologie, Krankheitsporträt) to the Enneagramm-Kompass, in German and English. Gives the exact wiring checklist: page function, arrays, route map, register, changelog, smoke test, R2 image, cache busting, parity checks. Trigger phrases: 'Nächstes Porträt', 'Nächster Kriminalfall', a name plus subtype such as SX4w3."
---

# Neues Porträt verdrahten (DE + EN)

Inhaltsregeln (Recherche, Ton, Substanz-Absatz, Unschuldsvermutung, Fremdsprachen-Übersetzung) stehen in `.claude/rules/` und `CLAUDE.md` und werden nicht wiederholt. Dieser Skill ist nur die technische Checkliste.

## 1. Vorbereiten
- Name + Subtyp stammen vom Nutzer. Fakten recherchieren und belegen; Lebende und laufende Verfahren besonders vorsichtig (Stand und Datum nennen, offene Punkte als offen kennzeichnen).
- Tier des Subtyps und eine Parallele im selben Subtyp prüfen: `grep -o 'subtyp:"SX4w3"' bundle.js`, Tier in `_TQ_TIERE`.
- Vorlage: das jüngste Porträt derselben Rubrik (`git log --grep "Neues Porträt"` / `"Neues Kriminalporträt"`).

## 2. Dateien (immer beide Sprachen)
| Rubrik | DE-Funktion | EN-Funktion | Route-Präfix |
|---|---|---|---|
| Berühmte | `data/beruehmte-de/teilN.js` | `en/data/beruehmte-en/teilN.js` | `beruehmte-` |
| Kriminal | `data/kriminal-de/teilN.js` | `en/data/kriminal-en/teilN.js` | `kriminalpsychologie-` |
| Krankheit | `data/krankheitsportraets-de/teilN.js` | `en/data/krankheitsportraets-en/teilN.js` | `krankheitsportraets-` |

Kürzeste Teil-Datei wählen (`wc -c`), Funktion ans Ende anhängen (`export function xyzPortraitPage()`).

## 3. Verdrahtung (jeweils `bundle.js` und `en/bundle.js`)
1. Platzhalter-Zeile bei den übrigen ergänzen (Lazy Loading): `const xyzPortraitPage = () => _lazyPage("./data/…/teilN.js", "xyzPortraitPage");` (DE `./data/…`, EN `./data/…` relativ zu `en/bundle.js`). Es gibt keine `import`-Zeile für Teil-Dateien mehr.
2. Eintrag im passenden Array (`BERUEHMT_PORTRAITS` / `KRIMINAL_PORTRAITS` / `KRANKHEITS_PORTRAITS`): route, name, subtyp, heading, teaser, land, tags, gender (`added:` bei Berühmten).
3. Routen-Map: `"route": funktionPage,` neben ein Nachbar-Porträt.
4. Kriminal/Krankheit ohne Berühmten-Pendant: `BQA_IMG_MAP` in beiden Bundles ergänzen.
5. `data/register.js`: DE- und EN-Eintrag (`registerEntries`, `registerEntriesEN`).
6. `data/changelog.js`: eigener Eintrag mit `route` (Text beginnt mit »Neu…«, kein Redaktionsprotokoll).
7. `ai-prototype/smoke-test.cjs`: zwei Zeilen (DE + `en/#…`).
8. Musterkompass des Subtyps: `LEBENSMUSTERKOMPASS` (Berühmte), `KRIMINAL-`/`KRANKHEITSMUSTERKOMPASS` (je Rubrik). Beispiel eintragen, passenden Beleg oder neuen Einzelfall-Eintrag; keine exakten Porträtzahlen.
9. Bild: `sips -Z 1200 -s format jpeg -s formatOptions 85 <in> --out <name>-portrait.jpg`, dann `npx wrangler r2 object put kompass-assets/assets/portraits/<route>-portrait.jpg --file … --content-type image/jpeg --remote`. Bilder nie ins Repo.

## 4. Cache-Busting (Pflicht, siehe CLAUDE.md §1a)
`index.html` (`bundle.js?v=inhalt-vNNNN`, `changelog.js?v=`), `en/index.html`, `sw.js` und `en/sw.js` (`SW_VERSION`, `BUNDLE_VERSION`), bei `register.js`-Änderung `register.js?v=` in beiden Bundles. Vorher per `grep` die aktuellen Zähler lesen.

## 5. Prüfen
```bash
for f in bundle.js en/bundle.js data/register.js data/changelog.js <teil-de> <teil-en>; do node --input-type=module --check < $f; done
node --check ai-prototype/smoke-test.cjs
```
Register-Lücken und DE/EN-Parität: die zwei Kontrollbefehle aus `CLAUDE.md`. Dann lokal `python3 -m http.server`, Route DE und `en/` öffnen (Tier `heilwissen` im localStorage setzen, ES-Module per `fetch(url,{cache:'reload'})` neu laden), Name, Abschnittszahl, Bild und Links prüfen.

## 6. Abschluss
Committen und pushen (Autonomie-Regel); der Post-Commit-Hook baut die Wissensbasis. Die Porträt-Edition erkennt neue Einträge in den Porträt-Arrays automatisch, dort ist nichts zu tun.

## Gotchas (real aufgetretene Fehler)
- `en/sw.js` `BUNDLE_VERSION` und `en/index.html` `bundle.js?v=inhalt-vNNNN` müssen dieselbe Nummer tragen, sonst greift der Auto-Reload der EN-Seite nicht. Beide nach dem Hochzählen gegenlesen.
- `register.js?v=` steht in **beiden** Bundles und zählt getrennt (DE und EN haben verschiedene Stände). Nach jeder Änderung an `data/register.js` in beiden hochzählen.
- macOS-`sed` braucht ein leeres Argument: `sed -i '' 's/alt/neu/' datei`. Ohne das schlägt der Befehl fehl oder ändert nichts.
- Der Browser cacht ES-Module hartnäckig: vor dem Test `fetch(url,{cache:'reload'})` für `bundle.js`, die Teil-Datei und `register.js`, dann neu laden. Sonst sieht man die alte Seite oder die Startseite statt der Route.
- Ohne gesetztes Tier (`localStorage` `enneagramm-kompass:tier` = `heilwissen`) zeigt die App die Verkaufsseite statt des Porträts.
- Datenzeilen im Register und in den Arrays einzeln mit eindeutigem Anker ersetzen (`assert count==1`), nie mit breiten Mustern: sonst werden bei DE und EN Doppeltreffer überschrieben.
- Englische Zitate in DE-Texten und nicht-englische Titel immer mit Übersetzung in Klammern; keine geraden `"` in JS-Strings, stattdessen `›…‹`.
- Bei Lebenden und laufenden Verfahren den Stand mit Datum nennen und den Quellen-Abruf (Wikipedia, Nachrichten) vor dem Schreiben machen; Gerichtsausgang nicht aus dem Gedächtnis (Fälle ändern sich, z. B. Clancy und Heuermann 2026).
- Eine Aussage, die nur als Anekdote überliefert ist (z. B. Hitler und Chaplin), als solche kennzeichnen, nicht als Beleg.
