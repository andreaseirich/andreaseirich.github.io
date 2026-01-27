/**
 * Interactions: 3D card tilt, scroll reveal, parallax, hero mouse-follow
 */

(function () {
  'use strict';

  // —— 3D Tilt on project cards ——
  const cards = document.querySelectorAll('.project.project-link');
  cards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const tiltX = (y - 0.5) * 12;
      const tiltY = (x - 0.5) * -12;
      card.style.transform = 'perspective(1000px) rotateX(' + tiltX + 'deg) rotateY(' + tiltY + 'deg) translateY(-10px) scale(1.02)';
    });
    card.addEventListener('mouseleave', function () {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
    });
  });

  // —— Scroll reveal (Intersection Observer) ——
  const reveal = document.querySelectorAll('.section, .hero-content');
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '-60px 0px -80px 0px', threshold: 0.1 });

  reveal.forEach(function (el) { observer.observe(el); });

  // —— Hero parallax (mouse-follow on decor) ——
  const hero = document.querySelector('.hero');
  const heroGlow = document.querySelector('.hero-glow');
  if (hero && heroGlow) {
    hero.addEventListener('mousemove', function (e) {
      const w = hero.offsetWidth;
      const h = hero.offsetHeight;
      const x = (e.clientX / w - 0.5) * 20;
      const y = (e.clientY / h - 0.5) * 20;
      heroGlow.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    });
    hero.addEventListener('mouseleave', function () {
      heroGlow.style.transform = 'translate(0, 0)';
    });
  }

  // —— Navbar backdrop on scroll ——
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 80);
    });
  }

  // —— Smooth scroll for anchor links ——
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    const href = a.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    a.addEventListener('click', function (e) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
