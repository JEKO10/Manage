const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const para = document.querySelector(".hide");

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
