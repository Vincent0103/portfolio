import { ProjectDescription } from "./DOM.js";
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

  const handleHeadingAnimations = (animatedHeadingContainer, animateOnce) => {
    const h2Container = animatedHeadingContainer.querySelector(".h2-container");
    const h2 = h2Container.querySelector("h2");
    const aboutTitleUnderline = animatedHeadingContainer.querySelector(".underline");
    const aboutTitleUnderlineShadow = animatedHeadingContainer.querySelector(".underline-shadow");
    let timeoutId;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          h2.classList.add("spawn-heading");
          aboutTitleUnderline.classList.add("spawn-underline");
          aboutTitleUnderlineShadow.classList.add("spawn-underline");
          timeoutId = setTimeout(() => {
            h2Container.style.overflowY = "visible";
          }, 800);

          if (animateOnce) observer.unobserve(animatedHeadingContainer);
        } else {
          h2.classList.remove("spawn-heading");
          aboutTitleUnderline.classList.remove("spawn-underline");
          aboutTitleUnderlineShadow.classList.remove("spawn-underline");
          clearTimeout(timeoutId);
          h2Container.style.overflowY = "hidden";
        }
      });
    });

    observer.observe(animatedHeadingContainer);
  };

  const animatedH2Container = document.querySelectorAll(".animated-h2-container");
  handleHeadingAnimations(animatedH2Container[0], false);
  handleHeadingAnimations(animatedH2Container[1], true);
});
