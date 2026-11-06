# Aktualisierungen: Porträts mit offenem Stand (Watchlist)

Zweck: Porträts lebender Personen enthalten manchmal einen »Stand«-Abschnitt, der veralten kann. Hier stehen die Fälle, die bald geprüft werden müssen. Eintragen, sobald ein Porträt etwas Offenes schildert (Kandidatur, Verfahren, Krankheit, Rücktritt ...). Erledigte Fälle mit Datum durchstreichen.

| Porträt | Was ist offen | Prüfen ab | Stand |
|---|---|---|---|
| Ilse Aigner (`beruehmte-ilse-aigner`) | Nominierung der Union als Bundespräsidentin; Verkündung für Mo 09.11.2026 erwartet; Wahl durch Bundesversammlung 30.01.2027 | 09.11.2026, danach 30.01.2027 | offen |
| Paul Ronzheimer (`beruehmte-paul-ronzheimer`) | Wechsel zu »Axel Springer Creators« (nach Fachmedien, 19.10.2026), keine Originalmitteilung gefunden | Dezember 2026 | offen |

## Sterbefälle
Verstorbene Personen (Bericht: `docs/todesfall-bericht.md`, erzeugt von `node ai-prototype/check-deaths.mjs`): (1) die Zeile unter dem Foto ändern, also Lebensdaten mit Todesdatum (»geboren … – gestorben am …«), (2) einen Schlusssatz im Porträt ergänzen (»… starb am … im Alter von … Jahren«), DE und EN, (3) die Route in `data/verstorben.js` eintragen (dann erscheint der PDF-/Bildkarten-Knopf), (4) Teaser, Register und Lebensmusterkompass-Texte prüfen, (5) Cache-Zähler hochzählen. Aktuelle Beispiele: Hubert Aiwanger (4.11.2026), Janosch (3.11.2026).

## Regelmäßige Prüfung
Das Skript `ai-prototype/check-deaths.mjs` prüft bei Wikidata, ob bei den als lebend geführten Personen inzwischen ein Todesdatum steht, und listet fällige Einträge dieser Tabelle. Es ändert nichts selbst. Zusätzlich einmal jährlich zum 1.1. die inhaltliche Prüfung (siehe Memory »Jährlicher Update-Check«).
