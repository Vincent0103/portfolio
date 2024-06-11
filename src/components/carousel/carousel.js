import CarouselDOM from "./carousel-DOM.js";
import CarouselLogic from "./carousel-logic.js";
import { throttle } from "../../utils.js";


const Carousel = (imgSliderContainer) => {
  const slidingImgs = imgSliderContainer.querySelectorAll(".sliding-img");

  const carouselDOM = CarouselDOM(slidingImgs);
  const carouselLogic = CarouselLogic();

  const getDisplayedProjectName = () => carouselDOM.getDisplayedProjectName();

  const slidingSide = (() => {
    let temp = "left";

    return {
      set: (value) => { temp = value; },
      get: () => temp,
    };
  })();

  const hasClickedSide = (() => {
    let temp = false;

    return {
      set: (value) => { temp = value; },
      get: () => temp,
    };
  })();

  let resolveCarousel;
  const loadingCarousel = () => new Promise((resolve) => {
    resolveCarousel = resolve;
  });

  const initialize = () => {
    carouselLogic.initializeCarouselProjectsClasses(slidingImgs.length);
    carouselDOM.initializeCarousel(carouselLogic.getProjectsCarouselClasses());

    try {
      // the initialize function gets executed last in index.js which is why the resolve is here
      resolveCarousel();
    } catch (error) {
      console.error("resolveCarousel failed:", error);
    }
  };

  const slide = (areProjectsMovingLeft) => {
    carouselLogic.moveCarouselProjectsClasses(areProjectsMovingLeft);
    carouselDOM.moveCarousel(carouselLogic.getProjectsCarouselClasses());
  };

  let rect;
  let rightRectArea;
  let leftRectArea;

  const updateBoundingRect = (element) => {
    rect = element.getBoundingClientRect();
    rightRectArea = rect.width * (5 / 6);
    leftRectArea = rect.width / 6;
  };

  const handleCarouselClick = () => {
    updateBoundingRect(imgSliderContainer);

    window.addEventListener("resize", () => updateBoundingRect(imgSliderContainer));

    const onClick = (e) => {
      hasClickedSide.set(false);
      const clickedX = e.clientX - rect.left;

      const isClickedRight = clickedX > rightRectArea;
      const isClickedLeft = clickedX < leftRectArea;

      if (isClickedRight || isClickedLeft) {
        slidingSide.set((isClickedRight) ? "left" : "right");
        hasClickedSide.set(true);
      }
    };

    imgSliderContainer.addEventListener("click", throttle(onClick, 100));
  };


  const handleCarouselHover = () => {
    const [leftArrowSvg, rightArrowSvg] = imgSliderContainer.querySelectorAll("svg#left-arrow, svg#right-arrow");
    imgSliderContainer.addEventListener("mousemove", (e) => {
      const mousePositionX = e.clientX - rect.left;

      const isHoveringRight = mousePositionX > rightRectArea;
      const isHoveringLeft = mousePositionX < leftRectArea;

      if (isHoveringLeft) {
        leftArrowSvg.classList.add("grow");
      } else if (isHoveringRight) {
        rightArrowSvg.classList.add("grow");
      } else {
        leftArrowSvg.classList.remove("grow");
        rightArrowSvg.classList.remove("grow");
      }
    });

    imgSliderContainer.addEventListener("mouseleave", () => {
      leftArrowSvg.classList.remove("grow");
      rightArrowSvg.classList.remove("grow");
    });
  };

  return {
    initialize,
    slide,
    handleCarouselClick,
    handleCarouselHover,
    getDisplayedProjectName,
    getSlidingSide: slidingSide.get,
    getHasClickedSide: hasClickedSide.get,
    loadingCarousel,
  };
};

export default Carousel;
