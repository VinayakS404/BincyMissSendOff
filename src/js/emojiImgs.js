import { popaudio } from "./util.js";

const EmojiDivElement = document.querySelectorAll(".emoji-div");

EmojiDivElement.forEach((emojiDiv) => {
  emojiDiv.addEventListener("click", (e) => {
    const img = emojiDiv.querySelector("img");
    if (!img) return;

    const imgGifName = {
      "in-love-img": "in-love",
      "cry-img": "cry",
      "laugh-img": "laugh",
      "nice-img": "nice",
      "sweat-img": "sweat",
    };

    let baseName;

    for (const cls in imgGifName) {
      if (img.classList.contains(cls)) {
        baseName = imgGifName[cls];
        break;
      }
    }

    if (!baseName) return;

    const isGif = img.src.includes(".gif");

    if (isGif) {
      img.src = `../assets/images/${baseName}.png`;
    } else {
      img.src = `../assets/images/${baseName}.gif`;
    }

    popaudio();
  });
});
