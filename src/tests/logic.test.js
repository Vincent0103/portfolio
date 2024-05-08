import CarouselLogic from "../logic.js";


describe("initialize carousel project classes", () => {
  let carouselLogic;
  beforeEach(() => {
    carouselLogic = CarouselLogic();
  });

  test("throw error when there is there is a negative or 0 amount of sliding images", () => {
    let initializeCarousel = carouselLogic.initializeCarouselProjectsClasses;
    expect(() => initializeCarousel(0)).toThrow("Cannot initialize with a null or negative length");

    initializeCarousel = carouselLogic.initializeCarouselProjectsClasses;
    expect(() => initializeCarousel(-2)).toThrow("Cannot initialize with a null or negative length");
  });
  test("initilialize correctly when there is 5 sliding images", () => {
    carouselLogic.initializeCarouselProjectsClasses(5);
    expect(carouselLogic.getProjectsCarouselClasses()).toEqual(["carouselLeftLeft", "carouselLeft", "carouselCenter", "carouselRight", "carouselRightRight"]);
  });

  test("initilialize correctly when there is 3 sliding images", () => {
    carouselLogic.initializeCarouselProjectsClasses(3);
    expect(carouselLogic.getProjectsCarouselClasses()).toEqual(["carouselLeft", "carouselCenter", "carouselRight"]);
  });

  test("initilialize correctly when there is 2 sliding images", () => {
    carouselLogic.initializeCarouselProjectsClasses(2);
    expect(carouselLogic.getProjectsCarouselClasses()).toEqual(["carouselLeft", "carouselCenter"]);
  });

  test("initilialize correctly when there is 1 sliding images", () => {
    carouselLogic.initializeCarouselProjectsClasses(1);
    expect(carouselLogic.getProjectsCarouselClasses()).toEqual(["carouselCenter"]);
  });

  test("initilialize correctly when there is 8 sliding images", () => {
    carouselLogic.initializeCarouselProjectsClasses(8);
    expect(carouselLogic.getProjectsCarouselClasses()).toEqual(["carouselHideLeft", "carouselHideLeft",
      "carouselLeftLeft", "carouselLeft", "carouselCenter", "carouselRight", "carouselRightRight", "carouselHideRight"]);
  });
});

