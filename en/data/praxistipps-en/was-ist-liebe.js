const { shell, pageHeader, relatedLinks, bookTip, songTieferMasken } = window.__kh;

const TYP_FARBEN = ["#5f5f5f", "#7a2fa8", "#1fa688", "#3cbf1f", "#124fcc", "#8a5222", "#d4a800", "#a00802", "#cc6e00"];

// The nine substitute strategies: [type, substitute (as on the page "The search for true love"), sentence of the substitute, love instead of ...]
const TYPEN = [
  ["Type 1 · The Perfectionist", "Perfection & correctness", "Whoever is flawless is loved.", "Love instead of perfection & correctness"],
  ["Type 2 · The Helper", "Conditional love & giving", "Whoever is indispensable is loved. Giving is meant to secure love instead of being loved for one's own sake.", "Love instead of conditional love & giving"],
  ["Type 3 · The Achiever", "Success & achievement", "Whoever achieves is loved. Worth is measured by outside recognition.", "Love instead of success & achievement"],
  ["Type 4 · The Individualist", "Individuality & creativity", "Whoever is special is seen. The feeling of being misunderstood is cultivated because it protects against the pain of separation.", "Love instead of individuality & creativity"],
  ["Type 5 · The Observer", "Knowledge & observation", "Whoever understands is safe. Analysis and withdrawal protect against being overwhelmed by feelings.", "Love instead of knowledge & observation"],
  ["Type 6 · The Loyalist", "Security & loyalty", "Whoever prepares and stays faithful is protected. Caution and duty replace trust.", "Love instead of security & loyalty"],
  ["Type 7 · The Enthusiast", "Fun & joy", "Whoever keeps options open does not have to suffer. Distraction and planning avoid the pain of longing.", "Love instead of fun & joy"],
  ["Type 8 · The Challenger", "Power & control", "Whoever is strong is not hurt. Vulnerability is avoided so as not to be dominated.", "Love instead of power & control"],
  ["Type 9 · The Peacemaker", "Harmony & self-forgetting", "Whoever keeps the peace is liked. Conflicts are sidestepped, often at the cost of one's own aliveness.", "Love instead of harmony & self-forgetting"],
];

export function wasIstLiebePage() {
  const karten = TYPEN.map((t, i) => `
    <li style="--tc:${TYP_FARBEN[i]};"><strong>${t[0]}</strong><br>
      <em>Substitute:</em> ${t[1]}<br>
      ${t[2]}<br>
      <em>The way back:</em> <strong>${t[3]}</strong></li>`).join("");
  return shell(`
    ${pageHeader("praxistipps-heilpraktiker")}
    <section class="narrow">
      <button class="ghost-link" data-route="praxistipps-heilpraktiker" style="margin-bottom:1rem;">← Back to Practical Tips</button>
      <p class="eyebrow">Tools · Practical Tips from the Naturopath</p>
      <h1 class="h1--tip">What Is Love? From Substitute Strategies to Essence</h1>
      <p class="lead-small">Love is one of the most used and most misunderstood words. This tip asks what it can mean: how the concept has changed over the centuries, which substitute strategies the Enneagram shows in the nine types, and what mystics and teachers such as Eckhart Tolle understand by love.</p>

      <div class="psycho-img-wrap" style="margin-top:1rem;">
        <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/schaubilder/was-ist-liebe/was-ist-liebe-en.jpg" alt="Nine tiles in the type colors: love instead of perfection, giving, success, individuality, knowledge, security, fun, power, harmony, with a red heart." class="psycho-img" loading="lazy" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">What is love? A working definition</h2>
        <p class="vb-intro">Love, in the sense meant here, is less a feeling of wanting to have than an attitude of attention and connection: the other is not needed for something but seen as a person, with the same wish for life and connection one knows in oneself. Being in love, care, longing and bonding can be expressions of it. Where they are tied to conditions (&lsquo;I love you if &hellip;&rsquo;), it is mostly a substitute strategy.</p>
        <p class="vb-intro" style="margin-top:.8rem;margin-bottom:0;font-size:.9rem;color:var(--muted);">This is a working definition from the spiritual Enneagram and from mysticism, not a scientific one. The chart <a href="#suche-nach-liebe">The Search for True Love</a> shows what the nine types substitute for love. Here follows the long version.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.6rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">1. How the concept of love has changed</h2>
        <p class="vb-intro">We call many things love: the fondness for chocolate, the infatuation of spring, care within the family, the pain of missing someone. A look at history shows how differently the word has been filled.</p>
        <ul class="sp-list" style="margin-top:.8rem;">
          <li><strong>Antiquity (Eros, Philia, Agape):</strong> The Greeks distinguished precisely. Eros is passionate desire, Philia friendship and connection, Agape the giving love that demands nothing. The New Testament uses the word Agape for the love it speaks of (for example in the hymn to love, 1 Corinthians 13).</li>
          <li><strong>Middle Ages (Minne):</strong> The courtly love of the troubadours and Minnesingers stylized the unattainability of the beloved. Longing and renunciation were seen as a school of self-overcoming.</li>
          <li><strong>Modernity (Romanticism and individualism):</strong> Love became personal. Sociologists describe how it increasingly took over the role that religion once had: the partner is now supposed to provide security, confirmation and meaning at once. That is a heavy load for any relationship.</li>
        </ul>
        <p class="vb-intro" style="margin-top:1rem;">This is exactly where the Enneagram comes in: it shows how the personality unconsciously runs an exchange to get love from outside.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">2. The substitute strategies of the nine types: love instead of &hellip;</h2>
        <p class="vb-intro">The Enneagram describes nine basic patterns of how contact with one&rsquo;s own essence was lost. Each pattern replaces love with a strategy that was clever early in life. The wording follows the chart <a href="#suche-nach-liebe">The Search for True Love</a>. The cards show the substitute and the way back (&lsquo;love instead of &hellip;&rsquo;). They describe patterns we have, not what we are.</p>
        <ul class="sp-typen">${karten}</ul>
        <p class="vb-intro" style="margin-top:1rem;">All nine strategies start from a lack. They whisper unconsciously: &lsquo;Basically I am not complete. I have to achieve, be or control something to be worthy of love.&rsquo; That is the love of the ego: clinging, conditional and tied to something in return. What lies beneath is shown by the quintessences for <a href="#suche-nach-liebe">the types and the 27 subtypes</a>.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">3. The voices of mysticism</h2>
        <p class="vb-intro">When people awaken on a spiritual path, their understanding of love changes. The traditions express this in very different images, and yet they sound related.</p>
        <ul class="sp-list" style="margin-top:.8rem;">
          <li><strong>Christianity:</strong> &lsquo;God is love&rsquo; (1 John 4:8). The saying &lsquo;Dilige, et quod vis fac&rsquo; (&lsquo;Love, and do what you will&rsquo;) is attributed to <a href="#beruehmte-augustinus-von-hippo">Augustine (SX4w5)</a>. Meister Eckhart (c. 1260&ndash;1328) spoke of &lsquo;detachment&rsquo; (<em>Abgeschiedenheit</em>), letting go of self-will and inner images so that room opens for what is already present in the ground of the soul.</li>
          <li><strong>Sufism:</strong> In Sufi poetry, for example in Rumi, earthly love (<em>ishq-e majazi</em>) is a bridge to divine love (<em>ishq-e haqiqi</em>). The beloved is then also a mirror for something in one&rsquo;s own inner being. Whoever only worships the mirror overlooks the light.</li>
          <li><strong>Judaism:</strong> Central are the commandments &lsquo;You shall love the Lord your God&rsquo; (Deuteronomy 6:5) and &lsquo;You shall love your neighbor as yourself&rsquo; (Leviticus 19:18). Lurianic Kabbalah speaks of divine sparks scattered in the world that are to be gathered again.</li>
          <li><strong>Buddhism and Advaita:</strong> In Buddhism, <em>metta</em> (loving-kindness) is one of the four &lsquo;immeasurables&rsquo;, alongside compassion, sympathetic joy and equanimity. The <a href="#beruehmte-buddha">Buddha (SO5w4)</a> is associated with this attitude. In Advaita Vedanta love is described as the nature of pure awareness pervading all beings, as <a href="#beruehmte-ramana-maharshi">Ramana Maharshi (SO9w1)</a> taught.</li>
        </ul>
        <p class="vb-intro" style="margin-top:1rem;">Where the traditions differ in detail, this tip stays deliberately neutral. It is enough that they sound related on one point: love is described as something that does not have to be acquired but becomes free when self-preoccupation eases.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">4. Eckhart Tolle: recognizing the other in essence</h2>
        <p class="vb-intro"><a href="#beruehmte-eckhart-tolle">Eckhart Tolle (SX9w1)</a> describes love in an essay on his website (&lsquo;Personal Love&rsquo;) in essence like this: true love is recognizing the other as yourself, in essence and not in form. He distinguishes it from psychological love, which wants to be an answer to inner loneliness and therefore easily turns into suffering as soon as the other does not fill that role.</p>
        <p class="vb-intro" style="margin-top:1rem;">Whoever breaks through the mental noise of the ego, and with it the Enneagram fixation, for a moment looks behind the coverings of form: body, status, past, personality pattern. Then it shows, as Tolle puts it, that the same aliveness that breathes in oneself also breathes in the other. Love would then not be a quality one has or loses but a dimension of consciousness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.8rem;background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">5. Conclusion: when the Enneagram becomes a school</h2>
        <p class="vb-intro">The Enneagram leads to this gate. Whoever sees through their own fixation sees the personality type as a substitute strategy practiced for decades for the longing for wholeness. Two questions can be laid side by side:</p>
        <ul class="sp-list" style="margin-top:.8rem;">
          <li><strong>The question of the substitute strategy:</strong> &lsquo;What can you give me (perfection, success, security, harmony) so that I feel complete?&rsquo;</li>
          <li><strong>The attitude of mysticism:</strong> &lsquo;There is nothing to seek, for the source in me is inexhaustible, and in you I see the same face.&rsquo;</li>
        </ul>
        <p class="vb-intro" style="margin:.8rem 0 0;">Love is thus less a state of having than of being: the moment when separation eases and nothing foreign is recognized in the other any more.</p>
      </div>

      <div class="sp-tile" style="--tc:#c0392b;margin-top:1.8rem;">
        <div class="sp-tile__head"><span class="sp-tile__num">✦</span><h2 class="sp-tile__title">To take along: noticing the substitute</h2></div>
        <p class="sp-p">The exercise takes one to two minutes each time and can be done in any conversation.</p>
        <div class="sp-ex"><ul class="sp-list">
          <li>Name your own substitute word from section 2 (for example perfection, giving, success, individuality, knowledge, security, fun, power, harmony).</li>
          <li>Pause briefly in a conversation and check: is something being expected right now (recognition, security, peace), or is someone listening?</li>
          <li>Look at the other person for one breath without a role, not as spouse, colleague or child, but as a human being with the same wish for life and connection.</li>
          <li>Complete the sentence &lsquo;love instead of &hellip;&rsquo; once inwardly with your own substitute word, without having to change anything about it.</li>
        </ul></div>
      </div>

      <div style="margin:2rem 0 0;text-align:center;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .3rem;color:var(--ink);">The search for love as a short film</h2>
        <p style="font-size:.9rem;color:var(--muted);margin:0 0 .9rem;">About 65 seconds, with sound: nine types, nine substitutes and the love behind them. The button below sends a version with a link to the compass to friends and acquaintances, even if they do not have the app yet.</p>
        <video controls playsinline preload="none" poster="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/videos/liebe-en-poster.jpg" aria-label="Short film on the search for true love" style="display:block;width:100%;max-width:340px;margin:0 auto;border-radius:14px;background:#111;box-shadow:0 4px 18px rgba(0,0,0,.18);">
          <source src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/videos/liebe-en.mp4" type="video/mp4">
        </video>
        <div style="margin:.9rem 0 0;"><button type="button" data-share-video="li" style="font:inherit;font-weight:700;font-size:.95rem;padding:.65rem 1.3rem;border:2px solid var(--copper);border-radius:999px;background:var(--paper);color:var(--copper);cursor:pointer;">&#8599; Share video</button></div>
        <p style="font-size:.8rem;color:var(--muted);margin:.7rem 0 0;">Music: &lsaquo;Love Like a Lantern&rsaquo; by Detlef Rathmer</p>
      </div>

      <p style="font-size:.85rem;color:var(--muted);margin:1.4rem 0 0;">This tip does not replace medical or therapeutic treatment. The classifications from mysticism and religion are food for thought, not statements about the truth of any tradition.</p>

      <div style="margin-top:2rem;">
        <details style="border:1px solid var(--line);border-radius:12px;overflow:hidden;">
          <summary style="display:flex;align-items:center;gap:0.75rem;padding:1rem 1.2rem;cursor:pointer;
                          background:var(--paper);list-style:none;user-select:none;font-weight:700;
                          font-size:0.95rem;color:var(--ink);">
            <span style="font-size:1.2rem;color:var(--copper);">&#9672;</span>
            <span style="flex:1;">Further reading by Detlef Rathmer</span>
            <span style="font-size:0.75rem;color:var(--muted);">&#9660;</span>
          </summary>
          <div style="padding:1rem 1.2rem 1.2rem;">
            ${bookTip("die-sprache-unserer-beziehungen", "Shaping closeness with the Enneagram – how the nine types experience, seek and sometimes avoid love.", "Die Sprache unserer Beziehungen")}
            <div style="margin-top:.8rem;">${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}</div>
            <div style="margin-top:.8rem;">${bookTip("der-raum-hinter-allem", "An exploration of consciousness beyond thought – about the quiet space behind all experience.", "Der Raum hinter allem")}</div>
          </div>
        </details>
      </div>

      ${songTieferMasken("Behind the substitute strategies lies the longing for love. The song tells how Enneagram homeopathy looks deeper than behavior, namely at the motivation behind it (song in German).")}

      ${relatedLinks([
        {route:"praxistipps-heilpraktiker", label:"All practical tips"},
        {route:"suche-nach-liebe", label:"Chart: The Search for True Love (with the quintessence 'love instead of ...')"},
        {route:"beziehungen-schaubild", label:"Relationships – Love and Protection"},
        {route:"praxistipps-heilpraktiker/ende-der-suche", label:"When the Search Falls Silent: The End of the Search"},
        {route:"praxistipps-heilpraktiker/das-ewige-ich-bin", label:"The Eternal 'I Am': The Enneagram Healing Compass Beyond Fixation"},
        {route:"praxistipps-heilpraktiker/dein-wille-geschehe", label:"'Thy Will Be Done': Surrender Instead of Ego Will"},
        {route:"beruehmte-eckhart-tolle", label:"Portrait: Eckhart Tolle (SX9w1)"},
      ])}
    </section>
  `);
}
