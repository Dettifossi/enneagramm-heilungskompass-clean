# Übergabe Kompass-Sitzung (Stand 13.11.2026, für den Neustart am Sonntag, 15.11.2026, ab 13 Uhr)

Projekt: Enneagramm-Heilungskompass (statische SPA, Repo `Enneagramm-Kompass`), dazu Verlagshomepage (Ordner `Verlagshaus Homepage`, Repo `Dettifossi/verlagshaus-rathmer-homepage`). Detlef Rathmer, Deutsch, Anrede **Sie**, kurze konkrete Antworten. Nach Fertigstellung direkt committen und pushen (keine Rückfrage).

## Wichtigste Regeln (neu, gelten ab sofort)
- **Typisierungen von Personen sind das Geschäftsgeheimnis.** In Gratis-Probe, Probe der Woche, Register, Suche, Updates, Wegweiser und in der Werbung (auch Promi-Karten) dürfen für Nutzer ohne Zugang keine Subtyp-Codes oder »X ist Typ Y« erscheinen. Vor jeder neuen frei erreichbaren Fläche im Browser ohne Tier auf `\bS[EOX][1-9]w[1-9]\b` prüfen.
- Tier-Schlüssel `enneagramm-kompass:tier` (`heilwissen`, `portraits`, sonst Gratis). Zum Testen als zahlender Nutzer `heilwissen` setzen, für Gratis-Test entfernen.
- Cache-Zähler nach jeder Änderung an `bundle.js`/`en/bundle.js`/`changelog.js`/`register.js` erhöhen (CLAUDE.md §1a). Ein Commit-Hook bricht ab, wenn `register.js` ohne beide Bundles vorgemerkt ist.
- Portrait-Basissatz: »basiert auf dem Lebenslauf und auf dem Enneagramm-Profiling-System von David L. Rathmer«.

## Was heute fertig wurde (alles gepusht)
- Porträt Paul Dano (SE4w3), DE+EN, Register, Changelog v2777, Lebensmusterkompass SE4.
- Homepage: »Probeversion gratis« bei allen Apps (Startseite DE/EN, `verknuepfungen.json`), Bach »nach Dr. Edward Bach«, Biochemie »nach Dr. W. H. Schüssler«, Schreibweise Schüssler überall. Kompass-Seiten (`kompass.html`, `kompass-en.html`): goldener Probe-Knopf unter dem Titel.
- App-Gratisstufe: **Probe der Woche** (wechselnd, montags; zwei Schaubilder, ein Praxistipp, ein Wissensartikel aus fester, geprüfter Liste; nur die ersten 380 px, dann Verlaufsblende und Freischalt-Knopf, Teilen-Knöpfe ausgeblendet), Raster gesperrter Porträt-Kacheln (nur Foto und Name), Zahl »über 1200 Porträts«, Hinweis »wird laufend erweitert«. Freischalt-Seite mit Knopf »Probeversion gratis ansehen«. Funktionen `probeDerWoche`, `probeBlockHtml`, `_probeClip` in `bundle.js`/`en/bundle.js`.
- Lücken geschlossen: Register und Updates sind für Gratis-Nutzer gesperrt, Suche blendet Typen aus, Wegweiser im Gratis-Modus nur sichtbar, nicht aktiv (Client-Sperre).
- Leseprobe: Knopf »Probeversion teilen« mit Link `https://kompass.verlagshausrathmer.com/leseprobe/` (EN `/en/leseprobe/`); die Vorschauseiten mit Social-Vorschau sind live (Register-Eintrag `leseprobe`, vom Hook erzeugt).
- Marketing-Sitzung weiß: Leseprobe-Link regelmäßig bewerben, keine Typisierungen nennen.

## Offen / beachten
- **Wegweiser-Server-Sperre wurde zurückgenommen** (sie sperrte Detlef, einen angemeldeten Kunden, aus). Nur die Client-Sperre ist aktiv. Eine echte Server-Sperre braucht eine vom Server ausgestellte Kennung und ein Testkonto. Nicht erneut versuchen ohne Testkonto.
- **Neuer Kompass-Film:** auf später verschoben (kurz, 45–60 s, DE+EN, »Probeversion gratis«, Song von Detlef). Detlef daran erinnern, wenn wieder Nutzungsvolumen da ist. Das 10-Minuten-Video auf der Startseite bleibt. Das YouTube-Vorschaubild ist beschnitten; Detlef will es **nicht** neu machen lassen. Nichts ändern.
- **GitHub-Mail** zu erweiterten Rechten der App »Claude«: Detlef macht nichts damit.
- Zwei alte `git stash`-Einträge (»autostash«, nur generierte Dateien) liegen im Repo; nicht anfassen.
- Optional vorgeschlagen, ungeklärt: Textauszug des SE1-Subtypprofils in der alten Leseprobe (kein Personentyp), Probe-Kacheln als verschwommene Ganzansicht statt Ausschnitt.
- Untergeordnete Sitzungen waren zuletzt alle ruhend (Spirituelle App, Neun Seelenblüten, Burnout, Biochemie, Heilung, Aromatherapie, Partnerbörse, Beziehungen, Sexualität, Code, Janosch, Marketing). Die Sitzung »homepages-praxis-und-ver« ist als fehlgeschlagen markiert.

## Vorschlag für die erste Nachricht im neuen Account
> Bitte lies `docs/uebergabe-2026-11-13.md` im Ordner Enneagramm-Kompass und mach dort weiter. Gleiche Regeln wie dort beschrieben (Sie, kurz, direkt committen und pushen, keine Typisierungen von Personen in der Gratis-Probe). Frage zuerst, was ich als Nächstes möchte.
