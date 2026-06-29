/* ============================================================
   projects.js
   Renders project cards from a local data array.
   Structured so it can later be swapped for the GitHub REST API
   (see fetchFromGitHub below — disabled by default).
   ============================================================ */
(function () {
  "use strict";

  var GH_USER = "paulina-rojas";

  // Language → dot color (GitHub-style)
  var LANG_COLORS = {
    JavaScript: "#f1e05a",
    Python:     "#3572A5",
    Java:       "#b07219",
    PHP:        "#4F5D95",
    HTML:       "#e34c26",
    CSS:        "#563d7c",
    "C++":      "#f34b7d"
  };

  // Sample data — replace/extend or load from the API later.
  var PROJECTS = [
    {
      name: "personal-portfolio",
      description: "My personal portfolio website built with plain HTML, CSS and JavaScript. Responsive, accessible and deployed on GitHub Pages.",
      language: "HTML",
      tags: ["HTML", "CSS", "JavaScript"],
      stars: 4,
      url: "https://github.com/" + GH_USER + "/personal-portfolio"
    }
  ];

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function tag(label) {
    var t = el("span", "badge badge--line", label);
    return t;
  }

  function projectCard(p) {
    var color = LANG_COLORS[p.language] || "#C4956A";

    var card = el("article", "card proj-card");

    var bar = el("div", "proj-card__bar");
    bar.style.background = color;
    card.appendChild(bar);

    var body = el("div", "proj-card__body");

    var tags = el("div", "proj-card__tags");
    (p.tags || []).forEach(function (tg) { tags.appendChild(tag(tg)); });
    body.appendChild(tags);

    var name = el("h3", "proj-card__name", p.name);
    body.appendChild(name);

    var desc = el("p", "proj-card__desc", p.description);
    body.appendChild(desc);

    var foot = el("div", "proj-card__foot");

    var meta = el("div", "proj-meta");
    var lang = el("span", "lang", p.language);
    lang.style.setProperty("--lang-color", color);
    meta.appendChild(lang);
    var stars = el("span", "stars");
    stars.innerHTML =
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
      '<path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17.8 5.9 20.4l1.5-6.8L2.2 9l6.9-.7z"/></svg>' +
      '<span>' + p.stars + '</span>';
    meta.appendChild(stars);
    foot.appendChild(meta);

    var link = document.createElement("a");
    link.className = "btn btn--ghost btn--sm";
    link.href = p.url;
    link.target = "_blank";
    link.rel = "noopener";
    link.innerHTML = 'View repo <span class="arrow">&rarr;</span>';
    foot.appendChild(link);

    body.appendChild(foot);
    card.appendChild(body);
    return card;
  }

  function addCard() {
    var a = document.createElement("a");
    a.className = "card proj-card--add";
    a.href = "https://github.com/" + GH_USER + "?tab=repositories";
    a.target = "_blank";
    a.rel = "noopener";
    a.innerHTML =
      '<div class="inner"><div class="plus">+</div>' +
      '<div><strong>Add project</strong><br><span style="font-size:13px">More repositories coming soon</span></div></div>';
    return a;
  }

  function render() {
    var grid = document.getElementById("projects-grid");
    if (!grid) return;
    grid.innerHTML = "";
    PROJECTS.forEach(function (p) { grid.appendChild(projectCard(p)); });
    grid.appendChild(addCard());
  }

  /* ---- Future hook: live GitHub data ----
     Uncomment and call instead of render() to pull real repos.
     Maps the REST response into the same shape PROJECTS uses.
  function fetchFromGitHub() {
    return fetch("https://api.github.com/users/" + GH_USER + "/repos?sort=updated&per_page=12")
      .then(function (r) { return r.json(); })
      .then(function (repos) {
        PROJECTS = repos.map(function (repo) {
          return {
            name: repo.name,
            description: repo.description || "No description provided.",
            language: repo.language || "Other",
            tags: repo.topics && repo.topics.length ? repo.topics.slice(0, 3)
                                                     : [repo.language || "Code"],
            stars: repo.stargazers_count,
            url: repo.html_url
          };
        });
        render();
      })
      .catch(render);
  }
  */

  document.addEventListener("DOMContentLoaded", render);
})();
