(function () {
  function toggleModal(modal, shouldOpen) {
    if (!modal) {
      return;
    }

    modal.classList.toggle('is-open', shouldOpen);
    modal.setAttribute('aria-hidden', shouldOpen ? 'false' : 'true');
  }

  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('[data-modal]');
    const openButtons = document.querySelectorAll('[data-open-modal]');
    const closeButtons = document.querySelectorAll('[data-close-modal]');

    openButtons.forEach((button) => {
      button.addEventListener('click', () => toggleModal(modal, true));
    });

    closeButtons.forEach((button) => {
      button.addEventListener('click', () => toggleModal(modal, false));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        toggleModal(modal, false);
      }
    });

    if (modal && modal.dataset && modal.classList.contains('is-open')) {
      modal.setAttribute('aria-hidden', 'false');
    }
  });
})();
