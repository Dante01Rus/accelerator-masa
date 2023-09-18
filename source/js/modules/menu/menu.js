const menuBtn = document.querySelector('.header__menu-btn');
const nav = document.querySelector('.header__nav');


menuBtn.addEventListener('click', () => {
  nav.classList.toggle('header__nav--closed');
  menuBtn.classList.toggle('header__menu-btn--opened');
});
