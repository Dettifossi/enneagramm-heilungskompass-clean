const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

// Single rubrics of Hyoscyamus niger (Type 2), from the author's »Homöopathische Arzneimittellehre der Single-Rubriken aus dem Geist-/Gemütsbereich«
// [branch id, rubric, 1 = main delusion]
const ITEMS = [
  ["nackt", "Foolish behavior - apes, like", 0],
  ["angst", "Addressed, aversion to being - chill, during", 0],
  ["angst", "Anxiety - breathing amel. - dyspnea, in - cramps in chest, from", 0],
  ["zorn", "Inciting, instigating others", 0],
  ["zorn", "Biting, desire to - people, bites - disturbs, bites anyone who", 0],
  ["verhalten", "Bed - out of, wants to get - chill, during", 0],
  ["verhalten", "Bed - getting out of bed, wants to - chill, during", 0],
  ["delirium", "Delirium - face - pale", 0],
  ["delirium", "Delirium - attacks people with a knife", 0],
  ["delirium", "Delirium - wedding, prepares for a", 0],
  ["delirium", "Delirium - wraps himself in fur in summer", 0],
  ["delirium", "Delirium - embraces the stove and wants to climb up it as up a tree", 0],
  ["delirium", "Delirium - wrong, from imaginary", 0],
  ["delirium", "Delirium - twitching of muscles, with", 0],
  ["delirium", "Delirium - jerking, with - angular movements, with", 0],
  ["delirium", "Delirium tremens - must be restrained", 0],
  ["liebe", "Jealousy - revenge, wants", 0],
  ["angst", "Escape, attempts to - surrounded and trapped, as if by people", 0],
  ["angst", "Fear - betrayed, of being", 0],
  ["angst", "Fear - medicine - poisoned, that medicine is", 0],
  ["angst", "Fear - sudden - voice, with complaints of the", 0],
  ["angst", "Fear - drinking, of - offered drinks, of", 0],
  ["liebe", "Thoughts - marriage, of - masturbation, during", 0],
  ["liebe", "Thoughts - rush of thoughts - half-sleep, in", 0],
  ["delirium", "Insanity - erotic - jealousy, with", 0],
  ["delirium", "Insanity - talking, with wild", 0],
  ["delirium", "Insanity - wedding, prepares for his", 0],
  ["delirium", "Insanity - quarrelsome, with", 0],
  ["delirium", "Insanity - gropes about, not knowing where", 0],
  ["verhalten", "Gestures, makes - intoxicated, as if", 0],
  ["verhalten", "Gestures, makes - drunk, as if", 0],
  ["verhalten", "Gestures, makes - brushes the face or brushes something away", 0],
  ["verhalten", "Gestures, makes - grasping, reaching for something - genitals - fever, during", 0],
  ["verhalten", "Gestures, makes - grasping, reaching for something - picking at bedclothes - brain disease, in", 0],
  ["verhalten", "Gestures, makes - hands, involuntary motions of the - grasping - air, at", 0],
  ["verhalten", "Gestures, makes - hands, involuntary motions of the - cracking nuts, as if", 0],
  ["verhalten", "Gestures, makes - actor, like an", 0],
  ["nackt", "Greed - grasps greedily at everything offered with both hands", 0],
  ["nackt", "Indifference, apathy - nakedness, to his own", 0],
  ["nackt", "Grimaces - makes faces, silly", 0],
  ["nackt", "Behavior - grotesque - ape, like an", 0],
  ["liebe", "Complaining - injury, about imaginary, of an imaginary wrong", 0],
  ["delirium", "Coma - alcohol, from", 0],
  ["liebe", "Grief - jealousy, with", 0],
  ["sprechen", "Laughing - alternating with - quietness", 0],
  ["sprechen", "Laughing - silly, foolish, idiotic", 0],
  ["sprechen", "Laughing - forced", 0],
  ["sprechen", "Laughing - love, from disappointed", 0],
  ["liebe", "Lascivious - exposes the genitals", 0],
  ["liebe", "Love - laughing, tendency to", 0],
  ["liebe", "Love, ailments from disappointed - laughing, tendency to", 0],
  ["liebe", "Love, ailments from disappointed - suicidal disposition - drowning, by", 0],
  ["delirium", "Mania - alternating with - rage", 0],
  ["delirium", "Mania - typhus, in", 0],
  ["delirium", "Mania - sunstroke, after", 0],
  ["angst", "Medicine - refuses medicine, evades all strategies to take it", 0],
  ["sprechen", "Muttering - abortion, in threatened", 0],
  ["sprechen", "Muttering - sleeplessness, with", 0],
  ["nackt", "Naked, wants to be - drunkenness, in", 0],
  ["nackt", "Naked, wants to be - exhibitionism", 0],
  ["nackt", "Naked, wants to be - hyperesthesia of skin, in", 0],
  ["nackt", "Naked, wants to be - menses, during", 0],
  ["nackt", "Curious, inquisitive - children", 0],
  ["zorn", "Rage, fury - alternating with - calmness", 0],
  ["zorn", "Rage, fury - alternating with - quiet, desire to be", 0],
  ["zorn", "Rage, fury - love, from disappointed", 0],
  ["zorn", "Rage, fury - striking, with - others", 0],
  ["zorn", "Rage, fury - day and night", 0],
  ["zorn", "Irritability - masturbation, after", 0],
  ["verhalten", "Religious affections - religiosity, disturbances - occupied too much with religion - talks on religious subjects", 0],
  ["nackt", "Respect for bystanders", 0],
  ["verhalten", "Rocking - amel. - to and fro", 0],
  ["delirium", "Schizophrenia - children, in", 0],
  ["nackt", "Dirty - sits or lies in own feces - without noticing it - children, in", 0],
  ["nackt", "Dirty - plays - dirt, with", 0],
  ["nackt", "Dirty - plays - feces, with", 0],
  ["zorn", "Snaps at everyone", 0],
  ["sprechen", "Screaming - touch, on - pitiful, wailing in stupor", 0],
  ["sprechen", "Screaming - waking, on - without", 0],
  ["sprechen", "Screaming - joy, from", 0],
  ["sprechen", "Screaming - children, in - sleep, in - sobbing, with", 0],
  ["sprechen", "Screaming - stupor, in", 0],
  ["liebe", "Sexual desire, sexual behavior - lascivious - exposes the genitals", 0],
  ["liebe", "Sexual desire, sexual behavior - lascivious - insanity, in", 0],
  ["verhalten", "Sitting - inclination to sit - bed, in - lies down suddenly, and", 0],
  ["weiteres", "Playing - plays with - feces, her / his own", 0],
  ["sprechen", "Speech - fine", 0],
  ["sprechen", "Speech - loud - gets louder with every word", 0],
  ["sprechen", "Speech - chattering - lies naked in bed and chatters", 0],
  ["sprechen", "Talking - household affairs, of", 0],
  ["sprechen", "Talking - war, of - sleep, in", 0],
  ["sprechen", "Talking - chatting - lies naked in bed", 0],
  ["sprechen", "Talking - sleep, in - war, of", 0],
  ["sprechen", "Talking - excessive, loquacity - convulsions, during", 0],
  ["sprechen", "Talking - future, about the", 0],
  ["sprechen", "Quiet disposition - alternating with - rage", 0],
  ["sprechen", "Quiet disposition - masturbation, during", 0],
  ["sprechen", "Moaning - without cause", 0],
  ["sprechen", "Moaning - why, does not know", 0],
  ["liebe", "Suicidal disposition - drowning, by - love, from disappointed", 0],
  ["zorn", "Killing, desire to kill - everyone he sees", 0],
  ["liebe", "Sadness - flowers, from the smell of", 0],
  ["nackt", "Wandering - wrapped up in fur in summer", 0],
  ["nackt", "Wandering - naked", 0],
  ["verhalten", "Indecision - afternoon", 0],
  ["verhalten", "Indecision - sleepiness, with", 0],
  ["wahn", "Delusions - ants - letters are ants", 0],
  ["wahn", "Delusions - debate, he is at a", 0],
  ["wahn", "Delusions - marriage - to be married soon", 0],
  ["wahn", "Delusions - geese - sees geese", 0],
  ["wahn", "Delusions - phantoms - grasping at", 0],
  ["wahn", "Delusions - grotesque - people appear", 0],
  ["wahn", "Delusions - hands - bound, tied - chains, with, hands are", 0],
  ["wahn", "Delusions - harlequin, he is a", 0],
  ["wahn", "Delusions - hens - chained, hens that are", 0],
  ["wahn", "Delusions - sounds - listens to imaginary sounds", 0],
  ["wahn", "Delusions - climbing, climbs up", 0],
  ["wahn", "Delusions - crabs, of", 0],
  ["wahn", "Delusions - mouth - bad odor from mouth", 0],
  ["wahn", "Delusions - nuts, cracking", 0],
  ["wahn", "Delusions - stove - takes the stove for a tree", 0],
  ["wahn", "Delusions - stove - takes the stove for a tree - climb up it, and wants to", 0],
  ["wahn", "Delusions - places, being in different - wrong place, he is in the", 0],
  ["wahn", "Delusions - peacocks - chasing", 0],
  ["wahn", "Delusions - peacocks - driving away", 0],
  ["wahn", "Delusions - calling - absent persons, to", 0],
  ["wahn", "Delusions - swine, men are", 0],
  ["wahn", "Delusions - quarrel, he is in a", 0],
  ["wahn", "Delusions - animals - devoured by animals, being", 0],
  ["wahn", "Delusions - animals - objects, are", 0],
  ["wahn", "Delusions - animals - cup, moving about in a", 0],
  ["wahn", "Delusions - driving animals - peacocks", 0],
  ["wahn", "Delusions - changeable", 0],
  ["wahn", "Delusions - sold - he would be", 1],
  ["wahn", "Delusions - sold - been sold", 1],
  ["wahn", "Delusions - visions, has - pursued in visions", 0],
  ["wahn", "Delusions - bird - pluck the feathers of a bird, he would", 0],
  ["liebe", "Weeping - sobbing, weeping with - sleep, in - without waking", 0],
  ["nackt", "Importunate - hands, with the", 0],
  ["nackt", "Importunate - children, in - disturb parents in conversation", 0]
];

const GRUPPEN = [
  { id: "wahn", titel: "Delusions", offen: true, text: "The main delusion of being sold and its neighbors: marriage, chains, animals, visions." },
  { id: "liebe", titel: "Love, jealousy and wedding", text: "Disappointed love, jealousy, thoughts of marriage, the wedding in delirium." },
  { id: "delirium", titel: "Delirium, mania and insanity", text: "Deliria, manias and states in which contact with the surroundings blurs." },
  { id: "nackt", titel: "Nakedness, dirt and shamelessness", text: "Exposing oneself, wandering about, playing with dirt, grimaces, importunity." },
  { id: "zorn", titel: "Anger, biting and inciting", text: "Rage, irritability, biting, snapping, inciting others." },
  { id: "angst", titel: "Fear, mistrust and medicine", text: "Fear of poisoning and betrayal, refusing medicine, trying to escape." },
  { id: "sprechen", titel: "Talking, laughing and screaming", text: "Loquacity, muttering, silly laughing, screaming and moaning." },
  { id: "verhalten", titel: "Gestures, restlessness and rocking", text: "Picking, grasping, rocking, sitting, indecision." },
  { id: "weiteres", titel: "Other", text: "Rubrics that fit no branch." },
];

export function hyoscyamusMindmapPage() {
  const col = "#7a2fa8";
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
      ${pageHeader("mindmap-hyoscyamus")}
      <div class="page-content">
        <button class="ghost-link" data-route="mindmaps-single-rubriken" style="margin-bottom:1.2rem;">← All mind maps of the single rubrics</button>
        <p class="eyebrow">Knowledge · Single rubrics · Type 2</p>
        <h1 class="section-title">Hyoscyamus niger: Mind map of the single rubrics</h1>
        <p class="lead-small">Single rubrics are rubrics in which only one remedy is listed. Here are all single rubrics of Hyoscyamus niger (black henbane), the remedy that the Enneagram homeopathy of this Compass assigns to Type 2, ordered by theme.</p>

        <div style="margin:1.4rem 0;padding:1.1rem 1.3rem;border:2px solid ${col};border-radius:14px;background:color-mix(in srgb, ${col} 8%, var(--paper));text-align:center;">
          <div style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--muted);">Type 2 · Hyoscyamus niger · Main delusion</div>
          <div style="font-size:1.15rem;font-weight:700;color:var(--ink);margin-top:0.3rem;">Being sold: she thinks she will be sold, or has already been sold</div>
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
