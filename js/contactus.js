
(function () {
  'use strict';
  var forms = document.querySelectorAll('.needs-validation');
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();



document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const thankYouModalEl = document.getElementById('thankYouModal');

  if (form && thankYouModalEl) {
    const thankYouModal = new bootstrap.Modal(thankYouModalEl);

    // ⛳️ Optional: cleanup for manual close
    thankYouModalEl.addEventListener('hidden.bs.modal', () => {
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) backdrop.remove();

      document.body.classList.remove('modal-open');
      document.body.style.paddingRight = '';
    });

    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' }
        });

        if (response.ok) {
          form.reset();
          thankYouModal.show();

          // ⏳ Optional: auto-close modal after 5 seconds
          setTimeout(() => {
            thankYouModal.hide();

            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) backdrop.remove();

            document.body.classList.remove('modal-open');
            document.body.style.paddingRight = '';
          }, 5000);

        } else {
          alert('❌ Something went wrong. Please try again.');
        }
      } catch (error) {
        alert('❌ Error: Could not submit form.');
      }
    });
  }
});


