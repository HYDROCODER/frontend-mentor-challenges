const nav = document.querySelector(".nav__list");
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("nav__invisible");
});
