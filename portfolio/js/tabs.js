/* ============================================================
   tabs.js
   - Loads shared nav + footer components into each page
   - Sets the active nav link based on the current page
   Works on GitHub Pages and any http(s) server.
   ============================================================ */
(function () {
  "use strict";

  /* Resolve a path prefix so pages in /pages/ reach root assets.
     Pages set <body data-root="../"> ; home uses "" (default). */
  var ROOT = document.body.getAttribute("data-root") || "";

  /* Which page are we on? Used for active state. */
  var PAGE = document.body.getAttribute("data-page") || "home";

  /* ---- Load an HTML partial into a placeholder element ---- */
  function inject(selector, file, done) {
    var host = document.querySelector(selector);
    if (!host) { if (done) done(); return; }

    fetch(ROOT + "components/" + file)
      .then(function (r) {
        if (!r.ok) throw new Error(r.status);
        return r.text();
      })
      .then(function (html) {
        // Rewrite {{ROOT}} tokens so links/images resolve from this page.
        host.innerHTML = html.replace(/\{\{ROOT\}\}/g, ROOT);
        if (done) done();
      })
      .catch(function () {
        // Graceful no-op if opened directly via file:// without a server.
        if (done) done();
      });
  }

  /* ---- Highlight the current page in the nav ---- */
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

  document.addEventListener("DOMContentLoaded", function () {
    inject("#nav-mount", "nav.html", setActive);
    inject("#footer-mount", "footer.html");
  });
})();
