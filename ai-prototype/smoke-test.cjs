// Minimaler funktionaler Vorab-Check vor dem Deploy. Kein Ersatz für echte Tests,
// aber fängt genau die Klasse von Fehlern ab, die in dieser Session mehrfach erst
// durch Nutzer-Feedback auffiel: JS-Fehler/weißer Bildschirm auf zentralen Routen,
// die ein reiner `node --check`-Syntaxcheck nicht erkennen kann (der prüft nur,
// ob die Datei als JS geparst werden kann, nicht ob sie beim Rendern im Browser
// tatsächlich funktioniert).
//
// Nutzung: node ai-prototype/smoke-test.cjs
// Voraussetzung: lokaler Server läuft nicht bereits auf Port 4174 (das Skript
// startet selbst einen `python3 -m http.server 4174` und beendet ihn danach).
//
// Bewusst NICHT in die GitHub-Actions-Deploy-Pipeline (.github/workflows/deploy-pages.yml)
// eingebunden – das wäre eine Änderung an der kritischen CI/CD-Pipeline und sollte
// erst nach ausdrücklicher Freigabe erfolgen. Bis dahin: manuell vor größeren
// Releases laufen lassen, oder bei Bedarf selbst in eine Routine packen.

const { chromium } = require("/opt/node-tools/node_modules/playwright");
const { spawn } = require("child_process");
const path = require("path");

const PORT = 4174;
const BASE = `http://localhost:${PORT}`;

// Routen, die in dieser Session tatsächlich kaputt waren oder viel DOM/Media
// gleichzeitig laden (Jazz-/Songs-Seite, Gesichts-Scan) plus die Startseite als
// genereller Rauchmelder.
const ROUTES = [
  { hash: "", label: "Startseite" },
  { hash: "#gesichts-scan", label: "Gesichts-Scan" },
  { hash: "#detlef-rathmer-jazz", label: "Jazz & Musik (Klick-zum-Laden-Videos)" },
  { hash: "#david-rathmer-impulse", label: "David Rathmer – Impulse" },
  { hash: "#beruehmte-yannick-van-de-velde", label: "Neues Porträt: Yannick van de Velde" },
  { hash: "en/#beruehmte-yannick-van-de-velde", label: "Neues EN-Porträt: Yannick van de Velde" },
  { hash: "#beruehmte-hillary-clinton", label: "Neues Porträt: Hillary Clinton" },
  { hash: "en/#beruehmte-hillary-clinton", label: "Neues EN-Porträt: Hillary Clinton" },
  { hash: "#beruehmte-margaret-thatcher", label: "Neues Porträt: Margaret Thatcher" },
  { hash: "en/#beruehmte-margaret-thatcher", label: "Neues EN-Porträt: Margaret Thatcher" },
  { hash: "#beruehmte-henri-poincare", label: "Neues Porträt: Henri Poincaré" },
  { hash: "en/#beruehmte-henri-poincare", label: "Neues EN-Porträt: Henri Poincaré" },
  { hash: "#beruehmte-carl-xvi-gustaf", label: "Neues Porträt: Carl XVI. Gustaf" },
  { hash: "en/#beruehmte-carl-xvi-gustaf", label: "Neues EN-Porträt: Carl XVI. Gustaf" },
  { hash: "#beruehmte-johannes-paul-ii", label: "Neues Porträt: Johannes Paul II." },
  { hash: "en/#beruehmte-johannes-paul-ii", label: "Neues EN-Porträt: Johannes Paul II." },
  { hash: "#beruehmte-navi-pillay", label: "Neues Porträt: Navi Pillay" },
  { hash: "en/#beruehmte-navi-pillay", label: "Neues EN-Porträt: Navi Pillay" },
  { hash: "#beruehmte-rosa-luxemburg", label: "Neues Porträt: Rosa Luxemburg" },
  { hash: "en/#beruehmte-rosa-luxemburg", label: "Neues EN-Porträt: Rosa Luxemburg" },
  { hash: "#beruehmte-bernhard-hoecker", label: "Neues Porträt: Bernhard Hoëcker" },
  { hash: "en/#beruehmte-bernhard-hoecker", label: "Neues EN-Porträt: Bernhard Hoëcker" },
  { hash: "#beruehmte-wigald-boning", label: "Neues Porträt: Wigald Boning" },
  { hash: "en/#beruehmte-wigald-boning", label: "Neues EN-Porträt: Wigald Boning" },
  { hash: "#beruehmte-edith-piaf", label: "Neues Porträt: Édith Piaf" },
  { hash: "en/#beruehmte-edith-piaf", label: "Neues EN-Porträt: Édith Piaf" },
  { hash: "#beruehmte-louis-klamroth", label: "Neues Porträt: Louis Klamroth" },
  { hash: "en/#beruehmte-louis-klamroth", label: "Neues EN-Porträt: Louis Klamroth" },
  { hash: "#kriminalpsychologie-frank-hanebuth", label: "Neues Kriminalporträt: Frank Hanebuth" },
  { hash: "en/#kriminalpsychologie-frank-hanebuth", label: "Neues EN-Kriminalporträt: Frank Hanebuth" },
  { hash: "#beruehmte-draupadi-murmu", label: "Neues Porträt: Draupadi Murmu" },
  { hash: "en/#beruehmte-draupadi-murmu", label: "Neues EN-Porträt: Draupadi Murmu" },
  { hash: "#beruehmte-halla-tomasdottir", label: "Neues Porträt: Halla Tómasdóttir" },
  { hash: "en/#beruehmte-halla-tomasdottir", label: "Neues EN-Porträt: Halla Tómasdóttir" },
  { hash: "#die-neuen-enneagramm-typen", label: "Neues Schaubild: Die neuen Enneagramm-Typen" },
  { hash: "en/#die-neuen-enneagramm-typen", label: "Neues EN-Schaubild: Die neuen Enneagramm-Typen" },
  { hash: "#krankheitsportraets-johannes-paul-ii", label: "Neues Krankheitsporträt: Johannes Paul II." },
  { hash: "en/#krankheitsportraets-johannes-paul-ii", label: "Neues EN-Krankheitsporträt: Johannes Paul II." },
  { hash: "#beruehmte-michael-schumacher", label: "Umtypisiert: Michael Schumacher (SE1w9)" },
  { hash: "en/#beruehmte-michael-schumacher", label: "Umtypisiert EN: Michael Schumacher (SE1w9)" },
  { hash: "#krankheitsportraets-michael-schumacher", label: "Umtypisiert: Michael Schumacher Krankheitsporträt (SE1w9)" },
  { hash: "en/#krankheitsportraets-michael-schumacher", label: "Umtypisiert EN: Michael Schumacher Krankheitsporträt (SE1w9)" },
  { hash: "#beruehmte-katharina-die-grosse", label: "Neues Porträt: Katharina die Große" },
  { hash: "en/#beruehmte-katharina-die-grosse", label: "Neues EN-Porträt: Katharina die Große" },
  { hash: "#beruehmte-mette-marit", label: "Neues Porträt: Mette-Marit" },
  { hash: "en/#beruehmte-mette-marit", label: "Neues EN-Porträt: Mette-Marit" },
  { hash: "#krankheitsportraets-mette-marit", label: "Neues Krankheitsporträt: Mette-Marit" },
  { hash: "en/#krankheitsportraets-mette-marit", label: "Neues EN-Krankheitsporträt: Mette-Marit" },
  { hash: "#beruehmte-gert-postel", label: "Neues Porträt: Gert Postel" },
  { hash: "en/#beruehmte-gert-postel", label: "Neues EN-Porträt: Gert Postel" },
  { hash: "#beruehmte-florence-nightingale", label: "Neues Porträt: Florence Nightingale" },
  { hash: "en/#beruehmte-florence-nightingale", label: "Neues EN-Porträt: Florence Nightingale" },
  { hash: "#beruehmte-nico-rosberg", label: "Neues Porträt: Nico Rosberg" },
  { hash: "en/#beruehmte-nico-rosberg", label: "Neues EN-Porträt: Nico Rosberg" },
  { hash: "#beruehmte-lewis-hamilton", label: "Neues Porträt: Lewis Hamilton" },
  { hash: "en/#beruehmte-lewis-hamilton", label: "Neues EN-Porträt: Lewis Hamilton" },
  { hash: "#beruehmte-niki-lauda", label: "Neues Porträt: Niki Lauda" },
  { hash: "en/#beruehmte-niki-lauda", label: "Neues EN-Porträt: Niki Lauda" },
  { hash: "#beruehmte-johannes-gutenberg", label: "Neues Porträt: Johannes Gutenberg" },
  { hash: "en/#beruehmte-johannes-gutenberg", label: "Neues EN-Porträt: Johannes Gutenberg" },
  { hash: "#beruehmte-konrad-zuse", label: "Neues Porträt: Konrad Zuse" },
  { hash: "en/#beruehmte-konrad-zuse", label: "Neues EN-Porträt: Konrad Zuse" },
  { hash: "#beruehmte-javier-tebas", label: "Neues Porträt: Javier Tebas" },
  { hash: "en/#beruehmte-javier-tebas", label: "Neues EN-Porträt: Javier Tebas" },
  { hash: "#beruehmte-philippe-sands", label: "Neues Porträt: Philippe Sands" },
  { hash: "en/#beruehmte-philippe-sands", label: "Neues EN-Porträt: Philippe Sands" },
  { hash: "#beruehmte-sean-sherman", label: "Neues Porträt: Sean Sherman" },
  { hash: "en/#beruehmte-sean-sherman", label: "Neues EN-Porträt: Sean Sherman" },
  { hash: "#beruehmte-billie-lourd", label: "Neues Porträt: Billie Lourd" },
  { hash: "en/#beruehmte-billie-lourd", label: "Neues EN-Porträt: Billie Lourd" },
  { hash: "#beruehmte-ruby-true", label: "Neues Porträt: Ruby True" },
  { hash: "en/#beruehmte-ruby-true", label: "Neues EN-Porträt: Ruby True" },
  { hash: "#beruehmte-caroline-wozniacki", label: "Neues Porträt: Caroline Wozniacki" },
  { hash: "en/#beruehmte-caroline-wozniacki", label: "Neues EN-Porträt: Caroline Wozniacki" },
  { hash: "#beruehmte-kennerly-kitt", label: "Neues Porträt: Kennerly Kitt" },
  { hash: "en/#beruehmte-kennerly-kitt", label: "Neues EN-Porträt: Kennerly Kitt" },
  { hash: "#krankheitsportraets-niki-lauda", label: "Neues Krankheitsporträt: Niki Lauda" },
  { hash: "en/#krankheitsportraets-niki-lauda", label: "Neues EN-Krankheitsporträt: Niki Lauda" },
  { hash: "#krankheitsportraets-eleanor-roosevelt", label: "Neues Krankheitsporträt: Eleanor Roosevelt" },
  { hash: "en/#krankheitsportraets-eleanor-roosevelt", label: "Neues EN-Krankheitsporträt: Eleanor Roosevelt" },
  { hash: "#krankheitsportraets-prince", label: "Neues Krankheitsporträt: Prince" },
  { hash: "en/#krankheitsportraets-prince", label: "Neues EN-Krankheitsporträt: Prince" },
  { hash: "#krankheitsportraets-william-james-sidis", label: "Neues Krankheitsporträt: William James Sidis" },
  { hash: "en/#krankheitsportraets-william-james-sidis", label: "Neues EN-Krankheitsporträt: William James Sidis" },
  { hash: "#kroetenschlucken", label: "Neues Schaubild: Kröten schlucken" },
  { hash: "en/#kroetenschlucken", label: "Neues EN-Schaubild: Kröten schlucken" },
  { hash: "#wann-entsteht-der-typ", label: "Neues Schaubild: Wann entsteht der Typ" },
  { hash: "en/#wann-entsteht-der-typ", label: "Neues EN-Schaubild: Wann entsteht der Typ" },
  { hash: "#typ-aendert-sich-nicht", label: "Neuer Wissensartikel: Typ ändert sich nicht" },
  { hash: "en/#typ-aendert-sich-nicht", label: "Neuer EN-Wissensartikel: Typ ändert sich nicht" },
  { hash: "#kriminalpsychologie-rex-heuermann", label: "Neues Kriminalporträt: Rex Heuermann" },
  { hash: "en/#kriminalpsychologie-rex-heuermann", label: "Neues EN-Kriminalporträt: Rex Heuermann" },
  { hash: "#kriminalpsychologie-rodney-alcala", label: "Neues Kriminalporträt: Rodney Alcala" },
  { hash: "en/#kriminalpsychologie-rodney-alcala", label: "Neues EN-Kriminalporträt: Rodney Alcala" },
  { hash: "#kriminalpsychologie-lindsay-clancy", label: "Neues Kriminalporträt: Lindsay Clancy" },
  { hash: "en/#kriminalpsychologie-lindsay-clancy", label: "Neues EN-Kriminalporträt: Lindsay Clancy" },
  { hash: "#beruehmte-harry-houdini", label: "Neues Porträt: Harry Houdini" },
  { hash: "en/#beruehmte-harry-houdini", label: "Neues EN-Porträt: Harry Houdini" },
  { hash: "#beruehmte-johannes-heesters", label: "Neues Porträt: Johannes Heesters" },
  { hash: "en/#beruehmte-johannes-heesters", label: "Neues EN-Porträt: Johannes Heesters" },
  { hash: "#beruehmte-volker-rosin", label: "Neues Porträt: Volker Rosin" },
  { hash: "en/#beruehmte-volker-rosin", label: "Neues EN-Porträt: Volker Rosin" },
  { hash: "#beruehmte-christian-kohlund", label: "Neues Porträt: Christian Kohlund" },
  { hash: "en/#beruehmte-christian-kohlund", label: "Neues EN-Porträt: Christian Kohlund" },
  { hash: "#beruehmte-isabell-gerschke", label: "Neues Porträt: Isabell Gerschke" },
  { hash: "en/#beruehmte-isabell-gerschke", label: "Neues EN-Porträt: Isabell Gerschke" },
  { hash: "#beruehmte-ulrich-selz", label: "Neues Porträt: Dr. Ulrich Selz" },
  { hash: "en/#beruehmte-ulrich-selz", label: "Neues EN-Porträt: Dr. Ulrich Selz" },
  { hash: "#beruehmte-andreas-gruber", label: "Neues Porträt: Andreas Gruber" },
  { hash: "en/#beruehmte-andreas-gruber", label: "Neues EN-Porträt: Andreas Gruber" },
  { hash: "#beruehmte-duncan-haldane", label: "Neues Porträt: Duncan Haldane" },
  { hash: "en/#beruehmte-duncan-haldane", label: "Neues EN-Porträt: Duncan Haldane" },
  { hash: "#beruehmte-helene-spilling-odegaard", label: "Neues Porträt: Helene Spilling Ødegaard" },
  { hash: "en/#beruehmte-helene-spilling-odegaard", label: "Neues EN-Porträt: Helene Spilling Ødegaard" },
  { hash: "#beruehmte-wietske-van-tongeren", label: "Neues Porträt: Wietske van Tongeren" },
  { hash: "en/#beruehmte-wietske-van-tongeren", label: "Neues EN-Porträt: Wietske van Tongeren" },
  { hash: "#beruehmte-john-travolta", label: "Neues Porträt: John Travolta" },
  { hash: "en/#beruehmte-john-travolta", label: "Neues EN-Porträt: John Travolta" },
  { hash: "#beruehmte-michael-greger", label: "Neues Porträt: Michael Greger" },
  { hash: "en/#beruehmte-michael-greger", label: "Neues EN-Porträt: Michael Greger" },
  { hash: "#beruehmte-thomas-schmelzer", label: "Neues Porträt: Thomas Schmelzer" },
  { hash: "en/#beruehmte-thomas-schmelzer", label: "Neues EN-Porträt: Thomas Schmelzer" },
  { hash: "#beruehmte-milan-peschel", label: "Neues Porträt: Milan Peschel" },
  { hash: "en/#beruehmte-milan-peschel", label: "Neues EN-Porträt: Milan Peschel" },
  { hash: "#beruehmte-carlo-masala", label: "Neues Porträt: Carlo Masala" },
  { hash: "en/#beruehmte-carlo-masala", label: "Neues EN-Porträt: Carlo Masala" },
  { hash: "#beruehmte-kevin-kuehnert", label: "Neues Porträt: Kevin Kühnert" },
  { hash: "en/#beruehmte-kevin-kuehnert", label: "Neues EN-Porträt: Kevin Kühnert" },
  { hash: "#beruehmte-gerald-hoerhan", label: "Neues Porträt: Gerald Hörhan" },
  { hash: "en/#beruehmte-gerald-hoerhan", label: "Neues EN-Porträt: Gerald Hörhan" },
  { hash: "#beruehmte-heiko-maas", label: "Neues Porträt: Heiko Maas" },
  { hash: "en/#beruehmte-heiko-maas", label: "Neues EN-Porträt: Heiko Maas" },
  { hash: "#beruehmte-fabrice-luchini", label: "Neues Porträt: Fabrice Luchini" },
  { hash: "en/#beruehmte-fabrice-luchini", label: "Neues EN-Porträt: Fabrice Luchini" },
  { hash: "#beruehmte-catherine-deneuve", label: "Neues Porträt: Catherine Deneuve" },
  { hash: "en/#beruehmte-catherine-deneuve", label: "Neues EN-Porträt: Catherine Deneuve" },
  { hash: "#beruehmte-6ix9ine", label: "Neues Porträt: 6ix9ine" },
  { hash: "en/#beruehmte-6ix9ine", label: "Neues EN-Porträt: 6ix9ine" },
  { hash: "#beruehmte-hans-sigl", label: "Neues Porträt: Hans Sigl" },
  { hash: "en/#beruehmte-hans-sigl", label: "Neues EN-Porträt: Hans Sigl" },
  { hash: "#beruehmte-don-king", label: "Neues Porträt: Don King" },
  { hash: "en/#beruehmte-don-king", label: "Neues EN-Porträt: Don King" },
  { hash: "#beruehmte-ada-lovelace", label: "Neues Porträt: Ada Lovelace" },
  { hash: "en/#beruehmte-ada-lovelace", label: "Neues EN-Porträt: Ada Lovelace" },
  { hash: "#beruehmte-auguste-rodin", label: "Neues Porträt: Auguste Rodin" },
  { hash: "en/#beruehmte-auguste-rodin", label: "Neues EN-Porträt: Auguste Rodin" },
  { hash: "#beruehmte-camille-claudel", label: "Neues Porträt: Camille Claudel" },
  { hash: "en/#beruehmte-camille-claudel", label: "Neues EN-Porträt: Camille Claudel" },
  { hash: "#beruehmte-franz-peter-tebartz-van-elst", label: "Neues Porträt: Franz-Peter Tebartz-van Elst" },
  { hash: "en/#beruehmte-franz-peter-tebartz-van-elst", label: "Neues EN-Porträt: Franz-Peter Tebartz-van Elst" },
  { hash: "#beruehmte-charlie-chaplin", label: "Neues Porträt: Charlie Chaplin" },
  { hash: "en/#beruehmte-charlie-chaplin", label: "Neues EN-Porträt: Charlie Chaplin" },
  { hash: "#beruehmte-wayne-dyer", label: "Neues Porträt: Wayne Dyer" },
  { hash: "en/#beruehmte-wayne-dyer", label: "Neues EN-Porträt: Wayne Dyer" },
  { hash: "#beruehmte-dany-boon", label: "Neues Porträt: Dany Boon" },
  { hash: "en/#beruehmte-dany-boon", label: "Neues EN-Porträt: Dany Boon" },
  { hash: "#beruehmte-wolfgang-grupp", label: "Neues Porträt: Wolfgang Grupp" },
  { hash: "en/#beruehmte-wolfgang-grupp", label: "Neues EN-Porträt: Wolfgang Grupp" },
  { hash: "#beruehmte-dietrich-mateschitz", label: "Neues Porträt: Dietrich Mateschitz" },
  { hash: "en/#beruehmte-dietrich-mateschitz", label: "Neues EN-Porträt: Dietrich Mateschitz" },
  { hash: "#beruehmte-nick-nolte", label: "Neues Porträt: Nick Nolte" },
  { hash: "en/#beruehmte-nick-nolte", label: "Neues EN-Porträt: Nick Nolte" },
  { hash: "#beruehmte-russell-means", label: "Neues Porträt: Russell Means" },
  { hash: "en/#beruehmte-russell-means", label: "Neues EN-Porträt: Russell Means" },
  { hash: "#kriminalpsychologie-beate-zschaepe", label: "Neues Kriminalporträt: Beate Zschäpe" },
  { hash: "en/#kriminalpsychologie-beate-zschaepe", label: "Neues EN-Kriminalporträt: Beate Zschäpe" },
  { hash: "#kriminalpsychologie-gert-postel", label: "Neues Kriminalporträt: Gert Postel" },
  { hash: "en/#kriminalpsychologie-gert-postel", label: "Neues EN-Kriminalporträt: Gert Postel" },
  { hash: "#beruehmte-matthias-reim", label: "Neues Porträt: Matthias Reim" },
  { hash: "en/#beruehmte-matthias-reim", label: "Neues EN-Porträt: Matthias Reim" },
  { hash: "#beruehmte-luke-nichols", label: "Neues Porträt: Luke Nichols" },
  { hash: "en/#beruehmte-luke-nichols", label: "Neues EN-Porträt: Luke Nichols" },
  { hash: "#krankheitsportraets-florence-nightingale", label: "Neues Krankheitsporträt: Florence Nightingale" },
  { hash: "en/#krankheitsportraets-florence-nightingale", label: "Neues EN-Krankheitsporträt: Florence Nightingale" },
  { hash: "#krankheitsportraets-camille-claudel", label: "Neues Krankheitsporträt: Camille Claudel" },
  { hash: "en/#krankheitsportraets-camille-claudel", label: "Neues EN-Krankheitsporträt: Camille Claudel" },
  { hash: "#krankheitsportraets-edith-piaf", label: "Neues Krankheitsporträt: Édith Piaf" },
  { hash: "en/#krankheitsportraets-edith-piaf", label: "Neues EN-Krankheitsporträt: Édith Piaf" },
  { hash: "#krankheitsportraets-ramana-maharshi", label: "Neues Krankheitsporträt: Ramana Maharshi" },
  { hash: "en/#krankheitsportraets-ramana-maharshi", label: "Neues EN-Krankheitsporträt: Ramana Maharshi" },
  { hash: "#beruehmte-ramana-maharshi", label: "Neues Porträt: Ramana Maharshi" },
  { hash: "en/#beruehmte-ramana-maharshi", label: "Neues EN-Porträt: Ramana Maharshi" },
  { hash: "#beruehmte-dieter-thomas-heck", label: "Neues Porträt: Dieter Thomas Heck" },
  { hash: "en/#beruehmte-dieter-thomas-heck", label: "Neues EN-Porträt: Dieter Thomas Heck" },
  { hash: "#beruehmte-sofia-polgar", label: "Neues Porträt: Sofia Polgár" },
  { hash: "en/#beruehmte-sofia-polgar", label: "Neues EN-Porträt: Sofia Polgár" },
  { hash: "#beruehmte-robert-greene", label: "Neues Porträt: Robert Greene" },
  { hash: "en/#beruehmte-robert-greene", label: "Neues EN-Porträt: Robert Greene" },
  { hash: "#beruehmte-senta-berger", label: "Neues Porträt: Senta Berger" },
  { hash: "en/#beruehmte-senta-berger", label: "Neues EN-Porträt: Senta Berger" },
  { hash: "#beruehmte-andrea-sawatzki", label: "Neues Porträt: Andrea Sawatzki" },
  { hash: "en/#beruehmte-andrea-sawatzki", label: "Neues EN-Porträt: Andrea Sawatzki" },
  { hash: "#beruehmte-marleen-lohse", label: "Neues Porträt: Marleen Lohse" },
  { hash: "en/#beruehmte-marleen-lohse", label: "Neues EN-Porträt: Marleen Lohse" },
  { hash: "#beruehmte-jens-riewa", label: "Neues Porträt: Jens Riewa" },
  { hash: "en/#beruehmte-jens-riewa", label: "Neues EN-Porträt: Jens Riewa" },
  { hash: "#beruehmte-susan-polgar", label: "Neues Porträt: Susan Polgár" },
  { hash: "en/#beruehmte-susan-polgar", label: "Neues EN-Porträt: Susan Polgár" },
  { hash: "#beruehmte-maria-treben", label: "Neues Porträt: Maria Treben" },
  { hash: "en/#beruehmte-maria-treben", label: "Neues EN-Porträt: Maria Treben" },
  { hash: "#beruehmte-joel-goldsmith", label: "Neues Porträt: Joel S. Goldsmith" },
  { hash: "en/#beruehmte-joel-goldsmith", label: "Neues EN-Porträt: Joel S. Goldsmith" },
  { hash: "#beruehmte-bruno-groening", label: "Neues Porträt: Bruno Gröning" },
  { hash: "en/#beruehmte-bruno-groening", label: "Neues EN-Porträt: Bruno Gröning" },
  { hash: "#beruehmte-eleanor-roosevelt", label: "Neues Porträt: Eleanor Roosevelt" },
  { hash: "en/#beruehmte-eleanor-roosevelt", label: "Neues EN-Porträt: Eleanor Roosevelt" },
  { hash: "#beruehmte-hubert-benoit", label: "Neues Porträt: Hubert Benoit" },
  { hash: "en/#beruehmte-hubert-benoit", label: "Neues EN-Porträt: Hubert Benoit" },
  { hash: "#beruehmte-werner-ablass", label: "Neues Porträt: Werner Ablass" },
  { hash: "en/#beruehmte-werner-ablass", label: "Neues EN-Porträt: Werner Ablass" },
  { hash: "#beruehmte-camille-kitt", label: "Neues Porträt: Camille Kitt" },
  { hash: "en/#beruehmte-camille-kitt", label: "Neues EN-Porträt: Camille Kitt" },
  { hash: "#beruehmte-wolfram-eilenberger", label: "Neues Porträt: Wolfram Eilenberger" },
  { hash: "en/#beruehmte-wolfram-eilenberger", label: "Neues EN-Porträt: Wolfram Eilenberger" },
  { hash: "#beruehmte-ilka-bessin", label: "Neues Porträt: Ilka Bessin" },
  { hash: "en/#beruehmte-ilka-bessin", label: "Neues EN-Porträt: Ilka Bessin" },
  { hash: "#beruehmte-olaf-schubert", label: "Neues Porträt: Olaf Schubert" },
  { hash: "en/#beruehmte-olaf-schubert", label: "Neues EN-Porträt: Olaf Schubert" },
];

function startServer() {
  return new Promise((resolve, reject) => {
    const proc = spawn("python3", ["-m", "http.server", String(PORT)], {
      cwd: path.join(__dirname, ".."),
      stdio: "ignore",
    });
    proc.on("error", reject);
    // kurze Wartezeit, bis der Server tatsächlich antwortet
    setTimeout(() => resolve(proc), 1200);
  });
}

async function checkRoute(browser, route) {
  const page = await browser.newPage();
  const errors = [];
  // Nur echte, unbehandelte JS-Laufzeitfehler zählen (pageerror) – reine
  // Ressourcen-/Netzwerkfehler externer Drittanbieter (Google Fonts, OneSignal-SW-
  // Import, Cloudflare Analytics) erzeugen in Sandbox-/CI-Umgebungen ohne echtes
  // Internet zuverlässig Fehler, die mit dem Zustand der eigenen App nichts zu tun
  // haben. In einer Umgebung mit echtem Internetzugang treten sie nicht auf.
  const ENV_NOISE = [
    "ServiceWorker script evaluation failed",
    "ERR_TUNNEL_CONNECTION_FAILED",
    "ERR_CERT_AUTHORITY_INVALID",
    "ERR_PROXY_CONNECTION_FAILED",
    "ERR_NAME_NOT_RESOLVED",
  ];
  page.on("pageerror", (err) => {
    if (ENV_NOISE.some((n) => err.message.includes(n))) return;
    errors.push(err.message);
  });

  await page.goto(`${BASE}/${route.hash}`, { waitUntil: "networkidle", timeout: 20000 });
  await page.waitForTimeout(500);

  let clickOk = true;
  if (route.hash === "#detlef-rathmer-jazz") {
    // Klick-zum-Laden-Facade testen: Thumbnail antippen, prüfen dass ein echter
    // Iframe mit sichtbarer Größe erscheint (genau der Bug, der zuletzt gemeldet wurde).
    const facade = page.locator('[onclick^="window.ytFacadePlay"]').first();
    if (await facade.count()) {
      await facade.click();
      await page.waitForTimeout(400);
      const iframe = page.locator('[onclick^="window.ytFacadePlay"]').first().locator("iframe");
      const box = await iframe.boundingBox().catch(() => null);
      clickOk = !!box && box.width > 10 && box.height > 10;
    }
  }

  await page.close();
  return { ...route, errors, clickOk };
}

(async () => {
  console.log("Starte lokalen Server …");
  const server = await startServer();
  const browser = await chromium.launch();
  let failed = false;

  try {
    for (const route of ROUTES) {
      const result = await checkRoute(browser, route);
      const ok = result.errors.length === 0 && result.clickOk;
      console.log(`${ok ? "✅" : "❌"} ${result.label} (${BASE}/${result.hash || ""})`);
      if (result.errors.length) {
        failed = true;
        result.errors.slice(0, 5).forEach((e) => console.log("   JS-Fehler:", e));
      }
      if (!result.clickOk) {
        failed = true;
        console.log("   Klick-zum-Laden-Video: Iframe nach Klick nicht sichtbar/zu klein.");
      }
    }
  } finally {
    await browser.close();
    server.kill();
  }

  if (failed) {
    console.log("\nSmoke-Test FEHLGESCHLAGEN.");
    process.exit(1);
  }
  console.log("\nAlle geprüften Routen ok.");
})();
