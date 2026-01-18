const siginElement = document.querySelector(".Sigin-1st-btn-js");
const mainElement = document.querySelector(".main-js");

siginElement.addEventListener("click", happy);

function happy() {
  mainElement.classList.add("main-onclick");
}
