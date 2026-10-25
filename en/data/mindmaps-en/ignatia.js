const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

// Single rubrics of Ignatia amara (Type 4), from the author's »Homöopathische Arzneimittellehre der Single-Rubriken aus dem Geist-/Gemütsbereich«
// [branch id, rubric, 1 = main delusion]
const ITEMS = [
  ["weiteres", "Changeable - impressions, agg. by change of", 0],
  ["angst", "Anxiety - fever, during - 2-5 h, with sleeplessness", 0],
  ["angst", "Anxiety - fear, with - 5 h agg., until, with sleeplessness", 0],
  ["angst", "Anxiety - house, in - amel.", 0],
  ["angst", "Anxiety - fright, after - pregnancy, in 7th month", 0],
  ["angst", "Anxiety - speaking, when - cannot speak", 0],
  ["geist", "Business - unable for - evening", 0],
  ["angst", "Starting, startled - frequent", 0],
  ["gefuehl", "Ailments from - disappointment - recent", 0],
  ["gefuehl", "Ailments from - grief - recent", 0],
  ["geist", "Consciousness - epileptic convulsions, in", 0],
  ["geist", "Consciousness - half-conscious state - hysteria", 0],
  ["verhalten", "Looking - bed, around as if to find something, looks around the", 0],
  ["geist", "Brooding - imaginary troubles, over", 0],
  ["verhalten", "Hurry - menses, during", 0],
  ["weiteres", "Sensitive, oversensitive - pain, to - chill, during", 0],
  ["weiteres", "Excitement, excitable - hysterical", 0],
  ["weiteres", "Excitement - hysterical - coryza, in", 0],
  ["farben", "Colors - blue - amel. - navy blue", 0],
  ["farben", "Colors - yellow - desire for - lemon yellow - women, in", 0],
  ["farben", "Colors - green - amel. - olive green", 0],
  ["farben", "Colors - red - amel.", 0],
  ["farben", "Colors - red - amel. - deep red", 0],
  ["farben", "Colors - black - amel.", 0],
  ["verhalten", "Clenches the fists", 0],
  ["geist", "Mistakes, makes - speaking, in - hurry, from", 0],
  ["angst", "Fear - continued", 0],
  ["angst", "Fear - invalid, of becoming an", 0],
  ["angst", "Fear - disease, of impending - trembles at the thought of it", 0],
  ["angst", "Fear - sudden - followed by - grief", 0],
  ["angst", "Fear - sleep - never sleep again, he will", 0],
  ["angst", "Fear - death, of - waking, on - afternoon nap, from an", 0],
  ["geist", "Memory - weakness of - everything, when occupied - dreams, except", 0],
  ["geist", "Thoughts - persistent - music, of - evening", 0],
  ["geist", "Mental exertion - agg. - impossible - evening", 0],
  ["verhalten", "Gestures, makes - hands, involuntary motions of the - fists - clenches the fist - fright, after", 0],
  ["verhalten", "Gestures, makes - stamps with feet - children, in sleep", 0],
  ["geist", "Conscientious about trifles - eating - after", 0],
  ["geist", "Indifference, apathy - music, to", 0],
  ["verhalten", "Hurry - menses - during", 0],
  ["gefuehl", "Lamenting, bemoaning - sweat, during", 0],
  ["gefuehl", "Grief - punishment, after", 0],
  ["gefuehl", "Grief - chorea, causing", 0],
  ["gefuehl", "Grief - childbirth, during", 0],
  ["gefuehl", "Grief - epilepsy, causing - suppressed grief", 0],
  ["gefuehl", "Grief - pneumonia, causing", 0],
  ["gefuehl", "Grief - calm, follows anger", 0],
  ["gefuehl", "Grief - fright, after", 0],
  ["gefuehl", "Grief - silent - menses, before", 0],
  ["gefuehl", "Grief - silent - anger, after", 0],
  ["gefuehl", "Laughing - grief, from", 0],
  ["gefuehl", "Laughing - sadness, followed by - ends in sadness", 0],
  ["gefuehl", "Mildness - complaint, bears suffering, even violence, without", 0],
  ["geist", "Fancies - excitement, after", 0],
  ["zorn", "Rage, fury - hemorrhage, arrested, from", 0],
  ["zorn", "Irritability - colors - green - agg. - dark green", 0],
  ["zorn", "Irritability - colors - purple - agg. - dark purple", 0],
  ["zorn", "Irritability - hysterical", 0],
  ["zorn", "Irritability - contradiction, from - slightest contradiction, from", 0],
  ["gefuehl", "Remorse, regret - menses, after", 0],
  ["verhalten", "Restlessness - gout, in", 0],
  ["verhalten", "Somnambulism - honor, from wounded", 0],
  ["angst", "Fright, ailments from - anxiety, after fright - pregnancy, in the seventh month", 0],
  ["angst", "Fright, ailments from - grief, with", 0],
  ["geist", "Writing - inability for - to write as fast as she wants, with anxious behavior, she makes mistakes", 0],
  ["verhalten", "Screaming - approached, when - lying in bed, while", 0],
  ["verhalten", "Taciturn - fright, after", 0],
  ["geist", "Introspection - fright, after", 0],
  ["verhalten", "Talk, indisposed to, desire to be silent, taciturn - suffering, of his", 0],
  ["verhalten", "Talk, indisposed to, desire to be silent, taciturn - fright, after", 0],
  ["gefuehl", "Suicidal disposition - drowning, by - tries to escape, after menses", 0],
  ["gefuehl", "Sadness - eating, while - desire for food, with", 0],
  ["gefuehl", "Sighing - abdomen, with complaints of", 0],
  ["gefuehl", "Sighing - old people, in", 0],
  ["gefuehl", "Sighing - epileptic convulsions - after", 0],
  ["gefuehl", "Sighing - loud", 0],
  ["gefuehl", "Sighing - empty stomach, with", 0],
  ["gefuehl", "Sighing - morning, 9 h", 0],
  ["gefuehl", "Sighing - night - midnight - after - 2 h", 0],
  ["gefuehl", "Sighing - forenoon - 9.30 h", 0],
  ["gefuehl", "Sighing - weeping, continues long after", 0],
  ["gefuehl", "Jesting - alternating with - weeping", 0],
  ["gefuehl", "Moaning - convulsions, during - beginning and end of puerperal convulsions, at", 0],
  ["verhalten", "Kicking - legs, with the - convulsions, during", 0],
  ["geist", "Torpor - excitement, after", 0],
  ["verhalten", "Kicking about - children, in - legs, with the", 0],
  ["geist", "Forgetful - everything - dreams, except", 0],
  ["wahn", "Delusions - marriage - is married, he", 0],
  ["wahn", "Delusions - vow - breaking her vow, she would be", 1],
  ["wahn", "Delusions - rocked, he would be - cradle, in a", 0],
  ["wahn", "Delusions - snakes - white, of", 0],
  ["wahn", "Delusions - pregnant, she is - distension of abdomen by flatus, in", 0],
  ["wahn", "Delusions - pregnant, she is - menses, after", 0],
  ["wahn", "Delusions - damned, he is - soul could not be saved, redeemed - weeping and raving, with", 0],
  ["wahn", "Delusions - married, is, that she", 0],
  ["wahn", "Delusions - lost, she is - all is lost", 0],
  ["wahn", "Delusions - visions, has - monsters, of - falling asleep and waking, on", 0],
  ["gefuehl", "Weeping - avoid weeping, desire to", 0],
  ["farben", "Aversion - colors - gray - aversion to", 0],
  ["farben", "Aversion - colors - gray - agg.", 0],
  ["zorn", "Wildness - trifles, at", 0],
  ["zorn", "Will - hasty", 0],
  ["zorn", "Anger - hemorrhage, from suppressed", 0],
  ["zorn", "Anger - contradiction, from - reproof, or", 0]
];

const GRUPPEN = [
  { id: "wahn", titel: "Delusions", offen: true, text: "The main delusion and its neighbors: vow, marriage, loss, damnation." },
  { id: "gefuehl", titel: "Grief, sadness and weeping", text: "Silent grief, sighing, the alternation of laughing and weeping." },
  { id: "angst", titel: "Anxiety, fear and fright", text: "Fear of illness, death and sleep, ailments from fright." },
  { id: "zorn", titel: "Anger, irritability and will", text: "Irritability on contradiction, rage, hasty will." },
  { id: "geist", titel: "Thinking, memory and conscientiousness", text: "Brooding, forgetfulness, exactness, mistakes when speaking and writing." },
  { id: "verhalten", titel: "Behavior, gestures and speech", text: "Fists, stamping, silence, sleepwalking, restlessness." },
  { id: "farben", titel: "Colors", text: "Desire and aversion to colors, irritability from colors." },
  { id: "weiteres", titel: "Other", text: "Changeable states, hypersensitivity, excitement." },
];

export function ignatiaMindmapPage() {
  const col = "#3cbf1f";
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
      ${pageHeader("mindmap-ignatia")}
      <div class="page-content">
        <button class="ghost-link" data-route="mindmaps-single-rubriken" style="margin-bottom:1.2rem;">← All mind maps of the single rubrics</button>
        <p class="eyebrow">Knowledge · Single rubrics · Type 4</p>
        <h1 class="section-title">Ignatia amara: Mind map of the single rubrics</h1>
        <p class="lead-small">Single rubrics are rubrics in which only one remedy is listed. Here are all single rubrics of Ignatia amara (St. Ignatius bean), the remedy that the Enneagram homeopathy of this Compass assigns to Type 4, ordered by theme.</p>

        <div style="margin:1.4rem 0;padding:1.1rem 1.3rem;border:2px solid ${col};border-radius:14px;background:color-mix(in srgb, ${col} 8%, var(--paper));text-align:center;">
          <div style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--muted);">Type 4 · Ignatia amara · Main delusion</div>
          <div style="font-size:1.15rem;font-weight:700;color:var(--ink);margin-top:0.3rem;">The vow: she would break her vow</div>
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
