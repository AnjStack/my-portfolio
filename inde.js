// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form validation for contact form
document.getElementById('btn-2').addEventListener('click', function (e) {
  e.preventDefault();

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.querySelector('textarea').value;

  if (name === '' || email === '' || message === '') {
    alert('Please fill out all fields.');
  } else if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
  } else {
    alert(`Thank you ${name}, your message has been sent successfully!`);
  }
});

// Email validation function
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}

// Resume download confirmation
document.querySelector('.download-link').addEventListener('click', function () {
  alert('Your resume download will start shortly.');
});

// Project card hover effect (optional)
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.transition = 'transform 0.3s ease';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});
