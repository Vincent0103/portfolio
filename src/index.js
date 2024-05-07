import positiveMod, { isObject } from "./utils.js";
import "./style.css";

function Carousel(imgSliderContainerParam, slidingImgParam) {
  const imgSliderContainer = imgSliderContainerParam;
  const slidingImgs = slidingImgParam;
  let projectsCarouselClasses;
  let currentlyDisplayedProject = null;

  const setCurrentlyDisplayedProject = (container) => {
    currentlyDisplayedProject = container;
  };

  const getCurrentlyDisplayedProject = () => currentlyDisplayedProject;

  const handleCarouselBoxShadow = (container, isRemovingBoxShadow) => {
    if (isRemovingBoxShadow) container.classList.remove("box-shadow-visible");
    else container.classList.add("box-shadow-visible");
  };

  const moveCarouselProjectsClasses = (isMovingLeft) => {
    if (isMovingLeft) projectsCarouselClasses.unshift(projectsCarouselClasses.pop());
    else projectsCarouselClasses.push(projectsCarouselClasses.shift());
  };


  const initializeCarouselProjectsClasses = () => {
    const { length } = slidingImgs;
    const slidingDirections = ["carouselHideLeft", "carouselLeftLeft", "carouselLeft",
      "carouselCenter", "carouselRight", "carouselRightRight", "carouselHideRight"];

    if (length === 1) return [slidingDirections[3]];

    const tempClasses = [];
    let start = 2;
    let end = length + 2;

    if (length > 3 && length <= 5) {
      start = 1;
      end = length + 1;
    } else if (length > 5) {
      let viewableSlidingDirectionsAmount = 5;
      const carouselHideAmount = length - viewableSlidingDirectionsAmount;
      let carouselHideLefts = Math.ceil(carouselHideAmount / 2);
      let carouselHideRights = carouselHideAmount - carouselHideLefts;
      let slidingDirectionsIndex;

      for (let i = 0; i < length; i += 1) {
        if (carouselHideLefts > 0) {
          tempClasses.push("carouselHideLeft");
          carouselHideLefts -= 1;
        } else if (viewableSlidingDirectionsAmount > 0) {
          slidingDirectionsIndex = 5 - viewableSlidingDirectionsAmount + 1;
          tempClasses.push(slidingDirections[slidingDirectionsIndex]);
          viewableSlidingDirectionsAmount -= 1;
        } else if (carouselHideRights > 0) {
          tempClasses.push("carouselHideRight");
          carouselHideRights -= 1;
        }
      }

      projectsCarouselClasses = [...tempClasses];
      return;
    }

    for (let i = start; i < end; i += 1) tempClasses.push(slidingDirections[i]);
    projectsCarouselClasses = [...tempClasses];
  };

  const moveCarousel = (isMovingLeft) => {
    moveCarouselProjectsClasses(isMovingLeft);
    slidingImgs.forEach((container, i) => {
      const carouselRegex = /carousel\w+/;
      const carouselClass = container.className.match(carouselRegex)[0];
      if (carouselClass === "carouselCenter") handleCarouselBoxShadow(container, true);
      container.classList.remove(carouselClass);
      container.classList.add(projectsCarouselClasses[i]);

      if (projectsCarouselClasses[i] === "carouselCenter") {
        handleCarouselBoxShadow(container);
        currentlyDisplayedProject = container;
      }
    });
  };

  const initializeCarousel = () => {
    initializeCarouselProjectsClasses();
    slidingImgs.forEach((container, i) => {
      container.classList.add(projectsCarouselClasses[i]);
      if (projectsCarouselClasses[i] === "carouselCenter") handleCarouselBoxShadow(container);
    });
  };


  return { initializeCarousel, moveCarousel, getCurrentlyDisplayedProject };
}

const ProjectDescription = (container) => {
  const projectDescriptionContainer = container;

  const projectsDescription = {
    battleship: "Maxime, soluta minus omnis ab consectetur enim voluptates perspiciatis iusto distinctio delectus libero? Ut fugit sapiente architecto nihil enim aut itaque ullam.",
    calculator: "Incidunt quasi, eaque amet non, at aliquam sint dicta accusamus autem rerum facere, praesentium nam veritatis dolor adipisci in magni accusantium ea!",
    "restaurant-page": "Dolor labore et autem dicta sit. Dolores atque blanditiis praesentium, enim ipsa molestiae ut veniam sed animi itaque eligendi magni quibusdam tempore?",
    "knight-travails": "Quae ut temporibus corrupti error natus ullam ex deserunt, exercitationem sunt quos distinctio eos in nam assumenda nisi suscipit accusantium ab nostrum.",
    "tic-tac-toe": "Cum nobis minus, iusto ducimus odio magnam nesciunt quas accusamus maxime nam eius, explicabo et facere voluptas doloremque blanditiis laudantium, nihil non!",
    "todo-list": "Voluptates, minima totam. Non modi distinctio sunt. Sequi obcaecati ipsam, repellendus inventore repudiandae nisi asperiores necessitatibus consequuntur minus dicta optio voluptate rerum!",
    "weather-app": "Esse sint doloribus nam molestias nulla recusandae tempore quibusdam porro voluptatum possimus beatae ex qui, vitae explicabo magnam eaque nobis. Consectetur, quod.",
    "image-slider": "Totam consequuntur esse minus ipsum sit earum doloribus magnam quaerat distinctio voluptatum nobis at, animi commodi sint laboriosam, provident deserunt. Aliquam, placeat.",
    "admin-dashboard": "At dolorem enim, totam inventore fugiat voluptate, officiis dignissimos, tempora ipsam ex deleniti sequi distinctio harum delectus rem nostrum tempore quidem voluptates.",
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
  const slidingImgs = imgSliderContainer.querySelectorAll(".sliding-img");

  const carousel = Carousel(imgSliderContainer, slidingImgs);
  carousel.initializeCarousel();

  const projectDescription = ProjectDescription(projectDescriptionContainer);

  let currentlyDisplayedProject = null;
  const rect = imgSliderContainer.getBoundingClientRect();

  imgSliderContainer.addEventListener("click", (e) => {
    const clickedX = e.clientX - rect.left;

    if (clickedX < rect.width / 6) {
      carousel.moveCarousel(false);
      currentlyDisplayedProject = carousel.getCurrentlyDisplayedProject();
      projectDescription.handleProjectDescription(currentlyDisplayedProject);
    } else if (clickedX > rect.width * (5 / 6)) {
      carousel.moveCarousel(true);
      currentlyDisplayedProject = carousel.getCurrentlyDisplayedProject();
      projectDescription.handleProjectDescription(currentlyDisplayedProject);
    }
  });
});
