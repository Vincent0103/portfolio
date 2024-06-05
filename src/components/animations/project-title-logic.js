const ProjectTitleLogic = () => {
  const getNextIndex = (toLeft, currentIndex, array) => {
    let nextIndex;
    if (toLeft) {
      nextIndex = (currentIndex - 1 + array.length) % array.length;
    } else {
      nextIndex = (currentIndex + 1) % array.length;
    }
    return nextIndex;
  };

  const extractPositionClass = (targetTitle) => {
    const regex = /\s((left)|(center)|(right))/;
    const match = targetTitle.className.match(regex);
    return (match) ? match[0].trimStart() : "";
  };

  return { getNextIndex, extractPositionClass };
};

export default ProjectTitleLogic;
