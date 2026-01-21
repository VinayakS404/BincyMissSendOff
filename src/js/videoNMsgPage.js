const video = document.querySelector(".vidio-vid-js");
const clickP = document.querySelector(".click-p");
let first = true;

video.addEventListener("click", async () => {
  if (first) {
    first = false;
    clickP.classList.add("click-p-none");
    try {
      await video.play();
      video.muted = false;
      video.controls = true;
      if (video.requestFullscreen) {
        video.requestFullscreen();
      }
    } catch (err) {
      console.log("Video play was blocked:", err);
    }
  }
});
document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) {
    video.muted = true;
    video.controls = false;
    video.controls = true;
  }
});
