import "./loading-screen-styles.css";
import load from "./App.js";
import LoadingScreen from "./components/loadingScreen/loading-screen.js";


let loadingScreenModule;


// This will run after the DOM is fully loaded, but potentially before some resources are loaded.
window.addEventListener("DOMContentLoaded", () => {
  const loadingScreenContainer = document.querySelector(".loading-screen-container");

  const loadingScreen = LoadingScreen(loadingScreenContainer);
  loadingScreenModule = loadingScreen;

  loadingScreen.initialize();
  load(loadingScreenModule);
});

// This will run after all resources (like images and stylesheets) have fully loaded.
window.onload = () => {
  if (loadingScreenModule) loadingScreenModule.progress();
};
