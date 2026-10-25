const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

// Single rubrics of Veratrum album (Type 8), from the author's »Homöopathische Arzneimittellehre der Single-Rubriken aus dem Geist-/Gemütsbereich«
// [branch id, rubric, 1 = main delusion]
const ITEMS = [
  ["angst", "Anxiety - rising, after - lying, from", 0],
  ["angst", "Anxiety - eructations - ends with", 0],
  ["angst", "Anxiety - eructations amel. - ends with eructations", 0],
  ["angst", "Anxiety - fear, with - when standing the forehead is covered with cold sweat, with nausea to vomiting", 0],
  ["angst", "Anguish - oppression, with - desire to sit up in bed or jump out of bed, and", 0],
  ["verhalten", "Rising - lying, from", 0],
  ["manie", "Biting, desire to - shoe and swallows the pieces, bites his", 0],
  ["verhalten", "Bed - remain, desire to stay long in bed - sexual excitement, from", 0],
  ["verhalten", "Bed - out of, wants to get - meningitis cerebrospinalis, in", 0],
  ["vortaeuschen", "Blindness, feigns, pretended", 0],
  ["angst", "Brooding - evening", 0],
  ["angst", "Brooding - alternating with - screaming", 0],
  ["manie", "Delirium - cold, with", 0],
  ["manie", "Delirium - lochia, in", 0],
  ["manie", "Delirium - sweat - cold sweat, with", 0],
  ["manie", "Delirium - sweat amel. - cold sweat, with", 0],
  ["manie", "Destructiveness - clothes, of - cuts them up", 0],
  ["angst", "Frightened, easily - chill (chill stage of fever), during", 0],
  ["verhalten", "Escape, attempts to - house, wants to leave the", 0],
  ["manie", "Cursing - night, all night", 0],
  ["manie", "Cursing - night - complains of a dull, stupid feeling, and", 0],
  ["angst", "Fear - apoplexy, of - stool, during", 0],
  ["angst", "Fear - stool - involuntary stool, of - green, in a gush, exhausting", 0],
  ["manie", "Insanity - loss of appetite, with", 0],
  ["manie", "Insanity - face - heat of face, with", 0],
  ["manie", "Gestures, makes - repeats the same actions - cutting paper", 0],
  ["manie", "Gestures, makes - repeats the same actions - piles up objects", 0],
  ["manie", "Gestures, makes - repeats the same actions - tears objects", 0],
  ["verhalten", "Indifference, apathy - perceives nothing", 0],
  ["manie", "Violent, vehement - drives the family out of the house", 0],
  ["angst", "Howling - night, all", 0],
  ["manie", "Haughty, arrogant - menses, before", 0],
  ["manie", "Haughty, arrogant - pregnancy, during", 0],
  ["angst", "Lamenting, bemoaning - evening", 0],
  ["manie", "Coma - eyes - closed eyes, with - one eye closed", 0],
  ["verhalten", "Kissing - puerperal mania, in", 0],
  ["verhalten", "Smiling - never - children, in - girls, in small", 0],
  ["verhalten", "Runs about rapidly - paroxysmal, agg. evening, runs", 0],
  ["verhalten", "Runs about rapidly - night", 0],
  ["manie", "Mania - alternating with - quiet and silence", 0],
  ["manie", "Mania - noise, makes much", 0],
  ["manie", "Mania - constipation, in", 0],
  ["manie", "Mania - pain - from - delirium, with", 0],
  ["manie", "Mania - stamps with the feet", 0],
  ["manie", "Mania - sadness, with", 0],
  ["verhalten", "Muttering - absurd things, mutters", 0],
  ["manie", "Nymphomania - loquacity, with", 0],
  ["religion", "Preaching - religious, psychotic, obsessive preaching", 0],
  ["angst", "Anguish - oppression, with - desire to sit up or jump out of bed", 0],
  ["angst", "Anguish - sweat - cold sweat, with - forehead, on", 0],
  ["manie", "Rage, fury - heat of body, with", 0],
  ["weiteres", "Loquacity - religious subjects, things, about", 0],
  ["religion", "Religious affections - excitement causes convulsions", 0],
  ["religion", "Religious affections - despair with suicidal disposition", 0],
  ["verhalten", "Restlessness - vertigo, with", 0],
  ["verhalten", "Talk, indisposed to, desire to be silent, taciturn - pregnancy, during", 0],
  ["vortaeuschen", "Shameless - childbirth, during", 0],
  ["verhalten", "Screaming - evening agg.", 0],
  ["verhalten", "Screaming - children, in - without cause, without reason", 0],
  ["religion", "Guilt, feeling of - evening - lunch, and after", 0],
  ["verhalten", "Taciturn - coughing, when", 0],
  ["verhalten", "Taciturn - pregnancy, during", 0],
  ["manie", "Sexual desire, sexual behavior - nymphomania, in women - with loquacity", 0],
  ["vortaeuschen", "Simulating - pregnancy", 0],
  ["verhalten", "Singing - exuberant, merry, joyful, cheerful - night", 0],
  ["verhalten", "Talking - faults of others, about the", 0],
  ["manie", "Quarrelsome - night", 0],
  ["religion", "Suicidal disposition - attempts to commit suicide - mania, in", 0],
  ["religion", "Suicidal disposition - despair, from - religious, from", 0],
  ["verhalten", "Dancing - wild - dances wildly about on hearing any noise, must be held", 0],
  ["vortaeuschen", "Deafness, feigned", 0],
  ["angst", "Consolation - inconsolable - misfortune, over imaginary", 0],
  ["angst", "Consolation - inconsolable - misfortune, over imaginary - runs about screaming and bellowing or sits brooding, lamenting and weeping, evening agg.", 0],
  ["verhalten", "Embracing - inanimate objects, even", 0],
  ["angst", "Inconsolable - misfortune, over imaginary", 0],
  ["angst", "Inconsolable - imaginary misfortune, over an, runs about screaming and bellowing, or sits brooding, lamenting and weeping, evening agg.", 0],
  ["verhalten", "Confusion of mind - stooping, when - amel.", 0],
  ["religion", "Despair - menses - before", 0],
  ["religion", "Despair - religious despair of salvation - menses, during suppressed", 0],
  ["vortaeuschen", "Malingering - pregnancy", 0],
  ["vortaeuschen", "Malingering - deafness", 0],
  ["wahn", "Delusions - foreign land, being in a", 0],
  ["wahn", "Delusions - thieves, robbers, of - dreams of robbers, is frightened on waking and believes the dream to be true", 0],
  ["wahn", "Delusions - gone, she has - too far", 0],
  ["wahn", "Delusions - vow - breaking her vow, that she is - must keep it", 0],
  ["wahn", "Delusions - vow - must keep it", 0],
  ["wahn", "Delusions - noises - makes noises with the delusions", 0],
  ["wahn", "Delusions - God - messenger of God, he is a", 0],
  ["wahn", "Delusions - whirling - things - circle, in a", 0],
  ["wahn", "Delusions - heaven, he is in - talk, would talk with God", 0],
  ["wahn", "Delusions - head - motion - inwardly the whole head is in motion", 0],
  ["wahn", "Delusions - disease, he has incurable - deaf and dumb and has cancer, he is", 0],
  ["wahn", "Delusions - prince, is a", 1],
  ["wahn", "Delusions - dirt, eats", 0],
  ["wahn", "Delusions - deaf, he is", 0],
  ["wahn", "Delusions - deaf and dumb, he is", 0],
  ["wahn", "Delusions - labor pains, has or thinks she has pains, she pretends", 0],
  ["wahn", "Delusions - words - remember, cannot remember words", 0],
  ["verhalten", "Wandering - desire to wander - mania, in", 0],
  ["verhalten", "Wandering - desire to wander - pregnancy, during", 0],
  ["manie", "Wildness - noise, from every", 0]
];

const GRUPPEN = [
  { id: "wahn", titel: "Delusions", offen: true, text: "Prince, messenger of God, heaven, vow, deaf-mute, thieves and robbers." },
  { id: "religion", titel: "Religion, preaching and despair", text: "Religious despair, preaching, suicidal disposition from religious despair." },
  { id: "vortaeuschen", titel: "Feigning and simulating", text: "Feigned blindness, deafness and pregnancy." },
  { id: "manie", titel: "Mania, destruction and haughtiness", text: "Mania, rage to destroy, haughtiness, violence, rage." },
  { id: "angst", titel: "Fear, anxiety and inconsolability", text: "Anxiety on rising, fear of apoplexy, inconsolability over imaginary misfortune." },
  { id: "verhalten", titel: "Behavior, speech and movement", text: "Silence, muttering, wandering, dancing, embracing, kissing." },
  { id: "weiteres", titel: "Other", text: "Rubrics that fit no branch." },
];

export function veratrumMindmapPage() {
  const col = "#a00802";
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
      ${pageHeader("mindmap-veratrum")}
      <div class="page-content">
        <button class="ghost-link" data-route="mindmaps-single-rubriken" style="margin-bottom:1.2rem;">← All mind maps of the single rubrics</button>
        <p class="eyebrow">Knowledge · Single rubrics · Type 8</p>
        <h1 class="section-title">Veratrum album: Mind map of the single rubrics</h1>
        <p class="lead-small">Single rubrics are rubrics in which only one remedy is listed. Here are all single rubrics of Veratrum album (white hellebore), the remedy that the Enneagram homeopathy of this Compass assigns to Type 8, ordered by theme.</p>

        <div style="margin:1.4rem 0;padding:1.1rem 1.3rem;border:2px solid ${col};border-radius:14px;background:color-mix(in srgb, ${col} 8%, var(--paper));text-align:center;">
          <div style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--muted);">Type 8 · Veratrum album · Main delusion</div>
          <div style="font-size:1.15rem;font-weight:700;color:var(--ink);margin-top:0.3rem;">The prince: the idea of being a prince, supremacy and power</div>
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
