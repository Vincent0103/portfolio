import { toTitle } from "../../utils.js";

const ProjectTitleAnimation = (projectTitleContainer) => {
  const getNextIndex = (toLeft, currentIndex, array) => {
    let nextIndex;
    if (toLeft) {
      nextIndex = (currentIndex - 1 + array.length) % array.length;
    } else {
      nextIndex = (currentIndex + 1) % array.length;
    }
    return nextIndex;
  };

  const updateTransitioningSide = (toLeft, targetTitle) => {
    const addingClass = (toLeft) ? "moving-left" : "moving-right";
    const removingClass = (toLeft) ? "moving-right" : "moving-left";

    if (!targetTitle.classList.contains(addingClass)) {
      targetTitle.classList.add(addingClass);
      targetTitle.classList.remove(removingClass);
    }
  };

  const extractPositionClass = (targetTitle) => {
    const regex = /\s((left)|(center)|(right))/;
    const match = targetTitle.className.match(regex);
    return (match) ? match[0].trimStart() : "";
  };

  const transitionProjectTitle = (projectTitles, toLeft, textToDisplay) => {
    const PROJECT_TITLE_CLASSES = ["left", "center", "right"];
    const newClasses = [];

    projectTitles.forEach((title) => {
      const targetTitle = title;

      const positionClass = extractPositionClass(targetTitle);
      targetTitle.classList.remove(positionClass);

      updateTransitioningSide(toLeft, targetTitle);

      if (toLeft && positionClass === "right") targetTitle.textContent = textToDisplay;
      else if (positionClass === "left") targetTitle.textContent = textToDisplay;

      const currentIndex = PROJECT_TITLE_CLASSES.indexOf(positionClass);
      const nextIndex = getNextIndex(toLeft, currentIndex, PROJECT_TITLE_CLASSES);
      newClasses.push(PROJECT_TITLE_CLASSES[nextIndex]);
    });

    projectTitles.forEach((title, i) => title.classList.add(newClasses[i]));
  };


  const projectTitles = [...projectTitleContainer.querySelectorAll(".project-title")];

  const update = (displayedProjectName, isTransitioningToLeft) => {
    const textToDisplay = toTitle(displayedProjectName);

    transitionProjectTitle(projectTitles, isTransitioningToLeft, textToDisplay);
  };

  const minimizeUpFirstTitle = (projectsFirstTitle) => {
    const target = projectsFirstTitle;

    target.classList.remove("spawn-heading");
    target.classList.add("minimize-up");
    setTimeout(() => {
      target.textContent = "Project:";
    }, 160);
  };

  const transitionFirstProjectTitle = (currentProjectTitle, displayedProjectName) => {
    const targetProjectTitle = currentProjectTitle;
    targetProjectTitle.classList.remove("right");
    targetProjectTitle.textContent = toTitle(displayedProjectName);

    targetProjectTitle.classList.add("center");

    return new Promise((resolve) => {
      targetProjectTitle.addEventListener("transitionend", () => {
        resolve();
      }, { once: true });
    });
  };

  const initialize = async (firstAnimationPromise, displayedProjectName) => {
    await firstAnimationPromise.then(async () => {
      const projectsFirstTitle = projectTitleContainer.querySelector(".projects-first-title");
      minimizeUpFirstTitle(projectsFirstTitle);

      const currentProjectTitle = projectTitleContainer.querySelector(".project-title.right");
      await transitionFirstProjectTitle(
        currentProjectTitle,
        displayedProjectName,
      );
    });
  };

  return { initialize, update };
};

export default ProjectTitleAnimation;
