import CarouselDOM from "./carousel-DOM.js";
import CarouselLogic from "./carousel-logic.js";
import { throttle } from "../../utils.js";


const Carousel = (imgSliderContainer) => {
  const slidingImgs = imgSliderContainer.querySelectorAll(".sliding-img");

  const carouselDOM = CarouselDOM(slidingImgs);
  const carouselLogic = CarouselLogic();

  const getDisplayedProjectName = () => carouselDOM.getDisplayedProjectName();

  const clickedSide = (() => {
    let temp = null;

    return {
      get: () => temp,
      set: (value) => { temp = value; },
    };
  })();

  const initialize = () => {
    carouselLogic.initializeCarouselProjectsClasses(slidingImgs.length);
    carouselDOM.initializeCarousel(carouselLogic.getProjectsCarouselClasses());
  };

  const slideCarousel = (areProjectsMovingLeft) => {
    carouselLogic.moveCarouselProjectsClasses(areProjectsMovingLeft);
    carouselDOM.moveCarousel(carouselLogic.getProjectsCarouselClasses());
  };

  const handleCarouselClick = (projectDescription) => {
    let rect = imgSliderContainer.getBoundingClientRect();

    window.addEventListener("resize", () => {
      rect = imgSliderContainer.getBoundingClientRect();
    });

    const onClick = (e) => {
      const clickedX = e.clientX - rect.left;

      const isClickedRight = clickedX > rect.width * (5 / 6);
      const isClickedLeft = clickedX < rect.width / 6;

      if (isClickedRight || isClickedLeft) {
        const isRight = isClickedRight;
        slideCarousel(isRight);
        clickedSide.set((isRight) ? "right" : "left");
        projectDescription.handleProjectRelated(getDisplayedProjectName());
      }
    };

    imgSliderContainer.addEventListener("click", throttle(onClick, 200));
  };

  return {
    initialize,
    handleCarouselClick,
    getDisplayedProjectName,
    getClickedSide: clickedSide.get,
  };
};

export default Carousel;
