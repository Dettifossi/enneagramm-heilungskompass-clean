# Live-Gang der Porträt-Edition: Checkliste

Grundregel: **Erst alles vorbereiten, ohne etwas zu veröffentlichen. Dann einmal selbst kaufen und prüfen. Erst danach die Werbung freischalten.** Der bestehende 79-€-Kaufweg (alter Webhook) wird an keiner Stelle geändert.

Du führst die Schritte in Stripe und Vercel aus, ich leite dich an und kümmere mich um Code, Texte und Prüfungen. Jede Phase ist für sich abschließbar, du kannst dazwischen aufhören.

---

## Phase A: Vorbereitung (nichts davon ist für Kunden sichtbar)

### A1. Einstellungen des bestehenden 79-€-Produkts notieren
Öffne in **Stripe (Live)** das bestehende App-Produkt (79 €) und den zugehörigen Zahlungslink. Notiere dir (oder mach Screenshots):
- Steuerkategorie des Produkts und ob der Preis **inklusive Steuer** ist (Stripe Tax an/aus)
- Zahlungslink: **Rechnung nach der Zahlung** (ja/nein), **Namen erfassen**, Bestätigungsseite/Weiterleitung nach der Zahlung
- Währung und Land-Einstellungen

Die vier neuen Links bekommen dieselben Einstellungen.

### A2. Vier Live-Produkte anlegen (Stripe, Live-Modus)

| Produkt | Währung | Preis | Art |
|---|---|---|---|
| Enneagramm-Porträts | EUR | 39 | einmalig |
| Upgrade auf den Vollzugang | EUR | 40 | einmalig |
| Enneagram Portraits | USD | 44 | einmalig |
| Upgrade to full access | USD | 45 | einmalig |

Namen und Beschreibungen wie in der Sandbox (Texte stehen in `docs/werbetexte-portraet-edition.md`). **Währung prüfen**, bei den englischen Produkten **USD**. Steuercode wie beim 79-€-Produkt.

Notiere dir die **vier Live-Preis-IDs** (`price_…`).

### A3. Vier Live-Zahlungslinks anlegen
Je Produkt ein Link, mit den Einstellungen aus A1. Zusätzlich:
- **Menge nicht änderbar**
- **KEINE Begrenzung der Zahlungsanzahl** (sonst kann nur ein Kunde kaufen)
- Namen erfassen: an

Die Links noch **nicht veröffentlichen**. Notiere dir die **vier Link-Adressen** (`https://buy.stripe.com/…`, ohne `test_`).

### A4. Webhook-Ziel im Live-Modus anlegen (Stripe → Entwickler → Webhooks)
- URL: `https://enneagramm-heilungskompass.vercel.app/api/stripe-webhook-portraits`
- Ereignis: nur `checkout.session.completed`
- Nutzlaststil: **Momentaufnahme**
- Das **Live-Signing-Secret** (`whsec_…`) bleibt bei dir, es wird nur in Vercel eingetragen.

### A5. Vercel-Variablen ergänzen (nichts ersetzen, nur anhängen)
Settings → Environment Variables → jeweils ⋯ → Edit:

| Variable | Neuer Wert |
|---|---|
| `STRIPE_WEBHOOK_SECRET_PORTRAITS` | altes Sandbox-`whsec_…` **plus Komma plus Live-`whsec_…`** (kein Leerzeichen) |
| `PORTRAIT_PRICE_IDS` | bisherige IDs **plus Komma plus** Live-ID EUR und Live-ID USD der Porträt-Edition |
| `UPGRADE_PRICE_IDS` | bisherige IDs **plus Komma plus** Live-ID EUR und Live-ID USD des Aufpreises |

Die Variable `STRIPE_SECRET_KEY` (Live-Schlüssel) existiert bereits und wird für Live-Ereignisse genutzt. Danach in Vercel **Redeploy** der Production-Version und auf **Ready** warten.

### A6. Aufpreis-Link in der App eintragen (macht Claude)
In `bundle.js` und `en/bundle.js` die Konstante `PORTRAIT_UPGRADE_URL` setzen (deutscher bzw. englischer Live-Aufpreis-Link), prüfen, nach `main` bringen.
Dieser Schritt ist sicher, weil die Konstante nur auf der Upgrade-Seite der Porträt-Edition erscheint.

---

## Phase B: Echter Test im Live-Modus, ohne Geld und ohne Werbung

Statt mit der eigenen Karte zu zahlen und zu erstatten, testen wir mit einem **100-%-Rabattcode**. Der Kauf kostet dann 0 €. Der Webhook akzeptiert solche Käufe (Zahlstatus „keine Zahlung nötig“).

### B0. Rabattcode vorbereiten (Stripe, Live)
1. **Produktkatalog → Gutscheine → Gutschein erstellen:** 100 % Rabatt, **einmalig verwendbar**, Gültigkeit nur wenige Tage.
2. Einen **Aktionscode** dazu anlegen (zum Beispiel `TESTPORTRAIT`), **Einlösungen auf 4 beschränken** (vier Testkäufe: Porträt-Edition und Aufpreis, je deutsch und englisch).
3. Im jeweiligen Live-Zahlungslink **„Aktionscodes zulassen“** einschalten, **nur für die Dauer des Tests**. Danach wieder ausschalten.

### B1. Deutscher Testkauf (39 € mit Code)
1. Live-Link der Porträt-Edition öffnen, den Code eingeben und mit einer **E-Mail-Adresse ohne Konto** kaufen: **`9Rathmer+live1@gmail.com`** (Gmail-Plus-Adresse, **genau so tippen**, die Mail kommt in dein Postfach).
2. Prüfen: Willkommens-Mail kommt (deutsch), in Stripe beim Live-Ereignis **200**, Anmeldung zeigt **„Enneagramm-Porträts“**.
3. Aufpreis-Link mit derselben Adresse und Code kaufen: Mail mit neuem Passwort kommt, danach **Vollzugang**.

### B2. Englischer Testkauf (44 USD mit Code)
Wie B1 mit den englischen Links und **`9Rathmer+live2@gmail.com`**. Prüfen: Mail **auf Englisch**, Anmeldung zeigt **„Enneagram Portraits“**. Danach der englische Aufpreis.

### B3. Kontrolle des bestehenden Kaufwegs
Prüfen, dass der **alte** Webhook weiterläuft: In Stripe unter Entwickler → Webhooks (Live) die Zustellungen des alten Endpunkts ansehen. Es darf kein Fehler auftreten, der vorher nicht da war.

---

## Phase C: Freischalten (alles gleichzeitig)

1. Texte aus `docs/werbetexte-portraet-edition.md` einbauen (Claude): Vorstellungsseite DE/EN, Kaufseite in der App, Startseite, Landingpages, statischer Suchmaschinentext.
2. Verlags-Homepage: die fertigen Texte aus Abschnitt 6 einfügen (du).
3. Widerruf und Rückgabe: Wortlaut wie beim Vollzugang prüfen und eintragen.
4. Nach dem Veröffentlichen: Startseite im privaten Fenster prüfen (beide Varianten sichtbar, Links führen auf die richtigen Zahlungsseiten, deutsch und englisch).

---

## Phase D: Aufräumen

- Test-Konten in Firebase löschen (Authentication → Users): `9Rathmer@gmail.com`, `9Rathmer1@gmail.com` (versehentlich angelegt), die `+en`- und `+live`-Testadressen. **Nur diese**, keine Kundenkonten.
- Aktionscodes und Rabattgutscheine in Stripe löschen; „Aktionscodes zulassen“ in den Links wieder ausschalten.
- Sandbox-Zahlungslinks und -Ziel deaktivieren.
- Vercel-Variable `STRIPE_SECRET_KEY_PORTRAITS_TEST` und das Sandbox-`whsec_…` aus `STRIPE_WEBHOOK_SECRET_PORTRAITS` entfernen (optional, nicht dringend).

---

## Notfall: Wie man schnell zurückgeht

| Problem | Maßnahme |
|---|---|
| Kunden sollen nicht mehr kaufen | In Stripe die betroffenen Zahlungslinks **deaktivieren** (sofort wirksam) |
| Neuer Webhook macht Fehler | In Stripe das Live-Ziel **deaktivieren**; der alte Kaufweg ist nicht betroffen |
| Käufer ohne Zugang | Konto in Firebase prüfen; Mail erneut senden: in Stripe das Ereignis **erneut senden** |
| App-Änderung stört | Letzten Commit in `main` zurücknehmen (Claude) |

**Der alte Webhook, seine Variablen und der 79-€-Link bleiben während des gesamten Ablaufs unverändert.**

---

## Werte, die du bis zum Live-Gang sammelst

| Wert | Eintrag |
|---|---|
| Live-Preis-ID Porträt-Edition EUR | |
| Live-Preis-ID Aufpreis EUR | |
| Live-Preis-ID Porträt-Edition USD | |
| Live-Preis-ID Aufpreis USD | |
| Live-Link Porträt-Edition EUR | |
| Live-Link Aufpreis EUR | |
| Live-Link Porträt-Edition USD | |
| Live-Link Aufpreis USD | |
| Live-`whsec_…` | **nicht hier eintragen, nur in Vercel** |
