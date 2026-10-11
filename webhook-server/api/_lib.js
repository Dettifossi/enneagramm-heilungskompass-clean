// Gemeinsame Helfer für die API-Funktionen. Dateien mit Unterstrich am Anfang
// werden von Vercel nicht als eigene Adresse veröffentlicht.

import { randomInt, timingSafeEqual } from "node:crypto";

const PASSWORD_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";

// Passwort mit kryptografisch sicherem Zufall (Math.random ist vorhersagbar).
export function generatePassword() {
  const part = () => Array.from({ length: 4 }, () => PASSWORD_CHARS[randomInt(PASSWORD_CHARS.length)]).join("");
  return `Kompass-${part()}-${part()}`;
}

// Schützt vor eingeschleustem HTML in Mails: Name und E-Mail kommen vom Käufer.
export function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// Vergleich in konstanter Zeit für Geheimnisse.
export function safeEqual(a, b) {
  if (typeof a !== "string" || typeof b !== "string") return false;
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  return ba.length === bb.length && timingSafeEqual(ba, bb);
}

// Liest einen JSON-Body, ohne bei kaputtem Inhalt abzustürzen.
export function parseBody(body) {
  if (body && typeof body === "object") return body;
  try {
    return JSON.parse(body || "{}");
  } catch {
    return {};
  }
}
