var button = document.querySelector(".button");
function changeRed() {
  button.classList.toggle("is-active");
}
button.addEventListener("click", changeRed);
