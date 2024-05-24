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

export default CarouselDOM;
