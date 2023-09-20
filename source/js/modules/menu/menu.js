const menuBtn = document.querySelector('.header__menu-btn');
const nav = document.querySelector('.header__nav');
const headerOverlay = document.querySelector('.header__overlay');
const navList = nav.querySelector('.header__nav-list');

function overlayClick() {
  nav.classList.toggle('header__nav--closed');
  menuBtn.classList.toggle('header__menu-btn--opened');
  document.body.classList.toggle('scroll-lock');
  headerOverlay.classList.toggle('header__overlay--menu-opened');
  headerOverlay.removeEventListener('click', overlayClick);
  window.removeEventListener('keydown', onEscKeydown);
}

function onEscKeydown(evt) {
  if (evt.keyCode === 27) {
    nav.classList.toggle('header__nav--closed');
    menuBtn.classList.toggle('header__menu-btn--opened');
    document.body.classList.toggle('scroll-lock');
    headerOverlay.classList.toggle('header__overlay--menu-opened');
    window.removeEventListener('keydown', onEscKeydown);
  }
}

function menuToggle() {
  nav.classList.toggle('header__nav--closed');
  menuBtn.classList.toggle('header__menu-btn--opened');
  document.body.classList.toggle('scroll-lock');
  headerOverlay.classList.toggle('header__overlay--menu-opened');
  headerOverlay.addEventListener('click', overlayClick);
  window.addEventListener('keydown', onEscKeydown);
}

navList.addEventListener('click', (evt) => {
  if (evt.target.closest('.header__nav-link') || evt.target.closest('.header__nav-sublink')) {
    menuToggle();
  }
});

if (menuBtn) {
  menuBtn.addEventListener('click', menuToggle);
}
