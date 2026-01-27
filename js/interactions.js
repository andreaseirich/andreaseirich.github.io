/**
 * Cinematic interactions: reel progress, scene reveals, nav, smooth scroll
 */

(function () {
  'use strict';

  const scenes = document.querySelectorAll('.scene');
  const reelTrack = document.querySelector('.reel-track');
  const reelDots = document.querySelectorAll('.reel-dot');
  const navbar = document.querySelector('.navbar');

  function scrollProgress() {
    const d = document.documentElement.scrollHeight - window.innerHeight;
    return d <= 0 ? 0 : Math.min(1, window.scrollY / d);
  }

  function activeSceneIndex() {
    let idx = 0;
    const vh = window.innerHeight * 0.5;
    scenes.forEach(function (s, i) {
      const r = s.getBoundingClientRect();
      if (r.top <= vh) idx = i;
    });
    return idx;
  }

  window.updateReelProgress = function (p) {
    if (!p && p !== 0) p = scrollProgress();
    if (reelTrack) reelTrack.style.setProperty('--reel-fill', (p * 100) + '%');
    const idx = activeSceneIndex();
    reelDots.forEach(function (d, i) {
      d.classList.toggle('active', i === idx);
      d.setAttribute('aria-current', i === idx ? 'true' : 'false');
    });
  };

  window.addEventListener('scroll', function () {
    window.updateReelProgress();
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  window.addEventListener('load', function () {
    window.updateReelProgress();
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { rootMargin: '-15% 0px -15% 0px', threshold: 0 });

  document.querySelectorAll('.scene-content.reveal').forEach(function (el) {
    observer.observe(el);
  });

  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === '#') return;
    var target = document.querySelector(href);
    if (!target) return;
    a.addEventListener('click', function (e) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  reelDots.forEach(function (d) {
    var href = d.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    var target = document.querySelector(href);
    if (!target) return;
    d.addEventListener('click', function (e) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
