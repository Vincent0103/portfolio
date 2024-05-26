import "./style.css";
import ProjectDescription from "./components/projectDescription/projectDescription.js";
import HeadingAnimation from "./components/animations/heading.js";
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
  HeadingAnimation(aboutH2Container, false).add();
  const projectsHeadingAnimation = HeadingAnimation(projectsH2Container, true);
  projectsHeadingAnimation.add();

  const projectTitleContainer = projectsSection.querySelector(".project-title-container");
  const projectTitleAnimation = ProjectTitleAnimation(projectTitleContainer);

  let displayedProjectName = carousel.getDisplayedProjectName();
  projectTitleAnimation.initialize(
    projectsHeadingAnimation.getResolvingAnimation(),
    displayedProjectName,
  );

  let pastDisplayedProjectName = null;
  let clickedSide;
  imgSliderContainer.addEventListener("click", () => {
    displayedProjectName = carousel.getDisplayedProjectName();
    clickedSide = carousel.getClickedSide();

    if (pastDisplayedProjectName !== displayedProjectName) {
      pastDisplayedProjectName = displayedProjectName;
      projectTitleAnimation.update(displayedProjectName, (clickedSide === "right"));
      // TODO: CHANGE SLIDING IMAGES WRONG DIRECTION
    }
  });
});
