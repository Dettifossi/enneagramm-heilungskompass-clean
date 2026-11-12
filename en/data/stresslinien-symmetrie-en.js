const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

export function stresslinienSymmetriePage() {
  return shell(`
    ${pageHeader("wissen")}
    <section class="narrow">
      <button class="ghost-link" data-route="wissen" style="margin-bottom:1rem;">← Back to Knowledge</button>
      <p class="eyebrow">Knowledge · Theory and Dynamics</p>
      <h1 class="h1--tip">When the Masks Fall: Symmetry and Asymmetry of the Stress Lines in the Enneagram</h1>
      <p class="lead-small">Where we move under pressure is not random. A look at the nine stress lines shows a pattern with a rule and exceptions, and it invites us to understand our own stress behavior instead of condemning it.</p>

      <div class="psycho-img-wrap" style="margin-top:1rem;">
        <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/schaubilder/stresslinien-symmetrie/stresslinien-symmetrie-1.jpg" alt="Painted image: three interwoven spheres with Enneagram stars in blue, gold and red, between them gears, sparks, hearts and a network of thoughts before mountains and a sun" class="psycho-img" loading="lazy">
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">Important note</h2>
        <p class="vb-intro" style="margin-bottom:0;">The Enneagram is a model for self-observation, not a diagnostic procedure. The stress lines describe tendencies, not laws, and they do not replace medical or psychotherapeutic advice. In case of persistent overload, low mood or anxiety, speak to a professional.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">1. A Look at the State of Emergency</h2>
        <p class="vb-intro">The Enneagram does not put people into rigid drawers, it shows how mobile we are. Especially revealing is a look at the <strong>stress lines</strong>: they describe which behavior patterns we fall into when the pressure becomes too great, when we overtax ourselves or when emotional security fades. Each type has a <strong>stress point</strong> it approaches under pressure. That someone shows traits of the other type there does not change their core type.</p>
        <p class="vb-intro" style="margin-top:.8rem;">Looking at all nine stress lines together reveals a web of symmetry and surprising asymmetry. This article asks what can be read from it about our behavior in crises.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">2. The Nine Stress Lines at a Glance</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:.8rem;">
          <div style="border:1px solid var(--line);border-radius:10px;padding:.9rem 1rem;"><strong>Type 1 → Type 4</strong><br><span style="font-size:.82rem;color:var(--copper);">Gut → Heart</span><p style="margin:.4rem 0 0;font-size:.9rem;color:var(--muted);line-height:1.55;">Rigid control gives way to emotional flooding.</p></div>
          <div style="border:1px solid var(--line);border-radius:10px;padding:.9rem 1rem;"><strong>Type 2 → Type 8</strong><br><span style="font-size:.82rem;color:var(--copper);">Heart → Gut</span><p style="margin:.4rem 0 0;font-size:.9rem;color:var(--muted);line-height:1.55;">Caring tips into demanding, controlling hardness.</p></div>
          <div style="border:1px solid var(--line);border-radius:10px;padding:.9rem 1rem;"><strong>Type 3 → Type 9</strong><br><span style="font-size:.82rem;color:var(--copper);">Heart → Gut</span><p style="margin:.4rem 0 0;font-size:.9rem;color:var(--muted);line-height:1.55;">Achievement tips into exhaustion and withdrawal.</p></div>
          <div style="border:1px solid var(--line);border-radius:10px;padding:.9rem 1rem;"><strong>Type 4 → Type 2</strong><br><span style="font-size:.82rem;color:var(--copper);">Heart → Heart</span><p style="margin:.4rem 0 0;font-size:.9rem;color:var(--muted);line-height:1.55;">Emotional depth tips into clinging neediness.</p></div>
          <div style="border:1px solid var(--line);border-radius:10px;padding:.9rem 1rem;"><strong>Type 5 → Type 7</strong><br><span style="font-size:.82rem;color:var(--copper);">Head → Head</span><p style="margin:.4rem 0 0;font-size:.9rem;color:var(--muted);line-height:1.55;">Withdrawal tips into restless distraction.</p></div>
          <div style="border:1px solid var(--line);border-radius:10px;padding:.9rem 1rem;"><strong>Type 6 → Type 3</strong><br><span style="font-size:.82rem;color:var(--copper);">Head → Heart</span><p style="margin:.4rem 0 0;font-size:.9rem;color:var(--muted);line-height:1.55;">Caution seeks support in achievement and efficiency.</p></div>
          <div style="border:1px solid var(--line);border-radius:10px;padding:.9rem 1rem;"><strong>Type 7 → Type 1</strong><br><span style="font-size:.82rem;color:var(--copper);">Head → Gut</span><p style="margin:.4rem 0 0;font-size:.9rem;color:var(--muted);line-height:1.55;">Joy of life tips into rigid perfectionism.</p></div>
          <div style="border:1px solid var(--line);border-radius:10px;padding:.9rem 1rem;"><strong>Type 8 → Type 5</strong><br><span style="font-size:.82rem;color:var(--copper);">Gut → Head</span><p style="margin:.4rem 0 0;font-size:.9rem;color:var(--muted);line-height:1.55;">Strength withdraws into cool analysis.</p></div>
          <div style="border:1px solid var(--line);border-radius:10px;padding:.9rem 1rem;"><strong>Type 9 → Type 6</strong><br><span style="font-size:.82rem;color:var(--copper);">Gut → Head</span><p style="margin:.4rem 0 0;font-size:.9rem;color:var(--muted);line-height:1.55;">Calm tips into worry and alertness.</p></div>
        </div>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">3. The Three Centers in a State of Emergency</h2>
        <p class="vb-intro">The nine types traditionally belong to three centers: gut types (8, 9, 1), heart types (2, 3, 4) and head types (5, 6, 7). Where they move under stress forms a revealing mosaic.</p>
        <p class="vb-intro" style="margin-top:.8rem;"><strong>All three gut types leave their center.</strong> The 8 withdraws into the sharp analysis of head type 5, the 9 falls into the mental alertness and worry of head type 6, and the 1 loses control and plunges into the emotional flood of heart type 4.</p>
        <p class="vb-intro" style="margin-top:.8rem;"><strong>The head types differ.</strong> The 5 stays in the head and jumps into the restless distraction of the 7. The 6 seeks support in the achievement of heart type 3. The 7 finally tips into the perfectionism of gut type 1.</p>
        <p class="vb-intro" style="margin-top:.8rem;"><strong>The heart types mostly move into another center, with one exception.</strong> The 2 takes on the demanding hardness of the 8 under pressure, the 3 falls back on the exhaustion and withdrawal of the 9. The 4, however, stays in the heart center and gets entangled in the neediness of the 2.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">4. Three Insights</h2>
        <p class="vb-intro"><strong>First: stress is often an escape from one's own base, with two exceptions.</strong> Seven of nine types leave their center under strong pressure. Only type 4 (heart to heart) and type 5 (head to head) stay in their own center. They overheat, so to speak, in their own element: the 4 stays caught in feeling, the 5 in thinking. The two exceptions stand next to each other at the lower edge of the circle.</p>
        <p class="vb-intro" style="margin-top:.8rem;"><strong>Second: the asymmetry is a hint at the character of the patterns.</strong> It is not a mechanical game of exchange. Some lines lead to another center, others circle within their own. This can be read as feelings and thoughts being more flexible and harder to grasp than the survival strategies of the gut. That is an interpretation, not a proof, but it fits the picture of a living system rather than a rigid scheme.</p>
        <p class="vb-intro" style="margin-top:.8rem;"><strong>Third: the crisis offers a chance.</strong> The stress lines are not dead ends but early warning systems. Whoever notices that they are taking on typical traits of their stress point, such as the 3 drifting into the exhaustion of the 9, or the 8 retreating into the intellect of the 5, has an anchor: ‘I am under strain, and my system is reaching for an emergency tool.’</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">5. The Fine Net of the Soul</h2>
        <p class="vb-intro">The symmetries and asymmetries of the stress lines suggest that personality is a finely engineered protective net. When the pressure rises, we reach for the familiar or for the opposite pole that our soul believes it needs at that moment.</p>
        <p class="vb-intro" style="margin-top:.8rem;">Whoever recognizes these patterns in themselves and others stops condemning their own stress behavior. They gain self-knowledge and the chance to steer out of the dead end in time. The opposite direction, the security point, is not covered in this article; it completes the picture.</p>
      </div>

      <p style="font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;color:var(--copper);margin:1.4rem 0 .2rem;">For beginners</p>
      ${bookTip("der-code-deiner-persoenlichkeit", "How the Enneagram type develops – and what it reveals about our deepest imprints.", "Der Code deiner Persönlichkeit")}
      <p style="font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;color:var(--copper);margin:1.4rem 0 .2rem;">For going deeper</p>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in depth – protective patterns, passions, and the path to essence.", "Who You Really Are – Volume 1")}
      <p style="font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;color:var(--copper);margin:1.4rem 0 .2rem;">For advanced readers</p>
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and healing paths from therapeutic practice.", "The Hidden Dynamics of the 27 Subtypes")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 personalities, 27 inner logics – the handbook for precise self- and other-awareness in the Enneagram.", "The 27 Personalities of the Enneagram")}

      ${relatedLinks([
        {route:"wissen", label:"Back to Knowledge"},
        {route:"linien-dynamik-beziehungen", label:"Connecting-Line Dynamics in Relationships (Stress & Security Points)"},
        {route:"typ-aendert-sich-nicht", label:"Does the Type Change over a Lifetime?"},
        {route:"drei-zentren", label:"Three Centers"},
      ])}
    </section>
  `);
}
