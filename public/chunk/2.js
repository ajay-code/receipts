webpackJsonp([2],{

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(220),
  /* template */
  __webpack_require__(226),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/ajaysingh/code/laravel/app/resources/assets/js/components/admin/receipts/DeletedReceipts.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DeletedReceipts.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-504a46ae", Component.options)
  } else {
    hotAPI.reload("data-v-504a46ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Errors__ = __webpack_require__(194);
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

/***/ 194:
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

/***/ 195:
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

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(197),
  /* template */
  __webpack_require__(198),
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

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eventHub__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eventHub___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__eventHub__);
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

/***/ 198:
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

/***/ 199:
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

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form_Form__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eventHub__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eventHub___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__eventHub__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__empty_PageInfo__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__empty_PageInfo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__empty_PageInfo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__empty_ReceiptSearchFor__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__empty_ReceiptSearchFor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__empty_ReceiptSearchFor__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            printList: [],
            selectAllReceipts: false,
            records: 100,
            from: __WEBPACK_IMPORTED_MODULE_0_moment___default.a().subtract(1, 'months').format('YYYY-MM-DD'),
            to: __WEBPACK_IMPORTED_MODULE_0_moment___default.a().format('YYYY-MM-DD'),
            search: '',
            searchFor: __WEBPACK_IMPORTED_MODULE_4__empty_ReceiptSearchFor___default.a,
            pageInfo: __WEBPACK_IMPORTED_MODULE_3__empty_PageInfo___default.a,
            scope: '/admin',
            scopeApi: '/api/admin'
        };
    },

    components: {
        receipt: __webpack_require__(221),
        paginator: __webpack_require__(196)
    },

    mounted: function mounted() {
        this.loadReceipts();
        __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$on('print-single-receipt', this.printSingleReceipt);
        __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$on('add-to-print-list', this.addToPrintList);
        __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$on('remove-from-print-list', this.removeFromPrintList);
        __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$on('load-page', this.reload);
        __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$on('delete-receipt', this.deleteReceipt);
        __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$on('restore-receipt', this.restoreReceipt);
    },


    methods: {
        loadReceipts: function loadReceipts() {
            var _this = this;

            axios.post(this.scopeApi + '/receipts/deleted', {
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

            axios.post(this.scopeApi + '/receipts/deleted', {
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

            axios.post(this.scopeApi + '/receipts/deleted', {
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

            axios.get(this.scopeApi + '/receipts/force-delete/' + ReceiptId).then(function (res) {
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

            axios.post(this.scopeApi + '/receipts/force-delete', {
                receipts: this.printList
            }).then(function (res) {
                _this5.sendSuccessNotice('Receipts Deleted Successfully');
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
        restoreReceipt: function restoreReceipt(ReceiptId) {
            var _this6 = this;

            axios.get(this.scopeApi + '/receipts/restore/' + ReceiptId).then(function (res) {
                _this6.sendSuccessNotice('Receipt restored Successfully');
                var index = _this6.receipts.map(function (x) {
                    return x.id;
                }).indexOf(ReceiptId);
                _this6.receipts.splice(index, 1);
            }).catch(function (err) {
                _this6.sendErrorNotice();
            });
        },
        restoreMultipleReceipts: function restoreMultipleReceipts() {
            var _this7 = this;

            if (!this.printList.length) {
                this.sendErrorNotice('Please Select At Least One Reeipt');
                return;
            }
            axios.post(this.scopeApi + '/receipts/restore', {
                receipts: this.printList
            }).then(function (res) {
                _this7.sendSuccessNotice('Receipts Restore Successfully');
                _this7.printList.forEach(function (ReceiptId) {
                    var index = _this7.receipts.map(function (x) {
                        return x.id;
                    }).indexOf(ReceiptId);
                    _this7.receipts.splice(index, 1);
                });
                _this7.clearPrintList();
            }).catch(function (err) {
                _this7.sendErrorNotice();
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
        addToPrintList: function addToPrintList(receiptId) {
            if (this.printList.indexOf(receiptId) === -1) {
                this.printList.push(receiptId);
            }
        },
        removeFromPrintList: function removeFromPrintList(receiptId) {
            var index = this.printList.indexOf(receiptId);
            this.printList.splice(index, 1);
        },
        updatePageInfo: function updatePageInfo(info) {
            this.pageInfo.current_page = info.current_page;
            this.pageInfo.last_page = info.last_page;
            this.pageInfo.total = info.total;
            this.pageInfo.next_page_url = info.next_page_url;
            this.pageInfo.prev_page_url = info.prev_page_url;
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
                jQuery('<form action="' + this.scope + '/receipts/csv" method="post" target="csv-frame">\n                      <input name="_token" value="' + Laravel.csrfToken + '">\n                     ' + inputs + '\n                  </form>').appendTo('body').submit().remove();
                __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$emit('stop-loading');
            } else {
                alert('please select atleast on receipt');
            }
        },
        selectAll: function selectAll() {
            if (this.selectAllReceipts) {
                for (var receipt in this.receipts) {
                    __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$emit('select-' + receipt.id);
                }
            } else {
                for (var _receipt in this.receipts) {
                    __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$emit('deselect-' + _receipt.id);
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

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(222)
}
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(224),
  /* template */
  __webpack_require__(225),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/ajaysingh/code/laravel/app/resources/assets/js/components/admin/receipts/DeletedReceipt.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DeletedReceipt.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-06d83bba", Component.options)
  } else {
    hotAPI.reload("data-v-06d83bba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(223);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(132)("c4d5450e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-06d83bba\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DeletedReceipt.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-06d83bba\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DeletedReceipt.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(131)(undefined);
// imports


// module
exports.push([module.i, "\ntd:not(:first-child){\n    min-width: 140px;\n}\ntd{\n    text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 224:
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
        __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$on('select-' + this.id, this.selectAll);
        __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$on('deselect-' + this.id, this.deselectAll);
    },

    methods: {
        restore: function restore() {
            this.$emit('restore', this.receipt.id);
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
            __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$emit('delete-receipt', this.receipt.id);
        },
        restoreReceipt: function restoreReceipt() {
            __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$emit('restore-receipt', this.receipt.id);
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

/***/ 225:
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
      "click": _vm.restoreReceipt
    }
  }, [_c('i', {
    staticClass: "fa fa-undo text-primary",
    attrs: {
      "title": "restore"
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "pointer",
    on: {
      "click": _vm.deleteReceipt
    }
  }, [_c('i', {
    staticClass: "fa fa-trash-o text-danger",
    attrs: {
      "title": "delete"
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-06d83bba", module.exports)
  }
}

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-8 padding-0 form-group"
  }, [_c('div', {
    staticClass: "search-for-label"
  }, [_vm._l((_vm.searchFor), function(field, index) {
    return _c('label', {
      key: index,
      staticClass: "col-sm-4 col-xs-4"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.searchFor[index]),
        expression: "searchFor[index]"
      }],
      attrs: {
        "type": "checkbox"
      },
      domProps: {
        "checked": Array.isArray(_vm.searchFor[index]) ? _vm._i(_vm.searchFor[index], null) > -1 : (_vm.searchFor[index])
      },
      on: {
        "__c": function($event) {
          var $$a = _vm.searchFor[index],
            $$el = $event.target,
            $$c = $$el.checked ? (true) : (false);
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$c) {
              $$i < 0 && (_vm.searchFor[index] = $$a.concat($$v))
            } else {
              $$i > -1 && (_vm.searchFor[index] = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
            }
          } else {
            var $$exp = _vm.searchFor,
              $$idx = index;
            if (!Array.isArray($$exp)) {
              _vm.searchFor[index] = $$c
            } else {
              $$exp.splice($$idx, 1, $$c)
            }
          }
        }
      }
    }), _vm._v(" "), _c('span', {
      domProps: {
        "textContent": _vm._s(index)
      }
    })])
  }), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })], 2)]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4 form-group"
  }, [_c('form', {
    staticClass: "form-horizontal",
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.reloadFromFirstPage($event)
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-xs-3 control-label",
    attrs: {
      "for": "from"
    }
  }, [_vm._v("From")]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-9 col-md-6"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.from),
      expression: "from"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date",
      "id": "from"
    },
    domProps: {
      "value": (_vm.from)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.from = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-xs-3 control-label",
    attrs: {
      "for": "to"
    }
  }, [_vm._v("To")]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-9 col-md-6"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.to),
      expression: "to"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date",
      "id": "to"
    },
    domProps: {
      "value": (_vm.to)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.to = $event.target.value
      }
    }
  })])])])])]), _vm._v(" "), _c('div', {
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
    staticClass: "btn btn-success",
    on: {
      "click": _vm.restoreMultipleReceipts
    }
  }, [_c('i', {
    staticClass: "fa fa-undo"
  }), _vm._v(" Restore Selected Receipts")]), _vm._v(" "), _c('span', {
    staticClass: "btn btn-danger",
    on: {
      "click": _vm.deleteMultipleReceipts
    }
  }, [_c('i', {
    staticClass: "fa fa-trash"
  }), _vm._v(" Delete Selected Receipts")]), _vm._v(" "), (_vm.printList.length) ? _c('span', {
    staticClass: "btn btn-danger",
    on: {
      "click": _vm.clearPrintList
    }
  }, [_vm._v("Clear Print List")]) : _vm._e()]), _vm._v(" "), _c('iframe', {
    staticClass: "hide",
    attrs: {
      "id": "csv-frame",
      "name": "csv-frame",
      "src": "",
      "frameborder": "0"
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
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-504a46ae", module.exports)
  }
}

/***/ })

});