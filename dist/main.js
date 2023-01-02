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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_modules_animated_tittle_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/modules/animated-tittle-main */ \"./src/js/modules/animated-tittle-main.js\");\n/* harmony import */ var _js_modules_animated_subtitle_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/modules/animated-subtitle-main */ \"./src/js/modules/animated-subtitle-main.js\");\n/* harmony import */ var _js_modules_animated_show_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/modules/animated-show-element */ \"./src/js/modules/animated-show-element.js\");\n/* harmony import */ var _js_modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/modules/slider */ \"./src/js/modules/slider.js\");\n/* harmony import */ var _js_modules_animated_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/modules/animated-page */ \"./src/js/modules/animated-page.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n\r\n  'use strict';\r\n  (0,_js_modules_animated_tittle_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  (0,_js_modules_animated_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n  (0,_js_modules_animated_subtitle_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  (0,_js_modules_animated_show_element__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  (0,_js_modules_slider__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\n\r\n\r\n});\n\n//# sourceURL=webpack://healthy-food/./src/index.js?");

/***/ }),

/***/ "./src/js/modules/animated-page.js":
/*!*****************************************!*\
  !*** ./src/js/modules/animated-page.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _animated_show_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animated-show-element */ \"./src/js/modules/animated-show-element.js\");\n\r\n\r\nconst animatedPage = () => {\r\n\r\n  function animatedTitle() {\r\n    const titleBlock = document.querySelectorAll('.title-block'),\r\n      workBlock = document.querySelector('.work__block'),\r\n      dishesBlock = document.querySelector('.dishes-cards'),\r\n      chefsBlock = document.querySelector('.chefs__block'),\r\n      recipeBlock = document.querySelector('.recipes__block'),\r\n      recipesBlock = document.querySelectorAll('.right-side-recipes__block'),\r\n      socialBox = document.querySelectorAll('.social__box'),\r\n      socialBlock = document.querySelector('.social__block'),\r\n      arrTitleBlock = [];\r\n\r\n    titleBlock.forEach((item, i) => {\r\n      item.style.opacity = '0';\r\n    });\r\n\r\n    recipesBlock.forEach(item => {\r\n      item.style.maxHeight = '0';\r\n      item.style.paddingTop = '0';\r\n      item.style.paddingBottom = '0';\r\n    });\r\n\r\n    socialBox.forEach(item => {\r\n      item.style.opacity = '0';\r\n    });\r\n\r\n    window.addEventListener('scroll', () => {\r\n      \r\n      titleBlock.forEach((item, i) => {\r\n        let classTitle = item.getAttribute('class').split(\" \");\r\n        arrTitleBlock.push(classTitle[0]);\r\n\r\n        if ((titleBlock[i].offsetTop - window.pageYOffset) <= 750) {\r\n          (0,_animated_show_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.' + arrTitleBlock[i], 'fadeIn', 3, 0);\r\n          (0,_animated_show_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.about__slider-dish', 'fadeIn', 3, 0);\r\n        }\r\n      });\r\n\r\n      if ((workBlock.offsetTop - window.pageYOffset) <= 750) {\r\n        (0,_animated_show_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.step__block', 'fadeInDown', 1, 0.5, 0.2);\r\n      }\r\n\r\n      if ((dishesBlock.offsetTop - window.pageYOffset) <= 750) {\r\n        (0,_animated_show_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.card-dish', 'fadeInDown', 1, 0.5, 0.2);\r\n      }\r\n\r\n      if ((chefsBlock.offsetTop - window.pageYOffset) <= 750) {\r\n        (0,_animated_show_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.card-chef', 'fadeInDown', 1, 0.5, 0.2);\r\n      }\r\n\r\n      if ((recipeBlock.offsetTop - window.pageYOffset) <= 750) {\r\n        (0,_animated_show_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.right-side-recipes__block', 'fadeInUpDown', 0.5, 1.5, 0.5);\r\n      }\r\n      \r\n      if ((recipeBlock.offsetTop - window.pageYOffset) <= 750) {\r\n        (0,_animated_show_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.recipes__left-side', 'fadeInLeft', 1, 0.5);\r\n      }\r\n      console.log(socialBlock.offsetTop - window.pageYOffset);\r\n      if ((socialBlock.offsetTop - window.pageYOffset) <= 750) {\r\n        (0,_animated_show_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.social__box', 'fadeIn', 1, 0.5, 0.5);\r\n      }      \r\n    });\r\n  }\r\n\r\n  (0,_animated_show_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.main__button', 'fadeIn', 1, 9);\r\n  (0,_animated_show_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.contact-main__block', 'fadeInDown', 1, 9.8, 0.2);\r\n  animatedTitle();\r\n\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animatedPage);\n\n//# sourceURL=webpack://healthy-food/./src/js/modules/animated-page.js?");

/***/ }),

/***/ "./src/js/modules/animated-show-element.js":
/*!*************************************************!*\
  !*** ./src/js/modules/animated-show-element.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst showElement = (elementSelector, animation, speedTime, timeDelay, timeDelayBlock = 0) => {\r\n\r\n    const elements = document.querySelectorAll(elementSelector);\r\n\r\n    elements.forEach((element, i) => {\r\n      element.classList.add(animation);\r\n      element.style.animationDuration = `${speedTime}s`;\r\n\r\n      setTimeout(() => {\r\n        element.style.animationDelay = `${timeDelay + i * timeDelayBlock}s`;\r\n      }, timeDelay);\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showElement);\n\n//# sourceURL=webpack://healthy-food/./src/js/modules/animated-show-element.js?");

/***/ }),

/***/ "./src/js/modules/animated-subtitle-main.js":
/*!**************************************************!*\
  !*** ./src/js/modules/animated-subtitle-main.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst subtitleAnimation = () => {\r\n\r\n  const typeText = (textSelector, speedType, timeStart) => {\r\n    const subtitle = document.querySelector(textSelector),\r\n      text = subtitle.textContent;\r\n\r\n    let countLetter = 0;\r\n\r\n    subtitle.textContent = '';\r\n\r\n    function typeWriter() {\r\n      if (countLetter < text.length) {\r\n        subtitle.innerHTML += text.charAt(countLetter);\r\n        countLetter++;\r\n        setTimeout(typeWriter, speedType);\r\n      }\r\n    }\r\n    \r\n    setTimeout(() => {\r\n      typeWriter();\r\n    }, timeStart);\r\n    \r\n  };\r\n\r\n  typeText('.main__text', 40, 2000);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (subtitleAnimation);\n\n//# sourceURL=webpack://healthy-food/./src/js/modules/animated-subtitle-main.js?");

/***/ }),

/***/ "./src/js/modules/animated-tittle-main.js":
/*!************************************************!*\
  !*** ./src/js/modules/animated-tittle-main.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst animatedTittle = () => {\r\n\r\n  function animatedTitle(textSelector, timeInterval) {\r\n    const title = document.querySelector(textSelector);\r\n\r\n    let arrTitle = (title.textContent.split(\" \"));\r\n\r\n    title.textContent = \"\";\r\n\r\n    for (let i = 0; i < arrTitle.length; i++) {\r\n      const span = document.createElement('span');\r\n\r\n      if (i !== arrTitle.length - 1 && i !== 2) {\r\n        span.innerHTML = arrTitle[i] + '&nbsp';\r\n      } else {\r\n        span.innerHTML = arrTitle[i];\r\n      }\r\n\r\n      if (i === 0 || i === 3) {\r\n        span.classList.add('main__title-normal');\r\n      }\r\n\r\n      span.style.cssText = 'display: inline-block; opacity: 0;filter: blur(4px)';\r\n      span.style.cssText += `animation: fade-in 0.8s ${timeInterval}s forwards cubic-bezier(0.11, 0, 0.5, 0);`;\r\n      timeInterval += 0.1;\r\n      title.append(span);\r\n    }\r\n  }\r\n  \r\n  animatedTitle('.main__title', 0.1);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animatedTittle);\n\n//# sourceURL=webpack://healthy-food/./src/js/modules/animated-tittle-main.js?");

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _animated_show_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animated-show-element */ \"./src/js/modules/animated-show-element.js\");\n\r\n\r\nconst slider = () => {\r\n\r\n  function slider(sliderSelector, sliderConteinerSelector, slidesSelector, btnPrevSelector, btnNextSelector) {\r\n    const slider = document.querySelector(sliderSelector),\r\n      sliderConteiner = document.querySelector(sliderConteinerSelector),\r\n      btnNext = document.querySelector(btnNextSelector),\r\n      btnPrev = document.querySelector(btnPrevSelector),\r\n      slides = document.querySelectorAll(slidesSelector);\r\n\r\n    let slideIndex = 0,\r\n      moveSlide;\r\n\r\n    function viewVisualSlide() {\r\n      const block = document.createElement('div'),\r\n      sliderBox = document.querySelector('.slider-dish');\r\n\r\n      block.classList.add('slider-dish__show-conteiner');\r\n\r\n      for (let i = 0; i < slides.length - 1; i++) {\r\n        const showBlock = document.createElement('div');\r\n\r\n        showBlock.classList.add('slider-dish__show-block');\r\n        block.append(showBlock);\r\n      }\r\n\r\n      sliderBox.append(block);\r\n    }\r\n\r\n    function viewSlide(n) {\r\n      const showBlock = document.querySelectorAll('.slider-dish__show-block');\r\n      \r\n      if (n < 0) {\r\n        slideIndex = slides.length - 2;\r\n      }\r\n\r\n      if (n > slides.length - 2) {\r\n        slideIndex = 0;\r\n      }\r\n\r\n      sliderConteiner.style.left = `-${slideIndex * 385}px`;\r\n      showBlock[slideIndex].style.opacity = '0.8';\r\n\r\n      showBlock.forEach((item, i) => {\r\n        item.style.opacity = '0.1';\r\n        \r\n        if (slideIndex === i) {\r\n          item.style.opacity = '0.8';\r\n        }\r\n\r\n        item.addEventListener('click', () => {\r\n          nextSlide(i - slideIndex);\r\n        });\r\n      });\r\n    }\r\n\r\n    function nextSlide(n) {\r\n      viewSlide(slideIndex += n);\r\n    }\r\n\r\n    function showSlideByTime() {\r\n\r\n      moveSlide = setInterval(() => {\r\n        btnNext.click();        \r\n      }, 3000);\r\n    }\r\n\r\n    btnNext.addEventListener('click', () => {\r\n      nextSlide(1);\r\n\r\n    });\r\n\r\n    btnPrev.addEventListener('click', () => {\r\n      nextSlide(-1);\r\n    }); \r\n\r\n    slider.addEventListener('mouseenter', () => {\r\n      clearInterval(moveSlide);\r\n    });\r\n\r\n    slider.addEventListener('mouseleave', () => {\r\n      showSlideByTime();\r\n    });\r\n\r\n    viewVisualSlide();\r\n    viewSlide(slideIndex);\r\n    showSlideByTime();\r\n  }\r\n\r\n  slider('.slider-dish', '.slider-dish__container', '.slider-dish__slide', '.prev-btn', '.next-btn');\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://healthy-food/./src/js/modules/slider.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;