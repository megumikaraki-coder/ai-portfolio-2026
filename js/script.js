/**
 * Megumi Karaki | AI Portfolio - Shared Script
 * Loaded by both index.html and bloom-english.html.
 * Vanilla JS only, no libraries. Each feature checks for its target
 * elements before running, so this single file works on either page.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderShadow();
  initLightbox();
});

/* --------------------------------------------------------------------
 * 1. Header shadow on scroll
 * Adds a slightly stronger shadow once the page scrolls, for a subtle
 * sense of depth without any heavy animation.
 * -------------------------------------------------------------------- */
function initHeaderShadow() {
  const header = document.querySelector('.site-header, .lp-header');
  if (!header) return;

  const updateShadow = () => {
    if (window.scrollY > 8) {
      header.style.boxShadow = '0 8px 24px rgba(15, 42, 68, 0.06)';
    } else {
      header.style.boxShadow = 'none';
    }
  };

  updateShadow();
  window.addEventListener('scroll', updateShadow, { passive: true });
}

/* --------------------------------------------------------------------
 * 2. Lightbox (bloom-english.html design images only)
 * Clicking a .lp-gallery-item opens its full image in an overlay.
 * -------------------------------------------------------------------- */
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const triggers = document.querySelectorAll('.lp-gallery-item');
  if (!lightbox || !triggers.length) return;

  const img = lightbox.querySelector('.lightbox-img');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  const open = (src, alt) => {
    img.src = src;
    img.alt = alt;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // prevent background scroll while open
  };

  const close = () => {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  triggers.forEach((btn) => {
    btn.addEventListener('click', () => {
      const thumb = btn.querySelector('img');
      open(btn.dataset.full || thumb.src, thumb.alt);
    });
  });

  closeBtn.addEventListener('click', close);

  // Click on the dark backdrop (not the image itself) also closes it.
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) close();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });
}
