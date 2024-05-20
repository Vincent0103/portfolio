import toCamelCase from "./utils.js";
import "./style.css";

function CarouselDOM(slidingImgsArg) {
  const slidingImgs = slidingImgsArg;

  const projectDisplay = (() => {
    let currentlyDisplayedProject;

    return {
      setCurrentlyDisplayedProject(container) { currentlyDisplayedProject = container; },
      getCurrentlyDisplayedProject() { return currentlyDisplayedProject.cloneNode(); },
    };
  })();

  const handleCarouselBoxShadow = (container, isRemovingBoxShadow) => {
    if (isRemovingBoxShadow) container.classList.remove("box-shadow-visible");
    else container.classList.add("box-shadow-visible");
  };

  const moveCarousel = (projectsCarouselClasses) => {
    slidingImgs.forEach((container, i) => {
      const carouselRegex = /carousel\w+/;
      const carouselClass = container.className.match(carouselRegex)[0];
      if (carouselClass === "carouselCenter") handleCarouselBoxShadow(container, true);
      if (carouselClass !== projectsCarouselClasses[i]) {
        container.classList.remove(carouselClass);
        container.classList.add(projectsCarouselClasses[i]);
      }

      if (projectsCarouselClasses[i] === "carouselCenter") {
        handleCarouselBoxShadow(container);
        projectDisplay.setCurrentlyDisplayedProject(container);
      }
    });
  };

  const initializeCarousel = (projectsCarouselClasses) => {
    slidingImgs.forEach((container, i) => {
      container.classList.add(projectsCarouselClasses[i]);
      if (projectsCarouselClasses[i] === "carouselCenter") handleCarouselBoxShadow(container);
    });
  };

  return {
    initializeCarousel,
    moveCarousel,
    getCurrentlyDisplayedProject: projectDisplay.getCurrentlyDisplayedProject,
  };
}

const ProjectDescription = (...containers) => {
  const sectionDescriptionContainers = [...containers];

  const projectsData = {
    battleship: {
      summary: "Maxime, soluta minus omnis ab consectetur enim voluptates perspiciatis iusto distinctio delectus libero? Ut fugit sapiente architecto nihil enim aut itaque ullam.",
      learnt: "Maxime, soluta minus omnis ab consectetur enim voluptates perspiciatis iusto distinctio delectus libero? Ut fugit sapiente architecto nihil enim aut itaque ullam.",
      releaseDate: "2024-02-17",
    },
    calculator: {
      summary: "Incidunt quasi, eaque amet non, at aliquam sint dicta accusamus autem rerum facere, praesentium nam veritatis dolor adipisci in magni accusantium ea!",
      learnt: "Incidunt quasi, eaque amet non, at aliquam sint dicta accusamus autem rerum facere, praesentium nam veritatis dolor adipisci in magni accusantium ea!",
      releaseDate: "2023-07-14",
    },
    restaurantPage: {
      summary: "Dolor labore et autem dicta sit. Dolores atque blanditiis praesentium, enim ipsa molestiae ut veniam sed animi itaque eligendi magni quibusdam tempore?",
      learnt: "Dolor labore et autem dicta sit. Dolores atque blanditiis praesentium, enim ipsa molestiae ut veniam sed animi itaque eligendi magni quibusdam tempore?",
      releaseDate: "2023-08-04",
    },
    landingPage: {
      summary: "Hello, this is a placeholder of the summary",
      learnt: "however, this is a placeholder of what i learnt",
      releaseDate: "2023-06-18",
    },
    knightTravails: {
      summary: "Quae ut temporibus corrupti error natus ullam ex deserunt, exercitationem sunt quos distinctio eos in nam assumenda nisi suscipit accusantium ab nostrum.",
      learnt: "Quae ut temporibus corrupti error natus ullam ex deserunt, exercitationem sunt quos distinctio eos in nam assumenda nisi suscipit accusantium ab nostrum.",
      releaseDate: "2023-10-27",
    },
    ticTacToe: {
      summary: "Cum nobis minus, iusto ducimus odio magnam nesciunt quas accusamus maxime nam eius, explicabo et facere voluptas doloremque blanditiis laudantium, nihil non!",
      learnt: "Cum nobis minus, iusto ducimus odio magnam nesciunt quas accusamus maxime nam eius, explicabo et facere voluptas doloremque blanditiis laudantium, nihil non!",
      releaseDate: "2023-07-29",
    },
    todoList: {
      summary: "Voluptates, minima totam. Non modi distinctio sunt. Sequi obcaecati ipsam, repellendus inventore repudiandae nisi asperiores necessitatibus consequuntur minus dicta optio voluptate rerum!",
      learnt: "Voluptates, minima totam. Non modi distinctio sunt. Sequi obcaecati ipsam, repellendus inventore repudiandae nisi asperiores necessitatibus consequuntur minus dicta optio voluptate rerum!",
      releaseDate: "2023-08-14",
    },
    weatherApp: {
      summary: "Esse sint doloribus nam molestias nulla recusandae tempore quibusdam porro voluptatum possimus beatae ex qui, vitae explicabo magnam eaque nobis. Consectetur, quod.",
      learnt: "Esse sint doloribus nam molestias nulla recusandae tempore quibusdam porro voluptatum possimus beatae ex qui, vitae explicabo magnam eaque nobis. Consectetur, quod.",
      releaseDate: "2023-10-15",
    },
    imageSlider: {
      summary: "Totam consequuntur esse minus ipsum sit earum doloribus magnam quaerat distinctio voluptatum nobis at, animi commodi sint laboriosam, provident deserunt. Aliquam, placeat.",
      learnt: "Totam consequuntur esse minus ipsum sit earum doloribus magnam quaerat distinctio voluptatum nobis at, animi commodi sint laboriosam, provident deserunt. Aliquam, placeat.",
      releaseDate: "2023-08-17",
    },
    adminDashboard: {
      summary: "At dolorem enim, totam inventore fugiat voluptate, officiis dignissimos, tempora ipsam ex deleniti sequi distinctio harum delectus rem nostrum tempore quidem voluptates.",
      learnt: "At dolorem enim, totam inventore fugiat voluptate, officiis dignissimos, tempora ipsam ex deleniti sequi distinctio harum delectus rem nostrum tempore quidem voluptates.",
      releaseDate: "2023-07-22",
    },
  };

  const handleProjectRelated = (currentlyDisplayedProject) => {
    sectionDescriptionContainers.forEach((container) => {
      const activeP = container.querySelector("p.show");
      const hiddenP = container.querySelector("p.hide");

      activeP.classList.remove("show");
      activeP.classList.add("hide");
      const projectName = toCamelCase(currentlyDisplayedProject.id);
      if (container.classList.contains("project-summary-container")) {
        hiddenP.textContent = projectsData[projectName].summary;
      } else if (container.classList.contains("project-learnt-container")) {
        hiddenP.textContent = projectsData[projectName].learnt;
      } else if (container.classList.contains("project-date-container")) {
        hiddenP.textContent = projectsData[projectName].releaseDate;
      }
      hiddenP.classList.remove("hide");
      hiddenP.classList.add("show");
    });
  };

  return { handleProjectRelated };
};

const handleHeadingAnimations = (animatedHeadingContainer, animateOnce) => {
  const h2Container = animatedHeadingContainer.querySelector(".h2-container");
  const h2 = h2Container.querySelector("h2");
  const aboutTitleUnderline = animatedHeadingContainer.querySelector(".underline");
  const aboutTitleUnderlineShadow = animatedHeadingContainer.querySelector(".underline-shadow");
  let timeoutId;

  let resolveIntersection;
  const intersectionPromise = new Promise((resolve) => {
    resolveIntersection = resolve;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        h2.classList.add("spawn-heading");

        h2.classList.remove("spawn-heading-idle");
        h2.classList.add("spawn-heading-forward");

        aboutTitleUnderline.classList.add("spawn-underline");
        aboutTitleUnderlineShadow.classList.add("spawn-underline");

        timeoutId = setTimeout(() => {
          h2Container.style.overflowY = "visible";
          setTimeout(() => {
            resolveIntersection();
          }, 400);
        }, 800);

        if (animateOnce) observer.unobserve(animatedHeadingContainer);
      } else {
        h2.classList.remove("spawn-heading");

        h2.classList.remove("spawn-heading-forward");
        h2.classList.add("spawn-heading-idle");

        aboutTitleUnderline.classList.remove("spawn-underline");
        aboutTitleUnderlineShadow.classList.remove("spawn-underline");

        clearTimeout(timeoutId);

        h2Container.style.overflowY = "hidden";
      }
    });
  });

  observer.observe(animatedHeadingContainer);

  // Wait for the first projects title animation finish
  if (animateOnce) return intersectionPromise;
};

const handleProjectTitleAnimation = (projectTitleContainer, firstAnimationPromise) => {
  const projectTitle = projectTitleContainer;
  const projectsFirstTitle = projectTitle.querySelector(".projects-first-title");
  const currentProjectTitle = projectTitle.querySelector(".current-project-title");
  const upcomingProjectTitle = projectTitle.querySelector(".upcoming-project-title");

  const currentTextWidth = currentProjectTitle.offsetWidth;
  const upcomingTextWidth = upcomingProjectTitle.offsetWidth;

  firstAnimationPromise.then(() => {
    projectsFirstTitle.classList.remove("spawn-heading");
    projectsFirstTitle.classList.add("minimize-up");
    projectsFirstTitle.textContent = "Project:";

    // currentProjectTitle.style.transform = `translateX(-${currentTextWidth}px)`;
    currentProjectTitle.style.transition = "transform 1s";
    currentProjectTitle.style.transform = `translateX(0)`;
    projectTitle.style.minWidth = `${upcomingTextWidth}px`;
  });
};

export default CarouselDOM;
export { ProjectDescription, handleHeadingAnimations, handleProjectTitleAnimation };
