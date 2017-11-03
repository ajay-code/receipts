webpackJsonp([0],{

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(248),
  /* template */
  __webpack_require__(254),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/ajaysingh/code/laravel/app/resources/assets/js/components/admin/receipts/UserReceipts.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UserReceipts.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-132c0341", Component.options)
  } else {
    hotAPI.reload("data-v-132c0341", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Errors__ = __webpack_require__(196);
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

/***/ 196:
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

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(198),
  /* template */
  __webpack_require__(200),
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuejs_paginate__ = __webpack_require__(199);
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

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VuejsPaginate=t():e.VuejsPaginate=t()}(this,function(){return function(e){function t(a){if(n[a])return n[a].exports;var s=n[a]={exports:{},id:a,loaded:!1};return e[a].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var s=n(1),r=a(s);e.exports=r.default},function(e,t,n){n(2);var a=n(6)(n(7),n(8),"data-v-82963a40",null);e.exports=a.exports},function(e,t,n){var a=n(3);"string"==typeof a&&(a=[[e.id,a,""]]);n(5)(a,{});a.locals&&(e.exports=a.locals)},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,"a[data-v-82963a40]{cursor:pointer}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},s=0;s<this.length;s++){var r=this[s][0];"number"==typeof r&&(a[r]=!0)}for(s=0;s<t.length;s++){var i=t[s];"number"==typeof i[0]&&a[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t,n){function a(e,t){for(var n=0;n<e.length;n++){var a=e[n],s=u[a.id];if(s){s.refs++;for(var r=0;r<s.parts.length;r++)s.parts[r](a.parts[r]);for(;r<a.parts.length;r++)s.parts.push(l(a.parts[r],t))}else{for(var i=[],r=0;r<a.parts.length;r++)i.push(l(a.parts[r],t));u[a.id]={id:a.id,refs:1,parts:i}}}}function s(e){for(var t=[],n={},a=0;a<e.length;a++){var s=e[a],r=s[0],i=s[1],o=s[2],l=s[3],c={css:i,media:o,sourceMap:l};n[r]?n[r].parts.push(c):t.push(n[r]={id:r,parts:[c]})}return t}function r(e,t){var n=g(),a=x[x.length-1];if("top"===e.insertAt)a?a.nextSibling?n.insertBefore(t,a.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function o(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function l(e,t){var n,a,s;if(t.singleton){var r=h++;n=v||(v=o(t)),a=c.bind(null,n,r,!1),s=c.bind(null,n,r,!0)}else n=o(t),a=d.bind(null,n),s=function(){i(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else s()}}function c(e,t,n,a){var s=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=C(t,s);else{var r=document.createTextNode(s),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(r,i[t]):e.appendChild(r)}}function d(e,t){var n=t.css,a=t.media,s=t.sourceMap;if(a&&e.setAttribute("media",a),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},f=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=p(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,h=0,x=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=f()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=s(e);return a(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var o=n[i],l=u[o.id];l.refs--,r.push(l)}if(e){var c=s(e);a(c,t)}for(var i=0;i<r.length;i++){var l=r[i];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete u[l.id]}}}};var C=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,n,a){var s,r=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(s=e,r=e.default);var o="function"==typeof r?r.options:r;if(t&&(o.render=t.render,o.staticRenderFns=t.staticRenderFns),n&&(o._scopeId=n),a){var l=o.computed||(o.computed={});Object.keys(a).forEach(function(e){var t=a[e];l[e]=function(){return t}})}return{esModule:s,exports:r,options:o}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{pageCount:{type:Number,required:!0},initialPage:{type:Number,default:0},forcePage:{type:Number},clickHandler:{type:Function,default:function(){}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},containerClass:{type:String},pageClass:{type:String},pageLinkClass:{type:String},prevClass:{type:String},prevLinkClass:{type:String},nextClass:{type:String},nextLinkClass:{type:String},noLiSurround:{type:Boolean,default:!1}},data:function(){return{selected:this.initialPage}},beforeUpdate:function(){void 0!==this.forcePage&&this.forcePage!==this.selected&&(this.selected=this.forcePage)},computed:{pages:function(){var e=this,t={};if(this.pageCount<=this.pageRange)for(var n=0;n<this.pageCount;n++){var a={index:n,content:n+1,selected:n===this.selected};t[n]=a}else!function(){var n=e.pageRange/2,a=e.pageRange-n;e.selected<n?(n=e.selected,a=e.pageRange-n):e.selected>e.pageCount-e.pageRange/2&&(a=e.pageCount-e.selected,n=e.pageRange-a);for(var s=function(s){var r={index:s,content:s+1,selected:s===e.selected};if(s<=e.marginPages-1||s>=e.pageCount-e.marginPages)return void(t[s]=r);var i={content:"...",disabled:!0};e.selected-n>e.marginPages&&t[e.marginPages]!==i&&(t[e.marginPages]=i),e.selected+a<e.pageCount-e.marginPages-1&&t[e.pageCount-e.marginPages-1]!==i&&(t[e.pageCount-e.marginPages-1]=i);var o=e.selected+a-e.pageCount+1;return o>0&&s===e.selected-n-o&&(t[s]=r),s>=e.selected-n&&s<=e.selected+a?void(t[s]=r):void 0},r=0;r<e.marginPages;r++)s(r);for(var i=e.pageCount-1;i>=e.pageCount-e.marginPages;i--)s(i);var o=0;e.selected-e.pageRange>0&&(o=e.selected-e.pageRange);var l=e.pageCount;e.selected+e.pageRange<e.pageCount&&(l=e.selected+e.pageRange);for(var c=o;c<l;c++)s(c)}();return t}},methods:{handlePageSelected:function(e){this.selected!==e&&(this.selected=e,this.clickHandler(this.selected+1))},prevPage:function(){this.selected<=0||(this.selected--,this.clickHandler(this.selected+1))},nextPage:function(){this.selected>=this.pageCount-1||(this.selected++,this.clickHandler(this.selected+1))},firstPageSelected:function(){return 0===this.selected},lastPageSelected:function(){return this.selected===this.pageCount-1||0===this.pageCount}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.noLiSurround?n("div",{class:e.containerClass},[n("a",{class:[e.prevLinkClass,{disabled:e.firstPageSelected()}],attrs:{tabindex:"0"},on:{click:function(t){e.prevPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.prevPage():null}}},[e._t("prevContent",[e._v(e._s(e.prevText))])],2),e._v(" "),e._l(e.pages,function(t){return[t.disabled?n("a",{class:[e.pageLinkClass,{active:t.selected,disabled:t.disabled}],attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):n("a",{class:[e.pageLinkClass,{active:t.selected,disabled:t.disabled}],attrs:{tabindex:"0"},on:{click:function(n){e.handlePageSelected(t.index)},keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13)?void e.handlePageSelected(t.index):null}}},[e._v("\n      "+e._s(t.content)+"\n    ")])]}),e._v(" "),n("a",{class:[e.nextLinkClass,{disabled:e.lastPageSelected()}],attrs:{tabindex:"0"},on:{click:function(t){e.nextPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.nextPage():null}}},[e._t("nextContent",[e._v(e._s(e.nextText))])],2)],2):n("ul",{class:e.containerClass},[n("li",{class:[e.prevClass,{disabled:e.firstPageSelected()}]},[n("a",{class:e.prevLinkClass,attrs:{tabindex:"0"},on:{click:function(t){e.prevPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.prevPage():null}}},[e._t("prevContent",[e._v(e._s(e.prevText))])],2)]),e._v(" "),e._l(e.pages,function(t){return n("li",{class:[e.pageClass,{active:t.selected,disabled:t.disabled}]},[t.disabled?n("a",{class:e.pageLinkClass,attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):n("a",{class:e.pageLinkClass,attrs:{tabindex:"0"},on:{click:function(n){e.handlePageSelected(t.index)},keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13)?void e.handlePageSelected(t.index):null}}},[e._v(e._s(t.content))])])}),e._v(" "),n("li",{class:[e.nextClass,{disabled:e.lastPageSelected()}]},[n("a",{class:e.nextLinkClass,attrs:{tabindex:"0"},on:{click:function(t){e.nextPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.nextPage():null}}},[e._t("nextContent",[e._v(e._s(e.nextText))])],2)])],2)},staticRenderFns:[]}}])});

/***/ }),

/***/ 200:
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

/***/ 201:
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

/***/ 202:
/***/ (function(module, exports) {

var _module$exports;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = (_module$exports = {
    receiver_address: false,
    receiver_email: false,
    receiver_name: false,
    receiver_phone: false,
    receiver_product: false,
    amount: false,
    product_cost: false,
    postage_cost: false,
    sender_id: false,
    sender_email: false,
    sender_name: false,
    sender_phone: false,
    tracking: false
}, _defineProperty(_module$exports, "receiver_product", false), _defineProperty(_module$exports, "receiver_postcode", false), _module$exports);

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form_Form__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eventHub__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eventHub___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__eventHub__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__empty_PageInfo__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__empty_PageInfo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__empty_PageInfo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__empty_ReceiptSearchFor__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__empty_ReceiptSearchFor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__empty_ReceiptSearchFor__);





/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            receipts: [],
            loadCount: 0,
            printList: [],
            selectAllReceipts: false,
            records: 100,
            from: __WEBPACK_IMPORTED_MODULE_0_moment___default.a().subtract(1, 'months').format('YYYY-MM-DD'),
            to: __WEBPACK_IMPORTED_MODULE_0_moment___default.a().format('YYYY-MM-DD'),
            search: '',
            searchFor: __WEBPACK_IMPORTED_MODULE_4__empty_ReceiptSearchFor___default.a,
            pageInfo: __WEBPACK_IMPORTED_MODULE_3__empty_PageInfo___default.a,
            editIndex: '',
            scope: '',
            scopeApi: '/api'
        };
    },

    props: {
        admin: {
            type: Boolean
        }
    },
    created: function created() {
        if (this.admin) {
            this.scope = '/admin';
            this.scopeApi = '/api/admin';
        }
    },
    mounted: function mounted() {
        this.loadReceipts();
        __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$on('print-single-receipt', this.printSingleReceipt);
        __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$on('add-to-print-list', this.addToPrintList);
        __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$on('remove-from-print-list', this.removeFromPrintList);
        __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$on('load-page', this.reload);
        __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$on('edit-receipt', this.editReceipt);
        __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$on('delete-receipt', this.deleteReceipt);
    },

    methods: {
        loadReceipts: function loadReceipts() {
            var _this = this;

            axios.post(this.scopeApi + '/receipts', {
                from: this.from,
                to: this.to
            }).then(function (res) {
                _this.receipts = res.data.data;
                _this.updatePageInfo(res.data);
            }).catch(function (err) {
                _this.sendErrorNotice();
            });
        },
        reload: function reload(page) {
            var _this2 = this;

            axios.post(this.scopeApi + '/receipts', {
                searchFor: this.searchFor,
                search: this.search,
                records: this.records,
                from: this.from,
                to: this.to,
                page: page
            }).then(function (res) {
                _this2.receipts = res.data.data;
                _this2.updatePageInfo(res.data);
            }).catch(function (err) {
                _this2.sendErrorNotice();
            });
        },
        reloadFromFirstPage: function reloadFromFirstPage() {
            var _this3 = this;

            axios.post(this.scopeApi + '/receipts', {
                searchFor: this.searchFor,
                search: this.search,
                records: this.records,
                from: this.from,
                to: this.to
            }).then(function (res) {
                _this3.receipts = res.data.data;
                _this3.updatePageInfo(res.data);
            }).catch(function (err) {
                _this3.sendErrorNotice();
            });
        },
        deleteReceipt: function deleteReceipt(ReceiptId) {
            var _this4 = this;

            axios.get(this.scopeApi + '/receipts/delete/' + ReceiptId).then(function (res) {
                _this4.sendSuccessNotice('Receipt Deleted Successfully');
                var index = _this4.receipts.map(function (x) {
                    return x.id;
                }).indexOf(ReceiptId);
                _this4.receipts.splice(index, 1);
            }).catch(function (err) {
                _this4.sendErrorNotice();
            });
        },
        deleteMultipleReceipts: function deleteMultipleReceipts() {
            var _this5 = this;

            if (!this.printList.length) {
                this.sendErrorNotice('Please Select At Least One Reeipt');
                return;
            }
            axios.post(this.scopeApi + '/receipts/delete', {
                receipts: this.printList
            }).then(function (res) {
                _this5.sendSuccessNotice('Receipt Deleted Successfully');
                _this5.printList.forEach(function (ReceiptId) {
                    var index = _this5.receipts.map(function (x) {
                        return x.id;
                    }).indexOf(ReceiptId);
                    _this5.receipts.splice(index, 1);
                });
                _this5.clearPrintList();
            }).catch(function (err) {
                _this5.sendErrorNotice();
            });
        },
        printSingleReceipt: function printSingleReceipt(receiptId) {
            var _this6 = this;

            __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$emit('start-loading');
            axios.get(this.scope + '/receipts/print/' + receiptId).then(function (res) {
                _this6.loadSinglePdf(res.data.pdfName);
            });
        },
        loadSinglePdf: function loadSinglePdf(pdf) {
            var url = '';
            if (window.isMobile()) {
                url = '/pdf/' + pdf + '/download';
                __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$emit('stop-loading');
            } else {
                url = '/pdf/' + pdf;
            }
            $('#print-frame').attr('src', url);
        },
        loadingComplete: function loadingComplete() {
            if (!window.isMobile()) {
                __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$emit('stop-loading');
                if (this.loadCount !== 0) {
                    console.log(this.loadCount);
                    window.frames['frame'].print();
                    this.loadCount++;
                }
                this.loadCount++;
            }
        },
        loadingFail: function loadingFail() {
            __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$emit('stop-loading');
            this.sendErrorNotice('Loading Failed');
        },
        addToPrintList: function addToPrintList(receiptId) {
            if (this.printList.indexOf(receiptId) === -1) {
                this.printList.push(receiptId);
            }
        },
        removeFromPrintList: function removeFromPrintList(receiptId) {
            var index = this.printList.indexOf(receiptId);
            this.printList.splice(index, 1);
        },
        print: function print() {
            var _this7 = this;

            if (this.printList.length) {
                __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$emit('start-loading');
                axios.post(this.scope + '/receipts/print', {
                    receipts: this.printList
                }).then(function (res) {
                    _this7.loadSinglePdf(res.data.pdfName);
                });
            } else {
                this.sendErrorNotice('please select atleast on receipt');
            }
        },
        updatePageInfo: function updatePageInfo(info) {
            this.pageInfo.current_page = info.current_page;
            this.pageInfo.last_page = info.last_page;
            this.pageInfo.total = info.total;
            this.pageInfo.next_page_url = info.next_page_url;
            this.pageInfo.prev_page_url = info.prev_page_url;
        },
        editReceipt: function editReceipt(ReceiptId) {
            this.editIndex = this.receipts.map(function (x) {
                return x.id;
            }).indexOf(ReceiptId);
            this.test++;
            console.log(this.test);
            __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$emit('edit', this.receipts[this.editIndex]);
        },
        updateReceipt: function updateReceipt(EditedReceipt) {
            var receipt = this.receipts[this.editIndex];
            for (var property in receipt) {
                if (property.includes('address')) {
                    receipt[property] = EditedReceipt[property].replace("\n", '|');
                } else {
                    receipt[property] = EditedReceipt[property];
                }
            }
        },
        update: function update() {
            var _this8 = this;

            __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$emit('start-loading');
            this.edit.post(this.scope + '/receipts/' + this.edit.id).then(function (res) {
                __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$emit('stop-loading');
                _this8.copyFromEdit();
                $('#edit-receipt').modal('hide');
                _this8.sendSuccessNotice('Receipt successfully edited');
            }).catch(function (err) {
                __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$emit('stop-loading');
                var message = '<ul>';
                for (var name in _this8.edit.errors.errors) {
                    console.log(name);
                    message += '<li>' + _this8.edit.errors.get(name) + '</li>';
                }
                message += '</ul>';
                _this8.sendErrorNotice(message);
            });
        },
        clearPrintList: function clearPrintList() {
            __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$emit('clear-every-receipt');
            this.printList = [];
        },
        downloadCsv: function downloadCsv() {
            if (this.printList.length) {
                __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$emit('start-loading');
                var inputs = '';
                this.printList.forEach(function (element) {
                    inputs += '<input name="receipts[]" value="' + element + '">';
                }, this);
                jQuery('<form action="' + this.scope + '/receipts/csv" method="post" target="csv-frame">\n                            <input name="_token" value="' + Laravel.csrfToken + '">\n                            ' + inputs + '\n                        </form>').appendTo('body').submit().remove();
                __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$emit('stop-loading');
            } else {
                this.sendErrorNotice('please select atleast on receipt');
            }
        },
        selectAll: function selectAll() {
            if (this.selectAllReceipts) {
                for (var receipt in this.receipts) {
                    __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$emit('select-' + this.receipts[receipt].id);
                }
            } else {
                for (var _receipt in this.receipts) {
                    __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$emit('deselect-' + this.receipts[_receipt].id);
                }
            }
        },
        sendErrorNotice: function sendErrorNotice(message) {
            message = message || 'Something Went Wrong';
            this.$notify({
                group: 'notice',
                type: 'error',
                title: 'Error ',
                text: message,
                duration: 5000,
                speed: 1000
            });
        },
        sendSuccessNotice: function sendSuccessNotice(message) {
            message = message || 'Action Was Persormed Successfully';
            this.$notify({
                group: 'notice',
                type: 'success',
                title: 'Success ',
                text: message,
                duration: 5000,
                speed: 1000
            });
        }
    }
});

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

var _module$exports;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = (_module$exports = {
	created_at: "",
	id: '',
	receiver_address: "",
	receiver_email: "",
	receiver_name: "",
	receiver_phone: "",
	receiver_postcode: "",
	receiver_product: "",
	sender_address: "",
	amount: "",
	product_cost: "",
	postage_cost: "",
	sender_id: "",
	sender_email: "",
	sender_name: "",
	sender_phone: "",
	sender_postcode: "",
	tracking: ""
}, _defineProperty(_module$exports, "receiver_product", ""), _defineProperty(_module$exports, "updated_at", ""), _defineProperty(_module$exports, "user_id", ''), _module$exports);

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form_Form__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eventHub__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eventHub___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__eventHub__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empty_Receipt__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empty_Receipt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__empty_Receipt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__empty_PageInfo__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__empty_PageInfo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__empty_PageInfo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_mixins_Receipts__ = __webpack_require__(203);
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
      receipts: [],
      loadCount: 0,
      loading: false,
      printList: [],
      selectAllReceipts: false,
      search: '',
      order: 'latest',
      records: 100,
      pageInfo: __WEBPACK_IMPORTED_MODULE_3__empty_PageInfo___default.a,
      edit: new __WEBPACK_IMPORTED_MODULE_0__Form_Form__["a" /* default */](__WEBPACK_IMPORTED_MODULE_2__empty_Receipt___default.a),
      editIndex: '',
      scope: '',
      scopeApi: '/api'

    };
  },

  props: ['userId'],
  mixins: [__WEBPACK_IMPORTED_MODULE_4__components_mixins_Receipts__["a" /* default */]],
  components: {
    receipt: __webpack_require__(249),
    paginator: __webpack_require__(197)

  },

  methods: {
    loadReceipts: function loadReceipts() {
      var _this = this;

      axios.get(this.scopeApi + '/users/' + this.userId + '/receipts').then(function (res) {
        _this.receipts = res.data.data;
        _this.updatePageInfo(res.data);
      }).catch(function (err) {
        alert(err);
      });
    },

    // printSingleReceipt(receiptId) {
    //   this.loading = true;
    //   axios.get(`/admin/receipts/print/${receiptId}`).then(res => {
    //     this.loadSinglePdf(res.data.pdfName)
    //   })
    // },


    reload: function reload(page) {
      var _this2 = this;

      axios.get('/api/admin/users/' + this.userId + '/receipts?search=' + this.search + '&records=' + this.records + '&page=' + page).then(function (res) {
        _this2.receipts = res.data.data;
        _this2.updatePageInfo(res.data);
      }).catch(function (err) {
        alert(err);
      });
    },
    reloadFromFirstPage: function reloadFromFirstPage() {
      var _this3 = this;

      axios.get('/api/admin/users/' + this.userId + '/receipts?search=' + this.search + '&records=' + this.records).then(function (res) {
        _this3.receipts = res.data.data;
        _this3.updatePageInfo(res.data);
      }).catch(function (err) {
        alert(err);
      });
    },
    deleteReceipt: function deleteReceipt(ReceiptId) {
      var _this4 = this;

      axios.get(this.scopeApi + '/receipts/delete/' + ReceiptId).then(function (res) {
        _this4.$notify({
          group: 'notice',
          type: 'success',
          title: 'Success ',
          text: 'Receipt Deleted Successfully',
          duration: 10000,
          speed: 1000
        });
        var index = _this4.receipts.map(function (x) {
          return x.id;
        }).indexOf(ReceiptId);
        _this4.receipts.splice(index, 1);
      }).catch(function (err) {
        _this4.$notify({
          group: 'notice',
          type: 'error',
          title: 'Error ',
          text: 'Something went wrong',
          duration: 10000,
          speed: 1000
        });
      });
    }
  }
});

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(250)
}
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(252),
  /* template */
  __webpack_require__(253),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/ajaysingh/code/laravel/app/resources/assets/js/components/admin/receipts/Receipt.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Receipt.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-35cf796d", Component.options)
  } else {
    hotAPI.reload("data-v-35cf796d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(251);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(134)("66e28591", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-35cf796d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Receipt.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-35cf796d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Receipt.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)(undefined);
// imports


// module
exports.push([module.i, "\ntd:not(:first-child){\n    min-width: 140px;\n}\ntd{\n    text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eventHub__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eventHub___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__eventHub__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
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
            addToPrintList: false,
            localReceipt: ''
        };
    },

    props: ['receipt'],
    computed: {
        address: function address() {
            return this.receipt.receiver_address.replace(/\|/g, ", ");
        },
        createdAt: function createdAt() {
            return __WEBPACK_IMPORTED_MODULE_1_moment___default.a(this.receipt.created_at).format('DD-MM-YYYY  HH:mm');
        }
    },
    mounted: function mounted() {
        this.localReceipt = this.receipt;
        __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$on('clear-every-receipt', this.clearedFromPrintList);
        __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$on('select-' + this.receipt.id, this.selectAll);
        __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$on('deselect-' + this.receipt.id, this.deselectAll);
    },

    methods: {
        print: function print() {
            __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$emit('print-single-receipt', this.receipt.id);
        },
        toggleFromPrintList: function toggleFromPrintList() {
            if (this.addToPrintList) {
                __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$emit('add-to-print-list', this.receipt.id);
            } else {
                __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$emit('remove-from-print-list', this.receipt.id);
            }
        },
        clearedFromPrintList: function clearedFromPrintList() {
            this.addToPrintList = false;
        },
        edit: function edit() {
            __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$emit('edit-receipt', this.receipt.id);
        },
        deleteReceipt: function deleteReceipt() {
            // alert('are you sure you want to delete ' + this.receipt.id);
            __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$emit('delete-receipt', this.receipt.id);
        },
        selectAll: function selectAll() {
            this.addToPrintList = true;
            this.toggleFromPrintList();
        },
        deselectAll: function deselectAll() {
            this.addToPrintList = false;
            this.toggleFromPrintList();
        }
    }
});

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.addToPrintList),
      expression: "addToPrintList"
    }],
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.addToPrintList) ? _vm._i(_vm.addToPrintList, null) > -1 : (_vm.addToPrintList)
    },
    on: {
      "change": _vm.toggleFromPrintList,
      "__c": function($event) {
        var $$a = _vm.addToPrintList,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.addToPrintList = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.addToPrintList = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.addToPrintList = $$c
        }
      }
    }
  })]), _vm._v(" "), _c('td', {
    domProps: {
      "textContent": _vm._s(_vm.receipt.sender_name)
    }
  }), _vm._v(" "), _c('td', {
    domProps: {
      "textContent": _vm._s(_vm.receipt.sender_id)
    }
  }), _vm._v(" "), _c('td', {
    domProps: {
      "textContent": _vm._s(_vm.receipt.sender_email)
    }
  }), _vm._v(" "), _c('td', {
    domProps: {
      "textContent": _vm._s(_vm.receipt.receiver_name)
    }
  }), _vm._v(" "), _c('td', {
    domProps: {
      "textContent": _vm._s(_vm.receipt.receiver_email)
    }
  }), _vm._v(" "), _c('td', {
    domProps: {
      "textContent": _vm._s(_vm.address)
    }
  }), _vm._v(" "), _c('td', {
    domProps: {
      "textContent": _vm._s(_vm.receipt.receiver_postcode)
    }
  }), _vm._v(" "), _c('td', [_c('a', {
    attrs: {
      "href": 'tel:' + _vm.receipt.receiver_phone
    },
    domProps: {
      "textContent": _vm._s(_vm.receipt.receiver_phone)
    }
  })]), _vm._v(" "), _c('td', {
    domProps: {
      "textContent": _vm._s(_vm.receipt.receiver_product)
    }
  }), _vm._v(" "), _c('td', {
    domProps: {
      "textContent": _vm._s(_vm.receipt.amount)
    }
  }), _vm._v(" "), _c('td', {
    domProps: {
      "textContent": _vm._s(_vm.receipt.product_cost)
    }
  }), _vm._v(" "), _c('td', {
    domProps: {
      "textContent": _vm._s(_vm.receipt.postage_cost)
    }
  }), _vm._v(" "), _c('td', {
    domProps: {
      "textContent": _vm._s(_vm.receipt.tracking)
    }
  }), _vm._v(" "), _c('td', {
    domProps: {
      "textContent": _vm._s(_vm.createdAt)
    }
  }), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "pointer",
    on: {
      "click": _vm.edit
    }
  }, [_c('i', {
    staticClass: "fa fa-edit",
    attrs: {
      "title": "edit"
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "pointer",
    on: {
      "click": _vm.print
    }
  }, [_c('i', {
    staticClass: "fa fa-print text-primary",
    attrs: {
      "title": "print"
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "pointer",
    on: {
      "click": _vm.deleteReceipt
    }
  }, [_c('i', {
    staticClass: "fa fa-trash-o text-danger",
    attrs: {
      "title": "print"
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-35cf796d", module.exports)
  }
}

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
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
  }, [_vm._v("1000")])])])])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered"
  }, [_c('tbody', [_c('tr', [_c('th', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.selectAllReceipts),
      expression: "selectAllReceipts"
    }],
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.selectAllReceipts) ? _vm._i(_vm.selectAllReceipts, null) > -1 : (_vm.selectAllReceipts)
    },
    on: {
      "click": _vm.selectAll,
      "__c": function($event) {
        var $$a = _vm.selectAllReceipts,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.selectAllReceipts = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.selectAllReceipts = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.selectAllReceipts = $$c
        }
      }
    }
  })]), _vm._v(" "), _c('th', [_vm._v("Sender Name")]), _vm._v(" "), _c('th', [_vm._v("Sender ID")]), _vm._v(" "), _c('th', [_vm._v("Sender Email")]), _vm._v(" "), _c('th', [_vm._v("Receiver Name")]), _vm._v(" "), _c('th', [_vm._v("Receiver Email")]), _vm._v(" "), _c('th', [_vm._v("Receiver Address")]), _vm._v(" "), _c('th', [_vm._v("Postcode")]), _vm._v(" "), _c('th', [_vm._v("Phone Number")]), _vm._v(" "), _c('th', [_vm._v("Item")]), _vm._v(" "), _c('th', [_vm._v("Amount")]), _vm._v(" "), _c('th', [_vm._v("Product Cost")]), _vm._v(" "), _c('th', [_vm._v("Postage Cost")]), _vm._v(" "), _c('th', [_vm._v("Tracking")]), _vm._v(" "), _c('th', [_vm._v("Date & Time")]), _vm._v(" "), _c('th', [_vm._v("Actions")])]), _vm._v(" "), _vm._l((_vm.receipts), function(receipt) {
    return _c('receipt', {
      key: receipt.id,
      attrs: {
        "receipt": receipt
      }
    })
  })], 2)])]), _vm._v(" "), _c('paginator', {
    attrs: {
      "page-info": _vm.pageInfo
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('span', {
    staticClass: "btn btn-primary",
    on: {
      "click": _vm.print
    }
  }, [_vm._v("Print\n      "), (_vm.printList.length) ? _c('span', {
    domProps: {
      "textContent": _vm._s('(' + _vm.printList.length + ')')
    }
  }) : _vm._e()]), _vm._v(" "), (_vm.printList.length) ? _c('span', {
    staticClass: "btn btn-danger",
    on: {
      "click": _vm.clearPrintList
    }
  }, [_vm._v("Clear Print List")]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "btn btn-primary",
    on: {
      "click": _vm.downloadCsv
    }
  }, [_vm._v("Export")])]), _vm._v(" "), _c('iframe', {
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
  }), _vm._v(" "), _c('iframe', {
    staticClass: "hide",
    attrs: {
      "id": "csv-frame",
      "name": "csv-frame",
      "src": "",
      "frameborder": "0"
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
      "id": "edit-receipt",
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
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('form', {
    staticClass: "form-horizontal",
    attrs: {
      "action": ""
    }
  }, [_c('h3', [_vm._v("Sender Info")]), _vm._v(" "), _c('div', {}, [_c('div', {
    staticClass: "col-xs-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "sender-id"
    }
  }, [_vm._v("Sender ID")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.edit.sender_id),
      expression: "edit.sender_id"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "sender-id",
      "placeholder": "Sender ID (Optional)"
    },
    domProps: {
      "value": (_vm.edit.sender_id)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.edit.sender_id = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {}, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "sender-name"
    }
  }, [_vm._v("Sender Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.edit.sender_name),
      expression: "edit.sender_name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "sender-name",
      "placeholder": "Sender Name"
    },
    domProps: {
      "value": (_vm.edit.sender_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.edit.sender_name = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "sender-email"
    }
  }, [_vm._v("Sender Email")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.edit.sender_email),
      expression: "edit.sender_email"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "sender-email",
      "placeholder": "Sender Email"
    },
    domProps: {
      "value": (_vm.edit.sender_email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.edit.sender_email = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {}, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "sender-phone"
    }
  }, [_vm._v("Sender Phone")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.edit.sender_phone),
      expression: "edit.sender_phone"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "sender-phone",
      "placeholder": "Sender PhoneNumber"
    },
    domProps: {
      "value": (_vm.edit.sender_phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.edit.sender_phone = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "sender-postcode"
    }
  }, [_vm._v("Sender Postcode")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.edit.sender_postcode),
      expression: "edit.sender_postcode"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "sender-postcode",
      "placeholder": "Sender Postcode"
    },
    domProps: {
      "value": (_vm.edit.sender_postcode)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.edit.sender_postcode = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {}, [_c('div', {
    staticClass: "col-xs-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "sender-address"
    }
  }, [_vm._v("Sender Address")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.edit.sender_address),
      expression: "edit.sender_address"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "sender-address",
      "placeholder": "Sender Name"
    },
    domProps: {
      "value": (_vm.edit.sender_address)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.edit.sender_address = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h3', [_vm._v("Receiver Info")]), _vm._v(" "), _c('div', {}, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "receiver-name"
    }
  }, [_vm._v("Receiver Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.edit.receiver_name),
      expression: "edit.receiver_name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "receiver-name",
      "placeholder": "receiver Name"
    },
    domProps: {
      "value": (_vm.edit.receiver_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.edit.receiver_name = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "receiver-email"
    }
  }, [_vm._v("Receiver Email")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.edit.receiver_email),
      expression: "edit.receiver_email"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "receiver-email",
      "placeholder": "receiver Email"
    },
    domProps: {
      "value": (_vm.edit.receiver_email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.edit.receiver_email = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {}, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "receiver-phone"
    }
  }, [_vm._v("Receiver Phone")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.edit.receiver_phone),
      expression: "edit.receiver_phone"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "receiver-phone",
      "placeholder": "receiver PhoneNumber"
    },
    domProps: {
      "value": (_vm.edit.receiver_phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.edit.receiver_phone = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "receiver-postcode"
    }
  }, [_vm._v("Receiver Postcode")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.edit.receiver_postcode),
      expression: "edit.receiver_postcode"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "receiver-postcode",
      "placeholder": "receiver Postcode"
    },
    domProps: {
      "value": (_vm.edit.receiver_postcode)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.edit.receiver_postcode = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {}, [_c('div', {
    staticClass: "col-xs-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "receiver-address"
    }
  }, [_vm._v("Receiver Address")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.edit.receiver_address),
      expression: "edit.receiver_address"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "receiver-address",
      "placeholder": "Sender Name"
    },
    domProps: {
      "value": (_vm.edit.receiver_address)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.edit.receiver_address = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "receiver-product"
    }
  }, [_vm._v("Item")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.edit.receiver_product),
      expression: "edit.receiver_product"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "receiver-product",
      "placeholder": "Item"
    },
    domProps: {
      "value": (_vm.edit.receiver_product)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.edit.receiver_product = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "amount"
    }
  }, [_vm._v("Amount")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.edit.amount),
      expression: "edit.amount"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "amount",
      "placeholder": "Amount"
    },
    domProps: {
      "value": (_vm.edit.amount)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.edit.amount = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "product_cost"
    }
  }, [_vm._v("Product Cost")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.edit.product_cost),
      expression: "edit.product_cost"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "product_cost",
      "placeholder": "Product Cost"
    },
    domProps: {
      "value": (_vm.edit.product_cost)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.edit.product_cost = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "postage_cost"
    }
  }, [_vm._v("Postage Cost")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.edit.postage_cost),
      expression: "edit.postage_cost"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "postage_cost",
      "placeholder": "Postage Cost"
    },
    domProps: {
      "value": (_vm.edit.postage_cost)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.edit.postage_cost = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "tracking"
    }
  }, [_vm._v("Tracking")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.edit.tracking),
      expression: "edit.tracking"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "tracking",
      "placeholder": "Tracking"
    },
    domProps: {
      "value": (_vm.edit.tracking)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.edit.tracking = $event.target.value
      }
    }
  })])])])]), _vm._v(" "), _c('div', {
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
    staticClass: "btn btn-default",
    attrs: {
      "type": "button"
    }
  }, [_c('span', {
    staticClass: "small"
  }, [_vm._v("RECORDS")])])])
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
  }, [_vm._v("Edit Receipt")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-132c0341", module.exports)
  }
}

/***/ })

});