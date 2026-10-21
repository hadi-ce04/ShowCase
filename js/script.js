(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const themeLabel = document.querySelector('.theme-label');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const form = document.querySelector('#contact-form');
  const KEY = 'hadi-portfolio-theme';
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let saved;
  try { saved = localStorage.getItem(KEY); } catch (_) { /* Storage may be unavailable. */ }
  const setTheme = value => {
    root.dataset.theme = value;
    if (themeButton) {
      themeButton.setAttribute('aria-pressed', String(value === 'dark'));
      themeButton.setAttribute('aria-label', `Switch to ${value === 'dark' ? 'light' : 'dark'} theme`);
    }
    if (themeLabel) themeLabel.textContent = value === 'dark' ? 'DAY' : 'NIGHT';
  };
  setTheme(saved === 'dark' || saved === 'light' ? saved : systemDark ? 'dark' : 'light');
  themeButton?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem(KEY, next); } catch (_) { /* Nonessential preference. */ }
  });
  const closeMenu = () => { nav?.classList.remove('open'); menuButton?.setAttribute('aria-expanded', 'false'); };
  menuButton?.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    nav.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  document.addEventListener('click', e => { if (nav && menuButton && !nav.contains(e.target) && !menuButton.contains(e.target)) closeMenu(); });
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
  form?.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get('name')).trim();
    const email = String(data.get('email')).trim();
    const subject = String(data.get('subject')).trim();
    const message = String(data.get('message')).trim();
    const body = `From: ${name}\nReply-to: ${email}\n\n${message}`;
    const href = `mailto:abdulhadi7961@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const status = form.querySelector('.form-status');
    if (status) status.textContent = 'Opening your email app. Review and send the draft there. If nothing opens, use the email address on the left.';
    window.location.href = href;
  });
})();
