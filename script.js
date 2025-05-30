document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  

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


  document.querySelectorAll('[data-filter]').forEach(button => {
    button.addEventListener('click', function() {
 
      document.querySelectorAll('[data-filter]').forEach(btn => {
        btn.classList.remove('active');
      });
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      const galleryItems = document.querySelectorAll('.gallery-item');
      
      galleryItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  

  
  document.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', function() {
      const imgSrc = this.querySelector('img').getAttribute('src');
      const title = this.querySelector('h3').textContent;
      const description = this.querySelector('p').textContent;
      const category = this.querySelector('.badge').textContent;
      
      document.getElementById('modalImage').setAttribute('src', imgSrc);
      document.getElementById('modalTitle').textContent = title;
      document.getElementById('modalDescription').innerHTML = `<p>${description}</p>`;
      document.getElementById('modalCategory').textContent = category;
      
      const modal = new bootstrap.Modal(document.getElementById('galleryModal'));
      modal.show();
    });
  });