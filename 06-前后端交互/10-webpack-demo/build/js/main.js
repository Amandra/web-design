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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/m1.js":
/*!**********************!*\
  !*** ./src/js/m1.js ***!
  \**********************/
/*! exports provided: add, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sub\", function() { return sub; });\n// 使用分别暴露\r\nfunction add(a, b) {\r\n    return a + b;\r\n}\r\n\r\nfunction sub(a, b) {\r\n    return a - b;\r\n}\n\n//# sourceURL=webpack:///./src/js/m1.js?");

/***/ }),

/***/ "./src/js/m2.js":
/*!**********************!*\
  !*** ./src/js/m2.js ***!
  \**********************/
/*! exports provided: name, age */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"age\", function() { return age; });\n// 使用统一暴露\r\nconst name = '许大仙';\r\nconst age = 18;\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/m2.js?");

/***/ }),

/***/ "./src/js/m3.js":
/*!**********************!*\
  !*** ./src/js/m3.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// 使用默认暴露\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    name: '江苏科技大学',\r\n    address: '中国江苏省镇江市京口区梦溪路2号',\r\n    subjects: ['前端', '大数据', 'Python']\r\n});\n\n//# sourceURL=webpack:///./src/js/m3.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _m1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./m1 */ \"./src/js/m1.js\");\n/* harmony import */ var _m2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./m2 */ \"./src/js/m2.js\");\n/* harmony import */ var _m3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./m3 */ \"./src/js/m3.js\");\n\r\n\r\n\r\n\r\nconsole.log(Object(_m1__WEBPACK_IMPORTED_MODULE_0__[\"add\"])(1, 2));\r\nconsole.log(Object(_m1__WEBPACK_IMPORTED_MODULE_0__[\"sub\"])(1, 2));\r\n\r\nconsole.log(_m2__WEBPACK_IMPORTED_MODULE_1__[\"name\"]);\r\nconsole.log(_m2__WEBPACK_IMPORTED_MODULE_1__[\"age\"]);\r\nconsole.log(_m3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].name);\r\nconsole.log(_m3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].address);\r\nconsole.log(_m3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].subjects);\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });