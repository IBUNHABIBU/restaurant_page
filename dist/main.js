/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/modules/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation */ \"./src/modules/navigation.js\");\n\r\n// import createHomePage from './main';\r\nfunction init() {\r\n\tObject(_navigation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\t// createHomePage();\r\n\t// navBar();\r\n}\r\ninit();\n\n//# sourceURL=webpack:///./src/modules/app.js?");

/***/ }),

/***/ "./src/modules/navigation.js":
/*!***********************************!*\
  !*** ./src/modules/navigation.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst createHeader = () => {\r\n  const header = document.createElement('header');\r\n  const nav = document.createElement('nav');\r\n  const logo = document.createElement('div');\r\n  logo.className = 'logo';\r\n  header.appendChild(logo);\r\n  logo.innerHTML = `<img src=\"../src/images/logo.PNG\" alt=\"logo\" width=\"60\" height=\"40\">`;\r\n  header.appendChild(nav);\r\n  const ul = document.createElement('ul');\r\n  nav.appendChild(ul);\r\n  ul.innerHTML =  `<li><a href=\"#\" class=\"fs-20\">Home</a></li>\r\n  <li><a href=\"#\" class=\"fs-20\">Menu</a></li>\r\n  <li><a href=\"#\" class=\"fs-20\">Contact Us</a></li>`;\r\n  return header;\r\n}\r\nconst createFooter = () => {\r\n  const footer = document.createElement('footer');\r\n  footer.innerHTML = `<div class=\"foot\">\r\n                        <div class=\"row jc-center\">\r\n                          <div class=\"c-l-12 fs-20\">\r\n                              ©2020 Delicious Restaurant. All rights reserved.\r\n                          </div>\r\n                        </div>\r\n                      </div>`;\r\n                      return footer;\r\n}\r\nconst createHomepage = () => {\r\n  const main = document.createElement('main');\r\n  const sect = document.createElement('section');\r\n  const article = document.createElement('article');\r\n  main.appendChild(sect);\r\n  sect.appendChild(article);\r\n  const mainPage = document.createElement('div');\r\n  mainPage.className = 'mainpage';\r\n  article.appendChild(mainPage);\r\n  const h2 = document.createElement('h2');\r\n  h2.className = 'family-Arial  white main-para';\r\n  h2.textContent = 'Tiresome and hungry just give us a call and wait for a while we’ll be there at your door.';\r\n  mainPage.appendChild(h2);\r\n  return main;\r\n}\r\nconst loadMainPage = () => {\r\n  const content = document.getElementById('content');\r\n\tconst header = createHeader();\r\n  content.appendChild(header);\r\n  const main = createHomepage();\r\n  content.appendChild(main);\r\n  const footer = createFooter();\r\n  content.appendChild(footer);\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadMainPage);\r\n\n\n//# sourceURL=webpack:///./src/modules/navigation.js?");

/***/ })

/******/ });