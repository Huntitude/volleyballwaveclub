
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
  const modalEl = document.getElementById('thankYouModal');
  const modal = new bootstrap.Modal(modalEl);
  const actionURL = "https://formsubmit.co/ajax/director@wavevolleyball.net";

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    const formData = new FormData(form);

    try {
      const response = await fetch(actionURL, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        form.classList.remove('was-validated');

        modal.show();

        let seconds = 5;
        const countdownSpan = modalEl.querySelector('#countdown');
        countdownSpan.textContent = seconds;

        const interval = setInterval(() => {
          seconds--;
          countdownSpan.textContent = seconds;
          if (seconds <= 0) {
            clearInterval(interval);
            modal.hide();
          }
        }, 1000);
      } else {
        alert('Error: Submission failed.');
      }
    } catch (error) {
      alert('Error: Could not reach the server.');
    }
  });