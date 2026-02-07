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
const input = document.getElementById("messageInput");

function submitMessage() {
  const message = input.value.trim();
  if (!message) return;

  // --- SECRET COMMAND LOGIC ---
  if (message === "_apple") {
    localStorage.clear();
    input.value = "";
    console.log("Memory Cleared!");
    return;
  }

  let storedData = localStorage.getItem("messages");
  let messages = [];

  try {
    const parsedData = JSON.parse(storedData);
    messages = Array.isArray(parsedData) ? parsedData : [];
  } catch (e) {
    messages = [];
  }

  messages.push(message);

  localStorage.setItem("messages", JSON.stringify(messages));

  if ($("#messageInput").data("emojioneArea")) {
    $("#messageInput").data("emojioneArea").setText("");
  }

  input.value = "";
  console.log("Current Messages:", messages);
}

const btnElement = document.querySelector(".plane-btn-js");
const planeElement = document.querySelector(".plane-img-js");
const blackElement = document.querySelector(".black");
btnElement.addEventListener("click", () => {
  planeElement.classList.add("plane-active");

  const emojiBtn = document.querySelector(".emojionearea-button");
  if (emojiBtn) {
    emojiBtn.style.display = "none";
  }

  setTimeout(() => {
    blackElement.classList.add("black-active");
    input.classList.add("emoji-text-active");

    submitMessage();
  }, 4000);
  setTimeout(() => {
    window.location.href = "lastPage.html";

    submitMessage();
  }, 8000);
});
