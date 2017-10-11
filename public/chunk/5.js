webpackJsonp([5],{

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(219),
  /* template */
  __webpack_require__(220),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/ajaysingh/code/laravel/app/resources/assets/js/components/receipts/EditReceipt.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] EditReceipt.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73ea7c83", Component.options)
  } else {
    hotAPI.reload("data-v-73ea7c83", Component.options)
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

/***/ 196:
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

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form_Form__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eventHub__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eventHub___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__eventHub__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empty_Receipt__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empty_Receipt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__empty_Receipt__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            edit: new __WEBPACK_IMPORTED_MODULE_0__Form_Form__["a" /* default */](__WEBPACK_IMPORTED_MODULE_2__empty_Receipt___default.a),
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
        __WEBPACK_IMPORTED_MODULE_1__eventHub___default.a.$on('edit', this.copyToEdit);
    },


    methods: {
        copyToEdit: function copyToEdit(receipt) {
            for (var property in receipt) {
                if (property.includes('address')) {
                    this.edit[property] = receipt[property].replace('|', "\n");
                } else {
                    this.edit[property] = receipt[property];
                }
            }
            $('#edit-receipt').modal('show');
        },
        update: function update() {
            var _this = this;

            __WEBPACK_IMPORTED_MODULE_1__eventHub___default.a.$emit('start-loading');
            this.edit.post(this.scope + '/receipts/' + this.edit.id).then(function (res) {
                __WEBPACK_IMPORTED_MODULE_1__eventHub___default.a.$emit('stop-loading');
                _this.$emit('update', _this.edit);
                $('#edit-receipt').modal('hide');
                _this.$notify({
                    group: 'notice',
                    type: 'success',
                    title: 'Success ',
                    text: 'Receipt successfully edited',
                    duration: 10000,
                    speed: 1000
                });
            }).catch(function (err) {
                __WEBPACK_IMPORTED_MODULE_1__eventHub___default.a.$emit('stop-loading');
                var message = '<ul>';
                for (var name in _this.edit.errors.errors) {
                    message += '<li>' + _this.edit.errors.get(name) + '</li>';
                }
                message += '</ul>';
                __WEBPACK_IMPORTED_MODULE_1__eventHub___default.a.$emit('alert-show', {
                    message: message,
                    status: 'error'
                });
                _this.$notify({
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

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
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
  }, [_vm._m(0), _vm._v(" "), _c('div', {
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
  }, [_vm._v("Save changes")])])])])])])
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
  }, [_vm._v("Edit Receipt")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-73ea7c83", module.exports)
  }
}

/***/ })

});