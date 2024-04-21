import "./style.css";

window.addEventListener("DOMContentLoaded", () => {
  const main = document.body.querySelector("main");
  const circleFillContainer = main.querySelector(".circle-fill-container");
  const circleFill = circleFillContainer.querySelector(".circle-fill");

  const updateHeight = (container) => {
    const computedStyle = window.getComputedStyle(container);
    circleFillContainer.style.height = `calc(${computedStyle.width} * (3 / 4))`;
  }

  updateHeight(circleFillContainer);
  window.addEventListener('resize', () => updateHeight(circleFillContainer));
});
