var swiper = new Swiper('.swiper', {
  breakpoints: {
    450: {
      slidesPerView: 1,
    },
    580: {
      slidesPerView: 1.5,
      centeredSlides: true,
    },
    650: {
      slidesPerView: 1.5,
      centeredSlides: true,
    },
    730: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 2.5,
      centeredSlides: false,
    },
    1200: {
      slidesPerView: 3,
      centeredSlides: false,
      freeMode: true,
    },
    1250: {
      slidesPerView: 3.5,
    },
    1450: {
      slidesPerView: 4,
      spaceBetween: 1,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});