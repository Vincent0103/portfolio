function CarouselDOM(slidingImgsArg) {
  const slidingImgs = slidingImgsArg;

  const projectDisplayName = (() => {
    let displayedProject = null;

    return {
      setDisplayedProject: (name) => { displayedProject = name; },
      getDisplayedProject: () => displayedProject,
    };
  })();

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

      if (currentClass === "carousel-center") {
        handleCarouselBoxShadow(container);
        projectDisplayName.setDisplayedProject(container.id);
      }
    });
  };

  const initializeCarousel = (projectsCarouselClasses) => {
    slidingImgs.forEach((container, i) => {
      container.classList.add(projectsCarouselClasses[i]);

      const currentClass = projectsCarouselClasses[i];

      if (currentClass === "carousel-center") {
        handleCarouselBoxShadow(container);
        projectDisplayName.setDisplayedProject(container.id);
      }
    });
  };

  return {
    initializeCarousel,
    moveCarousel,
    getDisplayedProjectName: projectDisplayName.getDisplayedProject,
  };
}

export default CarouselDOM;
