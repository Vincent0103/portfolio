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
      "Since high school, I've committed myself to study computer science as deeply as possible. I've built ";

    const b = document.createElement("b");
    b.textContent = "dozens of open-sourced programs";

    const remainingText =
      ", from experimental scripts to fully functional apps. Many of which were built following ";

    const a = document.createElement("a");
    a.setAttribute("target", "_blank");
    a.setAttribute("href", "https://www.theodinproject.com/");
    a.textContent = "The Odin Project";

    const remainingText2 = document.createTextNode(
      " curriculum. You can find them all on my ",
    );

    const a2 = document.createElement("a");
    a2.setAttribute("target", "_blank");
    a2.setAttribute("href", "https://www.github.com/Vincent0103/");
    a2.textContent = "GitHub";

    const remainingText3 = document.createTextNode(".");

    p.append(b, remainingText, a, remainingText2, a2, remainingText3);

    const p2 = document.createElement("p");
    p2.textContent =
      "In my free time, I workout often and I've recently started learning the guitar. I'm also a big fan of rogue-like and 2D games. Outside of coding, I'm usually found reading non-fiction books.";
    paragraphsContainer.append(p, p2);
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
