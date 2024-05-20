import { ProjectDescription, addHeadingAnimations, ProjectTitleAnimation } from "./DOM.js";
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
  addHeadingAnimations(aboutH2Container, false);
  const projectsTitleAnimating = addHeadingAnimations(projectsH2Container, true);

  const projectTitleContainer = projectsSection.querySelector(".project-title-container");
  const projectTitleAnimation = ProjectTitleAnimation(projectTitleContainer);
  let lastDisplayedProject = carousel.getCurrentlyDisplayedProject();

  projectTitleAnimation.initialize(projectsTitleAnimating, lastDisplayedProject);

  imgSliderContainer.addEventListener("click", () => {
    const currentlyDisplayedProject = carousel.getCurrentlyDisplayedProject();

    if (lastDisplayedProject.id !== currentlyDisplayedProject.id) {
      lastDisplayedProject = currentlyDisplayedProject;
      projectTitleAnimation.update(currentlyDisplayedProject);
    }
  });
});
