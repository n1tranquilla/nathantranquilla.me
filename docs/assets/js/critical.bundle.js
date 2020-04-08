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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/webpack/assets/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lean-blog-web-components/src/app-bar/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/lean-blog-web-components/src/app-bar/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n\n    const convertNavString = str => {\n        return str.split(';')\n            .filter(s=>s.trim().length > 0)\n            .map(pair => pair.split(':'))\n            .map(([name,href]) => `<a href=\"${href}\">${name}</a>`)\n    }\n\n    class AppBar extends HTMLElement {\n        constructor() {\n            super();\n\n            this.attachShadow({ mode: 'open' });\n\n            // creating a container for the editable-list component\n            const appBar = document.createElement('div');\n\n            // adding a class to our container for the sake of clarity\n            appBar.classList.add('root');\n\n            const navLinks = this.getAttribute('nav-links') || '';\n            const mobile = this.hasAttribute('mobile') || false\n            const aTags = convertNavString(navLinks);\n\n            this.setNavLinks = this.setNavLinks.bind(this);\n\n            // creating the inner HTML of the editable list element\n            appBar.innerHTML = `\n                <style>\n                    header {\n                        padding: 0;\n\n                        display: flex;\n                        justify-content: space-between;\n                        align-items: center;\n                        flex-wrap: wrap;\n                        background-color: var(--lbwc-primary-color);\n                    }\n                    nav {\n                        height: 100%;\n                        display: flex;\n                        justify-content: space-between;\n                    }\n                    #logo-link {\n                        border-bottom: none;\n                    }\n                    a {\n                        font-family: var(--lbwc-nav-font-family);\n                        font-size: 0.85rem;\n                        margin: calc(var(--lbwc-spacing-unit)*0.25rem);\n                        padding: calc(var(--lbwc-spacing-unit)*0.5rem) 0;\n                        margin-right: calc(var(--lbwc-spacing-unit)*1rem);\n                        color: var(--lbwc-text-color);\n                        text-decoration: none;\n                        text-transform: capitalize;\n                        border-bottom: 2px solid transparent;\n                        position: relative;\n                    }\n                    a:hover {\n                        border-bottom: 2px solid var(--lbwc-accent-color);\n                    }\n                    .left,.right {\n                        flex: 1;\n                        flex-basis: 50%;\n                        display: flex;\n                    }\n                    .left {\n                        justify-content: ${mobile ? 'center' : 'flex-start'};\n                    }\n                    .right {\n                        justify-content: ${mobile ? 'space-between' : 'flex-end'};\n                    }\n                </style>\n                <header>\n                    <div class=\"left\">\n                        <a id=\"logo-link\" href=\"/\"><slot></slot></a>\n                    </div>\n                    <nav class=\"right\">${aTags.join(\"\")}</nav>\n                </header>\n            `;\n\n            // appending the container to the shadow DOM\n            this.shadowRoot.appendChild(appBar);\n\n            this.nav = this.shadowRoot.querySelector('nav');\n            this.logoLink = this.shadowRoot.getElementById('logo-link');\n            this.leftEl = this.shadowRoot.querySelector('.left');\n            this.rightEl = this.shadowRoot.querySelector('.right');\n        }\n\n        get navLinks() {\n            return this.getAttribute('nav-links') || ''\n        }\n\n        set navLinks(value) {\n            this.setAttribute('nav-links',value);\n        }\n\n        get mobile() {\n            return this.hasAttribute('mobile') || false\n        }\n\n        set mobile(isMobile) {\n            if (isMobile) {\n                this.setAttribute('mobile','')\n            } else {\n                this.removeAttribute('mobile')\n            }\n        }\n\n        static get observedAttributes() {\n            return ['nav-links', 'mobile']\n        }\n\n        setNavLinks(str) {\n            const navLinks = convertNavString(str);\n            this.nav.innerHTML = navLinks.join(\"\");\n        }\n\n        setMobile(isMobile) {\n            this.mobile = isMobile;\n            if (isMobile) {\n                this.leftEl.setAttribute('style','justify-content: center');\n                this.rightEl.setAttribute('style','justify-content: space-between');\n            } else {\n                this.leftEl.setAttribute('style','justify-content: flex-start');\n                this.rightEl.setAttribute('style','justify-content: flex-end');\n            }\n        }\n\n        attributeChangedCallback(name, oldValue, newValue) {\n            switch (name) {\n                case 'nav-links': {\n                    this.setNavLinks(newValue);\n                    break;\n                }\n                case 'mobile': {\n                    this.setMobile(this.hasAttribute('mobile'))\n                    break;\n                }\n                default: {\n                    break;\n                }\n            }\n        }\n    }\n\n    customElements.get('lbwc-app-bar') || customElements.define('lbwc-app-bar', AppBar);\n\n})();\n\n//# sourceURL=webpack:///./node_modules/lean-blog-web-components/src/app-bar/index.js?");

/***/ }),

/***/ "./src/webpack/assets/js/index.js":
/*!****************************************!*\
  !*** ./src/webpack/assets/js/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lean_blog_web_components_src_app_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lean-blog-web-components/src/app-bar */ \"./node_modules/lean-blog-web-components/src/app-bar/index.js\");\n/* harmony import */ var lean_blog_web_components_src_app_bar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lean_blog_web_components_src_app_bar__WEBPACK_IMPORTED_MODULE_0__);\n\n\nwindow.onload = function(){\n    const mq = window.matchMedia('(max-width: 475px)');\n    const appbar = document.querySelector('lbwc-app-bar');\n\n    const handleMediaQuery = (mediaQuery) => {\n        if(mediaQuery.matches && !appbar.hasAttribute('mobile')) {    \n            appbar.setAttribute('mobile','');\n        }\n        \n        if(!mediaQuery.matches && appbar.hasAttribute('mobile')) {\n            appbar.removeAttribute('mobile')\n        }\n    }\n\n    handleMediaQuery(mq);\n    mq.addListener(handleMediaQuery);\n}\n\n\n\n\n//# sourceURL=webpack:///./src/webpack/assets/js/index.js?");

/***/ })

/******/ });