import toCamelCase from "../../utils.js";

const ProjectDescription = (...containers) => {
  const sectionDescriptionContainers = [...containers];

  const projectsData = {
    battleship: {
      summary: "A strategic game where the objective is to sink the opponent's ships before they sink yours. The game features ship placement, hit tracking and it is played against an ai.",
      learnt: "Deepening of my understanding of JavaScript, implementation of testing methodologies (unit testing and TDD).",
      releaseDate: "2024-02-17",
    },
    calculator: {
      summary: "A basic calculator that performs basic arithmetic operations such as addition, substraction, multiplication and division.",
      learnt: "Object-Oriented Programming (OOP), node.js, arrays, loops, DOM manipulation and events.",
      releaseDate: "2023-07-14",
    },
    restaurantPage: {
      summary: "A web application that provides information about a fictional restaurant. It features a clean, intuitive layout with sections for the restaurant's menu, location and contact information.",
      learnt: "Enhancement of my understanding of JavaScript ES6 Modules, classes, webpack, and the use of factory functions and the module pattern.",
      releaseDate: "2023-08-04",
    },
    landingPage: {
      summary: "Showcases the ability to create a visually appealing and user-friendly interface that serves as the entry point to a website/service.",
      learnt: "Introduction to CSS foundations, including inspecting HTML & CSS, block and inline styling, and flexbox.",
      releaseDate: "2023-06-18",
    },
    knightTravails: {
      summary: "An app that finds the shortest path for a knight to travel from point A to point B on a chessboard. The starting and ending locations are entirely choosable by the user.",
      learnt: "Introduction to computer science, including recursion, time and space complexity, and the use of common data structures and algorithms such as hash maps, binary search trees, and linked lists.",
      releaseDate: "2023-10-27",
    },
    ticTacToe: {
      summary: "A web app that allows two players to compete in a classic game of Tic Tac Toe. The game is playable against an a.i. however it only does random moves.",
      learnt: "Javascript best practices (organizing code) including objects and object contructors. To finish off with factory functions and the module pattern.",
      releaseDate: "2023-07-29",
    },
    todoList: {
      summary: "An app that allows users to manage their tasks effectively. It showcases the ability to create, read, and delete tasks, providing a practical tool for personal productivity.",
      learnt: "Deepening of my understanding of javascript ES6 modules, webpack where i got introduced to JSON aswell as OOP principles.",
      releaseDate: "2023-08-14",
    },
    weatherApp: {
      summary: "Esse sint doloribus nam molestias nulla recusandae tempore quibusdam porro voluptatum possimus beatae ex qui, vitae explicabo magnam eaque nobis. Consectetur, quod.",
      learnt: "Esse sint doloribus nam molestias nulla recusandae tempore quibusdam porro voluptatum possimus beatae ex qui, vitae explicabo magnam eaque nobis. Consectetur, quod.",
      releaseDate: "2023-10-15",
    },
    imageSlider: {
      summary: "Totam consequuntur esse minus ipsum sit earum doloribus magnam quaerat distinctio voluptatum nobis at, animi commodi sint laboriosam, provident deserunt. Aliquam, placeat.",
      learnt: "Totam consequuntur esse minus ipsum sit earum doloribus magnam quaerat distinctio voluptatum nobis at, animi commodi sint laboriosam, provident deserunt. Aliquam, placeat.",
      releaseDate: "2023-08-17",
    },
    adminDashboard: {
      summary: "At dolorem enim, totam inventore fugiat voluptate, officiis dignissimos, tempora ipsam ex deleniti sequi distinctio harum delectus rem nostrum tempore quidem voluptates.",
      learnt: "At dolorem enim, totam inventore fugiat voluptate, officiis dignissimos, tempora ipsam ex deleniti sequi distinctio harum delectus rem nostrum tempore quidem voluptates.",
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

export default ProjectDescription;
