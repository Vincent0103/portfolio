const LoadingScreen = (loadingScreenContainer) => {
  const progressableContainer = loadingScreenContainer.querySelector(".progressable-container");
  const vinctNavbar = document.querySelector("nav > h3");
  const progressXCheckpoints = [-645, -547, -376, -231, 0];
  progressableContainer.style.backgroundSize = `${progressableContainer.offsetWidth}px 100vh`;
  progressableContainer.style.transition = "background-position .2s, transform .2s";

  const onLoaded = () => {
    setTimeout(() => {
      progressableContainer.style.background = "none";
      progressableContainer.style.backgroundColor = "none";
      progressableContainer.style.backgroundClip = "unset";
      progressableContainer.style.color = "white";
      progressableContainer.style.animation = "slide-out-top 2s forwards ease-in";
      setTimeout(() => {
        document.body.classList.remove("unscrollable");
        loadingScreenContainer.style.opacity = "0";
        vinctNavbar.style.transform = "translateY(0)";

        // Scroll to the top of the page
        window.scrollTo(0, 0);
        setTimeout(() => loadingScreenContainer.remove(), 300);
      }, 2000);
    }, 500);
  };

  const progress = () => {
    progressableContainer.style.backgroundPositionX = `${progressXCheckpoints.shift()}px`;
    if (!progressXCheckpoints.length) onLoaded();
  };

  return { progress };
};

export default LoadingScreen;
