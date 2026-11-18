// Запуск меню после загрузки HTML-страницы.
document.addEventListener('DOMContentLoaded', () => {
  // Настройка меню в каждой шапке сайта.
  document.querySelectorAll('.site-header').forEach((header) => {
    const toggle = header.querySelector('.site-header__toggle');
    const nav = header.querySelector('.site-header__nav');

    if (!toggle || !nav) return;

    // Закрытие меню и сброс его состояния.
    const closeMenu = () => {
      header.classList.remove('site-header--menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Открыть меню');
    };

    // Открытие и закрытие меню по нажатию на кнопку.
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

    // Закрытие меню после выбора пункта навигации.
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    // Закрытие меню при нажатии вне шапки.
    document.addEventListener('click', (event) => {
      if (!header.contains(event.target)) closeMenu();
    });

    // Закрытие меню клавишей Escape.
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        toggle.focus();
      }
    });

    // Скрытие мобильного меню при переходе к широкому экрану.
    window.addEventListener('resize', () => {
      if (window.matchMedia('(min-width: 768px)').matches) closeMenu();
    });
  });
});
