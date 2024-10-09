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

const listView = document.getElementById("listView");
const gridView = document.getElementById("gridView");
const productContainer = document.getElementById("productContainer");

listView.addEventListener("click", function () {
  productContainer.classList.remove("grid");
  productContainer.classList.add("list");
});

gridView.addEventListener("click", function () {
  productContainer.classList.remove("list");
  productContainer.classList.add("grid");
});

const listViewButton = document.querySelector(".fa-list");
const gridViewButton = document.querySelector(".fa-th-large");

listViewButton.addEventListener("click", function () {
  listViewButton.classList.add("active");
  gridViewButton.classList.remove("active");
});

gridViewButton.addEventListener("click", function () {
  gridViewButton.classList.add("active");
  listViewButton.classList.remove("active");
});
function changeView(viewClass) {
  productContainer.className = ""; // إزالة جميع الكلاسات
  productContainer.classList.add(viewClass); // إضافة الكلاس الجديد
  const cards = document.querySelectorAll(".card-product-card");

  // إخفاء البطاقات ثم إظهارها مع تأثير
  cards.forEach((card) => {
    card.classList.remove("visible"); // إخفاء البطاقة
    setTimeout(() => {
      card.classList.add("visible"); // إظهار البطاقة بعد وقت محدد
    }, 300); // وقت التأخير لبدء إظهار البطاقة بعد الإخفاء
  });
}
