
const filterList = document.querySelector('.news__filter-list');
const filterButtons = document.querySelectorAll('.news__filter-btn');

filterList.addEventListener('click', (evt) => {
  if (evt.target.closest('.news__filter-btn')) {
    filterButtons.forEach((btn) => btn.classList.remove('news__filter-btn--active'));
    evt.target.classList.add('news__filter-btn--active');
  }
});
