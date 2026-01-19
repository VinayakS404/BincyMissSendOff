//.rating-div
//.photo-img
//photo-2nd
const imgElement = document.querySelectorAll(".photo-img");
const Photo2ndElement = document.querySelectorAll(".photo-2nd");

imgElement.forEach((img) => {
  const parent = img.closest(".rating-relative-div");
  const ratingDiv = parent.querySelector(".rating-div");

  if (!ratingDiv) return;

  img.addEventListener("click", () => {
    ratingDiv.classList.add("rating-div-active");
    parent.classList.add("rating-relative-div-active");
  });
});
