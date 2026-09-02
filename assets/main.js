// AM Technexus Labs, main.js
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  const ham = document.getElementById('ham');
  const mob = document.getElementById('mob');

  // Scroll shadow on nav
  window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 8);
  }, { passive: true });

  // Hamburger toggle
  if (ham && mob) {
    ham.addEventListener('click', () => {
      const open = mob.classList.toggle('open');
      ham.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }

  // Close mobile menu on link click
  document.querySelectorAll('.nav__mob a').forEach(a => {
    a.addEventListener('click', () => {
      mob?.classList.remove('open');
      ham?.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Fade-up on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
});
