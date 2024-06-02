import toCamelCase from "../../utils.js";

const ProjectRelated = (...containers) => {
  const sectionDescriptionContainers = [...containers];

  const projectsData = {
    battleship: {
      summary: "A strategic battleship game played against an A.I where you aim to sink the opponent's ships before they sink yours.",
      learnt: "Deepening of JavaScript and A.I. Introduction to testing methodologies (unit testing and TDD).",
      releaseDate: "2024-02-17",
    },
    calculator: {
      summary: "A basic calculator that performs basic arithmetic operations.",
      learnt: "Object-Oriented Programming (OOP), node.js, arrays, loops, DOM manipulation and events.",
      releaseDate: "2023-07-14",
    },
    restaurantPage: {
      summary: "A web app providing details about a fictional restaurant, featuring menu, location, and contact sections.",
      learnt: "Deepening JavaScript ES6 Modules, classes, webpack. Learning of factory functions and the module pattern.",
      releaseDate: "2023-08-04",
    },
    landingPage: {
      summary: "Showcases the creation of an attractive, user-friendly website entry point.",
      learnt: "Introduction to CSS foundations, including inspecting HTML & CSS, block and inline styling, and flexbox.",
      releaseDate: "2023-06-18",
    },
    knightTravails: {
      summary: "An app that finds the shortest path for a knight to travel from point A to B on a chessboard.",
      learnt: "Introduction to computer science, including recursion, time and space complexity, and the use of common data structures and algorithms.",
      releaseDate: "2023-10-27",
    },
    ticTacToe: {
      summary: "A game for two players (or against an A.I) to compete in a classic game of Tic Tac Toe.",
      learnt: "Javascript best practices (organizing code) including objects and object contructors. To finish off with factory functions and the module pattern.",
      releaseDate: "2023-07-29",
    },
    todoList: {
      summary: "An app for effective task management, allowing task creation, reading, and deletion.",
      learnt: "Deepening of javascript ES6 modules, webpack where i got introduced to JSON aswell as OOP principles.",
      releaseDate: "2023-08-14",
    },
    weatherApp: {
      summary: "A dynamic web application that provides real-time weather information from a location.",
      learnt: "Linting, including dynamic UI, form validation and a big part about asynchronous JavaScript and APIs.",
      releaseDate: "2023-10-15",
    },
    imageSlider: {
      summary: "An app that allows users to view a series of images in a sequential manner.",
      learnt: "Deepening of JavaScript by making smart algorithms including web design.",
      releaseDate: "2023-08-17",
    },
    adminDashboard: {
      summary: "An app for efficient data management and visualization as an admin with a flexible, well-structured layout.",
      learnt: "Introduction to grid (when to use flexbox over grid, ect...) for layout design.",
      releaseDate: "2023-07-22",
    },
  };

  const handleProjectRelated = (displayedProjectName) => {
    sectionDescriptionContainers.forEach((container) => {
      const activeP = container.querySelector("p.show");
      const hiddenP = container.querySelector("p.hide");

      activeP.classList.remove("show");
      activeP.classList.add("hide");
      const projectName = toCamelCase(displayedProjectName);
      if (container.classList.contains("project-summary-container")) {
        hiddenP.textContent = projectsData[projectName].summary;
      } else if (container.classList.contains("project-learnt-container")) {
        hiddenP.textContent = projectsData[projectName].learnt;
      } else if (container.classList.contains("project-date-container")) {
        hiddenP.textContent = projectsData[projectName].releaseDate;
      }
      hiddenP.classList.remove("hide");
      hiddenP.classList.add("show");
    });
  };

  return { handleProjectRelated };
};

export default ProjectRelated;
