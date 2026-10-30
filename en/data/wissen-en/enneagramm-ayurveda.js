const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

const IMG = "https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/schaubilder/enneagramm-ayurveda.jpg";

const SP_TILES = [
  { id: "zwei-landkarten", farbe: "#8a6aa8", titel: "Two maps for self-knowledge",
    html: `
      <p class="sp-p">The path to self-knowledge often leads through several systems of wisdom. Two of them seem at first glance to come from different worlds: the Enneagram and Ayurveda. The <em>Enneagram</em> describes nine basic patterns of attention and motivation. <em>Ayurveda</em> sees the human being as part of nature and describes constitution through the five elements and the three doshas (Vata, Pitta, Kapha).</p>
      <p class="sp-p">Ayurveda is one of the oldest healing systems in the world. Its name combines the Sanskrit words <em>ayus</em> (life) and <em>veda</em> (knowledge), so &lsquo;the knowledge of life&rsquo;. It is handed down in writing, among others, in the Charaka Samhita and the Sushruta Samhita. The Enneagram in its present form is much younger (beginning in the 1960s, Oscar Ichazo and Claudio Naranjo), while the experiential knowledge about the human being contained in it is far older (see <a href="#spirituelles-enneagramm">The Spiritual Enneagram</a>).</p>
      <p class="sp-p">This article places both systems side by side and asks where their patterns resemble each other. An honest classification matters: this is an interpretive offer from practice and not a scientifically proven system of assignment. It invites observation and replaces neither medical nor Ayurvedic advice.</p>` },
  { id: "fundamente", farbe: "#c47f6b", titel: "The foundations at a glance",
    html: `
      <p class="sp-p"><strong>The Enneagram</strong> distinguishes nine types. Each type has a basic fear, a core desire and a largely automatic pattern of behavior. The types are spread across three centers:</p>
      <ul class="sp-list">
        <li><strong>Body center (Types 8, 9, 1):</strong> instinct, autonomy, boundaries, the handling of anger.</li>
        <li><strong>Heart center (Types 2, 3, 4):</strong> feeling, relationship, image, the handling of shame.</li>
        <li><strong>Head center (Types 5, 6, 7):</strong> mind, planning, security, the handling of fear.</li>
      </ul>
      <p class="sp-p"><strong>Ayurveda</strong> starts from the five elements (ether, air, fire, water, earth). They show themselves in three principles, the doshas:</p>
      <ul class="sp-typen">
        <li style="--tc:#7a8f9e;"><b>Vata (air and ether):</b> movement, creativity, changeability. Qualities: light, mobile, dry, cool.</li>
        <li style="--tc:#c0652b;"><b>Pitta (fire and water):</b> transformation, digestion, intellect, passion. Qualities: hot, sharp, penetrating.</li>
        <li style="--tc:#8aa06a;"><b>Kapha (earth and water):</b> structure, stability, grounding. Qualities: heavy, slow, soft, steady.</li>
      </ul>
      <p class="sp-p">Every person carries all three doshas. The inborn mixture is called <em>prakriti</em>, the current imbalance <em>vikriti</em>. To be distinguished from these are the three <em>gunas</em> (sattva, rajas, tamas), which in Indian philosophy describe qualities of the mind, not of the body.</p>` },
  { id: "vergleichbar", farbe: "#c9a84c", titel: "What can be compared, and what cannot",
    html: `
      <p class="sp-p">Both models describe patterns, but on different levels. The Enneagram asks for the <em>why</em>: which motivation steers attention? Ayurveda asks for the <em>how</em> in body and energy: which qualities (heat, cold, heaviness, mobility) predominate, and what throws them out of balance?</p>
      <p class="sp-p">Three clarifications follow:</p>
      <ul class="sp-list">
        <li><strong>Doshas are not personality types.</strong> Everyone has all three, and there is no fixed assignment of a type to a dosha.</li>
        <li><strong>The type stays, the balance changes.</strong> The Enneagram assumes that the type stays the same throughout life (see <a href="#typ-aendert-sich-nicht">Does the Type Change Over a Lifetime?</a>). The dosha balance, by contrast, shifts according to Ayurvedic teaching with age, season, nutrition and stress.</li>
        <li><strong>What is meant are patterns we have, not what we are.</strong> Both systems describe tendencies, never the whole person.</li>
      </ul>
      <p class="sp-p">In what follows, parallels are suggested along the three centers. They are observations that often show up in practice, not rules.</p>` },
  { id: "kopf-vata", farbe: "#7a8f9e", titel: "The head center (Types 5, 6, 7) and the Vata principle",
    html: `
      <p class="sp-p"><em>The thinkers, planners and restless ones.</em> The types of the head center live mostly in the mind: they analyze, anticipate and look for security in thinking. This recalls the qualities of Vata: mobile, light, cool and easily thrown out of balance.</p>
      <ul class="sp-typen">
        <li style="--tc:#124fcc;"><b>Type 5 (The Observer):</b> withdraws to save energy and to understand the world. This shares many traits with an unbalanced Vata: mental exhaustion, the feeling of &lsquo;not having enough energy&rsquo; and the tendency to isolate.</li>
        <li style="--tc:#8a5222;"><b>Type 6 (The Loyalist):</b> mental vigilance, future scenarios and inner insecurity. Here the Vata-typical nervousness and the need for reliability show, to keep the &lsquo;Vata airplane&rsquo; on the ground.</li>
        <li style="--tc:#d4a800;"><b>Type 7 (The Enthusiast):</b> jumps from idea to idea, loves variety and avoids boredom and pain. That is the classic Vata dynamic: fast, erratic, creative, with the danger of overstimulation and inner restlessness.</li>
      </ul>
      <p class="sp-p"><strong>The Ayurvedic approach to balance:</strong> when Vata predominates, the tradition recommends above all grounding and regularity: warm, nourishing food, fixed daily routines, enough rest, oil massage (<em>abhyanga</em>) and meditation to calm the restless mind. These are general suggestions for daily living, not promises of healing.</p>` },
  { id: "herz-pitta", farbe: "#c0652b", titel: "The heart center (Types 2, 3, 4) and the Pitta principle",
    html: `
      <p class="sp-p"><em>The doers, feelers and achievers.</em> The heart center revolves around appreciation, image, achievement and emotional depth. The fiery, goal-directed qualities of Pitta resonate especially strongly here.</p>
      <ul class="sp-typen">
        <li style="--tc:#1fa688;"><b>Type 3 (The Achiever):</b> efficiency, success, determination and the avoidance of failure are in the foreground. That fits the Pitta picture well: competitive, performance-oriented, inclined to define oneself through work.</li>
        <li style="--tc:#7a2fa8;"><b>Type 2 (The Helper):</b> directs energy outward to be loved. Often a mixture of Pitta warmth and Kapha caring shows.</li>
        <li style="--tc:#3cbf1f;"><b>Type 4 (The Individualist):</b> dives deep into feelings and authenticity and looks for meaning. That recalls a fiery, sensitive Pitta-Vata mixture.</li>
      </ul>
      <p class="sp-p"><strong>The Ayurvedic approach to balance:</strong> Pitta-heavy patterns tend, according to Ayurvedic teaching, toward perfectionism, overheating and irritability. The tradition recommends cooling, moderation, pauses and activities without performance demand, such as a walk in nature without a goal.</p>` },
  { id: "bauch-kapha", farbe: "#8aa06a", titel: "The body center (Types 8, 9, 1) and the Kapha principle",
    html: `
      <p class="sp-p"><em>The earthy, controlling and preserving ones.</em> The body center is rooted in instinct, autonomy, boundaries and the handling of anger. Here we find connections to the steady Kapha (grounding, constancy, inertia), but with anger and strictness also to the sharpness of Pitta.</p>
      <ul class="sp-typen">
        <li style="--tc:#a00802;"><b>Type 8 (The Challenger):</b> powerful, direct, protective, confrontational. This combines the steadiness of Kapha (earth) with the assertiveness of Pitta (fire).</li>
        <li style="--tc:#cc6e00;"><b>Type 9 (The Peacemaker):</b> seeks harmony, avoids conflict and tends toward inertia and procrastination. This mirrors an unbalanced Kapha: resistance to change, coziness, but also a deep, wholesome gentleness.</li>
        <li style="--tc:#5f5f5f;"><b>Type 1 (The Perfectionist):</b> strict, principled and reform-minded. The inner tension and the high moral standard recall the transforming sharpness of Pitta, combined with the structure of Kapha.</li>
      </ul>
      <p class="sp-p"><strong>The Ayurvedic approach to balance:</strong> when Kapha predominates, the tradition recommends gentle stimulation, movement, light food and variety to overcome the natural inertia and get into action. Where Pitta sharpness (anger, strictness) is involved, cooling and moderation apply again.</p>` },
  { id: "wechselwirkung", farbe: "#4f86a8", titel: "When body and pattern reinforce each other",
    html: `
      <p class="sp-p">The appeal of the connection lies in the interactions. An example: a person with the pattern of Type 3 often drives themselves harder and harder under stress. In the Ayurvedic picture the fire of Pitta burns hot until at some point the mobile, dry qualities of Vata fall out of balance: exhaustion, nervousness, sleep problems. This is a thought model, not a diagnosis.</p>
      <ul class="sp-list">
        <li>A <strong>Type 7</strong> under constant stimulation can overspin, like a Vata that never comes to rest.</li>
        <li>A <strong>Type 9</strong> in passivity can sink into sluggish heaviness, like a Kapha that does not get moving.</li>
        <li>A <strong>Type 1</strong> in permanent tension can overheat inwardly, like a Pitta that finds no cooling.</li>
      </ul>
      <p class="sp-p">Knowing this allows us not only to work mentally on the beliefs but also to support the body through everyday habits: sleep, meals, movement, pauses.</p>` },
  { id: "synthese", farbe: "#d9a441", titel: "Synthesis: insight and regulation",
    html: `
      <p class="sp-p">The strength of the combination lies in linking mind and body:</p>
      <ul class="sp-list">
        <li><strong>Insight (Enneagram):</strong> understanding one&rsquo;s own mental operating system: why one reacts the way one does, which beliefs and fears steer behavior, what drives the passion.</li>
        <li><strong>Regulation (Ayurveda):</strong> understanding the bodily-energetic basis: how to nourish the body, which foods, daily routines and sense impressions stabilize or unbalance.</li>
      </ul>
      <p class="sp-p">The Enneagram shows the direction of inner development, Ayurveda supplies tools for everyday life. Both invite us not to fight ourselves but to observe.</p>` },
  { id: "fazit", farbe: "#607468", titel: "Conclusion",
    html: `
      <p class="sp-p">The Enneagram and Ayurveda complement each other into a compass for personal growth. They show that psychological imprints are not random quirks but part of a larger pattern that shows itself in motivation, body and everyday life at once. Whoever joins both viewpoints not only comes to know themselves more deeply but also finds ways to bring body and mind into harmony.</p>
      <p class="sp-p"><strong>Questions for reflection:</strong></p>
      <ul class="sp-list">
        <li>Which Enneagram pattern and which dosha quality (mobile, hot, heavy) show most clearly in my everyday life?</li>
        <li>What shifts first under stress: the mind, the body or both?</li>
        <li>Which small habit would relieve my pattern today?</li>
      </ul>
      <p class="sp-p" style="font-size:.85rem;color:var(--muted);">Note: this article is not medical advice. The Ayurvedic suggestions are general hints for daily living and do not replace medical or naturopathic advice or treatment.</p>` },
];

export function enneagrammAyurvedaPage() {
  const nav = SP_TILES.map((t, i) => `<a class="ab-chip" href="javascript:void(0)" onclick="document.getElementById('ay-${t.id}').scrollIntoView({behavior:'smooth'})" style="--tc:${t.farbe};"><span class="ab-chip__n">${i + 1}</span><span class="ab-chip__m">${t.titel.split(":")[0].split(" (")[0]}</span></a>`).join("");
  const sektionen = SP_TILES.map((t, i) => `
    <section class="sp-tile" id="ay-${t.id}" style="--tc:${t.farbe};">
      <div class="sp-tile__head"><span class="sp-tile__num">${i + 1}</span><h2 class="sp-tile__title">${t.titel}</h2></div>
      ${t.html}
      <p class="sp-top"><a href="javascript:void(0)" onclick="document.getElementById('ay-top').scrollIntoView({behavior:'smooth'})">↑ Back to the topic selection</a></p>
    </section>`).join("");
  return shell(`
    <div class="page-container">
      ${pageHeader("enneagramm-ayurveda")}
      <div class="page-content sp-page">
        <p class="eyebrow">Knowledge · Personality and Constitution</p>
        <h1 class="section-title">Enneagram meets Ayurveda</h1>
        <p class="lead-small">The Enneagram describes why we act the way we do, Ayurveda how our constitution feels. What follows shows where both patterns resemble each other and what can be drawn from that for everyday life.</p>
        <figure class="sp-hero"><img src="${IMG}" alt="Nine people meditate in a circle around a stone Enneagram star on a mountaintop at sunrise, each surrounded by an element: mist, water, fire, plants and light." loading="lazy" /></figure>
        <div id="ay-top" class="ab-nav" role="navigation" aria-label="Topics of this article">${nav}</div>
        ${sektionen}
      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("leidenschaft-und-heilung", "The 9 passions behind the avoided feelings – with paths to healing from homeopathic practice.", "Leidenschaft und Heilung")}
      ${relatedLinks([
        {route:"persoenlichkeitsmodelle-vergleich", label:"Enneagram vs. Other Personality Models"},
        {route:"typ-aendert-sich-nicht", label:"Does the Type Change Over a Lifetime?"},
        {route:"spirituelles-enneagramm", label:"The Spiritual Enneagram: Psychology, Spirituality or Both?"},
        {route:"tcm", label:"TCM & Meridians"},
        {route:"enneagramm-autopoese", label:"The Enneagram as an Autopoietic System (Self-Preservation)"},
        {route:"praxistipps-heilpraktiker", label:"Practical Tips from the Naturopath"},
      ])}
    </div>
  `);
}
