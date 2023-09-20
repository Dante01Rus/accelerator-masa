const modal = document.querySelector('.modal');
const nameInput = document.getElementById('modal-name-input');
const modalBtn = document.querySelector('.about__link');

const autoFocus = () => {
  if (!modal.classList.contains('is-active')) {
    setTimeout(() => {
      nameInput.focus();
    }, 100);
  }
};

modalBtn.addEventListener('click', autoFocus);
