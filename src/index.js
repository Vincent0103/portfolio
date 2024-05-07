import CarouselDOM, { ProjectDescription } from "./DOM.js";
import CarouselLogic from "./logic.js";


const Carousel = (imgSliderContainer) => {
  const slidingImgs = imgSliderContainer.querySelectorAll(".sliding-img");

  const carouselDOM = CarouselDOM(imgSliderContainer, slidingImgs);
  const carouselLogic = CarouselLogic();

  const getCurrentlyDisplayedProject = () => carouselDOM.getCurrentlyDisplayedProject();

  const initialize = () => {
    carouselLogic.initializeCarouselProjectsClasses(slidingImgs);
    carouselDOM.initializeCarousel(carouselLogic.getProjectsCarouselClasses());
  };

  const slideCarousel = (isMovingLeft) => {
    if (isMovingLeft) carouselLogic.moveCarouselProjectsClasses(true);
    else carouselLogic.moveCarouselProjectsClasses(false);

    carouselDOM.moveCarousel(carouselLogic.getProjectsCarouselClasses());
  };

  return { initialize, slideCarousel, getCurrentlyDisplayedProject };
};

window.addEventListener("DOMContentLoaded", () => {
  const projectsSection = document.querySelector(".projects-section");
  const imgSliderContainer = projectsSection.querySelector(".img-slider-container");
  const projectDescriptionContainer = projectsSection.querySelector(".project-description-container");

  const carousel = Carousel(imgSliderContainer);
  carousel.initialize();

  const projectDescription = ProjectDescription(projectDescriptionContainer);

  let currentlyDisplayedProject = null;
  const rect = imgSliderContainer.getBoundingClientRect();

  imgSliderContainer.addEventListener("click", (e) => {
    const clickedX = e.clientX - rect.left;

    const isClickedLeft = clickedX < rect.width / 6;
    const isClickedRight = clickedX > rect.width * (5 / 6);
    if (isClickedLeft || isClickedRight) {
      if (isClickedLeft) carousel.slideCarousel(false);
      else carousel.slideCarousel(true);
      currentlyDisplayedProject = carousel.getCurrentlyDisplayedProject();
      projectDescription.handleProjectDescription(currentlyDisplayedProject);
    }
  });
});
