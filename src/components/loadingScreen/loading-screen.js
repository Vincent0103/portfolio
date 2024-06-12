const LoadingScreen = (loadingScreenContainer) => {
  const progressableContainer = loadingScreenContainer.querySelector(".progressable-container");
  const vinctNavbar = document.querySelector("nav > h3");
  const progressXCheckpoints = [];

  // used to keep track of the current progress bar state
  const progressState = (() => {
    let temp = -1;
    return {
      get: () => temp,
      increment: () => {
        temp += 1;
      }
    };
  })();

  const servings = [3 / 20, 7 / 20, 9 / 20, 13 / 20, 20 / 20];

  const setProgressXCheckpoints = () => {
    progressXCheckpoints.length = 0;

    servings.forEach((item) => {
      const initialWidth = progressableContainer.offsetWidth;
      progressXCheckpoints.push(initialWidth * (item - 1));
    });
  };

  const onResize = () => {
    window.addEventListener("resize", () => {
      setProgressXCheckpoints();
      const currentWidth = progressableContainer.offsetWidth;
      const index = progressState.get();

      const newPositionCoordinates = currentWidth * (servings[index] - 1);

      progressableContainer.style.backgroundSize = `${currentWidth}px 100vh`;
      progressableContainer.style.backgroundPositionX = `${newPositionCoordinates}px`;
    });
  };

  const initialize = () => {
    progressableContainer.style.backgroundSize = `${progressableContainer.offsetWidth}px 100vh`;
    progressableContainer.style.backgroundPositionX = `-${progressableContainer.offsetWidth}px`;
    progressableContainer.style.transition = "background-position .2s, transform .2s";
    setProgressXCheckpoints();
    onResize();
  };

  const onLoaded = () => {
    setTimeout(() => {
      progressableContainer.style.background = "none";
      progressableContainer.style.backgroundColor = "none";
      progressableContainer.style.backgroundClip = "unset";
      progressableContainer.style.color = "white";
      progressableContainer.style.animation = "slide-out-top 2s forwards ease-in";

      const handleAnimationEnd = () => {
        const loadingScreenElement = loadingScreenContainer;
        document.body.classList.remove("unscrollable");
        loadingScreenElement.style.opacity = "0";
        vinctNavbar.style.transform = "translateY(0)";

        // Scroll to the top of the page
        window.scrollTo(0, 0);

        setTimeout(() => loadingScreenElement.remove(), 300);
        progressableContainer.removeEventListener("animationend", handleAnimationEnd);
      };

      progressableContainer.addEventListener("animationend", handleAnimationEnd);
    }, 500);
  };

  const progress = () => {
    progressableContainer.style.backgroundPositionX = `${progressXCheckpoints.shift()}px`;
    progressState.increment();

    if (!progressXCheckpoints.length) onLoaded();
  };

  return { initialize, progress };
};

export default LoadingScreen;
