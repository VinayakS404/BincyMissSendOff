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

  // 1. Get data from localStorage
  let storedData = localStorage.getItem("messages");
  let messages = [];

  try {
    // 2. Parse it and ensure it is actually an Array
    const parsedData = JSON.parse(storedData);
    messages = Array.isArray(parsedData) ? parsedData : [];
  } catch (e) {
    // If JSON is corrupted, default to empty array
    messages = [];
  }

  // 3. Now .push() will work safely
  messages.push(message);

  localStorage.setItem("messages", JSON.stringify(messages));

  // Clear the emoji area (if using emojionearea)
  if ($("#messageInput").data("emojioneArea")) {
    $("#messageInput").data("emojioneArea").setText("");
  }

  input.value = "";
  console.log("Current Messages:", messages);
}
