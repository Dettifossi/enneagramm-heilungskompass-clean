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

