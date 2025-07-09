
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

  // Only run if both form and modal exist
  if (form && thankYouModalEl) {
    const thankYouModal = new bootstrap.Modal(thankYouModalEl);

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
        } else {
          alert('❌ Something went wrong. Please try again.');
        }
      } catch (error) {
        alert('❌ Error: Could not submit form.');
      }
    });
  }
});


