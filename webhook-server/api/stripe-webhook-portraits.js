// Stripe → Firebase für die PORTRÄT-EDITION (zweiter, eigener Webhook).
//
// WICHTIG: Der bestehende Webhook (api/stripe-webhook.js) bleibt unverändert und zuständig für den
// Vollzugang. Dieser hier reagiert NUR auf die Preise der Porträt-Edition (39 €), des Aufpreises
// (Upgrade auf den Vollzugang) und – ausschließlich um einen Porträt-Claim wieder zu entfernen –
// auf die Preise des Vollzugangs. Alle anderen Produkte werden ignoriert.
//
// Die Edition steht als Firebase-Custom-Claim `edition` am Nutzer:
//   "portraits" -> Porträt-Edition      (alles andere / kein Claim -> Vollzugang, wie bisher)
//   "full"      -> Vollzugang (nach Upgrade)
//
// Benötigte Umgebungsvariablen (Vercel):
//   STRIPE_SECRET_KEY                 (vorhanden, gemeinsam genutzt; für Live-Ereignisse)
//   STRIPE_SECRET_KEY_PORTRAITS_TEST  (NEU, nur für den Testlauf: geheimer Test-Schlüssel sk_test_…)
//   FIREBASE_SERVICE_ACCOUNT          (vorhanden, gemeinsam genutzt)
//   RESEND_API_KEY                    (vorhanden, gemeinsam genutzt)
//   STRIPE_WEBHOOK_SECRET_PORTRAITS   (NEU: Signing-Secret(s) des neuen Endpunkts; Test und Live Komma-getrennt)
//   PORTRAIT_PRICE_IDS                (NEU: Komma-getrennt, Preis-IDs der Porträt-Edition 39 €, DE/EN)
//   UPGRADE_PRICE_IDS                 (NEU: Komma-getrennt, Preis-IDs des Aufpreises 40 €, DE/EN)

import Stripe from "stripe";
import crypto from "node:crypto";
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

export const config = { api: { bodyParser: false } };

const idSet = (value) => new Set((value || "").split(",").map((s) => s.trim()).filter(Boolean));

// Preise des Vollzugangs: dieselben wie im bestehenden Webhook. Hier nur zum Entfernen eines Porträt-Claims.
const FULL_PRICE_IDS = new Set([
  "price_1TuSAqHPQz587pegzlNXBxIF", // App DE
  "price_1Ty9u1HPQz587pegOiWLEECk", // App EN
  "price_1TrkeLHPQz587pegIhPuS95m", // Akademie-Sonderpreis 49,00 €
  "price_1Tu9hvHPQz587pegYTeLUuJs", // 0,00 €-Zugang
]);

async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

if (!getApps().length) {
  const sa = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
  initializeApp({ credential: cert(sa) });
}

function generatePassword() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
  const pick = (n) => Array.from({ length: n }, () => chars[crypto.randomInt(chars.length)]).join("");
  return `Kompass-${pick(4)}-${pick(4)}`;
}

const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

async function findUser(auth, email) {
  try {
    return await auth.getUserByEmail(email);
  } catch (err) {
    if (err && err.code === "auth/user-not-found") return null;
    throw err;
  }
}

async function setEdition(auth, user, edition) {
  const claims = { ...(user.customClaims || {}), edition };
  await auth.setCustomUserClaims(user.uid, claims);
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  const sig = req.headers["stripe-signature"];
  const rawBody = await getRawBody(req);

  // Signatur prüfen: STRIPE_WEBHOOK_SECRET_PORTRAITS darf mehrere Secrets enthalten (Komma-getrennt,
  // z. B. Testmodus und Live-Modus nebeneinander). Das erste passende gilt.
  const verifier = new Stripe(process.env.STRIPE_SECRET_KEY_PORTRAITS_TEST || process.env.STRIPE_SECRET_KEY || "sk_unused");
  let event = null;
  for (const secret of idSet(process.env.STRIPE_WEBHOOK_SECRET_PORTRAITS)) {
    try {
      event = verifier.webhooks.constructEvent(rawBody, sig, secret);
      break;
    } catch {
      // nächstes Secret versuchen
    }
  }
  if (!event) {
    console.error("Portraits-Webhook: Signaturfehler (kein passendes Secret)");
    return res.status(400).send("Webhook Error");
  }

  // Stripe trennt Testmodus und Live-Modus: für Test-Ereignisse wird der Test-Schlüssel benötigt.
  const apiKey = event.livemode ? process.env.STRIPE_SECRET_KEY : process.env.STRIPE_SECRET_KEY_PORTRAITS_TEST;
  if (!apiKey) {
    console.error(`Portraits-Webhook: kein API-Schlüssel für ${event.livemode ? "Live" : "Test"}-Ereignis gesetzt.`);
    return res.status(500).json({ error: "not configured" });
  }
  const stripe = new Stripe(apiKey);

  if (event.type !== "checkout.session.completed") {
    return res.status(200).json({ received: true });
  }

  const session = event.data.object;
  // Nur bezahlte Sitzungen berechtigen (verzögerte Zahlungen werden hier bewusst nicht behandelt).
  if (session.payment_status !== "paid" && session.payment_status !== "no_payment_required") {
    console.log(`ℹ️ Portraits-Webhook: Sitzung ${session.id} nicht bezahlt (${session.payment_status}) – ignoriert.`);
    return res.status(200).json({ received: true, note: "not paid" });
  }

  const email = (session.customer_details?.email || "").trim().toLowerCase();
  const name = session.customer_details?.name || "";
  const isEnglish = session.currency === "usd";
  if (!email) return res.status(200).json({ received: true, note: "no email" });

  const portraitIds = idSet(process.env.PORTRAIT_PRICE_IDS);
  const upgradeIds = idSet(process.env.UPGRADE_PRICE_IDS);

  const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
  const priceIds = lineItems.data.map((i) => i.price && i.price.id).filter(Boolean);
  const kind = priceIds.some((id) => upgradeIds.has(id))
    ? "upgrade"
    : priceIds.some((id) => portraitIds.has(id))
      ? "portraits"
      : priceIds.some((id) => FULL_PRICE_IDS.has(id))
        ? "full"
        : null;
  if (!kind) {
    return res.status(200).json({ received: true, note: "not an edition product" });
  }

  const auth = getAuth();
  try {
    const existing = await findUser(auth, email);

    if (kind === "full") {
      // Direktkauf des Vollzugangs: nur einen vorhandenen Porträt-Claim aufheben (Konto/Passwort macht der alte Webhook).
      if (existing && existing.customClaims && existing.customClaims.edition === "portraits") {
        await setEdition(auth, existing, "full");
        console.log(`✅ Porträt-Claim aufgehoben (Vollzugang gekauft): ${email}`);
      }
      return res.status(200).json({ success: true, kind });
    }

    if (kind === "portraits") {
      if (existing) {
        // Bestehendes Konto nie herabstufen: Altkunden (ohne Claim) und Vollzugang behalten ihren Zugang.
        console.log(`ℹ️ Konto existiert bereits (${email}) – Porträt-Kauf ändert nichts.`);
        return res.status(200).json({ success: true, kind, note: "existing account unchanged" });
      }
      const password = generatePassword();
      const user = await auth.createUser({ email, password, displayName: name, emailVerified: true });
      await setEdition(auth, user, "portraits");
      await sendMail(email, renderWelcomeMail({ email, name, password, isEnglish }));
      console.log(`✅ Porträt-Edition angelegt: ${email}`);
      return res.status(200).json({ success: true, kind });
    }

    // kind === "upgrade"
    if (existing) {
      await setEdition(auth, existing, "full");
      await sendMail(email, renderUpgradeMail({ name, isEnglish }));
      console.log(`✅ Upgrade auf Vollzugang: ${email}`);
    } else {
      // Sonderfall: Aufpreis ohne vorhandenes Konto – Vollzugang-Konto anlegen.
      const password = generatePassword();
      const user = await auth.createUser({ email, password, displayName: name, emailVerified: true });
      await setEdition(auth, user, "full");
      await sendMail(email, renderWelcomeMail({ email, name, password, isEnglish, full: true }));
      console.log(`✅ Upgrade (neues Konto) angelegt: ${email}`);
    }
    return res.status(200).json({ success: true, kind });
  } catch (err) {
    console.error("Portraits-Webhook: Fehler:", err);
    // Keine Fehlerdetails an Stripe; Stripe wiederholt die Zustellung bei 5xx automatisch.
    return res.status(500).json({ error: "internal error" });
  }
}

async function sendMail(to, { subject, html }) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: "Enneagramm-Heilungskompass <noreply@verlagshausrathmer.com>", to, subject, html }),
  });
  if (!response.ok) throw new Error(`Email error: ${await response.text()}`);
}

const shell = (inner) => `<div style="font-family:Georgia,serif;max-width:560px;margin:0 auto;padding:1.5rem;color:#28241f;line-height:1.6;">${inner}</div>`;

function renderWelcomeMail({ email, name, password, isEnglish, full }) {
  const appUrl = isEnglish ? "https://kompass.verlagshausrathmer.com/en/" : "https://kompass.verlagshausrathmer.com/";
  const product = full
    ? isEnglish ? "Enneagram Healing Compass" : "Enneagramm-Heilungskompass"
    : isEnglish ? "Enneagram Portraits" : "Enneagramm-Porträts";
  if (isEnglish) {
    return {
      subject: `Your ${product} access – login details`,
      html: shell(`<h2>Welcome${name ? ", " + esc(name) : ""}!</h2>
        <p>Your access to <strong>${esc(product)}</strong> is ready.</p>
        <p><strong>Email:</strong> ${esc(email)}<br><strong>Password:</strong> ${esc(password)}</p>
        <p>Open the app: <a href="${appUrl}">${appUrl}</a> – go to “Unlock”, enter your email and password.</p>
        <p>You can upgrade to full access at any time; your payment is credited.</p>`),
    };
  }
  return {
    subject: `Ihr Zugang zu ${product} – Zugangsdaten`,
    html: shell(`<h2>Herzlich willkommen${name ? ", " + esc(name) : ""}!</h2>
      <p>Ihr Zugang zu <strong>${esc(product)}</strong> ist bereit.</p>
      <p><strong>E-Mail:</strong> ${esc(email)}<br><strong>Passwort:</strong> ${esc(password)}</p>
      <p>App öffnen: <a href="${appUrl}">${appUrl}</a> – dort auf „Freischalten“ gehen und E-Mail-Adresse und Passwort eingeben.</p>
      <p>Ein Wechsel auf den Vollzugang ist jederzeit möglich, Ihre Zahlung wird angerechnet.</p>`),
  };
}

function renderUpgradeMail({ name, isEnglish }) {
  const appUrl = isEnglish ? "https://kompass.verlagshausrathmer.com/en/" : "https://kompass.verlagshausrathmer.com/";
  if (isEnglish) {
    return {
      subject: "Your upgrade to full access is active",
      html: shell(`<h2>Thank you${name ? ", " + esc(name) : ""}!</h2>
        <p>Your upgrade is active. Open the app (<a href="${appUrl}">${appUrl}</a>) and sign in again if needed – all areas are now unlocked.</p>`),
    };
  }
  return {
    subject: "Ihr Upgrade auf den Vollzugang ist aktiv",
    html: shell(`<h2>Vielen Dank${name ? ", " + esc(name) : ""}!</h2>
      <p>Ihr Upgrade ist aktiv. Öffnen Sie die App (<a href="${appUrl}">${appUrl}</a>) und melden Sie sich bei Bedarf neu an – alle Bereiche sind jetzt freigeschaltet.</p>`),
  };
}
