import { toTitle } from "../../utils.js";

const ProjectTitleAnimation = (projectTitleContainer) => {
  const projectTitle = projectTitleContainer;
  const projectsFirstTitle = projectTitle.querySelector(".projects-first-title");

  const transitionProjectTitle = (projectTitles, toLeft, textToDisplay) => {
    const projectTitleClasses = ["left", "center", "right"];
    const newClasses = [];

    projectTitles.forEach((title) => {
      const regex = /\s((left)|(center)|(right))/;
      const currentClass = title.className.match(regex)[0].trimStart();
      title.classList.remove(currentClass);


      const currentIndex = projectTitleClasses.indexOf(currentClass);
      let nextIndex;

      if (toLeft) {
        if (!title.classList.contains("moving-left")) {
          title.classList.add("moving-left");
          title.classList.remove("moving-right");
        }
        if (currentClass === "right") title.textContent = textToDisplay;
        nextIndex = (currentIndex - 1 + projectTitleClasses.length) % projectTitleClasses.length;
      } else {
        if (!title.classList.contains("moving-right")) {
          title.classList.add("moving-right");
          title.classList.remove("moving-left");
        }
        if (currentClass === "left") title.textContent = textToDisplay;
        nextIndex = (currentIndex + 1) % projectTitleClasses.length;
      }

      newClasses.push(projectTitleClasses[nextIndex]);
      console.log(projectTitleClasses[nextIndex]);
    });

    projectTitles.forEach((title, i) => {
      const currentClassesItem = newClasses[i];
      title.classList.add(currentClassesItem);
    });
  };


  const update = (displayedProjectName, isTransitioningToLeft) => {
    const projectTitles = [...projectTitle.querySelectorAll(".project-title")];
    const textToDisplay = toTitle(displayedProjectName);

    transitionProjectTitle(projectTitles, isTransitioningToLeft, textToDisplay);
  };

  const initialize = (firstAnimationPromise, displayedProjectName) => {
    firstAnimationPromise.then(() => {
      const currentProjectTitle = projectTitle.querySelector(".project-title.right");

      projectsFirstTitle.classList.remove("spawn-heading");
      projectsFirstTitle.classList.add("minimize-up");
      setTimeout(() => {
        projectsFirstTitle.textContent = "Project:";
      }, 160);

      currentProjectTitle.classList.remove("right");
      currentProjectTitle.textContent = toTitle(displayedProjectName);

      currentProjectTitle.classList.add("center");
    });
  };

  return { initialize, update };
};

export default ProjectTitleAnimation;
