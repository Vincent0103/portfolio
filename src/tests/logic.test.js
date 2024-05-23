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
    expect(carouselLogic.getProjectsCarouselClasses()).toEqual(["carousel-left-left", "carousel-left", "carousel-center", "carousel-right", "carousel-right-right"]);
  });

  test("initilialize correctly when there is 4 sliding images", () => {
    carouselLogic.initializeCarouselProjectsClasses(4);
    expect(carouselLogic.getProjectsCarouselClasses()).toEqual(["carousel-left-left", "carousel-left", "carousel-center", "carousel-right"]);
  });

  test("initilialize correctly when there is 3 sliding images", () => {
    carouselLogic.initializeCarouselProjectsClasses(3);
    expect(carouselLogic.getProjectsCarouselClasses()).toEqual(["carousel-left", "carousel-center", "carousel-right"]);
  });

  test("initilialize correctly when there is 2 sliding images", () => {
    carouselLogic.initializeCarouselProjectsClasses(2);
    expect(carouselLogic.getProjectsCarouselClasses()).toEqual(["carousel-left", "carousel-center"]);
  });

  test("initilialize correctly when there is 1 sliding images", () => {
    carouselLogic.initializeCarouselProjectsClasses(1);
    expect(carouselLogic.getProjectsCarouselClasses()).toEqual(["carousel-center"]);
  });

  test("initilialize correctly when there is 8 sliding images", () => {
    carouselLogic.initializeCarouselProjectsClasses(8);
    expect(carouselLogic.getProjectsCarouselClasses()).toEqual(["carousel-hide-left", "carousel-hide-left",
      "carousel-left-left", "carousel-left", "carousel-center", "carousel-right", "carousel-right-right", "carousel-hide-right"]);
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
    expect(carouselLogic.getProjectsCarouselClasses()).toEqual(["carousel-center", "carousel-right", "carousel-left-left", "carousel-left"]);

    carouselLogic2.moveCarouselProjectsClasses(true);
    carouselLogic2.moveCarouselProjectsClasses(true);
    expect(carouselLogic2.getProjectsCarouselClasses()).toEqual(["carousel-right-right", "carousel-hide-right",
      "carousel-hide-left", "carousel-left-left", "carousel-left", "carousel-center", "carousel-right",
    ]);
  });

  test("shift carousel classes alternatively on the sides", () => {
    carouselLogic.moveCarouselProjectsClasses(true);
    carouselLogic.moveCarouselProjectsClasses(false);
    carouselLogic.moveCarouselProjectsClasses(true);
    expect(carouselLogic.getProjectsCarouselClasses()).toEqual(["carousel-right", "carousel-left-left", "carousel-left", "carousel-center"]);

    carouselLogic2.moveCarouselProjectsClasses(false);
    carouselLogic2.moveCarouselProjectsClasses(true);
    expect(carouselLogic2.getProjectsCarouselClasses()).toEqual(["carousel-hide-left", "carousel-left-left",
      "carousel-left", "carousel-center", "carousel-right", "carousel-right-right", "carousel-hide-right"]);
  });

  test("carousel can get back to it's original state after going around n times", () => {
    carouselLogic3.moveCarouselProjectsClasses(false);
    carouselLogic3.moveCarouselProjectsClasses(false);
    carouselLogic3.moveCarouselProjectsClasses(false);
    carouselLogic3.moveCarouselProjectsClasses(false);
    expect(carouselLogic3.getProjectsCarouselClasses()).toEqual(["carousel-left", "carousel-center"]);

    carouselLogic3.moveCarouselProjectsClasses(true);
    carouselLogic3.moveCarouselProjectsClasses(true);
    expect(carouselLogic3.getProjectsCarouselClasses()).toEqual(["carousel-left", "carousel-center"]);
  });
});
