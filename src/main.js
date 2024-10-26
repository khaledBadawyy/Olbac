swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    spaceBetween: 100,
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
      slidesPerView: 7,
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
      slidesPerView: 7,
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
      slidesPerView: 6,
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
      slidesPerView: 6,
    },
  },
});
swiper = new Swiper(".swiper-container", {
  direction: "vertical",
  slidesPerView: 5.5,
  spaceBetween: 10,
  navigation: {
    nextEl: ".fa-angle-down ",
    prevEl: ".fa-angle-up",
  },
  loop: false,
  480: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
});
swiper = new Swiper(".swiper-add", {
  loop: false,
  slidesPerView: 5,
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
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 6,
    },
    1200: {
      slidesPerView: 9.5,
    },
  },
});
swiper = new Swiper(".mobile-swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    spaceBetween: 500,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

const image = document.getElementById("image");
const lens = document.getElementById("lens");
const zoomResult = document.getElementById("zoomResult");
const zoomedImage = document.getElementById("zoomedImage");

image.addEventListener("mousemove", moveLens);
lens.addEventListener("mousemove", moveLens);
image.addEventListener("mouseleave", function () {
  lens.style.display = "none";
  zoomResult.style.display = "none";
});

function moveLens(e) {
  lens.style.display = "block";
  zoomResult.style.display = "block";

  const pos = getCursorPos(e);
  let x = pos.x - lens.offsetWidth / 2;
  let y = pos.y - lens.offsetHeight / 2;

  if (x > image.width - lens.offsetWidth) x = image.width - lens.offsetWidth;
  if (x < 0) x = 0;
  if (y > image.height - lens.offsetHeight)
    y = image.height - lens.offsetHeight;
  if (y < 0) y = 0;

  lens.style.left = x + "px";
  lens.style.top = y + "px";

  zoomedImage.style.left = -(x * 2) + "px";
  zoomedImage.style.top = -(y * 2) + "px";
}

function getCursorPos(e) {
  const rect = image.getBoundingClientRect();
  const x = e.pageX - rect.left - window.pageXOffset;
  const y = e.pageY - rect.top - window.pageYOffset;
  return { x: x, y: y };
}
image.addEventListener("mouseleave", hideLensAndZoom);
lens.addEventListener("mouseleave", hideLensAndZoom);

function hideLensAndZoom() {
  lens.style.display = "none";
  zoomResult.style.display = "none";
}

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
  productContainer.className = "";
  productContainer.classList.add(viewClass);
  const cards = document.querySelectorAll(".card-product-card");

  cards.forEach((card) => {
    card.classList.remove("visible");
    setTimeout(() => {
      card.classList.add("visible");
    }, 300);
  });
}
// change image
function changeImage(newSrc) {
  document.getElementById("image").src = newSrc;
  document.getElementById("zoomedImage").src = newSrc;
}

// start favorite card
function toggleFavorite() {
  const heartIcon = document.getElementById("heartIcon");
  const wishListIcon = document.getElementById("wishListIcon");

  if (heartIcon.classList.contains("fa-heart-o")) {
    heartIcon.classList.remove("fa-heart-o");
    heartIcon.classList.add("fa-heart");
    heartIcon.style.color = "red";

    wishListIcon.classList.remove("fa-heart-o");
    wishListIcon.classList.add("fa-heart");
    wishListIcon.style.color = "black";
  } else {
    heartIcon.classList.remove("fa-heart");
    heartIcon.classList.add("fa-heart-o");
    heartIcon.style.color = "";

    wishListIcon.classList.remove("fa-heart");
    wishListIcon.classList.add("fa-heart-o");
    wishListIcon.style.color = "";
  }
}
// end favorite card
// start toastr
function showToast() {
  const toast = document.getElementById("toast");
  const toastTimer = document.getElementById("toast-timer");
  toast.style.display = "block";

  // Reset the width of the timer to 100%
  toastTimer.style.width = "100%";

  // Reduce the width of the timer over 5 seconds
  setTimeout(() => {
    toastTimer.style.transition = "width 5s linear";
    toastTimer.style.width = "0%";
  }, 0);

  // Hide the toast after 5 seconds
  setTimeout(hideToast, 5000);
}

function hideToast() {
  const toast = document.getElementById("toast");
  const toastTimer = document.getElementById("toast-timer");
  toast.style.display = "none";
  toastTimer.style.transition = "none"; // Reset the transition for next use
}

// end toastr
