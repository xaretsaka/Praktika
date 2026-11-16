document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.site-header').forEach((header) => {
    const toggle = header.querySelector('.site-header__toggle');
    const nav = header.querySelector('.site-header__nav');

    if (!toggle || !nav) return;

    const closeMenu = () => {
      header.classList.remove('site-header--menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Открыть меню');
    };

    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';

      if (isOpen) {
        closeMenu();
        return;
      }

      header.classList.add('site-header--menu-open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Закрыть меню');
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (event) => {
      if (!header.contains(event.target)) closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        toggle.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (window.matchMedia('(min-width: 768px)').matches) closeMenu();
    });
  });
});
