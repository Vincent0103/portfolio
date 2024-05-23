import CarouselDOM from "./DOM.js";
import CarouselLogic from "./logic.js";
import { throttle } from "./utils.js";


const Carousel = (imgSliderContainer) => {
  const slidingImgs = imgSliderContainer.querySelectorAll(".sliding-img");

  const carouselDOM = CarouselDOM(slidingImgs);
  const carouselLogic = CarouselLogic();

  const getDisplayedProject = () => carouselDOM.getDisplayedProject("currentlyDisplayedProject");

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

      const isClickedLeft = clickedX < rect.width / 6;
      const isClickedRight = clickedX > rect.width * (5 / 6);

      if (isClickedLeft || isClickedRight) {
        if (isClickedLeft) slideCarousel(false);
        else slideCarousel(true);
        projectDescription.handleProjectRelated(getDisplayedProject("currentlyDisplayedProject"));
      }
    };

    imgSliderContainer.addEventListener("click", throttle(onClick, 100));
  };

  return { initialize, handleCarouselClick, getDisplayedProject };
};

export default Carousel;
