document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro-screen");
  const main = document.getElementById("main-content");
  const textElement = document.getElementById("typing-text");

  const storedData = localStorage.getItem("messages") || "[]";
  const messagesArray = JSON.parse(storedData);
  let lastMessage =
    messagesArray.length > 0
      ? messagesArray.at(-1)
      : "Thank you for the wonderful memories.";

  setTimeout(() => {
    intro.classList.add("hidden");

    setTimeout(() => {
      intro.style.display = "none";
      main.classList.remove("hidden");
      startProfessionalTyping(lastMessage, textElement);
    }, 2000);
  }, 3500);
});

function startProfessionalTyping(text, container) {
  const baseSpeed = 0.06;
  let cumulativeDelay = 0;

  text.split("").forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;

    let pause = baseSpeed;
    if ([".", "!", "?"].includes(char)) pause = 0.8;
    if ([",", ";"].includes(char)) pause = 0.4;

    cumulativeDelay += pause;
    span.style.animationDelay = `${cumulativeDelay}s`;
    container.appendChild(span);
  });
}
