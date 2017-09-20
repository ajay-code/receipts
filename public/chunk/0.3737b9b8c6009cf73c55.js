webpackJsonp([0],{

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(225),
  /* template */
  __webpack_require__(226),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/ajaysingh/code/laravel/app/resources/assets/js/components/receipts/ReceiptsByDate.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ReceiptsByDate.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3f92531b", Component.options)
  } else {
    hotAPI.reload("data-v-3f92531b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Errors__ = __webpack_require__(192);
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

/***/ 192:
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

/***/ 193:
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

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(195),
  /* template */
  __webpack_require__(196),
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

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eventHub__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eventHub___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__eventHub__);
//
//
//
//
//
//
//
//
//
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
        return {};
    },

    props: ['pageInfo'],
    mounted: function mounted() {},

    computed: {
        pages: function pages() {
            var pages = [];
            // let totalPages = this.pageInfo.total_pages || this.pageInfo.last_page;
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
        singlePage: function singlePage(page) {
            __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$emit('load-page', page);
        }
    }
});

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    attrs: {
      "aria-label": "Page navigation"
    }
  }, [_c('ul', {
    staticClass: "pagination"
  }, [_c('li', {
    class: {
      disabled: _vm.pageInfo.current_page == 1
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.prev($event)
      }
    }
  }, [_vm._m(0)]), _vm._v(" "), _vm._l((_vm.pages), function(page) {
    return _c('li', {
      class: {
        active: page == _vm.pageInfo.current_page
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.singlePage(page)
        }
      }
    }, [_c('a', {
      attrs: {
        "href": "#"
      },
      domProps: {
        "textContent": _vm._s(page)
      }
    })])
  }), _vm._v(" "), _c('li', {
    class: {
      disabled: _vm.pageInfo.current_page == _vm.totalPages
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.next($event)
      }
    }
  }, [_vm._m(1)])], 2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    attrs: {
      "href": "#",
      "aria-label": "Previous"
    }
  }, [_c('span', {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("«")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    attrs: {
      "href": "#",
      "aria-label": "Next"
    }
  }, [_c('span', {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("»")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2cf054d0", module.exports)
  }
}

/***/ }),

/***/ 197:
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

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eventHub__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eventHub___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__eventHub__);

/* harmony default export */ __webpack_exports__["a"] = ({

  methods: {
    loadReceipts: function loadReceipts() {
      var _this = this;

      axios.get(this.scopeApi + '/receipts').then(function (res) {
        _this.receipts = res.data.data;
        _this.updatePageInfo(res.data);
      }).catch(function (err) {
        alert(err);
      });
    },
    printSingleReceipt: function printSingleReceipt(receiptId) {
      var _this2 = this;

      this.loading = true;
      axios.get(this.scope + '/receipts/print/' + receiptId).then(function (res) {
        _this2.loadSinglePdf(res.data.pdfName);
      });
    },
    loadSinglePdf: function loadSinglePdf(pdf) {
      var url = '';
      if (window.isMobile()) {

        url = '/pdf/' + pdf + '/download';
        this.loading = false;
      } else {
        url = '/pdf/' + pdf;
      }
      $('#print-frame').attr('src', url);
    },
    loadingComplete: function loadingComplete() {
      if (!window.isMobile()) {
        this.loading = false;
        if (this.loadCount !== 0) {
          console.log(this.loadCount);
          window.frames['frame'].print();
          this.loadCount++;
        }
        this.loadCount++;
      }
    },
    loadingFail: function loadingFail() {
      this.loading = false;
      alert('Loading Failed');
    },
    addToPrintList: function addToPrintList(receiptId) {
      this.printList.push(receiptId);
    },
    removeFromPrintList: function removeFromPrintList(receiptId) {
      var index = this.printList.indexOf(receiptId);
      this.printList.splice(index, 1);
    },
    print: function print() {
      var _this3 = this;

      if (this.printList.length) {
        this.loading = true;

        axios.post(this.scope + '/receipts/print', { receipts: this.printList }).then(function (res) {
          _this3.loadSinglePdf(res.data.pdfName);
        });
      } else {
        alert('please select atleast on receipt');
      }
    },
    updatePageInfo: function updatePageInfo(info) {
      this.pageInfo.current_page = info.current_page;
      this.pageInfo.last_page = info.last_page;
      this.pageInfo.total = info.total;
      this.pageInfo.next_page_url = info.next_page_url;
      this.pageInfo.prev_page_url = info.prev_page_url;
    },
    reload: function reload(page) {
      var _this4 = this;

      axios.get(this.scopeApi + '/receipts?search=' + this.search + '&records=' + this.records + '&page=' + page).then(function (res) {
        _this4.receipts = res.data.data;
        _this4.updatePageInfo(res.data);
      }).catch(function (err) {
        alert(err);
      });
    },
    editReceipt: function editReceipt(ReceiptId) {
      this.editIndex = this.receipts.map(function (x) {
        return x.id;
      }).indexOf(ReceiptId);
      this.copyToEdit(this.receipts[this.editIndex]);
      $('#edit-receipt').modal('show');
    },
    copyToEdit: function copyToEdit(receipt) {
      this.edit.id = receipt.id;
      this.edit.receiver_address = receipt.receiver_address.replace('|', "\n");
      this.edit.receiver_email = receipt.receiver_email;
      this.edit.receiver_name = receipt.receiver_name;
      this.edit.receiver_phone = receipt.receiver_phone;
      this.edit.receiver_postcode = receipt.receiver_postcode;
      this.edit.receiver_product = receipt.receiver_product;
      this.edit.sender_address = receipt.sender_address.replace('|', "\n");
      this.edit.sender_id = receipt.sender_id;
      this.edit.sender_email = receipt.sender_email;
      this.edit.sender_name = receipt.sender_name;
      this.edit.sender_phone = receipt.sender_phone;
      this.edit.sender_postcode = receipt.sender_postcode;
      this.edit.amount = receipt.amount;
      this.edit.product_cost = receipt.product_cost;
      this.edit.postage_cost = receipt.postage_cost;
      this.edit.tracking = receipt.tracking;
      this.edit.created_at = receipt.created_at;
    },
    copyFromEdit: function copyFromEdit() {
      var receipt = this.receipts[this.editIndex];

      receipt.id = this.edit.id;
      receipt.receiver_address = this.edit.receiver_address;
      receipt.receiver_email = this.edit.receiver_email;
      receipt.receiver_name = this.edit.receiver_name;
      receipt.receiver_phone = this.edit.receiver_phone;
      receipt.receiver_postcode = this.edit.receiver_postcode;
      receipt.receiver_product = this.edit.receiver_product;
      receipt.sender_address = this.edit.sender_address;
      receipt.sender_id = this.edit.sender_id;
      receipt.sender_email = this.edit.sender_email;
      receipt.sender_name = this.edit.sender_name;
      receipt.sender_phone = this.edit.sender_phone;
      receipt.sender_postcode = this.edit.sender_postcode;
      receipt.amount = this.edit.amount;
      receipt.product_cost = this.edit.product_cost;
      receipt.postage_cost = this.edit.postage_cost;
      receipt.tracking = this.edit.tracking;
      receipt.created_at = this.edit.created_at;
    },
    update: function update() {
      var _this5 = this;

      this.loading = true;
      this.edit.post(this.scope + '/receipts/' + this.edit.id).then(function (res) {
        _this5.loading = false;
        _this5.copyFromEdit();

        $('#edit-receipt').modal('hide');
        _this5.$notify({
          group: 'notice',
          type: 'success',
          title: 'Success ',
          text: 'Receipt successfully edited',
          duration: 10000,
          speed: 1000
        });
      }).catch(function (err) {
        _this5.loading = false;
        var message = '<ul>';
        for (var name in _this5.edit.errors.errors) {
          console.log(name);
          message += '<li>' + _this5.edit.errors.get(name) + '</li>';
        }
        message += '</ul>';
        __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$emit('alert-show', { message: message, status: 'error' });
        _this5.$notify({
          group: 'notice',
          type: 'error',
          title: 'Error ',
          text: message,
          duration: 10000,
          speed: 1000
        });
      });
    },
    clearPrintList: function clearPrintList() {
      __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$emit('clear-every-receipt');
      this.printList = [];
    },
    downloadCsv: function downloadCsv() {
      if (this.printList.length) {
        this.loading = true;
        var inputs = '';
        this.printList.forEach(function (element) {
          inputs += '<input name="receipts[]" value="' + element + '">';
        }, this);

        jQuery('<form action="' + this.scope + '/receipts/csv" method="post" target="csv-frame">\n                      <input name="_token" value="' + Laravel.csrfToken + '">\n                     ' + inputs + '\n                  </form>').appendTo('body').submit().remove();
        this.loading = false;
      } else {
        alert('please select atleast on receipt');
      }
    },
    selectAll: function selectAll() {
      console.log(this.selectAllReceipts);
      if (this.selectAllReceipts) {
        __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$emit('select-all');
      } else {
        __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$emit('deselect-all');
      }
    }
  }
});

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(205)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(207),
  /* template */
  __webpack_require__(208),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/ajaysingh/code/laravel/app/resources/assets/js/components/receipts/Receipt.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Receipt.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ba2db926", Component.options)
  } else {
    hotAPI.reload("data-v-ba2db926", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(206);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(17)("7de1a1ae", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ba2db926\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Receipt.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ba2db926\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Receipt.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(undefined);
// imports


// module
exports.push([module.i, "\ntd:not(:first-child){\n    min-width: 140px;\n}\ntd{\n    text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eventHub__ = __webpack_require__(15);
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
        __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$on('select-all', this.selectAll);
        __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$on('deselect-all', this.deselectAll);
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

/***/ 208:
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
    staticClass: "fa fa-print",
    attrs: {
      "title": "print"
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ba2db926", module.exports)
  }
}

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form_Form__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eventHub__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eventHub___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__eventHub__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_Receipts__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__empty_Receipt__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__empty_Receipt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__empty_Receipt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__empty_PageInfo__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__empty_PageInfo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__empty_PageInfo__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      from: __WEBPACK_IMPORTED_MODULE_0_moment___default.a().subtract(7, 'days').format('YYYY-MM-DD'),
      to: __WEBPACK_IMPORTED_MODULE_0_moment___default.a().format('YYYY-MM-DD'),
      order: 'latest',
      records: 100,
      pageInfo: __WEBPACK_IMPORTED_MODULE_5__empty_PageInfo___default.a,
      edit: new __WEBPACK_IMPORTED_MODULE_1__Form_Form__["a" /* default */](__WEBPACK_IMPORTED_MODULE_4__empty_Receipt___default.a),
      editIndex: '',
      scope: '',
      scopeApi: '/api'
    };
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_3__mixins_Receipts__["a" /* default */]],
  components: {
    receipt: __webpack_require__(204),
    paginator: __webpack_require__(194)

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

      axios.get(this.scopeApi + '/receipts/date?from=' + this.from + '&to=' + this.to + '&records=' + this.records).then(function (res) {
        _this.receipts = res.data.data;
        if (_this.receipts.length <= 0) {
          __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$emit('alert-show', { message: 'No Receipts Between ' + _this.from + ' and ' + _this.to, status: 'success' });
        }
        _this.updatePageInfo(res.data);
      }).catch(function (err) {
        alert(err);
      });
    },
    indexPage: function indexPage() {
      window.location.href = '/';
    },
    reload: function reload(page) {
      var _this2 = this;

      axios.get(this.scopeApi + '/receipts/date?from=' + this.from + '&to=' + this.to + '&records=' + this.records + '&page=' + page).then(function (res) {
        _this2.receipts = res.data.data;
        if (_this2.receipts.length <= 0) {
          __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$emit('alert-show', { message: 'No Receipts Between ' + _this2.from + ' and ' + _this2.to, status: 'success' });
        }
        _this2.updatePageInfo(res.data);
      }).catch(function (err) {
        alert(err);
      });
    },
    reloadFromFirstPage: function reloadFromFirstPage() {
      var _this3 = this;

      axios.get(this.scopeApi + '/receipts/date?from=' + this.from + '&to=' + this.to + '&records=' + this.records).then(function (res) {
        _this3.receipts = res.data.data;
        if (_this3.receipts.length <= 0) {
          __WEBPACK_IMPORTED_MODULE_2__eventHub___default.a.$emit('alert-show', { message: 'No Receipts Between ' + _this3.from + ' and ' + _this3.to, status: 'success' });
        }
        _this3.updatePageInfo(res.data);
      }).catch(function (err) {
        alert(err);
      });
    }
  }
});

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('alert'), _vm._v(" "), _c('notifications', {
    attrs: {
      "group": "notice",
      "classes": "vue-notification z-index"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "col-sm-12"
  }, [_c('form', {
    staticClass: "form-inline",
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.reloadFromFirstPage($event)
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "from"
    }
  }, [_vm._v("From")]), _vm._v(" "), _c('input', {
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
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "to"
    }
  }, [_vm._v("To")]), _vm._v(" "), _c('input', {
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
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Go!")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4 margin-20"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_vm._m(0), _vm._v(" "), _c('select', {
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
  }, [(_vm.receipts.length > 0) ? _c('table', {
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
  })], 2)]) : _vm._e()]), _vm._v(" "), _c('paginator', {
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
  }, [_vm._v("Print "), (_vm.printList.length) ? _c('span', {
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
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('form', {
    staticClass: "form-horizontal",
    attrs: {
      "action": ""
    }
  }, [_c('h3', [_vm._v("Sender Info")]), _vm._v(" "), _c('div', {}, [_c('div', {}, [_c('div', {
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
  })])])]), _vm._v(" "), _c('div', {
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
      "type": "button"
    }
  }, [_c('span', {
    staticClass: "small"
  }, [_vm._v(" RECORDS")])])])
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
     require("vue-hot-reload-api").rerender("data-v-3f92531b", module.exports)
  }
}

/***/ })

});