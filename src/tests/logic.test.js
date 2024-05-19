import CarouselLogic from "../logic.js";

let carouselLogic;
let carouselLogic2;
let carouselLogic3;
beforeEach(() => {
  carouselLogic = CarouselLogic();
  carouselLogic2 = CarouselLogic();
  carouselLogic3 = CarouselLogic();
});

describe("initialize carousel project classes", () => {
  test("throw error when there is a negative or null amount of sliding images", () => {
    let initializeCarousel = carouselLogic.initializeCarouselProjectsClasses;
    expect(() => initializeCarousel(0)).toThrow("Cannot initialize with a null or negative length");

    initializeCarousel = carouselLogic.initializeCarouselProjectsClasses;
    expect(() => initializeCarousel(-2)).toThrow("Cannot initialize with a null or negative length");
  });
  test("initilialize correctly when there is 5 sliding images", () => {
    carouselLogic.initializeCarouselProjectsClasses(5);
    expect(carouselLogic.getProjectsCarouselClasses()).toEqual(["carouselLeftLeft", "carouselLeft", "carouselCenter", "carouselRight", "carouselRightRight"]);
  });

  test("initilialize correctly when there is 4 sliding images", () => {
    carouselLogic.initializeCarouselProjectsClasses(4);
    expect(carouselLogic.getProjectsCarouselClasses()).toEqual(["carouselLeftLeft", "carouselLeft", "carouselCenter", "carouselRight"]);
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

describe("move carousel project classes", () => {
  beforeEach(() => {
    carouselLogic.initializeCarouselProjectsClasses(4);
    carouselLogic2.initializeCarouselProjectsClasses(7);
    carouselLogic3.initializeCarouselProjectsClasses(2);
  });

  test("shift carousel classes 2 times on the left", () => {
    carouselLogic.moveCarouselProjectsClasses(true);
    carouselLogic.moveCarouselProjectsClasses(true);
    expect(carouselLogic.getProjectsCarouselClasses()).toEqual(["carouselCenter", "carouselRight", "carouselLeftLeft", "carouselLeft"]);

    carouselLogic2.moveCarouselProjectsClasses(true);
    carouselLogic2.moveCarouselProjectsClasses(true);
    expect(carouselLogic2.getProjectsCarouselClasses()).toEqual(["carouselRightRight", "carouselHideRight",
      "carouselHideLeft", "carouselLeftLeft", "carouselLeft", "carouselCenter", "carouselRight",
    ]);
  });

  test("shift carousel classes alternatively on the sides", () => {
    carouselLogic.moveCarouselProjectsClasses(true);
    carouselLogic.moveCarouselProjectsClasses(false);
    carouselLogic.moveCarouselProjectsClasses(true);
    expect(carouselLogic.getProjectsCarouselClasses()).toEqual(["carouselRight", "carouselLeftLeft", "carouselLeft", "carouselCenter"]);

    carouselLogic2.moveCarouselProjectsClasses(false);
    carouselLogic2.moveCarouselProjectsClasses(true);
    expect(carouselLogic2.getProjectsCarouselClasses()).toEqual(["carouselHideLeft", "carouselLeftLeft",
      "carouselLeft", "carouselCenter", "carouselRight", "carouselRightRight", "carouselHideRight"]);
  });

  test("carousel can get back to it's original state after going around n times", () => {
    carouselLogic3.moveCarouselProjectsClasses(false);
    carouselLogic3.moveCarouselProjectsClasses(false);
    carouselLogic3.moveCarouselProjectsClasses(false);
    carouselLogic3.moveCarouselProjectsClasses(false);
    expect(carouselLogic3.getProjectsCarouselClasses()).toEqual(["carouselLeft", "carouselCenter"]);

    carouselLogic3.moveCarouselProjectsClasses(true);
    carouselLogic3.moveCarouselProjectsClasses(true);
    expect(carouselLogic3.getProjectsCarouselClasses()).toEqual(["carouselLeft", "carouselCenter"]);
  });
});
