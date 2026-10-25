const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

// Single rubrics of Platinum metallicum (Type 1), from the author's »Homöopathische Arzneimittellehre der Single-Rubriken aus dem Geist-/Gemütsbereich«
// [branch id, rubric, 1 = main delusion]
const ITEMS = [
  ["geist", "Aversion - children, to - having children - disturb, impair life, feels children will", 0],
  ["geist", "Alternating mental symptoms and physical symptoms - uterine pains, with", 0],
  ["angst", "Anxiety - most pleasant things, about the", 0],
  ["angst", "Anxiety - fever - during - puerperal fever, in", 0],
  ["angst", "Anxiety - salvation, about - hell, of", 0],
  ["angst", "Anxiety - speaking, when - company, in", 0],
  ["angst", "Anxiety - pleasurable things, about highly", 0],
  ["geist", "Stupefaction - headache - before", 0],
  ["religion", "Praying - aloud in sadness", 0],
  ["religion", "Praying - wants other people to pray with him, in slight erysipelas of the face", 0],
  ["hochmut", "Egotism - religious", 0],
  ["stimmung", "Seriousness, earnestness - alternating with - jesting", 0],
  ["geist", "Colors - gray - aversion to", 0],
  ["stimmung", "Cheerful - alternating with - physical symptoms, with", 0],
  ["stimmung", "Cheerful - alternating with - pain", 0],
  ["stimmung", "Cheerful - morning - open air, in", 0],
  ["stimmung", "Gay, hilarious, mirthful, lively - alternating with - seriousness", 0],
  ["stimmung", "Cheerful - alternating with - physical suffering", 0],
  ["stimmung", "Cheerful - alternating with - pain", 0],
  ["stimmung", "Cheerful - morning - open air, in", 0],
  ["stimmung", "Cheerful - weeping, after", 0],
  ["angst", "Fear - husband does not return, that something will happen to him", 0],
  ["angst", "Fear - hanged, of being", 0],
  ["angst", "Fear - happen, something will - uterus, in hemorrhage of", 0],
  ["angst", "Fear - cancer, of - rectal carcinoma, although physical examination shows no finding", 0],
  ["angst", "Fear - death, of - laughing and weeping, with alternating", 0],
  ["angst", "Fear - death, of - fright, after", 0],
  ["angst", "Fear - death, of - losing his mind, and the", 0],
  ["angst", "Fear - death, of - anger, from", 0],
  ["geist", "Thoughts - persistent - night - midnight - about", 0],
  ["geist", "Thoughts - wandering - sleepiness, from", 0],
  ["geist", "Absent-minded - open air, in", 0],
  ["geist", "Insanity - erotic - girls, in hysterical", 0],
  ["geist", "Mental symptoms - mental symptoms appear and physical symptoms disappear and vice versa", 0],
  ["geist", "Mental symptoms - limbs, with trembling of", 0],
  ["geist", "Mental symptoms - menses, from suppressed", 0],
  ["angst", "Killed, desire to be - menses, during", 0],
  ["geist", "Indifference, apathy - fright, after", 0],
  ["stimmung", "Violent, vehement - physical activity, with", 0],
  ["hochmut", "Haughty, arrogant - religious haughtiness", 0],
  ["hochmut", "Haughty, arrogant - fright, after", 0],
  ["stimmung", "Laughing - alternating with - fear of death", 0],
  ["stimmung", "Laughing - alternating with - taciturnity", 0],
  ["stimmung", "Laughing - alternating with - weeping - anger, after", 0],
  ["stimmung", "Laughing - serious matters, over - open air, in", 0],
  ["stimmung", "Laughing - inappropriate places, at", 0],
  ["stimmung", "Laughing - spasmodic - inappropriate places, at", 0],
  ["stimmung", "Laughing - menses - during - convulsive", 0],
  ["stimmung", "Laughing - sadness, followed by", 0],
  ["hochmut", "Capricious, fickle - prosopalgia (facial pain, facial neuralgia), in", 0],
  ["hochmut", "Capricious, fickle - overestimation of self, with", 0],
  ["stimmung", "Loving, affectionate, cordial - alternating with - sadness", 0],
  ["stimmung", "Mania - singing, with - puerperal mania, in", 0],
  ["stimmung", "Mildness, tendency to - alternating with - sadness", 0],
  ["geist", "Multiple personality disorder - identity, error of personal - does not belong to her family", 0],
  ["stimmung", "Morose - alternating with - loving disposition, with", 0],
  ["angst", "Anguish - joy, from excessive", 0],
  ["angst", "Anguish - anger, from", 0],
  ["stimmung", "Irritability - alternating with - tenderness", 0],
  ["religion", "Religious affections, Savior, feels happy about union with the", 0],
  ["religion", "Religious affections, urges husband to join the church", 0],
  ["religion", "Religious affections, religiosity, disturbances - occupied too much with religion - penance, desire to do, to mitigate her punishment in eternity", 0],
  ["religion", "Religious affections, religiosity, disturbances - occupied too much with religion - taciturnity, haughtiness, lust and cruelty, religious affections with", 0],
  ["stimmung", "Restlessness - sadness, with", 0],
  ["angst", "Terrible and sad stories affect her greatly - thoughts during childbirth, her", 0],
  ["stimmung", "Jesting - alternating with - taciturnity", 0],
  ["stimmung", "Jesting - seriousness, after", 0],
  ["geist", "Talk, indisposed to, desire to be silent, taciturn - alternating with - laughing", 0],
  ["geist", "Talk, indisposed to, desire to be silent, taciturn - alternating with - jesting", 0],
  ["angst", "Suicidal disposition - desire to kill himself - fear of death and aversion to talking about it, with", 0],
  ["stimmung", "Sadness - alternating with - tenderness", 0],
  ["stimmung", "Jesting - alternating with - seriousness", 0],
  ["stimmung", "Jesting - pregnancy, after", 0],
  ["stimmung", "Moaning - night - melancholy, in", 0],
  ["geist", "Stupidity - company, in", 0],
  ["geist", "Torpor - pain, in - sciatic nerve, in", 0],
  ["stimmung", "Sadness - disgust, aversion to food, with", 0],
  ["stimmung", "Sadness - laughing - after", 0],
  ["stimmung", "Sadness - night - midnight", 0],
  ["stimmung", "Embracing - everything in the morning, agg. in open air", 0],
  ["stimmung", "Impatience - head, with complaints of the", 0],
  ["stimmung", "Impatience - room, in a warm, crowded", 0],
  ["hochmut", "Contemptuous - attacks against her will, in", 0],
  ["hochmut", "Contemptuous - looks contemptuously at people, against her own will", 0],
  ["hochmut", "Contemptuous - open air or when the sun shines into the room, in the", 0],
  ["hochmut", "Contemptuous - ravenous hunger and greedy, hasty eating, contemptuous with sudden", 0],
  ["hochmut", "Contemptuous - racist", 0],
  ["hochmut", "Contemptuous - religious", 0],
  ["hochmut", "Contemptuous - looks down on everyone else", 0],
  ["hochmut", "Changed after short absence, everything appears", 0],
  ["hochmut", "Repels people against her will", 0],
  ["wahn", "Delusions - large - he himself seems too large - entering the house after walking, on", 0],
  ["wahn", "Delusions - help - cries for help", 0],
  ["wahn", "Delusions - longer, he is growing", 0],
  ["wahn", "Delusions - inferior, people appear mentally and physically - entering the house after a walk, on", 0],
  ["wahn", "Delusions - fancies, illusions of - open air, in - amel.", 0],
  ["wahn", "Delusions - strange - familiar things seem strange - terrible, dreadful, is", 0],
  ["wahn", "Delusions - vanish, as if everything would - senses", 0],
  ["wahn", "Delusions - superiority", 1],
  ["wahn", "Delusions - diminished - everything in the room is diminished, while she is large and sublime", 0],
  ["wahn", "Delusions - injured - been injured, he has - sleep, in", 0],
  ["stimmung", "Weeping - face - complaints of the face, with", 0],
  ["stimmung", "Weeping - room, in", 0],
  ["stimmung", "Anger - physical activity, with great", 0],
  ["stimmung", "Anger - colors - gray - agg.", 0],
  ["stimmung", "Anger - laughing, with attacks of - anger, laughing and weeping alternate", 0]
];

const GRUPPEN = [
  { id: "wahn", titel: "Delusions", offen: true, text: "The main delusion of superiority and its neighbors: large, diminished, inferior, injured." },
  { id: "hochmut", titel: "Contempt, haughtiness and repelling", text: "Looking down on others, religious haughtiness, repelling people against her will." },
  { id: "religion", titel: "Religion, prayer and salvation", text: "Prayer in sadness, penance, religious affections, anxiety about salvation." },
  { id: "stimmung", titel: "Changes of mood: cheerful, serious, laughing and weeping", text: "The quick alternation of cheerfulness, seriousness, laughing, weeping and anger." },
  { id: "angst", titel: "Anxiety, fear and death", text: "Fear of death, of cancer, of being hanged, worry about the husband." },
  { id: "geist", titel: "Mind, body and thinking", text: "Alternation of mental and physical symptoms, thoughts, indifference, speech, colors." },
];

export function platinMindmapPage() {
  const col = "#5f5f5f";
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
      ${pageHeader("mindmap-platin")}
      <div class="page-content">
        <button class="ghost-link" data-route="mindmaps-single-rubriken" style="margin-bottom:1.2rem;">← All mind maps of the single rubrics</button>
        <p class="eyebrow">Knowledge · Single rubrics · Type 1</p>
        <h1 class="section-title">Platinum metallicum: Mind map of the single rubrics</h1>
        <p class="lead-small">Single rubrics are rubrics in which only one remedy is listed. Here are all single rubrics of Platinum metallicum (platinum), the remedy that the Enneagram homeopathy of this Compass assigns to Type 1, ordered by theme.</p>

        <div style="margin:1.4rem 0;padding:1.1rem 1.3rem;border:2px solid ${col};border-radius:14px;background:color-mix(in srgb, ${col} 8%, var(--paper));text-align:center;">
          <div style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--muted);">Type 1 · Platinum metallicum · Main delusion</div>
          <div style="font-size:1.15rem;font-weight:700;color:var(--ink);margin-top:0.3rem;">Superiority: the idea of being superior</div>
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
