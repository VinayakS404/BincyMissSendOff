import { passwordElement } from "./loginPage.js";
const usernameElement = document.querySelector(".user-inp-js");
const btnElement = document.querySelector(".Sigin-2nd-btn-js");
const userDivElement = document.querySelector(".user-div-js");
const passDivElement = document.querySelector(".pass-div-js");

const correctUsername = "BCA_2024_28"; //BCA_2024_28
const correctPassword = "bincy2026"; //bincy2026

btnElement.addEventListener("click", () => {
  const enteredUsername = usernameElement.value;
  const enteredPassword = passwordElement.value;
  if (
    enteredUsername === correctUsername &&
    enteredPassword === correctPassword
  ) {
    // Both correct
    window.location.href = "./home.html";
  } else if (
    enteredUsername !== correctUsername &&
    enteredPassword !== correctPassword
  ) {
    // Both wrong
    wronguser();
    wrongpass();
  } else if (enteredUsername !== correctUsername) {
    // Only username wrong
    wronguser();
  } else if (enteredPassword !== correctPassword) {
    // Only password wrong
    wrongpass();
  }
});

function wrongpass() {
  passDivElement.classList.add("user-pass-div-wrong-user");
  setTimeout(() => {
    passDivElement.classList.remove("user-pass-div-wrong-user");
  }, 500);
}
function wronguser() {
  userDivElement.classList.add("user-pass-div-wrong-user");
  setTimeout(() => {
    userDivElement.classList.remove("user-pass-div-wrong-user");
  }, 500);
}
