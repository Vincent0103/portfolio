const addHeadingAnimations = (animatedHeadingContainer, animateOnce) => {
  const h2Container = animatedHeadingContainer.querySelector(".h2-container");
  const h2 = h2Container.querySelector("h2");
  const aboutTitleUnderline = animatedHeadingContainer.querySelector(".underline");
  const aboutTitleUnderlineShadow = animatedHeadingContainer.querySelector(".underline-shadow");
  let timeoutId;

  let resolveIntersection;
  const intersectionPromise = new Promise((resolve) => {
    resolveIntersection = resolve;
  });

  const applyHeadingAnimation = () => {
    h2.classList.add("spawn-heading");

    h2.classList.remove("spawn-heading-idle");
    h2.classList.add("spawn-heading-forward");

    aboutTitleUnderline.classList.add("spawn-underline");
    aboutTitleUnderlineShadow.classList.add("spawn-underline");

    // eslint-disable-next-line no-promise-executor-return
    const delay = (ms) => new Promise((resolve) => {
      timeoutId = setTimeout(resolve, ms);
    });

    delay(800)
      .then(() => {
        h2Container.style.overflowY = "visible";
        return delay(500);
      })
      .then(() => {
        resolveIntersection();
      })
      .catch((err) => {
        console.error("An error occurred: ", err);
      });
  };

  const removeHeadingAnimation = () => {
    h2.classList.remove("spawn-heading");

    h2.classList.remove("spawn-heading-forward");
    h2.classList.add("spawn-heading-idle");

    aboutTitleUnderline.classList.remove("spawn-underline");
    aboutTitleUnderlineShadow.classList.remove("spawn-underline");

    clearTimeout(timeoutId);

    h2Container.style.overflowY = "hidden";
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        applyHeadingAnimation();
        if (animateOnce) observer.unobserve(animatedHeadingContainer);
      } else {
        removeHeadingAnimation();
      }
    });
  });

  observer.observe(animatedHeadingContainer);

  // Wait for the first projects title animation to finish
  if (animateOnce) return intersectionPromise;
};

export default addHeadingAnimations;
