const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  loop: true,
  speed: 600,

  navigation: {
    nextEl: ".btn-right .nav-btn",
    prevEl: ".btn-left .nav-btn",
  },

  pagination: {
    el: ".dots",
    clickable: true,
    bulletClass: "dot",
    bulletActiveClass: "active",
  },
});
