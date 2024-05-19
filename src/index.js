import { ProjectDescription } from "./DOM.js";
import Carousel from "./wrapper.js";
import { throttle } from "./utils.js";


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

  const aboutSection = document.querySelector(".about-section");
  const animatedH2Container = aboutSection.querySelector(".animated-h2-container");
  const h2 = animatedH2Container.querySelector("h2");
  const aboutTitleUnderline = animatedH2Container.querySelector(".underline");
  const aboutTitleUnderlineShadow = animatedH2Container.querySelector(".underline-shadow");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        h2.classList.add("spawn-heading");
        aboutTitleUnderline.classList.add("spawn-underline");
        aboutTitleUnderlineShadow.classList.add("spawn-underline");
      } else {
        h2.classList.remove("spawn-heading");
        aboutTitleUnderline.classList.remove("spawn-underline");
        aboutTitleUnderlineShadow.classList.remove("spawn-underline");
      }
    });
  });

  observer.observe(animatedH2Container);
});
