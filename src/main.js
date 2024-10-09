swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

swiper = new Swiper(".logo-swiper", {
  slidesPerView: 4.3,
  spaceBetween: 0,
  loop: false,
  speed: 300,
  resistance: false,
  freeMode: true,
  freeModeMomentum: true,
  freeModeMomentumRatio: 0.5,
  breakpoints: {
    480: {
      slidesPerView: 3.5,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 60,
    },
    1200: {
      slidesPerView: 7.5,
      spaceBetween: 70,
    },
  },
});

swiper = new Swiper(".logo-slider-card", {
  loop: false,
  slidesPerView: 2.5,
  spaceBetween: 25,
  speed: 300,
  resistance: false,
  freeMode: true,
  freeModeMomentum: true,
  freeModeMomentumRatio: 0.5,
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 6,
    },
    1200: {
      slidesPerView: 7.5,
    },
    1024: {
      slidesPerView: 4.5,
    },
  },
});

swiper = new Swiper(".swiper-main", {
  loop: false,
  slidesPerView: 3,
  spaceBetween: 10,
  speed: 300,
  resistance: false,
  freeMode: true,
  freeModeMomentum: true,
  freeModeMomentumRatio: 0.5,
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 6,
    },
    1200: {
      slidesPerView: 7,
    },
  },
});
swiper = new Swiper(".swiper-logo", {
  loop: false,
  slidesPerView: 2.5,
  spaceBetween: 10,
  speed: 300,
  resistance: false,
  freeMode: true,
  freeModeMomentum: true,
  freeModeMomentumRatio: 0.5,
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 6,
    },
    1200: {
      slidesPerView: 7,
    },
  },
});

document
  .querySelector(".categories-toggle")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const content = document.querySelector(".categories-content");
    content.classList.toggle("show");

    const arrow = this.querySelector(".arrow-icon");
    arrow.classList.toggle("rotate");
  });

document
  .querySelector(".brands-toggle")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const content = document.querySelector(".brands-content");
    content.classList.toggle("show");

    const arrow = this.querySelector(".arrow-icon");
    arrow.classList.toggle("rotate");
  });

// Get the elements
const listView = document.getElementById("listView");
const gridView = document.getElementById("gridView");
const productContainer = document.getElementById("productContainer");

// Add event listeners for toggling
listView.addEventListener("click", function () {
  productContainer.classList.remove("grid");
  productContainer.classList.add("list");
});

gridView.addEventListener("click", function () {
  productContainer.classList.remove("list");
  productContainer.classList.add("grid");
});
// تحديد الأيقونات
const listViewButton = document.querySelector(".fa-list");
const gridViewButton = document.querySelector(".fa-th-large");

// إضافة حدث النقر على زر العرض كـ List
listViewButton.addEventListener("click", function () {
  listViewButton.classList.add("active");
  gridViewButton.classList.remove("active");
  // تغيير طريقة عرض المنتج إلى قائمة
});
// إضافة حدث النقر على زر العرض كـ Grid
gridViewButton.addEventListener("click", function () {
  gridViewButton.classList.add("active");
  listViewButton.classList.remove("active");
});
