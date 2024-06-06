const HeadingAnimation = (animatedHeadingContainer, animateOnce) => {
  const h2Container = animatedHeadingContainer.querySelector(".h2-container");
  const h2 = h2Container.querySelector("h2");
  let timeoutId;

  let resolveIntersection;
  const intersectionPromise = new Promise((resolve) => {
    resolveIntersection = resolve;
  });

  // eslint-disable-next-line no-promise-executor-return
  const delay = (ms) => new Promise((resolve) => {
    timeoutId = setTimeout(resolve, ms);
  });

  const applyHeadingAnimation = () => {
    const HEADING_MOVING_UP_TIME = 800;
    h2.classList.add("spawn-heading");

    h2.classList.remove("spawn-heading-idle");
    h2.classList.add("spawn-heading-forward");

    delay(HEADING_MOVING_UP_TIME)
      .then(() => {
        h2Container.style.overflowY = "visible";
        h2.addEventListener("animationend", () => {
          delay(200).then(() => resolveIntersection());
        });
      });
  };

  const removeHeadingAnimation = () => {
    h2.classList.remove("spawn-heading");

    h2.classList.remove("spawn-heading-forward");
    h2.classList.add("spawn-heading-idle");

    clearTimeout(timeoutId);

    h2Container.style.overflowY = "hidden";
  };

  const add = () => {
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
  };

  const getResolvingAnimation = () => intersectionPromise;

  return { add, getResolvingAnimation };
};

export default HeadingAnimation;
