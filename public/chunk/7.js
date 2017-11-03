webpackJsonp([7],{

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(212),
  /* template */
  __webpack_require__(216),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/ajaysingh/code/laravel/app/resources/assets/js/components/common/settings/Settings.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Settings.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8b2a8998", Component.options)
  } else {
    hotAPI.reload("data-v-8b2a8998", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
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




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      settings: "",
      scope: "",
      scopeApi: "/api",
      setting: ""
    };
  },

  components: {
    'show-detail': __webpack_require__(213)
  },
  props: {
    admin: {
      type: Boolean
    }
  },
  computed: {
    csrf: function csrf() {
      return $('meta[name="csrf-token"]').attr('content');
    },
    url: function url() {
      return this.scope + "/settings/store";
    }
  },
  created: function created() {
    if (this.admin) {
      this.scope = "/admin";
      this.scopeApi = "/api/admin";
    }
  },
  mounted: function mounted() {
    this.getSettings();
  },


  methods: {
    getSettings: function getSettings() {
      var _this = this;

      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(this.scopeApi + "/settings/predefined").then(function (res) {
        _this.settings = res.data;
      }).catch(function (err) {
        _this.sendErrorNotice();
      });
    },
    show: function show(id) {
      var index = this.settings.map(function (setting) {
        return setting.id;
      }).indexOf(id);
      this.setting = this.settings[index];
      __WEBPACK_IMPORTED_MODULE_1__eventHub___default.a.$emit('show-setting-detail');
    },
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
    }
  }
});

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(214),
  /* template */
  __webpack_require__(215),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/ajaysingh/code/laravel/app/resources/assets/js/components/common/settings/ShowDetail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ShowDetail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c8bad602", Component.options)
  } else {
    hotAPI.reload("data-v-c8bad602", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 214:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    props: ["setting"],
    mounted: function mounted() {
        __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$on('show-setting-detail', this.show);
        __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$on('hide-setting-detail', this.hide);
    },

    methods: {
        show: function show() {
            $('#show-detail').modal('show');
        },
        hide: function hide() {
            $('#show-detail').modal('hide');
        }
    }
});

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "show-detail",
      "tabindex": "-1",
      "role": "dialog",
      "aria-labelledby": "gridSystemModalLabel"
    }
  }, [_c('div', {
    staticClass: "modal-dialog",
    attrs: {
      "role": "document"
    }
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_vm._m(0), _vm._v(" "), _c('h4', {
    staticClass: "modal-title",
    attrs: {
      "id": "gridSystemModalLabel"
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.setting.name)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    staticClass: "bold",
    domProps: {
      "textContent": _vm._s('Font')
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.setting.font)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    staticClass: "bold",
    domProps: {
      "textContent": _vm._s('Font Size')
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.setting.font_size)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    staticClass: "bold",
    domProps: {
      "textContent": _vm._s('Page Width')
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.setting.page_width)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    staticClass: "bold",
    domProps: {
      "textContent": _vm._s('Page Height')
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.setting.page_height)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    staticClass: "bold",
    domProps: {
      "textContent": _vm._s('Sender ID From Top')
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.setting.top_sender_id)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    staticClass: "bold",
    domProps: {
      "textContent": _vm._s('Sender ID From Left')
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.setting.left_sender_id)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    staticClass: "bold",
    domProps: {
      "textContent": _vm._s('Sender From Top')
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.setting.top_sender)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    staticClass: "bold",
    domProps: {
      "textContent": _vm._s('Sender From Left')
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.setting.left_sender)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    staticClass: "bold",
    domProps: {
      "textContent": _vm._s('Receiver From Top')
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.setting.top_receiver)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    staticClass: "bold",
    domProps: {
      "textContent": _vm._s('Receiver From Left')
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.setting.left_receiver)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    staticClass: "bold",
    domProps: {
      "textContent": _vm._s('Product From Top')
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.setting.top_product)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    staticClass: "bold",
    domProps: {
      "textContent": _vm._s('Product From Left')
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.setting.left_product)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    staticClass: "bold",
    domProps: {
      "textContent": _vm._s('Date From Top')
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.setting.top_date)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    staticClass: "bold",
    domProps: {
      "textContent": _vm._s('Date From Left')
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.setting.left_date)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    staticClass: "bold",
    domProps: {
      "textContent": _vm._s('Amount From Top')
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.setting.top_amount)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    staticClass: "bold",
    domProps: {
      "textContent": _vm._s('Amount From Left')
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.setting.left_amount)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    staticClass: "bold",
    domProps: {
      "textContent": _vm._s('Postcode From Top')
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.setting.top_postcode)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    staticClass: "bold",
    domProps: {
      "textContent": _vm._s('Postcode From Left')
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.setting.left_postcode)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    staticClass: "bold",
    domProps: {
      "textContent": _vm._s('Phone From Top')
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.setting.top_phone)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    staticClass: "bold",
    domProps: {
      "textContent": _vm._s('Phone From Left')
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.setting.left_phone)
    }
  })])])])]), _vm._v(" "), _vm._m(1)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
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
  }, [_vm._v("×")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("Close")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c8bad602", module.exports)
  }
}

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('form', {
    attrs: {
      "action": _vm.url,
      "method": "post"
    }
  }, [_c('input', {
    attrs: {
      "type": "hidden",
      "name": "_token"
    },
    domProps: {
      "value": _vm.csrf
    }
  }), _vm._v(" "), _c('table', {
    staticClass: "table"
  }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.settings), function(setting, index) {
    return _c('tr', {
      key: index
    }, [_c('td', [_c('input', {
      attrs: {
        "type": "radio",
        "name": "setting",
        "required": ""
      },
      domProps: {
        "value": setting.id
      }
    })]), _vm._v(" "), _c('td', {
      domProps: {
        "textContent": _vm._s(setting.name)
      }
    }), _vm._v(" "), _c('td', {
      domProps: {
        "textContent": _vm._s(setting.font)
      }
    }), _vm._v(" "), _c('td', {
      domProps: {
        "textContent": _vm._s(setting.font_size)
      }
    }), _vm._v(" "), _c('td', [_c('a', {
      attrs: {
        "href": ""
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.show(setting.id)
        }
      }
    }, [_vm._v("Details...")])])])
  }))]), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _c('show-detail', {
    attrs: {
      "setting": _vm.setting
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('td', [_vm._v("#")]), _vm._v(" "), _c('td', [_vm._v("Name")]), _vm._v(" "), _c('td', [_vm._v("Font")]), _vm._v(" "), _c('td', [_vm._v("Font Size")]), _vm._v(" "), _c('td', [_vm._v("Action")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "button-group"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "name": "submit"
    }
  }, [_vm._v("Select")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8b2a8998", module.exports)
  }
}

/***/ })

});