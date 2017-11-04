webpackJsonp([2],{

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(233)
}
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(235),
  /* template */
  __webpack_require__(244),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/ajaysingh/code/laravel/app/resources/assets/js/components/datatables/ReceiptsDataTable.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ReceiptsDataTable.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e34ec45c", Component.options)
  } else {
    hotAPI.reload("data-v-e34ec45c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


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
        },
        changePage: function changePage() {
            return this.pageInfo.current_page;
        }
    },
    watch: {
        changePage: function changePage() {
            this.$refs.paginate.selected = this.pageInfo.current_page - 1;
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
    ref: "paginate",
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

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(234);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(134)("9b04eee8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e34ec45c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ReceiptsDataTable.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e34ec45c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ReceiptsDataTable.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)(undefined);
// imports


// module
exports.push([module.i, "\n.sortable {\n  cursor: pointer;\n}\n.arrow {\n  display: inline-block;\n  vertical-align: middle;\n  width: 0;\n  height: 0;\n  margin-left: 5px;\n  opacity: 0.6;\n}\n.arrow--asc {\n    border-left: 4px solid transparent;\n    border-right: 4px solid transparent;\n    border-bottom: 4px solid #222;\n}\n.arrow--desc {\n    border-left: 4px solid transparent;\n    border-right: 4px solid transparent;\n    border-top: 4px solid #222;\n}\n.no-padding {\n  padding: 0 !important;\n}\n@media (max-width: 380px) {\n#filter {\n    font-size: 11px;\n}\n}\n.form-control {\n  min-width: 140px;\n}\n", ""]);

// exports


/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_query_string__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_query_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_query_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eventHub__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eventHub___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__eventHub__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      response: {
        table: "",
        displayable: [],
        records: [],
        allow: {}
      },
      sort: {
        key: "id",
        order: "asc"
      },
      limit: 50,
      quickSearchQuery: "",
      editing: {
        id: null,
        form: {},
        errors: []
      },
      search: {
        value: "",
        operator: "equals",
        column: "id"
      },
      page: {
        current: 1
      },
      filterColumns: "",
      selectAll: false,
      selected: [],
      printReceipt: null
    };
  },

  props: {
    admin: {
      type: Boolean
    },
    endpoint: {
      type: String
    }
  },
  components: {
    paginator: __webpack_require__(197),
    print: __webpack_require__(239)
  },
  computed: {
    filteredRecords: function filteredRecords() {
      var _this = this;

      var data = this.response.records;
      var displayable = this.displayable;
      data = data.filter(function (row) {
        return displayable.some(function (key) {
          return String(row[key]).toLowerCase().indexOf(_this.quickSearchQuery.toLowerCase()) > -1;
        });
      });

      if (this.sort.key) {
        data = _.orderBy(data, function (i) {
          var value = i[_this.sort.key];

          if (!isNaN(parseFloat(value))) {
            return parseFloat(value);
          }

          return String(i[_this.sort.key]).toLowerCase();
        }, this.sort.order);
      }

      return data;
    },
    displayable: function displayable() {
      var filterColumns = this.filterColumns;
      var array = [];
      _.each(this.filterColumns, function (val, key, index) {
        if (val) array.push(key);
      });
      if (array.length === 0) return Object.keys(filterColumns);
      return array;
    }
  },
  methods: {
    getRecords: function getRecords() {
      var _this2 = this;

      return axios.get(this.endpoint + "?" + this.getQueryParameters()).then(function (response) {
        _this2.response = response.data.data;
        _this2.getfilterColumns();
      });
    },
    getRecordsFromFirstPage: function getRecordsFromFirstPage() {
      this.page.current = 1;
      this.getRecords();
    },
    getQueryParameters: function getQueryParameters() {
      return __WEBPACK_IMPORTED_MODULE_0_query_string___default.a.stringify(_extends({
        limit: this.limit
      }, this.search, {
        page: this.page.current
      }));
    },
    sortBy: function sortBy(column) {
      this.sort.key = column;
      this.sort.order = this.sort.order === "asc" ? "desc" : "asc";
    },
    edit: function edit(record) {
      this.editing.errors = [];
      this.editing.id = record.id;
      this.editing.form = _.pick(record, this.response.updatable);
    },
    isUpdatable: function isUpdatable(column) {
      return this.response.updatable.includes(column);
    },
    update: function update() {
      var _this3 = this;

      axios.patch(this.endpoint + "/" + this.editing.id, this.editing.form).then(function () {
        _this3.getRecords().then(function () {
          _this3.editing.id = null;
          _this3.editing.form = {};
        });
      }).catch(function (error) {
        if (error.response.status === 422) {
          _this3.editing.errors = error.response.data.errors;
        }
      });
    },
    deleteRecord: function deleteRecord(record) {
      var _this4 = this;

      axios.delete(this.endpoint + "/" + record.id).then(function (res) {
        _this4.getRecords();
      }).catch(function (err) {
        alert(err.response);
      });
    },
    deleteSelected: function deleteSelected() {
      var _this5 = this;

      axios.post(this.endpoint + "/delete", {
        receipts: this.selected
      }).then(function (res) {
        _this5.getRecords();
        _this5.sendSuccessNotice();
      }).catch(function (err) {
        _this5.sendErrorNotice();
      });
    },
    changePage: function changePage(page) {
      this.page.current = page;
      this.getRecords();
    },
    getfilterColumns: function getfilterColumns() {
      var obj = {};
      _.each(this.response.displayable, function (column) {
        obj[column] = false;
      });
      this.filterColumns = obj;
    },


    /* 
        Selected Functions
    */
    toggleSelected: function toggleSelected(recordId) {
      if (this.selected.includes(recordId)) {
        var index = this.selected.indexOf(recordId);
        this.selected.splice(index, 1);
      } else {
        this.selected.push(recordId);
      }
    },
    toggleSelectAll: function toggleSelectAll() {
      var _this6 = this;

      if (this.selectAll) {
        _.each(this.response.records, function (record) {
          if (!_this6.selected.includes(record.id)) {
            _this6.selected.push(record.id);
          }
        });
      } else {
        this.selected = [];
      }
    },


    /* 
      Print functions
    */
    printSelected: function printSelected() {
      if (this.selected.length) {
        __WEBPACK_IMPORTED_MODULE_1__eventHub___default.a.$emit("print-selected");
      } else {
        this.sendErrorNotice("Please at least select one receipt");
      }
    },
    print: function print(record) {
      this.printReceipt = record.id;
      setTimeout(function () {
        __WEBPACK_IMPORTED_MODULE_1__eventHub___default.a.$emit("print-receipt");
      }, 100);
    },


    /* 
      Functions for natifications
    */
    sendErrorNotice: function sendErrorNotice(message) {
      message = message || "Something Went Wrong";
      this.$notify({
        group: "notice",
        type: "error",
        title: "Error ",
        text: message,
        duration: 5000,
        speed: 1000
      });
    },
    sendSuccessNotice: function sendSuccessNotice(message) {
      message = message || "Action Was Persormed Successfully";
      this.$notify({
        group: "notice",
        type: "success",
        title: "Success ",
        text: message,
        duration: 5000,
        speed: 1000
      });
    }
  },
  mounted: function mounted() {
    this.getRecords();
    __WEBPACK_IMPORTED_MODULE_1__eventHub___default.a.$on("load-page", this.changePage);
  }
});

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(237);
var objectAssign = __webpack_require__(238);

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

exports.extract = function (str) {
	return str.split('?')[1] || '';
};

exports.parse = function (str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		formatter(decodeURIComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
};

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};


/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(240)
}
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(242),
  /* template */
  __webpack_require__(243),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/ajaysingh/code/laravel/app/resources/assets/js/components/print/PrintReceipts.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PrintReceipts.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-14532b6d", Component.options)
  } else {
    hotAPI.reload("data-v-14532b6d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(241);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(134)("17a46426", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-14532b6d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PrintReceipts.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-14532b6d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PrintReceipts.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eventHub__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eventHub___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__eventHub__);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      firstLoad: true,
      pdfGenerateUrl: "/receipts/print",
      pdfLoadUrl: "/pdf",
      selectedChanged: true,
      receiptChanged: true,
      src: "http://app.dev"
    };
  },

  props: {
    admin: {
      type: Boolean
    },
    selected: {
      type: Array,
      default: []
    },
    receipt: {
      type: Number,
      default: null
    }
  },
  created: function created() {
    if (this.admin) {
      this.pdfGenerateUrl = "/admin/receipts/print";
    }
  },

  watch: {
    receipt: function receipt() {
      this.receiptChanged = true;
    },
    selected: function selected() {
      this.selectedChanged = true;
    }
  },
  mounted: function mounted() {
    __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$on("print-receipt", this.printReceipt);
    __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$on("print-selected", this.printSelected);
  },

  methods: {
    printReceipt: function printReceipt() {
      var _this = this;

      if (this.receiptChanged) {
        axios.get(this.pdfGenerateUrl + "/" + this.receipt).then(function (res) {
          _this.loadPdf(res);
          _this.receiptChanged = false;
        }).catch(function () {
          _this.sendErrorNotice();
          _this.receiptChanged = true;
        });
      } else {
        this.reprint();
      }
    },
    printSelected: function printSelected() {
      var _this2 = this;

      if (this.selectedChanged) {
        axios.post("" + this.pdfGenerateUrl, {
          receipts: this.selected
        }).then(function (res) {
          _this2.loadPdf(res);
          _this2.selectedChanged = false;
        }).catch(function () {
          _this2.sendErrorNotice();
          _this2.selectedChanged = true;
        });
      } else {
        this.reprint();
      }
    },
    loadPdf: function loadPdf(res) {
      if (window.isMobile()) {
        this.src = "/pdf/" + res.data.pdfName + "/download";
      } else {
        __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$emit("start-loading");
        this.src = "/pdf/" + res.data.pdfName;
      }
    },
    print: function print() {
      __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$emit("stop-loading");
      if (!this.firstLoad) {
        window.frames["receipt"].print();
      }
      this.firstLoad = false;
    },
    reprint: function reprint() {
      window.frames["receipt"].print();
    },

    /* 
      Functions for natifications
    */
    sendErrorNotice: function sendErrorNotice(message) {
      message = message || "Something Went Wrong";
      this.$notify({
        group: "notice",
        type: "error",
        title: "Error ",
        text: message,
        duration: 5000,
        speed: 1000
      });
    },
    sendSuccessNotice: function sendSuccessNotice(message) {
      message = message || "Action Was Persormed Successfully";
      this.$notify({
        group: "notice",
        type: "success",
        title: "Success ",
        text: message,
        duration: 5000,
        speed: 1000
      });
    }
  }
});

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('iframe', {
    staticClass: "hide",
    attrs: {
      "name": "receipt",
      "src": _vm.src,
      "frameborder": "0"
    },
    on: {
      "load": _vm.print
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-14532b6d", module.exports)
  }
}

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("\n        " + _vm._s(_vm.response.table) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('a', {
    attrs: {
      "href": "#filter",
      "data-toggle": "collapse",
      "aria-expanded": "false",
      "aria-controls": "filter"
    }
  }, [_vm._v("Filter")]), _vm._v(" "), _c('div', {
    staticClass: "collapse",
    attrs: {
      "id": "filter"
    }
  }, [_vm._l((_vm.filterColumns), function(value, column, index) {
    return [_c('label', {
      key: index,
      staticClass: "no-padding col-sm-4 col-xs-6 col-md-3"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.filterColumns[column]),
        expression: "filterColumns[column]"
      }],
      attrs: {
        "type": "checkbox"
      },
      domProps: {
        "checked": Array.isArray(_vm.filterColumns[column]) ? _vm._i(_vm.filterColumns[column], null) > -1 : (_vm.filterColumns[column])
      },
      on: {
        "__c": function($event) {
          var $$a = _vm.filterColumns[column],
            $$el = $event.target,
            $$c = $$el.checked ? (true) : (false);
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$c) {
              $$i < 0 && (_vm.filterColumns[column] = $$a.concat($$v))
            } else {
              $$i > -1 && (_vm.filterColumns[column] = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
            }
          } else {
            var $$exp = _vm.filterColumns,
              $$idx = column;
            if (!Array.isArray($$exp)) {
              _vm.filterColumns[column] = $$c
            } else {
              $$exp.splice($$idx, 1, $$c)
            }
          }
        }
      }
    }), _vm._v(" "), _c('span', {
      domProps: {
        "textContent": _vm._s(column)
      }
    })])]
  }), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })], 2)]), _vm._v(" "), _c('form', {
    attrs: {
      "action": "#"
    },
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.getRecordsFromFirstPage($event)
      }
    }
  }, [_c('label', {
    attrs: {
      "for": "search"
    }
  }, [_vm._v("Search")]), _vm._v(" "), _c('div', {
    staticClass: "row row-fluid"
  }, [_c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.search.column),
      expression: "search.column"
    }],
    staticClass: "form-control",
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.search.column = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, _vm._l((_vm.displayable), function(column, index) {
    return _c('option', {
      key: index,
      domProps: {
        "value": column
      }
    }, [_vm._v("\n                            " + _vm._s(column) + "\n                        ")])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.search.operator),
      expression: "search.operator"
    }],
    staticClass: "form-control",
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.search.operator = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "equals"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "contains"
    }
  }, [_vm._v("contains")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "starts_with"
    }
  }, [_vm._v("starts with")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ends_with"
    }
  }, [_vm._v("ends with")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "greater_than"
    }
  }, [_vm._v("greater than")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "less_than"
    }
  }, [_vm._v("less than")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.search.value),
      expression: "search.value"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "search"
    },
    domProps: {
      "value": (_vm.search.value)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.search.value = $event.target.value
      }
    }
  }), _vm._v(" "), _vm._m(0)])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-10"
  }, [_c('label', {
    attrs: {
      "for": "filter"
    }
  }, [_vm._v("Quick search current results")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.quickSearchQuery),
      expression: "quickSearchQuery"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "filter"
    },
    domProps: {
      "value": (_vm.quickSearchQuery)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.quickSearchQuery = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-2"
  }, [_c('label', {
    attrs: {
      "for": "limit"
    }
  }, [_vm._v("Display records")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.limit),
      expression: "limit"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "limit"
    },
    on: {
      "change": [function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.limit = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }, _vm.getRecords]
    }
  }, [_c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "50"
    }
  }, [_vm._v("50")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "100"
    }
  }, [_vm._v("100")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1000"
    }
  }, [_vm._v("1000")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("All")])])])]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-striped"
  }, [_c('thead', [_c('tr', [_c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.selectAll),
      expression: "selectAll"
    }],
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.selectAll) ? _vm._i(_vm.selectAll, null) > -1 : (_vm.selectAll)
    },
    on: {
      "click": _vm.toggleSelectAll,
      "__c": function($event) {
        var $$a = _vm.selectAll,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.selectAll = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.selectAll = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.selectAll = $$c
        }
      }
    }
  })]), _vm._v(" "), _vm._l((_vm.displayable), function(column, index) {
    return _c('th', {
      key: index
    }, [_c('span', {
      staticClass: "sortable",
      on: {
        "click": function($event) {
          _vm.sortBy(column)
        }
      }
    }, [_vm._v(_vm._s(column))]), _vm._v(" "), (_vm.sort.key === column) ? _c('div', {
      staticClass: "arrow",
      class: {
        'arrow--asc': _vm.sort.order === 'asc', 'arrow--desc': _vm.sort.order === 'desc'
      }
    }) : _vm._e()])
  }), _vm._v(" "), _c('th', [_vm._v(" ")])], 2)]), _vm._v(" "), _c('tbody', _vm._l((_vm.filteredRecords), function(record, index) {
    return _c('tr', {
      key: index
    }, [_c('td', [_c('input', {
      attrs: {
        "type": "checkbox"
      },
      domProps: {
        "checked": _vm.selected.includes(record.id)
      },
      on: {
        "click": function($event) {
          _vm.toggleSelected(record.id)
        }
      }
    })]), _vm._v(" "), _vm._l((_vm.displayable), function(column, index) {
      return _c('td', {
        key: index
      }, [(_vm.editing.id === record.id && _vm.isUpdatable(column)) ? [_c('div', {
        staticClass: "form-group",
        class: {
          'has-error': _vm.editing.errors[column]
        }
      }, [(column.indexOf('address') === -1) ? _c('input', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: (_vm.editing.form[column]),
          expression: "editing.form[column]"
        }],
        staticClass: "form-control",
        attrs: {
          "type": "text"
        },
        domProps: {
          "value": record[column],
          "value": (_vm.editing.form[column])
        },
        on: {
          "input": function($event) {
            if ($event.target.composing) { return; }
            var $$exp = _vm.editing.form,
              $$idx = column;
            if (!Array.isArray($$exp)) {
              _vm.editing.form[column] = $event.target.value
            } else {
              $$exp.splice($$idx, 1, $event.target.value)
            }
          }
        }
      }) : _c('textarea', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: (_vm.editing.form[column]),
          expression: "editing.form[column]"
        }],
        staticClass: "form-control",
        attrs: {
          "type": "text"
        },
        domProps: {
          "value": record[column],
          "value": (_vm.editing.form[column])
        },
        on: {
          "input": function($event) {
            if ($event.target.composing) { return; }
            var $$exp = _vm.editing.form,
              $$idx = column;
            if (!Array.isArray($$exp)) {
              _vm.editing.form[column] = $event.target.value
            } else {
              $$exp.splice($$idx, 1, $event.target.value)
            }
          }
        }
      }), _vm._v(" "), (_vm.editing.errors[column]) ? _c('span', {
        staticClass: "help-block"
      }, [_c('strong', [_vm._v(_vm._s(_vm.editing.errors[column][0]))])]) : _vm._e()])] : [_vm._v("\n                                " + _vm._s(record[column]) + "\n                            ")]], 2)
    }), _vm._v(" "), _c('td', [(_vm.editing.id !== record.id) ? _c('a', {
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.edit(record)
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-edit"
    })]) : _vm._e(), _vm._v(" "), (_vm.editing.id !== record.id) ? _c('a', {
      staticClass: "text-success",
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.print(record)
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-print"
    })]) : _vm._e(), _vm._v(" "), (_vm.editing.id !== record.id) ? _c('a', {
      staticClass: "text-danger",
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.deleteRecord(record)
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-trash"
    })]) : _vm._e(), _vm._v(" "), (_vm.editing.id === record.id) ? [_c('a', {
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.update($event)
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-save"
    })]), _c('br'), _vm._v(" "), _c('a', {
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.editing.id = null
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-times"
    })])] : _vm._e()], 2)], 2)
  }))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "disabled": !_vm.selected.length
    },
    on: {
      "click": _vm.printSelected
    }
  }, [_vm._v("Print")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-danger",
    attrs: {
      "disabled": !_vm.selected.length
    },
    on: {
      "click": _vm.deleteSelected
    }
  }, [_vm._v("Delete")])]), _vm._v(" "), (_vm.response.pageInfo) ? _c('paginator', {
    attrs: {
      "page-info": _vm.response.pageInfo
    }
  }) : _vm._e()], 1)]), _vm._v(" "), _c('print', {
    attrs: {
      "receipt": _vm.printReceipt,
      "selected": _vm.selected,
      "admin": _vm.admin
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "input-group-btn"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Search")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e34ec45c", module.exports)
  }
}

/***/ })

});