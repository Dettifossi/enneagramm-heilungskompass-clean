// Reduzierte Bewegung: Skripte, die weich scrollen (behavior: 'smooth'), springen dann direkt.
(function () {
  if (!window.matchMedia || !window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  function plain(o) { return (o && typeof o === "object") ? Object.assign({}, o, { behavior: "auto" }) : o; }
  var st = window.scrollTo.bind(window), sb = window.scrollBy.bind(window), si = Element.prototype.scrollIntoView;
  window.scrollTo = function (a, b) { return typeof a === "object" ? st(plain(a)) : st(a, b); };
  window.scrollBy = function (a, b) { return typeof a === "object" ? sb(plain(a)) : sb(a, b); };
  Element.prototype.scrollIntoView = function (o) { return si.call(this, plain(o)); };
})();

// Tastatur- und Screenreader-Zugang für klickbare Flächen ohne eigene Rolle:
// Elemente mit data-route, die weder Link noch Button sind (z. B. Karten), werden
// als Button ausgezeichnet, sind per Tab erreichbar und lassen sich mit Enter oder
// Leertaste auslösen. Änderungen am Seitenaufbau werden beobachtet.
(function () {
  var INTERACTIVE = "a,button,input,select,textarea,summary,[role],[tabindex],[contenteditable]";

  function enhance() {
    var els = document.querySelectorAll("[data-route]:not(a):not(button)");
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (el.hasAttribute("role") || el.hasAttribute("tabindex")) continue;
      // Container, die eigene Bedienelemente enthalten, nicht doppelt auszeichnen.
      if (el.querySelector(INTERACTIVE)) continue;
      el.setAttribute("role", "button");
      el.setAttribute("tabindex", "0");
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    var el = e.target;
    if (!el || !el.hasAttribute || !el.hasAttribute("data-route")) return;
    if (el.getAttribute("role") !== "button" || el.tagName === "A" || el.tagName === "BUTTON") return;
    e.preventDefault();
    el.click();
  });

  var timer = null;
  function schedule() {
    if (timer) return;
    timer = setTimeout(function () { timer = null; enhance(); }, 250);
  }

  function start() {
    enhance();
    var root = document.getElementById("app") || document.body;
    new MutationObserver(schedule).observe(root, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
