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

      let pastDisplayedProjectName = null;
      let clickedSide;

      imgSliderContainer.addEventListener("click", () => {
        displayedProjectName = carousel.getDisplayedProjectName();
        clickedSide = carousel.getClickedSide();

        if (pastDisplayedProjectName !== displayedProjectName) {
          pastDisplayedProjectName = displayedProjectName;
          projectTitleAnimation.update(displayedProjectName, (clickedSide === "right"));
        }
      });
    });

  window.addEventListener("resize", () => updateElementHeight(imgSliderContainer));
  updateElementHeight(imgSliderContainer);
});

const updateElementHeight = (imgSliderContainer) => {
  const width = window.getComputedStyle(imgSliderContainer).getPropertyValue("width");
  imgSliderContainer.style.height = `calc(${width} * var(--img-ratio))`;
  console.log("updating");
}
