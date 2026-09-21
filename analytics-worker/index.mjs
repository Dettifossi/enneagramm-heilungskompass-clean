// Kompass Analytics Worker – schlanker Seitenaufruf-Zähler pro Route.
// Speichert alles in einem einzigen KV-Eintrag "stats":
//   { "<route>": { total: N, days: { "YYYY-MM-DD": N, ... } } }
// Tages-Buckets älter als KEEP_DAYS werden bei jedem Schreibvorgang entfernt,
// damit der Eintrag nicht unbegrenzt wächst.

const KEEP_DAYS = 120;
const STATS_KEY = "stats";
const ALLOWED_ORIGINS = new Set([
  "https://kompass.verlagshausrathmer.com",
]);

function corsHeaders(request) {
  const origin = request.headers.get("Origin");
  const allow = origin && ALLOWED_ORIGINS.has(origin) ? origin : "https://kompass.verlagshausrathmer.com";
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function sanitizeRoute(route) {
  if (typeof route !== "string") return null;
  const trimmed = route.trim().slice(0, 120);
  if (!trimmed || !/^[a-z0-9\-\/]+$/i.test(trimmed)) return null;
  return trimmed;
}

async function recordHit(env, route) {
  const raw = await env.PAGEVIEWS.get(STATS_KEY);
  const stats = raw ? JSON.parse(raw) : {};
  const today = todayISO();
  const cutoff = new Date(Date.now() - KEEP_DAYS * 86400000).toISOString().slice(0, 10);

  if (!stats[route]) stats[route] = { total: 0, days: {} };
  stats[route].total += 1;
  stats[route].days[today] = (stats[route].days[today] || 0) + 1;

  for (const day of Object.keys(stats[route].days)) {
    if (day < cutoff) delete stats[route].days[day];
  }

  await env.PAGEVIEWS.put(STATS_KEY, JSON.stringify(stats));
}

async function getStats(env) {
  const raw = await env.PAGEVIEWS.get(STATS_KEY);
  return raw ? JSON.parse(raw) : {};
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cors = corsHeaders(request);

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: cors });
    }

    if (url.pathname === "/track" && request.method === "POST") {
      let body;
      try {
        body = await request.json();
      } catch {
        return new Response("bad request", { status: 400, headers: cors });
      }
      const route = sanitizeRoute(body?.route);
      if (!route) return new Response("bad route", { status: 400, headers: cors });
      await recordHit(env, route);
      return new Response("ok", { headers: cors });
    }

    if (url.pathname === "/stats" && request.method === "GET") {
      const auth = request.headers.get("Authorization") || "";
      if (auth !== `Bearer ${env.ADMIN_TOKEN}`) {
        return new Response("unauthorized", { status: 401, headers: cors });
      }
      const stats = await getStats(env);
      return new Response(JSON.stringify(stats), {
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    return new Response("not found", { status: 404, headers: cors });
  },
};
