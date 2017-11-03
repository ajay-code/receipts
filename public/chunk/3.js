webpackJsonp([3],{

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VuejsPaginate=t():e.VuejsPaginate=t()}(this,function(){return function(e){function t(a){if(n[a])return n[a].exports;var s=n[a]={exports:{},id:a,loaded:!1};return e[a].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var s=n(1),r=a(s);e.exports=r.default},function(e,t,n){n(2);var a=n(6)(n(7),n(8),"data-v-82963a40",null);e.exports=a.exports},function(e,t,n){var a=n(3);"string"==typeof a&&(a=[[e.id,a,""]]);n(5)(a,{});a.locals&&(e.exports=a.locals)},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,"a[data-v-82963a40]{cursor:pointer}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},s=0;s<this.length;s++){var r=this[s][0];"number"==typeof r&&(a[r]=!0)}for(s=0;s<t.length;s++){var i=t[s];"number"==typeof i[0]&&a[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t,n){function a(e,t){for(var n=0;n<e.length;n++){var a=e[n],s=u[a.id];if(s){s.refs++;for(var r=0;r<s.parts.length;r++)s.parts[r](a.parts[r]);for(;r<a.parts.length;r++)s.parts.push(l(a.parts[r],t))}else{for(var i=[],r=0;r<a.parts.length;r++)i.push(l(a.parts[r],t));u[a.id]={id:a.id,refs:1,parts:i}}}}function s(e){for(var t=[],n={},a=0;a<e.length;a++){var s=e[a],r=s[0],i=s[1],o=s[2],l=s[3],c={css:i,media:o,sourceMap:l};n[r]?n[r].parts.push(c):t.push(n[r]={id:r,parts:[c]})}return t}function r(e,t){var n=g(),a=x[x.length-1];if("top"===e.insertAt)a?a.nextSibling?n.insertBefore(t,a.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function o(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function l(e,t){var n,a,s;if(t.singleton){var r=h++;n=v||(v=o(t)),a=c.bind(null,n,r,!1),s=c.bind(null,n,r,!0)}else n=o(t),a=d.bind(null,n),s=function(){i(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else s()}}function c(e,t,n,a){var s=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=C(t,s);else{var r=document.createTextNode(s),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(r,i[t]):e.appendChild(r)}}function d(e,t){var n=t.css,a=t.media,s=t.sourceMap;if(a&&e.setAttribute("media",a),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},f=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=p(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,h=0,x=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=f()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=s(e);return a(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var o=n[i],l=u[o.id];l.refs--,r.push(l)}if(e){var c=s(e);a(c,t)}for(var i=0;i<r.length;i++){var l=r[i];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete u[l.id]}}}};var C=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,n,a){var s,r=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(s=e,r=e.default);var o="function"==typeof r?r.options:r;if(t&&(o.render=t.render,o.staticRenderFns=t.staticRenderFns),n&&(o._scopeId=n),a){var l=o.computed||(o.computed={});Object.keys(a).forEach(function(e){var t=a[e];l[e]=function(){return t}})}return{esModule:s,exports:r,options:o}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{pageCount:{type:Number,required:!0},initialPage:{type:Number,default:0},forcePage:{type:Number},clickHandler:{type:Function,default:function(){}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},containerClass:{type:String},pageClass:{type:String},pageLinkClass:{type:String},prevClass:{type:String},prevLinkClass:{type:String},nextClass:{type:String},nextLinkClass:{type:String},noLiSurround:{type:Boolean,default:!1}},data:function(){return{selected:this.initialPage}},beforeUpdate:function(){void 0!==this.forcePage&&this.forcePage!==this.selected&&(this.selected=this.forcePage)},computed:{pages:function(){var e=this,t={};if(this.pageCount<=this.pageRange)for(var n=0;n<this.pageCount;n++){var a={index:n,content:n+1,selected:n===this.selected};t[n]=a}else!function(){var n=e.pageRange/2,a=e.pageRange-n;e.selected<n?(n=e.selected,a=e.pageRange-n):e.selected>e.pageCount-e.pageRange/2&&(a=e.pageCount-e.selected,n=e.pageRange-a);for(var s=function(s){var r={index:s,content:s+1,selected:s===e.selected};if(s<=e.marginPages-1||s>=e.pageCount-e.marginPages)return void(t[s]=r);var i={content:"...",disabled:!0};e.selected-n>e.marginPages&&t[e.marginPages]!==i&&(t[e.marginPages]=i),e.selected+a<e.pageCount-e.marginPages-1&&t[e.pageCount-e.marginPages-1]!==i&&(t[e.pageCount-e.marginPages-1]=i);var o=e.selected+a-e.pageCount+1;return o>0&&s===e.selected-n-o&&(t[s]=r),s>=e.selected-n&&s<=e.selected+a?void(t[s]=r):void 0},r=0;r<e.marginPages;r++)s(r);for(var i=e.pageCount-1;i>=e.pageCount-e.marginPages;i--)s(i);var o=0;e.selected-e.pageRange>0&&(o=e.selected-e.pageRange);var l=e.pageCount;e.selected+e.pageRange<e.pageCount&&(l=e.selected+e.pageRange);for(var c=o;c<l;c++)s(c)}();return t}},methods:{handlePageSelected:function(e){this.selected!==e&&(this.selected=e,this.clickHandler(this.selected+1))},prevPage:function(){this.selected<=0||(this.selected--,this.clickHandler(this.selected+1))},nextPage:function(){this.selected>=this.pageCount-1||(this.selected++,this.clickHandler(this.selected+1))},firstPageSelected:function(){return 0===this.selected},lastPageSelected:function(){return this.selected===this.pageCount-1||0===this.pageCount}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.noLiSurround?n("div",{class:e.containerClass},[n("a",{class:[e.prevLinkClass,{disabled:e.firstPageSelected()}],attrs:{tabindex:"0"},on:{click:function(t){e.prevPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.prevPage():null}}},[e._t("prevContent",[e._v(e._s(e.prevText))])],2),e._v(" "),e._l(e.pages,function(t){return[t.disabled?n("a",{class:[e.pageLinkClass,{active:t.selected,disabled:t.disabled}],attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):n("a",{class:[e.pageLinkClass,{active:t.selected,disabled:t.disabled}],attrs:{tabindex:"0"},on:{click:function(n){e.handlePageSelected(t.index)},keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13)?void e.handlePageSelected(t.index):null}}},[e._v("\n      "+e._s(t.content)+"\n    ")])]}),e._v(" "),n("a",{class:[e.nextLinkClass,{disabled:e.lastPageSelected()}],attrs:{tabindex:"0"},on:{click:function(t){e.nextPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.nextPage():null}}},[e._t("nextContent",[e._v(e._s(e.nextText))])],2)],2):n("ul",{class:e.containerClass},[n("li",{class:[e.prevClass,{disabled:e.firstPageSelected()}]},[n("a",{class:e.prevLinkClass,attrs:{tabindex:"0"},on:{click:function(t){e.prevPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.prevPage():null}}},[e._t("prevContent",[e._v(e._s(e.prevText))])],2)]),e._v(" "),e._l(e.pages,function(t){return n("li",{class:[e.pageClass,{active:t.selected,disabled:t.disabled}]},[t.disabled?n("a",{class:e.pageLinkClass,attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):n("a",{class:e.pageLinkClass,attrs:{tabindex:"0"},on:{click:function(n){e.handlePageSelected(t.index)},keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13)?void e.handlePageSelected(t.index):null}}},[e._v(e._s(t.content))])])}),e._v(" "),n("li",{class:[e.nextClass,{disabled:e.lastPageSelected()}]},[n("a",{class:e.nextLinkClass,attrs:{tabindex:"0"},on:{click:function(t){e.nextPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.nextPage():null}}},[e._t("nextContent",[e._v(e._s(e.nextText))])],2)])],2)},staticRenderFns:[]}}])});

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(240),
  /* template */
  __webpack_require__(245),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/ajaysingh/code/laravel/app/resources/assets/js/components/admin/users/Users.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Users.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ed4f708", Component.options)
  } else {
    hotAPI.reload("data-v-0ed4f708", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Errors__ = __webpack_require__(195);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Form = function () {
    /**
     * Create a new Form instance.
     *
     * @param {object} data
     */
    function Form(data) {
        _classCallCheck(this, Form);

        this.originalData = data;

        for (var field in data) {
            this[field] = data[field];
        }

        this.errors = new __WEBPACK_IMPORTED_MODULE_0__Errors__["a" /* default */]();
    }

    /**
     * Fetch all relevant data for the form.
     */


    _createClass(Form, [{
        key: 'data',
        value: function data() {
            var data = {};

            for (var property in this.originalData) {
                data[property] = this[property];
            }

            return data;
        }

        /**
         * Reset the form fields.
         */

    }, {
        key: 'reset',
        value: function reset() {
            for (var field in this.originalData) {
                this[field] = '';
            }

            this.errors.clear();
        }

        /**
         * Send a POST request to the given URL.
         * .
         * @param {string} url
         */

    }, {
        key: 'post',
        value: function post(url) {
            return this.submit('post', url);
        }

        /**
         * Send a PUT request to the given URL.
         * .
         * @param {string} url
         */

    }, {
        key: 'put',
        value: function put(url) {
            return this.submit('put', url);
        }

        /**
         * Send a PATCH request to the given URL.
         * .
         * @param {string} url
         */

    }, {
        key: 'patch',
        value: function patch(url) {
            return this.submit('patch', url);
        }

        /**
         * Send a DELETE request to the given URL.
         * .
         * @param {string} url
         */

    }, {
        key: 'delete',
        value: function _delete(url) {
            return this.submit('delete', url);
        }

        /**
         * Submit the form.
         *
         * @param {string} requestType
         * @param {string} url
         */

    }, {
        key: 'submit',
        value: function submit(requestType, url) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                axios[requestType](url, _this.data()).then(function (response) {
                    _this.onSuccess(response.data);

                    resolve(response.data);
                }).catch(function (error) {
                    _this.onFail(error.response.data);

                    reject(error.response.data);
                });
            });
        }

        /**
         * Handle a successful form submission.
         *
         * @param {object} data
         */

    }, {
        key: 'onSuccess',
        value: function onSuccess(data) {}
        // this.reset();


        /**
         * Handle a failed form submission.
         *
         * @param {object} errors
         */

    }, {
        key: 'onFail',
        value: function onFail(errors) {
            this.errors.record(errors);
        }
    }]);

    return Form;
}();

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Errors = function () {
    /**
     * Create a new Errors instance.
     */
    function Errors() {
        _classCallCheck(this, Errors);

        this.errors = {};
    }

    /**
     * Determine if an errors exists for the given field.
     *
     * @param {string} field
     */


    _createClass(Errors, [{
        key: "has",
        value: function has(field) {
            return this.errors.hasOwnProperty(field);
        }

        /**
         * Determine if we have any errors.
         */

    }, {
        key: "any",
        value: function any() {
            return Object.keys(this.errors).length > 0;
        }

        /**
         * Retrieve the error message for a field.
         *
         * @param {string} field
         */

    }, {
        key: "get",
        value: function get(field) {
            if (this.errors[field]) {
                return this.errors[field][0];
            }
        }

        /**
         * Record the new errors.
         *
         * @param {object} errors
         */

    }, {
        key: "record",
        value: function record(errors) {
            this.errors = errors;
        }

        /**
         * Clear one or all error fields.
         *
         * @param {string|null} field
         */

    }, {
        key: "clear",
        value: function clear(field) {
            if (field) {
                delete this.errors[field];

                return;
            }

            this.errors = {};
        }
    }]);

    return Errors;
}();

/* harmony default export */ __webpack_exports__["a"] = (Errors);

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

module.exports = {
            current_page: null,
            first_page: 1,
            last_page: null,
            total: null,
            next_page_url: null,
            prev_page_url: null
};

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(198),
  /* template */
  __webpack_require__(199),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/ajaysingh/code/laravel/app/resources/assets/js/components/Paginator.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Paginator.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2cf054d0", Component.options)
  } else {
    hotAPI.reload("data-v-2cf054d0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eventHub__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eventHub___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__eventHub__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuejs_paginate__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuejs_paginate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuejs_paginate__);
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['pageInfo'],
    mounted: function mounted() {},

    components: {
        paginate: __WEBPACK_IMPORTED_MODULE_1_vuejs_paginate___default.a
    },
    computed: {
        pages: function pages() {
            var pages = [];
            for (var i = 1; i <= this.totalPages; i++) {
                pages.push(i);
            }
            return pages;
        },
        totalPages: function totalPages() {
            return this.pageInfo.total_pages || this.pageInfo.last_page;
        }
    },
    methods: {
        prev: function prev() {
            if (this.pageInfo.current_page == 1) {
                return 0;
            }
            var page = this.pageInfo.current_page - 1;
            __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$emit('load-page', page);
        },
        next: function next() {
            if (this.pageInfo.current_page == this.totalPages) {
                return 0;
            }
            var page = this.pageInfo.current_page + 1;
            __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$emit('load-page', page);
        },
        loadPage: function loadPage(page) {
            __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$emit('load-page', page);
        }
    }
});

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.totalPages) ? _c('div', [_c('paginate', {
    attrs: {
      "page-count": _vm.totalPages,
      "click-handler": _vm.loadPage,
      "prev-text": 'Prev',
      "next-text": 'Next',
      "container-class": 'Page pagination'
    }
  }, [_vm._v("\n        >\n    ")])], 1) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2cf054d0", module.exports)
  }
}

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form_Form__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eventHub__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eventHub___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__eventHub__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empty_User__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empty_User___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__empty_User__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__empty_PageInfo__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__empty_PageInfo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__empty_PageInfo__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            users: [],
            loadCount: 0,
            loading: false,
            printList: [],
            search: '',
            order: 'latest',
            records: 100,
            pageInfo: __WEBPACK_IMPORTED_MODULE_3__empty_PageInfo___default.a,
            edit: new __WEBPACK_IMPORTED_MODULE_0__Form_Form__["a" /* default */](__WEBPACK_IMPORTED_MODULE_2__empty_User___default.a),
            editIndex: '',
            scope: '/admin',
            scopeApi: '/api/admin'

        };
    },

    components: {
        user: __webpack_require__(242),
        paginator: __webpack_require__(197)

    },
    mounted: function mounted() {
        this.loadUsers();
        __WEBPACK_IMPORTED_MODULE_1__eventHub___default.a.$on('load-page', this.reload);
        __WEBPACK_IMPORTED_MODULE_1__eventHub___default.a.$on('edit-user', this.editUser);
    },

    methods: {
        loadUsers: function loadUsers() {
            var _this = this;

            axios.get('/api/admin/users').then(function (res) {
                _this.users = res.data.data;
                _this.updatePageInfo(res.data);
            }).catch(function (err) {
                _this.showAlert('somthing went wrong');
            });
        },
        loadingComplete: function loadingComplete() {
            this.loading = false;
        },
        loadingFail: function loadingFail() {
            this.loading = false;
            alert('Loading Failed');
        },
        updatePageInfo: function updatePageInfo(info) {
            this.pageInfo = info.meta.pagination;
        },
        reload: function reload(page) {
            var _this2 = this;

            axios.get('/api/admin/users?search=' + this.search + '&records=' + this.records + '&page=' + page).then(function (res) {
                _this2.users = res.data.data;
                _this2.updatePageInfo(res.data);
            }).catch(function (err) {
                alert(err);
            });
        },
        reloadFromFirstPage: function reloadFromFirstPage() {
            var _this3 = this;

            axios.get('/api/admin/users?search=' + this.search + '&records=' + this.records).then(function (res) {
                _this3.users = res.data.data;
                _this3.updatePageInfo(res.data);
            }).catch(function (err) {
                alert(err);
            });
        },
        editUser: function editUser(userId) {
            this.editIndex = this.users.map(function (x) {
                return x.id;
            }).indexOf(userId);
            this.copyToEdit(this.users[this.editIndex]);
            $('#edit-user').modal('show');
        },
        copyToEdit: function copyToEdit(user) {
            this.edit.id = user.id;
            this.edit.name = user.name;
            this.edit.email = user.email;
            this.edit.uid = user.uid;
            this.edit.activated = user.activated;
            this.edit.type = user.type;
            this.edit.expire_at = user.expire_at;
            this.edit.totalReceipts = user.totalReceipts;
        },
        copyFromEdit: function copyFromEdit() {
            var user = this.users[this.editIndex];

            user.id = this.edit.id;
            user.name = this.edit.name;
            user.email = this.edit.email;
            user.uid = this.edit.uid;
            user.activated = this.edit.activated;
            user.type = this.edit.type;
            user.expire_at = this.edit.expire_at;
            user.totalReceipts = this.edit.totalReceipts;
        },
        update: function update() {
            var _this4 = this;

            this.loading = true;
            this.edit.post(this.scopeApi + '/users/' + this.edit.id + '/update').then(function (res) {
                _this4.loading = false;
                _this4.copyFromEdit();

                $('#edit-user').modal('hide');

                _this4.$notify({
                    group: 'notice',
                    type: 'success',
                    title: 'Action successful',
                    text: "Receipt edited <b>successfully</b>",
                    duration: 10000,
                    speed: 1000
                });
            }).catch(function (err) {
                _this4.loading = false;
                var message = [];
                for (var name in _this4.edit.errors.errors) {
                    console.log(name);
                    message.push(_this4.edit.errors.get(name));
                }
                console.log;
                _this4.$notify({
                    group: 'notice',
                    type: 'error',
                    title: 'Error ',
                    text: "Can't complete the action as something went <b>wrong</b>",
                    duration: 10000,
                    speed: 1000
                });
            });
        }
    }
});

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

module.exports = {
	id: '',
	name: '',
	email: '',
	uid: '',
	type: '',
	expire_at: '',
	totalReceipts: '',
	create_at: '',
	activated: ''
};

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(243),
  /* template */
  __webpack_require__(244),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/ajaysingh/code/laravel/app/resources/assets/js/components/admin/users/User.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] User.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-51dc4d0a", Component.options)
  } else {
    hotAPI.reload("data-v-51dc4d0a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eventHub__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eventHub___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__eventHub__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            addToPrintList: false,
            localUser: ''
        };
    },

    props: ['user'],
    computed: {
        createdAt: function createdAt() {
            return __WEBPACK_IMPORTED_MODULE_0_moment___default.a(this.user.created_at).format("MMM Do YY");
        },
        expireAt: function expireAt() {
            return __WEBPACK_IMPORTED_MODULE_0_moment___default.a(this.user.expire_at).format("MMM Do YY");
        },
        active: function active() {
            return this.user.activated;
        }
    },
    mounted: function mounted() {
        this.localUser = this.user;
    },

    methods: {
        edit: function edit() {
            __WEBPACK_IMPORTED_MODULE_1__eventHub___default.a.$emit('edit-user', this.user.id);
        },
        deactivateUser: function deactivateUser() {
            var _this = this;

            axios.get('/api/admin/users/' + this.user.id + '/deactivate').then(function (res) {
                _this.user.activated = false;
                _this.$notify({
                    group: 'notice',
                    type: 'success',
                    title: 'Action Successful',
                    text: 'User is successfully <b> deactivated </b>',
                    duration: 10000,
                    speed: 1000

                });
            }).catch(function (err) {
                _this.$notify({
                    group: 'notice',
                    type: 'error',
                    title: 'Error ',
                    text: "Can't complete the action as something went <b>wrong</b>",
                    duration: 10000,
                    speed: 1000
                });
            });
        },
        activateUser: function activateUser() {
            var _this2 = this;

            axios.get('/api/admin/users/' + this.user.id + '/activate').then(function (res) {
                _this2.user.activated = true;
                _this2.$notify({
                    group: 'notice',
                    type: 'success',
                    title: 'Action Successful',
                    text: 'User is successfully <b> activated </b>',
                    duration: 10000,
                    speed: 1000
                });
            }).catch(function (err) {
                _this2.$notify({
                    group: 'notice',
                    type: 'error',
                    title: 'Error ',
                    text: "Can't complete the action as something went <b>wrong</b>",
                    duration: 10000,
                    speed: 1000
                });
            });
        },
        userSendToReceipts: function userSendToReceipts() {
            window.location.href = '/admin/users/' + this.user.id + '/receipts';
        }
    }
});

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('td', {
    domProps: {
      "textContent": _vm._s(_vm.user.uid)
    }
  }), _vm._v(" "), _c('td', {
    domProps: {
      "textContent": _vm._s(_vm.user.name)
    }
  }), _vm._v(" "), _c('td', {
    domProps: {
      "textContent": _vm._s(_vm.user.email)
    }
  }), _vm._v(" "), _c('td', {
    domProps: {
      "textContent": _vm._s(_vm.user.type)
    }
  }), _vm._v(" "), _c('td', {
    domProps: {
      "textContent": _vm._s(_vm.user.totalReceipts)
    }
  }), _vm._v(" "), _c('td', [_c('a', {
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.userSendToReceipts($event)
      }
    }
  }, [_vm._v("Receipts..")])]), _vm._v(" "), _c('td', {
    domProps: {
      "textContent": _vm._s(_vm.createdAt)
    }
  }), _vm._v(" "), _c('td', {
    domProps: {
      "textContent": _vm._s(_vm.expireAt)
    }
  }), _vm._v(" "), _c('td', [(_vm.active) ? _c('span', {
    staticClass: "text-success"
  }, [_vm._v("Active")]) : _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("Deavtive")])]), _vm._v(" "), _c('td', [_c('button', {
    staticClass: "btn btn-primary btn-sm",
    on: {
      "click": _vm.edit
    }
  }, [_vm._v("Edit")]), _vm._v(" "), (_vm.active) ? _c('button', {
    staticClass: "btn btn-danger btn-sm",
    on: {
      "click": _vm.deactivateUser
    }
  }, [_vm._v("Deavtivate")]) : _c('button', {
    staticClass: "btn btn-success btn-sm",
    on: {
      "click": _vm.activateUser
    }
  }, [_vm._v("Activate")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-51dc4d0a", module.exports)
  }
}

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('notifications', {
    attrs: {
      "group": "notice",
      "classes": "vue-notification z-index"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.reloadFromFirstPage($event)
      }
    }
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.search),
      expression: "search"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Search for..."
    },
    domProps: {
      "value": (_vm.search)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.search = $event.target.value
      }
    }
  }), _vm._v(" "), _vm._m(0)])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4 col-xs-6 col-xs-offset-0 col-sm-offset-2"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_vm._m(1), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.records),
      expression: "records"
    }],
    staticClass: "form-control",
    on: {
      "change": [function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.records = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }, _vm.reloadFromFirstPage]
    }
  }, [_c('option', {
    attrs: {
      "value": "5"
    }
  }, [_vm._v("5")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "10"
    }
  }, [_vm._v("10")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "25"
    }
  }, [_vm._v("25")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "50"
    }
  }, [_vm._v("50")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "100"
    }
  }, [_vm._v("100")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "250"
    }
  }, [_vm._v("250")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "500"
    }
  }, [_vm._v("500")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1000"
    }
  }, [_vm._v("1000")])])])])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered"
  }, [_c('tbody', [_vm._m(2), _vm._v(" "), _vm._l((_vm.users), function(user) {
    return _c('user', {
      key: user.id,
      attrs: {
        "user": user
      }
    })
  })], 2)])]), _vm._v(" "), _c('paginator', {
    attrs: {
      "page-info": _vm.pageInfo
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('span', {
    staticClass: "btn btn-primary"
  }, [_vm._v("Print\n            "), (_vm.printList.length) ? _c('span', {
    domProps: {
      "textContent": _vm._s('(' + _vm.printList.length + ')')
    }
  }) : _vm._e()])]), _vm._v(" "), _c('iframe', {
    staticClass: "hide",
    attrs: {
      "id": "print-frame",
      "name": "frame",
      "src": "",
      "frameborder": "0"
    },
    on: {
      "load": _vm.loadingComplete
    }
  }), _vm._v(" "), (_vm.loading) ? _c('div', {
    staticClass: "overlay"
  }, [_c('loader', {
    attrs: {
      "color": "#337ab7"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "edit-user",
      "tabindex": "-1",
      "role": "dialog"
    }
  }, [_c('div', {
    staticClass: "modal-dialog",
    attrs: {
      "role": "document"
    }
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('form', {
    staticClass: "form-horizontal"
  }, [_c('h3', [_vm._v("User Info")]), _vm._v(" "), _c('div', {}, [_c('div', {
    staticClass: "col-xs-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "user-uid"
    }
  }, [_vm._v("User Uid")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.edit.uid),
      expression: "edit.uid"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "user-uid",
      "disabled": ""
    },
    domProps: {
      "value": (_vm.edit.uid)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.edit.uid = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {}, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "user-name"
    }
  }, [_vm._v("User Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.edit.name),
      expression: "edit.name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "user-name",
      "placeholder": "User Name"
    },
    domProps: {
      "value": (_vm.edit.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.edit.name = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "user-email"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.edit.email),
      expression: "edit.email"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "user-email",
      "placeholder": "Sender Email"
    },
    domProps: {
      "value": (_vm.edit.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.edit.email = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {}, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "user-type"
    }
  }, [_vm._v("Type")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.edit.type),
      expression: "edit.type"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "user-type"
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.edit.type = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "user"
    }
  }, [_vm._v("User")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "retailer"
    }
  }, [_vm._v("Retailer")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "wholesaler"
    }
  }, [_vm._v("Wholesaler")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "manufacturer"
    }
  }, [_vm._v("Manufacturer")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "total-receipts"
    }
  }, [_vm._v("Total Receipts")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.edit.totalReceipts),
      expression: "edit.totalReceipts"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "total-receipts",
      "placeholder": "Sender Postcode",
      "disabled": ""
    },
    domProps: {
      "value": (_vm.edit.totalReceipts)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.edit.totalReceipts = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {}, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "status"
    }
  }, [_vm._v("Status")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "status",
      "disabled": ""
    },
    domProps: {
      "value": _vm.edit.activated ? 'Active' : 'Deactive'
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "total-receipts"
    }
  }, [_vm._v("Expire At")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.edit.expire_at),
      expression: "edit.expire_at"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date",
      "id": "total-receipts",
      "placeholder": "Sender Postcode"
    },
    domProps: {
      "value": (_vm.edit.expire_at)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.edit.expire_at = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.update
    }
  }, [_vm._v("Save changes")])])])])])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "input-group-btn"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Go!")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "input-group-btn"
  }, [_c('button', {
    staticClass: "btn btn-default ",
    attrs: {
      "type": "button"
    }
  }, [_c('span', {
    staticClass: "small"
  }, [_vm._v("RECORDS")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('th', [_vm._v("Uid")]), _vm._v(" "), _c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Email")]), _vm._v(" "), _c('th', [_vm._v("Type")]), _vm._v(" "), _c('th', [_vm._v("Total Receipts")]), _vm._v(" "), _c('th', [_vm._v("Go To")]), _vm._v(" "), _c('th', [_vm._v("Account Created At")]), _vm._v(" "), _c('th', [_vm._v("Expire At")]), _vm._v(" "), _c('th', [_vm._v("Status")]), _vm._v(" "), _c('td', [_vm._v("Actions")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal-header"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }
  }, [_c('span', {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])]), _vm._v(" "), _c('h4', {
    staticClass: "modal-title"
  }, [_vm._v("Edit User")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0ed4f708", module.exports)
  }
}

/***/ })

});