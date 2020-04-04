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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/deferable.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lean-blog-web-components/src/article/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/lean-blog-web-components/src/article/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Article extends HTMLElement {\n    constructor() {\n        super();\n\n        this.attachShadow({ mode: 'open' });\n\n        // creating a container for the editable-list component\n        const article = document.createElement('div');\n\n        // adding a class to our container for the sake of clarity\n        article.classList.add('root');\n\n        const title = this.getAttribute('title') || '';\n        const date = this.getAttribute('date') || ''\n\n        // creating the inner HTML of the editable list element\n        article.innerHTML = `\n        <style>\n            article {\n                color: var(--lbwc-text-color);\n            }\n            #article-header {\n                width: 100%;\n                display: flex;\n                justify-content: space-between;\n                align-items: baseline;\n                flex-wrap: wrap;\n            }\n            h1 {\n                font-family: var(--lbwc-title-font-family);\n            }\n            span {\n                opacity: 0.75;\n                font-size: 0.7rem;\n            }\n        </style>\n        <article>\n            <div id=\"article-header\">\n                <h1>${title}</h1>\n                <span>${date}</span>\n            </div>\n            <slot></slot>\n        </article>\n      `;\n\n        // appending the container to the shadow DOM\n        this.shadowRoot.appendChild(article);\n\n        this.titleEl = this.shadowRoot.getElementById(\"article-header\").children[0];\n        this.dateEl = this.shadowRoot.getElementById(\"article-header\").children[1];\n    }\n\n    get title(){\n        return this.getAttribute('title') || '';\n    }\n\n    set title(value) {\n        this.setAttribute('title',value)\n    }\n\n    get date() {\n        return this.getAttribute('date') || ''\n    }\n\n    set date(value) {\n        this.setAttribute('date',value)\n    }\n\n    static get observedAttributes() {\n        return ['title', 'date'];\n    }\n\n    attributeChangedCallback(name, oldValue, newValue) {\n        switch (name) {\n            case 'title': {\n                this.titleEl.innerHTML = newValue;\n                break;\n            }\n            case 'date': {\n                this.dateEl.innerHTML = newValue;\n                break;\n            }\n            default: {\n                break;\n            }\n        }\n    }\n}\n\ncustomElements.get('lbwc-article') || customElements.define('lbwc-article', Article);\n\n//# sourceURL=webpack:///./node_modules/lean-blog-web-components/src/article/index.js?");

/***/ }),

/***/ "./node_modules/lean-blog-web-components/src/index-page/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/lean-blog-web-components/src/index-page/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() {\n\n    const convertPosts = (str) => {\n        return str.split(';;')\n            .filter(str=>str.length>0)\n            .reduce((agg,postStr)=>{\n                const post={}\n                const entries = postStr.split(';');\n                entries.forEach(entry => {\n                    const [key,value] = entry.split(':');\n                    post[key] = value\n                })\n                agg.push(post)\n                return agg;\n            },[])\n    }\n\n    const createLiHtml = meta => {\n        return `<li>\n            <a href=\"${meta.href}\">${meta.title}</a>\n            <div class=\"meta\">\n                <span class=\"date\">${meta.date}</span>\n                ${meta.teaser ? `<i class=\"description\">${meta.teaser}</i>` : \"\"}\n            </div>\n        </li>`\n    \n    }\n\n    class IndexPage extends HTMLElement {\n        constructor() {\n            super();\n\n            this.attachShadow({ mode: 'open' });\n\n            // creating a container for the editable-list component\n            const indexPage = document.createElement('div');\n\n            // adding a class to our container for the sake of clarity\n            indexPage.classList.add('root');\n\n            const title = this.getAttribute('title') || ''\n            const postsAttr = this.getAttribute('posts') || ''\n            const posts = convertPosts(postsAttr);\n\n            // creating the inner HTML of the editable list element\n            indexPage.innerHTML = `\n                <style>\n                    h1 {\n                        font-size: 1.5rem;\n                        font-family: var(--lbwc-title-font-family);\n                    }\n                    ul {\n                        list-style-type: none;\n                        padding-left: 0;\n                    }\n                    li {\n                        margin: calc(var(--lbwc-spacing-unit)*0.5rem) 0;\n                    }\n                    a {\n                        font-family: var(--lbwc-title-font-family);\n                        text-decoration: none;\n                    }\n                    a:hover{\n                        text-decoration: underline;\n                    }\n                    .meta {\n                        opacity: 0.75;\n                        font-size: 0.7rem;\n                    }\n                    .description {\n                        white-space: nowrap;\n                        text-overflow: ellipsis;\n                        width: 100%;\n                        max-width: 400px;\n                        display: block;\n                        overflow: hidden;\n                    }\n                </style>\n                <h1>${title}</h1>\n                <ul>\n                    ${posts.map(createLiHtml).join('')}\n                <ul>\n            `;\n\n            // appending the container to the shadow DOM\n            this.shadowRoot.appendChild(indexPage);\n\n            this.appendPosts = this.appendPosts.bind(this);\n            this.ulEl = this.shadowRoot.querySelector('ul');\n            this.titleEl = this.shadowRoot.querySelector('h1');\n        }\n\n        get posts() {\n            return this.getAttribute('posts') || [];\n        }\n\n        set posts(value) {\n            this.setAttribute('posts',value)\n        }\n\n        get title() {\n            return this.getAttribute('title') || ''\n        }\n\n        set title(value) {\n            this.setAttribute('title',value)\n        }\n\n        static get observedAttributes() {\n            return ['title','posts'];\n        }\n\n        appendPosts(str) {\n            const posts = convertPosts(str);\n            this.ulEl.innerHTML = posts.map(createLiHtml).join('')\n        }\n\n        attributeChangedCallback(name, oldValue, newValue) {\n            switch (name) {\n                case 'title': {\n                    this.titleEl.innerHTML = newValue;\n                    break;\n                }\n                case 'posts': {\n                    this.appendPosts(newValue);\n                    break;\n                }\n                default: {\n                    break;\n                }\n            }\n        }\n    }\n\n    customElements.get('lbwc-index-page') || customElements.define('lbwc-index-page', IndexPage);\n\n})();\n\n//# sourceURL=webpack:///./node_modules/lean-blog-web-components/src/index-page/index.js?");

/***/ }),

/***/ "./src/assets/js/deferable.js":
/*!************************************!*\
  !*** ./src/assets/js/deferable.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lean_blog_web_components_src_article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lean-blog-web-components/src/article */ \"./node_modules/lean-blog-web-components/src/article/index.js\");\n/* harmony import */ var lean_blog_web_components_src_article__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lean_blog_web_components_src_article__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lean_blog_web_components_src_index_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lean-blog-web-components/src/index-page */ \"./node_modules/lean-blog-web-components/src/index-page/index.js\");\n/* harmony import */ var lean_blog_web_components_src_index_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lean_blog_web_components_src_index_page__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n//# sourceURL=webpack:///./src/assets/js/deferable.js?");

/***/ })

/******/ });