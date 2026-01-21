$(document).ready(() => {
  $("#messageInput").emojioneArea({
    pickerPosition: "top",
    tonesStyle: "bullet",
    autocomplete: true,
  });
});

document.querySelector(".hi").addEventListener("clck", () => {
  console.log("hi");
});
