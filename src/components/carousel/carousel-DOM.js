function CarouselDOM(slidingImgsArg) {
  const slidingImgs = slidingImgsArg;

  const projectDisplayName = (() => {
    let displayedProject = null;

    return {
      setDisplayedProject: (name) => { displayedProject = name; },
      getDisplayedProject: () => displayedProject,
    };
  })();

  const CAROUSEL_CENTER = "carousel-center";
  const BOX_SHADOW_VISIBLE = "box-shadow-visible";

  const handlePositionClassCenter = (classToCheck, container, isRemovingBoxShadow) => {
    if (classToCheck === CAROUSEL_CENTER) {
      if (isRemovingBoxShadow) {
        container.classList.remove(BOX_SHADOW_VISIBLE);
      } else {
        container.classList.add(BOX_SHADOW_VISIBLE);
        projectDisplayName.setDisplayedProject(container.id);
      }
    }
  };

  const updateSlidingImgClass = (container, removingClass, addingClass) => {
    if (removingClass !== addingClass) {
      container.classList.remove(removingClass);
      container.classList.add(addingClass);
    }
  };

  const extractCarouselClass = (container) => {
    const carouselRegex = /carousel(?:-\w+)+/;
    const match = container.className.match(carouselRegex);
    return (match) ? match[0] : "";
  };

  const moveCarousel = (projectsCarouselClasses) => {
    slidingImgs.forEach((container, i) => {
      const carouselClass = extractCarouselClass(container);
      handlePositionClassCenter(carouselClass, container, true);

      updateSlidingImgClass(container, carouselClass, projectsCarouselClasses[i]);

      const currentClass = projectsCarouselClasses[i];
      handlePositionClassCenter(currentClass, container, false);
    });
  };

  const initializeCarousel = (projectsCarouselClasses) => {
    slidingImgs.forEach((container, i) => {
      container.classList.add(projectsCarouselClasses[i]);

      const currentClass = projectsCarouselClasses[i];
      handlePositionClassCenter(currentClass, container, false);
    });
  };

  return {
    initializeCarousel,
    moveCarousel,
    getDisplayedProjectName: projectDisplayName.getDisplayedProject,
  };
}

export default CarouselDOM;
