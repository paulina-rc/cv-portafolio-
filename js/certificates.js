(function () {
  var modal    = document.getElementById('certModal');
  if (!modal) return;

  var frame    = modal.querySelector('.cert-modal__frame');
  var heading  = document.getElementById('certModalTitle');
  var dlLink   = modal.querySelector('.cert-modal__download');
  var closeBtn = modal.querySelector('.cert-modal__close');
  var backdrop = modal.querySelector('.cert-modal__backdrop');

  function openModal(pdf, title) {
    heading.textContent = title;
    frame.src = pdf;
    dlLink.href = pdf;
    dlLink.setAttribute('download', pdf.split('/').pop());
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeModal() {
    modal.hidden = true;
    frame.src = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.cert-view-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      openModal(btn.dataset.pdf, btn.dataset.title);
    });
  });

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });
}());
