document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  
  // Here you would typically send the data to a server
  // For now, we'll just show a success message
  const formMessage = document.getElementById('formMessage');
  formMessage.innerHTML = `
    <div class="alert alert-success">
      Thank you, ${name}! Your message has been sent. I'll get back to you soon.
    </div>
  `;
  
  // Clear the form
  document.getElementById('contactForm').reset();
  
  // Remove the message after 5 seconds
  setTimeout(() => {
    formMessage.innerHTML = '';
  }, 5000);
});