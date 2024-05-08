const CarouselLogic = () => {
  const projectsCarouselClasses = (() => {
    let classesValue;

    return {
      setClassesValue(array) { classesValue = [...array]; },
      getClassesValue() { return [...classesValue]; }
    };
  })();

  const moveCarouselProjectsClasses = (isMovingLeft) => {
    const carouselClasses = projectsCarouselClasses.getClassesValue();

    if (isMovingLeft) carouselClasses.push(carouselClasses.shift());
    else carouselClasses.unshift(carouselClasses.pop());

    projectsCarouselClasses.setClassesValue(carouselClasses);
  };

  const initializeCarouselProjectsClasses = (slidingImgsLength) => {
    const length = slidingImgsLength;
    if (length <= 0) throw new Error("Cannot initialize with a null or negative length");

    const slidingDirections = ["carouselHideLeft", "carouselLeftLeft", "carouselLeft",
      "carouselCenter", "carouselRight", "carouselRightRight", "carouselHideRight"];

    if (length === 1) {
      return projectsCarouselClasses.setClassesValue([slidingDirections[3]]);
    }

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

      projectsCarouselClasses.setClassesValue([...tempClasses]);
      return;
    }

    for (let i = start; i < end; i += 1) tempClasses.push(slidingDirections[i]);
    projectsCarouselClasses.setClassesValue([...tempClasses]);
  };

  return {
    getProjectsCarouselClasses: projectsCarouselClasses.getClassesValue,
    moveCarouselProjectsClasses,
    initializeCarouselProjectsClasses
  };
};

export default CarouselLogic;
