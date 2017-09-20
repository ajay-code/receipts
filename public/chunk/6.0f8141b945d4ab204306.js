webpackJsonp([6],{

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(212),
  /* template */
  __webpack_require__(217),
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

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Errors__ = __webpack_require__(193);
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

/***/ 193:
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

/***/ 194:
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

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(196),
  /* template */
  __webpack_require__(197),
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

/***/ 196:
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

/***/ 197:
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
      key: page,
      class: {
        active: page == _vm.pageInfo.current_page
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.loadPage(page)
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

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form_Form__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eventHub__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eventHub___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__eventHub__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empty_User__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empty_User___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__empty_User__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__empty_PageInfo__ = __webpack_require__(194);
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
    user: __webpack_require__(214),
    paginator: __webpack_require__(195)

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

/***/ 213:
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

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(215),
  /* template */
  __webpack_require__(216),
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

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eventHub__ = __webpack_require__(15);
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

/***/ 216:
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

/***/ 217:
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
  }, [_vm._v("Print "), (_vm.printList.length) ? _c('span', {
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