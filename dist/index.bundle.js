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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --img-ratio: 0.504;\n  --box-shadow-bgc: 53, 56, 92;\n}\n\n::selection {\n  color: black;\n  background-color: #ffd064;\n}\n\n::-moz-selection {\n  color: black;\n  background-color: #ffd064;\n}\n\nhtml {\n  font-family: \"Inter\", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  color: white;\n  scroll-behavior: smooth;\n}\n\nh1 {\n  font-size: 6rem;\n}\n\nh2 {\n  font-size: 5rem;\n}\n\nh3 {\n  font-size: 2rem;\n  margin: 8px 0;\n}\n\np {\n  font-size: 1.5rem;\n  color: #9e9e9e;\n}\n\nbody {\n  margin: 0;\n  background-color: #020202;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.banner-heading {\n  display: flex;\n  max-width: 100%;\n  justify-content: center;\n  align-items: center;\n  overflow-x: hidden;\n  margin-top: 0;\n}\n\n.banner-heading img {\n  max-height: min(140vh, 1500px);\n  user-select: none;\n\n  @media screen and (max-aspect-ratio: 17/10) {\n    margin-left: 10%;\n  }\n\n  @media screen and (max-aspect-ratio: 31/20) {\n    margin-left: 25%;\n  }\n\n  @media screen and (max-aspect-ratio: 7/5) {\n    margin-left: 40%;\n  }\n  @media screen and (max-aspect-ratio: 31/25) {\n    margin-left: 55%;\n  }\n\n  @media screen and (max-aspect-ratio: 28/25) {\n    max-width: 330vw;\n  }\n}\n\nmain > * {\n  max-width: 1500px;\n  margin-left: 50px;\n  margin-right: 50px;\n}\n\n.animated-h2-container {\n  position: relative;\n  margin: 66.4px 0;\n}\n\n.animated-h2-container > .h2-container {\n  height: 90px;\n  overflow-y: hidden;\n}\n\n.h2-container > h2 {\n  margin: 0;\n  transform: translateY(100%);\n}\n\n.animated-h2-container > .underline {\n  position: absolute;\n  top: 90px;\n  min-width: 240px;\n  border-radius: 50%;\n  height: .2rem;\n  background-color: #fff;\n  opacity: .1;\n}\n\n.animated-h2-container > .underline-shadow {\n  filter: blur(10px);\n  top: 100px;\n  opacity: .1;\n}\n\n.spawn-heading {animation: spawn-heading 1s forwards;}\n\n.spawn-underline {animation: spawn-underline 1s forwards;}\n\n@keyframes spawn-heading {\n  0% {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n\n  80% {\n    transform: translateY(-10%);\n    opacity: 1;\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n\n}\n\n@keyframes spawn-underline {\n  0% {\n    opacity: .1;\n  }\n\n  80% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n.projects-section {\n  width: 1500px;\n  margin-bottom: 180px;\n  @media screen and (max-width: 1620px) {\n    max-width: 1500px;\n    width: auto;\n  }\n}\n\n.project-title-container {\n  position: relative;\n}\n\n.projects-first-title {\n  transition: transform .2s;\n}\n\n.minimize-up {\n  position: absolute;\n  transform: scale(.3) translate(-115%, -160%);\n  color: #676767;\n  top: -70px;\n}\n\n.current-project-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  justify-items: start;\n  column-gap: 70px;\n}\n\n.img-slider-container {\n  position: relative;\n  grid-row: 1/2;\n  width: 800px;\n  height: calc(800px * var(--img-ratio));\n  transition: border .2s;\n\n  @media screen and (max-width: 1620px) {\n    width: 49.4vw;\n    height: calc(49.4vw * var(--img-ratio));\n  }\n}\n\n.img-slider-container .sliding-img {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 100%;\n  transition: transform .2s;\n  user-select: none;\n}\n\n.img-slider-container .sliding-img::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  transition: opacity .2s;\n}\n\n.sliding-img img {\n  max-width: 100%;\n}\n\n.sliding-img img:nth-of-type(2),\n.sliding-img picture:nth-of-type(2) img {\n  position: absolute;\n  opacity: 0;\n  filter: blur(45px);\n  z-index: -1;\n  transition: opacity .2s;\n}\n\n.carouselLeftLeft {\n  transform: translateX(-13%) scale(.8);\n  z-index: -3;\n}\n\n.carouselLeftLeft::before {\n  opacity: .85;\n}\n\n\n.carouselLeft {\n  transform: translateX(-7%) scale(.9);\n  z-index: -2;\n}\n\n.carouselLeft::before {\n  opacity: .6;\n}\n\n.carouselCenter {\n  transform: translateX(0) scale(1);\n  z-index: 0;\n}\n\n.carouselCenter::before {\n  opacity: 0;\n}\n\n.carouselRight {\n  transform: translateX(7%) scale(.9);\n  z-index: -2;\n}\n\n.carouselRight::before {\n  opacity: .6;\n}\n\n.carouselRightRight {\n  transform: translateX(13%) scale(.8);\n  z-index: -3;\n}\n\n.carouselRightRight::before {\n  opacity: .85;\n}\n\n.carouselHideLeft {\n  transform: translateX(-19%) scale(.7);\n  opacity: 0;\n}\n\n.carouselHideRight {\n  transform: translateX(19%) scale(.7);\n  opacity: 0;\n}\n\n.box-shadow-visible > img:nth-of-type(2) {\n  opacity: .5;\n}\n\n.project-date-container {\n  grid-row: 2/3;\n  justify-self: center;\n}\n\n.project-date-container > p {\n  font-size: 1.3rem;\n  font-weight: bold;\n  transition: opacity .2s;\n}\n\n.project-date-container > p.hide {\n  position: absolute;\n  top: 0;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.project-date-container > p.show {\n  opacity: .8;\n}\n\n.project-related-container {\n  grid-row: 1/3;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.project-related-container > * {\n  position: relative;\n}\n\n.project-related-container p {\n  transition: opacity .2s;\n  margin: 5px 0;\n}\n\n.hide {\n  position: absolute;\n  top: 50px;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.show {\n  opacity: 1;\n}\n\n.arrows-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n\n.arrows-container > svg {\n  fill: rgba(0, 0, 0, .7);\n  max-width: 10%;\n  max-height: 10%;\n  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 1));\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://portfolio_package/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://portfolio_package/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://portfolio_package/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://portfolio_package/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://portfolio_package/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://portfolio_package/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://portfolio_package/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://portfolio_package/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://portfolio_package/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://portfolio_package/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectDescription: () => (/* binding */ ProjectDescription),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\nfunction CarouselDOM(slidingImgsArg) {\n  const slidingImgs = slidingImgsArg;\n\n  const projectDisplay = (() => {\n    let currentlyDisplayedProject;\n\n    return {\n      setCurrentlyDisplayedProject(container) { currentlyDisplayedProject = container; },\n      getCurrentlyDisplayedProject() { return currentlyDisplayedProject.cloneNode(); },\n    };\n  })();\n\n  const handleCarouselBoxShadow = (container, isRemovingBoxShadow) => {\n    if (isRemovingBoxShadow) container.classList.remove(\"box-shadow-visible\");\n    else container.classList.add(\"box-shadow-visible\");\n  };\n\n  const moveCarousel = (projectsCarouselClasses) => {\n    slidingImgs.forEach((container, i) => {\n      const carouselRegex = /carousel\\w+/;\n      const carouselClass = container.className.match(carouselRegex)[0];\n      if (carouselClass === \"carouselCenter\") handleCarouselBoxShadow(container, true);\n      if (carouselClass !== projectsCarouselClasses[i]) {\n        container.classList.remove(carouselClass);\n        container.classList.add(projectsCarouselClasses[i]);\n      }\n\n      if (projectsCarouselClasses[i] === \"carouselCenter\") {\n        handleCarouselBoxShadow(container);\n        projectDisplay.setCurrentlyDisplayedProject(container);\n      }\n    });\n  };\n\n  const initializeCarousel = (projectsCarouselClasses) => {\n    slidingImgs.forEach((container, i) => {\n      container.classList.add(projectsCarouselClasses[i]);\n      if (projectsCarouselClasses[i] === \"carouselCenter\") handleCarouselBoxShadow(container);\n    });\n  };\n\n  return {\n    initializeCarousel,\n    moveCarousel,\n    getCurrentlyDisplayedProject: projectDisplay.getCurrentlyDisplayedProject,\n  };\n}\n\nconst ProjectDescription = (...containers) => {\n  const sectionDescriptionContainers = [...containers];\n\n  const projectsData = {\n    battleship: {\n      summary: \"Maxime, soluta minus omnis ab consectetur enim voluptates perspiciatis iusto distinctio delectus libero? Ut fugit sapiente architecto nihil enim aut itaque ullam.\",\n      learnt: \"Maxime, soluta minus omnis ab consectetur enim voluptates perspiciatis iusto distinctio delectus libero? Ut fugit sapiente architecto nihil enim aut itaque ullam.\",\n      releaseDate: \"2024-02-17\",\n    },\n    calculator: {\n      summary: \"Incidunt quasi, eaque amet non, at aliquam sint dicta accusamus autem rerum facere, praesentium nam veritatis dolor adipisci in magni accusantium ea!\",\n      learnt: \"Incidunt quasi, eaque amet non, at aliquam sint dicta accusamus autem rerum facere, praesentium nam veritatis dolor adipisci in magni accusantium ea!\",\n      releaseDate: \"2023-07-14\",\n    },\n    restaurantPage: {\n      summary: \"Dolor labore et autem dicta sit. Dolores atque blanditiis praesentium, enim ipsa molestiae ut veniam sed animi itaque eligendi magni quibusdam tempore?\",\n      learnt: \"Dolor labore et autem dicta sit. Dolores atque blanditiis praesentium, enim ipsa molestiae ut veniam sed animi itaque eligendi magni quibusdam tempore?\",\n      releaseDate: \"2023-08-04\",\n    },\n    landingPage: {\n      summary: \"Hello, this is a placeholder of the summary\",\n      learnt: \"however, this is a placeholder of what i learnt\",\n      releaseDate: \"2023-06-18\",\n    },\n    knightTravails: {\n      summary: \"Quae ut temporibus corrupti error natus ullam ex deserunt, exercitationem sunt quos distinctio eos in nam assumenda nisi suscipit accusantium ab nostrum.\",\n      learnt: \"Quae ut temporibus corrupti error natus ullam ex deserunt, exercitationem sunt quos distinctio eos in nam assumenda nisi suscipit accusantium ab nostrum.\",\n      releaseDate: \"2023-10-27\",\n    },\n    ticTacToe: {\n      summary: \"Cum nobis minus, iusto ducimus odio magnam nesciunt quas accusamus maxime nam eius, explicabo et facere voluptas doloremque blanditiis laudantium, nihil non!\",\n      learnt: \"Cum nobis minus, iusto ducimus odio magnam nesciunt quas accusamus maxime nam eius, explicabo et facere voluptas doloremque blanditiis laudantium, nihil non!\",\n      releaseDate: \"2023-07-29\",\n    },\n    todoList: {\n      summary: \"Voluptates, minima totam. Non modi distinctio sunt. Sequi obcaecati ipsam, repellendus inventore repudiandae nisi asperiores necessitatibus consequuntur minus dicta optio voluptate rerum!\",\n      learnt: \"Voluptates, minima totam. Non modi distinctio sunt. Sequi obcaecati ipsam, repellendus inventore repudiandae nisi asperiores necessitatibus consequuntur minus dicta optio voluptate rerum!\",\n      releaseDate: \"2023-08-14\",\n    },\n    weatherApp: {\n      summary: \"Esse sint doloribus nam molestias nulla recusandae tempore quibusdam porro voluptatum possimus beatae ex qui, vitae explicabo magnam eaque nobis. Consectetur, quod.\",\n      learnt: \"Esse sint doloribus nam molestias nulla recusandae tempore quibusdam porro voluptatum possimus beatae ex qui, vitae explicabo magnam eaque nobis. Consectetur, quod.\",\n      releaseDate: \"2023-10-15\",\n    },\n    imageSlider: {\n      summary: \"Totam consequuntur esse minus ipsum sit earum doloribus magnam quaerat distinctio voluptatum nobis at, animi commodi sint laboriosam, provident deserunt. Aliquam, placeat.\",\n      learnt: \"Totam consequuntur esse minus ipsum sit earum doloribus magnam quaerat distinctio voluptatum nobis at, animi commodi sint laboriosam, provident deserunt. Aliquam, placeat.\",\n      releaseDate: \"2023-08-17\",\n    },\n    adminDashboard: {\n      summary: \"At dolorem enim, totam inventore fugiat voluptate, officiis dignissimos, tempora ipsam ex deleniti sequi distinctio harum delectus rem nostrum tempore quidem voluptates.\",\n      learnt: \"At dolorem enim, totam inventore fugiat voluptate, officiis dignissimos, tempora ipsam ex deleniti sequi distinctio harum delectus rem nostrum tempore quidem voluptates.\",\n      releaseDate: \"2023-07-22\",\n    },\n  };\n\n  const handleProjectRelated = (currentlyDisplayedProject) => {\n    sectionDescriptionContainers.forEach((container) => {\n      const activeP = container.querySelector(\"p.show\");\n      const hiddenP = container.querySelector(\"p.hide\");\n\n      activeP.classList.remove(\"show\");\n      activeP.classList.add(\"hide\");\n      const projectName = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currentlyDisplayedProject.id);\n      if (container.classList.contains(\"project-summary-container\")) {\n        hiddenP.textContent = projectsData[projectName].summary;\n      } else if (container.classList.contains(\"project-learnt-container\")) {\n        hiddenP.textContent = projectsData[projectName].learnt;\n      } else if (container.classList.contains(\"project-date-container\")) {\n        hiddenP.textContent = projectsData[projectName].releaseDate;\n      }\n      hiddenP.classList.remove(\"hide\");\n      hiddenP.classList.add(\"show\");\n    });\n  };\n\n  return { handleProjectRelated };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselDOM);\n\n\n\n//# sourceURL=webpack://portfolio_package/./src/DOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ \"./src/DOM.js\");\n/* harmony import */ var _wrapper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapper.js */ \"./src/wrapper.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n\n\n\n\nwindow.addEventListener(\"DOMContentLoaded\", () => {\n  const projectsSection = document.querySelector(\".projects-section\");\n  const imgSliderContainer = projectsSection.querySelector(\".img-slider-container\");\n  const projectSummaryContainer = projectsSection.querySelector(\".project-summary-container\");\n  const projectLearntContainer = projectsSection.querySelector(\".project-learnt-container\");\n  const projectDateContainer = projectsSection.querySelector(\".project-date-container\");\n\n  const carousel = (0,_wrapper_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(imgSliderContainer);\n  carousel.initialize();\n\n  const projectDescription = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.ProjectDescription)(\n    projectSummaryContainer,\n    projectLearntContainer,\n    projectDateContainer,\n  );\n\n  carousel.handleCarouselClick(projectDescription);\n\n  const aboutSection = document.querySelector(\".about-section\");\n  const animatedH2Container = aboutSection.querySelector(\".animated-h2-container\");\n  const h2 = animatedH2Container.querySelector(\"h2\");\n  const aboutTitleUnderline = animatedH2Container.querySelector(\".underline\");\n  const aboutTitleUnderlineShadow = animatedH2Container.querySelector(\".underline-shadow\");\n\n  const onScroll = () => {\n    const rect = aboutSection.getBoundingClientRect();\n\n    if (rect.bottom <= 1400) {\n      h2.classList.add(\"spawn-heading\");\n      aboutTitleUnderline.classList.add(\"spawn-underline\");\n      aboutTitleUnderlineShadow.classList.add(\"spawn-underline\");\n    }\n\n    if (rect.bottom > 1400) {\n      h2.classList.remove(\"spawn-heading\");\n      aboutTitleUnderline.classList.remove(\"spawn-underline\");\n      aboutTitleUnderlineShadow.classList.remove(\"spawn-underline\");\n    }\n  };\n\n  window.addEventListener(\"scroll\", (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.throttle)(onScroll, 200));\n});\n\n\n//# sourceURL=webpack://portfolio_package/./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst CarouselLogic = () => {\n  const projectsCarouselClasses = (() => {\n    let classesValue;\n\n    return {\n      setClassesValue(array) { classesValue = [...array]; },\n      getClassesValue() { return [...classesValue]; },\n    };\n  })();\n\n  const moveCarouselProjectsClasses = (areProjectsMovingLeft) => {\n    const carouselClasses = projectsCarouselClasses.getClassesValue();\n\n    // don't play with this, i know it doesn't make sense but the opposite direction makes it work\n    if (areProjectsMovingLeft) carouselClasses.unshift(carouselClasses.pop());\n    else carouselClasses.push(carouselClasses.shift());\n\n    projectsCarouselClasses.setClassesValue(carouselClasses);\n  };\n\n  const initializeCarouselProjectsClasses = (slidingImgsLength) => {\n    const length = slidingImgsLength;\n    if (length <= 0) throw new Error(\"Cannot initialize with a null or negative length\");\n\n    const slidingDirections = [\"carouselHideLeft\", \"carouselLeftLeft\", \"carouselLeft\",\n      \"carouselCenter\", \"carouselRight\", \"carouselRightRight\", \"carouselHideRight\"];\n\n    if (length === 1) {\n      return projectsCarouselClasses.setClassesValue([slidingDirections[3]]);\n    }\n\n    const tempClasses = [];\n    let start = 2;\n    let end = length + 2;\n\n    if (length > 3 && length <= 5) {\n      start = 1;\n      end = length + 1;\n    } else if (length > 5) {\n      let viewableSlidingDirectionsAmount = 5;\n      const carouselHideAmount = length - viewableSlidingDirectionsAmount;\n      let carouselHideLefts = Math.ceil(carouselHideAmount / 2);\n      let carouselHideRights = carouselHideAmount - carouselHideLefts;\n      let slidingDirectionsIndex;\n\n      for (let i = 0; i < length; i += 1) {\n        if (carouselHideLefts > 0) {\n          tempClasses.push(\"carouselHideLeft\");\n          carouselHideLefts -= 1;\n        } else if (viewableSlidingDirectionsAmount > 0) {\n          slidingDirectionsIndex = 5 - viewableSlidingDirectionsAmount + 1;\n          tempClasses.push(slidingDirections[slidingDirectionsIndex]);\n          viewableSlidingDirectionsAmount -= 1;\n        } else if (carouselHideRights > 0) {\n          tempClasses.push(\"carouselHideRight\");\n          carouselHideRights -= 1;\n        }\n      }\n\n      projectsCarouselClasses.setClassesValue([...tempClasses]);\n      return;\n    }\n\n    for (let i = start; i < end; i += 1) tempClasses.push(slidingDirections[i]);\n    projectsCarouselClasses.setClassesValue([...tempClasses]);\n  };\n\n  return {\n    getProjectsCarouselClasses: projectsCarouselClasses.getClassesValue,\n    moveCarouselProjectsClasses,\n    initializeCarouselProjectsClasses,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselLogic);\n\n\n//# sourceURL=webpack://portfolio_package/./src/logic.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   throttle: () => (/* binding */ throttle)\n/* harmony export */ });\nconst toCamelCase = (string) => string.split(\"-\").map((word, i) => {\n  if (i !== 0) return word.charAt(0).toUpperCase() + word.slice(1);\n  return word;\n}).join(\"\");\n\nconst throttle = (func, limit) => {\n  let lastFunction;\n  let lastRan;\n  return function applyThrottle(...args) {\n    const context = this;\n    if (!lastRan) {\n      func.apply(context, args);\n      lastRan = Date.now();\n    } else {\n      clearTimeout(lastFunction);\n      lastFunction = setTimeout(() => {\n        if ((Date.now() - lastRan) >= limit) {\n          func.apply(context.args);\n          lastRan = Date.now();\n        }\n      }, limit - (Date.now() - lastRan));\n    }\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toCamelCase);\n\n\n\n//# sourceURL=webpack://portfolio_package/./src/utils.js?");

/***/ }),

/***/ "./src/wrapper.js":
/*!************************!*\
  !*** ./src/wrapper.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ \"./src/DOM.js\");\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic.js */ \"./src/logic.js\");\n\n\n\n\nconst Carousel = (imgSliderContainer) => {\n  const slidingImgs = imgSliderContainer.querySelectorAll(\".sliding-img\");\n\n  const carouselDOM = (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(slidingImgs);\n  const carouselLogic = (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n  const getCurrentlyDisplayedProject = () => carouselDOM.getCurrentlyDisplayedProject();\n\n  const initialize = () => {\n    carouselLogic.initializeCarouselProjectsClasses(slidingImgs.length);\n    carouselDOM.initializeCarousel(carouselLogic.getProjectsCarouselClasses());\n  };\n\n  const slideCarousel = (areProjectsMovingLeft) => {\n    carouselLogic.moveCarouselProjectsClasses(areProjectsMovingLeft);\n    carouselDOM.moveCarousel(carouselLogic.getProjectsCarouselClasses());\n  };\n\n  const handleCarouselClick = (projectDescription) => {\n    let currentlyDisplayedProject = null;\n    let rect = imgSliderContainer.getBoundingClientRect();\n\n    window.addEventListener(\"resize\", () => {\n      rect = imgSliderContainer.getBoundingClientRect();\n    });\n\n    imgSliderContainer.addEventListener(\"click\", (e) => {\n      const clickedX = e.clientX - rect.left;\n\n      const isClickedLeft = clickedX < rect.width / 6;\n      const isClickedRight = clickedX > rect.width * (5 / 6);\n\n      if (isClickedLeft || isClickedRight) {\n        if (isClickedLeft) slideCarousel(false);\n        else slideCarousel(true);\n        currentlyDisplayedProject = getCurrentlyDisplayedProject();\n        projectDescription.handleProjectRelated(currentlyDisplayedProject);\n      }\n    });\n  };\n\n  return { initialize, handleCarouselClick };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carousel);\n\n\n//# sourceURL=webpack://portfolio_package/./src/wrapper.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;