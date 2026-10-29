const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

const IMG = "https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/schaubilder/kino-erwachen/kino-erwachen.jpg";
const FARBEN = ["#c0392b", "#c9a84c", "#4f86a8", "#8a6aa8", "#607468"];
const TYP_FARBEN = ["#a2483a", "#c47f6b", "#d9a441", "#8a6aa8", "#4f86a8", "#7a8f9e", "#c9a84c", "#b5542f", "#8aa06a"];

// Four film tiles plus Plato's cave as the ancestor. Parts: h + p | l (list) | u (exercise)
const FILME = [
  { titel: "The Matrix (1999): The Operating System", sub: "The red pill and the spoon that does not exist", intro: "An office worker with a double life, a rabbit to follow, and two pills on a table: with ‘The Matrix’ the Wachowskis created a scene almost everyone knows. The blue pill means: keep sleeping, keep believing what is comfortable to believe. The red pill means: see how things actually are. Neo, played by Keanu Reeves, takes the red one.", teile: [
    { h: "What the film tells", p: "The world Neo lives in is a simulation that machines feed into the brains of sleeping humans while their bodies lie in nutrient fluid. What matters is not the technology but the moment Neo grasps that the walls, gravity, even his own fear follow rules someone wrote. Whoever sees through the rules can bend them." },
    { h: "The spoon boy", p: "In the Oracle's waiting room a child sits bending spoons with a glance. Neo asks how it is done. The answer is so simple it is easily missed: do not try to bend the spoon, only realize there is no spoon. Then it turns out that it is not the spoon that bends, but oneself. The image carries over to any inner wall: as long as it is held to be unshakeable, it does not move." },
    { h: "The Enneagram echo", p: "The fixation works like this operating system. It runs in the background, filters perception, and delivers answers before a question is finished. That Keanu Reeves played Neo has a fine irony: the app portrays him as a <a href=\"#beruehmte-keanu-reeves\">sexual Nine with a One wing (SX9w1)</a>, the type that is especially good at holding back and going with the flow. Neo has to learn the opposite: to wake up and become present." },
    { h: "To take away", u: ["At the next irritation, ask: which rule was broken here, and who wrote it?", "Look for a sentence that begins with ‘One must …’ and check whether there is a spoon."] }] },
  { titel: "Avatar (2009): The Pilot in the Pod", sub: "Who is steering, and who forgot that they are steering?", intro: "James Cameron's film is set on the moon Pandora, but its real story takes place in a small, unremarkable room: the link room. There lies Jake Sully, a paraplegic former Marine, in a pod while his consciousness steers a three-metre-tall, blue, agile Na'vi body.", teile: [
    { h: "What the film tells", p: "At first the avatar is a tool for a mission. Then Jake gets used to the strength, the agility, the belonging to a people. He begins to confuse himself with the body. At the end of the film his consciousness is transferred permanently into the avatar. The scene is usually read as a happy ending, but it can also stand as a question: what remains of the one who lay in the pod?" },
    { h: "A word with a history", p: "‘Avatar’ comes from Sanskrit (avatāra, ‘descent’) and in Hinduism denotes the descent of a deity into a form. The image of consciousness steering a vehicle is therefore ancient. It appears in Advaita Vedanta as well as in the teachings handed down from Ramana Maharshi, whom the app portrays as a <a href=\"#beruehmte-ramana-maharshi\">social Nine with a One wing (SO9w1)</a>." },
    { h: "I see you", p: "The Na'vi greet each other with ‘I see you’. What is meant is not only form, role and behaviour, but what looks out from behind them. In the Enneagram this would be the moment when someone recognizes another person's pattern or mask and still sees the human being behind it." },
    { h: "The Enneagram echo", p: "The fixation is the avatar. It can be powerful and impressive, but it is steered. It becomes dangerous only when the pilot forgets that he lies in a pod. Then it no longer says ‘I have a One pattern’ but ‘That's just how I am’." },
    { h: "To take away", u: ["During a reaction, step back inwardly for a moment: who just spoke, the person or the program?", "Once a day, notice deliberately: I steer this body, but I am not only this body."] }] },
  { titel: "Inception (2010): Nested Realities", sub: "A top that wobbles, or does not", intro: "In Christopher Nolan's film, specialists enter other people's dreams and stack dream upon dream. The deeper they sink, the slower time runs and the harder it is to say which level one is on. Whoever sinks too deep risks losing themselves entirely.", teile: [
    { h: "The totem", p: "To know whether they are dreaming or awake, each carries a small object whose properties only they know: a spinning top, a loaded die, a chess piece. The top of Cobb, played by <a href=\"#beruehmte-leonardo-dicaprio\">Leonardo DiCaprio (SX1w2)</a>, keeps spinning in a dream and falls over sooner or later in reality. The famous final shot leaves open what the top does." },
    { h: "The planted idea", p: "In the film the procedure is called inception: planting an idea so deep in the unconscious that the person takes it for their own. This is how early imprints work: a sentence from childhood (‘Be good’, ‘Try harder’, ‘You are too much’) is not experienced as someone else's idea but as one's own truth." },
    { h: "The Enneagram echo", p: "The Enneagram works as a totem. Whoever watches their type reach reflexively for the familiar means (the Six for worry, the Three for approval, the Nine for withdrawal) holds a signal: this is a state, not a destiny. It is the top that wobbles for a moment." },
    { h: "To take away", u: ["Choose a small totem, such as a ring or a coin, and ask inwardly at every touch: am I dreaming a pattern right now?", "Write down a sentence from childhood and check whether it is really one's own."] }] },
  { titel: "The Game (1997): The Shock Therapy", sub: "When life takes over the script", intro: "Warning, spoilers. David Fincher's thriller tells of Nicholas Van Orton, a rich, controlled, lonely businessman whose brother gives him a ‘game’ for his birthday. It begins harmlessly and spins out of control: accounts are emptied, allies turn out to be enemies, Nicholas loses status, money and finally every certainty.", teile: [
    { h: "What the film tells", p: "In the end it turns out that everything was staged to break open his protective stance. Nicholas, by the film's logic, was so firmly caught in his role that only a collapse of control could reach him. The actor Michael Douglas is portrayed in the app as a <a href=\"#beruehmte-michael-douglas\">social Type 1 with a Nine wing (SO1w9)</a>. We deliberately do not assign the character to a type: a script is not a person. The actor was nonetheless well chosen: social Ones with a Nine wing control themselves and their surroundings especially strongly, and it is exactly this effect, control slipping from the hands step by step, that the film meant to make visible. In this sense the role was perfectly cast." },
    { h: "The question behind it", p: "Does awakening have to be a catastrophe? The film suggests it: only when all control structures are gone does the armour break open. In real life this sometimes happens through loss, illness, separation. But that is not a plan one could recommend to anyone, let alone stage. The gentler way runs through observation, time and support." },
    { h: "The Enneagram echo", p: "The fixation relies on control: on the right behaviour, the right impression, the right distance. Whoever lives in the protective stance experiences letting go at first as a threat. The film shows the relief that follows when the ground is not gone after all, but a net hangs beneath." },
    { h: "To take away", u: ["Choose a control habit (answering messages at once, planning everything in advance) and deliberately skip it once.", "Afterwards observe calmly what actually happens and what was merely feared."] }] },
  { titel: "The Ancestors: Plato's Cave and Its Heirs", sub: "A theme that runs through the centuries", intro: "Long before cinema, <a href=\"#beruehmte-platon\">Plato (SX6w5)</a> told in Book VII of his ‘Republic’ the allegory of the cave (around 380 BC): people sit chained from birth and see only shadows on a wall. They take them for reality, name them, measure themselves against them.", teile: [
    { h: "The way back", p: "One is freed, dazzled by the fire, and finally led into daylight. He sees the things themselves. If he returns and tells of it, the others laugh at him." },
    { h: "Told again and again", p: "The basic shape of this story (illusion, dazzle, ascent, return) appears through the centuries in ever new garments. A small selection:", l: [
      "<strong>Buddha</strong> (around the 5th century BC): The name means ‘the awakened one’. Whoever awakens sees that they had been living in the sleep of habit.",
      "<strong>Zhuangzi</strong> (4th century BC): He dreams he is a butterfly and on waking does not know whether he is a man who dreamed of being a butterfly or a butterfly dreaming of being a man.",
      "<strong>Augustine</strong> (around 400): In his ‘Confessions’ he writes that God was more inward than his own innermost self, while he himself had been searching outside.",
      "<strong>Meister Eckhart</strong> (around 1260–1328): The Dominican and mystic spoke of the ‘ground of the soul’ and of ‘detachment’, the letting go of self-will and inner images in order to find what lies beneath.",
      "<strong>Dante</strong> (around 1307–1321): In the ‘Divina Commedia’ (‘The Divine Comedy’) the poet awakens in a dark wood, descends through Hell and climbs Purgatory up to Paradise, and tells of it.",
      "<strong>John of the Cross</strong> (16th century): His ‘Dark Night of the Soul’ describes how all familiar supports fall away before something new becomes possible.",
      "<strong>Pedro Calderón de la Barca</strong> (1635): His play ‘La vida es sueño’ (‘Life Is a Dream’) is about a prince who does not know whether he is dreaming or awake.",
      "<strong>René Descartes</strong> (1641): In the ‘Meditations’ he asks whether he is awake at all and whether a deceiving demon is fooling him about everything he takes to be real. This thought is often compared with ‘The Matrix’."] },
    { h: "And today in the cinema", p: "What mystics, poets and philosophers once told in parables, poems and sermons, cinema now tells with special effects. The images have changed, the question has not: am I what I take myself to be? The Matrix, Avatar, Inception and The Game are, in this sense, new garments of a very old story." }] },
];

// The nine programs: [type, core belief, program line, program, crack]
const TYPEN = [
  ["Type 1 · The Perfectionist", "I must be right to be good.", "if something wrong → correct it", "The world runs through the template ‘right or wrong’. The inner judge is under constant current because it believes it must keep the universe in order single-handedly.", "I have the impulse to correct. I am not the inner judge."],
  ["Type 2 · The Helper", "I must be needed to be loved.", "if someone needs something → help", "Attention rests on others' needs while one's own disappear from view. Relationships are secured through favours.", "I am already loved. Helping is a trait of my avatar, not my core."],
  ["Type 3 · The Achiever", "I must achieve something to be worth anything.", "if goal open → finish and present", "Life becomes a chain of projects, goals and appearances. The image one gives off is mistaken for the person.", "Success and image are the stats of my game character. My worth does not hang on them."],
  ["Type 4 · The Individualist", "I must be special because something is missing.", "if feeling arises → deepen it", "Attention circles around depth, longing and what is missing. Being different protects against the pain of not belonging.", "Waves of feeling come and go. Nothing is missing that I am not already."],
  ["Type 5 · The Observer", "I must understand everything to be safe.", "if demand → withdraw and examine", "Life is watched from a safe distance, as if behind glass. Energy and feelings are saved so as not to be overrun.", "Knowledge and withdrawal give only apparent safety. Life cannot use me up."],
  ["Type 6 · The Loyalist", "I must be vigilant to be safe.", "if unclear → check for danger", "The system scans without pause for risks, contradictions and hidden intentions. Scenarios of failure run in advance.", "Fear is the simulation of a mind seeking protection. Beneath it lies certainty."],
  ["Type 7 · The Enthusiast", "I must keep options open so as not to suffer.", "if pain looms → reframe, plan, move on", "The mind jumps from idea to idea and avoids painful or confining sensations in the now by mentally reframing them.", "I do not have to flee. This moment with all its shades is the only place where life happens."],
  ["Type 8 · The Challenger", "I must be strong so as not to be dominated.", "if pressure → push back", "Life is experienced as a battlefield. Hardness and intensity protect the vulnerability no one is meant to see.", "Power and defence belong to the shell. True strength needs no armour."],
  ["Type 9 · The Peacemaker", "I must adapt to keep the peace.", "if conflict looms → merge or numb", "One's own impulses, priorities and anger are muted so the connection to the environment holds. One makes oneself invisible.", "Harmony through self-abandonment is an illusion of the program. My presence is called for."],
];

function teilHtml(t) {
  let s = `<h3 class="sp-h3">${t.h}</h3>`;
  if (t.p) s += `<p class="sp-p">${t.p}</p>`;
  if (t.l) s += `<ul class="sp-list">${t.l.map(x => `<li>${x}</li>`).join("")}</ul>`;
  if (t.u) s += `<div class="sp-ex"><ul class="sp-list">${t.u.map(x => `<li>${x}</li>`).join("")}</ul></div>`;
  return s;
}

export function kinoErwachenPage() {
  const nav = FILME.map((f, i) => `<a class="ab-chip" href="javascript:void(0)" onclick="document.getElementById('ke-${i + 1}').scrollIntoView({behavior:'smooth'})" style="--tc:${FARBEN[i]};"><span class="ab-chip__n">${i + 1}</span><span class="ab-chip__m">${f.titel.split(":")[0]}</span></a>`).join("");
  const kacheln = FILME.map((f, i) => `
    <section class="sp-tile" id="ke-${i + 1}" style="--tc:${FARBEN[i]};">
      <div class="sp-tile__head"><span class="sp-tile__num">${i + 1}</span><h2 class="sp-tile__title">${f.titel}</h2></div>
      <p class="sp-p" style="font-style:italic;color:var(--muted);margin-top:-.3rem;">${f.sub}</p>
      <p class="sp-p">${f.intro}</p>
      ${f.teile.map(teilHtml).join("")}
      <p class="sp-top"><a href="javascript:void(0)" onclick="document.getElementById('ke-top').scrollIntoView({behavior:'smooth'})">↑ Back to the film selection</a></p>
    </section>`).join("");
  const typen = TYPEN.map((t, i) => `
    <li style="--tc:${TYP_FARBEN[i]};"><strong>${t[0]}</strong><br>
      <em>Core belief:</em> ‘${t[1]}’<br>
      <em>Program line:</em> <code>${t[2]}</code><br>
      ${t[3]}<br>
      <em>The crack in the program:</em> ‘${t[4]}’</li>`).join("");
  return shell(`
    ${pageHeader("praxistipps-heilpraktiker")}
    <section class="narrow">
      <button class="ghost-link" data-route="praxistipps-heilpraktiker" style="margin-bottom:1rem;">← Back to Practical Tips</button>
      <p class="eyebrow">Tools · Practical Tips from the Naturopath</p>
      <h1 class="h1--tip">Red Pill, Blue Avatar: What The Matrix, Avatar, Inception and The Game Reveal About the Enneagram Fixation</h1>
      <p class="lead-small">Why do millions of people watch films in which, at bottom, a man finds out that he is not who he thought he was? Because they tell of something everyone knows: the moment when one's own program briefly becomes visible.</p>

      <div class="psycho-img-wrap" style="margin-top:1rem;">
        <img src="${IMG}" alt="Collage: Neo from The Matrix among pods, a blue Na'vi and a pilot in a pod, a spinning top on the floor, a man at the edge of a skyscraper, at the centre a person with closed eyes and a glowing heart, plus masks, nine coloured circles and meditators at sunset." class="psycho-img" loading="lazy" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.6rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">Introduction: The Moment of Briefly Waking Up</h2>
        <p class="vb-intro">Almost everyone knows it. In the middle of an argument you hear yourself say a sentence you heard from your parents as a child and never wanted to say. Or you notice, in the middle of a conversation, that you have been nodding for minutes. For the blink of an eye you stand beside yourself and watch.</p>
        <p class="vb-intro" style="margin-top:1rem;">Cinema stretches exactly this blink to two hours. Neo in ‘The Matrix’, Jake in ‘Avatar’, Cobb in ‘Inception’ and Nicholas in ‘The Game’ each experience, in their own way, that the world in which they felt safe is a construct. That things explode, float and fall along the way helps the entertainment value. The fascination comes from another layer: here is told what wisdom teachings have described for millennia, the identification with something one has but is not.</p>
        <p class="vb-intro" style="margin-top:1rem;">In the language of Dr. <a href="#claudio-naranjo-lehrer">Claudio Naranjo</a> and Oscar Ichazo, the <strong>fixation</strong> is the mental side of the Enneagram pattern, the passion its felt side. Both usually run unexamined. This tip follows the four films and asks each time: what does the image say about my own operating system, and what can be done with it in everyday life?</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">The Basic Idea: I Have, but I Am Not</h2>
        <p class="vb-intro">In everyday life, consciousness merges with what it perceives: ‘I have fear’ becomes ‘I am anxious’, ‘I have a thought’ becomes ‘That's just how I am’. Advaita Vedanta, Ramana Maharshi and Christian mysticism have questioned this confusion for a long time. The well-known saying to be in the world but not of the world goes back to John 17, where this very attitude is at issue.</p>
        <p class="vb-intro" style="margin-top:1rem;">For the Enneagram this means: the pattern is an operating system, not a being. It is remarkably capable and has helped many people through childhood. Its harm arises only when it is equated with the person. The order matters: only whoever recognizes a pattern can use it instead of being used by it.</p>
      </div>

      <div id="ke-top" class="ab-nav" role="navigation" aria-label="The films" style="margin-top:1.6rem;">${nav}</div>
      ${kacheln}

      <div class="vb-section" style="max-width:100%;margin-top:1.8rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">The Nine Matrix Programs</h2>
        <p class="vb-intro">Each fixation builds its own mini-matrix. The cards below show how a program thinks, how it could be read as a ‘program line’, and which sentence marks the crack in the program. The program line is a deliberately pointed joke. No human consists of a single line, and anyone can show parts of several patterns. What is meant are patterns one has, and not the person one is.</p>
        <ul class="sp-typen">${typen}</ul>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.8rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">Three Steps from Autopilot to Observer</h2>
        <ul class="sp-typen">
          <li style="--tc:#a2483a;"><strong>1. Identification (the sleep)</strong><br>Consciousness is stuck in survival mode. One reacts, without distance between stimulus and response.</li>
          <li style="--tc:#c9a84c;"><strong>2. The crack</strong><br>A crisis, a conversation, a film or honest engagement with one's own psychology shows: the view of things is a construct. The spoon bends.</li>
          <li style="--tc:#607468;"><strong>3. The observer (awakening)</strong><br>A stable meta-perspective emerges. One sees the programs without fighting them and can decide from depth whether to follow them.</li>
        </ul>
      </div>

      <div class="sp-tile" style="--tc:#c9a84c;margin-top:1.8rem;">
        <div class="sp-tile__head"><span class="sp-tile__num">✦</span><h2 class="sp-tile__title">The Exercise: The Totem Moment</h2></div>
        <p class="sp-p">As Cobb needs his top, a small signal helps to notice the pattern in everyday life. Each use takes a few seconds.</p>
        <div class="sp-ex"><ul class="sp-list">
          <li>Choose a totem: a ring, a coin, a stone in the pocket, or failing that a particular hand movement.</li>
          <li>Name the typical trigger of one's own pattern, such as the urge to correct, to help, to shine, to withdraw or to secure oneself.</li>
          <li>When the signal appears, touch the totem and say inwardly: ‘I have this pattern. I am not the program.’</li>
          <li>Take three calm breaths and feel where in the body the pattern sits.</li>
          <li>Only then decide whether to follow the impulse. The pattern need not be fought; it just must no longer take the lead unnoticed.</li>
        </ul></div>
        <h3 class="sp-h3">The Cinema Test</h3>
        <p class="sp-p">At the next film the same exercise can be done with different eyes. Three questions are worth watching for.</p>
        <div class="sp-ex"><ul class="sp-list">
          <li>Where does the main character take their role for their being?</li>
          <li>Which moment is the crack at which the program becomes briefly visible?</li>
          <li>What is the character's totem that helps them tell pattern from reality?</li>
        </ul></div>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:2rem;background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">Summary: From Autopilot to Observer</h2>
        <p class="vb-intro" style="margin-bottom:0;">The Matrix shows the operating system, Avatar the pilot in the pod, Inception the totem as a touchstone and The Game the shock therapy one should wish on nobody. Long before cinema, Plato's cave, the mystics and Dante told the same story. For the Enneagram a calm thought follows: the pattern is a tool one can live well with for a long time. Whoever recognizes it need not get rid of it but gains something larger than any fixation, namely the possibility of pausing briefly between stimulus and response.</p>
      </div>

      <p style="font-size:.85rem;color:var(--muted);margin:1.4rem 0 0;">This tip does not replace medical or therapeutic treatment. The film images are food for thought, not statements about reality. Anyone who feels that the world seems unreal or as if behind glass, or who suffers from persistent anxiety or low mood, should seek medical or therapeutic help instead of deepening such images alone. Crises should never be brought about deliberately, as happens in the film.</p>

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
            ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
            <div style="margin-top:.8rem;">${bookTip("du-bist-nicht-dein-zweifel", "Recognizing and letting go of core beliefs – a guide to inner freedom for all 9 types.", "Du bist nicht dein Zweifel")}</div>
            <div style="margin-top:.8rem;">${bookTip("der-raum-hinter-allem", "An exploration of consciousness beyond thought – on the silent space that lies behind all experience.", "Der Raum hinter allem")}</div>
            <div style="margin-top:.8rem;">${bookTip("meta-intelligenz", "Meta-Intelligence – the intelligence that unites all other intelligences and unlocks the full potential of consciousness.", "Meta-Intelligence")}</div>
          </div>
        </details>
      </div>

      ${relatedLinks([
        {route:"praxistipps-heilpraktiker", label:"All Practical Tips"},
        {route:"praxistipps-heilpraktiker/ich-illusion", label:"Who's Really Steering Here? – The Gentle Way Out of the Illusion of Self"},
        {route:"praxistipps-heilpraktiker/turiya-enneagramm", label:"The Observer Behind the Pattern – The Enneagram and the Turiya State"},
        {route:"praxistipps-heilpraktiker/ende-der-suche", label:"When the Search Falls Silent: The End of the Search"},
        {route:"spirituelles-enneagramm", label:"The Spiritual Enneagram: Psychology, Spirituality, or Both?"},
        {route:"beruehmte-keanu-reeves", label:"Portrait: Keanu Reeves (SX9w1)"},
        {route:"beruehmte-michael-douglas", label:"Portrait: Michael Douglas (SO1w9)"},
      ])}
    </section>
  `);
}
