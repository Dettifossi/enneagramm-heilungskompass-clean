function ber\u00fchmteKomponistenPage() {
  return shell(`
    ${pageHeader("beruhmte-komponisten")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder &middot; Musik &middot; Geschichte</p>
      <h1>Ber\u00fchmte Komponisten im Enneagramm</h1>
      <p class="lead-small">Neun Enneagrammtypen \u2014 neun Klangwelten. Dieses Schaubild ordnet die ber\u00fchmtesten Komponisten der Musikgeschichte ihren Enneagrammtypen und Subtypen zu und zeigt: Wie ein Mensch f\u00fchlt, so klingt seine Musik. Von der g\u00f6ttlich-v\u00e4terlichen Strenge Johann Sebastian Bachs (SX1) \u00fcber die romantisch-verzehrende Sehnsucht Fr\u00e9d\u00e9ric Chopins (SX5) bis zur egofreien, geschwisterlich-akzeptierenden Liebe von Johannes Brahms (SE9).</p>

      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/beruhmte-komponisten/beruhmte-komponisten.jpg"
             alt="Ber\u00fchmte Komponisten im Enneagramm"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.5rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.6rem;color:var(--ink);">Typ 1 SX &ndash; Johann Sebastian Bach (1685&ndash;1750)</h3>
        <p class="vb-intro">Musik ist Ausdruck g\u00f6ttlicher, v\u00e4terlicher Liebe. Bachs kunstvoll durchkomponierte Fugen und Kantaten spiegeln die Sehnsucht des Typ 1 nach vollkommener, gottgewollter Ordnung wider \u2014 jede Stimme f\u00fcgt sich in ein gr\u00f6\u00dferes, gerechtes Ganzes.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:var(--ink);">Typ 2 SE &ndash; Wolfgang Amadeus Mozart (1756&ndash;1791)</h3>
        <p class="vb-intro">Musik ist Ausdruck menschlicher, m\u00fctterlich-unterst\u00fctzender Liebe. Mozarts Melodien wirken warm, zugewandt und unmittelbar ber\u00fchrend \u2014 Musik, die dem H\u00f6rer entgegenkommt und ihn umsorgt, statt ihn auf Distanz zu halten.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:var(--ink);">Typ 3 SE &ndash; Joseph Haydn (1732&ndash;1809)</h3>
        <p class="vb-intro">Musik ist Ausdruck formal-perfekter, sch\u00f6pferisch-tatkr\u00e4ftiger Liebe. Haydn, der \u201eVater der Sinfonie\u201c, entwickelte unerm\u00fcdlich neue Formen und perfektionierte sie bis zur Meisterschaft \u2014 Schaffenskraft und makellose Struktur als Ausdruck seines Typs.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:var(--ink);">Typ 4 SX &ndash; Claude Debussy (1862&ndash;1918)</h3>
        <p class="vb-intro">Musik ist Ausdruck unerf\u00fcllter, romantisch-verzehrender Liebe. Debussys impressionistische Klangfarben schweben zwischen Sehnsucht und Aufl\u00f6sung \u2014 nie ganz greifbar, immer auf der Suche nach etwas, das sich der vollst\u00e4ndigen Erf\u00fcllung entzieht.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:var(--ink);">Typ 5 SX &ndash; Fr\u00e9d\u00e9ric Chopin (1810&ndash;1849)</h3>
        <p class="vb-intro">Musik ist Ausdruck introvertierter, geistig-platonischer Liebe. Chopins Klavierwerke sind intim, zur\u00fcckgenommen und von gro\u00dfer innerer Tiefe \u2014 Musik f\u00fcr den einzelnen H\u00f6rer im stillen Raum, nicht f\u00fcr die gro\u00dfe B\u00fchne.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:var(--ink);">Typ 6 SE (phobisch) &ndash; Franz Schubert (1797&ndash;1828)</h3>
        <p class="vb-intro">Musik ist Ausdruck \u00e4ngstlicher, freundschaftlich-treuer Liebe. Schuberts Lieder kreisen oft um Geborgenheit, Wanderschaft und die Suche nach einem sicheren Zuhause \u2014 die stille, treue Sehnsucht des phobischen Typ 6.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:var(--ink);">Typ 6 SX (kontraphobisch) &ndash; Ludwig van Beethoven (1770&ndash;1827)</h3>
        <p class="vb-intro">Musik ist Ausdruck angstabwehrender, heroischer Liebe. Beethoven begegnete seiner eigenen Angst \u2014 auch der Angst vor der Taubheit \u2014 mit trotziger, k\u00e4mpferischer Gr\u00f6\u00dfe. Seine Sinfonien sind Triumphe des Willens \u00fcber das Schicksal \u2014 die kontraphobische Spielart des Typ 6.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:var(--ink);">Typ 7 SX &ndash; Robert Schumann (1810&ndash;1856)</h3>
        <p class="vb-intro">Musik ist Ausdruck fr\u00f6hlicher, spielerisch-humorvoller Liebe. Schumanns Charakterst\u00fccke sind voller Fantasie, rascher Stimmungswechsel und verspielter Ideen \u2014 Musik, die sich nie lange bei einer einzigen Farbe aufh\u00e4lt.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:var(--ink);">Typ 8 SX &ndash; Giacomo Puccini (1858&ndash;1924)</h3>
        <p class="vb-intro">Musik ist Ausdruck kraftvoller, k\u00e4mpferisch-streitender Liebe. Puccinis Opern leben von dramatischer Wucht, intensiven Gef\u00fchlsausbr\u00fcchen und schicksalhaften Konflikten \u2014 Liebe, die mit voller Kraft gelebt und verteidigt wird.</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.5rem 0 0.6rem;color:var(--ink);">Typ 9 SE &ndash; Johannes Brahms (1833&ndash;1897)</h3>
        <p class="vb-intro">Musik ist Ausdruck egofreier, selbstloser, geschwisterlich-akzeptierender Liebe. Brahms' Werke verbinden klassische Form mit warmer, in sich ruhender Tiefe \u2014 Musik ohne Geltungsdrang, getragen von stiller, umfassender W\u00e4rme.</p>
      </div>

      ${bookTip("wer-du-wirklich-bist-band-1", "\u00dcbersichten, Schaubilder und Typbeschreibungen \u2014 der erste Band der Trilogie, die das Enneagramm lebendig macht.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("wer-du-wirklich-bist-band-2", "Vertiefte Typprofile und archetypische Betrachtungen \u2014 Band 2 der Rathmer-Trilogie.", "Wer du wirklich bist \u2013 Band 2")}
      ${bookTip("wer-du-wirklich-bist-band-3", "27 Subtypen, Heilungswege und das gro\u00dfe Bild \u2014 Band 3 als Abschluss der Trilogie.", "Wer du wirklich bist \u2013 Band 3")}
      ${bookTip("leidenschaft-und-heilung", "27 Subtypen \u2014 Leidenschaften, Tugenden und Heilungswege direkt aus der therapeutischen Praxis.", "Leidenschaft und Heilung")}
      ${relatedLinks([
        {route:"portraits-wegbegleiter", label:"Portraits zweier Wegbegleiter"},
        {route:"beruhmte-philosophen", label:"Ber\u00fchmte Philosophen im Enneagramm"},
        {route:"musik", label:"Entspannungs- und Heilungsmusik"},
        {route:"tierentsprechungen", label:"Tierentsprechungen der 9 Typen"},
      ])}
    </section>
  `);
}

function dasEventPage() {
  return shell(`
    ${pageHeader("das-event")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder &middot; Gesellschaft &amp; Alltag</p>
      <h1>Das Event</h1>
      <p class="lead-small">Neun Typen. Eine Party. Unz\xe4hlige M\xf6glichkeiten, sich dabei v\xf6llig unterschiedlich zu f\xfchlen. Diese drei Schaubilder begleiten alle 9 Enneagrammtypen durch einen Abend &ndash; von der aufgeregten (oder gef\xfcrchteten) Vorbereitung \xfcber den Abend selbst bis zur stillen Heimkehr. Augenzwinkernd, aber erstaunlich pr\xe4zise.</p>

      <div style="border-top:1px solid var(--line);margin-top:2rem;padding-top:1.8rem;">
        <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:.5rem;">Vor dem Event</h2>
        <p class="lead-small" style="margin-bottom:1.2rem;">Neun Typen stehen vor dem Spiegel &ndash; und haben neun sehr verschiedene Gedanken. Die Eins sorgt sich um die Rotweinauswahl. Die F\xfcnf w\xfcrd eigentlich lieber ihr Buch lesen. Die Sechs pr\xfcft noch schnell Fenster und Katze. Und die Sieben hat selbstverst\xe4ndlich schon einen Notfallplan, falls die Stimmung kippt.</p>
        <div class="psycho-img-wrap">
          <img src="./assets/schaubilder/das-event/vor-dem-event.jpg"
               alt="Die 9 Enneagrammtypen vor dem Event"
               class="psycho-img" />
        </div>
      </div>

      <div style="border-top:1px solid var(--line);margin-top:2rem;padding-top:1.8rem;">
        <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:.5rem;">Auf dem Event</h2>
        <p class="lead-small" style="margin-bottom:1.2rem;">Alle neun sitzen am runden Tisch &ndash; und erleben denselben Abend auf neun v\xf6llig verschiedene Weisen. Die Zwei reicht Appetith\xe4ppchen. Die Acht \xfcbernimmt das Kommando. Die Vier findet alle gew\xf6hnlich. Die Neun f\xfchlt sich eins mit der Welt. Und die Sechs hat bereits einen Notfallplan f\xfcr den Fall, dass die Verpflegung nicht reicht &ndash; w\u00e4hrend die Katze zu Hause ihren Platz kennt.</p>
        <div class="psycho-img-wrap">
          <img src="./assets/schaubilder/das-event/auf-dem-event.jpg"
               alt="Die 9 Enneagrammtypen auf dem Event"
               class="psycho-img" />
        </div>
      </div>

      <div style="border-top:1px solid var(--line);margin-top:2rem;padding-top:1.8rem;">
        <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:.5rem;">Nach dem Event</h2>
        <p class="lead-small" style="margin-bottom:1.2rem;">Heimgekommen. Die Eins hofft, niemanden vor den Kopf gesto\xdfen zu haben. Die F\xfcnf greift erleichtert zum Buch. Die Sechs atmet tief durch in den eigenen vier W\xe4nden. Die Acht hat der Debatte Kontra gegeben &ndash; und ist zufrieden. Harry (Typ 7) hat bislang noch nicht den Weg nach Hause gefunden und l\xe4sst es wohl noch krachen.</p>
        <div class="psycho-img-wrap">
          <img src="./assets/schaubilder/das-event/nach-dem-event.jpg"
               alt="Die 9 Enneagrammtypen nach dem Event"
               class="psycho-img" />
        </div>
      </div>

      ${bookTip("die-sprache-unserer-beziehungen", "Wie die 9 Typen in sozialen Situationen agieren &ndash; Beziehungsverhalten, N\xe4he und Distanz.", "Die Sprache unserer Beziehungen")}
      ${relatedLinks([
        {route:"bedrohungsszenarien", label:"Bedrohungsszenarien der 9 Typen"},
        {route:"naehe", label:"N\xe4he &amp; Distanz"},
        {route:"gaslighting-enneagramm", label:"Gaslighting &amp; Manipulation"},
        {route:"weihnachtsgeschenke", label:"Weihnachtsgeschenke der Typen"},
      ])}
    </section>
  `);
}

function portraitsWegbegleiterPage() {
  const BILDER = [
    { nr: "001", alt: "Portraits zweier Wegbegleiter \u2013 Titelbild" },
    { nr: "002", alt: "David L. Rathmer \u2013 Begr\u00fcnder des Enneagramm-Profilings" },
    { nr: "003", alt: "David L. Rathmer \u2013 Portrait" },
    { nr: "004", alt: "David L. Rathmer \u2013 Portrait" },
    { nr: "005", alt: "David L. Rathmer \u2013 Portrait", links: [
      { label: "Ennea Business",    url: "https://www.youtube.com/playlist?list=PLgYZrunXbgpYSYZA_f0XsGpSqCKX00gur" },
      { label: "Ennea Experience",  url: "https://www.youtube.com/playlist?list=PLgYZrunXbgpbgTrTm4R5OhiQtNF8nCVcI" },
      { label: "Ennea Podcast",     url: "https://www.youtube.com/playlist?list=PLgYZrunXbgpa_emzY7AAtPvfIEvJvO-3P" },
      { label: "Ennea Shorts",      url: "https://www.youtube.com/@davidlaurinrathmer/shorts" },
    ]},
    { nr: "006", alt: "Enneagrammlehrer Dr. Claudio Naranjo (1932\u20132019)", video: { id: "Xuwgwefqff0", label: "Enneagramm und ber\u00fchmte Komponisten \u2013 Dr. Claudio Naranjo" } },
    { nr: "007", alt: "Claudio Naranjo \u2013 Portrait" },
    { nr: "008", alt: "Claudio Naranjo \u2013 Portrait" },
    { nr: "009", alt: "Claudio Naranjo \u2013 Portrait" },
    { nr: "010", alt: "Claudio Naranjo \u2013 Portrait" },
    { nr: "011", alt: "Claudio Naranjo \u2013 Portrait" },
    { nr: "012", alt: "Claudio Naranjo \u2013 Portrait" },
    { nr: "013", alt: "Portraits zweier Wegbegleiter \u2013 Abschluss" },
  ];

  const bilder = BILDER.map(b => `
    <div class="psycho-img-wrap" style="margin-bottom:${b.links ? '1rem' : '2rem'};">
      <img src="${R2_CDN}portraits-wegbegleiter/Portraits_zweier_Wegbegleiter.${b.nr}"
           alt="${b.alt}" class="psycho-img" loading="lazy"/>
    </div>
    ${b.links ? `
    <div style="display:flex;flex-wrap:wrap;gap:0.7rem;margin-bottom:2rem;justify-content:center;">
      ${b.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener noreferrer"
        style="display:inline-flex;align-items:center;gap:0.4rem;padding:0.55rem 1.1rem;border-radius:8px;background:var(--paper);border:1px solid var(--copper);color:var(--copper);font-size:0.9rem;text-decoration:none;font-weight:600;">
        \u25b6 ${l.label}
      </a>`).join("")}
    </div>` : ""}
    ${b.video ? `
    <div style="margin-bottom:2rem;">
      <p style="font-size:0.85rem;color:var(--copper);text-transform:uppercase;letter-spacing:0.09em;margin-bottom:0.6rem;">\u25b6 ${b.video.label}</p>
      <div style="position:relative;aspect-ratio:16/9;border-radius:12px;overflow:hidden;">
        <iframe width="100%" height="100%" style="border:none;display:block;"
          src="https://www.youtube.com/embed/${b.video.id}?rel=0"
          allow="encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe>
      </div>
      <p style="margin-top:0.6rem;font-size:0.8rem;color:var(--ink-muted);line-height:1.5;">
        \ud83d\udca1 Das Video ist auf Englisch. F\u00fcr deutsche Untertitel: im Video auf das <strong>Zahnrad-Symbol \u2699</strong> tippen \u2192 <strong>Untertitel</strong> \u2192 <strong>Automatisch \u00fcbersetzen</strong> \u2192 <strong>Deutsch</strong> w\u00e4hlen.
      </p>
    </div>` : ""}
  `).join("");

  return shell(`
    ${pageHeader("portraits-wegbegleiter")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder &middot; Biographie &amp; Begegnung</p>
      <h1>Portraits zweier Wegbegleiter</h1>
      <p class="lead-small">Zwei Menschen, deren Wege sich mit dem Enneagramm verbinden \u2014 und die Detlef Rathmer auf seinem Lebensweg begleitet haben: sein Sohn <strong>David L. Rathmer</strong>, Begr\u00fcnder des Enneagramm-Profilings, und sein Lehrer <strong>Dr. Claudio Naranjo</strong>, einer der bedeutendsten Enneagramm-Pioniere der Welt und Begr\u00fcnder der Subtypenlehre des Enneagramms mit 27 Subtypen \u2014 dessen Tradition Detlef Rathmer und sein Sohn David gemeinsam weiterf\u00fchren.</p>

      <div style="margin-top:2rem;">
        ${bilder}
      </div>

      ${bookTip("leidenschaft-und-heilung", "27 Subtypen \u2013 Leidenschaften, Tugenden und Heilungswege direkt aus der therapeutischen Praxis.", "Leidenschaft und Heilung")}
      ${relatedLinks([
        {route:"beruhmte-komponisten", label:"Ber\u00fchmte Komponisten im Enneagramm"},
        {route:"wer-wir-sind", label:"Wer wir sind"},
        {route:"wurzeln-des-enneagramms", label:"Wurzeln des Enneagramms"},
        {route:"bedeutung-27-subtypen", label:"Bedeutung der 27 Subtypen"},
      ])}
    </section>
  `);
}

function weihnachtsgeschenkePage() {
  return shell(`
    ${pageHeader("weihnachtsgeschenke")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Weihnachten</p>
      <h1>Die 9 Geschenke der Enneagrammtypen an die Welt</h1>
      <p class="lead-small">Jeder der 9 Enneagrammtypen bringt ein einzigartiges Geschenk mit \u2014 einen besonderen Beitrag, den er von Natur aus in die Welt tr\u00e4gt. Diese festliche \u00dcbersicht zeigt, was jeder Typ der Welt zu geben hat.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/weihnachtsgeschenke/weihnachtsgeschenke.jpg"
             alt="Die 9 Enneagrammtypen und ihre Geschenke an die Welt"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.5rem;">
        <div style="display:grid;gap:.5rem;font-size:.9rem;line-height:1.7;">
          <div><span style="font-weight:700;color:var(--copper);">Typ 1 &ndash; Der Perfektionist:</span> Perfektion / Korrektur \u2014 der Blick f\u00fcr das, was besser werden kann.</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 2 &ndash; Der Helfer:</span> Geben / Helfen \u2014 bedingungslose Zuwendung zu anderen.</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 3 &ndash; Der Dynamiker:</span> Leistung / Erfolg \u2014 die Kraft, Dinge tats\u00e4chlich zu bewegen.</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 4 &ndash; Der Individualist:</span> Inspiration / Differenzierung \u2014 Tiefe und Ausdruckskraft, die ber\u00fchrt.</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 5 &ndash; Der Denker:</span> Beobachtung / Wissen \u2014 Klarheit durch genaues Hinsehen.</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 6 &ndash; Der Loyale Skeptiker:</span> Vertrauen / Fragen stellen \u2014 Wachsamkeit, die Gemeinschaften sch\u00fctzt.</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 7 &ndash; Der Optimist:</span> Vorstellungsverm\u00f6gen / Anregung \u2014 Leichtigkeit, die andere mitrei\u00dft.</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 8 &ndash; Der Herausforderer:</span> Wahrheit / Besch\u00fctzen \u2014 Kraft im Dienst der Schw\u00e4cheren.</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 9 &ndash; Der Friedliche:</span> Harmonie / Vereinigung \u2014 die stille F\u00e4higkeit, Gegens\u00e4tze zu vers\u00f6hnen.</div>
        </div>
        <p class="vb-anmerkung" style="margin-top:1.2rem;font-style:italic;">\u201eWas du bist, ist Gottes Geschenk an dich. Was du aus dir machst, ist dein Geschenk an Gott.\u201c (Deutsches Sprichwort)</p>
      </div>

      <div style="border-top:1px solid var(--line);margin-top:2rem;padding-top:1.8rem;">
        <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:.6rem;">Weihnachtsw\u00fcnsche an alle 9 Enneagrammtypen</h2>
        <p class="lead-small" style="margin-bottom:1.2rem;">Zu Weihnachten darf die Maske einmal fallen. Dieser herzliche Wunsch richtet sich an jeden der 9 Typen \u2014 mit der Einladung, sich selbst ein St\u00fcck weit loszulassen.</p>
        <div class="psycho-img-wrap">
          <img src="./assets/schaubilder/weihnachtsgeschenke/weihnachtswuensche.jpg"
               alt="Weihnachtsw\u00fcnsche an alle 9 Enneagrammtypen"
               class="psycho-img" />
        </div>
        <div class="vb-section" style="max-width:100%;margin-top:1.2rem;">
          <div style="display:grid;gap:.5rem;font-size:.9rem;line-height:1.7;">
            <div><span style="font-weight:700;color:var(--copper);">Typ 1:</span> Setze doch mal die Maske des untadeligen, gewissenhaften Perfektionisten ab!</div>
            <div><span style="font-weight:700;color:var(--copper);">Typ 2:</span> Setze doch mal die Maske des liebevollen, gro\u00dfz\u00fcgigen Helfers ab!</div>
            <div><span style="font-weight:700;color:var(--copper);">Typ 3:</span> Setze doch mal die Maske des kompetenten, effizienten Erfolgsmenschen ab!</div>
            <div><span style="font-weight:700;color:var(--copper);">Typ 4:</span> Setze doch mal die Maske des authentischen, tiefgr\u00fcndigen Individualisten ab!</div>
            <div><span style="font-weight:700;color:var(--copper);">Typ 5:</span> Setze doch mal die Maske des objektiven, wissenden Beobachters ab!</div>
            <div><span style="font-weight:700;color:var(--copper);">Typ 6:</span> Setze doch mal die Maske des vorsichtigen, stets wachsamen Zweiflers ab!</div>
            <div><span style="font-weight:700;color:var(--copper);">Typ 7:</span> Setze doch mal die Maske des unbek\u00fcmmerten, fr\u00f6hlichen Optimisten ab!</div>
            <div><span style="font-weight:700;color:var(--copper);">Typ 8:</span> Setze doch mal die Maske des stets starken, unabh\u00e4ngigen Besch\u00fctzers ab!</div>
            <div><span style="font-weight:700;color:var(--copper);">Typ 9:</span> Setze doch mal die Maske des ruhigen, gelassenen Vermittlers ab!</div>
          </div>
        </div>
      </div>
      ${bookTip("die-sprache-unserer-beziehungen", "Jeder Typ hat ein einzigartiges Geschenk f\u00fcr Beziehungen &ndash; entdecke die Sprache der N\u00e4he.", "Die Sprache unserer Beziehungen")}
      ${relatedLinks([
        {route:"tierentsprechungen", label:"Tierentsprechungen"},
        {route:"obstsorten", label:"Obstsorten"},
        {route:"gemuesesorten", label:"Gem\xfcsesorten der Typen"},
        {route:"weinsorten", label:"Weinsorten der Typen"},
        {route:"brotsorten", label:"Brotsorten der Typen"},
        {route:"kaesesorten", label:"K\xe4sesorten der Typen"},
        {route:"gewuerzarten", label:"Gew\xfcrzarten der Typen"},
        {route:"getreidearten", label:"Getreidearten der Typen"},
        {route:"kaffeearten", label:"Kaffeearten der Typen"},
        {route:"epochen-weltgeschichte", label:"Epochen der Weltgeschichte"},
        {route:"affenarten", label:"Affenarten der Typen"},
        {route:"baumarten", label:"Baumarten der Typen"},
        {route:"wer-wir-sind", label:"Wer wir sind"},
      ])}
    </section>
  `);
}

function wahrnehmungsstilePage() {
  return shell(`
    ${pageHeader("wahrnehmungsstile")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Wahrnehmung</p>
      <h1>Die 9 Wahrnehmungsstile</h1>
      <p class="lead-small">Jeder Enneagrammtyp tr\u00e4gt eine eigene Brille &ndash; einen 40-Grad-Blickwinkel auf die Welt, gepr\u00e4gt von seiner Leidenschaft und Motivation. Diese \u00dcbersicht zeigt alle 9 universellen Sichtweisen auf einen Blick.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/wahrnehmungsstile/wahrnehmungsstile.jpg"
             alt="Die 9 universellen Wahrnehmungsstile der Enneagrammtypen"
             class="psycho-img" />
      </div>
      ${relatedLinks([
        {route:"aufmerksamkeitsfokus", label:"Aufmerksamkeitsfokus"},
        {route:"perspektiven", label:"Perspektiven"},
        {route:"zentren-weltwahrnehmung", label:"Zentren & Weltwahrnehmung"},
      ])}
    </section>
  `);
}

function bedrohungsszenarienPage() {
  return shell(`
    ${pageHeader("bedrohungsszenarien")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Bedrohungsszenarien</p>
      <h1>Bedrohungsszenarien der 9 Enneagrammtypen</h1>
      <p class="lead-small">Jeder Enneagrammtyp reagiert auf ganz spezifische Bedrohungsszenarien \u2014 Situationen, die seine tiefste Grundangst ber\u00fchren. Diese \u00dcbersicht zeigt symbolisch, was jeden der 9 Typen im Innersten bedroht und antreibt.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/bedrohungsszenarien/bedrohungsszenarien.jpg"
             alt="Bedrohungsszenarien der 9 Enneagrammtypen"
             class="psycho-img" />
      </div>
      ${relatedLinks([
        {route:"empfindliche-punkte", label:"Empfindliche Punkte"},
        {route:"angst-essenz", label:"Angst-Essenz"},
        {route:"gaslighting-enneagramm", label:"Gaslighting & Enneagramm"},
      ])}
    </section>
  `);
}

function dialektischeStrukturPage() {
  return shell(`
    ${pageHeader("dialektische-struktur")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Dialektische Struktur</p>
      <h1>Die dialektische Struktur der drei psychologischen Triaden des Enneagramms</h1>
      <p class="lead-small">Jeder der 9 Enneagrammtypen resultiert aus einer \u201eDialektik", die aus These, Antithese und Synthese der psychologischen Eigenschaften seiner Triade besteht. In jeder Triade wird einer der Typen diese charakteristische Eigenschaft <strong>\u00fcberentwickeln</strong>, w\u00e4hrend einer sie <strong>unterentwickelt</strong> und der dritte den Bezug zu ihr <strong>verliert</strong>.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/dialektische-struktur/dialektische-struktur.jpg"
             alt="Die dialektische Struktur der drei psychologischen Triaden des Enneagramms"
             class="psycho-img" />
      </div>
      <div style="margin-top:2rem; display:flex; flex-direction:column; gap:1rem;">
        <div style="border-left:3px solid #7b5ea7; padding:0.75rem 1rem; background:color-mix(in srgb, #7b5ea7 6%, transparent); border-radius:0 0.5rem 0.5rem 0;">
          <strong style="color:#7b5ea7;">Beziehungs-Triade (8 \u00b7 9 \u00b7 1)</strong><br>
          Typ 8 hat die F\u00e4higkeit, sich zur Umgebung in Beziehung zu setzen, <em>\u00fcberentwickelt</em> und sieht sich als gr\u00f6\u00dfer als alle anderen. Typ 9 <em>verliert</em> diese F\u00e4higkeit weitgehend \u2014 er verschmilzt mit anderen, statt wirklich in Beziehung zu treten. Typ 1 hat sie <em>unterentwickelt</em>: Er ist dem Ideal gegen\u00fcber loyaler als den Menschen gegen\u00fcber.
        </div>
        <div style="border-left:3px solid #c0392b; padding:0.75rem 1rem; background:color-mix(in srgb, #c0392b 6%, transparent); border-radius:0 0.5rem 0.5rem 0;">
          <strong style="color:#c0392b;">Gef\u00fchls-Triade (2 \u00b7 3 \u00b7 4)</strong><br>
          Typ 2 hat seinen pers\u00f6nlichen Gef\u00fchlsausdruck weitgehend <em>verloren</em> und projiziert ein Bild. Typ 3 hat seinen Gef\u00fchlsausdruck zu wenig entwickelt (<em>unterentwickelt</em>) und zeigt ihn nur indirekt. Typ 4 <em>\u00fcberentwickelt</em> ihn durch k\u00fcnstlerische T\u00e4tigkeit und \u00e4u\u00dfere Lebensf\u00fchrung.
        </div>
        <div style="border-left:3px solid #c8a000; padding:0.75rem 1rem; background:color-mix(in srgb, #c8a000 6%, transparent); border-radius:0 0.5rem 0.5rem 0;">
          <strong style="color:#c8a000;">Handlungs-Triade (5 \u00b7 6 \u00b7 7)</strong><br>
          Typ 5 hat die F\u00e4higkeit zum selbstst\u00e4ndigen Handeln <em>unterentwickelt</em> \u2014 er braucht in einem kleineren Aktionsradius weniger externe Unterst\u00fctzung. Typ 6 hat sie <em>\u00fcberentwickelt</em>: Er wird hyperaktiv und manisch, bis er die Kontrolle verliert. Typ 7 <em>verliert</em> den Bezug zur ruhigen, fokussierten Handlung.
        </div>
      </div>
      ${relatedLinks([
        {route:"horney-triaden", label:"Horney-Triaden"},
        {route:"triadendefizite", label:"Triadendefizite"},
        {route:"grundformel", label:"Grundformel"},
      ])}
    </section>
  `);
}

function bewaeltigungsstrategiePage() {
  return shell(`
    ${pageHeader("bewaeltigungsstrategie")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Bew\u00e4ltigungsstrategien</p>
      <h1>Die Bew\u00e4ltigungsstrategie-Triaden des Enneagramms</h1>
      <p class="lead-small">Das Enneagramm kennt drei grundlegende Bew\u00e4ltigungstriaden \u2014 Experten-, Optimisten- und Intensit\u00e4ts-Triade. Zu jedem Prim\u00e4rtypus (den Typen auf dem gleichseitigen Dreieck 3\u00b76\u00b79) gibt es jeweils zwei Sekund\u00e4rtypen, die in ihrem Bew\u00e4ltigungsstil sehr \u00e4hnlich erscheinen und daher h\u00e4ufig zu Verwechslungen f\u00fchren.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/bewaeltigungsstrategie/bewaeltigungsstrategie.jpg"
             alt="Die Bew\u00e4ltigungsstrategie-Triaden des Enneagramms"
             class="psycho-img" />
      </div>
      <div style="margin-top:2rem; display:flex; flex-direction:column; gap:1rem;">
        <div style="border-left:3px solid #3a86c8; padding:0.75rem 1rem; background:color-mix(in srgb, #3a86c8 6%, transparent); border-radius:0 0.5rem 0.5rem 0;">
          <strong style="color:#3a86c8;">Experten-Triade (1 \u00b7 3 \u00b7 5)</strong><br>
          Diese Typen schieben zur Bew\u00e4ltigung von Schwierigkeiten ihre Gef\u00fchle beiseite und bem\u00fchen sich besonders um Objektivit\u00e4t, Effizienz und Kompetenz. Gef\u00fchle und Bed\u00fcrfnisse werden dabei zugunsten von Logik und St\u00e4rke zur\u00fcckgestellt \u2014 sie halten sich eher an eigene Regeln zu ihrem Vorteil und agieren gern au\u00dferhalb der Regeln.
        </div>
        <div style="border-left:3px solid #2db87a; padding:0.75rem 1rem; background:color-mix(in srgb, #2db87a 6%, transparent); border-radius:0 0.5rem 0.5rem 0;">
          <strong style="color:#2db87a;">Optimisten-Triade (2 \u00b7 7 \u00b7 9)</strong><br>
          Diese Typen reagieren auf Probleme und Konflikte damit, dass sie eine m\u00f6glichst positive Haltung selbst in unangenehmen Situationen einnehmen. Sie haben Probleme damit, ihre Schattenseiten einzugestehen \u2014 und konzentrieren sich zu sehr auf die Bed\u00fcrfnisse anderer oder versuchen, allen Bed\u00fcrfnissen gerecht zu werden.
        </div>
        <div style="border-left:3px solid #e63946; padding:0.75rem 1rem; background:color-mix(in srgb, #e63946 6%, transparent); border-radius:0 0.5rem 0.5rem 0;">
          <strong style="color:#e63946;">Intensit\u00e4ts-Triade (4 \u00b7 6 \u00b7 8)</strong><br>
          Diese Typen reagieren auf Schwierigkeiten und Konflikte sehr emotional und intensiv. Sie trauen und misstrauen anderen zugleich \u2014 brauchen Zuwendung, ben\u00f6tigen aber gleichzeitig mehr Abstand und \u00fcbernehmen tendenziell die Rolle des selbstbestimmten Besch\u00fctzers.
        </div>
      </div>
      ${relatedLinks([
        {route:"dialektische-struktur", label:"Dialektische Struktur"},
        {route:"lookalike-typen", label:"Lookalike-Typen"},
        {route:"verwechslungen", label:"Verwechslungen"},
      ])}
    </section>
  `);
}

function verbaleSignalePage() {
  return shell(`
    ${pageHeader("verbale-signale")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Verbale Signale</p>
      <h1>Verbale Signale der 9 Enneagrammtypen</h1>
      <p class="lead-small">Wie spricht jeder Enneagrammtyp? Verbale Signale \u2014 Wortwahl, Satzbau, Sprachrhythmus \u2014 sind wertvolle Typisierungsfaktoren. Diese \u00dcbersicht zeigt die charakteristischen verbalen Muster aller 9 Typen.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/verbale-signale/verbale-signale.jpg"
             alt="Verbale Signale der 9 Enneagrammtypen"
             class="psycho-img" />
      </div>
      <p style="margin-top:1.5rem; text-align:center;">
        <a href="#nonverbale-signale" style="color:var(--copper); text-decoration:none; font-size:0.95rem;">
          Weiter zu: Nonverbale Signale \u2192
        </a>
      </p>
      ${relatedLinks([
        {route:"nonverbale-signale", label:"Nonverbale Signale"},
        {route:"mikroimpressionen", label:"Mikroimpressionen"},
        {route:"aufmerksamkeitsfokus", label:"Aufmerksamkeitsfokus"},
      ])}
    </section>
  `);
}

function naehePage() {
  return shell(`
    ${pageHeader("naehe")}
    <div style="max-width:680px;margin:0 auto;padding:0 1rem 3rem;">
      <p class="eyebrow">Schaubilder \xb7 Beziehung</p>
      <h1 class="section-title">N\xe4he</h1>
      <p class="psycho-intro">N\xe4he entsteht nicht durch gemeinsame Interessen oder \xe4u\xdfere Harmonie. Sie entsteht an einem viel feineren Punkt: dort, wo wir beginnen, hinter das Verhalten eines Menschen zu schauen. Das Enneagramm er\xf6ffnet genau diesen Blick &mdash; und macht Begegnung in einer neuen Tiefe m\xf6glich.</p>
      <img
        src="./assets/naehe.png"
        alt="N\xe4he &ndash; Schaubild"
        style="width:100%;border-radius:12px;margin:0 auto 2.5rem;display:block;"
      />
      <div class="vb-section" style="max-width:100%;">

        <h2 style="font-size:1.05rem;font-weight:700;margin-bottom:1rem;color:var(--ink);">N\xe4he beginnt dort, wo wir die Geschichte hinter der Strategie h\xf6ren</h2>
        <p class="vb-intro">Wir alle begegnen einander zun\xe4chst \xfcber Strategien. \xdcber das, was wir zeigen, wie wir sprechen, wie wir reagieren. Der eine argumentiert sachlich, der andere verteidigt sich, der n\xe4chste wird laut, ein anderer zieht sich zur\xfcck. Das Enneagramm beschreibt diese Strategien pr\xe4zise. Es zeigt, dass sie nicht zuf\xe4llig sind, sondern Ausdruck einer inneren Logik &ndash; einer Antwort auf fr\xfche Erfahrungen, auf \xdcberforderung, auf das Bed\xfcrfnis nach Anerkennung, Sicherheit, Autonomie oder Zugeh\xf6rigkeit.</p>
        <p class="vb-intro"><em>Doch keine Strategie ist das eigentliche Wesen eines Menschen. Sie ist eine Antwort. Hinter jeder Fixierung steht eine Geschichte. Hinter jedem Schutzmechanismus liegt etwas Verletzliches.</em></p>

        <div style="display:grid;gap:.55rem;margin:1.5rem 0;padding:1rem 1.1rem;background:var(--paper);border-radius:8px;border:1px solid var(--line);font-size:.85rem;line-height:1.6;">
          ${[
            [1,"versucht, die Welt zu verbessern","weil er fr\xfch gelernt hat, dass Fehler schwer wiegen"],
            [2,"k\xfcmmert sich um andere","nicht selten, weil er Liebe mit Bed\xfcrftigkeit verkn\xfcpft hat"],
            [3,"strebt nach Erfolg","weil Anerkennung einmal an Leistung gebunden war"],
            [4,"sucht Tiefe und Besonderheit","weil das Gef\xfchl des Andersseins nie ganz verschwunden ist"],
            [5,"zieht sich zur\xfcck","um inneren Raum zu bewahren, wenn \xe4u\xdfere Anforderungen \xfcberw\xe4ltigend waren"],
            [6,"pr\xfcft und sichert ab","weil Vertrauen nicht selbstverst\xe4ndlich war"],
            [7,"plant, erweitert, entkommt","um Schmerz nicht zu nahe kommen zu lassen"],
            [8,"wird stark","weil Schw\xe4che gef\xe4hrlich erschien"],
            [9,"harmonisiert","um Verbindung nicht zu verlieren"],
          ].map(([nr,was,weil]) => `
            <div><span style="font-weight:700;color:var(--copper);">Typ\xa0${nr}</span> ${was} &ndash; <span style="color:var(--muted);">${weil}.</span></div>
          `).join("")}
        </div>

        <p class="vb-intro">Wenn wir nur die Strategie sehen, reagieren wir auf der gleichen Ebene &mdash; wir kontern, argumentieren oder distanzieren uns. Wenn wir jedoch die Geschichte h\xf6ren, ver\xe4ndert sich etwas: Dann begegnen wir nicht mehr einer Strategie, sondern einem Menschen.</p>
        <p class="vb-intro">Gerade in den Subtypen wird das besonders deutlich. Ob jemand seine Grunddynamik prim\xe4r \xfcber Selbstbehauptung, \xfcber soziale Einbindung oder \xfcber intensive Bindung lebt, pr\xe4gt den Ausdruck enorm. Zwei Menschen desselben Typs k\xf6nnen v\xf6llig unterschiedlich erscheinen &mdash; und doch tragen beide dieselbe Grundbewegung in sich.</p>

        <div style="border-top:1px solid var(--line);padding-top:1.6rem;margin-top:1.8rem;">
          <h2 style="font-size:1.05rem;font-weight:700;margin-bottom:1rem;color:var(--ink);">Der unverletzbare Kern</h2>
          <p class="vb-intro">N\xe4he entsteht nicht dadurch, dass wir Strategien aufl\xf6sen. Sie entsteht dadurch, dass wir sie verstehen. Und manchmal reicht schon ein Moment wirklichen H\xf6rens, um Spannung zu verwandeln.</p>
          <p class="vb-intro">Das Enneagramm beschreibt unsere Muster. Aber es beschreibt nicht unser Wesen. Es zeigt die Form, die wir angenommen haben, um zu \xfcberleben. Doch unter dieser Form liegt etwas Unverformtes, Stilles, Reines, Zeitloses. Etwas, das nie besch\xe4digt wurde &mdash; der Kern, der unver\xe4nderlich in uns ruht.</p>
          <p class="vb-intro">Wenn wir beginnen, die Geschichte hinter der Strategie eines anderen zu h\xf6ren, geschieht oft etwas \xdcberraschendes: Wir begegnen nicht nur seiner Verletzlichkeit &mdash; wir begegnen auch seiner W\xfcrde. Und manchmal erkennen wir darin unsere eigene.</p>
        </div>

        <div style="border-top:1px solid var(--line);padding-top:1.6rem;margin-top:1.5rem;">
          <h2 style="font-size:1.05rem;font-weight:700;margin-bottom:1rem;color:var(--ink);">Reifung durch Stille</h2>
          <p class="vb-intro">N\xe4he ist kein emotionales Verschmelzen und keine psychologische Technik. N\xe4he ist ein Bewusstseinsakt. Ein Moment, in dem wir uns entscheiden, tiefer zu schauen. Reifung bedeutet dabei nicht, die Strategie des anderen zu korrigieren oder die eigene Fixierung zu bek\xe4mpfen &mdash; sondern Schritt f\xfcr Schritt durch sie hindurchzuschauen. Mit Geduld. Mit Milde. Mit der Bereitschaft, hinter jeder H\xe4rte eine Geschichte zu vermuten.</p>
          <p class="vb-intro">Was bleibt, wenn die Strategien weicher werden, ist nicht Leere. Es ist Pr\xe4senz. Eine offene Weite, in der Begegnung m\xf6glich wird &mdash; nicht als Rolle, nicht als Spiel, sondern als wirkliche Begegnung.</p>
        </div>

        <div style="border-left:3px solid var(--gold);padding:.9rem 1.1rem;margin:2rem 0;background:var(--paper);border-radius:0 8px 8px 0;">
          <p style="margin:0 0 .6rem;font-size:.92rem;color:var(--ink);line-height:1.8;font-style:italic;">Nicht schneller zu verstehen. Nicht kl\xfcger zu analysieren. Nicht richtiger zu reagieren. Sondern stiller zu werden.</p>
          <p style="margin:0 0 .6rem;font-size:.92rem;color:var(--ink);line-height:1.8;font-style:italic;">Ein wenig langsamer zu schauen. Ein wenig l\xe4nger zuzuh\xf6ren. Ein wenig weicher im Urteil zu sein.</p>
          <p style="margin:0;font-size:.92rem;color:var(--ink);line-height:1.8;font-style:italic;">In diesem Raum gibt es keine Typen mehr. Keine Strategien. Keine Rollen. Nur zwei Menschen, die einander f\xfcr einen Moment wirklich wahrnehmen.</p>
        </div>

        <p class="vb-anmerkung"><em>Vielleicht ist das die tiefste Form von N\xe4he: Nicht verstanden zu werden &mdash; sondern gesehen. Und vielleicht ist genau das der Anfang von Heilung.</em></p>

      </div>
      ${relatedLinks([
        {route:"beziehungen", label:"Beziehungen"},
        {route:"empfindliche-punkte", label:"Empfindliche Punkte"},
        {route:"frieden-schliessen", label:"Frieden schlie\u00dfen"},
      ])}
    </div>
  `);
}

function nonverbaleSignalePage() {
  return shell(`
    ${pageHeader("nonverbale-signale")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Nonverbale Signale</p>
      <h1>Nonverbale Signale der 9 Enneagrammtypen</h1>
      <p class="lead-small">K\u00f6rpersprache, Mimik, Gestik und Haltung verraten viel \u00fcber den Enneagrammtyp eines Menschen. Diese \u00dcbersicht zeigt die typischen nonverbalen Signale aller 9 Typen als weitere Typisierungsfaktoren.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/nonverbale-signale/nonverbale-signale.jpg"
             alt="Nonverbale Signale der 9 Enneagrammtypen"
             class="psycho-img" />
      </div>
      <p style="margin-top:1.5rem; text-align:center;">
        <a href="#verbale-signale" style="color:var(--copper); text-decoration:none; font-size:0.95rem;">
          \u2190 Zur\u00fcck zu: Verbale Signale
        </a>
      </p>
      ${relatedLinks([
        {route:"verbale-signale", label:"Verbale Signale"},
        {route:"mikroimpressionen", label:"Mikroimpressionen"},
        {route:"enneagramm-profiling", label:"Enneagramm-Profiling"},
      ])}
    </section>
  `);
}

function egoPersoenlichkeitPage() {
  return shell(`
    ${pageHeader("ego-persoenlichkeit")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Ego-Pers\u00f6nlichkeit</p>
      <h1>Die Entwicklung der Ego-Pers\u00f6nlichkeit der 9 Enneagrammtypen</h1>
      <p class="lead-small">Die 9 Enneagrammtypen besitzen im Kern eine spezifische Ego-Pers\u00f6nlichkeitsstruktur, die implizit ein fundamentales Misstrauen gegen\u00fcber der Realit\u00e4t beinhaltet. Durch das Versagen der haltenden Umwelt fehlt bereits dem Kind das Urvertrauen \u2014 was zur Abtrennung vom Sein und zur Ego-Aktivierung f\u00fchrt, in deren Rahmen die Person lernt, sich \u201esicher" zu f\u00fchlen. Das Enneagramm zeigt die verschiedenen Varianten auf, wie sich das Ego der einzelnen Typen entwickelt, um mit den Ersch\u00fctterungen, Br\u00fcchen und Unterbrechungen der haltenden Umwelt umzugehen.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/ego-persoenlichkeit/ego-persoenlichkeit.jpg"
             alt="Die Entwicklung der Ego-Pers\u00f6nlichkeit der 9 Enneagrammtypen"
             class="psycho-img" />
      </div>
      <div style="margin:2.5rem 0 0;">
        <h2 style="font-family:'EB Garamond',serif;font-size:1.4rem;color:var(--anthracite);margin:0 0 0.75rem;">Das Ego in Bewegung &ndash; und der Raum dahinter</h2>
        <img
          src="./assets/ego-in-bewegung.jpg"
          alt="Der Typ ist das Ego in Bewegung. Essenz ist der Raum, in dem es sich bewegt."
          style="width:100%;border-radius:8px;margin:0.75rem 0 1.25rem;"
        />
        <p style="font-size:0.95rem;line-height:1.75;color:var(--anthracite);margin:1rem 0;">Dieser Satz beschreibt in zwei Zeilen, was viele Seiten Theorie nur ann\u00e4hernd fassen: Der Enneagrammtyp ist kein festes Wesen &ndash; er ist ein Prozess. Er ist das Ego im aktiven Vollzug seiner Schutzmechanismen, \u00dcberzeugungen und Reaktionsmuster. Der Typ bewegt sich st\u00e4ndig: er sucht, meidet, bewertet, kontrolliert, gibt, zieht sich zur\u00fcck.</p>
        <p style="font-size:0.95rem;line-height:1.75;color:var(--anthracite);margin:1rem 0;">Die Essenz hingegen ist kein weiterer Zustand, den man erst erreichen muss. Sie ist der Raum, in dem all das stattfindet &ndash; stiller, weiter, unver\u00e4nderlicher. Sie ist nicht das Ziel jenseits des Egos, sondern der Hintergrund, vor dem das Ego erscheint. Wer das sp\u00fcrt, erlebt oft zum ersten Mal: Es gibt etwas in mir, das nicht reagiert. Das einfach da ist.</p>
        <p style="font-size:0.95rem;line-height:1.75;color:var(--anthracite);margin:1rem 0;">Das Enneagramm zeigt die Bewegungen des Egos mit gro\u00dfer Pr\u00e4zision. Aber sein eigentlicher Beitrag liegt darin, dass es durch dieses Zeigen den Blick f\u00fcr den Raum \u00f6ffnet, in dem diese Bewegungen stattfinden. Den Typ kennen hei\u00dft: das Ego beim Namen nennen. Die Essenz sp\u00fcren hei\u00dft: erkennen, dass man mehr ist als dieser Name.</p>
      </div>

      ${bookTip("der-code-deiner-persoenlichkeit", "Schritt f\u00fcr Schritt den eigenen Typ erkennen und Wege zur pers\u00f6nlichen Entwicklung finden.", "Der Code deiner Pers\u00f6nlichkeit")}
      ${relatedLinks([
        {route:"grundformel", label:"Grundformel"},
        {route:"kerneberzeugungen", label:"Kern\u00fcberzeugungen"},
        {route:"antriebskraefte", label:"Antriebskr\u00e4fte"},
      ])}
    </section>
  `);
}

function dreiZentrenPage() {
  return shell(`
    ${pageHeader("drei-zentren")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Drei Zentren</p>
      <h1>Die drei Intelligenzzentren der 9 Enneagrammtypen</h1>
      <p class="lead-small">Kopf, Herz und Bauch \u2014 jeder Enneagrammtyp nutzt diese drei Intelligenzzentren auf seine eigene Weise. Diese \u00dcbersicht zeigt, wie sich die Nutzung im schlechtesten und im besten Fall unterscheidet.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/drei-zentren/drei-zentren.jpg"
             alt="Die drei Intelligenzzentren der 9 Enneagrammtypen"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.5rem;">
        <p class="vb-intro">Jeder Typ geh\u00f6rt einem der drei Zentren an \u2014 Bauch (8, 9, 1), Herz (2, 3, 4) oder Kopf (5, 6, 7) \u2014 und nutzt dessen Intelligenz entweder im ungesunden \u00dcberma\u00df/Mangel (&minus;) oder in ihrer reifen, hilfreichen Form (+).</p>
        <div style="display:grid;gap:.5rem;font-size:.9rem;line-height:1.7;">
          <div><span style="font-weight:700;color:var(--copper);">Typ 1:</span> &minus; Reaktionskontrolle (starre Selbstunterdr\u00fcckung) &nbsp;/&nbsp; + Gutes Bauchgef\u00fchl (verl\u00e4ssliche innere Orientierung)</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 2:</span> &minus; Emotionale Manipulation &nbsp;/&nbsp; + Empathie</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 3:</span> &minus; Unechtes Rollenspiel &nbsp;/&nbsp; + Authentische Beziehung</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 4:</span> &minus; Hypersensibilit\u00e4t &nbsp;/&nbsp; + Mitgef\u00fchl</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 5:</span> &minus; Hyperanalyse (Denken ohne Ende) &nbsp;/&nbsp; + Objektive Analyse</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 6:</span> &minus; Projektion (\u00c4ngste nach au\u00dfen tragen) &nbsp;/&nbsp; + Bewusste Einsicht</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 7:</span> &minus; Ma\u00dflose Planung &nbsp;/&nbsp; + Produktive Planung</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 8:</span> &minus; \u00dcberm\u00e4\u00dfige Handlung &nbsp;/&nbsp; + Ma\u00dfvolle Handlung</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 9:</span> &minus; Passivit\u00e4t &nbsp;/&nbsp; + Standhaftigkeit</div>
        </div>
        <p class="vb-anmerkung" style="margin-top:1.2rem;font-style:italic;">\u201eGenie ist Intelligenz der Begeisterung.\u201c (Edward Bach, 1886&ndash;1936)</p>
      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Das Enneagramm mit Kopf, Herz und Bauch &ndash; die drei Zentren und ihre Bedeutung f\u00fcr deine Pers\u00f6nlichkeit.", "Wer du wirklich bist &ndash; Band 1")}
      <p style="margin-top:1.5rem; text-align:center;">
        <a href="#zentren-weltwahrnehmung" style="color:var(--copper); text-decoration:none; font-size:0.95rem;">
          Weiter zu: Weltwahrnehmung in den drei Zentren \u2192
        </a>
      </p>
      ${relatedLinks([
        {route:"zentren-weltwahrnehmung", label:"Zentren & Weltwahrnehmung"},
        {route:"koerperregulation", label:"K\u00f6rperregulation"},
        {route:"energetische-bewegungen", label:"Energetische Bewegungen"},
        {route:"enneagramm-akupunktur", label:"Enneagramm meets Akupunktur"},
      ])}
    </section>
  `);
}

function zentrenWeltwahrnehmungPage() {
  return shell(`
    ${pageHeader("zentren-weltwahrnehmung")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Drei Zentren</p>
      <h1>Weltwahrnehmung in den drei Intelligenzzentren</h1>
      <p class="lead-small">Wie nehmen die 9 Enneagrammtypen die Welt wahr \u2014 innerhalb ihrer drei Intelligenzzentren? Diese \u00dcbersicht zeigt die Reaktionen im positiven und negativen Sinne sowie die drei Intelligenzzentrum-Pyramiden.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/zentren-weltwahrnehmung/zentren-weltwahrnehmung.jpg"
             alt="Weltwahrnehmung in den drei Intelligenzzentren"
             class="psycho-img" />
      </div>
      <p style="margin-top:1.5rem; text-align:center;">
        <a href="#drei-zentren" style="color:var(--copper); text-decoration:none; font-size:0.95rem;">
          \u2190 Zur\u00fcck zu: Drei Zentren
        </a>
      </p>
      ${relatedLinks([
        {route:"drei-zentren", label:"Drei Zentren"},
        {route:"koerperregulation", label:"K\u00f6rperregulation"},
        {route:"wahrnehmungsstile", label:"Wahrnehmungsstile"},
      ])}
    </section>
  `);
}

function energetischeBewegungPage() {
  return shell(`
    ${pageHeader("energetische-bewegungen")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Energetische Bewegungen</p>
      <h1>Die energetische Bewegung der 9 Enneagrammtypen im Rahmen von Beziehungen</h1>
      <p class="lead-small">Jeder Enneagrammtyp bewegt sich in Beziehungen auf eine charakteristische Weise: Angriff, Flucht oder T\u00e4uschung \u2014 diese drei energetischen Grundbewegungen pr\u00e4gen, wie die 9 Typen auf N\u00e4he, Konflikt und Verbindung reagieren.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/energetische-bewegungen/energetische-bewegungen.jpg"
             alt="Die energetische Bewegung der 9 Enneagrammtypen im Rahmen von Beziehungen"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.5rem;">
        <p class="vb-intro">Die Bauchtriade (8, 9, 1) reagiert auf Trennung mit <strong>Angriff</strong> \u2014 gegen die anderen an. Die Herztriade (2, 3, 4) reagiert mit <strong>T\u00e4uschung</strong> \u2014 durch ein Image, das sich zu den anderen hin bewegt. Die Kopftriade (5, 6, 7) reagiert mit <strong>Flucht</strong> \u2014 Angst, die von den anderen weg treibt. Innerhalb jeder Triade wird die Zentrumsenergie entweder extern ausagiert, gehalten/ausgesessen oder internalisiert.</p>
        <div style="display:grid;gap:.6rem;font-size:.9rem;line-height:1.7;">
          <div><span style="font-weight:700;color:var(--copper);">Typ 1 (Bauch, internalisiert)</span> &ndash; Thema Autonomie/Raum: &minus; immer nur Recht haben wollen &nbsp;/&nbsp; + ethisch und vorurteilsfrei unterst\u00fctzen.</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 2 (Herz, externalisiert)</span> &ndash; Thema Beziehung/Kontakt: &minus; immer nur geliebt werden wollen &nbsp;/&nbsp; + begeistert und selbstlos geben/helfen.</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 3 (Herz, gehalten/ausgesessen)</span> &ndash; Thema Beziehung/Kontakt: &minus; immer nur bewundert werden wollen &nbsp;/&nbsp; + liebensw\u00fcrdig und gef\u00fchlvoll agieren.</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 4 (Herz, internalisiert)</span> &ndash; Thema Beziehung/Kontakt: &minus; immer nur sich selbst verstehen wollen &nbsp;/&nbsp; + mitrei\u00dfend und originell sein.</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 5 (Kopf, internalisiert)</span> &ndash; Thema Sicherheit/Orientierung: &minus; immer nur die Welt verstehen wollen &nbsp;/&nbsp; + klar denken, f\u00fchlen und handeln.</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 6 (Kopf, gehalten/ausgesessen)</span> &ndash; Thema Sicherheit/Orientierung: &minus; immer autorit\u00e4tsgl\u00e4ubig und wachsam sein wollen &nbsp;/&nbsp; + mutig und loyal (mit)streiten, entspannen.</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 7 (Kopf, externalisiert)</span> &ndash; Thema Sicherheit/Orientierung: &minus; immer nur Spa\u00df haben wollen &nbsp;/&nbsp; + positiv pragmatisch handeln.</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 8 (Bauch, externalisiert)</span> &ndash; Thema Autonomie/Raum: &minus; immer der St\u00e4rkste sein wollen &nbsp;/&nbsp; + fair k\u00e4mpfen und besch\u00fctzen.</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 9 (Bauch, gehalten/ausgesessen)</span> &ndash; Thema Autonomie/Raum: &minus; immer nur Harmonie halten wollen &nbsp;/&nbsp; + freundlich, aber bestimmt handeln.</div>
        </div>
        <p class="vb-anmerkung" style="margin-top:1.2rem;font-style:italic;">\u201eAnerkennung ist der Sauerstoff f\u00fcr menschliche Beziehungen.\u201c (Deutsches Sprichwort)</p>
      </div>
      ${bookTip("die-sprache-unserer-beziehungen", "Wie sich N\u00e4he, R\u00fcckzug und Verbindung bei allen 9 Typen in Beziehungen zeigen &ndash; 365 Paarungskombinationen.", "Die Sprache unserer Beziehungen")}

      ${relatedLinks([
        {route:"naehe", label:"N\u00e4he & Distanz"},
        {route:"beziehungen", label:"Beziehungen"},
        {route:"drei-zentren", label:"Drei Zentren"},
      ])}
    </section>
  `);
}

function lookalikeTypenPage() {
  return shell(`
    ${pageHeader("lookalike-typen")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Lookalike-Typen</p>
      <h1>Lookalike-Typen im Enneagramm</h1>
      <p class="lead-small">Manche Enneagrammtypen sehen sich zum Verwechseln \u00e4hnlich \u2014 obwohl sie nicht \u00fcber Fl\u00fcgel oder Verbindungslinien miteinander verbunden sind. Diese \u00dcbersicht zeigt die wichtigsten sog. Lookalike-Typen und hilft bei der Differenzierung.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/lookalike-typen/lookalike-typen.jpg"
             alt="Lookalike-Typen im Enneagramm"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.5rem;">
        <p class="vb-intro">Interessanterweise sind es gerade die Typen <em>ohne</em> direkte Fl\u00fcgel- oder Verbindungslinie im Enneagramm-Symbol, die im Alltag am leichtesten verwechselt werden \u2014 weil sie sich in bestimmten Verhaltensmerkmalen \u00e4hneln, obwohl ihre inneren Motivationen v\u00f6llig verschieden sind.</p>
        <div style="display:grid;gap:.5rem;font-size:.9rem;line-height:1.7;">
          <div><span style="font-weight:700;color:var(--copper);">Typ 1 (Der Perfektionist)</span> wird oft verwechselt mit Typ 3 (Der Dynamiker), Typ 6 (Der loyale Skeptiker) und Typ 8 (Der Herausforderer) \u2014 alle wirken nach au\u00dfen bestimmt und kontrolliert, aus sehr unterschiedlichen inneren Gr\u00fcnden.</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 2 (Der Helfer)</span> wird oft verwechselt mit Typ 7 (Der Optimist) und Typ 9 (Der Friedliche) \u2014 alle wirken warmherzig und zugewandt, doch mit unterschiedlichen Beweggr\u00fcnden.</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 3 (Der Dynamiker)</span> wird oft verwechselt mit Typ 1 (Der Perfektionist), Typ 7 (Der Optimist) und Typ 8 (Der Herausforderer) \u2014 alle wirken tatkr\u00e4ftig und zielorientiert.</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 4 (Der Individualist)</span> wird oft verwechselt mit Typ 6 (Der loyale Skeptiker), Typ 7 (Der Optimist) und Typ 9 (Der Friedliche) \u2014 alle k\u00f6nnen nach innen gerichtet und stimmungsvoll wirken.</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 5 (Der Denker)</span> wird oft verwechselt mit Typ 1 (Der Perfektionist) und Typ 9 (Der Friedliche) \u2014 alle wirken zur\u00fcckhaltend und sachlich-distanziert.</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 6 (Der loyale Skeptiker)</span> wird oft verwechselt mit Typ 4 (Der Individualist) und Typ 8 (Der Herausforderer) \u2014 alle k\u00f6nnen wachsam, kritisch oder konfrontativ auftreten.</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 7 (Der Optimist)</span> wird oft verwechselt mit Typ 2 (Der Helfer), Typ 3 (Der Dynamiker) und Typ 9 (Der Friedliche) \u2014 alle wirken freundlich, leicht und angenehm im Umgang.</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 8 (Der Herausforderer)</span> wird oft verwechselt mit Typ 1 (Der Perfektionist), Typ 4 (Der Individualist) und Typ 6 (Der loyale Skeptiker) \u2014 alle k\u00f6nnen intensiv, direkt oder konfrontativ wirken.</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 9 (Der Friedliche)</span> wird oft verwechselt mit Typ 2 (Der Helfer), Typ 4 (Der Individualist) und Typ 7 (Der Optimist) \u2014 alle k\u00f6nnen sanft, zugewandt oder vertr\u00e4umt wirken.</div>
        </div>
        <p class="vb-anmerkung" style="margin-top:1.2rem;font-style:italic;">\u201eDenn eine \u00c4hnlichkeit der Charaktere ist das st\u00e4rkste Band der Freundschaft.\u201c (Plinius der J\u00fcngere, um 61 &ndash; um 113 n. Chr., r\u00f6mischer Politiker und Schriftsteller, Epistulae, Buch IV, Brief 15)</p>
      </div>
      ${bookTip("die-praxis-der-typbestimmung-taschenbuch", "Typbestimmung Schritt f\u00fcr Schritt &ndash; inkl. Lookalike-Differenzierung f\u00fcr alle 9 Typen.", "Die Praxis der Typbestimmung")}
      ${relatedLinks([
        {route:"differenzierung", label:"Differenzierung"},
        {route:"verwechslungen", label:"Verwechslungen"},
        {route:"subtypen-checklisten", label:"Subtypen-Checklisten"},
      ])}
    </section>
  `);
}

function befreiendeFragenPage() {
  return shell(`
    ${pageHeader("befreiende-fragen")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Befreiende Fragen</p>
      <h1>Befreiende Fragen an die 9 Enneagrammtypen</h1>
      <p class="lead-small">Wie w\u00fcrde dein Leben aussehen, wenn du erkennen w\u00fcrdest...? Diese Fragen richten sich an das Heilungspotenzial jedes Enneagrammtyps \u2014 sie laden ein, einschr\u00e4nkende \u00dcberzeugungen loszulassen und ein befreites Leben im Rahmen des eigenen Typs zu entdecken.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/befreiende-fragen/befreiende-fragen.jpg"
             alt="Befreiende Fragen an die 9 Enneagrammtypen"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.5rem;">
        <div style="display:grid;gap:.5rem;font-size:.9rem;line-height:1.7;">
          <div><span style="font-weight:700;color:var(--copper);">Typ 1 &ndash; Der Perfektionist:</span> Wie w\u00fcrde dein Leben aussehen, wenn du erkennen w\u00fcrdest, dass die Dinge bereits perfekt sind, ohne dein Zutun?</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 2 &ndash; Der Helfer:</span> Wie w\u00fcrde dein Leben aussehen, wenn du erkennen w\u00fcrdest, dass ein h\u00f6herer Wille sich um deine Bed\u00fcrfnisse k\u00fcmmert?</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 3 &ndash; Der Dynamiker:</span> Wie w\u00fcrde dein Leben aussehen, wenn du hoffen k\u00f6nntest, dass die wichtigen Dinge des Lebens auch ohne dein Handeln f\u00fcr dich getan werden?</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 4 &ndash; Der Individualist:</span> Wie w\u00fcrde dein Leben aussehen, wenn du erkennen w\u00fcrdest, dass du auch geliebt und gesehen wirst, wenn du deine Urspr\u00fcnglichkeit lebst?</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 5 &ndash; Der Denker:</span> Wie w\u00fcrde dein Leben aussehen, wenn du erkennen w\u00fcrdest, dass du schon alles Wissen besitzt, was du ben\u00f6tigst?</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 6 &ndash; Der loyale Skeptiker:</span> Wie w\u00fcrde dein Leben aussehen, wenn du erkennen w\u00fcrdest, dass du dir, anderen Menschen und der Welt vertrauen kannst?</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 7 &ndash; Der Optimist:</span> Wie w\u00fcrde dein Leben aussehen, wenn du erkennen w\u00fcrdest, dass du gl\u00fccklich wirst, auch wenn du dich festlegst?</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 8 &ndash; Der Herausforderer:</span> Wie w\u00fcrde dein Leben aussehen, wenn du erkennen w\u00fcrdest, dass du trotz \u00e4u\u00dferer St\u00e4rke innerlich manchmal schwach bist?</div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 9 &ndash; Der Friedliche:</span> Wie w\u00fcrde dein Leben aussehen, wenn du erkennen w\u00fcrdest, dass du bedingungslos geliebt und als wichtig angenommen bist?</div>
        </div>
        <p class="vb-anmerkung" style="margin-top:1.2rem;font-style:italic;">\u201eKlug fragen k\u00f6nnen, ist die halbe Weisheit.\u201c (Sir Francis Bacon, englischer Philosoph, Jurist und Staatsmann, 1561&ndash;1626)</p>
      </div>
      ${bookTip("du-bist-nicht-dein-zweifel", "Befreiende Fragen und Impulse f\u00fcr alle 9 Typen &ndash; loslassen, was nicht wirklich du bist.", "Du bist nicht dein Zweifel")}
      <p style="margin-top:1.5rem; text-align:center;">
        <a href="#zentrale-fragen" style="color:var(--copper); text-decoration:none; font-size:0.95rem;">
          \u2190 Zur\u00fcck zu: Zentrale Fragen
        </a>
      </p>
      ${relatedLinks([
        {route:"zentrale-fragen", label:"Zentrale Fragen"},
        {route:"heilungsweg", label:"Heilungsweg"},
        {route:"bewusstseinsuebungen", label:"Bewusstseins\u00fcbungen"},
      ])}
    </section>
  `);
}

function zentraleFragenPage() {
  return shell(`
    ${pageHeader("zentrale-fragen")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Zentrale Fragen</p>
      <h1>Die zentralen Fragen der 9 Enneagrammtypen</h1>
      <p class="lead-small">Die zentralen Fragen machen die wiederkehrenden inneren Themen jedes Enneagrammtyps bewusst. Sie helfen dabei, eigene Muster zu erkennen \u2014 als erster Schritt in Richtung Heilung und Wachstum.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/zentrale-fragen/zentrale-fragen.jpg"
             alt="Die zentralen Fragen der 9 Enneagrammtypen"
             class="psycho-img" />
      </div>
      <p style="margin-top:1.5rem; text-align:center;">
        <a href="#befreiende-fragen" style="color:var(--copper); text-decoration:none; font-size:0.95rem;">
          Weiter zu: Befreiende Fragen \u2192
        </a>
      </p>
      ${relatedLinks([
        {route:"befreiende-fragen", label:"Befreiende Fragen"},
        {route:"60-sekunden-scan", label:"60-Sekunden-Scan"},
        {route:"enneagramm-profiling", label:"Enneagramm-Profiling"},
      ])}
    </section>
  `);
}

function fuehrungsstilePage() {
  return shell(`
    ${pageHeader("fuehrungsstile")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 F\u00fchrungsstile</p>
      <h1>Die F\u00fchrungsstile der 9 Enneagrammtypen</h1>
      <p class="lead-small">Jeder Enneagrammtyp f\u00fchrt auf seine ganz eigene Weise \u2014 gepr\u00e4gt durch seine Leidenschaft, seine St\u00e4rken und seinen blinden Fleck. Diese \u00dcbersicht zeigt die typischen F\u00fchrungsstile der 9 Typen aus deren eigener Sicht.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/fuehrungsstile/fuehrungsstile.jpg"
             alt="Die F\u00fchrungsstile der 9 Enneagrammtypen"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.5rem;">
        <div style="display:grid;gap:1rem;font-size:.9rem;line-height:1.7;">
          <div><span style="font-weight:700;color:var(--copper);">Typ 1 &ndash; Der Perfektionist:</span> F\u00fchrungsstil durch Standards, Beispiele, Normen, Regeln.<br><span style="color:var(--muted);font-size:.85rem;">St\u00e4rke unter Druck: kanalisiert Unmut in maßvolle, prinzipientreue Klarheit statt in Rechthaberei.</span></div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 2 &ndash; Der Helfer:</span> F\u00fchrungsstil durch Motivation, Unterst\u00fctzung, Hilfe.<br><span style="color:var(--muted);font-size:.85rem;">St\u00e4rke unter Druck: bleibt gro\u00dfz\u00fcgig, ohne stille Erwartungshaltung an Dankbarkeit zu kn\u00fcpfen.</span></div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 3 &ndash; Der Dynamiker:</span> F\u00fchrungsstil durch Ziele, Pl\u00e4ne, Ergebnisse.<br><span style="color:var(--muted);font-size:.85rem;">St\u00e4rke unter Druck: l\u00e4sst die Fassade fallen und f\u00fchrt durch echte statt nur inszenierte Ergebnisse.</span></div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 4 &ndash; Der Individualist:</span> F\u00fchrungsstil durch Visionen, emotionale Verbindungen.<br><span style="color:var(--muted);font-size:.85rem;">St\u00e4rke unter Druck: verwandelt Stimmungsschwankungen in sch\u00f6pferische Tiefe statt in R\u00fcckzug.</span></div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 5 &ndash; Der Denker:</span> F\u00fchrungsstil durch Erforschung, Beobachtung, Analyse.<br><span style="color:var(--muted);font-size:.85rem;">St\u00e4rke unter Druck: teilt Wissen aktiv, statt sich hinter dem letzten fehlenden Detail zu verschanzen.</span></div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 6 &ndash; Der loyale Skeptiker:</span> F\u00fchrungsstil durch kreative Probleml\u00f6sung, Logik, Rationalit\u00e4t.<br><span style="color:var(--muted);font-size:.85rem;">St\u00e4rke unter Druck: wandelt Zweifel in wache, verl\u00e4ssliche Entschlossenheit statt in L\u00e4hmung.</span></div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 7 &ndash; Der Optimist:</span> F\u00fchrungsstil durch neue Ideen, Innovation.<br><span style="color:var(--muted);font-size:.85rem;">St\u00e4rke unter Druck: bleibt bei einer Sache, statt vor Unbequemem in die n\u00e4chste Idee zu fl\u00fcchten.</span></div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 8 &ndash; Der Herausforderer:</span> F\u00fchrungsstil durch Strategien, gro\u00dfe Aktionen.<br><span style="color:var(--muted);font-size:.85rem;">St\u00e4rke unter Druck: setzt Kontrolle gezielt ein, statt reflexhaft zu dominieren.</span></div>
          <div><span style="font-weight:700;color:var(--copper);">Typ 9 &ndash; Der Friedliche:</span> F\u00fchrungsstil durch Konsens, \u00dcbereinstimmung, Einigkeit.<br><span style="color:var(--muted);font-size:.85rem;">St\u00e4rke unter Druck: bezieht aktiv Position, statt Konflikte durch R\u00fcckzug zu vermeiden.</span></div>
        </div>
        <p class="vb-anmerkung" style="margin-top:1.2rem;font-style:italic;">\u201eAus Demut erw\u00e4chst verantwortliche F\u00fchrung.\u201c (Laotse, vermutlich 6. Jhd. vor Chr.)</p>
        <p class="vb-intro" style="margin-top:1.2rem;">Wie jeder Typ unter Verantwortung, Konflikt und Zeitdruck wirklich reagiert \u2013 und wie daraus reife, tragf\u00e4hige F\u00fchrung wird \u2013 vertieft David L. Rathmer im Bereich <a href="javascript:void(0)" data-route="david-rathmer-fuehrung-mit-fundament">F\u00fchrung mit Fundament</a>.</p>
      </div>
      ${bookTip("fuehrung-mit-fundament", "632 Seiten Tiefenpsychologie f\u00fcr F\u00fchrungskr\u00e4fte: die neun F\u00fchrungstypen, ihre blinden Flecken und der Weg zu reifer, wirksamer F\u00fchrung.", "F\u00fchrung mit Fundament")}
      ${bookTip("meta-intelligenz", "Meta-Intelligenz: Wie das Enneagramm F\u00fchrungskr\u00e4fte in ihrer tiefsten Wirksamkeit st\u00e4rkt.", "Meta-Intelligenz")}
      ${relatedLinks([
        {route:"david-rathmer-fuehrung-mit-fundament", label:"F\u00fchrung mit Fundament (Buch)"},
        {route:"enneagramm-profiling", label:"Enneagramm-Profiling"},
        {route:"antriebskraefte", label:"Antriebskr\u00e4fte"},
        {route:"tischdialoge", label:"Tischdialoge"},
      ])}
    </section>
  `);
}

function beziehungenPage() {
  const typen = [
    { nr: 1, leidenschaft: "Zorn / Groll", farbe: TYPE_COLORS[1], anziehung: "Zuverl\u00e4ssig, integer, verantwortungsbewusst", konflikt: "Tendenz zur Kritik und zum Perfektionismus &ndash; Partner f\u00fchlen sich oft, als ob sie nie gen\u00fcgen", lernfeld: "Milde \u00fcben &ndash; andere nicht korrigieren m\u00fcssen" },
    { nr: 2, leidenschaft: "Stolz / Hochmut", farbe: TYPE_COLORS[2], anziehung: "Liebevoll, f\u00fcrsorglich, aufmerksam", konflikt: "Erwartet unbewusst Dankbarkeit und Gegenleistung; kann vereinnahmend wirken", lernfeld: "Eigene Bed\u00fcrfnisse anerkennen &ndash; Liebe geschehen lassen" },
    { nr: 3, leidenschaft: "Eitelkeit / T\u00e4uschung", farbe: TYPE_COLORS[3], anziehung: "Dynamisch, zielstrebig, charismatisch", konflikt: "Hinter der Fassade bleibt Unsicherheit; Partner sp\u00fcren, dass er nicht ganz echt ist", lernfeld: "Sich zeigen wie man ist &ndash; Echtheit schafft mehr N\u00e4he als Erfolg" },
    { nr: 4, leidenschaft: "Neid / Missgunst", farbe: TYPE_COLORS[4], anziehung: "Tiefgr\u00fcndig, kreativ, leidenschaftlich", konflikt: "Schwankt zwischen Sehnsucht und Entt\u00e4uschung; f\u00fchlt sich schnell nicht gesehen", lernfeld: "Dankbarkeit kultivieren &ndash; w\u00fcrdigen, was da ist" },
    { nr: 5, leidenschaft: "Geiz / Habsucht", farbe: TYPE_COLORS[5], anziehung: "Ruhig, reflektiert, wissend", konflikt: "Distanz wirkt auf Partner schwer ertr\u00e4glich; N\u00e4he f\u00fchlt sich f\u00fcr ihn wie \u00dcbergriff an", lernfeld: "Sich \u00f6ffnen und teilen &ndash; im Herzen pr\u00e4sent sein" },
    { nr: 6, leidenschaft: "Angst / Zweifel", farbe: TYPE_COLORS[6], anziehung: "Treu, aufmerksam, zuverl\u00e4ssig", konflikt: "Zweifel und Misstrauen belasten die Partnerschaft; schwankt zwischen Bindung und Skepsis", lernfeld: "Vertrauen als Risiko akzeptieren &ndash; nicht st\u00e4ndig absichern" },
    { nr: 7, leidenschaft: "V\u00f6llerei / Exzess", farbe: TYPE_COLORS[7], anziehung: "Inspirierend, unterhaltsam, voller Ideen", konflikt: "Meidet Schmerz und Tiefe; Partner k\u00f6nnen sich zur\u00fcckgesetzt f\u00fchlen", lernfeld: "Best\u00e4ndigkeit \u00fcben &ndash; Schmerz aushalten und Tiefe zulassen" },
    { nr: 8, leidenschaft: "Wollust / Ma\u00dflosigkeit", farbe: TYPE_COLORS[8], anziehung: "Kraftvoll, besch\u00fctzend, entschlossen", konflikt: "Drang zur Kontrolle kann erdr\u00fcckend sein; Partner f\u00fchlen sich \u00fcberrollt", lernfeld: "Verletzlichkeit zulassen &ndash; St\u00e4rke auch als Zuwendung leben" },
    { nr: 9, leidenschaft: "Tr\u00e4gheit / Selbstvergessenheit", farbe: TYPE_COLORS[9], anziehung: "Ausgleichend, geduldig, freundlich", konflikt: "Vergisst sich selbst, passt sich an; Beziehung ger\u00e4t in Stagnation", lernfeld: "Eigenen Willen einbringen &ndash; klar Position beziehen" },
  ];

  const subtypes = [
    { code: "SE1", text: "Sucht Ordnung und Verl\u00e4sslichkeit in Intimit\u00e4t" }, { code: "SO1", text: "M\u00f6chte ein richtiges Paar darstellen" }, { code: "SX1", text: "Leidenschaftlich und gleichzeitig streng mit hohen Anspr\u00fcchen" },
    { code: "SE2", text: "Gibt F\u00fcrsorge k\u00f6rperlich, erwartet Dankbarkeit" }, { code: "SO2", text: "Sucht Bewunderung f\u00fcr die gemeinsame N\u00e4he" }, { code: "SX2", text: "Will exklusive Verschmelzung, kann besitzergreifend sein" },
    { code: "SE3", text: "Verbindet Erotik mit Leistungsf\u00e4higkeit" }, { code: "SO3", text: "Achtet auf \u00e4u\u00dfere Wirkung, auch in der Partnerschaft" }, { code: "SX3", text: "Sucht Spiegelung durch intensive erotische Best\u00e4tigung" },
    { code: "SE4", text: "N\u00e4he \u00fcber F\u00fcrsorge, mit unterschwelligem Gef\u00fchl des Mangels" }, { code: "SO4", text: "Vergleicht sich st\u00e4ndig, sucht besondere Bindung" }, { code: "SX4", text: "Dr\u00e4ngt dramatisch in Intensit\u00e4t und Verschmelzung" },
    { code: "SE5", text: "H\u00e4lt Distanz, Sexualit\u00e4t kontrolliert" }, { code: "SO5", text: "Sucht Austausch im Denken, k\u00f6rperlich zur\u00fcckhaltend" }, { code: "SX5", text: "\u00dcberraschend leidenschaftlich, wenn Vertrauen da ist" },
    { code: "SE6", text: "Sucht Sicherheit und verl\u00e4ssliche Routinen" }, { code: "SO6", text: "Fragt nach Zugeh\u00f6rigkeit im sozialen Kontext" }, { code: "SX6", text: "Schwankt zwischen Hingabe und Misstrauen" },
    { code: "SE7", text: "Verspielt, leicht, lustvoll ohne Risiko" }, { code: "SO7", text: "Erotisches Abenteuer im sozialen Raum" }, { code: "SX7", text: "Intensive Hingabe, manchmal ma\u00dflos" },
    { code: "SE8", text: "Kraftvoll, sinnlich, mit St\u00e4rke verbunden" }, { code: "SO8", text: "Besch\u00fctzerrolle auch sexuell betont" }, { code: "SX8", text: "Dominant, leidenschaftlich, zugleich z\u00e4rtlich in der Tiefe" },
    { code: "SE9", text: "Sucht friedvolle N\u00e4he, Sexualit\u00e4t als Geborgenheit" }, { code: "SO9", text: "Will Harmonie im gr\u00f6\u00dferen Rahmen" }, { code: "SX9", text: "Verschmelzend, verliert sich leicht im Partner" },
  ];

  return shell(`
    ${pageHeader("beziehungen")}
    <section class="narrow">
      <p class="eyebrow">Beziehungen & N\u00e4he</p>
      <h1>Die 9 Enneagrammtypen in Beziehungen</h1>
      <p class="lead-small">Was zieht uns zu anderen hin &ndash; und was bringt uns in Konflikt? Jeder Enneagrammtyp tr\u00e4gt seine Leidenschaft in jede Beziehung. Diese \u00dcbersicht zeigt Anziehungskraft, typische Konflikte und das Lernfeld jedes Typs.</p>

      <div style="display:flex; flex-direction:column; gap:1rem; margin-top:1.5rem;">
        ${typen.map(t => `
        <div style="border-left:4px solid ${t.farbe}; padding:0.85rem 1.1rem; background:color-mix(in srgb, ${t.farbe} 6%, var(--paper)); border-radius:0 0.5rem 0.5rem 0;">
          <strong style="color:${t.farbe}; font-size:1rem;">Typ ${t.nr} \u00b7 ${t.leidenschaft}</strong>
          <div style="margin-top:0.5rem; display:grid; grid-template-columns:1fr 1fr 1fr; gap:0.5rem; font-size:0.85rem; color:var(--ink);">
            <div><span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--muted);">Anziehung</span><br>${t.anziehung}</div>
            <div><span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--muted);">Konflikt</span><br>${t.konflikt}</div>
            <div><span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--muted);">Lernfeld</span><br>${t.lernfeld}</div>
          </div>
        </div>`).join("")}
      </div>

      <h2 style="margin-top:2.5rem; font-size:1.15rem; letter-spacing:0.04em; color:var(--ink);">Die 27 Subtypen &ndash; N\u00e4he & Intimit\u00e4t</h2>
      <p style="font-size:0.88rem; color:var(--muted); margin-bottom:1rem;">Wie der Instinkt (SE \u00b7 SO \u00b7 SX) die Art pr\u00e4gt, wie ein Typ N\u00e4he erlebt und ausdr\u00fcckt.</p>
      <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:0.5rem;">
        ${subtypes.map(s => `
        <div style="background:color-mix(in srgb, ${TYPE_COLORS[parseInt(s.code.slice(-1))]||'var(--copper)'} 10%, var(--paper)); border:1.5px solid ${TYPE_COLORS[parseInt(s.code.slice(-1))]||'var(--copper)'}40; border-radius:0.4rem; padding:0.6rem 0.75rem; font-size:0.82rem;">
          <strong style="color:${TYPE_COLORS[parseInt(s.code.slice(-1))]||'var(--copper)'}; font-size:0.78rem;">${s.code}</strong><br>
          <span style="color:var(--ink); line-height:1.35;">${s.text}</span>
        </div>`).join("")}
      </div>

      <h2 style="margin-top:2.5rem; font-size:1.15rem; letter-spacing:0.04em; color:var(--ink);">27 Comics: Spiegel menschlicher Eigenarten</h2>
      <p style="font-size:0.88rem; color:var(--muted); margin-bottom:1rem;">In den Bildern schimmern die tiefen W\u00fcnsche, \u00c4ngste und Fluchten der 27 Subtypen durch &ndash; manchmal zart, manchmal drastisch. Klicke auf einen Comic, um ihn zu vergr\u00f6\u00dfern.</p>
      <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:0.6rem; margin-bottom:2rem;">
        ${["SE1","SO1","SX1","SE2","SO2","SX2","SE3","SO3","SX3","SE4","SO4","SX4","SE5","SO5","SX5","SE6","SO6","SX6","SE7","SO7","SX7","SE8","SO8","SX8","SE9","SO9","SX9"].map(code => `
        <div style="border-radius:0.4rem; overflow:hidden; border:1px solid var(--line); background:var(--paper); cursor:zoom-in;"
             data-comic-open="${code.toLowerCase()}"
             title="${code} &ndash; antippen zum Vergr\u00f6\u00dfern">
          <img src="${R2_CDN}assets/comics/${code.toLowerCase()}.jpg"
               alt="Comic ${code}"
               style="width:100%; display:block; filter:contrast(1.05); pointer-events:none;" />
          <div style="text-align:center; font-size:0.72rem; font-weight:700; color:${TYPE_COLORS[parseInt(code.slice(-1))]||'var(--copper)'}; background:color-mix(in srgb,${TYPE_COLORS[parseInt(code.slice(-1))]||'var(--copper)'} 10%,var(--paper)); padding:0.3rem 0; border-top:1px solid var(--line);">${code}</div>
        </div>`).join("")}
      </div>

      <h2 style="margin-top:2.5rem; font-size:1.15rem; letter-spacing:0.04em; color:var(--ink);">Paarungen-Kompass: Wie passen zwei Subtypen zusammen?</h2>
      <p style="font-size:0.88rem; color:var(--muted); margin-bottom:1rem;">W\u00e4hle deinen Subtyp &ndash; und sieh auf einen Blick, wie du mit allen anderen 26 Subtypen harmonierst, wo Reibung entsteht und was du voneinander lernen kannst.</p>

      <div style="display:grid; grid-template-columns:repeat(9, 1fr); gap:0.3rem; margin-bottom:1.5rem;">
        ${["SE1","SO1","SX1","SE2","SO2","SX2","SE3","SO3","SX3","SE4","SO4","SX4","SE5","SO5","SX5","SE6","SO6","SX6","SE7","SO7","SX7","SE8","SO8","SX8","SE9","SO9","SX9"].map(code => `
        <button data-bez-code="${code}" style="
          padding:0.35rem 0.1rem; font-size:0.72rem; font-weight:600;
          border:2px solid ${TYPE_COLORS[parseInt(code.slice(-1))]||'var(--copper)'};
          background:${beziehungSelected === code ? (TYPE_COLORS[parseInt(code.slice(-1))]||'var(--copper)') : `color-mix(in srgb,${TYPE_COLORS[parseInt(code.slice(-1))]||'var(--copper)'} 12%,var(--paper))`};
          color:${beziehungSelected === code ? "#fff" : (TYPE_COLORS[parseInt(code.slice(-1))]||'var(--copper)')};
          border-radius:0.35rem; cursor:pointer; transition:all 0.15s; letter-spacing:0.01em;">
          ${code}
        </button>`).join("")}
      </div>

      <div id="bez-paarungen">
      ${beziehungSelected ? (() => {
        const matches = BEZIEHUNGS_PAARUNGEN.filter(p => p.a === beziehungSelected || p.b === beziehungSelected);
        const partner = matches.map(p => p.a === beziehungSelected ? p.b : p.a);
        const typeColors = TYPE_COLORS;
        return `
        <div style="margin-bottom:0.5rem; font-size:0.88rem; color:var(--muted);">
          <strong style="color:${TYPE_COLORS[parseInt(beziehungSelected.slice(-1))]||'var(--copper)'};">${beziehungSelected}</strong> in Kombination mit allen anderen 26 Subtypen:
        </div>
        <div style="display:flex; flex-direction:column; gap:0.75rem;">
          ${matches.map((p, i) => {
            const partnerCode = partner[i];
            const typeNr = partnerCode.slice(-1);
            const col = TYPE_COLORS[parseInt(typeNr)] || "var(--copper)";
            return `
            <div style="border-left:3px solid ${col}; padding:0.7rem 1rem; background:color-mix(in srgb, ${col} 5%, var(--paper)); border-radius:0 0.4rem 0.4rem 0;">
              <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.45rem;">
                <strong style="font-size:0.92rem;"><span style="color:${TYPE_COLORS[parseInt(beziehungSelected.slice(-1))]||'var(--copper)'}">${beziehungSelected}</span><span style="color:var(--muted);font-weight:400;"> + </span><span style="color:${col}">${partnerCode}</span></strong>
                <span style="font-size:0.8rem; color:var(--muted);">${p.dynamik}</span>
              </div>
              <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:0.5rem; font-size:0.82rem; color:var(--ink);">
                <div><span style="font-size:0.72rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--muted);">Gefahr</span><br>${p.gefahr}</div>
                <div><span style="font-size:0.72rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--muted);">Chance</span><br>${p.chance}</div>
                <div><span style="font-size:0.72rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--muted);">Kurztipp</span><br>${p.kurztipp}</div>
              </div>
              ${p.vertiefung ? `
              <div style="margin-top:0.75rem; padding-top:0.65rem; border-top:1px solid color-mix(in srgb, ${col} 20%, var(--line)); font-size:0.84rem; color:var(--ink); line-height:1.55;">
                ${p.vertiefung}
              </div>
              <div style="margin-top:0.6rem; display:grid; grid-template-columns:1fr 1fr; gap:0.4rem;">
                <div style="background:color-mix(in srgb, ${TYPE_COLORS[parseInt(beziehungSelected.slice(-1))]||col} 18%, var(--paper)); border-radius:0.3rem; padding:0.45rem 0.6rem; font-size:0.8rem;">
                  <span style="font-size:0.7rem; text-transform:uppercase; letter-spacing:0.05em; color:${TYPE_COLORS[parseInt(beziehungSelected.slice(-1))]||col}; font-weight:700;">F\u00fcr ${p.a === beziehungSelected ? p.a : p.b}</span><br>
                  <span style="color:var(--ink);">${p.a === beziehungSelected ? p.tippA : p.tippB}</span>
                </div>
                <div style="background:color-mix(in srgb, ${col} 18%, var(--paper)); border-radius:0.3rem; padding:0.45rem 0.6rem; font-size:0.8rem;">
                  <span style="font-size:0.7rem; text-transform:uppercase; letter-spacing:0.05em; color:${col}; font-weight:700;">F\u00fcr ${p.a === beziehungSelected ? p.b : p.a}</span><br>
                  <span style="color:var(--ink);">${p.a === beziehungSelected ? p.tippB : p.tippA}</span>
                </div>
              </div>` : ""}
            </div>`;
          }).join("")}
        </div>`;
      })() : `<div style="text-align:center; padding:2rem; color:var(--muted); font-size:0.9rem; border:2px dashed var(--line); border-radius:0.5rem;">W\u00e4hle oben einen Subtyp, um alle Paarungen zu sehen.</div>`}

      </div>

      ${bookTip("die-sprache-unserer-beziehungen", "365 Typ- und Subtypen-Kombinationen im \u00dcberblick &ndash; das komplette Beziehungslexikon des Enneagramms.", "Die Sprache unserer Beziehungen")}
      ${bookTip("die-sprache-unserer-sexualitaet", "Wie N\u00e4he, Leidenschaft und Intimit\u00e4t bei allen 27 Subtypen erlebt werden &ndash; mit \u00dcbungen f\u00fcr Paare.", "Die Sprache unserer Sexualit\u00e4t")}

      <hr style="margin:2.5rem 0;border:none;border-top:1px solid var(--line);" />
      <h2 style="font-size:1.2rem;letter-spacing:.03em;color:var(--ink);margin-bottom:.5rem;">Die Beziehungs-Dynamik: Deine zwei gr&ouml;&szlig;ten Herausforderungen</h2>
      <p style="font-size:.9rem;color:var(--muted);line-height:1.7;margin-bottom:.5rem;">Im Enneagramm geht es nicht darum, Menschen in Schubladen zu stecken, sondern zu verstehen, <em>warum</em> wir so ticken, wie wir ticken. Jede der neun Pers&ouml;nlichkeiten nutzt eine ganz eigene Strategie, um das Leben zu meistern, Schmerz zu vermeiden und Liebe zu finden.</p>
      <p style="font-size:.9rem;color:var(--muted);line-height:1.7;margin-bottom:.5rem;">Aus der jahrzehntelangen Erfahrung der Enneagramm-Arbeit wissen wir: Es gibt unter den acht &uuml;brigen Typen fast immer <strong>zwei spezifische Charaktere, mit denen die Reibung von Natur aus besonders intensiv ist</strong>. Das liegt nicht daran, dass diese Menschen &bdquo;schlecht&ldquo; sind, sondern daran, dass ihre tiefsten Kernwunden und Abwehrmechanismen genau das triggern, was wir bei uns selbst am meisten f&uuml;rchten oder unterdr&uuml;cken.</p>
      <p style="font-size:.9rem;color:var(--muted);line-height:1.7;margin-bottom:1.5rem;">Hier erfahren Sie, welche zwei Typen f&uuml;r Ihr Enneagramm-Profil die gr&ouml;&szlig;te Herausforderung darstellen &ndash; und warum es zwischen Ihnen so oft funkt.</p>

      ${[
        { typ:1, name:"Der Reformer", farbe:TYPE_COLORS[1], f\u00e4lle:[
          { gegner:"Typ 4", text:"Typ 1 strebt nach logischer Perfektion, Struktur und emotionaler Selbstbeherrschung. Typ 4 hingegen taucht tief in unberechenbare, intensive Gef&uuml;hlswelten ab. Die 1 empfindet die 4 oft als &bdquo;zu dramatisch&ldquo;, w&auml;hrend die 4 die 1 als kalt, starr und verurteilend wahrnimmt." },
          { gegner:"Typ 7", text:"Typ 1 lebt nach einem strengen Pflicht- und Regelbewusstsein. Typ 7 flieht vor Verpflichtungen und sucht das Abenteuer und den Spa&szlig;. F&uuml;r die 7 wirkt die 1 schnell wie ein strenger Gef&auml;ngnisw\u00e4rter; f&uuml;r die 1 wirkt die 7 unverantwortlich und oberfl&auml;chlich." }
        ]},
        { typ:2, name:"Der Helfer", farbe:TYPE_COLORS[2], f\u00e4lle:[
          { gegner:"Typ 5", text:"Typ 2 sucht emotionale N&auml;he, Verbundenheit und Best&auml;tigung durch das Gegen&uuml;ber. Typ 5 hingegen sch&uuml;tzt seine Energie, braucht extrem viel Distanz und zieht sich zur&uuml;ck. Die 2 f&uuml;hlt sich dadurch eiskalt abgewiesen, w&auml;hrend die 5 sich von den emotionalen Anspr&uuml;chen der 2 v&ouml;llig bedr\u00e4ngt und ausgesaugt f&uuml;hlt." },
          { gegner:"Typ 8", text:"Typ 2 m&ouml;chte gebraucht werden und nutzt oft subtile, schmeichelhafte Zuwendung. Typ 8 verabscheut jede Form von (scheinbarer) emotionaler Manipulation oder Schw&auml;che aufs Tiefste. Die 8 reagiert oft mit schonungsloser H&auml;rte, was die sensible 2 tief verletzt." }
        ]},
        { typ:3, name:"Der Dynamiker", farbe:TYPE_COLORS[3], f\u00e4lle:[
          { gegner:"Typ 1", text:"Typ 3 ist pragmatisch und biegt im Zweifel auch mal eine Regel oder verstellt sich, um das Ziel und den Erfolg zu erreichen. Typ 1 hingegen duldet keine moralischen Kompromisse. Die 1 verurteilt das Verhalten der 3 als unaufrichtig, was den Stolz der 3 tief trifft." },
          { gegner:"Typ 7", text:"Typ 3 arbeitet hochfokussiert, diszipliniert und ergebnisorientiert. Typ 7 l&auml;sst sich gerne von neuen M&ouml;glichkeiten ablenken und will den Moment genie&szlig;en. Die 3 verliert die Geduld, weil die 7 aus ihrer Sicht nicht ernsthaft bei der Sache bleibt." }
        ]},
        { typ:4, name:"Der Individualist", farbe:TYPE_COLORS[4], f\u00e4lle:[
          { gegner:"Typ 1", text:"Typ 1 versucht, Gef&uuml;hle durch Vernunft und Disziplin zu kontrollieren und kritisiert die emotionale &bdquo;Z&uuml;gellosigkeit&ldquo; der 4. Typ 4 f&uuml;hlt sich dadurch in ihrer Einzigartigkeit missverstanden und als &bdquo;falsch&ldquo; zur&uuml;ckgewiesen." },
          { gegner:"Typ 8", text:"Typ 4 dr&uuml;ckt sich durch feine, verletzliche und oft melancholische Nuancen aus. Typ 8 walzt mit ihrer direkten, machtvollen und lauten Art diese feinen Schwingungen oft unabsichtlich nieder. Die 4 zieht sich verletzt ins Drama zur&uuml;ck, die 8 verliert den Respekt vor der vermeintlichen Schw&auml;che." }
        ]},
        { typ:5, name:"Der Beobachter", farbe:TYPE_COLORS[5], f\u00e4lle:[
          { gegner:"Typ 2", text:"Typ 2 fordert emotionale W&auml;rme und Interaktion, um sich sicher zu f&uuml;hlen. Typ 5 hat jedoch nur einen begrenzten Energie-Akku f&uuml;r soziale Kontakte. Fordert die 2 mehr, schaltet die 5 auf stur und zieht sich komplett zur&uuml;ck, was die Verlustangst der 2 maximiert." },
          { gegner:"Typ 6", text:"Wenn Probleme auftreten, braucht Typ 6 st&auml;ndige Kommunikation, R&uuml;ckversicherung und das gemeinsame Durchspielen von Szenarien. Typ 5 zieht sich in der Krise lieber zur&uuml;ck, um alleine nachzudenken. Dieses Schweigen der 5 triggert die existenzielle Angst der 6 vor Unsicherheit." }
        ]},
        { typ:6, name:"Der Loyale", farbe:TYPE_COLORS[6], f\u00e4lle:[
          { gegner:"Typ 5", text:"In Phasen der Unsicherheit sucht Typ 6 den Schulterschluss und den Austausch mit Verb&uuml;ndeten. Zieht sich Typ 5 nun in sein inneres Schneckenhaus zur&uuml;ck, empfindet die 6 diese Verweigerung von Information und Pr&auml;senz als akute Bedrohung oder sogar als Verrat." },
          { gegner:"Typ 9", text:"Typ 6 neigt dazu, Probleme und Gefahren proaktiv anzusprechen und zu analysieren. Typ 9 hingegen sitzt Konflikte lieber aus und blendet das Negative aus, um den inneren Frieden zu wahren. Diese Passivit&auml;t der 9 treibt die ohnehin skeptische 6 in den Wahnsinn." }
        ]},
        { typ:7, name:"Der Enthusiast", farbe:TYPE_COLORS[7], f\u00e4lle:[
          { gegner:"Typ 1", text:"Typ 7 spr&uuml;ht vor Ideen und will Optionen offenhalten. Typ 1 bremst diese Euphorie sofort mit einem n&uuml;chternen &bdquo;Das ist unvern&uuml;nftig&ldquo; oder &bdquo;Das geh&ouml;rt sich nicht&ldquo;. Die 7 f&uuml;hlt sich dadurch eingeengt und ihrer Freiheit beraubt." },
          { gegner:"Typ 3", text:"Obwohl beide Typen sehr aktiv sind, will Typ 3 messbare Erfolge sehen und ist bereit, daf&uuml;r hart zu schuften. Typ 7 verliert das Interesse, sobald eine Aufgabe zur starren Pflicht wird, und sucht den n&auml;chsten Kick. Die 3 sieht in der 7 einen unzuverl&auml;ssigen Tr&auml;umer." }
        ]},
        { typ:8, name:"Der Herausforderer", farbe:TYPE_COLORS[8], f\u00e4lle:[
          { gegner:"Typ 2", text:"Typ 8 sch&auml;tzt absolute Offenheit und St&auml;rke. Wenn Typ 2 versucht, durch Hilfsbereitschaft eine unbewusste Abh&auml;ngigkeit zu erzeugen, wittert die 8 sofort Kontrolle und reagiert mit aggressiver Abwehr." },
          { gegner:"Typ 4", text:"Typ 4 zieht sich bei Missverst&auml;ndnissen gerne in eine leidende, melancholische Haltung zur&uuml;ck. F&uuml;r die tatkr&auml;ftige und l&ouml;sungsorientierte 8 ist dieses &bdquo;Jammern&ldquo; unverst&auml;ndlich. Sie fordert Taten statt Gef&uuml;hle, was die 4 als brutale Gef&uuml;hlsk&auml;lte empfindet." }
        ]},
        { typ:9, name:"Der Friedensstifter", farbe:TYPE_COLORS[9], f\u00e4lle:[
          { gegner:"Typ 6", text:"Typ 6 bringt durch ihre st&auml;ndigen Zweifel, Sorgen und das Scannen nach Gefahren viel Unruhe in den Raum. F&uuml;r Typ 9, deren oberstes Ziel emotionale Bequemlichkeit und Harmonie ist, ist diese permanente Skepsis unertr&auml;glich. Die 9 schaltet innerlich komplett ab." },
          { gegner:"Typ 8", text:"Typ 8 sucht die direkte Konfrontation und Reibung, um Lebendigkeit und Wahrheit zu sp&uuml;ren. F&uuml;r Typ 9 ist diese offene Aggression und Lautst&auml;rke der absolute Albtraum, da sie die Harmonie zerst&ouml;rt. Die 9 reagiert mit passivem Widerstand und blockiert v&ouml;llig." }
        ]},
      ].map(t => `
        <div style="margin-bottom:1.2rem;border-left:4px solid ${t.farbe};padding:.85rem 1.1rem;background:color-mix(in srgb, ${t.farbe} 6%, var(--paper));border-radius:0 .5rem .5rem 0;">
          <strong style="color:${t.farbe};font-size:1rem;">Typ ${t.typ} &ndash; ${t.name}</strong>
          ${t.f\u00e4lle.map(f => `
          <div style="margin-top:.65rem;padding-left:.75rem;border-left:2px solid color-mix(in srgb,${t.farbe} 35%,var(--paper));">
            <span style="font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:${TYPE_COLORS[parseInt(f.gegner.replace("Typ ",""))]||t.farbe};">Problemfall ${f.gegner}</span>
            <p style="font-size:.87rem;color:var(--ink);line-height:1.65;margin:.25rem 0 0;">${f.text}</p>
          </div>`).join("")}
        </div>`).join("")}

      <div style="background:color-mix(in srgb, var(--copper) 8%, var(--paper));border:1px solid var(--line);border-radius:10px;padding:1rem 1.2rem;margin-top:1rem;font-size:.88rem;line-height:1.7;color:var(--ink);">
        <strong style="color:var(--copper);">&#128161; App-Tipp:</strong> Diese Konstellationen sind kein Urteil, dass eine Beziehung scheitern muss. Im Gegenteil: Wenn wir verstehen, dass die &bdquo;Macke&ldquo; des anderen nur sein eigener Schutzmechanismus ist, verliert der Konflikt seine Sch&auml;rfe. Die zwei schwierigsten Typen sind oft unsere gr&ouml;&szlig;ten Lehrmeister f&uuml;r pers&ouml;nliches Wachstum.
      </div>

      ${relatedLinks([
        {route:"naehe", label:"N\u00e4he & Distanz"},
        {route:"energetische-bewegungen", label:"Energetische Bewegungen"},
        {route:"gaslighting-enneagramm", label:"Gaslighting & Enneagramm"},
      ])}
    </section>
  `);
}

function tierentsprechungenPage() {
  const grid = TIERENTSPRECHUNGEN.map(t => {
    const col = typeColor(t.typ);
    const rows = Object.entries(t.tiere).map(([sub, tiere]) =>
      `<div style="margin-bottom:.35rem;">
        <span style="font-weight:800;">${sub}</span>
        <span style="margin-left:.35rem;opacity:.9;">${tiere.join(", ")}</span>
      </div>`
    ).join("");
    return `<div style="
      background:${col};color:#fff;
      border-radius:10px;padding:.9rem 1rem;
      font-size:.82rem;line-height:1.5;
    ">
      <div style="font-weight:800;font-size:1rem;margin-bottom:.6rem;letter-spacing:.04em;border-bottom:1px solid rgba(255,255,255,.25);padding-bottom:.4rem;">Typ ${t.typ}</div>
      ${rows}
    </div>`;
  }).join("");

  const byId = Object.fromEntries(werkRegister.map(b => [b.id, b]));
  const buchIds = ["enneagramm-zoo", "archetypen-der-tiere"];
  const buchCards = buchIds.map(id => {
    const b = byId[id];
    if (!b) return "";
    return `<article style="
      border:1px solid var(--line);border-radius:10px;
      padding:1rem 1.1rem;background:var(--paper);
    ">
      <h3 style="font-size:.95rem;font-weight:700;margin:0 0 .3rem;">${b.title}</h3>
      <p style="font-size:.78rem;color:var(--muted);margin:0 0 .7rem;">${b.themes.join(" \u00b7 ")}</p>
      <div style="display:flex;gap:.6rem;flex-wrap:wrap;">
        <a href="${b.link}" target="_blank" rel="noopener" style="font-size:.82rem;color:var(--copper);font-weight:600;">Im Verlag ansehen \u2192</a>
        ${b.bodUrl ? `<a href="${b.bodUrl}" target="_blank" rel="noopener" style="font-size:.82rem;color:var(--muted);">Bei BoD kaufen \u2192</a>` : ""}
      </div>
    </article>`;
  }).join("");

  return shell(`
    ${pageHeader("tierentsprechungen")}
    <div style="max-width:680px;margin:0 auto;padding:0 1rem 3rem;">
      <p class="eyebrow">Schaubilder \u00b7 Tierentsprechungen</p>
      <h1 class="section-title">Tierentsprechungen der 27 Subtypen</h1>
      <p class="psycho-intro">Jedem der 27 Subtypen sind charakteristische Tiere zugeordnet, deren Wesensart, Verhalten und \u00dcberlebensstrategien den jeweiligen Subtypus spiegeln. Das Bild zeigt die visuelle \u00dcbersicht; die Tabelle darunter listet alle Entsprechungen systematisch nach Typ und Instinkt (SE \u00b7 SO \u00b7 SX) auf.</p>
      <img
        src="./assets/tierentsprechungen-kreis.jpg"
        alt="Tierentsprechungen Enneagramm-Kreis"
        style="width:100%;border-radius:12px;margin-bottom:1.8rem;display:block;"
      />
      <h2 style="font-size:1rem;font-weight:700;margin-bottom:.9rem;color:var(--ink);">Alle 27 Subtypen im \u00dcberblick</h2>
      <div style="border:1px solid var(--line);border-radius:12px;padding:1.2rem 1.3rem;margin-bottom:1.8rem;background:var(--paper);">
        <p style="font-size:.88rem;color:var(--ink);line-height:1.7;margin:0 0 .9rem;">
          Die folgende \xdcbersicht zeigt alle 27 archetypischen Tierportr\xe4ts des Enneagramms als visuelle Verdichtung psychologischer Grundmuster. Die Tiere sind nicht als Illustration gedacht, sondern sollen auf einen Blick eine Atmosph\xe4re, eine energetische Grundhaltung und ein inneres Bewegungsmuster erfahrbar machen &ndash; weniger f\xfcr den analytischen Verstand als f\xfcr die intuitive Wahrnehmung.
        </p>
        <p style="font-size:.88rem;color:var(--ink);line-height:1.7;margin:0 0 .9rem;">
          Jedes Tier besitzt einen eigenen Ausdruck, eine eigene Spannung, einen eigenen Blick. Dabei sind die Tiere keine simplen Symbole im Sinne von \u201eTyp\xa0=\xa0Tier\u201c. Sie verk\xf6rpern bestimmte Qualit\xe4ten des jeweiligen Subtyps: Der Wolf steht f\xfcr Wachsamkeit, Bindung und strategische Aufmerksamkeit. Der Pfau symbolisiert das Bed\xfcrfnis, gesehen zu werden und \xfcber Ausstrahlung Identit\xe4t zu erzeugen. Der Oktopus verbindet Intelligenz, Anpassungsf\xe4higkeit und R\xfcckzug in eine eigene innere Welt. Kein Tier ist dabei besser oder schlechter als ein anderes &ndash; jedes verk\xf6rpert eine eigene Strategie, um in der Welt Sicherheit, Liebe, Bedeutung oder Autonomie zu finden.
        </p>
        <p style="font-size:.88rem;color:var(--ink);line-height:1.7;margin:0;">
          Die Kreisform der Portraits erinnert unbewusst an archetypische Mandalas. Dadurch entsteht weniger der Eindruck einer zoologischen Sammlung als vielmehr eine Landkarte innerer Kr\xe4fte. Gerade f\xfcr Profiler kann diese \xdcbersicht sehr hilfreich sein: Bilder umgehen viele intellektuelle Widerst\xe4nde und erzeugen sofort emotionale Erinnerung. Viele Menschen vergessen lange Definitionen, erinnern sich aber Jahre sp\xe4ter noch an \u201eden Wolf\u201c, \u201eden Pfau\u201c oder \u201edas Faultier\u201c. Das archetypische Bild speichert sich tiefer ab als reine Theorie.
        </p>
      </div>
      <img
        src="./assets/tierentsprechungen-portraits.png"
        alt="Tierportr\xe4ts aller 27 Enneagramm-Subtypen"
        style="width:100%;border-radius:12px;margin-bottom:1.8rem;display:block;"
      />
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(195px,1fr));gap:.75rem;margin-bottom:2rem;">
        ${grid}
      </div>
      <div style="border-top:1px solid var(--line);padding-top:1.4rem;margin-top:.5rem;">
        <h2 style="font-size:1rem;font-weight:700;margin-bottom:.9rem;color:var(--ink);">Vertiefung: B\u00fccher zum Thema</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:.75rem;">
          ${buchCards}
        </div>
      </div>
      ${relatedLinks([
        {route:"tierlexikon", label:"Tierlexikon der 27 Subtypen"},
        {route:"tierforscher-uebereinstimmung", label:"Tierforscher-\xdcbereinstimmung: lebende Beweise"},
        {route:"obstsorten", label:"Obstsorten"},
        {route:"gemuesesorten", label:"Gem\xfcsesorten der Typen"},
        {route:"weinsorten", label:"Weinsorten der Typen"},
        {route:"brotsorten", label:"Brotsorten der Typen"},
        {route:"kaesesorten", label:"K\xe4sesorten der Typen"},
        {route:"gewuerzarten", label:"Gew\xfcrzarten der Typen"},
        {route:"getreidearten", label:"Getreidearten der Typen"},
        {route:"kaffeearten", label:"Kaffeearten der Typen"},
        {route:"epochen-weltgeschichte", label:"Epochen der Weltgeschichte"},
        {route:"affenarten", label:"Affenarten der Typen"},
        {route:"baumarten", label:"Baumarten der Typen"},
        {route:"tee-enneagramm", label:"Tee-Enneagramm"},
        {route:"weihnachtsgeschenke", label:"Geschenke der Typen"},
      ])}
    </div>
  `);
}

function tierlexikonPage() {
  const subtypes = [
    { code: "SE1", tier: "Adler",             emoji: "\ud83e\udd85" },
    { code: "SO1", tier: "Gans",              emoji: "\ud83e\udebf" },
    { code: "SX1", tier: "Schwarze Mamba",    emoji: "\ud83d\udc0d" },
    { code: "SE2", tier: "Flusspferd",        emoji: "\ud83e\udd9b" },
    { code: "SO2", tier: "Golden Retriever",  emoji: "\ud83d\udc15" },
    { code: "SX2", tier: "Kamel",             emoji: "\ud83d\udc2a" },
    { code: "SE3", tier: "Waschb\u00e4r",          emoji: "\ud83e\udd9d" },
    { code: "SO3", tier: "Gepard",            emoji: "\ud83d\udc06" },
    { code: "SX3", tier: "Pfau",              emoji: "\ud83e\udd9a" },
    { code: "SE4", tier: "Taube",             emoji: "\ud83d\udd4a\ufe0f" },
    { code: "SO4", tier: "G\u00fcrteltier",        emoji: "\ud83e\udd94" },
    { code: "SX4", tier: "Chihuahua",         emoji: "\ud83d\udc15" },
    { code: "SE5", tier: "Eule",              emoji: "\ud83e\udd89" },
    { code: "SO5", tier: "Oktopus",           emoji: "\ud83d\udc19" },
    { code: "SX5", tier: "Igel",              emoji: "\ud83e\udd94" },
    { code: "SE6", tier: "Kaninchen",         emoji: "\ud83d\udc07" },
    { code: "SO6", tier: "Erdm\u00e4nnchen",       emoji: "\ud83e\udda6" },
    { code: "SX6", tier: "Wolf",              emoji: "\ud83d\udc3a" },
    { code: "SE7", tier: "Gorilla",           emoji: "\ud83e\udd8d" },
    { code: "SO7", tier: "Biber",             emoji: "\ud83e\uddab" },
    { code: "SX7", tier: "Schimpanse",        emoji: "\ud83d\udc12" },
    { code: "SE8", tier: "Orang-Utan",        emoji: "\ud83e\udda7" },
    { code: "SO8", tier: "L\u00f6we",              emoji: "\ud83e\udd81" },
    { code: "SX8", tier: "Krokodil",          emoji: "\ud83d\udc0a" },
    { code: "SE9", tier: "Elefant",           emoji: "\ud83d\udc18" },
    { code: "SO9", tier: "B\u00fcffel",            emoji: "\ud83d\udc03" },
    { code: "SX9", tier: "Faultier",          emoji: "\ud83e\udda5" },
  ];
  const buttons = subtypes.map(s => {
    const hasData = !!TIERLEXIKON[s.code];
    const col = typeColorFromCode(s.code);
    return `
      <button
        data-route="tierlexikon/${s.code.toLowerCase()}"
        style="
          display:flex;flex-direction:column;align-items:center;gap:.45rem;
          background:none;border:none;cursor:${hasData ? "pointer" : "default"};
          padding:.4rem;
        "
        ${hasData ? "" : "disabled"}
        title="${s.tier} (${s.code})${hasData ? "" : " - bald"}"
      >
        <div style="position:relative;width:80px;height:80px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 3px ${col};${hasData ? "" : "filter:grayscale(60%);"}">
          <img
            src="${R2_CDN}assets/${s.code.toLowerCase()}-tier.jpg"
            alt="${s.tier}"
            style="position:absolute;top:${tierAvatarTop(s.code)};left:${tierAvatarLeft(s.code)};width:140%;height:140%;object-fit:cover;"
            loading="lazy"
          />
        </div>
        <span style="font-size:.65rem;font-weight:700;color:${col};letter-spacing:.04em;${hasData ? "" : "opacity:.5;"}">${s.code}</span>
        <span style="font-size:.68rem;color:var(--muted);text-align:center;line-height:1.2;${hasData ? "" : "opacity:.5;"}">${s.tier}${hasData ? "" : "<br><span style='font-size:.6rem;'>bald</span>"}</span>
      </button>
    `;
  }).join("");

  return shell(`
    ${pageHeader("tierlexikon")}
    <div style="max-width:700px;margin:0 auto;padding:0 1rem 3rem;">
      <p class="eyebrow">Wissen &middot; Tierlexikon</p>
      <h1 class="section-title">Tierlexikon der 27 Subtypen</h1>
      <p class="psycho-intro">50 au\u00dfergew\u00f6hnliche Fakten zu jedem Subtyp-Tier &ndash; immer mit Bezug zu den Eigenschaften, Motivationen und Verhaltensweisen des jeweiligen Enneagramm-Subtyps. Echte Biologie, echter Charakter.</p>
      <div style="
        display:grid;
        grid-template-columns:repeat(auto-fill,minmax(90px,1fr));
        gap:1.2rem 0.6rem;
        margin:2rem 0;
      ">
        ${buttons}
      </div>
      ${bookTip("enneagramm-zoo", "27 Tierportr\u00e4ts \u2013 jedes Subtyp-Tier mit Charakter, Biologie und Enneagramm-Bezug.", "Enneagramm-Zoo")}
      ${bookTip("archetypen-der-tiere-im-enneagramm", "Die archetypischen Tiere der 9 Typen als innere Landkarte \u2013 Bilder, die sofort wirken.", "Archetypen der Tiere im Enneagramm")}
      ${relatedLinks([
        {route:"tierentsprechungen", label:"Schaubild: Tierentsprechungen der 27 Subtypen"},
        {route:"tierforscher-uebereinstimmung", label:"Tierforscher-\u00dcbereinstimmung: lebende Beweise"},
        {route:"lebensmusterkompass", label:"Lebensmusterkompass (Biografische Fingerabdr\u00fccke)"},
      ])}
    </div>
  `);
}

// YouTube-Dokus je Subtyp-Tier  { ytId, start (Sekunden), titel, kanal }
const TIER_DOKU = {
  SE1: { ytId: "MsgEyukOru4",  start: 0, titel: "Bedrohte Steinadler im Nationalpark",            kanal: "Terra X / ZDF" },
  SO1: { ytId: "8z6KZCUcOxg",  start: 0, titel: "Die Graugans und ihre G\u00f6ssel",                  kanal: "ARD / BR" },
  SX1: { ytId: "ScMSj29cn7E",  start: 0, titel: "Schwarze Mamba \u2013 Der Kuss des Todes",           kanal: "Tierdoku" },
  SE2: { ytId: "_doL68KopkI",  start: 0, titel: "Nilpferd \u2013 das gef\u00e4hrlichste Tier auf dem Land", kanal: "Tierdoku" },
  SO2: { ytId: "GjNqazReP1Q",  start: 0, titel: "Golden Retriever \u2013 Wie tickt diese Hunderasse?", kanal: "Rasseportrait" },
  SX2: { ytId: "C71ID5P4Afs",  start: 0, titel: "Trampeltier \u2013 das Kamel",                       kanal: "Unsere Tierwelt" },
  SE3: { ytId: "cNd62Hl3qr8",  start: 0, titel: "Der Waschb\u00e4r",                                  kanal: "Unsere Tierwelt" },
  SO3: { ytId: "I9IyQ-ZW9LE",  start: 0, titel: "So retten wir den Gepard",                      kanal: "Terra X plus" },
  SX3: { ytId: "7cKwYKir46k",  start: 0, titel: "Der Pfau",                                      kanal: "BR / Anna und die Haustiere" },
  SE4: { ytId: "1dE8MSxnaXI",  start: 0, titel: "Brieftauben vs. Stadttauben",                   kanal: "Quarks / WDR" },
  SO4: { ytId: "sRlfrOPrV7w",  start: 0, titel: "Willkommen in der G\u00fcrteltierwelt",               kanal: "ZDF / Anna und die wilden Tiere" },
  SX4: { ytId: "jCVjIfLsOSc",  start: 0, titel: "Chihuahua im Rasseportrait",                    kanal: "Hunde-Doku" },
  SE5: { ytId: "CZGvgZ3k6Dw",  start: 0, titel: "Waldkauz \u2013 Erfolgs-Eule",                       kanal: "Natur-Doku" },
  SO5: { ytId: "oF-UN5vwaTM",  start: 0, titel: "Warum hat der Oktopus acht Arme?",              kanal: "WDR Die Maus" },
  SX5: { ytId: "vP9LcVgXYTE",  start: 0, titel: "Igel \u2013 Igelrettungsstation in F\u00fcrth",              kanal: "BR" },
  SE6: { ytId: "cHAIYpFO5bA",  start: 0, titel: "Kaninchen \u2013 gesellig oder Einzelg\u00e4nger?",        kanal: "OLI's Wilde Welt / SWR" },
  SO6: { ytId: "vsWivaf9ZGY",  start: 0, titel: "Das Erdm\u00e4nnchen",                               kanal: "Unsere Tierwelt" },
  SX6: { ytId: "2tZ2kcgRD54",  start: 0, titel: "Die R\u00fcckkehr der W\u00f6lfe in Deutschland",         kanal: "DW Deutsch" },
  SE7: { ytId: "Se7jaFtVJmA",  start: 0, titel: "Im Nebelwald der Gorillas",                      kanal: "ZDF / Pia und die wilde Natur" },
  SO7: { ytId: "CHTnJwvKKU0",  start: 0, titel: "Der Biber und seine Burg",                       kanal: "ZDF / Paula und die wilden Tiere" },
  SX7: { ytId: "OYlkjjTM3Zo",  start: 0, titel: "Das Geheimnis der Schimpansen",                  kanal: "Real Wild Deutschland" },
  SE8: { ytId: "42giu2twppw",  start: 0, titel: "Orang-Utans in Indonesien",                      kanal: "Terra X / ZDF" },
  SO8: { ytId: "Eo8-bkN7zUU",  start: 0, titel: "L\u00f6we vs. Hy\u00e4ne \u2013 Kampf der Intelligenz",        kanal: "Real Wild Deutschland" },
  SX8: { ytId: "SE1ys7-dc_k",  start: 0, titel: "Krokodile \u2013 Lauernde Urzeit-J\u00e4ger",             kanal: "Tierdoku" },
  SE9: { ytId: "olwdlzz-gzs",  start: 0, titel: "Der Elefant",                                    kanal: "Unsere Tierwelt" },
  SO9: { ytId: "r46Ztn1T3sU",  start: 0, titel: "Wasserb\u00fcffel \u2013 Kraft der Stille",                kanal: "Tierdoku" },
  SX9: { ytId: "5qsH7xRe3J8",  start: 0, titel: "Sind Faultiere faul?",                           kanal: "WDR Die Maus" },
};

// Lebensmusterkompass – wiederkehrende biografische Fingerabdrücke je Subtyp,
// herausgearbeitet aus der internen Analyse sämtlicher Fallporträts dieses Kompasses
// (Berühmte Persönlichkeiten + Kriminalpsychologie). Kein externer wissenschaftlicher
// Beleg, sondern ein internes, kohärentes Beobachtungsinstrument – siehe Hinweis-Box
// auf der Übersichtsseite.
//
// lebensmusterkompassPortraitsForCode: sammelt automatisch ALLE Porträts (Berühmte
// Persönlichkeiten + Kriminalpsychologie) mit passendem Subtyp-Code aus den ohnehin
// gepflegten Arrays BERUEHMT_PORTRAITS/KRIMINAL_PORTRAITS. Dadurch aktualisiert sich
// die Beispielliste auf den Detailseiten automatisch bei jedem neuen Porträt, ohne
// manuelle Pflege einer separaten Liste.
function lebensmusterkompassPortraitsForCode(code) {
  // Zieht automatisch aus allen drei Porträt-Registern (Ber\xfchmte Pers\xf6nlichkeiten,
  // Kriminalpsychologie, Krankheitsportr\xe4ts) – jedes neue Portr\xe4t in einem der drei
  // Bereiche taucht dadurch automatisch als Beispielportr\xe4t im Lebensmusterkompass des
  // passenden Subtyps auf. Siehe CLAUDE.md ("Lebensmusterkompass – Pflichtschritt").
  const all = [...BERUEHMT_PORTRAITS, ...KRIMINAL_PORTRAITS, ...KRANKHEITS_PORTRAITS];
  return all
    .filter(p => (p.subtyp || "").toUpperCase().startsWith(code))
    .map(p => ({ name: p.name, route: p.route }));
}

const LEBENSMUSTERKOMPASS = {
  SO9: {
    tier: "Büffel",
    kernthema: "Identität durch Zugehörigkeit zu einer Gemeinschaft, nicht durch die einzelne Person (Naranjo: Teilhabe)",
    beispiele: ["Amelia Earhart", "Sandra Hüller", "Kevin Costner", "Peter Falk", "Steffi Graf", "Julian Assange", "Ronald Reagan", "Wilma Mankiller", "Willy Brandt", "Nick Leeson", "Leslie Van Houten", "Dr. Alan McElligott", "Barabbas"],
    fingerabdruecke: [
      {
        titel: "Identität durch Zugehörigkeit zu einer Sache oder Gemeinschaft, nicht durch die einzelne Person",
        beschreibung: "Naranjo nannte diesen Subtyp den der ›Teilhabe‹ (Participation): Das eigene Selbst tritt nicht als Einzelperson auf, sondern verschmilzt mit einer Gruppe, einer Idee oder einer größeren Sache – deren Denken und Fühlen wird zum eigenen.",
        beleg: "Julian Assange: ›Ein Tier, das sich nicht durch Alleingang, sondern durch das Angebundensein in eine größere Sache definiert … Er kämpft nicht für sich selbst – er kämpft für etwas, das größer ist als das eigene Überleben‹; Kevin Costner: ›Er ist Teil von etwas Größerem, und er weiß es‹; Amelia Earhart, deren ›eigentliches Projekt nie der persönliche Nervenkitzel war, sondern der Beweis, dass Frauen fliegen können wie Männer.‹; Sandra Hüller, die in Interviews auffallend selten über sich selbst als Star spricht, fast immer über das Ensemble, das Team, die Regie – und ihrem Theater in Leipzig trotz internationalem Ruhm treu blieb; Wilma Mankiller, die einen Cherokee-Ehrentitel trug, der wörtlich ›Beschützerin der Menschen‹ bedeutet, und ihr erstes großes Projekt gemeinsam mit den Bewohnern eines Ortes verlegte – nicht als Verwalterin von außen, sondern als Teil der Sache selbst; Dr. Alan McElligott, der nicht das einzelne Tier, sondern das Beziehungsgeflecht der ganzen Büffelherde erforschte – und dessen eigener Forschungsstil auf Teams und Zusammenarbeit statt auf Alleingang setzt.; Barabbas (Bibel-Porträt), der sich als junger Mann restlos in eine aufständische Menge auflöste: ›Er wollte verbunden bleiben – mit dem Volk, mit der Sache, mit der Bewegung‹, und der noch als Freigelassener nicht als Einzelner, sondern nur als das, wofür ihn die Menge gehalten hatte, wahrgenommen wurde."
      },
      {
        titel: "Ruhige, unaufgeregte Präsenz, der die Herde dennoch folgt",
        beschreibung: "Führung oder Wirkung entsteht nicht durch Befehl, Lautstärke oder Dominanz, sondern durch eine bloße, vertrauenerweckende Präsenz, der andere sich von selbst anschließen.",
        beleg: "Ronald Reagan: ›Der Büffel führt nicht durch Befehl, sondern durch Bewegung: Wenn er läuft, läuft die Herde mit‹; Peter Falk als Columbo: ›Ein Ermittler, der nie brüllt, nie droht … Der Büffel wirkt, als könnte man ihn beiseiteschieben. Man irrt sich jedes Mal‹; Steffi Graf: ›Sie macht kein Drama. Sie braucht kein Publikum, um zu wissen, dass sie da ist … Der Büffel beweist nichts. Er ist einfach da – und er gewinnt.‹"
      },
      {
        titel: "Geduldiges Tragen der Last, bis ein Punkt erreicht ist, an dem etwas durchbricht",
        beschreibung: "Belastungen werden lange schweigend getragen, ohne Klage und ohne sichtbare Warnzeichen – bis entweder ein stiller, symbolisch kraftvoller Moment oder ein plötzlicher Zusammenbruch die aufgestaute Spannung entlädt.",
        beleg: "Willy Brandts Kniefall von Warschau: ›Kein Wort. Keine Geste des Überlegens … Es war ein Büffel, der sich vor dem beugte, was war – und damit ein ganzes Volk repräsentierte‹; Nick Leeson, der ›die Last der verborgenen Verluste schweigend trug – jahrelang … Er brach erst dann zusammen, als die Last physisch untragbar geworden war‹; Peter Falk, dessen beginnende Alzheimer-Erkrankung lange nach außen kaum sichtbar war, bevor sie 2008 in eine gerichtliche Vormundschaft und einen öffentlichen Streit um seine Pflege mündete – auch hier ein stiller, geduldiger Umgang mit fortschreitendem Verlust, bis ein äußerer Bruch unausweichlich wurde; Julian Assange, der über sieben Jahre nahezu vollständiger Isolation in der ecuadorianischen Botschaft hinweg dokumentierte körperliche und psychische Warnzeichen ertrug, ohne sein Prinzip aufzugeben, bis Ärzte öffentlich vor einem lebensgefährlichen Zustand warnten."
      },
      {
        titel: "Wenn die vollständige Verschmelzung mit der Gemeinschaft in eine zerstörerische Richtung geht (Schattenform)",
        beschreibung: "In der destruktiven Ausprägung überträgt sich dasselbe Bedürfnis nach vollständiger Zugehörigkeit auf eine schädliche oder gewaltbereite Gemeinschaft – das eigene Urteil wird dabei fast vollständig durch das der Gruppe ersetzt.",
        beleg: "Leslie Van Houten, die nach der Scheidung ihrer Eltern ›ohne sozialen Halt‹ zurückblieb und in der Manson Family ›nicht einen Menschen, sondern eine Gemeinschaft‹ fand: ›Wenn er sich in eine Richtung bewegt, macht er es vollständig‹; Nick Leeson, dessen Wunsch dazuzugehören ihn dazu brachte, Verluste zu verschweigen, bis er die älteste Handelsbank Englands mit in den Kollaps riss. Wichtig: Diese beiden Fälle sind seltene, extreme Ausnahmen unter den SO9-Porträts dieses Kompasses, keine typische Ausprägung."
      }
    ]
  },
  SE9: {
    tier: "Elefant",
    kernthema: "Ruhige, gewichtige Präsenz statt Lautstärke – wer einmal in Bewegung ist, ist nicht mehr aufzuhalten (Naranjo: Appetit)",
    beispiele: ["James Levine", "Bärbel Bas", "Ludwig Erhard", "Laotse (Laozi)", "Angela Merkel", "Carmen Goglin", "Gina Rinehart", "Thomas von Aquin", "David Hume", "Hans-Dietrich Genscher", "Abida Parveen", "Johannes Brahms", "Alfons Schuhbeck", "Dr. Cynthia Moss", "Dietmar Bär", "Jakobus, der Sohn des Alphäus"],
    fingerabdruecke: [
      {
        titel: "Ruhige, gewichtige Präsenz statt Lautstärke",
        beschreibung: "Wirkung entsteht nicht durch Reden oder Auftreten, sondern durch bloße, gewichtige Anwesenheit – der Raum verändert sich, ohne dass ein Wort nötig wäre.",
        beleg: "James Levine: ›Er braucht keine Aktion, um zu wirken. Es genügt, dass er da ist‹; Angela Merkel: ›Eine Präsenz, die nicht durch Lautstärke entsteht, sondern durch Gewicht … Sie sprach selten laut. Sie machte keine großen Gesten‹; Thomas von Aquin, genannt ›der stumme Ochse‹, über den sein Lehrer sagte: ›Sein Gebrüll in der Lehre wird eines Tages die ganze Welt erfüllen.‹; Bärbel Bas, die als Bundestagspräsidentin nicht mit großen Gesten auffällt, sondern durch Verlässlichkeit und beharrliches Bemühen um Ordnung wirkt; David Hume, der die Grundfesten der Welt infrage stellte und dabei erstaunlich unaufgeregt blieb – ›le bon David‹ selbst in Kreisen, die seine Ideen für gefährlich hielten; Johannes Brahms, dessen letzter öffentlicher Auftritt bei einer Aufführung seiner 4. Sinfonie im März 1897 – sichtbar todkrank, kaum noch in der Lage, die Treppen zu seiner Loge zu steigen – ohne ein Wort ein ganzes Publikum zu Tränen rührte; Dr. Cynthia Moss, die über fünfzig Jahre dieselben Elefantenfamilien begleitete, ohne je durch spektakuläre Einzelaktionen aufzufallen – Wirkung durch stille, geduldige Kontinuität statt durch Auftritt.; Jakobus, der Sohn des Alphäus (Bibel-Porträt), der unter den Zwölf kaum auffiel und dessen Treue sich nie in Worten zeigte: ›Er hatte gelernt, dass auch in der Passivität Kraft liegt – wenn sie nicht Flucht ist, sondern Warten auf das Richtige.‹"
      },
      {
        titel: "Einmal in Bewegung, ist nichts mehr aufzuhalten",
        beschreibung: "Fortschritt geschieht nicht eilig, sondern in einem eigenen, unbeirrbaren Tempo – sobald eine Richtung eingeschlagen ist, hält kaum ein Hindernis diese Bewegung noch auf.",
        beleg: "Ludwig Erhard: ›Wenn er einmal in Bewegung ist, hält ihn kaum etwas auf‹ – ›ein Mann, der beharrlich an einer Idee festhielt, bis sie Wirklichkeit wurde‹; Gina Rinehart: ›Der Elefant bewegt sich langsam. Aber er bewegt sich in eine Richtung, und diese Richtung ändert sich nicht mehr‹; Angela Merkel: ›Aussitzen als Methode.‹; Laotse, der der Überlieferung nach am Ende seines Lebens einfach gen Westen ritt und in der Wüste verschwand – kein Kampf um Reform, sondern der stille, endgültige Abschied von einer Welt, die er nicht mehr mittragen wollte; Hans-Dietrich Genscher, dessen 23 Jahre im Auswärtigen Amt keine Karriere der großen Brüche waren, sondern eine der geduldigen Akkumulation, Jahr für Jahr, Schritt für Schritt."
      },
      {
        titel: "Appetit und Genuss als Ausdruck von Lebensfreude, die die innere Leere dämpft",
        beschreibung: "Naranjo nannte diesen Subtyp den des ›Appetits‹: Körperlicher Genuss, Gewohnheit und Komfort dienen dazu, eine tiefer liegende innere Leere zu dämpfen – nicht als Schwäche, sondern als tief verwurzeltes Lebensprinzip.",
        beleg: "Alfons Schuhbeck: ›Der selbsterhaltende Subtyp der Neun nennt sich »Appetit«: Die innere Leere, die jede Neun mit sich trägt, wird durch körperlichen Genuss, Essen, Gewohnheit und Komfort gedämpft‹; Johannes Brahms, der ›genügsam blieb, auch als sein Ruhm ihn längst zu einem der reichsten Komponisten Europas gemacht hatte‹; Abida Parveen: ›Appetit auf Verschmelzung‹, deren ruhiger, eileloser Gesang ganze Konzertsäle in Trance versetzt; Carmen Goglin, die aus Lachyoga einen Beruf machte und anderen genau das vermittelt, was die SE9 für sich selbst sucht – Körperentspannung, Leichtigkeit, das Gefühl, dass gerade nichts dringend ist; Dietmar Bär, der in Interviews auffällig oft und mit sichtlichem Vergnügen übers Kochen und Essen spricht und Köln als seinen unverrückbaren Lebensmittelpunkt beschreibt – Sicherheit durch den eigenen, unmittelbaren Komfort statt durch Bühne oder Auftritt."
      },
      {
        titel: "Wenn der stille Appetit zur stillen Selbstbedienung ohne Schuldgefühl wird (Schattenform)",
        beschreibung: "In der destruktiven Ausprägung wird derselbe Appetit, der sonst Komfort und Genuss sucht, zur beharrlichen, kaum bemerkten Regelumgehung – begleitet vom stillen Gefühl, ein wohlverdientes Recht wahrzunehmen.",
        beleg: "Alfons Schuhbeck, der ›still und beharrlich das Gesetz umging – ohne inneren Aufruhr, ohne Schuldgefühl, fast ohne es selbst wirklich zu bemerken‹, und über Jahre Kassenaufzeichnungen manipulierte: ›Ich arbeite so hart, ich leiste so viel – das, was ich mir nehme, ist mein gutes Recht.‹ Wichtig: Dies ist der einzige bekannte Fall dieser Art unter den SE9-Porträts dieses Kompasses, keine typische Ausprägung."
      },
      {
        titel: "Jahrelange stille Passivität, entladen in einem einzigen, plötzlichen Gewaltausbruch (Schattenform, Achterflügel)",
        beschreibung: "In einer zweiten, deutlich selteneren destruktiven Ausprägung staut sich Wut über Jahre unbemerkt im Hintergrund auf, statt sich in Konflikt oder Rede zu entladen – bis der Achterflügel sie in einem einzigen, plötzlichen und roh-körperlichen Ausbruch freisetzt, dem sogenannten ›Vulkan-Effekt‹.",
        beleg: "John Hinckley Jr., der jahrelang isoliert in Motelzimmern lebte, ohne dass sein Umfeld je eine Gefahr in ihm vermutete – bis er 1981 binnen drei Sekunden sechs Schüsse auf US-Präsident Reagan abfeuerte, um die Schauspielerin Jodie Foster zu beeindrucken, und danach sofort wieder in seine gewohnte Passivität zurücksank. Wichtig: Dies ist der einzige bekannte Fall dieser Art unter den SE9-Porträts dieses Kompasses, keine typische Ausprägung."
      }
    ]
  },
  SX8: {
    tier: "Krokodil",
    kernthema: "Geduldiges Warten, dann vollständiger, blitzschneller Zugriff (Naranjo: Besitz/Besitzergreifung)",
    beispiele: ["Adele Neuhauser", "Pablo Picasso", "Prof. Grahame Webb", "Donald J. Trump", "Diogenes von Sinope", "Giacomo Puccini", "Gerhard Schröder", "Ruth Bader Ginsburg", "Genesis P-Orridge", "Eli Jaxon-Bear", "John McAfee", "Jeffrey Epstein", "John Wayne", "Saulus auf dem Weg nach Damaskus", "Paul Gauguin"],
    fingerabdruecke: [
      {
        titel: "Geduldiges Warten, dann vollständiger, blitzschneller Zugriff",
        beschreibung: "Naranjo nannte diesen Subtyp den der ›Besitzergreifung‹: Kraft zeigt sich nicht in ständiger Aktivität, sondern in fast reglosem Warten, gefolgt von einem einzigen, vollständigen und unwiderruflichen Zupacken im richtigen Moment.",
        beleg: "Adele Neuhauser: ›Das Krokodil ist still, bis es handelt … Keine Warnung. Keine verschwendete Energie. Nur der Zugriff, der sitzt‹; Ruth Bader Ginsburg: ›Geduldig im Warten, präzise im Zugriff, unbeeindruckt von Gegenwehr‹ – ›Das Krokodil braucht kein Imponiergehabe. Sein Zugriff reicht‹; Genesis P-Orridge: ›Wenn es zuschnappt, gibt es kein Zurück mehr.‹"
      },
      {
        titel: "Radikale, ungeschützte Öffentlichkeit statt Rückzug",
        beschreibung: "Statt sich zu verbergen, wird das eigene Leben oder die eigene Überzeugung demonstrativ öffentlich gelebt – ohne Rücksicht auf gesellschaftliche Erwartungen oder Etikette, und gerade dadurch schwer zu ignorieren.",
        beleg: "Diogenes von Sinope, der ›ohne Haus, ohne Besitz, ohne Scham‹ auf dem Marktplatz von Athen lebte: ›Das Krokodil verbirgt sich nicht – es liegt sichtbar am Ufer, und wer vorbeikommt, muss sich mit ihm auseinandersetzen‹; Donald Trump: ›Er dominiert Räume, zieht Kameras an, ist nie neutral‹; Giacomo Puccini, der ›keine Rücksicht auf Etikette‹ nahm und ›trotzdem die volle Aufmerksamkeit jedes Raums‹ auf sich zog; John Wayne, dessen bloße körperliche Präsenz auf der Leinwand jede Szene überragte – nie halbherzig, nie im Hintergrund – und der auch seinen Krebs 1964 öffentlich als ›The Big C‹ benannte, statt ihn zu verbergen."
      },
      {
        titel: "Unermüdlicher, über ein ganzes Leben nie erlöschender Antrieb",
        beschreibung: "Der eigene Hunger nach Ausdruck, Erfahrung oder Wirkung lässt über Jahrzehnte nicht nach – ohne Rückzug, ohne Schaffenspause, ohne dass die Intensität mit dem Alter spürbar abnimmt.",
        beleg: "Pablo Picasso, der 91 Jahre lang ›unermüdlich, unersättlich, unbeirrbar von jeder Erwartung, die nicht seine eigene war‹ arbeitete und über 20.000 Werke hinterließ: ›Das Krokodil frisst, solange es Hunger hat. Und Picassos Hunger … erlosch nie‹; Gerhard Schröder, dessen ›ganze Instinktausrichtung‹ bereits als Jusochef am Kanzleramtszaun sichtbar wurde: ›Ich will da rein.‹; Prof. Grahame Webb, der vor der Spezialisierung auf Krokodile bereits an Kängurus, Haien, Meeresschildkröten, Affen, Thunfischen und Walen forschte und danach zusätzlich Forschungsstation, Krokodilfarm, Schule und Roman aufbaute – nie ein einziges Revier, immer ein wachsendes Imperium.; Saulus auf dem Weg nach Damaskus (Bibel-Porträt), dessen Eifer gegen die Nazarener sich nach der Bekehrung nicht abschwächte, sondern mit derselben Wucht auf ein neues Ziel richtete: ›Er war wie ein Brand in einer trockenen Landschaft: schnell, unaufhaltsam … alles verzehrend‹ – der Antrieb selbst blieb, nur seine Richtung kehrte sich um; Paul Gauguin, der Börse, Familie, Bretagne, Panama, Martinique und Arles nacheinander verließ, sobald der Reiz erloschen war, bis in die Marquesas, wo er noch todkrank und im offenen Konflikt mit der Kolonialverwaltung ein eigenes Satireblatt gegen die Behörden veröffentlichte – derselbe Appetit auf das nächste Territorium, ungebremst bis zum letzten Atemzug."
      },
      {
        titel: "Wenn Besitzergreifung sich in ein Netzwerk der Kontrolle über Menschen verwandelt (Schattenform)",
        beschreibung: "In der destruktiven Ausprägung wird dieselbe Fähigkeit zur vollständigen Besitzergreifung nicht auf Ideen oder Werke gerichtet, sondern auf Menschen – durch ein System aus Abhängigkeit, Verführung und stiller Einbindung, das Macht über andere sichert.",
        beleg: "Jeffrey Epstein, dessen ›System nicht auf offenem Zwang, sondern auf Verführung, Einbindung und dem stillen Bewusstsein basierte: Wer einmal Teil dieses Netzwerks ist‹, blieb gebunden; John McAfee, der auf seinem Anwesen in Belize ›umgeben von bewaffneten Leibwächtern‹ lebte, das er ›sein Königreich‹ nannte. Wichtig: Diese beiden Fälle sind seltene, extreme Ausnahmen unter den SX8-Porträts dieses Kompasses, keine typische Ausprägung – bemerkenswert zeigt umgekehrt Eli Jaxon-Bear, wie sich dasselbe Besitzergreifungs-Muster auch vollständig loslassen lässt."
      }
    ]
  },
  SO8: {
    tier: "Löwe",
    kernthema: "Kraft, die nicht für sich selbst, sondern für das Rudel eingesetzt wird (Naranjo: Freundschaft und Bruderschaft)",
    beispiele: ["Sokrates", "Fritz Perls", "Michelle Obama", "Carsten Stahl", "Cynthia Lummis", "Bud Spencer", "Karl Marx", "Jamaica Kincaid", "Mohammed ibn Abdullah", "Helmut Kohl", "John Gotti", "Dr. Laurence Frank", "Natascha Ochsenknecht", "Der Hohepriester Kaiphas"],
    fingerabdruecke: [
      {
        titel: "Kraft, die nicht für sich selbst, sondern für das Rudel eingesetzt wird",
        beschreibung: "Naranjo beschrieb diesen Subtyp als den Typus der ›Freundschaft und Bruderschaft‹: Stärke dient nicht der persönlichen Selbstbehauptung, sondern dem Schutz und Zusammenhalt einer Gemeinschaft, für die man sich verantwortlich fühlt.",
        beleg: "Michelle Obama: ›Stärke ist hier kein Selbstzweck – sie ist im Dienst des Wir. Der Löwe schützt sein Rudel. Michelle Obama schützt ihr Volk‹; Carsten Stahl: ›Seine Kraft ist nicht für sich selbst – sie ist für die, die neben ihm stehen. Wenn Schwache bedroht werden, steht der Löwe auf‹; Karl Marx: ›Er kämpfte nicht für sich. Er kämpfte für ein Rudel, das er nie persönlich kannte: die Arbeiterklasse der ganzen Welt.‹; Cynthia Lummis, die seit Jahrzehnten für einen der bevölkerungsärmsten und in Washington oft übersehenen US-Bundesstaaten kämpft – konkret für Rancher, Bergarbeiter und Wähler, die sie kennt, statt für ferne ideologische Debatten; Mohammed ibn Abdullah, der als Waise aufwuchs und sich zeitlebens für die Rechtlosesten seiner Gesellschaft einsetzte – Waisen, Witwen, Sklaven; Dr. Laurence Frank, der sein Leben nicht nur den Löwen, sondern zugleich den Massai widmete, die mit ihnen leben mussten – Stärke im Dienst zweier Gemeinschaften zugleich; Natascha Ochsenknecht, die auch nach der Scheidung von Uwe Ochsenknecht und trotz offener Konflikte innerhalb der Familie das verbindende Zentrum blieb – zuletzt sichtbar in der gemeinsamen Reality-Doku mit ihren erwachsenen Kindern; der Hohepriester Kaiphas, der als Wächter eines ganzen Volkes handelte, nicht aus persönlicher Machtgier: ›Es ist besser, dass ein Mensch stirbt, als dass das ganze Volk zugrunde geht‹ – ein Satz, in dem nicht der Zorn sprach, sondern die Verantwortung."
      },
      {
        titel: "Bloße Präsenz genügt – kein ständiges Brüllen nötig",
        beschreibung: "Autorität und Wirkung entstehen nicht durch permanente Demonstration von Macht, sondern durch eine körperliche und mentale Präsenz, die man spürt, sobald sie einen Raum betritt.",
        beleg: "Bud Spencer: ›Der Löwe muss nicht brüllen, um zu wirken. Seine Präsenz allein ist genug … Wenn das Rudel in Gefahr ist, steht er auf. Bis dahin ist er einfach da‹; Helmut Kohl: ›Er brüllt nicht ständig; seine Macht liegt in der schieren physischen und mentalen Präsenz, die andere spüren, sobald er den Raum betritt.‹ – dieselbe Präsenz, die nach seinem schweren Sturz 2008 körperlich fast vollständig verstummte, während die Kontrolle über sein unmittelbares Umfeld bis zuletzt erhalten blieb, nur eben aus dem Hintergrund organisiert."
      },
      {
        titel: "Präzises, gewähltes Eingreifen statt wahlloser Konfrontation",
        beschreibung: "Kraft wird nicht wahllos eingesetzt, sondern erst nach genauer Beobachtung, im richtigen Moment und mit klarer Zielrichtung – ohne unnötige Energie zu verschwenden.",
        beleg: "Jamaica Kincaid: ›Der Löwe kämpft nicht wahllos. Er wartet, beobachtet, wählt den Moment. Und wenn er angreift, dann mit einer Präzision, die keine Energie verschwendet‹; Sokrates, der ›barfuß im Winter unterwegs, gleichgültig gegenüber Komfort, unbestechlich in seinen Überzeugungen‹ blieb: ›Der Löwe zieht sich nicht zurück, wenn es unbequem wird – er hält stand.‹; Fritz Perls, der Teilnehmer seiner Workshops gezielt auf den ›Hot Seat‹ setzte und einzeln, direkt und schonungslos mit ihrer eigenen Abwehr konfrontierte – kein wahlloses Angreifen, sondern präzises Eingreifen genau dort, wo es wirkte, und der mit demselben ungebremsten Tempo noch kurz vor seinem Tod ein neues Gemeinschaftsprojekt gründete, statt sein bekanntes Herzleiden zum Anlass zu nehmen, kürzerzutreten."
      },
      {
        titel: "Wenn Rudel-Loyalität zur öffentlich zur Schau gestellten kriminellen Bruderschaft wird (Schattenform)",
        beschreibung: "In der destruktiven Ausprägung wird derselbe Beschützerinstinkt und dieselbe Rudel-Loyalität zur Grundlage einer kriminellen Organisation – Macht wird dabei nicht verborgen, sondern demonstrativ zur Schau gestellt.",
        beleg: "John Gotti, der den Gambino-Clan ›nicht aus dem Verborgenen, sondern im Rampenlicht‹ regierte: ›Er trug Brioni-Anzüge für Tausende von Dollar. Er winkte Kameras zu … Er war ihr König – und er wusste es.‹ Wichtig: Dies ist der einzige bekannte Fall dieser Art unter den SO8-Porträts dieses Kompasses, keine typische Ausprägung."
      }
    ]
  },
  SE8: {
    tier: "Orang-Utan",
    kernthema: "Solitäres, stilles Territorium ohne Publikumsbedürfnis (Naranjo: Satisfaktion)",
    beispiele: ["Dr. Umberto Eco", "Jacqueline Mars", "Indra Nooyi", "Toni Morrison", "Dhapanbal Yunupingu", "Golda Meir", "Dr. Biruté Galdikas", "Winston Churchill", "Griselda Blanco", "Salvatore Riina", "Der Hauptmann unter dem Kreuz"],
    fingerabdruecke: [
      {
        titel: "Solitäres, stilles Territorium ohne Bedürfnis nach Publikum oder Bestätigung",
        beschreibung: "Naranjo nannte diesen Subtyp den der ›Satisfaktion‹: Sicherheit entsteht durch persönliche, materielle oder positionelle Absicherung – nicht durch soziale Anerkennung. Macht muss sich niemandem beweisen, sie ist einfach vorhanden.",
        beleg: "Jacqueline Mars: ›Der Orang-Utan ist der solitärste der Menschenaffen: Er braucht kein Rudel, keine Bühne, keine Bestätigung … Öffentliche Interviews gibt sie seit Jahrzehnten so gut wie keine‹; Toni Morrison: ›Er lebt auf seine eigene Weise, in seinem eigenen Rhythmus, mit einer Würde, die nicht erklärt werden muss‹; Golda Meir: ›Eine stille Macht, die sich nicht beweisen muss.‹; Dhapanbal Yunupingu, die ein prägendes künstlerisches Erbe nicht lautstark verteidigt, sondern still beansprucht – und am Ort bleibt, an dem es entstand, statt es woanders zu vermarkten."
      },
      {
        titel: "Geduldiger, systematischer Aufbau des eigenen Territoriums über Jahrzehnte",
        beschreibung: "Position oder Einfluss entstehen nicht durch einen einzelnen spektakulären Schritt, sondern durch beharrlichen, oft unauffälligen Aufbau, Ebene um Ebene, über einen sehr langen Zeitraum.",
        beleg: "Indra Nooyi, die mit ›wenig mehr als 500 Dollar in der Tasche‹ in die USA kam und 28 Jahre später einen der größten Lebensmittelkonzerne der Welt führte: ›Das systematische, geduldige Errichten eines Territoriums, Ebene um Ebene, bis niemand mehr daran zweifelte, wer oben sitzt‹; Dr. Biruté Galdikas, deren jahrzehntelange Feldforschung sie zur weltweit führenden Orang-Utan-Expertin machte – dasselbe Prinzip in der eigenen Forschungsarbeit gespiegelt; Dr. Umberto Eco, der über 30.000 Bücher als Denkinstrument ansammelte – kein Einzelschritt, sondern ein über Jahrzehnte gewachsenes, persönliches Wissensterritorium."
      },
      {
        titel: "Unerschütterliche Standfestigkeit unter extremem Druck",
        beschreibung: "Wenn die Lage am schwierigsten wird, zeigt sich eine körperliche und psychische Unbeweglichkeit, die selbst unter größtem äußeren Druck nicht weicht – nicht durch lauten Widerstand, sondern durch bloßes, unerschütterliches Bleiben.",
        beleg: "Winston Churchill, der 1940 ›auf dem Ast blieb, während der Sturm tobte‹: ›Sein Körper ist gebaut, um zu bleiben – nicht um zu fliehen‹ – und der einen schweren Schlaganfall 1953 wochenlang vor der Öffentlichkeit verbarg, statt sein Amt aufzugeben; Golda Meir: ›Das ist nicht die Geschichte einer Karriere. Es ist die Geschichte eines Überlebens – und eines Willens, der nicht zu brechen war‹ – ein Wille, der sie auch eine siebzehn Jahre lang verschwiegene Krebserkrankung durch ihre gesamte Amtszeit als Premierministerin tragen ließ; Salvatore Riina, dessen Verteidigung noch nach seinem Schlaganfall 2017 im komaähnlichen Zustand um seine Freilassung kämpfte, während die Gerichte seine fortbestehende Gefährlichkeit selbst im Sterben bestätigten; der Hauptmann unter dem Kreuz, der bei der Kreuzigung nichts sagte, nicht beim Spott, nicht beim letzten Aufschrei, ›jede Faser auf Empfang, aber äußerlich sehr ruhig‹ – bis ein einziger Satz, leise gesprochen, alles trug: ›Wahrlich, dieser Mensch war Gottes Sohn.‹"
      },
      {
        titel: "Wenn dieselbe stille Territorialkontrolle rücksichtslos und tödlich wird (Schattenform)",
        beschreibung: "In der destruktiven Ausprägung wird die charakteristische stille, unauffällige Machtabsicherung nicht zum legitimen Aufbau, sondern zu kompromissloser, oft tödlicher Kontrolle über ein kriminelles Territorium – aus dem Verborgenen heraus geführt, ohne öffentliches Gesicht.",
        beleg: "Griselda Blanco: ›Sie regierte das Kokaingeschäft in Miami nicht durch Charisma oder politischen Einfluss, sondern durch stille, kompromisslose Kontrolle … Und wer ihr in die Quere kam, verschwand‹; Salvatore Riina, der 23 Jahre lang unentdeckt untertauchte, während er als Mafia-Boss hunderte Morde verantwortete. Wichtig: Diese beiden Fälle sind seltene, extreme Ausnahmen unter den SE8-Porträts dieses Kompasses, keine typische Ausprägung."
      }
    ]
  },
  SX7: {
    tier: "Schimpanse",
    kernthema: "Vollständige Verschmelzung mit einer Idee, Person oder einem Moment (Naranjo: Suggestibilität)",
    beispiele: ["Caroline Peters", "Thomas Gottschalk", "Miley Cyrus", "Morgan Freeman", "Leonard Bernstein", "Ina Müller", "Robert Schumann", "Franz Liszt", "Shakira", "Boris Becker", "Gudrun Ensslin", "Sean 'P. Diddy' Combs", "Aileen Wuornos", "Clyde Barrow", "Victor Lustig", "Ronnie Biggs", "Prof. Dr. Frans de Waal", "Prof. Dr. Christophe Boesch", "Dr. Jill Pruetz", "Johannes, der geliebte Jünger"],
    fingerabdruecke: [
      {
        titel: "Vollständige Verschmelzung mit einer Idee, Person oder einem Moment",
        beschreibung: "Naranjo nannte diesen Subtyp den der ›Suggestibilität‹: Statt Begeisterung zu streuen, bündelt sich die gesamte Intensität auf einen einzigen Punkt – eine Überzeugung, einen Menschen, eine Sache –, mit einer Kraft, die keine halben Bindungen kennt.",
        beleg: "Gudrun Ensslin: ›Sie verschmilzt vollständig mit einer Idee, einem Menschen, einer Vision – und wird von dieser Verschmelzung buchstäblich fortgerissen … Wenn die neue Überzeugung da ist, wird das alte Leben vollständig abgeworfen‹; Victor Lustig: ›Eine Fähigkeit, sich vollständig in eine Idee, eine Person, einen Moment hineinzuversetzen – und dabei so überzeugend zu wirken, dass die eigene Begeisterung ansteckend wird‹; Clyde Barrow, dessen ›gesamtes Leben von ständiger Bewegung, immer neuen Fluchtwegen‹ geprägt war; Prof. Dr. Frans de Waal, der den direkten, persönlichen intellektuellen Austausch mit Einzelnen suchte statt sich in institutionellen Netzwerken zu verlieren, und dessen Spätwerk sich fast ausschließlich der einen Frage nach Empathie und Bindung widmete; Prof. Dr. Christophe Boesch, der fünf Jahre mit seiner jungen Familie im unerschlossenen Regenwald lebte, um eine einzige wilde Schimpansengruppe zu erforschen – keine halben Sachen, sondern volle, riskante Hingabe; Dr. Jill Pruetz, die bewusst eines der unwirtlichsten Terrains der Primatenforschung wählte und jeden einzelnen Schimpansen ihrer Gruppe beim Namen kennt – eine tief individuelle, hoch persönliche Verbindung statt distanzierter Beobachtung; Johannes, der geliebte Jünger, der beim letzten Abendmahl an Jesu Brust lag, nicht aus Bedürftigkeit, sondern weil seine Seele wissen wollte, was nicht gesagt werden konnte – und dessen ganzes Evangelium später aus dieser einen Verschmelzung heraus geschrieben wurde: ›Wir haben seine Herrlichkeit gesehen.‹"
      },
      {
        titel: "Ansteckende Intensität, die eine ganze Gruppe oder einen ganzen Raum mitreißt",
        beschreibung: "Die eigene Begeisterung bleibt nicht privat, sondern überträgt sich unmittelbar auf das Umfeld – ein Publikum, ein Orchester, ein Saal wird Teil des eigenen intensiven Moments.",
        beleg: "Franz Liszt, dessen Konzerte die ›Lisztomania‹ auslösten – ohnmächtige Zuhörerinnen, zerrissene Klaviersaiten: ›Der Schimpanse spielt nicht für sich – er reißt begeistert den ganzen Saal mit sich‹ – und der noch mit Herzschwäche und Fieber gegen ärztlichen Rat zu einer Aufführung nach Bayreuth reiste, wo er wenig später starb; Leonard Bernstein, der ›das Orchester mit einer Ekstase mitriss, die man auf Aufnahmen auch heute noch förmlich spüren kann‹ – und der genau diese körperliche Intensität bis zu seinem letzten Konzert 1990 nicht drosseln konnte, selbst gegen ausdrücklichen ärztlichen Rat; Shakira: ›Wenn er sich bewegt, bewegt sich alles um ihn herum mit.‹; Thomas Gottschalk, der 23 Jahre lang ein Millionenpublikum nicht durch ein Format, sondern durch reine Präsenz fesselte – ›hier ist jemand, dem das gerade wirklich Spaß macht, das Publikum spürt das‹; Ina Müller, deren Format ganz ohne Distanz auskommt – ›eine Bar, ein Klavier, ein Gast … der Schimpanse sitzt nicht gegenüber, er sitzt daneben‹; Boris Becker, der ein Jahrzehnt lang Menschen als Spieler und als Persönlichkeit in seine Intensität hineinzog – ›sie bringt die Bühne mit.‹"
      },
      {
        titel: "Ständige, offen sichtbare Verwandlung ohne Scham",
        beschreibung: "Persönliche Entwicklung geschieht nicht im Verborgenen, sondern öffentlich und unmittelbar – Häutungen, Rollenwechsel oder gegensätzliche innere Anteile werden nicht versteckt, sondern offen ausgelebt.",
        beleg: "Miley Cyrus, ›vom Disney-Kinderstar zur eigenständigen Künstlerin … jede dieser Häutungen war laut, sichtbar – und ehrlich‹; Robert Schumann, der seine Persönlichkeit bewusst in die Figuren Florestan und Eusebius aufspaltete: ›Als wüsste er selbst, dass in ihm mehr als eine Stimme sprach‹; Caroline Peters: ›Der Schimpanse, der sich in jeden verwandeln kann – und dabei nie vergisst, wer er selbst ist.‹; Morgan Freeman, der vom weisen Gefängnisinsassen über Gott persönlich bis zu Nelson Mandela eine kaum zu überblickende Rollenbreite auslebte, ohne sich je auf ein einziges Genre festzulegen."
      },
      {
        titel: "Wenn die totale Verschmelzung sich auf eine zerstörerische Idee oder Person richtet (Schattenform)",
        beschreibung: "Dieselbe vollständige, kompromisslose Hingabefähigkeit kann sich in der destruktiven Ausprägung auf eine gewaltsame Ideologie, eine schädliche Beziehung oder ein betrügerisches System richten – mit derselben Totalität wie im positiven Fall.",
        beleg: "Aileen Wuornos, für die eine Beziehung ›das einzige Fundament ihres Lebens‹ darstellte, bevor sie zur Serienmörderin wurde; Sean ›P. Diddy‹ Combs, dessen jahrzehntelange öffentliche Inszenierung eine systematische Ausbeutung verdeckte; Ronnie Biggs, der sich einem einzigen spektakulären Coup verschrieb, der sein gesamtes weiteres Leben bestimmte. Wichtig: Diese Fälle sind seltene, extreme Ausnahmen unter den SX7-Porträts dieses Kompasses, keine typische Ausprägung."
      }
    ]
  },
  SO7: {
    tier: "Biber",
    kernthema: "Rastloses Bauen im Dienst der Gemeinschaft – nie wirklich fertig (Naranjo: Kontratyp der Sieben)",
    beispiele: ["Rowan Atkinson", "Elon Musk", "Jules Verne", "Jeanne-Marie Bouvier de la Motte Guyon", "Dieter Nuhr", "Hazel Brugger", "Drew Barrymore", "Chris Watts", "Frank Abagnale Jr.", "Prof. Dr. Frank Rosell", "Prof. Dr. Dietland Müller-Schwarze", "Johann Wolfgang von Goethe", "Alexander Bommes", "Molière", "Die Samariterin am Jakobsbrunnen"],
    fingerabdruecke: [
      {
        titel: "Rastloses, nie abgeschlossenes Bauen im Dienst eines größeren Systems",
        beschreibung: "Statt für sich selbst zu genießen, wird kontinuierlich etwas errichtet, das über die eigene Person hinaus wirkt – kaum ist ein Projekt fertig, beginnt bereits das nächste, ohne wirkliche Pause.",
        beleg: "Elon Musk: ›Der Biber macht keine halben Sachen. Er baut und baut – und sucht sich das nächste Hindernis, das es zu stauen gilt‹; Hazel Brugger: ›Der Biber hat immer ein neues Projekt‹; Drew Barrymore: ›Fällt ein Damm ein, beginnt der Biber sofort von Neuem, ohne lange innezuhalten‹; Prof. Dr. Frank Rosell, der über 130 Fachpublikationen verfasste und sein Wissen sogar über Biber hinaus auf den Geruchssinn von Hunden ausweitete – der Biber baut nicht nur an einem Damm."
      },
      {
        titel: "Vollständige innere Planung, bevor überhaupt der erste Handgriff erfolgt",
        beschreibung: "Bevor sichtbar gebaut wird, entsteht das ganze Werk zunächst vollständig im Inneren – als klare Vorstellung, die dann Schritt für Schritt in die Wirklichkeit übersetzt wird.",
        beleg: "Dieter Nuhr: ›Der Biber, der jeden Stein genau prüft, bevor er ihn einsetzt‹; Jules Verne, der seine technischen Erfindungen oft bis ins Detail durchdacht hatte, lange bevor die beschriebene Technik überhaupt existierte; Prof. Dr. Dietland Müller-Schwarze, der 24 einzelne chemische Verbindungen aus dem Bibersekret systematisch nacheinander an wildlebenden Bibern testete, statt vorschnell zu verallgemeinern."
      },
      {
        titel: "Dienst an etwas Größerem als sich selbst, statt persönlichem Ruhm",
        beschreibung: "Das eigene Werk wird nicht als Selbstdarstellung verstanden, sondern als Beitrag zu einer Gemeinschaft, einer Idee oder einem System, das größer ist als die eigene Person.",
        beleg: "Jeanne-Marie Guyon, die ›ihr gesamtes Leben einem einzigen Bauwerk‹ widmete – ›kein Territorium, keine Macht, kein persönlicher Ruhm, sondern der Dienst an einer geistigen Idee‹; Jules Verne, dessen literarisches Universum ›die gesamte damals bekannte Welt und weit darüber hinaus umspannte‹; Rowan Atkinson: ›Sein Bau ist nicht Versteck, sondern Werk – eine komplexe Konstruktion, die dem Schutz aller dient.‹; Goethe, der sich 1775 auf dem Höhepunkt seines literarischen Ruhms für fast fünfzig Jahre einer Verwaltungsarbeit für Herzog Carl August verpflichtete, die seiner eigentlichen künstlerischen Natur oft diametral entgegenstand – Dienst am Weimarer Gemeinwesen statt am eigenen Künstlerruhm; Alexander Bommes, der 2007 seine Handballkarriere beendete und statt der juristischen Laufbahn nach seinem ersten Staatsexamen ein Journalismus-Volontariat begann – ein Bruch mit dem naheliegenden, sicheren Weg zugunsten einer neuen Aufgabe im Dienst der Öffentlichkeit; Molière, der seine jahrelang verschwiegene, fortschreitende Lungenerkrankung nicht zum Anlass nahm, sich zurückzuziehen, sondern bis zur vierten Aufführung von ›Der eingebildete Kranke‹ weiterspielte, ausgerechnet in der Rolle eines Hypochonders – Dienst an der eigenen Theatertruppe und am Publikum, bis der Körper buchstäblich auf der Bühne zusammenbrach; Jules Verne, der nach der Schussverletzung durch seinen eigenen Neffen 1886 nicht mit öffentlicher Klage reagierte, sondern das Familientrauma weitgehend privat hielt und sein literarisches Werk trotz dauerhaften Hinkens fortsetzte – Weiterbauen statt Rückzug, auch als der eigene Damm längst Risse zeigte; die Samariterin am Jakobsbrunnen, die ihren Krug stehen ließ und in die Stadt lief, um zu rufen: ›Kommt und seht!‹ – ihre eigene, lange verschwiegene Geschichte wurde zur Brücke, über die eine ganze Stadt zum Glauben fand."
      },
      {
        titel: "Wenn die perfekte, dienende Fassade eine maßlose, zerstörerische Realität verbirgt (Schattenform)",
        beschreibung: "In der destruktiven Ausprägung wird genau die Anpassungsleistung, die den Kontratyp der Sieben auszeichnet – Pflichterfüllung, freundliches Auftreten, scheinbare Aufopferung –, zur perfekten Tarnung für eine ganz andere, oft maßlose innere Realität, die sich irgendwann gewaltsam Bahn bricht.",
        beleg: "Chris Watts: ›Ein sozialer Typ 7 – der Kontratyp der Sieben – unter dem Deckmantel von Pflicht und Aufopferung seine eigentliche Maßlosigkeit so lange versteckt, bis sie alles auslöscht, was ihn zu halten droht‹ – ›unauffällig, höflich, fügsam‹ nach außen, bis zum Mord an seiner Familie; Frank Abagnale Jr., der als Hochstapler ›geschickt‹ ganze falsche Identitäten und Karrieren baute, statt tatsächliche. Wichtig: Diese beiden Fälle sind seltene, extreme Ausnahmen unter den SO7-Porträts dieses Kompasses, keine typische Ausprägung."
      }
    ]
  },
  SX6: {
    tier: "Wolf",
    kernthema: "Angst wird nicht vermieden, sondern frontal angegriffen – Stärke als Gegenangst (Naranjo: Kontratyp der Sechs)",
    beispiele: ["Wladimir Putin", "Platon", "Ludwig van Beethoven", "Alice Schwarzer", "Kollegah", "Moses", "Michael Schumacher", "Anke Engelke", "Katja Riemann", "Byron Katie", "Jennifer Aniston", "Scarlett Johansson", "Anders Breivik", "Armin Meiwes", "Charles Manson", "Dr. L. David Mech", "Dr. Douglas W. Smith", "Friedrich Schiller", "Uwe Ochsenknecht", "Otto von Bismarck", "Petrus"],
    fingerabdruecke: [
      {
        titel: "Angst wird nicht vermieden, sondern frontal angegriffen",
        beschreibung: "Anders als die anderen Sechser-Subtypen sucht diese Ausprägung Sicherheit nicht durch Anpassung oder Rückzug, sondern durch das direkte Konfrontieren der eigenen Angst – Stärke wird zur Gegenreaktion auf eine tief sitzende Unsicherheit.",
        beleg: "Beethoven: ›Wer schon als Kind lernt, dass Verletzlichkeit bestraft wird, lernt, ihr mit Härte zuvorzukommen‹; Michael Schumacher: ›Der Wolf duckt sich nicht vor der Bedrohung. Er dreht sich um und läuft ihr entgegen. Das ist die sexuelle Sechs in ihrer tiefsten Ausprägung: Angst nicht als Lähmung, sondern als Treibstoff‹; Kollegah: ›Der Wolf hat Angst – und er verwandelt diese Angst in Kraft‹; Putins Kindheitserinnerung an eine in die Enge getriebene Ratte, die ihm ins Gesicht sprang: ›Wer in die Enge getrieben ist, darf sich niemals zurückziehen‹; Dr. Douglas W. Smith, der die Wiederansiedlung der Wölfe in Yellowstone gegen erheblichen politischen Widerstand von Ranchern und Jägern durchsetzte, statt dem Konflikt auszuweichen; Scarlett Johansson, deren Rollen – die kühle Black Widow, die kontrollierte KI-Stimme in ›Her‹ – immer wieder Stärke performen, während darunter etwas Verletzliches, Suchendes liegt; Moses, der sich der Berufung am Dornbusch viermal widersetzte, dann aber wiederholt und ohne erkennbares Zögern vor den mächtigsten Herrscher der bekannten Welt trat; Friedrich Schiller, der als Kadett heimlich ›Die Räuber‹ gegen die Zensur seines Herzogs verfasste und schließlich mittellos aus Württemberg floh, statt sich der Willkürherrschaft zu beugen – und der später mit derselben Härte, mit der er einst dem Herzog begegnet war, vierzehn Jahre gegen den eigenen, tödlich fortschreitenden Krankheitsverfall arbeitete; Beethoven, der zwei parallel fortschreitenden Erkrankungen – Taubheit und Leberzirrhose – nie mit Rückzug, sondern bis zur geballten Faust im Moment seines Todes mit fortgesetzter Arbeit begegnete; Otto von Bismarck, der Kaiser Wilhelm I. wiederholt mit dem eigenen Rücktritt drohte, statt sich politischen Niederlagen zu beugen, und dessen eigenes Eingeständnis ›Ich bin ganz Nerven, sodass Selbstbeherrschung stets die größte Aufgabe meines Lebens war‹ zeigt, wie viel Kraft es kostete, die eigene Angst hinter Drohgebärden zu verbergen; Petrus, der aus dem Boot sprang, um auf dem Wasser zu Jesus zu gehen, und im Garten das Schwert zog, um ihn zu verteidigen – ›er brauchte die Nähe Jesu wie Luft zum Atmen‹, und genau diese Wucht der Bindung ließ ihn dreimal verleugnen, aus Angst, sie zu verlieren, bevor sie ihn zum Fels machte."
      },
      {
        titel: "Direkter Blickkontakt und Klartext statt Rückzug oder Diplomatie",
        beschreibung: "Konflikten wird nicht ausgewichen, sondern sie werden gesucht und offen ausgetragen – mit einer Direktheit, die viele überrascht oder verunsichert, aber selten unehrlich ist.",
        beleg: "Katja Riemann: ›Der Wolf weicht der Bedrohung nicht aus, sondern sieht sie direkt an … Klartext statt Diplomatie‹; Byron Katie: ›Wölfe testen sich gegenseitig durch Blickkontakt und Nähe, nicht durch Rückzug‹ – ihre Methode ›The Work‹ als Prinzip, der eigenen Angst nicht auszuweichen; Alice Schwarzer: ›Sie hat Debatten angestoßen, die niemand führen wollte … Der Wolf, der nicht aufhört zu heulen‹; Dr. L. David Mech, der seine eigene, weltberühmt gewordene These vom ›Alpha-Wolf‹ öffentlich widerrief, sobald neue Fakten sie widerlegten – Klartext auch gegen die eigene Autorität, statt an einer bequemen, überholten Sicherheit festzuhalten; Platon, der nach dem tödlichen Verrat an seinem Lehrer Sokrates nicht resignierte, sondern zweimal nach Sizilien zurückkehrte, um sein politisches Ideal in die Praxis umzusetzen, obwohl er beim ersten Versuch selbst in die Sklaverei verkauft worden war; Uwe Ochsenknecht, dessen Scheidung von Natascha Ochsenknecht und dessen anhaltende Entfremdung von Tochter Cheyenne öffentlich in aller Schärfe ausgetragen wurden statt in stiller Distanz zu enden – Klartext auch dort, wo Diplomatie näherliegend gewesen wäre."
      },
      {
        titel: "Kraft aus dem Rudel statt aus Einzelgängertum",
        beschreibung: "Die eigene Stärke entsteht nicht in Isolation, sondern in Verbindung mit einer Gruppe, einem Ensemble oder einer Gemeinschaft, für die man sich exponiert und in der man sich immer wieder beweist.",
        beleg: "Anke Engelke: ›Ihre Stärke kommt nicht aus Isolation, sondern aus Verbindung‹; Jennifer Aniston: ›Die Fähigkeit, sich immer wieder ins Rudel zu stellen … und dort standzuhalten, wenn es unbequem wird‹; Alice Schwarzer: ›Der Wolf lebt im Rudel, kämpft für das Rudel – und zeigt die Zähne, wenn das Rudel bedroht wird.‹"
      },
      {
        titel: "Wenn die Angst-Gegenangst-Dynamik zu fanatischer Ideologie oder Gewalt kippt (Schattenform)",
        beschreibung: "In der destruktiven Ausprägung wird aus der frontalen Konfrontation der eigenen Angst eine gewaltsame, oft ideologisch aufgeladene Kontrolle über andere – oder ein Rudel wird durch Angst und Faszination missbraucht statt geschützt.",
        beleg: "Charles Manson: ›Der Wolf braucht das Rudel, er erschafft es, er führt es durch Angst und Faszination zugleich … ein Rudelchef, der nie selbst zur Waffe griff – und doch der gefährlichste im Rudel war‹; Anders Breivik, dessen Ideologie sich ›über Jahre hinweg entwickelte und in einer mörderischen Manifestation von Hass und Entfremdung kulminierte‹; Armin Meiwes, der eine über Jahrzehnte gepflegte Fantasie schließlich umsetzte. Wichtig: Diese drei Fälle sind seltene, extreme Ausnahmen unter den SX6-Porträts dieses Kompasses, keine typische Ausprägung."
      }
    ]
  },
  SO6: {
    tier: "Erdmännchen",
    kernthema: "Wache halten für die Gruppe, nicht für sich selbst – Sicherheit durch Zugehörigkeit und Pflicht",
    beispiele: ["Melanie Kreis", "Immanuel Kant", "Dr. Sigmund Freud", "Andy Reid", "Donata Hopfen", "Herbert Grönemeyer", "James Corden", "Adolf Eichmann", "Prof. Dr. Marta Manser", "Prof. Tim Clutton-Brock", "Philippus"],
    fingerabdruecke: [
      {
        titel: "Wache halten für die Gruppe, nicht für sich selbst",
        beschreibung: "Die eigene Rolle wird konsequent dem Kollektiv untergeordnet: Sichtbarkeit oder persönlicher Auftritt sind nachrangig gegenüber der zuverlässigen Erfüllung der eigenen Funktion im System.",
        beleg: "Melanie Kreis: ›Sie wird beschrieben als zuverlässig, präzise, analytisch – und als jemand, der für den Konzern arbeitet, nicht für den eigenen Auftritt. Das ist das Erdmännchen: Es hält Wache. Nicht für sich. Für die Gruppe‹; Andy Reid: ›Nicht das lauteste Tier im Rudel, sondern dasjenige, das am längsten und zuverlässigsten Wache hält – für ein System, das größer ist als es selbst‹; James Corden: ›Es ist selten das größte Tier im Rudel, aber immer das, das am meisten dafür tut, dass alle zusammenbleiben‹; Prof. Dr. Marta Manser, die wissenschaftlich entschlüsselte, wie das Warnrufsystem der Erdmännchen die ganze Gruppe schützt – und ihren eigenen Vortrag dazu bezeichnenderweise ›Teamarbeit in der Savanne‹ nannte, nicht ›meine Entdeckung‹; Prof. Tim Clutton-Brock, dessen zentrale Forschungsfrage lautet, warum Individuen der Gruppe dienen, statt sich selbst fortzupflanzen – und der über Jahrzehnte selbst eine kollaborative Forschungsinfrastruktur statt einer Einzelgänger-Karriere aufbaute; Dr. Sigmund Freud, der seine Erkenntnisse nicht für sich behielt, sondern eine ganze Bewegung von Gleichgesinnten gründete, die sie tragen und verteidigen sollte – ›das Erdmännchen schlägt Alarm, auch wenn der Schwarm es nicht hören will.‹; Philippus, der nach der Kreuzigung blieb, ›nicht laut, nicht führend, aber anwesend, verlässlich‹ – er suchte nicht, Petrus zu ersetzen oder die Bühne zu übernehmen, er wollte nur Teil bleiben, Teil von etwas, das größer war als seine Fragen."
      },
      {
        titel: "Sicherheit durch feste, verlässliche Routine statt Aufbruch",
        beschreibung: "Verlässlichkeit entsteht durch wiederkehrende, feste Strukturen im Alltag – dieselben Wege, dieselben Zeiten, dasselbe Vorgehen –, die Schutz vor einer unberechenbaren Welt bieten.",
        beleg: "Immanuel Kant, der Königsberg in 80 Lebensjahren praktisch nie verließ und dessen Tagesablauf so unveränderlich getaktet war, ›dass die Bewohner Königsbergs angeblich ihre Uhren nach seinem allnachmittäglichen Spaziergang stellen konnten‹: ›Das Erdmännchen postiert seine Wachen an denselben Stellen, zur selben Zeit, jeden Tag‹ – eine Routine, die er auch auf seine lebenslange, philosophisch reflektierte Hypochondrie ausdehnte, um die eigene chronische Atembeklemmung durch reine Willensanstrengung zu beherrschen; Andy Reid, seit über dreißig Jahren ›im selben karierten Kurzarmhemd, mit demselben Cheeseburger-Lächeln.‹"
      },
      {
        titel: "Die w7-Variante: nicht abwarten, sondern der Gruppe vorauslaufen",
        beschreibung: "Statt methodisch den Horizont zu beobachten, bringt diese Ausprägung aktiv Bewegung ins System – mobilisiert die Gruppe, bevor eine Bedrohung überhaupt sichtbar wird, oder holt Menschen aktiv zusammen.",
        beleg: "Donata Hopfen: ›Andere rennen los, mobilisieren die Gruppe, bringen Bewegung ins Revier, bevor die Bedrohung überhaupt sichtbar ist … Das Erdmännchen der SO6w7 rennt nicht weg – es rennt voraus‹; James Corden, der in ›Carpool Karaoke‹ buchstäblich Menschen ins eigene Auto und damit zusammenholt: ›Komm rein, sing mit, sei Teil davon.‹; Herbert Grönemeyer, der nach dem Verlust seiner Frau und seines Bruders innerhalb weniger Tage nicht stillstand, sondern mit ›Mensch‹ das meistverkaufte deutsche Studioalbum aller Zeiten schuf – aus dem tiefsten Verlust das größte Zeichen von Gemeinschaft und Leben."
      },
      {
        titel: "Wenn Einbindung in ein System das eigene Gewissen vollständig ersetzt (Schattenform)",
        beschreibung: "In der destruktiven Ausprägung wird die Zugehörigkeit zu einer Autoritätsstruktur nicht zum Mittel der Sicherheit, sondern zum vollständigen Ersatz für eigenständiges moralisches Urteil – Befehle werden ausgeführt, ohne sie infrage zu stellen.",
        beleg: "Adolf Eichmann: ›Das Erdmännchen vertraut dem System der Kolonie vollständig – es zweifelt nicht, es hinterfragt nicht, es führt aus … Der Beitritt zur NSDAP und zur SS war für ihn kein ideologischer Akt – es war ein Akt der Einbindung. Er stieg auf, weil er zuverlässig war, gehorsam war, Aufgaben sauber erledigte. Das ist die SO6-Karriere: nicht durch Brillanz, sondern durch Konformität.‹ Wichtig: Dies ist der einzige bekannte Fall dieser Art unter den SO6-Porträts dieses Kompasses, keine typische Ausprägung."
      }
    ]
  },
  SE6: {
    tier: "Kaninchen",
    kernthema: "Ständige Wachheit gegenüber Gefahr, Sicherheit gesucht im Vertrauten (Naranjo: Wärme)",
    beispiele: ["Sundar Pichai", "Fjodor Dostojewski", "Franz Schubert", "Herbert Kickl", "Malaika Mihambo", "Mahatma Gandhi", "Neil Armstrong", "Beatrice Chebet", "Woody Allen", "John List", "Dr. Anne McBride", "Klaus J. Behrendt", "Zachäus"],
    fingerabdruecke: [
      {
        titel: "Gefahr früher wahrnehmen als andere – ständige, aktive Wachheit",
        beschreibung: "Die Sinne sind fortlaufend auf mögliche Bedrohung ausgerichtet. Das erlaubt oft, Entwicklungen vorherzusehen, bevor sie für andere sichtbar werden – nicht aus Ängstlichkeit im negativen Sinn, sondern als ständig aktive Risikoeinschätzung.",
        beleg: "Herbert Kickl: ›Es hört früher, riecht früher, spürt früher als andere, wenn etwas nicht stimmt‹; Sundar Pichai: ›Es hört, bevor es sich bewegt … bleibt genau dann ruhig, wenn andere in Panik geraten, weil es die Lage längst analysiert hat, bevor sie eskalierte‹; Malaika Mihambo, deren Weitsprung ›kontrollierte Explosion‹ ist: ›Wenn es doch springt, dann erst, nachdem es den Boden, die Distanz, die Gefahr genau abgewogen hat‹; Dr. Anne McBride, deren gesamte Forschung der Frage gilt, wie Angst und Sicherheitsbedürfnisse bei Tieren entstehen – und die diese Erkenntnisse in klare, anwendbare Verhaltensregeln übersetzt."
      },
      {
        titel: "Sicherheit im Vertrauten statt auf der großen Bühne",
        beschreibung: "Die eigentliche Heimat ist nicht die Öffentlichkeit oder das Rampenlicht, sondern der enge, vertraute Kreis – Freunde, Familie, ein bekannter Ort –, aus dem heraus auch außergewöhnliche Leistung entstehen kann.",
        beleg: "Franz Schubert, der ›zeitlebens die Öffentlichkeit des Konzertsaals mied und sein wahres Zuhause im privaten Kreis enger Freunde fand‹ – die Schubertiaden; Woody Allen, der ›praktisch sein ganzes Leben in Manhattan verbracht hat‹ und ›am liebsten auf bekannten Wegen, zu bekannten Zeiten‹ unterwegs ist – und der seine seit den 1950er-Jahren dokumentierte Gesundheitsangst nicht verbarg, sondern über Jahrzehnte in Sprache, Witz und über 35 Jahre Psychoanalyse verwandelte; Neil Armstrong, der nach der Mondlandung ›nichts sehnlicher wollte als Normalität‹ und auf seinen Bauernhof in Ohio zurückkehrte; Beatrice Chebet: ›Das Kaninchen rennt nicht weg. Es rennt nach Hause.‹; Klaus J. Behrendt, der trotz jahrzehntelanger Fernsehpräsenz als Tatort-Kommissar Schenk kaum Homestorys zulässt und sein Leben erkennbar auf wenige, aber tragfähige Bindungen und Routinen ausgerichtet hat statt auf zusätzliche Sichtbarkeit; Zachäus, der Zöllner, dessen Baum ›hoch genug war, um den Überblick zu behalten, nah genug, um zu sehen‹ – Sicherheit durch kontrollierte Distanz, bis ein einziger Anruf ihn aus dem sicheren Abstand in echte Nähe holte."
      },
      {
        titel: "Ruhige Funktionsfähigkeit unter extremem Druck, weil die Gefahr längst kalkuliert wurde",
        beschreibung: "Auch in Ausnahmesituationen bleibt eine erstaunliche Handlungsfähigkeit erhalten – nicht durch spontanen Mut, sondern weil mögliche Bedrohungen bereits im Vorfeld gedanklich durchgespielt wurden.",
        beleg: "Fjodor Dostojewski, der eine Scheinhinrichtung überlebte und dessen Kaninchen-Natur ›selbst in Ausnahmesituationen erstaunlich funktionsfähig‹ blieb, ›weil es die Gefahr längst kalkuliert hat, bevor sie eintraf‹; Sundar Pichai, der eines der mächtigsten Technologieunternehmen der Welt führt, ›ohne je laut zu werden … kein Schritt, der nicht abgesichert ist.‹; Mahatma Gandhi, dessen minutiös geplante Kampagnen des gewaltlosen Widerstands – von Hungerstreiks bis zu jahrelanger Beobachtung dessen, was funktionierte – selbst unter extremem Druck ruhig und funktionsfähig blieben, weil die Gefahr längst durchdacht war."
      },
      {
        titel: "Wenn die jahrelang verdrängte Angst unerwartet in Gewalt umschlägt (Schattenform)",
        beschreibung: "In der destruktiven Ausprägung bleibt die Angst über Jahre unsichtbar nach außen kontrolliert – bis eine Situation ohne wahrgenommenen Ausweg entsteht und sich die aufgestaute Anspannung abrupt und unvorhersehbar entlädt.",
        beleg: "John List: ›Das Kaninchen flieht, wenn es kann. Aber in die Enge getrieben – ohne Ausweg, ohne Fluchtmöglichkeit – schlägt es um sich. Hart, plötzlich, überraschend … Jahrelang hielt er die Ohren oben, registrierte jedes Anzeichen von Gefahr, schwieg, duckte sich, funktionierte. Und dann … schlug er um sich.‹ Wichtig: Dies ist der einzige bekannte Fall dieser Art unter den SE6-Porträts dieses Kompasses, keine typische Ausprägung."
      }
    ]
  },
  SX5: {
    tier: "Igel",
    kernthema: "Stacheln nach außen, Weichheit innen – Vertrauen als exklusiver, geschützter Raum",
    beispiele: ["Frédéric Chopin", "Taylor Swift", "Tilda Swinton", "Siddhartha Gautama (Buddha)", "Friedrich Nietzsche", "Greta Garbo", "Mark Zuckerberg", "Edward Snowden", "Jodie Foster", "Jeffrey Dahmer", "Joel Rifkin", "Hugh Warwick", "Der Mann von Gerasa"],
    fingerabdruecke: [
      {
        titel: "Stacheln nach außen, außergewöhnliche Weichheit darunter – nur für sehr wenige zugänglich",
        beschreibung: "Die abwehrende, unnahbare Außenseite ist keine Kälte, sondern Schutz für ein besonders intensives, empfindsames Inneres, das sich erst nach aufgebautem Vertrauen zeigt.",
        beleg: "Taylor Swift: ›Wer ihn kennt, weiß: Darunter ist etwas außerordentlich Weiches. Aber man muss Vertrauen aufgebaut haben, um es zu berühren‹; Mark Zuckerberg: ›Die Stacheln sind aus Code. Das Innere sieht nur, wem er wirklich vertraut‹; Edward Snowden: ›Wer ihn berühren will, muss sein Vertrauen gewinnen. Und wer ihn zwingt, wird sich stechen‹; Hugh Warwick, der seine eigene Verletzlichkeit hinter Humor und stachelig-pointierter publizistischer Arbeit schützt, während darunter die tiefste emotionale Resonanz zu seinem einen Lebensthema liegt; der Mann von Gerasa, dessen Stacheln – Ketten, Steine, das Leben zwischen den Gräbern – ein verzweifelter Schutzwall waren, bis ein einziger Blick genügte, damit er zum ersten Mal ohne zu fliehen gesehen werden konnte."
      },
      {
        titel: "Rückzug als gezielte Reservierung von Intimität für wenige exklusive Verbindungen",
        beschreibung: "Der Rückzug aus der Öffentlichkeit bedeutet nicht Gleichgültigkeit gegenüber Nähe, sondern das genaue Gegenteil: Energie und Intimität werden bewusst für ganz wenige, dafür sehr tiefe Beziehungen aufgespart.",
        beleg: "Jodie Foster: ›Der Rückzug geschieht nicht aus Gleichgültigkeit, sondern um die eigene Intimität und Energie für ganz wenige, exklusive Verbindungen aufzusparen‹; Greta Garbo, die sich mit 36 Jahren fast fünfzig Jahre aus der Öffentlichkeit zurückzog: ›Das restlose Eintauchen in die eine, intensive Begegnung … und der ebenso radikale Rückzug davor und danach‹ – ›I want to be let alone‹, nicht allein, sondern in Ruhe gelassen; Hugh Warwick, dessen jahrzehntelange, fast liebende Hingabe sich exklusiv auf ein einziges Tier konzentriert, statt sich auf viele Themen zu verteilen – ›A Prickly Affair‹, eine stachelige Liebesaffäre, wie er sein Lebenswerk selbst nennt; Frédéric Chopin, der in seinem ganzen Leben kaum dreißig öffentliche Konzerte gab, dafür aber mit George Sand neun Jahre lang eine einzige Verbindung lebte, ohne die er nach der Trennung kaum noch komponierte – und dessen Tuberkulose sich exakt in dem Jahr der Trennung dramatisch beschleunigte, als hinge die körperliche Kraft an derselben einen Verbindung wie die schöpferische; Tilda Swinton, die seit Jahrzehnten in engen, wiederkehrenden Kreisen arbeitet – mit Derek Jarman, mit Wes Anderson – statt das Umfeld ständig zu wechseln, und sich privat in ein abgelegenes Haus in den schottischen Highlands zurückzog."
      },
      {
        titel: "Radikaler Durchbruch zum Kern statt Anhaftung an System, Status oder Besitz",
        beschreibung: "Statt sich an äußere Sicherheiten, gesellschaftliche Systeme oder Institutionen zu binden, wird die eine, entscheidende Frage bis zum Äußersten durchdrungen – mit schneidender, oft einsamer Konsequenz.",
        beleg: "Siddhartha Gautama, der Palast, Frau und Sohn verließ, ›um mit schneidender Konsequenz eine einzige Frage zu zerlegen‹: ›Kein Weg der Anhaftung an Menschen, Orte oder Institutionen, sondern ein Weg des radikalen Durchdringens‹ – ›Tiefe statt System‹; Friedrich Nietzsche, der ›von Anfang an lieber allein dachte als in Gesellschaft.‹"
      },
      {
        titel: "Wenn das Verlangen nach exklusiver Nähe zum Besitzanspruch über den anderen kippt (Schattenform)",
        beschreibung: "In der destruktiven Ausprägung wird aus dem Wunsch nach der einen, tiefen Verbindung ein Anspruch, den anderen vollständig für sich zu besitzen und zu kontrollieren – bis zur völligen Auslöschung von dessen eigenständiger Existenz.",
        beleg: "Jeffrey Dahmer: ›Er wollte seine Opfer nicht vernichten – er wollte sie besitzen‹; Joel Rifkin, der äußerlich als unauffälliger Bewohner eines stillen Vororts lebte, während er über Jahre in völliger Verborgenheit mordete. Wichtig: Diese beiden Fälle sind seltene, extreme Ausnahmen unter den SX5-Porträts dieses Kompasses, keine typische Ausprägung."
      }
    ]
  },
  SO5: {
    tier: "Oktopus",
    kernthema: "Vielarmiges, paralleles Wissen, das der Gemeinschaft dient (Naranjo: Totem) – oder als Machtinstrument kontrolliert wird",
    beispiele: ["Dr. Albert Einstein", "Gertrude Belle Elion", "Dr. Claudio Naranjo", "Leonardo da Vinci", "Georg Wilhelm Friedrich Hegel", "Isaac Newton", "Pythagoras", "Jennifer Mather", "Bill Gates", "Günther Jauch", "Dirk Rossmann", "Eckhard Freise", "Dr. Ted Kaczynski", "Dr. Harold Shipman", "Gamaliel"],
    fingerabdruecke: [
      {
        titel: "Vielarmiges, paralleles Denken, das der Gemeinschaft zur Verfügung gestellt wird",
        beschreibung: "Naranjo nannte diesen Subtyp den des ›Totems‹: gesammeltes Wissen wird nicht für sich behalten, sondern der Gruppe als Beitrag angeboten. Charakteristisch ist dabei, gleichzeitig in mehreren Bereichen oder Richtungen zu denken, ohne sich in einem einzigen zu erschöpfen.",
        beleg: "Leonardo da Vinci: ›Ein Wesen mit außergewöhnlicher Intelligenz, das die Welt mit unzähligen Armen gleichzeitig erforscht und sein Wissen der Gemeinschaft zur Verfügung stellt, statt es nur für sich zu horten‹ – Maler, Anatom, Ingenieur, Botaniker zugleich, der noch nach einem Schlaganfall mit gelähmter rechter Hand in seinen letzten Lebensjahren auf die linke Hand auswich, statt sein Schaffen aufzugeben; Gertrude Belle Elion, ›die gleichzeitig in mehreren Richtungen dachte‹ und ›mit ihrer Arbeit Millionen von Menschenleben gerettet hat, ohne dass die meisten Menschen heute ihren Namen kennen‹; Jennifer Mather: ›Wissen als Beitrag zur Gemeinschaft.‹; Dr. Albert Einstein, der seine bahnbrechenden Arbeiten des Wunderjahres 1905 nicht zurückhielt, sondern sofort zur Veröffentlichung und Diskussion in die wissenschaftliche Gemeinschaft gab; Günther Jauch, der sein Wissen buchstäblich zum zentralen Format eines ganzen Sendungssystems machte, ruhig und unaufgeregt im Zentrum – der Oktopus in seinem Element; Eckhard Freise, dessen über Jahrzehnte in stiller Tiefe angesammeltes Fachwissen sich in einem einzigen, öffentlich abgefragten Moment als vollständig abrufbar erwies, ohne dass er danach sein Leben änderte: ›Wir sind so geblieben, wie wir vorher schon waren.‹; Gamaliel, dessen ruhige Autorität im Hohen Rat nicht aus Amt oder Lautstärke kam, sondern aus durchdachtem Prinzip: ›Lasst uns abwarten, lasst uns prüfen, lasst uns Gott Raum lassen‹ – Wissen, das der ganzen Versammlung diente, nicht der eigenen Position."
      },
      {
        titel: "Wissen wird über Jahre im Verborgenen entwickelt, bevor es kontrolliert freigegeben wird",
        beschreibung: "Anders als spontane Mitteilung erfolgt die Weitergabe von Wissen erst nach langer, oft jahrzehntelanger Vorbereitung im Stillen – und dann bewusst dosiert, zum selbst gewählten Zeitpunkt.",
        beleg: "Isaac Newton, der die Grundlagen seiner Physik ›über zwei Jahrzehnte lang fast ausschließlich für sich behalten hatte‹: ›Der Oktopus verbirgt sich nicht aus Schwäche. Er verbirgt sich, weil er die Kontrolle darüber behalten will, wann und wie sein Wissen die Welt erreicht‹ – eine Geheimhaltung, die auch seine jahrzehntelangen, ungeschützten alchemistischen Experimente umfasste und ihn 1693 in einen schweren, vermutlich durch Quecksilber ausgelösten Nervenzusammenbruch trieb; Hegel, der erst mit 46 Jahren seine erste Professur erhielt, nach ›einer langen Phase des stillen, zurückgezogenen Systemschreibens‹; Pythagoras, der sein Wissen ›nach außen nur in genau bemessenen Dosen‹ weitergab; Einstein, der auch sein eigenes Lebensende nach demselben Prinzip behandelte: Als 1955 eine erneute Operation seines seit Jahren bekannten Aortenaneurysmas anstand, lehnte er ab – ›Ich will gehen, wenn ich will‹ – und entschied selbst über den Zeitpunkt, statt die Kontrolle abzugeben."
      },
      {
        titel: "Eine eigene Struktur oder ein eigener Orden als Rahmen für geteiltes, aber gehütetes Wissen",
        beschreibung: "Statt Wissen einzeln oder ungeordnet zu verbreiten, entsteht häufig eine eigene Institution, ein Kreis oder ein System, innerhalb dessen das Wissen kontrolliert weitergegeben und gepflegt wird.",
        beleg: "Pythagoras, der in Kroton eine Gemeinschaft gründete, die ›zugleich Forschungszirkel, religiöser Orden und politischer Bund war‹: ›Der Oktopus baut sich ein Gehäuse, eine Struktur, innerhalb derer er das Wissen kontrolliert‹; Hegels lebenslanges philosophisches System, ›das System als Totem‹; Claudio Naranjo, dessen eigene Enneagramm-Schule als geordnetes Weitergabesystem seines Lebenswerks diente."
      },
      {
        titel: "Wenn dasselbe Muster zum Machtinstrument statt zum Dienst wird (Schattenform)",
        beschreibung: "In der destruktiven Ausprägung wird das gesammelte Wissen oder die kontrollierte Struktur nicht zum Geschenk an die Gemeinschaft, sondern zum Mittel der Kontrolle über andere oder gegen sie eingesetzt.",
        beleg: "Bill Gates: ›Hinter dem freundlichen Pullover … liegt ein Muster, das sich durch sein gesamtes Leben zieht: die systematische Kontrolle über das, was andere brauchen … Das Totem als Machtinstrument‹; Dr. Harold Shipman, der als vertrauenswürdiger Hausarzt sein medizinisches Wissen nutzte, um über zwei Jahrzehnte mindestens 218 Patienten zu töten; Dr. Ted Kaczynski, der Universalgelehrsamkeit gegen die Gesellschaft richtete, die er zu retten glaubte. Wichtig: Gates' Fall liegt in einer völlig anderen Größenordnung als Shipman oder Kaczynski und ist mit diesen keinesfalls gleichzusetzen – alle drei zeigen jedoch dieselbe Grundstruktur in ganz unterschiedlicher Schärfe."
      }
    ]
  },
  SE5: {
    tier: "Eule",
    kernthema: "Der Rückzug als bewusst gebaute Burg – stille Beobachtung statt Flucht",
    beispiele: ["Dr. Christian Rätsch", "Xu Bing", "Franz Kafka", "Peter Lustig", "Warren Buffett", "Vera Birkenbihl", "Charles Darwin", "Marie Curie", "René Descartes", "Hermann Hesse", "Baruch de Spinoza", "Carl Tanzler", "Joachim Kroll", "Carl Friedrich Gauß", "Prof. Dr. Ingo Zimmermann", "Nikodemus"],
    fingerabdruecke: [
      {
        titel: "Der Rückzug als bewusst gebaute ›Burg‹ statt bloße Flucht",
        beschreibung: "Der Rückzugsraum ist kein Zeichen von Schwäche, sondern eine aktiv errichtete, geschützte Basis, von der aus beobachtet, gedacht und gearbeitet wird – klein, überschaubar, aber vollständig unter eigener Kontrolle.",
        beleg: "Xu Bing: ›Die Eule, die in der Zeit der größten Öffentlichkeit lernte, sich in die Stille des Zeichens zurückzuziehen‹ – ›Die Burg aus Zeichen‹; Peter Lustig, dessen Wohnwagen zur ›Burg‹ wurde; Warren Buffett, der seit 1958 im selben Haus in Omaha lebt: ›Die Burg in Omaha‹; Hermann Hesse, der vierzig Jahre in seinem Tessiner Haus verbrachte: ›Die Burg im Tessin‹ – eine Burg, die auch seine lebenslange Migräne und wiederkehrenden depressiven Krisen nie ganz aus der Öffentlichkeit heraushalten konnte, aber immerhin in einen streng kontrollierten, therapeutischen Rahmen fasste; Spinoza: ›Die Burg des Denkens‹ – eine Burg, die er selbst dann nicht verließ, als das jahrzehntelange Linsenschleifen ihm die eigene Lunge kostete; Carl Friedrich Gauß, der Göttingen praktisch nie verließ und Jahrzehnte als Sternwarten-Direktor in einer sicheren, geordneten Alltagsstruktur forschte; Prof. Dr. Ingo Zimmermann, der auf einem Hof lebt und seinen von Hand aufgezogenen Waldkauz Hugo als kontrollierte, sorgfältig dosierte Form von Nähe an seiner Seite trägt – die eigene Tierentsprechung, offenbar unbewusst erkannt und gelebt; Dr. Christian Rätsch, der nicht von Universitätslehrstühlen aus, sondern als unabhängiger Wissenschaftler in seiner eigenen Burg forschte; Vera F. Birkenbihl, die unverheiratet und auf eigene Rechnung arbeitete, ihren eigenen Verlag gründete und ihre eigenen Methoden entwickelte, statt sich einer Institution unterzuordnen."
      },
      {
        titel: "Geduldiges Warten, bis das Wissen oder der Moment unangreifbar ist",
        beschreibung: "Handeln oder Veröffentlichen geschieht nicht impulsiv, sondern erst, wenn jeder Einwand vorweggenommen und jedes Detail gesichert ist – ein Vorgehen, das von außen wie Zögern wirken kann, aber Ausdruck äußerster Sorgfalt ist.",
        beleg: "Charles Darwin, der seine Evolutionstheorie ›zwanzig Jahre lang zurückhielt, bevor er sie veröffentlichte … bis das Beobachtete unangreifbar war‹; Warren Buffett: ›Sie handelt erst, wenn sie wirklich verstanden hat, was sie sieht. Und wenn sie handelt, dann mit einer Präzision, die andere für Glück halten, die aber Jahrzehnte geduldiger Beobachtung voraussetzt‹; Carl Friedrich Gauß, dessen Lebensmotto ›pauca sed matura‹ – wenig, aber reif – lautete und der ganze mathematische Entdeckungen jahrzehntelang zurückhielt, aus Furcht vor dem ›Geschrei der Böotier‹, bevor er sie für vollkommen ausgereift hielt; Franz Kafka, der lieber sein gesamtes unveröffentlichtes Lebenswerk vernichten lassen wollte, als es der Welt in unvollendetem Zustand auszusetzen; René Descartes, der sein fertiges Manuskript ›Le Monde‹ aus Vorsicht zurückzog und zu Lebzeiten nie veröffentlichte, nachdem er von Galileos Verurteilung erfahren hatte; Nikodemus, der nach seiner nächtlichen Begegnung mit Jesus jahrelang schwieg, bis ein einziger Satz ›wie tropfendes Wasser, das langsam Gestein formt‹ in ihm arbeitete – und der erst am Kreuz, als seine innere Gewissheit unumkehrbar geworden war, öffentlich handelte."
      },
      {
        titel: "Verstoßung oder Krise wird zur Methode des Rückzugs, statt zum offenen Bruch zu führen",
        beschreibung: "Auf Ablehnung, Verbannung oder eine tiefe Lebenskrise folgt kein Widerstand und keine Konfrontation, sondern ein ruhiger, methodischer Rückzug in eine selbst gewählte, kontrollierte Existenz.",
        beleg: "Spinoza, mit 23 Jahren aus seiner Gemeinde verbannt: ›Er reagierte nicht mit Widerstand oder Verhandlung – er zog sich zurück … und lebte den Rest seines Lebens außerhalb jeder Gemeinschaft, die ihn hätte binden können‹; Xu Bing, dessen Familie durch die Kulturrevolution zerstört wurde: ›Aus dieser Erfahrung wurde kein Bruch, sondern eine Methode‹; Hermann Hesse, dessen Krise nach dem Klosterausbruch ›eine lebenslange Bewegung nach innen‹ prägte; Marie Curie, die ihre Heimat verließ, weil Frauen dort nicht studieren durften."
      },
      {
        titel: "Wenn sich die unsichtbare Intensität der Isolation zu etwas Unumkehrbarem verdichtet (Schattenform)",
        beschreibung: "In der destruktiven Ausprägung wird dieselbe stille, von außen kaum sichtbare Intensität nicht zur Erkenntnis, sondern zu einer obsessiven Fixierung, die sich über Jahre unbemerkt aufbaut, bis sie in etwas Extremes und Unumkehrbares kippt.",
        beleg: "Carl Tanzler: ›Die Eule beobachtet aus der Distanz und hortet, was sie fesselt, mit einer Intensität, die von außen unsichtbar bleibt, bis sie sich in etwas Unumkehrbares verwandelt‹ – er bewahrte den Leichnam einer Toten sieben Jahre lang auf; Joachim Kroll, der seinen Nachbarn als ›stiller, unauffälliger, fast kindlicher Mann‹ auffiel, während er über zwei Jahrzehnte unentdeckt mordete. Wichtig: Diese beiden Fälle sind seltene, extreme Ausnahmen unter den SE5-Porträts dieses Kompasses, keine typische Ausprägung."
      }
    ]
  },
  SX4: {
    tier: "Chihuahua",
    kernthema: "Klein von Gestalt, riesig im Innenleben – Intensität, die keine Halbheiten kennt (Naranjo: Konkurrenzneid)",
    beispiele: ["Voltaire", "Freddie Mercury", "Rihanna", "Billie Eilish", "Ana de Armas", "Linda Leinweber", "Dante Alighieri", "Claude Debussy", "Marquis de Sade", "Bonnie Parker", "Adolf Hitler", "Paris Hilton", "Bill Kaulitz", "Judas Thaddäus"],
    fingerabdruecke: [
      {
        titel: "Klein von Gestalt oder Herkunft, riesig im Innenleben – Intensität ohne Halbheiten",
        beschreibung: "Naranjo nannte diesen Subtyp den des ›Konkurrenzneids‹: eine Intensität, die in keinem Verhältnis zur äußeren Erscheinung oder zu den Startbedingungen steht. Kein halbes Fühlen, kein gemäßigtes Auftreten – was gefühlt wird, wird vollständig gefühlt.",
        beleg: "Freddie Mercury: ›Der Chihuahua, der sich in einen Löwen verwandelt – und dabei nie aufhört, ein Chihuahua zu sein‹; Rihanna, vom ›Kind aus der Karibik zur globalsten Entertainerin ihrer Generation‹: ›Klein, woher er kommt. Unaufhaltsam, wohin er geht‹; Billie Eilish: ›Er zittert nicht aus Schwäche, sondern aus Wachheit: jede Faser seines kleinen Körpers ist auf Intensität ausgerichtet‹; Dante, Debussy und Marquis de Sade werden fast wortgleich beschrieben: ›Klein von Gestalt, gewaltig im Innenleben, unfähig zu Halbheiten‹; Paris Hilton, deren jahrelanger Begleiter, der Chihuahua Tinkerbell, buchstäblich zum Sinnbild ihrer eigenen, unübersehbaren Bühnenintensität wurde; Bill Kaulitz, dessen ungewöhnlich hohe, durchdringende Stimme ihn schon als Kind von Gleichaltrigen unterschied – ein Merkmal, das er nie zu verstecken versuchte, sondern über zwei Jahrzehnte konsequent in ein unübersehbares öffentliches Erscheinungsbild verwandelte; Judas Thaddäus, der kaum je erwähnte Jünger, dessen ganzes Sein doch »voll Sehnsucht, voll Feuer, voll Fragen, voll Hunger nach tiefer, echter Verbindung« war – klein am Rand der Überlieferung, riesig in der einen Frage, die er zu stellen wagte."
      },
      {
        titel: "Zurückweisung oder Verbannung wird zu schöpferischer Kraft, statt in Rache oder Resignation zu münden",
        beschreibung: "Verletzung, Ablehnung oder erzwungene Distanz führen nicht zum Rückzug, sondern werden zum fruchtbarsten Material für ein eigenständiges Werk oder einen eigenständigen Weg.",
        beleg: "Voltaire, der nach Verbannung aus Frankreich das Exil ›in den fruchtbarsten Abschnitt seines Lebens‹ verwandelte; Dante, der aus seiner Verbannung aus Florenz ›eines der gewaltigsten literarischen Werke der Weltgeschichte‹ schuf: ›Er verwandelte die Verbannung nicht in Resignation, sondern in das Material für ein Werk, das ihm posthum genau jene Unsterblichkeit sicherte, die ihm die Stadt zu Lebzeiten verweigerte‹; Ana de Armas, die sich ohne Netz und Kontakte in Hollywood durchkämpfte; Paris Hilton, die belastende Erfahrungen in sogenannten „Troubled-Teen“-Einrichtungen jahrzehntelang hinter einer perfekt inszenierten Kunstfigur verbarg, aus der zugleich ein eigenes Geschäftsimperium entstand; Freddie Mercury, der ausgerechnet in seinem letzten Lebensjahr, körperlich sichtbar geschwächt durch eine jahrelang geheim gehaltene AIDS-Erkrankung, einige der eindringlichsten Aufnahmen seiner Karriere schuf, statt sich zurückzuziehen."
      },
      {
        titel: "Kompromisslose Intensität, die sich keiner fremden Konvention fügt",
        beschreibung: "Anpassung an Erwartungen, Regeln oder gesellschaftliche Normen wird als Einengung erlebt, der man sich mit aller Kraft widersetzt – auch wenn das offenen Konflikt mit der eigenen Zeit bedeutet.",
        beleg: "Claude Debussy, der als Schüler ›die Lehrer regelmäßig mit Akkordfolgen provozierte, die als »falsch« galten‹: ›Der Chihuahua, der von Anfang an spürte: Die Regeln, die man mir beibringt, sind nicht die Wahrheit, die ich suche‹ – und der auch der eigenen, fast neunjährigen Krebserkrankung nie mit Rückzug begegnete, sondern noch 1917 unter Kanonendonner ein letztes Konzert gab; Linda Leinweber: ›Tiefe, die sich nicht schämt. Erkenntnis, die sich nicht versteckt‹; Voltaire, der nach seiner Bastille-Haft ›schärfer zurückbiss‹, statt zu schweigen – und der auch jahrzehntelangen chronischen Verdauungs- und Blasenleiden nie seine Produktivität opferte, sondern sie in derselben unmittelbaren Intensität in seinen Briefen dokumentierte, mit der er auch gegen jede Ungerechtigkeit anschrieb."
      },
      {
        titel: "Wenn dieselbe grenzenlose Intensität sich gegen andere statt gegen Konventionen richtet (Schattenform)",
        beschreibung: "In der destruktiven Ausprägung wird die kompromisslose Intensität nicht produktiv, sondern zerstörerisch: gekränkter Stolz, absolute Rivalität oder eine tragisch mit Gewalt verschmolzene Liebe kippen in Verletzung oder Vernichtung anderer.",
        beleg: "Marquis de Sade, dessen radikale Ablehnung jeder Ordnung sich in nachweisbaren Gewalttaten gegen andere entlud; Bonnie Parker, die während einer 21-monatigen Verbrecherjagd Gedichte über ihre Beziehung zu Clyde Barrow schrieb, die ›ihren eigenen gewaltsamen Tod fast prophetisch vorwegnahmen‹ – ›eine düstere Vorahnung des eigenen Untergangs, die die Liebe nicht schmälert, sondern erst vollständig macht‹; Adolf Hitler als die extremste, folgenschwerste Ausprägung. Wichtig: Diese Fälle sind seltene, gefährliche Extremformen – die überwiegende Mehrheit der SX4 in diesem Kompass zeigt dieses Muster nicht."
      }
    ]
  },
  SO4: {
    tier: "Gürteltier",
    kernthema: "Ein harter Panzer nach außen, ein außergewöhnlich empfindsames Inneres darunter (Naranjo: Scham)",
    beispiele: ["Romy Schneider", "Michael Jackson", "Taddl (Daniel Tjarks)", "Til Schweiger", "Johnny Depp", "John Lennon", "Leonard Cohen", "Javier Parisi", "Cat Stevens", "Fiona Apple", "Edgar Allan Poe", "Heraklit", "Hippokrates von Kos", "Gustav Mahler", "Marcel Proust", "Reinhard Mey", "Elliot Rodger", "Dr. Mariella Superina", "Thomas"],
    fingerabdruecke: [
      {
        titel: "Ein harter Panzer nach außen, ein außergewöhnlich empfindsames Inneres darunter",
        beschreibung: "Naranjo nannte diesen Subtyp den der ›Scham‹: das tiefe Gefühl, strukturell anders und mangelhaft zu sein. Nach außen zeigt sich häufig eine wirkende, undurchdringliche Fassade – Coolness, Perfektion, Humor –, die ein extrem verletzliches Inneres schützt, ohne es je ganz zu verbergen.",
        beleg: "Romy Schneider: ›Das Gürteltier, das sich in der Öffentlichkeit zeigt und sich dabei innerlich einrollt‹ – ›Schmerz, Einsamkeit, das Gefühl, nie wirklich gesehen zu werden‹; Michael Jackson: ›Das Gürteltier zeigt der Welt seine Rüstung. Was darunter liegt, zeigt es fast niemandem‹; Til Schweiger und Taddl, deren ›glatte Außenfassade‹ bzw. ›scheinbar sorgloser Humor‹ dieselbe tiefe emotionale Verletzlichkeit schützt; Hugh Grant, der sich selbst wiederholt als ›terribly insecure‹ bezeichnete und dessen charmant-stotternde Leinwandfigur genau jene Unsicherheit zur Schau trug, die er privat als chronisches Selbsthass-Gefühl beschrieb; Ajeet Kaur, deren chronische Autoimmunerkrankung seit der Kindheit zur Quelle einer öffentlichen Rolle als Heilerin durch Musik wurde, während sie selbst betont, sich schon als Kind ›in die Musik zurückgezogen‹ zu haben, ›um verschwinden und mich wieder mit einem tieferen, ruhigeren Teil von mir selbst verbunden fühlen zu können‹; Leonard Cohen, dessen tiefe, gefasste Bühnenpräsenz im makellosen Anzug jahrzehntelang eine Melancholie verbarg, die er zugleich unablässig in Liedern offenlegte – ›das Gürteltier, das sich einrollt, um sich zu schützen, und hervortritt, wenn es gebraucht wird‹; Jackson, dessen fünfundzwanzigjährige, weitgehend verborgene Abhängigkeit von Schmerz- und Schlafmitteln bis zu seinem Tod hinter derselben makellosen Bühnenfassade verschwand, die auch die Vitiligo-Flecken jahrelang unsichtbar machte; Reinhard Mey, der trotz über fünf Jahrzehnten Bühnenpräsenz als ausgesprochen privater Mensch gilt, Medienrummel meidet und den tiefen Verlust seines 2014 verstorbenen Sohnes nie zur Bühnen-Inszenierung machte – das Persönliche fließt in die Musik, ohne je zur Selbstdarstellung zu werden; Thomas, dessen trotzige Forderung – ›Wenn ich nicht seine Wunden sehe, werde ich nicht glauben‹ – in Wahrheit ein Hilfeschrei war: ›Bitte, lasst mich es fühlen. Nicht hören, nicht wiederholen, sondern selbst durchleben.‹"
      },
      {
        titel: "Trägt das eigene Anderssein sichtbar zur Schau, statt es zu verbergen",
        beschreibung: "Ein Teil der SO4 verbirgt sich nicht introvertiert im eigenen Panzer, sondern trägt die eigene Einzigartigkeit bewusst nach außen – als sichtbares Zeichen, das zugleich verbindet und ausgrenzt.",
        beleg: "Johnny Depp: ›Diese Vier versteckt sich nicht im eigenen Panzer, sondern trägt ihn stolz zur Schau – als Beweis der eigenen Einzigartigkeit, auf einer Bühne, die alle sehen können‹; Gustav Mahler, der als Jude und Künstler mit radikal eigenwilliger Sprache ›sein Anderssein nicht verbirgt, sondern sichtbar in die Öffentlichkeit trägt, in eine Gruppe, die es zugleich fasziniert und ausschließt‹; Javier Parisi, der ›sich nicht mit dem eigenen Panzer zufriedengibt, sondern sich einen zweiten, fremden anlegt – und darin, paradoxerweise, sich selbst findet‹, als John-Lennon-Doppelgänger; Cat Stevens/Yusuf Islam, der seine radikale Identitätssuche nach einem Beinahe-Ertrinken 1976 nicht im Stillen vollzog, sondern öffentlich – bis zur vollständigen Umbenennung und einem fast dreißigjährigen Rückzug aus der Musikindustrie zugunsten einer neuen, ebenso öffentlich gelebten Mission."
      },
      {
        titel: "Bedeutung durch bewusste Abgrenzung von einer Gemeinschaft, der man dennoch zugewandt bleibt",
        beschreibung: "Die eigene Bedeutung entsteht nicht durch Anpassung, sondern durch den bewussten Kontrast zur Gemeinschaft – man wendet sich ab, ohne sie je ganz zu verlassen, weil sie der Resonanzraum bleibt, an dem sich das eigene Denken oder Fühlen schärft.",
        beleg: "Heraklit, der sich vom öffentlichen Leben abwandte, ›das er für oberflächlich hielt‹, aber ›Ephesos zugewandt‹ blieb; Hippokrates, der sich von der religiösen Heilkunst seiner Familie abgrenzte: ›Das Gürteltier bleibt Teil der Gemeinschaft der Heiler – aber es widerspricht ihr in ihrem Kern‹; Fiona Apple, deren jahrelange Rückzüge aus dem Rampenlicht sie ›trotzdem, oder gerade deshalb, zu den schonungslosesten Beobachterinnen‹ machten; Edgar Allan Poe und Marcel Proust, die sich körperlich zurückzogen, um über das Beobachtete zu schreiben – bei Proust wurde der Rückzug ins korkverkleidete Zimmer, erzwungen durch sein lebenslanges Asthma, buchstäblich zur Bedingung seines Lebenswerks; Dr. Mariella Superina, die sich innerhalb der Naturschutzgemeinschaft bewusst auf eine einzige, kaum beachtete Nische spezialisierte – Gürteltiere statt der prominenteren Großtiere – und gerade darin zur unersetzbaren, weltweit anerkannten Stimme wurde; Prof. Lauren Gardner, deren Verkehrsingenieurwesen-Hintergrund innerhalb der Epidemiologie-Gemeinschaft zunächst eine Außenseiterposition war – ›welche Rolle fehlt noch, die nur ich mit meinem Fachwissen ausfüllen kann?‹ –, bevor ihr Dashboard zur zentralen Referenz der ganzen Fachwelt wurde."
      },
      {
        titel: "Wenn die Sehnsucht nach Zugehörigkeit auf ganzer Linie scheitert (Schattenform)",
        beschreibung: "In der destruktivsten Ausprägung führt das lebenslange Gefühl des Ausgeschlossenseins nicht zu Kunst oder produktiver Abgrenzung, sondern zu einer Verzweiflung, die sich nach außen in zerstörerischer Wut entlädt.",
        beleg: "Elliot Rodger: ›Ein Panzer aus Stolz, tief innen eine unerträgliche Sehnsucht nach Zugehörigkeit, und kein Weg, diese beiden Pole zu versöhnen … Er beobachtete andere Jugendliche beim Dazugehören und verstand nicht, warum er keinen Zugang fand.‹ Wichtig: Dies ist der einzige bekannte Fall dieser Art unter den SO4-Porträts dieses Kompasses – eine seltene, tragische Extremform, keine typische Ausprägung."
      }
    ]
  },
  SE4: {
    tier: "Taube",
    kernthema: "Tiefes Gefühlsleben, das nicht zur Schau gestellt, sondern still, zäh und beharrlich getragen wird",
    beispiele: ["Sam Altman", "Lady Diana", "Tim Bendzko", "Adele", "Nicolas Cage", "Karoline Herfurth", "Clemens G. Arvay", "Paul McCartney", "Leo Tolstoi", "Nikola Tesla", "David Berkowitz", "Derek Goodwin", "Honoré de Balzac", "Andreas", "T. E. Lawrence", "Vincent van Gogh", "Miguel de Unamuno", "Ludwig Göransson", "Charlotte Wells", "June Carter Cash", "Peter Gabriel", "Virginia Woolf", "Sally Rooney"],
    fingerabdruecke: [
      {
        titel: "Tiefes Gefühlsleben, das nicht öffentlich zur Schau gestellt, sondern still verarbeitet wird",
        beschreibung: "Anders als bei den lauteren Vierer-Subtypen zeigt sich der innere Schmerz oder die innere Tiefe kaum nach außen. Die Verarbeitung geschieht in stiller, oft jahrzehntelanger Beharrlichkeit – ohne Applaus für das eigene Ringen zu suchen.",
        beleg: "Sam Altman und Leo Tolstoi werden fast wortgleich beschrieben: ›Sie trägt ihr tiefes Gefühlsleben nicht zur Schau, sondern verarbeitet es in stiller, oft jahrzehntelanger Beharrlichkeit. Sie sucht keinen Applaus für ihr inneres Ringen‹; Paul McCartney, über dessen ›tiefstes Inneres man erstaunlich wenig weiß‹, obwohl er über sechzig Jahre öffentlich wirkte; Clemens G. Arvay, dessen Werk ›kein Drama, keine Selbstinszenierung, aber eine Botschaft, die trägt und bleibt‹ war; Derek Goodwin, dessen Standardwerke über Tauben, Krähen und Prachtfinken Generationen von Ornithologen prägten, während er selbst als ›stiller Experte im Hintergrund‹ so unsichtbar blieb, dass sich von ihm kaum ein Foto findet; Ludwig Göransson, dessen Filmmusik zu ›Black Panther‹ und ›Oppenheimer‹ zwei Oscars und globale kulturelle Wirkung einbrachte, während sein eigener Name den meisten Zuschauern unbekannt bleibt – Bedeutung ohne Sichtbarkeit; Adele, die im Alltag als humorvoll und bodenständig beschrieben wird, während der Schmerz, aus dem ihre größten Songs entstehen, im Privaten verarbeitet wird, bevor er auf die Bühne kommt – ›man klagt nicht öffentlich, man schreibt ein Album‹; Lady Diana, die ihre über Jahre andauernde Bulimie so vollständig hinter der makellosen öffentlichen Fassade verbarg, dass selbst ihr nächstes Umfeld lange nichts Genaues davon wusste, und erst 1995 selbst öffentlich darüber sprach; Charlotte Wells, die den frühen Verlust ihres Vaters fast zwei Jahrzehnte lang nicht öffentlich verarbeitete und bis heute nicht bestätigt, wie viel ihres gefeierten Films ›Aftersun‹ tatsächlich autobiografisch ist; Andreas, der Erstberufene der Jünger, der ›den Zwölf immer dabei, aber selten im Mittelpunkt‹ war und sein größtes Erlebnis nie herausstellte: ›Ich war der Erste, der ihn erkannt hat. Und das reicht.‹"
      },
      {
        titel: "Zähigkeit trotz Verletzlichkeit – trägt weiter, kehrt zurück, wo andere aufgeben würden",
        beschreibung: "Die zarte, empfindsame Erscheinung täuscht über eine erhebliche innere Ausdauer hinweg: Der Weg wird auch durch Sturm und Rückschläge fortgesetzt, nicht weil Angst fehlt, sondern weil eine tiefe Kenntnis der eigenen Richtung trägt.",
        beleg: "Lady Diana: ›Die Taube ist zäh: Sie findet ihren Weg auch über weite Strecken, auch durch Sturm‹; Tim Bendzko: ›Sie kehrt zurück. Nicht weil sie keine Angst kennt, sondern weil sie weiß, wohin sie gehört … Das ist die Taube: Sie trägt das Gewicht – und sie singt trotzdem‹; Nicolas Cage: ›Zäher, als sie wirkt, ihre größte Kraft liegt darin, sich trotz innerer Verletzlichkeit immer wieder neu aufzurichten‹; Nikola Tesla, der sein Lebenswerk am Wardenclyffe Tower verlor und dennoch bis zuletzt an dessen Richtigkeit festhielt – bis zuletzt fand er, fernab jeder menschlichen Nähe und trotz einer fortschreitenden Zwangsstörung, seine tiefste Bindung an eine einzelne weiße Taube; Honoré de Balzac, der über Jahrzehnte nächtelang, oft fünfzehn bis achtzehn Stunden am Stück, gegen drückende Schulden anschrieb – kein Aufgeben trotz ständiger finanzieller Not, sondern ein zähes Weiterschreiben, das erst mit seinem Tod endete, fünf Monate nach der siebzehn Jahre lang erhofften Hochzeit mit Ewelina Hańska; T. E. Lawrence, der als britischer Verbindungsoffizier wochenlang durch die Wüste ritt, Hunger und Erschöpfung körperlich mit den arabischen Kämpfern teilte, statt aus der Distanz zu befehligen – und der nach dem Krieg dieselbe stille Zähigkeit nach innen kehrte, in einem über Jahre selbst organisierten Bestrafungsritual, statt über die erlittene Erniedrigung von Deraa zu sprechen; June Carter Cash, die 1967/68 gemeinsam mit Familie und Freunden Johnny Cashs Tabletten- und Alkoholabhängigkeit entgegentrat und ihn danach über Jahre durch seine Genesung begleitete – eine stille, zähe Last, die sie nie zum Zentrum der eigenen Geschichte machte."
      },
      {
        titel: "Vollständiges inneres Durchleben, bevor nach außen getreten wird",
        beschreibung: "Bevor etwas sichtbar wird – ein Werk, eine Haltung, eine Entscheidung –, wird es zunächst vollständig innerlich durchlebt, beobachtet und verarbeitet. Kein spontanes Handeln, sondern ein bewusstes Landen erst dann, wenn der innere Prozess abgeschlossen ist.",
        beleg: "Karoline Herfurth: ›Diese Taube landet nicht gleich. Sie kreist zuerst. Sie beobachtet, nimmt wahr, trägt innerlich, was sie gesehen hat – und landet dann genau dort, wo sie gebraucht wird‹; Leo Tolstois lebenslanges Tagebuch-Ritual ›der schonungslosen Selbstbeobachtung‹, das zur ›Grundlage seines gesamten literarischen Werks‹ wurde; Vincent van Gogh, der als Autodidakt hunderte Werke Millets kopierte, sich einen eigenen Perspektivrahmen baute und Delacroix' Farbtheorie so gründlich studierte, dass er eigene Farbkreise in seinen Briefen skizzierte – kein spontaner Gefühlsausbruch, sondern ein über Jahre erarbeitetes, in sich stimmiges malerisches System; Miguel de Unamuno, der sich Deutsch, Dänisch und weitere Sprachen größtenteils selbst beibrachte, um Kierkegaard und Hegel im Original zu lesen, und der seine lebenslange Frage nach der eigenen Sterblichkeit nie vorschnell beantwortete, sondern in Dutzenden Büchern immer wieder neu durchdachte, ohne je eine endgültige Antwort zu beanspruchen; Peter Gabriel, dessen selbst entworfene Bühnenfiguren – vom Fuchskopf bis zum Slipperman – stets vollständig im Alleingang ausgearbeitet waren, bevor sie ohne Vorwarnung auf der Bühne erschienen, und der zwischen seinen Soloalben regelmäßig vier bis zehn Jahre verstreichen ließ, weil einzelne Stücke so lange verworfen und neu aufgebaut wurden, bis sie seinem inneren Bild vollständig entsprachen; Sally Rooney, die als Wettkampf-Debattiererin ein scharfes analytisches Denksystem trainierte, ihre Romane auf einem durchdachten theoretischen Gerüst aufbaut und bei Schreibblockaden gezielt zu philosophischen Werken greift, um einen Weg zum Romanschluss zu finden, statt einfach weiterzuschreiben."
      },
      {
        titel: "Wenn die innere Last überwältigt – von radikaler Selbstbehauptung bis zur Selbstauflösung (Schattenform)",
        beschreibung: "Dieselbe Tiefe und Empfindsamkeit, die sonst zu großer schöpferischer Kraft führt, kann in Extremfällen zu radikaler Identitätsabwehr, zur völligen Erschöpfung oder – in der destruktivsten Form – zu einem psychotischen Bruch mit der eigenen inneren Stimme werden.",
        beleg: "Nicolas Cage, der sich mit einem neuen Namen ›mit aller Kraft gegen die Auflösung der eigenen Identität in einer übermächtigen Familientradition‹ wehrte; Clemens G. Arvay, der sich 2022 das Leben nahm – ›die Taube, die anderen den Weg zeigt, hat ihren eigenen manchmal verloren‹; David Berkowitz, der seine Taten einer externen, dämonischen Stimme zuschrieb; Virginia Woolf, die nach jahrzehntelangen wiederkehrenden depressiven Episoden 1941 zwei klar formulierte Abschiedsbriefe schrieb und sich in der Ouse ertränkte – ein letzter Akt, der noch einmal von derselben stillen, durchdachten Klarheit getragen war, mit der sie ihr ganzes Leben lang geschrieben hatte. Wichtig: Arvay, Berkowitz und Woolf stehen für sehr unterschiedliche, seltene Extremformen – Verzweiflung und Gewaltverbrechen dürfen hier nicht gleichgesetzt werden, keines von ihnen ist die typische Ausprägung der SE4 in diesem Kompass."
      }
    ]
  },
  SX3: {
    tier: "Pfau",
    kernthema: "Unmittelbare Präsenz und Magnetismus – ohne Berechnung, aber mit ganzer Wirkung",
    beispiele: ["Brad Pitt", "Kai Pflaume", "Lena Meyer-Landrut", "Brigitte Bardot", "Meg Ryan", "Marilyn Monroe", "Dieter Bohlen", "Prof. Dr. Marlene Zuk", "Heidi Klum", "Dolly Parton", "Diane Downs", "Luka Magnotta", "Richard Ramírez", "Judas Iskariot"],
    fingerabdruecke: [
      {
        titel: "Unmittelbare, magnetische Präsenz statt berechneter Inszenierung",
        beschreibung: "Die Wirkung entsteht nicht durch geplante Strategie, sondern durch eine Präsenz, die sich der Analyse entzieht – man kann sich ihr kaum entziehen, ohne dass erkennbar wäre, wie genau sie entsteht.",
        beleg: "Brad Pitt: ›Der Pfau, dessen Wirkung nicht aus Berechnung entsteht, sondern aus reiner, unmittelbarer Präsenz. Er muss nichts beweisen, er muss nur da sein‹; Brigitte Bardot: ›Ein Tier, das sein Gefieder nicht zur Berechnung entfaltet, sondern weil Pracht sein Wesen ist‹; Marilyn Monroe: ›Ihr Auftritt war nicht Technik, sondern eine Präsenz, der sich niemand entziehen konnte.‹; Judas Iskariot, der ›früh aufgefallen war – nicht durch Lautstärke, nicht durch Wunder, sondern durch Zugkraft. Wenn er sprach, hörten Menschen zu, nicht weil er drängte, sondern weil er den Ton traf, den andere hören wollten.‹"
      },
      {
        titel: "Strahlt, ohne es selbst bewusst einzusetzen",
        beschreibung: "Bei einem Teil der Fälle geschieht die Wirkung fast unbewusst – die Person selbst ist sich der eigenen Anziehungskraft kaum bewusst, was den Effekt oft noch verstärkt.",
        beleg: "Kai Pflaume: ›Er strahlt nicht, weil er strahlen muss. Er strahlt, weil sein Licht von innen kommt‹; Lena Meyer-Landrut: ›Der Pfau entfaltet sein Rad nicht auf Befehl. Er tut es, weil es sein Wesen ist. Was ihn bisweilen auszeichnet: Er weiß es selbst nicht immer‹ – ›Sie zieht an, ohne zu verführen. Sie strahlt, ohne zu inszenieren.‹; Meg Ryan, die als ›Mädchen von nebenan‹ nie unnahbar wirkte und dennoch unwiderstehlich war – der Pfau, der sein Rad entfaltet, ohne es zu wissen."
      },
      {
        titel: "Die bewusste, vollständige Darbietung als Kunstform für andere",
        beschreibung: "Am anderen Ende desselben Spektrums steht die ganz bewusst eingesetzte, vollständig ausgespielte Selbstdarstellung – kein privates Vergnügen, sondern eine gezielte Vorstellung, die genau weiß, welche Wirkung sie erzielen will.",
        beleg: "Dieter Bohlen: ›Der Pfau ist das einzige Tier, das seinen schönsten Moment vollständig für andere entfaltet. Das Rad des Pfaus ist kein privates Vergnügen. Es ist eine Vorstellung … Der Pfau weiß genau, was er ist – und er versteckt es nicht.‹; Prof. Dr. Marlene Zuk, die komplexe biologische Zusammenhänge bewusst glasklar und für ein breites Publikum aufbereitet – eine Wissenschaft, die nicht nur verstanden, sondern sichtbar dargeboten werden will; Heidi Klum, die sich auf ihrer eigenen Halloween-Party mit Hilfe von zehn Cirque-du-Soleil-Artisten wortwörtlich selbst in einen überlebensgroßen Pfau verwandelte – die vollständige, aufwendig durchdachte Darbietung als jährlich wiederkehrendes Ritual; Dolly Parton, deren gesamtes Erscheinungsbild – Perücke, Strass, betont weibliche Silhouette – eine bewusst gebaute Kunstfigur ist, auf den Punkt gebracht mit ihrem eigenen Satz: ›Es kostet eine Menge Geld, so billig auszusehen.‹"
      },
      {
        titel: "Das perfekte Ideal oder die perfekte Inszenierung wird zur mörderischen Fixierung (Schattenform)",
        beschreibung: "In der destruktiven Ausprägung wird derselbe Drang nach vollständiger, überwältigender Selbstdarstellung zu etwas Zerstörerischem: ein Bild von sich selbst wird um jeden Preis verteidigt oder inszeniert – auch gegen das eigene Gewissen oder mit tödlicher Konsequenz.",
        beleg: "Diane Downs, die ihre eigenen Kinder tötete, ›um für einen Mann das perfekte, ungebundene Ideal zu sein‹; Luka Magnotta, dessen Taten als ›extreme Selbstinszenierung des Schreckens‹ beschrieben werden – Video-Veröffentlichung inklusive; Richard Ramírez, dessen Auftreten im Gerichtssaal – ›das Victory-Zeichen, das Pentagramm auf der Handfläche, der Blick für die Kameras‹ – die Performance bis in den eigenen Prozess hinein fortsetzte, während sein tatsächlicher Tod 2013 an einem Lymphom, weitgehend ohne mediale Inszenierung, in scharfem Kontrast zu diesem jahrzehntelang gepflegten Bild stand. Wichtig: Diese drei Fälle sind seltene Extremformen, keine typische Ausprägung der SX3 in diesem Kompass."
      }
    ]
  },
  SE3: {
    tier: "Waschbär",
    kernthema: "Können statt Glänzen – die natürliche Maske, die aus Wenigem ein funktionierendes System baut (Naranjo: der Kontratyp der Drei)",
    beispiele: ["Wolodymyr Selenskyj", "Sadhguru", "Joseph Haydn", "Lang Lang", "Penélope Cruz", "David L. Rathmer", "Kathrin Bauerfeind", "Tony Shalhoub", "Anna Anderson", "Judit Polgár", "Madame Tussaud", "Osho", "Sterling North", "Dr. Annika von Mutius", "Changpeng Zhao", "Cheyenne Ochsenknecht", "Johnny Cash", "Michael Franzese", "Pablo Escobar", "Tom Keating", "Samuel Bankman-Fried", "Ruja Ignatova", "Henri Désiré Landru", "Belle Gunness", "Karla Homolka", "Bernie Madoff", "Salome"],
    fingerabdruecke: [
      {
        titel: "Unscheinbare Fassade statt Rampenlicht – Können statt Glänzen (Naranjo: Kontratyp)",
        beschreibung: "Anders als die sozialen und sexuellen Dreier sucht dieser Subtyp keine Bühne. Naranjo nannte ihn den ›Kontratyp‹ der Drei: Statt Selbstinszenierung zeigt sich Bescheidenheit, Bodenständigkeit, ein bewusstes Vermeiden des Rampenlichts – während die Energie darunter dieselbe bleibt.",
        beleg: "Kathrin Bauerfeind: ›Kein lauter Auftritt, kein Glanz, keine Bühne … Der Waschbär wühlt nicht im Rampenlicht – er schafft sich sein eigenes Territorium‹; Tony Shalhoub und Judit Polgár werden fast wortgleich beschrieben: ›Ein Tier, das man leicht unterschätzt … arbeitet mit feinen, geschickten Händen im Verborgenen‹; Joseph Haydn: ›kein Wunderkind wie Mozart, kein zorniger Titan wie Beethoven‹, sondern drei Jahrzehnte loyaler Dienst. Sterling North, jahrzehntelang Literaturredakteur im Hintergrund großer Zeitungen, während sein eigenes Buch ›Rascal‹ im Stillen zum Welterfolg wurde: ›Der Mann am Schreibtisch mit der Schreibmaschine wirkt nicht wie eine öffentliche Figur, sondern wie ein stiller, arbeitsamer Handwerker der Sprache.‹ Als Warnung dient Wolodymyr Selenskyj: ›Ein Schauspieler, der eine Rolle spielt, bis er selbst nicht mehr weiß, wo die Rolle endet und er anfängt – das ist die Falle der selbsterhaltenden Drei.‹ Salome, die in Kana ›still, dezent, an der Seite‹ blieb, während ihr Blick jedes Detail erfasste – bis Jesus, ohne jede Inszenierung, genau die Wirkung erzielte, die sie selbst nie ohne Aufwand erreicht hatte: ›Wer ist dieser Mann, der wirken kann, ohne zu wirken?‹"
      },
      {
        titel: "Aus wenig oder aus dem Nichts ein funktionierendes System bauen",
        beschreibung: "Statt auf vorhandene Ressourcen oder Startvorteile zu warten, entsteht aus begrenzten Mitteln, oft aus purer Findigkeit, ein tragfähiges, manchmal jahrzehntelang funktionierendes System.",
        beleg: "Osho, der ›aus einem staubigen Grundstück in Poona einen internationalen Kommune-Betrieb‹ und später eine ganze Stadt mit eigenem Flughafen aufbaute; Madame Tussaud, die aus einem Handwerk ›ein Weltunternehmen‹ machte, das ›fast zweihundert Jahre nach ihrem Tod in Dutzenden Städten‹ weiterbesteht; Sadhguru: ›Der Waschbär macht aus dem Wenigen viel – leise, effizient, ohne Aufhebens. Und dann schaut man hin, und er hat die ganze Wüste bepflanzt.‹; Dr. Annika von Mutius, die statt auf lautes Marketing über Jahre auf die technische Substanz eines KI-Matching-Systems setzte, bevor Empion mit Konzernen wie Procter & Gamble zusammenarbeitete – Aufmerksamkeit, die der Substanz folgte, nicht umgekehrt; Changpeng Zhao, der Binance nicht über öffentlichen Auftritt, sondern über technische Infrastruktur zur größten Kryptobörse der Welt aufbaute – ein radikal eigener Weg außerhalb bestehender Regelwerke, still errichtet statt inszeniert; Johnny Cash, der aus den Baumwollfeldern der Siedlungskolonie Dyess kommend über fünf Jahrzehnte eine der stabilsten Karrieren der Country-Musik aufbaute – trotz jahrzehntelanger Sucht und mehrerer Karriereeinbrüche eine Struktur, die auch schwerste Rückschläge überstand."
      },
      {
        titel: "Jahrelange, disziplinierte Übung im Verborgenen, bevor sich Meisterschaft zeigt",
        beschreibung: "Fähigkeiten, die später mühelos wirken, entstehen fast nie über Nacht, sondern über Jahre stiller, oft schmerzhaft konsequenter Wiederholung, lange bevor eine Öffentlichkeit davon erfährt.",
        beleg: "Lang Lang: ›Der Waschbär lernte früh: Können entsteht nicht durch Talent allein, sondern durch endlose, oft schmerzhafte Wiederholung‹; Judit Polgár, deren Meisterschaft das Ergebnis ›Tausender Trainingsstunden am Brett, lange bevor die Öffentlichkeit von ihr wusste‹ war; Tom Keating, der über zwei Jahrzehnte mehr als 2.000 Gemälde im Stil von rund 100 Meistern schuf – Handwerksbeherrschung, die er bewusst gegen den Kunstmarkt richtete; Penélope Cruz, die sich in klassischem Ballett und dramatischer Kunst ausbilden ließ, bevor sie überhaupt vor die Kamera trat – jahrelanges Training als Fundament, nicht als Fußnote; David L. Rathmer, der mit acht Jahren an das Enneagramm herangeführt wurde und daraus über fünfzehn Jahre empirischer Forschung machte, lange bevor daraus eine eigenständige, international eingesetzte Methode wurde; Bryn Kenney, der mit sechzehn Jahren online Poker zu spielen begann, ›lange bevor ihn irgendjemand kannte‹, und dessen jahrelange, im Verborgenen erarbeitete Spielstärke erst 2019 mit dem größten Einzelgewinn der Pokergeschichte sichtbar wurde."
      },
      {
        titel: "Erreichte Sichtbarkeit bewusst gegen Substanz eintauschen",
        beschreibung: "Manche SE3w4 kommen nicht aus der Unauffälligkeit und bleiben dort – sie erreichen zunächst durchaus mediale Sichtbarkeit, verlassen diese dann aber aktiv, um sich stattdessen über konkrete, handfeste Arbeit zu beweisen. Die Bewegung verläuft hier umgekehrt: erst Bühne, dann der bewusste Wechsel zum eigenen, stillen Territorium.",
        beleg: "Cheyenne Ochsenknecht, die mit fünfzehn erstmals ein Magazincover zierte und mit sechzehn international modelte, dann aber bewusst in die Steiermark zog, um mit ihrem Mann einen Chianina-Rinderhof aufzubauen – ›Wir sind echte Bauern‹, wie sie selbst festhielt, als explizite Abgrenzung vom früheren It-Girl-Image."
      },
      {
        titel: "Die natürliche Maske wird zur bewussten Täuschung – harmlose Fassade verdeckt Betrug oder Verbrechen (Schattenform)",
        beschreibung: "In der destruktiven Ausprägung wird genau dieselbe unauffällige, vertrauenswürdig wirkende Fassade zum perfekten Werkzeug: Wer nicht glänzen will, gerät nicht in Verdacht – und kann diese Unauffälligkeit über Jahre für Betrug in großem Stil oder Schlimmeres nutzen.",
        beleg: "Bernie Madoff: ›Der SE3er inszeniert sich nicht laut und glamourös … sondern still, seriös, vertrauenswürdig‹ – über 20 Jahre größter Anlagebetrug der Geschichte, und dieselbe Diskretion begleitete ihn bis in seine letzte, unheilbare Nierenerkrankung, über die kaum mehr an die Öffentlichkeit drang als das medizinisch Notwendige für seine Gesuche um vorzeitige Haftentlassung; Belle Gunness, die ›täuschend harmlos‹ wirkte: ›Sie bat um Hilfe. Sie schrieb liebevolle Briefe … Und sie begrub sie in ihrem Schweinestall‹; Ruja Ignatova und Samuel Bankman-Fried als moderne Varianten desselben Musters im Finanzbetrug; Anna Anderson, die sich ›aus fast nichts eine Existenz baute‹ – nur dass das Nichts eine fremde Identität war; Pablo Escobar, dessen gleichzeitiges Wirken als Volksheld, Wohltäter und skrupelloser Mörder zeigt, wie weit eine unauffällige, sogar wohltätige Fassade Verbrechen verdecken kann; Michael Franzese, der mit einem raffinierten Steuerbetrug bis zu fünf Millionen Dollar pro Woche erwirtschaftete, ohne dass sein Auftreten das je verriet; Henri Désiré Landru, der ›Blaubart von Paris‹, ein unscheinbarer, gepflegter Mann, der über Kontaktanzeigen wohlhabende Witwen anlockte, ohne jede öffentliche Inszenierung; Karla Homolka, die die Öffentlichkeit wegen ihres gepflegten Äußeren und ihrer strahlend weißen Hausfassade ›Ken und Barbie‹ nannte. Wichtig: Die Mehrheit der SE3 in diesem Kompass zeigt dieses Muster nicht – es handelt sich um eine Extremform derselben stillen Wirksamkeit, keine typische Ausprägung."
      }
    ]
  },
  SX2: {
    tier: "Kamel",
    kernthema: "Ein ganzes Publikum in eine einzige, persönliche Begegnung verwandeln",
    beispiele: ["Monika Gruber", "Dr. Bernard Faye", "Matthias Schweighöfer", "Milow", "Pamela Reif", "Anastasiia Metelkina", "Braco", "Elvis Presley", "Pamela Smart", "Maria Magdalena"],
    fingerabdruecke: [
      {
        titel: "Intimität im Großen – aus vielen wird ein Einzelner",
        beschreibung: "Die Fähigkeit, sich auch vor einem riesigen Publikum so zu geben, dass jeder Einzelne das Gefühl bekommt, persönlich gemeint zu sein – Verführung nicht als Masche, sondern als natürliche Frequenz.",
        beleg: "Monika Gruber, deren Programme ›Hallen mit tausenden Menschen füllen‹ und die dennoch ›Intimität im Großen schafft: Sie macht aus einem Publikum eine einzige persönliche Begegnung‹; Elvis Presley, der ›nicht für ein Publikum sang, er sang für jeden Einzelnen darin‹; Braco, ›The Gazer‹, dessen bloßer Blick vor Tausenden ›das Gefühl, gesehen zu werden‹ erzeugt; Pamela Reif, die millionenfach auf Bildschirmen vermittelt: ›Ich begleite dich.‹"
      },
      {
        titel: "Trägt und gibt sich vollständig, ohne sich aufzudrängen",
        beschreibung: "Hingabe zeigt sich nicht als lautes Werben, sondern als beständiges, geduldiges Mittragen – im Dienst einer Verbindung, eines Weges, eines Partners, ohne dabei viel zurückzuverlangen.",
        beleg: "Matthias Schweighöfer, der als Regisseur ›seine Crew mitnimmt, als wäre jedes Set eine Gemeinschaft‹: ›Das Kamel zieht nicht einfach durch die Wüste. Es sorgt dafür, dass alle ankommen‹; Milow, der einen harten Song ›sanft weitertrug, bis er ankam‹; Anastasiia Metelkina, deren Paarlauf-Karriere buchstäblich auf gegenseitigem Tragen beruht: ›Zwei Körper müssen sich gegenseitig tragen … ein einziger Vertrauensbruch bedeutet den Sturz‹; Maria Magdalena, die unter dem Kreuz blieb, als andere flohen – ›Ich bleibe. Auch wenn du gehst‹ – und die half, den Leichnam zu salben, nicht aus Pflicht, sondern weil Nähe für sie nie an Bedingungen geknüpft war."
      },
      {
        titel: "Speichert Energie, um sie dann in einem einzigen, vollständigen Ausbruch zu geben",
        beschreibung: "Zurückhaltung ist kein Mangel an Gefühl, sondern Vorbereitung: Die Intensität wird gesammelt und dann, wenn sie gebraucht wird, ohne jede Zurückhaltung vollständig freigesetzt.",
        beleg: "Monika Gruber: ›Das Kamel speichert: Energie, Wasser, Geduld – und wenn es schließlich trinkt, trinkt es auf einmal bis zu 150 Liter. Was sie fühlt, fühlt sie vollständig. Was sie gibt, gibt sie ganz‹; Elvis: ›Das Kamel kennt die Wüste der Anfänge. Und es gibt trotzdem alles, sobald es gebraucht wird‹; Dr. Bernard Faye, dessen jahrzehntelange, akribische Forschungsarbeit zum weltweit führenden Kamelexperten machte – dasselbe Muster wie bei mehreren anderen Tierforscher-Porträts dieses Kompasses: Wer diese Energie erforscht, trägt sie oft selbst in sich."
      },
      {
        titel: "Verführung als Machtinstrument, das sich abrupt gegen das Objekt der Zuwendung wenden kann (Schattenform)",
        beschreibung: "In der destruktiven Ausprägung wird dieselbe vollständige, intensive Hingabe zum Druckmittel: Bleibt die erwartete Gegenleistung – Nähe, Anerkennung, Bindung – aus, kann aus derselben Zuwendung eine ebenso vollständige, kompromisslose Kehrtwende werden.",
        beleg: "Pamela Smart: ›Das Kamel gibt alles … Aber es ist kein zahmes Tier. Wer es unterschätzt, wer glaubt, es dauerhaft ausnutzen zu können, erlebt eine andere Seite: das Kamel beißt, spuckt, bricht aus.‹ Sie gab einem 15-Jährigen ›das Gefühl, das Wichtigste auf der Welt zu sein‹ – ›und als sie bekam, was sie brauchte, war ihre Gabe zugleich das giftigste Mittel, das sie einsetzen konnte.‹ Wichtig: Dies ist die einzige bekannte Extremform unter den SX2-Porträts dieses Kompasses, keine typische Ausprägung."
      }
    ]
  },
  SO2: {
    tier: "Golden Retriever",
    kernthema: "Zuwendung, die nicht dem Einzelnen, sondern der ganzen Gemeinschaft gilt",
    beispiele: ["Jesus Christus", "Mutter Meera", "Prof. Dr. Sucharit Bhakdi", "Barack Obama", "Bob Marley", "Douglas Rushkoff", "Micky Beisenherz", "Dr. Katharina Tempel", "Muhammad Ali", "Ranga Yogeshwar", "Anastasia Barner", "David Lurey", "Joe Navarro", "Jonathan Groff", "Abd al-Fattah as-Sisi", "Dr. Albert Schweitzer", "Mrs. Winifred Charlesworth", "Marisa Abela", "Hannah Emde", "Julius Caesar", "Napoleon Bonaparte", "Alexander der Große", "Will Smith", "Usher", "Alicia Keys", "Ashton Kutcher", "Ayo Edebiri", "Bruno Mars", "Carl Weathers", "Omar Sy", "Nina Chuba", "Zoe Saldaña", "Kamala Harris", "Jack Unterweger", "Jim Jones", "Cedric Maake", "Osama bin Laden"],
    fingerabdruecke: [
      {
        titel: "Zuwendung, die sich nicht auf Einzelne beschränkt, sondern der ganzen Gemeinschaft gilt",
        beschreibung: "Anders als bei den anderen Zweier-Subtypen richtet sich die Fürsorge nicht auf die eine Beziehung oder die eigene Familie, sondern auf ein Kollektiv – eine Gemeinde, ein Publikum, eine Nation, alle, die gerade in Reichweite sind.",
        beleg: "Jesus Christus: ›Wo die sexuelle Zwei die eine Person verführt und die selbsterhaltende Zwei die eigene Familie versorgt, richtet sich die soziale Zwei an die Gemeinschaft insgesamt‹; Mutter Meera, die ›über Jahrzehnte täglich hunderte fremde Menschen empfing‹; Zoe Saldaña: ›Ein Tier, das seine Wärme nicht auf eine Person beschränkt, sondern jedem im Rudel gilt‹; Nina Chuba, deren Nähe zu ihrem Publikum ›echt‹ wirkt, ›weil Wärme ihr Wesen ist‹; Mrs. Winifred Charlesworth, die den ersten offiziellen Rassestandard für den Golden Retriever verfasste – ein Dokument im Dienst einer ganzen Zuchtgemeinschaft, nicht eines einzelnen Hundes; Will Smith, der das Publikum nicht nur als Zuschauer brauchte, sondern als Empfänger seiner Energie – die soziale Zwei lebt nicht für sich, sie lebt für die anderen; Hannah Emde, die mit 25 den Verein Nepada Wildlife e.V. gründete und heute als Moderatorin von ›Terra X: Faszination Erde‹ ein Millionenpublikum erreicht – ›was als persönliches Engagement in einem einzelnen Verein begann, wird zur Bühne, auf der Artenschutz einer breiten Öffentlichkeit nahegebracht wird‹; Usher, dessen Album ›Confessions‹ eigene Untreue und Schuld zum zentralen Thema machte, nicht als privates Geständnis, sondern als Brücke zu einem möglichst breiten Publikum; Alicia Keys, deren musikalischer Erfolg von Anfang an mit der Gründung von Keep a Child Alive für von HIV betroffene Familien verbunden war – Ruhm als Plattform für eine oft übersehene Gruppe von Menschen; Ashton Kutcher, der über ein Jahrzehnt hinweg aus einem einzelnen Fernsehbeitrag über Kinderhandel eine technologiegestützte Organisation aufbaute, die von Polizeibehörden weltweit genutzt wird; Ayo Edebiri, die jahrelang als Autorin im Hintergrund für ganze Serien-Ensembles arbeitete, bevor sie selbst vor die Kamera trat – Erfolg als gemeinsames Projekt, nicht als Alleingang; Bruno Mars, der zunächst Hits für andere Interpreten schrieb, bevor der eigene Ruhm kam, und der mit Silk Sonic bewusst eine geteilte, gleichberechtigte Bühne mit Anderson .Paak aufbaute; Carl Weathers, der in vier Rocky-Filmen nie die Hauptfigur war und dennoch die gesamte Reihe trug – seine Energie diente konsequent dazu, die Geschichte um ihn herum größer zu machen, statt sie an sich zu ziehen; Omar Sy, dessen Karriere als Duo mit Fred Testot begann und dessen internationaler Durchbruch untrennbar mit seinem Filmpartner François Cluzet verbunden ist – Sichtbarkeit, die im Miteinander entsteht, nicht im Alleingang; Bob Marley, dessen Songs sich nie an eine einzelne Person richteten, sondern an die Unterdrückten insgesamt – ›eine Botschaft, die von Trenchtown aus jeden Kontinent erreichte, ohne je ihre Wurzeln zu verleugnen‹; Douglas Rushkoff, dessen über 25 Bücher zu Medien und Technologie nie einer einzelnen Zielgruppe galten, sondern dem Versuch, einer ganzen Gesellschaft Werkzeuge zum Verständnis der eigenen digitalen Umwelt an die Hand zu geben; Micky Beisenherz, dessen täglicher Podcast ein Millionenpublikum verlässlich durch das Weltgeschehen führt – ›keine distanzierte Nachrichtenlektüre, sondern tägliche Einordnung mit erkennbarer eigener Haltung‹; Dr. Katharina Tempel, deren Dissertation mit über 1.500 Studienteilnehmenden zum methodischen Fundament einer Mission wurde, die heute monatlich mehrere hunderttausend Menschen erreicht; Muhammad Ali, dessen Widerstand gegen den Militärdienst 1967 nie der eigenen Sicherheit galt, sondern der Ungerechtigkeit gegenüber einer ganzen Bevölkerungsgruppe; Ranga Yogeshwar, der mit ›Quarks & Co‹ über Jahrzehnte hinweg nie an eine einzelne Zielgruppe dachte, sondern an ein möglichst breites Publikum, dem komplexe Wissenschaft verständlich gemacht werden sollte; Anastasia Barner, die mit FeMentor ein Format schuf, das explizit den Wissensaustausch zwischen ganzen Generationen organisiert, statt nur innerhalb der eigenen Altersgruppe zu wirken; David Lurey, der mit fast dreihundert Online-Kursen und internationalen Festivals ein Publikum erreicht, das weit über die physisch Anwesenden seiner Kreise hinausgeht; Joe Navarro, dessen als sprachloser Flüchtlingsjunge überlebensnotwendig erlernte Körpersprache-Kompetenz zu einem Bestseller wurde, der in 27 Sprachen Millionen Menschen zugänglich gemacht wurde; Jonathan Groff, der sich 2009 mitten im National Equality March öffentlich outete – ein bewusst öffentlicher, kollektiver Rahmen statt eines rein privaten Bekenntnisses."
      },
      {
        titel: "Persönliche Nähe als Führungsinstrument – Verbindung statt Distanz zur Machtsicherung",
        beschreibung: "Führung entsteht nicht durch Einschüchterung oder Distanz, sondern durch das gezielte Investieren in unzählige einzelne Beziehungen, die sich am Ende zu enormer kollektiver Bindung summieren.",
        beleg: "Julius Caesar: ›Wo ein sparsamer Stratege Rücklagen gebildet hätte, investierte die soziale Zwei in Beziehung. Das Kapital, das er aufbaute, war kein Geld – es war Zuneigung, Loyalität‹ – und dessen wiederkehrende, von antiken Quellen bezeugte Anfälle er zeitlebens verschwieg, um das eigene Bild der Unverwundbarkeit nicht zu gefährden; Napoleon, der ›die Namen seiner Soldaten kannte, sie direkt ansprach‹; Alexander der Große, der ›Verwundete persönlich besuchte‹ – ›Verbindung schlägt Zwang‹ – und der noch auf dem Sterbebett, kaum noch sprachfähig, jeden einzelnen seiner Soldaten an sich vorbeiziehen ließ, um ihm ein letztes Zeichen zu geben; Barack Obama: ›Er tritt in einen Raum und lässt ihn größer werden.‹; Abd al-Fattah as-Sisi, der seine Machtübernahme nicht als Zwang, sondern als gemeinsame nationale Kraftanstrengung inszenierte – vom persönlichen Besuch eines koptischen Weihnachtsgottesdienstes bis zur Mitfinanzierung der neuen Hauptstadt durch Staatsanleihen an die eigene Bevölkerung: ›Nicht ich allein baue das Land auf – wir alle bauen es gemeinsam auf, unter meiner Führung.‹; Bob Marley, der 1978 beim One Love Peace Concert zwei erbitterte politische Rivalen mitten im Song auf die Bühne holte und ihre Hände gemeinsam über seinem Kopf in die Höhe hielt – keine Machtdemonstration, sondern der Versuch, ein zerrissenes Land allein durch eine gemeinsame Geste zu verbinden."
      },
      {
        titel: "Hinter der Warmherzigkeit steckt erhebliche innere Kraft, die sich zeigt, wenn es darauf ankommt",
        beschreibung: "Die zugewandte, weiche Erscheinung ist kein Mangel an Stärke, sondern die Oberfläche einer erheblichen Ausdauer und Entschlossenheit, die sichtbar wird, sobald echter Einsatz gefordert ist.",
        beleg: "Barack Obama: ›Er ist kein Schoßhund. Hinter der Wärme steckt eine erhebliche innere Kraft‹; Kamala Harris: ›Wenn es hart auf hart kommt, zeigt sich, dass hinter der Warmherzigkeit ein zäher Wille steckt‹; Marisa Abela, die ›den Raum liest, bevor sie ihn betritt‹; Albert Schweitzer, der auf dem Höhepunkt seines akademischen Erfolgs ein Medizinstudium begann, um als Arzt nach Afrika zu gehen: ›Er sieht, wo Not ist, und geht dorthin, selbst wenn er dafür alles zurücklässt.‹; Prof. Dr. Sucharit Bhakdi, der als einer der meistzitierten Mikrobiologen Deutschlands öffentlich gegen den wissenschaftlichen Mainstream seiner Zeit auftrat, nicht aus Aufmerksamkeitssuche, sondern weil er glaubte, es zu müssen."
      },
      {
        titel: "Kollektiver Stolz, der zur Vernichtungsinstanz kippt, wenn die eigene Bedeutung für die Gruppe bedroht wird (Schattenform)",
        beschreibung: "In der destruktiven Ausprägung wird derselbe Wunsch, für ein Kollektiv unentbehrlich zu sein, zu einer gefährlichen Dynamik: Wird die eigene Rolle als Beschützer oder Erlöser der Gruppe infrage gestellt, kann aus derselben Fürsorge kompromisslose, kollektive Zerstörung werden.",
        beleg: "Jim Jones, der Krankenhäuser und Suppenküchen aufbaute, bevor über 900 seiner Anhänger starben: ›Das Enneagramm erklärt, wie beides zusammengehört: die Güte und die Vernichtung‹; Osama bin Laden, dessen ›Stolz kein persönlicher war, sondern ein kollektiver: der Stolz als Beschützer und Retter der muslimischen Welt‹ – ›der Golden Retriever: loyal, warmherzig, zur Aufopferung für das Rudel bereit – und gefährlich, wenn er glaubt, seine Familie zu verteidigen‹; Jack Unterweger, der im Gefängnis zum gefeierten Literaten wurde und nach seiner Freilassung erneut mordete; Cedric Maake, hinter dessen Oberfläche als geselliger, scheinbar harmloser Mann eine Maschinerie aus Kontrollwillen und Gewalt gegen Menschen aller Hautfarben wirkte. Wichtig: Die überwiegende Mehrheit der SO2 in diesem Kompass zeigt dieses Muster nicht – es handelt sich um eine seltene Extremform, keine typische Ausprägung."
      }
    ]
  },
  SE2: {
    tier: "Flusspferd",
    kernthema: "Unentbehrlichkeit als Zugang zu Nähe – ruhige, verwurzelte Kraft statt lauter Selbstdarstellung",
    beispiele: ["Dr. Camille Fritsch", "J. J. Liu", "Franka Potente", "Lena Urzendowsky", "Margot Friedländer", "Søren Kierkegaard", "Greta Thunberg", "Gloria von Thurn und Taxis", "Jack Black", "Uli Hoeneß", "Ai Weiwei", "Carlos Santana", "Harald Glööckler", "Harnaam Kaur", "Ice Cube", "Jack Ma", "Jimi Blue Ochsenknecht", "Wilson Gonzalez Ochsenknecht", "Mr. T", "Mickey Rourke", "Monica Simpson", "Nate Dogg", "Nusrat Fateh Ali Khan", "Stromae", "Thomas Chaanhing", "Tracie D. Hall", "Quentin Tarantino", "Storm Reid", "Tom Kaulitz", "Tutty Tran", "Lebo M", "Lionel Boyce", "Lisa Antoni", "Loi", "Loni Hui", "Madeline Stuart", "Mariacarla Boscono", "Yayoi Kusama", "Frida Kahlo", "Natascha Kampusch", "Marie Antoinette", "Isabella Briggs", "Wolfgang Amadeus Mozart", "Nero", "Jan Ullrich", "Oprah Winfrey", "Armin Rohde", "Harvey Weinstein", "Jonathan Meijer", "Ángel Reséndez", "Tommy Lynn Sells", "Jeanne Weber", "Peter Sutcliffe", "Anna Delvey", "Buster Murdaugh", "John Wayne Gacy", "Sebastian Greenwood", "Rudolf Pleil", "Ulrike Meinhof", "Marta"],
    fingerabdruecke: [
      {
        titel: "Unentbehrlichkeit als Zugang zu Nähe und Bedeutung (Naranjo: ›Privileg‹)",
        beschreibung: "Zugehörigkeit und Bedeutung werden nicht eingefordert, sondern durch Fürsorge, Einsatz und das stille Gefühl, gebraucht zu werden, gesichert. Naranjo nannte diesen Subtyp den des ›Privilegs‹: einen besonderen Platz im Leben anderer durch Unentbehrlichkeit zu gewinnen.",
        beleg: "›Naranjo beschrieb diesen Subtyp auch als denjenigen, der sich selbst zuerst um andere kümmert, um auf Umwegen die eigene Bedürftigkeit zu stillen‹ (Ulrike Meinhof, deren ›Fürsorge für die vermeintlich Schwachen echt war – und zugleich der Kern ihrer Identität‹); Dr. Camille Fritsch als führende Stimme des Flusspferdschutzes; Ai Weiwei, dessen Kunst untrennbar mit dem Einsatz für andere verbunden ist – und der nach einer schweren Polizeigewalt 2009 mit Hirnblutung die eigene Verletzung nicht verbarg, sondern öffentlich zum Beweisstück gegen den Staat machte; Buster Murdaugh, dessen Fall zeigt, wie das Zweier-Privileg im Familien- und Dynastiekontext überlebt – als Glaube, dass Zugehörigkeit zu einer bestimmten Welt vor Konsequenzen schützt; Anna Delvey, deren gesamter Betrug auf der fingierten Zugehörigkeit zur New Yorker Erbinnen-Welt beruhte; Lena Urzendowsky, die sich bei beruflichen Unsicherheiten regelmäßig bei ihrem fünfzehn Jahre älteren Bruder Sebastian Rat holt – Sicherheit durch die engste, vertrauteste Bindung statt durch Distanz oder Reichweite; Ice Cube, der die Rolle seines jüngeren Ichs im Film über sein eigenes Leben mit niemand anderem als seinem eigenen Sohn besetzte – die eigene Geschichte bleibt buchstäblich in der Familie; Jack Ma, der nach seinem Rückzug aus Alibaba und Ant Group zu seiner ursprünglichen Rolle zurückkehrte und mit derselben konkreten Zuwendung, mit der er einst selbst für zwölf Dollar im Monat unterrichtete, heute persönlich Lehrerinnen und Lehrer in ländlichen Regionen Chinas fördert; Jimi Blue Ochsenknecht, dessen erste Filmrolle er bereits als Kind gemeinsam mit Vater und Bruder vor derselben Kamera übernahm – die eigene Identität von Anfang an untrennbar mit dem engsten Familienkreis verwoben; sein älterer Bruder Wilson Gonzalez Ochsenknecht, der genau diesen ersten Filmauftritt mit zehn Jahren gemeinsam mit Vater und Bruder erlebte und heute als selbst gewordener Vater alle beruflichen Projekte bewusst der eigenen Tochter unterordnet; Nusrat Fateh Ali Khan, dessen erster öffentlicher Auftritt als Sänger bei der Totenfeier für seinen eigenen, verstorbenen Vater stattfand – aus dem Verlust wurde unmittelbar der persönliche Auftrag, eine sechshundert Jahre alte Familientradition am Leben zu erhalten; Quentin Tarantino, der seit 2007 persönlich ein eigenes 35-mm-Kino in Los Angeles betreibt und dort größtenteils aus der eigenen, über Jahrzehnte gesammelten Filmkopien-Sammlung programmiert – Fürsorge für ein ganzes Medium, konkret verankert im eigenen Besitz; Storm Reid, die gemeinsam mit ihrer Mutter Robyn eine eigene Produktionsfirma gründete – Karriere nicht als Alleingang, sondern von Anfang an als geteiltes Familienprojekt; Tom Kaulitz, dessen musikalische Laufbahn mit zehn Jahren als gemeinsame Bandgründung mit seinem eineiigen Zwillingsbruder begann und bis zum gemeinsamen Erfolgspodcast im Erwachsenenalter fortbesteht; Tutty Tran, dessen gesamtes Bühnenwerk um die eigene Familie kreist – nicht als distanzierte Beobachtung, sondern als direkt gelebte, selbstironisch verarbeitete Nähe zu den Eltern, die als vietnamesische Boatpeople nach Deutschland kamen; Lebo M, der demselben Filmfranchise seit 1994 über drei Jahrzehnte treu blieb und seinen Zulu-Ruf zur akustischen Signatur eines ganzen Welterfolgs machte; Lionel Boyce, dessen kreative Laufbahn untrennbar mit der jahrzehntelangen Freundschaft und Zusammenarbeit mit Tyler, the Creator verbunden blieb, von Odd Future bis zur eigenen Produktionsfirma; Lisa Antoni, die sich über ein breites Repertoire im deutschsprachigen Musicaltheater Schritt für Schritt bis zur Christine Daaé am Ronacher vorarbeitete; Loi, deren Künstlername auf ihren Kindheitsspitznamen ›Leonie Löwenherz‹ zurückgeht und die erst über Jahre geduldigen Übens an Gitarre und Klavier zum internationalen Charterfolg mit ›Gold‹ fand; Loni Hui, die ihrem Pokerspiel erst ein Finanzstudium voranstellte, bevor sie zur zweifachen WSOP-Bracelet-Gewinnerin wurde; Madeline Stuart, die ihre eigene, sehr persönliche Geschichte in eine internationale Botschaft für Inklusion von Menschen mit Down-Syndrom in der Modeindustrie verwandelte; Mariacarla Boscono, die ihre mehr als zehnjährige, enge kreative Bindung an Riccardo Tisci bei Givenchy und Burberry aufrechterhielt, während sie zugleich zu einer der sichtbarsten Musen der internationalen Modewelt wurde; Marta, die auf die Frage, wie sie das alles schaffe, antwortete: ›Es muss ja gemacht werden‹ – gemeint war: ›Ich kann nicht anders. Wenn ich nicht gebe, verschwinde ich.‹"
      },
      {
        titel: "Gutmütig-plumpe Fassade, die bei Bedrohung des eigenen Reviers in unbändige Kraft umschlägt",
        beschreibung: "Von außen wirkt die Erscheinung warm, rund, zugänglich, manchmal sogar tollpatschig. Wird jedoch das eigene Territorium – im wörtlichen wie im übertragenen Sinn – bedroht, zeigt sich eine Wucht, die niemand für möglich gehalten hätte.",
        beleg: "Jack Black: ›Es wirkt plump, laut, tollpatschig – und ist zugleich eines der gefährlichsten Tiere Afrikas, sobald sein Territorium bedroht scheint‹; Uli Hoeneß, der den FC Bayern ›als sein Revier begriffen und mit jedem Gramm seines Körpers markiert und verteidigt‹ hat; Oprah Winfrey: ›Wer glaubt, Wärme und Macht schließen sich aus, hat das Flusspferd nicht verstanden‹; Gloria von Thurn und Taxis, bei der ›das Flusspferd aus dem Wasser trat‹, als die Familie vor dem finanziellen Kollaps stand; Greta Thunberg, die im August 2018 allein vor dem schwedischen Reichstag saß und ein ganzes Flussbett blockierte, ohne einen einzigen Schritt zu tun; Wolfgang Amadeus Mozart, der selten in das Bild des überirdisch schwebenden Genies passte, sondern von enormer Direktheit und körperlicher Lebensfreude war; Ángel Reséndez, der buchstäblich nichts besaß und sein Überleben durch die gewaltsame Übernahme fremder Räume sicherte, sobald sein Überlebensterritorium berührt wurde; Rudolf Pleil, der in einer Niemandsland-Region mordete, in der staatliche Ordnung weitgehend zusammengebrochen war; Carlos Santana, den mehrere Plattenfirmen in den 1990ern für zu alt und irrelevant erklärten, bevor er 1999 mit ›Supernatural‹ 25 Millionen verkaufte Exemplare und neun Grammys erreichte – eine Kraft, die niemand mehr für möglich gehalten hätte; Mr. T, der als bezahlter Leibwächter für Muhammad Ali, Michael Jackson und Diana Ross buchstäblich mit dem eigenen Körper schützte, bevor derselbe wuchtige Auftritt ihn zur Filmikone machte; Nero, dessen Muttermord und die Tötung seiner ersten und zweiten Frau zeigen, wie sich dieselbe Wucht in ihrer extremsten historischen Form gegen die eigene, engste Familie richten kann, sobald diese als Bedrohung der eigenen Position erlebt wird."
      },
      {
        titel: "Tiefe Verwurzelung im eigenen Terrain statt Flucht – Bleiben als Stärke",
        beschreibung: "Statt bei Widerstand das Feld zu räumen, zieht die Kraft sich gerade aus dem Verbleiben am eigenen Platz, aus Vertrautheit mit dem eigenen Ursprung und aus beharrlicher Ausdauer, auch wenn es unbequem wird.",
        beleg: "Armin Rohde, der sich nach Jahrzehnten als Star ›unverändert als Kind des Ruhrpotts‹ bezeichnet: ›Das Flusspferd bleibt in seinem Wasser – und wird gerade dadurch unverwechselbar‹; J. J. Liu, die stundenlang unter Schmerzen am Pokertisch ausharrte: ›Das Flusspferd verlässt sein Wasser nicht, wenn es schwierig wird. Es bleibt‹; Isabella Briggs, die früh ›lernt, wo ihr Platz ist, und diesen Platz beharrlich ausbaut‹; Franka Potentes Lola, die nach jedem Lauf ›in ihr angestammtes Gewässer zurückkehrt‹; Søren Kierkegaard, der Kopenhagen zeitlebens kaum verließ und von dort aus mit unerbittlicher Konsequenz verteidigte, was er für die Wahrheit über die menschliche Existenz hielt; Harnaam Kaur, die mit siebzehn einmal dem Druck der Familie nachgab und sich rasierte – und sich danach ›nicht wie sie selbst‹ fühlte: Seither verlässt sie ihr eigenes Terrain, den eigenen Körper, nicht mehr, komme, was wolle."
      },
      {
        titel: "Schutzschicht und Verborgenheit als Überlebenssystem, nicht als Schwäche",
        beschreibung: "Was von außen wie Rückzug, Verletzlichkeit oder Verbergen wirkt, ist häufig ein sorgfältig funktionierendes Schutzsystem, das erst im entscheidenden Moment sichtbare Kraft freisetzt.",
        beleg: "Frida Kahlo, deren Körper ›über weite Strecken ihres Lebens unter Gips, Verbänden und Stützkonstruktionen verborgen‹ blieb – ›sichtbar blieb nur, was sie selbst zeigen wollte‹ – und die noch mit amputiertem Bein und aus dem eigenen Krankenbett heraus die Eröffnung ihrer einzigen mexikanischen Einzelausstellung zelebrierte; Marie Antoinettes kunstvolle Erscheinung als ›glänzende, unangreifbare Oberfläche, hinter der sich eine junge Frau verbarg‹; Natascha Kampusch, deren acht Jahre Gefangenschaft zeigen, ›wie ein Wesen unter extremem Druck einen eigenen Schutzraum aufbaut und darin funktionsfähig bleibt‹; Margot Friedländer, die ›nicht abtaucht, um zu verschwinden‹, sondern ›weil dort ihre Sicherheit liegt‹ – und auftaucht, ›genau in dem Moment, in dem sie gebraucht wird‹; Yayoi Kusama, deren endlose Punkte keine künstlerische Konzeption, sondern eine Überlebensnotwendigkeit sind – ohne das Malen, sagt sie selbst, hätte sie sich längst das Leben genommen; Jan Ullrich, für den das Fahrrad dieses Wasser war – abseits des Rads suchte er das Gleichgewicht immer wieder, und fand es nicht immer; Harald Glööckler, der sich aus einer von Gewalt und Missbrauch geprägten Kindheit eine eigene, überbordend glanzvolle Welt aus Gold und Kronen schuf – Schutz nicht durch Verbergen, sondern durch eine so gleißende Oberfläche, dass niemand mehr hinter sie schaut; Mickey Rourke, dessen öffentliches Bild von Härte geprägt ist, während seine tiefste, verlässlichste Bindung Jahrzehnte lang seinen Hunden galt – ›sie waren da, als niemand sonst da war‹; Monica Simpson, die in Wingate, North Carolina, oft das einzige schwarze Kind in Leistungskursen war und daraus ein lebenslanges, im eigenen Süden verwurzeltes Engagement für ihre Gemeinschaft entwickelte; Nate Dogg, dessen Stimme sechzehn fremde Songs zu Hits machte, während die eigenen Soloalben nie über 500.000 verkaufte Exemplare hinauskamen – Fürsorge, die lieber das Werk anderer trägt als das eigene; Stromae, dessen Song ›Papaoutai‹ direkt den Verlust seines im ruandischen Völkermord getöteten Vaters verarbeitet – eine ganz persönliche Familienwunde, die zum meistgehörten Ausdruck seines Werks wurde; Thomas Chaanhing, dessen dänisch-chinesische Doppelherkunft und Sprachkompetenz in sechs Sprachen die Basis für tragende Rollen in mehreren internationalen Großproduktionen bildete; Tracie D. Hall, die Jahre in öffentlichen Bibliotheken quer durch die USA arbeitete, bevor sie als erste afroamerikanische Frau Geschäftsführerin der American Library Association wurde."
      },
      {
        titel: "Untadelige Fürsorge-Fassade als Tarnung für Kontrolle oder Ausbeutung (Schattenform)",
        beschreibung: "In der destruktiven Ausprägung wird genau dieselbe Fürsorge- oder Vertrauensrolle zur perfekten Tarnung: Wer sich unentbehrlich macht, gerät nicht in Verdacht – und kann diese Position über Jahre für Kontrolle, Ausbeutung oder Gewalt im engsten Kreis missbrauchen.",
        beleg: "Jeanne Weber, die als Betreuerin ›im engsten, vertrautesten Kreis‹ mordete und selbst nach wachsendem Verdacht ›freiwillig die Betreuung von Kindern‹ übernahm; John Wayne Gacy, Unternehmer und Bezirkspolitiker, der zugleich als Clown auftrat; Peter Sutcliffe, der ›als freundlicher, ruhiger Nachbar‹ galt; Harvey Weinstein, dessen Machtposition als Förderer über Jahrzehnte den Missbrauch verdeckte; Jonathan Meijer, der sich als großzügiger Samenspender präsentierte, während er Kliniken über die wahre Zahl seiner Spenden täuschte; Tommy Lynn Sells, der sich als Wanderarbeiter das Vertrauen fremder Familien erschlich, bevor er dort tötete, wo man ihn nicht erwartete; Sebastian Greenwood, Chefrekrutierer eines der größten Betrugssysteme der Geschichte, dessen Erfolg auf gewonnenem persönlichen Vertrauen beruhte. Wichtig: Die überwiegende Mehrheit der SE2 in diesem Kompass zeigt dieses Muster nicht – es handelt sich um eine seltene Extremform derselben Grundenergie, keine typische Ausprägung."
      }
    ]
  },
  SX1: {
    tier: "Schwarze Mamba",
    kernthema: "Kompromisslose Intensität im engsten Kreis statt Reformanspruch an die ganze Welt",
    beispiele: ["Klaus Kinski", "Marie-Agnes Strack-Zimmermann", "Grigori Rasputin", "Robbie Williams", "Jamie Lee Curtis", "Udo Lindenberg", "Johann Sebastian Bach", "Leonardo DiCaprio", "Thea Litschka-Koen", "Bill Haast", "Romulus Whitaker", "Mary Ann Cotton", "Otto Mühl", "Alex Murdaugh", "Gary Ridgway", "Paul Bernardo", "Gennadi Mikhasevich", "Fritz Haarmann", "Josef Fritzl", "Martin Luther", "Eminem", "Johannes der Täufer"],
    fingerabdruecke: [
      {
        titel: "Durchdringende, unausweichliche Präsenz statt schmeichelndes Charisma",
        beschreibung: "Die Wirkung entsteht nicht durch Sympathiewerben, sondern durch eine Intensität, der man sich in unmittelbarer Nähe kaum entziehen kann – ein Blick, eine Bühnenpräsenz, eine Konzentration, die vollständige Wachheit beim Gegenüber erzwingt.",
        beleg: "›In ihrer Nähe zu sein, bedeutet, vollständig wach zu sein‹ (Klaus Kinski); Rasputins Blick, unter dem sich Petersburger Salondamen ›vollständig gesehen, ausgezogen bis auf den Grund‹ fühlten – ›kein Charisma, das schmeichelt, sondern eines, das durchdringt‹; Leonardo DiCaprios Rollenvorbereitung ›ohne Halbheiten‹ – ›der Biss der Mamba: vollständig, präzise‹; Thea Litschka-Koen, Bill Haast und Romulus Whitaker, deren jahrzehntelange, unerbittlich genaue praktische Auseinandersetzung mit hochgiftigen Schlangen sich in ihrer Präzision durch nichts von einer akademischen Forscherkarriere unterscheidet – ganz auf ein einziges Gesetz konzentriert, das keine Ausnahme kennt; Johannes der Täufer, dessen Stimme am Jordan ›niemanden gleichgültig ließ‹ – man fürchtete ihn oder folgte ihm, ein Rufer, dem man sich in seiner Nähe kaum entziehen konnte."
      },
      {
        titel: "Unscheinbare, zurückgezogene Fassade, die bei verletzter Integrität abrupt in kompromisslose Härte umschlägt",
        beschreibung: "Nach außen wirkt die Erscheinung oft zurückhaltend, pflichtbewusst, fast unauffällig. Doch sobald die eigene Integrität, Überzeugung oder Reinheit infrage gestellt wird, folgt eine sofortige, präzise, unnachgiebige Reaktion – ohne Übergangsstufen.",
        beleg: "Udo Lindenberg: ›Sie wirkt von außen fast unscheinbar, bis sie sich bedroht fühlt. Dann schlägt sie mit einer Präzision und Geschwindigkeit zu, der nichts entkommt‹; Johann Sebastian Bach, ›ein ganzes Leben lang der stille, pflichtbewusste Kirchenmusiker nach außen – und ein Mann, der keine Sekunde zögerte, wenn seine musikalischen Überzeugungen infrage gestellt wurden‹, der als Kind heimlich bei Mondlicht verbotene Notenblätter kopierte, ›koste es, was es wolle, selbst die eigenen Augen‹."
      },
      {
        titel: "Radikale Ehrlichkeit, die sich nicht verstellen lässt – auch gegen das eigene Image",
        beschreibung: "Anpassung an Erwartungen, Image-Pflege oder diplomatisches Schweigen sind kaum möglich, wenn etwas als falsch oder unecht empfunden wird – auch wenn das Aussprechen der eigenen Karriere oder dem eigenen Ansehen schadet.",
        beleg: "Robbie Williams: ›Was falsch ist, wird benannt, auch wenn es das eigene Selbst betrifft … Die Mamba lässt sich nicht dauerhaft in eine Choreografie zwingen‹; Marie-Agnes Strack-Zimmermann: ›Die Mamba wartet nicht, bis alle einverstanden sind‹; Jamie Lee Curtis, die früh ›einen inneren Widerstand‹ gegen die Schein-Welt ihrer Hollywood-Familie entwickelte; Martin Luther, der vor dem Reichstag zu Worms unter Androhung der Reichsacht den Widerruf seiner Schriften verweigerte: ›Hier stehe ich, ich kann nicht anders.‹"
      },
      {
        titel: "Tödliche Kontrolle im privatesten Kreis – hinter einer untadeligen bürgerlichen Fassade (Schattenform)",
        beschreibung: "In der destruktiven Ausprägung richtet sich dieselbe Kompromisslosigkeit nicht auf die Verteidigung von Wahrheit, sondern auf die totale Kontrolle über die engste, intimste Beziehung – Partner, Familie, das eigene Zuhause –, oft über Jahre unentdeckt hinter einem Bild bürgerlicher Unauffälligkeit.",
        beleg: "Gary Ridgway: ›Kirchgänger. Dreimal verheiratet. Vater eines Sohnes … Kein Vorstrafen-Register‹ – über zwei Jahrzehnte unentdeckt; Josef Fritzl: ›Nach außen war er ein geachteter Bürger … ein unauffälliger Mann in einer unauffälligen Kleinstadt‹; Gennadi Mikhasevich, der als Volksmiliz-Mitglied selbst an der Fahndung nach dem Täter teilnahm, der er war; Mary Ann Cotton und Paul Bernardo als weitere Beispiele derselben Logik: Kontrolle über den engsten Kreis, verkleidet als Fürsorge oder Makellosigkeit; Otto Mühl, der öffentlich radikale Selbstverwirklichung propagierte, sich selbst dabei aber von seinen eigenen Regeln ausnahm; Alex Murdaugh, Spross einer der mächtigsten Juristenfamilien des amerikanischen Südens, der seine engste Familie zum Ziel seiner Tat machte; Fritz Haarmann, der als aktiver Polizeispitzel und ›gutmütiger Nachbar‹ eine institutionelle Tarnung für seine Taten nutzte."
      }
    ]
  },
  SO1: {
    tier: "Gans",
    kernthema: "Wachsame Verantwortung für die Ordnung der Gemeinschaft statt für sich allein",
    beispiele: ["Ursula von der Leyen", "Friedrich Merz", "Angelina Jolie", "Konrad Lorenz", "Dr. Jordan Peterson", "David Bowie", "Jürgen Klopp", "Dr. Samuel Hahnemann", "Konfuzius (Kong Fuzi)", "Adam Smith", "Xanthippe", "Ted Bundy", "Heinrich Pommerenke", "Ruben, der Schriftgelehrte"],
    fingerabdruecke: [
      {
        titel: "Wachsame, unbestechliche Ordnungshüter-Haltung, die bei Verletzung abrupt hart reagiert",
        beschreibung: "Nach außen wirkt die Haltung diszipliniert, bürgerlich, unauffällig kontrolliert. Doch sobald die eigene Ordnung oder ein als gerecht empfundenes Prinzip verletzt wird, folgt eine entschiedene, oft überraschend harte Reaktion – ohne Drama, aber ohne Kompromiss.",
        beleg: "›Die Gans ist tief territorial. Sie zögert nicht. Sie greift entschieden an, wenn sie das Gefühl hat, dass ihre Ordnung verletzt wird‹ (Ted Bundy); Friedrich Merz: ›Er sagt, was er denkt … Die Gans weicht nicht aus, wenn sie überzeugt ist, das Richtige zu tun‹; Xanthippe und Adam Smith werden beide fast wortgleich als ›wachsam, prinzipientreu, unbestechlich in ihrem Sinn für Recht und Unrecht‹ beschrieben; Ursula von der Leyen ›steht Wache, meldet jede Störung laut, verteidigt ihr Territorium notfalls mit Bissen‹; Ruben, der Schriftgelehrte, der Jesus mitten im Tempelhof öffentlich zur Rede stellte, weil er als Wächter der Ordnung jede öffentliche Rede für prüfungspflichtig hielt."
      },
      {
        titel: "Verantwortung für das Kollektiv statt Einzelkämpfertum – Formation statt Solo",
        beschreibung: "Die eigene Leistung wird konsequent in den Dienst einer Gruppe, einer Mannschaft oder einer Gesellschaft gestellt. Führung bedeutet hier, die Formation zusammenzuhalten und Räume für andere zu öffnen, nicht das eigene Vorankommen.",
        beleg: "Jürgen Klopp: ›Die Gans fliegt nicht allein. Sie fliegt im V-Formationsverband … Wenn eine Gans erschöpft ist, übernimmt eine andere die Spitze‹; David Bowie, dessen Verwandlungen ›einen Raum öffneten, den vorher niemand betreten hatte, und den danach viele betreten durften‹ – ›Die Gans fliegt nicht für sich allein. Sie ruft, damit die anderen die Formation finden‹; Konrad Lorenz, der sein Wissen ›an die Gruppe weitergibt, statt es allein zu verwalten‹; Angelina Jolie, die als UN-Sonderbotschafterin, Regisseurin von Genozid-Filmen und Mutter von sechs Kindern aus drei Kontinenten ihr Leben in den Dienst einer Überzeugung stellte, statt Aufsehen für sich selbst zu suchen."
      },
      {
        titel: "Bruch mit dem etablierten System aus moralischer Überzeugung – ein eigenes Ordnungssystem wird gegründet",
        beschreibung: "Wird das bestehende System als grundlegend falsch oder ungerecht empfunden, genügt Kritik von innen nicht. Stattdessen entsteht häufig ein eigenes, in sich stimmiges Gegen-System, das über Jahrzehnte oder Jahrhunderte trägt.",
        beleg: "Samuel Hahnemann, der die Heilkunde seiner Zeit ›für so gefährlich hielt, dass er ihr über Jahre den Rücken kehrte – um am Ende ein eigenes, in sich stimmiges Medizinsystem zu begründen‹; Konfuzius, der sein ›ganzes Leben der Frage widmete, wie eine zerfallende Gesellschaft durch Vorbild, Sitte und Selbstkultivierung wieder in eine tragfähige Form gebracht werden kann‹; Jordan Peterson, dessen ›12 Rules for Life‹ sich über fünf Millionen Mal verkauften – ›er predigt Verantwortung, Ordnung, Struktur, weil er weiß, was das Chaos kostet‹."
      },
      {
        titel: "Untadelige öffentliche Fassade, hinter der sich – in der Schattenform – präzise, unangekündigte Vergeltung verbirgt",
        beschreibung: "In der destruktiven Ausprägung wird derselbe unbestechliche Ordnungssinn zur Rechtfertigung für kalkulierte Gewalt: eine als gerecht empfundene Schuld wird eingetrieben, methodisch und ohne Vorwarnung, während nach außen weiterhin das Bild des Musterbürgers gewahrt bleibt.",
        beleg: "Ted Bundy: ›Nach außen: Student, Freiwilliger, Parteiaktivist, ein Mann, der anderen half. Innen: ein Mensch, dessen innere Ordnung durch eine Zurückweisung zerstört worden war – und der sich das Recht nahm, diese Schuld einzutreiben. Still, methodisch, präzise‹; Heinrich Pommerenke, dessen fast 48-jährige Haft die längste Einzelhaft in der Geschichte der Bundesrepublik war. Wichtig: Die überwiegende Mehrheit der SO1 in diesem Kompass (von der Leyen, Merz, Klopp, Bowie, Hahnemann, Konfuzius u. a.) zeigt dieses Muster nicht – es handelt sich um eine seltene Extremform, keine typische Ausprägung."
      }
    ]
  },
  SE1: {
    tier: "Adler",
    kernthema: "Perfektionismus, der sich nicht an der Welt, sondern an der eigenen Vorbereitung und Integrität abarbeitet",
    beispiele: ["Queen Elizabeth II.", "Sting", "Robert De Niro", "Christoph Waltz", "Pierce Brosnan", "Anthony Hopkins", "Magnus Carlsen", "Astrid Lindgren", "Ken Follett", "Dan Brown", "Konrad Adenauer", "Aristoteles", "Marie Kondo", "Udo Jürgens", "Dr. Peter Sharpe", "Joseph Aoun", "Dennis Nilsen", "Dorothea Puente", "Michail Popkow", "Dennis Rader", "Andrei Tschikatilo", "Arno Funke", "Paul Ogorzow", "Ludwig Wittgenstein", "Josef von Arimathäa", "Gianna Nannini"],
    fingerabdruecke: [
      {
        titel: "Die Sorge nach innen statt die Welt korrigieren",
        beschreibung: "Naranjo nannte diesen Subtyp ›Worry‹ – Besorgnis: eine ständige, meist leise innere Frage, ob man dem eigenen Anspruch wirklich gerecht wird. Anders als die soziale oder sexuelle Eins richtet sich dieser Perfektionismus nicht auf die Korrektur anderer, sondern nach innen, auf das eigene Handwerk, die eigene Vorbereitung, die eigene Integrität.",
        beleg: "Robert De Niro: ›Kein Interview, in dem er sich selbst erklärt‹ – der Perfektionismus zeigt sich nur in der Arbeit selbst; Christoph Waltz, der fragt, ob er ›dem eigenen Anspruch an Wahrhaftigkeit genügt‹; Magnus Carlsen, der sich unablässig fragt, ›ob diese Stellung wirklich optimal ausgeschöpft‹ ist; Marie Kondo, deren Unruhe gilt, ›ob das eigene Umfeld wirklich stimmt‹; Astrid Lindgren, Anthony Hopkins, Pierce Brosnan, Dan Brown, Aristoteles und Adenauer zeigen dieselbe nach innen gerichtete, unbestechliche Selbstprüfung – nie als Vorwurf an andere, immer als Anspruch an sich selbst; Sting, der bis heute geduldig darauf besteht, dass sein bekanntester Song richtig verstanden wird – die Eins besteht darauf, dass die Dinge stimmen, auch gegen die öffentliche Deutung; Ludwig Wittgenstein, der ganze Absätze seiner Philosophischen Untersuchungen wieder und wieder verwarf, bis sie dem eigenen, kaum erreichbaren Anspruch an Klarheit genügten."
      },
      {
        titel: "Stille Präzision ohne Show – der Sturzflug nach langem Kreisen",
        beschreibung: "Die Wirkung entsteht nicht durch Lautstärke oder Selbstdarstellung, sondern durch langes, geduldiges Beobachten, gefolgt von einer einzigen, hochpräzisen Handlung, die keine Wiederholung braucht.",
        beleg: "›Der Adler beobachtet lange, bevor er handelt … und wenn er schließlich zuschlägt, dann mit einer Genauigkeit, die keine Wiederholung braucht‹ (De Niro); Anthony Hopkins wurde mit nur rund sechzehn Minuten Screentime als Hannibal Lecter oscarprämiert – ›der Adler muss nicht schreien, um gefürchtet zu werden‹; Magnus Carlsens Gegner beschreiben Partien gegen ihn als ›langsames Erdrücken‹; Christoph Waltz wartete fünfzig Jahre auf seine Rolle bei Tarantino: ›Der Adler hatte geduldig gekreist. Dann schlug er zu.‹; Joseph Aoun warb im Vorfeld seiner Präsidentschaftswahl in keinem einzigen öffentlichen Forum für sich und klapperte keine Fraktion ab – vierzig Jahre stiller Militärdienst, dann durch einen einzigen, überparteilichen Vertrauensvorschuss ins höchste Staatsamt gehoben; Josef von Arimathäa, ein Mann der leisen Schritte, der Jesus einmal zuhörte, nie öffentlich für ihn eintrat – und nach dessen Tod ohne Zögern allein zu Pilatus ging, um mit einer einzigen, unumkehrbaren Handlung das zu tun, was kein anderer wagte."
      },
      {
        titel: "Jahrzehntelange Beharrlichkeit trotz Rückschlägen, bevor der Durchbruch kommt",
        beschreibung: "Der Erfolg stellt sich häufig nicht früh oder plötzlich ein, sondern erst nach vielen Jahren stiller, oft unbeachteter Übung und wiederholten Scheiterns – getragen von einer Disziplin, die sich durch Misserfolg nicht entmutigen lässt.",
        beleg: "Udo Jürgens nahm ›über zehn Jahre lang an Talentwettbewerben teil‹, bevor sich sein Durchbruch einstellte, und gewann erst nach mehreren gescheiterten Anläufen den Eurovision Song Contest; Ken Follett hielt ›über sechzig Jahre‹ hinweg dieselbe schriftstellerische Konstanz durch, auch im hohen Alter; Konrad Adenauer begann seine ›eigentliche historische Rolle‹ erst mit 73 Jahren; Christoph Waltz' fünfzigjähriges Warten auf die passende Rolle; Queen Elizabeth II., die siebzig Jahre lang ihr stilles Ja zum Thron jeden einzelnen Tag erneuerte; Dr. Peter Sharpe, der seit fast dreißig Jahren die Wiederansiedlung des Weißkopfseeadlers leitet – derselben Vogelart, die dieser Kompass als Tierentsprechung der SE1 verwendet; Gianna Nannini, deren Karriere seit ihrem ersten, kommerziell noch unauffälligen Album 1976 über fünfzig Jahre lang mit gleichbleibender Disziplin weitergeführt wird, vom internationalen Durchbruch mit ›America‹ 1979 bis zu ihren aktuellen Bühnenauftritten – kein einmaliger Erfolg, sondern beständige, jahrzehntelange Fortführung."
      },
      {
        titel: "Untadelige bürgerliche Fassade, hinter der sich – in der Schattenform – die dunkelste Tat verbirgt",
        beschreibung: "In der destruktiven Ausprägung wird dieselbe Disziplin, dieselbe Sorgfalt und derselbe Anspruch an Pflichterfüllung zur perfekten Tarnung: ein makellos korrektes öffentliches Leben, hinter dem sich über Jahre unentdeckt eine völlig gegensätzliche zweite Wirklichkeit verbirgt.",
        beleg: "Michail Popkow war während seiner gesamten Mordserie aktiver Polizeibeamter und ›galt als unauffälliger, pflichtbewusster Bürger‹; Dennis Rader blieb jahrzehntelang unentdeckt als ›Kirchenratsvorsitzender … kommunaler Ordnungsbeauftragter … Ehemann und Vater‹; Andrei Tschikatilo ›galt als Lehrer, Parteimitglied und unauffälliger Staatsbürger‹; Dorothea Puente pflegte ›ein tadelloses öffentliches Bild: freundliche Vermieterin, Wohltäterin der Gemeinde‹. Arno Funke bildet den Gegenpol innerhalb desselben Musters: dieselbe akribische, kontrollierte Methodik, aber – charakteristisch für den Neunerflügel – ohne jede Gewaltbereitschaft: ›Er war weniger Verbrecher als ein Mensch, der unter materiellem Druck zu akribischen, aber gewaltlosen Mitteln griff.‹; Dennis Nilsen, der nicht aus Hass oder Kontrollwillen tötete, sondern um nicht allein zu sein – hinter einer unauffälligen, geordneten bürgerlichen Existenz; Paul Ogorzow, tagsüber ›der mustergültige Nachbar‹, der sein Insiderwissen als Reichsbahn-Weichenwärter mit präziser Routine für seine Taten nutzte."
      }
    ]
  },
  SX9: {
    tier: "Faultier",
    kernthema: "Verschmelzung mit einem einzelnen Wesen, Werk oder Stil statt Zugehörigkeit zu einer Gruppe",
    beispiele: ["Craig Foster", "Dr. Jane Goodall", "Ana Salceda", "Keanu Reeves", "Dakota Johnson", "Heike Makatsch", "Mario Barth", "Diego Velázquez", "Dr. Carl Rogers", "Friedensreich Hundertwasser", "Iga Świątek", "Sophie Marceau", "Wolfgang Beltracchi", "Lucy Cooke", "Elizabeth Barrett Browning", "Kris Marshall", "Ed Gein", "Mutter Maria"],
    fingerabdruecke: [
      {
        titel: "Die eine Bindung statt der vielen Kontakte",
        beschreibung: "Immer wieder zentriert sich das Leben nicht um ein Netzwerk, eine Institution oder ein Publikum, sondern um eine einzelne, oft nicht-menschliche oder sehr private Beziehung bzw. ein einzelnes Werk oder eine einzelne Rolle. Diese eine Verschmelzung wird zum Dreh- und Angelpunkt der gesamten weiteren Biografie – bis hin zur Auflösung der Grenze zwischen dem eigenen Ich und dem Gegenüber.",
        beleg: "Foster und sein namenloser Oktopus, Goodall und der Schimpanse David Greybeard, Salceda und das Faultier Velcro; Velázquez in ›Las Meninas‹, wo ›die Grenze zwischen Betrachter und Betrachtetem verschwimmt‹; Beltracchi, dessen Kunstfälschungen als ›Verschmelzung mit dem Geist toter Meister‹ beschrieben werden; Carl Rogers' bedingungslos annehmende therapeutische Präsenz für sein Gegenüber; Mario Barth, der seit seinem Bühnendebüt 2001 ›von da an mit einer Bühnenfigur verschmolz, die zum Millionenpublikum sprach‹ – dem Berliner Kumpeltyp; Keanu Reeves' Verschmelzung mit einzelnen ikonischen Rollen (Neo, John Wick), ohne die dazugehörige Star-Fassade je mitzuleben; Elizabeth Barrett Browning, deren zwanzig Jahre Isolation im Vaterhaus sich binnen zwanzig Monaten Briefwechsel in die eine zentrale Bindung ihres restlichen Lebens verwandelten – ›die SX9 investiert ihre gesamte Energie in die eine Beziehung, die zählt, und lässt alles andere – auch die eigene Sicherheit – dahinter zurücktreten‹; Kris Marshall, der elf Jahre lang in ›My Family‹ denselben Charakter spielte und über ein Jahrzehnt hinweg dieselbe Werbefigur verkörperte, bevor er ›Death in Paradise‹ nach eigenen Angaben verließ, ›um mehr Zeit mit seiner Familie zu verbringen‹ – wenige, dafür sehr lange gehaltene Bindungen statt vieler kurzer.; Mutter Maria (Bibel-Porträt), deren gesamtes Leben sich um die eine Verbindung zu ihrem Sohn zentrierte, unter dem Kreuz, am leeren Grab und darüber hinaus: ›Ich bin da, weil du bist‹ – keine Rolle, kein Netzwerk, sondern die eine Bindung, die nie losgelassen wurde."
      },
      {
        titel: "Scheinbare Trägheit, die sich bei Bedarf in volle, präzise Intensität verwandelt",
        beschreibung: "Von außen wirkt die Grundhaltung zurückhaltend, mühelos, fast unbeteiligt. Doch sobald der richtige Moment oder eine Grenzüberschreitung eintritt, zeigt sich eine überraschend vollständige, hochpräzise Reaktion – kein abgestuftes Engagement, sondern ein Umschlagen von Null auf Hundert.",
        beleg: "›Das Faultier hängt still, bis es sich bewegt. Wenn es sich bewegt, gibt es alles‹ (Makatsch); Dakota Johnsons ›Krallen, die man erst sieht, wenn man zu nahe kommt‹; Iga Świątek, die ›mühelos‹ wirkt, aber ›wenn sie zuschnappt, mit einer Präzision, die verblüfft‹; Keanu Reeves' Faultiere sind ›nicht faul – sie sind äußerst energiesparend, sie machen genau das, was nötig ist, mit einem Minimum an Aufwand und einem Maximum an Wirkung‹, sichtbar im Kontrast zwischen der ruhigen Privatperson und der körperlich vollständig ausgereizten John-Wick-Rolle; Lucy Cooke, deren humorvolle, forsche Lebendigkeit den trägen Ruf ihres Tieres mit sprühender intellektueller Begeisterung kontrastiert – ein Faultier, das keineswegs träge wirkt, sobald es das Wort ergreift."
      },
      {
        titel: "Langsame, unforcierte Ausdehnung über Jahrzehnte statt geplanter Karriereplanung",
        beschreibung: "Statt einen Erfolg strategisch zu forcieren oder auszubauen, entfaltet sich das Lebenswerk in einem beiläufigen, fast selbstvergessenen Tempo – über viele Jahre, ohne den Eindruck von Zwang, Inszenierung oder Entourage.",
        beleg: "Sophie Marceau: ›ein langsames, fast beiläufiges Sich-Ausdehnen über Jahrzehnte … ohne dass sie dabei je den Eindruck erweckte, etwas zu erzwingen‹; Hundertwassers lebenslanges Werk, Architektur mit Natur verschmelzen zu lassen, statt einzelne abgeschlossene Projekte abzuliefern; Keanu Reeves, der trotz Weltruhm ›allein auf einer Parkbank sitzt und ein Sandwich isst – kein Bodyguard, keine Entourage‹: ›Der Faultier-Mensch braucht keine Bühne. Er ist einfach da.‹"
      },
      {
        titel: "Häufig geht der eigentlichen Hingabe eine biografische Zäsur voraus",
        beschreibung: "Bei einem Teil der Fälle (nicht bei allen) steht am Anfang nicht ein geplanter Weg, sondern eine Krise, ein Bruch oder ein Zufall – aus dem heraus sich die spätere, oft lebenslange Verschmelzungserfahrung erst entwickelt.",
        beleg: "Craig Fosters Burnout vor der Begegnung mit dem Oktopus; Ana Salcedas zufällige, ungeplante Pflegemutterschaft für ein verwaistes Jungtier. Gegenbeispiele wie Świątek, Marceau oder Barth (planmäßiger Wechsel vom Fernmeldeelektroniker zur Bühnenfigur) zeigen: Dieses Muster ist häufig, aber kein zwingendes Kriterium."
      },
      {
        titel: "Wenn die Verschmelzung zur wahnhaften Aneignung eines anderen Wesens wird (Schattenform)",
        beschreibung: "In der destruktiven Ausprägung wird dasselbe Bedürfnis nach vollständigem Aufgehen in einem anderen Wesen nicht mehr symbolisch oder kreativ kanalisiert, sondern wahnhaft wörtlich genommen: Das Gegenüber soll nicht mehr nur innerlich, sondern physisch angeeignet werden.",
        beleg: "Ed Gein, dessen extrem dominante Mutter Augusta 1945 starb und der danach über Jahre Gräber älterer Frauen öffnete, um aus ihren Überresten buchstäblich in ihre Identität ›hineinzuschlüpfen‹ – ›er suchte nicht Opfer, er suchte Stellvertreter für seine Mutter‹. Wo Beltracchi mit dem Geist toter Meister verschmolz, versuchte Gein, mit dem Körper seiner toten Mutter zu verschmelzen – derselbe Grundmechanismus, hier bis zur tödlichen Psychose entgleist. Wichtig: Dies ist der einzige bekannte Fall dieser Art unter den SX9-Porträts dieses Kompasses, eine seltene, tragische Extremform, keine typische Ausprägung."
      }
    ]
  },
  SE7: {
    tier: "Gorilla",
    kernthema: "Aufbau eines geschützten, familienähnlichen Systems statt Einzelkämpfertum",
    beispiele: ["Hans Zimmer", "Dian Fossey", "Francis Bacon", "Larry King", "Andreas Baader", "Mariah Carey", "Moritz Bleibtreu", "Niels Högel", "Jasmine Paolini", "Jeanne Calment", "Junko Tabei", "Wallace Shawn", "Lazarus"],
    fingerabdruecke: [
      {
        titel: "Ein selbst geschaffenes Territorium statt einer fremden Karriereleiter",
        beschreibung: "Statt in bestehenden Institutionen aufzusteigen, wird ein eigener, geschützter Mikrokosmos aufgebaut – ein Studio, eine Forschungsstation, ein Wissensgebäude, ein vielseitiges Rollen-Repertoire, manchmal auch schlicht ein Ort, dem man ein Leben lang treu bleibt –, in dem eigene Regeln gelten.",
        beleg: "Hans Zimmers Remote Control Productions in Santa Monica; Dian Fosseys Forschungsstation Karisoke in den Virunga-Bergen; Francis Bacons ›Instauratio Magna‹, die ›Große Erneuerung‹ des gesamten Wissens als eigenes Territorium; Jeanne Calment, die praktisch ihr gesamtes Leben in Arles verbrachte statt zu reisen; Moritz Bleibtreu, dessen ›dichtes, ungewöhnlich vielseitiges Werk – von der Komödie bis zum psychologischen Thriller‹ sein eigenes, selbst abgestecktes schauspielerisches Terrain bildet: ›Die SE7 sucht nicht die eine große Rolle – sie sucht die nächste Erfahrung.‹ Bei Junko Tabei zeigte sich dasselbe Prinzip im eigens gegründeten Frauen-Bergsteigerclub, mit dem sie sich abseits männlich dominierter Institutionen ihr eigenes Terrain am Achttausender schuf."
      },
      {
        titel: "Raumfüllende Ruhe statt Kampf um Aufmerksamkeit",
        beschreibung: "Die Wirkung entsteht nicht durch Show oder Konfrontation, sondern durch eine bloße, beruhigende oder unaufdringlich gewichtige Präsenz – die jedoch, sobald es auf sie ankommt, in volle Intensität umschlagen kann.",
        beleg: "›Larry Kings bloße Anwesenheit in einem Fernsehstudio hatte etwas Beruhigendes‹ – über sechzig Jahre, mehr als 50.000 Interviews, ohne aggressive Gesprächsführung, und dieselbe Ruhe trug ihn auch durch eine 34 Jahre währende Kette von Herzinfarkten, Krebsdiagnosen und Schlaganfall zurück ins vertraute Studio-Nest, statt sich je aus der Sendung zurückzuziehen; Wallace Shawn, der ›gemütlich aussieht – und das Schwergewicht der Ideen trägt‹, ohne je auffallen zu wollen; Jasmine Paolini, die abseits des Platzes ›warm, lachend, familiär‹ wirkt, ›nie wie jemand, der Tennis spielt, um Ruhm zu ernten‹ – während sie auf dem Platz selbst ›explosiv, kampfstark, unermüdlich‹ ist: ›Der Gorilla tanzt nicht – aber wenn er lächelt, leuchtet der ganze Wald.‹; Lazarus, dessen Haus in Bethanien ›ein offenes Haus‹ war, ›nicht verschwenderisch, aber gastlich‹ – er war präsent, nicht durch Lautstärke, sondern durch Wärme, und selbst nach seiner Auferweckung sagten die, die ihn kannten: ›Er hört anders zu.‹"
      },
      {
        titel: "Genuss und Fülle als gelebtes Prinzip statt Askese",
        beschreibung: "Auch unter Druck, im hohen Alter oder trotz beruflicher Härte bleibt eine ausgeprägte Freude an sinnlichem Genuss – Essen, Trinken, körperliches Wohlbefinden, das Auskosten jedes einzelnen Moments – ein durchgängiges biografisches Element, nicht als Schwäche, sondern als Lebensbejahung.",
        beleg: "Mariah Carey: ›liebt das Essen – nicht als Schwäche, sondern als Ausdruck von Leben, Freude, Überfluss‹; Jeanne Calment, die bis 117 rauchte, fast ein Kilo Schokolade pro Woche aß und noch mit 85 focht; Wallace Shawn, der Essen als ›sinnliches Vergnügen, sozialen Akt, Beweis dafür, dass das Leben gut sein kann‹ beschreibt; Jasmine Paolinis Hunger, ›jeden Ball zu erreichen‹, auch nach zwei verlorenen Grand-Slam-Finals binnen weniger Wochen – ›nicht zerstörerisch, sondern unerschöpflich‹."
      },
      {
        titel: "Kompromisslose Härte bei Bedrohung des Reviers – auch in korrumpierter Form (v. a. bei w8)",
        beschreibung: "Solange niemand das aufgebaute System angreift, bleibt die Grundhaltung friedlich. Wird das eigene Revier oder die eigene Freiheit bedroht, kann diese Ruhe abrupt in kompromisslose Härte umschlagen. In der Schattenform zeigt sich dasselbe Kontrollbedürfnis über das eigene Revier auch als Inszenierung künstlicher Abhängigkeit, um selbst als unentbehrlich zu erscheinen.",
        beleg: "Dian Fossey nach der Tötung des Gorillas Digit durch Wilderer; Andreas Baaders Wendung von geselligem Auftreten zu unnachgiebiger Gewaltbereitschaft, sobald seine Freiheit infrage stand; Niels Högels Muster, Patienten erst in Lebensgefahr zu bringen, um sich anschließend als Retter zu inszenieren – dieselbe Kontrolllogik über das eigene Revier, hier in zerstörerischer Ausprägung; Moritz Bleibtreus schonungslose Darstellung Andreas Baaders selbst illustriert den Mechanismus von außen: ›Der Gorilla, der sich friedlich durch den Wald bewegt, aber zum unerbittlichen Verteidiger wird, sobald sein Revier angetastet wird‹ – Naranjo nannte die SE7 in diesem Sinne gelegentlich die ›versteckte Acht‹: von allen drei Siebener-Varianten die, die sich im Ernstfall am kompromisslosesten durchsetzt."
      }
    ]
  },
  SO3: {
    tier: "Gepard",
    kernthema: "Kontrolle über das eigene Bild und den entscheidenden öffentlichen Moment",
    beispiele: ["Karl Lagerfeld", "Cristiano Ronaldo", "Sahra Wagenknecht", "Pharrell Williams", "Dr. Christiaan Barnard", "Ludwig XIV.", "Sean Connery", "Teresa von Ávila", "Bella Thorne", "Gottfried Wilhelm Leibniz", "Dr. Laurie Marker", "Pedro Alonso López", "Andrew Cunanan", "Vincenzo Peruggia", "Wade Wilson", "Pontius Pilatus"],
    fingerabdruecke: [
      {
        titel: "Der kontrollierte Blick als Machtinstrument",
        beschreibung: "Auffällig häufig wird der eigene Blick – ob durch Verbergen oder durch gezielten Einsatz – zu einem bewussten Steuerungsinstrument: Wer sieht, wird gesehen; wer sich entzieht, wird zum Rätsel, das Aufmerksamkeit bindet.",
        beleg: "Karl Lagerfelds permanente Sonnenbrille als ›Instrument der Kontrolle‹; Sahra Wagenknechts ›ruhiger, präziser, leicht überblickender‹ Blick, der ›das Publikum sucht, die Wirkung misst, die Resonanz berechnet‹; Dr. Laurie Markers Auftreten, das ›Tempo, Sichtbarkeit, makellose Zielgenauigkeit‹ trägt – dieselben Eigenschaften, die sie beim Geparden erforscht; O.J. Simpson, der noch wenige Wochen vor seinem Tod Videobotschaften veröffentlichte, in denen er Gerüchte über seinen Gesundheitszustand zurückwies, während seine Prostatakrebs-Diagnose der Öffentlichkeit bis zu seinem Tod verborgen blieb. Wichtig: Dies ist ein sichtbares Verhaltensmuster, kein zuverlässiges Diagnosekriterium für sich allein. Pontius Pilatus, dessen ganzes Wesen auf die Fragen ›Was strahle ich aus? Wie werde ich wahrgenommen?‹ gebaut war – und der, als Jesu Blick ihm nichts zum Steuern zurückgab, zum ersten Mal spürte, wie brüchig Wirkung ohne Wahrheit ist."
      },
      {
        titel: "Der eine gewagte, öffentlich sichtbare Sprung statt schrittweiser Annäherung",
        beschreibung: "Der entscheidende Erfolg entsteht oft nicht durch allmähliche Annäherung, sondern durch einen einzelnen, riskanten, öffentlich sichtbaren Schritt im genau richtigen Moment – verbunden mit überprüfbaren Rekordzahlen als Beleg der Spitzenposition.",
        beleg: "Christiaan Barnard wagte 1967 die weltweit erste Herztransplantation, ›der Gepard jagt nicht aus Kraft, sondern aus Tempo und Wagemut‹; Ludwig XIV. inszenierte sich bereits mit 14 Jahren als ›Sonnenkönig‹ – ein Programm, das er zeitlebens fortführte, sogar seine jahrzehntelange Gicht und die schmerzhafte Analfistel-Operation von 1686 verbarg er weitgehend hinter der makellosen öffentlichen Fassade des Hofzeremoniells; Cristiano Ronaldo: fünf Weltfußballer-Titel, über 900 Karrieretore – ›nicht einer der Besten. Der Beste.‹; Teresa von Ávila, die mit chronisch schwacher Gesundheit binnen zwei Jahrzehnten siebzehn reformierte Klöster gründete: ›Der Gepard bleibt nicht im Rudel zurück. Er sprintet voraus, während andere im gewohnten Tempo weitergehen.‹"
      },
      {
        titel: "Parallele Erfolgsfelder statt eines einzigen Fachgebiets",
        beschreibung: "Erfolg wird nicht auf ein Gebiet begrenzt, sondern gleichzeitig oder nacheinander in mehreren, oft branchenfremden Bereichen gesucht und erreicht.",
        beleg: "Pharrell Williams zwischen Musikproduktion, eigener Band und Mode-Kreativdirektion; Bella Thorne als ›Schauspielerin, Sängerin, Regisseurin, Autorin, Unternehmerin, Social-Media-Star‹; Leibniz gleichzeitig als ›Philosoph, Mathematiker, Logiker, Jurist, Diplomat, Historiker, Bibliothekar und Ingenieur‹ – ›nicht nacheinander, sondern in ständiger Überlappung‹; Dr. Laurie Marker, die neben der Feldforschung ein weltweites Schutz-, Bildungs- und Zuchtprogramm (Cheetah Conservation Fund) parallel aufbaute, statt bei reiner Wissenschaft zu bleiben."
      },
      {
        titel: "Verwandlung in ein wiedererkennbares Symbol – oder bewusste Ablehnung des sicheren Reviers dafür",
        beschreibung: "Am Ende der Entwicklung steht häufig ein sofort identifizierbares, ikonisches Erscheinungsbild. Der Weg dorthin führt oft über die bewusste Ablehnung einer sicheren, aber begrenzenden Option zugunsten der offenen, sichtbaren Fläche.",
        beleg: "Lagerfeld: ›Er hatte sich in ein Symbol verwandelt … weltweit, zeitlos‹; Leibniz lehnte eine sichere Professur ab, weil ›der Gepard nicht im geschützten Revier eines einzelnen Hörsaals bleibt‹; Sean Connerys radikale Distanzüberwindung vom Milchmann zu James Bond; Teresa von Ávila, der der reguläre Klosteralltag nicht genügte: ›Sie wollte nicht einfach Nonne sein – sie wollte den Orden erneuern, sichtbar, spürbar, unwiderlegbar.‹"
      },
      {
        titel: "Wenn der eine gewagte Sprung und die kontrollierte Fassade zur tödlichen Inszenierung werden (Schattenform)",
        beschreibung: "In der destruktiven Ausprägung wird genau dieselbe Fähigkeit zum einzelnen, riskanten, öffentlich wirksamen Schritt und zur makellosen äußeren Fassade zum Werkzeug der Täuschung oder Gewalt – der entscheidende Moment wird nicht sportlich oder unternehmerisch gesucht, sondern kriminell inszeniert.",
        beleg: "Pedro Alonso López, ›das Monster der Anden‹, dessen zielgenaue Verführung und charismatische Maske mindestens 350 Morde ermöglichten – Erfolg gemessen in Opferzahl statt in Rekorden; Andrew Cunanan, für den Prestige und eine makellose Fassade zum einzigen Lebensinhalt wurden, bevor er binnen zwölf Tagen quer durch die USA mordete und schließlich Gianni Versace tötete; Vincenzo Peruggia, der 1911 in einem einzigen, präzisen Schlag die Mona Lisa aus dem Louvre stahl und sie zwei Jahre lang verborgen hielt – patriotische Inszenierung statt finanzieller Bereicherung; Wade Wilson, für den der Gerichtssaal selbst zur letzten Bühne wurde, auf der Aufmerksamkeit zur einzigen Währung geriet. Wichtig: Diese vier Fälle sind seltene Extremformen, keine typische Ausprägung der SO3 in diesem Kompass."
      }
    ]
  }
};

function lebensmusterkompassPage() {
  const subtypes = [
    { code: "SE1", tier: "Adler" }, { code: "SO1", tier: "Gans" }, { code: "SX1", tier: "Schwarze Mamba" },
    { code: "SE2", tier: "Flusspferd" }, { code: "SO2", tier: "Golden Retriever" }, { code: "SX2", tier: "Kamel" },
    { code: "SE3", tier: "Waschbär" }, { code: "SO3", tier: "Gepard" }, { code: "SX3", tier: "Pfau" },
    { code: "SE4", tier: "Taube" }, { code: "SO4", tier: "Gürteltier" }, { code: "SX4", tier: "Chihuahua" },
    { code: "SE5", tier: "Eule" }, { code: "SO5", tier: "Oktopus" }, { code: "SX5", tier: "Igel" },
    { code: "SE6", tier: "Kaninchen" }, { code: "SO6", tier: "Erdmännchen" }, { code: "SX6", tier: "Wolf" },
    { code: "SE7", tier: "Gorilla" }, { code: "SO7", tier: "Biber" }, { code: "SX7", tier: "Schimpanse" },
    { code: "SE8", tier: "Orang-Utan" }, { code: "SO8", tier: "Löwe" }, { code: "SX8", tier: "Krokodil" },
    { code: "SE9", tier: "Elefant" }, { code: "SO9", tier: "Büffel" }, { code: "SX9", tier: "Faultier" },
  ];
  const buttons = subtypes.map(s => {
    const hasData = !!LEBENSMUSTERKOMPASS[s.code];
    const col = typeColorFromCode(s.code);
    return `
      <button
        data-route="lebensmusterkompass/${s.code.toLowerCase()}"
        style="display:flex;flex-direction:column;align-items:center;gap:.35rem;background:none;border:2px solid ${hasData ? col : "var(--border)"};border-radius:10px;cursor:${hasData ? "pointer" : "default"};padding:.7rem .4rem;${hasData ? "" : "opacity:.5;"}"
        ${hasData ? "" : "disabled"}
        title="${s.tier} (${s.code})${hasData ? "" : " – in Arbeit"}"
      >
        <div style="position:relative;width:40px;height:40px;border-radius:50%;overflow:hidden;flex-shrink:0;border:2px solid ${hasData ? col : "var(--border)"};${hasData ? "" : "filter:grayscale(1);"}">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/${s.code.toLowerCase()}.jpg" alt="${s.tier}" loading="lazy" style="position:absolute;top:${tierAvatarTop(s.code)};left:${tierAvatarLeft(s.code)};width:140%;height:140%;object-fit:cover;border-radius:0;" onerror="this.parentElement.style.display='none'" />
        </div>
        <span style="font-size:.75rem;font-weight:700;color:${col};letter-spacing:.04em;">${s.code}</span>
        <span style="font-size:.68rem;color:var(--muted);text-align:center;line-height:1.2;">${s.tier}${hasData ? "" : "<br><span style='font-size:.6rem;'>in Arbeit</span>"}</span>
      </button>
    `;
  }).join("");

  return shell(`
    <div class="page-container">
      ${pageHeader("wissen")}
      <div class="page-content">
        <p class="eyebrow">Wissen &middot; Lebensmusterkompass</p>
        <h1 class="section-title">Lebensmusterkompass</h1>
        <img src="assets/lebensmusterkompass-hero.jpg?v=2" alt="Lebensmusterkompass – biografische Fingerabdr\xfccke" style="width:100%;height:auto;border-radius:12px;margin:0.8rem 0 1.4rem;display:block;" loading="lazy" />
        <p class="psycho-intro">Biografische Fingerabdr\xfccke der 27 Subtypen &ndash; wiederkehrende Erkennungsmerkmale, herausgearbeitet aus der internen Analyse s\xe4mtlicher Fallportr\xe4ts dieses Kompasses (Ber\xfchmte Pers\xf6nlichkeiten, spannende Kriminalf\xe4lle sowie weitere Portr\xe4ts, z. B. aus Astrologie meets Enneagramm).</p>

        <blockquote class="vb-blockquote" style="margin-bottom:1.8rem;">
          <p class="vb-intro">Diese Rubrik verfolgt ein einfaches Ziel: Statt nur allgemeine Charakterbeschreibungen zu liefern, sucht sie nach <strong>konkreten, wiederkehrenden Mustern im Lebenslauf</strong> &ndash; Handlungen, Entscheidungen, \xfcberraschende Wendepunkte &ndash;, die sich bei mehreren, unabh\xe4ngig voneinander typisierten Personen desselben Subtyps \xe4hnlich zeigen. Diese &bdquo;biografischen Fingerabdr\xfccke&ldquo; sollen helfen, eine Typisierung nicht nur anhand der bisher \xfcblichen Kriterien (etwa Blickqualit\xe4t oder Bauchgef\xfchl) vorzunehmen, sondern zus\xe4tzlich \xfcber konkrete Lebenslauflinien zu \xfcberpr\xfcfen und zu best\xe4tigen. Das ist im Rahmen dieses Kompasses ein neuer Ansatz, den es in dieser Form bislang nicht gab: neben zentralen, oft entscheidenden Kriterien wie der Blickqualit\xe4t treten damit Kriterien, die sich wie ein roter Faden durch ein ganzes Leben ziehen &ndash; und die erst sichtbar werden, wenn man sich f\xfcr einen Menschen wirklich Zeit nimmt, so wie es im Rahmen einer ausf\xfchrlichen Erstanalyse in der Enneagramm-Hom\xf6opathie geschieht.</p>
          <p class="vb-intro"><strong>Wichtiger Hinweis zur Methode:</strong> Diese Muster sind keine au\xdfenstehend verifizierte, wissenschaftliche Beweisf\xfchrung. Sie wurden aus der internen Analyse der eigenen Fallportr\xe4ts dieses Kompasses gewonnen &ndash; und diese Portr\xe4ts wurden bereits mit einem bestimmten Blick auf den jeweiligen Subtyp geschrieben. Dieser Blick speist sich nicht nur aus den Portr\xe4ttexten selbst, sondern aus \xfcber drei\xdfig Jahren praktischer Erfahrung im Umgang mit Menschen der 27 Subtypen &ndash; Beobachtungen, die fortlaufend in die Portr\xe4ts eingeflossen sind. Es besteht daher ein methodisches Zirkularit\xe4tsrisiko: Die Muster k\xf6nnten eigene Vorannahmen widerspiegeln, statt sie unabh\xe4ngig zu best\xe4tigen. Verstehen Sie diese Rubrik als ein internes, kontinuierlich wachsendes Beobachtungsinstrument, gespeist aus jahrzehntelanger Praxiserfahrung &ndash; nicht als absolut objektiven, au\xdfenstehenden Beweis. Alle 27 Subtypen sind inzwischen ausgearbeitet &ndash; die Rubrik wird laufend aktualisiert, sobald neue Portr\xe4ts erscheinen.</p>
        </blockquote>

        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:0.8rem;margin:2rem 0;">
          ${buttons}
        </div>

        ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
        ${relatedLinks([
          {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
          {route:"kriminalpsychologie", label:"Kriminalpsychologie"},
          {route:"tierlexikon", label:"Tierlexikon der 27 Subtypen"},
          {route:"tierforscher-uebereinstimmung", label:"Tierforscher-Übereinstimmung"},
          {route:"knowledge", label:"Wissensbasis"},
        ])}
      </div>
    </div>
  `);
}

function tierforscherUebereinstimmungPage() {
  const subtypes = [
    { code: "SE1", tier: "Adler" }, { code: "SO1", tier: "Gans" }, { code: "SX1", tier: "Schwarze Mamba" },
    { code: "SE2", tier: "Flusspferd" }, { code: "SO2", tier: "Golden Retriever" }, { code: "SX2", tier: "Kamel" },
    { code: "SE3", tier: "Waschbär" }, { code: "SO3", tier: "Gepard" }, { code: "SX3", tier: "Pfau" },
    { code: "SE4", tier: "Taube" }, { code: "SO4", tier: "Gürteltier" }, { code: "SX4", tier: "Chihuahua" },
    { code: "SE5", tier: "Eule" }, { code: "SO5", tier: "Oktopus" }, { code: "SX5", tier: "Igel" },
    { code: "SE6", tier: "Kaninchen" }, { code: "SO6", tier: "Erdmännchen" }, { code: "SX6", tier: "Wolf" },
    { code: "SE7", tier: "Gorilla" }, { code: "SO7", tier: "Biber" }, { code: "SX7", tier: "Schimpanse" },
    { code: "SE8", tier: "Orang-Utan" }, { code: "SO8", tier: "Löwe" }, { code: "SX8", tier: "Krokodil" },
    { code: "SE9", tier: "Elefant" }, { code: "SO9", tier: "Büffel" }, { code: "SX9", tier: "Faultier" },
  ];
  const tiles = subtypes.map(s => {
    const matches = ANIMAL_RESEARCHER_MATCHES.filter(m => m.subtyp.slice(0, 3) === s.code);
    const hasData = matches.length > 0;
    const col = typeColorFromCode(s.code);
    const names = matches.map(m =>
      `<button class="related-link-btn" data-route="${m.route}" style="display:block;width:100%;text-align:left;background:none;border:none;border-top:1px solid var(--border);padding:.5rem 0;cursor:pointer;color:var(--copper);font-family:'EB Garamond',serif;font-size:0.88rem;">${m.name} <span style="color:var(--muted);font-size:0.78rem;">(${m.subtyp})</span> &#8594;</button>`
    ).join("");
    return `
      <div style="border:2px solid ${hasData ? col : "var(--border)"};border-radius:12px;padding:1rem 1.1rem;${hasData ? "" : "opacity:.55;"}">
        <div style="display:flex;align-items:center;gap:.7rem;margin-bottom:.3rem;">
          <div style="position:relative;width:44px;height:44px;border-radius:50%;overflow:hidden;flex-shrink:0;border:2px solid ${hasData ? col : "var(--border)"};${hasData ? "" : "filter:grayscale(1);"}">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/${s.code.toLowerCase()}.jpg" alt="${s.tier}" loading="lazy" style="position:absolute;top:${tierAvatarTop(s.code)};left:${tierAvatarLeft(s.code)};width:140%;height:140%;object-fit:cover;border-radius:0;" onerror="this.parentElement.style.display='none'" />
          </div>
          <div>
            <div style="font-size:.8rem;font-weight:700;color:${col};letter-spacing:.04em;">${s.code}</div>
            <div style="font-size:.85rem;color:var(--muted);">${s.tier}</div>
          </div>
        </div>
        ${hasData ? names : `<p style="font-size:.8rem;color:var(--muted);margin:.5rem 0 0;">Noch kein Beispiel bekannt.</p>`}
      </div>
    `;
  }).join("");

  return shell(`
    <div class="page-container">
      ${pageHeader("wissen")}
      <div class="page-content">
        <p class="eyebrow">Wissen &middot; Tierforscher-Übereinstimmung</p>
        <h1 class="section-title">Tierforscher-Übereinstimmung</h1>
        <p class="psycho-intro">Ein auffälliges, immer wieder auftretendes Muster unter den Porträts dieses Kompasses: Menschen, deren Lebensthema oder sogar Lebenswerk ausgerechnet dem Tier gilt, das im Enneagramm ihre eigene Tierentsprechung ist &ndash; oft, ohne dass ihnen dieser Zusammenhang selbst bewusst war.</p>

        <blockquote class="vb-blockquote" style="margin-bottom:1.8rem;">
          <p class="vb-intro">Die Tierentsprechungen dieses Kompasses sind kein rein literarisches Bild &ndash; sie finden auffallend häufig ihre Entsprechung in der Wirklichkeit. Immer wieder zeigt sich: Wer sich sein ganzes Leben lang, oft mit größter Hingabe, einem bestimmten Tier widmet &ndash; als Forscherin, Forscher oder auch als Halterin eines auffällig geliebten Begleittieres &ndash;, gehört häufig genau zu dem Subtyp, dem dieses Tier im Enneagramm zugeordnet ist. Prof. Grahame Webb erforscht seit Jahrzehnten Krokodile und ist selbst ein Krokodil (SX8w7). Dr. Jill Pruetz widmet ihr Leben den Schimpansen und ist selbst ein Schimpanse (SX7w6). Paris Hilton, deren Chihuahua Tinkerbell zu ihrem Markenzeichen wurde, ist selbst ein Chihuahua (SX4w3). Diese Liste sammelt alle bislang in diesem Kompass gefundenen Fälle dieser Art &ndash; sortiert nach Subtyp, damit sichtbar wird, wie verblüffend häufig sich dieses Muster wiederholt.</p>
          <p class="vb-intro"><strong>Wichtiger Hinweis zur Methode:</strong> Auch dies ist kein außenstehend verifizierter, wissenschaftlicher Beweis, sondern eine fortlaufend wachsende Sammlung von Beobachtungen aus der eigenen Porträtarbeit dieses Kompasses. Gerade weil diese Übereinstimmungen aber unabhängig von der jeweiligen Typisierung entstanden &ndash; die Tierentsprechung stand in aller Regel schon fest, lange bevor irgendjemand vom Lebenswerk der jeweiligen Person wusste &ndash;, ist die schiere Häufung dieser Fälle bemerkenswert. Diese Rubrik wird automatisch ergänzt, sobald ein neues passendes Porträt entsteht.</p>
          <p class="vb-intro">Noch bemerkenswerter wird die Sache bei genauerem Hinsehen: Die meisten der hier versammelten Forscherinnen und Forscher sind nicht einfach nur Menschen, die sich für ihr Tier interessieren &ndash; sie sind, in der überwiegenden Mehrzahl, die weltweit führenden Autoritäten für genau diese Art. Prof. Grahame Webb gilt als eine der führenden Stimmen der internationalen Krokodilforschung. Prof. Dr. Frans de Waal gehörte zu den einflussreichsten Primatenforschern seiner Generation. Dr. Laurence Frank prägte mit den Lion Guardians den weltweiten Naturschutzansatz für Löwen. Das ist keine Randerscheinung, sondern der Regelfall dieser Liste &ndash; und es ergibt sich fast zwangsläufig aus demselben Prinzip: Wer über Jahrzehnte hinweg, also über den Großteil seines wachen Lebens, mit einer Intensität an einem Thema arbeitet, die dem eigenen archetypischen Muster entspricht, wird darin fast unweigerlich zur Spitzenkraft. Es ist derselbe Mechanismus, der einen Schauspieler, dessen eigene Persönlichkeit dem archetypischen Prinzip seiner Rolle entspricht, glaubwürdiger und oscarreif wirken lässt als jede reine Schauspielleistung: doppelte Authentizität, mühelose Identifikation, eine Tiefe, die sich nicht spielen lässt. Wer sein eigenes archetypisches Tier erforscht, forscht damit auf gewisse Weise auch an sich selbst &ndash; mit einer Hingabe, die kaum zu übertreffen ist.</p>
        </blockquote>

        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:1rem;margin:2rem 0;">
          ${tiles}
        </div>

        ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
        ${bookTip("enneagramm-zoo", "27 Tierporträts – jedes Subtyp-Tier mit Charakter, Biologie und Enneagramm-Bezug.", "Enneagramm-Zoo")}
        ${bookTip("archetypen-der-tiere-im-enneagramm", "Die archetypischen Tiere der 9 Typen als innere Landkarte – Bilder, die sofort wirken.", "Archetypen der Tiere im Enneagramm")}
        ${relatedLinks([
          {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
          {route:"lebensmusterkompass", label:"Lebensmusterkompass (Biografische Fingerabdrücke)"},
          {route:"tierlexikon", label:"Tierlexikon der 27 Subtypen"},
          {route:"tierentsprechungen", label:"Schaubild: Tierentsprechungen der 27 Subtypen"},
        ])}
      </div>
    </div>
  `);
}

// Markiert alle bekannten Personennamen (aus data.beispiele) innerhalb eines Beleg-Texts
// farblich in der Typfarbe, damit sie beim Überfliegen des Fließtexts sofort ins Auge fallen.
function highlightBiografieNamen(text, names, color) {
  if (!text || !names || !names.length) return text;
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const sorted = [...names].sort((a, b) => b.length - a.length);
  let result = text;
  sorted.forEach(name => {
    if (!name) return;
    const pattern = new RegExp(esc(name), "g");
    result = result.replace(pattern, `<strong style="color:${color};">${name}</strong>`);
  });
  return result;
}

function lebensmusterkompassDetailPage(codeRaw) {
  const code = (codeRaw || "").toUpperCase();
  const data = LEBENSMUSTERKOMPASS[code];
  if (!data) {
    return shell(`
      <div class="page-container">
        ${pageHeader("wissen")}
        <div class="page-content">
          <h1 class="section-title">Noch nicht verf\xfcgbar</h1>
          <p class="psycho-intro">Der Lebensmusterkompass f\xfcr ${code} ist noch in Arbeit.</p>
          ${relatedLinks([{route:"lebensmusterkompass", label:"Zur\xfcck zum Lebensmusterkompass"}])}
        </div>
      </div>
    `);
  }
  const col = typeColorFromCode(code);
  const portraitsAuto = lebensmusterkompassPortraitsForCode(code);
  const beispieleLinks = portraitsAuto.length
    ? portraitsAuto.map(p => `<button class="related-link-btn" data-route="${p.route}" style="font-size:0.82rem;color:${col};font-weight:600;">${p.name}</button>`).join("")
    : `<span style="font-size:0.87rem;color:${col};font-weight:600;">${data.beispiele.join(", ")}</span>`;
  const cards = data.fingerabdruecke.map((f, i) => `
    <div class="vb-blockquote" style="margin-bottom:1.2rem;">
      <div style="display:flex;align-items:center;gap:0.8rem;margin-bottom:0.7rem;">
        <span style="background:${col};color:#fff;font-size:0.72rem;font-weight:700;padding:0.25rem 0.65rem;border-radius:6px;letter-spacing:0.06em;white-space:nowrap;text-shadow:0 1px 2px rgba(0,0,0,0.35);">Fingerabdruck ${i + 1}</span>
        <strong style="font-size:1.02rem;color:var(--ink);">${f.titel}</strong>
      </div>
      <p style="margin:0 0 0.7rem;font-size:0.9rem;line-height:1.6;">${f.beschreibung}</p>
      <div><span style="font-size:0.72rem;font-weight:700;letter-spacing:0.07em;color:var(--copper);text-transform:uppercase;">Belege aus den Portr\xe4ts</span><p style="margin:0.2rem 0 0;font-size:0.87rem;line-height:1.55;font-style:italic;color:var(--muted);">${highlightBiografieNamen(f.beleg, data.beispiele, col)}</p></div>
    </div>
  `).join("");

  return shell(`
    <div class="page-container">
      ${pageHeader("wissen")}
      <div class="page-content">
        <p class="eyebrow">Wissen &middot; Lebensmusterkompass</p>
        <h1 class="section-title" style="display:flex;align-items:center;gap:0.7rem;flex-wrap:wrap;">
          <div style="position:relative;width:44px;height:44px;border-radius:50%;overflow:hidden;flex-shrink:0;border:2px solid ${col};">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/${code.toLowerCase()}.jpg" alt="${data.tier}" loading="lazy" style="position:absolute;top:${tierAvatarTop(code)};left:${tierAvatarLeft(code)};width:140%;height:140%;object-fit:cover;border-radius:0;" onerror="this.parentElement.style.display='none'" />
          </div>
          <span style="color:${col};">${code} &middot; ${data.tier}: Biografische Fingerabdr\xfccke</span>
        </h1>
        <p class="psycho-intro">${data.kernthema}</p>

        <blockquote class="vb-blockquote" style="margin-bottom:1.8rem;">
          <p class="vb-intro" style="margin-bottom:0.6rem;">Herangezogene Portr\xe4ts (automatisch aus allen ${code}-Eintr\xe4gen dieses Kompasses zusammengestellt &ndash; erg\xe4nzt sich bei jedem neuen Portr\xe4t von selbst):</p>
          <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">${beispieleLinks}</div>
        </blockquote>

        ${cards}

        ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
        ${relatedLinks([
          {route:"lebensmusterkompass", label:"Zurück zum Lebensmusterkompass"},
          {route:`subtype/${code.toLowerCase()}`, label:`${code} – ${data.tier}: Subtyp-Profil`},
          {route:"tierlexikon", label:"Tierlexikon der 27 Subtypen"},
        ])}
      </div>
    </div>
  `);
}

function tritypenPage() {
  const CDN = "https://res.cloudinary.com/ymooybdl/image/upload/f_auto,q_auto/kompass/";
  const profile = [
    { id:"1-2-5", name:"Mentor, Ratgeber",       kurz:"Integrit\u00e4t, F\u00fcrsorge und Wissen. Der Ratgeber strebt danach, anderen zu helfen und zu unterst\u00fctzen, dabei jedoch stets auf moralisch einwandfreie Werte und fundierte, tiefgehende Kenntnisse zu setzen.", kern:"Das unbedingte Streben, die Welt durch eine Kombination aus moralischer Integrit\u00e4t, aktiver N\u00e4chstenliebe und unersch\u00fctterlichem Fachwissen zu verbessern. Sie wollen als verl\u00e4ssliche, weise St\u00fctze wahrgenommen werden.", schatten:"Die Tendenz zur emotionalen Distanzierung, wenn sie sich \u00fcberfordert f\u00fchlen. Sie k\u00f6nnen in eine elit\u00e4re Besserwisserei verfallen oder andere insgeheim nach ihren eigenen, extrem hohen moralischen Standards verurteilen.", stress:"Unter Stress zieht sich dieser Typ in den Elfenbeinturm der 5 zur\u00fcck, kappt die emotionale Verbindung der 2 und wird zu einem unnachgiebigen, kritischen Richter (1), der Fehler akribisch seziert.", coaching:"Erkenntnis, dass wahre Weisheit auch das Zulassen von eigenen Fehlern und emotionaler Verletzlichkeit beinhaltet, ohne sofort alles zu rationalisieren oder zu korrigieren." },
    { id:"1-2-6", name:"Unterst\u00fctzer",            kurz:"Verantwortung, F\u00fcrsorglichkeit und Sicherheit. Der Unterst\u00fctzer ist bestrebt, anderen zu helfen und Verantwortung zu \u00fcbernehmen, wobei er gleichzeitig den Schutz und das Wohl aller im Blick beh\u00e4lt.", kern:"Schaffung einer absolut sicheren, ethischen und f\u00fcrsorglichen Gemeinschaft. Sie wollen das System und ihre Liebsten vor Gefahren sch\u00fctzen und nehmen ihre Pflichten extrem ernst.", schatten:"\u00dcberm\u00e4\u00dfige Kontrolle und Mikromanagement aus Angst vor Chaos oder Fehlern. Sie neigen dazu, sich f\u00fcr andere aufzuopfern und dann unbewusst Groll aufzubauen, weil niemand ihre Last teilt.", stress:"Bei chronischer Unsicherheit kollabiert die innere Zuversicht. Die Angst der 6 \u00fcbernimmt das Steuer, was zu extremer Nervosit\u00e4t, blindem Pflichtgehorsam und klammernder Hilfsbereitschaft f\u00fchrt.", coaching:"Lernen, Verantwortung abzugeben, Vertrauen in den Fluss des Lebens zu entwickeln und zu akzeptieren, dass man nicht jede Eventualit\u00e4t im Voraus kontrollieren kann." },
    { id:"1-2-7", name:"Lehrer",                  kurz:"Weisheit, Inspiration und positive Ver\u00e4nderung. Der Lehrer strebt danach, sowohl moralisch als auch praktisch zu f\u00fchren, dabei andere zu motivieren und zu unterst\u00fctzen, um eine bessere Welt zu schaffen.", kern:"Menschen zu inspirieren, ihr volles Potenzial zu entfalten, w\u00e4hrend gleichzeitig klare ethische Linien und Strukturen vorgegeben werden. Wollen Freude und moralischen Fortschritt vereinen.", schatten:"Ein innerer Dauerkonflikt zwischen der Disziplin der 1 und der Genusssucht der 7. Dies kann dazu f\u00fchren, dass sie im Au\u00dfen extrem streng predigen, sich selbst im Geheimen aber alle Freiheiten erlauben.", stress:"Wenn ihre Ratschl\u00e4ge ignoriert werden, kippt der Optimismus der 7. Sie werden dogmatisch, fordernd und versuchen, Reformen mit moralischem Druck (1) oder emotionaler Manipulation (2) zu erzwingen.", coaching:"Den inneren Kritiker beruhigen und erkennen, dass Menschen in ihrem eigenen Tempo wachsen. Wahre Lehre geschieht durch Vorleben, nicht durch Perfektionsdruck." },
    { id:"1-3-5", name:"Ingenieur",               kurz:"Pr\u00e4zision, Effizienz und Wissen. Der Ingenieur strebt danach, durch sorgf\u00e4ltige Planung, analytisches Denken und hohe Standards L\u00f6sungen zu schaffen, die sowohl funktional als auch elegant sind.", kern:"Die Konstruktion perfekt funktionierender Systeme und Prozesse. Sie streben nach maximaler Kompetenz, fehlerfreier Leistung und unantastbarem Sachverstand.", schatten:"Extreme emotionale K\u00e4lte und Mechanisierung von Beziehungen. Sie behandeln Menschen manchmal wie R\u00e4dchen im Getriebe und maskieren ihre tief sitzende Bindungsangst hinter sachlicher Professionalit\u00e4t.", stress:"Unter Leistungsdruck schalten sie jegliches Gef\u00fchl ab. Sie arbeiten roboterhaft (3), isolieren sich komplett von sozialen Kontakten (5) und reagieren auf Kritik mit k\u00fchler Arroganz und Fehlerlisten (1).", coaching:"Die Integration der Herz-Ebene. Zu lernen, dass Gef\u00fchle keine ineffizienten St\u00f6rfaktoren sind, sondern die essenzielle Basis f\u00fcr echte menschliche und berufliche Verbindung." },
    { id:"1-3-6", name:"Arbeitgeber",             kurz:"Verantwortung, Effizienz und Zuverl\u00e4ssigkeit. Dieser Trityp legt Wert auf Ordnung, Leistung und Zusammenarbeit, um Ziele auf ethische und systematische Weise zu erreichen. Engagiert und entschlossen.", kern:"Der Aufbau stabiler, erfolgreicher und moralisch integerer Institutionen. Sie wollen durch unerm\u00fcdlichen Arbeitseinsatz und Systemtreue messbare Ergebnisse erzielen.", schatten:"Die Transformation in einen Workaholic, der in starren Hierarchien denkt. Sie k\u00f6nnen extrem fordernd werden und dulden keine Abweichungen von der vorgegebenen Norm oder Methode.", stress:"Droht ein Projekt zu scheitern, bricht die Paranoia der 6 aus. Sie wittern Sabotage, erh\u00f6hen drastisch den Leistungsdruck (3) und reglementieren Abl\u00e4ufe bis zur v\u00f6lligen Erstarrung (1).", coaching:"Das Zulassen von Flexibilit\u00e4t und Spontunit\u00e4t. Zu erkennen, dass Fehler menschlich sind und dass Vertrauen in die Mitarbeiter oft produktiver ist als l\u00fcckenlose \u00dcberwachung." },
    { id:"1-3-7", name:"Konstrukteur",            kurz:"Perfektion, Erfolg und Optimismus. Dieser Trityp strebt danach, effizient und vision\u00e4r zu handeln, um seine hohen Standards in die Realit\u00e4t umzusetzen. Ein dynamischer und zukunftsorientierter Typ.", kern:"Das Erschaffen von innovativen, erfolgreichen und \u00e4sthetisch makellosen Projekten. Sie wollen das Bestehende optimieren und mit einem Gef\u00fchl von Glanz und Erfolg f\u00fcllen.", schatten:"Eine tiefe Intoleranz gegen\u00fcber Fehlern oder negativen Gef\u00fchlen. Sie \u00fcbert\u00fcnchen Misserfolge oder moralische Kompromisse sofort mit einer Schicht aus PR-Optimismus und Aktionismus.", stress:"Wenn Hindernisse auftreten, fl\u00fcchten sie in frenetische Aktivit\u00e4t (7). Sie setzen sich selbst und andere massiv unter Druck (3) und werden im Tonfall scharf, belehrend und ungeduldig (1).", coaching:"Sich dem Schmerz und dem Unperfekten im Leben zu stellen. Wahre Meisterwerke entstehen erst, wenn man auch den schwierigen, z\u00e4hen Phasen des Prozesses Raum gibt." },
    { id:"1-4-5", name:"Forscher",                kurz:"Perfektion, Individualit\u00e4t und Wissen. Dieser Trityp strebt danach, die Welt zu verstehen und auf durchdachte, ethische Weise zu verbessern. Ein nachdenklicher und innovativer Typ.", kern:"Die kompromisslose Ergr\u00fcndung der Wahrheit und die Synthese von tiefem Wissen mit moralischer und k\u00fcnstlerischer Integrit\u00e4t. Sie wollen das Wesen der Dinge durchdringen.", schatten:"Sich in einer Spirale aus Melancholie (4) und intellektueller Isolation (5) zu verlieren. Sie f\u00fchlen sich der Welt oft \u00fcberlegen, aber gleichzeitig unf\u00e4hig, in ihr normal zu agieren.", stress:"Bei Reiz\u00fcberflutung oder Kritik ziehen sie sich komplett zur\u00fcck. Sie werden extrem unnahbar, verbittert und verurteilen die 'banale' Au\u00dfenwelt mit scharfer, innerer Zerrissenheit.", coaching:"Den Schritt aus dem Kopf hinein in das praktische Handeln wagen. Die eigenen tiefen Erkenntnisse mit der Welt teilen, anstatt sie aus Angst vor Unvollkommenheit zu verstecken." },
    { id:"1-4-6", name:"Philosoph",               kurz:"Idealismus, Authentizit\u00e4t und Loyalit\u00e4t. Dieser Trityp sucht nach Wahrheit und Integrit\u00e4t, sowohl in sich selbst als auch in der Welt um ihn herum. Ein ernsthafter und reflektierter Typ.", kern:"Das Finden und Verteidigen einer universellen Wahrheit und authentischen Ethik. Sie wollen Missst\u00e4nde aufdecken und als loyale H\u00fcter des Rechts agieren.", schatten:"Chronischer Zweifel und eine Neigung zu existenzieller Schwere. Sie neigen dazu, \u00fcberall im Au\u00dfen Fehler, Verrat oder Heuchelei zu wittern, was sie hyperkritisch macht.", stress:"Unter Druck verst\u00e4rkt sich die Dynamik der 6. Sie geraten in Panik vor Kontrollverlust, reagieren emotional reaktiv (4) und versteifen sich auf starre Prinzipien (1).", coaching:"Entwicklung von innerem Frieden und Urvertrauen. Zu akzeptieren, dass die Welt und man selbst M\u00e4ngel haben darf, ohne dass dadurch das gesamte Fundament wegbricht." },
    { id:"1-4-7", name:"Vision\u00e4r",                kurz:"Perfektion, Individualit\u00e4t und Begeisterung. Dieser Trityp strebt danach, ideale L\u00f6sungen zu schaffen, kreative Ausdrucksformen zu finden und Freude in die Welt zu bringen. Inspirierend und charismatisch.", kern:"Die Manifestation von magischen, idealen und tiefgr\u00fcndigen Visionen in der Realit\u00e4t. Sie wollen das Leben \u00e4sthetisch veredeln und andere mit Enthusiasmus anstecken.", schatten:"Extreme emotionale Sprunhaftigkeit. Sie schwanken permanent zwischen dem tiefen Weltschmerz der 4 und dem euphorischen Eskapismus der 7, gez\u00fcgelt von einem strafenden inneren Kritiker (1).", stress:"Wenn die Realit\u00e4t ihren hohen Idealen nicht standh\u00e4lt, bricht Frustration aus. Sie fl\u00fcchten in Utopien (7), werden dramatisch und entt\u00e4uscht (4) oder pedantisch und w\u00fctend (1).", coaching:"Verankerung im gegenw\u00e4rtigen Moment. Zu lernen, die Sch\u00f6nheit im allt\u00e4glichen, gew\u00f6hnlichen Leben zu sehen, statt nur dem unerreichbaren Ideal hinterherzujagen." },
    { id:"2-5-8", name:"Stratege",                kurz:"Unterst\u00fctzend, analytisch und durchsetzungsf\u00e4hig. Strebt nach Einfluss, indem er Wissen und Beziehungen klug einsetzt. Jemand mit einer Mischung aus F\u00fcrsorge, tiefem Wissen und kraftvoller Durchsetzung.", kern:"Der Schutz und die strategische F\u00fchrung anderer durch eine Kombination aus emotionaler Allianz, unfehlbarem Wissen und kompromissloser Macht.", schatten:"Das verdeckte Strippenziehen. Sie nutzen ihr tiefes Verst\u00e4ndnis f\u00fcr die Schw\u00e4chen anderer (5), um Allianzen zu schmieden (2) und Macht auszu\u00fcben (8), ohne selbst angreifbar zu sein.", stress:"F\u00fchlen sie sich hintergangen oder machtlos, schl\u00e4gt die k\u00fchle 5 in die offene, zerst\u00f6rerische Wut der 8 um. Sie kappen alle Bindungen und agieren r\u00fccksichtslos strategisch.", coaching:"Das Ablegen der R\u00fcstung. Wahre Verbundenheit entsteht erst, wenn der Stratege erlaubt, dass man ihm ohne strategische Absichten nahekommen darf." },
    { id:"2-5-9", name:"Probleml\u00f6ser",            kurz:"Integration von F\u00fcrsorge, Wissen und Harmonie. Dieser Trityp strebt danach, hilfreiche und durchdachte L\u00f6sungen zu finden, w\u00e4hrend er gleichzeitig sanft ein ruhiges und stabiles Umfeld schafft.", kern:"Die Wiederherstellung des inneren und \u00e4u\u00dferen Friedens durch das leise, kompetente L\u00f6sen von Konflikten und Problemen im Hintergrund.", schatten:"Vollst\u00e4ndige Selbstverleugnung. Sie machen sich so unsichtbar und anpassungsf\u00e4hig, dass ihre eigenen W\u00fcnsche, Meinungen und Bed\u00fcrfnisse komplett ausgel\u00f6scht werden.", stress:"\u00dcbersteigt der \u00e4u\u00dfere Druck ein gewisses Ma\u00df, schalten sie in den totalen R\u00fcckzug (5/9). Sie stellen das Helfen ein, blockieren jegliche Kommunikation und erstarren innerlich.", coaching:"Das Einfordern des eigenen Raums. Zu lernen, laut zu sagen, was man will, und Konflikte nicht als Bedrohung, sondern als Chance f\u00fcr echte Kl\u00e4rung zu begreifen." },
    { id:"2-6-8", name:"Retter",                  kurz:"Besch\u00fctzend, loyal und tatkr\u00e4ftig. Setzt sich mutig f\u00fcr andere ein und m\u00f6chte helfen und verteidigen. Er strebt danach, sich als starke und verl\u00e4ssliche Unterst\u00fctzung f\u00fcr andere zu etablieren.", kern:"Der bedingungslose Kampf f\u00fcr die Unterdr\u00fcckten und der Schutz der eigenen Gemeinschaft gegen jede Form von \u00e4u\u00dferer Bedrohung.", schatten:"Ein ausgepr\u00e4gter 'Helfer-Komplex' mit aggressivem Unterton. Sie dr\u00e4ngen sich als Besch\u00fctzer auf und k\u00f6nnen extrem kontrollierend und rachs\u00fcchtig werden, wenn man ihre Hilfe ablehnt.", stress:"Unter Stress eskaliert die Paranoia (6) gepaart mit Kampfeslust (8). Sie sehen \u00fcberall Feinde und gehen in den pr\u00e4ventiven Gegenangriff \u00fcber, w\u00e4hrend sie absolute Loyalit\u00e4t einfordern.", coaching:"Erkennen, dass andere Menschen ihre eigenen K\u00e4mpfe austragen m\u00fcssen und dass sanfte, zur\u00fcckhaltende Unterst\u00fctzung oft kraftvoller ist als st\u00fcrmisches Intervenieren." },
    { id:"2-6-9", name:"Guter Samariter",         kurz:"Unterst\u00fctzend, loyal und friedensstiftend. M\u00f6chte Harmonie schaffen und f\u00fcr andere da sein. Er erlebt sich selbst dabei als unterst\u00fctzende, verl\u00e4ssliche und friedliche Kraft.", kern:"Ein liebevoller, treuer und absolut verl\u00e4sslicher Pfeiler f\u00fcr das soziale Gef\u00fcge zu sein. Sie wollen, dass sich jeder sicher, geliebt und integriert f\u00fchlt.", schatten:"Die Unf\u00e4higkeit, Grenzen zu setzen. Aus Angst vor Zur\u00fcckweisung (2) oder Konflikten (9) sagen sie zu allem Ja, was zu chronischer innerer Ersch\u00f6pfung und passivem Groll f\u00fchrt.", stress:"Wenn sie ausgenutzt werden, schlucken sie den \u00c4rger lange herunter (9), bis die Angst der 6 Oberhand gewinnt. Dann verfallen sie in klagende Hilflosigkeit oder unterschwellige Vorw\u00fcrfe.", coaching:"Das Erlernen eines gesunden Egoismus. Nur wer gut f\u00fcr sich selbst sorgt und radikale Grenzen zieht, kann langfristig eine echte St\u00fctze f\u00fcr andere sein." },
    { id:"2-7-8", name:"Freigeist",               kurz:"Lebendig, optimistisch und kraftvoll. Verbindet Begeisterung mit einem Sinn f\u00fcr Abenteuer und F\u00fcrsorglichkeit. Er ist eine dynamische, energische und oft charismatische Pers\u00f6nlichkeit.", kern:"Das Leben in seiner absoluten F\u00fclle, Freiheit und Intensit\u00e4t zu genie\u00dfen, w\u00e4hrend man gleichzeitig ein gro\u00dfz\u00fcgiger, besch\u00fctzender Mittelpunkt f\u00fcr andere ist.", schatten:"Hedonismus gepaart mit Dominanzanspruch. Sie k\u00f6nnen sehr fordernd und manipulativ werden, wenn man versucht, ihre Freiheit einzuschr\u00e4nken oder ihr Tempo zu drosseln.", stress:"Wenn sie eingeengt werden, bricht die ungefilterte Wut der 8 hervor. Sie \u00fcberspielen emotionalen Schmerz durch exzessiven Konsum oder Abenteuererlust (7) und sto\u00dfen andere r\u00fccksichtslos weg.", coaching:"In der Stille und im Stillstand den eigenen Schmerz zuzulassen. Zu erkennen, dass wahre Freiheit im Inneren liegt und nicht durch st\u00e4ndige \u00e4u\u00dfere Reize erzwungen werden muss." },
    { id:"2-7-9", name:"Friedensstifter",         kurz:"Charmant, fr\u00f6hlich und entspannt. Vermeidet Konflikte und bringt Freude und Harmonie in Gruppen. Er ist eine empathische, f\u00fcrsorgliche und harmoniebed\u00fcrftige Person.", kern:"Die Erschaffung einer Welt voller Leichtigkeit, Lachen und bedingungsloser Akzeptanz. Sie wollen der Sonnenschein im Leben anderer Menschen sein.", schatten:"Eine pathologische Verleugnung des Negativen (Toxic Positivity). Sie blenden Probleme, Krankheiten oder Konflikte so konsequent aus, dass notwendige Lebensentscheidungen verschleppt werden.", stress:"Wird die Realit\u00e4t zu d\u00fcster, fl\u00fcchten sie in eine Scheinwelt. Sie bet\u00e4uben sich mit Oberfl\u00e4chlichkeiten (7), passen sich bis zur Selbstaufgabe an (9) und l\u00e4cheln den Schmerz weg.", coaching:"Mut zur Konfrontation. Zu lernen, dass tiefe, echte Beziehungen nur entstehen, wenn man bereit ist, auch durch St\u00fcrme und unbequeme Wahrheiten hindurchzugehen." },
    { id:"3-5-8", name:"Allrounder",              kurz:"Zielorientiert, strategisch und durchsetzungsf\u00e4hig. Kombiniert Effizienz mit einem starken Fokus auf Ergebnisse. Er ist sowohl auf der praktischen als auch auf der intellektuellen Ebene versiert.", kern:"Die Etablierung absoluter, unangreifbarer Marktf\u00fchrerschaft und Kompetenz. Sie wollen durch messbare Spitzenleistungen und strategische Dominanz unbezwingbar sein.", schatten:"Skrupelloser Pragmatismus. In ihrem Tunnelblick auf das Ziel (3) entmenschlichen sie Prozesse, walzen Widerst\u00e4nde nieder (8) und betrachten Gef\u00fchle als reine Fehlfunktionen.", stress:"Unter extremem Druck isolieren sie sich (5), um Daten zu analysieren, erh\u00f6hen gleichzeitig den diktatorischen Druck auf ihr Umfeld (8) und kaschieren Schwachstellen durch aggressive PR (3).", coaching:"Das Herz wieder einschalten. Wahre Gr\u00f6\u00dfe zeigt sich darin, Macht und Kompetenz in den Dienst einer empathischen F\u00fchrung zu stellen und eigene Schw\u00e4chen zuzulassen." },
    { id:"3-5-9", name:"Denker",                  kurz:"Effektivit\u00e4t, Intellekt und Harmonie. Dieser Trityp verbindet Zielstrebigkeit, analytisches Denken und ein Bed\u00fcrfnis nach innerem Frieden. Ein analytischer und ausgeglichener Typ.", kern:"Das leise, hocheffiziente und perfekt durchdachte Erreichen von Zielen, ohne dabei Staub aufzuwirbeln oder das System in Unruhe zu versetzen.", schatten:"Der 'Schl\u00e4fer-Effekt'. Sie wirken kompetent und anpassungsbereit, verbergen aber eine tiefe Arroganz und ziehen sich emotional so weit zur\u00fcck, dass sie f\u00fcr niemanden mehr greifbar sind.", stress:"Bei \u00dcberlastung siegt die Tr\u00e4gheit der 9. Sie schalten auf stures Autopiloten um, arbeiten mechanisch weiter (3), verweigern aber jede emotionale oder inhaltliche Diskussion (5).", coaching:"Sichtbar werden und Position beziehen. Die eigenen genialen Ideen nicht nur im Stillen ausf\u00fchren, sondern leidenschaftlich und mutig im Rampenlicht daf\u00fcr einstehen." },
    { id:"3-6-8", name:"Gerechtigkeitsk\xe4mpfer", kurz:"Zielorientiert, loyal und energisch. K\u00e4mpft f\u00fcr Gerechtigkeit und will in jedem Umfeld erfolgreich sein. Er ist ein energischer, durchsetzungsf\u00e4higer und verantwortungsbewusster Typ.", kern:"Der durchsetzungsstarke und erfolgreiche Schutz des eigenen Territoriums oder der eigenen Werte. Sie wollen als starke, loyale Leader wahrgenommen werden.", schatten:"Hyper-Vigilanz und Aggressivit\u00e4t. Sie wittern in jedem System potenzielle Verr\u00e4ter oder Konkurrenten und bek\u00e4mpfen diese mit einer Mischung aus kalkulierter H\u00e4rte und emotionalem Druck.", stress:"Wenn sie die Kontrolle verlieren, bricht ein Gewitter los. Die Angst der 6 verb\u00fcndet sich mit der Wut der 8; sie werden tyrannisch, fordern blinden Gehorsam und agieren hyperaktiv.", coaching:"Lernen, die Waffen niederzulegen. Zu erkennen, dass nicht jeder Mensch ein potenzieller Angreifer ist und dass wahre Sicherheit durch Vertrauen, nicht durch Kontrolle entsteht." },
    { id:"3-6-9", name:"Vermittler",              kurz:"Zielstrebig, loyal und harmonisch. Verbindet Menschen und sucht nach Balance zwischen Engagement und Ruhe. Er besitzt eine ausgleichende und friedliche Wirkung.", kern:"Der Inbegriff des perfekten, allseits beliebten und erfolgreichen Teamplayers zu sein. Sie wollen maximale Anerkennung bei minimalem Konfliktpotenzial.", schatten:"Der Verlust des eigenen Kerns (Das Cham\u00e4leon). Sie passen ihre Meinung, Werte und Pers\u00f6nlichkeit so radikal an die Erwartungen des Umfelds an, dass sie selbst nicht mehr wissen, wer sie sind.", stress:"Unter Druck bricht das System zusammen. Sie erstarren in Handlungsunf\u00e4higkeit (9), werden von \u00c4ngsten geplagt (6), versuchen aber krampfhaft, eine Fassade des Erfolgs (3) zu wahren.", coaching:"Den Mut haben, anzuecken. Zu erkennen, dass ein Profil erst durch Kanten und eigene, unersch\u00fctterliche Standpunkte entsteht, selbst wenn man dadurch die Gunst einiger verliert." },
    { id:"3-7-8", name:"Macher",                  kurz:"Dynamisch, zielorientiert und energisch. Dieser Trityp strebt danach, Erfolg zu erzielen, Abenteuer zu erleben und sich durchzusetzen. Besitzt eine vision\u00e4re Ausstrahlung.", kern:"Das unaufhaltsame Erobern neuer M\u00e4rkte, Ideen und Lebensbereiche. Sie wollen maximale Freiheit, grenzenlosen Erfolg und absolute Unabh\u00e4ngigkeit.", schatten:"Gr\u00f6\u00dfenwahn und R\u00fccksichtslosigkeit. Sie walzen Bedenken, Regeln oder die Gef\u00fchle anderer einfach nieder, da sie in ihrer hyperaktiven Vorw\u00e4rtsbewegung keine Bremsen dulden.", stress:"Tritt ein un\u00fcberwindbares Hindernis auf, werden sie extrem ungeduldig und aggressiv (8). Sie bet\u00e4uben Frustration mit noch mehr Projekten oder Risiken (7) und fordern r\u00fccksichtslos Resultate (3).", coaching:"Das Erlernen der Langsamkeit und Demut. Die Erkenntnis, dass die tiefsten Sch\u00e4tze des Lebens im Innehalten, Reflektieren und im Teilen des Erfolgs mit anderen liegen." },
    { id:"3-7-9", name:"Botschafter",             kurz:"Charmant, optimistisch und verbindend. Er versucht, andere mit positiven Visionen zu inspirieren und auf diplomatische Weise Harmonie in Gruppen herzustellen.", kern:"Die charmante Vermarktung von positiven, zukunftsorientierten Ideen, die Menschen zusammenbringen und gleichzeitig den eigenen Status erh\u00f6hen.", schatten:"Oberfl\u00e4chlichkeit und Konfliktscheu. Sie neigen dazu, ernste Probleme mit einem charmanten L\u00e4cheln wegzuwischen und sich aus der Verantwortung zu stehlen, wenn es ungem\u00fctlich wird.", stress:"Wird der Druck zu hoch, bricht die gl\u00e4nzende Fassade. Sie verfallen in passive Vermeidung (9), fl\u00fcchten sich in utopische Ablenkungen (7) und versuchen verzweifelt, den Schein zu wahren (3).", coaching:"Radikale Authentizit\u00e4t. Zu akzeptieren, dass auch negative Nachrichten, Kritik und Konflikte zum Leben geh\u00f6ren und dass echte Diplomatie auch schmerzhafte Wahrheiten aussprechen muss." },
    { id:"4-5-8", name:"Gelehrter",               kurz:"Tiefgr\u00fcndig, intensiv und wissbegierig. Dieser Trityp strebt nach tiefem Verst\u00e4ndnis, emotionaler Authentizit\u00e4t und der Kraft, Ver\u00e4nderungen zu bewirken und die Wahrheit zu leben.", kern:"Die radikale, kompromisslose Ergr\u00fcndung der menschlichen Psyche und der existenziellen Wahrheit, gepaart mit dem Willen, diese Erkenntnisse kraftvoll zu behaupten.", schatten:"Extreme Misanthropie und D\u00fcsterheit. Sie blicken oft mit Verachtung auf die 'oberfl\u00e4chliche' Masse herab, isolieren sich (5) und reagieren auf Ann\u00e4herungsversuche mit zynischer H\u00e4rte (8).", stress:"Bei emotionaler \u00dcberforderung explodiert die Kombination. Die verletzte 4 verb\u00fcndet sich mit der Rachsucht der 8; sie ziehen sich zur\u00fcck, um vernichtende intellektuelle Gegenschl\u00e4ge vorzubereiten.", coaching:"Die Entwicklung von Sanftmut und Mitgef\u00fchl. Zu erkennen, dass die Welt nicht nur aus Bedrohung und Oberfl\u00e4chlichkeit besteht, sondern auch aus unschuldiger Sch\u00f6nheit, der man sich \u00f6ffnen darf." },
    { id:"4-5-9", name:"Kontemplativer",          kurz:"Nachdenklich, zur\u00fcckgezogen und sensibel. Er sucht nach tiefer Bedeutung und innerem Frieden, oft durch Reflexion und kreative T\u00e4tigkeiten.", kern:"Das Bewahren eines absolut ungest\u00f6rten, tiefen inneren Friedens und das Verweilen in einer Welt von \u00e4sthetischer und intellektueller Sinnstiftung.", schatten:"Vollst\u00e4ndige gesellschaftliche und praktische L\u00e4hmung. Sie k\u00f6nnen sich so tief in ihrer komplexen Innenwelt verlieren, dass sie den Bezug zur Realit\u00e4t und jegliche Tatkraft einb\u00fc\u00dfen.", stress:"Unter Stress ziehen sie die Schilde komplett hoch. Sie werden unsichtbar (9), blocken jeden Kontakt ab (5) und versinken in einer melancholischen, stummen Resignation (4).", coaching:"Der aktive Schritt in den Lebensstrom. Die reiche, wundersch\u00f6ne Innenwelt nicht als Fluchtort zu nutzen, sondern sie durch Kunst, Schreiben oder Beratung mutig im Au\u00dfen zu manifestieren." },
    { id:"4-6-8", name:"Wahrheitsliebender",      kurz:"Leidenschaftlich, mutig und gerechtigkeitsorientiert. Dieser Trityp strebt danach, die Wahrheit zu entdecken und sich f\u00fcr sie einzusetzen.", kern:"Das unerschrockene Aufsp\u00fcren, Aussprechen und Bek\u00e4mpfen von Heuchelei, Ungerechtigkeit und verdeckten Absichten im Au\u00dfen.", schatten:"Eine permanente, explosive Reaktivit\u00e4t. Sie sind emotional hochgradig brennbar, wittern \u00fcberall Verrat oder Korruption und zetteln Konflikte an, um die Loyalit\u00e4t anderer zu testen.", stress:"Geraten sie in Panik, gibt es kein Halten mehr. Sie attackieren Autorit\u00e4ten frontal (8), getrieben von emotionalem Drama (4) und existenzieller Angst vor Kontrollverlust (6).", coaching:"Das Finden des inneren Ankers. Zu lernen, dass nicht jeder Missstand sofort bek\u00e4mpft werden muss und dass emotionale Ruhe die sch\u00e4rfste Waffe f\u00fcr echte Ver\u00e4nderung ist." },
    { id:"4-6-9", name:"Suchender",               kurz:"Strebt nach einer harmonischen Verbindung zwischen seinen Gef\u00fchlen, Loyalit\u00e4t und innerem Frieden. Er ist introspektiv, sicherheitsorientiert und konfliktvermeidend.", kern:"Das Finden einer absolut sicheren, treuen Gemeinschaft oder Struktur, die ihre sensible Individualit\u00e4t sch\u00fctzt und ihnen existenziellen Halt bietet.", schatten:"Chronische Entscheidungslosigkeit und Abh\u00e4ngigkeit. Sie schwanken permanent zwischen ihren intensiven Gef\u00fchlen (4), ihren \u00c4ngsten (6) und dem Wunsch, niemanden zu ver\u00e4rgern (9).", stress:"Bei Krisen verfallen sie in eine Schockstarre. Sie zweifeln an allem und jedem, ziehen sich weinerlich zur\u00fcck (4) und versuchen gleichzeitig, sich stumm an bestehende Regeln zu klammern (6).", coaching:"Vertrauen in die eigene Intuition und St\u00e4rke. Zu erkennen, dass die Antworten und die Sicherheit, die sie im Au\u00dfen suchen, bereits in ihrem eigenen Kern liegen." },
    { id:"4-7-8", name:"Bote",                    kurz:"Kreativ, energisch und durchsetzungsstark. Er bringt Visionen mit Tatkraft und Energie in die Welt und ist bereit, Risiken einzugehen, um Ver\u00e4nderungen zu bewirken.", kern:"Das revolution\u00e4re Aufbrechen alter Krusten durch das Einbringen von radikal originellen, leidenschaftlichen und freiheitsliebenden Impulsen.", schatten:"Extreme Instabilit\u00e4t und Tyrannei des Geschmacks. Sie fordern absolute Freiheit f\u00fcr ihre Exzentrik und k\u00f6nnen extrem arrogant und verletzend reagieren, wenn man ihnen nicht applaudiert.", stress:"Erscheint das Leben grau oder limitierend, kollabiert ihre Geduld. Sie fordern aggressiv ihren Raum ein (8), fl\u00fcchten in exzessive Ablenkungen (7) und inszenieren emotionales Drama (4).", coaching:"Das Akzeptieren von Routine und Erdung. Zu erkennen, dass die kraftvollsten Botschaften Best\u00e4ndigkeit und Disziplin erfordern, um langfristig in der Welt Wurzeln zu schlagen." },
    { id:"4-7-9", name:"Sanftm\xfctiger Geist",   kurz:"Fantasievoll, optimistisch und entspannt. Dieser Trityp sucht nach Freude und Harmonie, ohne dabei seine tiefe Sensibilit\u00e4t zu verlieren. Er ist eine tiefe, gef\u00fchlsbetonte Pers\u00f6nlichkeit.", kern:"Das Weben eines wundersch\u00f6nen, harmonischen und magischen Lebensnetzes, das sensible Seelen vor der H\u00e4rte der rauen Realit\u00e4t sch\u00fctzt.", schatten:"Chronischer Realit\u00e4tsflucht und vertr\u00e4umte Passivit\u00e4t. Sie bauen sich ein utopisches Luftschloss aus \u00c4sthetik (4) und Optimismus (7) und weigern sich standhaft, praktische Pflichten zu erf\u00fcllen.", stress:"Konfrontiert mit roher Gewalt oder harten Fakten ziehen sie sich v\u00f6llig in ihre Traumwelt zur\u00fcck. Sie bet\u00e4uben sich (9), verweigern die Kooperation und versinken in leisem Weltschmerz (4).", coaching:"Das sanfte Landen auf der Erde. Zu lernen, dass die Realit\u00e4t durch die eigenen kreativen Gaben geheilt werden kann, wenn man bereit ist, mit beiden Beinen fest auf dem Boden zu stehen." },
  ];

  const cards = profile.map(p => `
    <div class="vb-blockquote" style="margin-bottom:1.2rem;">
      <div style="display:flex;align-items:center;gap:0.8rem;margin-bottom:0.7rem;">
        <span style="background:var(--gold);color:#1a1208;font-size:0.72rem;font-weight:700;padding:0.25rem 0.65rem;border-radius:6px;letter-spacing:0.06em;white-space:nowrap;">Trityp ${p.id}</span>
        <strong style="font-size:1.05rem;color:var(--ink);">${p.name}</strong>
      </div>
      <p style="font-style:italic;color:var(--muted);font-size:0.9rem;margin:0 0 0.9rem;line-height:1.55;">${p.kurz}</p>
      <div style="display:grid;gap:0.55rem;">
        <div><span style="font-size:0.72rem;font-weight:700;letter-spacing:0.07em;color:var(--copper);text-transform:uppercase;">Kernmotivation</span><p style="margin:0.2rem 0 0;font-size:0.9rem;line-height:1.55;">${p.kern}</p></div>
        <div><span style="font-size:0.72rem;font-weight:700;letter-spacing:0.07em;color:#b0603d;text-transform:uppercase;">Schattenseite (Blinder Fleck)</span><p style="margin:0.2rem 0 0;font-size:0.9rem;line-height:1.55;">${p.schatten}</p></div>
        <div><span style="font-size:0.72rem;font-weight:700;letter-spacing:0.07em;color:#8b3a2a;text-transform:uppercase;">Verhalten unter Stress</span><p style="margin:0.2rem 0 0;font-size:0.9rem;line-height:1.55;">${p.stress}</p></div>
        <div><span style="font-size:0.72rem;font-weight:700;letter-spacing:0.07em;color:#4a7c59;text-transform:uppercase;">Entwicklungspfad &amp; Coaching-Tipp</span><p style="margin:0.2rem 0 0;font-size:0.9rem;line-height:1.55;">${p.coaching}</p></div>
      </div>
    </div>`).join("");

  return shell(`
    <div class="page-container">
      ${pageHeader("wissen")}
      <div class="page-content">
        <p class="eyebrow">Wissen &middot; F\xfcr Fortgeschrittene</p>
        <h1 class="section-title">Die 27 Tritypen des Enneagramms</h1>

        <blockquote class="vb-blockquote" style="margin-bottom:1.8rem;">
          <p class="vb-intro">Das klassische Enneagramm teilt die neun Pers\xf6nlichkeitstypen in drei grundlegende Zentren ein, die auch als <strong>Triaden</strong> bekannt sind: die <strong>Bauch-Triade</strong> (Instinkt/Autonomie: Typen 8, 9, 1), die <strong>Herz-Triade</strong> (Gef\xfchl/Identit\xe4t: Typen 2, 3, 4) und die <strong>Kopf-Triade</strong> (Verstand/Sicherheit: Typen 5, 6, 7).</p>
          <p class="vb-intro">W\xe4hrend traditionelle Schulen den Fokus fast ausschlie\xdflich auf einen einzigen Haupttypen legen, erweitert die moderne <strong>Tritypen-Lehre</strong> (ma\xdfgeblich gepr\xe4gt von Katherine Chernick Fauvre und basierend auf den <em>Trifix</em>-Wurzeln von Oscar Ichazo) dieses Bild um eine dynamische Facette. Die Theorie besagt, dass jeder Mensch nicht nur einen Haupttypen besitzt, sondern in <strong>jedem der drei Zentren</strong> einen bevorzugten Typen nutzt.</p>
          <p class="vb-intro">Ein Trityp besteht folglich aus einer dreistelligen Kombination &ndash; jeweils einer Zahl aus dem Bauch-, Herz- und Kopfbereich. Die Reihenfolge der Zahlen spiegelt dabei die pers\xf6nliche Hierarchie wider: Der dominanteste Typ steht an erster Stelle.</p>
          <ul class="vb-intro" style="margin:0.8rem 0;padding-left:1.3rem;display:grid;gap:0.4rem;">
            <li><strong>Herz-Zentrum (2, 3, 4):</strong> Bestimmt, wie wir unser Image aufbauen, Gef\xfchle verarbeiten und nach Anerkennung suchen.</li>
            <li><strong>Kopf-Zentrum (5, 6, 7):</strong> Bestimmt, wie wir Informationen sammeln, Angst bew\xe4ltigen und Sicherheit im Leben finden.</li>
            <li><strong>Bauch-Zentrum (8, 9, 1):</strong> Bestimmt, wie wir mit Wut umgehen, unsere Grenzen sch\xfctzen und instinktiv auf Herausforderungen reagieren.</li>
          </ul>
          <p class="vb-intro">Durch das Zusammenspiel dieser drei inneren Strategien entsteht ein wesentlich feineres und individuelleres Profil der Pers\xf6nlichkeit. Selbst wenn zwei Menschen denselben Haupttypen teilen, k\xf6nnen sie sich in ihrem Verhalten, ihren blinden Flecken und ihren Lebensstrategien drastisch unterscheiden &ndash; je nachdem, welche &bdquo;Co-Piloten&ldquo; sie aus den anderen beiden Triaden mit an Bord haben.</p>
        </blockquote>

        <div style="margin:0 0 2rem;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.15);">
          <img src="./assets/schaubilder/tritypen-des-enneagramms.jpg" alt="Die 27 Tritypen des Enneagramms \u2013 \xdcbersicht" style="width:100%;display:block;" loading="lazy" />
          <p style="text-align:center;font-size:0.78rem;color:var(--muted);margin:0;padding:0.5rem 0.5rem 0.7rem;">Die 27 Tritypen (Tritypes) des Enneagramms &ndash; \xdcbersicht</p>
        </div>

        <h2 class="section-title" style="font-size:1.25rem;margin:0 0 1.2rem;">Die 27 Profile im Detail</h2>
        ${cards}

        ${bookTip("der-code-deiner-persoenlichkeit", "27 Subtypen, Tritypen und ihre verborgenen Muster &ndash; das Standardwerk f\xfcr alle, die tiefer in die Struktur der Pers\xf6nlichkeit eintauchen wollen.", "Der Code deiner Pers\xf6nlichkeit")}
        ${bookTip("wer-du-wirklich-bist-band-1", "\xdcbersichten, Schaubilder und Typbeschreibungen &ndash; der erste Band der Trilogie, die das Enneagramm lebendig macht.", "Wer du wirklich bist &ndash; Band 1")}
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "Die 27 Subtypen in ihrer vollen Tiefe &ndash; Leidenschaft, Wunde und Heilungsweg f\xfcr jeden Instinkttyp.", "Die verborgene Dynamik der 27 Subtypen")}
        ${relatedLinks([
          {route:"tierentsprechungen", label:"Tierentsprechungen der 27 Subtypen"},
          {route:"tierlexikon", label:"Tierlexikon der 27 Subtypen"},
          {route:"knowledge", label:"Wissensbasis"},
        ])}
      </div>
    </div>
  `);
}

function tierlexikonDetailPage(codeRaw) {
  const code = codeRaw.toUpperCase();
  const data = TIERLEXIKON[code];
  if (!data) {
    return shell(`
      ${pageHeader("tierlexikon")}
      <div style="max-width:680px;margin:0 auto;padding:2rem 1rem;">
        <button class="ghost-link" data-route="tierlexikon">&larr; Tierlexikon</button>
        <p style="margin-top:2rem;color:var(--muted);">${code}: Fakten werden bald erg\u00e4nzt.</p>
      </div>
    `);
  }
  const col = typeColorFromCode(code);
  const faktenHtml = data.fakten.map((fakt, i) => {
    const starIdx = fakt.lastIndexOf(" *");
    let haupttext = fakt, kommentar = "";
    if (starIdx !== -1 && fakt.endsWith("*")) {
      haupttext = fakt.slice(0, starIdx).trim();
      kommentar = fakt.slice(starIdx + 2, -1).trim();
    }
    return `
      <div style="
        display:grid;grid-template-columns:2rem 1fr;gap:.5rem;
        padding:.85rem .8rem;
        border-radius:10px;
        background:${i % 2 === 0 ? "var(--paper)" : "transparent"};
        border:1px solid ${i % 2 === 0 ? "var(--line)" : "transparent"};
        margin-bottom:.4rem;
      ">
        <span style="
          font-size:.75rem;font-weight:800;color:${col};
          padding-top:.1rem;text-align:right;opacity:.7;
        ">${i + 1}</span>
        <div>
          <p style="margin:0 0 .35rem;font-size:.88rem;line-height:1.55;color:var(--ink);">${haupttext}</p>
          ${kommentar ? `<p style="margin:0;font-size:.8rem;line-height:1.5;color:${col};font-style:italic;border-left:2px solid ${col};padding-left:.6rem;">${kommentar}</p>` : ""}
        </div>
      </div>
    `;
  }).join("");

  return shell(`
    ${pageHeader("tierlexikon")}
    <div style="max-width:680px;margin:0 auto;padding:0 1rem 3rem;">
      <button class="ghost-link" data-route="tierlexikon">&larr; Tierlexikon</button>
      <div style="
        display:flex;align-items:center;gap:1.2rem;
        margin:1.4rem 0 .6rem;
      ">
        <div style="position:relative;width:100px;height:100px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 3px ${col};">
          <img
            src="${R2_CDN}assets/${code.toLowerCase()}-tier.jpg"
            alt="${data.tier}"
            style="position:absolute;top:${tierAvatarTop(code)};left:${tierAvatarLeft(code)};width:140%;height:140%;object-fit:cover;"
          />
        </div>
        <div>
          <p class="eyebrow" style="color:${col};margin-bottom:.2rem;">Wissen &middot; Tierlexikon</p>
          <h1 style="margin:0 0 .1rem;font-size:1.6rem;color:var(--ink);">${data.tier}</h1>
          ${data.lateinisch ? `<p style="margin:0 0 .15rem;font-size:.82rem;color:var(--muted);font-style:italic;">${data.lateinisch}</p>` : ""}
          <p style="margin:0 0 .4rem;font-size:.78rem;color:var(--muted);opacity:.7;">${code} &middot; ${data.fakten.length} Fakten</p>
          <button class="ghost-link" data-tier-laut="${data.tier}"
                  style="font-size:.82rem;padding:.25rem .6rem;border:1px solid var(--line);border-radius:20px;opacity:.8;">
            \ud83d\udd0a ${data.tier}-Laut
          </button>
        </div>
      </div>
      <p style="font-size:.88rem;line-height:1.6;color:var(--muted);margin:0 0 1.8rem;padding:.8rem;background:var(--paper);border-radius:10px;border:1px solid var(--line);">${data.intro}</p>
      <div>${faktenHtml}</div>
      ${(() => {
        const d = TIER_DOKU[code];
        if (!d) return "";
        const src = `https://www.youtube.com/embed/${d.ytId}?start=${d.start}&rel=0&modestbranding=1`;
        return `
          <div style="margin-top:2.5rem;">
            <h2 style="font-size:1rem;font-weight:700;color:var(--ink);margin:0 0 .8rem;display:flex;align-items:center;gap:.4rem;">
              \ud83c\udfac <span>Tierdoku</span>
            </h2>
            <div style="position:relative;width:100%;padding-top:56.25%;border-radius:12px;overflow:hidden;border:1px solid var(--line);">
              <iframe
                src="${src}"
                title="${d.titel}"
                style="position:absolute;inset:0;width:100%;height:100%;border:none;"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                loading="lazy"
              ></iframe>
            </div>
            <p style="margin:.5rem 0 0;font-size:.75rem;color:var(--muted);text-align:right;">${d.titel} &middot; ${d.kanal}</p>
            <button onclick="window.scrollTo({top:0,behavior:'smooth'})"
                    style="display:block;margin:1.2rem auto 0;background:none;border:1px solid var(--line);border-radius:20px;padding:.35rem 1rem;font-size:.78rem;color:var(--muted);cursor:pointer;">
              \u2191 Nach oben
            </button>
          </div>
        `;
      })()}
      ${(() => {
        const matches = ANIMAL_RESEARCHER_MATCHES.filter(m => m.subtyp.slice(0, 3) === code);
        if (!matches.length) return "";
        const items = matches.map(m =>
          `<button class="related-link-btn" data-route="${m.route}" style="background:none;border:1px solid var(--gold);color:var(--copper);border-radius:20px;padding:.35rem .95rem;font-size:0.82rem;font-family:'EB Garamond',serif;cursor:pointer;white-space:nowrap;">${m.name} (${m.subtyp}) \u2192</button>`
        ).join("");
        return `
          <div style="margin-top:2rem;padding-top:1.2rem;border-top:1px solid var(--line);">
            <h2 style="font-size:1rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">\u2726 Lebende Beweise: ${data.tier}-\u00dcbereinstimmung</h2>
            <p style="font-size:.85rem;color:var(--muted);margin:0 0 .8rem;">Diese Personen widmen ihr Lebensthema ausgerechnet dem ${data.tier} \u2013 und sind selbst ${code}.</p>
            <div style="display:flex;flex-wrap:wrap;gap:.5rem;">${items}</div>
          </div>
        `;
      })()}
      ${bookTip("enneagramm-zoo", "27 Tierportr\u00e4ts \u2013 jedes Subtyp-Tier mit Charakter, Biologie und Enneagramm-Bezug.", "Enneagramm-Zoo")}
      ${bookTip("archetypen-der-tiere-im-enneagramm", "Die archetypischen Tiere der 9 Typen als innere Landkarte \u2013 Bilder, die sofort wirken.", "Archetypen der Tiere im Enneagramm")}
      ${relatedLinks([
        {route:"tierlexikon", label:"Zur\u00fcck zum Tierlexikon"},
        {route:"tierforscher-uebereinstimmung", label:"Tierforscher-\u00dcbereinstimmung: alle 27 Subtypen"},
      ])}
    </div>
  `);
}

function obstsortPage() {
  return shell(`
    ${pageHeader("obstsorten")}
    <div style="max-width:680px;margin:0 auto;padding:0 1rem 3rem;">
      <p class="eyebrow">Schaubilder \xb7 Archetypen</p>
      <h1 class="section-title">Die 9 Obstsorten</h1>
      <p class="psycho-intro">Eine enneagrammatisch-archetypische Betrachtung: Was jede Frucht \xfcber den Wesenskern eines Typs verr\xe4t.</p>
      <img
        src="./assets/obstsorten.jpg"
        alt="Die 9 Obstsorten &ndash; Schaubild"
        style="width:100%;max-width:680px;display:block;margin:0 auto 2rem;border-radius:12px;cursor:zoom-in;"
      />
      <div class="vb-section" style="max-width:100%;">

        <h2 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">Typ 1 &ndash; Der Apfel: Perfektion als Prinzip</h2>
        <p class="vb-intro">Der Apfel ist die kulturgeschichtlich bedeutsamste Frucht \xfcberhaupt &ndash; Symbol f\xfcr Erkenntnis, Vollkommenheit und moralische Ordnung. In der abendl\xe4ndischen Tradition steht er f\xfcr das Streben nach dem Guten ebenso wie f\xfcr die Versuchung, es zu verfehlen. Seine gleichm\xe4\xdfige, symmetrische Form, die glatte Schale und klare Farbigkeit verk\xf6rpern ein Ideal \xe4sthetischer Perfektion. Kein Zufall, dass der Satz "An apple a day keeps the doctor away" auf Disziplin und Vorsorge verweist &ndash; beides urtyp 1-Qualit\xe4ten. Der Apfel muss makellos sein, sonst gilt er als verdorben. Genau so erlebt der Typ 1 sich selbst.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 2 &ndash; Die Erdbeere: S\xfc\xdfe als Gabe</h2>
        <p class="vb-intro">Die Erdbeere gibt sich hin &ndash; sie ist weich, duftend, s\xfc\xdf und leuchtet in einem warmen Rot, das unweigerlich an Herzlichkeit und Zuneigung erinnert. Sie w\xe4chst bodennah, zugewandt, sucht das Licht und \xf6ffnet sich vollst\xe4ndig. Niemand isst eine Erdbeere ohne ein L\xe4cheln. Sie macht anderen eine Freude, ohne etwas zu verlangen &ndash; und vergeht schnell, wenn sie nicht gesehen wird. Die Erdbeere n\xe4hrt, w\xe4rmt und ber\xfchrt: das Prinzip des Typs 2 in seiner reinsten pflanzlichen Form.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 3 &ndash; Die Traube: Erfolg in der Gemeinschaft</h2>
        <p class="vb-intro">Trauben wachsen nie einzeln &ndash; sie entstehen im Verbund, in gro\xdfen, pr\xe4chtigen Clustern, die F\xfclle und \xdcberfluss signalisieren. Sie sind die Frucht des Weins, der Gesellschaft, des Ansehens und der Feier. In der Antike waren Trauben Symbol f\xfcr Wohlstand, Fruchtbarkeit und weltlichen Erfolg. Die Weinrebe braucht Pflege, F\xfchrung, den richtigen Boden &ndash; und bringt dann eine Ernte, die andere begeistert und bewundert. Typ 3 in seiner archetypischen Qualit\xe4t: produktiv, ansehnlich, gesellschaftlich wirksam.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 4 &ndash; Die Feige: Tiefe hinter der Oberfl\xe4che</h2>
        <p class="vb-intro">Die Feige ist exotisch, geheimnisvoll und paradox: au\xdfen unscheinbar, innen von bet\xf6render Sch\xf6nheit &ndash; ein tiefes Purpur, durchzogen von zarten Strukturen. Sie reift langsam, verlangt Geduld und wird selten verstanden. In vielen Kulturen steht sie f\xfcr Weisheit, Verg\xe4nglichkeit und spirituelle Tiefe. Die Feige ist keine Frucht f\xfcr die Masse &ndash; sie wird von denen gesch\xe4tzt, die bereit sind, genauer hinzuschauen. Das ist das Lebensgef\xfchl des Typs 4: Ich bin nicht beim ersten Hinsehen zu verstehen &ndash; aber wer mich wirklich sieht, entdeckt etwas Unvergleichliches.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 5 &ndash; Die Blaubeere: Konzentrierte Essenz</h2>
        <p class="vb-intro">Die Blaubeere ist klein, unscheinbar und zur\xfcckhaltend &ndash; aber in ihr steckt eine au\xdfergew\xf6hnliche Konzentration an N\xe4hrstoffen, Antioxidantien und Wirkstoffen. Sie w\xe4chst in der Stille abgelegener W\xe4lder, weit vom Trubel entfernt. Man muss sie suchen, man muss wissen, wo sie zu finden ist. Wer sie findet, erkennt ihren verborgenen Reichtum. Die Blaubeere teilt sich nicht auf &ndash; sie ist kompakt, autark, in sich geschlossen. Ein treffendes Bild f\xfcr den Typ 5: klein nach au\xdfen, unermesslich reich nach innen.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 6 &ndash; Die Banane: Verl\xe4sslichkeit als Tugend</h2>
        <p class="vb-intro">Die Banane ist das Grundnahrungsmittel unter den Fr\xfcchten &ndash; weltweit verbreitet, kultur\xfcbergreifend vertraut, n\xe4hrend und zuverl\xe4ssig. Sie kommt stets in ihrer sch\xfctzenden gelben H\xfclle, gut portioniert, gut handhabbar. Sie liefert schnelle Energie in Momenten der Ersch\xf6pfung und ist in ihrer Struktur fest und berechenbar. Kein anderes Obst vermittelt so sehr das Gef\xfchl von Verl\xe4sslichkeit und Sicherheit. Die Banane ist immer da &ndash; und genau das ist das tiefste Bed\xfcrfnis und zugleich die gr\xf6\xdfte Gabe des Typs 6.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 7 &ndash; Die Ananas: Exotik und Lebensfreude</h2>
        <p class="vb-intro">Die Ananas ist ein Fest f\xfcr die Sinne &ndash; exotisch, farbenfroh, s\xfc\xdf-s\xe4uerlich, \xfcberraschend und unkonventionell in ihrer \xe4u\xdferen Form. Sie kommt aus der Ferne, bringt das Versprechen von Abenteuer und Sommerlichkeit mit sich und verbreitet sofortige Hochstimmung. Sie ist tropisch, frei, ungebunden &ndash; und ihre stachelige Au\xdfenhulle sch\xfctzt einen zarten, leuchtenden Kern. Genau wie der Typ 7: nach au\xdfen ein Fest, nach innen empfindsamer als er zeigt, und immer auf der Suche nach dem n\xe4chsten Genuss.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 8 &ndash; Der Granatapfel: Macht und F\xfclle</h2>
        <p class="vb-intro">Der Granatapfel ist eine der \xe4ltesten und mythisch aufgeladensten Fr\xfcchte der Menschheitsgeschichte &ndash; in vielen Kulturen Symbol f\xfcr Macht, Fruchtbarkeit, Tod und Wiedergeburt zugleich. Seine harte, widerstandsf\xe4hige Schale sch\xfctzt einen Kern von \xfcberw\xe4ltigender F\xfclle: Hunderte leuchtend roter Kerne, prall und kraftvoll. Man muss Kraft aufwenden, um an ihn heranzukommen &ndash; aber wer es tut, wird reich belohnt. Der Granatapfel gibt sich nicht preis, er muss erobert werden. Das ist das Prinzip des Typs 8: robust nach au\xdfen, von erstaunlicher innerer F\xfclle &ndash; f\xfcr jene, die den Mut haben, n\xe4herzukommen.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 9 &ndash; Der Pfirsich: Sanftheit und Frieden</h2>
        <p class="vb-intro">Der Pfirsich ist die friedlichste aller Fr\xfcchte &ndash; weich, warm, samtig, in zarten Farben von Creme \xfcber Gold bis Ros\xe9. Er ist rund und vollst\xe4ndig in sich, ohne Ecken und Kanten. Sein Duft ist still und tief, sein Geschmack harmonisch ohne Extreme. In der chinesischen Tradition gilt der Pfirsich als Symbol f\xfcr Unsterblichkeit, Frieden und kosmische Harmonie. Er dr\xe4ngt sich nicht auf &ndash; er ist einfach da, still und n\xe4hrend. Das Prinzip des Typs 9 in seiner sch\xf6nsten Verdichtung: Friede, der aus sich selbst heraus entsteht.</p>

        ${bookTip("wer-du-wirklich-bist-band-1", "\xdcbersichten, Schaubilder und Typbeschreibungen &ndash; der erste Band der Trilogie, die das Enneagramm lebendig macht.", "Wer du wirklich bist &ndash; Band 1")}
        ${bookTip("wer-du-wirklich-bist-band-2", "Vertiefte Typprofile und archetypische Betrachtungen &ndash; Band 2 der Rathmer-Trilogie.", "Wer du wirklich bist &ndash; Band 2")}
        ${bookTip("wer-du-wirklich-bist-band-3", "27 Subtypen, Heilungswege und das gro\xdfe Bild &ndash; Band 3 als Abschluss der Trilogie.", "Wer du wirklich bist &ndash; Band 3")}
      </div>
      ${relatedLinks([
        {route:"tierentsprechungen", label:"Tierentsprechungen"},
        {route:"tee-enneagramm", label:"Tee-Enneagramm"},
        {route:"symmetrie-des-enneagramms", label:"Symmetrie des Enneagramms"},
      ])}
    </div>
  `);
}

function gemuesesortenPage() {
  return shell(`
    ${pageHeader("gemuesesorten")}
    <div style="max-width:680px;margin:0 auto;padding:0 1rem 3rem;">
      <p class="eyebrow">Schaubilder \xb7 Archetypen</p>
      <h1 class="section-title">Die 9 Gem\xfcsesorten</h1>
      <p class="psycho-intro">Eine enneagrammatisch-archetypische Betrachtung: Was jedes Gem\xfcse \xfcber den Wesenskern eines Typs verr\xe4t.</p>
      <img
        src="./assets/gemuesesorten.jpg"
        alt="Die 9 Gem\xfcse &ndash; Schaubild"
        style="width:100%;max-width:680px;display:block;margin:0 auto 2rem;border-radius:12px;cursor:zoom-in;"
      />
      <div class="vb-section" style="max-width:100%;">

        <h2 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">Typ 1 &ndash; Die Karotte: Klarheit als Prinzip</h2>
        <p class="vb-intro">Die Karotte w\xe4chst gerade, klar strukturiert, immer in dieselbe Richtung &ndash; nach unten in die Tiefe. Sie duldet keine Kurven, wenn der Boden stimmt. Ihre leuchtend orange Farbe ist unverwechselbar, ihr Inneres dicht und n\xe4hrstoffreich. Die Karotte steht seit Jahrhunderten f\xfcr Gesundheit, Verantwortungsbewusstsein und Verl\u00e4sslichkeit &ndash; Gem\xfcse der Vernunft. Sie muss sauber sein, ordentlich gewaschen, unbesch\xe4digt. Eine gebogene Karotte wirkt fast wie ein Fehler in der Natur. Genau so erlebt der Typ 1 die Welt: Gerade, klar und richtig &ndash; oder es stimmt etwas nicht.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 2 &ndash; Der K\xfcrbis: W\xe4rme als Gabe</h2>
        <p class="vb-intro">Der K\xfcrbis ist das n\xe4hrendste, w\xe4rmste Gem\xfcse &ndash; er f\xfcllt Suppen, tr\xf6stet in dunklen Jahreszeiten, gibt sich vollst\xe4ndig hin. Sein Inneres ist reich, goldfarben, weich. Er verlangt viel Pflege beim Wachsen &ndash; aber er gibt viel mehr zur\xfcck als er aufnimmt. In vielen Kulturen steht der K\xfcrbis f\xfcr Gro\xdfz\xfcgigkeit, Gastfreundschaft und M\xfctterlichkeit. Er ist rund, einladend, tr\xe4gt alles in sich. Das Prinzip des Typs 2: aus der eigenen F\xfclle heraus n\xe4hren &ndash; und dabei manchmal vergessen, die eigene Leere zu sp\xfcren.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 3 &ndash; Die Paprika: Wirkung durch Pr\xe4senz</h2>
        <p class="vb-intro">Die Paprika springt ins Auge, noch bevor man sich entschieden hat, was man will &ndash; leuchtend rot, orange, gelb, gr\xfcn: Sie ist das Gem\xfcse der Wirkung. Farbenfroh, attraktiv, unverkennbar. Roh, gegrillt, gef\xfcllt oder als Sauce &ndash; sie \xfcberzeugt in jeder Rolle und macht dabei stets eine gute Figur. Die Paprika ist nicht die stille Zutat im Hintergrund &ndash; sie ist die Hauptdarstellerin, die jeden Teller aufwertet und in jeder K\xfcche der Welt zu Hause ist. Typ 3 in seiner archetypischen Qualit\xe4t: pr\xe4sent, wirkungsbewusst, anpassungsf\xe4hig &ndash; und immer da, wo etwas entsteht, das andere beeindruckt.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 4 &ndash; Die Aubergine: Tiefe hinter der Farbe</h2>
        <p class="vb-intro">Die Aubergine ist das einzigartigste Gem\xfcse &ndash; ein tiefes, sattes Violett, das keine andere Pflanze in dieser Form tr\xe4gt. Sie ist unverwechselbar, fast k\xfcnstlerisch in ihrer Erscheinung. Ihr Inneres ist komplex: Im rohen Zustand bitter, braucht sie Transformation, um ihre wahre Tiefe zu entfalten. Sie ist kein schnelles Gem\xfcse &ndash; sie verlangt Geduld, Fingerspitzengef\xfchl und Verst\xe4ndnis. Wer ihr das gibt, wird mit einer Vielschichtigkeit belohnt, die andere Gem\xfcse nicht kennen. Das Lebensgef\xfchl des Typs 4: Ich bin nicht f\xfcr jeden zug\xe4nglich &ndash; aber f\xfcr jene, die mich verstehen, bin ich unvergleichlich.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 5 &ndash; Der Knoblauch: Tiefe Wirkung im Verborgenen</h2>
        <p class="vb-intro">Der Knoblauch w\xe4chst unter der Erde, unsichtbar, in sich geschlossen und dabei von beinahe \xfcberw\xe4ltigender innerer Komplexit\xe4t. Eine einzelne Zehe &ndash; klein, unscheinbar &ndash; entfaltet eine Wirkung, die ein ganzes Gericht ver\xe4ndert. Knoblauch hat heilende Kr\xe4fte, schon seit Jahrtausenden bekannt, oft untersch\xe4tzt. Er gibt sich nicht preis; man muss ihn erst aufschlie\xdfen, dann tritt seine ganze Kraft hervor. In der Stille wirkt er am st\xe4rksten. Das ist das Prinzip des Typs 5: kompakt, autark, tief &ndash; wer ihn untersch\u00e4tzt, hat seine Kraft noch nicht erlebt.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 6 &ndash; Die Kartoffel: Verl\xe4sslichkeit als Fundament</h2>
        <p class="vb-intro">Die Kartoffel ist das Fundament der europ\xe4ischen K\xfcche &ndash; sie ern\xe4hrt seit Jahrhunderten ganze Kontinente. Sie w\xe4chst unter der Erde, bodenst\xe4ndig und solide, ohne Aufsehen. Sie ist keine Delikatesse, sie ist Grundlage. Sie ist vielseitig einsetzbar, extrem zuverl\xe4ssig und l\xe4sst sich gut lagern. Wenn alle anderen Gem\xfcse knapp sind, ist noch Kartoffel da. In vielen Kulturen steht sie f\xfcr Sicherheit, Heimat und das Gef\xfchl, versorgt zu sein. Das tiefste Bed\xfcerfnis und gr\xf6\xdfte Gabe des Typs 6: Das Fundament sein, auf das andere z\xe4hlen k\xf6nnen.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 7 &ndash; Die Tomate: Lebensfreude ohne Grenzen</h2>
        <p class="vb-intro">Die Tomate ist eigentlich eine Frucht &ndash; doch sie nennt sich Gem\xfcse, weil ihr Kategorien herzlich egal sind. Sie ist die freudigste, sonnigste Erscheinung im Gem\xfcsegarten: rot, gelb, orange, gr\xfcn, rund, l\xe4nglich, klein, riesengro\u00df &ndash; sie existiert in einer \xfcberw\xe4ltigenden Vielfalt und bringt in jede K\xfcche Farbe und Leben. Sie ist \xfcberall zu Hause, liebt das Licht, reift in der W\xe4rme und schmeckt am besten, wenn sie so richtig in ihrem Element ist. Frisch vom Strauch, getrocknet in der Sonne, als Sauce, roh im Salat &ndash; sie findet immer einen Weg, zu begeistern. Das Prinzip des Typs 7: offen f\xfcr alles, \xfcberall willkommen &ndash; und am lebendigsten dort, wo die Sonne scheint.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 8 &ndash; Der Chili: Kraft ohne Kompromisse</h2>
        <p class="vb-intro">Der Chili macht keine halben Sachen &ndash; er ist intensiv, direkt und hinterl\xe4sst einen bleibenden Eindruck. Schon kleine Mengen ver\xe4ndern alles. Er ist nicht f\xfcr jeden, er fordert etwas heraus &ndash; und wer ihm begegnet, wei\xdf es sofort. In vielen Kulturen der Welt gilt der Chili als Symbol f\xfcr Lebendigkeit, Mut und ungez\xe4hmte Energie. Er ist nicht b\xf6se &ndash; er ist kraftvoll. Wer ihn kennt, wei\xdf, wie man mit ihm umgeht; wer ihn missachtet, lernt es schnell. Das Prinzip des Typs 8: direkt, kompromisslos, lebendig &ndash; und von einer Kraft, die andere noch lange sp\xfcren.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 9 &ndash; Der Brokkoli: Harmonie als Natur</h2>
        <p class="vb-intro">Der Brokkoli w\xe4chst in R\xf6schen &ndash; viele kleine Teile, die zusammen ein harmonisches Ganzes ergeben. Er ist friedlich, ausgewogen, in sich stimmig. Kein R\xf6schen dr\xe4ngt sich vor, keines bleibt zur\xfcck &ndash; gemeinsam bilden sie eine runde, vollst\xe4ndige Form. Der Brokkoli steht f\xfcr Gesundheit ohne Aufsehen, N\xe4hrwert ohne Geltungsbed\xfcrfnis. Er f\xfcgt sich ein: in Suppen, Salate, Aufl\xe4ufe &ndash; ohne den Hauptdarsteller zu spielen, aber ohne sein Wesen zu verlieren. Das Prinzip des Typs 9: Harmonie nicht als Kompromiss, sondern als nat\xfcrlichen Zustand &ndash; die stille Mitte, die alles zusammenh\xe4lt.</p>

        ${bookTip("wer-du-wirklich-bist-band-1", "\xdcbersichten, Schaubilder und Typbeschreibungen &ndash; der erste Band der Trilogie, die das Enneagramm lebendig macht.", "Wer du wirklich bist &ndash; Band 1")}
        ${bookTip("wer-du-wirklich-bist-band-2", "Vertiefte Typprofile und archetypische Betrachtungen &ndash; Band 2 der Rathmer-Trilogie.", "Wer du wirklich bist &ndash; Band 2")}
        ${bookTip("wer-du-wirklich-bist-band-3", "27 Subtypen, Heilungswege und das gro\xdfe Bild &ndash; Band 3 als Abschluss der Trilogie.", "Wer du wirklich bist &ndash; Band 3")}
      </div>
      ${relatedLinks([
        {route:"obstsorten", label:"Obstsorten der Typen"},
        {route:"tee-enneagramm", label:"Tee-Enneagramm"},
        {route:"tierentsprechungen", label:"Tierentsprechungen"},
      ])}
    </div>
  `);
}

function weinsortenPage() {
  return shell(`
    ${pageHeader("weinsorten")}
    <div style="max-width:680px;margin:0 auto;padding:0 1rem 3rem;">
      <p class="eyebrow">Schaubilder \xb7 Archetypen</p>
      <h1 class="section-title">Die 9 Weinsorten</h1>
      <p class="psycho-intro">Eine enneagrammatisch-archetypische Betrachtung: Was jede Weinsorte \xfcber den Wesenskern eines Typs verr\xe4t.</p>
      <img
        src="./assets/weinsorten.jpg"
        alt="Die 9 Weinsorten &ndash; Schaubild"
        style="width:100%;max-width:680px;display:block;margin:0 auto 2rem;border-radius:12px;cursor:zoom-in;"
      />
      <div class="vb-section" style="max-width:100%;">

        <h2 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">Typ 1 &ndash; Chardonnay: Perfektion als Prinzip</h2>
        <p class="vb-intro">Der Chardonnay ist die edelste, anspruchsvollste Wei\xdfweinsorte der Welt &ndash; im Burgund ist er der Ma\xdfstab, an dem alle anderen gemessen werden. Er verlangt vom Winzer h\xf6chste Sorgfalt: im Weinberg, beim Ausbau, bei der Lese. Jede Ungenauigkeit zeigt sich sofort im Glas. Im besten Ausdruck ist er von makelloser Klarheit und zeitloser Eleganz &ndash; weil alles stimmt und nichts \xfcberfl\xfcssig ist. Er duldet keine Schlamperei. Das Prinzip des Typs 1: Wenn die Grundlage rein ist und jeder Schritt stimmt, entsteht etwas Unverf\xe4lschtes.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 2 &ndash; Riesling: W\xe4rme und Tiefe</h2>
        <p class="vb-intro">Der Riesling gibt sich vollst\xe4ndig &ndash; er dr\xfcckt seinen Ursprung, sein Terroir, seine ganze innere F\xfclle unverh\xfcllt aus. Sein Duft ist einladend, warm, fr\xfcchtreich: Pfirsich, Aprikose, Honig &ndash; eine fast sinnliche Gro\xdfz\xfcgigkeit. Er n\xe4hrt, er \xf6ffnet sich, er macht kein Geheimnis aus dem, was er tr\xe4gt. Gleichzeitig besitzt er eine Tiefe, die viele untersch\u00e4tzen. Der Riesling gibt, ohne zu fordern &ndash; aber wer wirklich hinschaut, entdeckt, wie viel er in sich birgt. Das Prinzip des Typs 2: Sich geben aus innerer F\xfclle heraus &ndash; und dabei tiefer sein, als man vermuten w\xfcrde.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 3 &ndash; Cabernet Sauvignon: Erfolg als Ma\xdfstab</h2>
        <p class="vb-intro">Der Cabernet Sauvignon ist der erfolgreichste Rotwein der Welt &ndash; in Bordeaux, in Napa Valley, in Chile, in Australien: \xfcberall dort, wo er w\xe4chst, setzt er Ma\xdfst\xe4be. Er ist kraftvoll, strukturiert, prestige\xf6s. Er wird von Kennern gesch\xe4tzt und von der Masse begehrt &ndash; eine seltene Kombination. Er passt sich an, ohne sein Wesen zu verlieren: in jedem Klima bringt er das Beste aus sich heraus und bleibt dabei stets unverkennbar. Der Cabernet Sauvignon muss keine Aufmerksamkeit erzwingen &ndash; sie kommt von selbst. Das Prinzip des Typs 3: Die Besten ihrer Klasse werden nicht bejubelt, weil sie es verlangen, sondern weil ihre Leistung f\xfcr sich spricht.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 4 &ndash; Pinot Noir: Tiefe hinter der Zartheit</h2>
        <p class="vb-intro">Der Pinot Noir ist das r\xe4tselhafteste aller Gew\xe4chse &ndash; empfindlich, anspruchsvoll, schwer zu kultivieren, und doch von einer Sch\xf6nheit, die keine andere Rebsorte erreicht. Er braucht genau die richtigen Bedingungen, um sich zu \xf6ffnen. Im besten Ausdruck entfaltet er ein Bouquet von unglaublicher Tiefe: Kirschen, Erde, Rosen, Leder, Veilchen &ndash; Schicht um Schicht. Kein anderer Wein ist so komplex, so nuanciert, so f\xe4hig, eine Geschichte zu erz\xe4hlen. Und kaum ein anderer Wein ist so selten wirklich vollkommen. Das Lebensgef\xfchl des Typs 4: Nur wer bereit ist, wirklich hinzuschauen, entdeckt etwas Unvergleichliches.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 5 &ndash; Sauvignon Blanc: Pr\xe4zision im Verborgenen</h2>
        <p class="vb-intro">Der Sauvignon Blanc ist der analytischste aller Weine &ndash; seine Aromen sind messerscharf und pr\xe4zise: Stachelbeere, Zitrusgras, Minze, Kiesel. Er macht keine Andeutungen, er ist exakt. Er strotzt nicht vor Volumen oder Opulenz, aber seine Klarheit ist bestechend. In Sancerre oder Marlborough tritt er als konzentrierte Essenz auf: wenig Aufhebens, viel Substanz. Er ist kein Schmeichler &ndash; er ist klar, direkt und in seinem Element vollst\xe4ndig autark. Das Prinzip des Typs 5: Was nach au\xdfen zur\xfcckhaltend wirkt, birgt innen eine Sch\xe4rfe des Geistes, die andere \xfcberrascht.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 6 &ndash; Merlot: Verl\xe4sslichkeit als Fundament</h2>
        <p class="vb-intro">Der Merlot ist der verl\xe4sslichste aller Rotweine &ndash; sanft, zug\xe4nglich, niemals aggressiv. Er hat keine Ecken und Kanten, er \xfcberfordert niemanden. Er ist da, wenn man ihn braucht, er passt zu fast allem und entt\xe4uscht selten. Kein Wein l\xe4dt so m\xfchelos zum Miteinander ein. In Pomerol, im besten Ausdruck, zeigt er eine Tiefe und Verl\u00e4sslichkeit, die verbl\xfcfft. Der Merlot ist kein Selbstdarsteller &ndash; er ist das Fundament, auf das man sich verlassen kann. Das Prinzip des Typs 6: Wer immer da ist, wer niemals im Stich l\xe4sst, wird mehr gesch\xe4tzt, als er selbst oft wei\xdf.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 7 &ndash; Primitivo: Lebensfreude pur</h2>
        <p class="vb-intro">Der Primitivo aus Apulien ist der freudigste aller Weine &ndash; s\xfc\xdf, \xfcppig, voller s\xfcdlicher W\xe4rme und Lebendigkeit. Er kommt aus dem Sonnenlicht, schmeckt nach reifen Kirschen, dunklen Beeren und einem Hauch von Gew\xfcrz, und er verbreitet sofort gute Laune. Er ist unbeschwert, er ist einladend, er macht keine gro\xdfen Umst\xe4nde. Kein anderer Wein verk\xf6rpert so sehr das Gef\xfchl von Sommer, Geselligkeit und dem Genuss des Augenblicks. Der Primitivo lebt im Hier und Jetzt &ndash; und nimmt alle mit. Das Prinzip des Typs 7: Freude ist kein Luxus, sondern eine Lebenshaltung.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 8 &ndash; Syrah / Shiraz: Kraft ohne Kompromisse</h2>
        <p class="vb-intro">Der Syrah &ndash; in Australien als Shiraz bekannt &ndash; macht keine halben Sachen. Er ist tief, dunkel, pfeffrig, kraftvoll und hinterl\xe4sst einen Eindruck, den man nicht so schnell vergisst. Er beansprucht Raum im Glas wie am Tisch. Er ist nicht f\xfcr jeden, er fordert etwas heraus &ndash; aber wer ihm begegnet, wei\xdf es sofort. In der Rh\u00f4ne ist er monumental, in Barossa \xfcberw\xe4ltigend. Der Syrah gibt sich nicht preis, er tritt ein. Das Prinzip des Typs 8: Wer diese Energie kennt und respektiert, erlebt eine Kraft und Vitalit\xe4t, die weit \xfcber das Glas hinaus noch wirkt.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 9 &ndash; Ros\xe9: Stille Harmonie</h2>
        <p class="vb-intro">Der Ros\xe9 ist der Vermittler unter den Weinen &ndash; er steht zwischen Rot und Wei\xdf, f\xfcgt beides zusammen und schafft dabei etwas Eigenes, Leichtes, Harmonisches. Er dr\xe4ngt sich nicht auf, er \xfcberw\u00e4ltigt nicht, er eckt nirgends an. Er ist der Wein f\xfcr alle &ndash; immer passend, immer willkommen, niemals schwierig. In der Provence ist er von stiller Eleganz: zart, ausgewogen, ein Wein des Friedens. Man bemerkt ihn nicht sofort &ndash; aber wenn er fehlt, fehlt etwas. Das Prinzip des Typs 9: Diese Harmonie hat System – sie ist die sch\xf6nste Form von Pr\xe4senz &ndash; die stille Mitte, die alles zusammenh\xe4lt.</p>

        ${bookTip("wer-du-wirklich-bist-band-1", "\xdcbersichten, Schaubilder und Typbeschreibungen &ndash; der erste Band der Trilogie, die das Enneagramm lebendig macht.", "Wer du wirklich bist &ndash; Band 1")}
        ${bookTip("wer-du-wirklich-bist-band-2", "Vertiefte Typprofile und archetypische Betrachtungen &ndash; Band 2 der Rathmer-Trilogie.", "Wer du wirklich bist &ndash; Band 2")}
        ${bookTip("wer-du-wirklich-bist-band-3", "27 Subtypen, Heilungswege und das gro\xdfe Bild &ndash; Band 3 als Abschluss der Trilogie.", "Wer du wirklich bist &ndash; Band 3")}
      </div>
      ${relatedLinks([
        {route:"obstsorten", label:"Obstsorten der Typen"},
        {route:"gemuesesorten", label:"Gem\xfcsesorten der Typen"},
        {route:"tee-enneagramm", label:"Tee-Enneagramm"},
      ])}
    </div>
  `);
}

function brotsortenPage() {
  return shell(`
    ${pageHeader("brotsorten")}
    <div style="max-width:680px;margin:0 auto;padding:0 1rem 3rem;">
      <p class="eyebrow">Schaubilder \xb7 Archetypen</p>
      <h1 class="section-title">Die 9 Brotsorten</h1>
      <p class="psycho-intro">Eine enneagrammatisch-archetypische Betrachtung: Was jede Brotsorte \xfcber den Wesenskern eines Typs verr\xe4t.</p>
      <img
        src="./assets/brotsorten.jpg"
        alt="Die 9 Brotsorten &ndash; Schaubild"
        style="width:100%;max-width:680px;display:block;margin:0 auto 2rem;border-radius:12px;cursor:zoom-in;"
      />
      <div class="vb-section" style="max-width:100%;">

        <h2 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">Typ 1 &ndash; Das Vollkornbrot: Substanz ohne Kompromisse</h2>
        <p class="vb-intro">Das Vollkornbrot ist das konsequenteste aller Brote &ndash; kein Wei\xdfmehl, kein Zucker, keine Abk\xfcrzungen. Es wird aus dem ganzen Korn gebacken, n\xe4hrstoffreich, best\xe4ndig, ohne unn\xf6tigen Schnickschnack. Sein Geschmack ist erdig, kr\xe4ftig, unverbl\u00fcmt &ndash; es versteckt nichts. Das Vollkornbrot tut, was es verspricht: es n\xe4hrt wirklich, es h\xe4lt wirklich satt, es ist wirklich gesund. Kein anderes Brot steht so sehr f\xfcr Wahrhaftigkeit und Konsequenz. Das Prinzip des Typs 1: Was stimmt, stimmt vollst\xe4ndig &ndash; und was nicht stimmt, sollte es auch nicht behaupten.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 2 &ndash; Die Brioche: S\xfc\xdfe als Gabe</h2>
        <p class="vb-intro">Die Brioche ist das herzlichste aller Brote &ndash; weich, butterreich, leicht s\xfc\xdf, von einer einladenden W\xe4rme, die sofort Geborgenheit ausstrahlt. Sie ist kein Alltagsbrot; sie ist ein Geschenk. In Frankreich reicht man sie zu besonderen Anl\xe4ssen, zur Feier, zur Freude. Die Brioche gibt sich vollst\xe4ndig hin &ndash; jede Zutat, jeder Handgriff dient dem Wohlgef\xfchl der anderen. Sie schmeckt nach Zuwendung. Wer sie b\xe4ckt, sagt damit: Ich habe Zeit f\xfcr dich investiert. Das Prinzip des Typs 2: Sich geben aus Freude am Geben &ndash; und dabei ein Werk schaffen, das andere ber\xfchrt.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 3 &ndash; Die Ciabatta: Leistung durch Leichtigkeit</h2>
        <p class="vb-intro">Die Ciabatta ist das eleganteste aller Brote &ndash; luftig, knusprig, von einer offenen Krume, die Leichtigkeit suggeriert, w\xe4hrend sie gleichzeitig \xfcberzeugend Substanz zeigt. Sie ist vielseitig: als Sandwich, zum Dippen, zur Vorspeise &ndash; sie spielt jede Rolle m\xfchelos und macht dabei stets eine gute Figur. In Italien ist sie das Brot des modernen Erfolgs &ndash; jung, zeitgem\xe4\xdf, weltweit bekannt. Die Ciabatta muss sich nicht erkl\xe4ren. Sie wirkt. Das Prinzip des Typs 3: Leistung soll leicht aussehen &ndash; auch wenn dahinter Meisterschaft steckt.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 4 &ndash; Das Sauerteigbrot: Tiefe durch Transformation</h2>
        <p class="vb-intro">Das Sauerteigbrot ist das einzigartigste aller Brote &ndash; kein Exemplar gleicht dem anderen, jeder Laib tr\xe4gt die Handschrift seiner Entstehung. Es wird nicht durch industrielle Hefe angetrieben, sondern durch einen lebendigen, wilden Starter, der Jahrzehnte alt sein kann. Die S\xe4ure gibt ihm Charakter, Tiefe und eine unverwechselbare Note. Es braucht Zeit, Geduld und ein feines Gef\xfchl &ndash; wer es eilig hat, bekommt ein anderes Brot. Im Inneren ist es von komplexer Sch\xf6nheit: Blasen, Schichten, Aromen \xfcber Aromen. Das Lebensgef\xfchl des Typs 4: Ich bin das Ergebnis meiner eigenen Geschichte &ndash; und das ist unwiederholbar.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 5 &ndash; Der Pumpernickel: Konzentrierte Essenz</h2>
        <p class="vb-intro">Der Pumpernickel ist das dichteste, konzentrierteste aller Brote &ndash; kompakt, dunkel, von fast schon mineralischer Intensit\xe4t. Er zeigt nach au\xdfen wenig: keine gold\u00adbraune Kruste, keine luftige Krume, kein schnelles Versprechen. Aber in ihm steckt eine Tiefe von N\xe4hrstoffen und Geschmack, die andere Brote nicht ann\xe4hernd erreichen. Er wird langsam gebacken, oft \xfcber viele Stunden, bei niedriger Temperatur &ndash; stille Prozesse, die das Beste hervorbringen. Er ist nicht f\xfcr jeden Gaumen, aber f\xfcr jene, die ihn verstehen, gibt es kaum \xc4quivalentes. Das Prinzip des Typs 5: Wer nach innen schaut, findet mehr als die Oberfl\xe4che verspricht.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 6 &ndash; Das Roggenbrot: Verl\xe4sslichkeit als Tugend</h2>
        <p class="vb-intro">Das Roggenbrot ist das verl\xe4sslichste aller Brote &ndash; seit Jahrhunderten Grundnahrungsmittel in Mittel- und Nordeuropa, bepr\xfcft von Generationen, nie aus der Mode. Es h\xe4lt lange frisch, n\xe4hrt nachhaltig, schmeckt jeden Tag. Kein Brot ist so bodenst\xe4ndig, so treu, so wenig auf Aufmerksamkeit aus. Das Roggenbrot verspricht nichts, was es nicht h\xe4lt &ndash; und es h\xe4lt, was es verspricht. In Krisenzeiten war es oft das einzige Brot, das blieb. Das tiefste Prinzip des Typs 6: Bestand haben, wenn andere verschwinden &ndash; und dabei nie das Vertrauen der Menschen entt\xe4uschen.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 7 &ndash; Die Focaccia: Lebensfreude mit Kr\xe4utern</h2>
        <p class="vb-intro">Die Focaccia ist das freudigste aller Brote &ndash; flach, gro\xdfz\xfcgig belegt, duftend nach Oliven\u00f6l, Rosmarin, Meersalz, Tomaten, Oliven, was immer gerade Lust macht. Sie l\xe4dt ein, sie teilt sich, sie verbreitet mediterrane Lebensfreude. Kein Brot ist so unkompliziert gesellig: Man rei\xdft sie einfach ab, gibt weiter, genie\xdft den Moment. Die Focaccia ist nicht f\xfcr sp\xe4ter &ndash; sie ist f\xfcrs Jetzt. Sie kombiniert spielend Geschmack und Leichtigkeit und macht dabei keine gro\xdfen Umst\xe4nde. Das Prinzip des Typs 7: Das Leben ist eine Einladung &ndash; und das Beste daran ist, sie anzunehmen.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 8 &ndash; Das Baguette: Direktheit als Stil</h2>
        <p class="vb-intro">Das Baguette macht keine halben Sachen &ndash; au\xdfen hart und knusprig, innen luftig und kr\xe4ftig, ohne jede Entschuldigung. Es ist eines der bekanntesten Brote der Welt, und es wei\xdf das. Es beansprucht Raum: L\xe4nge, Pr\xe4senz, eine Kruste, die laut knackt, wenn man sie bricht. Es passt sich nicht an &ndash; alle anderen passen sich ihm an. In Frankreich ist es nicht einfach ein Brot, es ist ein Lebensbekenntnis. Man tr\xe4gt es offen unter dem Arm, unversteckt, unvermummt. Das Prinzip des Typs 8: Pr\xe4senz braucht keine Erkl\xe4rung &ndash; sie ist einfach da.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 9 &ndash; Das Wei\xdfbrot: Stille Harmonie</h2>
        <p class="vb-intro">Das Wei\xdfbrot ist das friedlichste aller Brote &ndash; weich, mild, ohne Ecken und Kanten, in sich vollkommen ruhig. Es \xfcberw\xe4ltigt nicht, es dr\xe4ngt sich nicht auf, es stellt keine Anforderungen. Es passt zu jedem Belag, zu jedem Anlass, zu jedem Menschen. Morgens als Toast, mittags als Sandwich, abends als Beilage &ndash; es f\xfcgt sich ein, ohne sich zu verlieren. Sein Geheimnis liegt in der Stille: Es ist da, es n\xe4hrt, es verbindet &ndash; und man bemerkt erst, wie wichtig es war, wenn es fehlt. Das Prinzip des Typs 9: Nicht das Lauteste ist das Wichtigste, sondern das, in dem sich alle wiederfinden k\xf6nnen.</p>

        ${bookTip("wer-du-wirklich-bist-band-1", "\xdcbersichten, Schaubilder und Typbeschreibungen &ndash; der erste Band der Trilogie, die das Enneagramm lebendig macht.", "Wer du wirklich bist &ndash; Band 1")}
        ${bookTip("wer-du-wirklich-bist-band-2", "Vertiefte Typprofile und archetypische Betrachtungen &ndash; Band 2 der Rathmer-Trilogie.", "Wer du wirklich bist &ndash; Band 2")}
        ${bookTip("wer-du-wirklich-bist-band-3", "27 Subtypen, Heilungswege und das gro\xdfe Bild &ndash; Band 3 als Abschluss der Trilogie.", "Wer du wirklich bist &ndash; Band 3")}
      </div>
      ${relatedLinks([
        {route:"obstsorten", label:"Obstsorten der Typen"},
        {route:"gemuesesorten", label:"Gem\xfcsesorten der Typen"},
        {route:"weinsorten", label:"Weinsorten der Typen"},
      ])}
    </div>
  `);
}

function kaesesortenPage() {
  return shell(`
    ${pageHeader("kaesesorten")}
    <div style="max-width:680px;margin:0 auto;padding:0 1rem 3rem;">
      <p class="eyebrow">Schaubilder \xb7 Archetypen</p>
      <h1 class="section-title">Die 9 K\xe4sesorten</h1>
      <p class="psycho-intro">Eine enneagrammatisch-archetypische Betrachtung: Was jede K\xe4sesorte \xfcber den Wesenskern eines Typs verr\xe4t.</p>
      <img
        src="./assets/kaesesorten.jpg"
        alt="Die 9 K\xe4sesorten &ndash; Schaubild"
        style="width:100%;max-width:680px;display:block;margin:0 auto 2rem;border-radius:12px;cursor:zoom-in;"
      />
      <div class="vb-section" style="max-width:100%;">

        <h2 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">Typ 1 &ndash; Parmesan: Perfektion durch Reife</h2>
        <p class="vb-intro">Der Parmesan ist der konsequenteste aller K\xe4se &ndash; hart, kristallin, von einer W\xfcrze, die aus langer Reife entsteht. Ein echter Parmigiano Reggiano braucht mindestens zw\xf6lf Monate, oft zwei Jahre oder mehr. Kein Abk\xfcrzung, kein Kompromiss. Er duldet keine Nachahmung: Der Name ist gesch\xfctzt, die Herstellung streng geregelt, die Qualit\xe4t pr\xfcfbar. Im Anschnitt zeigt er Struktur und Tiefe &ndash; K\xf6rnchen, die von innen gl\xe4nzen. Das Prinzip des Typs 1: Wahre Qualit\xe4t entsteht nicht durch Eile, sondern durch Konsequenz, Zeit und die Weigerung, Fehler durchgehen zu lassen.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 2 &ndash; Brie: W\xe4rme als Einladung</h2>
        <p class="vb-intro">Der Brie ist der herzlichste aller K\xe4se &ndash; weich, cremig, von einem mild-w\xfcrzigen Schimmelmantel umh\xfcllt, der sofort Geborgenheit ausstrahlt. Er \xf6ffnet sich bei Zimmertemperatur vollst\xe4ndig, gibt sich hin, wird weich und einladend. Der Brie macht kein Aufheben &ndash; er ist einfach da, warm und gro\xdfz\xfcgig. Er passt zu allem und zu jedem, st\xf6rt nie, bereichert immer. In Frankreich ist er das Symbol f\xfcr Gastfreundschaft und das entspannte Miteinander. Das Prinzip des Typs 2: Sich \xf6ffnen, sich hingeben, den anderen willkommen hei\xdfen &ndash; und darin die eigene Erf\xfcllung finden.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 3 &ndash; Cheddar: Erfolg durch Anpassung</h2>
        <p class="vb-intro">Der Cheddar ist der erfolgreichste K\xe4se der Welt &ndash; in Supermarktketten, auf Burgern, in gehobenen K\xfcchen, in jedem Klima und jeder Kultur ist er zu Hause. Er ist anpassungsf\xe4hig: mild oder reif, jung oder gereift, orange oder wei\xdf. Er \xfcberzeugt in jeder Rolle, ohne sich zu verbiegen. Seine Beliebtheit hat einen klaren Grund: das Ergebnis echter Qualit\xe4t, die sich stets dem Kontext anpasst. Er muss sich nicht erkl\xe4ren &ndash; er ist einfach \xfcberall, und das aus gutem Grund. Das Prinzip des Typs 3: Erfolg ist kein Gl\xfcck, sondern die F\xe4higkeit, in jedem Umfeld das Beste aus sich herauszuholen.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 4 &ndash; Roquefort: Tiefe durch Verwandlung</h2>
        <p class="vb-intro">Der Roquefort ist der eindringlichste aller K\xe4se &ndash; intensiv, komplex, mit einem Schimmel durchzogen, der ihn unverwechselbar und f\xfcr viele zun\xe4chst unbehagend macht. Er ist kein K\xe4se f\xfcr jeden. Wer ihn versteht, erlebt eine Tiefe und Vielschichtigkeit, die andere K\xe4se nicht ann\xe4hernd erreichen. In H\xf6hlen der Aveyron reift er in Dunkelheit und Stille &ndash; Transformation als Voraussetzung f\xfcr seinen einzigartigen Charakter. Das Lebensgef\xfchl des Typs 4: Ich bin das Ergebnis meiner tiefsten Erfahrungen &ndash; und genau das macht mich unvergleichlich.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 5 &ndash; Gruy\xe8re: Konzentrierte Tiefe</h2>
        <p class="vb-intro">Der Gruy\xe8re ist der pr\xe4ziseste aller K\xe4se &ndash; fest, dicht, mit einem nuancierten Geschmack, der sich erst bei genauem Hinschmecken v\xf6llig erschlie\xdft. Er ist kein Schauk\xe4se, kein Aufschneider. Er zeigt wenig nach au\xdfen, aber sein Inneres ist von bemerkenswerter Komplexit\xe4t: N\xfcsse, Karamell, ein Hauch Gew\xfcrz &ndash; Schicht um Schicht. Er reift langsam, in Stille, in kontrollierten Kellern. Wer ihn fl\xfcchtig isst, bemerkt ihn kaum. Wer inneh\u00e4lt und wirklich kostet, ist \xfcberrascht. Das Prinzip des Typs 5: Die gr\xf6\xdfte Tiefe zeigt sich nicht sofort &ndash; sie erschlie\xdft sich nur denen, die bereit sind, wirklich hinzuschauen.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 6 &ndash; Gouda: Verl\xe4sslichkeit als Fundament</h2>
        <p class="vb-intro">Der Gouda ist der zuverl\xe4ssigste aller K\xe4se &ndash; mild, berechenbar, stets gut, niemals entt\xe4uschend. Er ist seit Jahrhunderten in den Niederlanden ein Grundnahrungsmittel und weltweit bekannt. Man wei\xdf, was man bekommt, und man bekommt, was man erwartet. Als junger K\xe4se ist er sanft und zug\xe4nglich, als gereifter K\xe4se entwickelt er \xfcberraschende Tiefe &ndash; aber er \xfcberrumpelt nie. Er ist f\xfcr jeden Anlass geeignet, morgens auf dem Brot, abends auf der K\xe4seplatte. Das Prinzip des Typs 6: Wer immer da ist, wer niemals entt\xe4uscht, wird mehr gesch\xe4tzt als jene, die gl\xe4nzen und versagen.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 7 &ndash; Camembert: Lebensfreude mit Charakter</h2>
        <p class="vb-intro">Der Camembert ist der lebendigste aller K\xe4se &ndash; aromatisch, ausdrucksstark, von einer wei\xdfen Schimmelrinde, die einen cremigen, fast ekstatisch duftenden Kern verbirgt. Bei Zimmertemperatur erreicht er sein volles Potenzial: Er flie\xdft, er duftet, er f\xfcllt den Raum. Der Camembert l\xe4dt ein, er macht Stimmung, er ist das Leben auf einer K\xe4seplatte. Aus der Normandie stammend, geh\xf6rt er zur franz\xf6sischen Lebensfreude wie kein anderer. Er will geteilt, genossen und gefeiert werden. Das Prinzip des Typs 7: Das Sch\xf6ne am Leben ist, es mit anderen zu erleben &ndash; und dabei vollst\xe4ndig pr\xe4sent zu sein.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 8 &ndash; Pecorino: Kraft ohne Umschweife</h2>
        <p class="vb-intro">Der Pecorino ist der kraftvollste aller K\xe4se &ndash; aus Schafsmilch hergestellt, intensiv, salzig, von einer Direktheit, die keine Fragen offen l\xe4sst. Er beansprucht Raum im Mund wie auf dem Teller. Er ist kein K\xe4se, den man \xfcbersieht oder \xfcbergehen kann. Schon ein St\xfcck ver\xe4ndert das ganze Gericht. In S\xfcditalien und Sardinien ist er seit Jahrtausenden Teil einer Kultur, die Kraft, Direktheit und Lebendigkeit sch\xe4tzt. Kein Schnickschnack, kein Versteckspiel. Das Prinzip des Typs 8: Wer Pr\xe4senz hat, braucht sie nicht zu erkl\xe4ren &ndash; man sp\xfcrt sie sofort.</p>

        <h2 style="font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;color:var(--ink);">Typ 9 &ndash; Mozzarella: Stille Harmonie</h2>
        <p class="vb-intro">Der Mozzarella ist der friedlichste aller K\xe4se &ndash; wei\xdf, weich, mild, in sich vollkommen ruhig. Er \xfcberw\xe4ltigt nicht, er dr\xe4ngt sich nicht auf, er fordert nichts. Er passt zu fast allem: zur Tomate, zum Salat, zur Pizza, zur Vorspeise. Er f\xfcgt sich ein, ohne sein Wesen zu verlieren. Frisch aus der Molke gegessen ist er von einer stillen Sch\xf6nheit: feucht, zart, leicht &ndash; eine Einladung zur Stille. Kein K\xe4se verbindet so m\xfchelos wie er. Das Prinzip des Typs 9: Harmonie ist keine Schw\u00e4che, sondern die tiefste Form von Pr\xe4senz &ndash; die stille Mitte, in der alle zur Ruhe kommen.</p>

        ${bookTip("wer-du-wirklich-bist-band-1", "\xdcbersichten, Schaubilder und Typbeschreibungen &ndash; der erste Band der Trilogie, die das Enneagramm lebendig macht.", "Wer du wirklich bist &ndash; Band 1")}
        ${bookTip("wer-du-wirklich-bist-band-2", "Vertiefte Typprofile und archetypische Betrachtungen &ndash; Band 2 der Rathmer-Trilogie.", "Wer du wirklich bist &ndash; Band 2")}
        ${bookTip("wer-du-wirklich-bist-band-3", "27 Subtypen, Heilungswege und das gro\xdfe Bild &ndash; Band 3 als Abschluss der Trilogie.", "Wer du wirklich bist &ndash; Band 3")}
      </div>

      ${relatedLinks([
        {route:"brotsorten", label:"Brotsorten der Typen"},
        {route:"weinsorten", label:"Weinsorten der Typen"},
        {route:"obstsorten", label:"Obstsorten der Typen"},
      ])}
    </div>
  `);
}

// Auf Modulebene (statt nur innerhalb von beruehmtePersoenlichkeitenPage()
// als lokale Closure), damit bpApply() beim Filtern die passenden Karten
// selbst neu bauen kann, statt - wie früher - alle 395 Karten auf einmal
// ins DOM zu rendern und nur per CSS auszublenden. Letzteres hat auf dem
// iPhone bei "Berühmte Persönlichkeiten" (mit Abstand die größte Rubrik,
// ~4x mehr Einträge als Krankheitsporträts/Kriminalfälle) zu Safaris
// "Es ist wiederholt ein Problem aufgetreten"-Speicherabsturz geführt.
const BP_KAT_COLORS = {
  "Musik":"#7c3aed","Schauspiel":"#b45309","Wissenschaft":"#0369a1",
  "Sport":"#15803d","Politik":"#c0392b","Kunst":"#be185d",
  "Literatur":"#92400e","Wirtschaft":"#2563c7","Astronaut":"#0e7490","Medien":"#0f766e","Sonstiges":"#6b7280"
};
function bpCardHTML(p) {
  const inst = (p.subtyp||"").substring(0,2).toUpperCase();
  const typ  = parseInt((p.subtyp||"").replace(/[^0-9]/g,"")[0]||"0");
  const kats = (p.tags||[]).join(",");
  const tierKey = (p.subtyp||'').substring(0,3).toLowerCase();
  const tierImg = tierKey ? 'https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/'+tierKey+'.jpg' : '';
  return '<div class="kf-card" data-bp-inst="'+inst+'" data-bp-typ="'+typ+'" data-bp-kats="'+kats+'" data-bp-gender="'+(p.gender||'')+'" data-bp-land="'+(p.land||'')+'" data-route="'+p.route+'"'
    +' style="cursor:pointer;max-width:100%;background:var(--ivory);border:1.5px solid var(--border);"'
    +' onmouseover="this.style.borderColor=\'var(--gold)\';this.style.boxShadow=\'0 2px 12px rgba(0,0,0,.1)\'"'
    +' onmouseout="this.style.borderColor=\'var(--border)\';this.style.boxShadow=\'none\'">'
    +'<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:1rem;">'
    +'<div style="flex:1;min-width:0;"><h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.4rem;color:var(--ink);">'+p.heading+(p.added&&new Date()-new Date(p.added)<30*864e5?' <span style="background:#c9a84c;color:#fff;font-size:0.6rem;font-weight:700;padding:0.1rem 0.4rem;border-radius:4px;vertical-align:middle;letter-spacing:0.05em;">NEU</span>':'')+'</h3>'
    +'<p class="vb-intro" style="margin:0 0 0.8rem;font-size:0.92rem;">'+p.teaser+'</p>'
    +'<div style="display:flex;gap:0.4rem;flex-wrap:wrap;margin-bottom:0.6rem;">'
    +(p.tags||[]).map(function(t){
      const col = BP_KAT_COLORS[t]||"var(--copper)";
      return '<span class="kf-tag" style="background:'+col+'18;color:'+col+';border:1px solid '+col+'40;padding:0.15rem 0.55rem;border-radius:4px;font-size:0.78rem;font-weight:600;">'+t+'</span>';
    }).join("")
    +'</div>'
    +'<span style="font-size:0.82rem;color:var(--copper);font-weight:600;">Zum Porträt &rarr;</span></div>'
    +'<div style="display:flex;flex-direction:column;align-items:center;gap:0.4rem;flex-shrink:0;">'
    +(tierImg ? '<div style="position:relative;width:48px;height:48px;border-radius:50%;overflow:hidden;border:2px solid var(--gold);"><img src="'+tierImg+'" alt="'+tierKey.toUpperCase()+'" loading="lazy" style="position:absolute;top:'+tierAvatarTop(tierKey)+';left:'+tierAvatarLeft(tierKey)+';width:140%;height:140%;object-fit:cover;" /></div>' : '')
    +'<span style="font-size:1.4rem;color:var(--gold);">&#9655;</span>'
    +'</div>'
    +'</div></div>';
}
// Baut eine flache Kartenliste (keine Abschnitts-Überschriften) für eine
// bereits gefilterte Teilmenge - genutzt von bpApply() beim Filtern.
function bpCardsFlatHTML(list) {
  if (!list.length) {
    return '<p style="color:var(--muted);font-style:italic;padding:2rem 0;">Keine Treffer für diese Filterkombination.</p>';
  }
  return list.map(bpCardHTML).join("");
}
const BP_PAGE_SIZE = 60;

function beruehmtePersoenlichkeitenPage() {
  const allKats = ["Musik","Schauspiel","Wissenschaft","Sport","Politik","Kunst","Literatur","Wirtschaft","Astronaut","Medien","Sonstiges"];
  const katLabel = {
    "Musik":        "Musik",
    "Schauspiel":   "Schauspiel / Film",
    "Wissenschaft": "Wissenschaft",
    "Sport":        "Sport",
    "Politik":      "Politik",
    "Kunst":        "Kunst",
    "Literatur":    "Literatur",
    "Wirtschaft":   "Wirtschaft / Unternehmertum",
    "Astronaut":    "Raumfahrt / Exploration",
    "Medien":       "Medien / TV",
    "Sonstiges":    "Sonstiges",
  };
  const katColors = {
    "Musik":"#7c3aed","Schauspiel":"#b45309","Wissenschaft":"#0369a1",
    "Sport":"#15803d","Politik":"#c0392b","Kunst":"#be185d",
    "Literatur":"#92400e","Wirtschaft":"#2563c7","Astronaut":"#0e7490","Medien":"#0f766e","Sonstiges":"#6b7280"
  };

  function filterBar() {
    const instBtn = inst => '<button class="kf-btn" data-bp-inst="'+inst+'" onclick="bpSet(\'inst\',\''+inst+'\')">'+(inst==="ALL"?"Alle":inst)+'</button>';
    const typBtn = n => {
      const col = n===0 ? null : (TYPE_COLORS[n]||"var(--copper)");
      const style = col ? ' style="--kf-typ-col:'+col+';"' : '';
      return '<button class="kf-btn kf-btn--typ'+(col?' kf-btn--typ-colored':'')+'"'
        +' data-bp-typ="'+n+'" data-kf-col="'+(col||'')+'"'
        +style+' onclick="bpSet(\'typ\','+n+')">'+(n===0?"Alle":n)+'</button>';
    };
    const katBtn = k => {
      const col = katColors[k]||"var(--copper)";
      return '<button class="kf-btn kf-btn--tag" data-bp-kat="'+k+'"'
        +' style="--kf-tag-col:'+col+';" onclick="bpSet(\'kat\',\''+k+'\')">'+(katLabel[k]||k)+'</button>';
    };
    const genderBtn = (val, label) => '<button class="kf-btn" data-bp-gender="'+val+'" onclick="bpSet(\'gender\',\''+val+'\')">'+label+'</button>';
    const lands = Array.from(new Set(BERUEHMT_PORTRAITS.map(p => p.land).filter(Boolean))).sort((a,b) => a.localeCompare(b, "de"));
    const landSelect = '<select id="bp-land-select" class="kf-btn" style="cursor:pointer;" onchange="bpSetLand(this.value)">'
      +'<option value="ALL">Alle Herkunftsl\u00e4nder</option>'
      +lands.map(l => '<option value="'+l+'">'+l+'</option>').join("")
      +'</select>';
    return '<div class="kf-bar">'
      +'<div class="kf-row"><span class="kf-label">Instinkt</span>'
      +instBtn("ALL")+["SE","SO","SX"].map(instBtn).join("")+'</div>'
      +'<div class="kf-row"><span class="kf-label">Typ</span>'
      +typBtn(0)+[1,2,3,4,5,6,7,8,9].map(typBtn).join("")+'</div>'
      +'<div class="kf-row"><span class="kf-label">Bereich</span>'
      +katBtn("ALL")+allKats.map(katBtn).join("")+'</div>'
      +'<div class="kf-row"><span class="kf-label">Geschlecht</span>'
      +genderBtn("ALL","Alle")+genderBtn("m","M\u00e4nnlich")+genderBtn("f","Weiblich")+'</div>'
      +'<div class="kf-row"><span class="kf-label">Herkunft</span>'+landSelect+'</div>'
      +'<div class="kf-count"><span id="bp-count-num">'+BERUEHMT_PORTRAITS.length+'</span> von '+BERUEHMT_PORTRAITS.length+' Portr\xe4ts</div>'
      +'<div class="kf-row" style="margin-top:0.4rem;"><button class="kf-btn" style="background:var(--gold);color:var(--anthracite,#2c2c2c);border-color:var(--gold-dark,#A8872D);font-weight:700;" onclick="bpRandom()">&#127922; Zuf\u00e4lliges Portr\u00e4t</button></div>'
      +'</div>';
  }

  const allCodes = [1,2,3,4,5,6,7,8,9].flatMap(n => ["SE","SO","SX"].map(p => p+n));
  const registerBox = BERUEHMT_PORTRAITS.length === 0 ? "" :
    '<div id="bp-register" style="background:var(--ivory);border:1.5px solid var(--border);border-radius:12px;padding:1rem 1.2rem;margin-bottom:1rem;">'
    +'<p style="font-size:0.78rem;font-weight:700;letter-spacing:0.08em;color:var(--muted);margin:0 0 0.7rem;text-transform:uppercase;">Schnellnavigation nach Subtyp</p>'
    +'<div style="display:flex;flex-wrap:wrap;gap:0.5rem 0.3rem;">'
    +allCodes.map(function(code){
      const n = parseInt(code.slice(-1));
      const col = TYPE_COLORS[n]||"var(--copper)";
      return '<a href="#" onclick="event.preventDefault();bpJumpToCode(\''+code+'\');"'
        +' style="display:inline-block;padding:0.25rem 0.6rem;border-radius:6px;border:1.5px solid '+col+';'
        +'font-size:0.8rem;font-weight:700;color:'+col+';background:var(--bg);text-decoration:none;opacity:0.85;"'
        +' onmouseover="this.style.opacity=\'1\';this.style.background=\''+col+'20\'"'
        +' onmouseout="this.style.opacity=\'0.85\';this.style.background=\'var(--bg)\'">'
        +code+'</a>';
    }).join("")
    +'</div></div>';

  // Rendert nicht mehr alle 395 Karten auf einmal (siehe Kommentar bei
  // BP_KAT_COLORS oben) - nur die erste Seite, plus ein "Mehr laden"-Button,
  // der bpRenderMore() aufruft und schrittweise weitere Batches anh\u00e4ngt.
  function buildList() {
    if (BERUEHMT_PORTRAITS.length === 0) {
      return '<p style="color:var(--muted);font-style:italic;padding:2rem 0;">Die ersten Portr\xe4ts werden in K\xfcrze hinzugef\xfcgt.</p>';
    }
    window.bpRenderedCount = 0;
    window.bpLastSectionCode = null;
    return bpBuildNextBatch();
  }

  return shell(
    '<div class="page-container">'
    +pageHeader("ber\xfchmte-pers\xf6nlichkeiten")
    +'<h1 style="font-family:\'EB Garamond\',serif;font-size:2rem;color:var(--ink);margin:1.2rem 0 0.5rem;line-height:1.2;">Ber\u00fchmte Pers\u00f6nlichkeiten</h1>'
    +'<p class="psycho-intro">Ber\xfchmte Pers\xf6nlichkeiten aus Wissenschaft, Kunst, Musik, Sport und Geschichte durch die Linse des Enneagramms. '
    +'Jedes Portr\xe4t zeigt, wie die innere Struktur eines Menschen seine Leistungen, seine Kreativit\xe4t und seinen Lebensweg pr\xe4gt \u2013 '
    +'vom Komponisten bis zum Astronauten, vom Friedensnobelpreistr\xe4ger bis zum vision\xe4ren Unternehmer.</p>'
    +filterBar()
    +registerBox
    +'<div id="bp-list" style="display:flex;flex-direction:column;gap:1rem;max-width:100%;">'
    +buildList()
    +'<div id="bp-loadmore-wrap">'+bpLoadMoreButtonHTML()+'</div>'
    +'</div>'
    +relatedLinks([
      {route:"kriminalpsychologie", label:"Kriminalpsychologie"},
      {route:"psychogramme", label:"Psychogramme"},
      {route:"portraits-wegbegleiter", label:"Portr\xe4ts: Wegbegleiter"},
    ])
    +'</div>'
  );
}

// Baut den nächsten Batch (BP_PAGE_SIZE Karten) der unabhängig vom Filter
// standardmäßig chronologisch/nach Subtyp sortierten Gesamtliste, inklusive
// fortlaufender Abschnitts-Überschriften (auch über Batch-Grenzen hinweg,
// dank window.bpLastSectionCode als Zustand zwischen den Aufrufen).
function bpBuildNextBatch() {
  const start = window.bpRenderedCount || 0;
  const end = Math.min(start + BP_PAGE_SIZE, BERUEHMT_PORTRAITS.length);
  let out = '';
  for (let i = start; i < end; i++) {
    const p = BERUEHMT_PORTRAITS[i];
    const code = (p.subtyp||'').substring(0,3).toUpperCase();
    if (code && code !== window.bpLastSectionCode) {
      if (window.bpLastSectionCode !== null) {
        out += '<div class="kf-section-back"><a href="#" onclick="event.preventDefault();document.getElementById(\'bp-register\').scrollIntoView({behavior:\'smooth\'});" style="font-size:0.8rem;color:var(--copper);font-weight:600;text-decoration:none;padding:0.3rem 0.8rem;border:1px solid var(--border);border-radius:6px;background:var(--ivory);">↑ zum Register</a></div>';
      }
      const n = parseInt(code.slice(-1));
      const col = TYPE_COLORS[n]||"var(--copper)";
      out += '<div id="bp-'+code.toLowerCase()+'" class="kf-section-head" style="font-size:0.75rem;font-weight:700;letter-spacing:0.1em;color:'+col+';text-transform:uppercase;padding:0.5rem 0 0.2rem;margin-top:0.5rem;border-bottom:1.5px solid '+col+'20;">'+code+'</div>';
      window.bpLastSectionCode = code;
    }
    out += bpCardHTML(p);
  }
  window.bpRenderedCount = end;
  return out;
}
function bpLoadMoreButtonHTML() {
  const remaining = BERUEHMT_PORTRAITS.length - (window.bpRenderedCount || 0);
  if (remaining <= 0) return '';
  return '<button class="kf-btn" style="width:100%;padding:0.8rem;margin-top:0.5rem;background:var(--gold);color:var(--anthracite,#2c2c2c);border-color:var(--gold-dark,#A8872D);font-weight:700;" onclick="bpRenderMore()">Weitere Portr\xe4ts laden ('+remaining+' \xfcbrig)</button>';
}
window.bpRenderMore = function() {
  const wrap = document.getElementById('bp-loadmore-wrap');
  if (!wrap) return;
  const batchHtml = bpBuildNextBatch();
  wrap.insertAdjacentHTML('beforebegin', batchHtml);
  wrap.innerHTML = bpLoadMoreButtonHTML();
  // Neu hinzugekommene Karten brauchen ihren Klick-Handler (siehe die
  // generische [data-route]-Delegation weiter unten im Code).
  document.querySelectorAll('#bp-list .kf-card[data-route]:not([data-bp-wired])').forEach(function(el) {
    el.setAttribute('data-bp-wired', '1');
    el.addEventListener('click', function() {
      if (el.dataset.locked) { go('freischalt/' + el.dataset.locked); } else { go(el.dataset.route); }
    });
  });
};

window.bpState = { inst:"ALL", typ:0, kat:"ALL", gender:"ALL", land:"ALL" };
window.bpSet = function(dim, val) {
  if(window.bpState[dim]===val){ window.bpState[dim]= dim==="typ"?0:"ALL"; }
  else { window.bpState[dim]=val; }
  bpApply();
};
window.bpSetLand = function(val) {
  window.bpState.land = val;
  bpApply();
};
// Behält das ursprüngliche Verhalten der "Schnellnavigation nach Subtyp"-
// Chips bei (scrollt zum Abschnitt, verändert keinen Filter, Register-Box
// bleibt immer sichtbar - genau wie bei Krankheitsporträts/Kriminalfälle).
// Da die Liste seit der Pagination (siehe bpBuildNextBatch) nur seitenweise
// im DOM steht, wird bei Bedarf erst automatisch nachgeladen, bis der
// Zielabschnitt existiert, und erst dann dorthin gescrollt.
window.bpJumpToCode = function(code) {
  const targetId = "bp-" + code.toLowerCase();
  let guard = 0;
  while (!document.getElementById(targetId) && guard < 20) {
    const wrap = document.getElementById("bp-loadmore-wrap");
    if (!wrap || !wrap.querySelector("button")) break; // komplett durchgeladen, Subtyp existiert nicht
    window.bpRenderMore();
    guard++;
  }
  const el = document.getElementById(targetId);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};
window.bpRandom = function() {
  // Wählt direkt aus BERUEHMT_PORTRAITS statt aus dem DOM, da bei
  // ungefiltertem Zustand ohnehin nur die erste Seite gerendert ist
  // (siehe bpBuildNextBatch) - so bleibt "Zufälliges Porträt" über die
  // ganze Liste hinweg wirklich zufällig.
  const s = window.bpState;
  const matches = BERUEHMT_PORTRAITS.filter(function(p) {
    const inst = (p.subtyp||"").substring(0,2).toUpperCase();
    const typ = parseInt((p.subtyp||"").replace(/[^0-9]/g,"")[0]||"0");
    const kats = p.tags||[];
    return (s.inst==="ALL" || inst===s.inst)
      && (s.typ===0 || typ===s.typ)
      && (s.kat==="ALL" || kats.indexOf(s.kat)>=0)
      && (s.gender==="ALL" || p.gender===s.gender)
      && (s.land==="ALL" || p.land===s.land);
  });
  if (!matches.length) return;
  const pick = matches[Math.floor(Math.random() * matches.length)];
  if (pick.route) go(pick.route);
};
// Baut #bp-list bei jeder Filteränderung komplett neu, statt (wie früher)
// alle 395 Karten dauerhaft im DOM zu halten und nur per CSS aus-/
// einzublenden - das war die eigentliche Ursache des Speicherabsturzes bei
// "Berühmte Persönlichkeiten" (mit Abstand die größte Rubrik). Ungefiltert
// wird weiterhin paginiert (siehe bpBuildNextBatch/bpRenderMore); bei jedem
// aktiven Filter ist die Trefferliste ohnehin klein genug für eine flache
// Einmal-Darstellung ohne Pagination.
window.bpApply = function() {
  const s = window.bpState;
  const filtered = s.inst!=="ALL" || s.typ!==0 || s.kat!=="ALL" || s.gender!=="ALL" || s.land!=="ALL";
  const list = document.getElementById("bp-list");
  const reg = document.getElementById("bp-register");
  let vis;

  if (filtered) {
    const matches = BERUEHMT_PORTRAITS.filter(function(p) {
      const inst = (p.subtyp||"").substring(0,2).toUpperCase();
      const typ = parseInt((p.subtyp||"").replace(/[^0-9]/g,"")[0]||"0");
      const kats = p.tags||[];
      return (s.inst==="ALL" || inst===s.inst)
        && (s.typ===0 || typ===s.typ)
        && (s.kat==="ALL" || kats.indexOf(s.kat)>=0)
        && (s.gender==="ALL" || p.gender===s.gender)
        && (s.land==="ALL" || p.land===s.land);
    });
    // Innerhalb desselben Subtyp-Codes nach Flügel sortieren (w2 vor w4 usw.),
    // statt in der zufälligen Einfüge-Reihenfolge der Gesamtliste zu bleiben.
    matches.sort(function(a, b) { return (a.subtyp||"").localeCompare(b.subtyp||""); });
    vis = matches.length;
    if (list) list.innerHTML = bpCardsFlatHTML(matches);
    // Original-Verhalten: Register-Box blendet sich aus, sobald über die
    // Instinkt/Typ/Kategorie-Filterleiste aktiv gefiltert wird (bpJumpToCode
    // - die Schnellnavigation-Chips - setzt keinen Filter mehr, läuft also
    // nie durch diesen Zweig, siehe dort).
    if (reg) reg.style.display = "none";
  } else {
    window.bpRenderedCount = 0;
    window.bpLastSectionCode = null;
    const batchHtml = bpBuildNextBatch();
    vis = window.bpRenderedCount;
    if (list) {
      list.innerHTML = batchHtml + '<div id="bp-loadmore-wrap">' + bpLoadMoreButtonHTML() + '</div>';
    }
    if (reg) reg.style.display = "";
  }

  document.querySelectorAll('#bp-list .kf-card[data-route]').forEach(function(el) {
    el.setAttribute('data-bp-wired', '1');
    el.addEventListener('click', function() {
      if (el.dataset.locked) { go('freischalt/' + el.dataset.locked); } else { go(el.dataset.route); }
    });
  });

  const cnt = document.getElementById("bp-count-num");
  if(cnt) cnt.textContent = vis;
  document.querySelectorAll(".kf-btn[data-bp-inst]").forEach(function(b){
    b.classList.toggle("kf-btn--active", b.dataset.bpInst===s.inst||(s.inst==="ALL"&&b.dataset.bpInst==="ALL"));
  });
  document.querySelectorAll(".kf-btn[data-bp-typ]").forEach(function(b){
    b.classList.toggle("kf-btn--active", parseInt(b.dataset.bpTyp)===(s.typ||0));
  });
  document.querySelectorAll(".kf-btn[data-bp-kat]").forEach(function(b){
    b.classList.toggle("kf-btn--active", b.dataset.bpKat===s.kat||(s.kat==="ALL"&&b.dataset.bpKat==="ALL"));
  });
  document.querySelectorAll(".kf-btn[data-bp-gender]").forEach(function(b){
    b.classList.toggle("kf-btn--active", b.dataset.bpGender===s.gender||(s.gender==="ALL"&&b.dataset.bpGender==="ALL"));
  });
};

function queenElizabethIIPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-queen-elizabeth-ii-portrait.jpg" alt="Queen Elizabeth II." class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Queen Elizabeth II.</p>
        <p class="krim-portrait-typ">SE1w9 &middot; Selbsterhaltender Typ 1 mit Neunerfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">K\u00f6nigin des Vereinigten K\u00f6nigreichs, 1926&ndash;2022 &ndash; Tierentsprechung: Adler</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Adler</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Adler</strong> ist das Tier der selbsterhaltenden Eins &ndash; und kein Bild trifft Queen Elizabeth II. genauer. Der Adler fliegt allein, hoch \u00fcber dem L\u00e4rm der Welt. Er braucht keine Zustimmung, keine B\u00fchne, keine Bewunderung. Er hat einen Posten &ndash; und er verl\u00e4sst ihn nicht. Wenn er kreist, dann mit vollst\u00e4ndiger Konzentration. Wenn er landet, dann mit W\u00fcrde.</p>
          <p class="vb-intro">Die britische Königin Elizabeth Alexandra Mary Windsor bestieg 1952, mit f\u00fcnfundzwanzig Jahren, nach dem Tod ihres Vaters K\u00f6nig George VI. den Thron &ndash; einen Thron, den sie nicht gesucht hatte, der ihr durch den Verzicht ihres Onkels Edward VIII. zugefallen war. Sie sagte Ja. Nicht mit Begeisterung, nicht mit Ehrgeiz &ndash; sondern mit dem stillen, absoluten Entschluss eines Menschen, der versteht, dass bestimmte Aufgaben nicht verhandelbar sind. Siebzig Jahre lang hat sie dieses Ja jeden Tag erneuert. Der Adler blieb auf seinem Posten.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Eins: Pflicht als Lebensinhalt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Eins (SE1)</strong> ist der Subtyp der Eins, der seinen Perfektionsanspruch nicht nach au\u00dfen tr\u00e4gt, sondern nach innen. Naranjo nannte diesen Subtyp <em>Worry</em> &ndash; Besorgnis: die st\u00e4ndige, innere Frage, ob man das Richtige tut, ob man der Aufgabe wirklich gerecht wird, ob man genug geleistet hat. Diese Besorgnis ist kein Z\u00f6gern. Sie ist der Motor einer lebenslangen Disziplin.</p>
          <p class="vb-intro">Queen Elizabeth II. hat dieses Muster in einer Form gelebt, die historisch einmalig ist. Sie hat in siebzig Jahren niemals ein Interview gegeben, in dem sie ihre pers\u00f6nliche Meinung zu einer politischen Frage ge\u00e4u\u00dfert hat. Niemals. Nicht weil sie keine hatte &ndash; sondern weil sie wusste, dass der Posten wichtiger ist als die Person. Die SE1 verleugnet ihre eigenen W\u00fcnsche nicht aus Schw\u00e4che. Sie stellt sie zur\u00fcck aus innerer \u00dcberzeugung: <em>Das hier geht vor.</em></p>
          <p class="vb-intro">Ihr Leitspruch war nie formuliert, aber er war sp\u00fcrbar: <em>Never complain, never explain</em> &ndash; niemals klagen, niemals erkl\u00e4ren. Das ist die SE1 in ihrer reinsten, diszipliniertesten Form. Sie ertr\u00e4gt, was andere nicht ertragen w\u00fcrden &ndash; nicht als Opfer, sondern als Ausdruck dessen, was sie f\u00fcr richtig h\u00e4lt.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerfl\u00fcgel: Frieden als zweite Kraft</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerfl\u00fcgel (w9)</strong> gibt der selbsterhaltenden Eins etwas, das bei schwach ausgeprägtem Neunerflügel kaum von selbst da ist: Stille. Der Neunerfl\u00fcgel sucht Harmonie, Kontinuit\u00e4t, das Gleichgewicht im Bestehenden. Er h\u00e4lt zusammen, was auseinanderdriften will &ndash; nicht durch Eingriff, sondern durch Pr\u00e4senz.</p>
          <p class="vb-intro">Dieser Fl\u00fcgel erkl\u00e4rt, warum Queen Elizabeth II. siebzig Jahre lang die Mitte eines Landes bleiben konnte, das sich um sie herum tiefgreifend ver\u00e4nderte. Imperium, Dekolonisierung, Kalter Krieg, Thatcher, Blair, Brexit, Pandemie &ndash; sie hat alles \u00fcberdauert, ohne je Position zu beziehen. Das ist nicht Gleichg\u00fcltigkeit. Das ist die F\u00e4higkeit der Neuner-Energie, den Raum f\u00fcr andere offen zu halten. Indem die K\u00f6nigin schwieg, durfte das Land sprechen.</p>
          <p class="vb-intro">Dasselbe zeigt sich in ihrer privaten Welt: die Corgi-Hunde, die sie lebenslang begleiteten; der j\u00e4hrliche Aufenthalt in Balmoral, dem schottischen Schloss, das ihr mehr bedeutete als der Buckingham-Palast; die langj\u00e4hrige Ehe mit Prinz Philip, die auf tiefer gegenseitiger Loyalit\u00e4t beruhte. Der Neunerfl\u00fcgel braucht seine Anker. Er ist nicht schwach &ndash; er wei\u00df, wo er verwurzelt ist.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Leidenschaft: Zorn als innere Strenge</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Leidenschaft der Eins hei\u00dft <strong>Zorn</strong> &ndash; und bei der SE1w9 \u00e4u\u00dfert er sich auf eine Art, die nach au\u00dfen v\u00f6llig unsichtbar bleibt. Die SE1w9 ist nicht die Eins, die laut korrigiert. Sie ist die Eins, die schweigt &ndash; und sich innerlich einen Standard h\u00e4lt, der f\u00fcr andere unvorstellbar w\u00e4re. Der Zorn wendet sich nicht nach au\u00dfen, sondern nach innen: als eiserne Selbstdisziplin, als Unerbittlichkeit gegen\u00fcber dem eigenen Versagen, als das st\u00e4ndige Gewissen, das fragt: <em>Habe ich heute getan, was getan werden musste?</em></p>
          <p class="vb-intro">Queen Elizabeth II. hat diesen inneren Zorn in Form von Pflicht kanalisiert. Sie arbeitete bis in ihr letztes Lebensjahr &ndash; zwei Tage vor ihrem Tod, am 6. September 2022, empfing sie noch Premierministerin Liz Truss in Balmoral. Sie war sechsundneunzig Jahre alt. Das ist kein Pflichtbewusstsein mehr. Das ist die SE1w9 in ihrer letzten, vollst\u00e4ndigen Konsequenz: der Adler, der seinen Posten erst verl\u00e4sst, wenn es keine andere M\u00f6glichkeit mehr gibt.</p>
        </blockquote>

        <h2 class="vb-section">5. Die Krise als Spiegel: 1997 und die Grenzen der Stille</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die SE1w9 hat eine Schwachstelle: Sie kann in Momenten, die menschliche W\u00e4rme fordern, wie K\u00e4lte wirken. Der Tod von Prinzessin Diana im August 1997 wurde f\u00fcr Queen Elizabeth II. zur h\u00e4rtesten \u00f6ffentlichen Pr\u00fcfung ihrer Regentschaft. Die K\u00f6nigin blieb in Balmoral, folgte dem Protokoll, zeigte keine Emotion &ndash; w\u00e4hrend das Land in Trauer und Emp\u00f6rung versank. Die Presse fragte: <em>Wo ist die K\u00f6nigin?</em></p>
          <p class="vb-intro">Aus Enneagramm-Perspektive ist dieser Moment kein Versagen der Person, sondern die Grenze des Musters: Die SE1w9 h\u00e4lt sich an das Richtige &ndash; und das Richtige war, wie sie es verstand, Protokoll und Haltung. Dass das Volk etwas anderes brauchte, wurde ihr erst durch \u00e4u\u00dferen Druck bewusst. Sie kehrte nach London zur\u00fcck, sprach live zur Nation, verbeugte sich vor Dianas Sarg. F\u00fcr eine SE1w9 war das ein au\u00dfergew\u00f6hnlicher Schritt: das Muster zu verlassen, weil die Situation es verlangte.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Best\u00e4ndigkeit als Heimat</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Queen Elizabeth II. dem Vereinigten K\u00f6nigreich &ndash; und einer Welt, die sich in siebzig Jahren mehrfach neu erfunden hat &ndash; gegeben hat, l\u00e4sst sich in einem Wort zusammenfassen: Best\u00e4ndigkeit. In einer Epoche des unabl\u00e4ssigen Wandels war sie das, was nicht wechselte. Kein Skandal hat sie zum Sprechen gebracht. Keine Krise hat sie von ihrem Posten vertrieben. Keine Mode hat sie mitgerissen.</p>
          <p class="vb-intro">Das ist das Geschenk der SE1w9: Verl\u00e4sslichkeit als Heimat. Ein Adler, der auf seinem Felsen sitzt &ndash; nicht weil er sich nicht bewegen k\u00f6nnte, sondern weil er wei\u00df, dass seine Aufgabe Bestand ist. Queen Elizabeth II. hat am 8. September 2022 in Balmoral ihren letzten Atemzug getan. Ihr Sohn Charles III. folgte ihr auf den Thron. Der Felsen ist leer. Aber er ist noch da.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/se1", label:"SE1 \u2013 Der Adler: Subtyp-Profil"},
        {route:"beruehmte-sting", label:"Portr\u00e4t: Sting (SE1w9)"},
        {route:"beruehmte-christoph-waltz", label:"Portr\u00e4t: Christoph Waltz (SE1w2)"},
        {route:"beruehmte-ludwig-wittgenstein", label:"Porträt: Ludwig Wittgenstein (SE1w9)"},
      ])}
    </div>
  `);
}

function ludwigWittgensteinPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-ludwig-wittgenstein-portrait.jpg" alt="Ludwig Wittgenstein \u2013 Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ludwig Wittgenstein</p>
        <p class="krim-portrait-typ">SE1w9 \u00b7 Selbsterhaltender Typ 1 mit Neunerfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Philosoph, 1889\u20131951 \u2013 Tierentsprechung: Adler</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Adler</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Adler</strong> ist das Tier der selbsterhaltenden Eins \u2013 ein Einzelg\u00e4nger, der seine Kreise in gro\u00dfer H\u00f6he zieht, weit \u00fcber dem, was andere f\u00fcr ausreichend halten. Er braucht kein Publikum. Er braucht nur die Gewissheit, dass er seinem eigenen, unerbittlichen Ma\u00dfstab gerecht wird.</p>
          <p class="vb-intro">Ludwig Wittgenstein, 1889 in Wien als j\u00fcngstes von acht Kindern des Stahlindustriellen Karl Wittgenstein geboren, wuchs in einem Haushalt auf, in dem Brillanz als selbstverst\u00e4ndlich galt und Schw\u00e4che leise, aber unerbittlich sanktioniert wurde. Drei seiner vier Br\u00fcder nahmen sich das Leben \u2013 Hans 1902, vermutlich im Chesapeake Bay, Rudi 1904 mit Zyankali in einer Berliner Bar, Kurt 1918 durch die eigene Hand, als seine Truppe sich am Kriegsende aufl\u00f6ste. Ludwig selbst trug lebenslang Suizidgedanken mit sich. Aus diesem Familienerbe erwuchs kein R\u00fcckzug in Verzweiflung, sondern ein noch sch\u00e4rferer, nach innen gerichteter Anspruch: Es musste etwas geben, dem man sich mit absoluter Konsequenz unterwerfen konnte.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Eins: Askese als Selbstpr\u00fcfung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Eins (SE1)</strong> tr\u00e4gt ihren Perfektionsanspruch nicht nach au\u00dfen, sondern nach innen. Naranjo nannte diesen Subtyp <em>Worry</em> \u2013 Besorgnis: die st\u00e4ndige innere Pr\u00fcfung, ob man dem eigenen Ma\u00dfstab wirklich gerecht wird. Diese Besorgnis richtet sich nicht auf andere, sondern gnadenlos auf das eigene Denken, das eigene Verhalten, den eigenen Charakter.</p>
          <p class="vb-intro">Wittgenstein lebte dieses Muster in einer Form, die selbst f\u00fcr eine SE1 au\u00dfergew\u00f6hnlich ist. 1913 erbte er ein Verm\u00f6gen, das ihn zu einem der reichsten jungen M\u00e4nner Europas machte. Nach dem Ersten Weltkrieg, in einer Phase tiefer pers\u00f6nlicher Krise, verschenkte er dieses gesamte Verm\u00f6gen an seine Geschwister \u2013 nicht aus Gro\u00dfz\u00fcgigkeit im gew\u00f6hnlichen Sinn, sondern aus der \u00dcberzeugung, dass Reichtum den eigenen Charakter korrumpiere. Sp\u00e4ter lebte er in m\u00f6glichst kargen Verh\u00e4ltnissen: ein Campingstuhl statt eines Sessels, ein Zimmer fast ohne M\u00f6bel. Die SE1 verzichtet nicht, um zu leiden. Sie verzichtet, weil jeder Komfort, den man sich nicht wirklich verdient hat, als moralischer Makel empfunden wird.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerfl\u00fcgel: R\u00fcckzug in die Einfachheit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerfl\u00fcgel (w9)</strong> gibt der selbsterhaltenden Eins eine Sehnsucht nach Einfachheit, Anonymit\u00e4t und R\u00fcckzug aus dem Betrieb der Welt. Er sucht nicht die B\u00fchne, sondern die Stille, in der sich der eigene Anspruch ungest\u00f6rt verwirklichen l\u00e4sst.</p>
          <p class="vb-intro">Bei Wittgenstein zeigte sich dieser Fl\u00fcgel in einer Reihe radikaler Ausstiege. Nach der Ver\u00f6ffentlichung des <em>Tractatus logico-philosophicus</em> 1921 \u2013 f\u00fcr ihn zun\u00e4chst die vollst\u00e4ndige, abschlie\u00dfende L\u00f6sung aller philosophischen Probleme \u2013 zog er sich aus der akademischen Welt zur\u00fcck und arbeitete von 1920 bis 1926 als Volksschullehrer in \u00f6sterreichischen Bergd\u00f6rfern wie Trattenbach. Sp\u00e4ter, nach dem Ende dieser Lehrt\u00e4tigkeit, arbeitete er zeitweise als G\u00e4rtner in einem Kloster bei Wien. Kein Prestige, keine \u00d6ffentlichkeit \u2013 nur die einfache, k\u00f6rperliche Arbeit und die M\u00f6glichkeit, dem eigenen Anspruch in Zur\u00fcckgezogenheit treu zu bleiben.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Leidenschaft: Zorn, der sich meist nach innen wendet</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Leidenschaft der Eins hei\u00dft <strong>Zorn</strong> \u2013 bei der SE1w9 richtet er sich fast immer gegen die eigene Person: als unerbittliche Selbstkritik, als das st\u00e4ndige Gef\u00fchl, dem eigenen Ma\u00dfstab noch nicht gen\u00fcgt zu haben. Wittgensteins gesamtes philosophisches Werk \u2013 vom kompromisslosen <em>Tractatus</em> bis zu den nie abgeschlossenen <em>Philosophischen Untersuchungen</em> \u2013 tr\u00e4gt die Spur dieses inneren Zorns: kein Satz, der nicht wieder und wieder verworfen und neu gefasst wurde, bis er dem eigenen, fast unerreichbaren Anspruch an Klarheit gen\u00fcgte.</p>
          <p class="vb-intro">Als Lehrer in Cambridge in den 1930er- und 1940er-Jahren pr\u00e4gte er eine ganze Generation von Philosophen \u2013 seine Vorlesungen waren keine Vortr\u00e4ge, sondern gemeinsames, oft qu\u00e4lend langsames Denken vor den Studierenden, bei dem er selbst nach der richtigen Formulierung rang. Wer bei ihm bestehen wollte, musste dieselbe kompromisslose Ehrlichkeit gegen sich selbst aufbringen, die er sich selbst abverlangte.</p>
        </blockquote>

        <h2 class="vb-section">5. Die Krise als Spiegel: Die Volksschuljahre in Nieder\u00f6sterreich</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die SE1w9 hat eine Schwachstelle: Der nach innen gerichtete Zorn kann, wenn der \u00e4u\u00dfere Druck zu gro\u00df wird, unvermittelt nach au\u00dfen durchbrechen. Als Volksschullehrer in den nieder\u00f6sterreichischen D\u00f6rfern Trattenbach, Puchberg und Otterthal war Wittgenstein f\u00fcr seine Sch\u00fcler streckenweise ein gl\u00fchender Vermittler von Mathematik, Naturwissenschaft und Latein \u2013 zugleich aber auch f\u00fcr harte, teils gewaltsame Disziplinierungsma\u00dfnahmen bekannt, darunter Ohrfeigen und Haareziehen bei Sch\u00fclern, die seinem Anspruch nicht gen\u00fcgten.</p>
          <p class="vb-intro">1926 kollabierte ein Sch\u00fcler nach einem Schlag Wittgensteins, was zu einer offiziellen Untersuchung und seinem R\u00fccktritt vom Schuldienst f\u00fchrte. Aus Enneagramm-Perspektive ist das kein Widerspruch zum sonst so beherrschten Bild, sondern die Kehrseite desselben Musters: Wer den eigenen Zorn jahrelang nach innen richtet, kann in Momenten der \u00dcberforderung genau diesen Zorn ungefiltert nach au\u00dfen entladen \u2013 gegen jene, die seinem Ma\u00dfstab nicht gen\u00fcgen konnten, weil sie Kinder waren.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Radikale Ehrlichkeit im Denken</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Wittgenstein der Philosophie hinterlassen hat, ist eine Kompromisslosigkeit, die bis heute ihresgleichen sucht: die Weigerung, sich mit einer Formulierung zufriedenzugeben, solange sie nicht wirklich stimmt. Der Adler, der lieber ganz allein und ganz genau denkt, als sich mit halber Klarheit zufriedenzugeben.</p>
          <p class="vb-intro">Wie sich seine letzten Lebensjahre mit einer unheilbaren Krebsdiagnose verbanden, wird im eigenen <a href="javascript:void(0)" data-route="krankheitsportraets-ludwig-wittgenstein">Krankheitsporträt zu Wittgenstein</a> ausführlich gedeutet. Er starb am 29. April 1951 in Cambridge an Prostatakrebs. Seine letzten Worte, \u00fcberliefert von seiner \u00c4rztin: <em>\u00bbSagt ihnen, ich hatte ein wunderbares Leben.\u00ab</em> Ein Satz, der f\u00fcr viele \u00fcberraschend klingt angesichts eines Lebens voller Selbstverzicht, innerer H\u00e4rte und famili\u00e4rer Trag\u00f6dien \u2013 und der doch genau die SE1w9 zeigt, die er zeitlebens war: Erf\u00fcllung nicht durch Genuss, sondern durch die Gewissheit, dem eigenen, unerbittlichen Anspruch treu geblieben zu sein.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/se1", label:"SE1 \u2013 Der Adler: Subtyp-Profil"},
        {route:"beruehmte-queen-elizabeth-ii", label:"Portrait: Queen Elizabeth II. (SE1w9)"},
        {route:"beruehmte-sting", label:"Portrait: Sting (SE1w9)"},
        {route:"krankheitsportraets-ludwig-wittgenstein", label:"Krankheitsporträt: Ludwig Wittgenstein (SE1w9)"},
        {route:"bibel-josef-von-arimathaea", label:"Bibel-Porträt: Josef von Arimathäa (SE1w9)"},
      ])}
    </div>
  `);
}

function stingPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-sting-portrait.jpg" alt="Sting" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Sting</p>
        <p class="krim-portrait-typ">SE1w9 &middot; Selbsterhaltender Typ 1 mit Neunerfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Musiker, geb. 1951 &ndash; Tierentsprechung: Adler</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Adler</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Adler</strong> fliegt allein. Er braucht keine Formation, keine Best\u00e4tigung, keine B\u00fchne. Er ist in seiner H\u00f6he zu Hause &ndash; weit \u00fcber dem L\u00e4rm der Welt, mit einem Blick, der alles umfasst und nichts \u00fcbersieht. Wenn er landet, dann mit vollst\u00e4ndiger Absicht.</p>
          <p class="vb-intro">Der britische Musiker Gordon Sumner, der sich Sting nannte, h\u00e4tte Lehrer bleiben k\u00f6nnen. Er hatte das Diplom, er hatte die Stelle, er hatte die Sicherheit. Doch die innere Stimme der Eins duldet keinen Kompromiss: Wenn das Richtige wartet, muss man es tun. Sting gab den sicheren Hafen auf und ging nach London &ndash; mit dem Wissen, dass es nicht anders sein konnte.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Eins: Handwerk als Gewissen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Eins (SE1)</strong> tr\u00e4gt ihre Ma\u00dfst\u00e4be nicht nach au\u00dfen. Sie korrigiert nicht die Welt &ndash; sie korrigiert sich selbst, immer wieder, mit einer Strenge, die andere selten sehen. Naranjo nannte diesen Subtyp <em>Worry</em> &ndash; Besorgnis. Der SE1er fragt sich: Ist das wirklich gut genug? Habe ich das Richtige getan? Gen\u00fcge ich meinem eigenen Anspruch?</p>
          <p class="vb-intro">Bei Sting zeigt sich das in der au\u00dfergew\u00f6hnlichen Ernsthaftigkeit, mit der er Musik betreibt. W\u00e4hrend andere Rockstars Hits wiederholen, nimmt Sting Alben mit dem Saxophonisten Branford Marsalis auf, vertont elisabethanische Lautenlieder von John Dowland und studiert die Kompositionskunst vergangener Jahrhunderte. Seinen bekanntesten Song, <em>Every Breath You Take</em>, erkl\u00e4rt er bis heute geduldig als d\u00fcsteres Lied \u00fcber Besessenheit und \u00dcberwachung &ndash; nicht als Liebeslied. Die Eins besteht darauf, dass die Dinge richtig verstanden werden.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerfl\u00fcgel: Die Stille hinter dem Anspruch</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerfl\u00fcgel (w9)</strong> f\u00fcgt der SE1er-Energie etwas hinzu, was selten zusammengeh\u00f6rt: Stille. W\u00e4hrend die Einser-Energie bei schwach ausgepr\u00e4gtem Neunerfl\u00fcgel angespannt, wachsam, korrekturbewusst bleibt, bringt der Neunerfl\u00fcgel eine Qualit\u00e4t der Ruhe, des Loslassens, der Verbundenheit mit etwas Gr\u00f6\u00dferem.</p>
          <p class="vb-intro">Das erkl\u00e4rt Stings jahrzehntelange Yogapraxis, seine Besch\u00e4ftigung mit Buddhismus und Tantra, seinen R\u00fcckzug auf das toskanische Landgut. Der SE1w9er sucht nicht nur das Richtige &ndash; er sucht auch den Frieden. Die Neuner-Energie gibt der Eins die F\u00e4higkeit, innezuhalten, zu atmen, die Perfektion loszulassen. Stings Musik hat genau diese Qualit\u00e4t: pr\u00e4zise und weitr\u00e4umig zugleich, anspruchsvoll und meditativ. Der Adler kreist &ndash; aber er genie\u00dft auch die H\u00f6he.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der selbsterhaltenden Eins</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE1w9 ist von seltener Sch\u00f6nheit: ein K\u00fcnstler, der nie aufgeh\u00f6rt hat, sich zu entwickeln; ein Mensch, der seine \u00dcberzeugungen lebt &ndash; die Rainforest Foundation, die er 1989 gemeinsam mit seiner Frau Trudie Styler gr\u00fcndete, ist nach wie vor aktiv; eine Integrit\u00e4t, die im Musikbusiness auff\u00e4llt wie ein Adler unter Hamstern.</p>
          <p class="vb-intro">Der Schatten ist zweifach. Die SE1 neigt zur Selbstgerechtigkeit &ndash; zum unbewussten Gef\u00fchl, selbst das Richtige zu tun, w\u00e4hrend andere es nicht tun. Das Schicksalsmuster der Eins ist der <strong>Zorn</strong>, der sich bei der SE1 nach innen wendet: chronische Unzufriedenheit mit dem Eigenen, das Gef\u00fchl, nie ganz angekommen zu sein. Der Neunerfl\u00fcgel f\u00fcgt seinen eigenen Schatten hinzu: R\u00fcckzug, Distanz, eine Abschirmung, die andere als K\u00e4lte erleben.</p>
          <p class="vb-intro">Sting hat in Interviews offen \u00fcber Jahre der kreativen Stagnation gesprochen &ndash; Phasen, in denen ihm nichts W\u00fcrdiges einfiel. Das ist der SE1w9er in seiner Nacht: Der innere Richter schweigt. Der \u00e4u\u00dfere Frieden bleibt. Aber es entsteht nichts.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: Vom Richter zur Sch\u00f6nheit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Eins f\u00fchrt vom Zorn zur Gelassenheit. Die wachsende Eins lernt: Das Gute muss nicht perfekt sein, um gut zu sein. Das Richtige zeigt sich nicht nur durch Kontrolle, sondern auch durch Vertrauen &ndash; Vertrauen in den Fluss, den die Neuner-Energie kennt.</p>
          <p class="vb-intro">Sting hat diesen Weg beschritten &ndash; nicht durch Aufgabe seiner Ma\u00dfst\u00e4be, sondern durch die Entdeckung, dass Sch\u00f6nheit gr\u00f6\u00dfer ist als Richtigkeit. Dass ein unvollkommener Song, der ber\u00fchrt, mehr wert ist als ein perfekter, der niemanden erreicht. Der Adler muss nicht immer oben sein. Manchmal fliegt er einfach.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/se1", label:"SE1 \u2013 Der Besorgte: Subtyp-Profil"},
        {route:"beruehmte-christoph-waltz", label:"Portr\u00e4t: Christoph Waltz (SE1w2)"},
        {route:"beruehmte-anthony-hopkins", label:"Portr\u00e4t: Anthony Hopkins (SE1w9)"},
        {route:"beruehmte-magnus-carlsen", label:"Portr\u00e4t: Magnus Carlsen (SE1w9)"},
        {route:"beruehmte-ludwig-wittgenstein", label:"Portr\u00e4t: Ludwig Wittgenstein (SE1w9)"},
      ])}
    </div>
  `);
}

function robertDeNiroPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-robert-de-niro-portrait.jpg" alt="Robert De Niro – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Robert De Niro</p>
        <p class="krim-portrait-typ">SE1w9 &middot; Selbsterhaltender Typ 1 mit Neunerflügel</p>
        <p class="krim-portrait-subtitle">Schauspieler &amp; Produzent, geb. 1943 in New York City &ndash; Tierentsprechung: Adler</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Adler</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Adler</strong> ist das Tier der selbsterhaltenden Eins &ndash; ein Tier, das nicht durch Lautstärke beeindruckt, sondern durch Präzision. Er beobachtet lange, bevor er handelt. Er verschwendet keine Bewegung. Und wenn er schließlich zuschlägt, dann mit einer Genauigkeit, die keine Wiederholung braucht.</p>
          <p class="vb-intro">Der US-amerikanische Schauspieler Robert De Niro gilt seit Jahrzehnten als einer der genauesten Beobachter seines Fachs. Kein Interview, in dem er sich selbst erklärt. Keine Talkshow-Präsenz, die von seiner Arbeit ablenkt. Der Adler zeigt sich nicht, um gesehen zu werden. Er zeigt sich, wenn die Rolle es verlangt &ndash; und verschwindet danach wieder in die Stille.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Eins: Wahrheit als Handwerk</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Eins (SE1)</strong> wendet ihr Perfektionsstreben nicht nach außen, auf die Korrektur der Welt, sondern nach innen: auf das eigene Handwerk, die eigene Vorbereitung, die eigene Integrität. Naranjo nannte diesen Subtyp <em>Worry</em> &ndash; Besorgnis. Die SE1 fragt sich unablässig: Ist das wirklich richtig? Genüge ich meinem eigenen Anspruch an Wahrhaftigkeit?</p>
          <p class="vb-intro">Bei De Niro ist diese Frage zum Markenzeichen geworden. Für <em>Wie ein wilder Stier</em> (1980) nahm er über 25 Kilogramm zu, um Jake LaMottas physischen Verfall nach dessen Karriereende glaubwürdig zu verkörpern &ndash; nachdem er zuvor monatelang als Amateurboxer trainiert hatte, um die Kämpfe selbst zu bestreiten. Für <em>Taxi Driver</em> (1976) fuhr er wochenlang tatsächlich Taxi durch New York, um Travis Bickles Isolation am eigenen Leib zu erfahren. Das ist keine Marketingstrategie. Das ist die SE1, die sich weigert, etwas darzustellen, das sie nicht wirklich verstanden hat.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerflügel: Die Stille hinter der Intensität</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerflügel (w9)</strong> fügt der SE1er-Energie eine Qualität hinzu, die zunächst paradox wirkt: Zurückhaltung. Während die Einser-Energie bei schwach ausgeprägtem Neunerflügel angespannt und korrekturbewusst bleibt, bringt der Neunerflügel eine Fähigkeit zum Verschmelzen mit, zum vollständigen Aufgehen in etwas Größerem als das eigene Ich.</p>
          <p class="vb-intro">Das erklärt De Niros berühmte Zurückhaltung außerhalb der Kamera &ndash; ein Mann, der auf der Leinwand explosive, oft gewalttätige Figuren spielt, und im echten Leben als notorisch wortkarg, fast schüchtern gilt. Journalisten beschreiben Interviews mit ihm regelmäßig als zähes Ringen um mehr als einsilbige Antworten. Der Neunerflügel zieht sich zurück, sobald die Aufgabe erledigt ist &ndash; er sucht keine Bühne für sich selbst, nur für die Rolle. Die jahrzehntelange, tiefe künstlerische Partnerschaft mit Regisseur Martin Scorsese, von <em>Hexenkessel</em> (1973) bis <em>The Irishman</em> (2019), zeigt dieselbe Qualität: loyale, geduldige Verschmelzung mit einer gemeinsamen Vision, ohne das Bedürfnis, sich in den Vordergrund zu drängen.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Werk: Zwei Oscars, ein halbes Jahrhundert Handwerk</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">De Niro gewann den Oscar als bester Nebendarsteller für seine Rolle als junger Vito Corleone in <em>Der Pate II</em> (1975) &ndash; eine Rolle fast ohne englischen Dialog, gespielt in sizilianischem Italienisch, das er eigens dafür lernte &ndash; und den Oscar als bester Hauptdarsteller für <em>Wie ein wilder Stier</em> (1981). Dazwischen und danach: <em>Es war einmal in Amerika</em>, <em>GoodFellas</em>, <em>Heat</em>, <em>Casino</em> &ndash; ein Werk, das über Jahrzehnte lieber tiefe Genauigkeit suchte als schnellen Ruhm.</p>
          <p class="vb-intro">Nach den Anschlägen vom 11. September 2001 gründete De Niro gemeinsam mit anderen das Tribeca Film Festival, um dem verwüsteten Lower Manhattan wirtschaftliche und kulturelle Impulse zu geben &ndash; kein Akt der Selbstdarstellung, sondern der stille, praktische Wiederaufbau einer verletzten Nachbarschaft. Der Adler kreist über seinem eigenen Revier, auch wenn niemand hinsieht.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der selbsterhaltenden Eins</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE1w9 ist eine seltene Kombination: äußerste Genauigkeit im Handwerk, gepaart mit der Fähigkeit, das eigene Ego dabei vollständig zurückzustellen. De Niros Method-Acting-Exzesse waren nie Selbstzweck &ndash; sie dienten einzig der Wahrhaftigkeit der Figur.</p>
          <p class="vb-intro">Der Schatten zeigt sich in der Rigidität, mit der die SE1 an ihren eigenen Maßstäben festhält, und in der Isolation, die der Neunerflügel begünstigt. Das Schicksalsmuster der Eins ist der <strong>Zorn</strong>, der sich bei der SE1 typischerweise nach innen wendet &ndash; als chronische Unzufriedenheit mit dem eigenen Werk. De Niro selbst hat wiederholt erklärt, seine fertigen Filme kaum je erneut anzusehen; die vollendete Arbeit interessiert ihn weniger als der nächste ungelöste Anspruch. Kritiker bemängelten zudem in späteren Jahren eine gewisse Beliebigkeit in der Rollenauswahl &ndash; ein möglicher Hinweis darauf, dass selbst die strengste Eins nicht vor Ermüdung gefeit ist.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Heilungsweg: Vom Richter zur Hingabe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Eins führt vom Zorn zur Gelassenheit &ndash; von der Frage <em>Ist es perfekt?</em> zur Erkenntnis <em>Ich habe mein Bestes gegeben, und das genügt.</em> Für die SE1w9 bedeutet das, die eigene Hingabe an das Handwerk nicht länger als Beweis der eigenen Rechtschaffenheit zu brauchen, sondern als das zu erleben, was sie im Kern ist: ein Dienst an etwas Größerem.</p>
          <p class="vb-intro">De Niros jahrzehntelange Treue zu seinem Handwerk, unabhängig von Ruhm oder Kritik, liest sich als genau dieser Weg: nicht die Suche nach Anerkennung, sondern die stille, beharrliche Hingabe an die Wahrhaftigkeit der Arbeit selbst. Der Adler muss niemandem beweisen, dass er fliegen kann. Er fliegt einfach.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se1", label:"SE1 – Der Besorgte: Subtyp-Profil"},
        {route:"beruehmte-sting", label:"Porträt: Sting (SE1w9)"},
        {route:"beruehmte-christoph-waltz", label:"Porträt: Christoph Waltz (SE1w2)"},
        {route:"beruehmte-pierce-brosnan", label:"Porträt: Pierce Brosnan (SE1w2)"},
        {route:"beruehmte-anthony-hopkins", label:"Porträt: Anthony Hopkins (SE1w9)"},
        {route:"beruehmte-magnus-carlsen", label:"Porträt: Magnus Carlsen (SE1w9)"},
        {route:"krankheitsportraets-robert-de-niro", label:"Krankheitsporträt: Robert De Niro (SE1w9) – Prostatakrebs"},
      ])}
    </div>
  `);
}

function christophWaltzPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-christoph-waltz-portrait.jpg" alt="Christoph Waltz" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Christoph Waltz</p>
        <p class="krim-portrait-typ">SE1w2 &middot; Selbsterhaltender Typ 1 mit Zweierfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Schauspieler, geb. 1956 &ndash; Tierentsprechung: Adler</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Adler</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Adler</strong> ist das Tier der selbsterhaltenden Eins &ndash; und kein Bild trifft Christoph Waltz pr\u00e4ziser. Der Adler kreist hoch, weit \u00fcber dem Geschehen. Er sieht, was andere nicht sehen. Er wartet. Er urteilt. Und wenn er handelt, dann mit einer Pr\u00e4zision, die keine zweite Chance braucht.</p>
          <p class="vb-intro">Der österreichische Schauspieler Christoph Waltz hat f\u00fcnfzig Jahre gewartet. Nicht weil es ihm an Talent fehlte &ndash; sondern weil das System noch nicht das Richtige f\u00fcr ihn bereithielt. Mit 52 Jahren entdeckte ihn Quentin Tarantino und gab ihm Hans Landa &ndash; eine der komplexesten Rollen der Filmgeschichte. Der Adler hatte geduldig gekreist. Dann schlug er zu.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Eins: Perfektion als innere Pflicht</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Eins (SE1)</strong> ist in der Enneagramm-Tradition der zur\u00fcckgezogenste der drei Einser-Subtypen. W\u00e4hrend die soziale Eins die Welt korrigieren m\u00f6chte und die sexuelle Eins ihre \u00dcberzeugungen im direkten Kontakt ausdr\u00fcckt, wendet die SE1 ihr Perfektionsstreben nach innen: auf das eigene Handwerk, die eigene Vorbereitung, die eigene Integrit\u00e4t. Naranjo nannte diesen Subtyp <em>Worry</em> &ndash; Besorgnis. Die SE1 macht sich Sorgen, ob sie das Richtige tut, ob es gut genug ist, ob sie der Aufgabe wirklich gerecht wird.</p>
          <p class="vb-intro">Bei Christoph Waltz zeigt sich das in seiner legend\u00e4ren Arbeitsdisziplin. Er liest Drehb\u00fccher viele Male, auf der Suche nach der genauen Intention hinter jedem Wort. Er spricht seine Rollen auf Deutsch, Englisch, Franz\u00f6sisch und Italienisch &ndash; und findet in jeder Sprache die eigene Nuance. Das ist kein Ehrgeiz. Das ist Pflicht. Das ist die innere Stimme der Eins: <em>Es muss richtig sein.</em></p>
        </blockquote>

        <h2 class="vb-section">3. Der Zweierfl\u00fcgel: W\u00e4rme hinter der Pr\u00e4zision</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Zweierfl\u00fcgel (w2)</strong> f\u00fcgt der SE1er-Energie etwas Entscheidendes hinzu: die F\u00e4higkeit zur W\u00e4rme, zur Gro\u00dfz\u00fcgigkeit, zum Geben. Eine Eins mit schwach ausgepr\u00e4gtem Zweierfl\u00fcgel kann k\u00fchl, rigide und unerbittlich wirken. Der Zweierfl\u00fcgel \u00f6ffnet diese Energie nach au\u00dfen &ndash; er macht aus dem innerlichen Kontrolleur einen Menschen, der gibt, der tr\u00e4gt, der sich k\u00fcmmert.</p>
          <p class="vb-intro">Das erkl\u00e4rt, warum Christoph Waltz auch in seinen dunkelsten Rollen nie kalt wirkt. Hans Landa in <em>Inglourious Basterds</em> ist ein Monster &ndash; und doch schaut man ihm nicht weg. Dr. King Schultz in <em>Django Unchained</em> ist ein Kopfgeldj\u00e4ger &ndash; und doch w\u00e4rmt er jeden Raum, den er betritt. Der SE1w2er tr\u00e4gt seine Strenge innen und seine W\u00e4rme au\u00dfen. Genau das macht seine Rollen so magnetisch.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der selbsterhaltenden Eins</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE1 ist offensichtlich: au\u00dfergew\u00f6hnliches Handwerk, innere Integrit\u00e4t, eine Pr\u00e4zision, die andere in Staunen versetzt. Wer mit Christoph Waltz dreht, wei\u00df: Er ist vorbereitet. Er ist fokussiert. Er verschwendet keine Energie.</p>
          <p class="vb-intro">Der Schatten ist subtiler: Die SE1 neigt zur inneren Ersch\u00f6pfung durch st\u00e4ndige Selbstkritik. Das Schicksalsmuster der Eins ist der <strong>Zorn</strong> &ndash; und beim SE1er richtet sich dieser Zorn zuerst gegen sich selbst. Nie gut genug. Nie fertig. Nie wirklich sicher, ob es richtig war. Waltz hat in Interviews angedeutet, dass er sein Schaffen kaum wirklich genie\u00dfen kann &ndash; er sieht immer zuerst, was h\u00e4tte besser sein k\u00f6nnen.</p>
          <p class="vb-intro">Dass er trotzdem zwei Oscars gewonnen hat und dabei au\u00dfergew\u00f6hnlich gef\u00e4sst wirkte, ist kein Zeichen von Gleichg\u00fcltigkeit. Es ist das Zeichen eines SE1ers, der gelernt hat, seinen inneren Richter zu kennen &ndash; und ihn nicht mehr alles entscheiden zu lassen.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: Vom inneren Richter zur inneren W\u00fcrde</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Eins f\u00fchrt vom Zorn zur Stille. Von der Selbstkritik zur Selbstachtung. Die wachsende Eins lernt: Gut gemacht ist gut genug. Das Richtige entsteht nicht durch Sorge, sondern durch Vertrauen &ndash; Vertrauen in das Handwerk, das man ein ganzes Leben lang gepflegt hat.</p>
          <p class="vb-intro">Christoph Waltz verk\u00f6rpert diesen Weg auf eigene Weise. F\u00fcnfzig Jahre Arbeit, dann der Ruf der Welt. Er hat nicht gezweifelt, ob er das Richtige tat. Er hat es getan. Der Adler braucht keine Best\u00e4tigung. Er wei\u00df, wann der Moment gekommen ist.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/se1", label:"SE1 \u2013 Der Besorgte: Subtyp-Profil"},
        {route:"beruehmte-pierce-brosnan", label:"Portr\u00e4t: Pierce Brosnan (SE1w2)"},
        {route:"kriminalpsychologie", label:"Kriminalpsychologie \u2013 Portr\u00e4ts"},
      ])}
    </div>
  `);
}

function pierceBrosnanPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-pierce-brosnan-portrait.jpg" alt="Pierce Brosnan – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Pierce Brosnan</p>
        <p class="krim-portrait-typ">SE1w2 &middot; Selbsterhaltender Typ 1 mit Zweierflügel</p>
        <p class="krim-portrait-subtitle">Schauspieler &amp; Produzent, geb. 1953 in Navan, Irland &ndash; Tierentsprechung: Adler</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Adler</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Adler</strong> ist das Tier der selbsterhaltenden Eins &ndash; er kreist hoch, beobachtet genau, und wenn er handelt, dann mit einer Präzision, die keine Nachbesserung braucht. Kein Tier des Lärms, sondern der stillen, konzentrierten Beherrschung des eigenen Terrains.</p>
          <p class="vb-intro">Der irische Schauspieler Pierce Brosnan verkörperte zwischen 1995 und 2002 in vier Filmen James Bond &ndash; eine Rolle, die vor allem Disziplin und Kontrolle verlangt: den perfekt sitzenden Anzug, die makellose Haltung, keine überflüssige Geste. Was viele als bloße Eleganz lasen, war bei Brosnan echte Arbeit: Er bereitete sich auf jede Actionszene selbst akribisch vor und bestand darauf, seine Stunts so weit wie möglich selbst zu übernehmen. Der Adler zeigt keine Anstrengung. Aber er hat sie geleistet.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Eins: Der Anspruch an sich selbst</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Eins (SE1)</strong> richtet ihren Perfektionismus nicht auf die Korrektur der Welt, sondern nach innen: auf die eigene Vorbereitung, das eigene Handwerk, die eigene Zuverlässigkeit. Naranjo nannte diesen Subtyp <em>Worry</em> &ndash; Besorgnis. Die SE1 fragt sich beständig: Habe ich mein Bestes gegeben? Bin ich der Aufgabe gerecht geworden?</p>
          <p class="vb-intro">Brosnans Weg zur Schauspielerei begann als Ausbildung zum Grafikdesigner in London &ndash; Handwerk, bevor es Kunst wurde. Bevor er 1995 endlich Bond spielen durfte, hatte er die Rolle bereits einmal 1986 verloren, weil sein damaliger Serienvertrag für <em>Remington Steele</em> ihn vertraglich band. Statt zu resignieren, arbeitete er weiter, unauffällig und diszipliniert, bis die Gelegenheit ein zweites Mal kam. Die SE1 gibt nicht auf, wenn der erste Versuch scheitert &ndash; sie bereitet sich für den nächsten vor.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Zweierflügel: Fürsorge hinter der Fassade</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Zweierflügel (w2)</strong> öffnet die strenge Einser-Energie nach außen: Er gibt Wärme, echtes Interesse an anderen, den Wunsch, sich für Menschen einzusetzen, denen es schlechter geht. Mit schwächer ausgeprägtem Zweierflügel könnte die Eins kühl und distanziert wirken. Der Zweierflügel macht daraus einen Menschen, der gibt.</p>
          <p class="vb-intro">1991 starb Brosnans erste Ehefrau Cassandra Harris an Eierstockkrebs. Statt sich zurückzuziehen, wurde Brosnan zu einem der sichtbarsten öffentlichen Fürsprecher für Aufklärung und Forschung zu dieser Krankheit &ndash; ein Engagement, das noch bitterer wurde, als 2013 auch seine Stieftochter Charlotte, Cassandras Tochter, derselben Krankheit erlag. Auch als Umweltaktivist setzt er sich seit Jahrzehnten ein, unter anderem als Fürsprecher der Vereinten Nationen für Umweltfragen. Der Zweierflügel wandelt persönlichen Verlust in beharrliches Engagement für andere um &ndash; nicht aus Pflichtgefühl, sondern aus echter Anteilnahme.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Werk: Vom Fernsehdetektiv zum Doppelnull-Agenten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Brosnan machte sich zunächst als eleganter Titelheld der Serie <em>Remington Steele</em> (1982&ndash;1987) einen Namen, bevor <em>GoldenEye</em> (1995) ihn endgültig zum internationalen Filmstar machte. Mit seiner eigenen Produktionsfirma Irish DreamTime produzierte er zudem Filme wie das Remake von <em>Thomas Crown ist nicht zu fassen</em> &ndash; ein Zeichen dafür, dass ihm die Kontrolle über die eigene Arbeit ebenso wichtig war wie das Spielen selbst.</p>
          <p class="vb-intro">Nach seiner Bond-Zeit bewies er mit Rollen in <em>Mamma Mia!</em> und ernsteren Charakterstudien wie <em>The Ghostwriter</em>, dass sein Handwerk über die Frackjacke des Agenten hinausreicht. Die SE1w2 erträgt keine Stagnation im eigenen Können &ndash; sie sucht immer wieder den nächsten Beweis, dass die eigenen Maßstäbe noch gelten.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der selbsterhaltenden Eins</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE1w2 ist eine seltene Verbindung aus Disziplin und Wärme: ein Mensch, der hohe Ansprüche an sich selbst stellt und diese Energie zugleich nutzt, um sich für andere einzusetzen. Brosnans jahrzehntelanges Engagement gegen Eierstockkrebs, getragen von eigenem Verlust, zeigt genau diese reife Form der Eins.</p>
          <p class="vb-intro">Der Schatten der SE1 ist die innere Strenge, die sich selbst nie ganz genügt. Das Schicksalsmuster der Eins ist der <strong>Zorn</strong>, der sich bei der SE1 meist nach innen richtet &ndash; als beständige Sorge, nicht gut genug vorbereitet zu sein. Brosnan selbst hat offen über Jahre des Alkoholmissbrauchs in jüngeren Jahren gesprochen, aus denen er sich mit derselben Disziplin befreite, mit der er später an seinen Rollen arbeitete. Der Adler kann sich selbst am härtesten verurteilen &ndash; und braucht ebenso viel Kraft, um sich selbst zu vergeben.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Heilungsweg: Vom Anspruch zur Hingabe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Eins führt vom Zorn zur Gelassenheit &ndash; von der Frage <em>Habe ich es richtig gemacht?</em> zur Erkenntnis <em>Ich habe gegeben, was ich hatte, und das war genug.</em> Für die SE1w2 zeigt sich dieser Weg besonders deutlich, wenn die eigene Disziplin nicht mehr der Selbstbeweis ist, sondern zum Werkzeug für andere wird.</p>
          <p class="vb-intro">Brosnans Wandlung von persönlichem Verlust zu öffentlichem Engagement für Krebsforschung und Umweltschutz liest sich als genau dieser Weg: die Strenge gegen sich selbst wird zur Sorge für die Welt. Der Adler, der nicht mehr nur sein eigenes Revier verteidigt, sondern seinen Blick auf das richtet, was größer ist als er selbst.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se1", label:"SE1 – Der Besorgte: Subtyp-Profil"},
        {route:"beruehmte-christoph-waltz", label:"Porträt: Christoph Waltz (SE1w2)"},
        {route:"beruehmte-robert-de-niro", label:"Porträt: Robert De Niro (SE1w9)"},
      ])}
    </div>
  `);
}

function peterSharpePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\xfchmte Pers\xf6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-peter-sharpe-portrait.jpg" alt="Dr. Peter Sharpe – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Peter Sharpe</p>
        <p class="krim-portrait-typ">SE1w9 &middot; Selbsterhaltender Typ 1 mit Neunerfl\xfcgel</p>
        <p class="krim-portrait-subtitle">Wildbiologe, geb. um 1965 &ndash; Leiter der Weißkopfseeadler-Wiederansiedlung auf den kalifornischen Kanalinseln &ndash; Tierentsprechung: Adler</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Adler</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Adler</strong> ist das Tier der selbsterhaltenden Eins &ndash; pr\xe4zise, revierbewusst, von stiller, unerm\xfcdlicher Genauigkeit. Das Tierbild, das diesen Kompass durchg\xe4ngig f\xfcr die SE1 begleitet, zeigt dabei tats\xe4chlich einen Wei\xdfkopfseeadler &ndash; denselben Vogel, den auch Dr. Peter Sharpe seit fast drei\xdfig Jahren erforscht und rettet. Anders als etwa bei den Menschenaffen, deren Arten sich archetypisch deutlich voneinander unterscheiden &ndash; Gorilla, Schimpanse und Orang-Utan stehen im Enneagramm f\xfcr drei ganz verschiedene Subtypen &ndash;, macht das Enneagramm bei Adlern diese Unterscheidung nicht: Ob Steinadler oder Wei\xdfkopfseeadler, das archetypische Prinzip ist dasselbe. Die Frage der genauen Art stellt sich hier also gar nicht erst.</p>
          <p class="vb-intro">Seit 1997 leitet Sharpe für das Institute for Wildlife Studies die Wiederansiedlung und \xdcberwachung der Wei\xdfkopfseeadler auf den kalifornischen Kanalinseln, allen voran Santa Catalina Island &ndash; ein Adlerforscher, dessen eigene Tierentsprechung der Adler ist, und dessen konkretes Forschungstier sogar exakt dem Bild entspricht, das dieser Kompass f\xfcr die SE1 verwendet.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Eins: Sorgfalt als Lebensaufgabe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Eins (SE1)</strong> richtet ihren Perfektionismus nicht nach außen, sondern auf die eigene Vorbereitung, die eigene Genauigkeit, die unbestechliche Sorgfalt im eigenen Handwerk. Naranjo nannte diesen Subtyp <em>Worry</em> &ndash; Besorgnis: die ständige, meist unauffällige Frage, ob man wirklich alles richtig gemacht hat. Sharpe, promovierter Zoologe (Colorado State University, 1998), arbeitet seit 1997 als Wildlife Ecologist beim Institute for Wildlife Studies in Avalon, Kalifornien &ndash; und leitet seither, fast im Alleingang, das Wiederansiedlungsprogramm für Wei\xdfkopfseeadler auf Santa Catalina Island (seit 1997) und Santa Cruz Island (seit 2002).</p>
          <p class="vb-intro">Die Ausgangslage war eine ökologische Katastrophe: Das Pestizid DDT hatte die Eierschalen der Wei\xdfkopfseeadler entlang der kalifornischen K\xfcste so d\xfcnn werden lassen, dass sie unter dem Gewicht der brütenden Altvögel zerbrachen &ndash; die Art war auf den Kanalinseln praktisch ausgel\xf6scht. Sharpes Arbeit bestand seit Jahrzehnten aus akribischer Detailarbeit: Horste beobachten, Eier notfalls per Hand austauschen oder k\xfcnstlich ausbr\xfcten lassen, jeden einzelnen Jungvogel beringen und individuell dokumentieren &ndash; Generation um Generation, Brutpaar um Brutpaar.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerfl\xfcgel: Geduld statt Dringlichkeit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerfl\xfcgel</strong> gibt der SE1-Sorgfalt eine ruhige, unaufgeregte Grundhaltung, die auf Ausdauer statt auf Dringlichkeit setzt. Wo eine SE1 mit st\xe4rkerem Zweierfl\xfcgel vermutlich mehr \xf6ffentliche \xdcberzeugungsarbeit geleistet h\xe4tte, arbeitet Sharpe seit fast drei\xdfig Jahren weitgehend im Hintergrund &ndash; kein mediengetriebener Kreuzzug, sondern eine geduldige, systematische Feldarbeit, Jahr für Jahr. Er nimmt Grenzen der Machbarkeit realistisch hin, statt sie zu erzwingen: Als die Feldarbeit auf der abgelegenen San-Miguel-Insel ab 2017 nicht mehr durchführbar war, dokumentierte er das schlicht als Datenl\xfccke, statt eine unrealistische Expedition zu riskieren.</p>
          <p class="vb-intro">Genau diese Kombination aus Genauigkeit und Gelassenheit zeigt sich auch körperlich: Noch im fortgeschrittenen Alter klettert Sharpe pers\xf6nlich in die Horste an Klippenkanten, um Jungv\xf6gel zu beringen &ndash; keine spektakul\xe4re Geste f\xfcr die Kamera, sondern die stille Selbstverst\xe4ndlichkeit, dass diese Arbeit eben getan werden muss, von jemandem, der es genau genug kann.</p>
        </blockquote>

        <h2 class="vb-section">4. Vom Beinahe-Aussterben zur stabilen Population</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">2006 schl\xfcpfte auf den Kanalinseln zum ersten Mal seit Jahrzehnten wieder ein Wei\xdfkopfseeadler-K\xfcken ohne menschliche Handaufzucht &ndash; ein stiller, aber entscheidender Wendepunkt. Heute z\xe4hlt Sharpes Programm mehrere Dutzend etablierte Brutpaare auf den n\xf6rdlichen und s\xfcdlichen Kanalinseln, jedes einzelne individuell bekannt, mit eigener Abstammungslinie, die Sharpe über Jahrzehnte hinweg akribisch dokumentiert hat. Er ist regelm\xe4\xdfig in Dokumentationen und Live-Kamera-\xdcbertragungen zu sehen &ndash; das ruhige, kompetente Gesicht der praktischen Adlerrettung in den USA, ohne je selbst im Mittelpunkt stehen zu wollen.</p>
          <p class="vb-intro">Neben den Wei\xdfkopfseeadlern betreute er auch Wanderfalken, Fischadler, Goldadler und den endemischen Inselfuchs auf den Kanalinseln &ndash; stets mit derselben Methode: geduldige, langfristige Feldbeobachtung statt schneller Symbolpolitik.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Adler als Br\xfccke zur Enneagramm-Hom\xf6opathie</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Dass sich Menschen wie Sharpe über Jahrzehnte hinweg genau dem Tier widmen, das ihrem eigenen Subtyp entspricht, ist kein Zufall, sondern eine Bestätigung: Die 27 Tierentsprechungen des Enneagramms sind keine willkürlichen Etiketten, sondern archetypische Prinzipien, die sich in Verhalten, Beruf und Berufung wiederfinden lassen &ndash; wie schon bei Dian Fossey, Jennifer Mather, Dr. Laurie Marker, Prof. Grahame Webb, Dr. Biruté Galdikas und vielen weiteren zu sehen war. Interessant ist, dass genau diese archetypischen Energien in der Enneagramm-Homöopathie eine weitere Entsprechung finden: Jedem der 27 Subtypen ist ein homöopathisches Mittel zugeordnet, das dieselbe Grundschwingung auf stofflicher Ebene widerspiegelt. Für die SE1 ist dies traditionell Platinum metallicum &ndash; ein Mittel für hohe Prinzipien, Perfektionismus und die stille, unerbittliche Sorgfalt, die auch Sharpes Lebenswerk kennzeichnet.</p>
          <p class="vb-intro">Wer diese Verbindung vertiefen möchte, findet in der Rubrik <a href="#enneagramm-homoeopathie">Enneagramm &amp; Homöopathie</a> die vollständige Zuordnung der homöopathischen Mittel zu allen 27 Subtypen.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Adler, der über Jahrzehnte wachte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Peter Sharpes Lebenswerk zeigt die selbsterhaltende Eins mit Neunerfl\xfcgel in ihrer beständigsten Form: keine spektakul\xe4re Rettungsaktion, sondern fast drei\xdfig Jahre geduldiger, akribischer Detailarbeit, die eine Art buchstäblich vom Rand des lokalen Aussterbens zurückholte &ndash; Brutpaar für Brutpaar, Ei für Ei, Jungvogel für Jungvogel.</p>
          <p class="vb-intro">Der Adler beobachtet lange aus der Stille, bevor er handelt &ndash; und wenn er handelt, braucht er dafür keine zweite Chance. Genau das war Sharpes Methode: kein lauter Kreuzzug, sondern die stille, unermüdliche Genauigkeit eines Menschen, der wusste, dass echte Wiederherstellung Zeit, Sorgfalt und einen langen Atem braucht.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
          ${bookTip("enneagramm-zoo", "27 Tierporträts – jedes Subtyp-Tier mit Charakter, Biologie und Enneagramm-Bezug.", "Enneagramm-Zoo")}
          ${bookTip("archetypen-der-tiere-im-enneagramm", "Die archetypischen Tiere der 9 Typen als innere Landkarte – Bilder, die sofort wirken.", "Archetypen der Tiere im Enneagramm")}
        </blockquote>

        ${relatedLinks([
          {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
          {route:"subtype/se1", label:"SE1 – Der Adler: Subtyp-Profil"},
          {route:"enneagramm-homoeopathie", label:"Enneagramm & Homöopathie – Mittelzuordnung für alle 27 Subtypen"},
        ])}
        ${animalResearcherMatchBlock("beruehmte-peter-sharpe")}
      </div>
    </div>
  `);
}

function anthonyHopkinsPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-anthony-hopkins-portrait.jpg" alt="Anthony Hopkins – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Anthony Hopkins</p>
        <p class="krim-portrait-typ">SE1w9 &middot; Selbsterhaltender Typ 1 mit Neunerflügel</p>
        <p class="krim-portrait-subtitle">Schauspieler, geb. 1937 in Port Talbot, Wales &ndash; Tierentsprechung: Adler</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Adler</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Adler</strong> ist das Tier der selbsterhaltenden Eins &ndash; ein Tier, das keine Bewegung verschwendet. Er beobachtet lange aus der Stille, bevor er handelt, und wenn er zuschlägt, braucht er dafür keine zweite Chance. Kraft ohne Lärm. Präzision ohne Anstrengung, die man sehen könnte.</p>
          <p class="vb-intro">Der walisische Schauspieler Anthony Hopkins ist als Hannibal Lecter in <em>Das Schweigen der Lämmer</em> (1991) mit gerade einmal rund sechzehn Minuten Screentime zum Oscar-Preisträger als bester Hauptdarsteller geworden &ndash; einer der kürzesten Auftritte, die je mit diesem Preis geehrt wurden. Kein Zufall, sondern reine Ökonomie: Jede Geste, jeder Blick, jede Pause war so genau gesetzt, dass sich die Bedrohung nicht durch Lautstärke, sondern durch vollkommene Stille aufbaute. Der Adler muss nicht schreien, um gefürchtet zu werden.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Eins: Genauigkeit als Selbstverpflichtung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Eins (SE1)</strong> richtet ihren Perfektionismus nicht auf die Korrektur der Welt, sondern nach innen: auf das eigene Handwerk, die eigene Vorbereitung, die unbestechliche Genauigkeit gegenüber sich selbst. Naranjo nannte diesen Subtyp <em>Worry</em> &ndash; Besorgnis. Die SE1 fragt sich unablässig: Habe ich es wirklich verstanden? Bin ich vollständig vorbereitet?</p>
          <p class="vb-intro">Bei Hopkins ist diese Frage zur Methode geworden. Er ist bekannt dafür, jedes Drehbuch zwischen hundert und mehreren hundert Mal zu lesen, bis der Text vollständig auswendig sitzt &ndash; nicht ungefähr, sondern Wort für Wort, Betonung für Betonung, lange bevor am Set überhaupt gedreht wird. Für seine Oscar-prämierte Rolle in <em>The Father</em> (2020) soll er das Drehbuch über 200 Mal gelesen haben. Das ist keine Marotte. Das ist die SE1, die sich weigert, mit weniger als vollständiger Beherrschung vor die Kamera zu treten.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerflügel: Die Stille als Zuhause</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerflügel (w9)</strong> fügt der SE1er-Energie eine Qualität hinzu, die auf den ersten Blick im Widerspruch zur intensiven Leinwandpräsenz steht: Rückzug, Stille, das Bedürfnis, sich mit etwas Größerem zu verschmelzen, statt sich selbst in den Vordergrund zu stellen.</p>
          <p class="vb-intro">Hopkins gilt als notorisch zurückgezogen &ndash; kein Freund von Filmpremieren-Small-Talk, kein Interesse an Society-Auftritten. Er verbringt seine Zeit lieber mit Malen, Komponieren am Klavier und ausgedehnten, meditativen Spaziergängen. 1975 wurde er nüchtern, nachdem eine schwere Alkoholabhängigkeit sein Leben fast zerstört hatte &ndash; seither lebt er mit derselben Disziplin abstinent, mit der er seine Rollen vorbereitet. Der Neunerflügel sucht nicht die Bühne für sich selbst. Er sucht die Ruhe, aus der heraus die eigentliche Arbeit erst möglich wird.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Werk: Zwei Oscars, sechs Jahrzehnte Bühne</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zwischen dem ersten Oscar für Hannibal Lecter (1992) und dem zweiten für seine Rolle als an Demenz erkrankter Vater in <em>The Father</em> (2021) liegen fast dreißig Jahre &ndash; mit 83 Jahren wurde Hopkins damit zum ältesten Gewinner in der Kategorie bester Hauptdarsteller der Oscar-Geschichte. Dazwischen: <em>Wolfsstunde</em>, <em>Legends of the Fall</em>, unzählige Bühnenrollen am Royal National Theatre, eine Karriere, die nie auf einer einzigen Ikone stehen blieb.</p>
          <p class="vb-intro">Neben der Schauspielerei komponiert Hopkins ernsthaft klassische Musik und malt &ndash; beides mit derselben stillen Disziplin, mit der er Drehbücher auswendig lernt. Der Adler kreist über mehrere Reviere zugleich, ohne dass eines davon zur bloßen Nebenbeschäftigung würde.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der selbsterhaltenden Eins</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE1w9 ist eine seltene Verbindung aus absoluter Handwerksgenauigkeit und innerer Gelassenheit &ndash; ein Künstler, der niemals improvisiert vor die Kamera tritt, aber auch niemals um Aufmerksamkeit ringt. Hopkins' jahrzehntelange Nüchternheit, erreicht und gehalten mit derselben Disziplin wie seine Rollenvorbereitung, zeigt die reife Form dieses Musters.</p>
          <p class="vb-intro">Der Schatten zeigt sich in der Distanz, die der Neunerflügel begünstigt. Das Schicksalsmuster der Eins ist der <strong>Zorn</strong>, der sich bei der SE1 meist nach innen wendet &ndash; doch der Rückzug kann auch nach außen verletzen. Hopkins' Verhältnis zu seiner Tochter Abigail aus erster Ehe war über Jahrzehnte von tiefer Entfremdung geprägt; in Interviews hat er selbst eingeräumt, in jüngeren Jahren ein distanzierter, schwieriger Vater gewesen zu sein. Der Adler, der sein eigenes Revier mit größter Sorgfalt pflegt, kann dabei übersehen, wer außerhalb dieses Reviers auf ihn wartet.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Heilungsweg: Von der Kontrolle zur Hingabe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Eins führt vom Zorn zur Gelassenheit &ndash; von der Frage <em>Habe ich alles unter Kontrolle?</em> zur Erkenntnis <em>Ich darf loslassen, auch wenn nicht alles perfekt ist.</em> Für die SE1w9 zeigt sich dieser Weg besonders in der Fähigkeit, die eigene Disziplin nicht mehr als Schutzwall zu brauchen, sondern als ruhige, tragende Grundlage.</p>
          <p class="vb-intro">Hopkins selbst spricht in späteren Interviews zunehmend gelassen über Alter, Vergänglichkeit und die eigene Sterblichkeit &ndash; ohne die Schärfe der Selbstkritik früherer Jahrzehnte. Der Adler, der nicht mehr beweisen muss, dass er der Beste ist. Er weiß es längst, und braucht es niemandem mehr zu zeigen.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se1", label:"SE1 – Der Besorgte: Subtyp-Profil"},
        {route:"beruehmte-robert-de-niro", label:"Porträt: Robert De Niro (SE1w9)"},
        {route:"beruehmte-sting", label:"Porträt: Sting (SE1w9)"},
        {route:"beruehmte-magnus-carlsen", label:"Porträt: Magnus Carlsen (SE1w9)"},
        {route:"beruehmte-jodie-foster", label:"Porträt: Jodie Foster (SX5w6) – Hauptdarstellerin in ›Das Schweigen der Lämmer‹"},
        {route:"krankheitsportraets-anthony-hopkins", label:"Krankheitsporträt: Anthony Hopkins (SE1w9) – Alkoholerkrankung und Nüchternheit seit 1975"},
      ])}
    </div>
  `);
}

function magnusCarlsenPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-magnus-carlsen-portrait.jpg" alt="Magnus Carlsen – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Magnus Carlsen</p>
        <p class="krim-portrait-typ">SE1w9 &middot; Selbsterhaltender Typ 1 mit Neunerflügel</p>
        <p class="krim-portrait-subtitle">Schachgroßmeister, geb. 1990 in Tønsberg, Norwegen &ndash; Tierentsprechung: Adler</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Adler</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Adler</strong> ist das Tier der selbsterhaltenden Eins &ndash; er jagt nicht mit Wucht, sondern mit Geduld und einem Blick, der jedes Detail erfasst. Er kreist lange über dem Spielfeld, bevor er zuschlägt, und wenn er zuschlägt, braucht es keine zweite Bewegung.</p>
          <p class="vb-intro">Der norwegische Schachspieler Magnus Carlsen gilt seit über einem Jahrzehnt als der beste Schachspieler der Welt &ndash; nicht durch spektakuläre Kombinationen, sondern durch eine fast unmenschliche Fähigkeit, aus minimalen, kaum sichtbaren Vorteilen unaufhaltsam Gewinnstellungen zu erarbeiten. Gegner beschreiben Partien gegen ihn oft als langsames Erdrücken: kein einzelner Fehler entscheidet, sondern die Summe unzähliger, unauffälliger Ungenauigkeiten, die der Adler gnadenlos registriert und ausnutzt.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Eins: Fehlerlosigkeit als Handwerk</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Eins (SE1)</strong> richtet ihren Perfektionismus nicht auf die Korrektur der Welt, sondern nach innen: auf die eigene Genauigkeit, die eigene Vorbereitung, die kompromisslose Beherrschung des eigenen Handwerks. Naranjo nannte diesen Subtyp <em>Worry</em> &ndash; Besorgnis. Die SE1 fragt sich unablässig: Ist diese Stellung wirklich optimal ausgeschöpft? Habe ich auch die letzte Nuance gesehen?</p>
          <p class="vb-intro">Carlsens Spielstil ist dieses Prinzip ungefiltert. Wo andere Weltklassespieler auf riskante taktische Schlachten setzen, sucht er die technisch sauberste, fehlerfreieste Fortsetzung &ndash; selbst in scheinbar ausgeglichenen Endspielen, die andere längst remis geben würden. Seine Elo-Zahl erreichte 2014 mit 2882 Punkten den bislang höchsten je gemessenen Wert der Schachgeschichte &ndash; ein Rekord, der aus jahrelanger, akribischer Selbstoptimierung entstand, nicht aus einzelnen Geniestreichen.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerflügel: Loslassen als Stärke</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerflügel (w9)</strong> fügt der SE1er-Energie eine Qualität hinzu, die im Hochleistungssport selten ist: die Fähigkeit, Status und Erwartungen loszulassen, statt sie krampfhaft zu verteidigen. Während die Eins mit schwach ausgeprägtem Neunerflügel eher an einmal erreichten Standards festhält, kann der Neunerflügel erkennen, wann ein Kampf die eigene innere Ruhe nicht mehr wert ist.</p>
          <p class="vb-intro">2022 verzichtete Carlsen freiwillig auf die Titelverteidigung der Schachweltmeisterschaft &ndash; einer der prestigeträchtigsten Titel des gesamten Sports &ndash; und begründete dies offen damit, dass ihm die Motivation für einen weiteren Titelkampf fehle. Kein Skandal, kein Rückzug aus Erschöpfung, sondern eine ruhige, klare Entscheidung: Der Titel gab ihm nicht mehr das, was er brauchte. Ein Adler, der freiwillig einen Ast verlässt, den jeder andere um jeden Preis verteidigen würde &ndash; nicht aus Schwäche, sondern weil der Neunerflügel weiß, wann Festhalten keinen Sinn mehr ergibt.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Werk: Ein Jahrzehnt an der Spitze</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Carlsen wurde 2004, mit nur 13 Jahren, zum jüngsten Großmeister seiner Zeit und stand seit 2011 ununterbrochen auf Platz eins der Weltrangliste &ndash; eine Dominanz ohne Vergleich in der jüngeren Schachgeschichte. Von 2013 bis zu seinem freiwilligen Verzicht 2023 hielt er den Weltmeistertitel gegen mehrere Herausforderer, unter anderem Wiswanathan Anand, Sergei Karjakin, Fabiano Caruana und Ian Nepomniachtchi.</p>
          <p class="vb-intro">Auch nach dem Rückzug vom klassischen WM-Titel blieb er in Schnellschach und Blitzschach konkurrenzlos dominant und gewann mehrfach die Weltmeisterschaften in diesen schnelleren Formaten. Der Adler musste seinen Horst nicht aufgeben, um weiterzufliegen &ndash; er wählte nur, in welchem Revier er jagen wollte.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der selbsterhaltenden Eins</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE1w9 ist eine seltene Verbindung aus schonungsloser Genauigkeit und innerer Gelassenheit &ndash; ein Champion, der niemals nachlässig spielt, aber auch nie um seinen Status kämpft, wenn dieser Kampf ihn innerlich auslaugen würde. Carlsens Entscheidung von 2022 gilt heute vielen als Vorbild für einen reifen Umgang mit Erfolg.</p>
          <p class="vb-intro">Der Schatten der SE1 zeigt sich in kompromissloser Strenge gegenüber sich selbst und, im Fall Carlsens, gegenüber vermeintlich unsauberem Spiel anderer. 2022 beschuldigte er öffentlich den jungen US-Großmeister Hans Niemann des Betrugs, ohne zunächst konkrete Beweise vorzulegen &ndash; eine Anschuldigung, die die Schachwelt monatelang spaltete. Das Schicksalsmuster der Eins ist der <strong>Zorn</strong>, der sich hier nicht nach innen, sondern in Form kompromissloser moralischer Gewissheit nach außen richtete. Der Adler, der genau sieht, kann sich in seiner eigenen Genauigkeit auch täuschen.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Heilungsweg: Von der Kontrolle zur Freiheit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Eins führt vom Zorn zur Gelassenheit &ndash; von der Frage <em>Muss ich diesen Titel um jeden Preis verteidigen?</em> zur Erkenntnis <em>Mein Wert hängt nicht von diesem einen Titel ab.</em> Für die SE1w9 zeigt sich dieser Weg besonders deutlich, wenn Loslassen nicht als Niederlage, sondern als Befreiung erlebt wird.</p>
          <p class="vb-intro">Carlsens Verzicht auf die WM-Titelverteidigung liest sich als genau dieser Schritt: die Bereitschaft, den eigenen Wert nicht länger an einem einzigen, immer wiederkehrenden Beweis festzumachen. Der Adler, der nicht mehr beweisen muss, dass er der Beste ist &ndash; er spielt einfach weiter, aus Freude am Spiel selbst.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se1", label:"SE1 – Der Besorgte: Subtyp-Profil"},
        {route:"beruehmte-robert-de-niro", label:"Porträt: Robert De Niro (SE1w9)"},
        {route:"beruehmte-anthony-hopkins", label:"Porträt: Anthony Hopkins (SE1w9)"},
        {route:"beruehmte-sting", label:"Porträt: Sting (SE1w9)"},
        {route:"beruehmte-judit-polgar", label:"Porträt: Judit Polgár (SE3w4) – schlug ihn im Schach"},
      ])}
    </div>
  `);
}

function astridLindgrenPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-astrid-lindgren-portrait.jpg" alt="Astrid Lindgren – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Astrid Lindgren</p>
        <p class="krim-portrait-typ">SE1w9 &middot; Selbsterhaltender Typ 1 mit Neunerflügel</p>
        <p class="krim-portrait-subtitle">Schriftstellerin, 1907&ndash;2002 &ndash; Tierentsprechung: Adler</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Adler</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Adler</strong> ist das Tier der selbsterhaltenden Eins &ndash; er kreist hoch über dem Geschehen, sieht mit ungewöhnlicher Klarheit, was unten geschieht, und greift nur ein, wenn es wirklich zählt. Kein Tier der lauten Geste, sondern der stillen, unbestechlichen Genauigkeit. Und wenn er seine Flügel ausbreitet, trägt er weiter als fast jedes andere Tier.</p>
          <p class="vb-intro">Astrid Lindgren, geboren 1907 auf dem Bauernhof Näs bei Vimmerby in der schwedischen Provinz Småland, wurde zur meistgelesenen schwedischen Autorin aller Zeiten &ndash; über 165 Millionen verkaufte Bücher, übersetzt in mehr als 100 Sprachen. Und doch blieb sie zeitlebens erstaunlich zurückhaltend, fast unsichtbar hinter ihrem eigenen Werk. Der Adler muss nicht ständig kreisen, um gesehen zu werden. Er muss nur einmal richtig fliegen.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Eins: Disziplin als tägliches Ritual</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Eins (SE1)</strong> richtet ihren Perfektionismus nicht auf die Korrektur der Welt, sondern nach innen: auf die eigene Arbeitsdisziplin, die eigene Genauigkeit, die unbestechliche Verlässlichkeit gegenüber sich selbst. Naranjo nannte diesen Subtyp <em>Worry</em> &ndash; Besorgnis. Die SE1 fragt sich unablässig: Habe ich es wirklich richtig gemacht? Genügt das meinem eigenen Anspruch?</p>
          <p class="vb-intro">Bei Lindgren zeigte sich das in einer fast klösterlichen Arbeitsroutine, die sie über Jahrzehnte beibehielt: Sie schrieb ihre ersten Fassungen im Bett, in Stenografie, jeden Morgen vor dem eigentlichen Arbeitstag &ndash; erst danach tippte sie den Text auf der Schreibmaschine ins Reine. Parallel dazu arbeitete sie fast vierzig Jahre lang als Cheflektorin für Kinderbücher beim Verlag Rabén &amp; Sjögren, wo sie mit derselben Genauigkeit die Manuskripte anderer prüfte, wie sie ihre eigenen Texte prüfte. Zwei parallele Karrieren, geführt mit derselben unerbittlichen Sorgfalt &ndash; nicht aus Ehrgeiz, sondern aus dem inneren Anspruch, es richtig zu machen.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerflügel: Zurückhaltung trotz Weltruhm</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerflügel (w9)</strong> fügt der SE1er-Energie eine Qualität hinzu, die im Rampenlicht selten überlebt: die Fähigkeit, sich zurückzunehmen, zu verschmelzen, nicht die eigene Person, sondern die Sache in den Mittelpunkt zu stellen. Während die Eins mit schwach ausgeprägtem Neunerflügel ihre Position eher verteidigt, sucht der Neunerflügel eher die stille Wirkung als den lauten Auftritt.</p>
          <p class="vb-intro">Trotz ihres immensen weltweiten Ruhms blieb Lindgren zeitlebens auffällig bescheiden. Sie gab nur selten ausführliche Interviews über ihr Privatleben, mied die große Bühne der eigenen Berühmtheit und blieb bis ins hohe Alter in ihrer Stockholmer Wohnung in der Dalagatan wohnen, unprätentiös und erreichbar für Nachbarschaftskinder, die dort tatsächlich klingelten, um &bdquo;die echte Pippi-Autorin&ldquo; zu treffen. Der Neunerflügel zeigt sich auch in ihrer Verlagsarbeit: Sie entdeckte und förderte über Jahrzehnte zahlreiche andere schwedische Kinderbuchautoren, ohne selbst im Vordergrund zu stehen &ndash; eine stille, geduldige Form von Einfluss, die sich nicht an der eigenen Sichtbarkeit misst.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Werk: Ein Jahrhundert Kindheit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">1941 erfand Lindgren, während sie am Bett ihrer erkrankten Tochter Karin saß, auf deren Bitte hin die Figur der <em>Pippi Langstrumpf</em> &ndash; ein Mädchen, das allein in einer Villa lebt, übermenschlich stark ist und sich um keine Erwachsenenregel schert. 1945 veröffentlicht, wurde die Figur zur literarischen Revolution: Erstmals stand ein Kind im Mittelpunkt, das keine Autorität über sich duldete, sondern souverän, gütig und völlig unabhängig sein eigenes Leben gestaltete. Manche zeitgenössische Pädagogen waren entsetzt. Millionen Kinder waren begeistert.</p>
          <p class="vb-intro">Es folgte ein Lebenswerk von seltener Breite: <em>Karlsson vom Dach</em> (1955), <em>Michel aus Lönneberga</em> (1963), die zärtlich-melancholischen <em>Brüder Löwenherz</em> (1973), die noch heute als eines der bedeutendsten Kinderbücher über Tod und Mut gelten, und <em>Ronja Räubertochter</em> (1981), das eine ganze Generation skandinavischer Mädchen prägte. Fast alle ihre Bücher verbinden dieselbe seltene Kombination: unbedingten Respekt vor der kindlichen Autonomie und eine klare, fast strenge moralische Ordnung im Hintergrund &ndash; die SE1 und ihre kindliche Freiheit liebende Gegenspielerin in einer einzigen Autorin vereint.</p>
        </blockquote>

        <h2 class="vb-section">5. Die frühe Wunde: Der Sohn, den sie fortgeben musste</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">1926, mit achtzehn Jahren, wurde die unverheiratete Astrid schwanger &ndash; in der schwedischen Provinz jener Zeit ein gesellschaftlicher Skandal, der ihre Zukunft am Ort zunichtemachen konnte. Sie ging nach Kopenhagen, brachte ihren Sohn Lasse dort heimlich zur Welt und musste ihn, da sie ihn allein nicht ernähren konnte, für Jahre bei einer dänischen Pflegefamilie zurücklassen &ndash; ein Abschied, den sie später als den schmerzhaftesten Moment ihres Lebens beschrieb. Erst 1930, nachdem sie sich in Stockholm eine eigene Existenz aufgebaut hatte, konnte sie ihn zu sich holen.</p>
          <p class="vb-intro">Dieses früh erlittene Trauma spricht sie in ihren Werken nie direkt aus &ndash; typisch für die zurückgezogene SE1w9, die private Schmerzen selten öffentlich verhandelt. Doch das durchgängige Motiv des allein zurechtkommenden, mutigen Kindes in ihrem gesamten Werk, von Pippi bis zu den Brüdern Löwenherz, lässt sich kaum lösen von dieser eigenen frühen Erfahrung von Trennung und dem verzweifelten Bedürfnis, dass ein Kind auch ohne schützende Erwachsene bestehen kann.</p>
        </blockquote>

        <h2 class="vb-section">6. Der aufrechte Zorn: Pomperipossa und die Lex Lindgren</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">1976 veröffentlichte die eigentlich politisch zurückhaltende Lindgren die satirische Erzählung <em>Pomperipossa in Monismanien</em>, in der sie öffentlich machte, dass sie als Kleinunternehmerin durch eine absurde Steuerregelung über 100 Prozent ihres Einkommens versteuern musste &ndash; mehr, als sie überhaupt verdiente. Die Geschichte löste eine landesweite Debatte aus und gilt noch heute als einer der Faktoren, die zur Abwahl der seit 44 Jahren regierenden Sozialdemokraten bei der Wahl desselben Jahres beitrugen &ndash; obwohl Lindgren selbst deren langjährige Sympathisantin war. Die SE1 verteidigt nicht die eigene Partei, sondern das, was sie für richtig hält, auch wenn es die eigenen Verbündeten trifft.</p>
          <p class="vb-intro">Noch entschiedener war ihr jahrzehntelanges Engagement für Tierschutz: In ihren letzten Lebensjahren kämpfte die über achtzigjährige Lindgren öffentlich und unermüdlich gegen die Bedingungen der industriellen Tierhaltung in Schweden. 1988, nur ein Jahr vor ihrem Rückzug aus der Öffentlichkeit, wurde als direkte Folge ihres Engagements ein neues schwedisches Tierschutzgesetz verabschiedet, das im Volksmund bis in die Gegenwart &bdquo;Lex Lindgren&ldquo; genannt wird. Der Adler, der sein ganzes Leben lang genau beobachtet hatte, was falsch lief &ndash; und der am Ende seiner Kraft noch einmal alles einsetzte, um es zu ändern.</p>
        </blockquote>

        <h2 class="vb-section">7. Licht und Schatten der selbsterhaltenden Eins</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE1w9 ist eine seltene Verbindung aus unbestechlicher Integrität und stiller, tragender Güte. Lindgren hat mit derselben Disziplin, mit der sie Manuskripte prüfte, auch für Gerechtigkeit gekämpft &ndash; leise, aber mit enormer Wirkung. Sie hat nie versucht, größer zu wirken, als sie war, und wurde gerade dadurch zu einer der einflussreichsten moralischen Stimmen ihres Landes.</p>
          <p class="vb-intro">Der Schatten zeigt sich in der Härte, mit der die SE1 an sich selbst festhält, und in der Distanz, die der Neunerflügel begünstigt. Die frühe Trennung von ihrem Sohn Lasse blieb ein lebenslanger, kaum verarbeiteter Schmerz, über den sie öffentlich fast nie sprach &ndash; ein Beispiel dafür, wie die SE1w9 selbst tiefste Verletzungen still in sich trägt, statt sie zu teilen. Das Schicksalsmuster der Eins ist der <strong>Zorn</strong>, der bei der SE1 meist nach innen gerichtet ist &ndash; als beständige, selbst auferlegte Strenge, dass man mit weniger als vollständiger Disziplin niemandem gerecht wird, auch sich selbst nicht.</p>
        </blockquote>

        <h2 class="vb-section">8. Der Heilungsweg: Vom Richter zur Güte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Eins führt vom Zorn zur Gelassenheit &ndash; von der Frage <em>Habe ich alles richtig gemacht?</em> zur Erkenntnis <em>Ich habe gegeben, was ich hatte, und daraus ist etwas Gutes gewachsen.</em> Bei Lindgren zeigt sich dieser Weg in der Entwicklung ihres Werks selbst: von der ungebändigten Pippi über die dunkleren, todesnahen Töne der Brüder Löwenherz bis zur reifen, versöhnten Altersweisheit ihres öffentlichen Tierschutz-Engagements.</p>
          <p class="vb-intro">Astrid Lindgren starb 2002 im Alter von 94 Jahren in Stockholm, betrauert von einer ganzen Nation &ndash; ihr Begräbnis wurde live im schwedischen Fernsehen übertragen. Sie hinterließ kein Vermögen an Eitelkeit, sondern ein Jahrhundert voller Kinder, die durch ihre Bücher lernten, dass man mutig, eigenständig und gütig sein kann, auch wenn die Welt der Erwachsenen etwas anderes verlangt. Der Adler, der nie laut sein musste, um weit zu tragen &ndash; und dessen Flügelschlag noch heute, Generationen später, in jedem Kind nachhallt, das zum ersten Mal von Pippi Langstrumpf hört.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se1", label:"SE1 – Der Besorgte: Subtyp-Profil"},
        {route:"beruehmte-ken-follett", label:"Porträt: Ken Follett (SE1w9)"},
        {route:"krankheitsportraets-astrid-lindgren", label:"Krankheitsporträt: Astrid Lindgren (SE1w9) – Makuladegeneration"},
      ])}
    </div>
  `);
}

function giannaNanniniPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-gianna-nannini-portrait.jpg" alt="Gianna Nannini – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Gianna Nannini</p>
        <p class="krim-portrait-typ">SE1w9 · Selbsterhaltender Typ 1 mit Neunerflügel</p>
        <p class="krim-portrait-subtitle">Italienische Rocksängerin, geb. 1954 – Tierentsprechung: Adler</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Adler</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Adler</strong> ist das Tier der selbsterhaltenden Eins – er kreist hoch über dem Geschehen, sieht mit ungewöhnlicher Klarheit, was unten geschieht, und greift nur ein, wenn es wirklich zählt. Gianna Nannini wurde 1954 in Siena geboren, als Tochter eines wohlhabenden Industriellen und Konditoreiunternehmers und Schwester des späteren Formel-1-Fahrers Alessandro Nannini. In dieser konservativen, traditionsbewussten Unternehmerfamilie galt sie früh als das kreative Gegenstück – erwartet wurde eine Nachfolge im Familienbetrieb, gewollt hatte sie etwas ganz anderes.</p>
          <p class="vb-intro">Statt sich offen gegen die Familie aufzulehnen, wählte die junge Gianna den disziplinierten Weg: Sie durchlief ihre gesamte Jugend hindurch eine klassische Ausbildung am Konservatorium von Lucca, wurde als Pianistin geschult und studierte später Komposition bei Bruno Bettinelli. Der Adler, der sich seine Flugbahn nicht erkämpft, sondern sie sich präzise erarbeitet, bevor er abhebt.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Eins: Disziplin unter der Rockfassade</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Eins (SE1)</strong> richtet ihren Perfektionismus nicht auf die Korrektur der Welt, sondern nach innen: auf die eigene Arbeitsdisziplin, die eigene Genauigkeit, die unbestechliche Verlässlichkeit gegenüber sich selbst. Naranjo nannte diesen Subtyp <em>Worry</em> – Besorgnis. Hinter Nanninis öffentlichem Image als raue, ungezähmte Rockröhre steht eine handwerklich außergewöhnlich gründliche Ausbildung: neben der klassischen Konservatoriumsausbildung nahm sie eigens Gesangsunterricht in London, um ihre Stimme technisch zu fundieren, statt sich allein auf natürliches Talent zu verlassen.</p>
          <p class="vb-intro">Am deutlichsten zeigte sich diese innere Strenge, als Nannini 1994, bereits als international gefeierter Rockstar in ihren Vierzigern, an der Universität Siena einen Abschluss in Philosophie erwarb – neben einer durchgehenden Karriere, nicht als Ersatz dafür. Kein Statussymbol, sondern der SE1-typische innere Anspruch, eine begonnene Sache mit derselben Ernsthaftigkeit zu Ende zu bringen, mit der sie ihre Musik betreibt.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerflügel: Rebellion ohne Kampfansage</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerflügel (w9)</strong> fügt der SE1er-Energie eine Qualität hinzu, die im Rockgeschäft selten überlebt: die Fähigkeit, den eigenen Weg zu gehen, ohne dafür lautstark Konflikte zu suchen. Mit neunzehn Jahren verließ Nannini Siena in Richtung Mailand, um dort in Bars und kleinen Clubs aufzutreten – kein spektakulärer Bruch mit der Familie, sondern ein stiller, konsequenter Weggang, der ihr eigenes Leben ermöglichte, ohne die Familie öffentlich zu attackieren.</p>
          <p class="vb-intro">Dieselbe undramatische Beharrlichkeit trägt ihre über fünfzig Jahre andauernde Karriere: 1976 das erste, kommerziell noch unauffällige Album, 1979 der internationale Durchbruch mit ›America‹ vom Album ›California‹, 1986 der europaweite Hit ›Bello e impossibile‹ – kein einmaliger Ausbruch, sondern eine über Jahrzehnte gleichbleibend disziplinierte Weiterentwicklung. Auch ihr politisches Engagement für Umweltschutz, Frauenrechte und die Rechte von Geflüchteten trägt diese Handschrift: konsequent, aber ohne die konfrontative Schärfe, mit der andere Künstler ihrer Generation auftraten.</p>
        </blockquote>

        <h2 class="vb-section">4. ›America‹ und der internationale Durchbruch, 1979</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Mit ihrem dritten Album ›California‹ und der Single ›America‹ gelang Nannini 1979 der internationale Durchbruch – ein energiegeladener, textlich gewagter Song, der den Nerv der Zeit traf und sie über Italien hinaus bekannt machte. Der Erfolg kam nicht plötzlich: Vor diesem Durchbruch lagen bereits Jahre disziplinierter Bühnenarbeit in Mailänder Clubs und zwei vorangegangene, kommerziell wenig erfolgreiche Alben, die sie nicht aufgab.</p>
          <p class="vb-intro">Es folgte ein Werk von seltener Kontinuität: ›Fotoromanza‹ (1984), ›I maschi‹ (1987), ›Meravigliosa creatura‹ (1995) und ›Sei nell'anima‹ (2006) – Hits, die über Jahrzehnte hinweg entstanden, nicht als einmalige Erfolgswelle, sondern als das Ergebnis einer beständig weitergeführten, handwerklich fundierten Karriere.</p>
        </blockquote>

        <h2 class="vb-section">5. Mutter mit sechsundfünfzig: Eine Entscheidung ohne Rechtfertigung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Im August 2010, im Alter von sechsundfünfzig Jahren, gab Nannini ihre Schwangerschaft öffentlich bekannt – auf dem Cover der ›Vanity Fair‹, in einem T-Shirt mit der Aufschrift ›God is a Woman‹. Der Name des Vaters wurde nie genannt, das Kind war durch eine künstliche Befruchtung entstanden. Am 26. November 2010 kam ihre Tochter Penelope Jane Charlotte in Mailand zur Welt.</p>
          <p class="vb-intro">Auffällig war nicht nur die Entscheidung selbst, sondern die Art, wie Nannini sie kommunizierte: klar, selbstbewusst, ohne sich für ihre Wahl zu rechtfertigen oder öffentliche Debatten über die Konventionalität ihres Vorgehens zu suchen. Die SE1w9-typische Haltung, eine als richtig erkannte Entscheidung ruhig, aber unverrückbar umzusetzen – kein Kampf gegen die Konvention, sondern ihr einfaches Übergehen.</p>
        </blockquote>

        <h2 class="vb-section">6. Der stille Umzug für die Gleichstellung, 2017</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">2017 zog Nannini mit ihrer Tochter und ihrer Partnerin Carla nach London – nicht aus beruflichen Gründen, sondern weil eine gleichgeschlechtliche Ehe in Italien zu diesem Zeitpunkt rechtlich nicht möglich war (nur eingetragene Lebenspartnerschaften). Statt öffentlich für eine Gesetzesänderung zu kämpfen, wählte sie den pragmatischen, disziplinierten Weg: ein Ortswechsel, der das gewünschte Ergebnis unmittelbar ermöglichte.</p>
          <p class="vb-intro">Auch hier zeigt sich die charakteristische SE1w9-Lösung: kein lauter öffentlicher Protest, sondern eine klare, folgerichtige Handlung, die das Prinzip – rechtliche Gleichstellung für die eigene Familie – ohne Umweg über gesellschaftliche Auseinandersetzung durchsetzt.</p>
        </blockquote>

        <h2 class="vb-section">7. Licht und Schatten der selbsterhaltenden Eins</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE1w9 ist die Fähigkeit, <strong>eigene Prinzipien konsequent zu leben, ohne sie anderen aufzuzwingen</strong> – Nannini hat weder ihre Familie öffentlich attackiert noch für ihre unkonventionellen Lebensentscheidungen um gesellschaftliche Zustimmung geworben. Sie hat sie einfach gelebt, mit derselben Disziplin, mit der sie ihre Musik betreibt.</p>
          <p class="vb-intro">Der Schatten zeigt sich in der Zurückhaltung, mit der die SE1w9 auch tiefe persönliche Themen behandelt: Über die Beziehung zum Vater ihrer Tochter, über die genauen Umstände ihrer Familiengeschichte sprach Nannini öffentlich kaum – private Angelegenheiten bleiben privat, auch wenn öffentliches Interesse besteht. Das Schicksalsmuster der Eins ist der <strong>Zorn</strong>, der bei der SE1 meist nach innen gerichtet ist – als beständiger, selbst auferlegter Anspruch, jede Entscheidung mit voller Konsequenz zu tragen, ohne sich zu rechtfertigen.</p>
        </blockquote>

        <h2 class="vb-section">8. Der Heilungsweg: Von der stillen Disziplin zur gelebten Freiheit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Eins führt vom Zorn zur Gelassenheit – von der Frage <em>Habe ich alles richtig gemacht?</em> zur Erkenntnis <em>Ich darf mein Leben nach meinen eigenen Maßstäben gestalten.</em> Bei Nannini zeigt sich dieser Weg in der Entwicklung von der jungen Konservatoriumsschülerin, die ihre Rebellion in disziplinierte Ausbildung übersetzte, bis zur Frau, die mit sechsundfünfzig Jahren, ohne sich zu rechtfertigen, ihr eigenes Familienmodell lebte.</p>
          <p class="vb-intro">Über fünfzig Jahre nach ihrem ersten Album steht Nannini weiterhin auf der Bühne – konsequent, diszipliniert, ohne sich je an ein Image zu binden, das nicht mehr zu ihr passt. Der Adler, der nie laut werben musste, um weit zu tragen, und der bis heute genau dort fliegt, wohin er selbst entschieden hat.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se1", label:"SE1 – Der Besorgte: Subtyp-Profil"},
        {route:"beruehmte-astrid-lindgren", label:"Porträt: Astrid Lindgren (SE1w9)"},
        {route:"beruehmte-ken-follett", label:"Porträt: Ken Follett (SE1w9)"},
        {route:"beruehmte-anthony-hopkins", label:"Porträt: Anthony Hopkins (SE1w9)"},
      ])}
    </div>
  `);
}

function kenFollettPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-ken-follett-portrait.jpg" alt="Ken Follett" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ken Follett</p>
        <p class="krim-portrait-typ">SE1w9 &middot; Selbsterhaltender Typ 1 mit Neunerfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Schriftsteller, geb. 1949 &ndash; Tierentsprechung: Adler</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Adler</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Adler</strong> ist kein hektischer J\u00e4ger. Er kreist ruhig, ausdauernd, \u00fcber weite Strecken hinweg &ndash; und genau dieses lange, geduldige Kreisen, nicht der pl\u00f6tzliche Sturzflug, ist die treffendste Beschreibung f\u00fcr Ken Folletts \u00fcber sechzig Jahre w\u00e4hrende Schriftstellerkarriere. Kein anderer lebender Autor historischer Romane hat eine derart l\u00fcckenlose, jahrzehntelange Konstanz vorzuweisen.</p>
          <p class="vb-intro">Der walisische Schriftsteller Ken Follett gelang sein internationaler Durchbruch mit einem Spionageroman \u00fcber einen deutschen Agenten in England w\u00e4hrend des Zweiten Weltkriegs, der 1978 erschien &ndash; nach Jahren als weitgehend unbeachteter Autor. Danach folgten Jahrzehnt um Jahrzehnt neue, oft tausendseitige Werke, von einer mittelalterlichen Kathedrale bis zu den Weltkriegen des 20. Jahrhunderts. Der Adler kreist, beobachtet die gesamte Landschaft der Geschichte &ndash; und l\u00e4sst sich dabei von nichts hetzen.</p>
          <p class="vb-intro">Bemerkenswert ist die schiere Ausdauer: Wo andere Erfolgsautoren nach wenigen Jahrzehnten nachlassen, ver\u00f6ffentlicht Follett auch im hohen Alter weiterhin umfangreiche, akribisch recherchierte W\u00e4lzer. Das ist Methode – gelebte Selbsterhaltung &ndash; ein System, das sich selbst \u00fcber Jahrzehnte hinweg stabil h\u00e4lt.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Eins: Struktur als \u00dcberlebensprinzip</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Eins (SE1)</strong> richtet ihr Vollkommenheitsstreben, anders als die soziale oder sexuelle Eins, nach innen: auf die eigene Disziplin, das eigene Handwerk, die eigene Vorbereitung. Naranjo nannte diesen Subtyp <em>Worry</em> &ndash; Besorgnis. Es ist die stille, best\u00e4ndige Sorge, ob die eigene Arbeit wirklich hieb- und stichfest ist, gepaart mit einem fast unersch\u00fctterlichen Arbeitsethos.</p>
          <p class="vb-intro">Bei Ken Follett zeigt sich das in einer legend\u00e4ren Arbeitsroutine: feste Schreibzeiten, ein durchgeplanter Tagesablauf, ausf\u00fchrliche schriftliche Handlungsger\u00fcste, bevor \u00fcberhaupt das erste Kapitel entsteht. F\u00fcr seine historischen Romane l\u00e4sst er Fakten von Fachhistorikern gegenlesen, bereist Originalschaupl\u00e4tze, \u00fcberarbeitet Manuskripte in mehreren, oft von externen Lesern begleiteten Durchg\u00e4ngen. Nichts soll dem Zufall \u00fcberlassen bleiben.</p>
          <p class="vb-intro">Diese Sorgfalt ist bei der SE1 kein Selbstzweck, sondern eine Art innerer Schutzmechanismus: Wer jedes Detail kontrolliert hat, muss sich sp\u00e4ter keine Vorw\u00fcrfe machen. Das ist die stille, nach innen gerichtete Logik des Subtyps &ndash; <em>Wenn ich es richtig gemacht habe, bin ich sicher.</em></p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerfl\u00fcgel: Gelassenheit statt Getriebenheit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerfl\u00fcgel (w9)</strong> unterscheidet sich grundlegend vom Zweierfl\u00fcgel, den beispielsweise Dan Brown tr\u00e4gt. W\u00e4hrend der Zweierfl\u00fcgel die Energie der Eins nach au\u00dfen \u00f6ffnet &ndash; in W\u00e4rme, Geben, Anteilnahme &ndash; bringt der Neunerfl\u00fcgel etwas anderes hinein: Ruhe, Gleichmut, eine fast meditative Gelassenheit. Die SE1w9 wirkt weniger dr\u00e4ngend, weniger fordernd als die SE1w2. Sie muss niemanden von etwas \u00fcberzeugen. Sie muss nicht einmal auffallen.</p>
          <p class="vb-intro">Bei Ken Follett \u00e4u\u00dfert sich das in einer bemerkenswerten \u00f6ffentlichen Zur\u00fcckhaltung, gerade im Vergleich zu vielen anderen Bestsellerautoren. Er inszeniert sich kaum, sucht selten die gro\u00dfe Kontroverse, tritt in Interviews sachlich, fast unaufgeregt auf. Seine B\u00fccher selbst folgen einem \u00e4hnlichen Prinzip: ruhige, ausf\u00fchrliche Erz\u00e4hltempi, in denen sich historische Ereignisse \u00fcber hunderte Seiten hinweg entfalten d\u00fcrfen, statt auf schnelle Cliffhanger-Effekte zu setzen.</p>
          <p class="vb-intro">Wo der Zweierfl\u00fcgel W\u00e4rme nach au\u00dfen tr\u00e4gt, tr\u00e4gt der Neunerfl\u00fcgel Frieden nach innen. Das erkl\u00e4rt, warum Follett trotz jahrzehntelangen \u00f6ffentlichen Erfolgs kaum je als "getrieben" beschrieben wird &ndash; eher als best\u00e4ndig, gleichm\u00e4\u00dfig, fast unersch\u00fctterlich in seinem Rhythmus.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der selbsterhaltenden Eins</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE1w9 ist offensichtlich: au\u00dfergew\u00f6hnliche Verl\u00e4sslichkeit, historische Sorgfalt, ein Werk von beeindruckender Koh\u00e4renz \u00fcber Jahrzehnte hinweg. Leser wissen bei Follett, was sie bekommen &ndash; pr\u00e4zise recherchierte, sauber konstruierte, epische Erz\u00e4hlungen, die ihr Versprechen halten.</p>
          <p class="vb-intro">Der Schatten liegt tiefer verborgen als bei der reaktiveren SE1w2. Das Schicksalsmuster der Eins ist der <strong>Zorn</strong> &ndash; bei der SE1w9 wird dieser Zorn durch den Neunerfl\u00fcgel zus\u00e4tzlich ged\u00e4mpft, fast bet\u00e4ubt. Statt offener Selbstkritik entsteht eher ein diffuses inneres Sich-Zur\u00fccknehmen: die Neigung, die eigenen Bed\u00fcrfnisse hinter der n\u00e4chsten Deadline, dem n\u00e4chsten Rechercheprojekt verschwinden zu lassen. Die Arbeit wird zum sicheren R\u00fcckzugsort &ndash; auch dann, wenn eigentlich Ruhe angesagt w\u00e4re.</p>
          <p class="vb-intro">Diese Verschmelzung von Flei\u00df und Selbstvergessenheit ist die eigentliche Herausforderung des Subtyps: Man kann jahrzehntelang au\u00dferordentlich produktiv sein, ohne sich je wirklich zu fragen, was man selbst &ndash; jenseits der n\u00e4chsten Seite &ndash; eigentlich braucht.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: Von der stillen Ersch\u00f6pfung zur echten Ruhe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Eins f\u00fchrt vom Zorn zur Gelassenheit &ndash; bei der SE1w9 genauer: von der erzwungenen, arbeitsbedingten Ruhe zur echten, selbstgew\u00e4hlten Ruhe. Die wachsende Eins lernt, dass Gleichmut kein Mittel zur Konfliktvermeidung sein muss, sondern eine echte innere Haltung sein darf, die sich nicht durch Flei\u00df erkaufen muss.</p>
          <p class="vb-intro">Ken Follett verk\u00f6rpert diesen Weg auf seine eigene, unspektakul\u00e4re Weise: ein Leben lang dasselbe Handwerk, mit derselben Sorgfalt, ohne den Drang, sich st\u00e4ndig neu zu erfinden oder zu \u00fcbertreffen. Der Adler muss nicht beweisen, dass er fliegen kann. Er kreist einfach weiter &ndash; Jahrzehnt um Jahrzehnt, in seinem eigenen, unersch\u00fctterlichen Rhythmus.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/se1", label:"SE1 \u2013 Der Besorgte: Subtyp-Profil"},
        {route:"beruehmte-dan-brown", label:"Dan Brown \u2013 SE1w2 im Vergleich"},
        {route:"beruehmte-astrid-lindgren", label:"Portr\u00e4t: Astrid Lindgren (SE1w9)"},
      ])}
    </div>
  `);
}

function danBrownPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-dan-brown-portrait.jpg" alt="Dan Brown" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dan Brown</p>
        <p class="krim-portrait-typ">SE1w2 &middot; Selbsterhaltender Typ 1 mit Zweierfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Schriftsteller, geb. 1964 &ndash; Tierentsprechung: Adler</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Adler</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Adler</strong> sieht Muster, wo andere nur Einzelteile erkennen. Er kreist hoch \u00fcber der Landschaft, verbindet, was am Boden getrennt erscheint, und st\u00f6\u00dft erst herab, wenn er absolut sicher ist. Genau das ist die literarische Handschrift von Dan Brown: Symbole, Codes, verborgene Verbindungen zwischen Kunst, Geschichte und Religion &ndash; sichtbar gemacht durch einen Blick, der alles zugleich \u00fcberschaut.</p>
          <p class="vb-intro">Der US-amerikanische Schriftsteller Dan Brown war, bevor er Schriftsteller wurde, Musiker und Songwriter, ohne durchschlagenden Erfolg. Der Wendepunkt kam erst mit \u201eDiabolus" und vor allem mit seinem Roman \u00fcber Symbolik und verborgene Codes, der ihn 2003 weltber\u00fchmt machte. Auch hier: Jahre des Kreisens, dann der pr\u00e4zise Sturzflug im richtigen Moment.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Eins: Recherche als innere Pflicht</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Eins (SE1)</strong> richtet ihr Vollkommenheitsstreben nicht nach au\u00dfen auf die Welt, sondern nach innen auf die eigene Vorbereitung, das eigene Handwerk, die eigene Sorgfalt. Naranjo nannte diesen Subtyp <em>Worry</em> &ndash; Besorgnis. Die SE1 fragt sich unabl\u00e4ssig: Habe ich alles bedacht? Stimmt jedes Detail? Halte ich der Pr\u00fcfung stand?</p>
          <p class="vb-intro">Bei Dan Brown zeigt sich das in einer regelrecht sprichw\u00f6rtlichen Recherche-Disziplin. F\u00fcr seine Romane bereist er Schaupl\u00e4tze selbst, befragt Fachleute aus Kunstgeschichte, Kryptographie und Theologie, und \u00fcberarbeitet Manuskripte \u00fcber Jahre hinweg. Sein Tagesablauf gilt als streng durchgetaktet: fr\u00fcher Schreibbeginn, feste Pausen, ein beinahe kl\u00f6sterliches Arbeitsritual. Das ist kein Perfektionismus als Attit\u00fcde &ndash; das ist die innere Stimme der Eins, die sagt: <em>Es muss stimmen, bevor es die Welt sieht.</em></p>
        </blockquote>

        <h2 class="vb-section">3. Der Zweierfl\u00fcgel: Verst\u00e4ndlichkeit als Geschenk an den Leser</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Zweierfl\u00fcgel (w2)</strong> \u00f6ffnet die strenge, nach innen gerichtete Eins nach au\u00dfen: Er verleiht die F\u00e4higkeit, zu geben, zug\u00e4nglich zu machen, andere mitzunehmen. Mit schwach ausgepr\u00e4gtem Zweierfl\u00fcgel k\u00f6nnte die Eins ihr Fachwissen f\u00fcr sich behalten, akademisch und unnahbar bleiben. Der Zweierfl\u00fcgel dr\u00e4ngt darauf, es zu teilen &ndash; verst\u00e4ndlich, spannend, mitrei\u00dfend.</p>
          <p class="vb-intro">Genau darin liegt Browns literarisches Erfolgsrezept: hochkomplexe Themen aus Kunstgeschichte, Symbolik und Theologie werden in kurze, fast schon atemlose Kapitel verpackt, die auch fachfremde Leser mitrei\u00dfen. Der SE1w2er will nicht nur richtig liegen &ndash; er will, dass andere daran teilhaben k\u00f6nnen. Die Pr\u00e4zision des Adlers, verschenkt an ein Millionenpublikum.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der selbsterhaltenden Eins</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE1 ist un\u00fcbersehbar: au\u00dfergew\u00f6hnliche Sorgfalt, verl\u00e4ssliches Handwerk, ein Qualit\u00e4tsanspruch, der Vertrauen schafft. Browns B\u00fccher verkaufen sich seit \u00fcber zwei Jahrzehnten in zweistelligen Millionenauflagen &ndash; ein Beleg daf\u00fcr, dass Leser sich auf diese Sorgfalt verlassen.</p>
          <p class="vb-intro">Der Schatten ist die andere Seite derselben M\u00fcnze: Das Schicksalsmuster der Eins ist der <strong>Zorn</strong> &ndash; bei der SE1 meist nach innen gewendet, als best\u00e4ndige Selbstkritik. Brown wurde von Literaturkritikern \u00fcber Jahre hinweg scharf angegriffen, wegen seines Stils ebenso wie wegen historischer Ungenauigkeiten in seinen Romanen. F\u00fcr eine Eins, deren gesamtes Selbstverst\u00e4ndnis auf Korrektheit ruht, ist genau das die empfindlichste Stelle: der Vorwurf, doch nicht gr\u00fcndlich genug gewesen zu sein.</p>
          <p class="vb-intro">Dass er trotz dieser Kritik unbeirrt weiterschreibt, weiter recherchiert, weitere B\u00fccher mit derselben akribischen Sorgfalt vorlegt, zeigt einen SE1er, der gelernt hat, seinem eigenen Ma\u00dfstab zu vertrauen &ndash; auch wenn die \u00f6ffentliche Meinung ihm widerspricht.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: Von der Sorge zur stillen Gewissheit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Eins f\u00fchrt vom Zorn zur Stille, von der st\u00e4ndigen Sorge zur ruhigen Gewissheit: Das, was mit Sorgfalt gemacht wurde, darf f\u00fcr sich selbst sprechen. Es braucht keine st\u00e4ndige Nachpr\u00fcfung mehr.</p>
          <p class="vb-intro">Dan Brown verk\u00f6rpert diesen Weg in seiner schieren Best\u00e4ndigkeit. Jahrzehnte harter Recherche-Arbeit, wiederkehrende \u00f6ffentliche Kritik &ndash; und dennoch ein Werk, das ungebrochen weiterw\u00e4chst. Der Adler l\u00e4sst sich von Gegenwind nicht aus der Bahn werfen. Er kennt seine Flugh\u00f6he. Er wei\u00df, wonach er sucht &ndash; und wann er gefunden hat, was er suchte.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/se1", label:"SE1 \u2013 Der Besorgte: Subtyp-Profil"},
        {route:"beruehmte-christoph-waltz", label:"Christoph Waltz \u2013 SE1w2"},
      ])}
    </div>
  `);
}

function johnLennonPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-john-lennon-portrait.jpg" alt="John Lennon – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">John Lennon</p>
        <p class="krim-portrait-typ">SO4w5 &middot; Sozialer Typ 4 mit F\u00fcnferfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Musiker, Komponist &amp; Friedensaktivist, 1940&ndash;1980 &ndash; Tierentsprechung: G\u00fcrteltier</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das G\u00fcrteltier</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>G\u00fcrteltier</strong> ist das Tier des sozialen Typs 4 &ndash; und es ist ein Tier, das Widerspr\u00fcche in sich vereint. Nach au\u00dfen tr\u00e4gt es einen harten Panzer, der es unverwundbar wirken l\u00e4sst. Innen sch\u00fctzt dieser Panzer ein Wesen, das au\u00dfergew\u00f6hnlich empfindlich ist. Das G\u00fcrteltier ist kein Einzelg\u00e4nger &ndash; es lebt in der Gemeinschaft, braucht die Gemeinschaft, auch wenn es sich in ihr manchmal fremd f\u00fchlt. Und in seiner Einzigartigkeit unter den S\u00e4ugetieren tr\u00e4gt es etwas Unverwechselbares: Niemand sonst sieht so aus. Niemand sonst ist so gebaut.</p>
          <p class="vb-intro">John Lennon war einer der einflussreichsten Musiker des 20. Jahrhunderts &ndash; und ein Mann, der sein ganzes Leben zwischen Panzer und Verletzlichkeit pendelte. Auf der B\u00fchne: Sch\u00e4rfe, Witz, Provokation. Im Inneren: ein Mensch, der tief nach Frieden suchte &ndash; in der Welt und in sich selbst. Das G\u00fcrteltier, das sich manchmal einrollt, um sich zu sch\u00fctzen, und manchmal aus dem Panzer heraustritt, um die Welt zu ver\u00e4ndern.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Vier: Scham als Antrieb</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Vier (SO4)</strong> ist in der Enneagramm-Tradition derjenige Subtyp, der den Schmerz der Vier in die soziale Dimension tr\u00e4gt. Naranjo nannte diesen Subtyp <em>Scham</em>: das tiefe Gef\u00fchl, nicht gut genug zu sein f\u00fcr die Welt, in der man lebt &ndash; und gleichzeitig der brennende Wunsch, dazuzugeh\u00f6ren, bedeutsam zu sein, etwas zu hinterlassen, das bleibt. Die SO4 vergleicht sich unabl\u00e4ssig mit anderen und sucht in der Resonanz der Gemeinschaft eine Best\u00e4tigung, die nur von innen kommen kann.</p>
          <p class="vb-intro">Bei John Lennon zeigt sich das in dem Widerspruch, der sein Leben pr\u00e4gte: Er war einer der ber\u00fchmtesten Menschen der Welt &ndash; und f\u00fchlte sich trotzdem oft ungesehen, unverstanden, allein. Die fr\u00fche Verlassenheit durch seinen Vater, der Tod seiner Mutter Julia als Teenager &ndash; das sind Wunden, die die SO4 tief in sich tr\u00e4gt und in Kunst verwandelt. <em>Mother</em>, <em>Isolation</em>, <em>Working Class Hero</em> &ndash; das sind keine Songs \u00fcber den Ruhm. Das sind Dokumente eines Menschen, der seinen eigenen Schmerz in Sprache verwandelt hat, damit andere wissen: Du bist nicht allein damit.</p>
          <p class="vb-intro">Charakteristisch f\u00fcr die SO4 ist die F\u00e4higkeit, das Pers\u00f6nlichste in das Universale zu verwandeln. Lennon schrieb nicht f\u00fcr sich &ndash; er schrieb f\u00fcr eine Generation. Und eine Generation h\u00f6rte sich selbst in seinen Worten. Das ist das Geschenk der sozialen Vier: Sie macht das Innerste \u00f6ffentlich und entdeckt dabei, dass das Innerste allen geh\u00f6rt.</p>
        </blockquote>

        <h2 class="vb-section">3. Der F\u00fcnferfl\u00fcgel: Wissen, R\u00fcckzug und die Kraft der Stille</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>F\u00fcnferfl\u00fcgel (w5)</strong> bringt der sozialen Vier eine charakteristische Pr\u00e4gung: das Bed\u00fcrfnis nach R\u00fcckzug, nach Tiefe, nach der intellektuellen Durchdringung der Welt. Eine SO4 mit schwächer ausgeprägtem Fünferflügel sucht eher die Verbindung – sie will gesehen werden, will berühren. Bei stark ausgeprägtem Fünferflügel zieht dieser sie stattdessen in die Stille zurück: <em>Er denkt zuerst. Er versteht zuerst. Dann erst redet er.</em></p>
          <p class="vb-intro">Bei John Lennon zeigt sich der F\u00fcnferfl\u00fcgel in seiner philosophischen Neugier, die weit \u00fcber die Musik hinausging. Er las, er dachte, er hinterfragte &ndash; Institutionen, Religionen, den Krieg, die eigene Rolle. <em>Imagine</em> ist nicht das Lied eines Entertainers. Es ist das Lied eines Menschen, der sich gefragt hat: <em>Was w\u00e4re, wenn wir wirklich nachdenken w\u00fcrden?</em> Der F\u00fcnferfl\u00fcgel gibt der SO4 Distanz &ndash; die F\u00e4higkeit, das Pers\u00f6nliche in das Allgemeine zu heben und dabei klar zu bleiben.</p>
          <p class="vb-intro">Der F\u00fcnferfl\u00fcgel erkl\u00e4rt auch Lennons Bereitschaft, sich zur\u00fcckzuziehen &ndash; die Jahre nach den Beatles, in denen er in der Dakota in New York lebte, Vater war, Brot backte, still war. Die SO4w5 wei\u00df: Manchmal ist das Schweigen lauter als jeder Song. Die f\u00fcnf Jahre, in denen er aus dem Rampenlicht trat und zur\u00fcckkehrte kurz vor seinem Tod &ndash; das ist der F\u00fcnferfl\u00fcgel in seiner klarsten Ausprägung.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der sozialen Vier</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO4 ist ihre F\u00e4higkeit, Schmerz in Sch\u00f6nheit zu verwandeln &ndash; und diese Sch\u00f6nheit mit der Welt zu teilen. John Lennon hat Lieder geschrieben, die Generationen \u00fcberdauern: nicht weil sie technisch perfekt sind, sondern weil sie wahr sind. <em>In My Life</em>, <em>Come Together</em>, <em>Imagine</em> &ndash; das sind Zeugnisse eines Menschen, der tief gef\u00fchlt hat und nicht aufgeh\u00f6rt hat, das Gef\u00fchlte in Sprache zu bringen.</p>
          <p class="vb-intro">Das Schicksalsmuster der Vier ist der <strong>Neid</strong> &ndash; das Gef\u00fchl, dass anderen etwas mitgegeben wurde, das einem selbst fehlt. Bei der SO4 \u00e4u\u00dfert sich das als sozialer Vergleich: <em>Die anderen wissen, wie man dazugeh\u00f6rt. Ich tue nur so.</em> Lennon hat dieses Gef\u00fchl immer wieder in Interviews beschrieben &ndash; die \u00dcberzeugung, ein Au\u00dfenseiter zu sein, auch inmitten des gr\u00f6\u00dften Erfolgs. Die Beatles haben die Welt ver\u00e4ndert. Und Lennon fragte sich, ob er wirklich dazugeh\u00f6rte.</p>
          <p class="vb-intro">Der F\u00fcnferfl\u00fcgel bringt die Gefahr des R\u00fcckzugs in die Bitterkeit: Wenn die Welt nicht versteht, was die SO4w5 sieht und f\u00fchlt, kann sie sich verschlie\u00dfen &ndash; zynisch werden, hart. Lennons \u00f6ffentliche Reibungen, seine Sch\u00e4rfe in Interviews, seine Bereitschaft zur Verletzung sind der Schatten dieser Energie: Die Verletzlichkeit, die keinen Ort findet, wird zur Waffe.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: Vom Vergleichen zum Ankommen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Vier f\u00fchrt von der Frage <em>Warum bin ich weniger als die anderen?</em> zur Erkenntnis <em>Was ich bin, ist vollst\u00e4ndig &ndash; und es ist einmalig.</em> F\u00fcr die SO4w5 bedeutet das, das innere Wissen nicht l\u00e4nger als Abstand zur Welt zu nutzen, sondern als Br\u00fccke zu ihr. Die Tiefe, die manchmal isoliert, ist auch das, was verbindet.</p>
          <p class="vb-intro">Lennon hat in den letzten Jahren seines Lebens Schritte in diese Richtung gemacht. Die Zeit mit Sean, die Stille der Hausmanns-Jahre, die R\u00fcckkehr mit <em>Double Fantasy</em> &ndash; ein Album, das nicht mehr bewies, sondern einfach war. Das G\u00fcrteltier, das den Panzer nicht mehr braucht, weil es gelernt hat, dass sein Inneres stark genug ist. Dieser Weg wurde am 8. Dezember 1980 abrupt beendet. Was bleibt, sind Lieder, die fragen: <em>Stell Dir vor, es w\u00e4re Frieden. Was h\u00e4lt uns davon ab?</em> Diese Frage ist noch nicht beantwortet.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"beruehmte-paul-mccartney", label:"Portr\u00e4t: Paul McCartney (SE4w5)"},
        {route:"beruehmte-javier-parisi", label:"Portr\u00e4t: Javier Parisi (SO4w5)"},
        {route:"beruehmte-fiona-apple", label:"Portr\u00e4t: Fiona Apple (SO4w5)"},
        {route:"beruehmte-leonard-cohen", label:"Portr\u00e4t: Leonard Cohen (SO4w5)"},
        {route:"enneagramm-astrologie", label:"Enneagramm meets Astrologie"},
        {route:"astrologie-john-lennon", label:"Horoskop-Analyse: John Lennon"},
        {route:"subtype/so4", label:"SO4 \u2013 Das G\u00fcrteltier: Subtyp-Profil"},
      ])}
    </div>
  `);
}

function javierParisiPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-javier-parisi-portrait.jpg" alt="Javier Parisi" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Javier Parisi</p>
        <p class="krim-portrait-typ">SO4w5 &middot; Sozialer Typ 4 mit F\u00fcnferfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Musiker &amp; John-Lennon-Double, geb. 1980 &ndash; Tierentsprechung: G\u00fcrteltier</p>
      </div>
      <div class="page-content">

        <p class="vb-intro" style="font-style:italic; opacity:0.75; margin-bottom:1.5rem;">Javier Parisi ist derselbe Subtyp wie John Lennon selbst (SO4w5) &ndash; ein seltener Fall, in dem ein Mensch sein ganzes Leben der detailgetreuen Verk\u00f6rperung eines anderen Menschen desselben Subtyps widmet. Ein Portr\u00e4t \u00fcber Vergleich, Studium und die Frage, wo die eigene Identit\u00e4t beginnt.</p>

        <h2 class="vb-section">1. Das G\u00fcrteltier</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>G\u00fcrteltier</strong> ist das Tier des sozialen Typs 4 &ndash; ein Tier voller Widerspr\u00fcche: ein harter Panzer nach au\u00dfen, eine au\u00dfergew\u00f6hnliche Empfindlichkeit im Inneren. Kein Einzelg\u00e4nger, sondern ein Wesen, das die Gemeinschaft braucht, auch wenn es sich in ihr oft fremd f\u00fchlt. Und trotz seiner Einzigartigkeit tr\u00e4gt es ein Paradox in sich: Es sucht seinen Platz gerade dadurch, dass es sich unabl\u00e4ssig mit anderen vergleicht.</p>
          <p class="vb-intro">Javier Parisi, geboren 1980 in Lan\u00fas bei Buenos Aires, ist weltweit bekannt als der wohl verbl\u00fcffendste John-Lennon-Doppelg\u00e4nger der Gegenwart &ndash; ein Mann, der sein Leben der exakten Verk\u00f6rperung eines anderen Menschen gewidmet hat. Das G\u00fcrteltier, das sich nicht mit dem eigenen Panzer zufriedengibt, sondern sich einen zweiten, fremden anlegt &ndash; und darin, paradoxerweise, sich selbst findet.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Vier: Vergleich als Lebensform</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Vier (SO4)</strong> tr\u00e4gt den Schmerz der Vier in die soziale Dimension. Naranjo nannte diesen Subtyp <em>Scham</em>: das tiefe Gef\u00fchl, nicht ganz dazuzugeh\u00f6ren &ndash; verbunden mit einem unabl\u00e4ssigen Vergleichen der eigenen Person mit anderen, in der Hoffnung, darin endlich Best\u00e4tigung zu finden. Kein anderer Subtyp lebt die Leidenschaft der Vier &ndash; den Neid, das Sich-Messen an anderen &ndash; so unmittelbar wie die SO4.</p>
          <p class="vb-intro">Bei Parisi nimmt dieser Vergleich eine fast w\u00f6rtliche, kaum zu \u00fcberbietende Form an: Er hat sein Leben darauf ausgerichtet, einem anderen Menschen so nahe wie m\u00f6glich zu kommen &ndash; im Aussehen, in der Stimme, in der Gestik, in der musikalischen Phrasierung. Als Kind entdeckte er die Beatles im Haus seiner Eltern, begann mit acht Jahren Gitarre zu lernen und Englisch zu \u00fcben, um die Songs seiner Idole zu verstehen. Was bei anderen Fans eine Leidenschaft bleibt, wurde bei Parisi zur Lebensaufgabe: das eigene Selbst neben ein fremdes zu stellen und in diesem Vergleich zu bestehen.</p>
          <p class="vb-intro">Mit zwanzig Jahren gr\u00fcndete er mit Freunden aus seiner Heimatstadt seine erste Beatles-Tributeband &ndash; und traf dabei eine Entscheidung, die typisch SO4 ist: Es sollte nicht reichen, wie die Beatles zu klingen. Man musste auch wie sie aussehen. Die soziale Vier sucht die Best\u00e4tigung im Blick der anderen &ndash; und Parisi fand sie, indem er sich so lange verglich und verfeinerte, bis der Vergleich zur Ununterscheidbarkeit wurde.</p>
        </blockquote>

        <h2 class="vb-section">3. Der F\u00fcnferfl\u00fcgel: Perfektion durch Studium</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>F\u00fcnferfl\u00fcgel (w5)</strong> gibt der sozialen Vier die F\u00e4higkeit zur konzentrierten, fast wissenschaftlichen Vertiefung. Wo eine SO4 mit schwächerem Fünferflügel vor allem fühlt und vergleicht, bringt ein stark ausgeprägter Fünferflügel das geduldige Studium hinzu: die Bereitschaft, ein Thema so lange zu durchdringen, bis man es vollst\u00e4ndig beherrscht.</p>
          <p class="vb-intro">Bei Parisi zeigt sich das in der schieren Genauigkeit seiner Verk\u00f6rperung: nicht nur die runde Brille und die Frisur, sondern der Tonfall, die B\u00fchnenbewegungen, der liverpooler Akzent im Englischen, die exakte Chronologie von Lennons Garderobe \u00fcber die verschiedenen Schaffensphasen der Beatles hinweg. Das ist keine oberfl\u00e4chliche Nachahmung, sondern jahrzehntelange, akribische Forschung an einer einzigen Biografie. Der F\u00fcnferfl\u00fcgel verwandelt die Bewunderung der SO4 in Handwerk.</p>
          <p class="vb-intro">Diese Genauigkeit ist es, die Parisi von gew\u00f6hnlichen Tribute-K\u00fcnstlern unterscheidet. Sein Publikum berichtet immer wieder von demselben Moment: F\u00fcr Sekunden verschwindet der Unterschied zwischen Original und Verk\u00f6rperung. Das ist der F\u00fcnferfl\u00fcgel in seiner vollendetsten Form &ndash; Wissen, das so tief sitzt, dass es nicht mehr wie Wissen wirkt, sondern wie Wesen.</p>
        </blockquote>

        <h2 class="vb-section">4. Abbey Road: Der Vergleich wird zur Anerkennung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Im April 2022 wurde Parisi eingeladen, in den legend\u00e4ren Abbey Road Studios in London aufzutreten &ndash; demselben Ort, an dem die Beatles einen Gro\u00dfteil ihres Werks aufgenommen hatten. F\u00fcr einen Mann, dessen gesamtes Lebensprojekt der Vergleich mit John Lennon ist, war das mehr als ein Konzert: Es war eine Form der Best\u00e4tigung durch genau die Institution, an der sich sein Vorbild einst gemessen hatte.</p>
          <p class="vb-intro">\u00dcber soziale Medien erreichte Parisi in den folgenden Jahren ein Millionenpublikum, das seine Videos &ndash; darunter Interpretationen von &bdquo;Imagine&ldquo; und &bdquo;Now and Then&ldquo; &ndash; mit einer Mischung aus Verbl\u00fcffung und R\u00fchrung teilte. Die soziale Vier lebt f\u00fcr diesen Moment der Anerkennung: gesehen zu werden, nicht trotz, sondern wegen der N\u00e4he zu einem anderen. Was als Kindheitsleidenschaft in einem Vorort von Buenos Aires begann, wurde zu einer weltweiten B\u00fchne.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der sozialen Vier</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO4 ist ihre F\u00e4higkeit, aus dem Vergleich mit anderen eine Form von Verbindung zu schaffen, die weit \u00fcber sich selbst hinausweist. Parisis Auftritte lassen Beatles-Fans weltweit noch einmal sp\u00fcren, was Lennons Musik einst bewirkte &ndash; er h\u00e4lt eine Erinnerung lebendig, die sonst nur noch in Aufnahmen existiert.</p>
          <p class="vb-intro">Das Schicksalsmuster der Vier ist der <strong>Neid</strong> &ndash; bei der SO4 als st\u00e4ndiges Sich-Messen. Bei Parisi tr\u00e4gt diese Struktur ein besonderes Risiko in sich: Ein Leben, das der \u00c4hnlichkeit mit einem anderen gewidmet ist, kann die Frage nach der eigenen, unverwechselbaren Stimme in den Hintergrund dr\u00e4ngen. Wo endet die Hommage, wo beginnt der Verlust des eigenen Gesichts hinter der Maske eines anderen?</p>
          <p class="vb-intro">Der F\u00fcnferfl\u00fcgel bringt die Gefahr, sich so vollst\u00e4ndig in ein Studienobjekt zu vertiefen, dass die eigene Perspektive dahinter verschwindet. Parisi selbst hat in Interviews betont, dass ihn nicht nur die Musik, sondern auch Lennons Botschaft von Frieden und Ehrlichkeit motiviert &ndash; ein Hinweis darauf, dass die Verk\u00f6rperung f\u00fcr ihn mehr sein soll als \u00e4u\u00dfere \u00c4hnlichkeit.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Heilungsweg: Vom Vergleichen zum eigenen Ausdruck</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Vier f\u00fchrt von der Frage <em>Warum bin ich weniger als der andere, mit dem ich mich vergleiche?</em> zur Erkenntnis <em>Was ich bin, ist vollst\u00e4ndig &ndash; und es ist einmalig, auch wenn ich einem anderen \u00e4hnele.</em> F\u00fcr die SO4w5 bedeutet das, das jahrelange Studium eines fremden Vorbilds nicht als Ersatz f\u00fcr die eigene Stimme zu behandeln, sondern als einen Weg, \u00fcber den die eigene Stimme letztlich doch gefunden wird.</p>
          <p class="vb-intro">Parisis Karriere zeigt genau diese Bewegung in Ans\u00e4tzen: vom reinen Imitator zum eigenst\u00e4ndigen Interpreten, der Lennons Botschaft mit eigener Ausdruckskraft weitertr\u00e4gt, statt sie nur zu kopieren. Das G\u00fcrteltier, das gelernt hat, dass die Verwandtschaft mit einem anderen die eigene Einzigartigkeit nicht ausl\u00f6scht &ndash; sondern, richtig verstanden, ein Weg sein kann, sie erst zu entdecken.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe &ndash; Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist &ndash; Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich &ndash; wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/so4", label:"SO4 \u2013 Das G\u00fcrteltier: Subtyp-Profil"},
        {route:"beruehmte-john-lennon", label:"Portr\u00e4t: John Lennon (SO4w5)"},
        {route:"beruehmte-paul-mccartney", label:"Portr\u00e4t: Paul McCartney (SE4w5)"},
        {route:"beruehmte-fiona-apple", label:"Portr\u00e4t: Fiona Apple (SO4w5)"},
      ])}
    </div>
  `);
}

function fionaApplePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-fiona-apple-portrait.jpg" alt="Fiona Apple" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Fiona Apple</p>
        <p class="krim-portrait-typ">SO4w5 &middot; Sozialer Typ 4 mit F\u00fcnferfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Musikerin &amp; Songwriterin, geb. 1977 &ndash; Tierentsprechung: G\u00fcrteltier</p>
      </div>
      <div class="page-content">

        <p class="vb-intro" style="font-style:italic; opacity:0.75; margin-bottom:1.5rem;">Fiona Apple weigert sich seit \u00fcber zwanzig Jahren, sich dem Musikbetrieb anzupassen &ndash; und wurde gerade dadurch zu einer der ehrlichsten Stimmen ihrer Generation. Ein Portr\u00e4t \u00fcber Scham, R\u00fcckzug und die radikale Entscheidung, nur dann zu sprechen, wenn man wirklich etwas zu sagen hat.</p>

        <h2 class="vb-section">1. Das G\u00fcrteltier</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>G\u00fcrteltier</strong> ist das Tier des sozialen Typs 4 &ndash; ein Tier voller Widerspr\u00fcche: ein harter Panzer nach au\u00dfen, eine au\u00dfergew\u00f6hnliche Empfindlichkeit im Inneren. Es zieht sich zur\u00fcck, sobald es sich bedroht f\u00fchlt, und gr\u00e4bt sich lieber ein, als sich zu verstellen. Und doch bleibt es, trotz seines R\u00fcckzugs, zutiefst auf die Gemeinschaft bezogen &ndash; es beobachtet sie genau, auch aus der Distanz.</p>
          <p class="vb-intro">Fiona Apple, geboren 1977 in New York City, verk\u00f6rpert dieses Paradox seit ihrem ersten Album: eine K\u00fcnstlerin, die sich dem \u00f6ffentlichen Betrieb immer wieder entzogen hat &ndash; jahrelange Pausen, R\u00fcckz\u00fcge aus dem Rampenlicht, Verweigerung von Interviews &ndash; und die trotzdem, oder gerade deshalb, zu den schonungslosesten Beobachterinnen der eigenen und der gesellschaftlichen Verh\u00e4ltnisse wurde. Das G\u00fcrteltier, das sich einrollt, um dann mit umso sch\u00e4rferer Klarheit wieder hervorzutreten.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Vier: Scham als Antrieb</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Vier (SO4)</strong> tr\u00e4gt den Schmerz der Vier in die soziale Dimension. Naranjo nannte diesen Subtyp <em>Scham</em>: das tiefe Gef\u00fchl, mangelhaft und nicht wirklich zugeh\u00f6rig zu sein &ndash; verbunden mit einer permanenten Selbstbeobachtung, ob man den eigenen Anspr\u00fcchen und denen der anderen gen\u00fcgt. Kein anderer Subtyp lebt die Leidenschaft der Vier &ndash; den Neid, das Sich-Messen &ndash; so sehr als inneres Gericht wie die SO4.</p>
          <p class="vb-intro">Bei Apple zeigt sich das von Beginn an: Schon als Teenager litt sie unter Essst\u00f6rungen und wurde im Alter von zw\u00f6lf Jahren Opfer einer Vergewaltigung &ndash; ein Trauma, das sie sp\u00e4ter in ihren Texten immer wieder verarbeitete, nie besch\u00f6nigend, sondern mit einer Direktheit, die viele H\u00f6rer zun\u00e4chst irritierte. Die soziale Vier stellt die eigene Scham nicht unter den Teppich, sondern macht sie zum Ausgangspunkt der Arbeit &ndash; als lie\u00dfe sich das Urteil der anderen nur entkr\u00e4ften, indem man ihm zuvorkommt und alles selbst ausspricht.</p>
          <p class="vb-intro">Ihr Deb\u00fctalbum <em>Tidal</em> (1996) und die ber\u00fchmt gewordene MTV-Award-Rede von 1997 &ndash; in der die 19-J\u00e4hrige der Musikindustrie ins Gesicht sagte, dass diese Welt &bdquo;nicht real&ldquo; sei &ndash; zeigen die typische SO4-Bewegung: die B\u00fchne wird genutzt, um genau das zu benennen, was im sozialen Gef\u00fcge falsch l\u00e4uft, auch um den Preis des eigenen Ansehens.</p>
        </blockquote>

        <h2 class="vb-section">3. Der F\u00fcnferfl\u00fcgel: R\u00fcckzug als Werkstatt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>F\u00fcnferfl\u00fcgel (w5)</strong> gibt der sozialen Vier die F\u00e4higkeit, sich aus dem Feld der Bewertung zur\u00fcckzuziehen, um in der Stille zu arbeiten. Wo eine SO4 mit schwächerem Fünferflügel vor allem fühlt und sich vergleicht, bringt ein stark ausgeprägter Fünferflügel den Rückzug ins eigene Studium hinzu &ndash; die Bereitschaft, jahrelang zu schweigen, wenn nichts Wesentliches zu sagen ist.</p>
          <p class="vb-intro">Bei Apple ist dieser R\u00fcckzug zum Markenzeichen geworden: Zwischen ihren Alben liegen oft sechs, sieben, acht Jahre Stille. Sie zog sich aus New York in ein Haus in Venice Beach zur\u00fcck, mied lange Zeit Interviews und die \u00d6ffentlichkeit fast vollst\u00e4ndig. Der F\u00fcnferfl\u00fcgel verwandelt die soziale Scham der Vier nicht in st\u00e4ndige Selbstdarstellung, sondern in ihr Gegenteil: in eine fast kl\u00f6sterliche Zur\u00fcckgezogenheit, aus der heraus erst dann wieder gesprochen wird, wenn die Arbeit fertig ist.</p>
          <p class="vb-intro">Diese Zur\u00fcckhaltung ist keine Schw\u00e4che, sondern Methode. Apple produziert ihre Alben in extremer Detailarbeit, oft in Eigenregie, mit ungew\u00f6hnlichen Klangquellen &ndash; von K\u00fcchenger\u00e4ten bis zu den Knochen ihres verstorbenen Hundes als Percussion. Der F\u00fcnferfl\u00fcgel macht aus dem R\u00fcckzug ein Laboratorium.</p>
        </blockquote>

        <h2 class="vb-section">4. Fetch the Bolt Cutters: Die Scham wird zur Waffe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">2020, nach fast acht Jahren Stille, ver\u00f6ffentlichte Apple <em>Fetch the Bolt Cutters</em> (deutsch etwa: &bdquo;Hol den Bolzenschneider&ldquo;) &ndash; ein Album, das fast ausschlie\u00dflich in ihrem eigenen Haus aufgenommen wurde, mit Perkussion aus Alltagsgegenst\u00e4nden und den Stimmen ihrer Hunde im Hintergrund. Der Titel stammt aus einer Zeile der britischen Krimiserie <em>The Fall</em> und steht bildhaft daf\u00fcr, sich aus einschr\u00e4nkenden Situationen, toxischen Beziehungen oder eigenen mentalen Blockaden zu befreien &ndash; hol den Bolzenschneider und schneid dich frei.</p>
          <p class="vb-intro">Das Album wurde zum am h\u00f6chsten bewerteten der Musikkritik-Geschichte auf mehreren Aggregator-Plattformen &ndash; ausgerechnet zu jenem Zeitpunkt, an dem die Welt selbst in Isolation ging. Songs wie <em>For Her</em> greifen sexuelle Gewalt direkt und ohne Besch\u00f6nigung auf, andere richten sich gegen das Muster, Frauen gegeneinander auszuspielen. Die soziale Vier, die einst unter der eigenen Scham litt, macht sie hier zum gemeinsamen, \u00f6ffentlich geteilten Thema &ndash; und findet darin genau die Zugeh\u00f6rigkeit, nach der sie sich immer gesehnt hatte.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der sozialen Vier</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO4 ist ihre F\u00e4higkeit, aus der eigenen Scham eine Sprache f\u00fcr andere zu schaffen. Apples Texte geben H\u00f6rerinnen und H\u00f6rern Worte f\u00fcr Erfahrungen, die sonst im Verborgenen bleiben &ndash; Scham wird, \u00f6ffentlich ausgesprochen, zu einem Ort der Verbindung statt der Isolation.</p>
          <p class="vb-intro">Das Schicksalsmuster der Vier ist der <strong>Neid</strong> &ndash; bei der SO4 als st\u00e4ndiges Messen der eigenen Unzul\u00e4nglichkeit an einem imagin\u00e4ren Ideal. Bei Apple zeigte sich das fr\u00fch in Essst\u00f6rungen und einer selbstkritischen H\u00e4rte, die sie \u00f6ffentlich auch gegen sich selbst richtete. Der Schatten der sozialen Vier besteht darin, das eigene Ungen\u00fcgen so sehr zum Zentrum zu machen, dass es die eigentliche Begabung \u00fcberschattet.</p>
          <p class="vb-intro">Der F\u00fcnferfl\u00fcgel bringt die Gefahr des v\u00f6lligen R\u00fcckzugs: Jahre der Stille k\u00f6nnen auch bedeuten, dass die eigene Stimme im Schweigen erstickt, statt geh\u00f6rt zu werden. Apples wiederkehrende Isolation, phasenweise begleitet von Angstzust\u00e4nden, zeigt diese Kehrseite eines R\u00fcckzugs, der Schutz bietet, aber auch abschneidet.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Heilungsweg: Von der Scham zur geteilten Wahrheit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Vier f\u00fchrt von der Frage <em>Was fehlt mir, dass ich nicht dazugeh\u00f6re?</em> zur Erkenntnis <em>Was ich f\u00fchle, ist vollst\u00e4ndig &ndash; und gerade das Ausgesprochene verbindet mich mit anderen.</em> F\u00fcr die SO4w5 bedeutet das, den R\u00fcckzug nicht als Endpunkt zu behandeln, sondern als notwendige Werkstatt, aus der heraus die eigene Wahrheit reift, bevor sie geteilt wird.</p>
          <p class="vb-intro">Apples Karriere zeigt genau diese Bewegung: von der scheuen Neunzehnj\u00e4hrigen, die 1997 auf der MTV-B\u00fchne fast \u00fcberw\u00e4ltigt wirkte, zur souver\u00e4nen K\u00fcnstlerin, die mit <em>Fetch the Bolt Cutters</em> ihre Scham in eine gemeinsame Sprache verwandelte. Das G\u00fcrteltier, das gelernt hat, dass der eigene Panzer nicht nur sch\u00fctzt, sondern, zur rechten Zeit ge\u00f6ffnet, auch andere einl\u00e4dt, ihren eigenen Panzer abzulegen.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe &ndash; Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist &ndash; Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich &ndash; wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/so4", label:"SO4 \u2013 Das G\u00fcrteltier: Subtyp-Profil"},
        {route:"beruehmte-john-lennon", label:"Portr\u00e4t: John Lennon (SO4w5)"},
        {route:"beruehmte-javier-parisi", label:"Portr\u00e4t: Javier Parisi (SO4w5)"},
      ])}
    </div>
  `);
}

function tilSchweigerPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-til-schweiger-portrait.jpg" alt="Til Schweiger – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Til Schweiger</p>
        <p class="krim-portrait-typ">SO4w3 &middot; Sozialer Typ 4 mit Dreierfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Schauspieler, Regisseur &amp; Produzent, geb. 1963 &ndash; Tierentsprechung: G\u00fcrteltier</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das G\u00fcrteltier</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>G\u00fcrteltier</strong> ist das Tier des sozialen Typs 4 &ndash; gepanzert nach au\u00dfen, weich im Inneren. Es rollt sich ein, wenn es sich bedroht f\u00fchlt, und zeigt der Welt eine undurchdringliche Schale. Wer es wirklich kennt, wei\u00df: Dahinter liegt ein au\u00dferordentlich feinf\u00fchliges Wesen, das mehr f\u00fchlt, als es je zeigen w\u00fcrde.</p>
          <p class="vb-intro">Der deutsche Schauspieler Til Schweiger &ndash; geb. 1963, Regisseur und Produzent &ndash; ist eine der bekanntesten Pers\u00f6nlichkeiten des deutschen Films. Sein Markenzeichen: eine Aura aus Coolness, Selbstbewusstsein und leicht provokanter Direktheit. Wer genauer hinsieht, erkennt das G\u00fcrteltier: einen Menschen, der unter seiner glatten Au\u00dfenfassade eine tiefe emotionale Verletzlichkeit tr\u00e4gt &ndash; und diese mit gro\u00dfem handwerklichem K\u00f6nnen in Kunst verwandelt.</p>
        </blockquote>

        <h2 class="vb-section">2. Scham als stille Triebkraft</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>soziale Typ 4 (SO4)</strong> ist der <em>Verst\u00e4rkungstyp</em> der Vier: Er tr\u00e4gt seine Leidenschaft des Neids nach innen &ndash; als <strong>Scham</strong>. Naranjo nannte diesen Subtyp treffend so. Das Lebensgef\u00fchl der SO4 ist ein tiefes Mangelbewusstsein: Das Gras auf der anderen Seite des Zauns ist immer gr\u00fcner. Die anderen haben etwas, das ich nicht habe. Die anderen <em>sind</em> etwas, das ich nicht bin. Dieses Gef\u00fchl der Unterlegenheit arbeitet still, hartn\u00e4ckig und ersch\u00f6pfend im Inneren &ndash; und ist zugleich der Antrieb, der die SO4 zur Leistung treibt.</p>
          <p class="vb-intro">Bei Til Schweiger zeigt sich diese Dynamik in einem charakteristischen Widerspruch: Er ist einer der erfolgreichsten deutschen Filmschaffenden &ndash; und sucht trotzdem unaufh\u00f6rlich nach echter Anerkennung. Sein Bed\u00fcrfnis, als authentischer K\u00fcnstler gesehen zu werden, ist keine Eitelkeit. Es ist die SO4 in ihrer klarsten Ausprägung: <em>Ich brauche nicht nur Erfolg. Ich brauche das Gef\u00fchl, dass das, was ich tue, wirklich z\u00e4hlt.</em> Dieser Antrieb ist der Kern seiner kreativen Energie.</p>
          <p class="vb-intro">Sein intensiver, durchdringender Blick &ndash; in Filmen wie <em>Der bewegte Mann</em>, <em>Keinohrhasen</em> oder <em>Tschiller: Off Duty</em> &ndash; vermittelt genau das: eine emotionale Tiefe, die mehr sucht als Applaus. Er sucht Resonanz. Er sucht Verbindung. Das ist die SO4: stets auf der Suche nach einer Verbundenheit, die das innere Gef\u00fchl des Zu-kurz-Kommens endlich heilen k\u00f6nnte.</p>
          <p class="vb-intro"><strong>Ein verbl\u00fcffendes Paradox</strong> trat im M\u00e4rz 2024 zutage, als Schweiger im Interview-Podcast <em>Hotel Matze</em> (Moderator: Matze Hielscher) \u00fcber Neid in der deutschen Kulturbranche sprach. Schweiger erkl\u00e4rte, er selbst sei <em>nie</em> ein neidischer Mensch gewesen &ndash; und gab sogar weiter, was er seinen Kindern stets mitgegeben hat:</p>
          <blockquote style="border-left:3px solid var(--gold,#c4a456);margin:0.8rem 0 0.8rem 1rem;padding:0.6rem 1rem;font-style:italic;color:var(--ink);font-size:0.97em;line-height:1.7;">
            \u201eNeid bringt euch gar nichts. Das ist eine negative Eigenschaft. Gibt euch nur ein schlechtes Gef\u00fchl. Ihr werdet nicht schlauer, wenn ihr neidisch seid. Ihr werdet nicht reicher. Ihr werdet nicht sportlicher. Ihr kriegt nicht gr\u00f6\u00dfere Muskeln. Ihr seht nicht besser aus. Ihr werdet nicht erfolgreicher. Wenn ihr nicht neidisch seid, seid ihr viel besser dran."
            <footer style="margin-top:0.4rem;font-style:normal;font-size:0.88em;color:#777;">&mdash; Til Schweiger, <em>Hotel Matze</em>, M\u00e4rz 2024</footer>
          </blockquote>
          <p class="vb-intro">Aus enneagrammatischer Sicht ist diese Aussage von einer geradezu klassischen Tiefe: Der soziale Typ 4, dessen verborgene Leidenschaft der <strong>Neid</strong> ist &ndash; und zwar in seiner verst\u00e4rkten, nach innen gewendeten Form als Scham und Mangelbewusstsein &ndash; erkl\u00e4rt \u00f6ffentlich, er selbst sei niemals neidisch gewesen. Er hat sogar eine Botschaft dar\u00fcber, die er an seine Kinder weitergibt. Die Leidenschaft ist so tief in der Pers\u00f6nlichkeitsstruktur verankert, so sehr das Wasser, in dem er schwimmt, dass er sie bei sich selbst nicht erkennen kann. Das ist kein Vorwurf &ndash; das ist die Natur der Leidenschaft. Und es erinnert an das hom\u00f6opathische Mittel <em>Ignatia amara</em>, das dem sozialen Typ 4 zugeordnet wird: ein Mittel, das f\u00fcr seine paradoxen Symptombilder bekannt ist &ndash; der Patient isst, obwohl er trinken will; trinkt, obwohl er Hunger hat. Das \u00c4u\u00dfere und das Innere klaffen auseinander, ohne dass der Betroffene es bemerkt.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierfl\u00fcgel: Coolness als Schutzmaske</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierfl\u00fcgel (w3)</strong> verleiht der sozialen Vier etwas, das sie allein nicht h\u00e4tte: B\u00fchnenenergie, Auftritt, die F\u00e4higkeit zur \u00fcberzeugenden Selbstdarstellung. Die SO4w3 sp\u00fcrt die Scham &ndash; und tritt dennoch auf. Sie baut eine Fassade, die sie sch\u00fctzt, solange das Innere noch nicht bereit ist, sich zu zeigen.</p>
          <p class="vb-intro">Schweigers \u00f6ffentliches Image ist das Paradebeispiel: cool, direkt, leicht unnahbar, von einer selbstbewussten L\u00e4ssigkeit, die nicht jeden einl\u00e4sst. Der Dreierfl\u00fcgel macht ihn zum nat\u00fcrlichen Entertainer und zum handwerklich versierten Filmschaffenden, der wei\u00df, wie er Publikum erreicht. Die Vier darunter sorgt daf\u00fcr, dass dieser Unterhaltungsprofi mehr ist als eine Oberfl\u00e4che: Er sucht bedeutungsvolle Geschichten, emotionale Tiefe, echte Ber\u00fchrung.</p>
          <p class="vb-intro">Diese Spannung &ndash; zwischen der L\u00e4ssigkeit des Dreiers und der Sehnsucht der Vier &ndash; ist das kreative Zentrum der SO4w3. Filme wie <em>Keinohrhasen</em> oder <em>Kokow\u00e4\u00e4h</em> zeigen die warme, verletzliche Seite. Die Actionrollen zeigen die gepanzerte. Beide sind echt. Beide sind Schweiger.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO4w3 ist ihre F\u00e4higkeit, tiefe Emotionen zu ersp\u00fcren und in Kunstformen zu gie\u00dfen, die andere ber\u00fchren, weil sie darin sich selbst wiederfinden. Schweigers Filme sind emotionsgeladen nicht als Kalk\u00fcl, sondern weil er als Herztyp (Typ 4 geh\u00f6rt zum Herzzentrum des Enneagramms) gar nicht anders kann: F\u00fchlen ist seine Muttersprache.</p>
          <p class="vb-intro">Der Schatten: Das untergr\u00fcndige Gef\u00fchl von Unzufriedenheit, gemischt mit einer Aura von Traurigkeit und Melancholie, begleitet die soziale Vier permanent. Kein Erfolg, kein Applaus, keine Anerkennung von au\u00dfen kann dieses Grundgef\u00fchl dauerhaft aufl\u00f6sen &ndash; weil es aus der inneren \u00dcberzeugung stammt, irgendwie nicht wirklich zu gen\u00fcgen. Der Dreierfl\u00fcgel kann die Versuchung bringen, das Echte dem Erfolgreichen zu opfern. Wenn die Reaktion des Publikums wichtiger wird als die innere Wahrheit des Werks.</p>
          <p class="vb-intro">Schweiger ist bekannt f\u00fcr ein hohes Ma\u00df an Stolz und eine gewisse Empfindlichkeit gegen\u00fcber Kritik. Das ist kein Charakterdefizit &ndash; das ist die SO4 in ihrem Schutzmodus: Wer im Inneren so viel f\u00fchlt, braucht eine stabile Au\u00dfenfassade, um nicht von jeder Welle des Urteils fortgetragen zu werden.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: Anerkennung von innen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Vier f\u00fchrt von <em>Ich bin nicht genug</em> zu <em>Das, was ich bin, reicht.</em> F\u00fcr die SO4w3 bedeutet das, die Maske des Dreiers nicht als Schutz zu brauchen, sondern als freie Ausdrucksform zu nutzen: nicht spielen, weil man sich nicht zeigen darf &ndash; sondern spielen, weil man wirklich etwas zu sagen hat.</p>
          <p class="vb-intro">Das G\u00fcrteltier braucht seine Panzerung &ndash; aber es muss nicht permanent in ihr leben. Die reife SO4w3 lernt, das innere Gef\u00fchl des Mangels nicht als Beweis anzunehmen, sondern als altes Muster zu erkennen, das nichts \u00fcber den wahren Wert der eigenen Person aussagt. Til Schweiger hat in Jahrzehnten einer langen Karriere Werke geschaffen, die Menschen bewegt haben. Das ist keine Kleinigkeit. Das ist &ndash; im w\u00f6rtlichsten Sinne &ndash; genug.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/so4", label:"SO4 \u2013 Das G\u00fcrteltier: Subtyp-Profil"},
        {route:"beruehmte-taddl", label:"Portr\u00e4t: Taddl (SO4w3)"},
        {route:"beruehmte-romy-schneider", label:"Portr\u00e4t: Romy Schneider (SO4w3)"},
      ])}
    </div>
  `);
}

function michaelJacksonPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-michael-jackson-portrait.jpg" alt="Michael Jackson – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Michael Jackson</p>
        <p class="krim-portrait-typ">SO4w3 · Sozialer Typ 4 mit Dreierflügel</p>
        <p class="krim-portrait-subtitle">Sänger, Tänzer &amp; Komponist, 1958–2009 – Tierentsprechung: Gürteltier</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Gürteltier</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Gürteltier</strong> ist das Tier des sozialen Typs 4 – gepanzert nach außen, weich im Inneren. Kaum ein Bild trifft Michael Jackson genauer: ein Künstler, der auf der Bühne unangreifbar wirkte – makellos choreografiert, in glitzernde Kostüme gehüllt, hinter einer Maske aus Perfektion – und der zugleich in Interviews immer wieder von tiefer Einsamkeit sprach.</p>
          <p class="vb-intro">Kein Musiker des 20. Jahrhunderts hat die Popkultur so vollständig neu definiert. Und kaum ein Musiker hat gleichzeitig so offen davon gesprochen, sich fremd zu fühlen – in der eigenen Familie, im eigenen Ruhm, in der eigenen Haut. Das Gürteltier zeigt der Welt seine Rüstung. Was darunter liegt, zeigt es fast niemandem.</p>
        </blockquote>

        <h2 class="vb-section">2. Scham als stille Triebkraft: Die gestohlene Kindheit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>soziale Typ 4 (SO4)</strong> ist der Verstärkungstyp der Vier: Er trägt seine Leidenschaft des Neids nach innen – als <strong>Scham</strong>. Das Lebensgefühl der SO4 ist ein tiefes Mangelbewusstsein: Die anderen haben etwas Selbstverständliches, das mir fehlt. Bei Michael Jackson lässt sich dieses Gefühl bis in die früheste Kindheit zurückverfolgen.</p>
          <p class="vb-intro">Geboren 1958 in Gary, Indiana, als siebtes von neun Kindern, stand er mit fünf Jahren bereits auf der Bühne – zunächst mit seinen Brüdern in den Jackson 5, unter dem strengen, oft gewaltsamen Regime seines Vaters Joseph Jackson. Michael selbst beschrieb später wiederholt, wie er als Kind geschlagen und beschimpft wurde, wenn eine Choreografie nicht saß. Es gab kaum Raum für Spiel, für Freundschaften, für eine gewöhnliche Kindheit. Was andere Kinder selbstverständlich hatten, hatte er nie: <em>Ich habe nie wirklich Kind sein dürfen</em>, sagte er in mehreren Interviews. Genau das ist die Wunde der SO4 – nicht der Mangel an Erfolg, sondern der Mangel an etwas, das für alle anderen normal zu sein scheint.</p>
          <p class="vb-intro">Neverland, die Ranch, die er sich später als Erwachsener baute – mit Karussell, Zoo, Kino und Achterbahn –, lässt sich aus dieser Perspektive lesen als der Versuch, das nachzuholen, was in der eigenen Kindheit fehlte. Die SO4 sucht nicht Reichtum um seiner selbst willen. Sie sucht das, was sie nie hatte.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierflügel: Die Perfektion der Bühne</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierflügel (w3)</strong> verleiht der sozialen Vier etwas, das sie allein nicht hätte: Bühnenpräsenz, Ehrgeiz, die Fähigkeit, aus innerem Schmerz makellose Leistung zu formen. Die SO4w3 fühlt die Scham – und tritt trotzdem auf, mit einer Präzision, die keinen Fehler duldet.</p>
          <p class="vb-intro">Michael Jacksons Karriere ist diese Verbindung in Reinform. <em>Thriller</em> (1982) wurde mit über 70 Millionen verkauften Exemplaren zum meistverkauften Album der Geschichte. Der Moonwalk, erstmals 1983 bei der Motown-25-Jubiläumsshow gezeigt, wurde zur Ikone. Jede Choreografie, jedes Musikvideo, jeder Bühnenauftritt war bis ins letzte Detail durchdacht – Proben von zehn, zwölf Stunden waren für ihn normal. Der Dreierflügel liefert die Disziplin und den Ehrgeiz, die Vier darunter liefert die Tiefe, die aus reiner Perfektion echte Kunst macht.</p>
          <p class="vb-intro">Doch die Bühne war für Jackson mehr als Beruf. Sie war der einzige Ort, an dem er sich sicher fühlte. <em>Wenn ich auf der Bühne bin, ist das der einzige Ort, an dem ich wirklich glücklich bin</em>, sagte er einmal. Für die SO4w3 ist der Applaus nicht Eitelkeit – er ist die kurzzeitige Linderung eines Gefühls, das sonst nie ganz verschwindet.</p>
        </blockquote>

        <h2 class="vb-section">4. Der Preis der Sichtbarkeit: Bild und Verwandlung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Über die Jahrzehnte veränderte sich Jacksons äußeres Erscheinungsbild so grundlegend, dass es selbst zum Gesprächsthema wurde – mehrere Operationen an Nase und Kinn, eine zunehmend hellere Hautfarbe, die er später auf die Hautkrankheit <em>Vitiligo</em> zurückführte, eine Pigmentstörung, die er 1993 gegenüber Oprah Winfrey öffentlich machte. Die Öffentlichkeit reagierte über Jahre mit Spott statt mit Verständnis.</p>
          <p class="vb-intro">Für die soziale Vier ist das äußere Bild nie neutral. Es ist die sichtbare Oberfläche eines inneren Gefühls von Unzulänglichkeit – und der Versuch, genau dieses Gefühl von außen zu korrigieren. Je tiefer die Scham, desto größer der Drang, am eigenen Erscheinungsbild zu arbeiten, bis es endlich stimmt. Bei Jackson traf dieser Mechanismus auf eine beispiellose öffentliche Beobachtung: Jede Veränderung wurde fotografiert, kommentiert, verspottet – und verstärkte damit genau das Gefühl, nie richtig zu sein, das die Veränderung eigentlich lindern sollte.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO4w3 ist ihre Fähigkeit, aus tiefstem persönlichem Schmerz etwas zu schaffen, das Millionen Menschen berührt – und ihn zugleich in ein Anliegen zu verwandeln, das über die eigene Person hinausweist. Jackson gründete die Stiftung <em>Heal the World</em>, spendete nach Schätzungen mehrerer Quellen über seine Karriere hinweg hunderte Millionen Dollar an wohltätige Zwecke und setzte sich öffentlich für Kinder in Not ein. Für die SO4 ist das kein Widerspruch zur eigenen Bedürftigkeit, sondern ihre direkteste Ausdrucksform: das zu geben, was man selbst am meisten vermisst hat.</p>
          <p class="vb-intro">Der Schatten seines Lebens lässt sich nicht ausblenden: 1993 wurde erstmals der Vorwurf des sexuellen Missbrauchs eines Kindes gegen ihn erhoben, der Fall wurde außergerichtlich beigelegt, ohne dass eine Schuld festgestellt wurde. 2005 stand Jackson wegen ähnlicher Vorwürfe vor Gericht und wurde in allen Anklagepunkten freigesprochen. Nach seinem Tod erhoben zwei Männer in der Dokumentation <em>Leaving Neverland</em> (2019) erneut schwere Vorwürfe aus ihrer Kindheit. Die Wahrheit hinter diesen widersprüchlichen Darstellungen lässt sich im Rahmen dieses Porträts nicht klären – sie bleibt Gegenstand öffentlicher Auseinandersetzung. Was sich enneagrammatisch beschreiben lässt, ist lediglich das Muster: ein Mann, der sein Leben lang versuchte, die eigene verlorene Kindheit in der Nähe von Kindern nachzuholen – auf eine Weise, die für manche anrührend und für andere zutiefst beunruhigend war.</p>
        </blockquote>

        <h2 class="vb-section">6. Tod und Vermächtnis</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Michael Jackson starb am 25. Juni 2009 in Los Angeles im Alter von 50 Jahren an akutem Herzstillstand, ausgelöst durch eine Überdosis des Narkosemittels Propofol, das ihm sein Leibarzt Conrad Murray zur Behandlung seiner Schlaflosigkeit verabreicht hatte – wenige Wochen vor Beginn seiner geplanten Comeback-Konzertreihe <em>This Is It</em> in London. Murray wurde 2011 wegen fahrlässiger Tötung verurteilt.</p>
          <p class="vb-intro">Was bleibt, ist ein musikalisches Erbe, das die Popkultur bis heute prägt, und eine Biografie, die zeigt, wie eng bei der sozialen Vier mit Dreierflügel Genie und Schmerz miteinander verwoben sein können. Das Gürteltier trug seine Rüstung bis zuletzt – glänzend, unangreifbar, bewundert von Millionen. Was darunter lag, blieb bis zum Schluss weitgehend verborgen.</p>
          <p class="vb-intro">Die fünfundzwanzigjährige Kette aus Schmerzmittelgabe, Schlaflosigkeit und schließlich tödlicher Propofol-Abhängigkeit wird ausführlich im eigenen <a href="javascript:void(0)" data-route="krankheitsportraets-michael-jackson">Krankheitsporträt zu Jackson</a> gedeutet.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
        </blockquote>

        ${relatedLinks([
          {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
          {route:"krankheitsportraets-michael-jackson", label:"Krankheitsporträt: Michael Jackson (SO4w3)"},
          {route:"subtype/so4", label:"SO4 – Das Gürteltier: Subtyp-Profil"},
          {route:"beruehmte-til-schweiger", label:"Portrait: Til Schweiger (SO4w3)"},
          {route:"beruehmte-romy-schneider", label:"Portrait: Romy Schneider (SO4w3)"},
          {route:"beruehmte-cat-stevens", label:"Portrait: Cat Stevens / Yusuf Islam (SO4w3)"},
        ])}
      </div>
    </div>
  `);
}

function catStevensPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-cat-stevens-portrait.jpg" alt="Cat Stevens / Yusuf Islam" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Cat Stevens / Yusuf Islam</p>
        <p class="krim-portrait-typ">SO4w3 · Sozialer Typ 4 mit Dreierflügel</p>
        <p class="krim-portrait-subtitle">Britischer Musiker, geb. 1948 – Tierentsprechung: Gürteltier</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Gürteltier auf zwei Bühnen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Gürteltier</strong> ist das Tier des sozialen Typs 4 – es verbirgt sein Anderssein nicht, sondern trägt es sichtbar vor Publikum, selbst wenn dieses Anderssein die eigene Identität grundlegend verändert. Kaum eine Biografie zeigt das so eindrücklich wie die von Steven Demetre Georgiou, geboren 1948 in London: erst als Cat Stevens einer der erfolgreichsten Singer-Songwriter der frühen 1970er, dann als Yusuf Islam ein öffentlicher Fürsprecher seines neuen Glaubens – zwei Identitäten, zwei Bühnen, ein und dasselbe Grundmuster.</p>
          <p class="vb-intro">1976 geriet Stevens vor der Küste Malibus in eine gefährliche Strömung und glaubte, zu ertrinken. Dieses Beinahe-Ertrinken wurde zum Auslöser einer radikalen Suche nach der eigenen, wahren Identität – jenseits von Ruhm, jenseits der Oberfläche, die die Welt von ihm sah.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Vier: Die Suche nach dem wahren Ich vor Publikum</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Vier (SO4)</strong> trägt ihre Andersartigkeit nicht im Verborgenen, sondern in die Gruppe hinein – sie sucht die eigene, wahre Identität, und macht diese Suche selbst zum öffentlichen Thema. Nach seinem Beinahe-Ertrinken durchlief Stevens verschiedene spirituelle Wege, bevor er sich – beeinflusst durch seinen zum Islam konvertierten Bruder David und ein geschenktes Exemplar des Korans – 1977 formell zum Islam bekannte und den Namen Yusuf annahm: die arabische Form von Josef, dessen Geschichte von Versuchung, Verrat und Neuanfang er als Spiegel seines eigenen Weges durch die „Versuchungen des Ruhms" beschreibt.</p>
          <p class="vb-intro">Diese Umbenennung war kein privater, stiller Akt. Yusuf Islam erzählt seine eigene Geschichte seither immer wieder öffentlich – in Interviews, Vorträgen, Reden – als Beweis dafür, dass der Glaube Antworten und Frieden bieten kann. Das ist die soziale Vier in Reinform: die eigene, tief persönliche Transformation wird nicht verborgen, sondern zur Botschaft für andere.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierflügel: Von der Popkarriere zur Mission</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierflügel (w3)</strong> gibt der sozialen Vier Zielstrebigkeit, Struktur und die Fähigkeit, aus innerem Erleben sichtbare, messbare Ergebnisse zu formen. Bereits als Cat Stevens zeigte sich das: Alben wie „Tea for the Tillerman" (1970) und „Teaser and the Firecat" (1971) machten ihn zu einem der meistverkauften Künstler seiner Zeit – introspektive, persönliche Texte, verpackt in makellos produzierte, kommerziell erfolgreiche Songs.</p>
          <p class="vb-intro">Nach seiner Konversion übertrug sich dieselbe Zielstrebigkeit auf eine neue Mission: 1983 gründete er eine muslimische Grundschule in London, half später beim Aufbau der Hilfsorganisation Muslim Aid, die in Afrika, Asien und Europa aktiv wurde. Statt sich zurückzuziehen, baute er Institutionen auf – Schule, Organisation, öffentliche Präsenz. 2006 kehrte er schließlich unter dem Namen Yusuf/Cat Stevens auch musikalisch zurück. Der Dreierflügel der SO4 sucht nicht die stille Innenschau, sondern die sichtbare, strukturierte Umsetzung der eigenen Wahrheit in der Welt.</p>
        </blockquote>

        <h2 class="vb-section">4. Zwei Identitäten, ein Muster</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Stevens/Yusuf von vielen anderen Prominenten unterscheidet, die sich religiös neu orientierten, ist die Konsequenz, mit der er den Bruch vollzog: Er verließ die Musikindustrie für fast drei Jahrzehnte fast vollständig, verkaufte seine Gitarren, konzentrierte sich auf Familie, Glaube und wohltätige Arbeit. Kein halber Rückzug, kein Nebenbei – die neue Identität ersetzte die alte fast vollständig, bevor beide sich 2006 wieder annäherten.</p>
          <p class="vb-intro">Diese Radikalität selbst ist typisch für die soziale Vier: Wenn die eigene Andersartigkeit erkannt wird, wird sie nicht als Facette neben anderen integriert, sondern zum neuen Zentrum der eigenen Identität gemacht – öffentlich, sichtbar, unübersehbar.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO4w3 zeigt sich in der Fähigkeit, aus einer existenziellen Krise – dem Beinahe-Ertrinken, der Sinnkrise des Ruhms – eine tragfähige, jahrzehntelang gelebte neue Identität zu formen, die zugleich anderen Menschen als Orientierung diente: Millionen Zuhörer bei Cat Stevens, viele Gläubige und Bedürftige durch die Arbeit von Yusuf Islam.</p>
          <p class="vb-intro">Der Schatten zeigt sich in den öffentlichen Kontroversen, die seine Konversion begleiteten – darunter 1989 missverständliche, später von ihm selbst relativierte Äußerungen zur Fatwa gegen Salman Rushdie, die seinem Ruf jahrelang schadeten. Für die SO4w3 gilt: Wer die eigene Wahrheit so öffentlich und kompromisslos vertritt, riskiert, dass jedes Wort auf die Goldwaage gelegt wird – und dass Nuancen im öffentlichen Bild verloren gehen.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Vermächtnis: Das Gürteltier mit zwei Namen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Cat Stevens/Yusuf Islam bleibt bis heute eine der seltenen Figuren der Popkultur, die einen vollständigen Identitätswechsel öffentlich vollzogen und beide Identitäten am Ende miteinander versöhnten, statt eine zu verleugnen. 2014 wurde er in die Rock and Roll Hall of Fame aufgenommen – als Cat Stevens gewürdigt für ein Werk, das er als Yusuf Islam nie verleugnete.</p>
          <p class="vb-intro">Das Gürteltier, das seine Wahrheit nie verbarg, auch wenn sie sich radikal veränderte – das ist das bleibende Bild der sozialen Vier mit Dreierflügel: die eigene Transformation nicht im Stillen zu vollziehen, sondern sie mit derselben Zielstrebigkeit in die Welt zu tragen, mit der zuvor der Ruhm gesucht wurde.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/so4", label:"SO4 – Das Gürteltier: Subtyp-Profil"},
        {route:"beruehmte-michael-jackson", label:"Porträt: Michael Jackson (SO4w3)"},
        {route:"beruehmte-til-schweiger", label:"Porträt: Til Schweiger (SO4w3)"},
        {route:"beruehmte-romy-schneider", label:"Porträt: Romy Schneider (SO4w3)"},
      ])}
    </div>
  `);
}

function taddlPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-taddl-portrait.jpg" alt="Taddl (Daniel Tjarks) – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Taddl (Daniel Tjarks)</p>
        <p class="krim-portrait-typ">SO4w3 &middot; Sozialer Typ 4 mit Dreierfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">YouTuber, K\u00fcnstler &amp; Musiker, geb. 1996 &ndash; Tierentsprechung: G\u00fcrteltier</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das G\u00fcrteltier</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>G\u00fcrteltier</strong> ist das Tier des sozialen Typs 4 &ndash; ein Wesen, das nach au\u00dfen hin gepanzert ist, das sich bei Gefahr einrollt und eine undurchdringliche Schale zeigt. Wer es von au\u00dfen beobachtet, sieht die Panzerung. Wer es kennt, wei\u00df: Darunter ist etwas au\u00dferordentlich Weiches. Ein Tier, das f\u00fchlt. Das verletzlich ist. Das sich sehnt. Und das diese Sehnsucht jahrelang hinter seiner Schale versteckt halten kann.</p>
          <p class="vb-intro">Der deutsche Content-Creator Taddl &ndash; b\u00fcrgerlicher Name Daniel Tjarks, geb. 1996 &ndash; begann seine Karriere als Teenager auf YouTube und wurde einer der bekanntesten deutschen Content-Creator seiner Generation. Millionen verfolgten seine Videos, seine Kollegenschaft mit anderen YouTubern, seinen scheinbar sorglosen Humor. Aber wer genau hinsah, konnte das G\u00fcrteltier erkennen: einen jungen Mann, der mit Witz und Selbstironie das Innen sch\u00fctzte &ndash; und der irgendwann begann, die Panzerung abzulegen.</p>
        </blockquote>

        <h2 class="vb-section">2. Der soziale Typ 4: Scham als stille Triebkraft</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>soziale Typ 4 (SO4)</strong> ist der <em>Verst\u00e4rkungstyp</em> der Vier: Er tr\u00e4gt seine Leidenschaft des Neids nach innen &ndash; als Scham. Naranjo nannte diesen Subtyp treffend <em>Scham</em>. Das Lebensgef\u00fchl der SO4 ist ein tiefes Mangelbewusstsein: Das Gras auf der anderen Seite des Zauns ist immer gr\u00fcner. Die anderen haben etwas, das ich nicht habe. Die anderen <em>sind</em> etwas, das ich nicht bin. Dieses Gef\u00fchl der Unterlegenheit ist nicht laut und anklagend &ndash; es arbeitet still, hartn\u00e4ckig und ersch\u00f6pfend im Inneren. Und es ist zugleich der Antrieb, der die SO4 zur Leistung treibt: <em>Vielleicht reiche ich dann irgendwann doch.</em></p>
          <p class="vb-intro">Bei Taddl zeigt sich das in der Spannung zwischen Sichtbarkeit und R\u00fcckzug, die seinen \u00f6ffentlichen Weg gepr\u00e4gt hat. Er war pr\u00e4sent &ndash; und verschwand. Er teilte &ndash; und sch\u00fctzte. Er zeigte Humor &ndash; und dahinter lag etwas, das er lange nicht zeigte. Das ist die SO4: Sie will gesehen werden. Aber sie f\u00fcrchtet sich davor, wirklich gesehen zu werden &ndash; weil sie nicht sicher ist, ob das, was man dann sieht, gut genug ist.</p>
          <p class="vb-intro">Sein sp\u00e4teres Schaffen &ndash; Musik, Kunst, ehrlichere Einblicke in sein Leben &ndash; zeigt die SO4 auf einem Weg: von der Scham, die verbirgt, zur Verletzlichkeit, die zeigt. Das ist kein kleiner Schritt. Das ist der wesentliche.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierfl\u00fcgel: Auftritt als Schutzmechanismus</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierfl\u00fcgel (w3)</strong> gibt dem sozialen Typ 4 etwas, das die Vier allein nicht h\u00e4tte: die F\u00e4higkeit, sich zu pr\u00e4sentieren, auf der B\u00fchne zu bestehen, ein Publikum zu unterhalten. Die SO4w3 sp\u00fcrt die Scham &ndash; und tritt trotzdem auf. Oder besser: <em>wegen</em> der Scham. Denn der Dreierfl\u00fcgel liefert die Energie, die Maske zu bauen, die das Innere sch\u00fctzt, solange man noch nicht bereit ist, es zu zeigen.</p>
          <p class="vb-intro">Taddls fr\u00fche YouTube-Phase ist das Paradebeispiel dieser Dynamik: unterhaltsam, selbstironisch, immer leicht auf Abstand. Der Dreierfl\u00fcgel macht ihn zu einem nat\u00fcrlichen Entertainer &ndash; und die Vier darunter sorgt daf\u00fcr, dass dieser Entertainer mehr ist als eine Oberfl\u00e4che. Er sucht Bedeutung. Er sucht Echtheit. Er will nicht nur unterhalten &ndash; er will etwas hinterlassen, das bleibt.</p>
          <p class="vb-intro">Diese Spannung &ndash; Entertainer gegen Suchender &ndash; ist das kreative Zentrum der SO4w3. Musik, bildende Kunst, pers\u00f6nlichere Inhalte: Taddl hat begonnen, den Dreierfl\u00fcgel weniger als Schutz und mehr als Ausdrucksmittel zu nutzen. Das ist Reifung. Das ist Entwicklung. Das ist das G\u00fcrteltier, das lernt, sich auch ohne Panzerung in der Welt zu bewegen.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO4w3 ist ihre F\u00e4higkeit, das Innere in Kunst zu verwandeln &ndash; auf eine Weise, die andere ber\u00fchrt, weil sie darin sich selbst erkennen. Taddls Entwicklung vom reinen Entertainment zur k\u00fcnstlerischen Auseinandersetzung ist dieses Licht: ein Mensch, der begreift, dass seine Empfindlichkeit kein Defizit ist, sondern ein Rohstoff.</p>
          <p class="vb-intro">Das Schicksalsmuster der Vier ist der <strong>Neid</strong> &ndash; und bei der SO4 ist er besonders still und zerm\u00fcrbend. Der st\u00e4ndige Vergleich, das Gef\u00fchl des Zu-kurz-Kommens, die \u00dcberzeugung, dass andere eine Selbstverst\u00e4ndlichkeit im Leben haben, die einem selbst fehlt. Das kann l\u00e4hmen. Es kann aber auch &ndash; wenn es bewusst wird &ndash; in Energie verwandelt werden: <em>Ich will zeigen, dass ich mehr bin als das, was ich bisher gezeigt habe.</em></p>
          <p class="vb-intro">Der Dreierfl\u00fcgel bringt seine eigene Schattenseite: die Versuchung, das Echte dem Erfolgreichen zu opfern. Wenn der Applaus wichtiger wird als das Werk. Wenn die Reaktion des Publikums die innere Stimme \u00fcbert\u00f6nt. Das G\u00fcrteltier in der Falle seiner eigenen Panzerung.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: Sichtbarkeit ohne Panzerung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Vier f\u00fchrt von <em>Ich bin nicht genug</em> zu <em>Das, was ich bin, reicht.</em> F\u00fcr die SO4w3 bedeutet das, die Maske des Dreiers nicht abzulegen &ndash; sondern hinter ihr das Echte zu zeigen. Nicht entweder Entertainer oder Suchender. Beides. Gleichzeitig. Das ist die reife SO4w3: jemand, der sein Publikum unterh\u00e4lt &ndash; und dabei gleichzeitig wirklich etwas von sich preisgibt.</p>
          <p class="vb-intro">Taddls Weg ist noch nicht abgeschlossen &ndash; er ist Ende zwanzig. Aber die Richtung ist erkennbar: weg von der Panzerung, hin zur Pr\u00e4senz. Das G\u00fcrteltier, das gelernt hat, dass es keine Panzerung braucht, um sicher zu sein &ndash; weil die Sicherheit von innen kommt. Das ist der Heilungsweg. Und es ist ein mutiger.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/so4", label:"SO4 \u2013 Das G\u00fcrteltier: Subtyp-Profil"},
        {route:"beruehmte-romy-schneider", label:"Portr\u00e4t: Romy Schneider (SO4w3)"},
      ])}
    </div>
  `);
}

function romySchneiderPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-romy-schneider-portrait.jpg" alt="Romy Schneider – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Romy Schneider</p>
        <p class="krim-portrait-typ">SO4w3 &middot; Sozialer Typ 4 mit Dreierfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Schauspielerin, 1938&ndash;1982 &ndash; Tierentsprechung: G\u00fcrteltier</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das G\u00fcrteltier</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>G\u00fcrteltier</strong> ist das Tier des sozialen Typs 4 &ndash; und es ist ein Tier voller Widerspr\u00fcche. Nach au\u00dfen tr\u00e4gt es einen harten Panzer, der es unverwundbar wirken l\u00e4sst. Aber dieser Panzer sch\u00fctzt ein Inneres, das au\u00dfergew\u00f6hnlich empfindlich ist: Das G\u00fcrteltier ist eines der wenigen S\u00e4ugetiere, das sich bei Gefahr nicht k\u00e4mpfend oder fliehend verh\u00e4lt, sondern sich zusammenrollt &ndash; es h\u00fcllt sich in sich selbst ein. Gleichzeitig ist das G\u00fcrteltier ein geselliges Tier. Es lebt nicht allein. Es braucht die Gemeinschaft, auch wenn es sich in ihr manchmal fremd f\u00fchlt.</p>
          <p class="vb-intro">Die \u00f6sterreichisch-deutsche Schauspielerin Romy Schneider war eine der gr\u00f6\u00dften Schauspielerinnen des 20. Jahrhunderts &ndash; und eine der einsamsten. Die Welt sah den Glanz: <em>Sissi</em>, die Leinwand, die Preise, die Eleganz. Was hinter dem Panzer lag, hat sie selbst immer wieder beschrieben: Schmerz, Einsamkeit, das Gef\u00fchl, nie wirklich gesehen zu werden &ndash; nur die Rolle, nie die Frau. Das G\u00fcrteltier, das sich in der \u00d6ffentlichkeit zeigt und sich dabei innerlich einrollt.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Vier: Scham als Antrieb</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Vier (SO4)</strong> ist in der Enneagramm-Tradition derjenige Subtyp, der den Schmerz der Vier in die soziale Dimension tr\u00e4gt. Naranjo nannte diesen Subtyp <em>Scham</em>: das tiefe Gef\u00fchl, nicht gut genug zu sein f\u00fcr die Welt, in der man lebt &ndash; und gleichzeitig der brennende Wunsch, dazuzugeh\u00f6ren, gesehen zu werden, bedeutsam zu sein. Die SO4 vergleicht sich unabl\u00e4ssig mit anderen: <em>Sie haben etwas, das mir fehlt. Ich bin weniger.</em></p>
          <p class="vb-intro">Bei Romy Schneider zeigt sich das in dem Widerspruch, der ihr Leben pr\u00e4gte: Sie war einer der begehrtesten Stars Europas &ndash; und f\u00fchlte sich trotzdem nie wirklich angekommen. Die Rollen, die Kritik, der Applaus &ndash; nichts f\u00fcllte das innere Loch. Die SO4 sucht in der Resonanz der anderen eine Best\u00e4tigung, die nur von innen kommen kann. Und weil sie diese Best\u00e4tigung nicht findet, arbeitet sie h\u00e4rter, spielt tiefer, gibt mehr &ndash; in der Hoffnung, dass der n\u00e4chste Auftritt das gibt, was alle anderen nicht konnten.</p>
          <p class="vb-intro">Charakteristisch f\u00fcr die SO4 ist auch die F\u00e4higkeit, den eigenen Schmerz in Kunst zu verwandeln. Romys beste Rollen &ndash; in <em>Das M\u00e4dchen und der Kommissar</em>, <em>Die Dinge des Lebens</em>, <em>C\u00e9sar und Rosalie</em> oder <em>La Piscine</em> &ndash; tragen diese Energie: Eine Intensit\u00e4t, die nicht gespielt ist, sondern gelebt. Die SO4 wei\u00df: Was ich wirklich f\u00fchle, ist st\u00e4rker als jede Technik.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierfl\u00fcgel: Die B\u00fchne als Lebensnotwendigkeit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierfl\u00fcgel (w3)</strong> bringt der sozialen Vier eine entscheidende Spannung: das Bed\u00fcrfnis nach Leistung, nach Wirksamkeit, nach der \u00f6ffentlichen Best\u00e4tigung, die die Drei braucht. Eine SO4 mit schwach ausgeprägtem Dreierflügel könnte sich in der Tiefe der eigenen Empfindung verlieren – zu empfindlich, zu verletzlich für die Anforderungen des Betriebs. Ein stark ausgeprägter Dreierflügel treibt sie stattdessen hinaus: <em>Wenn du schon leidest, dann lass wenigstens etwas Gro\u00dfes daraus werden.</em></p>
          <p class="vb-intro">Bei Romy Schneider zeigt sich der Dreierfl\u00fcgel in ihrer au\u00dfergew\u00f6hnlichen Disziplin und Professionalit\u00e4t am Set &ndash; die alle Zeitzeugen beschreiben. Sie war oft zerrissen, oft am Rand, aber sie lieferte. Die SO4w3 trennt das Private vom Professionellen nicht durch K\u00e4lte, sondern durch eine Art Verwandlungskraft: Die B\u00fchne wird zum Ort, an dem das Innere Form annimmt &ndash; und f\u00fcr diesen Moment liegt der Schmerz nicht in ihr, sondern in der Rolle.</p>
          <p class="vb-intro">Der Dreierfl\u00fcgel erkl\u00e4rt auch Romys ambivalente Beziehung zur \u00d6ffentlichkeit: Sie brauchte die Aufmerksamkeit &ndash; und litt unter ihr. Das ist die SO4w3 in ihrem Kernkonflikt: Der Dreierfl\u00fcgel treibt sie ins Licht, die Vier zieht sie zur\u00fcck in die Stille. Das Leben zwischen diesen Polen hat sie ersch\u00f6pft.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der sozialen Vier</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO4 ist ihre F\u00e4higkeit zur Tiefe &ndash; zur echten, ungeschminkten Darstellung menschlicher Erfahrung. Romy Schneider hat auf der Leinwand etwas gezeigt, das viele Schauspielerinnen nicht zeigen k\u00f6nnen oder wollen: die rohe Wirklichkeit von Schmerz, Liebe und Verlust. Ihre Filme sind keine Unterhaltung. Sie sind Erfahrung. Das ist das Geschenk der SO4: Sie macht das Menschlichste sichtbar.</p>
          <p class="vb-intro">Das Schicksalsmuster der Vier ist der <strong>Neid</strong> &ndash; das Gef\u00fchl, dass anderen etwas mitgegeben wurde, das einem selbst fehlt. Bei der SO4 \u00e4u\u00dfert sich das als soziale Scham: <em>Die anderen wissen, wie das geht. Ich tue nur so.</em> Romy Schneider hat dieses Gef\u00fchl in Interviews immer wieder angedeutet &ndash; die \u00dcberzeugung, dass andere das Leben besser verstanden haben, dass ihr die Leichtigkeit fehlte, die sie bei anderen sah.</p>
          <p class="vb-intro">Der Dreierfl\u00fcgel versch\u00e4rft den Druck: Er fordert Ergebnisse, Rollen, Anerkennung &ndash; auch dann, wenn die SO4 eigentlich Stille braucht. Der Tod ihres Sohnes David 1981, nur ein Jahr vor ihrem eigenen Tod, hat dieses System zum Zusammenbruch gebracht. Was blieb, war eine Frau, die zu viel gegeben hatte &ndash; und zu wenig empfangen.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: Vom Vergleichen zum Ankommen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Vier f\u00fchrt von der Frage <em>Warum bin ich weniger als die anderen?</em> zur Erkenntnis <em>Was ich bin, ist vollst\u00e4ndig &ndash; und es ist einmalig.</em> F\u00fcr die SO4 bedeutet das, den unabl\u00e4ssigen Vergleich ruhen zu lassen und zu entdecken: Die Tiefe, die ich als Last trage, ist auch ein Geschenk. Nicht jeder kann so f\u00fchlen. Nicht jeder kann so spielen. Nicht jeder kann so ber\u00fchren.</p>
          <p class="vb-intro">Romy Schneider hat diesen Weg nicht zu Ende gehen k\u00f6nnen. Aber was sie hinterlassen hat, tr\u00e4gt: Filme, die Jahrzehnte sp\u00e4ter noch G\u00e4nsehaut erzeugen. Eine Pr\u00e4senz, die nicht nachl\u00e4sst. Das G\u00fcrteltier hat sich eingerollt &ndash; aber die W\u00e4rme, die in ihm war, ist noch sp\u00fcrbar. Das ist vielleicht das Tiefste, was die SO4 der Welt geben kann: das Gef\u00fchl, dass es jemanden gab, der wirklich gef\u00fchlt hat. F\u00fcr alle.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"enneagramm-astrologie", label:"Enneagramm meets Astrologie"},
        {route:"astrologie-romy-schneider", label:"Horoskop-Analyse: Romy Schneider"},
        {route:"subtype/so4", label:"SO4 \u2013 Das G\u00fcrteltier: Subtyp-Profil"},
        {route:"krankheitsportraets-romy-schneider", label:"Krankheitsportr\u00e4t: Romy Schneider (SO4w3)"},
      ])}
    </div>
  `);
}


function clemensArvayPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-clemens-arvay-portrait.jpg" alt="Clemens G. Arvay – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Clemens G. Arvay</p>
        <p class="krim-portrait-typ">SE4w5 &middot; Selbsterhaltender Typ 4 mit F\u00fcnferfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Autor &amp; Biologe, 1980&ndash;2022 &ndash; Tierentsprechung: Taube</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Die Taube</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>Taube</strong> ist das Tier des selbsterhaltenden Typs 4 &ndash; und sie ist ein Tier, das man leicht \u00fcbersieht. Keine Sch\u00e4rfe, keine Dominanz, kein lautes Auftreten. Die Taube bewegt sich nah am Boden, nah an den Menschen, nah an dem, was w\u00e4chst und atmet. Und doch tr\u00e4gt sie seit Jahrtausenden die tiefsten Botschaften: Frieden. Heimkehr. Das Versprechen, dass es weitergeht.</p>
          <p class="vb-intro">Clemens G. Arvay war ein \u00f6sterreichischer Biologe und Autor, der einer breiten \u00d6ffentlichkeit zeigte, was Wissenschaft und innere Sehnsucht gemeinsam wissen: dass der Wald heilt. Sein Werk &ndash; darunter <em>Der Biophilia-Effekt</em> und <em>Wir k\u00f6nnen es besser</em> &ndash; ist die Arbeit einer Taube: kein Drama, keine Selbstinszenierung, aber eine Botschaft, die tr\u00e4gt und bleibt. 2022 hat er sich das Leben genommen. Die Taube, die anderen den Weg zeigt, hat ihren eigenen manchmal verloren.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Vier: Schmerz als stille Heimat</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Vier (SE4)</strong> ist der Kontratyp der Vier: Sie zeigt den inneren Schmerz nicht nach au\u00dfen, sie dramatisiert ihn nicht. Naranjo nannte diesen Subtyp <em>Z\u00e4higkeit</em> (im Original: <em>tenacity</em>) &ndash; einen Antrieb, sich selbst gegen\u00fcber kompromisslos ehrlich zu sein, auch wenn es kostet. Die SE4 k\u00e4mpft mit dem, was sie innen tr\u00e4gt, und sie k\u00e4mpft es still aus. Nach au\u00dfen zeigt sie St\u00e4rke, manchmal sogar Heiterkeit &ndash; w\u00e4hrend innen etwas ringt.</p>
          <p class="vb-intro">Bei Clemens Arvay zeigt sich das in der Art, wie er geschrieben hat: nicht aus der Distanz des k\u00fchlen Beobachters, sondern aus einer tiefen pers\u00f6nlichen Betroffenheit. Die Natur war f\u00fcr ihn kein Studieobjekt &ndash; sie war ein Zuhause. Die SE4 findet im Sch\u00f6nen und im Lebendigen einen Spiegel f\u00fcr das, was in ihr selbst lebt: die Sehnsucht nach Stille, nach Verbindung, nach einem Ort, der h\u00e4lt. Der Wald war Arvays innerer Raum &ndash; und er hat ihn f\u00fcr andere ge\u00f6ffnet.</p>
          <p class="vb-intro">Der selbsterhaltende Instinkt richtet die Vier auf das eigene \u00dcberleben aus &ndash; auf die Frage: <em>Habe ich genug? Bin ich sicher? Gibt es einen Ort f\u00fcr mich?</em> Bei Arvay wurde diese Frage zunehmend zur inneren Notlage, die nach au\u00dfen hin nicht sichtbar war. Das ist das stille Leiden der SE4: Sie gibt anderen Halt, w\u00e4hrend sie selbst auf der Suche nach Boden ist.</p>
        </blockquote>

        <h2 class="vb-section">3. Der F\u00fcnferfl\u00fcgel: Wissen als Schutz und Berufung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>F\u00fcnferfl\u00fcgel (w5)</strong> bringt der selbsterhaltenden Vier eine charakteristische Pr\u00e4gung: das Bed\u00fcrfnis nach Wissen, nach Verstehen, nach der intellektuellen Durchdringung der Welt. Eine SE4 mit schwach ausgeprägtem Fünferflügel könnte sich in der inneren Welt der Gefühle verlieren – tief empfindend, aber ohne festen Boden. Ein stark ausgeprägter Fünferflügel gibt ihr dagegen Struktur: Er sucht die Wahrheit nicht nur im Gef\u00fchl, sondern auch in der Erkenntnis.</p>
          <p class="vb-intro">Bei Clemens Arvay ist der F\u00fcnferfl\u00fcgel in seiner wissenschaftlichen Genauigkeit un\u00fcbersehbar. Er hat nicht einfach \u00fcber den Wald geschw\u00e4rmt &ndash; er hat die Forschung zusammengetragen, die zeigt, warum Naturkontakt heilt: Terpene, Immunsystem, Stresshormone, Herzfrequenz. Die SE4w5 verbindet das F\u00fchlen mit dem Wissen und entdeckt: <em>Was ich innerlich ahne, l\u00e4sst sich beweisen.</em> Das gibt der eigenen Sehnsucht eine Stimme, der andere vertrauen k\u00f6nnen.</p>
          <p class="vb-intro">Der F\u00fcnferfl\u00fcgel erkl\u00e4rt auch Arvays Bereitschaft zur Kontroverse. In seinem sp\u00e4teren Werk hat er sich kritisch mit der Pharmaindustrie, mit der Agrarpolitik und mit der Pandemiepolitik auseinandergesetzt &ndash; manchmal an der Grenze des wissenschaftlichen Konsenses. Die SE4w5 ist keine bequeme Stimme. Sie sucht die Wahrheit, auch wenn sie unbequem macht &ndash; und auch wenn sie damit allein dasteht.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der selbsterhaltenden Vier</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE4w5 ist ihre Verbindung von Tiefe und Pr\u00e4zision. Clemens Arvay hat Menschen erreicht, die weder von reiner Wissenschaft noch von reiner Spiritualit\u00e4t angesprochen werden &ndash; Menschen, die beides suchen: den Beweis und das Gef\u00fchl. Er hat gezeigt, dass Sehnsucht nach Natur keine Romantik ist, sondern biologische Notwendigkeit. Das ist die SE4w5 auf ihrem Heilungsweg: Erfahrung und Erkenntnis werden zur Br\u00fccke f\u00fcr andere.</p>
          <p class="vb-intro">Das Schicksalsmuster der Vier ist der <strong>Neid</strong> &ndash; das Gef\u00fchl, dass anderen etwas mitgegeben wurde, das einem selbst fehlt: Leichtigkeit, Zugeh\u00f6rigkeit, ein Platz in der Welt, der sich selbstverst\u00e4ndlich anf\u00fchlt. Bei der SE4 ist dieses Gef\u00fchl besonders still und tief. Es \u00e4u\u00dfert sich nicht als Bitterkeit, sondern als ein chronisches Moll-Ton im Inneren &ndash; die \u00dcberzeugung, irgendwie anders zu sein als die anderen, nie ganz anzukommen.</p>
          <p class="vb-intro">Der F\u00fcnferfl\u00fcgel kann diesen Schmerz verst\u00e4rken, indem er den R\u00fcckzug ins Wissen f\u00f6rdert: Wenn die Welt zu laut wird, zieht sich die SE4w5 in die B\u00fccher, in die Forschung, in die eigene Gedankenwelt zur\u00fcck. Das sch\u00fctzt &ndash; und isoliert. Arvays innerer R\u00fcckzug in den letzten Lebensjahren, der in seiner Trag\u00f6die endete, spricht von dieser Dynamik.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: Vom Wissen zum Vertrauen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Vier f\u00fchrt von der Frage <em>Warum fehlt mir, was anderen gegeben wurde?</em> zur Erkenntnis <em>Was ich bin, ist vollst\u00e4ndig &ndash; und es ist einmalig.</em> F\u00fcr die SE4w5 bedeutet das, das Wissen nicht als Ersatz f\u00fcr Verbindung zu nutzen, sondern als Einladung dazu. Die F\u00e4higkeit, die Welt tiefer zu sehen als die meisten &ndash; das ist kein Defizit. Das ist ein Geschenk.</p>
          <p class="vb-intro">Clemens Arvay hat diesen Weg in seinem Werk weit vorangetragen &ndash; und andere dabei mitgenommen. Sein Beitrag zur Heilkraft der Natur, zur Frage nach einer menschlicheren Welt, bleibt lebendig. Die Taube, die abgeflogen ist, hat Botschaften hinterlassen. Und manchmal ist das das Gr\u00f6\u00dfte, was ein Mensch tun kann: hinterlassen, was andere tr\u00e4gt, auch wenn man selbst nicht mehr kann.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/se4", label:"SE4 \u2013 Die Taube: Subtyp-Profil"},
        {route:"beruehmte-lady-diana", label:"Portr\u00e4t: Lady Diana (SE4w3)"},
      ])}
    </div>
  `);
}


function freddieMercuryPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-freddie-mercury-portrait.jpg" alt="Freddie Mercury – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Freddie Mercury</p>
        <p class="krim-portrait-typ">SX4w3 &middot; Sexueller Typ 4 mit Dreierfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Rocks\u00e4nger &amp; Songwriter, 1946&ndash;1991 &ndash; Tierentsprechung: Chihuahua</p>
      </div>
      <div class="page-content">
        <p class="vb-intro" style="text-align:center;font-style:italic;">
          Ein eigenes <a href="javascript:void(0)" data-route="krankheitsportraets-freddie-mercury">Krankheitsportr\u00e4t</a>
          widmet sich Mercurys jahrelang geheim gehaltener AIDS-Erkrankung und ihrer Offenlegung 1991.
        </p>

        <h2 class="vb-section">1. Der Chihuahua</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Chihuahua</strong> ist die kleinste Hunderasse der Welt &ndash; und verh\u00e4lt sich wie der gr\u00f6\u00dfte. Er f\u00fcrchtet nichts. Er bellt, wenn n\u00f6tig, und zeigt keine Scheu vor dem, was gr\u00f6\u00dfer ist als er. Aber hinter dieser K\u00fchnheit liegt ein Tier, das tief empfindet: Der Chihuahua ist empfindlich, bindungsintensiv, manchmal dramatisch &ndash; und er braucht, trotz aller Selbstdarstellung, die tiefe Verbindung zu einem Menschen, dem er vertraut. Der Chihuahua ist kein Tier der Masse. Er ist ein Tier der Intensit\u00e4t.</p>
          <p class="vb-intro">Der britische Musiker Freddie Mercury war einer der gr\u00f6\u00dften B\u00fchnenk\u00fcnstler aller Zeiten &ndash; und einer der verletzlichsten Menschen hinter der Maske. Auf der B\u00fchne: ein Tier, das sich verwandelte. Kein anderer Rockstar hat das Publikum so vollst\u00e4ndig in Besitz genommen wie er &ndash; mit Stimme, K\u00f6rper, Geste, Blick. Und hinter der B\u00fchne: ein Mann aus Sansibar, der nie ganz wusste, wo er hingeh\u00f6rte, der seinen b\u00fcrgerlichen Namen Farrokh Bulsara versteckte und sich in Freddie Mercury verwandelte. Der Chihuahua, der sich in einen L\u00f6wen verwandelt &ndash; und dabei nie aufh\u00f6rt, ein Chihuahua zu sein.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Vier: Eifersucht als Feuer</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Vier (SX4)</strong> ist in der Enneagramm-Tradition derjenige Subtyp, der den Schmerz der Vier in die unmittelbare pers\u00f6nliche Intensit\u00e4t tr\u00e4gt. Naranjo nannte diesen Subtyp <em>Rivalit\u00e4t</em> &ndash; die brennende \u00dcberzeugung, dass andere haben, was einem selbst verweigert wurde, verbunden mit dem Impuls, sich zu messen, zu \u00fcberbieten, zu \u00fcbertreffen. Das Leitmotiv der SX4 lautet: <em>Verletzte Menschen verletzen Menschen.</em> Die SX4 k\u00e4mpft &ndash; mit anderen, mit sich selbst, mit der Welt &ndash; weil der eigene Schmerz keinen anderen Ausweg findet. Diese Energie ist ein Feuer, das verbrennen und erw\u00e4rmen kann.</p>
          <p class="vb-intro">Bei Freddie Mercury zeigt sich das in der Intensit\u00e4t, mit der er liebte, begehrte, litt und schuf. Seine Songs sind keine Produktionen &ndash; sie sind emotionale Erdbeben. <em>Bohemian Rhapsody</em> ist keine Ballade. Es ist eine Innenwelt, die explodiert. <em>Somebody to Love</em> ist kein Liebeslied &ndash; es ist ein Hilferuf aus einer tiefen Einsamkeit. Die SX4 verwandelt den pers\u00f6nlichen Schmerz in etwas so Gro\u00dfes, dass er universal wird. Und genau das hat Freddie Mercury getan: Er hat sich selbst auf die B\u00fchne gestellt &ndash; mit allem, was da war.</p>
          <p class="vb-intro">Der sexuelle Instinkt richtet die Vier auf die unmittelbare Verbindung aus: <em>Ich will dich. Ich will, dass du mich siehst. Wirklich.</em> Freddie Mercury hat dieses Bed\u00fcrfnis in seiner Kunst und in seinem Leben ausgelebt &ndash; mit einer R\u00fcckhaltlosigkeit, die bewunderte und manchmal verst\u00f6rte. Die SX4 wei\u00df: Halbherzig ist keine Option.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierfl\u00fcgel: Die B\u00fchne als Heimat</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierfl\u00fcgel (w3)</strong> bringt der sexuellen Vier etwas Entscheidendes: die F\u00e4higkeit, das Innere nach au\u00dfen zu wenden und in Wirkung zu verwandeln. Eine SX4 mit schwach ausgeprägtem Dreierflügel könnte in der Intensität des eigenen Erlebens versinken – tief, dunkel, unzugänglich. Ein stark ausgeprägter Dreierflügel gibt ihr stattdessen eine Bühne: <em>Was du f\u00fchlst, kann gestaltet werden. Und was gestaltet wird, kann die Welt ver\u00e4ndern.</em></p>
          <p class="vb-intro">Bei Freddie Mercury ist der Dreierfl\u00fcgel in jeder Sekunde seiner B\u00fchnenpr\u00e4senz sp\u00fcrbar. Er hat nicht gespielt &ndash; er hat regiert. Das Live-Aid-Konzert 1985, das oft als die beste B\u00fchnenperformance der Rockgeschichte gilt, zeigt diese Energie in ihrer unverfälschtesten Gestalt: Ein Mensch, der wei\u00df, was er kann, und der dieses Wissen ohne Z\u00f6gern einsetzt. Die SX4w3 trennt das Private vom \u00d6ffentlichen nicht durch K\u00e4lte, sondern durch Verwandlung: Das Innere wird zur Kunst, die Kunst zur Verbindung.</p>
          <p class="vb-intro">Der Dreierfl\u00fcgel erkl\u00e4rt auch Freddie Mercurys au\u00dfergew\u00f6hnliche Professionalit\u00e4t im Studio. Er war kein chaotischer K\u00fcnstler &ndash; er war pr\u00e4zise, ausdauernd, anspruchsvoll. Die SX4w3 wei\u00df: Das Gef\u00fchl allein reicht nicht. Es muss Form annehmen. Und diese Form muss so nah an der Wahrheit sein, dass kein Raum f\u00fcr Kompromisse bleibt.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der sexuellen Vier</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX4 ist ihre F\u00e4higkeit zur vollst\u00e4ndigen Hingabe &ndash; an die Kunst, an den Menschen, an den Moment. Freddie Mercury hat auf der B\u00fchne etwas gezeigt, das die meisten Menschen nie erleben werden: den Zustand vollst\u00e4ndiger Pr\u00e4senz. Wenn er sang, war er nicht Farrokh Bulsara, nicht der Junge aus Sansibar, nicht der Au\u00dfenseiter &ndash; er war einfach da. Vollst\u00e4ndig. Das ist das Geschenk der SX4: Sie gibt alles, in jedem Moment.</p>
          <p class="vb-intro">Das Schicksalsmuster der Vier ist der <strong>Neid</strong> &ndash; das Gef\u00fchl, dass anderen etwas mitgegeben wurde, das einem selbst fehlt. Bei der SX4 \u00e4u\u00dfert sich das als pers\u00f6nliche Verletzung: <em>Du hast etwas, das ich nicht habe. Und das tut weh.</em> Freddie Mercury trug diese Verletzung während seines ganzen Lebens &ndash; die Frage nach Herkunft, Zugeh\u00f6rigkeit, sexueller Identit\u00e4t, nach einem Platz, der sich wirklich wie Zuhause anf\u00fchlte. Die B\u00fchne war sein Zuhause. Was dahinter kam, war oft Einsamkeit.</p>
          <p class="vb-intro">Der Dreierfl\u00fcgel bringt die Gefahr der Selbstaufl\u00f6sung in der Rolle: Wenn die B\u00fchne das einzige Zuhause ist, wo ist man dann, wenn die B\u00fchne leer ist? Freddie Mercury hat diese Frage nie ganz beantwortet &ndash; und die Exzesse der sp\u00e4ten 1970er-Jahre sprechen von einem Menschen, der abseits der Scheinwerfer nicht immer wusste, wo er war.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: Von der Rolle zum Selbst</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Vier f\u00fchrt von der Frage <em>Warum bin ich nicht wie die anderen?</em> zur Erkenntnis <em>Ich bin, wie ich bin &ndash; und das ist nicht weniger, sondern einmalig.</em> F\u00fcr die SX4w3 bedeutet das, die Verwandlungskraft nicht l\u00e4nger als Flucht vor sich selbst zu nutzen, sondern als Ausdruck von sich selbst. Die B\u00fchne nicht als Ort, an dem man wird, wer man sein m\u00f6chte &ndash; sondern als Ort, an dem man zeigt, wer man bereits ist.</p>
          <p class="vb-intro">Freddie Mercury hat diesen Weg in seinen letzten Jahren in stiller Weise gegangen. Im Wissen um seine AIDS-Erkrankung, die er bis kurz vor seinem Tod nicht \u00f6ffentlich best\u00e4tigte, hat er weitergemacht &ndash; <em>The Show Must Go On</em> war kein Statement, es war ein Bekenntnis. Der Chihuahua, der keine Angst kennt &ndash; auch nicht vor dem Ende. Was bleibt, ist eine Stimme, die Jahrzehnte sp\u00e4ter noch G\u00e4nsehaut erzeugt. Und die Frage, was w\u00e4re, wenn er l\u00e4nger Zeit gehabt h\u00e4tte.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/sx4", label:"SX4 \u2013 Der Chihuahua: Subtyp-Profil"},
        {route:"krankheitsportraets-freddie-mercury", label:"Krankheitsportr\u00e4t: Freddie Mercury (SX4w3)"},
        {route:"beruehmte-john-lennon", label:"Portr\u00e4t: John Lennon (SO4w5)"},
        {route:"beruehmte-voltaire", label:"Portr\u00e4t: Voltaire (SX4w3)"},
      ])}
    </div>
  `);
}

function voltairePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-voltaire-portrait.jpg" alt="Voltaire" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Voltaire</p>
        <p class="krim-portrait-typ">SX4w3 \u00b7 Sexueller Typ 4 mit Dreierfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Franz\u00f6sischer Schriftsteller und Philosoph der Aufkl\u00e4rung, 1694\u20131778 \u2013 Tierentsprechung: Chihuahua</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Chihuahua, der aus der Bastille sch\u00e4rfer zur\u00fcckbiss</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Chihuahua</strong> ist die kleinste Hunderasse der Welt \u2013 und verh\u00e4lt sich wie die gr\u00f6\u00dfte. Er f\u00fcrchtet nichts, bellt, wenn es n\u00f6tig ist, und zeigt keine Scheu vor dem, was ihm \u00fcberlegen scheint. Fran\u00e7ois-Marie Arouet, der sich ab etwa 1718 Voltaire nannte, wurde 1694 in Paris geboren und verbrachte insgesamt fast ein Jahr seines Lebens in der Bastille eingesperrt \u2013 zuerst 1717 wegen satirischer Verse gegen den Regenten, dann erneut 1726, nachdem ihn die Bediensteten des Adligen Chevalier de Rohan auf dessen Gehei\u00df hin \u00f6ffentlich verpr\u00fcgelt hatten, weil er es gewagt hatte, dem Adelstitel des Chevalier eine sp\u00f6ttische Bemerkung entgegenzusetzen.</p>
          <p class="vb-intro">Statt Rache zu nehmen, wie es sein aufbrausendes Temperament nahegelegt h\u00e4tte, lie\u00df man ihm die Wahl zwischen weiterer Haft und Exil \u2013 er w\u00e4hlte England. Der Chihuahua, klein und angreifbar gegen\u00fcber der Macht des Adels, verwandelte diese erzwungene Verbannung in den fruchtbarsten Abschnitt seines Lebens.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Vier: Gekr\u00e4nkter Stolz als Antrieb zur Gerechtigkeit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Vier (SX4)</strong> tr\u00e4gt den Schmerz der Vier in unmittelbare, pers\u00f6nliche Intensit\u00e4t \u2013 Naranjo nannte diesen Subtyp <em>Rivalit\u00e4t</em>: die brennende \u00dcberzeugung, dass Unrecht geschehen ist, verbunden mit dem Impuls, es nicht hinzunehmen, sondern zur\u00fcckzuschlagen. Voltaires Dem\u00fctigung durch den Chevalier de Rohan verlie\u00df ihn nie ganz \u2013 sie wurde zum Treibstoff eines lebenslangen Kampfes gegen jede Form von willk\u00fcrlicher Macht und Ungerechtigkeit, die sich \u00fcber den Einzelnen erhob.</p>
          <p class="vb-intro">Am deutlichsten zeigt sich das im Fall Calas: 1762 wurde der protestantische Kaufmann Jean Calas in Toulouse hingerichtet, f\u00e4lschlich beschuldigt, seinen eigenen Sohn ermordet zu haben, um dessen \u00dcbertritt zum Katholizismus zu verhindern. Voltaire, der den Fall nie pers\u00f6nlich erlebt hatte, k\u00e4mpfte drei Jahre lang mit einer Verbissenheit, als sei es seine eigene Sache \u2013 Petitionen, Schriften, ein europaweites Netzwerk an F\u00fcrsprechern \u2013, bis Calas 1765 posthum rehabilitiert wurde. Die SX4 k\u00e4mpft nicht abstrakt f\u00fcr Prinzipien; sie k\u00e4mpft, weil Unrecht sich anf\u00fchlt wie eine pers\u00f6nliche Wunde.</p>
          <p class="vb-intro">Auch seine ber\u00fchmte, jahrzehntelange Fehde mit Jean-Jacques Rousseau trug diese Handschrift: Was als philosophische Meinungsverschiedenheit \u00fcber Fortschritt und Zivilisation begann, eskalierte zu gegenseitigen \u00f6ffentlichen Verunglimpfungen, die beide M\u00e4nner bis zu ihrem Tod \u2013 beide starben 1778, im selben Jahr \u2013 nicht beilegten.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierfl\u00fcgel: Der Ruhm als B\u00fchne der Aufkl\u00e4rung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierfl\u00fcgel (w3)</strong> gibt der sexuellen Vier die F\u00e4higkeit, das Innere nach au\u00dfen zu wenden und in Wirkung zu verwandeln. Voltaire war einer der ersten Schriftsteller der Geschichte, der von seiner Feder allein finanziell unabh\u00e4ngig wurde \u2013 durch schlaue Investitionen, unter anderem in ein cleveres Lotteriesystem, sicherte er sich ein Verm\u00f6gen, das ihn von f\u00fcrstlichen G\u00f6nnern unabh\u00e4ngig machte und ihm erlaubte, ungeniert die M\u00e4chtigen seiner Zeit anzugreifen.</p>
          <p class="vb-intro">Er pflegte gleichzeitig engste Kontakte zu den einflussreichsten H\u00f6fen Europas: Friedrich der Gro\u00dfe von Preu\u00dfen holte ihn 1750 an seinen Hof nach Potsdam, wo Voltaire zun\u00e4chst gefeiert wurde, bevor die Freundschaft in bitterem Streit zerbrach. Am Hof von Versailles ebenso wie am Hof von Sanssouci verstand er es, seine Stimme so zu inszenieren, dass sie geh\u00f6rt wurde. Sein Werk "Candide" (1759), eine bei\u00dfende Satire auf Leibniz' Optimismus-Philosophie, wurde ein europaweiter Bestseller \u2013 der Dreierfl\u00fcgel wei\u00df: Ein Gedanke, der nicht gelesen wird, ver\u00e4ndert nichts.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX4w3 zeigt sich in Voltaires Kampfruf "\u00c9crasez l'inf\u00e2me" \u2013 "Zermalmt das Niedertr\u00e4chtige" \u2013, gerichtet gegen religi\u00f6sen Fanatismus und die Machtmissbr\u00e4uche der Kirche. Seine "Lettres philosophiques" (1733), die England als Vorbild religi\u00f6ser Toleranz und politischer Freiheit gegen\u00fcber dem absolutistischen Frankreich pries, wurden \u00f6ffentlich verbrannt \u2013 ein Verbot, das ihn erneut ins Exil zwang, diesmal auf das Landgut seiner Gef\u00e4hrtin \u00c9milie du Ch\u00e2telet, wo beide gemeinsam ein Jahrzehnt lang Wissenschaft und Philosophie betrieben.</p>
          <p class="vb-intro">Der Schatten: Dieselbe Intensit\u00e4t, die ihn zum unerm\u00fcdlichen K\u00e4mpfer f\u00fcr Gerechtigkeit machte, trieb ihn auch in pers\u00f6nliche Fehden, die er nie beilegen konnte, und in einen bissigen Witz, der Freunde ebenso verletzte wie Feinde. Die SX4 unterscheidet nicht immer scharf zwischen dem Kampf f\u00fcr ein Prinzip und dem Kampf f\u00fcr die eigene verletzte Ehre \u2013 bei Voltaire verschmolzen beide oft zu ein und demselben Feuer.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Verm\u00e4chtnis: Der Chihuahua, der die Aufkl\u00e4rung verk\u00f6rperte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Voltaire starb 1778 in Paris, kurz nachdem er nach 28 Jahren Exil endlich in seine Heimatstadt zur\u00fcckgekehrt war und dort als lebende Legende gefeiert wurde. Die katholische Kirche verweigerte ihm zun\u00e4chst ein christliches Begr\u00e4bnis; erst Jahrzehnte sp\u00e4ter, 1791, wurden seine sterblichen \u00dcberreste unter dem Jubel der Revolution ins Panth\u00e9on in Paris \u00fcberf\u00fchrt \u2013 posthume Anerkennung als einer der geistigen V\u00e4ter der Franz\u00f6sischen Revolution.</p>
          <p class="vb-intro">Der Chihuahua, der aus einer pers\u00f6nlichen Kr\u00e4nkung heraus zum unerm\u00fcdlichen K\u00e4mpfer gegen religi\u00f6se und politische Willk\u00fcr wurde, hinterlie\u00df mehr als scharfe Satiren: Er hinterlie\u00df die Vorstellung, dass ein Einzelner \u2013 bewaffnet mit nichts als Feder und Witz \u2013 F\u00fcrsten, Kirchen und ganze Rechtssysteme herausfordern kann. Kaum ein anderer Denker des 18. Jahrhunderts verband pers\u00f6nliche Verletzlichkeit so wirkungsvoll mit \u00f6ffentlicher Wirkmacht.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/sx4", label:"SX4 \u2013 Der Chihuahua: Subtyp-Profil"},
        {route:"beruehmte-freddie-mercury", label:"Portr\u00e4t: Freddie Mercury (SX4w3)"},
        {route:"beruehmte-arthur-rimbaud", label:"Portr\u00e4t: Arthur Rimbaud (SX4w3)"},
        {route:"beruhmte-philosophen", label:"Schaubild: Ber\u00fchmte Philosophen im Enneagramm"},
        {route:"krankheitsportraets-voltaire", label:"Krankheitsportr\u00e4t: Voltaire (SX4w3) \u2013 chronische Verdauungs- und Blasenleiden"},
      ])}
    </div>
  `);
}

function arthurRimbaudPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-arthur-rimbaud-portrait.jpg" alt="Arthur Rimbaud" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Arthur Rimbaud</p>
        <p class="krim-portrait-typ">SX4w3 · Sexueller Typ 4 mit Dreierflügel</p>
        <p class="krim-portrait-subtitle">Französischer Dichter, 1854–1891 – Tierentsprechung: Chihuahua</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Chihuahua aus Charleville</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Chihuahua</strong> ist die kleinste Hunderasse der Welt – und verhält sich wie die größte. Er kennt keine Distanz zwischen dem, was er fühlt, und dem, was er zeigt: Er bellt, wenn ihm etwas nicht passt, und zwar sofort, ungefiltert, ohne Rücksicht auf die Größe des Gegenübers. Jean-Nicolas-Arthur Rimbaud wurde 1854 in Charleville geboren, einer kleinen Provinzstadt in den Ardennen, die er sein Leben lang als geistiges Gefängnis empfand. Sein Vater Frédéric, ein Militäroffizier, war meist auf Truppenposten unterwegs und verließ die Familie schließlich ganz, als Arthur sechs Jahre alt war. Die Mutter, streng und autoritär, führte den Haushalt und die fünf Kinder mit eiserner Disziplin – in Rimbauds frühen Gedichten taucht sie immer wieder als bedrückende, kontrollierende Figur auf.</p>
          <p class="vb-intro">Der Chihuahua, der früh lernte, dass Zuneigung an Bedingungen geknüpft war, entwickelte stattdessen etwas anderes: eine außergewöhnliche schulische Begabung, die ihn schon mit 15 und 16 Jahren bedeutende Gedichte schreiben ließ, und einen ebenso außergewöhnlichen Fluchtinstinkt. Mehrfach lief er von zu Hause fort; als seine Schule während des Deutsch-Französischen Krieges schloss, nutzte er die Gelegenheit und geriet als 16-Jähriger auf sich allein gestellt nach Paris, wo er zeitweise mittellos auf der Straße lebte.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Vier: Konkurrenz als radikaler Bruch mit der Konvention</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Vier (SX4)</strong> trägt den Schmerz der Vier nicht als stille Sehnsucht, sondern als offene Konfrontation – Naranjo nannte diesen Subtyp <em>Konkurrenz</em>, <em>Rivalität</em>, manchmal auch <em>Hass</em>: die Intensität, die sich über das direkte Übertreffen, Provozieren und den radikalen Bruch mit dem Bestehenden definiert, oft mit einer selbstzerstörerischen Note. Kaum ein Dichter verkörperte dieses Muster so kompromisslos wie Rimbaud: Mit gerade einmal 15 bis 20 Jahren wollte er die gesamte französische Dichtung seiner Zeit übertreffen und hinter sich lassen. Sein Anspruch war nicht, mitzuschreiben – er wollte, dass nach ihm nichts mehr so geschrieben werden konnte wie zuvor.</p>
          <p class="vb-intro">Diese Haltung fasste er in der berühmten Formel <em>"il faut être absolument moderne"</em> – "man muss absolut modern sein" – zusammen, die in seinem Prosagedicht <em>Une Saison en Enfer</em> (Eine Zeit in der Hölle, 1873) erscheint. Es ist kein programmatischer Rat, sondern ein Kampfruf: ein Bruch mit allem, was vorher war, als Selbstzweck und Selbstbeweis zugleich. Rimbaud suchte den Skandal bewusst – provokante Auftritte im literarischen Paris, verletzende Bemerkungen gegen etablierte Dichter, ein Auftreten, das absichtlich vor den Kopf stoßen sollte. Die SX4 misst sich nicht an einem inneren Maßstab, sondern im direkten Duell – und Rimbaud führte dieses Duell gegen die gesamte französische Literaturtradition.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierflügel: Der Wille zur sichtbaren Revolution</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierflügel (w3)</strong> gibt der sexuellen Vier den Ehrgeiz, das eigene Feuer nicht nur zu fühlen, sondern es öffentlichkeitswirksam zu inszenieren. Rimbaud wollte nicht im Verborgenen dichten – er wollte gesehen, gelesen, anerkannt werden, und zwar nicht irgendwann, sondern sofort. Mit 16 Jahren schickte er dem etablierten Dichter Paul Verlaine einen Brief samt seinem Gedicht <em>Le Bateau ivre</em> (Das trunkene Schiff) – eine kalkulierte Geste, die genau ihr Ziel erreichte: Verlaine war so beeindruckt, dass er den jungen Rimbaud nach Paris einlud, in sein eigenes Haus.</p>
          <p class="vb-intro">Der Dreierflügel zeigt sich auch darin, wie gezielt Rimbaud sein eigenes Bild formte – als enfant terrible, als Genie, das die Regeln nicht kennt, weil es über ihnen steht. Werke wie <em>Illuminations</em>, eine Sammlung visionärer Prosagedichte, wurden zu Grundtexten der literarischen Moderne, weit über seine eigene Lebenszeit hinaus – Rimbaud rechnete mit Wirkung, auch wenn er die volle Anerkennung selbst nicht mehr erlebte, da vieles erst postum veröffentlicht wurde. Der Ehrgeiz des Dreierflügels braucht ein Publikum, und Rimbaud fand es, indem er es provozierte, statt es zu umwerben.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Beziehung zu Verlaine: Ein Feuer, das sich selbst verzehrte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zwischen 1871 und 1873 führten Rimbaud und Verlaine eine stürmische, öffentlich skandalöse Beziehung, die Verlaines Ehe zerstörte und beide durch Belgien und England trieb. Es war keine ruhige Verbindung: Streit, Eifersucht und Gewalt gehörten ebenso dazu wie intensive gemeinsame kreative Phasen. Im Juli 1873 eskalierte die Beziehung endgültig – ein betrunkener, verzweifelter Verlaine schoss in Brüssel auf Rimbaud und verletzte ihn am Handgelenk. Verlaine wurde daraufhin zu zwei Jahren Haft verurteilt.</p>
          <p class="vb-intro">Diese Beziehung trägt die Handschrift der SX4 in Reinform: Intensität, die keine Grenze kennt, Liebe, die sich nicht von Zerstörung trennen lässt. Die sexuelle Vier sucht nicht die verträgliche Bindung, sondern die Verschmelzung, die alles auf eine Karte setzt – und die genau dadurch zum Auslöser der eigenen größten literarischen Werke wurde. <em>Une Saison en Enfer</em> entstand direkt im Nachhall dieser Katastrophe, als Versuch, das eigene Scheitern in Sprache zu faseln.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX4w3 zeigt sich in Rimbauds Fähigkeit, mit einer Handvoll Gedichte, geschrieben zwischen dem 15. und 20. Lebensjahr, die gesamte Entwicklung der modernen Poesie vorwegzunehmen – Surrealisten, Symbolisten und Existenzialisten beriefen sich später gleichermaßen auf ihn. Kaum ein Dichter hat mit so wenig Lebenszeit als Schreibender eine so große Wirkung erzielt.</p>
          <p class="vb-intro">Der Schatten liegt in derselben Intensität, die keine Ruhe kennt: Rimbauds Beziehungen – zu Verlaine, zu seiner Mutter, zu den literarischen Zirkeln von Paris – waren fast durchweg von Konflikt geprägt. Die SX4 mit starkem Dreierflügel kann Anerkennung suchen und sie im selben Atemzug zerstören, weil die Konkurrenz, die sie antreibt, auch die Nähe vergiftet, die sie sich eigentlich wünscht.</p>
        </blockquote>

        <h2 class="vb-section">6. Der radikale Bruch: Vom Dichter zum Kaufmann</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">1875, im Alter von nur 21 Jahren, hörte Rimbaud abrupt auf zu schreiben. Kein langsames Verstummen, kein allmählicher Rückzug – ein vollständiger, endgültiger Bruch mit der eigenen bisherigen Identität. Er reiste durch Europa, diente kurzzeitig in der niederländischen Kolonialarmee, und ließ sich schließlich als Kaufmann in Aden (Jemen) und in Harar (Äthiopien) nieder, wo er unter anderem mit Kaffee handelte und zeitweise auch Waffen. Die Poesie erwähnte er in seinen Briefen aus Afrika kaum noch – als sei sie ein abgeschlossenes Kapitel, das ihn nichts mehr anging.</p>
          <p class="vb-intro">Dieser Bruch ist selbst ein Ausdruck der SX4w3: Wenn die Konkurrenz mit der alten Rolle erschöpft ist, wird die Rolle vollständig verworfen – nicht modifiziert, nicht weiterentwickelt, sondern radikal hinter sich gelassen, um eine neue, ebenso kompromisslose Identität aufzubauen. 1891 kehrte Rimbaud schwer krank nach Frankreich zurück: Ein Knietumor, vermutlich ein Osteosarkom (ein bösartiger, aggressiv wachsender Knochenkrebs, der meist im Bereich des Knies auftritt), machte die Amputation seines rechten Beins nötig. Wenige Monate später, am 10. November 1891, starb er im Alter von 37 Jahren in Marseille – ein Leben, das binnen weniger Jahre gleich zweimal vollständig neu erfunden wurde.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/sx4", label:"SX4 – Der Chihuahua: Subtyp-Profil"},
        {route:"beruehmte-voltaire", label:"Porträt: Voltaire (SX4w3)"},
        {route:"beruehmte-freddie-mercury", label:"Porträt: Freddie Mercury (SX4w3)"},
      ])}
    </div>
  `);
}

function honoreDeBalzacPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-honore-de-balzac-portrait.jpg" alt="Honoré de Balzac" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Honoré de Balzac</p>
        <p class="krim-portrait-typ">SE4w3 · Selbsterhaltender Typ 4 mit Dreierflügel</p>
        <p class="krim-portrait-subtitle">Französischer Schriftsteller, 1799–1850 – Tierentsprechung: Taube</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Die Taube</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>Taube</strong> trägt Botschaften über weite Strecken und kehrt zurück, selbst durch Sturm – zäh im Kern, auch wenn sie zart wirkt. Sie ist kein Tier der lauten Geste, sondern eines, das sich durch Beharrlichkeit beweist, durch das, was es unbeirrbar von einem Ort zum anderen trägt. Honoré Balssa – erst später nannte er sich Balzac, noch später Honoré de Balzac – wurde 1799 in Tours geboren, Sohn eines Beamten aus einfachen südfranzösischen Verhältnissen, der es unter Ludwig XVI. und Napoleon (SO2w3) zum Verwaltungsbeamten gebracht hatte, und einer deutlich jüngeren Mutter aus einer wohlhabenden Pariser Tuchhändlerfamilie. Die Mutter, die ihre Mutterpflicht eher als Pflicht denn als Zuneigung empfand, gab den Vierjährigen zunächst zu einer Amme, dann, mit acht Jahren, ins Internat von Vendôme, wo er nach eigener späterer Aussage jahrelang kaum Besuch von den Eltern erhielt.</p>
          <p class="vb-intro">Diese frühe Erfahrung von Zurückweisung, still ertragen statt laut beklagt, ist der Boden, auf dem die selbsterhaltende Vier wächst. Die Taube lernte, ihre Sehnsucht nach Zugehörigkeit nicht einzufordern, sondern in eine innere Welt zu verlegen, die niemand ihr nehmen konnte – und die er später, Zeile um Zeile, zu Papier bringen sollte: fast einhundert Romane und Erzählungen, zusammengefasst unter dem Titel <em>La Comédie humaine</em> (Die menschliche Komödie), ein Gesamtwerk von einer Dichte und einem Umfang, wie ihn kaum ein anderer Schriftsteller seiner Zeit erreichte.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Vier: Zähigkeit als Überlebensform</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Vier (SE4)</strong> ist der Kontratyp der Vier: Sie zieht das eigene Leiden nicht in dramatische Selbstdarstellung, sondern hält es aus – allein, in stiller Härte gegen sich selbst. Naranjo nannte diesen Subtyp <em>Zähigkeit</em> (im Original: <em>tenacity</em>) – kein lautes Aufbegehren gegen das Schicksal, sondern ein zähes Weitermachen, das dem eigenen Schmerz keine Bühne gibt. Bei kaum einem Schriftsteller zeigt sich diese Zähigkeit so konkret wie bei Balzac: Um seine drückenden Schulden abzutragen – Folge gescheiterter Geschäftsversuche, etwa einer Druckerei und eines Verlags, sowie eines aufwendigen Lebensstils weit über seine Verhältnisse – schrieb er über Jahrzehnte hinweg nächtelang, oft 15 bis 18 Stunden am Stück.</p>
          <p class="vb-intro">Sein Tagesrhythmus war berüchtigt: ein kurzes Abendessen, ein Nickerlchen bis Mitternacht, dann ununterbrochenes Schreiben bis weit in den Vormittag hinein, angetrieben von gewaltigen Mengen starken schwarzen Kaffees – Dutzende Tassen, die er über die Jahre wortwörtlich seiner Gesundheit abrang. Das war kein Luxusmotiv, kein Streben nach müheloser Anerkennung, sondern reine Überlebensenergie: Die SE4 kämpft ihren Schmerz allein aus, bevor sie ihn zeigt, und bei Balzac hieß dieser Kampf, Schulden mit Sätzen abzutragen, einen nach dem anderen, Nacht für Nacht.</p>
          <p class="vb-intro">Der selbsterhaltende Instinkt richtet die Vier auf die eigene Stabilität – bei Balzac paradox gebrochen: Er lebte in ständiger finanzieller Instabilität, doch die Disziplin, mit der er dagegen anschrieb, war von unerschütterlicher Konsequenz. Kritiker seiner Zeit wie spätere Biografen sind sich einig, dass gerade der Druck der Schulden den ungeheuren Umfang seines Werks mit hervorbrachte – die Zähigkeit der SE4, die aus der Not eine lebenslange Schreibpraxis machte.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierflügel: Das erfundene „de"</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierflügel (w3)</strong> gibt der selbsterhaltenden Vier ein ausgeprägtes Statusbewusstsein – den Wunsch, die eigene innere Welt nicht nur zu bewahren, sondern sichtbar in gesellschaftlichen Rang zu übersetzen. Bei Balzac zeigt sich das denkbar deutlich: Er stammte aus bürgerlichen Verhältnissen, doch schon als junger Mann begann er, seinen Familiennamen Balssa zu Balzac zu verändern und sich schließlich ein Adelsprädikat anzueignen, das ihm nicht zustand – aus Honoré Balzac wurde Honoré de Balzac, ohne jede genealogische Grundlage. Zeitgenossen und spätere Biografen beschreiben ihn geradezu als besessen vom Gedanken an gesellschaftlichen Aufstieg und aristokratischen Glanz.</p>
          <p class="vb-intro">Diese Besessenheit blieb nicht beim Namen: Balzac kleidete sich, wenn seine Mittel es zuließen, extravagant, sammelte Antiquitäten weit über seine finanziellen Möglichkeiten hinaus und pflegte einen Lebensstil, der eher zu einem Adligen als zu einem verschuldeten Schriftsteller passte – genau jene Ausgaben, die seine Schulden immer weiter anwachsen ließen und ihn zugleich zwangen, noch mehr zu schreiben. Der Dreierflügel verwandelt die introvertierte Tiefe der SE4 nicht in Rückzug, sondern in Ambition: Balzac wollte nicht nur innerlich einzigartig sein, er wollte, dass diese Einzigartigkeit gesehen, anerkannt, in gesellschaftlichem Rang bestätigt wurde – und schrieb dafür ein Gesamtwerk, das genau diese Welt aus Aufstieg, Geld und gesellschaftlichem Ehrgeiz in allen Facetten seziert, von <em>Le Père Goriot</em> bis <em>Eugénie Grandet</em>.</p>
        </blockquote>

        <h2 class="vb-section">4. Ewelina Hańska: Die Botschaft, die ihr Ziel fast nicht erreichte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">1832 erhielt Balzac einen anonymen, bewundernden Brief aus dem fernen Osteuropa, unterzeichnet mit „L'Étrangère" – die Fremde. Dahinter verbarg sich Ewelina Hańska, eine polnische Gräfin, verheiratet mit einem deutlich älteren Adligen. Es begann ein Briefwechsel, der siebzehn Jahre andauern sollte – über weite Strecken die einzige Form der Nähe, die die beiden sich erlauben konnten, unterbrochen von seltenen, kurzen Zusammentreffen in ganz Europa. In dieser jahrzehntelangen Fernbeziehung liegt ein Aufblitzen sexuell-instinkttypischer Intensität, eine Verschmelzung über die Distanz hinweg, die die selbsterhaltende Grundausrichtung Balzacs nicht ersetzte, sondern als starke Nebenfarbe begleitete.</p>
          <p class="vb-intro">Als Hańskas Ehemann 1841 starb, hoffte Balzac auf eine baldige Heirat – doch es dauerte weitere neun Jahre, geprägt von Balzacs wachsenden Schulden, seiner sich verschlechternden Gesundheit und den langwierigen rechtlichen und familiären Verwicklungen um Hańskas Vermögen. Erst am 14. März 1850 heirateten die beiden, in der Ukraine, nach siebzehn Jahren Briefwechsel – die Taube, die ihre Botschaft endlich am Ziel abliefern konnte, nachdem sie einen Großteil ihres Lebens dafür gebraucht hatte.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der selbsterhaltenden Vier</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE4w3 liegt in der Fähigkeit, aus einer zutiefst persönlichen, oft schmerzhaften inneren Welt ein Werk zu schaffen, das über die eigene Lebenszeit hinaus wirkt. Balzacs <em>La Comédie humaine</em> – knapp einhundert vollendete Werke, dazu zahlreiche unvollendete Fragmente – gilt bis heute als eines der ambitioniertesten literarischen Projekte überhaupt: der Versuch, die gesamte französische Gesellschaft seiner Zeit in einem einzigen, riesigen, persönlich durchdrungenen Panorama einzufangen.</p>
          <p class="vb-intro">Das Schicksalsmuster der Vier ist der <strong>Neid</strong> – das tiefe Gefühl, dass anderen etwas mitgegeben wurde, das einem selbst fehlt. Bei Balzac äußerte sich das als lebenslanges Ringen um Anerkennung, Status und materielle Sicherheit, die ihm die eigene Herkunft und die frühe familiäre Kälte vorenthalten hatten. Der Dreierflügel verschärfte dieses Ringen: Der erfundene Adelstitel, die kostspieligen Antiquitäten, die geschäftlichen Fehlspekulationen – all das war der Versuch, ein inneres Gefühl des Mangels durch äußeren Glanz zu kompensieren, und trieb ihn zugleich in immer neue Schulden, die wiederum noch mehr Schreibarbeit erforderten.</p>
          <p class="vb-intro">Der Schatten dieser Konstellation zeigte sich am deutlichsten in den letzten Lebensjahren: Jahrzehntelanger Raubbau an der eigenen Gesundheit – exzessiver Kaffeekonsum, chronischer Schlafmangel, Übergewicht und fortschreitende Herzprobleme – forderten ihren Preis. Fünf Monate nach der lang ersehnten Hochzeit mit Hańska starb Balzac am 18. August 1850 in Paris, im Alter von nur 51 Jahren, im Beisein seiner Mutter – jener Frau, deren frühe Zurückweisung einst den Ausgangspunkt seiner lebenslangen Suche nach Anerkennung gebildet hatte.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Heilungsweg: Von der erkämpften Anerkennung zur Selbstannahme</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Vier führt von der Frage <em>Warum fehlt mir, was andere haben?</em> zur Erkenntnis <em>Was ich bin, ist genug – und ist einmalig.</em> Für die SE4w3 bedeutet das, den eigenen Wert nicht länger an äußeren Glanz, an einen erfundenen Titel oder an die nächste vollendete Seite zu knüpfen, sondern die eigene Tiefe als bereits ausreichend anzuerkennen.</p>
          <p class="vb-intro">Balzacs Leben zeigt, wie schwer dieser Schritt fällt, wenn die frühe Zurückweisung nie bewusst verarbeitet wird, sondern nur in immer neue Arbeit, immer neue Schulden, immer neuen äußeren Ehrgeiz umgeleitet wird. Und doch liegt gerade in seinem Spätwerk, in der jahrzehntelangen, geduldigen Verbindung zu Hańska und in der schieren Tiefe seines literarischen Blicks auf die menschliche Natur auch ein Aufblitzen dessen, was die geheilte Vier vermag: die eigene Einzigartigkeit nicht mehr beweisen zu müssen, sondern sie einfach zu leben – und in Balzacs Fall, sie der Nachwelt als eines der größten literarischen Vermächtnisse zu hinterlassen, das die französische Literatur kennt.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      <p class="vb-intro" style="max-width:100%;">
        Die gesundheitlichen Folgen dieses jahrzehntelangen Raubbaus – Koffeinexzess, Schlafmangel,
        Übergewicht und die fortschreitende Herzinsuffizienz, die schließlich zu seinem Tod führte –
        werden im eigenen <a href="javascript:void(0)" data-route="krankheitsportraets-honore-de-balzac">Krankheitsporträt</a>
        ausführlich gedeutet.
      </p>
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se4", label:"SE4 – Die Taube: Subtyp-Profil"},
        {route:"beruehmte-adele", label:"Porträt: Adele (SE4w3)"},
        {route:"beruehmte-lady-diana", label:"Porträt: Lady Diana (SE4w3)"},
        {route:"krankheitsportraets-honore-de-balzac", label:"Krankheitsporträt: Honoré de Balzac (SE4w3) – Herzinsuffizienz"},
      ])}
    </div>
  `);
}

function honoreDeBalzacKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-honore-de-balzac-portrait.jpg" alt="Honoré de Balzac" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Honoré de Balzac</p>
        <p class="krim-portrait-typ">SE4w3 · Selbsterhaltender Typ 4 mit Dreierflügel · 1799–1850</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Taube</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se4.jpg" alt="Tierentsprechung: Taube" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE4")};left:${tierAvatarLeft("SE4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Honoré de Balzac</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-honore-de-balzac">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk, seine Herkunft und seine
        Typstruktur im Allgemeinen. Dieses Porträt widmet sich einem Kapitel, das dort nur gestreift
        wird: dem jahrzehntelangen Raubbau am eigenen Körper durch Arbeitswahn, Koffeinexzess und
        Schlafmangel – und der Herzinsuffizienz mit tödlicher Gangrän, an der Balzac fünf Monate
        nach seiner Hochzeit starb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Balzac</strong> ist dem <strong>selbsterhaltenden Typ 4 mit Dreierflügel</strong>
        zugeordnet. Die SE4 trägt ihr Leiden nicht nach außen, sondern hält es zäh und allein aus –
        bei Balzac hieß das: Schulden mit Sätzen abtragen, Nacht für Nacht, ohne der eigenen
        Erschöpfung nachzugeben. Der Dreierflügel gab dieser Zähigkeit ein Ziel, das über das bloße
        Überleben hinausging – gesellschaftlichen Rang, sichtbaren Erfolg –, und genau dieses Ziel
        ließ ihn die Warnsignale des eigenen Körpers über Jahrzehnte hinweg überhören.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein Tagesrhythmus, der auf Dauer keinen Körper schont:</strong>
        Schon in den 1830er-Jahren, kaum dreißigjährig, hatte sich Balzacs berüchtigter Arbeitsrhythmus
        etabliert: ein kurzes Abendessen, ein Nickerchen bis Mitternacht, dann ununterbrochenes
        Schreiben bis weit in den Vormittag – 15 bis 18 Stunden am Stück, Nacht für Nacht, über
        Jahrzehnte hinweg.</p>
        <p class="vb-intro"><strong>b) Der Kaffee als Motor und als Gift zugleich:</strong>
        Um wach zu bleiben, trank Balzac gewaltige Mengen extrem starken, teils fast ungenießbar
        konzentrierten schwarzen Kaffees – Zeitgenossen und spätere Biografen berichten von Dutzenden
        Tassen an einem einzigen Arbeitstag. Er beschrieb selbst, wie der Kaffee ihn wachhielt, wenn
        der Körper längst hätte schlafen wollen – eine Substanz, die er wortwörtlich seiner
        Gesundheit abrang.</p>
        <p class="vb-intro"><strong>c) Ein Körper, der früh sichtbar aus dem Gleichgewicht geriet:</strong>
        Schon in mittleren Jahren wird Balzac von Zeitgenossen als zunehmend beleibt beschrieben –
        eine Folge des sitzenden Arbeitsstils, der unregelmäßigen, oft hastigen Mahlzeiten und des
        fehlenden Ausgleichs zur nächtlichen Dauerbelastung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Eine über anderthalb Jahrzehnte fortschreitende Herzschwäche:</strong>
        Medizinhistorische Untersuchungen zu Balzacs Krankengeschichte gehen davon aus, dass sich
        bereits gut eineinhalb Jahre vor seinem Tod eine deutliche Verschlechterung abzeichnete –
        mit zunehmender Atemnot, die auf eine fortschreitende Verdickung der Herzkammerwand
        (Ventrikelhypertrophie) zurückgeführt wird, und schweren Wassereinlagerungen in den Beinen.</p>
        <p class="vb-intro"><strong>b) Die Beinödeme und ein riskanter Eingriff:</strong>
        Um die massiven Flüssigkeitsansammlungen in den Beinen zu lindern, ließen Balzacs Ärzte
        wiederholt einen Trokar – ein spitzes chirurgisches Instrument – einsetzen, um die
        angestaute Flüssigkeit abzuleiten. Ohne die späteren Möglichkeiten der Desinfektion und ohne
        Antibiotika drang durch diese wiederholten Einstiche eine Infektion in die offenen Wunden ein.</p>
        <p class="vb-intro"><strong>c) Aus der Infektion wird Gangrän:</strong>
        Diese Infektion entwickelte sich zu einer Gangrän an den Beinen – dem Gewebetod, der
        Balzacs geschwächten Kreislauf in seinen letzten Lebenswochen zusätzlich überforderte und
        letztlich zur Todesursache wurde, gemeinsam mit der zugrundeliegenden Herzinsuffizienz.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Arbeit bis zur physischen Grenze, auch nach ersten Warnzeichen:</strong>
        Selbst als sich die gesundheitlichen Probleme bereits deutlich bemerkbar machten, reduzierte
        Balzac sein Arbeitspensum kaum – die Schulden, die sein Werk erst in diesem Umfang hatten
        entstehen lassen, verlangten weiterhin nach neuen Seiten, neuen Verträgen, neuen Vorschüssen.</p>
        <p class="vb-intro"><strong>b) Ein Leben zwischen Hańska und der Schreibpflicht:</strong>
        In den letzten Jahren vor der Hochzeit mit Ewelina Hańska pendelte Balzac wiederholt
        zwischen Paris und der Ukraine – strapaziöse Reisen, die seinen bereits geschwächten Körper
        zusätzlich belasteten, während er parallel weiterschrieb, um die eigene finanzielle und
        gesellschaftliche Position vor der lang ersehnten Heirat zu sichern.</p>
        <p class="vb-intro"><strong>c) Die Heirat als kurzes Aufatmen:</strong>
        Am 14. März 1850 heiratete Balzac Ewelina Hańska in der Ukraine – nach siebzehn Jahren
        Briefwechsel endlich am Ziel. Doch die Rückreise nach Paris im Frühsommer 1850 war bereits
        von einer sich dramatisch verschlechternden Gesundheit überschattet; von einem Neuanfang mit
        geregeltem Leben, der seinem Körper Erholung verschafft hätte, konnte keine Rede mehr sein.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein rasanter Verfall in den letzten Monaten:</strong>
        In den letzten drei Lebensmonaten verschlechterte sich Balzacs Zustand nach übereinstimmenden
        Quellen dramatisch – zunehmende Atemnot, wachsende Erschöpfung und die fortschreitende
        Gangrän machten ihn zunehmend bettlägerig.</p>
        <p class="vb-intro"><strong>b) Der Besuch Victor Hugos:</strong>
        Victor Hugo, von Balzacs Frau herbeigerufen, besuchte den Sterbenden am 18. August 1850 und
        hielt seine Beobachtungen später schriftlich fest: Balzac habe auf einem Sofa gelegen, sein
        Gesicht dunkel verfärbt, kaum noch fähig, sich zu erheben – nur die Augen hätten noch Leben
        gezeigt. Wenige Stunden später war Balzac tot.</p>
        <p class="vb-intro"><strong>c) Ein Nachruf, der das Ausmaß fasste:</strong>
        Hugo hielt zwei Tage später, am 20. August 1850, die Grabrede und würdigte Balzac als einen
        der größten Schriftsteller seiner Epoche – ein öffentliches Echo, das im deutlichen Kontrast
        zu den letzten, von Schmerz und körperlichem Verfall geprägten Wochen stand.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Zähigkeit, die sich gegen den eigenen Körper richtete:</strong>
        Dieselbe SE4-Zähigkeit, die Balzac befähigte, jahrzehntelang gegen seine Schulden
        anzuschreiben, richtete sich in den letzten Lebensjahren unvermindert gegen die Signale des
        eigenen Körpers – Erschöpfung, Atemnot, Schwellungen wurden nicht als Grund zur Umkehr
        gelesen, sondern als weiteres Hindernis, das es zu überwinden galt.</p>
        <p class="vb-intro"><strong>b) Der Dreierflügel als Verstärker, nicht als Bremse:</strong>
        Statt den Status, den er sich mühsam erschrieben hatte, zu genießen, trieb der
        statusbewusste Dreierflügel Balzac weiter an, noch mehr zu leisten, noch mehr abzusichern –
        auch als der Preis dafür der eigene Körper war.</p>
        <p class="vb-intro"><strong>c) Ein Muster, das sich in der Ehe verschärfte statt löste:</strong>
        In seinen letzten Lebensjahren zeigt sich bei Balzac ein Zug, der über das reine SE4-Muster
        hinausgeht: eine wachsende, fast anklammernde emotionale Abhängigkeit von Hańskas
        Zuwendung und Anerkennung, verstärkt durch die jahrelange Ungewissheit um die Heirat und die
        eigene finanzielle Not. Die Vier bewegt sich unter chronischem Stress entlang ihrer
        Stresslinie zur Zwei – und genau dieses Muster einer bedürftigen, um Nähe und Bestätigung
        ringenden Zuwendung lässt sich in den späten Briefen an Hańska ablesen, ohne dass sich
        Balzacs Kerntyp dadurch verändert hätte.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Parallele im selben Subtyp – Lady Diana (SE4w3):</strong>
        Wie bei <a href="javascript:void(0)" data-route="krankheitsportraets-lady-diana">Lady Diana</a>,
        ebenfalls SE4w3, zeigt sich bei Balzac das für diesen Subtyp typische Muster: Das Leiden
        wird nicht laut nach außen getragen, sondern jahrelang allein und zäh ausgehalten, während
        nach außen unvermindert Leistung – bei Diana öffentliche Fassade, bei Balzac literarische
        Produktivität – gezeigt wird. Bei Diana bricht sich das Leiden Bahn in einer über Jahre
        verschwiegenen Bulimie, bei Balzac in einem über Jahrzehnte fortgesetzten Raubbau am eigenen
        Körper, der niemandem verborgen blieb und dennoch nicht gestoppt wurde – zwei Varianten
        derselben SE4-Grundbewegung: durchhalten, statt aufzugeben.</p>
        <p class="vb-intro"><strong>b) Eine über Jahrzehnte gewachsene Erschöpfung, keine plötzliche Katastrophe:</strong>
        Von den ersten nächtelangen Schreibmarathons in den 1830er-Jahren bis zur Gangrän der
        letzten Lebenswochen zieht sich eine durchgehende Linie stetiger, selbstgewählter
        Überlastung – kein einzelnes Ereignis, sondern ein über zwanzig Jahre wiederholtes Muster.</p>
        <p class="vb-intro"><strong>c) Zwei Symptome, ein gemeinsamer Ursprung:</strong>
        Der exzessive Kaffeekonsum und der chronische Schlafmangel lassen sich als zwei Seiten
        derselben Strategie lesen: den eigenen Körper so lange wie möglich funktionsfähig zu halten,
        um die selbstgesetzte, letztlich nie endende Arbeitspflicht zu erfüllen.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet das Herz?</strong>
        Für eine selbsterhaltende Vier, deren Instinkt eigentlich auf Sicherung des eigenen
        Überlebens gerichtet ist, liegt eine Deutung nahe: Ausgerechnet das Organ, das im
        übertragenen Sinn für Ausdauer, Kraft und das ständige, unbemerkte Weitergeben steht, wurde
        bei Balzac über Jahrzehnte bis zur Erschöpfung beansprucht – während der Dreierflügel dafür
        sorgte, dass diese Erschöpfung nach außen möglichst lange nicht sichtbar wurde. Diese
        Deutung ist eine plausible Interpretation, kein belegter historischer Kausalzusammenhang,
        und wird im <a href="javascript:void(0)" data-route="psychosomatik/herzinsuffizienz">Psychosomatik-Register
        zur Herzinsuffizienz</a> dieses Kompasses ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Vier zwangsläufig zu Herzinsuffizienz
        führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong>
        Was sich an Balzacs Fall zeigen lässt, ist ein Muster, das bei der Neigung, Erschöpfung
        stumm auszuhalten statt ihr nachzugeben, in der Praxis immer wieder auffällt – eine von
        vielen möglichen Erklärungen, kein Urteil.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Balzac kannte sein eigenes Enneagramm-Muster nicht – das Konzept existierte zu seinen
        Lebzeiten in dieser Form noch gar nicht. Die selbsterhaltende Zähigkeit, die ihn befähigte,
        gegen seine Schulden anzuschreiben, kannte für ihn keinen eingebauten Warnmechanismus, der
        ihn rechtzeitig hätte innehalten lassen; im Gegenteil, jedes körperliche Warnsignal wurde in
        genau derselben Logik verarbeitet, mit der er auch finanzielle Rückschläge behandelte: als
        weiteres Hindernis, das man zäh durcharbeitet statt ihm nachzugeben. Wer das eigene
        Erschöpfungsmuster nicht kennt, kann es auch nicht rechtzeitig unterbrechen – bei Balzac
        endete das erst mit dem Tod, fünf Monate nach der Hochzeit, auf die er siebzehn Jahre
        gewartet hatte.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Balzacs</strong> Krankengeschichte zeigt sich die selbsterhaltende Vier mit
        Dreierflügel von ihrer kompromisslosesten Seite: eine Zähigkeit, die ein literarisches
        Jahrhundertwerk hervorbrachte – und dieselbe Zähigkeit, die den eigenen Körper über
        Jahrzehnte hinweg bis zur Erschöpfung forderte, ohne innezuhalten. Die Taube, die
        siebzehn Jahre lang unbeirrt ihre Botschaft trug, erreichte ihr Ziel am 14. März 1850 –
        und starb fünf Monate später, am 18. August 1850, an Herzinsuffizienz und der daraus
        entstandenen Gangrän, im Alter von 51 Jahren.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-honore-de-balzac", label:"Porträt: Honoré de Balzac (SE4w3) – Lebenswerk"},
        {route:"krankheitsportraets-lady-diana", label:"Krankheitsporträt: Lady Diana (SE4w3) – gleicher Subtyp"},
        {route:"krankheitsportraets-t-e-lawrence", label:"Krankheitsporträt: T. E. Lawrence (SE4w3) – gleicher Subtyp"},
        {route:"psychosomatik/herzinsuffizienz", label:"Psychosomatik-Register: Herzinsuffizienz"},
        {route:"subtype/se4", label:"Subtyp-Profil SE4"},
      ])}
    </div>
  `);
}

function tELawrenceKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-t-e-lawrence-portrait.jpg" alt="T. E. Lawrence" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">T. E. Lawrence (Lawrence von Arabien)</p>
        <p class="krim-portrait-typ">SE4w3 · Selbsterhaltender Typ 4 mit Dreierflügel · 1888–1935</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Taube</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se4.jpg" alt="Tierentsprechung: Taube" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE4")};left:${tierAvatarLeft("SE4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>T. E. Lawrence</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-t-e-lawrence">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um den Wüstenkrieg, den selbst mitgeschaffenen
        Weltruhm-Mythos und den Rückzug unter falschem Namen. Dieses Porträt widmet sich einem
        Kapitel, das dort nur gestreift wird: den letzten dreizehn Lebensjahren, geprägt von
        chronischer Depression, Selbsthass und einer bis heute von Biografen als
        posttraumatische Belastungsstörung gedeuteten Nachwirkung der Gefangennahme in Deraa 1917.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Lawrence</strong> ist dem <strong>selbsterhaltenden Typ 4 mit Dreierflügel</strong>
        zugeordnet. Die SE4 trägt ihr Leiden nicht nach außen, sondern hält es zäh und allein aus –
        bei Lawrence hieß das: über die Erfahrung von Deraa öffentlich fast vollständig zu
        schweigen und sie stattdessen in einem einzigen, immer wieder neu geschriebenen
        Buchkapitel zu verarbeiten. Der Dreierflügel, der ihn zuvor zum Mitgestalter des eigenen
        Heldenmythos gemacht hatte, kehrte sich in diesen Jahren um: Statt weiter nach Sichtbarkeit
        zu streben, arbeitete Lawrence fortan aktiv daran, aus dem öffentlichen Bild zu verschwinden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Die Rückkehr aus dem Krieg als Bruch, nicht als Erleichterung:</strong>
        Nach Kriegsende und der Pariser Friedenskonferenz 1919, auf der Lawrence sich vergeblich
        für die arabische Unabhängigkeit einsetzte, zog er sich zunehmend von der Öffentlichkeit
        zurück. Zeitgenossen beschreiben einen sichtbar veränderten Mann – reizbarer, unruhiger,
        unfähig, in der zivilen Nachkriegswelt einen Platz für sich zu finden.</p>
        <p class="vb-intro"><strong>b) Der freiwillige Abstieg 1922:</strong>
        Auf dem Höhepunkt seines Weltruhms gab Lawrence seinen Offiziersrang auf und meldete sich
        unter dem falschen Namen „John Hume Ross" als einfacher Rekrut bei der Royal Air Force –
        niedrigster Dienstgrad, ärmlichste Unterkunft. Für Biografen ist dieser Schritt eines der
        deutlichsten frühen Anzeichen einer tiefen inneren Krise, die er selbst nie öffentlich als
        Krankheit benannte.</p>
        <p class="vb-intro"><strong>c) Der immer wieder neu geschriebene Bericht:</strong>
        Das Manuskript zu „Die sieben Säulen der Weisheit" verlor Lawrence 1919 an einem
        Bahnhof beinahe vollständig, schrieb es aus dem Gedächtnis neu und überarbeitete es in den
        Folgejahren mehrfach grundlegend – ein jahrelanges, zwanghaft wirkendes Ringen um die
        richtige Fassung der eigenen Kriegserfahrung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Dreizehn Jahre anhaltende Depression:</strong>
        Historiker beschreiben Lawrences letzte dreizehn Lebensjahre, von 1922 bis zu seinem Tod
        1935, als durchgehend geprägt von Depression, Selbsthass und Angstzuständen – kein
        vorübergehender Tiefpunkt, sondern ein anhaltender psychischer Zustand.</p>
        <p class="vb-intro"><strong>b) Symptome, die auf eine posttraumatische Belastungsstörung hindeuten:</strong>
        Der Psychiater und Lawrence-Biograf John E. Mack kommt in seiner vielzitierten Studie
        „A Prince of Our Disorder" (1976) zu dem Schluss, dass Lawrences Symptome – gedrückte
        Stimmung, ein zerstörtes Selbstbild, emotionaler Rückzug, erhöhte Verletzlichkeit – dem
        Bild einer schweren, unbehandelten Traumafolgestörung entsprechen, ausgelöst durch die
        Ereignisse von Deraa.</p>
        <p class="vb-intro"><strong>c) Ein öffentliches Schweigen bei gleichzeitiger literarischer Offenlegung:</strong>
        Während Lawrence im persönlichen Umgang kaum über Deraa sprach, widmete er dem Ereignis in
        „Die sieben Säulen der Weisheit" ein eigenes, quälend detailliertes Kapitel – die einzige
        Form, in der er sich der Erfahrung überhaupt näherte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Ein selbst organisiertes Bestrafungsritual:</strong>
        Ab 1923 vereinbarte Lawrence mit einem befreundeten Unteroffizier, John Bruce, in
        unregelmäßigen Abständen ausgepeitscht zu werden – ein Ritual, das er selbst detailliert
        vorgab und über Jahre fortsetzte. Biografen deuten es einhellig als Selbstbestrafung im
        Zusammenhang mit der in Deraa erlittenen Erniedrigung.</p>
        <p class="vb-intro"><strong>b) Der Verzicht auf Einnahmen aus dem eigenen Werk:</strong>
        Die reguläre Ausgabe von „Die sieben Säulen der Weisheit" (1926) sowie die gekürzte
        Fassung „Revolt in the Desert" verkauften sich gut – Lawrence spendete jedoch große Teile
        der Einnahmen wohltätigen Zwecken, statt sie für sich selbst zu nutzen.</p>
        <p class="vb-intro"><strong>c) Der zweite Namenswechsel:</strong>
        Nachdem die Presse ihn 1923 als „John Hume Ross" enttarnt hatte, wechselte Lawrence in den
        Tank Corps, diesmal unter dem Namen „T. E. Shaw" – ein erneuter Versuch, unter einer neuen
        Identität weiter unsichtbar zu bleiben, statt in die Öffentlichkeit zurückzukehren, die ihn
        einst gefeiert hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Rückzug nach Clouds Hill:</strong>
        In seinen letzten Lebensjahren zog sich Lawrence in ein kleines, bewusst einfach
        eingerichtetes Cottage namens Clouds Hill in Dorset zurück – ein Leben in größtmöglicher
        Zurückgezogenheit, weit entfernt vom Weltruhm, den er einst mitgeschaffen hatte.</p>
        <p class="vb-intro"><strong>b) Sichtbar gealtert und von Selbstzweifeln gezeichnet:</strong>
        Zeitgenossen, die Lawrence kurz vor seinem Tod trafen, beschrieben ihn als deutlich
        gealtert, niedergeschlagen und von anhaltenden Selbstzweifeln geplagt – ein auffälliger
        Kontrast zu dem energiegeladenen jungen Offizier der Kriegsjahre.</p>
        <p class="vb-intro"><strong>c) Der Motorradunfall als abruptes Ende:</strong>
        Am 13. Mai 1935 wich Lawrence auf seinem Motorrad zwei Fahrradfahrern auf einer schmalen
        Straße in Dorset aus, stürzte schwer und starb sechs Tage später, am 19. Mai 1935, an den
        Folgen seiner Kopfverletzungen – ohne belegten Zusammenhang mit seinem psychischen Zustand,
        aber am Ende eines Lebens, das von den letzten Kriegsjahren an von innerer Krise geprägt war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Zähigkeit, die sich gegen den eigenen Körper und die eigene Psyche richtete:</strong>
        Dieselbe SE4-Zähigkeit, die Lawrence befähigte, wochenlange Wüstenmärsche und den Verlust
        des eigenen Manuskripts auszuhalten, richtete sich in den Nachkriegsjahren unvermindert
        gegen die eigenen seelischen Wunden – Erschöpfung und Verzweiflung wurden nicht als Grund
        zur Umkehr gelesen, sondern in immer strengere Selbstdisziplin und Selbststrafe übersetzt.</p>
        <p class="vb-intro"><strong>b) Der Dreierflügel in umgekehrter Richtung:</strong>
        Beim jungen Lawrence trieb der Dreierflügel den Aufbau eines glanzvollen öffentlichen
        Bildes an (siehe Berühmte-Persönlichkeiten-Porträt). In den Nachkriegsjahren kehrte sich
        dieselbe Kraft ins Gegenteil: Statt Sichtbarkeit zu suchen, arbeitete Lawrence aktiv an der
        eigenen Unsichtbarkeit – zwei falsche Namen, niedrigste Ränge, der Verzicht auf Tantiemen.
        Der Wunsch, das eigene Bild zu kontrollieren, blieb derselbe; nur das Ziel drehte sich um
        180 Grad, von maximaler Sichtbarkeit zu maximaler Verschwindung.</p>
        <p class="vb-intro"><strong>c) Das Auspeitschen als körperlich gewordene Selbstverurteilung:</strong>
        Das über Jahre fortgesetzte Ritual mit John Bruce lässt sich als direkte körperliche
        Übersetzung des inneren Urteils lesen, das die selbsterhaltende Vier in solchen Krisen über
        sich selbst fällt: nicht genug gewesen zu sein, um Deraa zu verhindern oder unbeschadet zu
        überstehen – und dieses Gefühl in eine buchstäbliche, selbst gewählte Strafe zu übersetzen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Parallele im selben Subtyp – Honoré de Balzac und Lady Diana (SE4w3):</strong>
        Wie bei <a href="javascript:void(0)" data-route="krankheitsportraets-honore-de-balzac">Honoré
        de Balzac</a> und <a href="javascript:void(0)" data-route="krankheitsportraets-lady-diana">Lady
        Diana</a>, beide ebenfalls SE4w3, zeigt sich bei Lawrence das für diesen Subtyp typische
        Muster: Das Leiden wird nicht laut nach außen getragen, sondern über Jahre allein und zäh
        ausgehalten, während nach außen möglichst lange Fassung gewahrt bleibt. Bei Diana bricht
        sich das Leiden Bahn in einer verschwiegenen Bulimie, bei Balzac in fortgesetztem
        körperlichem Raubbau, bei Lawrence in einem selbst organisierten Bestrafungsritual und dem
        Rückzug unter falschem Namen – drei Varianten derselben SE4-Grundbewegung: durchhalten,
        statt aufzugeben oder um Hilfe zu bitten.</p>
        <p class="vb-intro"><strong>b) Eine über Jahre gewachsene Krise, kein einzelner Zusammenbruch:</strong>
        Von der ersten spürbaren Verhaltensänderung 1919 bis zum Motorradunfall 1935 zieht sich
        eine durchgehende Linie – dreizehn Jahre, in denen sich die psychische Belastung nicht
        löste, sondern in immer neue Formen der Selbstkontrolle und Selbststrafe umgeleitet wurde.</p>
        <p class="vb-intro"><strong>c) Zwei Symptome, ein gemeinsamer Ursprung:</strong>
        Das Auspeitschen-Lassen und der zweifache Namenswechsel in niedrigste Militärränge lassen
        sich als zwei Seiten derselben Bewältigungsstrategie lesen: die eigene, in Deraa erlittene
        Ohnmacht im Nachhinein selbst zu kontrollieren, statt sie unverarbeitet stehen zu lassen.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet eine gedrückte, sich selbst verurteilende Stimmung?</strong>
        Für eine selbsterhaltende Vier, die ihr Leiden für gewöhnlich schweigend allein trägt, liegt
        eine Deutung nahe: Ein Ereignis wie Deraa, das die eigene Kontrolle über den Körper und die
        eigene Würde von außen gewaltsam durchbrach, trifft die SE4 in ihrem empfindlichsten Punkt –
        und wird, statt mitgeteilt zu werden, in stille Selbstverurteilung verwandelt. Diese Deutung
        ist eine plausible Interpretation, kein belegter historischer Kausalzusammenhang, und wird
        im <a href="javascript:void(0)" data-route="psychosomatik/depression">Psychosomatik-Register
        zur Depression</a> dieses Kompasses ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Vier zwangsläufig zu einer
        posttraumatischen Depression führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Lawrences Fall zeigen lässt, ist ein Muster, das
        bei der Neigung, seelisches Leiden stumm auszuhalten statt es zu teilen, in der Praxis immer
        wieder auffällt – eine von vielen möglichen Erklärungen, kein Urteil.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Lawrence kannte sein eigenes Enneagramm-Muster nicht – das Konzept existierte zu seinen
        Lebzeiten in dieser Form noch nicht. Die selbsterhaltende Zähigkeit, die ihn befähigte, den
        Wüstenkrieg körperlich zu überstehen und einen Weltruhm-Mythos mitzuerschaffen, kannte für
        ihn keinen eingebauten Warnmechanismus, der ihn nach Deraa rechtzeitig zu professioneller
        Hilfe hätte finden lassen; im Gegenteil, das seelische Trauma wurde in genau derselben
        Logik verarbeitet, mit der er auch körperliche Strapazen im Krieg behandelt hatte: allein
        durchhalten, nicht klagen, keine Schwäche zeigen. Wer das eigene Erschöpfungsmuster nicht
        kennt, kann es auch nicht rechtzeitig unterbrechen – bei Lawrence endete das erst mit
        seinem Tod im Alter von 46 Jahren.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Lawrences</strong> letzten dreizehn Lebensjahren zeigt sich die selbsterhaltende
        Vier mit Dreierflügel von ihrer verletzlichsten Seite: derselbe Mensch, der einen
        Weltruhm-Mythos mitgestaltete, arbeitete danach ebenso entschlossen an der eigenen
        Unsichtbarkeit – zwei falsche Namen, niedrigste Ränge, ein selbst organisiertes
        Bestrafungsritual. Die Taube, die einst Botschaften über die Wüste trug, verstummte in den
        eigenen letzten Jahren fast vollständig – bis sie am 19. Mai 1935, sechs Tage nach einem
        Motorradunfall in Dorset, im Alter von 46 Jahren für immer schwieg.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-t-e-lawrence", label:"Porträt: T. E. Lawrence (SE4w3) – Lebenswerk"},
        {route:"krankheitsportraets-honore-de-balzac", label:"Krankheitsporträt: Honoré de Balzac (SE4w3) – gleicher Subtyp"},
        {route:"krankheitsportraets-lady-diana", label:"Krankheitsporträt: Lady Diana (SE4w3) – gleicher Subtyp"},
        {route:"psychosomatik/depression", label:"Psychosomatik-Register: Depression"},
        {route:"subtype/se4", label:"Subtyp-Profil SE4"},
      ])}
    </div>
  `);
}

function vincentVanGoghKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-vincent-van-gogh-portrait.jpg" alt="Vincent van Gogh" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Vincent van Gogh</p>
        <p class="krim-portrait-typ">SE4w5 · Selbsterhaltender Typ 4 mit Fünferflügel · 1853–1890</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Taube</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se4.jpg" alt="Tierentsprechung: Taube" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE4")};left:${tierAvatarLeft("SE4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Vincent van Gogh</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-vincent-van-gogh">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und sein systematisches
        Selbststudium. Dieses Porträt widmet sich einem Kapitel, das dort nur gestreift wird:
        den wiederkehrenden psychotischen und mutmaßlich epileptischen Krisen der letzten
        beiden Lebensjahre, dem Ohrschnitt 1888 und dem Tod durch eine vermutlich selbst
        beigebrachte Schussverletzung 1890.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Van Gogh</strong> ist dem <strong>selbsterhaltenden Typ 4 mit Fünferflügel</strong>
        zugeordnet. Die SE4 trägt ihr Leiden nicht nach außen, sondern hält es zäh und allein
        aus – bei Van Gogh hieß das: seine Krisen fast nie in Briefen an Theo direkt zu
        benennen, sondern stattdessen über Farbe, Komposition und Bildaufbau zu schreiben,
        selbst wenn er sie unmittelbar nach einem Anfall verfasste. Der Fünferflügel hielt
        selbst inmitten der akuten Krise die analytische Distanz zum eigenen Werk aufrecht –
        Van Gogh malte methodisch weiter, während seine Psyche zunehmend zerbrach.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein Leben, das schon früh keine Mitte fand:</strong>
        Van Goghs Jugend war geprägt von wiederholten beruflichen Brüchen – Kunsthändler,
        Lehrer, Laienprediger – und von einer zunehmenden sozialen Isolation. Schon vor seinem
        Wechsel zur Malerei beschrieben Familienangehörige ihn als schwer zugänglich, zu
        Grübeleien neigend und in Beziehungen häufig scheiternd.</p>
        <p class="vb-intro"><strong>b) Absinth, Terpentin und ein ungesunder Lebensstil:</strong>
        In seinen Pariser und Arles-Jahren konsumierte Van Gogh regelmäßig Absinth und lebte
        über weite Strecken von wenig mehr als Brot, Kaffee und Tabak – ein Lebensstil, der
        seinen ohnehin labilen körperlichen und seelischen Zustand zusätzlich schwächte.</p>
        <p class="vb-intro"><strong>c) Erste dokumentierte Verwirrtheitszustände:</strong>
        Bereits vor dem Ereignis vom Dezember 1888 berichten Zeitgenossen von Phasen
        plötzlicher Verwirrtheit und ungewöhnlichen Verhaltens bei Van Gogh – Vorboten dessen,
        was sich in Arles zur offenen Krise zuspitzen sollte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Der Ohrschnitt als erster offener Zusammenbruch:</strong>
        Nach dem heftigen Streit mit Paul Gauguin am 23. Dezember 1888 schnitt sich Van Gogh
        einen Teil seines linken Ohrs ab. Zeitgenössische Berichte beschreiben massive
        Verwirrtheit und Erinnerungslücken in den Stunden danach – Van Gogh selbst konnte sich
        später an weite Teile des Vorfalls nicht erinnern.</p>
        <p class="vb-intro"><strong>b) Wiederkehrende Krisen in der Heilanstalt:</strong>
        Während seines freiwilligen Aufenthalts in Saint-Paul-de-Mausole bei Saint-Rémy
        (1889–1890) erlitt Van Gogh mehrere weitere schwere Krisen, teils mit Halluzinationen
        und dem Impuls, Farbe zu verschlucken. Sein behandelnder Arzt, Dr. Théophile Peyron,
        diagnostizierte eine Form der Epilepsie – eine der bis heute meistdiskutierten
        historischen Deutungen seines Zustands, neben Hypothesen zu einer bipolaren Störung
        oder einer Borderline-Persönlichkeitsstruktur.</p>
        <p class="vb-intro"><strong>c) Klare Phasen zwischen den Krisen:</strong>
        Bemerkenswert ist, dass Van Gogh zwischen den akuten Episoden meist wieder vollständig
        klar und arbeitsfähig war – in genau diesen Phasen entstanden einige seiner bekanntesten
        Werke, darunter „Sternennacht", direkt aus dem Fenster seines Zimmers in der Anstalt
        gemalt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Die freiwillige Einweisung als stille Konsequenz:</strong>
        Statt sich seiner Krise öffentlich zu stellen oder Hilfe im gewohnten sozialen Umfeld
        zu suchen, wählte Van Gogh den stillen Rückzug in die Anstalt – eine strukturierte,
        selbst gewählte Isolation, die ihm zugleich Sicherheit und die Möglichkeit zum
        Weiterarbeiten gab.</p>
        <p class="vb-intro"><strong>b) Ein fast wissenschaftlicher Tagesablauf trotz Krise:</strong>
        Auch in der Anstalt hielt Van Gogh an einer strengen, selbst auferlegten Arbeitsstruktur
        fest – geregelte Mal-Zeiten, systematische Studien der Umgebung, minutiöse
        Farbentscheidungen, dokumentiert in Briefen an Theo, die bis in die Details technischer
        Fragen reichen.</p>
        <p class="vb-intro"><strong>c) Kein Wort der Klage nach außen:</strong>
        Selbst in den Briefen aus der akuten Krisenzeit dominiert bei Van Gogh die sachliche
        Beschreibung seiner Arbeit – nur selten und meist beiläufig erwähnt er die eigene
        Erschöpfung oder Angst, nie in dramatischer oder anklagender Form.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Der Umzug nach Auvers-sur-Oise:</strong>
        Im Mai 1890 verließ Van Gogh die Anstalt und zog nach Auvers-sur-Oise, in die Nähe des
        homöopathisch interessierten Arztes Dr. Paul Gachet, der sich um psychisch labile
        Künstler kümmerte. In den letzten zehn Wochen seines Lebens entstanden dort mehr als
        siebzig Gemälde – eine der produktivsten Phasen seines gesamten Lebenswerks.</p>
        <p class="vb-intro"><strong>b) Der 27. Juli 1890:</strong>
        Van Gogh erlitt in der Nähe eines Weizenfelds eine Schussverletzung in der Brust und
        schleppte sich zurück in sein Gasthauszimmer. Die genauen Umstände sind bis heute nicht
        vollständig geklärt, gelten in der Forschung aber überwiegend als Selbstbeibringung.</p>
        <p class="vb-intro"><strong>c) Zwei Tage bis zum Tod:</strong>
        Theo eilte an Vincents Bett, wo dieser am 29. Juli 1890 im Alter von 37 Jahren starb.
        Berichten zufolge sollen seine letzten Worte gewesen sein: „Die Traurigkeit wird ewig
        andauern" – ein letzter, stiller Satz über einen Zustand, den er zeitlebens kaum je laut
        ausgesprochen hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Zähigkeit, die sich zunehmend gegen den eigenen Körper richtete:</strong>
        Dieselbe SE4-Zähigkeit, die Van Gogh befähigte, jahrelange Armut und öffentliche
        Nichtbeachtung unbeirrt zu ertragen, richtete sich in den Krisenjahren zunehmend gegen
        ihn selbst – vom Ohrschnitt bis zur mutmaßlich selbst beigebrachten Schussverletzung.</p>
        <p class="vb-intro"><strong>b) Der Fünferflügel als Gegenkraft, nicht als Schutz:</strong>
        Wie bei Nikola Tesla (ebenfalls SE4w5) hielt der analytische Fünferflügel auch bei Van
        Gogh selbst in tiefster Krise ein systematisches, fast wissenschaftliches Arbeiten
        aufrecht – ein Werk wie „Sternennacht" entstand mitten in einer der schwersten Phasen
        seines Lebens. Der Fünferflügel schützte jedoch nicht vor der Krise selbst, sondern gab
        ihr lediglich eine geordnete, kanalisierte Form nach außen.</p>
        <p class="vb-intro"><strong>c) Die Farbe als einzige zugelassene Sprache des Leidens:</strong>
        Während Van Gogh seine innere Not im persönlichen Austausch fast vollständig
        verschwieg, lässt sie sich in der zunehmend aufgewühlten, wirbelnden Bildsprache seiner
        letzten Lebensmonate deutlich ablesen – das Leiden fand seinen einzigen Ausdruck dort,
        wo die selbsterhaltende Vier ihn erlaubte: im Werk, nicht im Wort.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Parallele im selben Subtyp – Nikola Tesla (SE4w5):</strong>
        Wie bei <a href="javascript:void(0)" data-route="krankheitsportraets-nikola-tesla">Nikola
        Tesla</a>, ebenfalls SE4w5, zeigt sich bei Van Gogh das für diesen Subtyp typische
        Zusammenspiel: eine fortschreitende psychische Belastung, die kaum je offen
        angesprochen wird, während der Fünferflügel parallel dazu ein hochgradig systematisches,
        analytisches Schaffen aufrechterhält. Bei Tesla war es eine fortschreitende
        Zwangsstörung neben bahnbrechenden Erfindungen, bei Van Gogh psychotische Krisen neben
        methodisch durchdachter Malerei – zwei Varianten derselben SE4w5-Grundbewegung: das
        Leiden wird stumm ertragen, während die geistige Systemarbeit ungebrochen weiterläuft.</p>
        <p class="vb-intro"><strong>b) Eine über Jahre gewachsene Krise, kein plötzlicher Einbruch:</strong>
        Von den ersten Anzeichen sozialer Isolation in den 1870er-Jahren bis zum Tod 1890 zieht
        sich eine durchgehende Linie zunehmender psychischer Instabilität – keine einzelne
        Katastrophe, sondern ein über rund fünfzehn Jahre gewachsenes Muster.</p>
        <p class="vb-intro"><strong>c) Zwei Symptome, ein gemeinsamer Ursprung:</strong>
        Der Ohrschnitt 1888 und die tödliche Schussverletzung 1890 lassen sich als zwei
        Ausprägungen derselben Grundbewegung lesen: In akuten Krisen richtete sich Van Goghs
        sonst nach innen gewandtes Leiden abrupt und körperlich gegen ihn selbst.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet wiederkehrende Anfälle und Psychosen?</strong>
        Für eine selbsterhaltende Vier, die ihr Leiden für gewöhnlich in stille, kontrollierte
        Bahnen lenkt, liegt eine Deutung nahe: Wenn die eigene Kontrolle über den Verstand
        selbst zeitweise zusammenbricht, trifft das die SE4 in ihrem verletzlichsten Punkt – der
        Fähigkeit, das eigene innere Erleben geordnet zu verarbeiten. Diese Deutung ist eine
        plausible Interpretation, kein belegter historischer Kausalzusammenhang, und wird im
        <a href="javascript:void(0)" data-route="psychosomatik/epilepsie">Psychosomatik-Register
        zur Epilepsie</a> dieses Kompasses ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Vier zwangsläufig zu
        wiederkehrenden psychotischen Krisen führt – <strong>jeder Mensch kann jede Krankheit
        bekommen, unabhängig vom Subtyp.</strong> Was sich an Van Goghs Fall zeigen lässt, ist
        ein Muster, das bei der Neigung, seelisches Leiden allein und schweigend zu verarbeiten,
        in der Praxis immer wieder auffällt – eine von vielen möglichen Erklärungen, kein
        Urteil.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Van Gogh kannte sein eigenes Enneagramm-Muster nicht – das Konzept existierte zu seinen
        Lebzeiten in dieser Form noch nicht. Die selbsterhaltende Zähigkeit, die ihn befähigte,
        Armut und öffentliche Ablehnung jahrelang zu ertragen, kannte für ihn keinen
        eingebauten Warnmechanismus, der ihn rechtzeitig zu dauerhafter Hilfe hätte finden
        lassen; im Gegenteil, jede Krise wurde in genau derselben Logik verarbeitet, mit der er
        auch materielle Not behandelte: allein durchhalten, weiterarbeiten, nicht klagen. Wer
        das eigene Erschöpfungsmuster nicht kennt, kann es auch nicht rechtzeitig unterbrechen –
        bei Van Gogh endete das erst mit seinem Tod im Alter von 37 Jahren.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Van Goghs</strong> letzten beiden Lebensjahren zeigt sich die selbsterhaltende
        Vier mit Fünferflügel in ihrer eindrücklichsten Form: eine Psyche, die zunehmend
        zerbrach, während derselbe Mensch mit unveränderter analytischer Genauigkeit
        weitermalte – bis kurz vor seinem Tod entstanden noch Werke von methodischer Klarheit.
        Die Taube, die ihr Leiden zeitlebens kaum in Worte fasste, sprach es stattdessen in
        Farbe – bis sie am 29. Juli 1890, zwei Tage nach der Schussverletzung, im Alter von 37
        Jahren für immer verstummte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-vincent-van-gogh", label:"Porträt: Vincent van Gogh (SE4w5) – Lebenswerk"},
        {route:"krankheitsportraets-nikola-tesla", label:"Krankheitsporträt: Nikola Tesla (SE4w5) – gleicher Subtyp"},
        {route:"psychosomatik/epilepsie", label:"Psychosomatik-Register: Epilepsie"},
        {route:"subtype/se4", label:"Subtyp-Profil SE4"},
      ])}
    </div>
  `);
}

function rihannaPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\xfchmte Pers\xf6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-rihanna-portrait.jpg" alt="Rihanna" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Rihanna</p>
        <p class="krim-portrait-typ">SX4w3 &middot; Sexueller Typ 4 mit Dreierfl\xfcgel</p>
        <p class="krim-portrait-subtitle">S\xe4ngerin, Unternehmerin, geb. 1988, Barbados &ndash; Tierentsprechung: Chihuahua</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Chihuahua aus Barbados</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Chihuahua</strong> ist die kleinste Hunderasse der Welt &ndash; und das Tier, das am wenigsten beeindruckt davon ist. Er bellt, wenn er will. Er stellt sich hin, wenn er will. Er l\xe4sst sich nicht einsch\xfcchtern durch Gr\xf6\xdfe, durch Lautst\xe4rke, durch Erwartung. Hinter dieser Keckheit steckt aber kein blo\xdfes Auftrumpfen &ndash; sondern ein Wesen von tiefer Empfindlichkeit, das gelernt hat, sich zu sch\xfctzen, indem es sich nichts anmerken l\xe4sst. Der Chihuahua liebt intensiv, leiden leidenschaftlich und h\xe4lt sich an dem fest, dem er vertraut.</p>
          <p class="vb-intro">Die barbadische Sängerin Robyn Rihanna Fenty kommt aus Bridgetown, Barbados &ndash; einer kleinen karibischen Insel, die die Welt kaum auf dem Schirm hatte, als ein 15-j\xe4hriges M\xe4dchen vor einem amerikanischen Musikproduzenten vorsang. Was folgte, ist einer der bemerkenswertesten Aufstiege in der Geschichte der Popmusik: vom Kind aus dem Karibik zur globalsten Entertainerin ihrer Generation, zur Unternehmerin, die eine Milliarden-Industrie aufgebaut hat &ndash; und dabei nie aufgeh\xf6rt hat, sie selbst zu sein. Das ist der Chihuahua: klein, woher er kommt. Unaufhaltsam, wohin er geht.</p>
          <p class="vb-intro">Rihannas Kindheit war kein Idyll. Ihr Vater k\xe4mpfte mit Alkohol- und Drogenabh\xe4ngigkeit, die Eltern trennten sich, als sie elf Jahre alt war. Die Gro\xdfst\xe4dte der Welt &ndash; New York, Los Angeles, London &ndash; waren ihr damals so fern wie ein anderer Planet. Was sie hatte, war eine Stimme, ein Wille und die Bereitschaft, alles daf\xfcr zu tun. Das ist nicht Gl\xfcck. Das ist der Stoff, aus dem die sexuelle Vier gemacht ist.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Vier: Rivalit\xe4t als Lebensprinzip</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Vier (SX4)</strong> ist in der Enneagramm-Tradition der Subtyp, der den Schmerz der Vier nicht nach innen tr\xe4gt, sondern nach au\xdfen wendet &ndash; als Intensit\xe4t, als Verlangen, als Feuer. Naranjo nannte diesen Subtyp <em>Rivalit\xe4t</em>: die brennende \xdcberzeugung, dass andere haben, was einem selbst vorenthalten wurde &ndash; und der Antrieb, sie zu \xfcbertreffen, zu \xfcberbieten, zu \xfcberstrahlen. Das ist kein niedriger Neid. Es ist der Motor eines Menschen, der seine eigene Tiefe sp\xfcrt und wei\xdf: Ich verdiene mehr als das, was man mir zugedacht hat.</p>
          <p class="vb-intro">Diese Energie ist \xfcberall in Rihannas Werk sp\xfcrbar. <em>Umbrella</em> ist keine einfache Hymne &ndash; es ist ein Versprechen von radikaler Loyalit\xe4t unter Bedingungen, die andere davonlaufen lassen. <em>We Found Love</em> feiert das Gef\xfchl, das so gro\xdf ist, dass es fast wehtut. <em>Diamonds</em> spricht von einer Sehnsucht, die sich nicht kleinmachen l\xe4sst. Und <em>Stay</em> &ndash; einer der pers\xf6nlichsten Songs ihres Katalogs &ndash; zeigt eine Frau, die sich in etwas Zerst\xf6rerisches verlieben kann und das wei\xdf und trotzdem bleibt: das Paradox der SX4, das zwischen Verlangen und Vernunft zerrieben wird und dennoch nicht aufgibt.</p>
          <p class="vb-intro">Das Kapitel um Chris Brown (2009) ist nicht zu umgehen, wenn man Rihanna verstehen will. Chris Brown war damals &ndash; wie Rihanna &ndash; ein junger R&amp;B-Star, die beiden f\xfchrten seit 2008 eine \xf6ffentliche Beziehung. In der Nacht vor der Grammy-Verleihung 2009 griff er sie in einem Auto k\xf6rperlich an und verletzte sie schwer. Der Vorfall wurde angezeigt, Brown bekannte sich schuldig &ndash; und das Bild von Rihannas Verletzungen, das an die Presse gelangte, ging um die Welt. Sie war 21 Jahre alt.</p>
          <p class="vb-intro">Die SX4 tr\xe4gt ihre Wunden nicht versteckt wie die SE4 &ndash; sie wird sichtbar damit konfrontiert, ob sie will oder nicht. Rihanna hat sich danach nicht weggeduckt. Sie hat sich neu aufgebaut &ndash; mit Wut, mit Schmerz, mit dem Album <em>Rated R</em>, das klingt wie eine Klinge: dunkel, kantig, unverf\u00e4lscht. Das ist SX4: der Schmerz wird nicht begraben. Er wird zu Kunst.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierfl\xfcgel: Aus Gef\xfchl wird Marke</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierfl\xfcgel (w3)</strong> gibt der sexuellen Vier etwas Entscheidendes: die F\xe4higkeit, das eigene Erleben nicht nur zu empfinden, sondern zu gestalten &ndash; und in Wirkung zu verwandeln. Wo eine SX4 mit schwächerem Dreierflügel im Feuer der eigenen Emotionen versinken könnte, bringt ein stark ausgeprägter Dreierflügel Ambition, Handwerk und ein feines Gesp\xfcr daf\xfcr, was wirkt. Diese Kombination macht aus intensivem Erleben eine Karriere &ndash; und aus einer Karriere ein Imperium.</p>
          <p class="vb-intro">Der w3 ist in Rihannas gesamter \xe4sthetischer Entwicklung sp\xfcrbar: die pr\xe4zise Kalkulation des Images, das sich mit jedem Album ver\xe4ndert hat. Von der s\xfc\xdfen karibischen Pop-Newcomerin \xfcber die aufgew\xfchlte, dunkle Energie von <em>Rated R</em> bis hin zur unbek\xfcmmerten Sinnlichkeit von <em>Loud</em> und schlie\xdflich zur reifen, eigenst\xe4ndigen Meisterschaft von <em>Anti</em> &ndash; jede Phase war eine bewusste Neuerfindung. Die SX4 f\xfchlt sich echt. Der w3 sorgt daf\xfcr, dass das Echte auch ankommt.</p>
          <p class="vb-intro">Besonders deutlich wird das in <em>Anti</em> (2016), Rihannas siebtem und bislang letztem Studioalbum. Es ist das erste, das vollst\xe4ndig ihre eigene Vision tr\xe4gt: kein Formatradio-Kompromiss, keine vorhersehbare Single-Struktur. <em>Anti</em> klingt wie jemand, der aufgeh\xf6rt hat, um Erlaubnis zu fragen. Das ist das Beste, was der Dreierfl\xfcgel der SX4 geben kann: die Werkzeuge, um das Innerste in eine Form zu bringen, die niemand ignorieren kann.</p>
        </blockquote>

        <h2 class="vb-section">4. Fenty Beauty und die Revolution der Sch\xf6nheit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">2017 ver\xe4nderte Rihanna die Kosmetikindustrie mit einem einzigen Produktlaunch: <strong>Fenty Beauty</strong> &ndash; 40 Foundation-T\xf6ne, von Elfenbein bis zum tiefsten Dunkelbraun. Was selbstverst\xe4ndlich klingt, war es nicht: Die Branche hatte Jahrzehnte lang dunklere Hauttinten als Nischenprodukt behandelt oder ignoriert. Rihanna hat das nicht als Marketingstrategie formuliert. Sie hat es als Selbstverst\xe4ndlichkeit behandelt &ndash; und damit die Unverst\xe4ndlichkeit der Industrie blo\xdfgestellt.</p>
          <p class="vb-intro">Diese Geste zeigt zutiefst das Muster der SX4w3: Die SX4 wei\xdf aus eigener Erfahrung, was es bedeutet, nicht gesehen zu werden. Die SX4 aus Barbados, die auf Schritt und Tritt mit einem Sch\xf6nheitsideal konfrontiert war, das nicht ihr Gesicht abbildete, hat diese Erfahrung nicht vergessen &ndash; sie hat sie in ein Gesch\xe4ftsmodell verwandelt. Und der Dreierfl\xfcgel hat daf\xfcr gesorgt, dass dieses Modell so pr\xe4zise und konsequent ausgef\xfchrt wurde, dass die Konkurrenz innerhalb weniger Monate nachziehen musste.</p>
          <p class="vb-intro">Savage X Fenty, ihre Dessous-Linie, f\xfchrte denselben Gedanken weiter: alle K\xf6rperformen, alle Hautfarben, alle Gr\xf6\xdfen als Norm &ndash; nicht als Ausnahme. Das ist nicht nur wohlgemeint. Das ist Vision. Und ihre kurzlebige, aber historisch bedeutsame Modemarke Fenty bei LVMH (erstes neues Modehaus des Konzerns seit Christian Lacroix 1987) zeigte, dass Rihanna nicht in Kategorien denkt &ndash; sie denkt in Ebenen.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten: Das Feuer, das tr\xe4gt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Schicksalsmuster der Vier ist der <strong>Neid</strong> &ndash; nicht als Missgunst, sondern als das tiefe Gef\xfchl, dass andere eine Vollst\xe4ndigkeit besitzen, die einem selbst fehlt. Bei der SX4 tr\xe4gt dieser Neid ein pers\xf6nlicheres, sch\xe4rferes Gesicht: <em>Du hast, was mir vorenthalten wurde &ndash; und ich werde dich \xfcbertreffen.</em> Dieser Antrieb hat Rihanna weit gebracht. Aber er hat auch seinen Preis.</p>
          <p class="vb-intro">Die Jahre zwischen <em>Anti</em> (2016) und dem Super-Bowl-Auftritt (2023) waren sieben Jahre Stille als Musikerin &ndash; sieben Jahre, in denen Rihanna Kinder gebar, Unternehmen f\xfchrte und offenbar nicht das Bed\xfcrfnis hatte, f\xfcr die Musik zur\xfcckzukehren, bis die Bedingungen ihre eigenen waren. Als sie beim Super Bowl LVII auftrat &ndash; sichtbar schwanger, nach sieben Jahren Pause, allein auf einer schwebenden Plattform, ein halbes Dutzend riesiger Screens, kein Gaststar &ndash; war das eine Erkl\xe4rung ohne Worte: <em>Ich brauche keine Erlaubnis. Ich erscheine, wenn ich bereit bin.</em></p>
          <p class="vb-intro">Das Licht der SX4w3 liegt in dieser F\xe4higkeit zur vollst\xe4ndigen Selbstbestimmung &ndash; auch um den Preis des Unverst\xe4ndnisses. Der Schatten liegt in der Gefahr, das Feuer nach innen zu wenden: wenn die Rivalit\xe4t sich gegen einen selbst richtet, wenn der Anspruch \xfcberw\xe4ltigt, wenn die Intensit\xe4t keine Richtung mehr hat. Rihanna hat beides gekannt. Und sie ist, bisher, jedes Mal zur\xfcckgekommen.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Chihuahua, der sich selbst geh\xf6rt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Vier f\xfchrt von der Frage <em>Warum bin ich nicht wie die anderen?</em> zur Erkenntnis <em>Das, was ich bin, ist einmalig &ndash; und es ist meins.</em> F\xfcr die SX4w3 bedeutet das, die Rivalit\xe4t nicht aufzugeben, sondern sie zu l\xe4utern: nicht mehr k\xe4mpfen, weil man sich beweisen muss, sondern gestalten, weil man etwas zu sagen hat. Diese Verschiebung ist leise &ndash; aber sie ver\xe4ndert alles.</p>
          <p class="vb-intro">In Rihannas Biografie l\xe4sst sich dieser Weg ahnen. Die fr\xfche S\xe4ngerin hat K\xe4mpfe ausgefochten &ndash; mit der Industrie, mit der \xd6ffentlichkeit, mit den Erwartungen, die an sie herangetragen wurden. Die sp\xe4tere Rihanna hat aufgeh\xf6rt zu k\xe4mpfen und angefangen zu gestalten. Fenty Beauty ist kein Kampf gegen die Sch\xf6nheitsindustrie &ndash; es ist ein Entwurf, wie Sch\xf6nheit sein k\xf6nnte. <em>Anti</em> ist kein Protest gegen das Formatradio &ndash; es ist ein Vorschlag, was Musik sein k\xf6nnte, wenn man aufh\xf6rt, um Erlaubnis zu fragen.</p>
          <p class="vb-intro">Der Chihuahua aus Bridgetown hat die Welt nicht durch Gr\xf6\xdfe erobert. Er hat sie durch Intensit\xe4t ver\xe4ndert &ndash; durch die Weigerung, kleiner zu sein, als er ist, und durch die Bereitschaft, genau das zu zeigen, was die meisten verbergen w\xfcrden. Was bleibt, ist eine Stimme, ein Gesicht und eine Haltung, die man nicht vergisst. Das ist die sexuelle Vier mit Dreierfl\xfcgel. Das ist Rihanna.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\xfchmten Pers\xf6nlichkeiten"},
        {route:"subtype/sx4", label:"SX4 \u2013 Der Chihuahua: Subtyp-Profil"},
        {route:"beruehmte-freddie-mercury", label:"Portr\xe4t: Freddie Mercury (SX4w3)"},
        {route:"beruehmte-billie-eilish", label:"Portr\xe4t: Billie Eilish (SX4w3)"},
      ])}
    </div>
  `);
}

function billieEilishPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-billie-eilish-portrait.jpg" alt="Billie Eilish" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Billie Eilish</p>
        <p class="krim-portrait-typ">SX4w3 &middot; Sexueller Typ 4 mit Dreierfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">S\u00e4ngerin &amp; Songwriterin, geb. 2001 &ndash; Tierentsprechung: Chihuahua</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Chihuahua aus Highland Park</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Chihuahua</strong> ist die kleinste Hunderasse der Welt &ndash; und das Tier, das am wenigsten beeindruckt davon ist. Er zittert nicht aus Schw\u00e4che, sondern aus Wachheit: jede Faser seines kleinen K\u00f6rpers ist auf Intensit\u00e4t ausgerichtet. Er liebt heftig, misstraut schnell und l\u00e4sst sich nicht einsch\u00fcchtern, obwohl er verletzlich ist &ndash; oder gerade deswegen.</p>
          <p class="vb-intro">Die US-amerikanische Sängerin Billie Eilish Pirate Baird O&#39;Connell wurde 2001 in Los Angeles geboren und wuchs in einem kleinen Haus in Highland Park auf, in einer Familie aus Musikern und Schauspielern, wurde zu Hause unterrichtet und schrieb bereits als Kind Songs mit ihrem \u00e4lteren Bruder Finneas. Mit vierzehn lud sie den Song <em>Ocean Eyes</em> auf SoundCloud hoch &ndash; urspr\u00fcnglich f\u00fcr ihre Tanzlehrerin gedacht &ndash; und wurde \u00fcber Nacht zum viralen Ph\u00e4nomen. Der Chihuahua, der aus einem kleinen Zimmer heraus die ganze Welt erreichte, ohne dabei lauter zu werden als er sein musste.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Vier: Intensit\u00e4t ohne Filter</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Vier (SX4)</strong> tr\u00e4gt den Schmerz der Vier nach au\u00dfen &ndash; als Verlangen, als Feuer, als schonungslose Offenheit. Naranjo nannte diesen Subtyp <em>Rivalit\u00e4t</em>: die brennende \u00dcberzeugung, dass andere haben, was einem selbst vorenthalten wurde, verbunden mit dem Drang, sich radikal von der Norm abzuheben, statt sich ihr anzupassen. Kein anderer Subtyp lebt die Leidenschaft der Vier so direkt, so ungefiltert, so nah auf der eigenen Haut wie die SX4.</p>
          <p class="vb-intro">Bei Eilish zeigt sich das in der kompromisslosen Ehrlichkeit ihrer Texte: Depression, Suizidgedanken, K\u00f6rperbild, Beziehungen, die zerbrechen &ndash; nichts wird besch\u00f6nigt. Ihr Deb\u00fctalbum <em>When We All Fall Asleep, Where Do We Go?</em> (2019), fast vollst\u00e4ndig im Schlafzimmer ihres Elternhauses mit Finneas produziert, fl\u00fcstert seine dunkelsten Momente, statt sie zu schreien &ndash; und genau darin liegt die Intensit\u00e4t der SX4: nicht in der Lautst\u00e4rke, sondern in der Unausweichlichkeit des Gef\u00fchlten.</p>
          <p class="vb-intro">Von Beginn an verweigerte sich Eilish der Sexualisierung, die junge Pops\u00e4ngerinnen \u00fcblicherweise widerf\u00e4hrt: weite, \u00fcbergro\u00dfe Kleidung, die den K\u00f6rper verbirgt, aus dem erkl\u00e4rten Wunsch heraus, nicht auf ihr \u00c4u\u00dferes reduziert zu werden. Das ist typisch SX4 &ndash; die Weigerung, sich in eine fremde Erwartung zu zw\u00e4ngen, selbst wenn die ganze Industrie etwas anderes verlangt.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierfl\u00fcgel: Aus Gef\u00fchl wird Weltkarriere</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierfl\u00fcgel (w3)</strong> gibt der sexuellen Vier die F\u00e4higkeit, das eigene Erleben nicht nur zu f\u00fchlen, sondern in Wirkung zu \u00fcbersetzen. Wo eine SX4 mit schwächerem Dreierflügel im eigenen Feuer verglühen könnte, bringt ein stark ausgeprägter Dreierflügel Ambition, ein Gesp\u00fcr f\u00fcr B\u00fchne und Bild und die Disziplin, aus einem SoundCloud-Upload eine globale Karriere zu machen.</p>
          <p class="vb-intro">Bei Eilish zeigt sich das in der Pr\u00e4zision, mit der Bild, Sound und Auftritt aufeinander abgestimmt sind &ndash; von der gr\u00fcn-schwarzen Haarfarbe \u00fcber die riesigen, \u00e4sthetisch komponierten Musikvideos bis zur bewussten Neuerfindung ihres Looks auf dem Vogue-Cover 2021. Der w3 sorgt daf\u00fcr, dass die rohe Ehrlichkeit der SX4 nicht im Privaten verhallt, sondern eine ganze Generation erreicht.</p>
          <p class="vb-intro">2020 gewann Eilish bei den Grammy Awards alle vier gro\u00dfen Hauptkategorien &ndash; Album, Song und Aufnahme des Jahres sowie Bester Newcomer &ndash; im selben Jahr, mit achtzehn Jahren als j\u00fcngste K\u00fcnstlerin \u00fcberhaupt. Das ist der Dreierfl\u00fcgel unverfälscht: das Feuer der SX4 wird nicht nur gef\u00fchlt, sondern in einen Erfolg \u00fcbersetzt, den niemand ignorieren kann.</p>
        </blockquote>

        <h2 class="vb-section">4. What Was I Made For?: Die Wunde wird zum Oscar</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">2023 schrieb Eilish gemeinsam mit Finneas den Song <em>What Was I Made For?</em> f\u00fcr den Film <em>Barbie</em> &ndash; eine leise, fast zerbrechliche Ballade \u00fcber Identit\u00e4t, Erwartung und die Frage, wer man ist, wenn man aufh\u00f6rt, f\u00fcr andere zu funktionieren. Der Song wurde mit dem Oscar f\u00fcr den besten Filmsong ausgezeichnet &ndash; Eilishs zweiter Oscar nach <em>No Time to Die</em> (2022), mit gerade einmal 21 Jahren.</p>
          <p class="vb-intro">Dass ausgerechnet dieser leise, verletzliche Song zum gr\u00f6\u00dften Triumph wurde, ist der reine Ausdruck einer SX4w3: Das ungesch\u00f6nte Gef\u00fchl &ndash; die Frage nach dem eigenen Sinn, gestellt ohne jede Pose &ndash; wird durch den Dreierfl\u00fcgel so pr\u00e4zise und wirkungsvoll in Form gebracht, dass es Millionen Menschen ber\u00fchrt, statt im Privaten zu bleiben.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten: Das Feuer, das nicht l\u00fcgt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX4w3 liegt in ihrer F\u00e4higkeit, das eigene, oft schmerzhafte Innenleben ohne Besch\u00f6nigung zu zeigen &ndash; und darin gerade Millionen junger Menschen eine Sprache f\u00fcr das eigene Erleben zu geben. Eilishs Offenheit \u00fcber Depression, K\u00f6rperbild und das Gef\u00fchl, nie ganz dazuzugeh\u00f6ren, hat der Popmusik eine Ehrlichkeit zur\u00fcckgegeben, die selten geworden war.</p>
          <p class="vb-intro">Das Schicksalsmuster der Vier ist der <strong>Neid</strong> &ndash; bei der SX4 als Rivalit\u00e4t, als das Gef\u00fchl, dass andere haben, was einem selbst verwehrt bleibt. Bei Eilish \u00e4u\u00dferte sich das fr\u00fch in einem angespannten Verh\u00e4ltnis zum eigenen K\u00f6rper und zur \u00f6ffentlichen Aufmerksamkeit, die sie nie gesucht, aber mit vierzehn Jahren erhalten hatte. Der Schatten der sexuellen Vier liegt darin, die eigene Intensit\u00e4t so sehr zum Zentrum zu machen, dass sie ersch\u00f6pft, statt zu tragen.</p>
          <p class="vb-intro">Der Dreierfl\u00fcgel bringt die Gefahr, das echte Gef\u00fchl der \u00f6ffentlichen Wirkung unterzuordnen &ndash; das Bild wichtiger zu nehmen als das, was dahinterliegt. Eilish hat diese Spannung immer wieder offen benannt: den Wunsch, gesehen zu werden, und gleichzeitig die Angst davor, auf ein Bild reduziert zu werden.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Chihuahua, der sich selbst treu bleibt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Vier f\u00fchrt von der Frage <em>Warum bin ich nicht wie die anderen?</em> zur Erkenntnis <em>Das, was ich f\u00fchle, ist wahr &ndash; und es ist genug, es einfach zu zeigen.</em> F\u00fcr die SX4w3 bedeutet das, die eigene Intensit\u00e4t nicht l\u00e4nger als Makel zu behandeln, den man verbergen oder perfektionieren muss, sondern als das Material, aus dem echte Verbindung entsteht.</p>
          <p class="vb-intro">Eilishs Karriere zeigt genau diese Bewegung: von der Vierzehnj\u00e4hrigen, die sich in weiten Kleidern vor der Welt versteckte, zur K\u00fcnstlerin, die mit <em>Happier Than Ever</em> und <em>What Was I Made For?</em> zunehmend offen \u00fcber Verletzlichkeit spricht, ohne sich dabei zu verlieren. Der Chihuahua aus Highland Park hat gelernt, dass er nicht lauter werden muss, um geh\u00f6rt zu werden &ndash; nur ehrlich.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe &ndash; Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist &ndash; Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich &ndash; wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/sx4", label:"SX4 \u2013 Der Chihuahua: Subtyp-Profil"},
        {route:"beruehmte-freddie-mercury", label:"Portr\xe4t: Freddie Mercury (SX4w3)"},
        {route:"beruehmte-rihanna", label:"Portr\xe4t: Rihanna (SX4w3)"},
        {route:"krankheitsportraets-billie-eilish", label:"Krankheitsporträt: Billie Eilish (SX4w3) – Tourette-Syndrom"},
      ])}
    </div>
  `);
}

function anaDeArmasPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-ana-de-armas-portrait.jpg" alt="Ana de Armas – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ana de Armas</p>
        <p class="krim-portrait-typ">SX4w5 &middot; Sexueller Typ 4 mit F\u00fcnferfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Schauspielerin, geb. 1988 &ndash; Tierentsprechung: Chihuahua</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Chihuahua</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Chihuahua</strong> ist die kleinste Hunderasse der Welt &ndash; und verh\u00e4lt sich wie der gr\u00f6\u00dfte. Er f\u00fcrchtet nichts. Er bellt, wenn n\u00f6tig, und zeigt keine Scheu vor dem, was gr\u00f6\u00dfer ist als er. Aber hinter dieser K\u00fchnheit liegt ein Tier, das tief empfindet: empfindlich, bindungsintensiv, manchmal dramatisch &ndash; und trotz aller Selbstdarstellung auf echte Verbindung angewiesen. Der Chihuahua ist kein Tier der Masse. Er ist ein Tier der Intensit\u00e4t.</p>
          <p class="vb-intro">Die kubanische Schauspielerin Ana de Armas ist eine der au\u00dfergew\u00f6hnlichsten Schauspielerinnen ihrer Generation &ndash; eine Frau, die mit nichts begann und alles aus sich selbst heraus aufgebaut hat. Aufgewachsen in Kuba, mit 18 Jahren nach Spanien ausgewandert, ohne Spanisch zu sprechen, ohne Kontakte, ohne Netz: Sie hat sich durchgek\u00e4mpft. Und als Hollywood kam, hat sie nicht gespielt, dass sie dort hingeh\u00f6rt &ndash; sie hat bewiesen, dass sie dorthin geh\u00f6rt. Der Chihuahua, der sich vor keiner B\u00fchne f\u00fcrchtet &ndash; und der dabei nie vergisst, woher er kommt.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Vier: Rivalit\u00e4t als innerer Motor</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Vier (SX4)</strong> ist in der Enneagramm-Tradition derjenige Subtyp, der den Schmerz der Vier in die unmittelbare pers\u00f6nliche Intensit\u00e4t tr\u00e4gt. Naranjo nannte diesen Subtyp <em>Rivalit\u00e4t</em> &ndash; die brennende \u00dcberzeugung, dass andere haben, was einem selbst verweigert wurde, verbunden mit dem Impuls, sich zu messen, zu \u00fcberbieten, zu \u00fcbertreffen. Das Leitmotiv der SX4 lautet: <em>Verletzte Menschen verletzen Menschen.</em> Die SX4 k\u00e4mpft &ndash; mit anderen, mit sich selbst, mit der Welt &ndash; weil der eigene Schmerz keinen anderen Ausweg findet. Diese Energie ist ein Feuer, das verbrennen und erw\u00e4rmen kann.</p>
          <p class="vb-intro">Bei Ana de Armas zeigt sich das in der Intensit\u00e4t, mit der sie ihre Rollen bewohnt. In <em>Knives Out</em> spielte sie eine Figur, die auf Anhieb unscheinbar wirkt &ndash; und am Ende den ganzen Film tr\u00e4gt. In <em>Blonde</em> hat sie Marilyn Monroe nicht nachgeahmt, sondern von innen gesp\u00fcrt: den Schmerz, die Sehnsucht, das Gef\u00fchl, nie wirklich gesehen zu werden &ndash; nur die Oberfl\u00e4che, nie der Mensch. Das ist die SX4-Energie: Sie spielt nicht die Figur. Sie wird die Figur.</p>
          <p class="vb-intro">Der sexuelle Instinkt richtet die Vier auf die unmittelbare Verbindung aus: <em>Ich will, dass du mich wirklich siehst &ndash; nicht das Bild, nicht die Rolle, mich.</em> Ana de Armas hat dieses Bed\u00fcrfnis in ihre Arbeit kanalisiert: Jede Rolle ist auch eine Frage an das Publikum &ndash; <em>Siehst du mich jetzt?</em> Die Antwort, die sie bekommen hat, lautet: Ja.</p>
        </blockquote>

        <h2 class="vb-section">3. Der F\u00fcnferfl\u00fcgel: Tiefe statt Glanz</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>F\u00fcnferfl\u00fcgel (w5)</strong> bringt der sexuellen Vier eine charakteristische Pr\u00e4gung: das Bed\u00fcrfnis nach Verstehen, nach Durchdringung, nach der inneren Wahrheit einer Figur &ndash; bevor sie nach au\u00dfen tritt. Eine SX4 mit schwach ausgeprägtem Fünferflügel könnte in der Intensität aufgehen – expressiv, feurig, impulsiv. Ein stark ausgeprägter Fünferflügel zieht sie dagegen in die Stille zurück: <em>Er denkt zuerst. Er versteht zuerst. Dann erst redet er.</em> Bei der SX4w5 wird das zur Vorbereitung: Sie beobachtet, studiert, sammelt &ndash; und tritt dann auf die B\u00fchne mit einer Pr\u00e4zision, die \u00fcberrascht.</p>
          <p class="vb-intro">Bei Ana de Armas ist der F\u00fcnferfl\u00fcgel in ihrer Arbeitsweise un\u00fcbersehbar. Sie ist bekannt f\u00fcr ihre intensive Vorbereitung: F\u00fcr <em>Blonde</em> hat sie \u00fcber ein Jahr an der Rolle gearbeitet, Marilyn Monroe-Archivmaterial studiert, mit Dialektcoaches trainiert. Die SX4w5 gibt sich nicht mit der Oberfl\u00e4che zufrieden &ndash; sie will die Struktur darunter verstehen. Was treibt diese Figur an? Was verbirgt sie? Was hat sie nie gesagt?</p>
          <p class="vb-intro">Der F\u00fcnferfl\u00fcgel erkl\u00e4rt auch Ana de Armas' F\u00e4higkeit zur Stille auf der Leinwand &ndash; die Momente, in denen sie nichts sagt und trotzdem alles kommuniziert. Die SX4w5 wei\u00df: Manchmal ist der st\u00e4rkste Ausdruck kein Ausdruck. Es ist das, was darunter liegt &ndash; und das Publikum sp\u00fcrt es, auch wenn es es nicht benennen kann.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der sexuellen Vier</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX4 ist ihre F\u00e4higkeit zur vollst\u00e4ndigen Hingabe &ndash; an die Figur, an den Moment, an die Wahrheit der Szene. Ana de Armas bringt in jede Rolle etwas, das nicht in einem Drehbuch steht: eine Verletzlichkeit, die echt ist, weil sie aus echter Erfahrung kommt. Die Frau, die mit 18 Jahren allein in ein fremdes Land gegangen ist, wei\u00df, was Einsamkeit bedeutet. Und diese Erfahrung macht ihre Arbeit unverwechselbar.</p>
          <p class="vb-intro">Das Schicksalsmuster der Vier ist der <strong>Neid</strong> &ndash; das Gef\u00fchl, dass anderen etwas mitgegeben wurde, das einem selbst fehlt. Bei der SX4 \u00e4u\u00dfert sich das als pers\u00f6nliche Rivalit\u00e4t: <em>Du hast etwas, das ich nicht habe. Und das tut weh &ndash; und treibt mich an.</em> F\u00fcr Ana de Armas war das lange die Frage nach Zugeh\u00f6rigkeit: Geh\u00f6re ich nach Hollywood? Darf ich hier sein? Die Antwort hat sie sich selbst erarbeitet &ndash; Rolle f\u00fcr Rolle.</p>
          <p class="vb-intro">Der F\u00fcnferfl\u00fcgel bringt die Gefahr des R\u00fcckzugs in die Vorbereitung: Wenn die innere Welt reicher wird als die \u00e4u\u00dfere, kann die SX4w5 z\u00f6gern &ndash; nicht aus Angst, sondern aus dem Wunsch, noch besser vorbereitet zu sein. Noch tiefer zu verstehen. Noch sicherer zu sein. Das ist kein Fehler &ndash; aber manchmal ist der mutigste Schritt, einfach auf die B\u00fchne zu treten, bevor alles perfekt ist.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: Von der Rivalit\u00e4t zur Einzigartigkeit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Vier f\u00fchrt von der Frage <em>Warum bin ich nicht wie die anderen?</em> zur Erkenntnis <em>Ich bin, wie ich bin &ndash; und das ist nicht weniger, sondern einmalig.</em> F\u00fcr die SX4w5 bedeutet das, die Energie der Rivalit\u00e4t in die Energie der Sch\u00f6pfung umzuwandeln: nicht mehr fragen, warum andere haben, was sie nicht hat &ndash; sondern entdecken, was sie hat, das niemand sonst hat.</p>
          <p class="vb-intro">Ana de Armas ist auf diesem Weg weit vorangeschritten. Sie hat eine Pr\u00e4senz entwickelt, die nicht kopierbar ist: die Kombination aus kubanischer W\u00e4rme, europ\u00e4ischer Pr\u00e4zision und einer Verletzlichkeit, die keine Schule lehrt. Der Chihuahua, der keine Angst mehr kennen muss &ndash; nicht weil die Welt kleiner geworden ist, sondern weil er gr\u00f6\u00dfer geworden ist. Nicht im L\u00e4rm, sondern in der Tiefe.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/sx4", label:"SX4 \u2013 Der Chihuahua: Subtyp-Profil"},
        {route:"beruehmte-freddie-mercury", label:"Portr\u00e4t: Freddie Mercury (SX4w3)"},
        {route:"beruehmte-claude-debussy", label:"Portr\u00e4t: Claude Debussy (SX4w5)"},
      ])}
    </div>
  `);
}

function lindaLeinweberPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\xfchmte Pers\xf6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-linda-leinweber-portrait.jpg" alt="Linda Leinweber" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Linda Leinweber</p>
        <p class="krim-portrait-typ">SX4w5 &middot; Sexueller Typ 4 mit F\xfcnferfl\xfcgel</p>
        <p class="krim-portrait-subtitle">Psychologin, Autorin, Coach, geb. 1988 &ndash; Tierentsprechung: Chihuahua</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Chihuahua, der hinschauen gelernt hat</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Chihuahua</strong> ist das Tier der sexuellen Vier: klein von Gestalt, gro\xdf im Innenleben, und mit einer Intensit\xe4t ausgestattet, die nichts Halbes kennt. Der Chihuahua liebt tief, f\xfchlt sch\xe4rfer als die meisten um ihn herum und l\xe4sst sich nicht einsch\xfcchtern &ndash; aber er ist auch empfindlich, verletzlich und auf Verbindung angewiesen wie kaum ein anderes Tier. Was er aufgebaut hat, sch\xfctzt er. Was er gef\xfchlt hat, vergisst er nicht. Und was er einmal verstanden hat, gibt er weiter.</p>
          <p class="vb-intro">Die deutsche Linda-Marlen Leinweber ist Psychologin, Autorin, Coach und Gr\xfcnderin der Online-Plattform Poise &ndash; und eine der prononciertesten deutschen Stimmen im Bereich mentale Gesundheit und Pr\xe4vention. Ihr Weg dorthin f\xfchrte nicht durch die Theorie, sondern durch das eigene Erleben: durch Jahre, in denen sie selbst sprachlos gegen\xfcber dem stand, was ihr K\xf6rper und ihre Psyche ihr mitteilten. Diese Biografie ist keine Randnotiz. Sie ist das Fundament.</p>
          <p class="vb-intro">Was Linda Leinweber von vielen anderen Psychologinnen und Coaches unterscheidet, ist diese Verbindung: Sie spricht nicht von au\xdfen \xfcber Schmerz. Sie spricht aus einem Inneren, das diesen Schmerz kennt &ndash; und das gelernt hat, ihn zu lesen. Das ist SX4w5: Tiefe, die sich nicht sch\xe4mt. Erkenntnis, die sich nicht versteckt.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Vier: Rivalit\xe4t gegen die Verharmlosung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Vier (SX4)</strong> ist in der Enneagramm-Tradition der Subtyp, der den Schmerz der Vier nicht nach innen tr\xe4gt, sondern nach au\xdfen wendet &ndash; als Intensit\xe4t, als Verlangen, als Feuer. Naranjo nannte diesen Subtyp <em>Rivalit\xe4t</em>: die brennende \xdcberzeugung, dass anderen etwas gegeben wurde, was einem selbst vorenthalten wurde &ndash; und der Antrieb, dagegen anzutreten, \xfcbertreffen zu wollen, sich zu beweisen. Bei der SX4 bleibt dieser Antrieb nicht abstrakt. Er richtet sich auf etwas Konkretes &ndash; auf einen Menschen, auf ein System, auf eine Ungerechtigkeit.</p>
          <p class="vb-intro">Bei Linda Leinweber hat sich diese Energie einen klaren Gegner gesucht: die Verharmlosung psychischer Not. Die Vorstellung, dass Angst und Panik \xfcberwindbar seien, wenn man sich nur mehr zusammenrei\xdft. Die Idee, dass Burnout eine Frage der Disziplin sei und nicht des Systems. Dass Pr\xe4vention Luxus sei und nicht Vernunft. Gegen diese Haltung &ndash; die sie nicht zuletzt an sich selbst erlebt hat, in den Jahren mit Panikattacken und Ersch\u00f6pfung &ndash; richtet sie ihre Arbeit wie ein Gegengewicht.</p>
          <p class="vb-intro">Die eigene Krise war der Wendepunkt. Linda Leinweber war bereits als Model t\xe4tig, hatte Psychologie in K\xf6ln und Berlin studiert, als sie am eigenen Leib erlebte, was es bedeutet, wenn das Nervensystem kollabiert: Panikattacken, Druck, das Gef\xfchl, in einem Hamsterrad zu sitzen, das sie selbst aufgebaut hatte. Diese Erfahrung hat sie nicht begraben. Sie hat sie zur Grundlage ihrer gesamten beruflichen Ausrichtung gemacht. Das ist SX4: Der Schmerz wird nicht verwaltet. Er wird zum Kompass.</p>
        </blockquote>

        <h2 class="vb-section">3. Der F\xfcnferfl\xfcgel: Die Analytikerin hinter der Stimme</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>F\xfcnferfl\xfcgel (w5)</strong> bringt der sexuellen Vier etwas Entscheidendes: den analytischen Blick, den Hunger nach Verst\xe4ndnis, die F\xe4higkeit, das eigene Erleben nicht nur zu f\xfchlen, sondern zu durchdringen. Die SX4 allein k\xf6nnte in der Intensit\xe4t des eigenen Empfindens stecken bleiben &ndash; der F\xfcnferfl\xfcgel zieht sie in die Beobachtung, in die Theorie, in das Handwerk. Er sagt: <em>F\xfchlen reicht nicht &ndash; man muss auch verstehen.</em></p>
          <p class="vb-intro">Linda Leinwebers Ausbildungsweg tr\xe4gt diese Handschrift: Psychologiestudium, systemische Organisationsberatung, zertifiziertes Coaching, Hypnosetherapie. Das ist keine Sammlung von Zertifikaten &ndash; das ist ein F\xfcnferfl\xfcgel, der von einem Werkzeug zum n\xe4chsten wandert, weil keines allein ausreicht. Die Hypnosetherapie f\xe4llt dabei besonders auf: Sie setzt dort an, wo klassische Gespr\xe4chstherapie an ihre Grenzen st\xf6\xdft &ndash; im tiefen Unterbewusstsein, im K\xf6rperged\xe4chtnis, in den Mustern, die sich nicht durch Einsicht allein aufl\xf6sen lassen. Wer diesen Weg geht, denkt in Tiefen.</p>
          <p class="vb-intro">Der F\xfcnferfl\xfcgel zeigt sich auch in Leinwebers Publikationsarbeit. Ihr Buch <em>Frei und trotzdem verbunden</em> &ndash; ein Titel, der selbst schon ein Paradox denkt &ndash; widmet sich Beziehungsdynamiken, Bindungsmustern und Konfliktl\xf6sungen. Das ist kein Ratgeberbuch im klassischen Sinne: kein &bdquo;10 Schritte zur besseren Beziehung&ldquo;, sondern ein Versuch zu verstehen, warum Menschen in immer denselben Mustern stecken &ndash; und was es braucht, um herauszufinden. Das ist die SX4w5 in ihrem besten Element: Tiefe, die anderen n\xfctzt.</p>
        </blockquote>

        <h2 class="vb-section">4. Poise und die Vision der Pr\xe4vention</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Mit <strong>Poise</strong> hat Linda Leinweber eine Plattform geschaffen, die ihren Ansatz institutionell verankert: ein interdisziplin\xe4res Team aus Psychologinnen, Psychotherapeutinnen und Coaches, das psychologische Beratung und Begleitung online zug\xe4nglich macht. Der Name ist dabei mit Bedacht gewählt &ndash; <em>Poise</em> bedeutet auf Englisch Gleichgewicht, Haltung, innere Stabilit\xe4t. Nicht Drama. Nicht spektakul\xe4re Heilung. Sondern: das Ma\xdf, das tr\xe4gt. Wer etwas tiefer gr\xe4bt, entdeckt: Das englische <em>poise</em> und das englische <em>poison</em> teilen dieselbe Wurzel &ndash; das altfranz\xf6sische <em>poison</em> bedeutete urspr\xfcnglich Trank, Gebr\xe4u, Gift. Der Name tr\xe4gt also beides in sich: Gleichgewicht und Gegengift. Und wenn man wei\xdf, dass die unbewusste SX4 in ihrer Blickqualit\xe4t durchaus etwas Toxisches in sich tragen kann &ndash; eine Intensit\xe4t, die verbrennt, eine Rivalit\xe4t, die nagt, eine Leidenschaft, die kippt &ndash; dann erh\xe4lt der Plattformname eine zweite Lesart: <em>Poise</em> als bewusst gew\xe4hltes Gegen-Bild zum eigenen Schatten. Das Gleichgewicht als Antwort auf das, was aus dem Gleichgewicht geraten kann.</p>
          <p class="vb-intro">Der pr\xe4ventive Ansatz ist dabei zentral: Leinweber m\xf6chte Menschen erreichen, bevor die Krise da ist. Bevor der Burnout kommt, bevor die Panikst\xf6rung sich etabliert, bevor die Beziehung zerbricht. Das ist ein zutiefst systemischer Gedanke &ndash; und er erkl\xe4rt, warum sie auch in der Unternehmensberatung aktiv ist: B2B-Workshops, Mental-Health-Konzepte f\xfcr F\xfchrungskr\xe4fte, strukturelle Pr\xe4vention statt individuelle Feuerwehr. Der Chihuahua, der nicht wartet, bis das Haus brennt.</p>
          <p class="vb-intro">\xdcber ihren Instagram-Kanal (<em>@psychologin_lindaleinweber</em>) und ihren Podcast <em>Das Wunder Frau</em> erreicht sie ein breites Publikum jenseits der Klinik. Dieses Engagement f\xfcr Entstigmatisierung &ndash; die Botschaft, dass psychische Gesundheit kein Luxusthema ist, sondern eine Grundfrage des Lebens &ndash; ist ihre konsequenteste politische Haltung. Nicht im Parlament, sondern dort, wo Haltungen sich bilden: im Alltag der Menschen.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten: Das Feuer, das versteht</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Schicksalsmuster der Vier ist der <strong>Neid</strong> &ndash; das tiefe, oft unbewusste Gef\xfchl, dass anderen eine Vollst\xe4ndigkeit geschenkt wurde, die einem selbst fehlt. Bei der SX4 tr\xe4gt dieser Neid ein pers\xf6nlicheres Gesicht: nicht das Schielen auf den Besitz anderer, sondern der Stich, wenn jemand anderes ungezwungen das sein darf, was man selbst so schwer zu sein findet. Leicht, frei, unbelastet. Die SX4 kennt das Gef\xfchl, schwerer zu sein als die anderen &ndash; und sie hat Wege gefunden, damit zu arbeiten.</p>
          <p class="vb-intro">Das Licht der SX4w5 liegt in ihrer F\xe4higkeit, die eigene Dunkelheit produktiv zu machen &ndash; nicht als Performance, sondern als echten Dienst. Linda Leinweber hilft nicht, weil sie es soll. Sie hilft, weil sie wei\xdf, wie es ist, wenn einem nicht geholfen wurde. Dieser Unterschied ist sp\xfcrbar. Menschen, die aus eigener Erfahrung helfen, geben etwas anders weiter als solche, die nur kognitiv gelernt haben wie.</p>
          <p class="vb-intro">Der Schatten: Der F\xfcnferfl\xfcgel neigt zum R\xfcckzug, zur \xdcberarbeitung von Gedanken, zum Zur\xfcckhalten, bis alles wirklich durchdacht ist. Die SX4 hingegen dr\u00e4ngt nach Verbindung, nach Resonanz, nach dem unmittelbaren Kontakt. Diese innere Spannung &ndash; zwischen Analyse und Ausdruck, zwischen Tiefe und Ber\xfchrung &ndash; ist das Produktivste, was die Kombination SX4w5 erzeugt. Und mitunter das Anstrengendste.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Chihuahua, der anderen den Weg zeigt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Vier f\xfchrt von der Frage <em>Warum bin ich nicht wie die anderen?</em> zur Erkenntnis <em>Das, was ich bin, ist einmalig &ndash; und es ist meins.</em> F\xfcr die SX4w5 bedeutet das, die eigene Intensit\xe4t nicht zu temperieren, sondern zu richten &ndash; nicht gegen sich selbst, nicht gegen die Welt, sondern auf das, was m\xf6glich ist.</p>
          <p class="vb-intro">Linda Leinweber hat diesen Weg in ihrer Biografie beschritten. Vom eigenen Erleben der Panikattacken zur fundierten Ausbildung, von der Ausbildung zur Plattform, von der Plattform zur \xf6ffentlichen Stimme f\xfcr mentale Gesundheit. Das ist kein Selbstoptimierungsprojekt. Das ist eine Vier, die gelernt hat, ihr Inneres nicht zu verstecken, sondern zu tragen &ndash; und die dieses Tragen in ein Handwerk verwandelt hat, das anderen n\xfctzt.</p>
          <p class="vb-intro">Der Chihuahua aus Altm\xfcnster am Traunsee hat keine Angst vor gro\xdfen Gef\xfchlen. Er hat gelernt, sie zu lesen. Das ist die sexuelle Vier mit F\xfcnferfl\xfcgel. Das ist Linda Leinweber.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\xfchmten Pers\xf6nlichkeiten"},
        {route:"subtype/sx4", label:"SX4 \u2013 Der Chihuahua: Subtyp-Profil"},
        {route:"beruehmte-ana-de-armas", label:"Portr\xe4t: Ana de Armas (SX4w5)"},
        {route:"beruehmte-claude-debussy", label:"Portr\xe4t: Claude Debussy (SX4w5)"},
      ])}
    </div>
  `);
}

function claudeDebussyPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-claude-debussy-portrait.jpg" alt="Claude Debussy" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Claude Debussy</p>
        <p class="krim-portrait-typ">SX4w5 &middot; Sexueller Typ 4 mit F\u00fcnferfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Komponist, 1862&ndash;1918 &ndash; Tierentsprechung: Chihuahua</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Chihuahua, der die Musik neu h\u00f6rte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Chihuahua</strong> ist das Tier der sexuellen Vier: klein von Gestalt, gro\u00df im Innenleben, mit einer Intensit\u00e4t ausgestattet, die nichts Halbes kennt. Er liebt tief, misstraut Konventionen und l\u00e4sst sich nicht in eine Form pressen, die nicht die seine ist &ndash; selbst wenn die ganze Umgebung genau das von ihm verlangt.</p>
          <p class="vb-intro">Der französische Komponist Claude Debussy wurde 1862 in Saint-Germain-en-Laye bei Paris geboren, in \u00e4rmlichen Verh\u00e4ltnissen, als Sohn eines gescheiterten Ladenbesitzers. Mit zehn Jahren wurde er am Pariser Conservatoire aufgenommen &ndash; ein technisch begabter, aber schon damals eigensinniger Sch\u00fcler, der die Lehrer regelm\u00e4\u00dfig mit Akkordfolgen provozierte, die als &bdquo;falsch&ldquo; galten. Der Chihuahua, der von Anfang an sp\u00fcrte: Die Regeln, die man mir beibringt, sind nicht die Wahrheit, die ich suche.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Vier: Rivalit\u00e4t gegen die Konvention</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Vier (SX4)</strong> tr\u00e4gt den Schmerz der Vier nach au\u00dfen &ndash; als Intensit\u00e4t, als Verlangen, als Widerstand gegen alles, was sich anf\u00fchlt wie eine fremde Form. Naranjo nannte diesen Subtyp <em>Rivalit\u00e4t</em>: die brennende \u00dcberzeugung, dass die etablierte Ordnung einem selbst etwas vorenth\u00e4lt &ndash; verbunden mit dem Antrieb, dagegen anzutreten und etwas radikal Eigenes zu setzen.</p>
          <p class="vb-intro">Bei Debussy zeigte sich das zun\u00e4chst im Widerstand gegen die deutsche Sp\u00e4tromantik, die den europ\u00e4ischen Konzertsaal beherrschte &ndash; gegen Wagners monumentale Harmonik, gegen die vorgeschriebenen Kadenzen der Konservatoriums-Lehre. Er suchte etwas anderes: Klang als Farbe, Harmonie als Andeutung statt als Aufl\u00f6sung. Diese Rivalit\u00e4t war nicht nur \u00e4sthetisch, sie war existenziell &ndash; lebenslang das Gef\u00fchl, gegen eine Musikwelt anzuk\u00e4mpfen, die ihn nicht verstand, bis sie es schlie\u00dflich musste.</p>
          <p class="vb-intro">Die gleiche Intensit\u00e4t durchzog Debussys Liebesleben, das von Skandalen begleitet war: Seine langj\u00e4hrige Gef\u00e4hrtin Gabrielle Dupont versuchte sich das Leben zu nehmen, als er sie 1899 f\u00fcr die S\u00e4ngerin Rosalie &bdquo;Lilly&ldquo; Texier verlie\u00df, die er wenig sp\u00e4ter heiratete. F\u00fcnf Jahre danach verlie\u00df er auch Lilly &ndash; f\u00fcr Emma Bardac, mit der er seine Tochter Chouchou bekam &ndash; und Lilly schoss sich in einem Verzweiflungsakt in die Brust. Sie \u00fcberlebte, doch der Skandal kostete Debussy einen Gro\u00dfteil seiner Freunde. Die SX4 tr\u00e4gt ihre Wunden nicht verborgen &ndash; sie rei\u00dft sie auf, bei sich und bei anderen, im unerbittlichen Verlangen nach dem, was sich richtig anf\u00fchlt.</p>
        </blockquote>

        <h2 class="vb-section">3. Der F\u00fcnferfl\u00fcgel: Der Klangforscher</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>F\u00fcnferfl\u00fcgel (w5)</strong> gibt der sexuellen Vier den analytischen Blick, den Hunger nach Verst\u00e4ndnis, die F\u00e4higkeit, das eigene Empfinden nicht nur zu f\u00fchlen, sondern bis in seine kleinsten Bausteine zu durchdringen. Bei Debussy zeigte sich das in einer beinahe wissenschaftlichen Besch\u00e4ftigung mit Klang selbst: Ganztonleitern, parallele Quinten, unaufgel\u00f6ste Akkorde, Klangfarben, die er wie ein Chemiker mischte.</p>
          <p class="vb-intro">Entscheidend war die Pariser Weltausstellung von 1889, auf der Debussy zum ersten Mal javanisches Gamelan-Orchester h\u00f6rte &ndash; eine Musik ohne westliche Harmonielehre, gebaut auf Klangschichten statt auf Aufl\u00f6sung. Er sa\u00df stundenlang davor, notierte, studierte, lie\u00df sich von einer v\u00f6llig fremden Tonwelt umschreiben. Das ist der F\u00fcnferfl\u00fcgel in Reinform: nicht nur ber\u00fchrt sein, sondern verstehen wollen, bis man die fremde Logik in die eigene Sprache \u00fcbersetzen kann.</p>
          <p class="vb-intro">Sein Klavierzyklus <em>Pr\u00e9ludes</em>, das Streichquartett und vor allem <em>Pr\u00e9lude \u00e0 l&#39;apr\u00e8s-midi d&#39;un faune</em> (1894) &ndash; von Debussy selbst als Beginn der modernen Musik bezeichnet &ndash; sind das Ergebnis dieser jahrelangen Forschung: Musik, die schwebt statt sich aufzul\u00f6sen, die andeutet statt zu behaupten. Der F\u00fcnferfl\u00fcgel verwandelte die Rivalit\u00e4t der SX4 in ein Handwerk von unerreichter Pr\u00e4zision.</p>
        </blockquote>

        <h2 class="vb-section">4. La Mer: Komposition inmitten des Skandals</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Debussy komponierte sein Orchesterwerk <em>La Mer</em> (1903&ndash;1905) ausgerechnet in den Jahren des gr\u00f6\u00dften pers\u00f6nlichen Aufruhrs &ndash; w\u00e4hrend der Trennung von Lilly Texier, ihrem Suizidversuch und dem gesellschaftlichen Skandal, der ihn fast seine Karriere kostete. Statt sich zur\u00fcckzuziehen, vertiefte er sich in ein Werk \u00fcber das Meer: drei symphonische Skizzen, die Licht, Bewegung und Klangfarbe verschmelzen, ohne einer klassischen Form zu folgen.</p>
          <p class="vb-intro">Die Urauff\u00fchrung 1905 wurde von Kritik und Publikum zun\u00e4chst verrissen &ndash; zu formlos, zu unklar, kein &bdquo;richtiges&ldquo; Meeresbild. Erst Jahre sp\u00e4ter wurde <em>La Mer</em> als eines der bedeutendsten Orchesterwerke der Moderne anerkannt. Das ist die SX4w5 in ihrer reinsten Form: Der private Sturm wird nicht verdr\u00e4ngt, sondern in ein Werk \u00fcbersetzt, das so pr\u00e4zise durchdacht ist, dass es die eigene Zeit \u00fcberdauert, auch wenn sie es zun\u00e4chst nicht verstehen will.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten: Der Klang, der nicht l\u00fcgt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Schicksalsmuster der Vier ist der <strong>Neid</strong> &ndash; bei der SX4 als Rivalit\u00e4t, als das Gef\u00fchl, dass die bestehende Ordnung einem selbst etwas Wesentliches vorenth\u00e4lt. Bei Debussy \u00e4u\u00dferte sich das in einer lebenslangen Distanz zum offiziellen Musikbetrieb, den Konservatorien, den Salons &ndash; selbst nach seinem Erfolg blieb er misstrauisch gegen\u00fcber Anerkennung, die zu leicht kam.</p>
          <p class="vb-intro">Das Licht der SX4w5 liegt in der F\u00e4higkeit, die eigene Unruhe nicht zu unterdr\u00fccken, sondern in etwas radikal Neues zu verwandeln &ndash; Debussy hat die europ\u00e4ische Musik von den Fundamenten her neu gedacht und damit den Weg f\u00fcr Ravel, Strawinsky und die gesamte Moderne bereitet. Der Schatten liegt in der R\u00fccksichtslosigkeit, mit der die SX4 ihre eigene Intensit\u00e4t \u00fcber die Bed\u00fcrfnisse anderer stellen kann &ndash; sichtbar in den gescheiterten Beziehungen, die sein Leben s\u00e4umten, und in den Menschen, die daf\u00fcr einen hohen Preis zahlten.</p>
          <p class="vb-intro">Der F\u00fcnferfl\u00fcgel brachte zugleich eine Kehrseite: einen R\u00fcckzug in die eigene Klangwelt, der Debussy oft isolierte, chronisch unzufrieden mit dem eigenen Werk und misstrauisch gegen\u00fcber jeder Vereinnahmung &ndash; er lehnte das Etikett &bdquo;Impressionist&ldquo;, das ihm die Kritik verpasste, zeitlebens ab.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Chihuahua, der dem Klang traute</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Vier f\u00fchrt von der Frage <em>Warum bin ich nicht wie die anderen?</em> zur Erkenntnis <em>Das, was ich h\u00f6re, ist wahr &ndash; und es ist meins, es zu zeigen.</em> F\u00fcr die SX4w5 bedeutet das, die eigene Rivalit\u00e4t gegen die Konvention nicht als Makel zu behandeln, sondern als Kompass, der zu etwas f\u00fchrt, das vorher nicht existierte.</p>
          <p class="vb-intro">Debussy starb 1918 an Krebs, w\u00e4hrend Paris von deutscher Artillerie beschossen wurde &ndash; einer seiner letzten \u00f6ffentlichen Auftritte war ein Konzert unter Kriegsbedingungen, bei dem er sich weigerte, sich von den Umst\u00e4nden die eigene Musik diktieren zu lassen. Der Chihuahua aus Saint-Germain-en-Laye hat die Musik nicht lauter gemacht, um geh\u00f6rt zu werden &ndash; er hat ihr beigebracht, zu schweben, zu schimmern, das Wesentliche anzudeuten. Das ist die sexuelle Vier mit F\u00fcnferfl\u00fcgel. Das ist Claude Debussy.</p>
        </blockquote>

        <p class="vb-intro">Die fast neunjährige Darmkrebs-Erkrankung, die Debussy während des Ersten Weltkriegs weitgehend privat hielt, wird ausführlich im eigenen <a href="javascript:void(0)" data-route="krankheitsportraets-claude-debussy">Krankheitsporträt zu Debussy</a> gedeutet.</p>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe &ndash; Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist &ndash; Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich &ndash; wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"krankheitsportraets-claude-debussy", label:"Krankheitsporträt: Claude Debussy (SX4w5)"},
        {route:"subtype/sx4", label:"SX4 \u2013 Der Chihuahua: Subtyp-Profil"},
        {route:"beruehmte-ana-de-armas", label:"Portr\xe4t: Ana de Armas (SX4w5)"},
        {route:"beruehmte-linda-leinweber", label:"Portr\xe4t: Linda Leinweber (SX4w5)"},
        {route:"beruehmte-dante-alighieri", label:"Porträt: Dante Alighieri (SX4w5)"},
      ])}
    </div>
  `);
}

function danteAlighieriPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-dante-alighieri-portrait.jpg" alt="Dante Alighieri" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dante Alighieri</p>
        <p class="krim-portrait-typ">SX4w5 · Sexueller Typ 4 mit Fünferflügel</p>
        <p class="krim-portrait-subtitle">Italienischer Dichter, 1265–1321 – Tierentsprechung: Chihuahua</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Chihuahua, der aus der Verbannung ein Weltgericht baute</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Chihuahua</strong> ist das Tier der sexuellen Vier: klein von Gestalt, gewaltig im Innenleben, unfähig zu Halbheiten in Liebe wie in Zorn. Dante Alighieri wurde 1265 in Florenz geboren, in eine Stadt, die ihn später verstoßen sollte – und aus genau dieser Verstoßung heraus schuf er eines der gewaltigsten literarischen Werke der Weltgeschichte.</p>
          <p class="vb-intro">1302 wurde Dante, mitten in den Machtkämpfen zwischen den politischen Fraktionen der Weißen und Schwarzen Guelfen, unter falschen Korruptionsvorwürfen aus Florenz verbannt. Für den Fall seiner Rückkehr wurde ihm die Todesstrafe angedroht – er sollte seine Heimatstadt deshalb nie wieder betreten. Der Chihuahua, aus seinem Revier vertrieben, verwandelte die Verbannung nicht in Resignation, sondern in das Material für ein Werk, das ihm posthum genau jene Unsterblichkeit sicherte, die ihm die Stadt zu Lebzeiten verweigerte.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Vier: Beatrice und die Rivalität mit der eigenen Stadt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Vier (SX4)</strong> trägt den Schmerz der Vier nach außen – als Intensität, als Sehnsucht, als Rivalität gegen alles, was die eigene Wahrheit verweigert. Naranjo nannte diesen Subtyp <em>Rivalität</em>: die brennende Überzeugung, dass einem etwas Wesentliches vorenthalten wird, verbunden mit dem Antrieb, dagegen anzutreten. Dantes Liebe zu Beatrice Portinari, die er als Neunjähriger zum ersten Mal sah und mit 18 Jahren wiederbegegnete, blieb zeitlebens weitgehend unerfüllt – Beatrice heiratete einen anderen und starb 1290 mit nur 24 Jahren. In "La Vita Nuova" verarbeitete Dante diese Sehnsucht zu einer der intensivsten Liebesdichtungen des Mittelalters.</p>
          <p class="vb-intro">Dieselbe Intensität richtete sich gegen seine politischen Feinde: In der "Göttlichen Komödie" platzierte Dante zahlreiche reale Zeitgenossen – politische Rivalen, korrupte Päpste, Verräter seiner eigenen Partei – namentlich in genau bestimmten Kreisen der Hölle, mit genau bemessenen Qualen für ihre jeweiligen Vergehen. Das ist die SX4 in ihrer schärfsten Form: Der persönliche Schmerz der Verbannung wird nicht verdrängt, sondern in ein literarisches Gericht verwandelt, das über die eigene Lebenszeit hinaus Bestand haben sollte – und bis auf den heutigen Tag hat.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Fünferflügel: Die Architektur des Jenseits</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Fünferflügel (w5)</strong> gibt der sexuellen Vier den analytischen Hunger, das eigene Gefühl nicht nur auszudrücken, sondern in ein vollständig durchdachtes System zu übersetzen. Die "Göttliche Komödie" ist genau das: ein Bauwerk von mathematischer Präzision – neun Höllenkreise, sieben Terrassen des Läuterungsbergs, neun Himmelssphären, exakt einhundert Gesänge, in Terzinen verfasst, deren Reimschema selbst eine fortlaufende, nie abreißende Kette bildet.</p>
          <p class="vb-intro">Dante verarbeitete darin die gesamte Gelehrsamkeit seiner Zeit – aristotelische Philosophie, thomistische Theologie, mittelalterliche Astronomie, römische Dichtung, insbesondere Vergil, den er sich selbst als Führer durch Hölle und Fegefeuer zur Seite stellte. Der Fünferflügel verwandelte die glühende Rivalität der SX4 in ein Werk von enzyklopädischer Genauigkeit – jede Strafe, jede Belohnung, jede Sphäre folgt einer inneren Logik, die Dante bis ins letzte Detail durchdacht hatte, bevor er ein einziges Wort niederschrieb.</p>
          <p class="vb-intro">Bemerkenswert ist, wie nahtlos sich Dantes neun Höllenkreise bis heute auf die neun Leidenschaften des Enneagramms abbilden lassen – obwohl er das psychologische Modell, wie es heute gelehrt wird, natürlich nicht kannte. Er schöpfte aus demselben Fundament archetypischer Laster, das christliche Scholastik und antike Philosophie über Jahrhunderte hinweg herausgearbeitet hatten – und bewies damit ein intuitives Gespür für die menschliche Psyche, das Jahrhunderte später auch Claudio Naranjo und andere Enneagramm-Lehrer tief beschäftigte. Eine ausführliche Zuordnung findet sich im Schaubild "Die 9 Kreise der Hölle nach Dantes Inferno".</p>
        </blockquote>

        <h2 class="vb-section">4. Die Volkssprache als Akt der Rivalität</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Eine der folgenreichsten Entscheidungen Dantes war rein sprachlicher Natur und zugleich zutiefst rebellisch: Er schrieb die "Göttliche Komödie" nicht in Latein, der Sprache der Gelehrten und der Kirche, sondern im toskanischen Volgare – der gesprochenen Sprache seiner Heimatregion. Das war ein bewusster Affront gegen die gelehrte Elite, die Literatur in der Volkssprache für minderwertig hielt.</p>
          <p class="vb-intro">Diese Entscheidung machte sein Werk einem breiten Publikum zugänglich – und begründete gleichzeitig die moderne italienische Schriftsprache. Der Chihuahua, der von den Mächtigen seiner Zeit verstoßen wurde, wählte eine Sprache, die genau diesen Mächtigen die Deutungshoheit entzog, und schuf damit unbeabsichtigt ein Nationalwerk, das Italien Jahrhunderte vor seiner politischen Einigung sprachlich zusammenhielt.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Schicksalsmuster der Vier ist der <strong>Neid</strong> – bei der SX4 als Rivalität, als das Gefühl, dass einem die eigene Stadt, die eigene Liebe, die eigene Anerkennung zu Unrecht vorenthalten wurde. Bei Dante speiste sich daraus sowohl die schöpferische Kraft des Werks als auch seine kompromisslose Härte gegenüber jedem, den er für sein Unglück verantwortlich hielt – bis hin zu Zeitgenossen, die er noch zu deren Lebzeiten in seiner Hölle verewigte.</p>
          <p class="vb-intro">Das Licht liegt in der Fähigkeit, aus persönlichem Leid ein Werk zu schaffen, das weit über die eigene Verletzung hinausreicht: Die "Göttliche Komödie" ist zugleich Rachefantasie, Liebeserklärung, theologische Summe und politisches Manifest – und dennoch, oder gerade deshalb, eines der einflussreichsten Werke der Weltliteratur. Der Schatten liegt in der Unversöhnlichkeit: Dante starb, ohne sich je mit Florenz auszusöhnen, und die Stadt bat erst Jahrhunderte später offiziell um Verzeihung für seine Verbannung.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Vermächtnis: Der Verbannte, den niemand mehr verbannen konnte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Dante starb 1321 in Ravenna, wohin ihn seine Wanderschaft durch verschiedene oberitalienische Höfe zuletzt geführt hatte – nie nach Florenz zurückgekehrt, nie offiziell begnadigt. Florenz forderte noch Jahrhunderte später vergeblich die Rückführung seiner sterblichen Überreste; Ravenna gab den Dichter nie heraus, den es aufgenommen hatte, als seine eigene Stadt ihn verstieß.</p>
          <p class="vb-intro">Der Chihuahua, der aus einer persönlichen und politischen Kränkung heraus ein Weltgericht über Himmel, Hölle und Fegefeuer errichtete, hinterließ mehr als ein Gedicht: Er hinterließ die moderne italienische Sprache, ein Modell christlicher Kosmologie, das die Vorstellungskraft von Michelangelo bis zu heutigen Autoren prägte, und den Beweis, dass die intensivste persönliche Verletzung, wenn sie mit äußerster Präzision geformt wird, zu einem Werk werden kann, das seine Zeit um Jahrhunderte überdauert.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/sx4", label:"SX4 – Der Chihuahua: Subtyp-Profil"},
        {route:"beruehmte-claude-debussy", label:"Porträt: Claude Debussy (SX4w5)"},
        {route:"beruehmte-voltaire", label:"Porträt: Voltaire (SX4w3)"},
        {route:"beruehmte-thomas-von-aquin", label:"Porträt: Thomas von Aquin (SE9w8) – dessen Theologie die Architektur der Göttlichen Komödie stützte"},
        {route:"hoellenkreise-dante", label:"Schaubild: Die 9 Kreise der Hölle nach Dantes Inferno"},
        {route:"bibel-judas-thaddaeus", label:"Bibel-Porträt: Judas Thaddäus (SX4w5)"},
      ])}
    </div>
  `);
}

function marquisDeSadePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-marquis-de-sade-portrait.jpg" alt="Marquis de Sade" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Marquis de Sade</p>
        <p class="krim-portrait-typ">SX4w5 &middot; Sexueller Typ 4 mit F\u00fcnferfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Schriftsteller &amp; Philosoph, 1740&ndash;1814 &ndash; Tierentsprechung: Chihuahua</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Chihuahua, der keine Grenze anerkannte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Chihuahua</strong> ist das Tier der sexuellen Vier: klein von Gestalt, unermesslich in seiner inneren Intensit\u00e4t, unf\u00e4hig, sich in eine Form zu f\u00fcgen, die nicht die eigene ist. Er kennt keine halben Gef\u00fchle, keine gem\u00e4\u00dfigten Positionen. Was er ablehnt, lehnt er radikal ab. Was er begehrt, begehrt er ohne Kompromiss &ndash; selbst wenn ihn das in offenen Konflikt mit allem bringt, was seine Zeit f\u00fcr heilig h\u00e4lt.</p>
          <p class="vb-intro">Der franz\u00f6sische Schriftsteller Donatien Alphonse Fran\u00e7ois, Marquis de Sade, wurde 1740 in Paris in eine der \u00e4ltesten Adelsfamilien Frankreichs hineingeboren. Schon als Kind galt er als unb\u00e4ndig, j\u00e4hzornig, grenzenlos in seinen Emotionen. Eine Erziehung durch einen liederlichen Onkel in der Provence, gepr\u00e4gt von Freidenkerei und offen gelebter Libertinage, legte fr\u00fch den Grundstein f\u00fcr ein Leben, das zeitlebens einer einzigen Frage zu folgen schien: Warum sollte ich mich der Ordnung f\u00fcgen, die andere f\u00fcr mich vorgesehen haben?</p>
          <p class="vb-intro">Was ihm konkret zur Last gelegt wurde: 1768 lockte er die Bettlerin Rose Keller unter einem Vorwand in sein Haus in Arcueil, fesselte und misshandelte sie mit Rutenhieben &ndash; sie floh und erstattete Anzeige, der erste gro\u00dfe Skandal, der ihn kurzzeitig ins Gef\u00e4ngnis brachte. 1772 folgte die sogenannte Marseille-Aff\u00e4re: Sade soll Prostituierten S\u00fc\u00dfigkeiten mit der reizenden, potenziell giftigen Substanz Cantharidin (&bdquo;Spanische Fliege&ldquo;) verabreicht haben, mehrere Frauen erkrankten schwer; zusammen mit dem Vorwurf der Sodomie an seinem Diener wurde er in Abwesenheit zum Tode verurteilt und floh nach Italien. 1777 schlie\u00dflich lie\u00df ihn seine eigene Schwiegermutter per <em>lettre de cachet</em> &ndash; einem k\u00f6niglichen Haftbefehl ohne Gerichtsverfahren &ndash; in Vincennes und sp\u00e4ter der Bastille einsperren, wo er, ohne je formell verurteilt zu werden, mehr als ein Jahrzehnt verbrachte.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Vier: Rivalit\u00e4t gegen jede Konvention</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Vier (SX4)</strong> tr\u00e4gt den Schmerz der Vier nicht nach innen, sondern nach au\u00dfen &ndash; als Intensit\u00e4t, als Provokation, als offener Widerstand gegen alles, was sich wie eine fremde, aufgezwungene Form anf\u00fchlt. Naranjo nannte diesen Subtyp <em>Rivalit\u00e4t</em>: die brennende \u00dcberzeugung, dass die bestehende Ordnung &ndash; moralisch, religi\u00f6s, gesellschaftlich &ndash; einem selbst etwas Wesentliches vorenth\u00e4lt, verbunden mit dem unbedingten Antrieb, genau dagegen anzutreten.</p>
          <p class="vb-intro">Bei Sade wurde diese Rivalit\u00e4t zum Lebensprogramm. Er rivalisierte gegen die katholische Kirche, gegen das Gesetz, gegen die Institution der Ehe, gegen jede Autorit\u00e4t, die Grenzen setzte. Seine literarischen Werke &ndash; <em>Justine oder Das Missgeschick der Tugend</em> (1791), <em>Die 120 Tage von Sodom</em> (verfasst 1785 in der Bastille) &ndash; sind keine blo\u00dfen Provokationen, sondern der systematische, philosophisch durchdachte Versuch, jede moralische Grenze als menschliche Erfindung zu entlarven, nicht als Naturgesetz.</p>
          <p class="vb-intro">Diese Rivalit\u00e4t kostete ihn fast sein gesamtes erwachsenes Leben: Insgesamt verbrachte er rund 32 Jahre in Gef\u00e4ngnissen und der Irrenanstalt von Charenton &ndash; wegen der genannten Sittenskandale, wegen der Beschwerde seiner Schwiegermutter, sp\u00e4ter wegen seiner Schriften. Die SX4 weicht dem Konflikt nicht aus. Sie sucht ihn, weil nur im Widerstand gegen die auferlegte Ordnung das eigene, unverf\u00e4lschte Selbst sp\u00fcrbar bleibt.</p>
        </blockquote>

        <h2 class="vb-section">3. Der F\u00fcnferfl\u00fcgel: Das System hinter dem Tabubruch</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>F\u00fcnferfl\u00fcgel (w5)</strong> gibt der sexuellen Vier den analytischen, systematisierenden Blick &ndash; die F\u00e4higkeit, das eigene Begehren nicht nur zu leben, sondern bis in seine Struktur zu durchdringen und in ein geschlossenes Gedankengeb\u00e4ude zu \u00fcbersetzen. Bei Sade zeigte sich das in der regelrecht enzyklop\u00e4dischen Systematik seiner Werke: <em>Die 120 Tage von Sodom</em> ist als mathematisch durchkomponierte Aufz\u00e4hlung angelegt, in der Begierden kategorisiert, durchnummeriert und in aufsteigender Eskalation abgehandelt werden &ndash; nicht chaotisch, sondern mit der Akribie eines Gelehrten.</p>
          <p class="vb-intro">Auch philosophisch verlie\u00df sich Sade nicht auf blo\u00dfe Provokation. Er kannte Diderot, die Aufkl\u00e4rungsphilosophie, den Materialismus seiner Zeit &ndash; und nutzte dieses intellektuelle R\u00fcstzeug, um seine radikale Ablehnung jeder Moral als Weltbild zu begr\u00fcnden, nicht nur als Verhalten zu leben. Der F\u00fcnferfl\u00fcgel verwandelte den nackten Trieb der SX4 in ein durchdachtes philosophisches System, das nach wie vor Denker von Simone de Beauvoir bis Michel Foucault besch\u00e4ftigt.</p>
          <p class="vb-intro">Diese Systematik entstand gr\u00f6\u00dftenteils in Isolation: Gro\u00dfe Teile seines Werks schrieb Sade in der Zelle, oft heimlich, auf zusammengen\u00e4hten Papierrollen. Der R\u00fcckzug des F\u00fcnferfl\u00fcgels traf hier auf die erzwungene Einsamkeit der Gefangenschaft &ndash; und wurde zum Werkzeug, mit dem er der \u00e4u\u00dferen Kontrolle seine eigene, unkontrollierbare Gedankenwelt entgegensetzte.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Bastille: Schreiben als letzter Akt der Selbstbehauptung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">1789, wenige Tage vor dem Sturm auf die Bastille, soll Sade durch das Gitter seiner Zelle den vorbeiziehenden Menschen zugerufen haben, man t\u00f6te dort drinnen die Gefangenen &ndash; ein letzter, \u00f6ffentlichkeitswirksamer Akt der Rebellion gegen die Institution, die ihn festhielt. Er wurde daraufhin in ein anderes Gef\u00e4ngnis verlegt, ohne die Chance, seine dort zur\u00fcckgelassenen Manuskripte mitzunehmen &ndash; darunter die einzige Reinschrift von <em>Die 120 Tage von Sodom</em>, die er als f\u00fcr immer verloren betrauerte. Erst Jahrzehnte nach seinem Tod tauchte die Schriftrolle wieder auf.</p>
          <p class="vb-intro">Das ist die SX4w5 in ihrer klarsten Ausprägung: Selbst in vollst\u00e4ndiger Machtlosigkeit &ndash; eingesperrt, entrechtet, seiner Freiheit beraubt &ndash; bleibt das Schreiben der eine Ort, an dem die eigene Wahrheit unangetastet bleibt. Der Stift wird zur letzten Waffe gegen eine Welt, die den K\u00f6rper einsperren, aber nicht das Denken kontrollieren kann.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten: Freiheit ohne R\u00fccksicht</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Schicksalsmuster der Vier ist der <strong>Neid</strong> &ndash; bei der SX4 als Rivalit\u00e4t, als das tiefe Gef\u00fchl, dass die bestehende Ordnung einem selbst das Wesentliche vorenth\u00e4lt. Bei Sade \u00e4u\u00dferte sich das als lebenslanger Kampf gegen jede Autorit\u00e4t, die ihm sagen wollte, was erlaubt und was verboten sei &ndash; eine Wut, die sich nicht nur philosophisch, sondern auch in konkreten \u00dcbergriffen gegen andere Menschen entlud, f\u00fcr die er wiederholt strafrechtlich verfolgt wurde.</p>
          <p class="vb-intro">Das Licht der SX4w5 liegt in der kompromisslosen Bereitschaft, unbequeme Wahrheiten \u00fcber Macht, Begehren und die Konstruiertheit gesellschaftlicher Moral auszusprechen &ndash; Sades Werk beeinflusst noch heute Philosophie, Literaturwissenschaft und die Debatte \u00fcber die Grenzen individueller Freiheit. Der Schatten liegt in der R\u00fccksichtslosigkeit, mit der die SX4 die eigene Intensit\u00e4t \u00fcber das Wohl anderer stellen kann &ndash; bei Sade nicht nur literarisch, sondern in realem Leid, das er anderen Menschen zuf\u00fcgte.</p>
          <p class="vb-intro">Der F\u00fcnferfl\u00fcgel versch\u00e4rfte diese Spannung: Wo reine Impulsivit\u00e4t irgendwann an eigenen Grenzen haltmacht, verlieh die analytische Systematik der SX4w5 dem Tabubruch eine kalte, durchdachte Konsequenz &ndash; ein Werk, das nicht aus einem einzelnen Wutausbruch besteht, sondern aus einem vollst\u00e4ndig ausgearbeiteten Gedankensystem.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Chihuahua, der der Nachwelt seinen Namen gab</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Vier f\u00fchrt von der Frage <em>Warum bin ich nicht wie die anderen, warum wird mir vorenthalten, was mir zusteht?</em> zur Erkenntnis, dass die eigene Intensit\u00e4t nicht gegen andere gerichtet werden muss, um echt zu sein. Bei Sade blieb dieser Weg zeitlebens unvollendet &ndash; seine Rivalit\u00e4t gegen die Konvention kannte kaum eine reifere, integrierte Form.</p>
          <p class="vb-intro">Sade starb 1814 in der Anstalt von Charenton, wo er seine letzten Lebensjahre verbrachte und noch Theaterst\u00fccke mit Mitpatienten inszenierte &ndash; bis zuletzt unf\u00e4hig und unwillig, sich in eine ihm auferlegte Rolle zu f\u00fcgen. Sein Name wurde zum Gattungsbegriff &bdquo;Sadismus&ldquo; &ndash; eine Sprache, die bis in die Gegenwart existiert, weil ein Chihuahua sich weigerte, sein Begehren, sein Denken und seine Wut jemals kleiner zu machen, als sie waren.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe &ndash; Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist &ndash; Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich &ndash; wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/sx4", label:"SX4 \u2013 Der Chihuahua: Subtyp-Profil"},
        {route:"beruehmte-claude-debussy", label:"Portr\xe4t: Claude Debussy (SX4w5)"},
        {route:"beruehmte-ana-de-armas", label:"Portr\xe4t: Ana de Armas (SX4w5)"},
      ])}
    </div>
  `);
}

function christianRaetschPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-christian-raetsch-portrait.jpg" alt="Dr. Christian R\u00e4tsch – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Christian R\u00e4tsch</p>
        <p class="krim-portrait-typ">SE5w4 &middot; Selbsterhaltender Typ 5 mit Viererfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Ethnologe &amp; Ethnopharmakologe, 1957&ndash;2022 &ndash; Tierentsprechung: Eule</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Die Eule</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>Eule</strong> ist das Tier des selbsterhaltenden Typs 5 &ndash; und sie ist ein Tier der Stille und der Tiefe. Sie sieht, was andere nicht sehen: in der Dunkelheit, in den Zwischenr\u00e4umen, dort, wo das gew\u00f6hnliche Auge versagt. Die Eule ist kein geselliges Tier. Sie beobachtet aus der Distanz, sie hortet ihr Wissen, sie wartet &ndash; und wenn sie handelt, dann mit einer Pr\u00e4zision, die keine Energie verschwendet. Sie ist kein Tier der gro\u00dfen Geste. Sie ist ein Tier der konzentrierten Kraft.</p>
          <p class="vb-intro">Der deutsche Ethnopharmakologe Christian R\u00e4tsch war einer der bedeutendsten Ethnopharmakologen seiner Zeit &ndash; ein Forscher, der sein Leben dem Wissen \u00fcber Heilpflanzen, R\u00e4ucherstoffe und schamanische Traditionen gewidmet hat. Sein Standardwerk <em>Enzyklop\u00e4die der psychoaktiven Pflanzen</em> gilt als das umfassendste botanisch-ethnologische Nachschlagewerk auf diesem Gebiet \u00fcberhaupt. Er hat nicht popularisiert. Er hat dokumentiert, systematisiert, bewahrt. Die Eule, die in der Dunkelheit sieht &ndash; dort, wo andere nicht hinschauen wollen oder d\u00fcrfen.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende F\u00fcnf: Die Burg</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende F\u00fcnf (SE5)</strong> ist nach Naranjo der <strong>Verst\u00e4rkungstyp</strong> der F\u00fcnf: Hier wird die Leidenschaft der F\u00fcnf &ndash; der <em>Geiz</em>, das Horten von Energie, Zeit und Raum &ndash; am st\u00e4rksten und unverh\u00fclltesten gelebt. Naranjo nannte diesen Subtyp <em>Burg</em>: Das eigene Zuhause, das eigene Territorium wird zur Festung, zur Schutzburg, hinter deren Mauern die Welt drau\u00dfen bleibt. Die SE5 ist einer der isoliertesten Typen des gesamten Enneagramms &ndash; nicht aus K\u00e4lte, sondern weil der R\u00fcckzug in die Stille und das Wissen der einzige Ort ist, an dem das Selbst sich sicher f\u00fchlt.</p>
          <p class="vb-intro">Bei Christian R\u00e4tsch zeigte sich das in der Art, wie er forschte: nicht von Universit\u00e4tslehrst\u00fchlen aus, nicht als Teil institutioneller Strukturen, sondern als unabh\u00e4ngiger Wissenschaftler, der seinen eigenen Weg ging. Er verbrachte Jahrzehnte in schamanischen Traditionen &ndash; bei den Maya in Mexiko, bei V\u00f6lkern in S\u00fcdamerika und Asien &ndash; nicht als distanzierter Beobachter, sondern als jemand, der verstehen wollte, was wirklich geschieht. Aber er blieb immer der Forscher hinter dem Thema: beobachtend, notierend, systematisierend &ndash; und in seiner Burg.</p>
          <p class="vb-intro">Der selbsterhaltende Instinkt richtet die F\u00fcnf auf die Frage aus: <em>Habe ich genug? Bin ich sicher? Habe ich gen\u00fcgend Ressourcen &ndash; an Wissen, an Raum, an Zeit &ndash; um zu \u00fcberleben?</em> Bei R\u00e4tsch wurde diese Frage zur Lebensstruktur: Das Wissen \u00fcber die Pflanzen war seine Burg &ndash; ein sicheres Territorium in einer Welt, die diesem Wissen oft mit Misstrauen oder Feindseligkeit begegnete.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Viererfl\u00fcgel: Tiefe statt Breite</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Viererfl\u00fcgel (w4)</strong> bringt der selbsterhaltenden F\u00fcnf eine charakteristische F\u00e4rbung: das Bed\u00fcrfnis nach Einzigartigkeit, nach dem Unverwechselbaren, nach dem, was andere nicht sehen oder nicht sehen wollen. Eine SE5 mit schwach ausgeprägtem Viererflügel könnte in der Breite des Wissens aufgehen – sammeln, systematisieren, archivieren. Ein stark ausgeprägter Viererflügel fragt darüber hinaus: <em>Was ist das Besondere? Was tr\u00e4gt eine eigene Seele? Was ist mehr als nur Information?</em></p>
          <p class="vb-intro">Bei Christian R\u00e4tsch zeigte sich der Viererfl\u00fcgel in seiner besonderen Affinit\u00e4t zur spirituellen und rituellen Dimension der Pflanzen. Er forschte nicht nur \u00fcber Wirksubstanzen &ndash; er forschte \u00fcber Bedeutung. \u00dcber die Frage, was eine Pflanze f\u00fcr eine Kultur bedeutet, wie sie in Ritualen eingesetzt wird, welche Weltbilder hinter ihrem Gebrauch stehen. Das ist die SE5w4: Wissen, das Tiefe sucht, nicht nur Breite. Erkenntnis, die ber\u00fchren will, nicht nur erkl\u00e4ren.</p>
          <p class="vb-intro">Der Viererfl\u00fcgel erkl\u00e4rt auch R\u00e4tschs enge Zusammenarbeit mit K\u00fcnstlern und Musikern &ndash; besonders mit der psychedelischen Szene, mit Bands wie Brainticket oder mit dem Umfeld von Timothy Leary. Die SE5w4 wei\u00df: Manche Wahrheiten lassen sich nicht nur in Lexika fassen. Sie brauchen Kunst, Ritual, Erfahrung.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der selbsterhaltenden F\u00fcnf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE5w4 ist ihre F\u00e4higkeit zur vollst\u00e4ndigen Hingabe an ein Thema &ndash; ohne Ablenkung, ohne Kompromiss, ohne den Wunsch nach sozialer Best\u00e4tigung. Christian R\u00e4tsch hat ein Werk aufgebaut, das seinesgleichen sucht: \u00fcber 30 B\u00fccher, darunter Standardwerke, die in zahlreiche Sprachen \u00fcbersetzt wurden. Das ist keine Karriere. Das ist eine Berufung. Die Eule, die zeitlebens in die Dunkelheit schaut &ndash; und dabei Licht findet.</p>
          <p class="vb-intro">Das Schicksalsmuster der F\u00fcnf ist der <strong>Geiz</strong> &ndash; nicht im materiellen Sinn, sondern als das Horten von Energie, Zeit und Wissen: <em>Ich habe nicht genug, um zu geben. Wenn ich gebe, verliere ich.</em> Bei der SE5 \u00e4u\u00dfert sich das als Tendenz zum R\u00fcckzug &ndash; hinter die B\u00fccher, hinter die Forschung, hinter die klaren Grenzen des eigenen Territoriums. Kontakt kostet Energie. Und Energie ist kostbar.</p>
          <p class="vb-intro">Der Viererfl\u00fcgel bringt die Gefahr der Isolierung durch Einzigartigkeit: Wenn das Thema so spezifisch wird, dass es kaum jemanden mehr gibt, der mitkommt, kann die SE5w4 in der eigenen Welt verschwinden &ndash; reich an Wissen, arm an Verbindung. Das ist kein Fehler. Aber es ist ein Preis.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: Vom Horten zum Teilen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der F\u00fcnf f\u00fchrt von der Frage <em>Habe ich genug, um zu geben?</em> zur Erkenntnis <em>Das Wissen wird gr\u00f6\u00dfer, wenn ich es teile &ndash; nicht kleiner.</em> F\u00fcr die SE5w4 bedeutet das, das eigene Territorium nicht als Festung zu nutzen, sondern als Ausgangspunkt: <em>Was ich wei\u00df, kann anderen helfen. Was ich gesammelt habe, kann weiterleben.</em></p>
          <p class="vb-intro">Christian R\u00e4tsch hat diesen Schritt in seinem Werk getan &ndash; indem er jahrzehntelang Wissen zug\u00e4nglich gemacht hat, das sonst verloren gegangen w\u00e4re. Die Eule, die in der Dunkelheit sieht und das, was sie sieht, in Worte fasst &ndash; damit andere es sehen k\u00f6nnen, auch wenn es hell geworden ist. Das ist das Geschenk der SE5w4: ein Wissen, das nicht f\u00fcr sich selbst geh\u00fctet wird, sondern f\u00fcr die, die nach ihm suchen.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/se5", label:"SE5 \u2013 Die Eule: Subtyp-Profil"},
        {route:"beruehmte-clemens-arvay", label:"Portr\u00e4t: Clemens G. Arvay (SE4w5)"},
        {route:"beruehmte-xu-bing", label:"Portr\u00e4t: Xu Bing (SE5w4)"},
      ])}
    </div>
  `);
}

function xuBingPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-xu-bing-portrait.jpg" alt="Xu Bing" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Xu Bing</p>
        <p class="krim-portrait-typ">SE5w4 &middot; Selbsterhaltender Typ 5 mit Viererfl\xfcgel</p>
        <p class="krim-portrait-subtitle">Konzeptk\xfcnstler, Kalligraf, geb. 1955 in Chongqing &ndash; Tierentsprechung: Eule</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Die Eule, die eine eigene Sprache erfand</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>Eule</strong> ist das Tier des selbsterhaltenden Typs 5 &ndash; ein Tier, das nicht in der Weite jagt, sondern im Detail. Sie sieht die einzelne Bewegung im Dunkel, die andere \xfcbersehen, weil sie nicht so lange stillhalten k\xf6nnen. Und sie baut sich ihr Revier nicht aus L\xe4rm, sondern aus Genauigkeit.</p>
          <p class="vb-intro">Xu Bing wurde 1955 in Chongqing geboren und wuchs an der Peking-Universit\xe4t auf, wo sein Vater die Geschichtsfakult\xe4t leitete &ndash; bis die Kulturrevolution die Familie zerst\xf6rte und den jungen Xu Bing zur Zwangsarbeit aufs Land schickte. Aus dieser Erfahrung wurde kein Bruch, sondern eine Methode: Er begann, W\xf6rter und Schriftzeichen zu sammeln, zu kopieren, zu studieren, als w\xe4re die Sprache selbst ein Ort, an dem man sich sicher verschanzen konnte, w\xe4hrend drau\xdfen die Welt zusammenbrach. Die Eule, die in der Zeit der gr\xf6\xdften \xd6ffentlichkeit lernte, sich in die Stille des Zeichens zur\xfcckzuziehen.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende F\xfcnf: Die Burg aus Zeichen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende F\xfcnf (SE5)</strong> ist nach Naranjo der Subtyp, dem er den Namen <strong>Burg</strong> gab: das eigene Territorium &ndash; hier nicht Haus oder Landschaft, sondern das eigene Handwerk, das eigene System &ndash; wird zur Festung gegen \xdcberw\xe4ltigung. Die Leidenschaft der F\xfcnf ist der <strong>Geiz</strong> &ndash; das Horten von Energie, Zeit und Aufmerksamkeit, damit nichts verloren geht, bevor es vollst\xe4ndig verstanden ist.</p>
          <p class="vb-intro">Xu Bings ber\xfchmtestes Werk, <em>Tianshu</em> (\u2039Book from the Sky\u203a, 1987&ndash;1991), ist die vielleicht radikalste K\xfcnstler-Burg der Gegenwart: \xfcber vier Jahre lang schnitzte er von Hand mehr als viertausend Schriftzeichen &ndash; jedes einzelne erfunden, keines existiert in der chinesischen Sprache, jedes aber vollkommen korrekt in Strichf\xfchrung und Aufbau, sodass es echt aussieht. Er druckte sie auf endlosen Papierb\xe4ndern und Rollen, die eine ganze Ausstellungshalle f\xfcllten &ndash; ein Werk, das aussieht wie ein Jahrtausende altes Buch, aber niemand lesen kann, nicht einmal ein Muttersprachler. Die Burg war hier w\xf6rtlich: ein System, das niemand betreten konnte au\xdfer ihm selbst.</p>
          <p class="vb-intro">Diese vier Jahre allein an einem Werktisch, das Schnitzen von Druckst\xf6cken f\xfcr Zeichen, die keine Bedeutung tragen d\xfcrfen &ndash; das ist der Geiz der F\xfcnf in seiner klarsten Ausprägung: eine Arbeit, bei der die Energie nicht nach au\xdfen str\xf6mt, bevor sie nicht bis zur letzten Konsequenz durchdacht ist.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Viererfl\xfcgel: Bedeutung als Verlust</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Viererfl\xfcgel (w4)</strong> bringt der selbsterhaltenden F\xfcnf ein Gesp\xfcr f\xfcr das Einzigartige, das Unverwechselbare, das, was mehr ist als reine Information. Eine SE5 mit schwach ausgeprägtem Viererflügel hätte vielleicht nur Wissen archiviert. Ein stark ausgeprägter Viererflügel fragt darüber hinaus: <em>Was bedeutet es, wenn Bedeutung selbst verschwindet?</em></p>
          <p class="vb-intro"><em>Tianshu</em> ist nicht nur eine technische Meisterleistung &ndash; es ist eine existenzielle Aussage \xfcber Sprache, Autorit\xe4t und Verlust. In China, wo Schriftzeichen \xfcber Jahrtausende als Tr\xe4ger von Wissen, Macht und Kultur galten, schuf Xu Bing ein Buch voller Zeichen, die genau aussehen wie Bedeutung &ndash; und doch v\xf6llig leer sind. Der Viererfl\xfcgel liest darin die Trauer \xfcber eine Kultur, deren Sprache durch politische Umbr\xfcche entwertet, verf\xe4lscht, instrumentalisiert wurde. Ein Werk, das so pr\xe4zise ist wie ein Lexikon &ndash; und so melancholisch wie ein Requiem.</p>
          <p class="vb-intro">Sp\xe4ter entwickelte er die <em>Square Word Calligraphy</em>: englische W\xf6rter, in die Form chinesischer Schriftzeichen gezwungen, sodass Westler pl\xf6tzlich lernen m\xfcssen, wie es sich anf\xfchlt, eine fremde Schrift zu entziffern. Der Viererfl\xfcgel dreht die Perspektive um &ndash; nicht um zu bel<em>e</em>hren, sondern um die eigene Erfahrung der Fremdheit zu teilen.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Werk: Von Peking nach New York und zur\xfcck</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">1990 zog Xu Bing in die USA, nachdem <em>Tianshu</em> in China wegen seiner vermeintlichen Doppeldeutigkeit als politisch verd\xe4chtig eingestuft worden war. In New York entwickelte er sein Werk weiter: <em>A Book from the Ground</em> (2003&ndash;2014), ein Roman, der ausschlie\xdflich aus international verst\xe4ndlichen Piktogrammen &ndash; Emojis, Logos, Verkehrszeichen &ndash; besteht und ohne Kenntnis irgendeiner Nationalsprache lesbar ist. Damit spiegelte er <em>Tianshu</em>: statt einer Schrift, die niemand versteht, eine Schrift, die jeder versteht.</p>
          <p class="vb-intro">2008 erhielt er den <em>MacArthur Fellowship</em> &ndash; den sogenannten \u2039Genie-Preis\u203a &ndash;, und im selben Jahr kehrte er nach China zur\xfcck, um Vizepr\xe4sident der Zentralen Akademie der K\xfcnste in Peking zu werden. Seine sp\xe4teren Installationen, etwa <em>Background Story</em>, erzeugen mit Staub, M\xfcll und Pflanzenresten hinter Milchglasscheiben monumentale Landschaftsgem\xe4lde im Stil klassischer chinesischer Tuschemalerei &ndash; sichtbar nur als Schatten, unsichtbar in ihrer wahren Materialit\xe4t. Immer dasselbe Prinzip: etwas Aufwendiges, Verborgenes, das sich nur dem enth\xfcllt, der genau genug hinschaut.</p>
          <p class="vb-intro">Jedes seiner Hauptwerke ben\xf6tigte Jahre der Vorbereitung, oft ausgef\xfchrt in fast v\xf6lliger Zur\xfcckgezogenheit, mit Assistenten, aber ohne \xf6ffentliche Zwischenschritte. Die Welt sah erst das fertige Werk &ndash; nie den Prozess. Das ist die SE5w4 in ihrer produktivsten Form: das Ergebnis so vollst\xe4ndig durchdacht pr\xe4sentieren, dass niemand die jahrelange Einsamkeit dahinter erahnt.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten: Die Eule im Zeichenwald</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE5w4 liegt in ihrer F\xe4higkeit, aus radikaler Zur\xfcckgezogenheit heraus Werke von universeller Tragweite zu schaffen. Xu Bing hat mit erfundenen Zeichen mehr \xfcber Sprache, Macht und Bedeutung gesagt als die meisten mit realen W\xf6rtern. Das ist das Geschenk der Eule: In der selbstgew\xe4hlten Dunkelheit entsteht eine Klarheit, die im L\xe4rm nicht m\xf6glich w\xe4re.</p>
          <p class="vb-intro">Das Schicksalsmuster der F\xfcnf ist der <strong>Geiz</strong> &ndash; bei der SE5 zeigt er sich als Neigung, sich jahrelang von der \xd6ffentlichkeit fernzuhalten, Prozesse nicht zu teilen, Energie erst dann freizugeben, wenn nichts mehr angreifbar ist. Xu Bings vierj\xe4hriges Schnitzen an <em>Tianshu</em>, seine Emigration nach der politischen Verd\xe4chtigung, sein R\xfcckzug in immer neue, hermetische Systeme &ndash; das ist die Burg, die sch\xfctzt, aber auch trennt.</p>
          <p class="vb-intro">Der Viererfl\xfcgel kann die Suche nach Einzigartigkeit in Isolation kippen lassen &ndash; ein Werk, das so pers\xf6nlich und so verschl\xfcsselt wird, dass es niemand mehr wirklich nachvollziehen kann. Bei Xu Bing blieb das produktiv, weil er die Verschl\xfcsselung selbst zum Thema machte &ndash; das Nicht-Verstehen-K\xf6nnen wurde zur Botschaft, nicht zum Hindernis.</p>
        </blockquote>

        <h2 class="vb-section">6. Die Eule, die eine Schrift f\xfcr alle erfand</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der F\xfcnf f\xfchrt von der Frage <em>Habe ich genug verstanden, um mich zu zeigen?</em> zur Erkenntnis <em>Das Verstandene wird wertvoller, wenn es andere erreicht.</em> F\xfcr die SE5w4 bedeutet das, die Burg nicht aufzugeben, aber ihre Mauern durchl\xe4ssig zu machen &ndash; das Einzigartige so zu gestalten, dass es nicht nur die eigene Einsamkeit spiegelt, sondern eine Br\xfccke zu anderen wird.</p>
          <p class="vb-intro">Genau diesen Schritt vollzog Xu Bing mit <em>A Book from the Ground</em>: von einer Schrift, die absichtlich niemand lesen kann, zu einer Schrift, die buchst\xe4blich jeder lesen kann, unabh\xe4ngig von Sprache, Bildung oder Herkunft. Die Eule, die zuerst eine Sprache nur f\xfcr sich selbst erfand, erfand am Ende eine Sprache f\xfcr die ganze Welt.</p>
          <p class="vb-intro">Xu Bing lebt und arbeitet heute zwischen Peking und New York. Sein Werk h\xe4ngt in den bedeutendsten Museen der Welt &ndash; vom Museum of Modern Art bis zum Victoria and Albert Museum. Das ist die selbsterhaltende F\xfcnf mit Viererfl\xfcgel. Das ist die Eule, die aus dem Verstummen eine neue Sprache schuf.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\xfchmten Pers\xf6nlichkeiten"},
        {route:"subtype/se5", label:"SE5 \u2013 Die Eule: Subtyp-Profil"},
        {route:"beruehmte-christian-raetsch", label:"Portr\xe4t: Christian R\xe4tsch (SE5w4)"},
        {route:"beruehmte-franz-kafka", label:"Porträt: Franz Kafka (SE5w4)"},
      ])}
    </div>
  `);
}

function franzKafkaPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-franz-kafka-portrait.jpg" alt="Franz Kafka" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Franz Kafka</p>
        <p class="krim-portrait-typ">SE5w4 &middot; Selbsterhaltender Typ 5 mit Viererflügel</p>
        <p class="krim-portrait-subtitle">Schriftsteller, 1883&ndash;1924 &ndash; Tierentsprechung: Eule</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Die Eule, die nachts an ihren Albträumen schrieb</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>Eule</strong> ist das Tier des selbsterhaltenden Typs 5 &ndash; ein Wesen, das die Dunkelheit nicht fürchtet, sondern braucht, um klar zu sehen. Kaum ein Schriftsteller hat diese nächtliche Existenz so wörtlich gelebt wie Franz Kafka: Tagsüber arbeitete er pflichtbewusst als Jurist bei der Arbeiter-Unfall-Versicherungsanstalt in Prag, doch sein eigentliches Leben begann erst nach Mitternacht, wenn das Elternhaus schlief und er sich allein in sein Zimmer zurückzog, um bis in die frühen Morgenstunden zu schreiben.</p>
          <p class="vb-intro">Der deutschsprachige Prager Schriftsteller Franz Kafka wurde 1883 in Prag als Sohn eines dominanten, geschäftstüchtigen Kaufmanns geboren, in eine deutschsprachige jüdische Familie inmitten der tschechischsprachigen Stadt &ndash; von früh an ein Mensch zwischen mehreren Welten, keiner davon wirklich zugehörig. "Die Verwandlung" (1915) entstand in genau einer solchen Nacht: Gregor Samsa erwacht als riesiges Ungeziefer, unfähig, sich seiner Familie verständlich zu machen &ndash; ein Bild, das Kafkas eigenes Gefühl radikaler Fremdheit im eigenen Elternhaus in Literatur verwandelte.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Fünf: Die Burg aus Pflicht und Rückzug</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Fünf (SE5)</strong> nennt Naranjo <em>Burg</em>: Das eigene Territorium wird zur Festung, die den Zugriff der Welt so weit wie möglich beschränkt. Kafka lebte bis kurz vor seinem Tod im Haus seiner Eltern, mit einem eigenen, streng abgeschirmten Zimmer als letztem Rückzugsort &ndash; ein äußerlich abhängiges, innerlich aber genau kontrolliertes Arrangement. Seine Bürotätigkeit erledigte er mit auffälliger Sorgfalt und Gründlichkeit, obwohl er sie zeitlebens als Diebstahl an seiner eigentlichen, literarischen Existenz empfand.</p>
          <p class="vb-intro">Die Leidenschaft der Fünf ist der <strong>Geiz</strong> &ndash; das Horten von Energie und Zeit, damit nichts verloren geht, bevor es vollständig durchdacht ist. Kafka veröffentlichte zu Lebzeiten nur einen Bruchteil seines Werks und äußerte immer wieder, seine Texte seien nicht fertig, nicht gut genug, nicht bereit für die Öffentlichkeit. Kurz vor seinem Tod bat er seinen Freund Max Brod, sämtliche unveröffentlichten Manuskripte &ndash; darunter "Der Prozess" und "Das Schloss" &ndash; ungelesen zu verbrennen. Brod widersetzte sich dieser letzten Anweisung und veröffentlichte die Werke stattdessen. Die Burg der SE5 zeigt sich hier in ihrer radikalsten Form: lieber das eigene Lebenswerk vernichten, als es der Welt in unvollendetem Zustand auszusetzen.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Viererflügel: Die Einzigartigkeit des eigenen Leidens</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Viererflügel (w4)</strong> gibt der selbsterhaltenden Fünf ein Gespür für das Einzigartige, das Unverwechselbare am eigenen inneren Erleben &ndash; das Gefühl, grundlegend anders zu sein als andere Menschen. Kafkas berühmter, nie abgeschickter "Brief an den Vater" (1919) ist eines der eindrücklichsten Selbstzeugnisse der Weltliteratur: über hundert Seiten, in denen er versucht, dem übermächtigen Vater die eigene, tief verletzte Existenz verständlich zu machen &ndash; ein Dokument, das weniger Anklage als verzweifelte Selbstdeutung ist.</p>
          <p class="vb-intro">Diese Intensität prägte auch seine Liebesbeziehungen: Zweimal verlobte er sich mit Felice Bauer, löste die Verlobung beide Male wieder, weil ihm die Ehe wie eine Bedrohung seiner literarischen Existenz erschien. In seinen Briefen an sie und später an Milena Jesenská entfaltete er eine Intensität, die weit über bloße Zuneigung hinausging &ndash; ein fast obsessives Ausloten der eigenen Unzulänglichkeit, des eigenen Ungenügens. Der Viererflügel macht aus persönlichem Leiden nicht nur eine Last, sondern ein Erkenntnisinstrument: Kafka schrieb einmal, ein Buch müsse "die Axt sein für das gefrorene Meer in uns" &ndash; eine Formel, die nur aus dem Zusammenspiel von rückzügiger Klarheit und viererhafter emotionaler Tiefe entstehen konnte.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Werk: Labyrinthe ohne Ausgang</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Kafkas literarisches Universum &ndash; von "Der Prozess" über "Das Schloss" bis zu Erzählungen wie "In der Strafkolonie" &ndash; kreist immer wieder um dasselbe Grundmuster: einen Einzelnen, der einem undurchschaubaren, übermächtigen System gegenübersteht, dessen Regeln er nie ganz versteht und dem er nie ganz entkommen kann. Josef K. wird in "Der Prozess" verhaftet, ohne je zu erfahren, wessen er eigentlich beschuldigt wird &ndash; ein Bild, das zum Inbegriff moderner Entfremdung wurde und dem Adjektiv "kafkaesk" seinen Namen gab.</p>
          <p class="vb-intro">Diese Werke entstanden fast ausschließlich in nächtlicher Einsamkeit, oft in einem einzigen, fiebrigen Schreibanfall, dem tagelange Erschöpfung folgte. Kafka beschrieb das Schreiben selbst als eine Form von Gebet, als den einzigen Ort, an dem er sich seiner selbst sicher sein konnte &ndash; und zugleich als etwas, das ihn von jeder gewöhnlichen bürgerlichen Existenz, von Ehe, Familie und Öffentlichkeit, endgültig ausschloss.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE5w4 zeigt sich in der schonungslosen Genauigkeit, mit der Kafka das moderne Gefühl der Entfremdung erfasste, lange bevor es zum kollektiven Lebensgefühl des zwanzigsten Jahrhunderts wurde. Kaum ein Schriftsteller hat das Ausgeliefertsein an anonyme Systeme &ndash; Bürokratie, Familie, Schuld &ndash; so genau beschrieben, ohne es zu verklären oder aufzulösen.</p>
          <p class="vb-intro">Der Schatten liegt im Preis dieser Genauigkeit: Kafkas Leben war geprägt von chronischen Selbstzweifeln, wiederholten Verlobungslösungen, einem quälenden Verhältnis zum eigenen Körper und, ab 1917, einer Tuberkulose-Diagnose, die er auch als Ausdruck seiner inneren Zerrissenheit deutete. Die Burg, die vor Überwältigung schützen sollte, wurde zugleich zum Gefängnis, das echte Nähe fast unmöglich machte.</p>
        </blockquote>

        <h2 class="vb-section">6. Die Eule, deren Werk gegen ihren Willen überlebte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Franz Kafka starb 1924 im Alter von nur 40 Jahren an den Folgen seiner Tuberkulose, in einem Sanatorium bei Wien, weitgehend unbekannt als Schriftsteller. Erst durch Max Brods Weigerung, seinen letzten Willen zu erfüllen, gelangten "Der Prozess", "Das Schloss" und "Amerika" an die Öffentlichkeit &ndash; und machten Kafka posthum zu einem der einflussreichsten Autoren des zwanzigsten Jahrhunderts.</p>
          <p class="vb-intro">Es ist eine der größten Ironien der Literaturgeschichte, dass ausgerechnet ein Mensch, dessen tiefster Instinkt der Rückzug und die Vernichtung des eigenen Werks war, zum Sinnbild einer ganzen Epoche wurde. Die Eule, die im Dunkeln schrieb, um von niemandem gesehen zu werden, wurde am Ende zu der Stimme, in der Millionen Leser ihre eigene Fremdheit in der Welt wiedererkannten.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      <p class="vb-intro">Die ab 1917 diagnostizierte Tuberkulose, die zuletzt seinen Kehlkopf befiel und ihm die Stimme nahm, wird ausführlich im eigenen <a href="javascript:void(0)" data-route="krankheitsportraets-franz-kafka">Krankheitsporträt zu Kafka</a> gedeutet.</p>
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se5", label:"SE5 – Die Eule: Subtyp-Profil"},
        {route:"beruehmte-xu-bing", label:"Porträt: Xu Bing (SE5w4)"},
        {route:"beruehmte-christian-raetsch", label:"Porträt: Christian Rätsch (SE5w4)"},
        {route:"krankheitsportraets-franz-kafka", label:"Krankheitsporträt: Franz Kafka (SE5w4)"},
      ])}
    </div>
  `);
}

function jenniferMatherPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-jennifer-mather-portrait.jpg" alt="Jennifer Mather – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Jennifer Mather</p>
        <p class="krim-portrait-typ">SO5w6 &middot; Sozialer Typ 5 mit Sechserflügel</p>
        <p class="krim-portrait-subtitle">Verhaltensforscherin, geb. 1943 &ndash; Pionierin der Oktopus-Kognitionsforschung &ndash; Tierentsprechung: Oktopus</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Oktopus</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Oktopus</strong> ist das Tier des sozialen Typs 5 &ndash; und Jennifer Mather ist, weltweit, die wohl renommierteste Oktopus-Verhaltensforscherin überhaupt. Seit 1978 veröffentlicht sie Arbeiten zur Kognition und Persönlichkeit von Kopffüßern, gilt als Pionierin der Erforschung von Oktopus-Verhalten und -Intelligenz und als eine der führenden ethischen Stimmen zum Wohl wirbelloser Tiere.</p>
          <p class="vb-intro">Das ist kein Zufall, und genau das macht diesen Fall so bemerkenswert: Die Tierentsprechungen des Enneagramms wurden lange bevor irgendjemand etwas von Jennifer Mathers Lebenswerk wusste festgelegt &ndash; unabhängig von ihr, aus der reinen Beobachtung menschlicher Charakterstrukturen heraus. Dass ausgerechnet die weltweit bekannteste Erforscherin des Oktopus selbst eine soziale Fünf ist, ist damit kein nachträglich hineininterpretiertes Detail, sondern eine verblüffende Bestätigung: Wer sein Leben der Erforschung eines bestimmten Tieres widmet, nähert sich diesem Tier oft auch deshalb an, weil es dem eigenen inneren Archetyp am nächsten steht. Ähnlich war es bei Dian Fossey und den Gorillas &ndash; auch dort deckten sich Forscherin und erforschtes Tier in ihrer Tierentsprechung.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Fünf: Wissen als Beitrag zur Gemeinschaft</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Fünf (SO5)</strong> ist nach Naranjo der Subtyp, der sein Wissen nicht privat hortet, sondern es der Gemeinschaft zur Verfügung stellt &ndash; <em>Totem</em>: Wissen als Identität, als Beitrag, als Platz innerhalb eines Kollektivs von Fachleuten. Mather, aufgewachsen in Victoria, British Columbia, entdeckte ihre Faszination für das Meer schon als Kind in den Gezeitentümpeln der kanadischen Küste &ndash; zunächst als systematische Muschelsammlerin, bevor sie begann, die Tiere in den Schalen selbst zu erkennen. Dieses frühe, geduldige Kategorisieren ist reine Fünfer-Signatur.</p>
          <p class="vb-intro">Ihr Weg war ungewöhnlich: Bachelor in Biologie an der University of British Columbia (1964), Master an der Florida State University (1972), schließlich Promotion in Psychologie an der Brandeis University &ndash; ein bewusster Wechsel des Fachs, den sie selbst als Bereicherung beschreibt: &bdquo;Ich wollte immer meinen eigenen intellektuellen Weg gehen.&ldquo; Seit 1972 forscht sie ununterbrochen an wild lebenden Oktopussen &ndash; in Bermuda, Hawaii, Bonaire und, 2013, bei einer mona­telangen Expedition nach Moorea in Französisch-Polynesien, aus der ihr Buch &bdquo;The Octopus Scientists&ldquo; entstand. Fast ihr gesamtes Berufsleben verbrachte sie an derselben Universität &ndash; Lethbridge in Alberta &ndash;, wo sie Tausende Studierende unterrichtete und zugleich ihr Forschungsprogramm aufrechterhielt: &bdquo;Mir liegt sehr viel an den Studierenden &ndash; und ich bin gleichzeitig verrückt nach Kopffüßern.&ldquo;</p>
        </blockquote>

        <h2 class="vb-section">3. Der Sechserflügel: Loyalität zur Institution, Schutz der Übersehenen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Sechserflügel</strong> bringt der sozialen Fünf ein tiefes Bedürfnis nach verlässlicher Zugehörigkeit und nach dem Schutz dessen, was von der Gemeinschaft übersehen wird. Bei Mather zeigt sich das doppelt: in der jahrzehntelangen Treue zu ein und derselben akademischen Institution, und in ihrem entschiedenen Einsatz für das Wohl wirbelloser Tiere &ndash; einer Tiergruppe, die 99 Prozent der Fauna der Erde ausmacht, aber in der Ethikforschung fast völlig unbeachtet blieb. Gemeinsam mit Kolleginnen und Kollegen gab sie den Sammelband &bdquo;The Welfare of Invertebrate Animals&ldquo; heraus und formulierte unmissverständlich: &bdquo;Wir müssen aufhören, Tiere auszubeuten. Punkt.&ldquo;</p>
          <p class="vb-intro">Das ist die soziale Fünf mit Sechserflügel im Licht: nicht der einsame Entdecker, der sein Wissen für sich behält, sondern die Forscherin, die eine ganze Disziplin dazu bewegen will, ihre ethischen Standards zu ändern &ndash; und die dafür systematisch Allianzen mit anderen Fachleuten sucht, statt allein zu kämpfen.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Forschung: Geduld statt Bühne</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Mathers wissenschaftlicher Beitrag beruht auf jahrzehntelanger, unspektakulärer Feldbeobachtung. Sie war eine der ersten, die belegten, dass Oktopusse individuelle Persönlichkeiten besitzen &ndash; zu einer Zeit, als &bdquo;Tierpersönlichkeit&ldquo; in der Wissenschaft noch als Kategoriefehler galt. Sie identifizierte drei Persönlichkeitsdimensionen bei Oktopussen: aktiv, reaktiv, zurückhaltend. Gemeinsam mit Roland Anderson dokumentierte sie erstmals Spielverhalten bei Oktopussen &ndash; das marine Äquivalent zum Ballspielen mit dem eigenen Wasserstrahl. Sie belegte Werkzeuggebrauch und die Fähigkeit von Oktopussen, einzelne Menschen wiederzuerkennen.</p>
          <p class="vb-intro">Sie selbst räumt offen ein, dass ihre geduldige, beobachtende Methode ihr weniger öffentliche Aufmerksamkeit eingebracht habe als lautstarker auftretenden Kolleginnen und Kollegen. Das ist typisch für die soziale Fünf im Licht: Der Wert liegt im Beitrag zum gemeinsamen Wissensbestand des Fachs, nicht in der eigenen Sichtbarkeit &ndash; auch wenn genau diese Zurückhaltung später durch öffentliche Würdigung eingeholt wurde: 2009 hielt sie einen TED-Talk, 2021 wirkte sie als wissenschaftliche Beraterin am Oscar-prämierten Netflix-Dokumentarfilm &bdquo;My Octopus Teacher&ldquo; mit.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Oktopus, der den Oktopus erforschte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Jennifer Mathers Lebenswerk zeigt die soziale Fünf mit Sechserflügel in ihrer produktivsten Form: eine ein ganzes Berufsleben währende, geduldige Vertiefung in ein einziges Forschungsfeld, verbunden mit dem beständigen Bedürfnis, dieses Wissen mit der wissenschaftlichen Gemeinschaft und mit Studierenden zu teilen, statt es privat zu horten. Wo eine selbsterhaltende Fünf sich in ein persönliches Refugium zurückgezogen hätte, baute Mather über Jahrzehnte ein Netzwerk aus Lehre, Forschung und Fachöffentlichkeit auf &ndash; und stellte sich, mit dem Sechserflügel im Rücken, konsequent auf die Seite der übersehenen, wirbellosen Tiere.</p>
          <p class="vb-intro">Dass ausgerechnet sie zur weltweit bekanntesten Stimme der Oktopus-Forschung wurde, liest sich im Licht des Enneagramms fast wie eine Bestätigung von außen: Der Mensch, dessen eigener Archetyp der Oktopus ist, wurde zu der Person, die der Menschheit den Geist des Oktopus näher brachte als jede andere.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
          ${bookTip("enneagramm-zoo", "27 Tierporträts – jedes Subtyp-Tier mit Charakter, Biologie und Enneagramm-Bezug.", "Enneagramm-Zoo")}
          ${bookTip("archetypen-der-tiere-im-enneagramm", "Die archetypischen Tiere der 9 Typen als innere Landkarte – Bilder, die sofort wirken.", "Archetypen der Tiere im Enneagramm")}
        </blockquote>

        ${relatedLinks([
          {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
          {route:"subtype/so5", label:"SO5 – Der Oktopus: Subtyp-Profil"},
          {route:"beruehmte-pythagoras", label:"Porträt: Pythagoras (SO5w6)"},
        ])}
        ${animalResearcherMatchBlock("beruehmte-jennifer-mather")}
      </div>
    </div>
  `);
}

function billGatesPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-bill-gates-portrait.jpg" alt="Bill Gates – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Bill Gates</p>
        <p class="krim-portrait-typ">SO5w6 &middot; Sozialer Typ 5 mit Sechserfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Microsoft-Gr\u00fcnder, geb. 1955 &ndash; Tierentsprechung: Oktopus</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Oktopus</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Oktopus</strong> ist das Tier des sozialen Typs 5 &ndash; intelligent, anpassungsf\u00e4hig, mit acht Armen gleichzeitig in alle Richtungen greifend. Er ist kein Tier der offenen Konfrontation. Er tarnt sich. Er wartet. Er umfasst sein Ziel, bevor dieses bemerkt hat, dass es umfasst wird. Und wenn er zupackt, dann mit einer Kraft, die man von au\u00dfen nicht erahnt h\u00e4tte.</p>
          <p class="vb-intro">Der US-amerikanische Unternehmer Bill Gates ist dieser Oktopus &ndash; und das ist kein Lob. Es ist eine Beschreibung. Einer der reichsten Menschen der Welt, Gr\u00fcnder von Microsoft, heute als Investor und Stiftungsgeber bekannt. Aber hinter dem freundlichen Pullover und dem bescheidenen Auftreten liegt ein Muster, das sich durch sein gesamtes Leben zieht: die systematische Kontrolle \u00fcber das, was andere brauchen. Und der unersch\u00fctterliche Glaube, dass er derjenige sein sollte, der entscheidet, wie es genutzt wird.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale F\u00fcnf: Das Totem als Machtinstrument</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale F\u00fcnf (SO5)</strong> ist nach Naranjo der Subtyp, der Wissen mit der Gemeinschaft teilt &ndash; <em>Totem</em>: das Wissen als Identit\u00e4t, als Band, als Beitrag. Im Licht ist das ein Geschenk. Im Schatten wird das Totem zum Thron: <em>Ich definiere, was Wissen ist. Ich entscheide, was z\u00e4hlt. Und wer Zugang will, kommt zu mir.</em></p>
          <p class="vb-intro">Microsoft war kein Unternehmen, das ein besseres Produkt baute und damit gewann. Es war ein Unternehmen, das M\u00e4rkte systematisch verschloss. In den 1990er Jahren f\u00fchrten die USA und die EU Antitrust-Verfahren gegen Microsoft &ndash; mit dem Ergebnis, dass das Unternehmen Wettbewerber aktiv behindert, Hersteller unter Druck gesetzt und Konkurrenzprodukte aus dem Markt gedr\u00e4ngt hatte. Der Browser-Krieg, die Knebelung von Herstellern, die sogenannte \u201eEmbrace, extend, extinguish"-Strategie: erst den Standard \u00fcbernehmen, dann erweitern, dann den Konkurrenten aussperren. Das ist kein Kapitalismus. Das ist Kontrolle.</p>
          <p class="vb-intro">Das Totem der SO5 ist hier zum Monopol geworden: <em>Jeder braucht mein System. Und weil jeder mein System braucht, braucht jeder mich.</em></p>
        </blockquote>

        <h2 class="vb-section">3. Der Sechserfl\u00fcgel: Systeme bauen, Systeme kontrollieren</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Sechserfl\u00fcgel</strong> bringt der sozialen F\u00fcnf ein tiefes Bed\u00fcrfnis nach Sicherheit durch Systeme: Regeln, Strukturen, Allianzen &ndash; Netzwerke, die sch\u00fctzen. Im Licht ist das Verl\u00e4sslichkeit. Im Schatten ist es die \u00dcberzeugung, dass man die Systeme selbst bauen muss &ndash; denn nur dann kann man sicher sein, dass sie funktionieren. F\u00fcr einen, der so denkt.</p>
          <p class="vb-intro">Als Gates die Welt der Technologie zu durchdringen begann, wandte er sich einem neuen System zu: der globalen Gesundheit. Die <em>Gates Foundation</em> &ndash; einst <em>Bill &amp; Melinda Gates Foundation</em>, bis die Scheidung auch den Namen ver\u00e4nderte &ndash; ist heute einer der gr\u00f6\u00dften privaten Geldgeber der Weltgesundheitsorganisation WHO &ndash; und damit einer der einflussreichsten Akteure in der globalen Gesundheitspolitik \u00fcberhaupt. Ein Privatmann ohne demokratische Legitimation entscheidet mit, welche Krankheiten bek\u00e4mpft werden, welche Forschung gef\u00f6rdert wird, welche L\u00e4nder welche Gesundheitsprogramme erhalten.</p>
          <p class="vb-intro">Gates selbst hat in einem CNBC-Interview 2019 erkl\u00e4rt, dass Investitionen in Impfstoffe eine Rendite von etwa 20:1 br\u00e4chten &ndash; zwanzig Dollar zur\u00fcck f\u00fcr jeden investierten Dollar. Man kann das als n\u00fcchterne Kosten-Nutzen-Rechnung lesen. Man kann es auch als Offenbarung lesen: <em>Philanthropie rechnet sich.</em> Das ist die SO5w6 im Schatten: Wissen als Investition, Hilfe als Gesch\u00e4ftsmodell, N\u00e4chstenliebe als Portfolio.</p>
        </blockquote>

        <h2 class="vb-section">4. Schatten: Geiz, Kontrolle und die Epstein-Verbindung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Schicksalsmuster der F\u00fcnf ist der <strong>Geiz</strong> &ndash; aber nicht nur Geiz im materiellen Sinn. Es ist das Horten von Einfluss, von Zugang, von Kontrolle. <em>Ich gebe &ndash; aber ich behalte die Entscheidungsgewalt dar\u00fcber, wem ich wie viel gebe, wof\u00fcr und unter welchen Bedingungen.</em> Gates' Stiftungsarbeit folgt diesem Muster: Sie ist gro\u00df, sie ist sichtbar &ndash; und sie ist nie wirklich aus der Hand gegeben.</p>
          <p class="vb-intro">Schwerer wiegt, was \u00fcber seine Verbindung zu Jeffrey Epstein bekannt ist. Epstein war ein verurteilter Sexualstraft\u00e4ter &ndash; und Gates traf sich nach dieser Verurteilung wiederholt mit ihm, flog auf seinem Privatjet, pflegte eine Beziehung, die nach Epsteins Tod ans Licht kam. Gates erkl\u00e4rte zun\u00e4chst, Epstein kaum zu kennen. Als die E-Mails und Zeugenaussagen das Gegenteil belegten, sprach er von einem \u201eFehler". Die Verbindung spielte auch eine Rolle bei der Scheidung von Melinda Gates, die laut Berichten \u00fcber das Ausma\u00df der Beziehung entsetzt war.</p>
          <p class="vb-intro">Das ist kein Lapsus. Das ist ein Muster: ein Mann, der \u00f6ffentlich Kontrolle \u00fcber sein Image aufrechterh\u00e4lt &ndash; und privat Verbindungen pflegt, die diesem Image fundamental widersprechen. Der Oktopus, der tarnt und umfasst.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: Macht loslassen, nicht verteilen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der F\u00fcnf f\u00fchrt von der Frage <em>Habe ich genug?</em> zur Erkenntnis <em>Ich habe mehr als genug &ndash; und das Festhalten macht mich nicht sicherer, sondern \u00e4rmer.</em> F\u00fcr die SO5w6 im Schatten bedeutet das etwas Radikales: nicht nur Geld verteilen, sondern Macht abgeben. Nicht entscheiden, wer welche Impfstoffe bekommt &ndash; sondern die Entscheidung denen \u00fcberlassen, die betroffen sind. Nicht Systeme bauen, in denen man selbst unentbehrlich bleibt &ndash; sondern Systeme st\u00e4rken, die ohne einen selbst funktionieren.</p>
          <p class="vb-intro">Ob Bill Gates diesen Schritt je gehen wird, bleibt offen. Was bleibt, ist das Bild: ein Oktopus, der mit acht Armen greift und h\u00e4lt &ndash; und der vielleicht noch nicht begriffen hat, dass das Loslassen der Akt w\u00e4re, der wirklich etwas ver\u00e4ndert.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/so5", label:"SO5 \u2013 Der Oktopus: Subtyp-Profil"},
        {route:"beruehmte-gertrude-elion", label:"Portr\u00e4t: Gertrude Belle Elion (SO5w4)"},
        {route:"beruehmte-pythagoras", label:"Porträt: Pythagoras (SO5w6)"},
      ])}
    </div>
  `);
}

function pythagorasPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-pythagoras-portrait.jpg" alt="Pythagoras" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Pythagoras</p>
        <p class="krim-portrait-typ">SO5w6 · Sozialer Typ 5 mit Sechserflügel</p>
        <p class="krim-portrait-subtitle">Griechischer Philosoph und Mathematiker, ca. 570–495 v. Chr. – Tierentsprechung: Oktopus</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Oktopus, der sein Wissen in einen Orden goss</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Oktopus</strong> ist das Tier der sozialen Fünf – intelligent, vielarmig, in der Lage, mehrere Dinge gleichzeitig zu erfassen und zu ordnen, ohne sich dabei offen zu exponieren. Pythagoras wurde um 570 v. Chr. auf der Insel Samos geboren und bereiste als junger Mann Ägypten und vermutlich auch Babylon, wo er sich mit Geometrie, Astronomie und den Zahlenlehren älterer Kulturen vertraut machte – Wissen, das er sammelte, bevor er begann, es in ein eigenes System zu übersetzen.</p>
          <p class="vb-intro">Um 530 v. Chr. ließ er sich in Kroton in Süditalien nieder und gründete dort eine Gemeinschaft, die zugleich Forschungszirkel, religiöser Orden und politischer Bund war. Der Oktopus verbirgt sich nicht in Isolation – er baut sich ein Gehäuse, eine Struktur, innerhalb derer er das Wissen kontrolliert, das er nach außen nur in genau bemessenen Dosen weitergibt.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Fünf: Totem als geteiltes, aber gehütetes Wissen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Fünf (SO5)</strong> nennt Naranjo <em>Totem</em>: Wissen wird nicht privat gehortet, sondern der Gemeinschaft zur Verfügung gestellt – doch die Fünf bleibt diejenige, die bestimmt, wer Zugang erhält und in welchem Umfang. Genau dieses Muster prägte die pythagoreische Schule: Sie unterschied zwischen den <em>Akusmatikern</em>, die Lehrsätze nur auswendig zu befolgen hatten, ohne deren Begründung zu erfahren, und den <em>Mathematikern</em>, dem inneren Kreis, dem allein die eigentlichen Beweise und Hintergründe zugänglich waren.</p>
          <p class="vb-intro">Neuankömmlinge mussten der Überlieferung nach mehrere Jahre in Schweigen verbringen, bevor sie überhaupt sprechen und Fragen stellen durften. Das Wissen wurde also geteilt – aber gestuft, kontrolliert, an Loyalität und Bewährung geknüpft. Das Totem der SO5 zeigt sich hier pur: Zugehörigkeit über Wissen, aber Wissen nur gegen Beweis der Zugehörigkeit.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Sechserflügel: Sicherheit durch Regel und Loyalität</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Sechserflügel (w6)</strong> gibt der sozialen Fünf ein tiefes Bedürfnis nach Sicherheit durch verbindliche Systeme, Hierarchie und Loyalität zur Lehre. Der pythagoreische Bund war streng geregelt: gemeinsames Eigentum, vegetarische Ernährung, ein Verbot, Bohnen zu essen, feste Rituale beim Aufstehen und vor dem Schlafengehen, eine klare Rangordnung der Mitglieder. Wer aufgenommen wurde, unterwarf sich einem Regelwerk, das jeden Lebensbereich durchdrang.</p>
          <p class="vb-intro">Zentral war die bedingungslose Berufung auf die Autorität des Meisters: Widersprach jemand einer Lehre, genügte die Antwort "autós épha" – "er selbst hat es gesagt". Eine eigene Prüfung der Aussage war nicht vorgesehen, das Wort des Gründers selbst war die Sicherheit, an der sich die Gemeinschaft festhielt. Der Sechserflügel sucht nicht die individuelle Erleuchtung der Vier, sondern die Verlässlichkeit eines Systems, dessen Regeln für alle gleichermaßen gelten.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Leidenschaft: Geiz als Wissenshoheit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Leidenschaft der Fünf heißt <strong>Geiz</strong> – bei der SO5w6 gerichtet nicht auf materiellen Besitz, sondern auf die Hoheit über Wissen und dessen Weitergabe. Die berühmte Verschwiegenheitsregel des Ordens verlangte, dass mathematische und philosophische Entdeckungen innerhalb der Gemeinschaft blieben. Der Legende nach wurde ein Mitglied, Hippasos von Metapont, dafür bestraft oder sogar getötet, weil er das Geheimnis der irrationalen Zahlen – entdeckt an der Diagonale des Quadrats – nach außen getragen haben soll.</p>
          <p class="vb-intro">Ob diese Geschichte historisch verbürgt ist, bleibt umstritten, doch sie zeigt exemplarisch, wie ernst dem Orden die Kontrolle über sein Wissen war: Eine Entdeckung, die dem eigenen Weltbild – der Harmonie aller Dinge in ganzen Zahlenverhältnissen – widersprach, durfte die Gemeinschaft nicht ungefiltert verlassen. Der Geiz der SO5w6 zeigt sich nicht im Zurückhalten aus Not, sondern im Bewachen einer Ordnung, die durch unkontrolliertes Wissen ins Wanken geraten könnte.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO5w6 zeigt sich in der enormen intellektuellen Leistung, die aus dieser strukturierten Gemeinschaft hervorging: der nach Pythagoras benannte Lehrsatz über die Seiten des rechtwinkligen Dreiecks, die Entdeckung, dass musikalische Harmonien auf einfachen Zahlenverhältnissen beruhen, die Vorstellung einer nach mathematischen Prinzipien geordneten Kosmos – die "Sphärenharmonie". Aus der Sicherheit der Gemeinschaft heraus entstand eine Denkweise, die Mathematik erstmals als eigenständige, beweisbare Wissenschaft begriff.</p>
          <p class="vb-intro">Der Schatten liegt in der politischen Geschlossenheit des Ordens: Die Pythagoreer gewannen in Kroton erheblichen politischen Einfluss, was Misstrauen und Widerstand in der Bevölkerung weckte. Um 500 v. Chr. kam es zu gewaltsamen Ausschreitungen gegen den Bund, Versammlungshäuser wurden niedergebrannt, zahlreiche Mitglieder getötet. Ein System, das Sicherheit durch Abgrenzung und Hierarchie suchte, wurde am Ende von genau jener Gemeinschaft angegriffen, aus der es seine Legitimation bezogen hatte.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Vermächtnis: Zahl als Weltordnung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Pythagoras selbst floh den Berichten zufolge nach den Unruhen aus Kroton und starb um 495 v. Chr. in Metapont, ohne dass sein genaues Lebensende gesichert überliefert ist. Sein Name blieb dennoch untrennbar mit dem Grundsatz "alles ist Zahl" verbunden – der Überzeugung, dass hinter der sichtbaren Welt eine mathematisch geordnete, erkennbare Struktur liegt.</p>
          <p class="vb-intro">Der Oktopus mit Sechserflügel hinterließ damit mehr als einen Lehrsatz: Er hinterließ die Haltung, dass Wissen am sichersten in einer Gemeinschaft aufgehoben ist, die sich durch klare Regeln, gemeinsame Verpflichtung und die Autorität einer verlässlichen Lehre zusammenhält – ein Denken, das über die Antike hinaus in die Mathematik, die Philosophie Platons und bis in die moderne Naturwissenschaft hineinwirkte.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/so5", label:"SO5 – Der Oktopus: Subtyp-Profil"},
        {route:"beruehmte-bill-gates", label:"Porträt: Bill Gates (SO5w6)"},
        {route:"beruehmte-guenther-jauch", label:"Porträt: Günther Jauch (SO5w6)"},
        {route:"beruehmte-heraklit", label:"Porträt: Heraklit (SO4w5) – der ihn in seinen Fragmenten scharf kritisierte"},
        {route:"beruehmte-isaac-newton", label:"Porträt: Isaac Newton (SO5w6)"},
      ])}
    </div>
  `);
}

function isaacNewtonPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-isaac-newton-portrait.jpg" alt="Isaac Newton" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Isaac Newton</p>
        <p class="krim-portrait-typ">SO5w6 · Sozialer Typ 5 mit Sechserflügel</p>
        <p class="krim-portrait-subtitle">Englischer Physiker, Mathematiker und Naturphilosoph, 1642/43–1727 – Tierentsprechung: Oktopus</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Oktopus, der sein Wissen jahrzehntelang verbarg</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Oktopus</strong> ist das Tier der sozialen Fünf – intelligent, vielarmig, in der Lage, Wissen zu sammeln und zu ordnen, ohne sich dabei offen zu zeigen. Kaum eine historische Gestalt verkörpert diese Verborgenheit so vollständig wie Isaac Newton: Er entwickelte in den Pestjahren 1665/66, zurückgezogen auf dem elterlichen Gut in Woolsthorpe, die Grundlagen der Infinitesimalrechnung, der Gravitationstheorie und wesentliche Teile seiner Optik – und veröffentlichte fast nichts davon für zwanzig Jahre.</p>
          <p class="vb-intro">Erst 1687, auf beharrliches Drängen seines Freundes Edmond Halley, erschienen die "Philosophiae Naturalis Principia Mathematica" – eines der einflussreichsten wissenschaftlichen Werke der Geschichte, das Newton über zwei Jahrzehnte lang fast ausschließlich für sich behalten hatte. Der Oktopus verbirgt sich nicht aus Schwäche. Er verbirgt sich, weil er die Kontrolle darüber behalten will, wann und wie sein Wissen die Welt erreicht.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Fünf: Geheimes Wissen als Schutzraum</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Fünf (SO5)</strong> nennt Naranjo <em>Totem</em>: Wissen wird der Gemeinschaft zugänglich gemacht – doch stets in kontrollierten, selbst bestimmten Dosen. Bei Newton ging diese Kontrolle weit über wissenschaftliche Vorsicht hinaus: Über drei Jahrzehnte verfasste er mehr als eine Million Wörter zur Alchemie – Experimente, Rezepturen, Deutungen alter Texte –, von denen zu Lebzeiten fast nichts veröffentlicht wurde. Erst im 20. Jahrhundert kamen diese Manuskripte wieder ans Licht und zeigten eine ganz andere Seite des vermeintlich reinen Rationalisten.</p>
          <p class="vb-intro">Noch brisanter war sein verborgenes theologisches Werk: Newton kam durch jahrelanges Bibelstudium zu der Überzeugung, die Dreifaltigkeitslehre sei eine spätere Verfälschung des ursprünglichen Christentums – eine arianische, in England als Häresie geltende Position. Da eine Fellowship am Trinity College Cambridge die Ordination zum anglikanischen Priester voraussetzte, hielt er diese Überzeugung zeitlebens geheim und sicherte sich stattdessen 1675 eine seltene königliche Ausnahmegenehmigung. Das Totem der SO5 zeigt sich hier in seiner riskantesten Form: Wissen, das öffentlich sein Leben hätte zerstören können, wurde in Zehntausenden Manuskriptseiten verborgen gehalten.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Sechserflügel: Sicherheit durch Institution und Autorität</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Sechserflügel (w6)</strong> gibt der sozialen Fünf ein tiefes Bedürfnis nach Sicherheit durch verbindliche Systeme und institutionelle Macht. 1703 wurde Newton Präsident der Royal Society und blieb es bis zu seinem Tod – ein Amt, das er nutzte, um wissenschaftliche Orthodoxie durchzusetzen und Widerspruch systematisch zu unterdrücken. Nach seinem Amtsantritt verschwand ausgerechnet das einzige bekannte Porträt seines langjährigen Rivalen Robert Hooke aus den Beständen der Gesellschaft – ein auch heute noch ungeklärter Vorfall, der Newtons Ruf als nachtragender Institutionsherrscher untermauerte.</p>
          <p class="vb-intro">Auch als Leiter der Royal Mint ab 1696 zeigte sich dieser Flügel: Newton verfolgte Geldfälscher mit obsessiver Systematik, verhörte Verdächtige persönlich, verkleidete sich Berichten zufolge, um in Wirtshäusern Hinweise zu sammeln, und trug maßgeblich dazu bei, dass zahlreiche Fälscher hingerichtet wurden. Sicherheit bedeutete für den Sechserflügel nicht nur eigene Kontrolle, sondern die kompromisslose Durchsetzung von Recht und Ordnung als Institution.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Leidenschaft: Geiz als Prioritätsanspruch</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Leidenschaft der Fünf heißt <strong>Geiz</strong> – bei der SO5w6 gerichtet auf die Hoheit über das eigene Wissen und dessen Anerkennung. Newtons jahrzehntelanger Streit mit Gottfried Wilhelm Leibniz (SO3w4) um die Erfindung der Infinitesimalrechnung zeigt dieses Muster in seiner erbittertsten Form: 1712 ließ Newton als Präsident der Royal Society eine angeblich unabhängige Untersuchungskommission einsetzen, deren Abschlussbericht er heimlich selbst mitverfasste – ein Urteil, das erwartungsgemäß zu seinen Gunsten ausfiel.</p>
          <p class="vb-intro">Ein ganz ähnliches Muster prägte seine frühere Rivalität mit Robert Hooke über die Gesetze der Optik und der Gravitation: Newton reagierte auf Hookes Kritik mit jahrelangem beleidigtem Schweigen und verzögerte die Veröffentlichung eigener Werke, bis Hooke 1703 gestorben war. Sein berühmter Satz, er habe nur "auf den Schultern von Riesen" gestanden, wird gern als Geste der Bescheidenheit gelesen – von Zeitgenossen jedoch auch als versteckte Spitze gegen den kleinwüchsigen Hooke gedeutet. Der Geiz der SO5w6 zeigt sich nicht im Verbergen aus Not, sondern im unnachgiebigen Wachen über den eigenen Anteil am Ruhm.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO5w6 zeigt sich in der schieren Tragweite von Newtons öffentlichem Werk: die drei Bewegungsgesetze, das Gravitationsgesetz, die Zerlegung des weißen Lichts in seine Spektralfarben, die Infinitesimalrechnung – ein Fundament, auf dem die gesamte klassische Physik der folgenden zwei Jahrhunderte aufbaute. Aus der Sicherheit seiner jahrelangen Zurückgezogenheit entstand ein Werk von beispielloser Geschlossenheit.</p>
          <p class="vb-intro">Der Schatten liegt in der Unversöhnlichkeit, mit der Newton jede Bedrohung seiner intellektuellen Hoheit beantwortete: Kritiker wurden nicht diskutiert, sondern institutionell ausgeschaltet; Rivalen wurden nicht widerlegt, sondern über Jahrzehnte bekämpft. Die gleiche Kraft, die ihn befähigte, zwanzig Jahre an einem Werk zu arbeiten, ohne es preiszugeben, machte ihn auch unfähig, eine Kränkung oder einen Prioritätsanspruch je wirklich loszulassen.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Vermächtnis: Der verborgene Grund der sichtbaren Ordnung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Newton starb 1727 in London, unverheiratet, kinderlos, und wurde mit einem Staatsbegräbnis in der Westminster Abbey beigesetzt – eine Ehre, die zuvor kaum einem Naturwissenschaftler zuteilgeworden war. Der französische Philosoph Voltaire, der der Beerdigung beiwohnte, zeigte sich tief beeindruckt davon, wie England einen Gelehrten wie einen König verehrte.</p>
          <p class="vb-intro">Der Oktopus mit Sechserflügel hinterließ damit ein doppeltes Erbe: nach außen die sichtbare, unerschütterliche Ordnung der klassischen Mechanik, die die Welt drei Jahrhunderte lang erklärte – nach innen ein Leben, das den größten Teil seines eigentlichen Denkens, seiner Zweifel und seiner häretischen Überzeugungen bis zum Tod verborgen hielt. Erst die Wiederentdeckung seiner alchemistischen und theologischen Manuskripte im 20. Jahrhundert zeigte, wie viel von diesem Universalgenie tatsächlich im Verborgenen blieb.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/so5", label:"SO5 – Der Oktopus: Subtyp-Profil"},
        {route:"beruehmte-gottfried-wilhelm-leibniz", label:"Porträt: Gottfried Wilhelm Leibniz (SO3w4) – sein erbittertster wissenschaftlicher Rivale"},
        {route:"beruehmte-pythagoras", label:"Porträt: Pythagoras (SO5w6)"},
        {route:"beruehmte-bill-gates", label:"Porträt: Bill Gates (SO5w6)"},
        {route:"beruehmte-dirk-rossmann", label:"Porträt: Dirk Rossmann (SO5w6)"},
        {route:"krankheitsportraets-isaac-newton", label:"Krankheitsporträt: Isaac Newton (SO5w6) – Nervenzusammenbruch durch Quecksilbervergiftung"},
        {route:"bibel-gamaliel", label:"Bibel-Porträt: Gamaliel (SO5w6)"},
      ])}
    </div>
  `);
}

function georgWilhelmFriedrichHegelPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-georg-wilhelm-friedrich-hegel-portrait.jpg" alt="Georg Wilhelm Friedrich Hegel" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Georg Wilhelm Friedrich Hegel</p>
        <p class="krim-portrait-typ">SO5w6 · Sozialer Typ 5 mit Sechserflügel</p>
        <p class="krim-portrait-subtitle">Deutscher Philosoph, 1770–1831 – Tierentsprechung: Oktopus</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Oktopus, der die ganze Wirklichkeit umfassen wollte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Oktopus</strong> ist das Tier der sozialen Fünf – intelligent, vielarmig, in der Lage, alles um sich herum zu erfassen und in ein einziges, geordnetes Ganzes zu übersetzen. Hegel brauchte ungewöhnlich lange, bis er dieses Ganze öffentlich ausbreiten konnte: Nach dem Studium am Tübinger Stift arbeitete er jahrelang als Hauslehrer und Zeitungsredakteur, bevor er erst 1816, mit 46 Jahren, seine erste ordentliche Professur in Heidelberg erhielt – ein für seine Zeit spätes akademisches Debüt, dem eine lange Phase des stillen, zurückgezogenen Systemschreibens vorausging.</p>
          <p class="vb-intro">Sein erstes Hauptwerk, die "Phänomenologie des Geistes", vollendete er 1806 in Jena – der Überlieferung nach in der Nacht vor der Schlacht bei Jena, während napoleonische Truppen bereits die Stadt besetzten. Als er Napoleon selbst durch die Straßen reiten sah, beschrieb er ihn in einem Brief als "die Weltseele zu Pferde". Der Oktopus arbeitet im Verborgenen an seinem System, auch wenn die Welt draußen in Flammen steht.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Fünf: Das System als Totem</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Fünf (SO5)</strong> nennt Naranjo <em>Totem</em>: Wissen wird der Gemeinschaft zugänglich gemacht, doch nur als Teil eines größeren, selbst konstruierten Ganzen, das der Fünf Bedeutung und Sicherheit verleiht. Hegels gesamtes Werk ist genau dieser Impuls, radikal zu Ende gedacht: Er wollte nicht einzelne Erkenntnisse liefern, sondern ein einziges System, das Logik, Naturphilosophie, Geschichte, Kunst, Religion und Staat lückenlos ineinander einbettet – die "Wissenschaft der Logik" (1812–1816) und die "Enzyklopädie der philosophischen Wissenschaften" (1817) sollten buchstäblich alles erklären, was erklärbar ist.</p>
          <p class="vb-intro">Zentral war dabei sein dialektisches Verfahren: Jeder Gedanke, jede geschichtliche Epoche, jede Gesellschaftsform trägt für Hegel einen inneren Widerspruch in sich, der sie über sich selbst hinaustreibt, bis sie in einer höheren, umfassenderen Einheit aufgehoben wird. Das Totem der SO5 zeigt sich hier in seiner ehrgeizigsten Form: Nichts soll außerhalb des Systems stehen bleiben – jeder Widerspruch wird eingemeindet, verarbeitet, integriert.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Sechserflügel: Sicherheit durch Staat und Lehrautorität</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Sechserflügel (w6)</strong> gibt der sozialen Fünf ein tiefes Bedürfnis nach Sicherheit durch Institution und anerkannte Autorität. Ab 1818 lehrte Hegel an der Universität Berlin, wo er rasch zur beherrschenden philosophischen Instanz Preußens aufstieg – seine Vorlesungen zogen Hunderte Studenten an, seine Schüler bildeten eine regelrechte Schule, den "Hegelianismus", der jahrzehntelang das deutsche Geistesleben prägte.</p>
          <p class="vb-intro">In seiner "Rechtsphilosophie" (1820) formulierte er den bis auf den heutigen Tag umstrittenen Satz: "Was vernünftig ist, das ist wirklich; und was wirklich ist, das ist vernünftig" – ein Satz, der von Zeitgenossen wie Nachwelt oft als Rechtfertigung der bestehenden preußischen Staatsordnung gelesen wurde. Hegel avancierte damit faktisch zum inoffiziellen Staatsphilosophen Preußens. Der Sechserflügel sucht Sicherheit nicht in individueller Abweichung, sondern im Einklang zwischen dem eigenen System und der bestehenden, verlässlichen Ordnung.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Leidenschaft: Geiz als Systemvollständigkeit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Leidenschaft der Fünf heißt <strong>Geiz</strong> – bei der SO5w6 gerichtet nicht auf materiellen Besitz, sondern auf die vollständige Kontrolle über das eigene gedankliche Territorium. Hegels notorisch schwer zugängliche, oft bewusst kryptische Prosa war für viele Zeitgenossen ein Ärgernis – Schopenhauer etwa nannte ihn einen "geistlosen, abgeschmackten, widerlich-eckelhaften Scharlatan". Doch diese Schwerverständlichkeit lässt sich auch als Schutzmechanismus lesen: Wer den vollen Zugang zum System will, muss sich die Mühe seiner Sprache und Methode aneignen – ein gestufter Zugang zum Wissen, nicht unähnlich dem geheimen Bund des Pythagoras.</p>
          <p class="vb-intro">Auch sein Umgang mit philosophischen Konkurrenten zeigte diesen Zug: Sein einstiger Studienfreund Schelling, mit dem er sich das Zimmer im Tübinger Stift geteilt hatte, wurde in Hegels reifem System kaum noch gewürdigt, seine früheren Positionen implizit als überwundene Vorstufe der eigenen Philosophie behandelt. Der Geiz der SO5w6 hortet nicht nur Wissen – er beansprucht, die einzig gültige, abschließende Form dieses Wissens zu besitzen.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO5w6 zeigt sich in der schieren intellektuellen Reichweite von Hegels System: die Idee, dass Geschichte einen erkennbaren, vernünftigen Verlauf hat, dass Freiheit sich schrittweise im Weltgeschehen entfaltet, dass Widerspruch nicht bloß Störung, sondern Motor der Erkenntnis ist – diese Gedanken prägten die gesamte Philosophie des 19. und 20. Jahrhunderts, weit über seine unmittelbaren Anhänger hinaus.</p>
          <p class="vb-intro">Der Schatten liegt in der Geschlossenheit des Anspruchs: Ein System, das behauptet, alles erklären zu können, lässt wenig Raum für das, was sich wirklich nicht einfügen lässt. Schon kurz nach Hegels Tod zerbrach seine Schule in Linkshegelianer (Feuerbach, später Marx), die das System radikal gegen Religion und Staat wendeten, und Rechtshegelianer, die es konservativ-religiös lasen – ein Riss, der zeigte, wie sehr die vermeintliche Geschlossenheit des Systems selbst zum Streitobjekt werden konnte, sobald die ordnende Autorität seines Urhebers fehlte.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Vermächtnis: Der Widerspruch, der ihn überlebte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Hegel starb 1831 in Berlin während einer Cholera-Epidemie, auf dem Höhepunkt seines Ansehens als führender Philosoph Preußens. Kaum ein Jahrzehnt später begann sein einstiger Schüler Karl Marx (SO8w9), Hegels dialektische Methode radikal umzudeuten: Er übernahm die Dialektik, stellte sie aber, wie er es selbst formulierte, "vom Kopf auf die Füße" – nicht der Geist, sondern die materiellen Produktionsverhältnisse trieben für Marx die Geschichte voran.</p>
          <p class="vb-intro">Auch Søren Kierkegaard (SE2w1) machte sich "das System" – wie er es meist nur nannte – zum lebenslangen Gegner: Gegen Hegels Anspruch, das Individuum restlos in eine übergeordnete, weltgeschichtliche Vernunft einzubetten, setzte er die unauflösbare, gerade nicht systematisierbare Existenz des Einzelnen. Der Oktopus mit Sechserflügel hinterließ damit kein stilles Denkmal, sondern ein System, das noch im Widerspruch – durch seine schärfsten Kritiker – lebendig blieb: Kaum ein Philosoph des 19. Jahrhunderts wurde so gründlich bekämpft und blieb dabei so unübergehbar.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/so5", label:"SO5 – Der Oktopus: Subtyp-Profil"},
        {route:"beruehmte-karl-marx", label:"Porträt: Karl Marx (SO8w9) – sein Schüler, der die Dialektik ›vom Kopf auf die Füße‹ stellte"},
        {route:"beruehmte-soeren-kierkegaard", label:"Porträt: Søren Kierkegaard (SE2w1) – lebenslanger Gegner des ›Systems‹"},
        {route:"beruehmte-isaac-newton", label:"Porträt: Isaac Newton (SO5w6)"},
        {route:"beruehmte-pythagoras", label:"Porträt: Pythagoras (SO5w6)"},
      ])}
    </div>
  `);
}

function kollegahPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-kollegah-portrait.jpg" alt="Kollegah – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Kollegah</p>
        <p class="krim-portrait-typ">SX6w5 &middot; Sexueller Typ 6 mit F\u00fcnferfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Rapper, K\u00fcnstler &amp; Unternehmer, geb. 1984 &ndash; 2016 zum Islam \u00fcbergetreten &ndash; Tierentsprechung: Wolf</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Wolf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Wolf</strong> ist das Tier des sexuellen Typs 6 &ndash; ein Raubtier, das nicht aus Bosheit t\u00f6tet, sondern aus Notwendigkeit. Er lebt in Hierarchien, er k\u00e4mpft um seine Position, und er zeigt seine Z\u00e4hne, nicht weil er Freude am Schmerz hat, sondern weil er wei\u00df: Wer sich nicht durchsetzt, wird verdr\u00e4ngt. Der Wolf hat Angst &ndash; und er verwandelt diese Angst in Kraft.</p>
          <p class="vb-intro">Der deutsche Rapper Kollegah &ndash; b\u00fcrgerlicher Name Felix Antoine Blume, geb. 1984 in Singen &ndash; ist dieser Wolf. Einer der kommerziell erfolgreichsten deutschen Rapper \u00fcberhaupt, bekannt f\u00fcr ein k\u00fcnstlerisches Alter Ego, das nach au\u00dfen hin keine Schw\u00e4che kennt: der Boss, der Zuh\u00e4lter-Bar\u00f3n, die \u00fcberlegene Figur, die jeden Gegner wegfl\u00fcstert. Aber das Alter Ego ist eine R\u00fcstung. Darunter liegt die Frage, die alle Sechser kennen: <em>Bin ich wirklich sicher? Bin ich wirklich stark genug?</em></p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Sechs: St\u00e4rke als Gegenangst</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Sechs (SX6)</strong> ist nach Naranjo der <strong>Kontratyp</strong> der Sechs &ndash; der Subtyp, in dem die Leidenschaft der Feigheit am wenigsten sichtbar ist, weil sie in ihr Gegenteil verkehrt wird. Die SX6 begegnet ihrer Angst nicht mit R\u00fcckzug, sondern mit Angriff. <em>Ich bin gef\u00e4hrlich &ndash; also bin ich sicher.</em> Naranjo nannte diesen Subtyp <em>St\u00e4rke</em>: Die SX6 sucht Kraft, Dominanz und Intensit\u00e4t, weil sie wei\u00df, was es bedeutet, schwach zu sein &ndash; und weil sie sich geschworen hat, nie wieder dort zu sein.</p>
          <p class="vb-intro">Kollegahs gesamtes k\u00fcnstlerisches Projekt ist eine Inszenierung dieser Gegenangst. Das Boss-Narrativ, die Muskeln, die Statussymbole, die Sprache der Dominanz &ndash; alles dient dazu, eine Aura der Unverwundbarkeit zu erzeugen. Wer die SX6 kennt, erkennt das Muster sofort: Je mehr jemand seine St\u00e4rke demonstriert, desto mehr sagt er dar\u00fcber, was er zu verbergen versucht. Der Wolf, der seine Rei\u00dfz\u00e4hne zeigt, wei\u00df genau, warum.</p>
          <p class="vb-intro">Das Rudel der SX6 ist klein und loyal. Kollegah arbeitete jahrelang eng mit Farid Bang zusammen &ndash; enneagrammtypologisch ein ganz anderes Profil: Farid Bang ist selbsterhaltender Typ 7 mit Achterfl\u00fcgel (SE7w8), kein Kontratyp, sondern ein Siebener, der seinen Hunger nach Erleben und Intensit\u00e4t mit der Direktheit des Achters verbindet. Zwei v\u00f6llig verschiedene Charakterstrukturen, die sich im Ergebnis erg\u00e4nzten: der Wolf, der aus Angst angreift, und der Siebener, der aus Lust provoziert. Das Projekt <em>Jung, brutal, gutaussehend</em> (2013) ist das Dokument dieser Allianz: ein Album, das Provokation zum Kunstprinzip erhob.</p>
        </blockquote>

        <h2 class="vb-section">3. Der F\u00fcnferfl\u00fcgel: Der Handwerker</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>F\u00fcnferfl\u00fcgel (w5)</strong> bringt der sexuellen Sechs eine Pr\u00e4zision, die ihren Stil von blo\u00dfer Provokation unterscheidet. Die SX6w5 k\u00e4mpft nicht nur mit Lautst\u00e4rke &ndash; sie k\u00e4mpft mit Technik. <em>Ich will nicht nur gef\u00e4hrlich wirken. Ich will der Beste sein. Ich will es beweisen k\u00f6nnen.</em></p>
          <p class="vb-intro">Kollegah ist, bei aller inhaltlichen Kontroversi\u00e4t, handwerklich einer der pr\u00e4zisesten Rapper der deutschsprachigen Szene. Mehrsilbige Reime, komplexe Kadenzen, die f\u00fcr die deutsche Sprache ungew\u00f6hnlich sind, eine Dichte an W\u00f6rtern pro Takt, die wenige erreichen. Er hat das Rappen studiert wie ein Fach &ndash; analysiert, systematisiert, optimiert. Das ist der F\u00fcnferfl\u00fcgel: Wissen als Werkzeug, Handwerk als Schutzschild. <em>Was ich kann, kann mir niemand nehmen.</em></p>
          <p class="vb-intro">Der F\u00fcnferfl\u00fcgel erkl\u00e4rt auch Kollegahs \u00fcberraschend tiefe Auseinandersetzung mit Religion. Seine Konversion zum Islam 2016 kam nicht aus dem Nichts. Der SX6w5 sucht ein stabiles Fundament f\u00fcr seine Weltsicht &ndash; ein System, dem er vertrauen kann, das ihn tr\u00e4gt. Die F\u00fcnf im Fl\u00fcgel macht ihn zum Forscher: Er liest, analysiert, entwickelt Positionen. Auch das ist eine Form der K\u00e4mpfernatur der Sechs: Ich brauche etwas, das standh\u00e4lt.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX6w5 ist ihre F\u00e4higkeit, Intensit\u00e4t in Leistung zu verwandeln. Kollegah hat aus einer Startposition ohne Netzwerk und ohne Plattform heraus eine der erfolgreichsten Karrieren im deutschen Hip-Hop aufgebaut. F\u00fcnf Nummer-eins-Alben in Serie, mehrfacher Echo-Gewinner, eines der meistgeh\u00f6rten Acts der deutschen Musikgeschichte. Das ist nicht Gl\u00fcck. Das ist die SX6w5: gnadenlos diszipliniert, gnadenlos fokussiert, gnadenlos auf Kontrolle bedacht.</p>
          <p class="vb-intro">Das Schicksalsmuster der Sechs ist die <strong>Feigheit</strong> &ndash; und die Kontrareaktion der SX6 darauf ist Provokation. Wenn Provokation aber zum Selbstzweck wird, verliert sie ihre Grenze. Der Echo-Skandal 2018 &ndash; antisemitische Textzeilen auf dem gemeinsamen Album mit Farid Bang, die zum R\u00fcckgabe-Eklat f\u00fchrten &ndash; ist das d\u00fcsterste Kapitel in Kollegahs \u00f6ffentlichem Leben. Was als \u00c4sthetik der Grenz\u00fcberschreitung begann, wurde zur realen Verletzung. Der Wolf, der nicht mehr wei\u00df, wohin mit seinen Z\u00e4hnen.</p>
          <p class="vb-intro"><em>Hinweis: Das Portr\u00e4t analysiert die Pers\u00f6nlichkeitsstruktur. Antisemitische Texte sind nicht relativierbar &ndash; sie werden hier nicht verteidigt, sondern eingeordnet: als \u00dcberschreitung eines Musters, das in seinem Ursprung aus Angst und Gegenangst entsteht.</em></p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: St\u00e4rke ohne R\u00fcstung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Sechs f\u00fchrt von der Frage <em>Wie sch\u00fctze ich mich?</em> zur Erkenntnis <em>Ich brauche diesen Schutz nicht.</em> F\u00fcr die SX6w5 bedeutet das, die R\u00fcstung abzulegen &ndash; nicht weil man schwach ist, sondern weil man stark genug ist, ohne sie aufzutreten. Der Boss-Charakter ist eine Antwort auf eine innere Not. Wenn diese Not geh\u00f6rt wird, braucht es den Charakter nicht mehr.</p>
          <p class="vb-intro">Kollegahs sp\u00e4teres Schaffen zeigt Spuren dieses Weges. Die Konversion, die bewusste Auseinandersetzung mit Grenzen, die \u00f6ffentliche Distanzierung von bestimmten \u00c4sthetiken &ndash; das sind keine Br\u00fcche, sondern Bewegungen. Der Wolf, der beginnt, sein Rudel nicht mehr durch Z\u00e4hnezeigen zu f\u00fchren, sondern durch Ruhe und Richtung. Die St\u00e4rke bleibt. Die Angst dahinter wird kleiner.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/sx6", label:"SX6 \u2013 Der Wolf: Subtyp-Profil"},
        {route:"beruehmte-alice-schwarzer", label:"Portr\u00e4t: Alice Schwarzer (SX6w5)"},
      ])}
    </div>
  `);
}

function wladimirPutinPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-wladimir-putin-portrait.jpg" alt="Wladimir Putin – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Wladimir Putin</p>
        <p class="krim-portrait-typ">SX6w5 &middot; Sexueller Typ 6 mit F\u00fcnferfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Politiker, Pr\u00e4sident der Russischen F\u00f6deration, geb. 1952 in Leningrad &ndash; Tierentsprechung: Wolf</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Wolf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Wolf</strong> ist das Tier des sexuellen Typs 6 &ndash; ein Rudeltier, das seine Position durch St\u00e4rke behauptet und jede Bedrohung des Territoriums mit Z\u00e4hnen beantwortet. Der Wolf vertraut nicht leicht. Er beobachtet lange, bevor er handelt, und wenn er handelt, dann entschlossen. Er kennt Angst &ndash; und genau deshalb l\u00e4sst er sie nicht zu.</p>
          <p class="vb-intro">Der russische Pr\u00e4sident Wladimir Putin, geboren 1952 in Leningrad, dem heutigen St. Petersburg, in einfachen Verh\u00e4ltnissen und als einziges \u00fcberlebendes Kind seiner Eltern nach zwei im Krieg bzw. an Krankheit verstorbenen Geschwistern, ist dieser Wolf. Sein Weg vom KGB-Offizier \u00fcber den St. Petersburger Verwaltungsapparat bis an die Spitze des russischen Staates ist die Geschichte eines Mannes, der gelernt hat, dass Kontrolle \u00fcber die eigene Umgebung die einzige verl\u00e4ssliche Antwort auf eine unsichere Welt ist.</p>
          <p class="vb-intro">Passend dazu erz\u00e4hlte Putin in seinen Autobiografien eine pr\u00e4gende Kindheitserinnerung aus einem Hinterhof im damaligen Leningrad: Er hatte eine Ratte mit einem Stock in eine Ecke getrieben &ndash; doch statt sich zu ergeben, sprang das Tier ihm pl\u00f6tzlich ins Gesicht. F\u00fcr ihn wurde daraus die zentrale Lebenslektion: Wer in die Enge getrieben ist, darf sich niemals zur\u00fcckziehen, sondern muss wie die Ratte nach vorne springen. Die Ratte ist ein treffendes Bild f\u00fcr die SX6: Sie greift nicht aus \u00dcberlegenheit an, sondern aus Angst und Enge &ndash; und macht daraus Angriff. Wie tief dieses Muster reicht, zeigt auch der Watergate-Drahtzieher G. Gordon Liddy, ebenfalls eine SX6, der als Kind von einer Rattenphobie gequ\u00e4lt wurde und sich sp\u00e4ter eine Ratte briet und a\u00df, um seine Angst durch reinen Willen zu bezwingen. Ob metaphorisch wie bei Putin oder w\u00f6rtlich wie bei Liddy: Beide versuchen, der eigenen Verwundbarkeit zu entkommen, indem sie selbst zum gef\u00e4hrlichsten Faktor im Raum werden.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Sechs: St\u00e4rke als Gegenangst</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Sechs (SX6)</strong> ist nach Naranjo der <strong>Kontratyp</strong> der Sechs &ndash; der Subtyp, in dem die Leidenschaft der Angst und des Zweifels am wenigsten sichtbar ist, weil sie in ihr Gegenteil verkehrt wird. Die SX6 begegnet ihrer Angst nicht mit R\u00fcckzug, sondern mit pr\u00e4ventivem Angriff. <em>Wenn ich stark genug bin, wenn ich unberechenbar genug bin, wenn ich zuerst handle &ndash; dann kann mir nichts geschehen.</em> Naranjo nannte diesen Subtyp <em>St\u00e4rke</em>: Die SX6 sucht Macht, weil sie die Erfahrung von Ohnmacht kennt und sich geschworen hat, ihr nie wieder ausgeliefert zu sein.</p>
          <p class="vb-intro">Putins politischer Stil tr\u00e4gt die Handschrift dieses Musters unverkennbar. Die kalkulierte H\u00e4rte in Krisen, die Inszenierungen von physischer St\u00e4rke &ndash; Judo, Eishockey, Reiten mit nacktem Oberk\u00f6rper &ndash;, das strategische Verunsichern von Gegnern durch bewusste Unberechenbarkeit: All das folgt der Logik des Wolfes, der seine Position nicht durch N\u00e4he, sondern durch demonstrierte Unangreifbarkeit sichert. Die eigene Erfahrung des Zusammenbruchs der Sowjetunion 1991, den Putin sp\u00e4ter als <em>gr\u00f6\u00dfte geopolitische Katastrophe des 20. Jahrhunderts</em> bezeichnete, ist der biografische Kern dieser Haltung: der Moment, in dem das Rudel auseinanderfiel und die Bedrohung von innen kam.</p>
          <p class="vb-intro">Das Rudel der SX6 ist klein, loyal und hierarchisch geordnet &ndash; ein enger Kreis aus Vertrauten, oft noch aus KGB- und St.-Petersburg-Zeiten, dem bedingungslose Loyalit\u00e4t abverlangt und im Gegenzug Schutz gew\u00e4hrt wird. Wer aus diesem Rudel ausschert oder als Verr\u00e4ter gilt, wird zur Bedrohung erkl\u00e4rt &ndash; ein Muster, das sich durch Putins gesamte politische Laufbahn zieht.</p>
        </blockquote>

        <h2 class="vb-section">3. Der F\u00fcnferfl\u00fcgel: Kontrolle durch Wissen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>F\u00fcnferfl\u00fcgel (w5)</strong> bringt der sexuellen Sechs eine analytische K\u00fchle, die ihre K\u00e4mpfernatur von reiner Impulsivit\u00e4t unterscheidet. Die SX6w5 handelt nicht aus dem Affekt &ndash; sie beobachtet, sammelt Informationen, w\u00e4gt ab, und schl\u00e4gt erst zu, wenn sie die Lage vollst\u00e4ndig durchdrungen hat. <em>Ich will nicht nur stark sein. Ich will wissen, bevor ich handle.</em></p>
          <p class="vb-intro">Putins gesamte berufliche Pr\u00e4gung ist die Verk\u00f6rperung dieses F\u00fcnferfl\u00fcgels: 16 Jahre im KGB und dessen Nachfolgeorganisationen, ein Beruf, dessen Kern das Sammeln, Analysieren und diskrete Verwerten von Informationen ist. Seine \u00f6ffentlichen Auftritte sind gepr\u00e4gt von einer bewussten Zur\u00fcckhaltung, einer Distanz, die N\u00e4he vermeidet und Kontrolle \u00fcber die eigene Selbstdarstellung wahrt. Der F\u00fcnferfl\u00fcgel erkl\u00e4rt auch die geduldige, oft jahrelange strategische Planung, die vielen seiner politischen Schritte vorausgeht &ndash; das Gegenteil von Impulsivit\u00e4t, auch wenn das Ergebnis nach au\u00dfen hin abrupt erscheinen mag.</p>
        </blockquote>

        <h2 class="vb-section">4. Aufstieg: Vom KGB-Offizier zum Pr\u00e4sidenten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Putins Aufstieg ist ein Lehrst\u00fcck systematischer Machtsicherung. Nach dem Ende seiner KGB-Laufbahn 1991 wurde er Berater des St. Petersburger B\u00fcrgermeisters Anatoli Sobtschak, wechselte 1996 nach Moskau in die Pr\u00e4sidialverwaltung, wurde 1998 Chef des Inlandsgeheimdienstes FSB und 1999 von Boris Jelzin zum Ministerpr\u00e4sidenten ernannt. Am letzten Tag des Jahres 1999 \u00fcbergab Jelzin ihm \u00fcberraschend das Pr\u00e4sidentenamt. Seither hat er &ndash; mit einer vierj\u00e4hrigen Unterbrechung als Ministerpr\u00e4sident zwischen 2008 und 2012, w\u00e4hrend der er de facto weiter die F\u00e4den zog &ndash; die russische Politik ohne Unterbrechung gepr\u00e4gt.</p>
          <p class="vb-intro">Diese Kontinuit\u00e4t ist selbst Ausdruck des SX6w5-Musters: die systematische Absicherung der eigenen Position gegen jede Form von Unsicherheit, durch Verfassungs\u00e4nderungen, durch Kontrolle der Medien, durch ein engmaschiges Netz loyaler Vertrauter in Wirtschaft und Verwaltung. Der Wolf, der sein Territorium nicht dem Zufall \u00fcberl\u00e4sst.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX6w5 ist die F\u00e4higkeit, in Krisen Stabilit\u00e4t und Handlungsf\u00e4higkeit zu vermitteln. In den chaotischen Jahren nach dem Zusammenbruch der Sowjetunion versprach Putins ruhige, kontrollierte Art vielen Russen ein Ende der Instabilit\u00e4t &ndash; ein Versprechen, das seine fr\u00fche Popularit\u00e4t erkl\u00e4rt und das bis heute einen Teil seiner innenpolitischen Zustimmung tr\u00e4gt.</p>
          <p class="vb-intro">Das Schicksalsmuster der Sechs ist die <strong>Angst</strong> &ndash; und die Kontrareaktion der SX6 darauf ist eine H\u00e4rte, die keine Grenze mehr kennt, wenn die wahrgenommene Bedrohung existenziell wird. Die Annexion der Krim 2014 und der seit 2022 andauernde Angriffskrieg gegen die Ukraine sind die dunkelste Konsequenz dieses Musters: die Umwandlung diffuser Angst &ndash; vor NATO-Erweiterung, vor dem Verlust von Einflusssph\u00e4ren, vor dem imaginierten Zerfall der eigenen Machtbasis &ndash; in massive, f\u00fcr unz\u00e4hlige Menschen t\u00f6dliche Aggression. Die Unterdr\u00fcckung innenpolitischer Opposition, das Vorgehen gegen unabh\u00e4ngigen Journalismus und die Inhaftierung oder der Tod von Kritikern wie Alexei Nawalny zeigen dasselbe Muster nach innen gewendet: Wer als Bedrohung des Rudels gilt, wird eliminiert. Das ist kein Randaspekt der Pers\u00f6nlichkeitsstruktur &ndash; es ist ihre Schattenseite in ihrer radikalsten, folgenschwersten Form.</p>
          <p class="vb-intro"><em>Hinweis: Dieses Portr\u00e4t analysiert eine Pers\u00f6nlichkeitsstruktur nach dem Enneagramm-Modell. Es erkl\u00e4rt Muster, es rechtfertigt nichts. Der Angriffskrieg gegen die Ukraine und die Unterdr\u00fcckung politischer Freiheit in Russland sind eigenst\u00e4ndig zu verurteilende Handlungen, unabh\u00e4ngig von jeder psychologischen Einordnung.</em></p>
        </blockquote>

        <h2 class="vb-section">6. Der Heilungsweg: Sicherheit ohne Kontrolle \u00fcber andere</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Sechs f\u00fchrt von der Frage <em>Wie sch\u00fctze ich mich vor der Bedrohung?</em> zur Erkenntnis <em>Ich muss die Welt nicht kontrollieren, um sicher zu sein.</em> F\u00fcr die SX6w5 bedeutet das, St\u00e4rke nicht l\u00e4nger als Herrschaft \u00fcber andere zu verstehen, sondern als innere Festigkeit, die keine \u00e4u\u00dfere Best\u00e4tigung durch Unterwerfung braucht.</p>
          <p class="vb-intro">Dieser Weg ist bei Wladimir Putin \u00f6ffentlich nicht erkennbar &ndash; im Gegenteil, seine Amtsjahre zeigen eine zunehmende, nicht eine abnehmende Verh\u00e4rtung des Musters. Das Portr\u00e4t endet damit nicht mit einer Auss\u00f6hnung, sondern mit der Feststellung, die f\u00fcr jeden Kontratyp der Sechs gilt: Solange Sicherheit nur durch die Kontrolle \u00fcber andere gesucht wird, bleibt der Wolf gefangen in genau der Angst, die er zu bek\u00e4mpfen versucht. Der Weg nach drau\u00dfen f\u00fchrt nicht \u00fcber mehr Macht, sondern \u00fcber das Vertrauen, das er sein Leben lang zu vermeiden gelernt hat.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/sx6", label:"SX6 \u2013 Der Wolf: Subtyp-Profil"},
        {route:"beruehmte-alice-schwarzer", label:"Portr\u00e4t: Alice Schwarzer (SX6w5)"},
        {route:"beruehmte-otto-von-bismarck", label:"Portr\u00e4t: Otto von Bismarck (SX6w5)"},
      ])}
    </div>
  `);
}

function ottoVonBismarckPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-otto-von-bismarck-portrait.jpg" alt="Otto von Bismarck \u2013 Portr\u00e4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Otto von Bismarck</p>
        <p class="krim-portrait-typ">SX6w5 &middot; Sexueller Typ 6 mit F\u00fcnferfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Erster Reichskanzler des Deutschen Kaiserreichs, geb. 1815 in Sch\u00f6nhausen, gest. 1898 in Friedrichsruh &ndash; Tierentsprechung: Wolf</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Wolf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Wolf</strong> ist das Tier des sexuellen Typs 6 &ndash; ein Rudeltier, das seine Position durch St\u00e4rke behauptet und jede Bedrohung des Territoriums mit Z\u00e4hnen beantwortet. Der Wolf vertraut nicht leicht. Er prescht nicht blind vor, sondern beobachtet, wittert, wartet auf den richtigen Moment &ndash; und wenn er zuschl\u00e4gt, dann entschlossen und ohne halbe Sachen.</p>
          <p class="vb-intro">Otto von Bismarck, geboren 1815 auf dem Gut Sch\u00f6nhausen in der Altmark, ist dieser Wolf in seiner reinsten politischen Gestalt. Zeitgenossen beschrieben ihn als \u00bbd\u00e4monisch\u00ab, als \u00bbdiabolisch\u00ab &ndash; Formulierungen, die weniger sein Wesen treffen als das, was er bewusst nach au\u00dfen kehrte: eine Bedrohlichkeit, die keinen Zweifel daran lie\u00df, dass es gef\u00e4hrlich war, sich mit ihm anzulegen. Als seine Mutter starb, war er dreizehn Jahre alt; sein Vater, ein biederer Landjunker, hielt den ambitionslosen, unsteten Sohn zeitlebens f\u00fcr eine Entt\u00e4uschung. Aus diesem doppelten Mangel &ndash; fr\u00fch verlorene N\u00e4he, nie erhaltene Anerkennung &ndash; erwuchs kein R\u00fcckzug, sondern das genaue Gegenteil: eine zwanghafte, lebenslange Suche nach Dominanz und Best\u00e4tigung, die sich niemand mehr entziehen konnte.</p>
          <p class="vb-intro">Sein eigenes Urteil \u00fcber sich selbst best\u00e4tigt, wie viel Kraft es kostete, diese Fassade aufrechtzuerhalten: \u203aIch bin ganz Nerven, sodass Selbstbeherrschung stets die gr\u00f6\u00dfte Aufgabe meines Lebens war.\u2039 Das ist kein Satz eines Mannes ohne Angst. Es ist das Gest\u00e4ndnis eines Wolfes, der seine eigene Nervosit\u00e4t so gr\u00fcndlich hinter Drohgeb\u00e4rden verbarg, dass ganze Generationen von Zeitgenossen und Historikern sie f\u00fcr Kaltbl\u00fctigkeit hielten.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Sechs: Einsch\u00fcchterung statt R\u00fcckzug</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Sechs (SX6)</strong> ist nach Naranjo der <strong>Kontratyp</strong> der Sechs &ndash; der Subtyp, in dem die Leidenschaft der Angst und des Zweifels am wenigsten sichtbar ist, weil sie in ihr Gegenteil verkehrt wird. Die SX6 begegnet ihrer Angst nicht mit Vorsicht oder Meidung, sondern mit pr\u00e4ventivem Angriff. <em>Wenn ich bedrohlicher bin als die Bedrohung selbst, dann kann mir nichts geschehen.</em> Naranjo nannte diesen Subtyp <em>St\u00e4rke</em>: Die SX6 sucht Macht, weil sie die Erfahrung von Ohnmacht kennt und sich geschworen hat, ihr nie wieder ausgeliefert zu sein.</p>
          <p class="vb-intro">Bismarcks politisches Handwerkszeug bestand aus genau dieser Logik. Sein bekanntestes Machtinstrument gegen\u00fcber Kaiser Wilhelm I. war die wiederholte R\u00fccktrittsdrohung: Wann immer der Kaiser sich seiner Linie widersetzen wollte, drohte Bismarck mit dem eigenen Abgang &ndash; ein Druckmittel, das er so oft und so wirkungsvoll einsetzte, dass der weit \u00e4ltere Monarch ihm in den meisten strittigen Fragen nachgab, aus Angst, den unentbehrlichen Kanzler tats\u00e4chlich zu verlieren. Das ist kein diplomatisches Nachgeben, das ist Einsch\u00fcchterung als Regierungsstil &ndash; die Drohung wird zur Waffe, weil der offene R\u00fcckzug f\u00fcr die SX6 keine Option ist.</p>
          <p class="vb-intro">Hinzu kam eine ausgepr\u00e4gte Neigung zur Projektion: Bismarck war zutiefst \u00fcberzeugt, von Rivalen und vermeintlichen Verschw\u00f6rern umgeben zu sein &ndash; am Hof, in der Presse, in den Parlamentsfraktionen. Tageb\u00fccher und Korrespondenz belegen ein zwanghaftes Kreisen um m\u00f6glichen Verrat, um vergangene Kr\u00e4nkungen, um imagin\u00e4re Umsturzpl\u00e4ne. Diese Angst wurde nicht introspektiv verarbeitet, sondern nach au\u00dfen projiziert und in Pr\u00e4ventivschl\u00e4ge \u00fcbersetzt: Wer als Gefahr galt, wurde politisch kaltgestellt, bevor er selbst zuschlagen konnte. Sein eigenes Rudel &ndash; ein enger Kreis loyaler Vertrauter wie Albrecht von Roon oder Robert von Keudell &ndash; wurde entsprechend eng gef\u00fchrt und gegen jede Konkurrenz von au\u00dfen verteidigt.</p>
        </blockquote>

        <h2 class="vb-section">3. Warum nicht die Acht? Eine notwendige Abgrenzung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In der Enneagramm-Diskussion wird Bismarck immer wieder als <strong>Selbsterhaltungs-Acht mit Neunerfl\u00fcgel (SE8w9)</strong> gehandelt \u2013 schlie\u00dflich passt die Kompromisslosigkeit, mit der er R\u00fccktrittsdrohungen einsetzte und Rivalen kaltstellte, auf den ersten Blick zum Bild eines Achters, der sein Territorium mit roher Machtdemonstration verteidigt. Bei genauerem Hinsehen tr\u00e4gt diese Zuordnung jedoch nicht.</p>
          <p class="vb-intro">Entscheidend ist Bismarcks eigenes Gest\u00e4ndnis: <em>\u00bbIch bin ganz Nerven, sodass Selbstbeherrschung stets die gr\u00f6\u00dfte Aufgabe meines Lebens war.\u00ab</em> Eine Acht, die ihre Verletzlichkeit typischerweise verdr\u00e4ngt statt sie offen einzugestehen, w\u00fcrde die eigene Nervosit\u00e4t kaum als lebenslanges Kernproblem benennen. Eine Sechs dagegen kennt genau dieses introspektive Ringen mit der eigenen Angst \u2013 bei der SX6 wird es nur nach au\u00dfen in St\u00e4rke verkehrt, nicht verschwiegen.</p>
          <p class="vb-intro">Auch das wiederkehrende Muster der R\u00fcckz\u00fcge nach Varzin und Friedrichsruh \u2013 wochenlang im Bett, geplagt von Nervenleiden, Schlaflosigkeit, Hypochondrie \u2013 passt nicht zu einer Acht, die Bedrohung eher aktiv sucht als sie liegend zu verarbeiten. Und selbst wenn man am Achter-Modell festhalten wollte: Der st\u00e4ndig misstrauische, drohende, nie zur Ruhe kommende Bismarck \u00e4hnelt eher einem impulsiven Siebenerfl\u00fcgel als dem zur\u00fcckhaltenden, konfliktscheuen Neunerfl\u00fcgel \u2013 die SE8w9-These ist damit schon in sich nicht ganz stimmig.</p>
          <p class="vb-intro">Am Ende z\u00e4hlt zudem die Quelle: <strong>Claudio Naranjo</strong> selbst, der Begr\u00fcnder der Subtypenlehre, ordnete Bismarck in seinen Seminaren als sexuelle Sechs ein \u2013 nicht als Acht. Die popul\u00e4re Acht-Zuschreibung erkl\u00e4rt sich eher aus Bismarcks \u00e4u\u00dferem Auftreten als Machtpolitiker als aus einer genaueren Analyse seiner inneren Motivation \u2013 dazu tr\u00e4gt auch seine k\u00f6rperliche F\u00fclle im Alter bei, die ihn auf den zahlreichen Gem\u00e4lden und fr\u00fchen Fotografien fast b\u00e4renhaft wirken l\u00e4sst, ebenso wie die Blickqualit\u00e4t in diesen Portr\u00e4ts: ein Blick, der durchaus St\u00e4rke ausstrahlt, aber eher nach au\u00dfen demonstriert als das eher nach innen gerichtete, ruhigere Kraftgef\u00fchl eines selbsterhaltenden Achters mit Neunerfl\u00fcgel.</p>
        </blockquote>

        <h2 class="vb-section">4. Der F\u00fcnferfl\u00fcgel: Hypochondrie und strategische Tiefe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>F\u00fcnferfl\u00fcgel (w5)</strong> bringt der sexuellen Sechs eine analytische Tiefe und eine Neigung zum R\u00fcckzug in die eigene Innenwelt, die ihre K\u00e4mpfernatur um eine zweite, stillere Seite erg\u00e4nzt. Die SX6w5 handelt nicht impulsiv &ndash; sie beobachtet, w\u00e4gt ab, durchdenkt Konstellationen weit im Voraus, und zieht sich, wenn die Spannung zu gro\u00df wird, in eine br\u00fctende Isolation zur\u00fcck, statt sie im Au\u00dfen abzureagieren.</p>
          <p class="vb-intro">Bei Bismarck zeigte sich dieser Fl\u00fcgel doppelt: einerseits in einer au\u00dfergew\u00f6hnlichen strategischen Begabung, die europ\u00e4ische M\u00e4chtekonstellationen \u00fcber Jahre hinweg antizipierte und geduldig auf den richtigen Moment hinarbeitete &ndash; nie das Ergebnis blinder Impulsivit\u00e4t, sondern jahrelanger Vorausplanung. Andererseits in einer ausgepr\u00e4gten Hypochondrie und einer Neigung, sich bei Stress tagelang auf seine G\u00fcter zur\u00fcckzuziehen: erst nach Varzin in Hinterpommern, sp\u00e4ter nach Friedrichsruh im Sachsenwald. Dort verbrachte er ganze Phasen im Bett liegend, klagte \u00fcber Nervenleiden, Schlaflosigkeit, Verdauungsbeschwerden &ndash; k\u00f6rperliche Symptome, die eng mit seinem chronischen Misstrauen und seiner Gr\u00fcbelneigung verwoben waren. Der Wolf, der sich in seine H\u00f6hle zur\u00fcckzieht, wenn die Jagd zu viel Kraft gekostet hat, aber von dort aus weiter das ganze Territorium im Blick beh\u00e4lt.</p>
          <p class="vb-intro">Die gesundheitlichen Folgen dieses Musters &ndash; die Ersch\u00f6pfungskrise der fr\u00fchen 1880er-Jahre und die verweigerte Behandlung einer Gangr\u00e4n in seinen letzten Lebensjahren &ndash; werden im eigenen <a href="javascript:void(0)" data-route="krankheitsportraets-otto-von-bismarck">Krankheitsportr\u00e4t zu Bismarck</a> ausf\u00fchrlich gedeutet.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Lebenswerk: Blut und Eisen, Reichsgr\u00fcndung, Sozialstaat</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">1862 zum preu\u00dfischen Ministerpr\u00e4sidenten berufen, formulierte Bismarck in seiner ber\u00fchmten Rede vor dem Budgetausschuss des Abgeordnetenhauses das Programm seiner Politik: nicht Reden und Mehrheitsbeschl\u00fcsse w\u00fcrden die gro\u00dfen Fragen der Zeit entscheiden, sondern \u00bbEisen und Blut\u00ab. Es folgten drei kalkulierte Kriege &ndash; gegen D\u00e4nemark 1864, gegen \u00d6sterreich 1866, gegen Frankreich 1870/71 &ndash;, mit denen er die deutschen Einzelstaaten unter preu\u00dfischer F\u00fchrung zusammenschmiedete. 1871 wurde im Spiegelsaal von Versailles das Deutsche Kaiserreich ausgerufen, Bismarck sein erster Reichskanzler.</p>
          <p class="vb-intro">Nach der Reichsgr\u00fcndung wandelte sich sein Kurs: Deutschland sei nun \u00bbsaturiert\u00ab, weitere territoriale Expansion in Europa unn\u00f6tig &ndash; stattdessen baute er ein komplexes B\u00fcndnissystem auf, das den Frieden auf dem Kontinent sichern sollte. Innenpolitisch f\u00fchrte er den Kulturkampf gegen die katholische Kirche und sp\u00e4ter die Sozialistengesetze gegen die erstarkende Sozialdemokratie &ndash; zugleich aber auch, teils aus genau diesem taktischen Kalk\u00fcl, die weltweit ersten Sozialversicherungen: Krankenversicherung 1883, Unfallversicherung 1884, Alters- und Invalidit\u00e4tsversicherung 1889. Eine fr\u00fche Form des Sozialstaats, die zugleich F\u00fcrsorge und ein Instrument war, um der Arbeiterschaft den Boden f\u00fcr revolution\u00e4re Ideen zu entziehen &ndash; typisch f\u00fcr einen Wolf, der auch F\u00fcrsorge strategisch als Mittel zur Sicherung des eigenen Rudels einsetzte.</p>
          <p class="vb-intro">1890, zwei Jahre nach dem Regierungsantritt des jungen, ungeduldigen Kaisers Wilhelm II., wurde Bismarck entlassen. Eine Karikatur der Zeit fasste den Bruch in vier Worten: \u00bbDer Lotse geht von Bord.\u00ab Der Mann, der drei Jahrzehnte lang durch Drohung und Kalk\u00fcl regiert hatte, konnte den Machtverlust an einen j\u00fcngeren Herrscher nicht durch dieselben Mittel abwenden &ndash; das R\u00fctteln an den F\u00e4den funktionierte nur, solange das Gegen\u00fcber Angst vor dem eigenen Abgang hatte, und Wilhelm II. hatte diese Angst nicht.</p>
        </blockquote>

        <h2 class="vb-section">6. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX6w5 ist die F\u00e4higkeit, aus Angst heraus au\u00dfergew\u00f6hnliche strategische Weitsicht zu entwickeln und in Krisen Stabilit\u00e4t zu stiften. Bismarcks B\u00fcndnispolitik nach 1871 hielt Europa fast zwei Jahrzehnte lang in einem fragilen, aber funktionierenden Gleichgewicht &ndash; eine Leistung, die viele seiner Nachfolger nicht fortzuf\u00fchren wussten. Auch seine Sozialgesetzgebung, so taktisch sie gemeint war, wirkte weit \u00fcber ihren urspr\u00fcnglichen Zweck hinaus und wurde zum Vorbild moderner Sozialstaaten.</p>
          <p class="vb-intro">Das Schicksalsmuster der Sechs ist die <strong>Angst</strong> &ndash; und die Kontrareaktion der SX6 darauf ist eine H\u00e4rte, die keine Grenze mehr kennt, sobald die wahrgenommene Bedrohung existenziell wird. Der Kulturkampf traf die katholische Kirche und ihre Anh\u00e4nger mit Gesetzen, die Priester inhaftierten und Bist\u00fcmer verwaisen lie\u00dfen; die Sozialistengesetze verboten sozialdemokratische Organisationen, Versammlungen und Publikationen \u00fcber ein Jahrzehnt lang. Beides Ausdruck desselben Musters: Wer als Bedrohung des Rudels &ndash; des jungen Kaiserreichs, der eigenen Machtposition &ndash; identifiziert wurde, wurde mit staatlicher H\u00e4rte bek\u00e4mpft, ungeachtet des Preises f\u00fcr die Betroffenen. Diese Politik ist eigenst\u00e4ndig kritisch zu bewerten, unabh\u00e4ngig von der psychologischen Einordnung, die sie erkl\u00e4rt, aber nicht rechtfertigt.</p>
        </blockquote>

        <h2 class="vb-section">7. Der Heilungsweg: Sicherheit ohne Drohung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Sechs f\u00fchrt von der Frage <em>Wie sch\u00fctze ich mich vor der Bedrohung?</em> zur Erkenntnis <em>Ich muss die Welt nicht kontrollieren, um sicher zu sein.</em> F\u00fcr die SX6w5 bedeutet das, St\u00e4rke nicht l\u00e4nger als Drohkulisse zu verstehen, sondern als innere Festigkeit, die kein Gegen\u00fcber mehr einsch\u00fcchtern muss, um sich sicher zu f\u00fchlen.</p>
          <p class="vb-intro">Dieser Weg blieb Bismarck bis zuletzt verwehrt. Auch in den acht Jahren seines Ruhestands in Friedrichsruh, bis zu seinem Tod 1898, hielt er an Misstrauen und Kontrolle fest &ndash; er grollte \u00f6ffentlich gegen seinen kaiserlichen Nachfolger, kommentierte die Tagespolitik unaufgefordert und unvers\u00f6hnlich, und pflegte bis zuletzt das Bild des unentbehrlichen Staatsmanns, dem Unrecht geschehen war. Das Portr\u00e4t endet damit nicht mit einer Auss\u00f6hnung, sondern mit der Feststellung, die f\u00fcr jeden Kontratyp der Sechs gilt: Solange Sicherheit nur durch Drohung und Kontrolle \u00fcber andere gesucht wird, bleibt der Wolf gefangen in genau der Angst, die er zeitlebens zu bek\u00e4mpfen versuchte. Der Weg nach drau\u00dfen f\u00fchrt nicht \u00fcber mehr Macht, sondern \u00fcber das Vertrauen, das Bismarck sein Leben lang zu vermeiden gelernt hatte.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/sx6", label:"SX6 \u2013 Der Wolf: Subtyp-Profil"},
        {route:"beruehmte-wladimir-putin", label:"Portr\u00e4t: Wladimir Putin (SX6w5)"},
        {route:"beruehmte-friedrich-schiller", label:"Portr\u00e4t: Friedrich Schiller (SX6w5)"},
        {route:"krankheitsportraets-otto-von-bismarck", label:"Krankheitsportr\u00e4t: Otto von Bismarck (SX6w5)"},
      ])}
    </div>
  `);
}

function aliceSchwarzerPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-alice-schwarzer-portrait.jpg" alt="Alice Schwarzer – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Alice Schwarzer</p>
        <p class="krim-portrait-typ">SX6w5 &middot; Sexueller Typ 6 mit F\u00fcnferfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Journalistin, Feministin &amp; Emma-Gr\u00fcnderin, geb. 1942 &ndash; Tierentsprechung: Wolf</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Wolf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Wolf</strong> ist das Tier des sexuellen Typs 6 &ndash; ein Tier, das in den M\u00e4rchen als Bedrohung erscheint, in der Realit\u00e4t aber vor allem eines ist: loyal, territorial und missverstanden. Der Wolf lebt im Rudel, k\u00e4mpft f\u00fcr das Rudel &ndash; und zeigt die Z\u00e4hne, wenn das Rudel bedroht wird. Er duckt sich nicht. Er weicht nicht aus. Und er erinnert sich, wer ihm feindlich gegen\u00fcberstand.</p>
          <p class="vb-intro">Die deutsche Journalistin Alice Schwarzer ist dieser Wolf. Seit mehr als f\u00fcnf Jahrzehnten k\u00e4mpft sie f\u00fcr Frauenrechte &ndash; mit einer Direktheit, die viele erschreckt, und einer Ausdauer, die wenige aufbringen. Sie hat Debatten angesto\u00dfen, die niemand f\u00fchren wollte. Sie hat Strukturen benannt, die niemand benennen wollte. Und sie hat daf\u00fcr einen Preis gezahlt: Anfeindungen, Verachtung, Missverst\u00e4ndnisse &ndash; und mehr Gegner als die meisten Menschen in einem Leben sammeln. Der Wolf, der nicht aufh\u00f6rt zu heulen.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Sechs: St\u00e4rke gegen die Angst</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Sechs (SX6)</strong> ist nach Naranjo der <strong>Kontratyp</strong> der Sechs &ndash; der Subtyp, in dem die Leidenschaft der Feigheit am st\u00e4rksten verborgen ist, weil sie ins Gegenteil verkehrt wird. Die SX6 begegnet ihrer Angst nicht mit R\u00fcckzug, sondern mit Angriff. <em>Wenn ich schneller bin als die Bedrohung, wenn ich lauter bin, wenn ich als erste angreife &ndash; dann bin ich sicher.</em> Naranjo nannte diesen Subtyp <em>St\u00e4rke</em>: Die SX6 sucht Kraft, weil sie Angst kennt &ndash; und weil sie sich geschworen hat, dieser Angst nie wieder nachzugeben.</p>
          <p class="vb-intro">Bei Alice Schwarzer zeigt sich das in ihrer Kampfbereitschaft, die seit Jahrzehnten nicht nachl\u00e4sst. Sie war es, die 1971 in Deutschland die Aktion <em>Wir haben abgetrieben</em> organisierte &ndash; zu einer Zeit, als das strafrechtliche Konsequenzen haben konnte. Sie war es, die Pornographie \u00f6ffentlich als Gewalt gegen Frauen benannte, als das noch ein gesellschaftliches Tabu war. Sie war es, die die Debatte um Prostitution in Deutschland in eine Richtung gelenkt hat, die viele nicht h\u00f6ren wollten. Das ist die SX6: <em>Ich habe Angst. Also k\u00e4mpfe ich.</em></p>
          <p class="vb-intro">Ihr Rudel ist Emma &ndash; die Frauenzeitschrift, die sie 1977 gr\u00fcndete und nach wie vor herausgibt. Kein Konzern im R\u00fccken, keine Investoren, kein Kompromiss mit der Werbewirtschaft. Emma ist das Territorium des Wolfes: gesch\u00fctzt, verteidigt, kompromisslos.</p>
        </blockquote>

        <h2 class="vb-section">3. Der F\u00fcnferfl\u00fcgel: Analyse als Waffe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>F\u00fcnferfl\u00fcgel (w5)</strong> bringt der sexuellen Sechs eine intellektuelle Sch\u00e4rfe, die ihren Kampf von blo\u00dfem Aktivismus unterscheidet. Die SX6w5 k\u00e4mpft nicht aus dem Bauch heraus &ndash; sie k\u00e4mpft mit Belegen, mit Analysen, mit einem Wissen, das sie sich \u00fcber Jahrzehnte erarbeitet hat. <em>Ich will nicht nur recht haben. Ich will beweisen k\u00f6nnen, dass ich recht habe.</em></p>
          <p class="vb-intro">Schwarzers Werk ist durchdrungen von diesem F\u00fcnferfl\u00fcgel: <em>Der kleine Unterschied und seine gro\u00dfen Folgen</em> (1975) war kein Pamphlet &ndash; es war eine Feldstudie, basierend auf Interviews mit Frauen \u00fcber ihre Sexualit\u00e4t und ihre Erfahrungen mit M\u00e4nnern. Ihre Interviews mit Simone de Beauvoir, ihre Analyse der Prostitutionsdebatte, ihre Auseinandersetzung mit dem politischen Islam &ndash; stets verbindet sich bei ihr die k\u00e4mpferische Haltung der SX6 mit der analytischen Tiefe des F\u00fcnferfl\u00fcgels. Der Wolf, der seine Beute kennt, bevor er angreift.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX6w5 ist ihre Unnachgiebigkeit im Dienst einer Sache, die sie f\u00fcr gerecht h\u00e4lt &ndash; und ihre Bereitschaft, daf\u00fcr jeden Preis zu zahlen. Schwarzer hat die Situation von Frauen in Deutschland ver\u00e4ndert. Nicht allein, aber ma\u00dfgeblich. Wer heute selbstverst\u00e4ndlich \u00fcber sexuelle Bel\u00e4stigung spricht, \u00fcber strukturelle Ungleichheit, \u00fcber K\u00f6rperautonomie &ndash; steht auf einem Fundament, das Schwarzer mit aufgebaut hat.</p>
          <p class="vb-intro">Das Schicksalsmuster der Sechs ist die <strong>Feigheit</strong> &ndash; und die SX6 bek\u00e4mpft sie durch Gegenwehr. Aber dieser Mechanismus hat eine Schattenseite: Wenn die Gegenwehr zum Selbstzweck wird, wenn jeder, der anderer Meinung ist, zum Feind erkl\u00e4rt wird, wenn die eigene Position unantastbar werden muss &ndash; dann verliert der Wolf seinen Instinkt f\u00fcr das, was er eigentlich sch\u00fctzen wollte. Schwarzers Positionierungen haben nicht immer Freunde gefunden, auch nicht in feministischen Kreisen.</p>
          <p class="vb-intro">Ihr bekanntestes Eingest\u00e4ndnis einer eigenen Schw\u00e4che: 2014 r\u00e4umte sie \u00f6ffentlich ein, Geld auf einem Schweizer Konto versteckt zu haben &ndash; und damit Steuern hinterzogen zu haben. Sie entschuldigte sich. Der Wolf, der zugibt, sich selbst nicht immer treu gewesen zu sein. Das kostet Kraft. Und es ist ein Zeichen von St\u00e4rke.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: K\u00e4mpfen aus Liebe, nicht aus Angst</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Sechs f\u00fchrt von der Frage <em>Wie sch\u00fctze ich mich vor der Bedrohung?</em> zur Erkenntnis <em>Ich bin stark genug &ndash; auch ohne den Kampf.</em> F\u00fcr die SX6w5 bedeutet das, die Waffe nicht niederzulegen, aber sie aus einem anderen Ort heraus zu f\u00fchren: nicht aus der Angst, die angreift, bevor sie angegriffen wird &ndash; sondern aus der Liebe zu dem, was man sch\u00fctzen will.</p>
          <p class="vb-intro">Alice Schwarzer hat f\u00fcnf Jahrzehnte lang f\u00fcr Frauen gek\u00e4mpft. Der Wolf, der nicht aufh\u00f6rt zu heulen &ndash; weil er wei\u00df, dass das Rudel es h\u00f6rt. Das ist die SX6w5 auf ihrem Heilungsweg: Wenn die St\u00e4rke nicht mehr aus der Angst kommt, sondern aus dem tiefen Wissen um den Wert dessen, wof\u00fcr man steht.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/sx6", label:"SX6 \u2013 Der Wolf: Subtyp-Profil"},
        {route:"beruehmte-anke-engelke", label:"Portr\u00e4t: Anke Engelke (SX6w7)"},
      ])}
    </div>
  `);
}

function ankeEngelkePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-anke-engelke-portrait.jpg" alt="Anke Engelke – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Anke Engelke</p>
        <p class="krim-portrait-typ">SX6w7 &middot; Sexueller Typ 6 mit Siebenerfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Komikerin, Schauspielerin &amp; Entertainerin, geb. 1965 &ndash; Tierentsprechung: Wolf</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Wolf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Wolf</strong> ist das Tier des sexuellen Typs 6 &ndash; und er passt zu Anke Engelke mit einer Pr\u00e4zision, die man erst erkennt, wenn man genauer hinsieht. W\u00f6lfe gelten als soziale Tiere: loyal, verspielt, eng im Rudel verbunden. Doch was sie von anderen Rudeltieren unterscheidet, ist ihre Bereitschaft zur offenen Auseinandersetzung. Der Wolf weicht nicht aus. Er stellt sich. Er zeigt Z\u00e4hne &ndash; nicht aus Aggression, sondern aus Klarheit. Er definiert, wer er ist, indem er sagt, was er nicht hinnimmt.</p>
          <p class="vb-intro">Die deutsche Komikerin Anke Engelke ist eine W\u00f6lfin. Ihre B\u00fchne ist das Rudel: Ensemble, Comedy-Partner, Kolleginnen. Ihre St\u00e4rke kommt nicht aus Isolation, sondern aus Verbindung. Und ihr Humor ist kein R\u00fcckzug &ndash; er ist ein Auftreten. Direkt. Unverkleidet. Mit Z\u00e4hnen, die man sieht, weil man wei\u00df, dass dahinter kein Angriff steckt &ndash; sondern Klarheit.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Sechs: St\u00e4rke als Antwort auf die Angst (Kontratyp)</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Sechs (SX6)</strong> ist in der Enneagramm-Tradition der Kontratyp der Sechs &ndash; der Subtyp, der die Angst nicht zeigt, sondern \u00fcberdeckt: durch St\u00e4rke, durch Direktheit, durch eine Energie, die nach au\u00dfen eher nach Sieben oder Acht aussieht als nach der gr\u00fcblerischen Sechs, die man erwarten w\u00fcrde. Naranjo nannte diesen Subtyp <em>Strength</em> &ndash; St\u00e4rke als Gegengewicht zur inneren Unsicherheit.</p>
          <p class="vb-intro">Anke Engelke wirkt nicht \u00e4ngstlich. Sie wirkt mutig, schlagfertig, unersch\u00fctterlich. Was man nicht sofort sieht: Diese St\u00e4rke ist erarbeitet. Die SX6 konfrontiert ihre Angst, indem sie ihr entgegengeht &ndash; auf die B\u00fchne geht, sich exponiert, riskiert. Engelke hat das \u00fcber Jahrzehnte getan: in Live-Sendungen, in Rollen, die Verletzlichkeit fordern, in Momenten, die schiefgehen konnten. Die St\u00e4rke der SX6 ist keine Abwesenheit von Angst. Sie ist die Entscheidung, trotzdem zu erscheinen.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Siebenerfl\u00fcgel: Humor als Heimat</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Siebenerfl\u00fcgel</strong> verleiht der sexuellen Sechs eine Leichtigkeit, die ihr ohne ihn fehlen w\u00fcrde. Bei schwach ausgepr\u00e4gtem Siebenerfl\u00fcgel tendiert die Sechs zur Schwere: Gr\u00fcbeln, Misstrauen, das st\u00e4ndige Abw\u00e4gen von Risiken. Der Siebenerfl\u00fcgel hellt das auf &ndash; er bringt Neugier, Spielfreude, die F\u00e4higkeit, Verbindungen herzustellen, die anderen nicht auffallen.</p>
          <p class="vb-intro">Bei Anke Engelke zeigt sich das schon im Beginn ihrer Karriere. Mit 14 Jahren moderiert sie das <em>ZDF-Ferienprogramm</em> und die w\u00f6chentliche Kindersport-Sendung <em>Pfiff</em> &ndash; als Teenager, der anderen Kindern Sommer und Sport n\u00e4herbringt. Diese fr\u00fche Selbstverst\u00e4ndlichkeit auf der B\u00fchne hat einen Grund: Es ist der Siebenerfl\u00fcgel, der die Angst \u00fcberspielt, bevor sie sich festsetzen kann. Aus diesem Beginn w\u00e4chst eine Karriere voller Wechsel &ndash; Fernsehen, Radio, Comedy, Schauspiel, Synchron, Gesang. Kein Format zu viel, keine Richtung zu eng. Ihr Humor ist selten bitter &ndash; er ist warm, absurd, bisweilen kindlich. Das ist der Siebenerfl\u00fcgel: Angst in Spiel verwandeln, und zwar schon mit vierzehn.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Leidenschaft: Angst als unsichtbarer Motor</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Leidenschaft der Sechs hei\u00dft <strong>Angst</strong> &ndash; aber in der sexuellen Sechs zeigt sie sich paradox. Nicht als L\u00e4hmung, sondern als Treibstoff. Die SX6 bewegt sich auf das zu, was sie f\u00fcrchtet. Sie sucht die Konfrontation. Sie provoziert, testet, fordert heraus &ndash; nicht weil es ihr leichtf\u00e4llt, sondern weil sie gelernt hat, dass St\u00e4rke das einzige Mittel ist, das zuverl\u00e4ssig wirkt.</p>
          <p class="vb-intro">Engelkes Karriere ist durchzogen von Momenten, die Mut erforderten: eine eigene Late-Night-Show tragen, politische Satire wagen, international auftreten. 2011 moderierte sie den Eurovision Song Contest &ndash; eine B\u00fchne, auf der alles schiefgehen kann, vor hunderten Millionen Zuschauern. Sie wirkte souver\u00e4n. Dahinter stand die Entscheidung der SX6: Ich gehe hinein. Ich stelle mich.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Geschenk: Mut, der andere ermutigt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was die sexuelle Sechs mit Siebenerfl\u00fcgel als St\u00e4rke gibt, ist mehr als pers\u00f6nlicher Mut. Es ist ein Modell. Wer Anke Engelke zusieht, sieht jemanden, der sich nicht kleiner macht. Der seinen Raum einnimmt. Der Fehler zum Teil der Vorstellung macht, Unsicherheit zum Ausdrucksmittel &ndash; und damit anderen die Erlaubnis gibt, das auch zu tun.</p>
          <p class="vb-intro">Das ist das Geschenk der SX6w7: Mut durch Erscheinen. Nicht die Abwesenheit von Zweifel, sondern das Einladen des Zweifels auf die B\u00fchne &ndash; und das Spielen damit. Das ist Anke Engelke. Das ist der Wolf, der tanzt.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/sx6", label:"SX6 \u2013 Der Wolf: Subtyp-Profil"},
        {route:"beruehmte-alice-schwarzer", label:"Portr\u00e4t: Alice Schwarzer (SX6w5)"},
      ])}
    </div>
  `);
}

function jenniferAnistonPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-jennifer-aniston-portrait.jpg" alt="Jennifer Aniston – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Jennifer Aniston</p>
        <p class="krim-portrait-typ">SX6w7 &middot; Sexueller Typ 6 mit Siebenerflügel</p>
        <p class="krim-portrait-subtitle">Schauspielerin &amp; Produzentin, geb. 1969 in Sherman Oaks, Kalifornien &ndash; Tierentsprechung: Wolf</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Wolf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Wolf</strong> ist das Tier des sexuellen Typs 6 &ndash; ein Tier, das seine Kraft nicht aus Einzelgängertum zieht, sondern aus dem Rudel, in dem es sich beweist. Wölfe prüfen einander ständig: durch Blickkontakt, durch körperliche Nähe, durch das Aushändigen und Zurückfordern von Status. Wer im Rudel bestehen will, muss zeigen, dass er standhält &ndash; nicht durch Größe allein, sondern durch die Bereitschaft, sich zu exponieren.</p>
          <p class="vb-intro">Die US-amerikanische Schauspielerin Jennifer Aniston, 1969 in Sherman Oaks geboren, verkörpert genau das. Ihre Karriere begann nicht mit einem Sprung ins Rampenlicht, sondern mit Jahren kleiner Rollen und gescheiterter Serien, bevor 1994 die Rolle kam, die alles veränderte. Was sie durch die Jahrzehnte trägt, ist keine spektakuläre Einzelleistung, sondern die Fähigkeit, sich immer wieder ins Rudel zu stellen &ndash; ins Ensemble, ins Team, in die Öffentlichkeit &ndash; und dort standzuhalten, wenn es unbequem wird.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Sechs: Stärke als Antwort auf die Angst (Kontratyp)</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Sechs (SX6)</strong> ist der Kontratyp der Sechs: Sie zeigt ihre Angst nicht, sondern überdeckt sie mit Stärke, Direktheit und einer Präsenz, die nach außen selbstsicher wirkt. Naranjo nannte diesen Subtyp <em>Strength</em>. Die SX6 begegnet der Bedrohung, statt vor ihr zurückzuweichen &ndash; und genau das erzeugt den Eindruck von Mühelosigkeit, der oft täuscht.</p>
          <p class="vb-intro">Aniston wirkt seit drei Jahrzehnten souverän vor der Kamera. Was in dieser Souveränität nicht sichtbar ist: die Angst, die als Antrieb dahinterliegt. Sie hat wiederholt öffentlich gemacht, dass sie während der Dreharbeiten zu <em>Friends</em> unter erheblichem Lampenfieber litt und dass ihre vermeintliche Leichtigkeit hart erarbeitet war. Die Stärke der SX6 ist keine Abwesenheit von Angst &ndash; sie ist die tägliche Entscheidung, trotzdem aufzutreten.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Siebenerflügel: Leichtigkeit als Handwerk</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Siebenerflügel</strong> gibt der sexuellen Sechs eine spielerische Seite, die bei schwach ausgeprägtem Siebenerflügel fehlen würde: Timing, Selbstironie, die Fähigkeit, aus Anspannung Komik zu machen. Wo eine SX6 mit schwächerem Siebenerflügel eher grimmig verteidigt, lächelt die SX6w7 dabei &ndash; ohne dass die Schärfe darunter verschwindet.</p>
          <p class="vb-intro">Anistons komisches Talent, allen voran als Rachel Green in <em>Friends</em> (1994&ndash;2004), lebt genau von dieser Mischung: präzises Timing, körperliche Komik, eine Figur, die verletzlich sein durfte, ohne lächerlich zu wirken. Die Serie machte sie zu einer der bestbezahlten Fernsehschauspielerinnen ihrer Zeit &ndash; und der berühmte <em>Rachel</em>-Haarschnitt wurde weltweit kopiert. Der Siebenerfügel zeigt sich auch darin, wie sie über ihre eigene Berühmtheit sprach: mit Selbstdistanz, nie ganz ernst, immer mit einem Augenzwinkern für das Absurde daran.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Rudel: Solidarität statt Konkurrenz</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Ein zentrales Kapitel der SX6-Geschichte Anistons ist die Gehaltsverhandlung des <em>Friends</em>-Ensembles: Statt sich gegeneinander ausspielen zu lassen, einigten sich alle sechs Hauptdarsteller darauf, gemeinsam zu verhandeln und am Ende gleich viel zu verdienen &ndash; zuletzt eine Million Dollar pro Folge und Person. Das war zu der Zeit in Hollywood außergewöhnlich. Es ist die SX6 in ihrer reifsten Form: Stärke, die nicht gegen das Rudel eingesetzt wird, sondern für es.</p>
          <p class="vb-intro">Auch über das Ende der Serie hinaus hielt dieses Rudel: Die sechs Darsteller blieben eng verbunden, trafen sich öffentlich wieder zur Reunion-Sondersendung 2021. Loyalität über Jahrzehnte, ohne dass die individuellen Karrieren darunter litten &ndash; das ist der Wolf, der weiß, dass das Rudel ihn stärker macht, nicht kleiner.</p>
        </blockquote>

        <h2 class="vb-section">5. Die Konfrontation: Öffentliches Leben, private Angst</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Kaum eine Prominente wurde über so viele Jahre so intensiv öffentlich verhandelt wie Aniston nach der Scheidung von Brad Pitt 2005 &ndash; Boulevardmedien machten ihr Privatleben, insbesondere ihre unerfüllt gebliebene Mutterschaft, zum jahrzehntelangen Dauerthema. Die SX6 reagiert auf solchen Druck nicht mit Rückzug, sondern mit direkter Konfrontation: 2022 sprach Aniston in einem viel beachteten Interview offen über ihre jahrelangen, erfolglosen Künstliche-Befruchtung-Versuche und darüber, wie sehr die öffentlichen Spekulationen sie verletzt hatten.</p>
          <p class="vb-intro">Diese Offenheit ist typisch für die SX6w7: Statt die Verletzlichkeit zu verstecken, stellt sie sich ihr &ndash; öffentlich, mit Worten, nicht mit Schweigen. Es ist dieselbe Bewegung, die sie 2014 in die dramatische Rolle einer chronisch schmerzgeplagten Frau in <em>Cake</em> führte, eine Rolle, die bewusst mit ihrem Komiker-Image brach und ihr eine Golden-Globe-Nominierung einbrachte.</p>
        </blockquote>

        <h2 class="vb-section">6. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX6w7 ist ihre <strong>verlässliche Präsenz</strong>: eine Frau, die über drei Jahrzehnte im öffentlichsten aller Berufe stand, ohne sich zu verstellen, und die Loyalität gegenüber ihrem Rudel über persönlichen Vorteil stellte. Mit ihrer Produktionsfirma und Rollen wie in <em>The Morning Show</em>, die MeToo und Machtmissbrauch in den Medien direkt thematisiert, hat sie sich zudem als Produzentin etabliert, die ernste Stoffe sucht statt sie zu meiden.</p>
          <p class="vb-intro">Der Schatten der SX6 zeigt sich in der permanenten Angriffsbereitschaft, die auch nach innen wirken kann: Anistons öffentlich diskutierte, jahrelange Beziehung zu strengen Fitness- und Ernährungsroutinen liest sich auch als Versuch, Kontrolle über einen Körper und ein Image zu behalten, das über Jahrzehnte fremdbestimmt kommentiert wurde. Die Stärke, die nach außen souverän wirkt, verlangt nach innen einen Preis, der selten sichtbar wird.</p>
        </blockquote>

      </div>
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/sx6", label:"SX6 – Der Wolf: Subtyp-Profil"},
        {route:"beruehmte-anke-engelke", label:"Porträt: Anke Engelke (SX6w7)"},
        {route:"beruehmte-brad-pitt", label:"Porträt: Brad Pitt (SX3w2) – ehemaliger Ehemann"},
      ])}
    </div>
  `);
}

function byronKatiePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-byron-katie-portrait.jpg" alt="Byron Katie – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Byron Katie</p>
        <p class="krim-portrait-typ">SX6w7 · Sexueller Typ 6 mit Siebenerflügel</p>
        <p class="krim-portrait-subtitle">Autorin &amp; Begründerin von „The Work", geb. 1942 in Barstow, Kalifornien – Tierentsprechung: Wolf</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Wolf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Wolf</strong> ist das Tier des sexuellen Typs 6 – ein Tier, das der Bedrohung nicht ausweicht, sondern sie direkt ansieht. Wölfe testen sich gegenseitig durch Blickkontakt und Nähe, nicht durch Rückzug. Wer im Rudel bestehen will, muss standhalten können, wenn es unbequem wird – genau das ist die Bewegung, die Byron Katie zu ihrem Lebenswerk gemacht hat: der eigenen Angst nicht auszuweichen, sondern sie direkt anzuschauen, Frage für Frage.</p>
          <p class="vb-intro">Die US-amerikanische Byron Kathleen Reid, 1942 in der Wüstenstadt Barstow, Kalifornien, geboren, war in den 1970er-Jahren eine erfolgreiche Geschäftsfrau in der Immobilienbranche, verheiratet, Mutter dreier Kinder. Nichts an diesem Leben deutete auf das hin, was folgte: ein fast vollständiger innerer Zusammenbruch – und daraus geboren eine der einflussreichsten Selbsterkenntnismethoden der Gegenwart.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Sechs: Der Abgrund vor der Wende (Kontratyp)</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Sechs (SX6)</strong> ist der Kontratyp der Sechs: Sie zeigt ihre Angst nicht durch Rückzug, sondern begegnet ihr mit Stärke und direkter Konfrontation. Naranjo nannte diesen Subtyp <em>Strength</em>. Doch bevor diese Stärke sichtbar wird, durchlebt die SX6 oft die Angst in ihrer rohesten Form – ungefiltert, überwältigend, kaum zu ertragen.</p>
          <p class="vb-intro">Über etwa zehn Jahre hinweg versank Byron Katie in einer immer tieferen Depression: Wutausbrüche, Paranoia, Agoraphobie – sie konnte irgendwann das Haus nicht mehr verlassen –, Suizidgedanken, Medikamenten- und Alkoholmissbrauch. Am Ende dieser Abwärtsspirale nahm sie eine Einrichtung für Frauen mit Essstörungen auf, weil keine andere Einrichtung sie noch behandeln wollte. Das ist die Angst der Sechs in ihrer reinsten, unbearbeiteten Form – bevor der Kontratyp sich zu ihr umdreht.</p>
        </blockquote>

        <h2 class="vb-section">3. Februar 1986: Die Umkehr auf dem Boden</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">1986, auf dem Boden dieser Einrichtung liegend, erlebte Byron Katie einen Moment, den sie selbst als vollständige, unvermittelte Erkenntnis beschreibt: <em>Wenn ich meinen Gedanken glaubte, litt ich. Wenn ich ihnen nicht glaubte, litt ich nicht.</em> Kein allmählicher Prozess, keine Therapiesitzung, kein Auslöser, den sie benennen könnte – sondern ein Umschlagpunkt, nach dem sie sich selbst als grundlegend verändert erlebte: durchgehend heiter, ohne die Wut und Verzweiflung, die sie ein Jahrzehnt begleitet hatten.</p>
          <p class="vb-intro">Als sie nach Hause zurückkehrte, reagierte ihre Familie zunächst mit Verwirrung und Sorge – die Veränderung war so abrupt und so vollständig, dass manche sie für einen weiteren psychischen Ausnahmezustand hielten, nicht für eine Heilung. Für die sexuelle Sechs ist das die radikalste Form der Konfrontation: nicht die Angst zu bekämpfen, sondern die Gedanken zu hinterfragen, die sie erzeugen – so lange, bis nichts mehr übrig bleibt, dem man ausweichen müsste.</p>
        </blockquote>

        <h2 class="vb-section">4. The Work: Vier Fragen als Waffe gegen die Angst</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Aus dieser Erfahrung entwickelte Byron Katie eine Methode, die sie <em>The Work</em> nannte: vier Fragen, die auf jeden belastenden Gedanken angewendet werden können – <em>Ist das wahr? Kannst du absolut sicher wissen, dass es wahr ist? Wie reagierst du, wenn du diesen Gedanken glaubst? Wer wärst du ohne diesen Gedanken?</em> – gefolgt von der <em>Umkehrung</em>, bei der der Gedanke ins Gegenteil oder auf einen selbst gewendet wird.</p>
          <p class="vb-intro">Das Buch <em>Loving What Is</em> (2002), gemeinsam mit ihrem Ehemann, dem renommierten Übersetzer Stephen Mitchell verfasst, wurde zum internationalen Bestseller. Was diese Methode von vielen anderen Selbsthilfeansätzen unterscheidet, ist ihre Direktheit: Byron Katie weicht keiner Frage aus, keinem Schmerz, keiner Konfrontation. In öffentlichen Sitzungen – bekannt als <em>Workings</em> – führt sie Teilnehmer live und ungeschönt vor Publikum durch ihre schmerzhaftesten Überzeugungen. Das ist reine SX6-Energie: sich der Sache stellen, nicht um sie herumgehen.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Siebenerflügel: Freude als Methode</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Siebenerflügel</strong> gibt der sexuellen Sechs eine Leichtigkeit, die eine SX6 mit schwächer ausgeprägtem Siebenerflügel nicht hätte: Humor, Spielfreude, eine Fähigkeit, selbst die schwersten Themen mit einem Lächeln zu berühren, ohne sie zu verharmlosen. Byron Katies öffentlicher Stil ist bekannt für genau diese Mischung – sie lacht oft, mitten in den intensivsten Gesprächen, nicht aus Distanz, sondern aus einer tiefen, fast kindlichen Freude an dem, was gerade geschieht.</p>
          <p class="vb-intro">Ihr Buch <em>A Thousand Names for Joy</em> (2007) trägt diese Qualität schon im Titel. Die SX6w7 sucht nicht nur die Konfrontation mit der Angst – sie sucht danach die Freude, die entsteht, wenn der Kampf gegen die Realität endet. Das ist der Unterschied zu einer SX6 mit schwach ausgeprägtem Siebenerflügel: Wo diese in der Konfrontation verharren könnte, führt ein stark ausgeprägter Siebenerflügel weiter, zu etwas Leichterem dahinter.</p>
        </blockquote>

        <h2 class="vb-section">6. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX6w7 ist ihre kompromisslose Bereitschaft, sich selbst und andere mit dem zu konfrontieren, was am meisten schmerzt – nicht aus Härte, sondern aus der Überzeugung, dass genau dort die Freiheit liegt. Millionen Menschen weltweit haben an Byron Katies Seminaren, den <em>School for The Work</em>, teilgenommen oder ihre Bücher gelesen, viele mit dem Gefühl, zum ersten Mal wirklich gehört worden zu sein.</p>
          <p class="vb-intro">Der Schatten zeigt sich in der Kritik, die ihrer Methode seit Jahren begegnet: Manche werfen ihr vor, komplexe seelische Notlagen – Trauma, Missbrauch, klinische Depression – zu stark auf die Frage nach der Wahrheit eines Gedankens zu reduzieren, als könne jedes Leid allein durch Selbstbefragung aufgelöst werden. Für die SX6 ist die direkte Konfrontation die eigene Rettung gewesen – doch nicht jeder Schmerz lässt sich mit derselben Methode auflösen, mit der sie den ihren überwand. Die reife SX6w7 weiß: Mut zur Wahrheit ersetzt nicht immer die Notwendigkeit von Zeit, Begleitung und Geduld.</p>
        </blockquote>

      </div>
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/sx6", label:"SX6 – Der Wolf: Subtyp-Profil"},
        {route:"beruehmte-jennifer-aniston", label:"Porträt: Jennifer Aniston (SX6w7)"},
        {route:"beruehmte-anke-engelke", label:"Porträt: Anke Engelke (SX6w7)"},
        {route:"krankheitsportraets-byron-katie", label:"Krankheitsporträt: Byron Katie (SX6w7) – zehn Jahre Depression und Agoraphobie"},
      ])}
    </div>
  `);
}

function uweOchsenknechtPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-uwe-ochsenknecht-portrait.jpg" alt="Uwe Ochsenknecht – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Uwe Ochsenknecht</p>
        <p class="krim-portrait-typ">SX6w7 &middot; Sexueller Typ 6 mit Siebenerflügel</p>
        <p class="krim-portrait-subtitle">Deutscher Schauspieler &amp; Musiker, geb. 1956 in Biblis &ndash; Tierentsprechung: Wolf</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Wolf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Wolf</strong> ist das Tier des sexuellen Typs 6 &ndash; ein Tier, das der Bedrohung nicht ausweicht, sondern sich ihr direkt entgegenstellt. Statt Sicherheit im Vertrauten zu suchen, sucht er sie in der Konfrontation selbst. Bereits als Elfjähriger zeigte Uwe Ochsenknecht dieses Muster in aller Deutlichkeit: Er riss von zu Hause aus und verbrachte ein Jahr in Spanien &ndash; keine Flucht aus Angst, sondern ein Sprung mitten hinein in die Unsicherheit, der ihn nach eigener Aussage entscheidend prägte.</p>
          <p class="vb-intro">Der deutsche Schauspieler Uwe Adam Ochsenknecht, geboren 1956 in Biblis in Südhessen, wuchs in Mannheim auf, besuchte das Ludwig-Frank-Gymnasium und begann seine Bühnenlaufbahn zunächst als Komparse am Nationaltheater. Nach seiner Ausbildung an der Westfälischen Schauspielschule Bochum (1974&ndash;1977) folgten Engagements in Wuppertal, München und Hamburg &ndash; ein Werdegang, der von Anfang an eher rastlos als geradlinig verlief.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Sechs: Klartext statt Rückzug (Kontratyp)</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Sechs (SX6)</strong> ist der Kontratyp der Sechs: Sie begegnet der eigenen Angst nicht mit Vorsicht und Rückzug, sondern mit Stärke, Direktheit und einer Präsenz, die Konflikte nicht scheut. Naranjo nannte diesen Subtyp <em>Strength</em>. Statt sich Konflikten zu entziehen, sucht die SX6 sie geradezu &ndash; weil Klarheit ihr mehr Sicherheit gibt als diplomatisches Schweigen.</p>
          <p class="vb-intro">Diese Konfrontationsbereitschaft zieht sich durch Ochsenknechts persönliches Leben: Seine fast zwei Jahrzehnte währende Ehe mit Natascha Ochsenknecht &ndash; geschlossen 1993, getrennt 2009, geschieden 2012 &ndash; endete nicht in stiller Distanz, sondern in öffentlich ausgetragener Schärfe. Auch das Verhältnis zu Tochter Cheyenne ist über Jahre von offenen, öffentlich ausgesprochenen Vorwürfen geprägt, statt von vorsichtigem Schweigen. Für die SX6 ist genau das typisch: Nähe wird mit hoher Intensität gelebt &ndash; und wenn sie zerbricht, dann ebenso intensiv und unverblümt.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Siebenerflügel: Rastlose Vielseitigkeit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Siebenerflügel</strong> gibt der sexuellen Sechs eine Qualität, die bei schwächer ausgeprägtem Siebenerflügel fehlen würde: Appetit auf das Neue, die Lust, sich immer wieder in unbekanntes künstlerisches Terrain zu wagen, statt sich in einer bewährten Rolle einzurichten. Ochsenknechts Filmografie umfasst über 175 Film- und Fernsehproduktionen quer durch alle Genres &ndash; vom Kriminalfilm über die Komödie bis zum ernsten Drama.</p>
          <p class="vb-intro">Seinen ersten großen Durchbruch feierte er 1981 als Bootsmann Lamprecht in Wolfgang Petersens Kultfilm <em>Das Boot</em>, den eigentlichen internationalen Erfolg brachte ihm 1985 die Hauptrolle in Doris Dörries Komödie <em>Männer</em>, für die er mit dem Bundesfilmpreis in Gold ausgezeichnet wurde. Doch Ochsenknecht blieb nicht bei der Komödie: Er stand ab den frühen 1990er-Jahren auch als Musiker auf der Bühne, als Sänger der Band „The Screen" mit mehreren veröffentlichten Alben, und wechselte 2010 mit <em>Hairspray</em> und 2012 mit Peter Maffays <em>Tabaluga</em> zusätzlich ins Musical-Fach. Der Siebenerflügel lässt ihn nie lange auf demselben Terrain verweilen.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX6w7 ist die Fähigkeit, sich über Jahrzehnte hinweg immer wieder neu zu erfinden, ohne sich vor dem Risiko des Scheiterns in einem fremden Metier zu scheuen &ndash; vom Filmschauspieler zum Musical-Darsteller, vom Kinostar zum Bandsänger. Diese Wandlungsfähigkeit trug maßgeblich dazu bei, dass Ochsenknecht über mehr als vier Jahrzehnte hinweg im deutschen Showgeschäft präsent blieb.</p>
          <p class="vb-intro">Der Schatten der SX6 zeigt sich in der Kompromisslosigkeit, mit der Nähe und Konflikt gleichermaßen intensiv gelebt werden: Was als Direktheit und Klarheit beginnt, kann in engen persönlichen Beziehungen auch in offene, öffentlich ausgetragene Brüche münden, die sich nur schwer wieder kitten lassen. Die anhaltende Entfremdung von Tochter Cheyenne und die schroffe öffentliche Aufarbeitung der gescheiterten Ehe mit Natascha zeigen, wie hoch der Preis dieser Intensität im engsten Kreis sein kann &ndash; der Wolf, der sich nie zurückzieht, verliert manchmal genau dort an Boden, wo eine leisere Annäherung mehr bewirkt hätte.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/sx6", label:"SX6 – Der Wolf: Subtyp-Profil"},
        {route:"beruehmte-jimi-blue-ochsenknecht", label:"Portrait: Jimi Blue Ochsenknecht (SE2w3) – Sohn"},
        {route:"beruehmte-wilson-gonzalez-ochsenknecht", label:"Portrait: Wilson Gonzalez Ochsenknecht (SE2w3) – Sohn"},
        {route:"beruehmte-natascha-ochsenknecht", label:"Portrait: Natascha Ochsenknecht (SO8w7) – ehemalige Ehefrau"},
        {route:"beruehmte-cheyenne-ochsenknecht", label:"Portrait: Cheyenne Ochsenknecht (SE3w4) – Tochter"},
        {route:"beruehmte-katja-riemann", label:"Portrait: Katja Riemann (SX6w7)"},
        {route:"beruehmte-michael-schumacher", label:"Portrait: Michael Schumacher (SX6w7)"},
      ])}
    </div>
  `);
}

function katjaRiemannPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-katja-riemann-portrait.jpg" alt="Katja Riemann – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Katja Riemann</p>
        <p class="krim-portrait-typ">SX6w7 · Sexueller Typ 6 mit Siebenerflügel</p>
        <p class="krim-portrait-subtitle">Schauspielerin &amp; Musikerin, geb. 1963 in Bad Kreuznach – Tierentsprechung: Wolf</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Wolf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Wolf</strong> ist das Tier des sexuellen Typs 6 – ein Tier, das der Bedrohung nicht ausweicht, sondern sie direkt ansieht. Es prüft, hält Blickkontakt, zeigt Zähne, wenn es sein muss. Kaum eine deutsche Schauspielerin verkörpert diese Direktheit so konsequent wie Katja Riemann: bekannt nicht nur für ihre Rollen, sondern für Interviews, in denen sie kein Blatt vor den Mund nimmt.</p>
          <p class="vb-intro">Die deutsche Schauspielerin Katja Riemann, geboren 1963 in Bad Kreuznach, ausgebildet an der Folkwang-Schauspielschule Essen, wurde 1994 mit <em>Der bewegte Mann</em> an der Seite von Til Schweiger (SO4w3) über Nacht zum Star des deutschen Kinos. Doch anders als viele, die auf ihren ersten großen Erfolg eine ähnliche Rolle folgen lassen, wechselte sie seither konsequent zwischen Komödie, Musikfilm und historischem Drama – mit einer Risikobereitschaft, die selten geworden ist.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Sechs: Klartext statt Diplomatie (Kontratyp)</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Sechs (SX6)</strong> ist der Kontratyp der Sechs: Sie zeigt ihre Angst nicht durch Rückzug, sondern begegnet ihr mit Stärke, Direktheit und einer Präsenz, die keinen Widerspruch scheut. Naranjo nannte diesen Subtyp <em>Strength</em>. Statt Konflikten auszuweichen, sucht die SX6 sie geradezu – weil Klarheit ihr mehr Sicherheit gibt als diplomatisches Schweigen.</p>
          <p class="vb-intro">Riemann ist seit Jahrzehnten bekannt für genau diese Haltung: In Interviews äußert sie sich unverblümt zu politischen und gesellschaftlichen Themen – zu Krieg, zu Fluchtursachen, zu sozialer Ungleichheit –, oft in einer Schärfe, die ihr öffentlichen Widerspruch und Kritik einbrachte. Sie weicht dem nicht aus. Wer sie öffentlich angreift, bekommt eine Antwort, keine Rückzugsgeste. Genau das macht die sexuelle Sechs aus: Position beziehen, auch wenn es unbequem wird.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Siebenerflügel: Vielseitigkeit als Appetit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Siebenerflügel</strong> gibt der sexuellen Sechs eine Qualität, die bei kaum entwickeltem Siebenerflügel fehlen würde: Appetit auf das Neue, Spielfreude, die Lust, sich immer wieder in unbekanntes Terrain zu wagen. Wo eine Sechs mit schwächerem Siebenerflügel sich in einer bewährten Rolle sicher fühlen könnte, sucht die SX6w7 das nächste Risiko – nicht aus Unruhe, sondern aus echter Neugier.</p>
          <p class="vb-intro">Riemanns Filmografie zeigt genau diese Breite: die Screwball-Komödie <em>Der bewegte Mann</em> (1994), das musikalische Drama <em>Bandits</em> (1997), in dem sie als Teil einer fiktiven Frauenband selbst Schlagzeug spielte und sang, das ernste Historiendrama <em>Nirgendwo in Afrika</em> (2001, Oscar für den besten fremdsprachigen Film) und <em>Rosenstraße</em> (2003) über den Protest deutscher Frauen gegen die Deportation ihrer jüdischen Ehemänner. Kein Genre, in dem sie sich dauerhaft eingerichtet hätte. Der Siebenerflügel treibt sie immer weiter.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Musik: Ein zweites Standbein</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Dass Riemann für <em>Bandits</em> ihre eigenen Gesangs- und Instrumentalparts einspielte, war keine einmalige Fingerübung: Sie veröffentlichte später eigene Musikprojekte und trat auch abseits des Films als Sängerin auf. Für eine etablierte Schauspielerin ihres Kalibers ist das ein ungewöhnlicher Schritt – verbunden mit dem Risiko, in einem fremden Metier bewertet zu werden, in dem sie keinen etablierten Ruf zu verlieren hatte, aber auch keinen zu gewinnen brauchte.</p>
          <p class="vb-intro">Für die SX6w7 ist das typisch: Sicherheit entsteht nicht durch das Festhalten am Bewährten, sondern durch die wiederholte Erfahrung, dass man auch im Ungewissen bestehen kann. Jedes neue Terrain, das erfolgreich betreten wird, bestätigt diese innere Gewissheit von Neuem.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX6w7 ist ihr Mut, öffentlich Position zu beziehen, wo andere lieber schweigen, und dabei künstlerisch beweglich zu bleiben, statt sich auf ein einmal gefundenes Erfolgsrezept zu verlassen. Riemann hat sich über drei Jahrzehnte hinweg als eine der wandlungsfähigsten deutschen Schauspielerinnen etabliert – ausgezeichnet unter anderem mehrfach mit dem Bambi, dem Bayerischen Filmpreis und der Goldenen Kamera.</p>
          <p class="vb-intro">Der Schatten der SX6 zeigt sich in der Kompromisslosigkeit, mit der sie ihre Positionen vertritt: Was als Mut zur klaren Haltung beginnt, kann in der öffentlichen Debatte auch als Konfrontationslust wahrgenommen werden, die wenig Raum für Zwischentöne lässt. Für die sexuelle Sechs ist das der Preis der eigenen Stärke – wer sich nie zurückzieht, eckt zwangsläufig auch dort an, wo ein Rückzug klüger gewesen wäre.</p>
        </blockquote>

      </div>
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/sx6", label:"SX6 – Der Wolf: Subtyp-Profil"},
        {route:"beruehmte-til-schweiger", label:"Porträt: Til Schweiger (SO4w3) – Partner in ›Der bewegte Mann‹"},
        {route:"beruehmte-byron-katie", label:"Porträt: Byron Katie (SX6w7)"},
        {route:"beruehmte-uwe-ochsenknecht", label:"Porträt: Uwe Ochsenknecht (SX6w7)"},
      ])}
    </div>
  `);
}

function michaelSchumacherPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\xfchmte Pers\xf6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-michael-schumacher-portrait.jpg" alt="Michael Schumacher – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Michael Schumacher</p>
        <p class="krim-portrait-typ">SX6w7 &middot; Sexueller Typ 6 mit Siebenerfl\xfcgel</p>
        <p class="krim-portrait-subtitle">Formel-1-Rennfahrer, siebenmaliger Weltmeister, geb. 1969 in H\xfcrth &ndash; Tierentsprechung: Wolf</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Wolf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Wolf</strong> ist kein Tier der Bequemlichkeit. Er ist wachsam, territorial, auf seine Gruppe ausgerichtet &ndash; und wenn er jagt, jagt er mit allem, was er hat. Der Wolf duckt sich nicht vor der Bedrohung. Er dreht sich um und l\xe4uft ihr entgegen. Das ist die sexuelle Sechs in ihrer tiefsten Auspr\xe4gung: Angst nicht als L\xe4hmung, sondern als Treibstoff.</p>
          <p class="vb-intro">Der deutsche Rennfahrer Michael Schumacher ist dieser Wolf. Siebenmal Formel-1-Weltmeister, 91 Siege, f\xfcnf aufeinanderfolgende Titel mit Ferrari &ndash; Zahlen, die in der Geschichte des Motorsports ohne Vergleich waren, als er 2006 zum ersten Mal zur\xfccktrat. Und doch w\xe4re es falsch, Schumacher \xfcber seine Statistiken zu verstehen. Was ihn auszeichnete, war kein K\xf6nner-Gef\xfchl aus der Distanz. Es war eine Intensit\xe4t, die jeden Zentimeter der Strecke als pers\xf6nliches Territorium behandelte. Der Wolf markiert sein Revier. Und er verteidigt es.</p>
        </blockquote>

        <h2 class="vb-section">2. Die St\xe4rke: Angst als Antrieb</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Sechs (SX6)</strong> ist nach Naranjo der <strong>Kontratyp</strong> der Sechs &ndash; der Subtyp, in dem die Leidenschaft der Angst am st\xe4rksten verborgen ist, weil sie ins Gegenteil verkehrt wird. Die SX6 begegnet ihrer Angst nicht mit R\xfcckzug, sondern mit Angriff. Naranjo nannte diesen Subtyp <em>St\xe4rke</em>: Sicherheit entsteht nicht durch Vermeiden des Gef\xe4hrlichen, sondern durch das Dominieren des Gef\xe4hrlichen. <em>Wenn ich schneller bin als die Bedrohung, bin ich sicher.</em> Im Cockpit eines Formel-1-Wagens wird dieses Prinzip buchst\xe4blich.</p>
          <p class="vb-intro">Schumacher war bekannt f\xfcr eine k\xf6rperliche und mentale Vorbereitung, die damals in der Formel 1 ohnegleichen war. Er trainierte wie ein Leistungssportler &ndash; Ausdauer, Reflexe, Nackenmuskulatur. Er kannte jede Kurve jeder Strecke in einem Detailgrad, der seine Ingenieure verbl\xfcffte. Er hinterfragte, analysierte, verfeinerte &ndash; und wenn er ins Auto stieg, war die Angst vor dem Versagen l\xe4ngst in Vorbereitung verwandelt worden. Das ist die SX6: <em>Ich \xfcberhole die Bedrohung, bevor sie mich \xfcberholt.</em></p>
          <p class="vb-intro">Sein Rudel war das Ferrari-Team. Die Jahre 2000 bis 2004, in denen er f\xfcnf Titel in Serie gewann, waren kein Soloprojekt &ndash; sie waren das Ergebnis eines Kollektivs, das sich um ihn herum aufgebaut hatte: Jean Todt, Ross Brawn, Rory Byrne. Schumacher war loyal bis in die Knochen, und das Team gab ihm dieselbe Loyalit\xe4t unmittelbar zur\xfcck. Der Wolf und sein Rudel.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Siebenerfl\xfcgel: Freude an der Geschwindigkeit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Siebenerfl\xfcgel (w7)</strong> bringt der sexuellen Sechs etwas, das eine SX6 mit schwach ausgeprägtem Siebenerflügel allein nicht entwickeln würde: Begeisterungsfähigkeit, Spielfreude und die F\xe4higkeit, aus dem, was andere als Bedrohung erleben, einen Genuss zu machen. Wo die SX6 k\xe4mpft, feiert die SX6w7 das K\xe4mpfen. Das Ergebnis ist ein Mensch, der nicht nur gewinnen <em>will</em>, sondern dem Gewinnen <em>gef\xe4llt</em>.</p>
          <p class="vb-intro">Schumacher liebte das Fahren. Das klingt selbstverst\xe4ndlich &ndash; ist es aber nicht. Viele Rennfahrer lieben das Siegen. Schumacher liebte die Kurve, den Grip, die Grenze des Machbaren. Sein ber\xfchmtes <em>Qualifikationsgef\xfchl</em> &ndash; die F\xe4higkeit, in einem einzigen Rundenversuch alles aus sich und dem Auto herauszuholen &ndash; war nicht nur Technik. Es war Leidenschaft. Der Siebenerfl\xfcgel gibt der SX6 die Freude, die die Angst nicht gibt: Wenn ich so schnell fahre, dass niemand mich einholen kann, sp\xfcre ich kein Risiko mehr. Ich sp\xfcre Freiheit.</p>
          <p class="vb-intro">Der Siebenerfl\xfcgel erkl\xe4rt auch seinen R\xfcckkehr-Drang. 2010, mit einundvierzig Jahren, stieg er bei Mercedes wieder in ein Formel-1-Auto. Nicht aus Geldgier, nicht aus Eitelkeit &ndash; sondern weil das Fahren selbst ihn rief. Der Siebenerfl\xfcgel h\xe4lt die T\xfcr zur Freude offen, auch wenn der Verstand l\xe4ngst Nein sagt.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Werk: Sieben Titel, f\xfcnf mit Ferrari</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Michael Schumacher deb\u00fctierte 1991 beim Gro\xdfen Preis von Belgien in Spa f\xfcr das Jordan-Team &ndash; und wurde noch vor dem n\xe4chsten Rennen von Benetton \xfcbernommen. 1994 gewann er seinen ersten Weltmeistertitel, 1995 seinen zweiten. 1996 wechselte er zu Ferrari &ndash; damals einem Team in der Krise, das seit 1979 keinen Fahrertitel mehr gewonnen hatte. Er baute das Team mit auf, wartete vier Jahre auf den Durchbruch &ndash; und gewann dann f\xfcnfmal in Serie: 2000, 2001, 2002, 2003, 2004. Niemand hatte zuvor f\xfcnf aufeinanderfolgende Weltmeistertitel gewonnen.</p>
          <p class="vb-intro">Einundneunzig Siege, 155 Podestpl\xe4tze, 68 Pole-Positions &ndash; Zahlen, die erst Jahre sp\xe4ter von Lewis Hamilton (SO2w3) \xfcbertroffen wurden. Schumacher setzte in seiner aktiven Zeit den Ma\xdfstab, an dem alle anderen gemessen wurden. Das ist das Werk der SX6w7: nicht das Mittelma\xdf des Komforts, sondern das Absolute des Extremen.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten: Grenzen und Kontroversen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX6w7 ist ihre <strong>Unbedingtheit</strong>. Schumacher hat Ferrari aus einer langj\xe4hrigen Erfolglosigkeit in eine \xc4ra der Dominanz gef\xfchrt. Er hat die Messlatte f\xfcr Vorbereitung, Analyse und Teamgeist in der Formel 1 dauerhaft angehoben. Und er hat eine Leidenschaft f\xfcr den Motorsport vorgelebt, die Generationen von Fans und Fahrern gepr\xe4gt hat.</p>
          <p class="vb-intro">Der Schatten der SX6 ist die Grenz\u00fcberschreitung. 1994 in Adelaide kollidierte Schumacher mit Damon Hill in einem Man\u00f6ver, das noch heute umstritten ist: absichtliche Kollision oder Racing-Unfall? 1997 in Jerez steuerte er seinen Wagen absichtlich in Jacques Villeneuve &ndash; und wurde daf\xfcr aus der Weltmeisterschaftswertung gestrichen. Das ist der Wolf, wenn der Kontratyp kippt: Wenn Gewinnen wichtiger wird als das Spielfeld, das das Gewinnen erst erm\xf6glicht. Die SX6 kennt keine halben Ma\xdfnahmen. Auch im Schatten nicht.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Wolf, der schweigt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Am 29. Dezember 2013 verungl\xfcckte Michael Schumacher beim Skifahren im franz\xf6sischen M\xe9ribel. Er fuhr au\xdferhalb der markierten Piste und st\xfcrzte \xfcber Felsen. Das dabei erlittene schwere Sch\xe4del-Hirn-Trauma ver\xe4nderte sein Leben unwiderruflich. Wochenlang lag er im k\xfcnstlichen Koma, wurde mehrfach operiert. Im Juni 2014 wurde er aus dem Krankenhaus entlassen &ndash; in die Obhut seiner Familie und in eine Privatheit, die seither hermetisch bewacht wird.</p>
          <p class="vb-intro">Seine Frau Corinna hat entschieden, dass die Welt nichts \xfcber seinen Zustand erf\xe4hrt. Nicht als Geste der Abschottung &ndash; sondern als Schutz. <em>Wir werden Michael sch\xfctzen</em>, sagte sie. <em>Er ist hier, er ist anders, aber er ist da.</em> Dieser Satz ist alles, was die \xd6ffentlichkeit wei\xdf. Das Rudel h\xe4lt zusammen. Es zeigt die Z\xe4hne gegen\xfcber jedem, der n\xe4her kommen will, als erlaubt ist. Und der Wolf, der jahrzehntelang das Tempo vorgegeben hat, ist jetzt still &ndash; umgeben von denen, die ihm geh\xf6ren.</p>
          <p class="vb-intro">Michael Schumacher hat der Welt gezeigt, was ein Mensch leisten kann, wenn er Angst in St\xe4rke verwandelt und Geschwindigkeit in Kunst. Was er ihr schuldet, hat er l\xe4ngst bezahlt. Der Rest geh\xf6rt ihm.</p>
        </blockquote>

      </div>
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\xfchmten Pers\xf6nlichkeiten"},
        {route:"subtype/sx6", label:"SX6 \u2013 Der Wolf: Subtyp-Profil"},
        {route:"beruehmte-anke-engelke", label:"Portr\xe4t: Anke Engelke (SX6w7)"},
        {route:"krankheitsportraets-michael-schumacher", label:"Krankheitsporträt: Michael Schumacher (SX6w7)"},
        {route:"bibel-petrus", label:"Bibel-Porträt: Petrus (SX6w7)"},
      ])}
    </div>
  `);
}

function scarlettJohanssonPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-scarlett-johansson-portrait.jpg" alt="Scarlett Johansson – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Scarlett Johansson</p>
        <p class="krim-portrait-typ">SX6w7 &middot; Sexueller Typ 6 mit Siebenerfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Schauspielerin &amp; Produzentin, geb. 1984 &ndash; Tierentsprechung: Wolf</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Wolf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Wolf</strong> ist das Tier des sexuellen Typs 6 &ndash; ein Tier von enormer Pr\u00e4senz, das genau sp\u00fcrt, wann es N\u00e4he zulassen kann und wann es sein Territorium verteidigen muss. Der Wolf zeigt selten Schw\u00e4che nach au\u00dfen. Er tr\u00e4gt seine Wachsamkeit in der Haltung, im Blick, in der Art, wie er einen Raum betritt &ndash; nicht laut, aber un\u00fcbersehbar.</p>
          <p class="vb-intro">Die US-amerikanische Schauspielerin Scarlett Johansson, geboren 1984 in New York City, ist dieser Wolf. Seit ihrem Deb\u00fct als Kind in <em>The Horse Whisperer</em> und ihrem Durchbruch mit <em>Lost in Translation</em> (2003) hat sie sich als eine der intensivsten Pr\u00e4senzen des Weltkinos etabliert &ndash; eine Schauspielerin, die selten viel sagen muss, um einen Raum zu f\u00fcllen. Diese Intensit\u00e4t kommt nicht von ungef\u00e4hr. Sie ist die Signatur des Wolfes: eine Kraft, die sp\u00fcrbar ist, bevor ein Wort f\u00e4llt.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Sechs: St\u00e4rke als Schutzschild</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Sechs (SX6)</strong> ist nach Naranjo der <strong>Kontratyp</strong> der Sechs &ndash; der Subtyp, in dem die Leidenschaft der Angst und des Zweifels am wenigsten sichtbar ist, weil sie in ihr Gegenteil verkehrt wird. Statt sich zur\u00fcckzuziehen, tritt die SX6 nach vorn. <em>Wenn ich stark genug wirke, kann mir niemand zu nahe kommen.</em> Naranjo nannte diesen Subtyp <em>St\u00e4rke</em>: Die SX6 begegnet der eigenen Verletzlichkeit, indem sie eine Fassade von Unangreifbarkeit errichtet.</p>
          <p class="vb-intro">Bei Johansson zeigt sich das in einer Karriere voller Rollen, die genau diese Spannung verk\u00f6rpern: die k\u00fchle, t\u00f6dlich pr\u00e4zise Black Widow im Marvel Cinematic Universe, die selbstbewusste Femme fatale in <em>Match Point</em>, die kontrollierte KI-Stimme in <em>Her</em>, deren emotionale Tiefe sich nur in Nuancen zeigt. Immer wieder Figuren, die St\u00e4rke performen, w\u00e4hrend darunter etwas Verletzliches, Suchendes liegt &ndash; genau das Muster der SX6, das Innere hinter einer R\u00fcstung aus Pr\u00e4senz zu verbergen.</p>
          <p class="vb-intro">Auch privat hat Johansson ihr Rudel klein und gesch\u00fctzt gehalten. Trotz jahrzehntelanger globaler Bekanntheit hat sie ihr Privatleben &ndash; drei Ehen, ihre Tochter und ihren Sohn &ndash; konsequent aus dem Blitzlicht ferngehalten, soweit das f\u00fcr einen der bekanntesten Filmstars der Welt m\u00f6glich ist. Der Wolf gibt nur preis, was er selbst entscheidet preiszugeben.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Siebenerfl\u00fcgel: Vielseitigkeit und Tempo</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Siebenerfl\u00fcgel (w7)</strong> bringt der sexuellen Sechs eine Leichtigkeit und Vielseitigkeit, die bei schwach ausgepr\u00e4gtem Siebenerfl\u00fcgel so nicht da w\u00e4re. Die SX6w7 k\u00e4mpft nicht nur &ndash; sie sucht auch die Abwechslung, das n\u00e4chste Projekt, die n\u00e4chste Herausforderung, bevor die vorherige ausgesch\u00f6pft ist. <em>Stillstand ist gef\u00e4hrlicher als Bewegung.</em></p>
          <p class="vb-intro">Johanssons Filmografie ist ein Musterbeispiel f\u00fcr diesen Fl\u00fcgel: Arthouse-Kino (<em>Lost in Translation</em>, <em>Under the Skin</em>), Blockbuster-Action (<em>Black Widow</em>, <em>Lucy</em>), Stimmarbeit (<em>Her</em>), ernstes Drama (<em>Marriage Story</em>, f\u00fcr das sie 2020 gleich zwei Oscar-Nominierungen erhielt), Satire (<em>Jojo Rabbit</em>) &ndash; kaum ein Genre, das sie ausgelassen hat. Dazu kommt ihr Engagement als Produzentin und ihr Ausflug in die Musik mit dem Album <em>Anywhere I Lay My Head</em> (2008). Der Siebenerfl\u00fcgel verwandelt die Wachsamkeit der Sechs in Neugier: Wer sich st\u00e4ndig weiterbewegt, gibt der Angst keine Zeit, sich festzusetzen.</p>
        </blockquote>

        <h2 class="vb-section">4. Karriere: Vom Kinderstar zur meistkassierenden Schauspielerin</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Johanssons Weg vom Kinderdarstellerinnen-Dasein zur, nach Kinokasseneinspielungen gerechnet, meistkassierenden Schauspielerin der Filmgeschichte ist eine Geschichte konsequenter Neuerfindung. Nach dem kritischen Erfolg von <em>Lost in Translation</em> und <em>Girl with a Pearl Earring</em> etablierte sie sich zun\u00e4chst als anspruchsvolle Charakterdarstellerin, bevor sie 2010 mit <em>Iron Man 2</em> als Natasha Romanoff / Black Widow in das Marvel Cinematic Universe eintrat &ndash; eine Rolle, die sie \u00fcber ein Jahrzehnt und neun Filme hinweg pr\u00e4gte, bis zu ihrem eigenen Solofilm <em>Black Widow</em> (2021).</p>
          <p class="vb-intro">Diese Doppelbewegung &ndash; ernsthaftes Autorenkino neben physisch fordernder Blockbuster-Action &ndash; ist typisch f\u00fcr die SX6w7: die F\u00e4higkeit, in v\u00f6llig unterschiedlichen Registern zu bestehen, ohne sich auf ein einziges Bild festlegen zu lassen. Der Wolf, der in jedem Rudel eine andere Rolle einnehmen kann, ohne seine Kernidentit\u00e4t zu verlieren.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX6w7 ist ihre F\u00e4higkeit, unter Druck Pr\u00e4senz zu zeigen &ndash; die Bereitschaft, sich physisch und emotional in eine Rolle zu werfen, ohne sich zu schonen. Johanssons Trainingsintensit\u00e4t f\u00fcr actionlastige Rollen, ihre Bereitschaft, in <em>Marriage Story</em> eine schmerzhafte Scheidung mit schonungsloser Offenheit darzustellen, ihr Eintreten f\u00fcr gerechte Bezahlung von Schauspielerinnen in Hollywood: All das zeugt von der Bereitschaft, sich der Bedrohung zu stellen, statt ihr auszuweichen.</p>
          <p class="vb-intro">Das Schicksalsmuster der Sechs ist die <strong>Angst</strong> &ndash; und bei der SX6w7 zeigt sich die Schattenseite oft als Kontrollbed\u00fcrfnis \u00fcber das eigene Bild, das in juristischen Auseinandersetzungen m\u00fcndete: Ihr \u00f6ffentlicher Streit mit Disney 2021 um die Streaming-Auswertung von <em>Black Widow</em> war eine der seltenen Gelegenheiten, bei denen der sonst so sorgf\u00e4ltig gesch\u00fctzte Wolf \u00f6ffentlich die Z\u00e4hne zeigte &ndash; ein Kampf um Anerkennung und Kontrolle, ausgetragen mit derselben Direktheit, die sie sonst nur ihren Rollen vorbeh\u00e4lt.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Heilungsweg: St\u00e4rke, die nicht mehr sch\u00fctzen muss</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Sechs f\u00fchrt von der Frage <em>Wie sch\u00fctze ich mich vor der n\u00e4chsten Bedrohung?</em> zur Erkenntnis <em>Ich bin bereits sicher genug, um mich zu zeigen.</em> F\u00fcr die SX6w7 bedeutet das, die R\u00fcstung der st\u00e4ndigen Bewegung und Selbstinszenierung abzulegen &ndash; und Verletzlichkeit nicht nur zu spielen, sondern zuzulassen.</p>
          <p class="vb-intro">Rollen wie die in <em>Marriage Story</em>, in der Johansson eine Frau spielt, die sich selbst neu erfinden muss, deuten genau diese Richtung an: nicht die n\u00e4chste Rolle als Flucht, sondern als ehrlicher Ausdruck. Der Wolf, der nicht mehr k\u00e4mpfen muss, um sicher zu sein &ndash; sondern der wei\u00df, dass seine St\u00e4rke l\u00e4ngst bewiesen ist.</p>
        </blockquote>

      </div>
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/sx6", label:"SX6 \u2013 Der Wolf: Subtyp-Profil"},
        {route:"beruehmte-anke-engelke", label:"Portr\u00e4t: Anke Engelke (SX6w7)"},
      ])}
    </div>
  `);
}

function jasminPaoliniPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-jasmine-paolini-portrait.jpg" alt="Jasmine Paolini – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Jasmine Paolini</p>
        <p class="krim-portrait-typ">SE7w6 &middot; Selbsterhaltender Typ 7 mit Sechserfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Tennisspielerin, geb. 1996 &ndash; Tierentsprechung: Gorilla</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Gorilla</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Gorilla</strong> ist das Tier des selbsterhaltenden Typs 7 &ndash; und er \u00fcberrascht, weil man ihn beim ersten Hinsehen nicht mit Leichtigkeit verbindet. Der Gorilla ist m\u00e4chtig, ruhig und zutiefst familienorientiert. Er lebt im engen Verband, pflegt Bindungen, sch\u00fctzt sein Rudel. Er sucht keine Konfrontation &ndash; aber weicht ihr auch nicht aus, wenn es darauf ankommt. Seine St\u00e4rke ist keine Aggression. Sie ist Verl\u00e4sslichkeit.</p>
          <p class="vb-intro">Die italienische Tennisspielerin Jasmine Paolini ist dieser Gorilla. Auf dem Platz: explosiv, kampfstark, unerm\u00fcdlich. Abseits davon: warm, lachend, famili\u00e4r. Sie feiert Siege mit einer Offenheit, die ansteckt, und tr\u00e4gt Niederlagen mit einer W\u00fcrde, die beeindruckt. Der Gorilla tanzt nicht &ndash; aber wenn er l\u00e4chelt, leuchtet der ganze Wald.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Sieben: Freude als Heimat</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Sieben (SE7)</strong> ist in der Enneagramm-Tradition der Subtyp, der die Ma\u00dflosigkeit der Sieben durch W\u00e4rme und Gemeinschaft ausdr\u00fcckt. Naranjo nannte ihn <em>Familie</em>: Die SE7 schafft sich ihr eigenes Nest &ndash; einen Kreis aus Menschen, Ritualen, Freuden, der ihr Sicherheit gibt. Nicht durch Kontrolle wie die Acht, nicht durch Regeln wie die Eins &ndash; sondern durch Verbindung und Geborgenheit.</p>
          <p class="vb-intro">Bei Jasmine Paolini sieht man das in jedem Turnier: ihr Team, ihr Lachen mit dem Trainer, ihre Ausbr\u00fcche echter Freude nach gewonnenen Punkten. Sie wirkt nie wie jemand, der Tennis spielt, um Ruhm zu ernten. Sie wirkt wie jemand, der Tennis liebt &ndash; und dieses Lieben mit allen teilt, die gerade zusehen.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Sechserfl\u00fcgel: Loyalit\u00e4t als Fundament</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Sechserfl\u00fcgel</strong> gibt der selbsterhaltenden Sieben etwas, das ihr ohne ihn fehlen k\u00f6nnte: Beharrlichkeit. Eine Sieben mit schwach ausgepr\u00e4gtem Sechserfl\u00fcgel springt eher von Erfahrung zu Erfahrung, scheut Schwere, sucht den n\u00e4chsten Aufbruch. Der Sechserfl\u00fcgel verankert sie &ndash; er bringt Loyalit\u00e4t, Verantwortungsgef\u00fchl, die Bereitschaft, auch dann noch zu k\u00e4mpfen, wenn die Freude gerade schwer zu finden ist.</p>
          <p class="vb-intro">Paolinis Karriere ist kein gerader Weg nach oben. Jahrelang spielte sie in der Weltrangliste im Mittelfeld, arbeitete mit ihrem Trainer Renzo Furlan an jedem Detail. Kein Wechsel, keine Ungeduld &ndash; Bindung. Der Sechserfl\u00fcgel h\u00e4lt sie auf dem Boden, wenn die Sieben abzuheben droht, und gibt ihr die Ausdauer f\u00fcr die langen Matches, in denen Freude allein nicht ausreicht.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Leidenschaft: Ma\u00dflosigkeit als innerer Motor</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Leidenschaft der Sieben hei\u00dft <strong>V\u00f6llerei</strong> &ndash; oder Ma\u00dflosigkeit: der unstillbare Hunger nach Erfahrung, Freude, Leben. In der selbsterhaltenden Sieben zeigt er sich nicht als Exzess, sondern als F\u00fclle: mehr W\u00e4rme, mehr Verbindung, mehr dieser Momente, in denen alles stimmt.</p>
          <p class="vb-intro">Bei Paolini sieht man das im Spiel selbst. Sie gibt keine Punkte auf. Sie versucht jeden Ball zu erreichen. Sie l\u00e4chelt nach verlorenen S\u00e4tzen und k\u00e4mpft sich zur\u00fcck. 2024 stand sie in den Finals von Roland Garros und Wimbledon &ndash; und verlor beide. Vier Wochen sp\u00e4ter gewann sie die WTA Finals. Das ist die Ma\u00dflosigkeit der SE7: nicht zerst\u00f6rerisch, sondern unersch\u00f6pflich. Der Hunger nach dem n\u00e4chsten Moment, der n\u00e4chsten Chance, dem n\u00e4chsten Aufschlag.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Geschenk: Freude, die nicht aufgibt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Jasmine Paolini dem Tennis gibt &ndash; und dem Publikum &ndash; ist etwas, das sich nicht trainieren l\u00e4sst: echte Freude. Nicht das L\u00e4cheln einer Marke, nicht die kalkulierte Zug\u00e4nglichkeit eines Kommunikationsteams. Sondern die Freude einer Frau, die auf dem Platz zu Hause ist, die ihren Beruf liebt und das nicht versteckt.</p>
          <p class="vb-intro">Das ist das Geschenk der SE7w6: Freude, die standh\u00e4lt. Nicht die fl\u00fcchtige Begeisterung, die beim ersten R\u00fcckschlag verschwindet, sondern eine Freude, die tief genug verankert ist, um auch Niederlagen zu \u00fcberstehen. Wer Jasmine Paolini beim Tennis zusieht, sieht einen Gorilla in seinem Element: stark, warm, unersch\u00fctterlich. Das ist die SE7w6. Das ist die Freude als Heimat.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/se7", label:"SE7 \u2013 Der Gorilla: Subtyp-Profil"},
        {route:"beruehmte-hans-zimmer", label:"Portr\u00e4t: Hans Zimmer (SE7w8)"},
      ])}
    </div>
  `);
}

function moritzBleibtreuPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-moritz-bleibtreu-portrait.jpg" alt="Moritz Bleibtreu – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Moritz Bleibtreu</p>
        <p class="krim-portrait-typ">SE7w8 · Selbsterhaltender Typ 7 mit Achterflügel</p>
        <p class="krim-portrait-subtitle">Schauspieler &amp; Regisseur, geb. 1971 in München – Tierentsprechung: Gorilla</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Gorilla</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Gorilla</strong> ist das Tier des selbsterhaltenden Typs 7 – und er überrascht, weil man ihn beim ersten Hinsehen nicht mit Leichtigkeit verbindet. Der Gorilla ist mächtig, ruhig und zutiefst familienorientiert. Er lebt im engen Verband, pflegt Bindungen, schützt sein Rudel. Er sucht keine Konfrontation – aber weicht ihr auch nicht aus, wenn es darauf ankommt.</p>
          <p class="vb-intro">Der deutsche Schauspieler Moritz Bleibtreu, 1971 in München geboren, Sohn des Schauspielers Hans-Peter Bleibtreu, ist seit über drei Jahrzehnten eines der beweglichsten Gesichter des deutschen Films. Kaum ein Kollege seiner Generation hat ein derart dichtes, ungewöhnlich vielseitiges Werk vorzuweisen – von der Komödie bis zum psychologischen Thriller, von der historischen Rolle bis zur internationalen Großproduktion.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Sieben: Freude als Handwerk</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Sieben (SE7)</strong> findet ihre Freude nicht im Spektakel, sondern in der Wärme des Schaffens selbst – im Prozess, in der Zusammenarbeit, im Handwerk. Naranjo nannte diesen Subtyp <em>Familie</em>: Die SE7 schafft sich ihr eigenes Nest, einen Raum, in dem Kreativität und Geborgenheit zusammenkommen. Interessanterweise bezeichnete Naranjo in seinen Seminaren die selbsterhaltende Sieben gelegentlich auch als die <em>versteckte Acht</em>: Von allen drei Siebener-Varianten kann sich die SE7 im Ernstfall am kompromisslosesten durchsetzen. Fühlt sie ihre Freiheit oder Unabhängigkeit bedroht, kann aus dem freundlichen, familienorientierten Wesen abrupt eine Härte werden, die kaum noch Rücksicht kennt – der Gorilla, der sich friedlich durch den Wald bewegt, aber zum unerbittlichen Verteidiger wird, sobald sein Revier angetastet wird.</p>
          <p class="vb-intro">Bleibtreus internationaler Durchbruch gelang 1998 mit <em>Lola rennt</em> von Tom Tykwer, an der Seite von Franka Potente (SE2w1) – ein Film, der das deutsche Kino jener Jahre neu definierte. Statt diesen Erfolg in eine einzige Rollenformel zu übersetzen, wechselte er seither ständig das Terrain: Komödie (<em>Soul Kitchen</em>, 2009), Psychothriller (<em>Das Experiment</em>, 2001), historisches Drama (<em>Der Baader Meinhof Komplex</em>, 2008), internationales Kino (<em>München</em>, 2005, Regie: Steven Spielberg; <em>Speed Racer</em>, 2008). Die SE7 sucht nicht die eine große Rolle – sie sucht die nächste Erfahrung.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Achterflügel: Kraft, die trägt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Achterflügel</strong> gibt der selbsterhaltenden Sieben etwas, das nicht jeder Sieben zur Verfügung steht: Durchsetzungskraft und die Fähigkeit, auch in die dunkelsten, konfrontativsten Rollen vollständig einzutauchen, ohne sich vor der eigenen Intensität zurückzuziehen.</p>
          <p class="vb-intro">2008 verkörperte Bleibtreu in <em>Der Baader Meinhof Komplex</em> den RAF-Terroristen Andreas Baader – eine Rolle von schonungsloser Härte, die international Anerkennung fand und ihm eine Nominierung für den Europäischen Filmpreis einbrachte. Es ist eine Darstellung ohne jede Distanzierung: kein Kommentar, keine Milderung, volle Konfrontation mit einer zutiefst verstörenden historischen Figur. Das ist der Achterflügel: die Bereitschaft, sich der schwersten Energie eines Stoffes auszusetzen, statt ihr auszuweichen.</p>
          <p class="vb-intro">Bemerkenswert dabei: Andreas Baader war ebenfalls eine selbsterhaltende Sieben mit starkem Achterflügel (SE7w8) – Statussymbole und schnelle Autos als Ausdruck des Freiheitsdrangs, Geldbeschaffung durch Raub statt durch ein geordnetes System, ein Leben konsequent nach den eigenen Regeln, ohne Rücksicht auf Konsequenzen. Regie führte Uli Edel, Drehbuch und Produktion verantwortete Bernd Eichinger nach der Vorlage von Stefan Aust. Ob die Besetzung bewusst auf diese Typähnlichkeit zielte, ist nicht überliefert – enneagrammatisch war sie jedenfalls ein Glücksgriff: Ein SE7w8 spielt hier einen SE7w8, und genau diese Deckungsgleichheit dürfte zur Glaubwürdigkeit beigetragen haben, mit der Bleibtreu die Rolle bis in ihre unbequemsten Facetten trug.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Leidenschaft: Völlerei als Schöpfungsdrang</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Leidenschaft der Sieben heißt <strong>Völlerei</strong> – der unstillbare Hunger nach Erfahrung, nach dem nächsten Projekt, nach neuen Facetten des eigenen Könnens. In der selbsterhaltenden Sieben richtet sich dieser Hunger nicht auf Exzess, sondern auf Fülle: mehr Rollen, mehr Genres, mehr Handwerk.</p>
          <p class="vb-intro">Bleibtreus Filmografie umfasst weit über hundert Produktionen – Kino, Fernsehen, internationale Koproduktionen. In Interviews ist er bekannt für sein schnelles, sprunghaftes, oft komisches Erzähltempo – Gedanken, die sich überschlagen, Themenwechsel mitten im Satz. Das ist kein Mangel an Fokus. Es ist der Gorilla in seinem Element: ein Geist, der ständig in Bewegung bleibt, weil Stillstand sich für die SE7 wie Verlust anfühlt.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Geschenk: Vielseitigkeit ohne Verwässerung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Moritz Bleibtreu dem deutschen Film gegeben hat, ist der Beweis, dass Vielseitigkeit keine Verwässerung sein muss. Wer zwischen Manni in <em>Lola rennt</em>, dem gequälten Versuchsteilnehmer in <em>Das Experiment</em> und dem RAF-Anführer Baader wechseln kann, ohne dabei an Glaubwürdigkeit zu verlieren, hat verstanden, dass echte Wandlungsfähigkeit kein Widerspruch zur Tiefe ist – sondern ihre Voraussetzung.</p>
          <p class="vb-intro">Das ist das Geschenk der SE7w8: Freude am Handwerk, gepaart mit der Kraft, auch dorthin zu gehen, wo es unbequem wird. Der Gorilla, der sein Rudel – das Ensemble, das Publikum, das Genre – nie verlässt, aber auch nie stehen bleibt.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se7", label:"SE7 – Der Gorilla: Subtyp-Profil"},
        {route:"beruehmte-franka-potente", label:"Porträt: Franka Potente (SE2w1) – Partnerin in ›Lola rennt‹"},
        {route:"kriminalpsychologie-andreas-baader", label:"Kriminalpsychologie: Andreas Baader (SE7w8) – von Bleibtreu verkörpert"},
        {route:"beruehmte-hans-zimmer", label:"Porträt: Hans Zimmer (SE7w8)"},
        {route:"beruehmte-til-schweiger", label:"Porträt: Til Schweiger (SO4w3)"},
      ])}
    </div>
  `);
}

function hansZimmerPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-hans-zimmer-portrait.jpg" alt="Hans Zimmer – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Hans Zimmer</p>
        <p class="krim-portrait-typ">SE7w8 &middot; Selbsterhaltender Typ 7 mit Achterfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Filmkomponist, Arrangeur &amp; Musikproduzent, geb. 1957 &ndash; Tierentsprechung: Gorilla</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Gorilla</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Gorilla</strong> ist das Tier des selbsterhaltenden Typs 7 &ndash; und kein Bild beschreibt Hans Zimmer besser. Der Gorilla ist kein Solist. Er lebt im Verband, sch\u00fctzt seine Familie, teilt Nahrung, lehrt die J\u00fcngeren. Seine St\u00e4rke dient nicht der Selbstdarstellung, sondern der Gemeinschaft. Und wenn er sich bewegt &ndash; durch den Wald, durch den Raum &ndash; sp\u00fcrt man seine Schwerkraft, ohne dass er droht.</p>
          <p class="vb-intro">Der deutsche Komponist Hans Zimmer hat in Santa Monica ein Studio aufgebaut, das man Remote Control Productions nennt &ndash; und das von innen eher einer Musikerfamilie \u00e4hnelt als einer Produktionsfirma. Zimmer hat dort Dutzende Komponisten ausgebildet, gef\u00f6rdert, begleitet: Junkie XL, Lorne Balfe, Harry Gregson-Williams, Rupert Gregson-Williams, Ramin Djawadi und viele andere. Der Gorilla baut kein Territorium. Er baut ein Rudel.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Sieben: Freude als Sch\u00f6pfung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Sieben (SE7)</strong> findet ihre Freude nicht im Spektakel, sondern in der W\u00e4rme des Schaffens selbst &ndash; im Prozess, in der Zusammenarbeit, im Akt des Erschaffens. Naranjo nannte diesen Subtyp <em>Familie</em>: Die SE7 schafft sich ihr eigenes Nest, einen Raum, in dem Kreativit\u00e4t und Geborgenheit zusammenkommen.</p>
          <p class="vb-intro">Zimmer brach mit sechzehn die Schule ab. Er hatte nie eine formale Musikausbildung &ndash; und lie\u00df sich davon nie aufhalten. Statt Noten zu studieren, experimentierte er: mit Synthesizern, mit Orchesterkl\u00e4ngen, mit allem, was Klang erzeugt. Seine Freude am Entdecken ist bis in die Gegenwart sp\u00fcrbar. Kein Score klingt wie der vorherige. Jeder Film ist ein neues Abenteuer.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Achterfl\u00fcgel: Kraft, die tr\u00e4gt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Achterfl\u00fcgel</strong> gibt der selbsterhaltenden Sieben etwas, das nicht jeder Sieben zur Verf\u00fcgung steht: Durchsetzungskraft. Bei schwach ausgepr\u00e4gtem Achterfl\u00fcgel kann sich die Sieben in M\u00f6glichkeiten verlieren, kann ausweichen, kann umlenken, wenn etwas schwer wird. Der Achterfl\u00fcgel h\u00e4lt dagegen &ndash; er bringt Entschlossenheit, Direktheit, die Bereitschaft, Konflikte auszuhalten.</p>
          <p class="vb-intro">Zimmers Musik ist nicht zart. Sie ist wuchtig, archaisch, k\u00f6rperlich &ndash; Klang, der man sp\u00fcrt, bevor man ihn versteht. Das Blechbl\u00e4sergewitter in <em>Gladiator</em>, das Herzklopfen von <em>Inception</em>, die Wellen in <em>Dunkirk</em>. Das ist der Achterfl\u00fcgel: Freude, die keine Angst hat vor Lautst\u00e4rke, vor Gewicht, vor dem Moment, in dem Musik jemanden \u00fcberw\u00e4ltigt.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Leidenschaft: V\u00f6llerei als Sch\u00f6pfungsdrang</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Leidenschaft der Sieben hei\u00dft <strong>V\u00f6llerei</strong> &ndash; oder Ma\u00dflosigkeit: der unstillbare Hunger nach Erfahrung, nach dem n\u00e4chsten Projekt, nach dem Gef\u00fchl, etwas Neues zu erschaffen. In der selbsterhaltenden Sieben richtet sich dieser Hunger nicht auf Exzess, sondern auf F\u00fclle: mehr Klang, mehr Tiefe, mehr Verbindung zwischen Musik und Bild.</p>
          <p class="vb-intro">Zimmer hat Musik f\u00fcr \u00fcber 150 Filme geschrieben. Er schl\u00e4ft wenig. Er arbeitet in Phasen, die Mitarbeiter als intensiv beschreiben &ndash; und die er selbst als seine nat\u00fcrliche Betriebstemperatur bezeichnet. Es ist nicht Getriebensein. Es ist der Gorilla in seinem Element: Sch\u00f6pfen als Lebensform, Klang als Sprache, die nie zu Ende gesagt ist.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Geschenk: Emotionen, die die Welt ber\u00fchren</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Hans Zimmer dem Kino gegeben hat &ndash; und durch das Kino der Welt &ndash; ist die Erfahrung, dass Musik ein Raum sein kann. Nicht Hintergrundtapete, nicht emotionale Markierung, sondern ein eigenst\u00e4ndiges Erleben: Man sitzt im Kino, h\u00f6rt den Score, und versteht pl\u00f6tzlich etwas \u00fcber die Szene, \u00fcber die Figur, \u00fcber sich selbst.</p>
          <p class="vb-intro">Das ist das Geschenk der SE7w8: Freude, die nicht bei sich bleibt. Ein Gorilla, der nicht nur sein Rudel sch\u00fctzt, sondern es wachsen l\u00e4sst &ndash; und dessen Stimme, einmal geh\u00f6rt, nicht mehr aus dem Kopf geht. Hans Zimmer hat keine Noten studiert. Er hat gelernt, wie Klang Menschen ber\u00fchrt. Das ist die selbsterhaltende Sieben mit Achterfl\u00fcgel. Das ist der Gorilla, der singt.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/se7", label:"SE7 \u2013 Der Gorilla: Subtyp-Profil"},
        {route:"beruehmte-jasmin-paolini", label:"Portr\u00e4t: Jasmine Paolini (SE7w6)"},
      ])}
    </div>
  `);
}

function francisBaconPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-francis-bacon-portrait.jpg" alt="Francis Bacon – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Francis Bacon</p>
        <p class="krim-portrait-typ">SE7w8 &middot; Selbsterhaltender Typ 7 mit Achterfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Philosoph, Staatsmann &amp; Begr\u00fcnder des Empirismus, geb. 1561, gest. 1626 &ndash; Tierentsprechung: Gorilla</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Gorilla</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Gorilla</strong> ist das Tier des selbsterhaltenden Typs 7 &ndash; ein Tier von enormer Kraft, das im Verband lebt, dessen Reichweite sich \u00fcber ein ganzes Territorium erstreckt und dessen Pr\u00e4senz einen Raum f\u00fcllt, ohne dass es sich anstrengen m\u00fcsste. Der Gorilla denkt in gro\u00dfen Zusammenh\u00e4ngen &ndash; und er baut sich sein Umfeld so, dass er darin wachsen kann.</p>
          <p class="vb-intro">Der britische Philosoph Francis Bacon, geboren 1561 in London als Sohn des Lordsiegelbewahrers Nicholas Bacon, ist dieser Gorilla. Kaum ein Denker seiner Zeit griff nach so viel zugleich: Jurist, Politiker, Wissenschaftstheoretiker, Essayist &ndash; und am Ende seiner Laufbahn Lordkanzler von England, das h\u00f6chste juristische Amt der Krone. Sein erkl\u00e4rtes Lebensziel war nichts Geringeres als die <em>Instauratio Magna</em>, die \u201eGro\u00dfe Erneuerung" des gesamten menschlichen Wissens. Ein Gorilla baut kein kleines Nest &ndash; er baut ein Territorium, das ein ganzes Rudel tr\u00e4gt.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Sieben: Freude am Entdecken</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Sieben (SE7)</strong> sucht ihre Freude nicht auf der gro\u00dfen B\u00fchne, sondern im eigenen, selbst geschaffenen Umfeld &ndash; im Prozess des Erschaffens, Sammelns und Ordnens selbst. Naranjo nannte diesen Subtyp <em>Familie</em>: ein Nest, in dem sich Neugier ungest\u00f6rt entfalten kann.</p>
          <p class="vb-intro">Bacons Neugier kannte praktisch kein Fach, das ihm zu fremd gewesen w\u00e4re. Er sammelte Beobachtungen zu Naturph\u00e4nomenen, Experimenten, Rechtsf\u00e4llen, Staatsgesch\u00e4ften und moralischen Fragen mit derselben Hingabe. Sein Werk <em>Novum Organum</em> (1620) schlug ein radikal neues Fundament f\u00fcr die Wissenschaft vor: nicht l\u00e4nger aus alten Autorit\u00e4ten wie Aristoteles ableiten, sondern durch systematische Beobachtung und Experiment zu neuem Wissen gelangen &ndash; die induktive Methode, die auch heute noch als Geburtsstunde der modernen empirischen Wissenschaft gilt. \u201eWissen ist Macht", schrieb er &ndash; ein Satz, der sein ganzes Lebensprojekt zusammenfasst: die Freude der SE7 am Entdecken, verwandelt in ein System f\u00fcr die gesamte Menschheit.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Achterfl\u00fcgel: Macht und Durchsetzung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Achterfl\u00fcgel</strong> gibt der selbsterhaltenden Sieben eine Durchsetzungskraft, die bei schwach ausgeprägtem Achterflügel fehlen würde. Naranjo nannte die selbsterhaltende Sieben nach seinen jahrzehntelangen Erfahrungen mit diesem Subtyp <em>die versteckte Acht</em> &ndash; eine Sieben, die die Entschlossenheit und Direktheit der Acht in sich tr\u00e4gt, ohne sie offen zur Schau zu stellen. Wo die Sieben ausweicht, wenn Widerstand entsteht, sucht die SE7w8 die Konfrontation &ndash; und den Aufstieg in Positionen, aus denen heraus sie tats\u00e4chlich gestalten kann.</p>
          <p class="vb-intro">Bacons politische Karriere zeigt diese Durchsetzungskraft ungefiltert: Abgeordneter im Unterhaus, Solicitor General, Attorney General, Lordsiegelbewahrer und schlie\u00dflich 1618 Lordkanzler von England unter K\u00f6nig Jakob I. &ndash; ein beispielloser Aufstieg durch juristische Pr\u00e4zision, politisches Kalk\u00fcl und beharrliches Werben um Gunst am Hof. Doch der Achterfl\u00fcgel hat auch eine schmerzhafte Seite: 1601 war es Bacon, der als Kronanwalt ma\u00dfgeblich an der Anklage seines fr\u00fcheren F\u00f6rderers und Freundes, des Earl of Essex, wegen Hochverrats mitwirkte &ndash; ein Verrat an einer pers\u00f6nlichen Bindung zugunsten der eigenen Karriere, den ihm viele Zeitgenossen nie verziehen. Macht und Loyalit\u00e4t standen bei Bacon oft in Konkurrenz, und die Macht gewann meist.</p>
        </blockquote>

        <h2 class="vb-section">4. Aufstieg und Fall: Der Lordkanzler</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">1618 erreichte Bacon den Gipfel seiner Laufbahn: Lordkanzler von England, kurz darauf zum Viscount St Alban erhoben. Er war damit der oberste Richter des Landes &ndash; und zugleich mitten in der Arbeit an seinem gro\u00dfen wissenschaftlichen Reformwerk. Zwei Leben, ein Mann: der Staatsdiener am Tag, der Universalgelehrte in den fr\u00fchen Morgenstunden.</p>
          <p class="vb-intro">1621 st\u00fcrzte dieses doppelte Leben ein. Das Parlament klagte Bacon der Bestechlichkeit an &ndash; er hatte, wie damals nicht un\u00fcblich, Geschenke von Prozessparteien angenommen, w\u00e4hrend deren Verfahren vor ihm liefen. Bacon gestand die Vorw\u00fcrfe ein, ohne sich zu rechtfertigen, wurde zu einer hohen Geldstrafe verurteilt, kurzzeitig im Tower of London inhaftiert und von allen \u00f6ffentlichen \u00c4mtern sowie vom Parlament und Hof ausgeschlossen. Der Gorilla, der ein Territorium f\u00fcr die gesamte Menschheit hatte bauen wollen, verlor binnen weniger Wochen sein eigenes.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE7w8 ist ihre F\u00e4higkeit, aus reiner Entdeckerfreude ein Werk zu schaffen, das \u00fcber die eigene Lebenszeit hinausreicht. Bacons Beschreibung der \u201eIdole des Geistes" &ndash; der systematischen Denkfehler, die menschliche Erkenntnis verzerren, von Vorurteilen des Einzelnen bis zu blindem Vertrauen in \u00fcberlieferte Autorit\u00e4ten &ndash; nimmt moderne Erkenntnistheorie und Kognitionspsychologie um Jahrhunderte vorweg. Ohne Bacons Methode s\u00e4he die gesamte neuzeitliche Naturwissenschaft anders aus.</p>
          <p class="vb-intro">Der Schatten liegt in einer bitteren Ironie: Der Mann, der wie kein anderer vor Selbstt\u00e4uschung und verzerrtem Urteil warnte, unterlag am Ende genau jenen \u201eIdolen", die er selbst beschrieben hatte &ndash; der Versuchung der Macht, der Bequemlichkeit angenommener Geschenke, dem Glauben, \u00fcber den eigenen Regeln zu stehen. Das Schicksalsmuster der Sieben ist die <strong>V\u00f6llerei</strong> &ndash; bei der SE7w8 zeigt sie sich nicht nur als Hunger nach Wissen, sondern auch als Hunger nach \u00c4mtern, Einfluss und Anerkennung, der irgendwann die eigene Integrit\u00e4t \u00fcberholt.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Heilungsweg: Wissen, das bleibt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Sieben f\u00fchrt von der Frage <em>Wonach greife ich als N\u00e4chstes?</em> zur N\u00fcchternheit: dem bewussten Verzicht auf das Zuviel, zugunsten dessen, was wirklich tr\u00e4gt. F\u00fcr die SE7w8 bedeutet das, die eigene Sch\u00f6pferkraft nicht mehr in den Dienst der Selbstvermehrung von Macht zu stellen, sondern in den Dienst einer Sache, die gr\u00f6\u00dfer ist als man selbst.</p>
          <p class="vb-intro">Genau das tat Bacon in seinen letzten f\u00fcnf Lebensjahren nach dem Sturz: von \u00f6ffentlichen \u00c4mtern befreit, widmete er sich fast ausschlie\u00dflich dem Schreiben und vollendete einige seiner bedeutendsten Werke. Sein Tod im April 1626 passt zu keinem anderen Subtyp so gut wie zur SE7w8: Auf einer Kutschfahrt kam ihm die Idee, ob K\u00e4lte F\u00e4ulnis verz\u00f6gern k\u00f6nnte &ndash; er hielt an, kaufte ein H\u00e4hnchen, stopfte es eigenh\u00e4ndig mit Schnee aus und erk\u00e4ltete sich dabei t\u00f6dlich. Der Gorilla, der bis zum letzten Atemzug nach der n\u00e4chsten Entdeckung griff &ndash; und im Sterben noch ein Experiment machte.</p>
        </blockquote>

        <p class="vb-intro">Die jahrzehntelange Gicht und die genauen Umst\u00e4nde des t\u00f6dlichen H\u00fchnchen-Experiments werden ausf\u00fchrlich im eigenen <a href="javascript:void(0)" data-route="krankheitsportraets-francis-bacon">Krankheitsportr\u00e4t zu Bacon</a> gedeutet.</p>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"krankheitsportraets-francis-bacon", label:"Krankheitsportr\u00e4t: Francis Bacon (SE7w8)"},
        {route:"subtype/se7", label:"SE7 \u2013 Der Gorilla: Subtyp-Profil"},
        {route:"beruehmte-hans-zimmer", label:"Portr\u00e4t: Hans Zimmer (SE7w8)"},
      ])}
    </div>
  `);
}

function hazelBruggerPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-hazel-brugger-portrait.jpg" alt="Hazel Brugger" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Hazel Brugger</p>
        <p class="krim-portrait-typ">SO7w8 &middot; Sozialer Typ 7 mit Achterfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Comedian, Kabarettistin &amp; Autorin, geb. 1993 &ndash; Tierentsprechung: Biber</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Biber</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Biber</strong> ist das Tier des sozialen Typs 7 &ndash; und Hazel Brugger ist ein Biber, der auf der B\u00fchne baut. Der Biber erschafft etwas, wo vorher nichts war: Er staut Wasser auf, ver\u00e4ndert Landschaften, macht aus Stille Bewegung. Hazel Brugger betritt die B\u00fchne &ndash; und danach ist der Raum ein anderer. Nicht weil sie laut w\u00e4re. Sondern weil ihre Gedanken D\u00e4mme bauen, die das Wasser der Realit\u00e4t aufstauen und in eine andere Richtung lenken.</p>
          <p class="vb-intro">Biber sind Einzelg\u00e4nger, die trotzdem f\u00fcr andere bauen. Sie konstruieren ihr Habitat nicht f\u00fcr die Galerie, sondern weil sie gar nicht anders k\u00f6nnen &ndash; und was entsteht, n\u00fctzt dem ganzen \u00d6kosystem. Hazel Brugger schreibt B\u00fccher, steht auf der B\u00fchne, moderiert, bloggt, podcastet, slamt. Der Biber hat immer ein neues Projekt. Und alle, die zuschauen, profitieren davon.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Sieben: Humor als Weltgestaltung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Sieben (SO7)</strong> ist der Subtyp der Sieben, der am st\u00e4rksten nach au\u00dfen wirkt &ndash; der, bei dem die Freude nicht nur pers\u00f6nlich bleibt, sondern zum gesellschaftlichen Projekt wird. Naranjo beschrieb diesen Subtyp als <em>Sacrifice</em>: Die SO7 gibt ihre eigene Energie in den Dienst einer gr\u00f6\u00dferen Idee &ndash; und findet darin ihre eigentliche Freude.</p>
          <p class="vb-intro">F\u00fcr Hazel Brugger ist Humor kein Unterhaltungsformat. Es ist eine Erkenntnisform. Sie nimmt Alltagsbeobachtungen &ndash; \u00fcber Beziehungen, K\u00f6rper, Gesellschaft, Sprache &ndash; und dehnt sie so lange, bis die Absurdit\u00e4t, die immer schon darin steckte, sichtbar wird. Das ist die SO7 bei der Arbeit: Wirklichkeit so arrangieren, dass andere sie pl\u00f6tzlich anders sehen k\u00f6nnen. Der Biber baut keinen Damm f\u00fcr sich. Er baut ihn, damit sich das Wasser sammeln kann.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Achterfl\u00fcgel: Sch\u00e4rfe hinter dem Lachen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Achterfl\u00fcgel</strong> gibt der sozialen Sieben eine Qualit\u00e4t, die nicht jeder Sieben zur Verf\u00fcgung steht: Schlagkraft. Bei schwach ausgepr\u00e4gtem Achterfl\u00fcgel kann die Sieben ausweichen, verharmlosen, das Unangenehme in Humor aufl\u00f6sen, bevor es wirklich landet. Der Achterfl\u00fcgel h\u00e4lt dagegen. Er sagt: Nein, das darf auch treffen. Humor muss nicht immer kuschelig sein.</p>
          <p class="vb-intro">Hazel Brugger ist nicht nur witzig &ndash; sie ist pr\u00e4zise. Ihre Pointen haben Z\u00e4hne. Sie seziert gesellschaftliche Selbstverst\u00e4ndlichkeiten mit einer Direktheit, die den Achterfl\u00fcgel verr\u00e4t: Kein Thema ist zu hei\u00df, keine Beobachtung zu unbequem, um auf der B\u00fchne ausgesprochen zu werden. Der Biber mit Achterfl\u00fcgel f\u00e4llt den Baum nicht z\u00f6gerlich. Er f\u00e4llt ihn genau dort, wo er gebraucht wird &ndash; und wundert sich nicht, wenn die Ersch\u00fctterung zu sp\u00fcren ist.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Leidenschaft: V\u00f6llerei oder auch Ma\u00dflosigkeit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Leidenschaft der Sieben hei\u00dft <strong>V\u00f6llerei</strong> oder auch <strong>Ma\u00dflosigkeit</strong>: der unstillbare Hunger nach Erfahrung, Ausdruck, Bedeutung. In der sozialen Sieben richtet sich dieser Hunger nicht auf Genuss im privaten Sinne, sondern auf Wirkung. Mehr Formate, mehr Perspektiven, mehr Themen, mehr Reichweite. Hazel Brugger steht nicht nur auf einer B\u00fchne. Sie schreibt, bloggt, podcastet, moderiert, slamt, ver\u00f6ffentlicht. Der Biber ruht nicht, solange es noch etwas zu bauen gibt.</p>
          <p class="vb-intro">Das ist kein Getriebensein im neur\u00f6tischen Sinne &ndash; das ist die Sieben, die in der F\u00fclle des Ausdrucks ihre Heimat findet. Nicht Angst treibt den Biber. Es ist die Freude am n\u00e4chsten Damm, der noch nicht fertig ist.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Geschenk: ein Lachen, das denkt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Hazel Brugger ihrem Publikum gibt, ist seltener als es klingt: ein Lachen, das denkt. Nicht Unterhaltung als Bet\u00e4ubung, sondern Humor als Erkenntnisweg. Man geht aus ihren Shows raus und sieht die Welt etwas schr\u00e4ger &ndash; und weil man sie schr\u00e4ger sieht, sieht man sie klarer. Das ist die Gabe der SO7w8: Freude, die sch\u00e4rft, statt zu bet\u00e4uben.</p>
          <p class="vb-intro">Der Biber ver\u00e4ndert, was er ber\u00fchrt. Hazel Brugger ver\u00e4ndert, wie man denkt &ndash; mit Tempo, Tiefe und dem Achterfl\u00fcgel, der sicherstellt, dass die Pointe auch landet, wenn sie wehtut. Das ist die soziale Sieben mit Achterfl\u00fcgel. Das ist der Biber auf der B\u00fchne.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/so7", label:"SO7 \u2013 Der Biber: Subtyp-Profil"},
        {route:"beruehmte-elon-musk", label:"Portr\u00e4t: Elon Musk (SO7w6)"},
      ])}
    </div>
  `);
}

function drewBarrymorePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/beruehmte-drew-barrymore-portrait.jpg" alt="Drew Barrymore – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Drew Barrymore</p>
        <p class="krim-portrait-typ">SO7w8 &middot; Sozialer Typ 7 mit Achterfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Schauspielerin, Produzentin &amp; Talkshow-Moderatorin, geb. 1975 in Los Angeles &ndash; Tierentsprechung: Biber</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Biber</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Biber</strong> ist das Tier des sozialen Typs 7 &ndash; ein Baumeister, der Katastrophen \u00fcbersteht, weil er st\u00e4ndig weiterbaut. F\u00e4llt ein Damm ein, beginnt der Biber sofort von Neuem, ohne lange innezuhalten. Er arbeitet nicht f\u00fcr sich allein, sondern f\u00fcr ein ganzes \u00d6kosystem, das von seiner Konstruktion abh\u00e4ngt.</p>
          <p class="vb-intro">Die US-amerikanische Schauspielerin Drew Barrymore, geboren 1975 in Los Angeles als Spross der legend\u00e4ren Schauspielerdynastie Barrymore, ist dieser Biber. Mit sieben Jahren wurde sie durch ihre Rolle als Gertie in <em>E.T. &ndash; Der Au\u00dferirdische</em> (1982) weltber\u00fchmt &ndash; und st\u00fcrzte anschlie\u00dfend in eine der \u00f6ffentlichsten Kindheitskrisen Hollywoods. Doch statt daran zu zerbrechen, baute sie ihr Leben immer wieder neu auf: als Schauspielerin, als Unternehmerin, als eine der erfolgreichsten Produzentinnen ihrer Generation, und schlie\u00dflich als eine der beliebtesten Talkshow-Moderatorinnen Amerikas.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Sieben: Freude als geteiltes Gut</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Sieben (SO7)</strong> lenkt die Leidenschaft der Sieben &ndash; den unstillbaren Hunger nach Erfahrung &ndash; nicht auf den eigenen Genuss, sondern in den Dienst einer Gemeinschaft. Naranjo beschrieb diesen Subtyp treffend: Freude, die geteilt werden will, verwandelt sich in Idealismus, in das Bed\u00fcrfnis, andere an der eigenen Begeisterung teilhaben zu lassen.</p>
          <p class="vb-intro">Barrymores gesamte \u00f6ffentliche Persona ist von diesem Impuls gepr\u00e4gt: die spontane Umarmung fremder Talkshow-G\u00e4ste, die Tr\u00e4nen, die ihr bei emotionalen Momenten unverhohlen \u00fcber das Gesicht laufen, die unerm\u00fcdliche Botschaft von Selbstakzeptanz und Optimismus, die sie in Interviews wiederholt. Freude ist f\u00fcr sie kein privates Vergn\u00fcgen, sondern etwas, das erst vollst\u00e4ndig wird, wenn es geteilt wird &ndash; eine Haltung, die sie sp\u00e4ter zur Grundlage einer ganzen Sendung machte.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Achterfl\u00fcgel: Kontrolle \u00fcber das eigene Leben</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Achterfl\u00fcgel (w8)</strong> gibt der sozialen Sieben eine Durchsetzungskraft und Direktheit, die einer SO7 mit schwach ausgeprägtem Achterflügel fehlt. Wo die SO7 allein zur Zerstreuung neigen k\u00f6nnte, verwandelt der Achterfl\u00fcgel diese Energie in aktives Gestalten &ndash; in den Willen, die eigenen Verh\u00e4ltnisse selbst in die Hand zu nehmen, statt sich ihnen auszuliefern.</p>
          <p class="vb-intro">Mit gerade einmal 14 Jahren lie\u00df sich Barrymore, nach Jahren von Alkohol- und Drogenkonsum, zwei Klinikaufenthalten und einem gescheiterten Suizidversuch, gerichtlich von ihren Eltern emanzipieren &ndash; ein radikaler, in dieser Form ungew\u00f6hnlicher Schritt f\u00fcr eine Minderj\u00e4hrige. 1995 gr\u00fcndete sie mit gerade 20 Jahren ihre eigene Produktionsfirma, Flower Films, um nie wieder von den Entscheidungen anderer \u00fcber ihre Karriere abh\u00e4ngig zu sein. \u00dcber diese Firma produzierte sie unter anderem die erfolgreiche <em>Drei Engel f\u00fcr Charlie</em>-Reihe. Der Achterfl\u00fcgel zeigt sich hier nicht als Aggression, sondern als entschlossene Selbsterm\u00e4chtigung: Niemand sonst sollte je wieder \u00fcber ihr Leben bestimmen.</p>
        </blockquote>

        <h2 class="vb-section">4. Absturz und Wiederaufbau</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Barrymores Kindheit ist eine der bekanntesten Warnungen Hollywoods vor den Schattenseiten des Kinderstar-Daseins: erste Zigarette mit neun Jahren, Alkohol mit neun, Marihuana mit zehn, Kokain mit zw\u00f6lf oder dreizehn. Ihre eigene Mutter nahm sie mit in Nachtclubs. Mit 13 Jahren erschien ihre erste Autobiografie, <em>Little Girl Lost</em> &ndash; ein Kind, das \u00f6ffentlich \u00fcber seine eigene Selbstzerst\u00f6rung schrieb.</p>
          <p class="vb-intro">Der Wiederaufbau begann in den 1990er Jahren: Rollen in <em>Poison Ivy</em> und <em>Scream</em> (1996) zeigten eine erwachsene, eigenst\u00e4ndige K\u00fcnstlerin. Mit <em>Der Hochzeitsplaner</em>, <em>Nie wieder verliebt!</em> und <em>50 erste Dates</em> etablierte sie sich als eine der gefragtesten Kom\u00f6diendarstellerinnen ihrer Zeit &ndash; parallel dazu als Produzentin, die anderen jungen Talenten dieselben Chancen erm\u00f6glichte, die sie sich selbst erk\u00e4mpft hatte. Der Biber, der seinen eingest\u00fcrzten Bau nicht nur reparierte, sondern gr\u00f6\u00dfer und stabiler wieder aufbaute als zuvor.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO7w8 ist ihre F\u00e4higkeit, aus eigenem Leid eine ansteckende, \u00f6ffentlich geteilte Lebensfreude zu machen, ohne diese Freude als Fassade zu missbrauchen. Barrymore spricht offen \u00fcber ihre Vergangenheit, \u00fcber Therapie, \u00fcber R\u00fcckschl\u00e4ge &ndash; und macht gerade dadurch anderen Mut, mit den eigenen Br\u00fcchen offen umzugehen.</p>
          <p class="vb-intro">Der Schatten zeigt sich in einem Muster, das sich durch ihr gesamtes Erwachsenenleben zieht: drei gescheiterte Ehen (mit Jeremy Thomas, Tom Green und Will Kopelman), zwischenzeitliche R\u00fcckf\u00e4lle in problematischen Substanzkonsum, und eine Rastlosigkeit, die trotz aller Stabilit\u00e4t nie ganz verschwunden ist. Die soziale Sieben mit Achterfl\u00fcgel k\u00e4mpft daf\u00fcr, niemals wieder ohnm\u00e4chtig zu sein &ndash; doch genau diese Kampfbereitschaft kann verhindern, zur Ruhe zu kommen, selbst wenn \u00e4u\u00dferlich l\u00e4ngst alles gut zu sein scheint.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Heilungsweg: The Drew Barrymore Show</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Sieben f\u00fchrt von der Zerstreuung zur N\u00fcchternheit &ndash; der F\u00e4higkeit, bei einer Sache und bei den eigenen Gef\u00fchlen zu bleiben, statt vor ihnen davonzulaufen. F\u00fcr die SO7w8 bedeutet das, die eigene Durchsetzungskraft nicht mehr nur zum Selbstschutz einzusetzen, sondern in den Dienst echter, verletzlicher Verbindung mit anderen zu stellen.</p>
          <p class="vb-intro">Seit 2020 moderiert Barrymore <em>The Drew Barrymore Show</em> &ndash; eine Talkshow, die sich bewusst von zynischer Distanz abgrenzt und stattdessen auf Empathie, Tr\u00e4nen und echte Umarmungen setzt. Kritiker nennen das mitunter zu sentimental. Doch genau darin liegt die Essenz der geheilten SO7w8: der Biber, der gelernt hat, sein Bauwerk nicht mehr aus Angst vor dem n\u00e4chsten Einsturz zu errichten, sondern aus der ehrlichen Freude daran, dass andere darin Schutz finden.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/so7", label:"SO7 \u2013 Der Biber: Subtyp-Profil"},
        {route:"beruehmte-hazel-brugger", label:"Portr\u00e4t: Hazel Brugger (SO7w8)"},
        {route:"krankheitsportraets-drew-barrymore", label:"Krankheitsportr\u00e4t: Drew Barrymore (SO7w8) \u2013 Kindheitssucht"},
      ])}
    </div>
  `);
}

