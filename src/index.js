import "./style.css";
import ProjectRelated from "./components/projectRelated/projectRelated.js";
import HeadingAnimation from "./components/animations/heading.js";
import ProjectTitleAnimation from "./components/animations/project-title.js";
import Carousel from "./components/carousel/carousel.js";


window.addEventListener("DOMContentLoaded", () => {
  const projectsSection = document.querySelector(".projects-section");
  const imgSliderContainer = projectsSection.querySelector(".img-slider-container");
  const projectSummaryContainer = projectsSection.querySelector(".project-summary-container");
  const projectLearntContainer = projectsSection.querySelector(".project-learnt-container");
  const projectDateContainer = projectsSection.querySelector(".project-date-container");
  const projectPreviewBtn = projectsSection.querySelector(".project-btns > .preview-btn");
  const projectCodeBtn = projectsSection.querySelector(".project-btns > .code-btn");

  const carousel = Carousel(imgSliderContainer);

  carousel.initialize();

  const projectRelated = ProjectRelated([
    projectSummaryContainer,
    projectLearntContainer,
    projectDateContainer,
    projectPreviewBtn,
    projectCodeBtn
  ]);

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
  )
    .then(() => {
      carousel.handleCarouselClick(projectRelated);

      const slide = () => {
        slidingSide = carousel.getSlidingSide();

        carousel.slide((slidingSide === "left"));

        displayedProjectName = carousel.getDisplayedProjectName();

        projectRelated.update(displayedProjectName);
        projectTitleAnimation.update(pastDisplayedProjectName, displayedProjectName, (slidingSide === "left"));

        pastDisplayedProjectName = displayedProjectName;
      }

      let slidingSide;
      let pastDisplayedProjectName = null;

      let intervalId = setInterval(slide, 7000);

      imgSliderContainer.addEventListener("click", () => {
        clearInterval(intervalId);
        slide();
        intervalId = setInterval(slide, 7000);
      });
    });
});
