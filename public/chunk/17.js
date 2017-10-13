webpackJsonp([17],{

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(206),
  /* template */
  __webpack_require__(207),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/ajaysingh/code/laravel/app/resources/assets/js/components/ReceiptForm.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ReceiptForm.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ba7bc93a", Component.options)
  } else {
    hotAPI.reload("data-v-ba7bc93a", Component.options)
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

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form_Form__ = __webpack_require__(193);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            form: new __WEBPACK_IMPORTED_MODULE_0__Form_Form__["a" /* default */]({
                sender_id: '',
                sender: '',
                receivers: ''
            }),
            importForm: new __WEBPACK_IMPORTED_MODULE_0__Form_Form__["a" /* default */]({
                receipts: ''
            }),
            loadCount: 0,
            senderPlaceholder: 'Name \nAddress \nPhone \nEmail',
            receiverPlaceholder: 'Receiver 1 Name \nAddress \nPhone \nEmail \nProducts \namount (starting with "$")  \n\r\nReceiver 2 Name \nAddress \nPhone \nEmail \nProduct \namount (starting with "$")',
            pdfName: '',
            loading: false
        };
    },
    mounted: function mounted() {},

    computed: {
        csrf: function csrf() {
            return window.token.content;
        },
        onMobile: function onMobile() {
            return this.isMobile();
        }
    },
    methods: {
        submit: function submit() {
            var _this = this;

            this.loading = true;
            this.form.post('/print', this.form).then(function (res) {
                // this.resetReceiver();
                console.log(res);
                if (res.pdfName) {
                    _this.pdfName = res.pdfName;
                    _this.loadPdf(res);
                } else {
                    _this.loading = false;
                    _this.$notify({
                        group: 'notice',
                        type: 'error',
                        title: 'Error ',
                        text: 'Something went wrong',
                        duration: 10000,
                        speed: 1000
                    });
                }
            }).catch(function (error) {
                _this.$notify({
                    group: 'notice',
                    type: 'error',
                    title: 'Error ',
                    text: 'Something went wrong',
                    duration: 10000,
                    speed: 1000
                });
            });
        },
        loadPdf: function loadPdf(res) {
            window.data = res;
            if (!this.isMobile()) {
                $('#frame').attr('src', '/pdf/' + this.pdfName);
            } else {
                this.loading = false;
                $('#frame').attr('src', '/pdf/' + this.pdfName + '/download');
            }
        },
        loadingComplete: function loadingComplete() {
            if (!this.isMobile()) {
                this.loading = false;
                if (this.loadCount !== 0) {
                    window.frames['frame'].print();
                }
                this.loadCount++;
            }
        },
        loadingFail: function loadingFail() {
            this.loading = false;
            alert('Loading Failed');
        },
        isMobile: function isMobile() {
            return window.isMobile();
        },
        resetReceiver: function resetReceiver() {
            this.form.receivers = '';
        },
        resetSender: function resetSender() {
            this.form.sender = '';
        },
        reset: function reset() {
            this.form.reset();
        },
        fileUploaded: function fileUploaded($event) {
            window.file = $event.target;
        },
        importReceipts: function importReceipts() {
            var _this2 = this;

            var form = $('#csv-upload')[0];
            var data = new FormData(form);
            axios.post('/receipts/csv/upload', data, {}).then(function (res) {
                console.log(res);
                $('#import-receipts').modal('hide');
                _this2.pdfName = res.data.pdfName;
                _this2.loadPdf(res.data);
            }).catch(function (error) {
                var message = error.response.data.file.toString();
                _this2.$notify({
                    group: 'notice',
                    type: 'error',
                    title: 'Error ',
                    text: message,
                    duration: 10000,
                    speed: 1000
                });
            });
        }
    }
});

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, [_c('notifications', {
    attrs: {
      "group": "notice",
      "classes": "vue-notification z-index"
    }
  }), _vm._v(" "), _c('form', {
    staticClass: "form-horizontal",
    attrs: {
      "id": "print-form",
      "action": "/print",
      "method": "post",
      "target": "_blank"
    }
  }, [(_vm.onMobile) ? _c('input', {
    attrs: {
      "type": "hidden",
      "name": "mobile",
      "value": "true"
    }
  }) : _vm._e(), _vm._v(" "), _c('input', {
    attrs: {
      "type": "hidden",
      "name": "_token"
    },
    domProps: {
      "value": _vm.csrf
    }
  }), _vm._v(" "), _c('h3', [_vm._v("Sender")]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.sender_id),
      expression: "form.sender_id"
    }],
    staticClass: "form-control",
    attrs: {
      "name": "sender_id",
      "placeholder": "Sender ID (Optional)"
    },
    domProps: {
      "value": (_vm.form.sender_id)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.sender_id = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.sender),
      expression: "form.sender"
    }],
    staticClass: "form-control",
    attrs: {
      "rows": "10",
      "name": "sender",
      "placeholder": _vm.senderPlaceholder
    },
    domProps: {
      "value": (_vm.form.sender)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.sender = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('h3', [_vm._v("Receivers")]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.receivers),
      expression: "form.receivers"
    }],
    staticClass: "form-control",
    attrs: {
      "rows": "15",
      "name": "receivers",
      "placeholder": _vm.receiverPlaceholder
    },
    domProps: {
      "value": (_vm.form.receivers)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.receivers = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('span', {
    staticClass: "btn btn-primary",
    attrs: {
      "data-toggle": "modal",
      "data-target": "#import-receipts"
    }
  }, [_vm._v("Import")]), _vm._v(" "), _c('span', {
    staticClass: "btn btn-primary",
    on: {
      "click": _vm.reset
    }
  }, [_vm._v("Reset")]), _vm._v(" "), _c('span', {
    staticClass: "btn btn-primary",
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("Print")])])]), _vm._v(" "), _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "import-receipts",
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
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('form', {
    attrs: {
      "id": "csv-upload",
      "method": "post",
      "action": "/receipts/csv/upload",
      "enctype": "multipart/form-data"
    },
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.importReceipts($event)
      }
    }
  }, [_c('input', {
    attrs: {
      "type": "hidden",
      "name": "_token"
    },
    domProps: {
      "value": _vm.csrf
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "file"
    }
  }, [_vm._v("Choose file to upload")]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "file",
      "name": "file"
    },
    on: {
      "change": _vm.fileUploaded
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary"
  }, [_vm._v("Print")])])])])])]), _vm._v(" "), (_vm.loading) ? _c('div', {
    staticClass: "overlay"
  }, [_c('loader')], 1) : _vm._e(), _vm._v(" "), _c('iframe', {
    staticClass: "hide",
    attrs: {
      "id": "frame",
      "name": "frame",
      "src": ""
    },
    on: {
      "load": _vm.loadingComplete
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
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
  }, [_vm._v("Import Receipts")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ba7bc93a", module.exports)
  }
}

/***/ })

});