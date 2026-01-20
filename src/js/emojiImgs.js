const inLoveElement = document.querySelectorAll(".in-love-img");
const CryElement = document.querySelectorAll(".cry-img");
const laughElement = document.querySelectorAll(".laugh-img");
const niceElement = document.querySelectorAll(".nice-img");
const sweatElement = document.querySelectorAll(".sweat-img");
const EmojiDivElement = document.querySelectorAll(".emoji-div");
import { popaudio } from "./util.js";

EmojiDivElement.forEach((emojiDiv) => {
  emojiDiv.addEventListener("click", () => {
    const EmojiElement = emojiDiv.querySelector(".in-love-img");
    EmojiElement.src = "../assets/imges/in-love.gif";
    EmojiElement.classList.add("emoji-img-active");
    popaudio();
  });
  emojiDiv.addEventListener("click", () => {
    const EmojiElement = emojiDiv.querySelector(".cry-img");
    EmojiElement.src = "../assets/imges/cry.gif";
    popaudio();
  });
  emojiDiv.addEventListener("click", () => {
    const EmojiElement = emojiDiv.querySelector(".laugh-img");
    EmojiElement.src = "../assets/imges/laugh.gif";
    popaudio();
  });
  emojiDiv.addEventListener("click", () => {
    const EmojiElement = emojiDiv.querySelector(".nice-img");
    EmojiElement.src = "../assets/imges/nice.gif";
    popaudio();
  });
  emojiDiv.addEventListener("click", () => {
    const EmojiElement = emojiDiv.querySelector(".sweat-img");
    EmojiElement.src = "../assets/imges/sweat.gif";
    popaudio();
  });
});
