const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

const SP_TILES = [
  { id: "psychologie-oder-spiritualitaet", farbe: "#8a6aa8", titel: "Psychology or Spirituality?",
    html: `
      <p class="sp-p">The disciplines as we know them today are historically still young. This refers to philosophy, theology and psychology: only in the last few centuries have they moved further and further apart. In earlier times this separation did not exist. Humanity has been occupied with the human being and human action for thousands of years, and no distinction was made between psychology and spirituality.</p>
      <p class="sp-p">The Enneagram in its present written form is younger (beginning in the 1960s). The deeper insights into human nature it contains, however, are thousands of years of accumulated experience and mostly stem from the time before the division into disciplines.</p>
      <p class="sp-p">Some say the Enneagram is spiritual in character, others stress the psychological aspects, which are also clearly recognisable. On closer inspection the author sees no real difference: they are two sides of one medal with fluid transitions. In personal development, psychology and spirituality go hand in hand, whether intended or not. Anyone who works on one side of the medal notices that it also affects the other. The difference depends above all on what one understands by spirituality or psychology.</p>` },
  { id: "psychologisch", farbe: "#c47f6b", titel: "What is psychological about the Enneagram?",
    html: `
      <p class="sp-p">The Enneagram describes our inner life, a psychological map, so to speak. The description of a type usually begins with its strengths and weaknesses and shows where it directs its attention and what its patterns of thinking, feeling and acting look like. This is also called the psychological Enneagram: a description of the personality or character structure. Psychology speaks of the ego here, Freud spoke of the 'I', and spiritually one speaks of the lower self. In the Enneagram this description is called Enneagram fixation, psychological defence mechanism, Enneagram type or Enneagram style, or the Enneagram of passions and fixations.</p>
      <p class="sp-p">On this level we experience our actions as being stuck in the respective fixation. This applies to most of us. 'Stuck' means there is actually no freedom of choice in thinking, feeling and acting. The lack arises simply because we do not know ourselves well. Our automatic patterns of thinking, feeling and acting remain barely conscious, and we run on 'autopilot'. We do not want to become furious, for example, and yet we flare up. It simply comes over us 'demonically', which is the missing freedom of choice. We act from our lower self, out of the unconscious fixation, and the ego mostly directs our life.</p>` },
  { id: "spirituell", farbe: "#c9a84c", titel: "What is spiritual about the Enneagram?",
    html: `
      <p class="sp-p">The Enneagram also offers a method of development and is therefore a model of transformation. Transformation is a word from spiritual circles. It is about the transformation of the lower into the higher self, the transition from acting on the ego level to acting as a free person. The ego then no longer directs, or at least less often and less one-sidedly, and we no longer have to act out so one-sidedly destructively.</p>
      <p class="sp-p">But what is spiritual about it? The term is elastic and very personal. Many see spirituality as religion and belief in a God. For others these things do not necessarily belong together: in Buddhism belief in a God is not part of the spiritual teaching, and there are non-religious people who lead a spiritual life. Conversely, not all members of faith communities follow a spiritual way of life. In a wider sense one can understand it as feeling part of a greater whole, experiencing connectedness and oneness with everything, or realising one's own wholeness. The author also recognises spirituality in welcoming the higher within oneself. This higher can be God or Allah, but also the higher potential as the Holy Idea of each Enneagram principle, which is present in the person and often waits many years or decades to unfold. This includes the striving to live from the True Self, one's own essential nature, and from higher values and virtues.</p>
      <p class="sp-p">One example is people who have decided to live from love. They regard love as the highest value and strive for it above all. Someone who believes in God may formulate the goal as 'coming closer to God', someone who does not may call it 'becoming a free person'. At the core the two paths may not be so different: what stands between the person and God? What stands between the person and the free person? The answer is the same: the ego, the fictitious self. Without knowing one's own inner motives, motivations and passions, one stands in one's own way.</p>` },
  { id: "zwei-seiten", farbe: "#4f86a8", titel: "Two sides of one medal",
    html: `
      <p class="sp-p"><em>Psychology</em> and <em>spirituality</em> are thus two sides of one medal. Spiritual traditions have always examined the lower self or ego, because it is the starting point for transformation into something higher. A likely origin of spiritual orientation is the everyday experience that we suffer above all from our ego. Many of us want to suffer less from it, and so people have searched for thousands of years for the how: what can we do to suffer less? Only the language in which this is expressed has kept changing over the centuries.</p>
      <p class="sp-p">In recent decades, through the development of science, a person's inner well-being and unease have become a special field of psychological research. Here the methods of development are called psychological therapies. Those practised in spirituality easily recognise the core of their own spiritual practice in the various therapies. The 'guru' is now called a psychotherapist. He too deals with meaning and the striving for higher values in his clients, simply because people can thereby find more of themselves and become happier.</p>` },
  { id: "psycho-spirituell", farbe: "#8aa06a", titel: "The psycho-spiritual Enneagram",
    html: `
      <p class="sp-p">On close inspection there is no either-or: the Enneagram contains both <em>psychological</em> and <em>spiritual</em> elements.</p>
      <ul class="sp-list">
        <li>The psychological map depicts our inner life, our ego.</li>
        <li>The spiritual side depicts our higher self.</li>
        <li>The method shows the way from one to the other: the path of transformation from the lower to the higher self.</li>
      </ul>
      <p class="sp-p">Above all the Enneagram is an invitation to each of us to realise the higher within us by learning to look the ego or lower self in the eye. The one cannot be separated from the other.</p>` },
  { id: "menschwerdung", farbe: "#a2483a", titel: "Becoming human",
    html: `
      <p class="sp-p">The Greek word for the human being or humanity is <em>anthrôpos</em>. In its ancient Greek meaning it stands for 'the one who looks upward' or 'the one destined for the higher'. To be truly human meant opening oneself to the higher, but also to the other and the other's well-being: to be a good, virtuous, true human being.</p>
      <p class="sp-p">The path the Enneagram offers leads, by letting go of the unconscious, unconditional clinging to one's own Enneagram fixation, to welcoming the True Self and the higher virtues one carries within. Then the ego or Enneagram type no longer directs life, and the way to true inner freedom opens.</p>
      <p class="sp-p">The Enneagram shows a way to conscious living: with self-knowledge and knowledge of one's own strengths and weaknesses, but also with knowledge of others. This means becoming more receptive to what is already present and possible within oneself and within one's own life circumstances, and it means a happier, more fulfilled life with (more) balance, calm, joy, wisdom, inner peace and love.</p>` },
  { id: "zusammenfassung", farbe: "#607468", titel: "Summary and benefits",
    html: `
      <h3 class="sp-h3">The Enneagram is …</h3>
      <ul class="sp-list">
        <li>a symbol to which various meanings are attributed,</li>
        <li>a symbol that sums up our psychological and spiritual structure,</li>
        <li>a map of our inner life,</li>
        <li>a method of practice for personal development,</li>
        <li>a method in which the path of development differs for each of the nine types and the 27 subtypes.</li>
      </ul>
      <h3 class="sp-h3">What does personal development with the Enneagram bring?</h3>
      <ul class="sp-list">
        <li>Getting to know oneself and discovering who one is.</li>
        <li>Getting to know others and discovering how and why they are different.</li>
        <li>Recognition, acceptance and appreciation of oneself and others.</li>
        <li>Compassion for oneself and others.</li>
        <li>A bridge between people, to understand each other better and develop understanding for one another.</li>
        <li>Recognition of one's own life and its meaning, including the past, the parents, former partners and so on.</li>
        <li>A connection with oneself, from which a connection to others can also be made.</li>
        <li>An inner balance that is less easily disturbed by external factors.</li>
        <li>Inner calm.</li>
        <li>Becoming a freer person whose happiness depends less or no longer at all on the people around, on circumstances and the like.</li>
        <li>More fun and joy in life.</li>
      </ul>` },
  { id: "laster-zur-tugend", farbe: "#d9a441", titel: "From vice to higher virtue: a gift",
    html: `
      <p class="sp-p">Transforming a vice into a virtue means handing the direction from the lower emotional centre (ego, 'fighting dog', emotional pain body) to the higher emotional centre. Where the authority of the churches has proclaimed and proclaims virtues as dogma, this often feels alienating: the form of a virtuous life is then, so to speak, prescribed by a supreme outside authority and possibly sanctioned with hell and damnation.</p>
      <p class="sp-p">The virtues meant here are better seen as a gift. Not something one must do, but something that is sometimes given. Not something demonstrated from outside that one then imitates to keep up appearances, but something that lies deep in one's own True Self beyond the ego fixation. The wisdom of the Enneagram shows that what brings us suffering and annoyance in life arises from our vices and passions: pride, deception, intemperance, resentment and so on. It is mostly deeply unconscious passions that create inner imbalance. When we let go of these vices (via negativa), the way opens to invite the higher virtues instead (via positiva). Then we reach a place within us that is free of suffering.</p>
      <ul class="sp-typen">
        <li style="--tc:#607468;"><b>Type 1</b> becomes a more contented person when able to let go of anger and resentment towards others in certain situations.</li>
        <li style="--tc:#c47f6b;"><b>Type 2</b> can experience the higher virtue of humility when bringing pride and flattery under the direction of the True Self.</li>
        <li style="--tc:#c9a84c;"><b>Type 3</b> takes an important step towards becoming a freer person by learning to notice and let go of vanity and deception.</li>
        <li style="--tc:#8a6aa8;"><b>Type 4</b> automatically becomes more content when able to notice and thereby let go of envy and melancholy.</li>
        <li style="--tc:#4f86a8;"><b>Type 5</b> can experience the higher virtue of non-attachment when able to notice and let go of avarice and greed.</li>
        <li style="--tc:#7a8f9e;"><b>Type 6</b> becomes freer when able to let go of fear and doubt.</li>
        <li style="--tc:#d9a441;"><b>Type 7</b> experiences being a freer person when bringing gluttony under the direction of the True Self.</li>
        <li style="--tc:#a2483a;"><b>Type 8</b> can experience the virtue of innocence when recognising and transforming the passion of lust.</li>
        <li style="--tc:#8aa06a;"><b>Type 9</b> can receive the higher virtue of right action when noticing and recognising sloth.</li>
      </ul>` },
];

export function spirituellesEnneagrammPage() {
  const nav = SP_TILES.map((t, i) => `<a class="ab-chip" href="javascript:void(0)" onclick="document.getElementById('sp-${t.id}').scrollIntoView({behavior:'smooth'})" style="--tc:${t.farbe};"><span class="ab-chip__n">${i + 1}</span><span class="ab-chip__m">${t.titel}</span></a>`).join("");
  const sektionen = SP_TILES.map((t, i) => `
    <section class="sp-tile" id="sp-${t.id}" style="--tc:${t.farbe};">
      <div class="sp-tile__head"><span class="sp-tile__num">${i + 1}</span><h2 class="sp-tile__title">${t.titel}</h2></div>
      ${t.html}
      <p class="sp-top"><a href="javascript:void(0)" onclick="document.getElementById('sp-top').scrollIntoView({behavior:'smooth'})">↑ Back to the topic selection</a></p>
    </section>`).join("");
  return shell(`
    <div class="page-container">
      ${pageHeader("spirituelles-enneagramm")}
      <div class="page-content sp-page">
        <p class="eyebrow">Knowledge · Psychology and spirituality</p>
        <h1 class="section-title">The Spiritual Enneagram: Psychology, Spirituality or Both?</h1>
        <p class="lead-small">The Enneagram is read sometimes as psychology, sometimes as spirituality. Here is why the two belong together: as a map of the ego and as a path to the higher self.</p>
        <figure class="sp-hero"><img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/schaubilder/spirituelles-enneagramm.jpg" alt="The spiritual Enneagram: a glowing Enneagram symbol with a spiral in the centre, surrounded by fiery flowing waves" loading="lazy" /></figure>
        <div id="sp-top" class="ab-nav" role="navigation" aria-label="Topics of this article">${nav}</div>
        ${sektionen}
      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("leidenschaft-und-heilung", "The 9 passions behind these avoided emotions &ndash; with paths of healing from homeopathic practice.", "Leidenschaft und Heilung")}
      ${bookTip("hinter-der-leidenschaft", "Behind passion, the deeper wounds – the path to transformation of the Enneagram type.", "Hinter der Leidenschaft – die neun Wunden")}
      ${bookTip("heilung-als-erinnerung", "Healing as remembrance of what we fundamentally are – beyond symptom and diagnosis.", "Heilung als Erinnerung")}
      ${bookTip("7-wege-zu-dir-selbst-lebenskunst-fuer-den-alltag", "Seven practical steps toward getting closer to yourself – no detours, no sugarcoating, direct and clear.", "7 Wege zu Dir selbst")}
      ${bookTip("nichts-und-alles", "A quiet book on looking inward &ndash; awareness, space, and inner freedom.", "Nichts und Alles")}
      ${bookTip("der-raum-hinter-allem", "The space that remains when identification recedes – a meditative work on consciousness and freedom.", "Der Raum hinter allem")}
      ${bookTip("sei-still-und-wisse-ich-bin-gott", "A spiritual book on the deepest stillness within us and the experience of transcendence beyond all concepts.", "Sei still und wisse – ich bin Gott!")}
      ${bookTip("meta-intelligenz", "Meta-Intelligence – the intelligence that unites all other intelligences and unlocks the full potential of consciousness.", "Meta-Intelligence")}
      ${bookTip("meta-intelligenz-das-hoerbuch", "Meta-Intelligence as an audiobook – ideal for on the go or for meditative listening.", "Meta-Intelligenz (Hörbuch)")}
      ${relatedLinks([
        {route:"tugenden-enneagramm", label:"The Virtues in the Enneagram"},
        {route:"laster-tugenden-affirmationen", label:"Diagram: Vices · Virtues · Affirmations"},
        {route:"ego-fixierungen", label:"Diagram: Ego Fixations (Oscar Ichazo)"},
        {route:"ego-persoenlichkeit", label:"Diagram: Ego Personality"},
        {route:"leidenschaft-und-wunde", label:"Diagram: Passion and Wound"},
        {route:"angst-essenz", label:"Diagram: Fear → Essence"},
        {route:"heilungsweg", label:"Diagram: Healing Path"},
        {route:"bewusstseinsuebungen", label:"Diagram: Consciousness Exercises"},
        {route:"spirituelle-uebungen", label:"Spiritual Exercises"},
      ])}
    </div>
  `);
}
