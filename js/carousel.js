/* ============================================================
   carousel.js
   Builds an infinite, seamless tech-logo marquee.
   The track is duplicated once so the CSS animation (-50%)
   loops with no visible jump. Pauses on hover (CSS + JS).
   Logos are real brand SVGs from cdn.simpleicons.org.
   ============================================================ */
(function () {
  "use strict";

  var CDN = "https://cdn.simpleicons.org/";

  // [label, simpleicons slug]
  var TECH = [
    ["Java",       "openjdk"],
    ["JavaScript", "javascript"],
    ["Python",     "python"],
    ["PHP",        "php"],
    ["SQL",        "mysql"],

    ["HTML",       "html5"],
    ["CSS",        "css"],
    ["Flask",      "flask"],
    ["Git",        "git"],
    ["GitHub",     "github"],
    ["Figma",      "figma"]
  ];

  function makeItem(label, slug) {
    var item = document.createElement("div");
    item.className = "carousel__item";

    var img = document.createElement("img");
    img.src = CDN + slug;
    img.alt = label + " logo";
    img.loading = "lazy";
    img.width = 24;
    img.height = 24;

    var span = document.createElement("span");
    span.textContent = label;

    item.appendChild(img);
    item.appendChild(span);
    return item;
  }

  function init() {
    var track = document.getElementById("carousel-track");
    if (!track) return;

    // Render the set twice → seamless -50% loop.
    for (var pass = 0; pass < 2; pass++) {
      TECH.forEach(function (t) {
        var node = makeItem(t[0], t[1]);
        if (pass === 1) node.setAttribute("aria-hidden", "true"); // duplicate is decorative
        track.appendChild(node);
      });
    }

    // Explicit hover pause (belt-and-braces with the CSS rule).
    var carousel = track.closest(".carousel");
    if (carousel) {
      carousel.addEventListener("mouseenter", function () {
        track.style.animationPlayState = "paused";
      });
      carousel.addEventListener("mouseleave", function () {
        track.style.animationPlayState = "running";
      });
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
