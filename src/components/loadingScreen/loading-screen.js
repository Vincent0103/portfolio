const LoadingScreen = (loadingScreenContainer) => {
  const progressableContainer = loadingScreenContainer.querySelector(".progressable-container");
  const vinctNavbar = document.querySelector("nav > h3");
  const progressXCheckpoints = [-645, -432, -381, -176, 0];

  const onLoaded = () => {
    setTimeout(() => {
      progressableContainer.style.background = "none";
      progressableContainer.style.backgroundColor = "none";
      progressableContainer.style.backgroundClip = "unset";
      progressableContainer.style.color = "white";
      progressableContainer.style.animation = "slide-out-top 2s forwards ease-in";
      setTimeout(() => {
        loadingScreenContainer.style.opacity = "0";
        vinctNavbar.style.transform = "translateY(0)";
        setTimeout(() => loadingScreenContainer.remove(), 210);
      }, 2000);
    }, 500);
  };

  const progress = () => {
    progressableContainer.style.backgroundPosition = `${progressXCheckpoints.shift()}px`;
    if (!progressXCheckpoints.length) onLoaded();
  };

  return { progress };
};

export default LoadingScreen;
