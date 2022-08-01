let toggle_nav = document.querySelector(".menu");
let bar = document.querySelector(".menu-btn");
bar.addEventListener("click", () => {
  toggle_nav.classList.toggle("menu-open");
});