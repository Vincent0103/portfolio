import toCamelCase, { toTitle } from "./utils.js";
import "./style.css";

function CarouselDOM(slidingImgsArg) {
  const slidingImgs = slidingImgsArg;

  const projectDisplay = (() => {
    const projects = {
      currentlyDisplayedProject: null,
      nextDisplayedProject: null,
      pastDisplayedProject: null,
    };

    return {
      setDisplayedProject(displayedProjectName, container) {
        projects[displayedProjectName] = container;
      },
      getDisplayedProject(displayedProjectName) {
        return projects[displayedProjectName];
      },
    };
  })();

  const displayedProjectClasses = {
    "carousel-center": "currentlyDisplayedProject",
    "carousel-left": "pastDisplayedProject",
    "carousel-right": "nextDisplayedProject",
  };

  const handleCarouselBoxShadow = (container, isRemovingBoxShadow) => {
    if (isRemovingBoxShadow) container.classList.remove("box-shadow-visible");
    else container.classList.add("box-shadow-visible");
  };

  const moveCarousel = (projectsCarouselClasses) => {
    slidingImgs.forEach((container, i) => {
      const carouselRegex = /carousel(?:-\w+)+/;
      const carouselClass = container.className.match(carouselRegex)[0];
      if (carouselClass === "carousel-center") handleCarouselBoxShadow(container, true);
      if (carouselClass !== projectsCarouselClasses[i]) {
        container.classList.remove(carouselClass);
        container.classList.add(projectsCarouselClasses[i]);
      }

      const currentClass = projectsCarouselClasses[i];

      if (currentClass in displayedProjectClasses) {
        if (currentClass === "carousel-center") handleCarouselBoxShadow(container);
        projectDisplay.setDisplayedProject(displayedProjectClasses[currentClass], container);
      }
    });
  };

  const initializeCarousel = (projectsCarouselClasses) => {
    slidingImgs.forEach((container, i) => {
      container.classList.add(projectsCarouselClasses[i]);

      const currentClass = projectsCarouselClasses[i];

      if (currentClass in displayedProjectClasses) {
        if (currentClass === "carousel-center") handleCarouselBoxShadow(container);
        projectDisplay.setDisplayedProject(displayedProjectClasses[currentClass], container);
      }
    });
  };

  return {
    initializeCarousel,
    moveCarousel,
    getDisplayedProject: projectDisplay.getDisplayedProject,
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

const addHeadingAnimations = (animatedHeadingContainer, animateOnce) => {
  const h2Container = animatedHeadingContainer.querySelector(".h2-container");
  const h2 = h2Container.querySelector("h2");
  const aboutTitleUnderline = animatedHeadingContainer.querySelector(".underline");
  const aboutTitleUnderlineShadow = animatedHeadingContainer.querySelector(".underline-shadow");
  let timeoutId;

  let resolveIntersection;
  const intersectionPromise = new Promise((resolve) => {
    resolveIntersection = resolve;
  });

  const applyHeadingAnimation = () => {
    h2.classList.add("spawn-heading");

    h2.classList.remove("spawn-heading-idle");
    h2.classList.add("spawn-heading-forward");

    aboutTitleUnderline.classList.add("spawn-underline");
    aboutTitleUnderlineShadow.classList.add("spawn-underline");

    // eslint-disable-next-line no-promise-executor-return
    const delay = (ms) => new Promise((resolve) => {
      timeoutId = setTimeout(resolve, ms);
    });

    delay(800)
      .then(() => {
        h2Container.style.overflowY = "visible";
        return delay(500);
      })
      .then(() => {
        resolveIntersection();
      })
      .catch((err) => {
        console.error("An error occurred: ", err);
      });
  };

  const removeHeadingAnimation = () => {
    h2.classList.remove("spawn-heading");

    h2.classList.remove("spawn-heading-forward");
    h2.classList.add("spawn-heading-idle");

    aboutTitleUnderline.classList.remove("spawn-underline");
    aboutTitleUnderlineShadow.classList.remove("spawn-underline");

    clearTimeout(timeoutId);

    h2Container.style.overflowY = "hidden";
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        applyHeadingAnimation();
        if (animateOnce) observer.unobserve(animatedHeadingContainer);
      } else {
        removeHeadingAnimation();
      }
    });
  });

  observer.observe(animatedHeadingContainer);

  // Wait for the first projects title animation to finish
  if (animateOnce) return intersectionPromise;
};


const ProjectTitleAnimation = (projectTitleContainer) => {
  const projectTitle = projectTitleContainer;
  const projectsFirstTitle = projectTitle.querySelector(".projects-first-title");

  const transitionProjectTitle = (projectTitles, toLeft, textToDisplay) => {
    const projectTitleClasses = ["left", "center", "right"];
    const newClasses = [];

    projectTitles.forEach((title) => {
      const regex = /(left)|(center)|(right)/;
      const currentClass = title.className.match(regex)[0];
      title.classList.remove(currentClass);

      const currentIndex = projectTitleClasses.indexOf(currentClass);
      let nextIndex;

      if (toLeft) {
        nextIndex = (currentIndex - 1 + projectTitleClasses.length) % projectTitleClasses.length;
      } else {
        nextIndex = (currentIndex + 1) % projectTitleClasses.length;
      }

      newClasses.push(projectTitleClasses[nextIndex]);
    });

    projectTitles.forEach((title, i) => {
      const currentClassesItem = newClasses[i];
      title.classList.add(currentClassesItem);
      if (currentClassesItem === "right") title.textContent = textToDisplay;
    });
  };


  const update = (currentlyDisplayedProject) => {
    const projectTitles = [...projectTitle.querySelectorAll(".project-title")];
    const textToDisplay = toTitle(currentlyDisplayedProject.id);

    transitionProjectTitle(projectTitles, true, textToDisplay);
  };

  const initialize = (firstAnimationPromise, currentlyDisplayedProject) => {
    firstAnimationPromise.then(() => {
      const currentProjectTitle = projectTitle.querySelector(".project-title.right");

      projectsFirstTitle.classList.remove("spawn-heading");
      projectsFirstTitle.classList.add("minimize-up");
      setTimeout(() => {
        projectsFirstTitle.textContent = "Project:";
      }, 160);

      currentProjectTitle.classList.remove("right");
      currentProjectTitle.textContent = toTitle(currentlyDisplayedProject.id);

      currentProjectTitle.classList.add("center");
    });
  };

  return { initialize, update };
};

export default CarouselDOM;
export { ProjectDescription, addHeadingAnimations, ProjectTitleAnimation };
