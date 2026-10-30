const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

const TYP_FARBEN = ["#5f5f5f", "#7a2fa8", "#1fa688", "#3cbf1f", "#124fcc", "#8a5222", "#d4a800", "#a00802", "#cc6e00"];

// Die neun Ersatzstrategien: [Typ, Ersatz (wie auf der Seite »Suche nach der wahren Liebe«), Satz des Ersatzes, Liebe statt …]
const TYPEN = [
  ["Typ 1 · Der Perfektionist", "Perfektion & Richtigkeit", "Wer fehlerfrei ist, wird geliebt.", "Liebe statt Perfektion & Richtigkeit"],
  ["Typ 2 · Der Helfer", "Bedingte Liebe & Geben", "Wer unentbehrlich ist, wird geliebt. Das Geben soll die Liebe sichern, statt um seiner selbst willen geliebt zu werden.", "Liebe statt bedingter Liebe & Geben"],
  ["Typ 3 · Der Erfolgreiche", "Erfolg & Leistung", "Wer etwas leistet, wird geliebt. Der Wert wird an äußerer Anerkennung gemessen.", "Liebe statt Erfolg & Leistung"],
  ["Typ 4 · Der Individualist", "Individualität & Kreativität", "Wer besonders ist, wird gesehen. Das Gefühl, unverstanden zu sein, wird gepflegt, weil es vor dem Schmerz der Trennung schützt.", "Liebe statt Individualität & Kreativität"],
  ["Typ 5 · Der Beobachter", "Wissen & Beobachtung", "Wer versteht, ist sicher. Analyse und Rückzug schützen davor, von Gefühlen überrollt zu werden.", "Liebe statt Wissen & Beobachtung"],
  ["Typ 6 · Der Loyale", "Sicherheit & Loyalität", "Wer vorsorgt und treu ist, ist geschützt. Vorsicht und Pflicht ersetzen das Vertrauen.", "Liebe statt Sicherheit & Loyalität"],
  ["Typ 7 · Der Enthusiast", "Spaß & Freude", "Wer Optionen offen hält, muss nicht leiden. Ablenkung und Planung weichen dem Schmerz der Sehnsucht aus.", "Liebe statt Spaß & Freude"],
  ["Typ 8 · Der Herausforderer", "Macht & Kontrolle", "Wer stark ist, wird nicht verletzt. Verletzlichkeit wird vermieden, um nicht beherrscht zu werden.", "Liebe statt Macht & Kontrolle"],
  ["Typ 9 · Der Friedensstifter", "Harmonie & Selbstvergessenheit", "Wer den Frieden hält, wird gemocht. Konflikte werden umschifft, oft auf Kosten der eigenen Lebendigkeit.", "Liebe statt Harmonie & Selbstvergessenheit"],
];

export function wasIstLiebePage() {
  const karten = TYPEN.map((t, i) => `
    <li style="--tc:${TYP_FARBEN[i]};"><strong>${t[0]}</strong><br>
      <em>Ersatz:</em> ${t[1]}<br>
      ${t[2]}<br>
      <em>Der Weg zurück:</em> <strong>${t[3]}</strong></li>`).join("");
  return shell(`
    ${pageHeader("praxistipps-heilpraktiker")}
    <section class="narrow">
      <button class="ghost-link" data-route="praxistipps-heilpraktiker" style="margin-bottom:1rem;">← Zurück zu Praxistipps</button>
      <p class="eyebrow">Werkzeuge · Praxistipps vom Heilpraktiker</p>
      <h1 class="h1--tip">Was ist Liebe? Vom Ersatzhandel zur Essenz</h1>
      <p class="lead-small">Liebe ist eines der am häufigsten benutzten und am meisten missverstandenen Wörter. Dieser Tipp fragt, was damit gemeint sein kann: wie sich der Begriff im Lauf der Jahrhunderte gewandelt hat, welche Ersatzstrategien das Enneagramm bei den neun Typen zeigt und was Mystiker und Lehrer wie Eckhart Tolle unter Liebe verstehen.</p>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">Was ist Liebe? Eine Arbeitsdefinition</h2>
        <p class="vb-intro">Liebe ist im hier gemeinten Sinn weniger ein Gefühl des Habenwollens als eine Haltung der Zuwendung und Verbundenheit: Der andere wird nicht für etwas gebraucht, sondern als Mensch gesehen, mit demselben Wunsch nach Leben und Verbundenheit, den man auch bei sich selbst kennt. Verliebtheit, Fürsorge, Sehnsucht und Bindung können Ausdrucksformen davon sein. Wo sie an Bedingungen geknüpft sind (›Ich liebe dich, wenn …‹), ist es meist eine Ersatzstrategie.</p>
        <p class="vb-intro" style="margin-top:.8rem;margin-bottom:0;font-size:.9rem;color:var(--muted);">Das ist eine Arbeitsdefinition aus dem spirituellen Enneagramm und der Mystik, keine wissenschaftliche. Das Schaubild <a href="#suche-nach-liebe">Die Suche nach der wahren Liebe</a> zeigt, womit die neun Typen Liebe ersetzen. Hier folgt die Langfassung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.6rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">1. Der Wandel des Liebesbegriffs</h2>
        <p class="vb-intro">Wir nennen vieles Liebe: die Vorliebe für Schokolade, die Verliebtheit im Frühling, die Fürsorge in der Familie, den Schmerz des Vermissens. Ein Blick in die Geschichte zeigt, wie unterschiedlich das Wort gefüllt wurde.</p>
        <ul class="sp-list" style="margin-top:.8rem;">
          <li><strong>Antike (Eros, Philia, Agape):</strong> Die Griechen unterschieden genau. Eros ist das leidenschaftliche Begehren, Philia die Freundschaft und Verbundenheit, Agape die schenkende Liebe, die nichts fordert. Das Neue Testament verwendet für die Liebe, von der es spricht, das Wort Agape (zum Beispiel im Hohelied der Liebe, 1. Korinther 13).</li>
          <li><strong>Mittelalter (Minne):</strong> Die höfische Liebe der Troubadours und Minnesänger stilisierte die Unerreichbarkeit der Geliebten. Sehnsucht und Verzicht galten als Schule der Selbstüberwindung.</li>
          <li><strong>Moderne (Romantik und Individualismus):</strong> Liebe wurde persönlich. Soziologen beschreiben, dass sie zunehmend die Rolle übernahm, die früher die Religion hatte: Der Partner oder die Partnerin soll nun Sicherheit, Bestätigung und Sinn zugleich geben. Das ist eine große Last für jede Beziehung.</li>
        </ul>
        <p class="vb-intro" style="margin-top:1rem;">Genau an diesem Punkt setzt das Enneagramm an: Es zeigt, wie die Persönlichkeit unbewusst einen Tauschhandel betreibt, um Liebe von außen zu bekommen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">2. Die Ersatzstrategien der neun Typen: Liebe statt …</h2>
        <p class="vb-intro">Das Enneagramm beschreibt neun Grundmuster, wie der Kontakt zum eigenen Wesen verloren ging. Jedes Muster ersetzt Liebe durch eine Strategie, die früh im Leben klug war. Die Formulierungen entsprechen dem Schaubild <a href="#suche-nach-liebe">Die Suche nach der wahren Liebe</a>. Die Karten zeigen den Ersatz und den Weg zurück (›Liebe statt …‹). Gemeint sind Muster, die man hat, und nicht, die man ist.</p>
        <ul class="sp-typen">${karten}</ul>
        <p class="vb-intro" style="margin-top:1rem;">Alle neun Strategien gehen von einem Mangel aus. Sie flüstern unbewusst: ›Ich bin im Grunde nicht vollständig. Ich muss etwas leisten, sein oder kontrollieren, um Liebe wert zu sein.‹ Das ist die Liebe des Egos: klammernd, bedingt und an Gegenleistungen geknüpft. Was darunter liegt, zeigen die Quintessenzen für <a href="#suche-nach-liebe">die Typen und die 27 Subtypen</a>.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">3. Die Stimmen der Mystik</h2>
        <p class="vb-intro">Wenn Menschen auf einem spirituellen Weg erwachen, verändert sich ihr Verständnis von Liebe. Die Traditionen drücken das in sehr verschiedenen Bildern aus, und doch klingen sie verwandt.</p>
        <ul class="sp-list" style="margin-top:.8rem;">
          <li><strong>Christentum:</strong> ›Gott ist die Liebe‹ (1. Johannes 4,8). <a href="#beruehmte-augustinus-von-hippo">Augustinus (SX4w5)</a> wird der Satz ›Dilige, et quod vis fac‹ (›Liebe, und tu, was du willst‹) zugeschrieben. Meister Eckhart (um 1260–1328) sprach von der ›Abgeschiedenheit‹, dem Loslassen von Eigenwillen und inneren Bildern, damit Raum für das entsteht, was im Seelengrund schon da ist.</li>
          <li><strong>Sufismus:</strong> In der Dichtung der Sufis, etwa bei Rumi, gilt die irdische Liebe (<em>ishq-e majazi</em>) als Brücke zur göttlichen Liebe (<em>ishq-e haqiqi</em>). Der oder die Geliebte ist dann auch ein Spiegel für etwas im eigenen Inneren. Wer nur den Spiegel anbetet, übersieht das Licht.</li>
          <li><strong>Judentum:</strong> Zentral sind die Gebote ›Du sollst den Ewigen, deinen Gott, lieben‹ (5. Mose 6,5) und ›Du sollst deinen Nächsten lieben wie dich selbst‹ (3. Mose 19,18). Die lurianische Kabbala spricht von göttlichen Funken, die in der Welt verstreut sind und wieder gesammelt werden sollen.</li>
          <li><strong>Buddhismus und Advaita:</strong> Im Buddhismus gilt <em>Metta</em> (liebende Güte) als eine der vier ›Unermesslichen‹, neben Mitgefühl, Mitfreude und Gleichmut. Der <a href="#beruehmte-buddha">Buddha (SO5w4)</a> wird mit dieser Haltung verbunden. Im Advaita Vedanta wird Liebe als Wesen des reinen Bewusstseins beschrieben, das alle Wesen durchdringt, wie es <a href="#beruehmte-ramana-maharshi">Ramana Maharshi (SO9w1)</a> lehrte.</li>
        </ul>
        <p class="vb-intro" style="margin-top:1rem;">Wo die Traditionen im Einzelnen auseinandergehen, bleibt dieser Tipp bewusst neutral. Hier genügt, dass sie in einem Punkt verwandt klingen: Liebe wird als etwas beschrieben, das nicht erworben werden muss, sondern frei wird, wenn die Selbstbezogenheit nachlässt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">4. Eckhart Tolle: den anderen im Wesen erkennen</h2>
        <p class="vb-intro"><a href="#beruehmte-eckhart-tolle">Eckhart Tolle (SX9w1)</a> beschreibt Liebe in einem Beitrag auf seiner Webseite (›Personal Love‹) sinngemäß so: Wahre Liebe ist das Erkennen des anderen als das eigene Selbst, im Wesen und nicht in der Form. Er unterscheidet sie von der psychologischen Liebe, die eine Antwort auf die innere Einsamkeit sein will und deshalb leicht in Leiden umschlägt, sobald das Gegenüber diese Rolle nicht erfüllt.</p>
        <p class="vb-intro" style="margin-top:1rem;">Wer den mentalen Lärm des Egos, und damit auch die Enneagramm-Fixierung, für einen Moment durchbricht, schaut hinter die Hüllen der Form: Körper, Status, Vergangenheit, Persönlichkeitsmuster. Dann zeigt sich, so Tolle, dass dieselbe Lebendigkeit, die in einem selbst atmet, auch im Gegenüber atmet. Liebe wäre dann keine Eigenschaft, die man hat oder verliert, sondern eine Dimension des Bewusstseins.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.8rem;background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">5. Fazit: Wenn das Enneagramm zur Schule wird</h2>
        <p class="vb-intro">Das Enneagramm führt an dieses Tor. Wer die eigene Fixierung durchschaut, sieht den Persönlichkeitstyp als jahrzehntelang eingeübte Ersatzstrategie für die Sehnsucht nach Ganzheit. Zwei Fragen lassen sich nebeneinanderlegen:</p>
        <ul class="sp-list" style="margin-top:.8rem;">
          <li><strong>Die Frage der Ersatzstrategie:</strong> ›Was kannst du mir geben (Perfektion, Erfolg, Sicherheit, Harmonie), damit ich mich vollständig fühle?‹</li>
          <li><strong>Die Haltung der Mystik:</strong> ›Es gibt nichts zu suchen, denn die Quelle in mir ist unerschöpflich, und in dir sehe ich dasselbe Gesicht.‹</li>
        </ul>
        <p class="vb-intro" style="margin:.8rem 0 0;">Liebe ist demnach weniger ein Zustand des Habens als des Seins: der Moment, in dem die Trennung nachlässt und im Gegenüber nichts Fremdes mehr erkannt wird.</p>
      </div>

      <div class="sp-tile" style="--tc:#c0392b;margin-top:1.8rem;">
        <div class="sp-tile__head"><span class="sp-tile__num">✦</span><h2 class="sp-tile__title">Zum Mitnehmen: Den Ersatz bemerken</h2></div>
        <p class="sp-p">Die Übung dauert pro Anwendung ein bis zwei Minuten und lässt sich in jedem Gespräch machen.</p>
        <div class="sp-ex"><ul class="sp-list">
          <li>Das eigene Ersatzwort aus Abschnitt 2 benennen (zum Beispiel Perfektion, Geben, Leistung, Wissen, Sicherheit, Spaß, Stärke, Harmonie).</li>
          <li>In einem Gespräch kurz innehalten und prüfen: Wird gerade etwas erwartet (Anerkennung, Sicherheit, Frieden), oder wird zugehört?</li>
          <li>Das Gegenüber einen Atemzug lang ohne Rolle ansehen, nicht als Ehepartner, Kollegin oder Kind, sondern als Mensch mit demselben Wunsch nach Leben und Verbundenheit.</li>
          <li>Den Satz ›Liebe statt …‹ mit dem eigenen Ersatzwort innerlich einmal vervollständigen, ohne etwas daran ändern zu müssen.</li>
        </ul></div>
      </div>

      <div style="margin:2rem 0 0;text-align:center;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .3rem;color:var(--ink);">Die Suche nach Liebe als Kurzfilm</h2>
        <p style="font-size:.9rem;color:var(--muted);margin:0 0 .9rem;">Rund 65 Sekunden, mit Ton: neun Typen, neun Ersatzwege und die Liebe dahinter. Über den Knopf unten geht eine Fassung mit Link zum Kompass an Freunde und Bekannte, auch wenn diese die App noch nicht haben.</p>
        <video controls playsinline preload="none" poster="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/videos/liebe-de-poster.jpg" aria-label="Kurzfilm zur Suche nach der wahren Liebe" style="display:block;width:100%;max-width:340px;margin:0 auto;border-radius:14px;background:#111;box-shadow:0 4px 18px rgba(0,0,0,.18);">
          <source src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/videos/liebe-de.mp4" type="video/mp4">
        </video>
        <div style="margin:.9rem 0 0;"><button type="button" data-share-video="li" style="font:inherit;font-weight:700;font-size:.95rem;padding:.65rem 1.3rem;border:2px solid var(--copper);border-radius:999px;background:var(--paper);color:var(--copper);cursor:pointer;">&#8599; Video teilen</button></div>
        <p style="font-size:.8rem;color:var(--muted);margin:.7rem 0 0;">Musik: ›Love Like a Lantern‹ von Detlef Rathmer</p>
      </div>

      <p style="font-size:.85rem;color:var(--muted);margin:1.4rem 0 0;">Dieser Tipp ersetzt keine ärztliche oder therapeutische Behandlung. Die Einordnungen aus Mystik und Religion sind Denkanstöße und keine Aussagen über die Wahrheit einer Tradition.</p>

      <div style="margin-top:2rem;">
        <details style="border:1px solid var(--line);border-radius:12px;overflow:hidden;">
          <summary style="display:flex;align-items:center;gap:0.75rem;padding:1rem 1.2rem;cursor:pointer;
                          background:var(--paper);list-style:none;user-select:none;font-weight:700;
                          font-size:0.95rem;color:var(--ink);">
            <span style="font-size:1.2rem;color:var(--copper);">&#9672;</span>
            <span style="flex:1;">Vertiefende Literatur von Detlef Rathmer</span>
            <span style="font-size:0.75rem;color:var(--muted);">&#9660;</span>
          </summary>
          <div style="padding:1rem 1.2rem 1.2rem;">
            ${bookTip("die-sprache-unserer-beziehungen", "Mit dem Enneagramm Nähe gestalten – wie die neun Typen Liebe erleben, suchen und manchmal meiden.", "Die Sprache unserer Beziehungen")}
            <div style="margin-top:.8rem;">${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}</div>
            <div style="margin-top:.8rem;">${bookTip("der-raum-hinter-allem", "Eine Erkundung des Bewusstseins jenseits der Gedanken – über den stillen Raum, der hinter allem Erleben liegt.", "Der Raum hinter allem")}</div>
          </div>
        </details>
      </div>

      ${relatedLinks([
        {route:"praxistipps-heilpraktiker", label:"Alle Praxistipps"},
        {route:"suche-nach-liebe", label:"Schaubild: Die Suche nach der wahren Liebe (mit Quintessenz »Liebe statt …«)"},
        {route:"beziehungen-schaubild", label:"Beziehungen – Liebe und Schutz"},
        {route:"praxistipps-heilpraktiker/ende-der-suche", label:"Wenn die Suche still wird: Das Ende der Suche"},
        {route:"praxistipps-heilpraktiker/das-ewige-ich-bin", label:"Das ewige ›Ich bin‹: Der Enneagramm-Heilungskompass jenseits der Fixierung"},
        {route:"praxistipps-heilpraktiker/dein-wille-geschehe", label:"›Dein Wille geschehe‹: Hingabe statt Ego-Wille"},
        {route:"beruehmte-eckhart-tolle", label:"Porträt: Eckhart Tolle (SX9w1)"},
      ])}
    </section>
  `);
}
