
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



const form = document.getElementById('contactForm');
const thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));

form.addEventListener('submit', async function (e) {
  e.preventDefault(); // Prevent default form submit

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' }
    });

    if (response.ok) {
      form.reset();
      thankYouModal.show(); // Show Bootstrap modal
    } else {
      alert('Something went wrong. Please try again.');
    }
  } catch (error) {
    alert('Error: Could not submit form.');
  }
});



