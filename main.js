// Burger menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav__menu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu when a nav link is clicked
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Dark/Light mode toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;
const header = document.querySelector('.l-header');
const footer = document.querySelector('.footer');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  header.classList.toggle('light-mode');
  footer.classList.toggle('light-mode');
  navMenu.classList.toggle('light-mode');
  if (body.classList.contains('light-mode')) {
    themeIcon.classList.remove('bx-sun');
    themeIcon.classList.add('bx-moon');
  } else {
    themeIcon.classList.remove('bx-moon');
    themeIcon.classList.add('bx-sun');
  }
});

