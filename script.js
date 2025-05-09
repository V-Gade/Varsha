// Select the navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Add a click event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Get the target section ID from the link's href
    const targetId = this.getAttribute('href');

    // Scroll to the target section
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Add a scroll event listener to show/hide the navigation menu
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

document.getElementById('contact-link').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent the default link behavior
  var emailDisplay = document.getElementById('email-display');
  emailDisplay.textContent = 'Email: varsha.gade2412@gmail.com';
});
