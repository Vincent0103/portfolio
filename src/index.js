import { ProjectDescription, handleHeadingAnimations, handleProjectTitleAnimation } from "./DOM.js";
import Carousel from "./wrapper.js";


window.addEventListener("DOMContentLoaded", () => {
  const projectsSection = document.querySelector(".projects-section");
  const imgSliderContainer = projectsSection.querySelector(".img-slider-container");
  const projectSummaryContainer = projectsSection.querySelector(".project-summary-container");
  const projectLearntContainer = projectsSection.querySelector(".project-learnt-container");
  const projectDateContainer = projectsSection.querySelector(".project-date-container");

  const carousel = Carousel(imgSliderContainer);
  carousel.initialize();

  const projectDescription = ProjectDescription(
    projectSummaryContainer,
    projectLearntContainer,
    projectDateContainer,
  );

  carousel.handleCarouselClick(projectDescription);


  const [aboutH2Container, projectsH2Container] = document.querySelectorAll(".animated-h2-container");
  handleHeadingAnimations(aboutH2Container, false);
  handleHeadingAnimations(projectsH2Container, true);

  const projectTitleContainer = projectsSection.querySelector(".project-title-container");
  handleProjectTitleAnimation(projectTitleContainer);
});
