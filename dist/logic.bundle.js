/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst CarouselLogic = () => {\n  const projectsCarouselClasses = (() => {\n    let classesValue;\n\n    return {\n      setClassesValue(array) { classesValue = [...array]; },\n      getClassesValue() { return [...classesValue]; }\n    };\n  })();\n\n  const moveCarouselProjectsClasses = (areProjectsMovingLeft) => {\n    const carouselClasses = projectsCarouselClasses.getClassesValue();\n    console.log(carouselClasses);\n\n    // don't play with this, i know it doesn't make sense but the opposite direction makes it work\n    if (areProjectsMovingLeft) carouselClasses.unshift(carouselClasses.pop());\n    else carouselClasses.push(carouselClasses.shift());\n\n    projectsCarouselClasses.setClassesValue(carouselClasses);\n  };\n\n  const initializeCarouselProjectsClasses = (slidingImgsLength) => {\n    const length = slidingImgsLength;\n    if (length <= 0) throw new Error(\"Cannot initialize with a null or negative length\");\n\n    const slidingDirections = [\"carouselHideLeft\", \"carouselLeftLeft\", \"carouselLeft\",\n      \"carouselCenter\", \"carouselRight\", \"carouselRightRight\", \"carouselHideRight\"];\n\n    if (length === 1) {\n      return projectsCarouselClasses.setClassesValue([slidingDirections[3]]);\n    }\n\n    const tempClasses = [];\n    let start = 2;\n    let end = length + 2;\n\n    if (length > 3 && length <= 5) {\n      start = 1;\n      end = length + 1;\n    } else if (length > 5) {\n      let viewableSlidingDirectionsAmount = 5;\n      const carouselHideAmount = length - viewableSlidingDirectionsAmount;\n      let carouselHideLefts = Math.ceil(carouselHideAmount / 2);\n      let carouselHideRights = carouselHideAmount - carouselHideLefts;\n      let slidingDirectionsIndex;\n\n      for (let i = 0; i < length; i += 1) {\n        if (carouselHideLefts > 0) {\n          tempClasses.push(\"carouselHideLeft\");\n          carouselHideLefts -= 1;\n        } else if (viewableSlidingDirectionsAmount > 0) {\n          slidingDirectionsIndex = 5 - viewableSlidingDirectionsAmount + 1;\n          tempClasses.push(slidingDirections[slidingDirectionsIndex]);\n          viewableSlidingDirectionsAmount -= 1;\n        } else if (carouselHideRights > 0) {\n          tempClasses.push(\"carouselHideRight\");\n          carouselHideRights -= 1;\n        }\n      }\n\n      projectsCarouselClasses.setClassesValue([...tempClasses]);\n      return;\n    }\n\n    for (let i = start; i < end; i += 1) tempClasses.push(slidingDirections[i]);\n    projectsCarouselClasses.setClassesValue([...tempClasses]);\n  };\n\n  return {\n    getProjectsCarouselClasses: projectsCarouselClasses.getClassesValue,\n    moveCarouselProjectsClasses,\n    initializeCarouselProjectsClasses\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselLogic);\n\n\n//# sourceURL=webpack://portfolio_package/./src/logic.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/logic.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;