document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('contact-form');
  
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      name = document.getElementById('name').value;
      email = document.getElementById('email').value;
      message = document.getElementById('message').value;
  
      if (name && email && message) {
        alert(`Gracias ${name}, tu mensaje ha sido enviado.`);
        contactForm.reset();
      } else {
        alert('Espacios incompletos');
      }
    });
  });