webpackJsonp([4],{

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(202),
  /* template */
  __webpack_require__(208),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/ajaysingh/code/laravel/app/resources/assets/js/components/common/Dashboard/Dashboard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Dashboard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e7a1aa44", Component.options)
  } else {
    hotAPI.reload("data-v-e7a1aa44", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            scope: '',
            scopeApi: '/api',
            use: 'Day',
            date: __WEBPACK_IMPORTED_MODULE_0_moment___default.a().utc().format('LL'),
            month: __WEBPACK_IMPORTED_MODULE_0_moment___default.a().utc().format('MMMM YYYY'),
            year: __WEBPACK_IMPORTED_MODULE_0_moment___default.a().utc().format('YYYY'),
            data: {
                totalReceipts: 0,
                totalUsers: 0,
                totalManufactures: 0,
                totalWholesalers: 0,
                totalRetailers: 0,
                totalNormalUsers: 0,
                topSelling: 'N A',
                totalExpiredUsers: 0,
                topUser: 'N A',
                newRegistrations: 0,
                totalSales: 0,
                totalProductCost: 0,
                totalDeliveryCost: 0,
                netProfit: 0
            }
        };
    },

    props: {
        admin: {
            type: Boolean
        }
    },
    components: {
        'report': __webpack_require__(203)
    },
    created: function created() {
        if (this.admin) {
            this.scope = '/admin';
            this.scopeApi = '/api/admin';
        }
    },
    mounted: function mounted() {
        this.loadData();
    },

    methods: {
        updateUseProperty: function updateUseProperty(use) {
            this.use = use;
            this.loadData();
        },
        increateDate: function increateDate() {
            var date = __WEBPACK_IMPORTED_MODULE_0_moment___default.a(this.date, 'LL').add(1, 'days');
            this.date = date.format('LL');
        },
        decreateDate: function decreateDate() {
            var date = __WEBPACK_IMPORTED_MODULE_0_moment___default.a(this.date, 'LL').subtract(1, 'days');
            this.date = date.format('LL');
        },
        increateMonth: function increateMonth() {
            var month = __WEBPACK_IMPORTED_MODULE_0_moment___default.a(this.month, 'MMMM YYYY').add(1, 'months');
            this.month = month.format('MMMM YYYY');
        },
        decreateMonth: function decreateMonth() {
            var month = __WEBPACK_IMPORTED_MODULE_0_moment___default.a(this.month, 'MMMM YYYY').subtract(1, 'months');
            this.month = month.format('MMMM YYYY');
        },
        increateYear: function increateYear() {
            this.year++;
        },
        decreateYear: function decreateYear() {
            this.year--;
        },
        increaseDates: function increaseDates() {
            if (this.use == 'Day') this.increateDate();else if (this.use == 'Month') this.increateMonth();else if (this.use == 'Year') this.increateYear();
            this.loadData();
        },
        decreaseDates: function decreaseDates() {
            if (this.use == 'Day') this.decreateDate();else if (this.use == 'Month') this.decreateMonth();else if (this.use == 'Year') this.decreateYear();
            this.loadData();
        },
        loadData: function loadData() {
            var _this = this;

            var url = this.scopeApi + '/dashboard';
            if (this.use == 'Day') url += '?date=' + this.date + '&use=' + this.use;else if (this.use == 'Month') url += '?month=' + this.month + '&use=' + this.use;else if (this.use == 'Year') url += '?year=' + this.year + '&use=' + this.use;
            axios.get(url).then(function (res) {
                _this.setData(res.data);
            }).catch(function (err) {
                console.log(err);
                _this.sendErrorNotice();
            });
        },
        setData: function setData(data) {
            for (var index in data) {
                this.data[index] = data[index];
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

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(204)
}
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(206),
  /* template */
  __webpack_require__(207),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0bb0c35a",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/ajaysingh/code/laravel/app/resources/assets/js/components/common/Dashboard/Report.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Report.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0bb0c35a", Component.options)
  } else {
    hotAPI.reload("data-v-0bb0c35a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(205);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(132)("fe71096e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0bb0c35a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Report.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0bb0c35a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Report.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(131)(undefined);
// imports


// module
exports.push([module.i, "\n.summary-text[data-v-0bb0c35a] {\n  display: flex;\n  padding: 20px;\n  font-size: 20px;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ 206:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      firstLoad: true,
      summary: {
        Date: "",
        month: [],
        year: []
      },
      url: "/api/summary",
      changed: true
    };
  },

  computed: {
    detectChangeOffDate: function detectChangeOffDate() {
      return this.use, this.date, this.month, this.year, Date.now();
    }
  },
  watch: {
    detectChangeOffDate: function detectChangeOffDate() {
      this.changed = true;
    }
  },
  mounted: function mounted() {},

  props: ["use", "date", "month", "year"],
  methods: {
    getSummary: function getSummary() {
      if (this.changed) {
        if (this.use == "Day") this.printDateSummary();else if (this.use == "Month") this.printMonthSummary();else if (this.use == "Year") this.printYearSummary();
      } else {
        this.reprint();
      }
    },
    printDateSummary: function printDateSummary() {
      __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$emit("start-loading");
      axios.get(this.url + "?use=" + this.use + "&date=" + this.date).then(function (res) {
        console.log(res.data);
        $("#report").attr("src", "/pdf/" + res.data.pdfName);
      });
      this.changed = false;
    },
    printMonthSummary: function printMonthSummary() {
      __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$emit("start-loading");
      axios.get(this.url + "?use=" + this.use + "&month=" + this.month).then(function (res) {
        console.log(res.data);
        $("#report").attr("src", "/pdf/" + res.data.pdfName);
      });
      this.changed = false;
    },
    printYearSummary: function printYearSummary() {
      __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$emit("start-loading");
      axios.get(this.url + "?use=" + this.use + "&year=" + this.year).then(function (res) {
        console.log(res.data);
        $("#report").attr("src", "/pdf/" + res.data.pdfName);
      });
      this.changed = false;
    },
    print: function print() {
      __WEBPACK_IMPORTED_MODULE_0__eventHub___default.a.$emit("stop-loading");
      if (!this.firstLoad) {
        window.frames["report"].print();
      }
      this.firstLoad = false;
    },
    reprint: function reprint() {
      window.frames["report"].print();
    }
  }
});

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-12"
  }, [_c('div', {
    staticClass: "blue summary-text",
    on: {
      "click": _vm.getSummary
    }
  }, [_vm._v("\n            Print Summary\n        ")])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('iframe', {
    staticClass: "hide",
    attrs: {
      "id": "report",
      "name": "report",
      "type": "application/pdf",
      "src": "",
      "frameborder": "0"
    },
    on: {
      "load": _vm.print
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hide print",
    attrs: {
      "id": "print"
    }
  }, [_c('div', {
    staticClass: "Date"
  }, [_vm._v("Date")]), _vm._v(" "), _c('div', {
    staticClass: "month"
  }, [_vm._v("Month")]), _vm._v(" "), _c('div', {
    staticClass: "year"
  }, [_vm._v("Year")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0bb0c35a", module.exports)
  }
}

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "text-center"
  }, [_c('button', {
    staticClass: "btn btn-success",
    class: {
      active: _vm.use == 'Day'
    },
    on: {
      "click": function($event) {
        _vm.updateUseProperty('Day')
      }
    }
  }, [_vm._v("Day")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    class: {
      active: _vm.use == 'Month'
    },
    on: {
      "click": function($event) {
        _vm.updateUseProperty('Month')
      }
    }
  }, [_vm._v("Month")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    class: {
      active: _vm.use == 'Year'
    },
    on: {
      "click": function($event) {
        _vm.updateUseProperty('Year')
      }
    }
  }, [_vm._v("Year")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "text-center change-date"
  }, [_c('i', {
    staticClass: "fa fa-chevron-left",
    on: {
      "click": _vm.decreaseDates
    }
  }), _vm._v(" "), (_vm.use == 'Day') ? _c('span', {
    domProps: {
      "textContent": _vm._s(_vm.date)
    }
  }) : (_vm.use == 'Month') ? _c('span', {
    domProps: {
      "textContent": _vm._s(_vm.month)
    }
  }) : (_vm.use == 'Year') ? _c('span', {
    domProps: {
      "textContent": _vm._s(_vm.year)
    }
  }) : _vm._e(), _vm._v(" "), _c('span', [_c('i', {
    staticClass: "fa fa-chevron-right",
    on: {
      "click": _vm.increaseDates
    }
  })])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [(_vm.admin) ? _c('div', [_c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "dashboard_item"
  }, [_c('div', {
    staticClass: "col-xs-8 dashboard_item_left"
  }, [_c('p', {
    staticClass: "dashboard_item_title"
  }, [_vm._v("Total Receipts")]), _vm._v(" "), _c('span', {
    staticClass: "dashboard_item_value",
    domProps: {
      "textContent": _vm._s(_vm.data.totalReceipts)
    }
  })]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('div', {
    staticClass: "dashboard_item"
  }, [_c('div', {
    staticClass: "col-xs-8 dashboard_item_left"
  }, [_c('p', {
    staticClass: "dashboard_item_title"
  }, [_vm._v("Top Selling")]), _vm._v(" "), _c('span', {
    staticClass: "dashboard_item_value",
    domProps: {
      "textContent": _vm._s(_vm.data.topSelling || 'N A')
    }
  })]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('div', {
    staticClass: "dashboard_item"
  }, [_c('div', {
    staticClass: "col-xs-8 dashboard_item_left"
  }, [_c('p', {
    staticClass: "dashboard_item_title"
  }, [_vm._v("Top User")]), _vm._v(" "), _c('span', {
    staticClass: "dashboard_item_value",
    domProps: {
      "textContent": _vm._s(_vm.data.topUser || 'N A')
    }
  })]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "dashboard_item"
  }, [_c('div', {
    staticClass: "col-xs-8 dashboard_item_left"
  }, [_c('p', {
    staticClass: "dashboard_item_title"
  }, [_vm._v("Total Users")]), _vm._v(" "), _c('span', {
    staticClass: "dashboard_item_value",
    domProps: {
      "textContent": _vm._s(_vm.data.totalUsers)
    }
  })]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('div', {
    staticClass: "dashboard_item"
  }, [_c('div', {
    staticClass: "col-xs-8 dashboard_item_left"
  }, [_c('p', {
    staticClass: "dashboard_item_title"
  }, [_vm._v("Total Expired Users")]), _vm._v(" "), _c('span', {
    staticClass: "dashboard_item_value",
    domProps: {
      "textContent": _vm._s(_vm.data.totalExpiredUsers)
    }
  })]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('div', {
    staticClass: "dashboard_item"
  }, [_c('div', {
    staticClass: "col-xs-8 dashboard_item_left"
  }, [_c('p', {
    staticClass: "dashboard_item_title"
  }, [_vm._v("New Registrations\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "dashboard_item_value",
    domProps: {
      "textContent": _vm._s(_vm.data.newRegistrations)
    }
  })]), _vm._v(" "), _vm._m(5), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "dashboard_item"
  }, [_c('div', {
    staticClass: "col-xs-8 dashboard_item_left"
  }, [_c('p', {
    staticClass: "dashboard_item_title"
  }, [_vm._v("Total Manufactures")]), _vm._v(" "), _c('span', {
    staticClass: "dashboard_item_value",
    domProps: {
      "textContent": _vm._s(_vm.data.totalManufactures)
    }
  })]), _vm._v(" "), _vm._m(6), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('div', {
    staticClass: "dashboard_item"
  }, [_c('div', {
    staticClass: "col-xs-8 dashboard_item_left"
  }, [_c('p', {
    staticClass: "dashboard_item_title"
  }, [_vm._v("Total Wholesalers")]), _vm._v(" "), _c('span', {
    staticClass: "dashboard_item_value",
    domProps: {
      "textContent": _vm._s(_vm.data.totalWholesalers)
    }
  })]), _vm._v(" "), _vm._m(7), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('div', {
    staticClass: "dashboard_item"
  }, [_c('div', {
    staticClass: "col-xs-8 dashboard_item_left"
  }, [_c('p', {
    staticClass: "dashboard_item_title"
  }, [_vm._v("Total Retailers")]), _vm._v(" "), _c('span', {
    staticClass: "dashboard_item_value",
    domProps: {
      "textContent": _vm._s(_vm.data.totalRetailers)
    }
  })]), _vm._v(" "), _vm._m(8), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('div', {
    staticClass: "dashboard_item"
  }, [_c('div', {
    staticClass: "col-xs-8 dashboard_item_left"
  }, [_c('p', {
    staticClass: "dashboard_item_title"
  }, [_vm._v("Total Normal Users")]), _vm._v(" "), _c('span', {
    staticClass: "dashboard_item_value",
    domProps: {
      "textContent": _vm._s(_vm.data.totalNormalUsers)
    }
  })]), _vm._v(" "), _vm._m(9), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })])])]) : _vm._e(), _vm._v(" "), (!_vm.admin) ? _c('div', [_c('div', {
    staticClass: "col-sm-6 col-md-6"
  }, [_c('div', {
    staticClass: "dashboard_item"
  }, [_c('div', {
    staticClass: "col-xs-8 dashboard_item_left"
  }, [_c('p', {
    staticClass: "dashboard_item_title"
  }, [_vm._v("Total Receipts")]), _vm._v(" "), _c('span', {
    staticClass: "dashboard_item_value",
    domProps: {
      "textContent": _vm._s(_vm.data.totalReceipts)
    }
  })]), _vm._v(" "), _vm._m(10), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('div', {
    staticClass: "dashboard_item"
  }, [_c('div', {
    staticClass: "col-xs-8 dashboard_item_left"
  }, [_c('p', {
    staticClass: "dashboard_item_title"
  }, [_vm._v("Top Selling")]), _vm._v(" "), _c('span', {
    staticClass: "dashboard_item_value",
    domProps: {
      "textContent": _vm._s(_vm.data.topSelling || 'N A')
    }
  })]), _vm._v(" "), _vm._m(11), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-6"
  }, [_c('div', {
    staticClass: "dashboard_item"
  }, [_c('div', {
    staticClass: "col-xs-8 dashboard_item_left"
  }, [_c('p', {
    staticClass: "dashboard_item_title"
  }, [_vm._v("Total Sales")]), _vm._v(" "), _c('span', {
    staticClass: "dashboard_item_value",
    domProps: {
      "textContent": _vm._s(_vm.data.totalSales)
    }
  })]), _vm._v(" "), _vm._m(12), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('div', {
    staticClass: "dashboard_item"
  }, [_c('div', {
    staticClass: "col-xs-8 dashboard_item_left"
  }, [_c('p', {
    staticClass: "dashboard_item_title"
  }, [_vm._v("Total Product Cost")]), _vm._v(" "), _c('span', {
    staticClass: "dashboard_item_value",
    domProps: {
      "textContent": _vm._s(_vm.data.totalProductCost)
    }
  })]), _vm._v(" "), _vm._m(13), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('div', {
    staticClass: "dashboard_item"
  }, [_c('div', {
    staticClass: "col-xs-8 dashboard_item_left"
  }, [_c('p', {
    staticClass: "dashboard_item_title"
  }, [_vm._v("Total Delivery Cost")]), _vm._v(" "), _c('span', {
    staticClass: "dashboard_item_value",
    domProps: {
      "textContent": _vm._s(_vm.data.totalDeliveryCost)
    }
  })]), _vm._v(" "), _vm._m(14), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('div', {
    staticClass: "dashboard_item"
  }, [_c('div', {
    staticClass: "col-xs-8 dashboard_item_left"
  }, [_c('p', {
    staticClass: "dashboard_item_title"
  }, [_vm._v("Net Profit")]), _vm._v(" "), _c('span', {
    staticClass: "dashboard_item_value",
    domProps: {
      "textContent": _vm._s(_vm.data.netProfit)
    }
  })]), _vm._v(" "), _vm._m(15), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })]), _vm._v(" "), _c('div', {
    staticClass: "dashboard_item"
  }, [_c('report', {
    attrs: {
      "use": _vm.use,
      "date": _vm.date,
      "month": _vm.month,
      "year": _vm.year
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })], 1)])]) : _vm._e()])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-xs-4 dashboard_item_right blue text-center"
  }, [_c('div', {
    staticClass: "dashboard_item_icon"
  }, [_c('i', {
    staticClass: "fa fa-print"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-xs-4 dashboard_item_right blue text-center"
  }, [_c('div', {
    staticClass: "dashboard_item_icon"
  }, [_c('i', {
    staticClass: "fa fa-trophy"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-xs-4 dashboard_item_right blue text-center"
  }, [_c('div', {
    staticClass: "dashboard_item_icon"
  }, [_c('i', {
    staticClass: "fa fa-trophy"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-xs-4 dashboard_item_right blue text-center"
  }, [_c('div', {
    staticClass: "dashboard_item_icon"
  }, [_c('i', {
    staticClass: "fa fa-user"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-xs-4 dashboard_item_right blue text-center"
  }, [_c('div', {
    staticClass: "dashboard_item_icon"
  }, [_c('i', {
    staticClass: "fa fa-user"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-xs-4 dashboard_item_right blue text-center"
  }, [_c('div', {
    staticClass: "dashboard_item_icon"
  }, [_c('i', {
    staticClass: "fa fa-user"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-xs-4 dashboard_item_right blue text-center"
  }, [_c('div', {
    staticClass: "dashboard_item_icon"
  }, [_c('i', {
    staticClass: "fa fa-user"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-xs-4 dashboard_item_right blue text-center"
  }, [_c('div', {
    staticClass: "dashboard_item_icon"
  }, [_c('i', {
    staticClass: "fa fa-user"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-xs-4 dashboard_item_right blue text-center"
  }, [_c('div', {
    staticClass: "dashboard_item_icon"
  }, [_c('i', {
    staticClass: "fa fa-user"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-xs-4 dashboard_item_right blue text-center"
  }, [_c('div', {
    staticClass: "dashboard_item_icon"
  }, [_c('i', {
    staticClass: "fa fa-user"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-xs-4 dashboard_item_right blue text-center"
  }, [_c('div', {
    staticClass: "dashboard_item_icon"
  }, [_c('i', {
    staticClass: "fa fa-print"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-xs-4 dashboard_item_right blue text-center"
  }, [_c('div', {
    staticClass: "dashboard_item_icon"
  }, [_c('i', {
    staticClass: "fa fa-trophy"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-xs-4 dashboard_item_right blue text-center"
  }, [_c('div', {
    staticClass: "dashboard_item_icon"
  }, [_c('i', {
    staticClass: "fa fa-user"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-xs-4 dashboard_item_right blue text-center"
  }, [_c('div', {
    staticClass: "dashboard_item_icon"
  }, [_c('i', {
    staticClass: "fa fa-user"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-xs-4 dashboard_item_right blue text-center"
  }, [_c('div', {
    staticClass: "dashboard_item_icon"
  }, [_c('i', {
    staticClass: "fa fa-user"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-xs-4 dashboard_item_right blue text-center"
  }, [_c('div', {
    staticClass: "dashboard_item_icon"
  }, [_c('i', {
    staticClass: "fa fa-user"
  })])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e7a1aa44", module.exports)
  }
}

/***/ })

});