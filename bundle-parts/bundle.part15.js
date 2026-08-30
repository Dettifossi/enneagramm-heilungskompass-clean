function kommunikationsguidePage() {
  const SUBTYPES = ["SE1","SO1","SX1","SE2","SO2","SX2","SE3","SO3","SX3","SE4","SO4","SX4","SE5","SO5","SX5","SE6","SO6","SX6","SE7","SO7","SX7","SE8","SO8","SX8","SE9","SO9","SX9"];
  const profCode = getProfile().toUpperCase();
  const activeSubtype = kommGuideState.subtypeCode || (SUBTYPES.includes(profCode) ? profCode : null);

  const subtypeGrid = SUBTYPES.map(code => {
    const hasData = !!KOMMUNIKATIONSGUIDE[code];
    const isSel = code === activeSubtype;
    const isMe = code === profCode;
    const tc = typeColorFromCode(code);
    const borderC = tc;
    const bgC = isSel ? `color-mix(in srgb,${tc} 18%,var(--paper))` : `color-mix(in srgb,${tc} 6%,var(--paper))`;
    const colorC = tc;
    const opacity = hasData ? "1" : ".45";
    return `<button data-komm-subtype="${code}" ${!hasData ? "disabled" : ""} style="display:flex;flex-direction:column;align-items:center;gap:.25rem;padding:.4rem .5rem;border-radius:.5rem;border:1.5px solid ${borderC};background:${bgC};font-size:.78rem;font-weight:${isMe ? 700 : 500};color:${colorC};cursor:${hasData ? "pointer" : "default"};opacity:${opacity};font-family:inherit;white-space:nowrap;">
      <span style="position:relative;width:26px;height:26px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 1.5px ${tc};display:inline-block;">
        <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/${code.toLowerCase()}.jpg" alt="" loading="lazy" style="position:absolute;top:${tierAvatarTop(code)};left:${tierAvatarLeft(code)};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
      </span>
      <span>${code}${isMe ? " ★" : ""}</span>
      ${!hasData ? '<span style="font-size:.6rem;font-weight:400;color:var(--muted);">bald</span>' : ""}
    </button>`;
  }).join("");

  let resultHtml = `<p style="text-align:center;color:var(--muted);font-size:.9rem;margin-top:2rem;">W&auml;hle einen Subtyp, um zu erfahren, wie du ihm im Alltag, in Beziehung und F&uuml;hrung am besten begegnest.</p>`;

  const g = activeSubtype ? KOMMUNIKATIONSGUIDE[activeSubtype] : null;
  if (g) {
    resultHtml = `
      <div style="background:var(--paper);border:1px solid var(--copper);border-radius:1rem;padding:1.4rem 1.6rem;margin-top:1.5rem;max-width:100%;">
        <div style="display:flex;align-items:center;gap:.8rem;margin-bottom:.3rem;">
          <span style="position:relative;width:56px;height:56px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px ${typeColorFromCode(activeSubtype)};display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/${activeSubtype.toLowerCase()}.jpg" alt="${g.tier}" loading="lazy" style="position:absolute;top:${tierAvatarTop(activeSubtype)};left:${tierAvatarLeft(activeSubtype)};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
          <div style="font-size:.68rem;text-transform:uppercase;letter-spacing:.07em;color:var(--muted);font-weight:600;">Kommunikationsguide &middot; ${activeSubtype} &middot; Tierentsprechung: ${g.tier}</div>
        </div>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1rem 0 .6rem;color:var(--ink);">1. Woran erkennst du die ${activeSubtype}?</h3>
        <p style="margin:0 0 .8rem;font-size:.92rem;line-height:1.75;color:var(--ink);">${g.erkennung}</p>

        <div style="border-left:3px solid color-mix(in srgb, var(--copper) 45%, var(--line));padding:.8rem 1rem;background:color-mix(in srgb, var(--copper) 5%, var(--paper));border-radius:0 .5rem .5rem 0;margin-bottom:1rem;">
          <div style="font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);font-weight:700;margin-bottom:.4rem;">${g.wunde.titel}</div>
          <p style="margin:0;font-size:.9rem;line-height:1.7;color:var(--ink);">${g.wunde.text}</p>
        </div>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.2rem 0 .6rem;color:var(--ink);">${g.fluegel.titel}</h3>
        <ul style="margin:0 0 1rem;padding-left:1.2rem;font-size:.9rem;line-height:1.7;color:var(--ink);">
          <li style="margin-bottom:.6rem;"><strong>${g.fluegel.w1.code}</strong> (Beispiel: <a href="javascript:void(0)" data-route="${g.fluegel.w1.route}">${g.fluegel.w1.name}</a>) &ndash; ${g.fluegel.w1.text}</li>
          <li><strong>${g.fluegel.w2.code}</strong> (Beispiel: <a href="javascript:void(0)" data-route="${g.fluegel.w2.route}">${g.fluegel.w2.name}</a>) &ndash; ${g.fluegel.w2.text}</li>
        </ul>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.2rem 0 .6rem;color:var(--ink);">Stress- und Wachstumsrichtung</h3>
        <p style="margin:0 0 .6rem;font-size:.9rem;line-height:1.7;color:var(--ink);">${g.stressWachstum.stress}</p>
        <p style="margin:0 0 1rem;font-size:.9rem;line-height:1.7;color:var(--ink);">${g.stressWachstum.wachstum}</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.2rem 0 .6rem;color:var(--ink);">2. Was in der Kommunikation wirklich ankommt</h3>
        <ul style="margin:0 0 1rem;padding-left:1.2rem;font-size:.9rem;line-height:1.7;color:var(--ink);">
          ${g.ankommt.map(a => `<li style="margin-bottom:.4rem;">${a}</li>`).join("")}
        </ul>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.2rem 0 .6rem;color:var(--ink);">3. Typische Trigger &ndash; und wie du sie vermeidest</h3>
        <div style="display:grid;gap:.7rem;margin-bottom:1rem;">
          ${g.trigger.map(t => `
            <div style="border:1px solid var(--line);border-radius:.6rem;padding:.7rem .9rem;background:var(--paper);">
              <div style="font-size:.88rem;color:var(--ink);font-weight:600;margin-bottom:.25rem;">${t.trigger}</div>
              <div style="font-size:.82rem;color:var(--muted);margin-bottom:.35rem;">${t.warum}</div>
              <div style="font-size:.85rem;color:color-mix(in srgb, var(--copper) 70%, #2d6a4f);"><strong>Stattdessen:</strong> ${t.alternative}</div>
            </div>
          `).join("")}
        </div>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.2rem 0 .6rem;color:var(--ink);">4. ${g.fuehrung.titel}</h3>
        <p style="margin:0 0 .5rem;font-size:.9rem;line-height:1.75;color:var(--ink);">${g.fuehrung.text}</p>
        <p style="margin:0 0 1rem;font-size:.78rem;line-height:1.6;color:var(--muted);font-style:italic;">Hinweis: ${g.fuehrung.hinweis}</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.2rem 0 .6rem;color:var(--ink);">5. ${g.beziehung.titel}</h3>
        <p style="margin:0 0 .4rem;font-size:.9rem;line-height:1.7;color:var(--ink);"><strong>Beziehungsrisiko:</strong> ${g.beziehung.risiko}</p>
        <p style="margin:0 0 .4rem;font-size:.9rem;line-height:1.7;color:var(--ink);"><strong>Leitfragen an sich selbst:</strong> ${g.beziehung.leitfragen}</p>
        <p style="margin:0 0 1rem;font-size:.9rem;line-height:1.7;color:var(--ink);"><strong>Was dem Umfeld hilft:</strong> ${g.beziehung.hilfreich}</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.2rem 0 .6rem;color:var(--ink);">6. Im Zusammenspiel mit anderen Subtypen</h3>
        <div style="display:grid;gap:.6rem;margin-bottom:1rem;">
          ${g.pairing.map(p => `
            <div style="border:1px solid var(--line);border-radius:.6rem;padding:.6rem .9rem;font-size:.85rem;line-height:1.6;color:var(--ink);">
              <strong><span style="color:${typeColorFromCode(activeSubtype)};">${activeSubtype}</span> + <span style="color:${typeColorFromCode(p.partner)};">${p.partner}</span></strong> (${p.dynamik}): Gefahr &ndash; ${p.gefahr}. Hilfreich &ndash; ${p.hilfreich}.
            </div>
          `).join("")}
        </div>
        <p style="margin:0 0 1.2rem;font-size:.78rem;color:var(--muted);font-style:italic;">Alle 27 Paarungen (inklusive der Paarung mit sich selbst) aus "Die Sprache unserer Beziehungen".</p>

        <div style="background:rgba(180,120,0,0.08);border-left:3px solid var(--gold);padding:.9rem 1.1rem;border-radius:0 .6rem .6rem 0;">
          <div style="font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);font-weight:700;margin-bottom:.4rem;">Kurzfassung zum Merken</div>
          <p style="margin:0;font-size:.92rem;line-height:1.7;color:var(--ink);">${g.kurzfassung}</p>
        </div>
      </div>`;
  }

  return shell(`
    ${pageHeader("kommunikationsguide")}
    <section class="narrow">
      <p class="eyebrow">Praxis &middot; Beziehung &amp; F&uuml;hrung</p>
      <h1>Kommunikationsguide</h1>
      <p class="lead-small">Wie begegnest du einem bestimmten Subtyp am besten &ndash; im Alltag, in einer engen Beziehung oder als F&uuml;hrungskraft bzw. Kollege? Basierend auf "Die Sprache unserer Beziehungen", "F&uuml;hrung mit Fundament" und weiteren Werken von Detlef Rathmer. W&auml;hle einen Subtyp:</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(58px,1fr));gap:.4rem;margin:1.5rem 0 1rem;">
        ${subtypeGrid}
      </div>
      ${resultHtml}
      <div style="margin-top:2rem;padding:1rem 1.2rem;background:color-mix(in srgb, var(--copper) 5%, var(--paper));border-radius:10px;border:1px solid var(--line);font-size:.85rem;line-height:1.7;color:var(--muted);">
        Der Kommunikationsguide ersetzt keine Beratung oder Therapie, sondern gibt typspezifische Anhaltspunkte f&uuml;r besseres gegenseitiges Verst&auml;ndnis.
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.5rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">Buchempfehlungen zum Vertiefen</h2>
        ${bookTip("der-code-deiner-persoenlichkeit", "Die eigene Motivation entschlüsseln – Spurensuche zur persönlichen Typbestimmung.", "Der Code deiner Persönlichkeit")}
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "Die 27 Subtypen im Detail – wie Instinkt und Typ zusammenwirken.", "Die verborgene Dynamik der 27 Subtypen")}
        ${bookTip("enneagramm-zoo", "Die 27 Subtypen als Tierarchetypen – anschaulich, humorvoll, einprägsam.", "Enneagramm-Zoo")}
        ${bookTip("fuehrung-mit-fundament", "Enneagramm in der Führungspraxis – typgerecht führen, Muster erkennen, Teams stärken.", "Führung mit Fundament (Detlef Rathmer & David L. Rathmer)")}
        ${bookTip("hinter-der-leidenschaft", "Die neun Wunden des Enneagramms – was hinter der Leidenschaft jedes Typs wirklich steckt.", "Hinter der Leidenschaft – die neun Wunden des Enneagramms")}
        ${bookTip("heilung-als-erinnerung", "Heilung nicht als Reparatur, sondern als Erinnerung an das, was wir eigentlich sind.", "Heilung als Erinnerung")}
        ${bookTip("die-sprache-unserer-beziehungen", "Nähe gestalten mit dem Enneagramm – die Basis dieses Kommunikationsguides, mit allen 365 Paarungskombinationen.", "Die Sprache unserer Beziehungen")}
        ${bookTip("die-sprache-unserer-sexualitaet", "Wie sich die 27 Subtypen in Anziehung, Nähe und Leidenschaft unterscheiden.", "Die Sprache unserer Sexualität")}
        ${bookTip("leidenschaft-und-heilung", "27 Subtypen – Leidenschaften, Tugenden und Heilungswege direkt aus der therapeutischen Praxis.", "Leidenschaft und Heilung")}
        ${bookTip("in-der-tiefe-der-zeit", "Ein Buch über Bewusstsein, Zeit und die stille Dimension hinter allem Erleben.", "In der Tiefe der Zeit")}
        ${bookTip("das-seminar-wenn-masken-fallen", "Wenn die typspezifischen Masken fallen – ein Weg zu echter Selbstbegegnung.", "Das Seminar – Wenn Masken fallen")}
        ${bookTip("wenn-die-stille-brennt", "Wie Burnout je nach Subtyp entsteht, sich anfühlt und überwunden werden kann.", "Wenn die Stille brennt – Burnout")}
        ${bookTip("meta-intelligenz", "Die Intelligenz, die alle anderen Intelligenzen verbündet – für mehr innere Klarheit in jeder Kommunikation.", "Meta-Intelligenz")}
        ${bookTip("meta-intelligenz-das-hoerbuch", "Meta-Intelligenz als Hörbuch – ideal für unterwegs oder zum meditativen Zuhören.", "Meta-Intelligenz – Das Hörbuch")}
      </div>

      ${relatedLinks([
        {route:"beziehungen", label:"Beziehungskompass"},
        {route:"situationskompass", label:"Situationskompass"},
        {route:"krisenkompass", label:"Krisenkompass"},
      ])}
    </section>
  `);
}

function situationskompasPage() {
  const SUBTYPES = ["SE1","SO1","SX1","SE2","SO2","SX2","SE3","SO3","SX3","SE4","SO4","SX4","SE5","SO5","SX5","SE6","SO6","SX6","SE7","SO7","SX7","SE8","SO8","SX8","SE9","SO9","SX9"];
  const profCode = getProfile().toUpperCase();
  const activeSubtype = situKompState.subtypeCode || (SUBTYPES.includes(profCode) ? profCode : "SE1");
  const activeSitu = situKompState.situId;
  const langEN = location.pathname.startsWith('/en');

  const situationen = SITUATIONSKOMPASS.situationen;
  const eintraege = SITUATIONSKOMPASS.eintraege;

  const situGrid = situationen.map(s => {
    const hasData = eintraege[activeSubtype] && eintraege[activeSubtype][s.id];
    const isActive = s.id === activeSitu;
    const borderColor = isActive ? "var(--copper)" : "var(--line)";
    const bg = isActive ? "color-mix(in srgb,var(--copper) 10%,var(--paper))" : "var(--paper)";
    const textColor = isActive ? "var(--copper)" : "var(--ink)";
    const cursor = hasData ? "pointer" : "default";
    const opacity = hasData ? "1" : ".45";
    return `
      <button
        class="situ-btn"
        data-situ-id="${s.id}"
        ${!hasData ? "disabled" : ""}
        style="display:flex;flex-direction:column;align-items:center;gap:.3rem;padding:.75rem .5rem;border-radius:.75rem;border:1.5px solid ${borderColor};background:${bg};cursor:${cursor};opacity:${opacity};font-family:inherit;transition:border-color .15s,background .15s;">
        <span style="font-size:1.4rem;">${s.icon}</span>
        <span style="font-size:.65rem;font-weight:600;color:${textColor};text-align:center;line-height:1.25;">${s.label}${!hasData ? '<br><span style="font-size:.65rem;color:var(--muted);font-weight:400;">bald</span>' : ''}</span>
      </button>`;
  }).join("");

  const subtypeRow = SUBTYPES.map(code => {
    const isMe = code === profCode;
    const isSel = code === activeSubtype;
    const borderC = isSel ? "var(--copper)" : "var(--line)";
    const bgC = isSel ? "color-mix(in srgb,var(--copper) 12%,var(--paper))" : "var(--paper)";
    const fw = isMe ? "700" : "500";
    const colorC = isSel ? "var(--copper)" : "var(--ink)";
    return `<button data-situ-subtype="${code}" style="padding:.3rem .55rem;border-radius:.4rem;border:1.5px solid ${borderC};background:${bgC};font-size:.78rem;font-weight:${fw};color:${colorC};cursor:pointer;font-family:inherit;white-space:nowrap;">${code}${isMe ? " \u2605" : ""}</button>`;
  }).join("");

  let resultHtml = "";
  if (activeSitu) {
    const entry = eintraege[activeSubtype] && eintraege[activeSubtype][activeSitu];
    const situ = situationen.find(s => s.id === activeSitu);
    if (entry) {
      resultHtml = `
        <div style="background:var(--paper);border:1px solid var(--copper);border-radius:1rem;padding:1.4rem 1.6rem;margin-top:1.5rem;">
          <div style="display:flex;align-items:center;gap:.6rem;margin-bottom:1.1rem;">
            <span style="font-size:1.5rem;">${situ.icon}</span>
            <div>
              <div style="font-size:.68rem;text-transform:uppercase;letter-spacing:.07em;color:var(--muted);font-weight:600;">Situationskompass &middot; ${activeSubtype}</div>
              <div style="font-size:1.05rem;font-weight:700;color:var(--ink);">${situ.label}</div>
            </div>
          </div>
          <div style="display:grid;gap:.85rem;">
            <div style="border-left:3px solid color-mix(in srgb,var(--copper) 45%,var(--line));padding:.75rem 1rem;background:color-mix(in srgb,var(--copper) 5%,var(--paper));border-radius:0 .5rem .5rem 0;">
              <div style="font-size:.65rem;text-transform:uppercase;letter-spacing:.07em;color:var(--muted);font-weight:700;margin-bottom:.4rem;">Autopilot</div>
              <p style="margin:0;font-size:.9rem;line-height:1.7;color:var(--ink);">${langEN && entry.autopilotEN ? entry.autopilotEN : entry.autopilot}</p>
            </div>
            <div style="border-left:3px solid var(--copper);padding:.75rem 1rem;background:color-mix(in srgb,var(--copper) 8%,var(--paper));border-radius:0 .5rem .5rem 0;">
              <div style="font-size:.65rem;text-transform:uppercase;letter-spacing:.07em;color:var(--copper);font-weight:700;margin-bottom:.4rem;">${langEN ? 'Awareness' : 'Bewusstheit'}</div>
              <p style="margin:0;font-size:.9rem;line-height:1.7;color:var(--ink);font-style:italic;">${langEN && entry.bewusstheitEN ? entry.bewusstheitEN : entry.bewusstheit}</p>
            </div>
            <div style="border-left:3px solid color-mix(in srgb,var(--copper) 65%,#2d6a4f);padding:.75rem 1rem;background:color-mix(in srgb,var(--copper) 6%,var(--paper));border-radius:0 .5rem .5rem 0;">
              <div style="font-size:.65rem;text-transform:uppercase;letter-spacing:.07em;color:color-mix(in srgb,var(--copper) 70%,#2d6a4f);font-weight:700;margin-bottom:.4rem;">${langEN ? 'Exercise' : '&Uuml;bung'}</div>
              <p style="margin:0;font-size:.9rem;line-height:1.7;color:var(--ink);">${langEN && entry.uebungEN ? entry.uebungEN : entry.uebung}</p>
            </div>
          </div>
        </div>`;
    }
  } else {
    resultHtml = `<p style="text-align:center;color:var(--muted);font-size:.9rem;margin-top:2rem;">W&auml;hle eine Situation, um deinen pers&ouml;nlichen Impuls zu erhalten.</p>`;
  }

  return shell(`
    ${pageHeader("situationskompass")}
    <section class="narrow">
      <p class="eyebrow">Praxis &middot; Bewusste Impulse</p>
      <h1>Situationskompass</h1>
      <p class="lead-small">In welcher Lebenssituation steckst du gerade? W&auml;hle eine Situation und entdecke deinen typspezifischen Autopiloten &ndash; und den Bewusstseinsimpuls, der ihn aufweicht.</p>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:.5rem;margin:1.5rem 0 1rem;">
        ${situGrid}
      </div>
      <details style="margin-bottom:1rem;">
        <summary style="font-size:.82rem;color:var(--muted);cursor:pointer;user-select:none;list-style:none;display:flex;align-items:center;gap:.4rem;">
          <span style="color:var(--copper);font-weight:600;">Subtyp wechseln</span>
          <span style="font-size:.65rem;">&middot; aktuell: <strong>${activeSubtype}</strong>${activeSubtype === profCode ? " (mein Profil)" : ""}</span>
        </summary>
        <div style="display:flex;flex-wrap:wrap;gap:.4rem;padding:.75rem 0 .25rem;">
          ${subtypeRow}
        </div>
      </details>
      ${resultHtml}
    </section>
  `);
}

function gifteDesGeistesPage() {
  return shell(`
    ${pageHeader("gifte-des-geistes")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Bewusstsein & Leidenschaft</p>
      <h1>Die 3 Gifte des Geistes und die 9 Leidenschaften</h1>
      <p class="lead-small">Die tibetisch-buddhistische Lehre kennt drei \u201eGifte des Geistes" (Gier, Hass, Unwissenheit), die zur Ruhe kommen m\u00fcssen, damit innerer Frieden entsteht. Das Enneagramm ordnet die 9 Leidenschaften diesen drei Grundbewegungen zu.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/gifte-des-geistes/gifte-des-geistes.jpg"
             alt="Die 3 Gifte des Geistes und die 9 Enneagramm-Leidenschaften"
             class="psycho-img" />
      </div>
      <div style="margin-top:2rem; display:flex; flex-direction:column; gap:1rem;">
        <div style="border-left:3px solid #c0392b; padding:0.75rem 1rem; background:color-mix(in srgb, #c0392b 6%, transparent); border-radius:0 0.5rem 0.5rem 0;">
          <strong style="color:#c0392b;">Dreieck der Begierde / des Verlangens (Typ 2 \u00b7 5 \u00b7 8)</strong><br>
          Die Geisteshaltung der Enneagrammtypen 2, 5 und 8 ist gepr\u00e4gt durch eine extreme Gier / Anhaftung.<br><br>
          Gier (pali <em>lobha</em>, tib. <em>'dod chags</em>), auch als Sucht oder Begierde \u00fcbersetzt, ist das Haben- und Besitzenwollen, das Bestreben, auf jeden Fall und um jeden Preis zu existieren. Mit Gier verwandt sind die Leidenschaften heftiges Begehren (<em>raga</em>) und \u201eDurst" nach Werden (<em>tanha</em>).<br><br>
          Heilsam wirkt Gro\u00dfz\u00fcgigkeit und Mildt\u00e4tigkeit (<em>D\u0101na</em>) und das entsprechende hom\u00f6opathische Enneagramm-Heilmittel.
        </div>
        <div style="border-left:3px solid #27ae60; padding:0.75rem 1rem; background:color-mix(in srgb, #27ae60 6%, transparent); border-radius:0 0.5rem 0.5rem 0;">
          <strong style="color:#27ae60;">Dreieck des Hasses / der Aggression (Typ 1 \u00b7 4 \u00b7 7)</strong><br>
          Die Geisteshaltung der Enneagrammtypen 1, 4 und 7 ist gepr\u00e4gt durch eine extreme ablehnende Haltung.<br><br>
          Hass (pali <em>dosa</em>, skt. <em>dve\u1e63a</em>), auch als Zorn oder Aggression \u00fcbersetzt, ist die Selbstbehauptung eines illusion\u00e4ren Selbst dem Mitwesen gegen\u00fcber.<br><br>
          Heilsam wirkt G\u00fcte (<em>Metta</em>) und das entsprechende hom\u00f6opathische Enneagramm-Heilmittel.
        </div>
        <div style="border-left:3px solid #2980b9; padding:0.75rem 1rem; background:color-mix(in srgb, #2980b9 6%, transparent); border-radius:0 0.5rem 0.5rem 0;">
          <strong style="color:#2980b9;">Dreieck der Unwissenheit / Ignoranz (Typ 3 \u00b7 6 \u00b7 9)</strong><br>
          Die Geisteshaltung der Enneagrammtypen 3, 6 und 9 ist gepr\u00e4gt durch eine extreme gleichg\u00fcltige Haltung.<br><br>
          Verblendung (<em>moha</em>). Unwissenheit (skt. <em>avidy\u0101</em>) und Nicht-Wissen sind weitgehend deckungsgleiche Begriffe. Die Unwissenheit ist ein Zustand, der als Grundursache f\u00fcr alles erfahrene Leid angesehen wird.<br><br>
          Heilsam wirken Selbsterkenntnis und Liebe und das entsprechende hom\u00f6opathische Enneagramm-Heilmittel.
        </div>
      </div>
      ${bookTip("leidenschaft-und-heilung", "Die 9 Leidenschaften und ihre buddhistischen Wurzeln &ndash; mit Heilungsweg aus der hom\u00f6opathischen Praxis.", "Leidenschaft und Heilung")}
      ${relatedLinks([
        {route:"neun-logismoi", label:"9 Logismoi nach Evagrius"},
        {route:"leidenschaft-und-wunde", label:"Leidenschaft & Wunde"},
        {route:"spirituelle-uebungen", label:"Spirituelle \xdcbungen"},
      ])}
    </section>
  `);
}

function empfindlichePunktePage() {
  return shell(`
    ${pageHeader("empfindliche-punkte")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Empfindliche Punkte</p>
      <h1>Empfindliche Punkte der 9 Enneagrammtypen</h1>
      <p class="lead-small">Mit welchen Bemerkungen man das Ego \u2014 das falsche Selbst, die falsche Pers\u00f6nlichkeit \u2014 der 9 Enneagrammtypen maximal aktiviert und herausfordert. Wer diese Punkte kennt, kann bewusster und achtsamer mit anderen umgehen.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/empfindliche-punkte/empfindliche-punkte.jpg"
             alt="Empfindliche Punkte der 9 Enneagrammtypen"
             class="psycho-img" />
      </div>
      ${relatedLinks([
        {route:"bedrohungsszenarien", label:"Bedrohungsszenarien"},
        {route:"gaslighting-enneagramm", label:"Gaslighting & Enneagramm"},
        {route:"basisemotionen", label:"Basisemotionen"},
      ])}
    </section>
  `);
}

function angstEssenzPage() {
  return shell(`
    ${pageHeader("angst-essenz")}
    <div style="max-width:680px;margin:0 auto;padding:0 1rem 3rem;">
      <p class="eyebrow">Schaubilder \xb7 Tiefenpsychologie</p>
      <h1 class="section-title">Angst \u2192 Essenz</h1>
      <p class="psycho-intro">Die neun Enneagrammtypen lassen sich nicht nur \xfcber ihre Leidenschaften verstehen, sondern tiefer: \xfcber ihre Grundangst. Was nach au\xdfen als Zorn, Stolz oder Tr\u00e4gheit erscheint, ist psychodynamisch betrachtet die emotionale F\xe4rbung einer existenziellen Schutzreaktion. Dieses Schaubild zeigt den Weg von der Angst \xfcber Stabilisierung und Fixierung bis zur Essenz eines jeden Typs.</p>
      <img
        src="./assets/angst-essenz.png"
        alt="Angst zur Essenz &ndash; alle 9 Enneagrammtypen"
        style="width:100%;border-radius:12px;margin:0 auto 2.5rem;display:block;"
      />

      <div class="vb-section" style="max-width:100%;">

        <p class="vb-intro">In vielen Darstellungen hei\xdft es: Die Leidenschaft befeuert die intrinsische Motivation. Psychodynamisch betrachtet l\xe4sst sich das jedoch auch umgekehrt lesen: Nicht die Leidenschaft erzeugt das Verhalten. Die Leidenschaft ist der energetische Ausdruck einer tiefer liegenden Grundangst.</p>
        <p class="vb-intro" style="font-style:italic;color:var(--muted);">Das Ego organisiert sich um eine existenzielle Bedrohung. Aus dieser Bedrohung entsteht eine Stabilisierungstendenz &ndash; aus der Stabilisierung eine Fixierung &ndash; und die Leidenschaft ist die emotionale F\xe4rbung dieser Fixierung.</p>

        ${[
          { nr:1, titel:"Angst vor Fehlerhaftigkeit",
            angst:"Ich bin falsch.", org:"Starke innere Norm, Selbstkontrolle, moralische Orientierung.",
            leidenschaft:"Zorn &ndash; nicht prim\xe4r Aggression, sondern Spannung gegen innere Unvollkommenheit.",
            motivation:"Verbesserung, Richtigkeit, Integrit\xe4t.",
            reife:"Wird diese Angst bewusster gehalten, wandelt sich Strenge in reife Gewissenhaftigkeit.",
            essenz:"Weisheit" },
          { nr:2, titel:"Angst vor Nicht-Liebensw\u00fcrdigkeit",
            angst:"Ich bin nur wertvoll, wenn ich gebraucht werde.", org:"Beziehung als Selbstwertquelle.",
            leidenschaft:"Stolz &ndash; \xdcberbetonung der eigenen Gebef\xe4higkeit.",
            motivation:"Helfen, Verbinden, Unterst\xfctzen.",
            reife:"Wenn die zugrunde liegende Angst erkannt wird, entsteht echte Selbstf\xfcrsorge statt kompensatorischer F\xfcrsorge.",
            essenz:"Liebe" },
          { nr:3, titel:"Angst vor Wertlosigkeit",
            angst:"Ohne Leistung bin ich nichts.", org:"Identifikation mit Erfolg, Effizienz, Anpassungsf\xe4higkeit.",
            leidenschaft:"Eitelkeit &ndash; Selbstdefinition \xfcber \xe4u\xdfere Wirksamkeit.",
            motivation:"Erfolg, Sichtbarkeit, Produktivit\xe4t.",
            reife:"Wird die Angst vor Bedeutungslosigkeit bewusst, entsteht Authentizit\xe4t &ndash; Leistung ohne Selbstverlust.",
            essenz:"Wahrhaftigkeit" },
          { nr:4, titel:"Angst vor Identit\u00e4tsverlust",
            angst:"Ich habe keine eigene Substanz.", org:"Intensivierung von Gef\xfchlen, Suche nach Einzigartigkeit.",
            leidenschaft:"Neid &ndash; Vergleich mit dem vermeintlich vollst\xe4ndigeren Anderen.",
            motivation:"Tiefe, Ausdruck, Besonderheit.",
            reife:"Wenn die Angst integriert wird, entsteht stille Identit\xe4t ohne dramatische Selbst\xfcberh\xf6hung.",
            essenz:"Urspr\xfcnglichkeit" },
          { nr:5, titel:"Angst vor \u00dcberw\u00e4ltigung",
            angst:"Die Welt fordert mehr, als ich geben kann.", org:"R\xfcckzug, Distanz, Wissensakkumulation.",
            leidenschaft:"Geiz &ndash; Zur\xfcckhalten von Energie.",
            motivation:"Verstehen, Autonomie, geistige Klarheit.",
            reife:"Wird die Angst vor Inanspruchnahme gehalten, entsteht echtes Vertrauen in Teilhabe.",
            essenz:"Verstehen" },
          { nr:6, titel:"Angst vor Haltlosigkeit",
            angst:"Ich bin ohne Schutz.", org:"Pr\xfcfung, Loyalit\xe4t, Zweifel oder Gegenwehr.",
            leidenschaft:"Angst &ndash; dauernde innere Alarmbereitschaft.",
            motivation:"Sicherheit, Struktur, Verl\xe4sslichkeit.",
            reife:"Wenn die Angst nicht mehr verdr\xe4ngt wird, entsteht Mut &ndash; nicht als Abwesenheit von Angst, sondern als bewusster Umgang mit ihr.",
            essenz:"Vertrauen" },
          { nr:7, titel:"Angst vor innerem Schmerz",
            angst:"Wenn ich stehenbleibe, begegne ich Leid.", org:"Expansion, Planung, Optionenvielfalt.",
            leidenschaft:"V\xf6llerei &ndash; psychische \xdcberf\xfclle.",
            motivation:"Freiheit, Erlebnis, M\xf6glichkeiten.",
            reife:"Wird der Schmerz zugelassen, entsteht tiefe Freude statt hektischer Ablenkung.",
            essenz:"Freude" },
          { nr:8, titel:"Angst vor Verletzbarkeit",
            angst:"Wenn ich schwach bin, werde ich beherrscht.", org:"St\xe4rke, Direktheit, Kontrolle.",
            leidenschaft:"Lust / Intensit\xe4t &ndash; Kraft als Gegenpol zur Ohnmacht.",
            motivation:"Selbstbestimmung, Durchsetzung.",
            reife:"Wird Verletzlichkeit integriert, entsteht Gro\xdfherzigkeit &ndash; Kraft ohne Abwehr.",
            essenz:"Unschuldige Kraft" },
          { nr:9, titel:"Angst vor Trennung",
            angst:"Wenn ich mich zeige, verliere ich Verbindung.", org:"Anpassung, Konfliktvermeidung, Selbstvergessenheit.",
            leidenschaft:"Tr\xe4gheit &ndash; innere Abspaltung eigener Impulse.",
            motivation:"Harmonie, Frieden, Stabilit\xe4t.",
            reife:"Wenn die Angst vor Abgrenzung bewusst wird, entsteht echte Pr\xe4senz.",
            essenz:"Frieden" },
        ].map(t => `
          <div class="vb-typ">
            <h3 class="vb-typ__head"><span class="vb-typ__nr">Typ\xa0${t.nr}</span> &ndash; ${t.titel}</h3>
            <div style="display:grid;gap:.25rem .6rem;font-size:.85rem;margin:.5rem 0 .6rem;color:var(--ink);">
              <div><span style="color:var(--muted);font-style:italic;">Grundangst:</span> \u201e${t.angst}\u201c</div>
              <div><span style="color:var(--muted);font-style:italic;">Ich-Organisation:</span> ${t.org}</div>
              <div><span style="color:var(--muted);font-style:italic;">Leidenschaft:</span> ${t.leidenschaft}</div>
              <div><span style="color:var(--muted);font-style:italic;">Intrinsische Motivation:</span> ${t.motivation}</div>
            </div>
            <p class="vb-typ__text">${t.reife}</p>
            <p style="font-size:.85rem;font-weight:700;color:var(--copper);margin:.3rem 0 0;">Essenz: ${t.essenz}</p>
          </div>
        `).join("")}

        <div style="border-top:1px solid var(--line);padding-top:1.6rem;margin-top:2rem;">
          <h2 style="font-size:1.05rem;font-weight:700;margin-bottom:1rem;color:var(--ink);">Angeborene Disposition und Entwicklung</h2>
          <p class="vb-intro">Diese Strukturen sind nicht ausschlie\xdflich Ergebnis fr\xfcher Lebenserfahrungen. Temperamentsforschung und Zwillingsstudien zeigen, dass Menschen mit unterschiedlichen Reaktionsdispositionen geboren werden. Wir bringen eine bestimmte Sensibilit\xe4t f\xfcr eine spezifische Form von Bedrohung mit auf diese Welt. Diese Disposition trifft auf fr\xfche Beziehungserfahrungen &ndash; aus dieser Wechselwirkung entsteht die Ich-Struktur.</p>
          <p class="vb-intro" style="font-style:italic;color:var(--muted);">Angst \u2192 Stabilisierung \u2192 Fixierung \u2192 Leidenschaft \u2192 Identit\xe4t.</p>
          <p class="vb-intro">Was wir als \u201eIntrinsische Motivation\u201c erleben, ist oft die rationalisierte Form dieser Stabilisierung. Die Leidenschaft ist nicht die prim\xe4re Ursache, sondern der affektive Ausdruck der Abwehrorganisation.</p>
        </div>

        <div style="border-top:1px solid var(--line);padding-top:1.6rem;margin-top:1.5rem;">
          <h2 style="font-size:1.05rem;font-weight:700;margin-bottom:1rem;color:var(--ink);">Reifung und Freiheit</h2>
          <p class="vb-intro">Reifung bedeutet nicht, die Struktur abzuschaffen. Reifung bedeutet, die zugrunde liegende Angst bewusst halten zu k\xf6nnen. Wenn Angst nicht mehr unbewusst regiert, ver\xe4ndert sich die Qualit\xe4t der Energie:</p>
          <div style="display:grid;gap:.4rem;font-size:.85rem;margin:1rem 0 1.2rem;padding:.8rem 1rem;background:var(--paper);border-radius:8px;border:1px solid var(--line);">
            ${[
              ["\xe4u\xdfere Moral","innere Weisheit"],
              ["\xe4u\xdferes Helfen","tiefe Liebe"],
              ["\xe4u\xdfere Leistung","innere Wahrhaftigkeit"],
              ["\xe4u\xdfere Intensit\xe4t","wahre innere Identit\xe4t"],
              ["\xe4u\xdferer R\xfcckzug","inneres Verstehen"],
              ["\xe4u\xdfere Vorsicht","tiefes Vertrauen"],
              ["oberfl\xe4chliche Begeisterung","tiefe Freude"],
              ["\xe4u\xdfere St\xe4rke","innere Gro\xdfherzigkeit"],
              ["\xe4u\xdfere Harmonie","innerer Frieden"],
            ].map(([von,zu]) => `<div><span style="color:var(--muted);">${von}</span> <span style="color:var(--copper);font-weight:700;">\u2192</span> <span style="font-weight:600;">${zu}</span></div>`).join("")}
          </div>
          <p class="vb-intro">Nicht der Typ verschwindet. Aber die Angst verliert ihre Vorherrschaft.</p>
        </div>

        <div style="border-left:3px solid var(--gold);padding:.9rem 1.1rem;margin:2rem 0;background:var(--paper);border-radius:0 8px 8px 0;">
          <p style="margin:0 0 .5rem;font-size:.92rem;color:var(--ink);line-height:1.7;"><em>Das Enneagramm zeigt uns nicht, wer wir sind. Es zeigt uns, wovor wir Angst haben oder bislang hatten.</em></p>
          <p style="margin:0;font-size:.92rem;color:var(--ink);line-height:1.7;"><em>Und dort, wo Angst bewusst gehalten werden kann, entsteht eine Freiheit, die nichts mehr kompensieren muss. Nicht Dramatisches. Nichts Spektakul\xe4res. Nur Gegenw\xe4rtigkeit &ndash; und aus ihr heraus Handlung als Ausdruck, nicht als Abwehr.</em></p>
        </div>

        ${relatedLinks([
          {route:"wunden", label:"Wunden & Schutzstrategien"},
          {route:"kerneberzeugungen", label:"Kern\xfcberzeugungen"},
          {route:"frieden-schliessen", label:"Frieden schlie\xdfen"},
        ])}
      </div>
    </div>
  `);
}

function aufmerksamkeitsfokusPage() {
  return shell(`
    ${pageHeader("aufmerksamkeitsfokus")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Aufmerksamkeitsfokus</p>
      <h1>Aufmerksamkeitsfokus & Blindheit der 9 Enneagrammtypen</h1>
      <p class="lead-small">Jeder Enneagrammtyp richtet seinen Aufmerksamkeitsfokus unbewusst auf bestimmte Aspekte des Lebens \u2014 und blendet andere dabei aus. Diese \u00dcbersicht zeigt, worauf jeder Typ besonders achtet und was ihm dadurch im blinden Fleck bleibt.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/aufmerksamkeitsfokus/aufmerksamkeitsfokus.jpg"
             alt="Aufmerksamkeitsfokus und Blindheit der 9 Enneagrammtypen"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.5rem;">
        <p class="vb-intro">Die 9 unterschiedlichen Enneagrammtypen richten schon aufgrund ihres meist unbewussten, spezifischen Wahrnehmungsmusters ihren Aufmerksamkeitsfokus auf bestimmte Aspekte (Eigenschaften, Situationen, Beziehungen) des Lebens. Diese Aspekte sind f\u00fcr den jeweiligen Typ so wichtig, dass er andere notwendigerweise vernachl\u00e4ssigen muss \u2014 was zu einer mehr oder weniger eingeschr\u00e4nkten Wahrnehmung, einer Blindheit, f\u00fchren kann.</p>
        <div style="display:grid;gap:.5rem;font-size:.9rem;line-height:1.7;">
          <div><span style="font-weight:700;color:#5f5f5f;">Typ 1 (Der Prinzipien-Orientierte):</span> Fokus auf Richtig &amp; Falsch &ndash; blind f\u00fcr emotionale Zwischent\u00f6ne.</div>
          <div><span style="font-weight:700;color:#7a2fa8;">Typ 2 (Der Liebesorientierte):</span> Fokus auf Anerkennung &ndash; blind f\u00fcr die W\u00fcrde anderer.</div>
          <div><span style="font-weight:700;color:#1fa688;">Typ 3 (Der Erfolgsorientierte):</span> Fokus auf Leistungen &ndash; blind f\u00fcr die Eigenschaften anderer.</div>
          <div><span style="font-weight:700;color:#3cbf1f;">Typ 4 (Der Selbstorientierte):</span> Fokus auf das Gute im Fehlenden &ndash; blind f\u00fcr das Gute im Vorhandenen.</div>
          <div><span style="font-weight:700;color:#124fcc;">Typ 5 (Der Erkenntnisorientierte):</span> Fokus auf Anforderungen anderer &ndash; blind f\u00fcr Bed\u00fcrfnisse anderer.</div>
          <div><span style="font-weight:700;color:#8a5222;">Typ 6 (Der Sicherheitsorientierte):</span> Fokus auf die Absichten anderer &ndash; blind f\u00fcr die Motive anderer (das Motiv ist der tiefere Beweggrund hinter einer Absicht).</div>
          <div><span style="font-weight:700;color:#d4a800;">Typ 7 (Der Lustorientierte):</span> Fokus auf eine ideale Welt &ndash; blind f\u00fcr Notwendigkeiten.</div>
          <div><span style="font-weight:700;color:#a00802;">Typ 8 (Der Machtorientierte):</span> Fokus auf Kontrolle &ndash; blind f\u00fcr die Freiheit anderer.</div>
          <div><span style="font-weight:700;color:#cc6e00;">Typ 9 (Der Harmonieorientierte):</span> Fokus auf Komplexit\u00e4t &ndash; blind f\u00fcr das Wesentliche.</div>
        </div>
      </div>
      ${bookTip("der-code-deiner-persoenlichkeit", "Wo liegt dein Aufmerksamkeitsfokus &ndash; und was siehst du dabei nicht? Der Code deiner Pers\u00f6nlichkeit.", "Der Code deiner Pers\u00f6nlichkeit")}
      ${relatedLinks([
        {route:"wahrnehmungsstile", label:"Wahrnehmungsstile"},
        {route:"mikroimpressionen", label:"Mikroimpressionen"},
        {route:"verbale-signale", label:"Verbale Signale"},
      ])}
    </section>
  `);
}

function sechzigSekundenScanPage() {
  return shell(`
    ${pageHeader("60-sekunden-scan")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Typisierung</p>
      <h1>60-Sekunden-Fixierungs-Scan</h1>
      <p class="lead-small">In drei Schritten zum Enneagrammtyp: Welche Persona zeigt die Person? Wie reagiert sie unter Druck? Wovor sch\u00fctzt sie sich? Diese Kurz\u00fcbersicht hilft, einen Typ schnell einzuordnen.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/scan/60-sekunden-scan.jpg"
             alt="60-Sekunden-Fixierungs-Scan"
             class="psycho-img" />
      </div>
      ${relatedLinks([
        {route:"enneagramm-profiling", label:"Enneagramm-Profiling"},
        {route:"aufmerksamkeitsfokus", label:"Aufmerksamkeitsfokus"},
        {route:"differenzierung", label:"Differenzierung"},
      ])}
    </section>
  `);
}

function mikroimpresionenPage() {
  const typen = [
    { nr:1, name:"Der Perfektionist",
      se:"Der Blick ist wach, pr\xfcfend, nie ganz entspannt &ndash; als w\xfcrde er permanent abgleichen, ob alles stimmt. Die Kieferpartie ist oft leicht angespannt, das L\xe4cheln kom\xefmt gehalten und sorgf\xe4ltig. Der K\xf6rper ist aufrecht, fast zu aufrecht. Man sp\xfcrt eine innere Anspannung, die sich als Korrektheit nach au\xdfen zeigt.",
      so:"Ein engagierter, lehrend-\xfcberzeugender Blick. Der K\xf6rper zeigt Haltung im Wortsinne &ndash; aufrecht, demonstrativ klar. Diese Person m\xf6chte ein Vorbild sein, und die Mimik transportiert das unmittelbar: Ernsthaftigkeit, Prinzipientreue, ein leises Sendungsbewusstsein.",
      sx:"Intensit\xe4t und Kontrolle in einem. Der Blick ist fordernd, fast herausfordernd. Die K\xf6rperspannung ist hoch, die Mimik zwischen strenger Beherrschung und aufgeladener Leidenschaft. Kompromissbereitschaft ist nicht ablesbar &ndash; daf\xfcr umso mehr innerer Brennwert." },
    { nr:2, name:"Der Helfer",
      se:"Ein sanftes, bem\xfchtes L\xe4cheln, das gleichzeitig fragt: Ist es gut? Gef\xe4llt es? Die Augen suchen Resonanz. Der Oberk\xf6rper neigt sich leicht vor &ndash; eine fast unmerkliche Geste des Zugewandt-Seins. Man sp\xfcrt F\xfcrsorge, aber auch eine zarte Bed\xfcrftigkeit darunter.",
      so:"Diese Variante strahlt. Die Augen sind gro\xdf, der Gesichtsausdruck lebendig und einladend. Der ganze K\xf6rper spricht: &bdquo;Ich bin f\xfcr euch da.&ldquo; Mitgef\xfchl wird sichtbar und sp\xfcrbar &ndash; eine Pr\xe4senz, die einen Raum emotional organisiert, ohne es laut zu tun.",
      sx:"Der Blick ist tiefer, durchdringender, weniger allgemein. Er sucht eine Person, nicht eine Gruppe. Die K\xf6rpersprache ist emotional aufgeladen, k\xf6rperlich pr\xe4sent. N\xe4he wird nicht angeboten &ndash; sie wird gesucht, manchmal dr\xe4ngend." },
    { nr:3, name:"Der Macher",
      se:"Kaum eine Regung, die nicht kalkuliert w\xe4re. Die Mimik ist glatt und kontrolliert, das L\xe4cheln sitzt perfekt. K\xf6rperspannung ist zielgerichtet, nicht defensiv. Was nach au\xdfen als Effizienz wirkt, hat innen oft einen Preis: N\xe4he wird nicht gezeigt, weil sie den Auftritt st\xf6ren k\xf6nnte.",
      so:"Hier leuchtet jemand. Die Mimik ist strahlend, der Ausdruck magnetisch &ndash; eine lebende Image-Pr\xe4sentation. Der K\xf6rper ist auf Wirkung ausgelegt und wei\xdf das. Man m\xf6chte hinschauen, man m\xf6chte zuh\xf6ren. Das ist gewollt.",
      sx:"Ein Blick, der haften bleibt. K\xf6rperlich pr\xe4sent, charmant, mit einer Note Dominanz. Diese Person wei\xdf, was Attraktivit\xe4t ist &ndash; und sie setzt sie ein. Das Verf\xfchrerische ist nicht unbedingt romantisch gemeint, aber es ist da." },
    { nr:4, name:"Der Individualist",
      se:"Eine Stille, die nicht leer ist &ndash; eher gef\xfcllt mit Innenleben. Der Blick schweift manchmal ins Ungef\xe4hre, die Mimik ist zur\xfckhaltend, fast melancholisch gef\xe4rbt. K\xf6rpersprache weich, manchmal wie zusammengefallen. Man sp\xfcrt jemanden, der viel f\xfchlt und wenig zeigt.",
      so:"Ganz anders: expressiv, dramatisch, suchend. Die Augen sprechen laut. Die Gestik unterstreicht das Gef\xfchlte. Diese Variante tr\xe4gt ihre Tiefe nach au\xdfen &ndash; nicht als Schau, sondern als ehrlichen Ausdruck einer inneren Welt, die immer zu f\xfcllen droht.",
      sx:"Sehnsuchtsvoller Blick, sinnliche Pr\xe4senz. Der K\xf6rper sucht N\xe4he, zieht sich dann zur\xfcck, zieht wieder an. Das Spiel zwischen Anziehung und R\xfcckzug ist nicht strategisch &ndash; es ist das eigentliche Wesen dieser Variante." },
    { nr:5, name:"Der Beobachter",
      se:"Wenig Mimik, viel Wahrnehmung. Der Blick ist abgewandt oder nach innen gerichtet, der K\xf6rper zieht sich leicht zur\xfcck. Energie wird gespart &ndash; sparsam verwendet, behutsam dosiert. Wer genau schaut, erkennt darunter einen scharfen, registrierenden Verstand.",
      so:"Wacher Blick mit einer leichten Stirnrunzel &ndash; als w\xfcrd er die Situation still katalogisieren. K\xf6rpersprache zur\xfckhaltend, aber nicht abweisend. Er ist da, er nimmt auf, er wertet &ndash; er zeigt es nur nicht. Ein stiller Analytiker.",
      sx:"Hier bricht etwas durch. Der Blick ist bohrend, fast geladen &ndash; eine konzentrierte Intensit\xe4t, die sich nicht erkl\xe4rt. K\xf6rperspannung hoch. Die \xdcbergabe in ein Gespr\xe4ch oder eine Idee kann fast k\xf6rperlich wirken. Geistige Verschmelzung als h\xf6chste Intimsph\xe4re." },
    { nr:6, name:"Der Loyale",
      se:"Der Blick trifft einen, pr\xfcft einen, misstraut vielleicht. Die Stirn ist oft leicht gerunzelt, die Haltung defensiv &ndash; Arme verschr\xe4nkt oder Schultern etwas angehoben. Diese Person ist aufmerksam, wachsam, still. Nicht feindselig, aber sicher nicht unvorsichtig.",
      so:"Die Augen scannen den Raum, suchen den Gruppenkontext. Die Mimik reagiert auf Stimmungen, fast wie ein Seismograf. K\xf6rpersprache will Zugeh\xf6rigkeit signalisieren &ndash; ich bin dabei, ich bin Teil davon. Verbindlichkeit als Sicherheitsgef\xfchl.",
      sx:"Konfrontierend, testend, direkt. Der Blick l\xf6st sich nicht leicht. Die K\xf6rpersprache ist fordernd, wechselt zwischen Angriff und R\xfcckzug. Diese Variante will herausfinden, ob man halten kann, was man verspricht &ndash; und sie testet das offen." },
    { nr:7, name:"Der Enthusiast",
      se:"Frohe Mimik mit einem Hauch Kontrolle &ndash; nicht unkontrolliert, aber beweglich. K\xf6rpersprache schnell, zielgerichtet, voll Energie. Es gibt immer einen n\xe4chsten Punkt, den n\xe4chsten Gedanken. Die Freude ist echt, aber sie ist auch effizient.",
      so:"Expressiv, lebhaft, ansteckend. Gro\xdfe Gesten, ein Blick, der einl\xe4dt. Diese Person macht einen Raum wach. Begeisterung ist ihr nat\xfcrliches Territorium &ndash; und sie teilt sie gro\xdfz\xfcgig. Charme als Naturzustand.",
      sx:"Ein spielerischer, aber intensiver Blick. K\xf6rpersprache dynamisch, manchmal verf\xfchrerisch. Man sp\xfcrt jemanden, der auf Abenteuer aus ist &ndash; intellektuell, emotional oder k\xf6rperlich. Die Energie sucht ihren Austausch." },
    { nr:8, name:"Der Herausforderer",
      se:"Ein fixierter Blick, der kaum ausweicht. Die Mimik ist kontrolliert, die K\xf6rperspannung defensiv-aggressiv zugleich. Unersch\u00fctterlichkeit nach au\xdfen, dahinter oft mehr Verletzlichkeit als sichtbar. Schwachstellen zeigen ist keine Option.",
      so:"Starke Pr\xe4senz &ndash; man sp\xfcrt diese Person, bevor sie spricht. Der Blick ist wachsam, der K\xf6rper besetzt den Raum, die Haltung ist klar und besch\u00fctzend. Nicht Dominanz um der Dominanz willen, sondern Verantwortung als gelebte Selbstverst\xe4ndlichkeit.",
      sx:"Magnetisch, rau, leidenschaftlich. Der Blick trifft einen direkt. K\xf6rpersprache ist auf Konfrontation oder Vereinnahmung ausgelegt &ndash; manchmal beides. Man sp\xfcrt: Diese Person ist vollst\xe4ndig pr\xe4sent. Das kann befreiend sein oder \xfcberw\u00e4ltigend." },
    { nr:9, name:"Der Friedensstifter",
      se:"Sanft, entspannt, fast schlummernd warm. Die Mimik ist ruhig, die K\xf6rpersprache weich und wenig angespannt. Man f\xfchlt sich wohl in dieser N\xe4he &ndash; aber manchmal fragt man sich: Was denkt dieser Mensch wirklich? Die innere Agenda bleibt unsichtbar.",
      so:"Ein offener, verbindender Blick &ndash; ausgleichend, vermittelnd. Der K\xf6rper h\xe4lt die Mitte, sucht Gleichgewicht. Diese Person m\xf6chte, dass alle bleiben. Manchmal so sehr, dass sie selbst fast verschwindet.",
      sx:"Weich, aber mit einer unterschwelligen Anziehung. Der Blick sucht Verbindung, zieht an ohne zu fordern. K\xf6rpersprache ist einladend, charmant-passiv. Wer genauer schaut, entdeckt darunter eine ruhige, aber echte Intensit\xe4t." },
  ];

  const farben = { 1:"#8b5e3c", 2:"#9e4a6a", 3:"#7a6a30", 4:"#5a7058", 5:"#3a6b8a", 6:"#6a5a8a", 7:"#8a6a2a", 8:"#7a3a3a", 9:"#4a7a6a" };

  const cards = typen.map(t => {
    const col = farben[t.nr] || "var(--copper)";
    return `
      <div style="margin-bottom:3rem;">
        <div style="display:flex;align-items:center;gap:.7rem;margin-bottom:1rem;">
          <span style="display:inline-flex;align-items:center;justify-content:center;width:2rem;height:2rem;border-radius:50%;background:${col};color:#fff;font-weight:800;font-size:.9rem;flex-shrink:0;">${t.nr}</span>
          <h2 style="font-size:1.1rem;font-weight:700;color:var(--ink);margin:0;">Typ\xa0${t.nr} &ndash; ${t.name}</h2>
        </div>
        <img src="${R2_CDN}assets/mikroimpressionen-${t.nr}.jpg"
          alt="Mikroimpressionen Typ ${t.nr}"
          style="width:100%;border-radius:10px;margin-bottom:1.1rem;display:block;" />
        <div style="display:grid;gap:.7rem;">
          ${[["SE","Selbsterhaltung",t.se],["SO","Sozial",t.so],["SX","Sexuell/Partnerschaft",t.sx]].map(([code,label,text]) => `
            <div style="border-left:3px solid ${col};padding:.6rem .9rem;background:var(--paper);border-radius:0 6px 6px 0;">
              <div style="font-size:.75rem;font-weight:800;color:${col};letter-spacing:.06em;margin-bottom:.3rem;">${code} \xb7 ${label}</div>
              <p style="margin:0;font-size:.85rem;line-height:1.7;color:var(--ink);">${text}</p>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }).join("");

  return shell(`
    ${pageHeader("mikroimpressionen")}
    <div style="max-width:680px;margin:0 auto;padding:0 1rem 3rem;">
      <p class="eyebrow">Schaubilder \xb7 Profiling</p>
      <h1 class="section-title">Mikroimpressionen der 27 Enneagramm-Subtypen</h1>
      <p class="psycho-intro">Lange bevor jemand spricht, ist er schon lesbar. Mimik, Blick und K\xf6rperspannung verr\xe4t die Struktur darunter &ndash; wenn man wei\xdf, worauf man achten muss. Diese \xdcbersicht zeigt f\xfcr alle 27 Enneagramm-Subtypen, wie sich ihr inneres Muster nach au\xdfen ausdr\xfcckt: nicht \xfcber Selbstaussagen, sondern \xfcber unmittelbar wahrnehmbare Signale. Jedes Schaubild zeigt einen Typ, jede Beschreibung benennt das Eigent\xfcmliche der drei Instinktvarianten.</p>
      <div style="border-left:3px solid var(--gold);padding:.7rem 1rem;margin-bottom:2rem;background:var(--paper);border-radius:0 6px 6px 0;font-size:.85rem;color:var(--muted);font-style:italic;">Diese Beschreibungen sind ph\xe4nomenologische Skizzen, keine Diagnosen. Sie sch\xe4rfen die Beobachtung &ndash; sie ersetzen nicht das pers\xf6nliche Typisierungsgespr\xe4ch.</div>
      ${cards}
      ${relatedLinks([
        {route:"nonverbale-signale", label:"Nonverbale Signale"},
        {route:"aufmerksamkeitsfokus", label:"Aufmerksamkeitsfokus"},
        {route:"enneagramm-profiling", label:"Enneagramm-Profiling"},
      ])}
    </div>
  `);
}

function mangelgefuehlePage() {
  return shell(`
    ${pageHeader("mangelgefuehle")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Tiefenpsychologie</p>
      <h1>Mangelgef\u00fchle der 9 Enneagrammtypen</h1>
      <p class="lead-small">Jeder Enneagrammtyp tr\u00e4gt ein unbewusstes inneres Mangelgef\u00fchl in sich &ndash; ein tiefes Gef\u00fchl, dass etwas Wesentliches fehlt. Aus diesem Mangel heraus entsteht das charakteristische Streben nach au\u00dfen, das den Typ antreibt.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/mangelgefuehle/mangelgefuehle.jpg"
             alt="Enneagrammtypen und ihre unbewussten inneren Mangelgef\u00fchle"
             class="psycho-img" />
      </div>
      ${relatedLinks([
        {route:"frustrationen", label:"Frustrationen"},
        {route:"intrinsisches-verlangen", label:"Intrinsisches Verlangen"},
        {route:"angst-essenz", label:"Angst-Essenz"},
      ])}
    </section>
  `);
}

function perspektivenPage() {
  return shell(`
    ${pageHeader("perspektiven")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Blinde Flecken</p>
      <h1>Wie Mitmenschen die Enneagrammtypen erleben</h1>
      <p class="lead-small">Was sehen andere in uns, was wir selbst kaum wahrnehmen? Diese \u00dcbersicht zeigt, welche Aussagen Mitmenschen \u00fcber jeden Enneagrammtyp immer wieder machen &ndash; ein Spiegel f\u00fcr den eigenen blinden Fleck.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/perspektiven/perspektiven-mitmenschen.jpg"
             alt="Enneagrammtypen und die Perspektiven ihrer Mitmenschen"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.5rem;">
        <div style="display:grid;gap:.5rem;font-size:.9rem;line-height:1.7;">
          <div><span style="font-weight:700;color:#5f5f5f;">Typ 1 (Der konsequente Perfektionist):</span> \u201eWir f\u00fchlen uns h\u00e4ufig von dir korrigiert, kritisiert oder gema\u00dfregelt!\u201c</div>
          <div><span style="font-weight:700;color:#7a2fa8;">Typ 2 (Der f\u00fcrsorgliche Liebeshungrige):</span> \u201eWir f\u00fchlen uns von dir h\u00e4ufig in irgendeiner Form manipuliert!\u201c</div>
          <div><span style="font-weight:700;color:#1fa688;">Typ 3 (Der erfolgreiche Macher):</span> \u201eWir erleben dich h\u00e4ufig t\u00e4uschend und emotional unerreichbar, mitunter gar abweisend!\u201c</div>
          <div><span style="font-weight:700;color:#3cbf1f;">Typ 4 (Der intensive K\u00fcnstler):</span> \u201eWir erleben dich h\u00e4ufig ein wenig \u00fcbertrieben emotional und mit dir in Beziehungsdramen verstrickt!\u201c</div>
          <div><span style="font-weight:700;color:#124fcc;">Typ 5 (Der kompetente Denker):</span> \u201eWir f\u00fchlen uns von dir h\u00e4ufig beobachtet, ein wenig von oben herab gesehen und emotional vernachl\u00e4ssigt!\u201c</div>
          <div><span style="font-weight:700;color:#8a5222;">Typ 6 (Der loyale Held):</span> \u201eWir f\u00fchlen uns h\u00e4ufig von dir auf Verl\u00e4sslichkeit getestet und sp\u00fcren oft auch deinen Zweifel und dein Misstrauen!\u201c</div>
          <div><span style="font-weight:700;color:#d4a800;">Typ 7 (Das begeisternde Gl\u00fcckskind):</span> \u201eWir empfinden dich h\u00e4ufig ein wenig oberfl\u00e4chlich und oft wenig verl\u00e4sslich!\u201c</div>
          <div><span style="font-weight:700;color:#a00802;">Typ 8 (Der aktive Schutzpatron):</span> \u201eWir f\u00fchlen uns h\u00e4ufig von dir dominiert und beherrscht!\u201c</div>
          <div><span style="font-weight:700;color:#cc6e00;">Typ 9 (Der angepasste Diplomat):</span> \u201eWir \u00e4rgern uns h\u00e4ufig, dass du nur \u00e4u\u00dferst selten eine klare Position beziehst!\u201c</div>
        </div>
      </div>
      ${relatedLinks([
        {route:"schaubilder-als-spiegel", label:"Schaubilder als Spiegel"},
        {route:"interessante-erkenntnisse", label:"Interessante Erkenntnisse"},
        {route:"befreiende-fragen", label:"Befreiende Fragen"},
      ])}
    </section>
  `);
}

const INSTINKT_LABEL = { se: "Selbsterhaltung", so: "Sozial", sx: "Sexual" };
const INSTINKT_KURZ  = { se: "SE", so: "SO", sx: "SX" };

function subtypChecklistePage() {
  const parts = state.route.split("/");
  const typNr = parts[1] ? parseInt(parts[1]) : null;
  const inst  = parts[2] || null; // "se" | "so" | "sx"

  // Ebene 3: einzelne Checkliste gro\u00df
  if (typNr && inst && INSTINKT_LABEL[inst]) {
    const code = `${inst}${typNr}`;
    return shell(`
      ${pageHeader("subtypen-checklisten")}
      <div class="psycho-detail">
        <button class="ghost-link psycho-back" data-route="subtypen-checklisten/${typNr}">\u2190 Typ ${typNr} Subtypen</button>
        <h1 class="psycho-detail__title">Typ ${typNr} \u00b7 ${INSTINKT_LABEL[inst]} (${INSTINKT_KURZ[inst]}${typNr})</h1>
        <div class="psycho-img-wrap">
          <img src="${R2_CDN}assets/schaubilder/subtypen-checklisten/${code}.jpg"
               alt="Checkliste ${INSTINKT_KURZ[inst]}${typNr}"
               class="psycho-img" />
        </div>
      </div>
    `);
  }

  // Ebene 2: 3 Subtypen eines Typs
  if (typNr && typNr >= 1 && typNr <= 9) {
    return shell(`
      ${pageHeader("subtypen-checklisten")}
      <div class="psycho-wrap">
        <button class="ghost-link psycho-back" data-route="subtypen-checklisten">\u2190 Alle Typen</button>
        <p class="eyebrow">Subtypen-Checklisten \u00b7 Typ ${typNr}</p>
        <h1 class="section-title">Typ ${typNr} &ndash; Welcher Subtyp bin ich?</h1>
        <p class="psycho-intro">W\u00e4hle einen Instinktschwerpunkt und pr\u00fcfe anhand der Checkliste, wie gut die Aussagen auf dich zutreffen.</p>
        <div class="psycho-grid psycho-grid--3">
          ${["se","so","sx"].map(ins => `
            <button class="psycho-card psycho-card--inst" data-route="subtypen-checklisten/${typNr}/${ins}">
              <span class="psycho-card__nr">${INSTINKT_KURZ[ins]}${typNr}</span>
              <span class="psycho-card__name">${INSTINKT_LABEL[ins]}</span>
              <span class="psycho-card__arrow">\u2192</span>
            </button>
          `).join("")}
        </div>
      </div>
    `);
  }

  // Ebene 1: Typauswahl 1&ndash;9
  return shell(`
    ${pageHeader("subtypen-checklisten")}
    <div class="psycho-wrap">
      <p class="eyebrow">Schaubilder \u00b7 Subtypen-Checklisten</p>
      <h1 class="section-title">Subtypen-Checklisten</h1>
      <p class="psycho-intro">Welcher der 27 Subtypen beschreibt dich am treffendsten? W\u00e4hle deinen Haupttyp &ndash; dann kannst du die drei Subtypen vergleichen und anhand der Checklisten pr\u00fcfen, was auf dich zutrifft.</p>
      <div class="psycho-grid">
        ${[1,2,3,4,5,6,7,8,9].map(n => `
          <button class="psycho-card" data-route="subtypen-checklisten/${n}" style="border-color:${typeColor(n)};background:linear-gradient(160deg, ${typeColor(n)}18, ${typeColor(n)}08);">
            <span class="psycho-card__nr" style="color:${typeColor(n)};">${n}</span>
            <span class="psycho-card__name">${TYPNAMEN_MOTIV[n]}</span>
            <span class="psycho-card__arrow" style="color:${typeColor(n)};">\u2192</span>
          </button>
        `).join("")}
      </div>
      ${relatedLinks([
        {route:"subtypen-schaubilder", label:"Subtypen-Schaubilder"},
        {route:"bedeutung-27-subtypen", label:"Bedeutung der 27 Subtypen"},
        {route:"triadendefizite", label:"Triadendefizite"},
      ])}
    </div>
  `);
}

const EDELSTEINE = [
  { typ: 1, name: "Amethyst",    crystal: "The Perfection Detox",   file: "typ-1-amethyst.png" },
  { typ: 2, name: "Rosenquarz",  crystal: "The Self-Love Shield",   file: "typ-2-rosenquarz.png" },
  { typ: 3, name: "Tigerauge",   crystal: "The High-Achiever Fuel", file: "typ-3-tigerauge.png" },
  { typ: 4, name: "Rhodonit",    crystal: "The Emotion Alchemist",  file: "typ-4-rhodonit.png" },
  { typ: 5, name: "Amazonit",    crystal: "The Brain-Battery Saver",file: "typ-5-amazonit.png" },
  { typ: 6, name: "H\u00e4matit",     crystal: "The Bulletproof Vest",   file: "typ-6-haematit.png" },
  { typ: 7, name: "Rauchquarz",  crystal: "The Idea Grounder",      file: "typ-7-rauchquarz.png" },
  { typ: 8, name: "Fluorit",     crystal: "The Strategy Matrix",    file: "typ-8-fluorit.png" },
  { typ: 9, name: "Karneol",     crystal: "The Action Catalyst",    file: "typ-9-karneol.png" },
];

function subtypeSchaubilderPage() {
  const code = state.route.split("/")[1] || null;

  // Detailansicht: alle Seiten eines Subtyps
  if (code) {
    const entry = subtypeEntry(code);
    if (!entry || !entry.visualPages || !entry.visualPages.length) {
      return shell(`
        <section class="narrow" style="padding:1.5rem 1rem 0;">
          <button class="ghost-link" data-route="subtypen-schaubilder">\u2190 Zur\u00fcck zur \u00dcbersicht</button>
        </section>
        <section class="narrow centered" style="padding:1rem;">
          <p>F\u00fcr diesen Subtyp sind noch keine Schaubilder hinterlegt.</p>
        </section>
      `);
    }
    const tc = typeColorFromCode(code);
    const pagesHtml = entry.visualPages.map(pg => `
      <figure class="vollseite-karte" style="margin:0 0 1.5rem;">
        <p class="vollseite-karte__hint">Zum Vergr\u00f6\u00dfern antippen</p>
        <div class="card-pg-wrap">
          <img src="${cdnImg(pg.src)}" alt="${pg.alt}" class="vollseite-karte__img" loading="lazy"
            onerror="this.closest('.vollseite-karte').style.display='none'" />
          <div class="card-pg-compass" aria-hidden="true">${compassMark("mini")}</div>
        </div>
        <figcaption class="vollseite-karte__titel">${pg.title}${pg.caption ? ` \u00b7 <span style="font-weight:400;opacity:.7;">${pg.caption}</span>` : ""}</figcaption>
      </figure>
    `).join("");

    return shell(`
      ${pageHeader("subtypen-schaubilder")}
      <section class="narrow" style="padding:1rem 1rem 0;">
        <button class="ghost-link" data-route="subtypen-schaubilder">\u2190 Alle Subtypen</button>
      </section>
      <section class="narrow centered" style="padding:.75rem 1rem 1rem;">
        <p class="eyebrow" style="color:${tc}">${entry.code}</p>
        <h1 style="color:${tc};font-size:1.8rem;">${entry.title}</h1>
        <p class="lead-small">${entry.coreSentence || ""}</p>
      </section>
      <section class="narrow" style="padding:0 1rem 2rem;">
        ${pagesHtml}
        <button class="secondary" style="width:100%;margin-top:.5rem;" data-route="subtypen-schaubilder">\u2190 Zur\u00fcck zur \u00dcbersicht</button>
      </section>
    `);
  }

  // \u00dcbersicht: alle 27 Subtypen als klickbare Kacheln, gruppiert nach Typ
  const typeNames = {
    1:"Typ 1 \u00b7 Der Verbesserer", 2:"Typ 2 \u00b7 Der Helfer", 3:"Typ 3 \u00b7 Der Macher",
    4:"Typ 4 \u00b7 Der Individualist", 5:"Typ 5 \u00b7 Der Forscher", 6:"Typ 6 \u00b7 Der Loyale",
    7:"Typ 7 \u00b7 Der Enthusiast", 8:"Typ 8 \u00b7 Der Herausforderer", 9:"Typ 9 \u00b7 Der Vermittler"
  };
  const instLabels = { se: "Selbst\xaderhaltung", so: "Sozial", sx: "Sexuell" };

  const groupsHtml = [1,2,3,4,5,6,7,8,9].map(n => {
    const tc = typeColor(n);
    const codes = ["se","so","sx"].map(inst => `${inst}${n}`);
    const tilesHtml = codes.map(c => {
      const e = subtypeEntry(c);
      const inst = c.slice(0,2);
      const thumb = cdnImg(e?.visualPages?.[0]?.src || "");
      return `
        <button class="subtyp-schaubilder-tile" data-route="subtypen-schaubilder/${c}" style="border-color:${tc};">
          ${thumb ? `<img src="${thumb}" alt="${c} Vorschau" loading="lazy" style="width:100%;border-radius:6px 6px 0 0;display:block;" onerror="this.style.display='none'" />` : ""}
          <div style="padding:.6rem .75rem .75rem;">
            <span style="font-size:.7rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${tc};">${instLabels[inst]}</span>
            <p style="margin:.15rem 0 0;font-size:.88rem;font-weight:600;hyphens:auto;overflow-wrap:break-word;">${e?.title || c.toUpperCase()}</p>
            <p style="margin:.15rem 0 0;font-size:.75rem;color:#888;">${e?.visualPages?.length || 0} Schaubilder</p>
          </div>
        </button>
      `;
    }).join("");
    return `
      <div style="margin-bottom:1.5rem;">
        <h2 style="font-size:1rem;font-weight:700;color:${tc};border-left:3px solid ${tc};padding-left:.6rem;margin:0 0 .75rem;">${typeNames[n]}</h2>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:.75rem;">
          ${tilesHtml}
        </div>
      </div>
    `;
  }).join("");

  return shell(`
    ${pageHeader("subtypen-schaubilder")}
    <section class="narrow centered" style="padding:1rem 1rem .5rem;">
      <p class="eyebrow">Schaubilder \u00b7 Alle 27 Subtypen</p>
      <h1>Subtypen-Schaubilder</h1>
      <p class="lead-small">Alle Originaltafeln der 27 Enneagramm-Subtypen \u2014 tippen Sie auf einen Subtyp, um alle Schaubilder zu sehen.</p>
    </section>
    <section class="narrow" style="padding:.5rem 1rem 2rem;">
      ${groupsHtml}
      ${relatedLinks([
        {route:"subtypen-checklisten", label:"Subtypen-Checklisten"},
        {route:"bedeutung-27-subtypen", label:"Bedeutung der 27 Subtypen"},
        {route:"horney-triaden", label:"Horney-Triaden"},
      ])}
    </section>
  `);
}

// Eigene, gedämpfte Kategorie-Farbpalette (bewusst abgesetzt von TYPE_COLORS, damit
// keine Verwechslung mit den Enneagrammtypfarben entsteht) – angelehnt an medizinische
// Fachbuch-Konventionen (Herz/Kreislauf rötlich, Bewegungsapparat erdig, Atemwege luftig-
// bläulich, Haut hautfarben, Nerven/Psyche blau, Immunsystem weinrot, Onkologie gedämpft-
// dunkel), aber entsättigt genug, um zum ruhigen Gesamtbild des Kompasses zu passen.
const PSYCHOSOMATIK_KATEGORIEN = [
  { key: "herz-kreislauf", label: "Herz-Kreislauf-System", farbe: "#b6483f" },
  { key: "bewegungsapparat", label: "Bewegungsapparat", farbe: "#8a7860" },
  { key: "atemwege", label: "Atemwege & Lunge", farbe: "#4a7f91" },
  { key: "verdauung", label: "Verdauungssystem", farbe: "#ab7d42" },
  { key: "niere", label: "Niere & Blase", farbe: "#3d6b5c" },
  { key: "haut", label: "Haut", farbe: "#c99b7a" },
  { key: "augen", label: "Augen", farbe: "#4d7a8c" },
  { key: "hormone-stoffwechsel", label: "Hormone & Stoffwechsel", farbe: "#7d6a8c" },
  { key: "nerven-psyche", label: "Nervensystem & Psyche", farbe: "#46688f" },
  { key: "immunsystem", label: "Immunsystem & Autoimmun", farbe: "#7a3d4a" },
  { key: "onkologie", label: "Onkologie", farbe: "#5c4a5e" },
  { key: "psychiatrie", label: "Psychiatrische Erkrankungen", farbe: "#6a4d6e" },
  { key: "sonstige", label: "Sonstige Krankheitsbilder", farbe: "#6b6558" },
];

