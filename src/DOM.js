import "./style.css";

function CarouselDOM(slidingImgsArg) {
  const slidingImgs = slidingImgsArg;

  const projectDisplay = (() => {
    let currentlyDisplayedProject;

    return {
      setCurrentlyDisplayedProject(container) { currentlyDisplayedProject = container; },
      getCurrentlyDisplayedProject() { return currentlyDisplayedProject.cloneNode(); }
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
    getCurrentlyDisplayedProject: projectDisplay.getCurrentlyDisplayedProject
  };
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
    "landing-page": "Necessitatibus rerum quaerat veritatis explicabo officiis fugit velit, dolorum quidem eligendi exercitationem quia molestias earum consectetur, aliquid, temporibus culpa minima officia eum.",
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

export default CarouselDOM;
export { ProjectDescription };
