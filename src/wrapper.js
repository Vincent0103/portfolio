import CarouselDOM from "./DOM.js";
import CarouselLogic from "./logic.js";


const Carousel = (imgSliderContainer) => {
  const slidingImgs = imgSliderContainer.querySelectorAll(".sliding-img");

  const carouselDOM = CarouselDOM(slidingImgs);
  const carouselLogic = CarouselLogic();

  const getCurrentlyDisplayedProject = () => carouselDOM.getCurrentlyDisplayedProject();

  const initialize = () => {
    carouselLogic.initializeCarouselProjectsClasses(slidingImgs.length);
    carouselDOM.initializeCarousel(carouselLogic.getProjectsCarouselClasses());
  };

  const slideCarousel = (areProjectsMovingLeft) => {
    carouselLogic.moveCarouselProjectsClasses(areProjectsMovingLeft);
    carouselDOM.moveCarousel(carouselLogic.getProjectsCarouselClasses());
  };

  return { initialize, slideCarousel, getCurrentlyDisplayedProject };
};

export default Carousel;
