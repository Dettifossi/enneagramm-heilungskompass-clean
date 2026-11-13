// Prüft ein Firebase-ID-Token (RS256) gegen die öffentlichen Google-Schlüssel.
// Liefert die Nutzer-ID (sub) oder null. Wirft nie.
const JWKS_URL = "https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com";

function b64urlToBytes(s) {
  s = s.replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  const bin = atob(s);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}
function parseJson(bytes) {
  return JSON.parse(new TextDecoder().decode(bytes));
}

export async function verifyFirebaseToken(token, projectId, opts = {}) {
  try {
    if (!token || typeof token !== "string" || token.length > 4000) return null;
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const header = parseJson(b64urlToBytes(parts[0]));
    const payload = parseJson(b64urlToBytes(parts[1]));
    if (header.alg !== "RS256" || !header.kid) return null;
    const now = Math.floor((opts.now ? opts.now() : Date.now()) / 1000);
    if (payload.aud !== projectId) return null;
    if (payload.iss !== "https://securetoken.google.com/" + projectId) return null;
    if (!payload.sub || typeof payload.sub !== "string") return null;
    if (typeof payload.exp !== "number" || payload.exp <= now) return null;
    if (typeof payload.iat === "number" && payload.iat > now + 300) return null;
    const getJwks = opts.getJwks || (async () => {
      const res = await fetch(JWKS_URL, { cf: { cacheTtl: 3600, cacheEverything: true } });
      return res.json();
    });
    const jwks = await getJwks();
    const jwk = (jwks.keys || []).find((k) => k.kid === header.kid);
    if (!jwk) return null;
    const key = await crypto.subtle.importKey(
      "jwk", jwk, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]
    );
    const ok = await crypto.subtle.verify(
      "RSASSA-PKCS1-v1_5", key, b64urlToBytes(parts[2]),
      new TextEncoder().encode(parts[0] + "." + parts[1])
    );
    return ok ? payload.sub : null;
  } catch {
    return null;
  }
}
