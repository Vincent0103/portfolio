const AboutRelated = (aboutSectionElement) => {
  const aboutSection = aboutSectionElement;

  const transitionHeightOnAppend = (paragraphsContainer) => {
    const container = paragraphsContainer;
    const newHeight = container.scrollHeight;
    const hasLowCPU = navigator?.hardwareConcurrency < 4;

    if (hasLowCPU) {
      container.style.transition = "none";
      container.style.maxHeight = "none";
      return;
    }

    container.style.maxHeight = `${newHeight}px`;

    container.addEventListener("transitionend", () => {
      container.style.maxHeight = "none";
    }, { once: true });
  };

  const appendRemainingText = (paragraphsContainer) => {
    const p = document.createElement("p");
    p.textContent = "Two years ago, I committed myself to study computer science as deep as possible by following ";

    const a = document.createElement("a");
    a.setAttribute("target", "_blank");
    a.setAttribute("href", "https://www.theodinproject.com/");
    a.textContent = "The Odin Project";
    p.appendChild(a);

    const remainingText = document.createTextNode(" course (which made this portfolio possible ❤︎).");
    p.appendChild(remainingText);

    const p2 = document.createElement("p");
    p2.textContent = "During my free time, i most likely program applications, hit the gym, play solo video games and read self-improvement books.";

    paragraphsContainer.append(p, p2);
  };

  const handleParagraphsContainerClick = (e, paragraphsContainer) => {
    const { bottom } = paragraphsContainer.getBoundingClientRect();
    const clickY = e.clientY;
    const currentClickPosition = bottom - clickY;
    const MORE_BTN_POSITION = 120;

    if (currentClickPosition <= MORE_BTN_POSITION) {
      paragraphsContainer.classList.remove("before", "after");
      appendRemainingText(paragraphsContainer);
      transitionHeightOnAppend(paragraphsContainer);
      paragraphsContainer.removeEventListener("click", handleParagraphsContainerClick);
    }
  };

  const handleMoreBtnClick = () => {
    const paragraphsContainer = aboutSection.querySelector(".paragraphs-container");
    paragraphsContainer.addEventListener("click", (e) => handleParagraphsContainerClick(e, paragraphsContainer));
  };

  return { handleMoreBtnClick };
};

export default AboutRelated;
