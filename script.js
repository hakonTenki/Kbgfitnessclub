// KBG FITNESS CLUB — SCRIPT

// ── ANIMATED HERO WORDS ──────────────────────────
const words = document.querySelectorAll('.hero-word');
if (words.length) {
  let current = 0;

  function cycleWord() {
    const prev = current;
    current = (current + 1) % words.length;

    words[prev].classList.remove('active');
    words[prev].classList.add('exit');
    words[prev].setAttribute('aria-hidden', 'true');

    words[current].classList.add('active');
    words[current].setAttribute('aria-hidden', 'false');

    setTimeout(() => words[prev].classList.remove('exit'), 500);
  }

  setInterval(cycleWord, 2200);
}

// ── FADE-UP ANIMATIONS ───────────────────────────
const fadeEls = document.querySelectorAll(
  '.tilbud-card, .fasilitet-card, .pricing-card, .testimonial-card, .value-item, .pillar, .kontakt-item, .value-card, .gateway-card, .step, .enkel-stat'
);
fadeEls.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => observer.observe(el));

// ── CONTACT FORM (Formspree) ──────────────────────
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  const successMsg = document.getElementById('formSuccess');
  const errorMsg   = document.getElementById('formError');
  const submitBtn  = document.getElementById('submitBtn');

  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    successMsg.style.display = 'none';
    errorMsg.style.display   = 'none';
    const lang = (typeof localStorage !== 'undefined' && localStorage.getItem('kbg-lang')) || 'no';
    submitBtn.textContent = lang === 'en' ? 'Sending...' : 'Sender...';
    submitBtn.disabled = true;

    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' }
      });

      if (res.ok) {
        successMsg.style.display = 'block';
        contactForm.reset();
        if (typeof gtag === 'function') {
          gtag('event', 'form_submit', {
            form_id: 'contactForm',
            form_name: 'kontakt',
            event_callback: function () {
              console.log('[GA4] form_submit sent');
            }
          });
        }
      } else {
        errorMsg.style.display = 'block';
      }
    } catch {
      errorMsg.style.display = 'block';
    }

    submitBtn.textContent = lang === 'en' ? 'Send message' : 'Send melding';
    submitBtn.disabled = false;
  });
}

// ── FAQ ───────────────────────────────────────────
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ── HERO PARALLAX ────────────────────────────────
window.addEventListener('scroll', () => {
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg && window.scrollY < window.innerHeight) {
    heroBg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
  }
}, { passive: true });
