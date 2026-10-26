# Newsletter-Entwurf automatisch in Brevo anlegen

Ablauf pro Monat:
1. Am 25. bereitet der geplante Task `newsletter-monatsbrief` (Claude, lokal) den Brief für den 1. des Folgemonats vor und pusht `newsletter/JJJJ-MM-mail.html` ins Verlagshaus-Repo.
2. Am 28. um 07:00 UTC (08:00/09:00 Uhr deutscher Zeit) ruft der Vercel-Cron `GET /api/newsletter-draft` auf. Die Funktion holt die Mail-Datei von https://www.verlagshausrathmer.com/newsletter/JJJJ-MM-mail.html und legt in Brevo den **Entwurf** `Newsletter JJJJ-MM` an (Absender und Listen vom zuletzt versendeten Brief).
3. Der Nutzer prüft den Entwurf in `newsletter-admin.html` und klickt auf Versenden (oder plant den Versand in Brevo).

Einmalig einzurichten (in Vercel, Projekt enneagramm-heilungskompass):
- Environment Variable `CRON_SECRET` mit einem langen Zufallswert (selbst eintippen), danach neu veröffentlichen. Vercel sendet den Wert beim Cron-Aufruf automatisch als `Authorization: Bearer ...`.
- `BREVO_API_KEY` ist bereits vorhanden.

Hinweise:
- Es wird nie etwas versendet. Die Funktion legt nur Entwürfe an und tut nichts, wenn der Entwurf schon existiert.
- Gibt es noch keinen versendeten Brief (kein Absender/keine Liste auslesbar), antwortet sie mit 409. Dann einmal manuell einen Brief in Brevo senden.
- Manueller Test: `curl -H "Authorization: Bearer <CRON_SECRET>" "https://enneagramm-heilungskompass.vercel.app/api/newsletter-draft?month=2026-11"`.
- Brevo meldet bei neuen Server-IPs ggf. "Neue IP überprüfen". Dann die IP dort zulassen.
