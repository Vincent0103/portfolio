import toCamelCase from "../../utils.js";

const ProjectRelated = (arrayContainers) => {
  const projectsData = {
    battleship: {
      summary: "A strategic battleship game played against an A.I where you aim to sink the opponent's ships before they sink yours.",
      learnt: "Deepening of JavaScript and A.I. Introduction to testing methodologies (unit testing and TDD).",
      releaseDate: "2024-02-17",
      preview: "https://vincent0103.github.io/battleship/",
      code: "https://github.com/Vincent0103/battleship/",
    },
    CVApplication: {
      summary: "This project builds a CV by what the user inputs on the forms (general, education, experiences).",
      learnt: "This project made me introduce to React, TailwindCSS and the Vite bundler where I learnt to intensively use react hooks, react concepts, ect...",
      releaseDate: "2024-07-18",
      preview: "https://vinct-cv-application.netlify.app/",
      code: "https://github.com/Vincent0103/CV-application/",
    },
    restaurantPage: {
      summary: "A web app providing details about a fictional restaurant, featuring menu, location, and contact sections.",
      learnt: "Deepening of JavaScript ES6 Modules, classes, webpack. Learning of factory functions and the module pattern.",
      releaseDate: "2023-08-04",
      preview: "https://vincent0103.github.io/restaurant-page/",
      code: "https://github.com/Vincent0103/restaurant-page/",
    },
    knightTravails: {
      summary: "An app that finds the shortest path for a knight to travel from point A to B on a chessboard.",
      learnt: "Introduction to computer science, including recursion, time and space complexity, and the use of common data structures and algorithms.",
      releaseDate: "2023-10-27",
      preview: "https://vincent0103.github.io/knights-travails/",
      code: "https://github.com/Vincent0103/knights-travails/",
    },
    ticTacToe: {
      summary: "A game for two players (or against an A.I) to compete in a classic game of Tic Tac Toe.",
      learnt: "Javascript best practices (organizing code) including objects and object contructors. To finish off with factory functions and the module pattern.",
      releaseDate: "2023-07-29",
      preview: "https://vincent0103.github.io/tic-tac-toe/",
      code: "https://github.com/Vincent0103/tic-tac-toe/",
    },
    shoppingCart: {
      summary: "A typical e-commerce application where you can simulate buying an amount of categorized products",
      learnt: "Introduction to React testing (mocking callbacks and components), React Router, type checking, data fetching in React.",
      releaseDate: "2025-01-03",
      preview: "https://vinct-shopping-cart.netlify.app/home",
      code: "https://github.com/Vincent0103/shopping-cart",
    },
    memoryChainsaw: {
      summary: "A classic memory card game themed and inspired by one of my favorite animes: Chainsaw Man.",
      learnt: "Deepening of my knowledge with built-in React hooks like useRef or useCallback, also with community made packages and TailwindCSS.",
      releaseDate: "2024-08-13",
      preview: "https://memorychainsaw.netlify.app/",
      code: "https://github.com/Vincent0103/memory-card/",
    },
    todoList: {
      summary: "An app for effective task management, allowing task creation, reading, and deletion.",
      learnt: "Deepening of javascript ES6 modules, webpack where i got introduced to JSON aswell as OOP principles.",
      releaseDate: "2023-08-14",
      preview: "https://vincent0103.github.io/todo-list/",
      code: "https://github.com/Vincent0103/todo-list/",
    },
    weatherApp: {
      summary: "A dynamic web application that provides real-time weather information from a location.",
      learnt: "Linting, including dynamic UI, form validation and a big part about asynchronous JavaScript and APIs.",
      releaseDate: "2023-10-15",
      preview: "https://vincent0103.github.io/weather-app/",
      code: "https://github.com/Vincent0103/weather-app/",
    },
    imageSlider: {
      summary: "An app that allows users to view a series of images in a sequential manner.",
      learnt: "Deepening of JavaScript by making smart algorithms including web design.",
      releaseDate: "2023-08-17",
      preview: "https://vincent0103.github.io/image-slider/",
      code: "https://github.com/Vincent0103/image-slider/",
    },
    adminDashboard: {
      summary: "An app for efficient data management and visualization as an admin with a flexible, well-structured layout.",
      learnt: "Introduction to grid (when to use flexbox over grid, ect...) for layout design.",
      releaseDate: "2023-07-22",
      preview: "https://vincent0103.github.io/admin-dashboard/",
      code: "https://github.com/Vincent0103/admin-dashboard/",
    },
  };

  const update = (displayedProjectName) => {
    const containers = [...arrayContainers];
    const mapped = {
      0: "summary",
      1: "learnt",
      2: "releaseDate",
      3: "preview",
      4: "code",
    };
    const projectName = toCamelCase(displayedProjectName);

    let activeP;
    let hiddenP;

    containers.forEach((item, index) => {
      if (item.tagName.toLowerCase() === "a") {
        item.href = projectsData[projectName][mapped[index]];
        return;
      }

      activeP = item.querySelector("p.show");
      hiddenP = item.querySelector("p.hide");

      activeP.classList.remove("show");
      activeP.classList.add("hide");

      hiddenP.textContent = projectsData[projectName][mapped[index]];
      hiddenP.classList.remove("hide");
      hiddenP.classList.add("show");
    });
  };

  const loadingProjectRelated = () => new Promise((resolve) => {
    // already resolving because it is supposed to wait for the
    // ProjectRelated module to load since this function is located inside
    // ProjectRelated, it's already loaded.
    resolve();
  });

  return { update, loadingProjectRelated };
};

export default ProjectRelated;
