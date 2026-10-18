# Porträt-Edition: Einrichtung in Stripe und Vercel (zuerst im TESTMODUS)

Ziel: Die Porträt-Edition (39 €) und der Aufpreis auf den Vollzugang (40 €) bekommen einen **eigenen** Webhook.
Der bestehende Webhook (`api/stripe-webhook.js`) und der 79-€-Kaufweg bleiben **unverändert**.

Alle Schritte zuerst im **Stripe-Testmodus** (Schalter oben rechts „Testmodus“). Echtgeld wird erst am Ende freigeschaltet.

## 1. Produkte und Preise anlegen (Stripe → Produktkatalog → Produkt hinzufügen)

| Produkt | Preis | Art | Name |
|---|---|---|---|
| Porträt-Edition (DE) | 39 € | einmalig | Enneagramm-Porträts |
| Porträt-Edition (EN) | 39 USD o. Ä. | einmalig | Enneagram Portraits |
| Aufpreis Vollzugang (DE) | 40 € | einmalig | Upgrade auf den Vollzugang |
| Aufpreis Vollzugang (EN) | 40 USD o. Ä. | einmalig | Upgrade to full access |

Zu jedem Preis die **Preis-ID** notieren (sie beginnt mit `price_…`).

## 2. Zahlungslinks erstellen (Stripe → Zahlungslinks)

Je Produkt einen Zahlungslink anlegen. Die Links später eintragen:
- Link „Porträt-Edition“ → kommt auf die Verkaufsseite (Phase 3).
- Link „Aufpreis“ → in der App unter `PORTRAIT_UPGRADE_URL` (`bundle.js` und `en/bundle.js`).

## 3. Neuen Webhook-Endpunkt anlegen (Stripe → Entwickler → Webhooks → Endpunkt hinzufügen)

- **URL:** dieselbe Domain wie beim bestehenden Webhook, nur mit anderem Pfad:
  `https://enneagramm-heilungskompass.vercel.app/api/stripe-webhook-portraits`
  (Die Domain steht beim bestehenden Endpunkt in derselben Liste.)
- **Ereignis:** nur `checkout.session.completed`
- Danach das **Signing-Secret** des neuen Endpunkts kopieren (beginnt mit `whsec_…`).

## 4. Umgebungsvariablen in Vercel setzen (Projekt → Settings → Environment Variables)

| Name | Wert |
|---|---|
| `STRIPE_WEBHOOK_SECRET_PORTRAITS` | das neue `whsec_…` (später Test und Live Komma-getrennt) |
| `STRIPE_SECRET_KEY_PORTRAITS_TEST` | geheimer Test-Schlüssel `sk_test_…` (nur für den Testlauf; Stripe → Entwickler → API-Schlüssel, im Testmodus) |
| `PORTRAIT_PRICE_IDS` | die beiden Preis-IDs der Porträt-Edition, durch Komma getrennt |
| `UPGRADE_PRICE_IDS` | die beiden Preis-IDs des Aufpreises, durch Komma getrennt |

Die bestehenden Variablen (`STRIPE_SECRET_KEY` für Live, `FIREBASE_SERVICE_ACCOUNT`, `RESEND_API_KEY`) werden mitgenutzt.
Danach das Vercel-Projekt einmal neu bereitstellen (Deployments → „Redeploy“).

## 5. Testkauf (Testmodus)

1. Zahlungslink „Porträt-Edition“ öffnen, mit der Testkarte `4242 4242 4242 4242` (beliebiges Ablaufdatum, beliebige CVC) kaufen.
2. Die Willkommens-E-Mail mit den Zugangsdaten prüfen.
3. In der App anmelden: Es muss die **Porträt-Edition** erscheinen (Name „Enneagramm-Porträts“, Heilmittel gesperrt).
4. Zahlungslink „Aufpreis“ mit derselben E-Mail kaufen → nach erneutem Öffnen/Anmelden ist der **Vollzugang** frei.
5. Prüfen, dass ein bestehender Kunde (Vollzugang) unverändert funktioniert.

## 6. Freischalten

Erst wenn alle Testkäufe stimmen: dieselben Schritte im Live-Modus wiederholen (Produkte, Links, Endpunkt, Variablen).

## Was der Webhook garantiert

- Konten mit bestehendem Zugang werden **nie herabgestuft**: Ein Porträt-Kauf mit einer E-Mail, die schon ein Konto hat, ändert nichts.
- Nur bezahlte Sitzungen berechtigen.
- Fremde Produkte (Bücher usw.) werden ignoriert.
- Wer direkt den Vollzugang kauft, obwohl er die Porträt-Edition hat, bekommt den Vollzugang freigeschaltet.
