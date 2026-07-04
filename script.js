const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const navPanel = document.getElementById('navPanel');
const navLinks = document.querySelectorAll('.nav-links a');

const openMenu = () => {
  navPanel.classList.add('open');
  navPanel.setAttribute('aria-hidden', 'false');
};

const closeMenu = () => {
  navPanel.classList.remove('open');
  navPanel.setAttribute('aria-hidden', 'true');
};

menuToggle?.addEventListener('click', openMenu);
menuClose?.addEventListener('click', closeMenu);

navLinks.forEach((link) => link.addEventListener('click', closeMenu));

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navPanel.classList.contains('open')) {
    closeMenu();
  }
});
