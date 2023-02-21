const header = document.querySelector(".header");
const headerBefore = document.querySelector(".header ::before");
const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-close");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", (e) => {
  nav.classList.toggle("open");
  header.toggleAttribute("data-overlay");
  menuClose.toggleAttribute("data-visible");
});

menuClose.addEventListener("click", (e) => {
  nav.classList.toggle("open");
  header.toggleAttribute("data-overlay");
  menuClose.toggleAttribute("data-visible");
});
