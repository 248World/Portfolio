document.addEventListener('DOMContentLoaded', () => {
  // Initialize ScrollReveal
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: false, // Animations only play once
  });

  // Home section animations
  sr.reveal('.home__data', { origin: 'left', delay: 300 });
  sr.reveal('.home__social', { origin: 'left', delay: 400 });
  sr.reveal('.home__img', { origin: 'right', delay: 500 });

  // About section animations
  sr.reveal('.about .section-title', { origin: 'top', delay: 200 });
  sr.reveal('.about__container', { origin: 'bottom', delay: 300 });

  // Skills section animations
  sr.reveal('.skills .section-title', { origin: 'top', delay: 200 });
  sr.reveal('.skills__container', { origin: 'bottom', delay: 300 });
  sr.reveal('.skills__data', { interval: 100 }); // Staggered animation for each skill item

  // Projects section animations
  sr.reveal('.work.section#work .section-title', { origin: 'top', delay: 200 });
  sr.reveal('.work__container .work__img', { origin: 'bottom', interval: 100 }); // Staggered for project images

  // Services section animations
  sr.reveal('.work.section#services .section-title', { origin: 'top', delay: 200 });
  sr.reveal('.services .card', { origin: 'bottom', interval: 100 }); // Staggered for service cards

  // Testimonials section animations
  sr.reveal('.testimonials-heading', { origin: 'top', delay: 200 });
  sr.reveal('.testimonials-box-container .testimonials-box', { origin: 'bottom', interval: 100 }); // Staggered for testimonial boxes

  // Contact section animations
  sr.reveal('.contact .section-title', { origin: 'top', delay: 200 });
  sr.reveal('.contact__container', { origin: 'bottom', delay: 300 });
});