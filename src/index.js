import { ProjectDescription } from "./DOM.js";
import Carousel from "./wrapper.js";


window.addEventListener("DOMContentLoaded", () => {
  const projectsSection = document.querySelector(".projects-section");
  const imgSliderContainer = projectsSection.querySelector(".img-slider-container");
  const projectSummaryContainer = projectsSection.querySelector(".project-summary-container");
  const projectLearntContainer = projectsSection.querySelector(".project-learnt-container");

  const carousel = Carousel(imgSliderContainer);
  carousel.initialize();

  const projectDescription = ProjectDescription(projectSummaryContainer, projectLearntContainer);

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
      if (isClickedLeft) carousel.slideCarousel(false);
      else carousel.slideCarousel(true);
      currentlyDisplayedProject = carousel.getCurrentlyDisplayedProject();
      projectDescription.handleProjectRelated(currentlyDisplayedProject);
    }
  });
});
