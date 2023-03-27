import Swiper, { Navigation } from "swiper";

import "../../scss/base/swiper.scss";

function initSliders() {
  if (document.querySelector(".swiper")) {
    new Swiper(".swiper", {
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 55,
      autoHeight: true,
      speed: 800,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      },
    });
  }
}

window.addEventListener("load", function (e) {
  initSliders();
});
