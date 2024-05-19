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

  const handleCarouselClick = (projectDescription) => {
    let currentlyDisplayedProject = null;
    let rect = imgSliderContainer.getBoundingClientRect();

    window.addEventListener("resize", () => {
      rect = imgSliderContainer.getBoundingClientRect();
    });

    imgSliderContainer.addEventListener("click", (e) => {
      const clickedX = e.clientX - rect.left;

      const isClickedLeft = clickedX < rect.width / 6;
      const isClickedRight = clickedX > rect.width * (5 / 6);

      if (isClickedLeft || isClickedRight) {
        if (isClickedLeft) slideCarousel(false);
        else slideCarousel(true);
        currentlyDisplayedProject = getCurrentlyDisplayedProject();
        projectDescription.handleProjectRelated(currentlyDisplayedProject);
      }
    });
  };

  return { initialize, handleCarouselClick };
};

export default Carousel;
