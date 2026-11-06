# Gratis-Apps aus dem Kompass – Konzeptentwurf (06.11.2026)

## Grundgedanke (nicht vergessen)
Mehrere kleine, **kostenlose** Enneagramm-Apps im App Store als Einstieg ohne Hemmschwelle, weltweit (DE+EN). Jede App führt am Ende sichtbar zu den **bezahlten großen Paketen** (Enneagramm-Heilungskompass, Porträt-Kompass, ca. 39 €/$). Wachstum langsam, eine App nach der anderen, im Rahmen des vorhandenen Apple-Entwicklerkontos (99 €/Jahr). Das Repertorium ist ebenfalls gratis ladbar (eigene Session).

## Apple-Leitplanken
- 4.2 Mindestfunktionalität: keine reine Webseiten-Hülle; echte App-Funktionen (Offline, Speichern, Teilen, Benachrichtigungen).
- 4.3 Spam: jede App eigener Zweck, Name, Oberfläche; nicht aus derselben Vorlage wirken.
- 3.1 Digitale Inhalte: Hinweis/Link auf Käufe außerhalb der App vorher gegen die aktuellen Regeln prüfen.
- Immer nur eine App gleichzeitig in der Prüfung.

## Reihenfolge
1. **Enneagramm-Typentest** (Einstieg, leicht teilbar)
2. **Beziehungs-Check** (zwei Typen/Subtypen vergleichen; spricht viele an)
3. **Bewusstseinstest zum Enneagramm** (wie bewusst lebe ich mein Muster)
4. Optional: **Tagesimpuls**-App; Bündel aus 1–3 als »Starter-Paket«.

Bündelung: Entweder eine gratis App »Enneagramm Start« mit den drei Modulen, oder drei getrennte Apps. Empfehlung: **ein Bündel** (weniger Spam-Risiko, bessere Sichtbarkeit, ein Bewertungsstapel), später ggf. einzelne Apps.

## Entwurf App 1: Typentest
- Umfang: Fragenbogen, Ergebnis mit Haupttyp und Wahrscheinlichkeiten, kurze Typbeschreibung, Subtyp-Hinweis als Appetithappen.
- App-Funktionen: Ergebnis lokal speichern, Verlauf, Ergebnis als Bild teilen, optionale Tageserinnerung, komplett offline.
- Abschluss: ruhiger Hinweis »Mehr zu deinem Typ und den 27 Subtypen im Enneagramm-Heilungskompass« mit Link.
- Sprachen: DE+EN von Anfang an.
- Unterschied zur Web-Version: Speichern, Teilen-Karte, Offline, Erinnerung.

## Technik
- Gemeinsame iOS-Hülle wie bei der Repertorium-App (Vorlage bei der Repertorium-Session erfragen), pro App ein eigenes kleines Repository.
- Inhalte und Bilder liegen in der App selbst; GitHub-Pages-Platz ist für Apps kein Thema.

## Vorschläge zu den offenen Punkten

**Fragen:** Müssen nicht neu geschrieben werden. Im Kompass gibt es bereits `typentestPage`, `typentestMotivationalPage`, `motivationsSchnelltestPage`, `diagnosetestPage`, `subtypMotivationsQuizPage` und `bewusstseinsgradTestPage` (Bewusstseinstest). Für die App eine Auswahl daraus als kurzer Test (ca. 20–30 Fragen) plus optional längere Fassung. DE+EN liegen vor.

**App-Name (Vorschläge, noch auf Verfügbarkeit im Store prüfen):**
- Starter-App: »Enneagramm Start: Typ-Test & Beziehung« · Alternative »Enneagramm Kompass Mini«
- Einzel-Apps später: »Enneagramm Typentest – 27 Subtypen« · »Enneagramm Beziehungs-Check« · »Enneagramm Bewusstseins-Test«
- Regel: Name enthält das gesuchte Wort »Enneagramm«, keine Verwechslung mit fremden Marken.

**Store-Suchbegriffe (Feld max. 100 Zeichen, DE):** Enneagramm,Typentest,Persönlichkeitstest,Subtypen,Selbsterkenntnis,Beziehung,Bewusstsein,Typ 1,Typ 9,Naranjo
**EN:** enneagram,personality test,type test,subtypes,self-awareness,relationship,compatibility,mindfulness,quiz

**Ziel-Paket am Ende:** noch offen, später entscheiden (Heilungskompass oder Porträt-Kompass). Bis dahin im Entwurf nur »das große Paket« als Platzhalter.

## Weiter offen
- Datenschutzerklärung und Altersfreigabe pro App.
- Prüfung der Store-Regel zu Links auf externe Käufe (3.1) vor der Einreichung.

## Entscheidungen 06.11.2026
- Name der Starter-App: »Enneagramm Start: Typentest & Beziehung« (»Typentest« ist der gängige Suchbegriff). Suchbegriffe wie vorgeschlagen.
- Datenschutzerklärung: Standard; App speichert Ergebnisse nur lokal, kein Konto, kein Tracking (dann ist das Datenschutz-Label im Store einfach).
- Altersfreigabe: wird bei Apple über einen Fragebogen berechnet, nicht frei gewählt. Voraussichtlich 4+; keine Kinder-Kategorie wählen.
- Link auf externe Käufe (3.1): vor Einreichung gegen aktuelle Regeln prüfen, je Land unterschiedlich.
