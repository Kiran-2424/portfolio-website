document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Redirect to thank you page after fake form submission
    window.location.href = 'thankyou.html';
  });
  