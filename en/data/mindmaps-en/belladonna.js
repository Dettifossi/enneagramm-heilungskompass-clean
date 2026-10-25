const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

// Single rubrics of Belladonna (Type 7), from the author's »Homöopathische Arzneimittellehre der Single-Rubriken aus dem Geist-/Gemütsbereich«
// [branch id, rubric, 1 = main delusion]
const ITEMS = [
  ["zorn", "Anxiety - alternating with - mania", 0],
  ["zorn", "Anxiety - alternating with - rage", 0],
  ["zorn", "Anxiety - pressure on chest, with - chest, in", 0],
  ["zorn", "Anxiety - flying away, as if she must, finds peace nowhere", 0],
  ["zorn", "Anguish - noon", 0],
  ["zorn", "Anguish - weeping, with", 0],
  ["aufmerksam", "Decorous, mannerly, moral (S)", 0],
  ["aufmerksam", "Attention - demands excessively (= exaggerated, immoderate) (S)", 0],
  ["aufmerksam", "Attention - demands special (S)", 0],
  ["zorn", "Biting, desire to - night", 0],
  ["zorn", "Biting, desire to - everything", 0],
  ["zorn", "Biting, desire to - children, in", 0],
  ["delirium", "Stupefaction - congestion of blood to head, from", 0],
  ["weiteres", "Ailments from - love, disappointed - excitement, with general", 0],
  ["aufmerksam", "Possessive (S)", 0],
  ["zorn", "Praying - to be killed", 0],
  ["delirium", "Unconsciousness - stomach, with complaints of the", 0],
  ["delirium", "Delirium - alternating with - lamenting, bemoaning", 0],
  ["delirium", "Delirium - arms - fumbles with the arms", 0],
  ["delirium", "Delirium - arms stretched out - throws the arms about", 0],
  ["delirium", "Delirium - face - livid", 0],
  ["delirium", "Delirium - face, with distorted - livid", 0],
  ["delirium", "Delirium - grimaces, with", 0],
  ["delirium", "Delirium - dogs, talks of", 0],
  ["delirium", "Delirium - carotids, with pulsating", 0],
  ["delirium", "Delirium - climbs on walls in delirium", 0],
  ["delirium", "Delirium - lips, as if speaking, moves the", 0],
  ["delirium", "Delirium - mouth, puts stones into the - moves the lips as if speaking", 0],
  ["delirium", "Delirium - terror, with an expression of", 0],
  ["delirium", "Delirium - exaggerated speech, with", 0],
  ["delirium", "Delirium - urinating - past the pot, urinates", 0],
  ["delirium", "Delirium - urinating, tries to urinate on the floor - beside the basin", 0],
  ["delirium", "Delirium - grinding teeth, with", 0],
  ["sprechen", "Sensitive, oversensitive - alternating with - indifference", 0],
  ["sprechen", "Sensitive, oversensitive - noise, to - voices, to - own voice", 0],
  ["sprechen", "Excitement, excitable - eating - amel.", 0],
  ["sprechen", "Eating - cannot eat with a spoon", 0],
  ["zorn", "Escape, attempts to - street, into the - gesticulating and dancing in shirts, they", 0],
  ["aufmerksam", "Peace - obtains, after sleep he obtains (S)", 0],
  ["tanz", "Cheerful, gay - alternating with - dancing", 0],
  ["zorn", "Fear - imaginary - animals, of", 0],
  ["zorn", "Fear - suffocation, of - swallow, with desire to", 0],
  ["zorn", "Fear - waking, on - under the bed, of something", 0],
  ["zorn", "Fear - gallows, of", 0],
  ["zorn", "Fear - approaching, of - others, of - starting, with", 0],
  ["zorn", "Fear - persons standing nearby, of", 0],
  ["zorn", "Fear - springs - touch, on", 0],
  ["zorn", "Fear - animals, of - black", 0],
  ["zorn", "Fear - bystanders, of", 0],
  ["zorn", "Fear - decay, his body will", 0],
  ["zorn", "Fear - wolves, of", 0],
  ["sprechen", "Thoughts - vanishing of thoughts - headache, with", 0],
  ["sprechen", "Thoughts - wandering - night", 0],
  ["aufmerksam", "Feeling - sometimes well, sometimes sick (S)", 0],
  ["aufmerksam", "Feeling - well - he is well (S)", 0],
  ["delirium", "Insanity - cold, after catching", 0],
  ["delirium", "Insanity - gesticulating, with", 0],
  ["delirium", "Insanity - dancing, with - undressing, and", 0],
  ["delirium", "Insanity - throws stones", 0],
  ["delirium", "Insanity - tongue - protruding the tongue and clucking, with distortion of the face", 0],
  ["delirium", "Mental symptoms - moon phases agg.", 0],
  ["sprechen", "Gestures, makes - grasping, reaching for something - picking at bedclothes - searching, as if looking for something lost", 0],
  ["sprechen", "Gestures, makes - hands, involuntary motions of the - pouring, as if pouring something from one hand into the other", 0],
  ["sprechen", "Gestures, makes - hands, involuntary motions of the - hasty", 0],
  ["sprechen", "Gestures, makes - hands, involuntary motions of the - drinking, as if", 0],
  ["sprechen", "Gestures, makes - convulsive - drinks, at the sight of", 0],
  ["sprechen", "Gestures, makes - pulls the bystanders by the hair", 0],
  ["sprechen", "Indifference, apathy - alternating with - sensitiveness", 0],
  ["sprechen", "Grimaces, makes - speaking, when", 0],
  ["weiteres", "Violent, vehement - sick, when", 0],
  ["delirium", "Impulse, morbid - run, to - fright, after", 0],
  ["tanz", "Lamenting, bemoaning - alternating with - delirium", 0],
  ["delirium", "Coma - throat, with rattling in", 0],
  ["delirium", "Coma - skin - heat of skin, with", 0],
  ["aufmerksam", "Tastes everything", 0],
  ["tanz", "Croaking - sleep, in", 0],
  ["tanz", "Smiling - convulsions, before", 0],
  ["tanz", "Smiling - sardonic", 0],
  ["tanz", "Laughing - angry", 0],
  ["tanz", "Laughing - grinning", 0],
  ["tanz", "Laughing - annoying", 0],
  ["tanz", "Laughing - dream, in", 0],
  ["tanz", "Runs about rapidly - objects, runs against", 0],
  ["tanz", "Runs about rapidly - shirt, in", 0],
  ["sprechen", "Weary of life - walking in open air, while", 0],
  ["delirium", "Mania - alternating with - disgust", 0],
  ["delirium", "Mania - scratches himself", 0],
  ["delirium", "Mania - jumps over chairs and tables", 0],
  ["delirium", "Mania - spits on bystanders and bites them", 0],
  ["delirium", "Mania - eyes - open, staring eyes, with", 0],
  ["delirium", "Mania - eyes - immovable eyes, with", 0],
  ["aufmerksam", "Mannerly, moral, decorous (S)", 0],
  ["aufmerksam", "Moral feeling, want of - weeping, with", 0],
  ["sprechen", "Muttering - confused", 0],
  ["tanz", "Morose - alternating with - weeping", 0],
  ["sprechen", "Music - aversion to - children, in - infants, in - quieted, when the child is", 0],
  ["sprechen", "Fancies - exaggerating, high-flying, castles in the air - business, about", 0],
  ["tanz", "Quacking - sleep, in", 0],
  ["zorn", "Anguish - noon", 0],
  ["zorn", "Anguish - weeping, with", 0],
  ["zorn", "Rage, fury - alternating with - anxiety", 0],
  ["zorn", "Rage, fury - alternating with - fear", 0],
  ["zorn", "Rage, fury - alternating with - death - desires to die", 0],
  ["zorn", "Rage, fury - childbirth, during", 0],
  ["zorn", "Rage, fury - does not recognize his relatives", 0],
  ["zorn", "Rage, fury - medicine, from forcible administration of", 0],
  ["zorn", "Rage, fury - staring look, with", 0],
  ["zorn", "Rage, fury - turning around in bed, with", 0],
  ["zorn", "Rage, fury - pulls the bystanders by the hair", 0],
  ["aufmerksam", "Wants rest, wants to be at rest - rest, but no quiet / peace, desire for (S)", 0],
  ["sprechen", "Restlessness - drinks, at the sight of", 0],
  ["sprechen", "Restlessness - children, in - brain mostly developed", 0],
  ["zorn", "Striking - himself - abdomen, his", 0],
  ["zorn", "Striking - himself - face, his", 0],
  ["tanz", "Screaming - children, in - suddenly - bends backward and screams (appearance of opisthotonos)", 0],
  ["tanz", "Screaming - trembling, with", 0],
  ["sprechen", "Timidity, bashfulness - tongue, with protrusion and clucking of the", 0],
  ["aufmerksam", "Self-respect (S)", 0],
  ["tanz", "Sighing - alternating with dancing and jumping", 0],
  ["tanz", "Singing - alternating with - moaning", 0],
  ["aufmerksam", "Moral, mannerly, decorous (S)", 0],
  ["tanz", "Playing - desire to play - hide and seek, to play", 0],
  ["sprechen", "Speech - delirious - sleep - in", 0],
  ["sprechen", "Speech - incoherent - evening", 0],
  ["sprechen", "Talking - aversion to talking, wants to be silent, taciturn - loquacity, after", 0],
  ["sprechen", "Talking - irrational - fright, from", 0],
  ["sprechen", "Talking - confused - fright, from", 0],
  ["tanz", "Jumping - alternating with - sighing", 0],
  ["tanz", "Jumping - bed, out of - returns constantly to bed, and", 0],
  ["tanz", "Jumping - children, in - chairs, tables and stove, on", 0],
  ["tanz", "Moaning - alternating with - singing, hopping about", 0],
  ["tanz", "Moaning - alternating with - dancing", 0],
  ["tanz", "Stupidity - alternating with - dimness of vision", 0],
  ["tanz", "Moaning - every breath, with", 0],
  ["tanz", "Moaning - erysipelas, in", 0],
  ["tanz", "Moaning - brain diseases, in", 0],
  ["tanz", "Stupidity - laughing, with quiet", 0],
  ["sprechen", "Suicidal disposition - walking in open air, while", 0],
  ["sprechen", "Suicidal disposition - mania, with - leg out of the window to kill himself, already has one", 0],
  ["tanz", "Dancing - alternating with - cheerfulness", 0],
  ["tanz", "Dancing - alternating with - sighing", 0],
  ["tanz", "Dancing - alternating with - moaning", 0],
  ["tanz", "Dancing - alternating with - weeping", 0],
  ["sprechen", "Death - desires death, wants to die - alternating with - rage", 0],
  ["sprechen", "Death - desires death, wants to die - walking in open air, while", 0],
  ["sprechen", "Death - desires death, wants to die - anguish, from", 0],
  ["sprechen", "Death - desires death, wants to die - rage, between attacks of", 0],
  ["delirium", "Rabies, hydrophobia - touch renews the attack", 0],
  ["delirium", "Killing, desire to kill - car, by running people over with a", 0],
  ["aufmerksam", "Exaggerating - problems, exaggerates his - to get attention, to receive maximum (S)", 0],
  ["sprechen", "Pleasure, feeling of - lascivious, voluptuous (sexual) thoughts, only of", 0],
  ["aufmerksam", "Desire - sleep - to find peace (S)", 0],
  ["sprechen", "Crazy feeling - headache, from", 0],
  ["aufmerksam", "Hiding - hides the simulating (= the feigning of illness) (S)", 0],
  ["aufmerksam", "Hides things (= objects)", 0],
  ["aufmerksam", "Hides things (= objects) - attention, hides things to get a high degree of attention (S)", 0],
  ["aufmerksam", "Hides things (= objects) - mildness, hides things by switching to mildness (S)", 0],
  ["aufmerksam", "Vulgar - not (S)", 0],
  ["wahn", "Delusions - pleasant delusions - morning - sleep, after", 0],
  ["wahn", "Delusions - poor, but rich (S)", 0],
  ["wahn", "Delusions - trees - people in fantastic costumes, trees seem to be - afternoon - driving, while", 0],
  ["wahn", "Delusions - touch - everything, he would", 0],
  ["fang", "Delusions - bed - someone - take the bedclothes away, someone would try to", 0],
  ["wahn", "Delusions - bed - swimming", 0],
  ["tiere", "Delusions - bulls, of", 0],
  ["wahn", "Delusions - transparent - head and nose are", 0],
  ["wahn", "Delusions - sensations falsely, represents his", 0],
  ["fang", "Delusions - stabbed - passer-by, he has stabbed a, in the street", 0],
  ["tiere", "Delusions - driving, as if he were - riding on an ox", 0],
  ["wahn", "Delusions - falling - he would - deep", 0],
  ["tiere", "Delusions - fire - home is on fire, his far-away", 0],
  ["tiere", "Delusions - fiery red", 0],
  ["wahn", "Delusions - fiery", 0],
  ["tiere", "Delusions - bats, of", 0],
  ["fang", "Delusions - strangers - snatch at her", 0],
  ["fang", "Delusions - strangers - in the room, seem to be - grasp at her", 0],
  ["fang", "Delusions - gallows with fear, visions of", 0],
  ["fang", "Delusions - captured, he would be", 1],
  ["tiere", "Delusions - objects, brightly colored - glittering", 0],
  ["wahn", "Delusions - noises, hears - bed, under the", 0],
  ["fang", "Delusions - phantoms - burning, in flames", 0],
  ["wahn", "Delusions - healthy, he is - alternating with feeling of extreme sickness (S)", 0],
  ["wahn", "Delusions - gun, uses a stick as a", 0],
  ["tiere", "Delusions - cucumbers on the bed, sees", 0],
  ["tiere", "Delusions - insects, sees - shining", 0],
  ["wahn", "Delusions - juggler, he is a", 0],
  ["tiere", "Delusions - cockroaches, room swarms with", 0],
  ["wahn", "Delusions - head - transparent and spotted brown", 0],
  ["wahn", "Delusions - head - friend protruding from a bottle, sees the head of his", 0],
  ["wahn", "Delusions - body - spotted brown, is", 0],
  ["wahn", "Delusions - body - sinking together, body would be between the thighs", 0],
  ["wahn", "Delusions - sick - free from sickness, he is (S)", 0],
  ["wahn", "Delusions - magician, he is a", 0],
  ["wahn", "Delusions - sometimes well, sometimes sick (S)", 0],
  ["tiere", "Delusions - masks - sees - laughing masks", 0],
  ["tiere", "Delusions - masks - sees - laughing masks - night - bed, in", 0],
  ["wahn", "Delusions - nose - transparent nose, he has a", 0],
  ["wahn", "Delusions - pendulum - vertigo is like the swinging of a pendulum", 0],
  ["fang", "Delusions - policeman - physician is a policeman", 0],
  ["tiere", "Delusions - riding on an ox", 0],
  ["tiere", "Delusions - giants, sees", 0],
  ["fang", "Delusions - collect, tries to collect objects from pictures and walls", 0],
  ["tiere", "Delusions - turtles in the room, sees (large)", 0],
  ["tiere", "Delusions - snakes - crimson snake clings to his neck", 0],
  ["wahn", "Delusions - floating - boat, floating in a", 0],
  ["wahn", "Delusions - floating - air, in the - evening", 0],
  ["tiere", "Delusions - talking with - dead people, with - cemetery, in the", 0],
  ["tiere", "Delusions - talking - dead, with - sister, with his - churchyard, in the", 0],
  ["tiere", "Delusions - steers, of", 0],
  ["tiere", "Delusions - animals - dark colored", 0],
  ["tiere", "Delusions - animals - fire, in", 0],
  ["tiere", "Delusions - animals - crawling - shirt, in the", 0],
  ["tiere", "Delusions - animals - persons are animals - unclean animals", 0],
  ["tiere", "Delusions - animals - wild animals with horns and bushy heads", 0],
  ["tiere", "Delusions - animals, of - persons are animals - unclean", 0],
  ["tiere", "Delusions - animals, of - black animals on walls and on furniture, sees", 0],
  ["tiere", "Delusions - dead - corpse - large yellow corpse would try to share the bed with him - thrown out, and he would be at once", 0],
  ["wahn", "Delusions - dreaming, believes he is dreaming while awake", 0],
  ["wahn", "Delusions - drinking - would drink, he", 0],
  ["wahn", "Delusions - desire - desire is limited to a little attention (S)", 0],
  ["wahn", "Delusions - visions, has - hide, wants to", 0],
  ["fang", "Delusions - room - people, sees - enter and leave and want to take her along, room is full of strange men who", 0],
  ["fang", "Delusions - tongue - tear out, someone would tear out his tongue", 0],
  ["fang", "Delusions - tongue is wooden - tears out the tongue", 0],
  ["tanz", "Weeping - alternating with - anger", 0],
  ["tanz", "Weeping - convulsions - from", 0],
  ["tanz", "Weeping - hiccough, from", 0],
  ["tanz", "Weeping - whining, whimpering - head, with complaints of", 0],
  ["sprechen", "Teeth - extracted, wants a tooth", 0],
  ["sprechen", "Pulling - teeth, at the - herself", 0],
  ["zorn", "Anger - slight anger or only for a moment (S)", 0]
];

const GRUPPEN = [
  { id: "fang", titel: "Delusions: caught, pursued, threatened", offen: true, text: "The main delusion of being captured, strangers, gallows, stabbing, the policeman." },
  { id: "tiere", titel: "Delusions: animals, visions and figures", text: "Animals, giants, masks, the dead, fire and brightly colored things." },
  { id: "wahn", titel: "Delusions: body, health and self-image", text: "Transparent head, magician, juggler, alternating well and sick, floating." },
  { id: "aufmerksam", titel: "Attention, hiding and propriety", text: "Demand for attention, hiding, exaggerating, propriety and self-respect." },
  { id: "delirium", titel: "Delirium, mania and insanity", text: "Deliria, mania with biting and spitting, insanity with dancing and the tongue." },
  { id: "zorn", titel: "Rage, anger and fear", text: "Rage alternating with anxiety, fear of animals, gallows and decay." },
  { id: "tanz", titel: "Dancing, jumping and laughing", text: "Dancing, jumping, singing, moaning and laughing in quick alternation." },
  { id: "sprechen", titel: "Speech, gestures and sensitivity", text: "Confused speech, grimaces, hasty gestures, oversensitivity to noise." },
  { id: "weiteres", titel: "Other", text: "Rubrics that fit no branch." },
];

export function belladonnaMindmapPage() {
  const col = "#d4a800";
  const nach = {};
  ITEMS.forEach(i => { (nach[i[0]] = nach[i[0]] || []).push(i); });
  const pfad = r => {
    const t = r.split(" - ");
    const k = t.shift();
    return `<strong>${k}</strong> ` + t.map(x => `<span class="mm-chev">›</span> ${x}`).join(" ");
  };
  const zweige = GRUPPEN.filter(g => (nach[g.id] || []).length).map(g => `
    <details class="mm-branch" style="border-left:3px solid ${col};" ${g.offen ? "open" : ""}>
      <summary style="cursor:pointer;padding:0.7rem 1rem;list-style:none;">
        <span style="font-weight:700;color:var(--ink);">${g.titel}</span>
        <span style="margin-left:0.5rem;background:color-mix(in srgb, ${col} 15%, var(--paper));color:${col};padding:0.1rem 0.55rem;border-radius:999px;font-size:0.78rem;font-weight:700;">${nach[g.id].length}</span>
        <div style="font-size:0.82rem;color:var(--muted);margin-top:0.15rem;">${g.text}</div>
      </summary>
      <ul style="margin:0.2rem 0 0.9rem 1.2rem;padding:0 1rem 0 0;font-size:0.88rem;line-height:1.55;">
        ${nach[g.id].map(i => `<li style="margin:0.25rem 0;${i[2] ? "background:color-mix(in srgb, " + col + " 14%, transparent);border-radius:6px;padding:0.15rem 0.4rem;" : ""}">${pfad(i[1])}</li>`).join("")}
      </ul>
    </details>`).join("");
  return shell(`
    <div class="page-container">
      ${pageHeader("mindmap-belladonna")}
      <div class="page-content">
        <button class="ghost-link" data-route="mindmaps-single-rubriken" style="margin-bottom:1.2rem;">← All mind maps of the single rubrics</button>
        <p class="eyebrow">Knowledge · Single rubrics · Type 7</p>
        <h1 class="section-title">Belladonna: Mind map of the single rubrics</h1>
        <p class="lead-small">Single rubrics are rubrics in which only one remedy is listed. Here are all single rubrics of Belladonna (deadly nightshade), the remedy that the Enneagram homeopathy of this Compass assigns to Type 7, ordered by theme.</p>

        <div style="margin:1.4rem 0;padding:1.1rem 1.3rem;border:2px solid ${col};border-radius:14px;background:color-mix(in srgb, ${col} 8%, var(--paper));text-align:center;">
          <div style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--muted);">Type 7 · Belladonna · Main delusion</div>
          <div style="font-size:1.15rem;font-weight:700;color:var(--ink);margin-top:0.3rem;">Being caught: he would be captured</div>
          <div style="font-size:0.85rem;color:var(--muted);margin-top:0.3rem;">Below stands everything that is found for this remedy as a single rubric. The branches can be opened and closed.</div>
        </div>

        <div class="mm-tree" style="display:grid;gap:0.7rem;">${zweige}</div>

        <p class="vb-anmerkung" style="margin-top:1.4rem;font-style:italic;">Important for understanding: The page reproduces rubrics from the author&rsquo;s German book &lsquo;Homöopathische Arzneimittellehre der Single-Rubriken aus dem Geist-/Gemütsbereich&rsquo; (homeopathic materia medica of the single rubrics of the mind). The English wording follows the usual repertory phrasing; the German edition is the reference. The page makes no diagnosis, gives no treatment recommendation and makes no statement about effect or healing. In emotional crises it does not replace medical or psychotherapeutic help.</p>
      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("homoeopathische-arzneimittellehre-der-single-rubriken-aus-de", "8,594 single-rubrics of the 500 most important homeopathic remedies – the standard reference work for the Sehgal method.", "Homöopathische Arzneimittellehre der Single-Rubriken")}
      ${bookTip("der-kern-der-heilmittel-the-core-of-the-remedies-gebunden", "The spiritual essence of the 500 most important homeopathic remedies – over 8,500 single-rubrics.", "Der Kern der Remedies")}
      ${bookTip("rathmer-s-repertorium-gebundene-ausgabe", "The world's most comprehensive homeopathic mind repertory – 1568 pages, 20,000 rubrics.", "Rathmer’s Repertorium")}
      ${bookTip("repertorium-der-hervorstechenden-gemuetsrubriken-gebundene-a", "The most prominent mind rubrics compact and annotated – the practical repertory for daily homeopathic practice.", "Repertorium der hervorstechenden Gemütsrubriken")}
      ${bookTip("enneagramm-homoeopathie-band-1", "The foundation of Enneagram-Homeopathy – how personality type and remedy selection are connected, accessible for lay readers as well.", "Enneagramm-Homöopathie – Band 1")}
      ${bookTip("enneagramm-homoeopathie-band-2", "Deepening and expansion: The 27 Subtypes and their individual homeopathic remedies.", "Enneagramm-Homöopathie – Band 2")}
      ${bookTip("lehrbuch-der-enneagramm-homoeopathie-band-1-taschenbuch", "The textbook on Enneagram-Homeopathy – Volume 1: Foundations, types, and remedies.", "Lehrbuch der Enneagramm-Homöopathie – Band 1")}
      ${bookTip("lehrbuch-der-enneagramm-homoeopathie-band-2-taschenbuch", "Volume 2 of the textbook: In-depth remedy assignments for all 27 Subtypes.", "Lehrbuch der Enneagramm-Homöopathie – Band 2")}
      ${bookTip("lehrbuch-der-enneagramm-homoeopathie-band-3-taschenbuch", "Volume 3 of the textbook: The complete system of Enneagram-Homeopathy in practice.", "Lehrbuch der Enneagramm-Homöopathie – Band 3")}
      ${bookTip("die-enneagramm-homoeopathie-unterrichtsmaterial", "The teaching script on Enneagram-Homeopathy – 376 pages of compact learning material for self-study.", "Enneagramm-Homöopathie – Unterrichtsmaterial (376 Seiten)")}
      ${bookTip("das-unterrichtsskript-zur-sehgal-ausbildung-ebook", "The complete teaching script of the Sehgal School – 500 pages for anyone wishing to learn the Sehgal method in depth.", "Unterrichtsskript zur Sehgal-Ausbildung (500 Seiten)")}
      ${relatedLinks([
        {route:"mindmaps-single-rubriken", label:"All mind maps of the single rubrics"},
        {route:"wahnideen-nicht-reale-vorstellungen", label:"Article: Delusions in the Enneagram and in Homeopathy"},
        {route:"nicht-reale-vorstellungen", label:"Chart: Unreal ideas"},
        {route:"enneagramm-homoeopathie", label:"Enneagram & Homeopathy"},
      ])}
    </div>
  `);
}
