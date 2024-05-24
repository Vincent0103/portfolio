import "./style.css";
import ProjectDescription from "./components/projectDescription/projectDescription.js";
import addHeadingAnimations from "./components/animations/heading.js";
import ProjectTitleAnimation from "./components/animations/project-title.js";
import Carousel from "./components/carousel/carousel.js";


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
  let currentlyDisplayedProject = carousel.getDisplayedProject("currentlyDisplayedProject");
  const nextDisplayedProject = carousel.getDisplayedProject("nextDisplayedProject");
  let lastDisplayedProject = carousel.getDisplayedProject("lastDisplayedProject");
  console.log(nextDisplayedProject);

  projectTitleAnimation.initialize(
    projectsTitleAnimating,
    currentlyDisplayedProject,
    nextDisplayedProject,
  );

  imgSliderContainer.addEventListener("click", () => {
    currentlyDisplayedProject = carousel.getDisplayedProject("currentlyDisplayedProject");

    if (lastDisplayedProject.id !== currentlyDisplayedProject.id) {
      lastDisplayedProject = currentlyDisplayedProject;
      projectTitleAnimation.update(currentlyDisplayedProject);
    }
  });
});
