/* ============================================================
   projects.js — Opens/closes the project preview modal.
   Reads content from the triggering card's data-* attributes.
   ============================================================ */
(function () {
  "use strict";

  var modal = document.getElementById("projectModal");
  if (!modal) return;

  var img      = document.getElementById("projectModalImg");
  var heading  = document.getElementById("projectModalTitle");
  var desc     = document.getElementById("projectModalDesc");
  var stack    = document.getElementById("projectModalStack");
  var github   = document.getElementById("projectModalGithub");
  var closeBtn = modal.querySelector(".proj-modal__close");
  var closeFootBtn = document.getElementById("projectModalCloseBtn");
  var backdrop = modal.querySelector(".proj-modal__backdrop");

  function openModal(card) {
    img.src = card.dataset.preview;
    img.alt = card.dataset.title + " preview";
    heading.textContent = card.dataset.title;
    desc.textContent = card.dataset.desc;

    stack.innerHTML = "";
    card.dataset.stack.split(",").forEach(function (t) {
      var pill = document.createElement("span");
      pill.className = "proj-pill";
      pill.textContent = t;
      stack.appendChild(pill);
    });

    github.href = card.dataset.repo;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".proj-preview-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openModal(btn.closest(".proj-card"));
    });
  });

  closeBtn.addEventListener("click", closeModal);
  closeFootBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });
}());
