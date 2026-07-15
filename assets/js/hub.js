/* Hub — titre animé (mot à mot) + reveals au scroll */
(function () {
  "use strict";
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* titre héro : révélation mot à mot + soulignement de « Zéro dépendance » */
  var heroTitle = document.querySelector(".hero-title");
  if (heroTitle && !reduce) {
    var counter = { i: 0 };
    (function wrap(container) {
      Array.prototype.slice.call(container.childNodes).forEach(function (node) {
        if (node.nodeType === 3) { // texte : découper en mots
          var frag = document.createDocumentFragment();
          node.textContent.split(/(\s+)/).forEach(function (part) {
            if (part === "") return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            var s = document.createElement("span");
            s.className = "word";
            s.style.setProperty("--i", counter.i++);
            s.textContent = part;
            frag.appendChild(s);
          });
          container.replaceChild(frag, node);
        } else if (node.nodeType === 1 && node.tagName !== "BR") { // <span class="accent"> : garder + découper dedans
          wrap(node);
        }
        // <br> : laissé tel quel
      });
    })(heroTitle);
  }

  /* reveals au scroll */
  var reveals = document.querySelectorAll("[data-reveal]");
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
  reveals.forEach(function (el) { io.observe(el); });
})();
