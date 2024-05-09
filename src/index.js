import { ProjectDescription } from "./DOM.js";
import Carousel from "./wrapper.js";


window.addEventListener("DOMContentLoaded", () => {
  const projectsSection = document.querySelector(".projects-section");
  const imgSliderContainer = projectsSection.querySelector(".img-slider-container");
  const projectDescriptionContainer = projectsSection.querySelector(".project-description-container");

  const carousel = Carousel(imgSliderContainer);
  carousel.initialize();

  const projectDescription = ProjectDescription(projectDescriptionContainer);

  let currentlyDisplayedProject = null;
  let rect = imgSliderContainer.getBoundingClientRect();
  const IMG_RATIO = 0.504;
  console.log(rect.width);
  imgSliderContainer.style.height = `${rect.width * IMG_RATIO}px`;


  window.addEventListener("resize", () => {
    rect = imgSliderContainer.getBoundingClientRect();
    imgSliderContainer.style.height = `${rect.width * IMG_RATIO}px`;
  });

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
