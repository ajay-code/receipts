webpackJsonp([7],{

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(249),
  /* template */
  __webpack_require__(250),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/ajaysingh/code/laravel/app/resources/assets/js/components/global/NetAmount.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] NetAmount.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-22209c72", Component.options)
  } else {
    hotAPI.reload("data-v-22209c72", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            totalAmount: 0,
            totalProductCost: 0,
            totalPostageCost: 0,
            month: 'current',
            firstLoad: true
        };
    },
    mounted: function mounted() {
        this.load();
    },

    props: ['scopeApi'],
    computed: {
        netAmount: function netAmount() {
            return this.totalAmount - (this.totalProductCost + this.totalPostageCost);
        }
    },

    methods: {
        load: function load() {
            var _this = this;

            axios.get(this.scopeApi + '/net/amount?net=' + this.month).then(function (res) {
                _this.totalAmount = parseInt(res.data.totalAmount);
                _this.totalProductCost = parseInt(res.data.totalProductCost);
                _this.totalPostageCost = parseInt(res.data.totalPostageCost);
                _this.firstLoad = false;
            }).catch(function (err) {
                if (_this.firstLoad) {
                    _this.firstLoad = false;
                    return 0;
                }
                _this.$notify({
                    group: 'notice',
                    type: 'error',
                    title: 'Error ',
                    text: 'No receipts ' + _this.month,
                    duration: 10000,
                    speed: 1000
                });
                _this.firstLoad = false;
            });
        }
    }
});

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('table', {
    staticClass: "table table-hover"
  }, [_c('caption', [_c('div', {
    staticClass: "col-sm-6"
  }, [_vm._v("\n                STATISTIC\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4 col-sm-offset-2"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.month),
      expression: "month"
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
        _vm.month = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }, _vm.load]
    }
  }, [_c('option', {
    attrs: {
      "value": "current"
    }
  }, [_vm._v("This Month")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "last"
    }
  }, [_vm._v("Last Month")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "last-three"
    }
  }, [_vm._v("Last Three Month")])])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('th', [_vm._v(" Total Sales ")]), _vm._v(" "), _c('td', {
    domProps: {
      "textContent": _vm._s('$' + _vm.totalAmount)
    }
  })]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(" Total Product Cost ")]), _vm._v(" "), _c('td', {
    domProps: {
      "textContent": _vm._s('$' + _vm.totalProductCost)
    }
  })]), _vm._v(" "), _c('tr', [_c('th', [_vm._v(" Total Postage Cost ")]), _vm._v(" "), _c('td', {
    domProps: {
      "textContent": _vm._s('$' + _vm.totalPostageCost)
    }
  })]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("Net")]), _vm._v(" "), _c('td', {
    domProps: {
      "textContent": _vm._s('$' + _vm.netAmount)
    }
  })])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-22209c72", module.exports)
  }
}

/***/ })

});