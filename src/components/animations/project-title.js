import { toTitle } from "../../utils.js";

const ProjectTitleAnimation = (projectTitleContainer) => {
  const projectTitle = projectTitleContainer;
  const projectsFirstTitle = projectTitle.querySelector(".projects-first-title");

  const transitionProjectTitle = (projectTitles, toLeft, textToDisplay) => {
    const projectTitleClasses = ["left", "center", "right"];
    const newClasses = [];

    projectTitles.forEach((title) => {
      const regex = /(left)|(center)|(right)/;
      const currentClass = title.className.match(regex)[0];
      title.classList.remove(currentClass);

      const currentIndex = projectTitleClasses.indexOf(currentClass);
      let nextIndex;

      if (toLeft) {
        nextIndex = (currentIndex - 1 + projectTitleClasses.length) % projectTitleClasses.length;
      } else {
        nextIndex = (currentIndex + 1) % projectTitleClasses.length;
      }

      newClasses.push(projectTitleClasses[nextIndex]);
    });

    projectTitles.forEach((title, i) => {
      const currentClassesItem = newClasses[i];
      title.classList.add(currentClassesItem);
      if (currentClassesItem === "right") title.textContent = textToDisplay;
    });
  };


  const update = (currentlyDisplayedProject) => {
    const projectTitles = [...projectTitle.querySelectorAll(".project-title")];
    const textToDisplay = toTitle(currentlyDisplayedProject.id);

    transitionProjectTitle(projectTitles, true, textToDisplay);
  };

  const initialize = (firstAnimationPromise, currentlyDisplayedProject, nextDisplayedProject) => {
    firstAnimationPromise.then(() => {
      const currentProjectTitle = projectTitle.querySelector(".project-title.right");

      projectsFirstTitle.classList.remove("spawn-heading");
      projectsFirstTitle.classList.add("minimize-up");
      setTimeout(() => {
        projectsFirstTitle.textContent = "Project:";
      }, 160);

      currentProjectTitle.classList.remove("right");
      currentProjectTitle.textContent = toTitle(currentlyDisplayedProject.id);

      currentProjectTitle.classList.add("center");
    });
  };

  return { initialize, update };
};

export default ProjectTitleAnimation;
