// Shared nav + footer injected on every page

const NAV_HTML = `
<nav class="navbar" id="navbar">
  <div class="container nav-inner">
    <a href="index.html" class="nav-logo">
      <img src="Brand%20assets/kbgfitnessclub.png" alt="KBG Fitness Club" />
    </a>
    <ul class="nav-links" id="navLinks">
      <li><a href="om-oss.html"       data-nav="om-oss"      data-i18n="nav.om-oss">Om oss</a></li>
      <li><a href="fasiliteter.html"  data-nav="panatta"     data-i18n="nav.panatta">Panatta</a></li>
      <li><a href="medlemskap.html"   data-nav="medlemskap"  data-i18n="nav.medlemskap">Medlemskap</a></li>
      <li><a href="nettbutikk.html"   data-nav="nettbutikk"  data-i18n="nav.butikk">Butikk</a></li>
      <li><a href="kontakt.html"      data-nav="kontakt"     data-i18n="nav.kontakt">Kontakt</a></li>
    </ul>
    <div class="nav-right">
      <a href="medlemskap.html" class="btn btn-primary nav-cta" data-i18n="nav.cta">Bli medlem</a>
      <div class="lang-switcher" aria-label="Language / Språk">
        <button class="lang-btn" data-lang="no" aria-label="Norsk" aria-pressed="true" title="Norsk">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 16" width="22" height="16" aria-hidden="true">
            <rect width="22" height="16" fill="#EF2B2D"/>
            <rect x="7" width="4" height="16" fill="#fff"/>
            <rect y="6" width="22" height="4" fill="#fff"/>
            <rect x="8" width="2" height="16" fill="#002868"/>
            <rect y="7" width="22" height="2" fill="#002868"/>
          </svg>
        </button>
        <button class="lang-btn" data-lang="en" aria-label="English" aria-pressed="false" title="English">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="22" height="16" aria-hidden="true">
            <rect width="60" height="30" fill="#012169"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
            <path d="M30,0 V30 M0,15 H60" stroke="#fff" stroke-width="10"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="4"/>
            <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" stroke-width="6"/>
          </svg>
        </button>
      </div>
      <button class="hamburger" id="hamburger" aria-label="Meny">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container footer-inner">
    <div class="footer-logo">
      <img src="Brand%20assets/kbgfitnessclub.png" alt="KBG Fitness Club" />
      <p data-i18n="footer.tagline">For alle. Fra nabolaget.</p>
    </div>
    <div class="footer-links">
      <h4 data-i18n="footer.nav-title">Navigasjon</h4>
      <ul>
        <li><a href="index.html"        data-i18n="footer.nav-home">Hjem</a></li>
        <li><a href="om-oss.html"       data-i18n="footer.nav-om-oss">Om oss</a></li>
        <li><a href="fasiliteter.html"  data-i18n="footer.nav-panatta">Panatta</a></li>
        <li><a href="medlemskap.html"   data-i18n="footer.nav-med">Medlemskap</a></li>
        <li><a href="nettbutikk.html"   data-i18n="footer.nav-butikk">Butikk</a></li>
        <li><a href="kontakt.html"      data-i18n="footer.nav-kontakt">Kontakt</a></li>
      </ul>
    </div>
    <div class="footer-links">
      <h4 data-i18n="footer.fac-title">Fasiliteter</h4>
      <ul>
        <li><a href="fasiliteter.html" data-i18n="footer.fac-1">Frivektsområde</a></li>
        <li><a href="fasiliteter.html" data-i18n="footer.fac-2">Maskiner</a></li>
        <li><a href="fasiliteter.html" data-i18n="footer.fac-3">Cardio</a></li>
        <li><a href="fasiliteter.html" data-i18n="footer.fac-4">Garderobe & Dusj</a></li>
      </ul>
    </div>
    <div class="footer-social">
      <h4 data-i18n="footer.follow">Følg oss</h4>
      <div class="social-icons">
        <a href="https://www.instagram.com/kbg_fitnessclub" target="_blank" rel="noopener" aria-label="Instagram" class="social-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
        <a href="https://www.facebook.com/kbgfitnessclub" target="_blank" rel="noopener" aria-label="Facebook" class="social-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </a>
      </div>
      <p class="footer-address">Karsches gate 3<br />3611 Kongsberg</p>
      <p class="footer-address" style="margin-top:10px;font-size:0.85rem;line-height:1.8">
        <a href="tel:+4741411231" style="color:rgba(255,255,255,0.6);transition:color 0.2s" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">+47 414 11 231</a><br />
        <a href="tel:+4741622690" style="color:rgba(255,255,255,0.6);transition:color 0.2s" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">+47 416 22 690</a>
      </p>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container">
      <span data-i18n="footer.rights">© 2024 KBG Fitness Club. Alle rettigheter forbeholdt.</span>
      <span><span data-i18n="footer.made-by">Laget av</span> <a href="https://tenkimedia.no" target="_blank" rel="noopener" style="color:rgba(255,255,255,0.5);text-decoration:underline;transition:color 0.2s" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">Tenki</a></span>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  // Inject nav + footer
  const navEl = document.getElementById('nav-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  if (navEl) navEl.outerHTML = NAV_HTML;
  if (footerEl) footerEl.outerHTML = FOOTER_HTML;

  // Highlight active nav link
  const page = document.body.dataset.page;
  document.querySelectorAll('[data-nav]').forEach(a => {
    if (a.dataset.nav === page) a.classList.add('nav-active');
  });

  // Navbar scroll behaviour
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  // Hamburger
  document.addEventListener('click', e => {
    const btn = e.target.closest('#hamburger');
    if (!btn) return;
    const links = document.getElementById('navLinks');
    btn.classList.toggle('open');
    links.classList.toggle('open');
    document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
  });

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('hamburger')?.classList.remove('open');
      document.getElementById('navLinks')?.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
});

// Netlify Identity widget — intercepts #invite_token and #recovery_token in the URL,
// shows the set-password dialog, then redirects to /admin/ after a successful login.
(function () {
  var s = document.createElement('script');
  s.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
  document.head.appendChild(s);
  s.onload = function () {
    if (!window.netlifyIdentity) return;
    window.netlifyIdentity.on('init', function (user) {
      if (!user) {
        window.netlifyIdentity.on('login', function () {
          document.location.href = '/admin/';
        });
      }
    });
  };
})();

// GA4 click tracking for tel: and mailto: links.
// Delegated on document so it also catches links injected later (e.g. the footer above).
document.addEventListener('click', e => {
  const link = e.target.closest('a[href^="tel:"], a[href^="mailto:"]');
  if (!link || typeof gtag !== 'function') return;

  const href = link.getAttribute('href');
  const linkText = link.textContent.trim();

  if (href.startsWith('tel:')) {
    const phoneNumber = href.slice(4);
    console.log('[GA4] phone_click', { phoneNumber, linkText });

    // Phones open the dialer immediately on click, which can kill the page
    // before the gtag beacon goes out. Delay navigation until the hit is
    // confirmed (event_callback) or 300ms passes, whichever comes first.
    let navigated = false;
    const goToDialer = () => {
      if (navigated) return;
      navigated = true;
      window.location.href = href;
    };

    e.preventDefault();
    gtag('event', 'phone_click', {
      phone_number: phoneNumber,
      link_text: linkText,
      event_callback: goToDialer
    });
    setTimeout(goToDialer, 300);
  } else if (href.startsWith('mailto:')) {
    const emailAddress = href.slice(7).split('?')[0];
    console.log('[GA4] email_click', { emailAddress, linkText });
    gtag('event', 'email_click', {
      email_address: emailAddress,
      link_text: linkText
    });
  }
});
