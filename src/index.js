import positiveMod from "./utils.js";
import "./style.css";

function Carousel(imgSliderContainerParam, slidingImgParam) {
  const imgSliderContainer = imgSliderContainerParam;
  const slidingImg = slidingImgParam;

  const themedBoxShadows = {
    battleship: "53, 56, 92",
    "weather-app": "160, 187, 255",
    "knight-travails": "232, 233, 243",
    "tic-tac-toe": "251, 252, 250",
    "todo-list": "255, 65, 87",
  };

  const handleCarouselBoxShadow = (container) => {
    const img = container.querySelector("img");
    imgSliderContainer.style.setProperty(
      "--box-shadow-bgc",
      themedBoxShadows[img.id],
    );
  };

  const slidingDirections = ["carouselLeftLeft", "carouselLeft", "carouselCenter", "carouselRight", "carouselRightRight"];

  const moveCarouselSlidingImg = (isMovingLeft, container) => {
    for (let i = 0; i < slidingDirections.length; i += 1) {
      if (container.classList.contains(slidingDirections[i])) {
        container.classList.remove(slidingDirections[i]);

        const [leftIndex, rightIndex] = [
          positiveMod(i - 1, slidingDirections.length),
          positiveMod(i + 1, slidingDirections.length),
        ];

        const currentCaseClass = (isMovingLeft)
          ? slidingDirections[leftIndex] : slidingDirections[rightIndex];

        container.classList.add(currentCaseClass);
        if (currentCaseClass === "carouselCenter") handleCarouselBoxShadow(container);
        break;
      }
    }
  };

  const handleCarousel = (isMovingLeft) => {
    slidingImg.forEach((container) => {
      moveCarouselSlidingImg(isMovingLeft, container);
    });
  };

  return { handleCarousel };
}

window.addEventListener("DOMContentLoaded", () => {
  const imgSliderContainer = document.querySelector(".img-slider-container");
  const slidingImg = imgSliderContainer.querySelectorAll(".sliding-img");
  const carousel = Carousel(imgSliderContainer, slidingImg);
  console.log(slidingImg);

  imgSliderContainer.addEventListener("click", (e) => {
    const rect = imgSliderContainer.getBoundingClientRect();
    const clickedX = e.clientX - rect.left;

    if (clickedX < rect.width / 6) {
      carousel.handleCarousel(false);
    } else if (clickedX > rect.width * (5 / 6)) {
      carousel.handleCarousel(true);
    }
  });
});
