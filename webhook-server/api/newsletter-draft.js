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

    // Absender und Empfängerlisten: zuerst aus Umgebungsvariablen (falls gesetzt), sonst vom letzten Brief,
    // der nicht nur Entwurf ist (versendet, geplant oder archiviert).
    let sender = process.env.BREVO_SENDER_EMAIL ? { name: process.env.BREVO_SENDER_NAME || "Detlef Rathmer", email: process.env.BREVO_SENDER_EMAIL } : null;
    let listIds = (process.env.BREVO_LIST_IDS || "").split(",").map((x) => parseInt(x, 10)).filter((x) => x > 0);
    const gefunden = [];
    if (!sender || !listIds.length) {
      for (const status of ["sent", "archive", "queued", ""]) {
        const r = await brevo(`/emailCampaigns?${status ? `status=${status}&` : ""}limit=10&sort=desc`);
        const camps = (r.json?.campaigns || []).filter((c) => c.status !== "draft");
        gefunden.push(`${status || "alle"}: HTTP ${r.status}, ${camps.length} Briefe`);
        const c = camps.find((x) => x.sender?.email && x.recipients?.lists?.length);
        if (c) {
          sender = sender || { name: c.sender.name, email: c.sender.email };
          if (!listIds.length) listIds = c.recipients.lists;
          break;
        }
      }
    }
    if (!sender?.email || !listIds.length) {
      const senders = await brevo("/senders");
      const lists = await brevo("/contacts/lists?limit=50");
      const info = {
        error: "Absender oder Empfängerliste nicht ermittelbar. Bitte in Vercel BREVO_SENDER_EMAIL und BREVO_LIST_IDS setzen (Hinweise siehe unten).",
        suche: gefunden,
        absenderAbfrage: `HTTP ${senders.status} ${senders.json?.message || ""}`.trim(),
        listenAbfrage: `HTTP ${lists.status} ${lists.json?.message || ""}`.trim(),
        absender: (senders.json?.senders || []).map((s) => `${s.name} <${s.email}>`),
        listen: (lists.json?.lists || []).map((l) => `${l.id}: ${l.name} (${l.totalSubscribers} Kontakte)`),
      };
      // Eine einzige Textzeile, damit sie im Vercel-Log ohne Aufklappen lesbar ist
      console.log(`newsletter-draft 409 | ${gefunden.join(" ; ")} | Absender-Abfrage: ${info.absenderAbfrage} | Listen-Abfrage: ${info.listenAbfrage} | Absender: ${info.absender.join(", ") || "-"} | Listen: ${info.listen.join(", ") || "-"}`);
      return res.status(409).json(info);
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
