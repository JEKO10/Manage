const toggleDiv = document.querySelector(".switch");
const toggleInput = document.querySelector("#input");
const basicPrice = document.querySelector("#basicPrice");
const profPrice = document.querySelector("#profPrice");
const masterPrice = document.querySelector("#masterPrice");

toggleInput.addEventListener("click", () => {
  toggleDiv.classList.toggle("open");

  if (toggleDiv.classList.contains("open")) {
    basicPrice.innerHTML = "$199.99";
    profPrice.innerHTML = "$399.99";
    masterPrice.innerHTML = "$249.99";
  } else {
    basicPrice.innerHTML = "$19.99";
    profPrice.innerHTML = "$39.99";
    masterPrice.innerHTML = "$24.99";
  }
});

// annualy === open
// monthly === null
