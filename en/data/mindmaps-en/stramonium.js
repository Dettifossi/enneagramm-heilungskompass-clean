const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

// Single rubrics of Stramonium (Type 5), from the author's »Homöopathische Arzneimittellehre der Single-Rubriken aus dem Geist-/Gemütsbereich«
// [branch id, rubric, 1 = main delusion]
const ITEMS = [
  ["sprechen", "Activity, mental - disordered", 0],
  ["furcht", "Looked at, being - avoids the looks of others", 0],
  ["furcht", "Anxiety - motion, from - cannot stop, if he does not stop motion at once", 0],
  ["furcht", "Anxiety - tunnels, when passing through", 0],
  ["sprechen", "Aphasia - strains for a long time before a word is brought out", 0],
  ["sprechen", "Abusive, insulting - without cause", 0],
  ["sprechen", "Abusive, insulting - children - weeping, with", 0],
  ["sprechen", "Abusive, insulting - tearful mood, in", 0],
  ["sprechen", "Prayer - piety, nocturnal", 0],
  ["sprechen", "Prayer - menses, during", 0],
  ["delirium", "Unconsciousness - starts up wildly, but cannot keep eyes open", 0],
  ["gesten", "Looking - sideways", 0],
  ["delirium", "Delirium - alternating with - convulsions, tetanic", 0],
  ["delirium", "Delirium - alternating with - tetanic convulsions, lies on back, knees and thighs bent, hands folded", 0],
  ["delirium", "Delirium - bed, creeps about in", 0],
  ["delirium", "Delirium - motions - peculiar, strange, moves continually from one place to another", 0],
  ["delirium", "Delirium - motions - rhythmic", 0],
  ["delirium", "Delirium - staring at one point - wrinkled face, with", 0],
  ["delirium", "Delirium - face - play of muscles, with constant", 0],
  ["delirium", "Delirium - cheerful, gay - alternating with - laughing", 0],
  ["delirium", "Delirium - cheerful, gay - alternating with - whistling", 0],
  ["delirium", "Delirium - cheerful, gay - alternating with - singing", 0],
  ["delirium", "Delirium - irrational actions and thoughts", 0],
  ["delirium", "Delirium - menses, before - suppressed menses, in", 0],
  ["delirium", "Delirium - afternoon - 16 - 0 h", 0],
  ["delirium", "Delirium - horses, talks of", 0],
  ["delirium", "Delirium - shy, hides", 0],
  ["delirium", "Delirium - talks to objects, speaks to objects", 0],
  ["delirium", "Delirium - stupid", 0],
  ["delirium", "Delirium tremens - delusions, with - night", 0],
  ["delirium", "Delirium tremens - tongue - trembling of tongue, with", 0],
  ["zorn", "Jealousy - accuses - wife of infidelity", 0],
  ["delirium", "Distances - exaggerated - runs against objects which seem distant", 0],
  ["sprechen", "Recognizes - not, recognizes - talks, does not recognize the person to whom he", 0],
  ["zorn", "Excitement, excitable - alternating with - convulsions", 0],
  ["furcht", "Frightened, easily - waking, on - horrified, beside himself, recognizes no one, screams, clings to bystanders", 0],
  ["furcht", "Frightened, easily - delusions, from", 0],
  ["sprechen", "Mistakes, makes - words, uses wrong - delirium tremens, in", 0],
  ["gesten", "Catching flies, tries to", 0],
  ["furcht", "Escape, attempts to - puerperal mania, in", 0],
  ["furcht", "Escape, attempts to - screaming, with", 0],
  ["lachen", "Cheerful, gay - alternating with - groaning and laughing", 0],
  ["lachen", "Cheerful, gay - chorea, before, with weeping", 0],
  ["lachen", "Cheerful, gay - brain diseases, in", 0],
  ["lachen", "Cheerful, gay - irritability, after", 0],
  ["sprechen", "Piety, nocturnal", 0],
  ["gesten", "Fills his pockets with all sorts of things", 0],
  ["furcht", "Fear - everything, constant fear of - measles do not come out, and the", 0],
  ["furcht", "Fear - looking - sight of the first thing he sees, at the", 0],
  ["furcht", "Fear - suffocation, of - plastic bridge was inserted by the dentist, after a", 0],
  ["furcht", "Fear - roasted, of being", 0],
  ["furcht", "Fear - devoured, of being", 0],
  ["furcht", "Fear - dogs, of - large dogs, of", 0],
  ["furcht", "Fear - imbecility, of", 0],
  ["furcht", "Fear - convulsions - with", 0],
  ["furcht", "Fear - processions, parades, at", 0],
  ["furcht", "Fear - evil, of - trifles, from", 0],
  ["furcht", "Fear - falling, of - everything is falling on her, that", 0],
  ["furcht", "Fear - tunnel, of a - without light in the car", 0],
  ["delirium", "Insanity - company, with desire for - light, and", 0],
  ["delirium", "Insanity - torments, with", 0],
  ["delirium", "Insanity - sweat - cold sweat, with", 0],
  ["delirium", "Insanity - roots in the earth with his mouth like a pig", 0],
  ["furcht", "Company - desire for - menses, during", 0],
  ["gesten", "Gestures, makes - waking, on", 0],
  ["gesten", "Gestures, makes - extravagant", 0],
  ["gesten", "Gestures, makes - grasping, reaching for something - quick", 0],
  ["gesten", "Gestures, makes - grasping, reaching for something - mania, in", 0],
  ["gesten", "Gestures, makes - hands, involuntary motions of the - grasping - flames of a fire, at", 0],
  ["gesten", "Gestures, makes - hands, involuntary motions of the - grasping - flies, at", 0],
  ["gesten", "Gestures, makes - hands, involuntary motions of the - grasping - quick", 0],
  ["gesten", "Gestures, makes - hands, involuntary motions of the - opens and shuts the hands", 0],
  ["gesten", "Gestures, makes - hands, involuntary motions of the - rage, in", 0],
  ["gesten", "Gestures, makes - hands, involuntary motions of the - wringing the hands - convulsions, during tetanic", 0],
  ["gesten", "Gestures, makes - shows his wishes by gestures", 0],
  ["lachen", "Indifference, apathy - alternating with - timidity, bashfulness", 0],
  ["lachen", "Violent, vehement - alternating with - laughing", 0],
  ["gesten", "Chasing - objects, imaginary", 0],
  ["gesten", "Claws the face of the father", 0],
  ["gesten", "Creeps, crawls - bed, about in", 0],
  ["gesten", "Kissing - wants to be kissed", 0],
  ["lachen", "Laughing - alternating with - anxiety", 0],
  ["lachen", "Laughing - alternating with - cheerfulness, mirth", 0],
  ["lachen", "Laughing - alternating with - singing", 0],
  ["lachen", "Laughing - actions, at his own", 0],
  ["lachen", "Laughing - rage, with", 0],
  ["lachen", "Laughing - ill humor, in", 0],
  ["lachen", "Laughing - sexual excitement, with", 0],
  ["lachen", "Laughing - speechlessness, with", 0],
  ["lachen", "Laughing - sullen, with", 0],
  ["lachen", "Laughing - fits of rage, with", 0],
  ["gesten", "Reading - desire - fantastic stories, to read", 0],
  ["delirium", "Mania - anxiety, with", 0],
  ["delirium", "Mania - aphonia from excitement, with", 0],
  ["delirium", "Mania - eyes - visions, with", 0],
  ["delirium", "Mania - hands, claps the", 0],
  ["delirium", "Mania - convulsions - in paroxysms, every half hour", 0],
  ["delirium", "Mania - groaning and laughing, with", 0],
  ["lachen", "Mildness - masks violence", 0],
  ["lachen", "Morose - laughing, followed by loud", 0],
  ["gesten", "Naked, wants to be - continued", 0],
  ["delirium", "Rage, fury - alternating with - convulsions", 0],
  ["delirium", "Rage, fury - alternating with - loquacity", 0],
  ["delirium", "Rage, fury - alternating with - death - presentiment of death", 0],
  ["delirium", "Rage, fury - insensible, becomes", 0],
  ["delirium", "Rage, fury - lifting the child, when", 0],
  ["delirium", "Rage, fury - hydrophobia, in", 0],
  ["delirium", "Rage, fury - laughing, with", 0],
  ["delirium", "Rage, fury - cannot stand", 0],
  ["delirium", "Rage, fury - tosses about in bed, makes unintelligible signs", 0],
  ["sprechen", "Religious affections - pious look, in religious mania", 0],
  ["gesten", "Rolling about - bed, in", 0],
  ["gesten", "Restlessness - night - hiccough, with", 0],
  ["zorn", "Striking - boy scratches, claws the face of the father", 0],
  ["sprechen", "Writing - difficulty in expressing his thoughts in writing - fever, in, cannot write letters", 0],
  ["sprechen", "Screaming - cannot scream, though he wishes to", 0],
  ["sprechen", "Screaming - sleep, in - hiccough, with", 0],
  ["sprechen", "Screaming - day and night", 0],
  ["lachen", "Timidity, bashfulness - alternating with - indifference", 0],
  ["lachen", "Sighing - throat, with grasping at the", 0],
  ["lachen", "Sighing - menses, after", 0],
  ["sprechen", "Sexual desire, sexual behavior - lascivious - menses, before", 0],
  ["lachen", "Singing - alternating with - weeping - laughing, and", 0],
  ["lachen", "Singing - menses - during", 0],
  ["lachen", "Singing - Lord's Prayer in Latin", 0],
  ["weiteres", "Sitting - inclination to sit - gaze on the floor, with", 0],
  ["sprechen", "Speech - earnest, serious", 0],
  ["sprechen", "Talking - absent persons, with", 0],
  ["sprechen", "Talking - excessive, loquacity - alternating with - rage", 0],
  ["sprechen", "Talking - wild - chorea, in", 0],
  ["gesten", "Jumping - bed, out of - waking, on", 0],
  ["lachen", "Moaning - grasps the throat and moans", 0],
  ["lachen", "Moaning - menses - after", 0],
  ["lachen", "Moaning - screaming, shrieking, with occasional", 0],
  ["zorn", "Quarrelsome - insensible", 0],
  ["zorn", "Quarrelsome - without cause", 0],
  ["delirium", "Stupor - starts up wildly, but cannot keep eyes open", 0],
  ["zorn", "Suicidal disposition - thoughts of suicide - heat, during", 0],
  ["zorn", "Reproach - ailments from reproach - dilated pupils", 0],
  ["gesten", "Pockets, puts everything into his", 0],
  ["zorn", "Death - presentiment of death - alternating with - rage", 0],
  ["delirium", "Rabies, hydrophobia - delirium, with", 0],
  ["delirium", "Rabies, hydrophobia - fear of water - screams or howls in a high voice", 0],
  ["delirium", "Trance - alternating with - convulsions", 0],
  ["delirium", "Trance - alternating with - spasms, every summer", 0],
  ["delirium", "Trance - convulsions - after", 0],
  ["delirium", "Trance - periodical - summer, every", 0],
  ["furcht", "Sadness - weather - clear weather, in", 0],
  ["furcht", "Consolation - inconsolable - aloneness and darkness agg.", 0],
  ["furcht", "Inconsolable - alone, agg. when", 0],
  ["furcht", "Inconsolable - aloneness and darkness agg.", 0],
  ["furcht", "Inconsolable - darkness, agg. in", 0],
  ["furcht", "Perplexed - fear, with", 0],
  ["furcht", "Behavior disorders - children, in - nightmares, with", 0],
  ["furcht", "Behavior disorders - children, in - fears, with", 0],
  ["furcht", "Longing - sunshine, light and company, for", 0],
  ["delirium", "Crazy feeling - indisposition, with", 0],
  ["delirium", "Confusion of mind - walking - night - midnight, about or after, when", 0],
  ["delirium", "Confusion of mind - night - midnight - after - walking about, when", 0],
  ["delirium", "Enchanted and beside himself, as if", 0],
  ["wildnis", "Delusions - alone, being - wilderness, alone in the", 1],
  ["wahn", "Delusions - bed - falling on her, bed would be", 0],
  ["wahn", "Delusions - bed - folds, bed is full of, completely wrinkled", 0],
  ["wahn", "Delusions - bed - sinking, bed is sinking under her", 0],
  ["wahn", "Delusions - images, phantoms, sees - rising from the earth", 0],
  ["wahn", "Delusions - images, phantoms, sees - beside her, at his side", 0],
  ["tiere", "Delusions - cut in two, as if he were", 0],
  ["tiere", "Delusions - corners - people and animals coming out of corners, sees", 0],
  ["tiere", "Delusions - corners - sees animals and figures coming out of corners - and toward him", 0],
  ["wildnis", "Delusions - husband, neglecting her", 0],
  ["wahn", "Delusions - honest - not honest, he is", 0],
  ["wahn", "Delusions - jealousy - lover hidden behind the stove, wife has a", 0],
  ["wahn", "Delusions - railroad - ear, it is a train or a car in his", 0],
  ["wildnis", "Delusions - murder, he would - strikes friends who come to help him", 0],
  ["tiere", "Delusions - murdered - is being murdered, he - roasted and eaten, he would be", 0],
  ["tiere", "Delusions - falling - he is falling", 0],
  ["tiere", "Delusions - falling - clings and wants to be held", 0],
  ["tiere", "Delusions - bed - sinking, bed is sinking under her - fire - fireballs would roll over the bedclothes", 0],
  ["tiere", "Delusions - fire, visions of - room is on fire", 0],
  ["wahn", "Delusions - fleeing from imaginary things", 0],
  ["wildnis", "Delusions - joy - nothing can give her any joy", 0],
  ["wildnis", "Delusions - friend - never saw, he has never seen his friends - walking, after", 0],
  ["wahn", "Delusions - cemetery, visits - dances in a cemetery", 0],
  ["wahn", "Delusions - feet - hardly touch the ground - separated from the body, are", 0],
  ["tiere", "Delusions - fowls, sees", 0],
  ["tiere", "Delusions - devoured - by animals, is devoured", 0],
  ["wahn", "Delusions - objects, in regard to - flight from objects", 0],
  ["wahn", "Delusions - faces, sees - elongated", 0],
  ["tiere", "Delusions - figures, sees - corners, coming out of", 0],
  ["wahn", "Delusions - limbs - has no limbs", 0],
  ["wahn", "Delusions - God - he is God, then again the devil", 0],
  ["wahn", "Delusions - grasping - persons, at imaginary apparitions", 0],
  ["wahn", "Delusions - hand, something takes her - separated from the body", 0],
  ["tiere", "Delusions - house full of people - surrounded, is", 0],
  ["tiere", "Delusions - hangman, visions of a", 0],
  ["wahn", "Delusions - hearing - mania, in", 0],
  ["tiere", "Delusions - dogs - biting, would bite him in the chest", 0],
  ["tiere", "Delusions - dogs - barks at them to make himself understood, other people are dogs, he", 0],
  ["tiere", "Delusions - dogs - sees - attacking him", 0],
  ["wahn", "Delusions - hat is a pair of trousers which he tries to put on", 0],
  ["tiere", "Delusions - rabbits, sees", 0],
  ["wahn", "Delusions - small - things appear small, things - he is very large, and", 0],
  ["wahn", "Delusions - head - disease will break out on the head", 0],
  ["wahn", "Delusions - crawling things, full of", 0],
  ["wahn", "Delusions - lying - crosswise", 0],
  ["wahn", "Delusions - power - diseases, he has power over all", 0],
  ["tiere", "Delusions - people, persons - sees people - seize her, a number of strangers try to", 0],
  ["wahn", "Delusions - new, everything is", 0],
  ["wahn", "Delusions - beautiful - she is beautiful and wishes it", 0],
  ["wahn", "Delusions - side - alive on one side and buried on the other, he is", 0],
  ["wahn", "Delusions - talking - to inanimate objects by name, but does not notice the bystanders, he", 0],
  ["wahn", "Delusions - statue - admired, being, takes the attitude of a statue in order to be", 0],
  ["wahn", "Delusions - wheelwright, to be a", 0],
  ["wahn", "Delusions - position - not suitable, she is for her", 0],
  ["wahn", "Delusions - searching - something, he is searching for", 0],
  ["tiere", "Delusions - animals - corners, suddenly come out of", 0],
  ["tiere", "Delusions - animals - jumping - suddenly out of the ground", 0],
  ["tiere", "Delusions - animals - jumping on", 0],
  ["tiere", "Delusions - vermin and bugs, of", 0],
  ["wildnis", "Delusions - inconsolable, to be - cannot be consoled", 0],
  ["wildnis", "Delusions - neglected - she would be neglected - husband, by her", 0],
  ["wahn", "Delusions - visions, has - sleep, in - restless", 0],
  ["wahn", "Delusions - visions, has - terrible - beside him", 0],
  ["wildnis", "Delusions - wilderness, being in the", 1],
  ["wahn", "Delusions - wonderful - being or wanting to be wonderful", 0],
  ["lachen", "Weeping - darkness, in", 0],
  ["lachen", "Weeping - night - weeps all night, laughs all day", 0],
  ["lachen", "Weeping - involuntary - vinegar amel.", 0],
  ["lachen", "Weeping - whining, whimpering - menses, after", 0],
  ["gesten", "Throws things away - window, out of the", 0],
  ["gesten", "Points at things to indicate his wishes (non-verbal)", 0],
  ["zorn", "Anger - tickled or pinched, when", 0],
  ["zorn", "Anger - kicked or pushed, when", 0],
  ["zorn", "Anger - children, in - lifted up, when", 0]
];

const GRUPPEN = [
  { id: "wildnis", titel: "Delusions: wilderness, aloneness, abandonment", offen: true, text: "The main delusion of the wilderness and the idea of being alone, neglected or inconsolable." },
  { id: "tiere", titel: "Delusions: animals, persecution and threat", text: "Animals from the corners, dogs, being devoured, murder, hangman, fire." },
  { id: "wahn", titel: "Delusions: visions, body and self-image", text: "Visions, figures, separated limbs, size, power, God and devil." },
  { id: "delirium", titel: "Delirium, trance and insanity", text: "Deliria, convulsions, trance, confusion, mania and rage." },
  { id: "furcht", titel: "Fear, fright and darkness", text: "Fear of dogs, tunnels, being devoured, aloneness and darkness." },
  { id: "gesten", titel: "Gestures, grasping and movement", text: "Grasping at flames and flies, creeping, filling the pockets, jumping." },
  { id: "lachen", titel: "Laughing, weeping and singing", text: "The quick alternation of laughing, weeping, cheerfulness and indifference." },
  { id: "sprechen", titel: "Talking, praying and screaming", text: "Aphasia, abusiveness, nocturnal piety, screaming, talking to objects." },
  { id: "zorn", titel: "Anger, jealousy and quarrel", text: "Anger on touch, jealousy, reproach, quarrelsomeness." },
  { id: "weiteres", titel: "Other", text: "Rubrics that fit no branch." },
];

export function stramoniumMindmapPage() {
  const col = "#124fcc";
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
      ${pageHeader("mindmap-stramonium")}
      <div class="page-content">
        <button class="ghost-link" data-route="mindmaps-single-rubriken" style="margin-bottom:1.2rem;">← All mind maps of the single rubrics</button>
        <p class="eyebrow">Knowledge · Single rubrics · Type 5</p>
        <h1 class="section-title">Stramonium: Mind map of the single rubrics</h1>
        <p class="lead-small">Single rubrics are rubrics in which only one remedy is listed. Here are all single rubrics of Stramonium (thorn apple, Jimson weed), the remedy that the Enneagram homeopathy of this Compass assigns to Type 5, ordered by theme.</p>

        <div style="margin:1.4rem 0;padding:1.1rem 1.3rem;border:2px solid ${col};border-radius:14px;background:color-mix(in srgb, ${col} 8%, var(--paper));text-align:center;">
          <div style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--muted);">Type 5 · Stramonium · Main delusion</div>
          <div style="font-size:1.15rem;font-weight:700;color:var(--ink);margin-top:0.3rem;">The wilderness: being alone in the wilderness</div>
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
