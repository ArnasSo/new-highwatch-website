document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('download-modal');
  if (!modal) return;

  const openButtons = document.querySelectorAll('.open-download');
  const closeButton = modal.querySelector('.modal-close');
  const backdrop = modal.querySelector('.modal-backdrop');

  function openModal(event) {
    if (event) event.preventDefault();
    modal.classList.add('is-visible');
    document.body.style.overflow = 'hidden'; // prevent background scroll
  }

  function closeModal() {
    modal.classList.remove('is-visible');
    document.body.style.overflow = '';
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  if (closeButton) {
    closeButton.addEventListener('click', closeModal);
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeModal);
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && modal.classList.contains('is-visible')) {
      closeModal();
    }
  });
});
