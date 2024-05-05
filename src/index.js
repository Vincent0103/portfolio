import positiveMod from "./utils.js";
import "./style.css";

function Carousel(imgSliderContainerParam, slidingImgParam) {
  const imgSliderContainer = imgSliderContainerParam;
  const slidingImg = slidingImgParam;
  let currentlyDisplayedProject = null;

  const setCurrentlyDisplayedProject = (container) => {
    currentlyDisplayedProject = container;
  };

  const getCurrentlyDisplayedProject = () => currentlyDisplayedProject;

  const handleCarouselBoxShadow = (container, isRemovingBoxShadow) => {
    if (isRemovingBoxShadow) container.classList.remove("box-shadow-visible");
    else container.classList.add("box-shadow-visible");
  };

  const slidingDirections = ["carouselLeftLeft", "carouselLeft", "carouselCenter", "carouselRight", "carouselRightRight"];

  const moveCarouselSlidingImg = (isMovingLeft, container) => {
    if (container.classList.contains("box-shadow-visible")) {
      handleCarouselBoxShadow(container, true);
    }
    for (let i = 0; i < slidingDirections.length; i += 1) {
      if (container.classList.contains(slidingDirections[i])) {
        container.classList.remove(slidingDirections[i]);

        const [leftIndex, rightIndex] = [
          positiveMod(i - 1, slidingDirections.length),
          positiveMod(i + 1, slidingDirections.length),
        ];

        const currentCaseClass = (isMovingLeft)
          ? slidingDirections[leftIndex] : slidingDirections[rightIndex];

        container.classList.add(currentCaseClass);
        if (currentCaseClass === "carouselCenter") {
          handleCarouselBoxShadow(container, false);
          setCurrentlyDisplayedProject(container);
        }
        break;
      }
    }
  };


  const handleCarousel = (isMovingLeft) => {
    slidingImg.forEach((container) => {
      moveCarouselSlidingImg(isMovingLeft, container);
    });
  };

  return { handleCarousel, getCurrentlyDisplayedProject };
}

const ProjectDescription = (container) => {
  const projectDescriptionContainer = container;

  const projectsDescription = {
    battleship: "Maxime, soluta minus omnis ab consectetur enim voluptates perspiciatis iusto distinctio delectus libero? Ut fugit sapiente architecto nihil enim aut itaque ullam.",
    "knight-travails": "Quae ut temporibus corrupti error natus ullam ex deserunt, exercitationem sunt quos distinctio eos in nam assumenda nisi suscipit accusantium ab nostrum.",
    "tic-tac-toe": "Cum nobis minus, iusto ducimus odio magnam nesciunt quas accusamus maxime nam eius, explicabo et facere voluptas doloremque blanditiis laudantium, nihil non!",
    "todo-list": "Voluptates, minima totam. Non modi distinctio sunt. Sequi obcaecati ipsam, repellendus inventore repudiandae nisi asperiores necessitatibus consequuntur minus dicta optio voluptate rerum!",
    "weather-app": "Esse sint doloribus nam molestias nulla recusandae tempore quibusdam porro voluptatum possimus beatae ex qui, vitae explicabo magnam eaque nobis. Consectetur, quod.",
  };

  const handleProjectDescription = (currentlyDisplayedProject) => {
    const activeP = projectDescriptionContainer.querySelector("p.show");
    const hiddenP = projectDescriptionContainer.querySelector("p.hide");


    activeP.classList.remove("show");
    activeP.classList.add("hide");
    hiddenP.textContent = projectsDescription[currentlyDisplayedProject.id];
    hiddenP.classList.remove("hide");
    hiddenP.classList.add("show");
  };

  return { handleProjectDescription };
};


window.addEventListener("DOMContentLoaded", () => {
  const projectsSection = document.querySelector(".projects-section");
  const imgSliderContainer = projectsSection.querySelector(".img-slider-container");
  const projectDescriptionContainer = projectsSection.querySelector(".project-description-container");
  const slidingImg = imgSliderContainer.querySelectorAll(".sliding-img");

  const carousel = Carousel(imgSliderContainer, slidingImg);
  const projectDescription = ProjectDescription(projectDescriptionContainer);

  let currentlyDisplayedProject = null;
  imgSliderContainer.addEventListener("click", (e) => {
    const rect = imgSliderContainer.getBoundingClientRect();
    const clickedX = e.clientX - rect.left;

    if (clickedX < rect.width / 6) {
      carousel.handleCarousel(false);
      currentlyDisplayedProject = carousel.getCurrentlyDisplayedProject();
      projectDescription.handleProjectDescription(currentlyDisplayedProject);
    } else if (clickedX > rect.width * (5 / 6)) {
      carousel.handleCarousel(true);
      currentlyDisplayedProject = carousel.getCurrentlyDisplayedProject();
      projectDescription.handleProjectDescription(currentlyDisplayedProject);
    }
  });
});
