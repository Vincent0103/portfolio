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
      releaseDate: "02/17/2024",
    },
    calculator: {
      summary: "Incidunt quasi, eaque amet non, at aliquam sint dicta accusamus autem rerum facere, praesentium nam veritatis dolor adipisci in magni accusantium ea!",
      learnt: "Incidunt quasi, eaque amet non, at aliquam sint dicta accusamus autem rerum facere, praesentium nam veritatis dolor adipisci in magni accusantium ea!",
      releaseDate: "07/14/2023",
    },
    restaurantPage: {
      summary: "Dolor labore et autem dicta sit. Dolores atque blanditiis praesentium, enim ipsa molestiae ut veniam sed animi itaque eligendi magni quibusdam tempore?",
      learnt: "Dolor labore et autem dicta sit. Dolores atque blanditiis praesentium, enim ipsa molestiae ut veniam sed animi itaque eligendi magni quibusdam tempore?",
      releaseDate: "08/04/2023",
    },
    landingPage: {
      summary: "Hello, this is a placeholder of the summary",
      learnt: "however, this is a placeholder of what i learnt",
      releaseDate: "06/18/2023",
    },
    knightTravails: {
      summary: "Quae ut temporibus corrupti error natus ullam ex deserunt, exercitationem sunt quos distinctio eos in nam assumenda nisi suscipit accusantium ab nostrum.",
      learnt: "Quae ut temporibus corrupti error natus ullam ex deserunt, exercitationem sunt quos distinctio eos in nam assumenda nisi suscipit accusantium ab nostrum.",
      releaseDate: "10/27/2023",
    },
    ticTacToe: {
      summary: "Cum nobis minus, iusto ducimus odio magnam nesciunt quas accusamus maxime nam eius, explicabo et facere voluptas doloremque blanditiis laudantium, nihil non!",
      learnt: "Cum nobis minus, iusto ducimus odio magnam nesciunt quas accusamus maxime nam eius, explicabo et facere voluptas doloremque blanditiis laudantium, nihil non!",
      releaseDate: "07/29/2023",
    },
    todoList: {
      summary: "Voluptates, minima totam. Non modi distinctio sunt. Sequi obcaecati ipsam, repellendus inventore repudiandae nisi asperiores necessitatibus consequuntur minus dicta optio voluptate rerum!",
      learnt: "Voluptates, minima totam. Non modi distinctio sunt. Sequi obcaecati ipsam, repellendus inventore repudiandae nisi asperiores necessitatibus consequuntur minus dicta optio voluptate rerum!",
      releaseDate: "08/14/2023",
    },
    weatherApp: {
      summary: "Esse sint doloribus nam molestias nulla recusandae tempore quibusdam porro voluptatum possimus beatae ex qui, vitae explicabo magnam eaque nobis. Consectetur, quod.",
      learnt: "Esse sint doloribus nam molestias nulla recusandae tempore quibusdam porro voluptatum possimus beatae ex qui, vitae explicabo magnam eaque nobis. Consectetur, quod.",
      releaseDate: "10/15/2023",
    },
    imageSlider: {
      summary: "Totam consequuntur esse minus ipsum sit earum doloribus magnam quaerat distinctio voluptatum nobis at, animi commodi sint laboriosam, provident deserunt. Aliquam, placeat.",
      learnt: "Totam consequuntur esse minus ipsum sit earum doloribus magnam quaerat distinctio voluptatum nobis at, animi commodi sint laboriosam, provident deserunt. Aliquam, placeat.",
      releaseDate: "08/17/2023",
    },
    adminDashboard: {
      summary: "At dolorem enim, totam inventore fugiat voluptate, officiis dignissimos, tempora ipsam ex deleniti sequi distinctio harum delectus rem nostrum tempore quidem voluptates.",
      learnt: "At dolorem enim, totam inventore fugiat voluptate, officiis dignissimos, tempora ipsam ex deleniti sequi distinctio harum delectus rem nostrum tempore quidem voluptates.",
      releaseDate: "07/22/2023",
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

export default CarouselDOM;
export { ProjectDescription };
