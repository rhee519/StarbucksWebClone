// Header
const searchElement = document.querySelector(".search");
const searchInputElement = searchElement.querySelector("input");

searchElement.addEventListener("click", function (event) {
  searchInputElement.focus();
});

searchInputElement.addEventListener("focus", function (event) {
  searchElement.classList.add("focused");
  searchInputElement.setAttribute("placeholder", "통합검색");
});

searchInputElement.addEventListener("blur", function (event) {
  searchElement.classList.remove("focused");
  searchInputElement.setAttribute("placeholder", "");
});

// scroll controll
const badgeElement = document.querySelector("header .badges");
const toTopElement = document.querySelector("#to-top");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 500) {
      // Hide badges
      // gsap.to(element, duration, option);
      gsap.to(badgeElement, 0.6, {
        opacity: 0,
        display: "none",
      });
      // Show to-top button
      gsap.to(toTopElement, 0.3, {
        x: 0,
      });
    } else {
      // Show badges
      gsap.to(badgeElement, 0.6, {
        opacity: 1,
        display: "block",
      });
      //Hide to-top button
      gsap.to(toTopElement, 0.3, {
        x: 100,
      });
    }
  }, 300)
);

toTopElement.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

// Fade-in pictures
const fadeElements = document.querySelectorAll(".visual .fade-in");
fadeElements.forEach(function (fadeElement, index) {
  // gsap.to(element, duration, option);
  gsap.to(fadeElement, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// Swiper
// new Swiper(selector, option)
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper-container", {
  direction: "horizontal", // -> default setting
  slidesPerView: 3, // # of slides to be shown simultaneously
  spaceBetween: 10,
  centeredSlides: true, // #1 slide starts at the center
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".promotion .swiper-pagination", // page numbering element
    type: "bullets",
    clickable: true, // user can control page numbering element
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper-container", {
  direction: "horizontal",
  slidesPerView: 5,
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  // centeredSlides: true,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

// TOGGLE PROMOTION
const prElement = document.querySelector(".promotion");
const prToggleBtn = document.querySelector(".toggle-promotion");
prToggleBtn.addEventListener("click", function () {
  prElement.classList.toggle("hidden");
});

// FLOATING ANIMATION
function floatingObject(selector, delay, range) {
  // gsap.to(element, duration, {option});
  gsap.to(selector, Math.random() * 1 + 1.5, {
    y: range,
    repeat: -1, // infinitely repeat
    yoyo: true, // back-n-forth animation
    ease: Sine.easeInOut,
    delay: Math.random() * delay,
  });
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 17);
floatingObject(".floating3", 1.5, 20);

// SCROLL MAGIC
const spyElements = document.querySelectorAll("section.scroll-spy");
spyElements.forEach(function (spyElement) {
  new ScrollMagic.Scene({
    triggerElement: spyElement,
    triggerHook: 0.8,
  })
    .setClassToggle(spyElement, "show")
    .addTo(new ScrollMagic.Controller());
});

// DATE (YEAR)
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
