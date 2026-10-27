const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

const IMG = "https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/schaubilder/ende-der-suche/ende-der-suche.jpg";
const FARBEN = ["#607468", "#c47f6b", "#c9a84c", "#8a6aa8", "#4f86a8", "#7a8f9e", "#d9a441", "#a2483a", "#8aa06a", "#b5542f", "#3d7a92", "#9a4f9e", "#5a5fa8"];

const EP = [
  { titel: "The subject", intro: "This first episode begins with the central illusion: the belief in a subject, an ‘I’ that experiences and controls everything. Since childhood we are taught that we are someone: a person with a history, memories, parents, successes, failures, wishes and fears. We believe we sit in the middle of events, behind the eyes, looking out at an external world.", teile: [
    { h: "The deception of the observer", p: "But this figure we take for the self is a mental construction. In reality there is no one in the middle who sees or thinks. Seeing simply happens. Hearing simply happens. Thoughts appear without anyone producing them. There is no central authority controlling life. Identification with this imagined observer is the first great illusion." },
    { h: "The analogy of the dream", p: "Life can quite well be compared to a dream: in a dream it seems as if we were a figure who acts and decides. But after waking we see that everything happened by itself in the dream state. Likewise, in the waking state everything happens spontaneously in consciousness. No ‘I’ steers the flow of life." },
    { h: "Exercises for recognising this illusion", u: ["Sit down quietly and observe how sounds, thoughts and sensations arise. Is there an observer who owns them?", "Ask: Where exactly is the boundary between me and the world? Can it really be found?", "Check whether the feeling of ‘I’ ever exists independently of thoughts and sensations."] },
    { h: "Insight and liberation", p: "When it becomes clear that there is no separate subject, an enormous tension falls away. Life needs no controller. It happens by itself – like breathing or the heartbeat. Identification with the imagined observer was the source of fear and narrowness. Without this illusion a space of openness, stillness and immediacy opens up." }] },
  { titel: "The sense of ‘I’", intro: "This second episode is devoted to the subtle but deeply rooted illusion of a personal ‘sense of I’. We all grow up taking it for granted that we are someone – a fixed person with likes, dislikes, memories and plans. But what is this ‘I’ actually?", teile: [
    { h: "The construction of the I", p: "The sense of I works like a junction of thoughts, memories and emotions. It is not a fixed core but rather a process: stories about the past, plans for the future, inner dialogues and evaluations. Together these elements give the impression of a lasting self." },
    { h: "The role of identification", p: "Identification with these stories is the actual trick: when thoughts arise, the feeling automatically appears that they belong to ‘me’. When emotions arise, it seems as if a central person experiences them. But on close inspection thoughts and feelings simply appear – just like clouds in the sky." },
    { h: "Exercises for exploring the sense of I", u: ["Sit quietly and observe: Where exactly can the sense of I be felt in the body?", "When a thought appears such as ‘I have to do something’, ask: Who exactly is this I?", "Let go of the thought ‘I’ for a moment and feel what remains."] },
    { h: "The end of the illusion", p: "When it becomes clear that the sense of I is only a composite phenomenon, a great heaviness falls away. Actions continue, thoughts keep appearing, but without the additional weight of an imaginary person who would have to control or own everything. This insight opens space for freedom, lightness and stillness." }] },
  { titel: "The separate self", intro: "This third episode is devoted to one of the most stubborn illusions: the belief in an independent, separate self. From an early age we learn to divide the world into ‘I’ and ‘the others’. We see ourselves as a centre of thoughts, emotions and experiences – separate from the outside world.", teile: [
    { h: "How separation arises", p: "This apparent separation, however, is not present in direct experience. It arises through language, upbringing and cultural conditioning. As soon as ‘I’ and ‘you’ are said, a clear boundary seems to exist. But on close examination it turns out: perception simply happens, without a fixed observer in the centre." },
    { h: "The illusion of boundaries", p: "We assume that the body forms the boundary between inside and outside. But the body too appears only as a collection of sensations, thoughts and visual impressions – all in consciousness. Where exactly does ‘inside’ begin and ‘outside’ end? This boundary cannot be found in direct experience." },
    { h: "Exercises for exploring the separate self", u: ["Close the eyes and feel the body. Is there a clear line where ‘you’ end and the world begins?", "Observe sounds: do they come from ‘outside’, or do they simply appear in consciousness?", "Notice thoughts such as ‘I feel separate’ – what is the direct experience beyond the thought?"] },
    { h: "The dissolving of separation", p: "When the boundary between self and world is recognised as an illusion, a feeling of openness and connectedness arises. There is no isolated self that has to carry the burden of life. Instead a natural flow of experiences shows itself, without a fixed centre. Peace and freedom arise when this separation is seen through." }] },
  { titel: "Knowledge", intro: "This fourth episode examines the illusion that knowledge comes from an individual self. We are convinced that we ‘possess’ knowledge, that we collect, store and retrieve information when needed. But what if knowledge is not personal at all but simply appears – spontaneously, without control and without an owner?", teile: [
    { h: "The automatic appearing of knowledge", p: "It seems unbelievable, but thoughts, memories and insights arise by themselves. When a question is asked, an answer often appears automatically. No one sits down and consciously constructs it step by step. It appears, just as a sound or an image appears in consciousness." },
    { h: "The illusion of the knower", p: "We assume that there is an ‘I’ that collects, manages and controls knowledge. But on close examination there is only the process of appearing: a thought, then another, a memory, a conclusion. There is no separate knower, just as there is no separate I, no lasting, independent I that ‘owns’ the deeds. Here the Buddhist anatta principle of the so-called non-self is reflected: <em>‘There are actions, deeds, but no actor, no doer.’</em>" },
    { h: "Forms of knowledge", p: "Of course there are different forms of actions, deeds and also of knowledge itself:", l: ["<strong>Visual thoughts:</strong> images in the mind, for example a memory of a face.", "<strong>Verbal thoughts:</strong> words, sentences, inner dialogues.", "<strong>Implicit knowledge:</strong> ‘simple knowing’, for example how to walk or speak without being able to explain it."] },
    { h: "Exercises for exploring knowledge", u: ["Observe how answers appear when someone asks a question. Does that happen actively or simply spontaneously?", "Ask: Who exactly ‘owns’ this knowledge? Can a knower be found?", "Notice moments of not-knowing. Is that unpleasant, or does it open space for clarity?"] },
    { h: "The end of identification with knowledge", p: "When knowledge is no longer regarded as personal property, a great burden falls away. Not everything has to be controlled or understood. Thoughts, insights and memories simply arise, as weather phenomena appear in the sky. This insight undermines the idea of a fixed, knowing I." }] },
  { titel: "Space", intro: "This fifth episode is about the illusion of space and distance. We are convinced that there is a ‘here’ and a ‘there’, separated by measurable distances. But on close inspection it turns out that this distance is a mental construction.", teile: [
    { h: "How space arises", p: "The brain interprets depth and perspective in order to construct a three-dimensional world from two-dimensional sense impressions. We see colours and shapes and put them together into ‘objects in a space’." },
    { h: "The illusion of distance", p: "When these interpretations are questioned, it becomes apparent: experience itself knows no distance. Seeing simply happens. Everything that appears appears in the same field of consciousness – without real separation." },
    { h: "Exercises for exploring space", u: ["Look at an object in the distance and ask: Is it actually ‘out there’, or does it simply appear in seeing?", "Notice the moment before ‘depth’ is interpreted. How does the world feel without the concept of distance?", "Feel the body and the surroundings at the same time. Is there a clear boundary between the two?"] },
    { h: "The disappearing of space", p: "When the concept of distance falls away, only immediate presence remains. Everything feels near, intimate, boundless. The ‘here’ and ‘there’ disappear, and with them the feeling of separateness. What remains is a seamless field of experience, without a centre and without edges." }] },
  { titel: "Solidity", intro: "This sixth episode deals with the illusion of solidity and matter. We believe we live in a world of solid things: tables, walls, bodies. But what we actually experience are sense impressions – colours, sounds, sensations – which the mind assembles into ‘objects’.", teile: [
    { h: "The illusion of matter", p: "We assume that things out there are firm, heavy and solid. But on closer inspection our entire experience consists only of perceptions that come and go. Hardness, weight and texture are qualities of sensation, not properties of an objective world." },
    { h: "Exercises for exploring solidity", u: ["Place a hand on a table. Is a ‘table’ actually felt, or only perceptions of pressure and temperature?", "When looking at an object, ask: Is ‘matter’ really seen, or only colours and shapes in consciousness?", "Explore the boundary between the body and the outside world. Where exactly is it?"] },
    { h: "The dissolving of hardness", p: "When it is recognised that ‘matter’ is only an interpretation, the world loses its heaviness. Everything becomes process-like, flowing, like a dream. The apparent stability of things gives way to a feeling of lightness and openness." },
    { h: "Liberation from heaviness", p: "This insight can feel surprisingly liberating. The world remains as it is – but the mental burden of living in a solid, hard reality falls away. What remains is an immediate, living experience without rigid boundaries." }] },
  { titel: "The doer", intro: "This seventh episode deals with the deeply rooted illusion that there is an ‘I’ that makes decisions, directs actions and controls life. We experience ourselves as doers – but is that really so?", teile: [
    { h: "The illusion of control", p: "As outrageous as it may sound: thoughts, impulses and actions arise spontaneously. Before ‘I decided’ is said, the decision has long been made. The brain produces impulses automatically; the feeling of a conscious agent appears only afterwards." },
    { h: "Life happens by itself", p: "Just as heartbeat, digestion or breathing happen automatically, thoughts, feelings and movements also arise without a central steersman. The ‘I’ is like a commentator who afterwards stakes claims of ownership: ‘I did that.’ But in truth everything happens spontaneously." },
    { h: "Exercises for exploring the doer", u: ["Observe in everyday life: Does the impulse to act arise before the thought ‘I want to do this’ appears?", "Notice moments in which actions simply happen without being consciously planned.", "Ask: Who or what actually moves the body when walking or speaking?"] },
    { h: "Freedom in recognising", p: "When it becomes clear that no one controls life, this can be a great relief. The stress of always having to decide correctly and keep everything under control loses its strength. What remains is a feeling of trust and lightness: life lives itself." }] },
  { titel: "Lack", intro: "This eighth episode examines the illusion that something is missing, that we are incomplete and that we must find fulfilment through external circumstances or possessions.", teile: [
    { h: "The illusion of lack", p: "It is beyond doubt how it is: life itself in its essence is already complete. In direct experience there is only this undivided field of perception and consciousness. But as soon as thinking constructs the idea of an individual ‘I’, the feeling arises that something is missing for this I." },
    { h: "How the search begins", p: "As soon as we believe ourselves to be a limited self in space and time, the search for happiness, peace or love begins – in the future, in other places or through other people. We come to believe we must achieve, acquire or become something in order to be complete." },
    { h: "Forgetting the inner fullness", p: "The more strongly we identify with the sense of I, the more we seem to lose our innate qualities of peace, love and completeness. Instead we chase external things in the hope of filling the feeling of emptiness." },
    { h: "Futile substitute actions", p: "People tirelessly try to compensate for lack through success, possessions, relationships or spiritual achievements. But all of these things are transient. As soon as they disappear, the old feeling of lack returns, and the search begins anew." },
    { h: "Recognising completeness", p: "When the illusion of lack is seen through, the endless search ends. It becomes clear that peace and fulfilment do not lie in the future but are already complete in the immediate present." }] },
  { titel: "Attention", intro: "This ninth episode examines the widespread assumption that there is an ‘I’ that directs attention. We believe we can decide where our attention goes. But is that really so?", teile: [
    { h: "The illusion of directing", p: "Whether one recognises it or not: scenes and impressions simply appear in consciousness – just as in a dream. When we turn our head in a dream, new images appear, but no one ‘directs’ them. In the same way, in the waking state thoughts, sounds and images arise – without an inner helmsman." },
    { h: "Misunderstandings of spiritual traditions", p: "Many spiritual teachings – from Advaita to Dzogchen – speak of consciously directing attention or resting in awareness. But even this idea often presupposes an ‘I’ that directs or does something. Looking at one’s own experience shows that this idea too is part of the same illusion." },
    { h: "Exercises for exploring attention", u: ["Observe in everyday life: Do impressions arise by themselves, or does one ‘choose’ them?", "Notice the moment before a thought appears. Did anyone consciously produce it?", "Feel the body and the sounds of the surroundings at the same time. Is there a director who coordinates both?"] },
    { h: "Attention after awakening", p: "When the illusion of a director disappears, it becomes clear: everything simply appears in consciousness, effortlessly, without control. There is only what is, right now – without anyone steering it. This insight brings deep relaxation and openness." }] },
  { titel: "The mind-body processes", intro: "This tenth episode examines the mind-body processes (mental, emotional, instinctive) as the central instance of the illusion. Without these mind-body processes there would be no stories, no identities, no separation – only immediate presence.", teile: [
    { h: "The mind-body processes as storyteller", p: "And what about these colourful mind-body processes, our inner experience? The mind-body organism is a tireless narrator that creates meanings, forms concepts and interprets experiences. Everything we take for reality is coloured by this mental-emotional-instinctive activity of the human mind." },
    { h: "The ego as a concept", p: "Some spiritual traditions introduce the ‘ego’ as a separate entity that has to be controlled or overcome. The author’s view, however, is that this undertaking is unnecessarily complex and, beyond that, impossible: for what we call the ego is merely thoughts without substance that are believed." },
    { h: "Deception and hypnosis", p: "The mind-body organism acts like a hypnotist: it tells endless stories about the past, the future, me and the others. As long as these stories are believed, they seem real. But on close examination they are only words and images in consciousness." },
    { h: "Exercises for exploring the mind", u: ["Observe thoughts without engaging with their content. Did they come by themselves?", "Ask: Who or what thinks these thoughts? Can a thinker be found?", "Notice the pauses between thoughts. What remains when no thought is there?"] },
    { h: "Clarity beyond the mind", p: "When it is recognised that thoughts simply arise and pass away without anyone controlling them, the mind loses its tyrannical power. A space of clarity, stillness and freedom arises in which thoughts may simply come and go." }] },
  { titel: "Time", intro: "This eleventh episode examines the nature of time and shows that it is ultimately a mental construction. We believe in past, present and future as if they were independent realities. But on close inspection it turns out: time exists only as a thought.", teile: [
    { h: "Past and future are concepts", p: "Everything we know about the past is memory that appears now as thoughts. Everything we expect of the future is imagination that likewise appears now. There is no direct experience of past or future – only thoughts in present consciousness." },
    { h: "The eternal now", p: "It should be stressed once more that there is always only this one now. All experiences happen in the present. Past and future are like stories or maps – useful, but not the landscape itself." },
    { h: "The illusion of linear time", p: "Time is imagined like a line: a beginning, a middle, an end. But that is only a mental model. In reality there is only a succession of impressions, just as scenes appear in a dream without any real ‘time’ between them." },
    { h: "Exercises for exploring time", u: ["Notice in everyday life how thoughts about past and future arise. Are they ever outside the now?", "Sit quietly and notice: When no thought is there, is there time?", "Ask: Where exactly is the past? Where is the future?"] },
    { h: "Freedom beyond time", p: "When it is recognised that time is only a mental construct, a large part of pressure and worry falls away. It becomes clear that life takes place only here and now – never anywhere else, never at any other time." }] },
  { titel: "Awakening and the illusion of enlightenment", intro: "This twelfth episode describes that enlightenment is not the goal of an individual person. It is not the reward for spiritual practice but the recognition that the whole game of life is a dream.", teile: [
    { h: "Waking up as ‘lucid dreaming’", p: "An individual human being cannot find ‘enlightenment’ on the level of being human, but ‘he’ or ‘that which he truly is’ can awaken to a fundamental insight. This process, which usually follows a long course of life as ‘perfectly normal madness’, is in a certain way like a second birth. This waking up or awakening can well be compared to lucid dreaming: suddenly it becomes clear that waking life too is like a dream. The scenes, thoughts and actions continue to appear, but without the belief that they belong to a separate person." },
    { h: "No cause-and-effect relationship", p: "Awakening does not happen as a result of a method or a plan. It simply happens when the illusions are seen through – often unexpectedly, sometimes during intense self-inquiry." },
    { h: "Life after awakening", p: "After awakening life goes on. In Zen it is said so simply: <em>‘Before awakening: chop wood, carry water. After awakening: chop wood, carry water.’</em> Thoughts, actions and decisions still appear, but without the additional weight of a sense of I that has to control or own everything. Life becomes lighter, freer, more spontaneous." },
    { h: "Lucid fire – a practice of questioning", p: "‘Lucid Fire’ is a radical practice in which all assumptions and convictions are questioned. This practice can sometimes lead to a ‘glimpse’ – a brief, clear recognition of reality beyond the I, a ‘flash of reality’ or a short breakthrough of insight into who we truly are beyond the forms of this world. In the Gospel of John (John 17) we find the words of Jesus, where he says in essence several times: <em>‘You are in this world, but not of this world.’</em> Jesus prays there for his disciples and stresses that they continue to live in this world, but that their actual origin, their belonging (<em>re-ligio</em>, binding back) and their standard lie not in the ‘world’ in the purely material or worldly-transient sense but in God’s reality. ‘World’ (Greek <em>kosmos</em>) stands here for the human system of ego, the ‘false king’, power, transience and estrangement from God. The core of the statement can be summarised as follows:", l: ["Physically we live in the midst of this world.", "Spiritually, however, we belong to another dimension, namely to God or – put in secular terms – to a deeper reality beyond the purely material or egocentric.", "Note on the term ‘kosmos’: in the New Testament the term often also means, in a figurative sense, ‘the world of human beings’, often with a moral colouring. Neutrally it means the inhabited earth, critically the world order marked by egoism and the transient and distant from God. In the Gospel of John <em>kosmos</em> mostly does not mean the earth as a physical place but the system of worldliness that stands against God’s reality."] },
    { h: "Peace, love and joy", p: "With awakening the identification with the separate self ends. What remains is a state of natural calm, love and joy that does not have to be made but is simply the essence of life itself." }] },
  { titel: "Suffering", intro: "This thirteenth episode shows that suffering does not arise from external circumstances but from identification with the separate self. When thoughts, feelings and memories are held to be absolutely true, pain and narrowness arise.", teile: [
    { h: "Suffering as forgetting one’s own nature", p: "Even if it cannot really be comprehended from the ego perspective, from which one usually views and interprets one’s own life rather distortedly: our true nature is peace, love and freedom. Suffering begins when consciousness forgets this nature and instead identifies with thoughts and stories. These stories are about ‘me’, my problems, my past and my future." },
    { h: "Two levels of suffering", l: ["<strong>Ordinary suffering:</strong> when thoughts and emotions are taken personally, dissatisfaction arises.", "<strong>Intense suffering:</strong> when thinking circles in endless loops and one is completely fused with memories and worries, life feels like an inner prison."] },
    { h: "How suffering ends", p: "Suffering does not end by eliminating all thoughts or emotions. It ends when it is recognised that we are not the stories of the mind. Thoughts can continue to appear, but they are no longer taken personally." },
    { h: "Freedom in recognising", p: "In time it becomes clear that suffering does not have to be avoided or fought. It loses its power as soon as the feeling of a separate I fades. Then a natural serenity arises, even when life continues to show highs and lows." }] },
];

const SUMMARY = "When it is recognised that peace and fulfilment do not lie in the future but are already the essence of being, the restless search comes to an end. What remains is simple, free being. The I, time, control – all of these are ideas of our well-trained, conditioned mind. When they are seen through, lack and suffering lose their power. What remains is life – more precisely: the unity of life – itself: simple, direct, now – without search, without pressure, quite naturally, without having to achieve anything.";

function teilHtml(t) {
  let s = `<h3 class="sp-h3">${t.h}</h3>`;
  if (t.p) s += `<p class="sp-p">${t.p}</p>`;
  if (t.l) s += `<ul class="sp-list">${t.l.map(x => `<li>${x}</li>`).join("")}</ul>`;
  if (t.u) s += `<div class="sp-ex"><ul class="sp-list">${t.u.map(x => `<li>${x}</li>`).join("")}</ul></div>`;
  return s;
}

export function endeDerSuchePage() {
  const nav = EP.map((e, i) => `<a class="ab-chip" href="javascript:void(0)" onclick="document.getElementById('eds-${i + 1}').scrollIntoView({behavior:'smooth'})" style="--tc:${FARBEN[i]};"><span class="ab-chip__n">${i + 1}</span><span class="ab-chip__m">${e.titel}</span></a>`).join("");
  const sektionen = EP.map((e, i) => `
    <section class="sp-tile" id="eds-${i + 1}" style="--tc:${FARBEN[i]};">
      <div class="sp-tile__head"><span class="sp-tile__num">${i + 1}</span><h2 class="sp-tile__title">Illusion ${i + 1}: ${e.titel}</h2></div>
      <p class="sp-p">${e.intro}</p>
      ${e.teile.map(teilHtml).join("")}
      <p class="sp-top"><a href="javascript:void(0)" onclick="document.getElementById('eds-top').scrollIntoView({behavior:'smooth'})">↑ Back to the selection of illusions</a></p>
    </section>`).join("");
  return shell(`
    ${pageHeader("praxistipps-heilpraktiker")}
    <section class="narrow">
      <button class="ghost-link" data-route="praxistipps-heilpraktiker" style="margin-bottom:1rem;">← Back to Practical Tips</button>
      <p class="eyebrow">Tools · Practical Tips from the Naturopath</p>
      <h1 class="h1--tip">When the Search Falls Silent: Why Nothing Needs to Be Added to Be Complete</h1>
      <p class="lead-small">The end of the search and the 13 illusions of the spiritual seeker: an impulse for self-observation that promises nothing and builds nothing new, but invites you to look at your own experience, here and now, with honesty.</p>

      <div class="psycho-img-wrap" style="margin-top:1rem;">
        <img src="${IMG}" alt="Painting: A grey-haired traveller stands at a mountain lake in the light of the setting sun. Along the path lie the things set aside by the search: books and scrolls, a crown, masks, a mirror, prayer beads, a bell and a mandala." class="psycho-img" loading="lazy" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.6rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">Introduction: Welcome to the search</h2>
        <p class="vb-intro">Many seekers begin their path with the quiet hope that somewhere out there a final answer is waiting – a teaching, a practice, a master who ends all doubt.</p>
        <p class="vb-intro" style="margin-top:1rem;">The author of this reflection, too, was a seeker in this way for decades: he meditated, practised mindfulness, read sacred scriptures and philosophical works, spoke with teachers, withdrew into silence. And yet a subtle restlessness remained. It always seemed as if there were still something to achieve, as if fulfilment lay ahead of him in an imaginary future.</p>
        <p class="vb-intro" style="margin-top:1rem;">Only when this search itself was called into question did something begin to change. For the search always presupposed one thing: that there is a seeker, that something is missing, that a goal must be reached. But what if these basic assumptions are themselves part of the illusion?</p>
        <p class="vb-intro" style="margin-top:1rem;">The opening words make clear:</p>
        <ul class="sp-list">
          <li>This reflection does not point out a new spiritual path.</li>
          <li>It offers no technique, no system, no promises for the future.</li>
          <li>Instead it invites you to look at your own experience, here and now, with radical honesty.</li>
        </ul>
        <p class="vb-intro" style="margin-top:1rem;">It is an invitation to set aside all stories, concepts and convictions for a moment and to see what remains when nothing is added.</p>
        <p class="vb-intro" style="margin-top:1rem;">This is not about belief or blind acceptance. Everything is to be examined – not in books or with teachers, but in one’s own direct experience.</p>
        <p class="vb-intro" style="margin-top:1rem;">In the Enneagram Healing Compass this corresponds to the path from the lower to the higher self described in the article <a href="#spirituelles-enneagramm">The Spiritual Enneagram</a>: whoever sees through their own fixation as a story no longer has to fight it.</p>
      </div>

      <div id="eds-top" class="ab-nav" role="navigation" aria-label="The 13 illusions" style="margin-top:1.6rem;">${nav}</div>
      ${sektionen}

      <div class="vb-section" style="max-width:100%;margin-top:2rem;background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">Summary: The end of the search, or the lightness of being in the now – the power of the present</h2>
        <p class="vb-intro" style="margin-bottom:0;">${SUMMARY}</p>
      </div>

      <p style="font-size:.85rem;color:var(--muted);margin:1.4rem 0 0;">This tip does not replace medical or therapeutic treatment. It is an impulse for self-observation. Anyone suffering from severe emotional distress, persistent low mood or anxiety should seek medical or therapeutic help.</p>

      <div style="margin-top:2rem;">
        <details style="border:1px solid var(--line);border-radius:12px;overflow:hidden;">
          <summary style="display:flex;align-items:center;gap:0.75rem;padding:1rem 1.2rem;cursor:pointer;
                          background:var(--paper);list-style:none;user-select:none;font-weight:700;
                          font-size:0.95rem;color:var(--ink);">
            <span style="font-size:1.2rem;color:var(--copper);">&#9672;</span>
            <span style="flex:1;">Spiritual and further reading by Detlef Rathmer</span>
            <span style="font-size:0.75rem;color:var(--muted);">&#9660;</span>
          </summary>
          <div style="padding:1rem 1.2rem 1.2rem;">
            ${bookTip("sei-still-und-wisse-ich-bin-gott", "A spiritual book on the deepest stillness within us and the experience of transcendence beyond all concepts.", "Sei still und wisse – ich bin Gott!")}
            <div style="margin-top:.8rem;">${bookTip("nichts-und-alles", "A book on the nature of consciousness – between emptiness and fullness, between the nothing and the everything of life.", "Nichts und Alles")}</div>
            <div style="margin-top:.8rem;">${bookTip("der-raum-hinter-allem", "An exploration of consciousness beyond thought – on the silent space that lies behind all experience.", "Der Raum hinter allem")}</div>
            <div style="margin-top:.8rem;">${bookTip("heilung-als-erinnerung", "Healing not as repair, but as remembering what we truly are – a profound look at health and wholeness.", "Heilung als Erinnerung")}</div>
            <div style="margin-top:.8rem;">${bookTip("in-der-tiefe-der-zeit", "A book on consciousness, time and the silent dimension behind all experience.", "In der Tiefe der Zeit")}</div>
            <div style="margin-top:.8rem;">${bookTip("du-bist-nicht-dein-zweifel", "Recognizing and letting go of core beliefs – a guide to inner freedom for all 9 types.", "Du bist nicht dein Zweifel")}</div>
            <div style="margin-top:.8rem;">${bookTip("hinter-der-leidenschaft", "The nine wounds of the Enneagram – an in-depth analysis of the primal wound behind each passion, with concrete paths of healing for all 9 types.", "Hinter der Leidenschaft")}</div>
            <div style="margin-top:.8rem;">${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}</div>
            <div style="margin-top:.8rem;">${bookTip("leidenschaft-und-heilung", "The 9 passions behind these avoided emotions &ndash; with paths of healing from homeopathic practice.", "Leidenschaft und Heilung")}</div>
            <div style="margin-top:.8rem;">${bookTip("7-wege-zu-dir-selbst-lebenskunst-fuer-den-alltag", "Seven practical steps toward getting closer to yourself – no detours, no sugarcoating, direct and clear.", "7 Wege zu Dir selbst")}</div>
            <div style="margin-top:.8rem;">${bookTip("meta-intelligenz", "Meta-Intelligence – the intelligence that unites all other intelligences and unlocks the full potential of consciousness.", "Meta-Intelligence")}</div>
            <div style="margin-top:.8rem;">${bookTip("meta-intelligenz-das-hoerbuch", "Meta-Intelligence as an audiobook – ideal for on the go or for meditative listening.", "Meta-Intelligenz (Hörbuch)")}</div>
          </div>
        </details>
      </div>

      ${relatedLinks([
        {route:"praxistipps-heilpraktiker", label:"All Practical Tips"},
        {route:"spirituelles-enneagramm", label:"The Spiritual Enneagram: Psychology, Spirituality or Both?"},
        {route:"praxistipps-heilpraktiker/das-ewige-ich-bin", label:"The Eternal &lsquo;I Am&rsquo;: The Enneagram Healing Compass Beyond Fixation"},
        {route:"praxistipps-heilpraktiker/ich-illusion", label:"Who&rsquo;s Really Steering Here? – The Gentle Way Out of the Illusion of Self"},
        {route:"praxistipps-heilpraktiker/dein-wille-geschehe", label:"&lsquo;Thy Will Be Done&rsquo;: Surrender Instead of Ego-Will"},
        {route:"tugenden-enneagramm", label:"The Virtues in the Enneagram"},
        {route:"spirituelle-uebungen", label:"Spiritual Exercises"},
      ])}
    </section>
  `);
}
