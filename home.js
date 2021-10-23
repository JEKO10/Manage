const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const para = document.querySelector(".hide");
const menuBtn = document.querySelector(".menuBtn");
const menuBurger = document.querySelector(".menuBurger");
const menu = document.querySelector(".fix");

btn.addEventListener("click", (e) => {
  if (input.value === "") {
    e.preventDefault();
    para.classList.remove("hide");
  }
  if (!para.classList.contains("hide")) {
    setTimeout(() => {
      para.classList.add("hide");
    }, 2000);
  }
  if (input.value.match("@")) {
    e.preventDefault();
    input.value = "";
  }
});

menuBtn.addEventListener("click", () => {
  menuBurger.classList.toggle("open");
  menu.classList.toggle("hide");
  document.body.classList.toggle("fixed");
});
