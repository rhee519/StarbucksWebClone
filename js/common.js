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

// DATE (YEAR)
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
