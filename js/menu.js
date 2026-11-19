const menu = document.querySelector('[data-menu]');
const openBtn = document.querySelector('[data-menu-open]');
const closeBtn = document.querySelector('[data-menu-close]');
const pageParts = document.querySelectorAll('.header, main, .footer');

function toggleMenu(isOpen) {
  menu.classList.toggle('is-open', isOpen);
  document.body.classList.toggle('no-scroll', isOpen);
  openBtn.setAttribute('aria-expanded', String(isOpen));
  pageParts.forEach(part => {
    part.inert = isOpen;
  });
}

openBtn.addEventListener('click', () => {
  toggleMenu(true);
  closeBtn.focus();
});

closeBtn.addEventListener('click', () => {
  toggleMenu(false);
  openBtn.focus();
});

menu.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => toggleMenu(false));
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.classList.contains('is-open')) {
    toggleMenu(false);
    openBtn.focus();
  }
});

window.matchMedia('(min-width: 768px)').addEventListener('change', event => {
  if (event.matches) toggleMenu(false);
});
