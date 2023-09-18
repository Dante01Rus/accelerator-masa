const heroSwiper = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  keyboard: true,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  focusableElements: 'a, button',

  pagination: {
    el: '.hero__swiper-pagination',
    type: 'bullets',
    bulletElement: 'div',
    bulletActiveClass: 'hero__swiper-bullet--active',
    bulletClass: 'hero__swiper-bullet',
    clickableClass: 'hero__swiper-bullet--clickable',
    currentClass: 'hero__swiper-bullet--current',
    clickable: true,
  },
});

const programsSwiper = new Swiper('.programs__swiper', {
  keyboard: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      scrollbar: {
        el: '',
        enabled: false,
      },
    },
    768: {
      spaceBetween: 30,
      slidesPerView: 2,
      scrollbar: {
        dragSize: 324,
      },
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },

  scrollbar: {
    el: '.programs__swiper-scrollbar',
    draggable: true,
    dragSize: 392,
    hide: false,
  },

  navigation: {
    nextEl: '.programs__swiper-button--next',
    prevEl: '.programs__swiper-button--prev',
    disabledClass: 'programs__swiper-button--disabled',
  },
});

const newsSwiper = new Swiper('.news__swiper', {
  keyboard: true,
  slideActiveClass: 'news__swiper-slide--active',

  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 2,
      },
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 'auto',
      spaceBetween: 32,
    },
  },

  navigation: {
    nextEl: '.news__swiper-button--next',
    prevEl: '.news__swiper-button--prev',
    disabledClass: 'news__swiper-button--disabled',
  },

  pagination: {
    el: '.news__swiper-pagination',
    clickable: true,
    bulletClass: 'news__swiper-pagination-btn',
    bulletActiveClass: 'news__swiper-pagination-btn--active',
    renderBullet: (index, className) => {
      return '<button class="' + className + '">' + (index + 1) + '</button>';
    },
  },
});

const reviewsSwiper = new Swiper('.reviews__swiper', {
  keyboard: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      scrollbar: {
        el: '',
        enabled: false,
      },
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
      scrollbar: {
        dragSize: 324,
      },
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },

  scrollbar: {
    el: '.reviews__swiper-scrollbar',
    draggable: true,
    dragSize: 392,
    hide: false,
  },

  navigation: {
    nextEl: '.reviews__swiper-button--next',
    prevEl: '.reviews__swiper-button--prev',
    disabledClass: 'reviews__swiper-button--disabled',
  },
});
