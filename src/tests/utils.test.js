import toCamelCase, { toTitle, throttle } from "../utils.js";

test("change text format to camel case", () => {
  expect(toCamelCase("john-wick")).toBe("johnWick");
  expect(toCamelCase("mario-Oo-Ood-d")).toBe("marioOoOodD");
  expect(toCamelCase("carouselcenter")).toBe("carouselcenter");
  expect(toCamelCase("carousel-leftLeft-Right-down")).toBe("carouselLeftLeftRightDown");
  [null, 23, 7, 6, false, true].forEach((item) => {
    expect(toCamelCase(item)).toBeNull();
  });
});

test("change text format to title", () => {
  expect(toTitle("weather-app")).toBe("Weather App");
  expect(toTitle("weather-23-dzh-lower")).toBe("Weather 23 Dzh Lower");
  [null, 23, 7, 6, false, true].forEach((item) => {
    expect(toTitle(item)).toBeNull();
  });
});

describe("throttle function", () => {
  let function1;
  let throttledFunction;
  beforeEach(() => {
    function1 = () => true;
    throttledFunction = throttle(function1, 500);
  });

  test("assert throttle when used correctly with a particular timing", () => {
    expect(throttledFunction()).toBeTruthy();
    expect(throttledFunction()).toBeFalsy();
    expect(throttledFunction()).toBeFalsy();

    return new Promise((resolve) => {
      setTimeout(() => resolve(), 100);
    })
      .then(() => {
        expect(throttledFunction()).toBeFalsy();
        return new Promise((resolve) => setTimeout(resolve, 400));
      })
      .then(() => {
        expect(throttledFunction()).toBeTruthy();
        expect(throttledFunction()).toBeFalsy();
      });
  });

  test("reject throttle when parameters data types are invalid", () => {
    [null, 23, 7, 6, false, true].forEach((item) => {
      expect(toTitle(item)).toBeNull();
    });
  });
});
