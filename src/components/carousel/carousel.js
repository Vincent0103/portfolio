import CarouselDOM from "./carousel-DOM.js";
import CarouselLogic from "./carousel-logic.js";
import { throttle } from "../../utils.js";


const Carousel = (imgSliderContainer) => {
  const slidingImgs = imgSliderContainer.querySelectorAll(".sliding-img");

  const carouselDOM = CarouselDOM(slidingImgs);
  const carouselLogic = CarouselLogic();

  const getDisplayedProjectName = () => carouselDOM.getDisplayedProjectName();

  const slidingSide = (() => {
    let temp = "left";

    return {
      set: (value) => { temp = value; },
      get: () => temp,
    };
  })();

  const initialize = () => {
    carouselLogic.initializeCarouselProjectsClasses(slidingImgs.length);
    carouselDOM.initializeCarousel(carouselLogic.getProjectsCarouselClasses());
  };

  const slide = (areProjectsMovingLeft) => {
    carouselLogic.moveCarouselProjectsClasses(areProjectsMovingLeft);
    carouselDOM.moveCarousel(carouselLogic.getProjectsCarouselClasses());
  };

  const handleCarouselClick = (projectRelated) => {
    let rect = imgSliderContainer.getBoundingClientRect();

    window.addEventListener("resize", () => {
      rect = imgSliderContainer.getBoundingClientRect();
    });

    const onClick = (e) => {
      const clickedX = e.clientX - rect.left;

      const isClickedRight = clickedX > rect.width * (5 / 6);
      const isClickedLeft = clickedX < rect.width / 6;

      if (isClickedRight || isClickedLeft) {
        slide(isClickedRight);
        slidingSide.set((isClickedRight) ? "left" : "right");
        projectRelated.update(getDisplayedProjectName());
      }
    };

    imgSliderContainer.addEventListener("click", throttle(onClick, 100));
  };

  return {
    initialize,
    slide,
    handleCarouselClick,
    getDisplayedProjectName,
    getSlidingSide: slidingSide.get,
  };
};

export default Carousel;
