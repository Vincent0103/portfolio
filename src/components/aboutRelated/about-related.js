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

    container.addEventListener(
      "transitionend",
      () => {
        container.style.maxHeight = "none";
      },
      { once: true },
    );
  };

  const appendRemainingText = (paragraphsContainer) => {
    const p = document.createElement("p");
    p.textContent =
      "Since high school, Since high school, I've committed myself to study computer science as deep as possible and build ambitious applications. A huge thanks to";

    const a = document.createElement("a");
    a.setAttribute("target", "_blank");
    a.setAttribute("href", "https://www.theodinproject.com/");
    a.textContent = "The Odin Project";
    p.appendChild(a);

    const remainingText = document.createTextNode(
      " for letting this happen. (which made this portfolio possible ❤︎).",
    );
    p.appendChild(remainingText);

    const p2 = document.createElement("p");
    p2.textContent =
      "Since then, I have built dozens of programs, most of which are fully functional applications. You can find them all open-source on my ";

    const a2 = document.createElement("a");
    a2.setAttribute("target", "_blank");
    a2.setAttribute("href", "https://www.github.com/Vincent0103/");
    a2.textContent = "GitHub repository";
    p2.appendChild(a2);

    const p3 = document.createAttribute("p");
    p3.textContent =
      "In my free time, I most likely challenge myself by building complex programs and going to the gym. I'm a very big fan of rogue-like and 2D games, and recently, I've also started learning the guitar. Outside of coding, I'm usually found reading non-fiction books.";
    paragraphsContainer.append(p, p2, p3);
  };

  let paragraphsContainer;
  const handleParagraphsContainerClick = (e) => {
    const { bottom } = paragraphsContainer.getBoundingClientRect();
    const clickY = e.clientY;
    const currentClickPosition = bottom - clickY;
    const MORE_BTN_POSITION = 120;

    if (currentClickPosition <= MORE_BTN_POSITION) {
      paragraphsContainer.classList.remove("before", "after");
      appendRemainingText(paragraphsContainer);
      transitionHeightOnAppend(paragraphsContainer);
      paragraphsContainer.removeEventListener(
        "click",
        handleParagraphsContainerClick,
      );
    }
  };

  let resolveAboutSection;
  const loadingAboutSection = () =>
    new Promise((resolve) => {
      resolveAboutSection = resolve;
    });

  const handleMoreBtnClick = () => {
    paragraphsContainer = aboutSection.querySelector(".paragraphs-container");
    paragraphsContainer.addEventListener(
      "click",
      handleParagraphsContainerClick,
    );
    try {
      resolveAboutSection();
    } catch (error) {
      console.error("resolveAboutSection failed: ", error);
    }
  };

  return { handleMoreBtnClick, loadingAboutSection };
};

export default AboutRelated;
