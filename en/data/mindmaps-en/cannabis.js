const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

// Single rubrics of Cannabis indica (Type 9), from the author's »Homöopathische Arzneimittellehre der Single-Rubriken aus dem Geist-/Gemütsbereich«
// [branch id, rubric, 1 = main delusion]
const ITEMS = [
  ["angst", "Anxiety - menorrhagia, in", 0],
  ["angst", "Unconsciousness - candlelight, from", 0],
  ["angst", "Unconsciousness - music, from - piano music, from hearing", 0],
  ["angst", "Delirium - foreign - countries, talks of", 0],
  ["angst", "Delirium tremens - delusions, with - elephants, of", 0],
  ["sprechen", "Excitement, excitable - headache - before", 0],
  ["geist", "Eccentricity - epileptic attack, before", 0],
  ["angst", "Fear - drowned, of being", 0],
  ["angst", "Fear - coal bucket, of the", 0],
  ["angst", "Fear - floating, during sensation that single limbs would", 0],
  ["angst", "Fear - use the voice, to", 0],
  ["angst", "Fear - real and unreal, of the", 0],
  ["sprechen", "Gestures, makes - involuntary hand motions - rubs the hands together", 0],
  ["geist", "Memory - loss of memory - aphasia, in", 0],
  ["geist", "Memory - weakness of - childhood, for", 0],
  ["geist", "Thoughts - absorbed in - eyes closed, with", 0],
  ["geist", "Clairvoyance - midnight", 0],
  ["geist", "Ideas, abundant - clearness of mind - urination, after", 0],
  ["geist", "Irrational - alternating with - rational behavior", 0],
  ["sprechen", "Laughing - every word, at", 0],
  ["sprechen", "Runs about rapidly - people, when walking, runs against", 0],
  ["geist", "Multiple personality disorder - identity, error of personal - emperor, thinks himself an", 0],
  ["sprechen", "Loquacity - headache - during", 0],
  ["geist", "Writing - letter, does not know how to begin a", 0],
  ["sprechen", "Talking - excessive, loquacity - headache, in - before", 0],
  ["geist", "Stupidity - think or concentrate, cannot - subject, on a", 0],
  ["angst", "Death - sensation of death - chill, during", 0],
  ["geist", "Dream, as if in a - cannot read", 0],
  ["geist", "Dream, as if in a - singing in the ears, with", 0],
  ["geist", "Heedless, careless - surroundings and all people, in regard to the whole", 0],
  ["geist", "Confusion of mind - ecstatic", 0],
  ["koerper", "Delusions - swelling, he would gradually", 0],
  ["wahn", "Delusions - army would pass him, a silent - walking, when", 0],
  ["koerper", "Delusions - expanding - passers-by would expand", 0],
  ["klein", "Delusions - legs - tin can filled with splints, leg is a", 0],
  ["koerper", "Delusions - legs are cut off - long, are too", 0],
  ["raum", "Delusions - ridge, he is on a", 0],
  ["wahn", "Delusions - proof, gives an eloquent", 0],
  ["wahn", "Delusions - beer mug decorated with dragon pictures, he sees a gigantic", 0],
  ["wahn", "Delusions - flowers, of - gigantic flowers, of", 0],
  ["wahn", "Delusions - choir music, hears, he is in the cathedral when he", 0],
  ["wahn", "Delusions - delirious, to become, at night, thinks - believes he is delirious", 0],
  ["koerper", "Delusions - double - sensations present themselves in double form", 0],
  ["koerper", "Delusions - double - being, double - controls the other, one part", 0],
  ["wahn", "Delusions - murdered - he would be murdered - bribed to kill him, people are", 0],
  ["raum", "Delusions - eternity - he is in", 0],
  ["koerper", "Delusions - existence - own existence, doubts his", 0],
  ["koerper", "Delusions - existence - formless existence in immeasurable space", 0],
  ["koerper", "Delusions - existence - two existences, he has", 0],
  ["wahn", "Delusions - coward - people who leave him are cowards", 0],
  ["koerper", "Delusions - fingernails seem as large as plates - sleepiness, with", 0],
  ["klein", "Delusions - bottles - soda water, he is a bottle - runs to and fro, and", 0],
  ["koerper", "Delusions - flying - abyss, he flies from a rock into a dark - going to bed, on", 0],
  ["raum", "Delusions - fluid, surrounded by impenetrable, ethereal", 0],
  ["klein", "Delusions - companions of his youth - are half human, half plants", 0],
  ["klein", "Delusions - spirit, he is a", 0],
  ["klein", "Delusions - vegetable - existence as a vegetable, believes he leads an", 0],
  ["wahn", "Delusions - noises - wagon, hears the noise of a", 0],
  ["wahn", "Delusions - faces, sees - hideous - agreeable, seem", 0],
  ["wahn", "Delusions - faces, sees - ridiculous", 0],
  ["wahn", "Delusions - faces, sees - distinguished people, of", 0],
  ["klein", "Delusions - giraffe, thinks he is a", 0],
  ["wahn", "Delusions - bells ringing, hears - gently ringing bells, hears countless", 0],
  ["wahn", "Delusions - glowworms, of", 0],
  ["klein", "Delusions - gnome, wight, is a", 1],
  ["raum", "Delusions - hall, illusion of a gigantic", 0],
  ["raum", "Delusions - house - moving, the house seems to be", 0],
  ["klein", "Delusions - heavenly body, thinks he is a", 0],
  ["koerper", "Delusions - heat radiating from the epigastrium, he has a tremendous", 0],
  ["koerper", "Delusions - lifted up, she would be - fly, and could", 0],
  ["raum", "Delusions - hell - shadows, of demonic - midnight, at - waking, on", 0],
  ["wahn", "Delusions - hearing - colors, the sound of", 0],
  ["wahn", "Delusions - ichthyosaurus, sees an", 0],
  ["klein", "Delusions - emperor - is an", 0],
  ["wahn", "Delusions - cathedral, he is in a - choirs, on hearing", 0],
  ["koerper", "Delusions - clothing - wrapped in rags, he is", 0],
  ["koerper", "Delusions - clothing - fly away and become planets, the clothes would - undressing, on", 0],
  ["koerper", "Delusions - head - corner of the room, a part of the head would fit into each", 0],
  ["koerper", "Delusions - head - pendulum, the head seems an inverted, swinging", 0],
  ["koerper", "Delusions - body - covered - earth, would cover the whole", 0],
  ["klein", "Delusions - ball transformed, transformed into a cylinder or a", 0],
  ["wahn", "Delusions - sorrow, everyone he meets has a secret", 0],
  ["koerper", "Delusions - longer, things appear - one leg is long", 0],
  ["wahn", "Delusions - moody", 0],
  ["raum", "Delusions - life, in regard to - racing, he would be from one life to another", 0],
  ["raum", "Delusions - life, in regard to - symbols of life, all past events turn on wheels as", 0],
  ["klein", "Delusions - locomotive - he is a locomotive", 0],
  ["wahn", "Delusions - mandarin, took his friend for a Chinese", 0],
  ["wahn", "Delusions - man - veiled man comes out of the wall - walking in the street, when", 0],
  ["klein", "Delusions - marble statue, sensation as if he were a", 0],
  ["raum", "Delusions - walls, falling in - high walls, is surrounded by", 0],
  ["klein", "Delusions - hippopotamus, he is a", 0],
  ["wahn", "Delusions - distress - they are in distress", 0],
  ["wahn", "Delusions - horses, sees - riding", 0],
  ["klein", "Delusions - plant existence, leads a", 0],
  ["raum", "Delusions - square surrounded by houses a hundred stories high, sees an immense", 0],
  ["klein", "Delusions - pump handle, he is a", 0],
  ["raum", "Delusions - space - carried into space, he would be - orbit, and compelled to describe an enormous - lying, when", 0],
  ["wahn", "Delusions - calling - aloud to", 0],
  ["koerper", "Delusions - soot falling from him, as if a rain of", 0],
  ["klein", "Delusions - saw, which darts up and down, he is a gigantic", 0],
  ["wahn", "Delusions - satyrs, visions of dancing", 0],
  ["wahn", "Delusions - screaming, imagines he is", 0],
  ["wahn", "Delusions - dissected, he will be", 0],
  ["wahn", "Delusions - singing, he would", 0],
  ["wahn", "Delusions - soldiers - marching - silently by", 0],
  ["raum", "Delusions - sun - swaying, the sun would be", 0],
  ["klein", "Delusions - log, he is a", 0],
  ["klein", "Delusions - statue - marble statue, he is a", 0],
  ["wahn", "Delusions - die, about to - immediately, one would die - dissected, and will be soon", 0],
  ["raum", "Delusions - stars in his plate, sees", 0],
  ["wahn", "Delusions - voices - own voice sounds strange and seems to echo like thunder", 0],
  ["raum", "Delusions - whirlpool, carried down a, he would a psychic", 0],
  ["wahn", "Delusions - dancing - satyrs and nodding mandarins, dancing", 0],
  ["wahn", "Delusions - Tartars, of a horde of", 0],
  ["klein", "Delusions - inkstand, he is an", 0],
  ["wahn", "Delusions - dead - persons, sees dead - midnight - waking, on", 0],
  ["raum", "Delusions - supernatural, of something", 0],
  ["raum", "Delusions - exaggerated, everything is", 0],
  ["koerper", "Delusions - transformed, he would be - several, peculiar transformations, would undergo", 0],
  ["koerper", "Delusions - enlarged - one leg is longer", 0],
  ["koerper", "Delusions - enlarged - body is - right side", 0],
  ["koerper", "Delusions - enlarged - eyelashes are", 0],
  ["raum", "Delusions - transported - world, into another", 0],
  ["wahn", "Delusions - visions, has - power, of imaginary", 0],
  ["raum", "Delusions - water - blue water, of", 0],
  ["raum", "Delusions - water, of - floods, of", 0],
  ["raum", "Delusions - water - nectar, water is wonderful - drinking, when", 0],
  ["raum", "Delusions - water - inundations, etc.", 0],
  ["wahn", "Delusions - changeable - change suddenly", 0],
  ["koerper", "Delusions - eyelashes lengthened", 0],
  ["wahn", "Delusions - wind howling in the chimney sounds like the roar of a mighty wheel - echo of a thunderclap on a large organ, and like the", 0],
  ["koerper", "Delusions - spine is a barometer", 0],
  ["raum", "Delusions - knowledge, he possessed immeasurable", 0],
  ["raum", "Delusions - clouds - strange clouds settle down on the patient or dance around the sun", 0],
  ["wahn", "Delusions - strange, whimsical", 0],
  ["wahn", "Delusions - worms - vomited matter looks like a heap of worms", 0],
  ["raum", "Delusions - room - walls seem to move together", 0],
  ["raum", "Delusions - room - falling apart, the room would be", 0],
  ["klein", "Delusions - cylinder, thinks he is a", 0],
  ["geist", "Time - passes too slowly, appears longer - seconds seem like an eternity, a few", 0]
];

const GRUPPEN = [
  { id: "klein", titel: "Delusions: gnome, wight and insignificance", offen: true, text: "The gnome and the wight, vegetable, plant existence, spirit, inkstand, small and inanimate things." },
  { id: "koerper", titel: "Delusions: body, size and transformation", text: "Swelling, expanding, long legs, transformation, double existence." },
  { id: "raum", titel: "Delusions: space, time, worlds and water", text: "Outer space, eternity, whirlpool, water, floods, rooms and walls." },
  { id: "wahn", titel: "Delusions: figures, sounds and faces", text: "Faces, satyrs, soldiers, noises, choir music, persecution and murder." },
  { id: "geist", titel: "Thinking, memory and confusion", text: "Clarity of mind, loss of memory, stupidity, confusion, dreamlike state." },
  { id: "sprechen", titel: "Talking, laughing and gestures", text: "Loquacity, laughing at every word, involuntary hand motions." },
  { id: "angst", titel: "Fear, anxiety and delirium", text: "Anxiety, fear of drowning, delirium, unconsciousness, sensation of death." },
];

export function cannabisMindmapPage() {
  const col = "#cc6e00";
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
      ${pageHeader("mindmap-cannabis")}
      <div class="page-content">
        <button class="ghost-link" data-route="mindmaps-single-rubriken" style="margin-bottom:1.2rem;">← All mind maps of the single rubrics</button>
        <p class="eyebrow">Knowledge · Single rubrics · Type 9</p>
        <h1 class="section-title">Cannabis indica: Mind map of the single rubrics</h1>
        <p class="lead-small">Single rubrics are rubrics in which only one remedy is listed. Here are all single rubrics of Cannabis indica (Indian hemp), the remedy that the Enneagram homeopathy of this Compass assigns to Type 9, ordered by theme.</p>

        <div style="margin:1.4rem 0;padding:1.1rem 1.3rem;border:2px solid ${col};border-radius:14px;background:color-mix(in srgb, ${col} 8%, var(--paper));text-align:center;">
          <div style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--muted);">Type 9 · Cannabis indica · Main delusion</div>
          <div style="font-size:1.15rem;font-weight:700;color:var(--ink);margin-top:0.3rem;">The gnome: the idea of being a gnome or wight</div>
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
