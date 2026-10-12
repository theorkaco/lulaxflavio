/* Interações leves da página. Nenhum pixel, cookie ou ferramenta de rastreamento é carregado. */
(() => {
  'use strict';

  const currentYear = document.getElementById('current-year');
  if (currentYear) currentYear.textContent = String(new Date().getFullYear());

  // Mostra imagens reais apenas quando o arquivo correspondente está disponível.
  const frames = Array.from(document.querySelectorAll('[data-preview-path]'));
  frames.forEach(frame => {
    const path = frame.getAttribute('data-preview-path');
    const image = frame.querySelector('img');
    const fallback = frame.querySelector('.preview-placeholder');
    if (!path || !image || !fallback) return;

    const loader = new Image();
    loader.onload = () => {
      image.src = path;
      image.hidden = false;
      fallback.hidden = true;
      if (frames.every(f => f.querySelector('img')?.hidden === false)) {
        const note = document.getElementById('preview-legal');
        if (note) note.textContent = 'Prévia de páginas reais do dossiê. Publicação de outubro de 2026, com informações verificadas até 11/10/2026.';
      }
    };
    loader.onerror = () => {}; // Prévia ainda não fornecida: mantém placeholder explicitamente ilustrativo.
    loader.src = path;
  });

  // Barra de checkout somente em telas menores e fora das áreas de CTA principal.
  const mobileBar = document.getElementById('mobile-cta');
  const hero = document.querySelector('.hero');
  const offer = document.querySelector('.offer');
  const final = document.querySelector('.final-section');
  if (!mobileBar || !hero || !offer || !final || !('IntersectionObserver' in window)) return;

  let intersecting = new Set();
  const targets = [hero, offer, final];
  const update = () => {
    const isMobile = window.matchMedia('(max-width: 760px)').matches;
    const show = isMobile && !targets.some(element => intersecting.has(element)) && window.scrollY > 250;
    mobileBar.hidden = !show;
    document.body.classList.toggle('has-mobile-cta', show);
  };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.isIntersecting ? intersecting.add(entry.target) : intersecting.delete(entry.target));
    update();
  }, {threshold: 0.08});
  targets.forEach(element => observer.observe(element));
  window.addEventListener('resize', update, {passive: true});
  window.addEventListener('scroll', update, {passive: true});
})();
