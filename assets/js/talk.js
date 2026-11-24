// Shared behavior for talk pages (/talks/<slug>/): theme toggle, nav, mobile menu.
(function () {
  const root = document.documentElement;
  const btn = document.querySelector('.theme-toggle');
  const sys = window.matchMedia('(prefers-color-scheme: dark)');
  const current = () => root.getAttribute('data-theme') || (sys.matches ? 'dark' : 'light');
  const sync = () => btn.setAttribute('aria-pressed', current() === 'dark' ? 'true' : 'false');
  btn.addEventListener('click', () => {
    const next = current() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    sync();
  });
  sys.addEventListener('change', sync);
  sync();

  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-links');
  const setMenu = open => {
    navMenu.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  };
  navToggle.addEventListener('click', () => setMenu(!navMenu.classList.contains('open')));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
})();
