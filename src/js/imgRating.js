//.rating-div
//.photo-img
//photo-2nd
//.emoji-img
const imgElement = document.querySelectorAll(".photo-img");
const Photo2ndElement = document.querySelectorAll(".photo-2nd");

imgElement.forEach((img) => {
  const parent = img.closest(".rating-relative-div");
  const ratingDiv = parent.querySelector(".rating-div");

  if (!ratingDiv) return;

  img.addEventListener("click", () => {
    if (ratingDiv.classList.contains("rating-div-active")) {
      ratingDiv.classList.remove("rating-div-active");
      parent.classList.remove("rating-relative-div-active");
    } else {
      ratingDiv.classList.add("rating-div-active");
      parent.classList.add("rating-relative-div-active");
    }
  });
});
