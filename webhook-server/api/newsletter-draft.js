// Monatlicher Newsletter-Entwurf: holt die Mail-Datei des nächsten Briefes von der Verlagshaus-Seite
// und legt in Brevo daraus einen ENTWURF an (versendet nichts). Absender und Empfängerlisten werden
// vom zuletzt versendeten Brief übernommen. Versenden bleibt ein Klick in newsletter-admin.html.
//
// Aufruf: Vercel-Cron (siehe vercel.json), GET /api/newsletter-draft, Header "Authorization: Bearer <CRON_SECRET>".
// Optional: ?month=JJJJ-MM für einen bestimmten Monat (gleiche Authentifizierung).
// Benötigt die Umgebungsvariablen BREVO_API_KEY (vorhanden) und CRON_SECRET (selbst anzulegen).

const BREVO_API = "https://api.brevo.com/v3";
const SITE = "https://www.verlagshausrathmer.com/newsletter";

function nextMonth(now) {
  const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1));
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
}

async function brevo(path, options = {}) {
  const r = await fetch(`${BREVO_API}${path}`, {
    ...options,
    headers: { "api-key": process.env.BREVO_API_KEY, accept: "application/json", "content-type": "application/json", ...(options.headers || {}) },
  });
  const text = await r.text();
  let json = null;
  try { json = text ? JSON.parse(text) : null; } catch (e) { /* Antwort ohne JSON */ }
  return { ok: r.ok, status: r.status, json, text };
}

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).send("Method Not Allowed");

  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.authorization !== `Bearer ${secret}`) {
    return res.status(401).json({ error: "Nicht autorisiert" });
  }
  if (!process.env.BREVO_API_KEY) return res.status(500).json({ error: "BREVO_API_KEY fehlt" });

  const month = /^\d{4}-\d{2}$/.test(req.query?.month || "") ? req.query.month : nextMonth(new Date());
  const name = `Newsletter ${month}`;

  try {
    const mailRes = await fetch(`${SITE}/${month}-mail.html`);
    if (!mailRes.ok) return res.status(404).json({ error: `Brief für ${month} liegt noch nicht auf der Webseite (${SITE}/${month}-mail.html)` });
    const html = await mailRes.text();
    if (!html.includes("{{ unsubscribe }}")) return res.status(422).json({ error: "Mail-Datei enthält keinen Abmeldelink ({{ unsubscribe }})" });
    const subject = (html.match(/<title>([\s\S]*?)<\/title>/) || [])[1]?.trim();
    if (!subject) return res.status(422).json({ error: "Mail-Datei hat keinen Titel für den Betreff" });

    const drafts = await brevo("/emailCampaigns?status=draft&limit=50&sort=desc");
    if (drafts.ok && (drafts.json?.campaigns || []).some((c) => c.name === name)) {
      return res.status(200).json({ ok: true, hinweis: `Entwurf "${name}" existiert bereits, nichts geändert` });
    }

    const sent = await brevo("/emailCampaigns?status=sent&limit=1&sort=desc");
    const last = sent.json?.campaigns?.[0];
    const sender = last?.sender;
    const listIds = last?.recipients?.lists;
    if (!sender?.email || !Array.isArray(listIds) || !listIds.length) {
      return res.status(409).json({ error: "Kein früherer Brief mit Absender und Listen gefunden. Bitte einmal einen Brief manuell in Brevo senden oder BREVO-Absender/Liste ergänzen." });
    }

    const created = await brevo("/emailCampaigns", {
      method: "POST",
      body: JSON.stringify({
        name,
        subject: subject.replace(/\s+–\s+Newsletter.*$/, ""),
        sender: { name: sender.name, email: sender.email },
        htmlContent: html,
        recipients: { listIds },
      }),
    });
    if (!created.ok) return res.status(created.status).json({ error: created.text });
    return res.status(200).json({ ok: true, entwurf: name, id: created.json?.id, listen: listIds });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
