import "./style.css";

window.addEventListener("DOMContentLoaded", () => {
  const imgSliderContainer = document.querySelector(".img-slider-container");
  const slidingImg = imgSliderContainer.querySelectorAll(".sliding-img");
  imgSliderContainer.addEventListener("click", () => {
    slidingImg.forEach((container) => {
      if (container.classList.contains("carouselCenter")) {
        container.classList.remove("carouselCenter");
        container.classList.add("carouselLeft");
      } else if (container.classList.contains("carouselLeft")) {
        container.classList.remove("carouselLeft");
        container.classList.add("carouselLeftLeft");
      } else if (container.classList.contains("carouselLeftLeft")) {
        container.classList.remove("carouselLeftLeft");
        container.classList.add("carouselRightRight");
      } else if (container.classList.contains("carouselRightRight")) {
        container.classList.remove("carouselRightRight");
        container.classList.add("carouselRight");
      } else if (container.classList.contains("carouselRight")) {
        container.classList.remove("carouselRight");
        container.classList.add("carouselCenter");
      }
    });
  });
});
