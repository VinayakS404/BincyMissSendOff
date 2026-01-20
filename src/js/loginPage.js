const eyeElement = document.querySelector(".eye-js");
const siginElement = document.querySelector(".Sigin-1st-btn-js");
const mainElement = document.querySelector(".main-js");
const backElement = document.querySelector(".back-img-js");
const back2ndElement = document.querySelector(".back-2nd-img-js");
const forgotElement = document.querySelector(".forgot-p-js");
export const passwordElement = document.querySelector(".pass-inp-js");

siginElement.addEventListener("click", () => {
  mainElement.classList.remove("main-2nd-onclick");
  mainElement.classList.add("main-onclick");
});
backElement.addEventListener("click", () => {
  mainElement.classList.remove("main-onclick");
  mainElement.classList.add("main-2nd-onclick");
  back2ndElement.classList.add("back-2nd-active-img");
});
back2ndElement.addEventListener("click", () => {
  mainElement.classList.remove("main-2nd-onclick");
  mainElement.classList.add("main-onclick");
});

forgotElement.addEventListener("click", () => {
  alert(
    "Password Hint\nYour full name + total number of students in bca s4\n(No spaces!)",
  );
});

eyeElement.addEventListener("click", () => {
  console.log("hi");
  if (passwordElement.type === "password") {
    passwordElement.type = "text";
    eyeElement.src = "../assets/imges/Hide.png";
  } else if (passwordElement.type === "text") {
    passwordElement.type = "password";
    eyeElement.src = "../assets/imges/notHide.png";
  }
});
