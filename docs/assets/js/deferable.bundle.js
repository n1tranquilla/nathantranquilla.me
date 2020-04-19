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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/webpack/assets/js/deferable.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lean-blog-web-components/src/a/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/lean-blog-web-components/src/a/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n\n    class Link extends HTMLElement {\n        constructor() {\n            super();\n\n            this.attachShadow({ mode: 'open' });\n\n            // creating a container for the editable-list component\n            const a = document.createElement('a');\n\n            // adding a class to our container for the sake of clarity\n            a.classList.add('root');\n\n            const href = this.getAttribute(\"href\") || '';\n\n            // creating the inner HTML of the editable list element\n            a.innerHTML = `\n                <style>\n                    a {\n                        font-family: var(--lbwc-body-font-family);\n                    }\n                    a:active,a:hover {\n                        color: var(--lbwc-accent-color);\n                    }\n                </style>\n                <a id=\"link\" href=\"${href}\"><slot></slot></a>\n            `;\n\n            // appending the container to the shadow DOM\n            this.shadowRoot.appendChild(a);\n\n            this.linkEl = this.shadowRoot.getElementById(\"link\")\n        }\n\n        get href() {\n            return this.getAttribute('href') || ''\n        }\n\n        set href(value) {\n            this.setAttribute('href',value);\n        }\n\n        static get observedAttributes() {\n            return ['href']\n        }\n\n        attributeChangedCallback(name, oldValue, newValue) {\n            switch(name) {\n                case \"href\": {\n                    this.linkEl.setAttribute(\"href\",newValue)\n                }\n                default: {\n                    break;\n                }\n            }\n        }\n    }\n\n    customElements.get('lbwc-a') || customElements.define('lbwc-a', Link);\n\n})();\n\n//# sourceURL=webpack:///./node_modules/lean-blog-web-components/src/a/index.js?");

/***/ }),

/***/ "./node_modules/lean-blog-web-components/src/article/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/lean-blog-web-components/src/article/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n\n    const convertTags = str =>str.split(';;')\n        .filter(s=>s.trim().length>0)\n        .map(row => {\n            const entries = row.split(';')\n            return entries.reduce((agg,entry)=>{\n                const [key,value] = entry.split(':')\n                agg[key] = value;\n                return agg;\n            },{})\n        })        \n\n    const createTagsHtml = t=>`<lbwc-tag href=\"${t.href}\" name=\"${t.name}\"></lbwc-tag>`\n\n    class Article extends HTMLElement {\n\n        \n        constructor() {\n            super();\n\n            this.attachShadow({ mode: 'open' });\n\n            // creating a container for the editable-list component\n            const article = document.createElement('div');\n\n            // adding a class to our container for the sake of clarity\n            article.classList.add('root');\n\n            const title = this.getAttribute('title') || '';\n            const date = this.getAttribute('date') || ''\n            const tags = convertTags(this.getAttribute('tags') || '');\n\n            // creating the inner HTML of the editable list element\n            article.innerHTML = `\n                <style>\n                    article {\n                        color: var(--lbwc-text-color);\n                    }\n                    #article-header {\n                        width: 100%;\n                        display: flex;\n                        justify-content: flex-start;\n                        align-items: baseline;\n                        flex-wrap: wrap;\n                    }\n                    #article-subheader {\n                        width: 100%;\n                        display:flex;\n                        justify-content: space-between;\n                        align-items: baseline;\n                        flex-wrap: wrap;\n                    }\n                    h1 {\n                        font-family: var(--lbwc-title-font-family);\n                    }\n                    #date {\n                        color: #B5B5B5;\n                        font-size: 0.7rem;\n                    }\n                    #tags { \n                        display: flex;\n                    }\n                </style>\n                <article>\n                    <div id=\"article-header\">\n                        <h1>${title}</h1>\n                    </div>\n                    <div id=\"article-subheader\">\n                        <span id=\"date\">${date}</span>\n                        <span id=\"tags\">${tags.map(createTagsHtml).join('')}</span>\n                    </div>\n                    <div><slot></slot></div>\n                </article>\n                `;\n\n            // appending the container to the shadow DOM\n            this.shadowRoot.appendChild(article);\n\n            this.titleEl = this.shadowRoot.getElementById(\"article-header\").children[0];\n            this.dateEl = this.shadowRoot.getElementById(\"article-subheader\").children[0];\n            this.tagsEl = this.shadowRoot.getElementById(\"article-subheader\").children[1];\n\n        }\n\n        get title() {\n            return this.getAttribute('title') || '';\n        }\n\n        set title(value) {\n            this.setAttribute('title', value)\n        }\n\n        get tags() {\n            return this.getAttribute('tags') || [];\n        }\n\n        set tags(value) {\n            this.setAttribute('tags', value);\n        }\n\n        get date() {\n            return this.getAttribute('date') || ''\n        }\n\n        set date(value) {\n            this.setAttribute('date', value)\n        }\n\n        static get observedAttributes() {\n            return ['title', 'date'];\n        }\n\n        attributeChangedCallback(name, oldValue, newValue) {\n            switch (name) {\n                case 'title': {\n                    this.titleEl.innerHTML = newValue;\n                    break;\n                }\n                case 'date': {\n                    this.dateEl.innerHTML = newValue;\n                    break;\n                }\n                case 'tags': {\n                    const tags = convertTags(newValue);\n                    this.tagsEl.innerHTML = tags.map(createTagsHtml);\n                    break;\n                }\n                default: {\n                    break;\n                }\n            }\n        }\n    }\n\n    customElements.get('lbwc-article') || customElements.define('lbwc-article', Article);\n\n})()\n\n//# sourceURL=webpack:///./node_modules/lean-blog-web-components/src/article/index.js?");

/***/ }),

/***/ "./node_modules/lean-blog-web-components/src/img-block/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/lean-blog-web-components/src/img-block/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n\n    class ImgBlock extends HTMLElement {\n        constructor() {\n            super();\n\n            this.attachShadow({ mode: 'open' });\n\n            // creating a container for the editable-list component\n            const div = document.createElement('div');\n\n            // adding a class to our container for the sake of clarity\n            div.classList.add('root');\n\n            const src = this.getAttribute(\"src\") || '';\n            const height = this.getAttribute('height') || 0;\n            const width = this.getAttribute('width') || 0;\n\n            // creating the inner HTML of the editable list element\n            div.innerHTML = `\n                <style>\n                    #container {\n                        display: flex; \n                        justify-content: center; \n                        width: 100%; \n                        padding: 1rem 0; \n                        background-color: var(--lbwc-background-accent-color,#f5f5f5); \n                        margin: 1rem 0;\n                    }\n                </style>\n                <div id=\"container\">\n                    <img id=\"img\" src=\"data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=\" \n                        data-src=\"${src}\" height=\"${height}\" width=\"${width}\">\n                </div>\n            `;\n\n            // appending the container to the shadow DOM\n            this.shadowRoot.appendChild(div);\n\n            this.imgEl = this.shadowRoot.getElementById(\"img\")\n        }\n\n        get src() {\n            return this.getAttribute('data-src') || ''\n        }\n\n        set src(value) {\n            this.setAttribute('data-src', value);\n        }\n\n        get height() {\n            return this.getAttribute('height') || ''\n        }\n\n        set height(value) {\n            this.setAttribute('height', value);\n        }\n\n        get width() {\n            return this.getAttribute('width') || ''\n        }\n\n        set width(value) {\n            this.setAttribute('width', value);\n        }\n\n        static get observedAttributes() {\n            return ['src','height','width']\n        }\n\n        attributeChangedCallback(name, oldValue, newValue) {\n            switch (name) {\n                case \"src\": {\n                    this.imgEl.setAttribute(\"data-src\", newValue)\n                }\n                case \"height\": {\n                    this.imgEl.setAttribute(\"height\", newValue)\n                }\n                case \"width\": {\n                    this.imgEl.setAttribute(\"width\", newValue)\n                }\n                default: {\n                    break;\n                }\n            }\n        }\n\n        connectedCallback() {\n            if (IntersectionObserver){\n                this.imageObserver = new IntersectionObserver((entries, imgObserver) => {\n                    entries.forEach((entry) => {\n                        if(entry.isIntersecting) {\n                            const lazyImage = entry.target\n                            lazyImage.src = lazyImage.dataset.src\n                        }\n                    })\n                });\n                this.imageObserver.observe(this.imgEl);\n            } else {\n                this.imgEl.setAttribute(\"src\",this.imgEl.getAttribute(\"data-src\"))\n            } \n        }\n\n        disconnectedCallback(){\n            if(this.imageObserver){\n                this.imageObserver.disconnect();\n            }\n        }\n    }\n\n    customElements.get('lbwc-img-block') || customElements.define('lbwc-img-block', ImgBlock);\n\n})();\n\n//# sourceURL=webpack:///./node_modules/lean-blog-web-components/src/img-block/index.js?");

/***/ }),

/***/ "./node_modules/lean-blog-web-components/src/index-page/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/lean-blog-web-components/src/index-page/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() {\n\n    class IndexPage extends HTMLElement {\n        constructor() {\n            super();\n\n            this.attachShadow({ mode: 'open' });\n\n            // creating a container for the editable-list component\n            const indexPage = document.createElement('ul');\n\n            // adding a class to our container for the sake of clarity\n            indexPage.classList.add('root');\n\n            const title = this.getAttribute('title') || ''\n\n            // creating the inner HTML of the editable list element\n            indexPage.innerHTML = `\n                <style>\n                    h1 {\n                        font-size: 1.5rem;\n                        font-family: var(--lbwc-title-font-family);\n                    }\n                    ul {\n                        list-style-type: none;\n                        padding-left: 0;\n                    }\n                </style>\n                <h1>${title}</h1>\n                <slot></slot>\n            `;\n\n            // appending the container to the shadow DOM\n            this.shadowRoot.appendChild(indexPage);\n\n            this.titleEl = this.shadowRoot.querySelector('h1');\n        }\n\n        get title() {\n            return this.getAttribute('title') || ''\n        }\n\n        set title(value) {\n            this.setAttribute('title',value)\n        }\n\n        static get observedAttributes() {\n            return ['title'];\n        }\n\n        attributeChangedCallback(name, oldValue, newValue) {\n            switch (name) {\n                case 'title': {\n                    this.titleEl.innerHTML = newValue;\n                    break;\n                }\n                default: {\n                    break;\n                }\n            }\n        }\n    }\n\n    customElements.get('lbwc-index-page') || customElements.define('lbwc-index-page', IndexPage);\n\n})();\n\n//# sourceURL=webpack:///./node_modules/lean-blog-web-components/src/index-page/index.js?");

/***/ }),

/***/ "./node_modules/lean-blog-web-components/src/index-page/list-entry.js":
/*!****************************************************************************!*\
  !*** ./node_modules/lean-blog-web-components/src/index-page/list-entry.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() {\n\n    class ListEntry extends HTMLElement {\n        constructor() {\n            super();\n\n            this.attachShadow({ mode: 'open' });\n\n            // creating a container for the editable-list component\n            const listEntry = document.createElement('li');\n\n            // adding a class to our container for the sake of clarity\n            listEntry.classList.add('root');\n\n            const title = this.getAttribute('title') || '';\n            const href = this.getAttribute('href') || '';\n            const date = this.getAttribute('date') || '';\n            const teaser = this.getAttribute('teaser');\n\n            // creating the inner HTML of the editable list element\n            listEntry.innerHTML = `\n                <style>\n                    li {\n                        margin: calc(var(--lbwc-spacing-unit)*0.5rem) 0;\n                        padding: 0.25rem;\n                        margin: 0.25rem 0;\n                    }\n                    .meta {\n                        opacity: 0.75;\n                        font-size: 0.7rem;\n                    }\n                    #teaser {\n                        white-space: nowrap;\n                        text-overflow: ellipsis;\n                        width: 100%;\n                        max-width: 400px;\n                        display: block;\n                        overflow: hidden;\n                    }\n                    #tags{\n                        display: flex;\n                    }\n                    #tags > * {\n                        margin-right: 1rem;\n                    }\n                </style>\n                <lbwc-a id=\"link\" href=\"${href}\">${title}</lbwc-a>\n                <div id=\"date\" class=\"meta\">${date}</div>\n                <div id=\"teaser\" class=\"meta\">${teaser}</div>\n                <div id=\"tags\"><slot></slot></div>\n                </div>\n            `;\n\n            // appending the container to the shadow DOM\n            this.shadowRoot.appendChild(listEntry);\n\n            this.linkEl = this.shadowRoot.getElementById(\"link\");\n            this.dateEl = this.shadowRoot.getElementById(\"date\");\n            this.teaserEl = this.shadowRoot.getElementById(\"teaser\");\n        }\n\n        get title() {\n            return this.getAttribute('title') || '';\n        }\n\n        set title(value) {\n            this.setAttribute('title',value)\n        }\n\n        get href() {\n            return this.getAttribute('href') || '';\n        }\n\n        set href(value) {\n            this.setAttribute('href',value)\n        }\n\n        get date() {\n            return this.getAttribute('date') || '';\n        }\n\n        set date(value) {\n            this.setAttribute('date',value)\n        }\n\n        get teaser() {\n            return this.getAttribute('teaser') || '';\n        }\n\n        set teaser(value) {\n            this.setAttribute('teaser',value)\n        }\n\n        static get observedAttributes() {\n            return ['href','date','title','teaser'];\n        }\n\n        attributeChangedCallback(name, oldValue, newValue) {\n            switch (name) {\n                case 'title': {\n                    this.linkEl.innerHTML = newValue;\n                    break;\n                }\n                case 'href': {\n                    this.linkEl.href = newValue;\n                    break;\n                }\n                case 'date': {\n                    this.dateEl.innerHTML = newValue\n                    break;\n                }\n                case 'teaser': {\n                    this.teaserEl.innerHTML = newValue==='undefined' ? '' : newValue\n                    break;\n                }\n                default: {\n                    break;\n                }\n            }\n        }\n    }\n\n    customElements.get('lbwc-list-entry') || customElements.define('lbwc-list-entry', ListEntry);\n\n})();\n\n//# sourceURL=webpack:///./node_modules/lean-blog-web-components/src/index-page/list-entry.js?");

/***/ }),

/***/ "./node_modules/lean-blog-web-components/src/tag/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/lean-blog-web-components/src/tag/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n\n    class Tag extends HTMLElement {\n        \n        constructor() {\n            super();\n\n            this.attachShadow({ mode: 'open' });\n\n            // creating a container for the editable-list component\n            const tag = document.createElement('div');\n\n            // adding a class to our container for the sake of clarity\n            tag.classList.add('root');\n\n            const href = this.getAttribute('href') || '';\n            const name = this.getAttribute('name') || '';\n\n            // creating the inner HTML of the editable list element\n            tag.innerHTML = `\n                <style>\n                    a {\n                        font-size: 0.7rem;\n                        padding: 3px 10px;\n                        background-color: #f5f5f5;\n                        border-radius: 3px;\n                        margin-right: 0.5rem;\n                        flex-shrink: 0;\n                        white-space: nowrap;\n                    }\n                    a:hover,a:active {\n                        background-color: black;\n                        color:var(--lbwc-accent-color);\n                    }\n                </style>\n                <a id=\"tag\" href=\"${href}\">${name}</a>\n            `;\n\n            // appending the container to the shadow DOM\n            this.shadowRoot.appendChild(tag);\n\n            this.tagEl = this.shadowRoot.getElementById(\"tag\");\n\n        }\n\n        get href() {\n            return this.getAttribute('href') || '';\n        }\n\n        set href(value) {\n            this.setAttribute('href', value)\n        }\n\n        get name() {\n            return this.getAttribute('name') || [];\n        }\n\n        set name(value) {\n            this.setAttribute('name', value);\n        }\n\n        static get observedAttributes() {\n            return ['href', 'name'];\n        }\n\n        attributeChangedCallback(name, oldValue, newValue) {\n            switch (name) {\n                case 'href': {\n                    this.tagEl.href = newValue;\n                    break;\n                }\n                case 'name': {\n                    this.tagEl.innerHTML = newValue;\n                    break;\n                }\n                default: {\n                    break;\n                }\n            }\n        }\n    }\n\n    customElements.get('lbwc-tag') || customElements.define('lbwc-tag', Tag);\n\n})()\n\n//# sourceURL=webpack:///./node_modules/lean-blog-web-components/src/tag/index.js?");

/***/ }),

/***/ "./src/webpack/assets/js/deferable.js":
/*!********************************************!*\
  !*** ./src/webpack/assets/js/deferable.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lean_blog_web_components_src_article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lean-blog-web-components/src/article */ \"./node_modules/lean-blog-web-components/src/article/index.js\");\n/* harmony import */ var lean_blog_web_components_src_article__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lean_blog_web_components_src_article__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lean_blog_web_components_src_index_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lean-blog-web-components/src/index-page */ \"./node_modules/lean-blog-web-components/src/index-page/index.js\");\n/* harmony import */ var lean_blog_web_components_src_index_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lean_blog_web_components_src_index_page__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lean_blog_web_components_src_index_page_list_entry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lean-blog-web-components/src/index-page/list-entry */ \"./node_modules/lean-blog-web-components/src/index-page/list-entry.js\");\n/* harmony import */ var lean_blog_web_components_src_index_page_list_entry__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lean_blog_web_components_src_index_page_list_entry__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lean_blog_web_components_src_a__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lean-blog-web-components/src/a */ \"./node_modules/lean-blog-web-components/src/a/index.js\");\n/* harmony import */ var lean_blog_web_components_src_a__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lean_blog_web_components_src_a__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lean_blog_web_components_src_img_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lean-blog-web-components/src/img-block */ \"./node_modules/lean-blog-web-components/src/img-block/index.js\");\n/* harmony import */ var lean_blog_web_components_src_img_block__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lean_blog_web_components_src_img_block__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lean_blog_web_components_src_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lean-blog-web-components/src/tag */ \"./node_modules/lean-blog-web-components/src/tag/index.js\");\n/* harmony import */ var lean_blog_web_components_src_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lean_blog_web_components_src_tag__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/webpack/assets/js/deferable.js?");

/***/ })

/******/ });