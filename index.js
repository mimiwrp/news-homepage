const open = document.querySelector(".hamburger");
const close = document.querySelector(".closeicon");

open.addEventListener("click", () => {
  console.log("open click");
  const menu = document.querySelector(".hamburger-wrapper");
  menu.classList.add("open");
});

close.addEventListener("click", () => {
  console.log("close click");
  const menu = document.querySelector(".hamburger-wrapper");
  menu.classList.remove("open");
});
