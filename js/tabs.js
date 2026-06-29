/* ============================================================
   tabs.js — Sets the active nav link based on the current page.
   ============================================================ */
(function () {
  "use strict";

  var PAGE = document.body.getAttribute("data-page") || "home";

  function setActive() {
    var links = document.querySelectorAll(".nav-links a[data-nav]");
    links.forEach(function (a) {
      if (a.getAttribute("data-nav") === PAGE) {
        a.classList.add("is-active");
        a.setAttribute("aria-current", "page");
      } else {
        a.classList.remove("is-active");
        a.removeAttribute("aria-current");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", setActive);
})();
