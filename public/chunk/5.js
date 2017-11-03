webpackJsonp([5],{

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(231)
}
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(233),
  /* template */
  __webpack_require__(237),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/ajaysingh/code/laravel/app/resources/assets/js/components/DataTable.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DataTable.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4888336a", Component.options)
  } else {
    hotAPI.reload("data-v-4888336a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(232);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(132)("51129fd8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4888336a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DataTable.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4888336a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DataTable.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(131)(undefined);
// imports


// module
exports.push([module.i, "\n.sortable {\n  cursor: pointer;\n}\n.arrow {\n  display: inline-block;\n  vertical-align: middle;\n  width: 0;\n  height: 0;\n  margin-left: 5px;\n  opacity: .6;\n}\n.arrow--asc {\n    border-left: 4px solid transparent;\n    border-right: 4px solid transparent;\n    border-bottom: 4px solid #222;\n}\n.arrow--desc {\n    border-left: 4px solid transparent;\n    border-right: 4px solid transparent;\n    border-top: 4px solid #222;\n}\n", ""]);

// exports


/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_query_string__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_query_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_query_string__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['endpoint'],
    data: function data() {
        return {
            response: {
                table: '',
                displayable: [],
                records: [],
                allow: {}
            },
            sort: {
                key: 'id',
                order: 'asc'
            },
            limit: 50,
            quickSearchQuery: '',
            editing: {
                id: null,
                form: {},
                errors: []
            },
            search: {
                value: '',
                operator: 'equals',
                column: 'id'
            },
            creating: {
                active: false,
                form: {},
                errors: []
            }
        };
    },

    computed: {
        filteredRecords: function filteredRecords() {
            var _this = this;

            var data = this.response.records;

            data = data.filter(function (row) {
                return Object.keys(row).some(function (key) {
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
        }
    },
    methods: {
        getRecords: function getRecords() {
            var _this2 = this;

            return axios.get(this.endpoint + '?' + this.getQueryParameters()).then(function (response) {
                _this2.response = response.data.data;
            });
        },
        getQueryParameters: function getQueryParameters() {
            return __WEBPACK_IMPORTED_MODULE_0_query_string___default.a.stringify(_extends({
                limit: this.limit
            }, this.search));
        },
        sortBy: function sortBy(column) {
            this.sort.key = column;
            this.sort.order = this.sort.order === 'asc' ? 'desc' : 'asc';
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

            axios.patch(this.endpoint + '/' + this.editing.id, this.editing.form).then(function () {
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
        store: function store() {
            var _this4 = this;

            axios.post('' + this.endpoint, this.creating.form).then(function () {
                _this4.getRecords().then(function () {
                    _this4.creating.active = false;
                    _this4.creating.form = {};
                    _this4.creating.errors = [];
                });
            }).catch(function (error) {
                if (error.response.status === 422) {
                    _this4.creating.errors = error.response.data.errors;
                }
            });
        }
    },
    mounted: function mounted() {
        this.getRecords();
    }
});

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(235);
var objectAssign = __webpack_require__(236);

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

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),

/***/ 236:
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

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("\n        " + _vm._s(_vm.response.table) + "\n        "), (_vm.response.allow.creation) ? _c('a', {
    staticClass: "pull-right",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.creating.active = !_vm.creating.active
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.creating.active ? 'Cancel' : 'New record') + "\n        ")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [(_vm.creating.active) ? _c('div', {
    staticClass: "well"
  }, [_c('form', {
    staticClass: "form-horizontal",
    attrs: {
      "action": "#"
    },
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.store($event)
      }
    }
  }, [_vm._l((_vm.response.updatable), function(index, column) {
    return _c('div', {
      key: index,
      staticClass: "form-group",
      class: {
        'has-error': _vm.creating.errors[column]
      }
    }, [_c('label', {
      staticClass: "col-md-3 control-label",
      attrs: {
        "for": column
      }
    }, [_vm._v(_vm._s(column))]), _vm._v(" "), _c('div', {
      staticClass: "col-md-6"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.creating.form[column]),
        expression: "creating.form[column]"
      }],
      staticClass: "form-control",
      attrs: {
        "type": "text",
        "id": column
      },
      domProps: {
        "value": (_vm.creating.form[column])
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          var $$exp = _vm.creating.form,
            $$idx = column;
          if (!Array.isArray($$exp)) {
            _vm.creating.form[column] = $event.target.value
          } else {
            $$exp.splice($$idx, 1, $event.target.value)
          }
        }
      }
    }), _vm._v(" "), (_vm.creating.errors[column]) ? _c('span', {
      staticClass: "help-block"
    }, [_c('strong', [_vm._v(_vm._s(_vm.creating.errors[column][0]))])]) : _vm._e()])])
  }), _vm._v(" "), _vm._m(0)], 2)]) : _vm._e(), _vm._v(" "), _c('form', {
    attrs: {
      "action": "#"
    },
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.getRecords($event)
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
  }, _vm._l((_vm.response.displayable), function(column) {
    return _c('option', {
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
  }), _vm._v(" "), _vm._m(1)])])])]), _vm._v(" "), _c('div', {
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
  }, [_c('thead', [_c('tr', [_vm._l((_vm.response.displayable), function(column) {
    return _c('th', [_c('span', {
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
  }), _vm._v(" "), _c('th', [_vm._v(" ")])], 2)]), _vm._v(" "), _c('tbody', _vm._l((_vm.filteredRecords), function(record) {
    return _c('tr', [_vm._l((record), function(columnValue, column) {
      return _c('td', [(_vm.editing.id === record.id && _vm.isUpdatable(column)) ? [_c('div', {
        staticClass: "form-group",
        class: {
          'has-error': _vm.editing.errors[column]
        }
      }, [_c('input', {
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
          "value": columnValue,
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
      }, [_c('strong', [_vm._v(_vm._s(_vm.editing.errors[column][0]))])]) : _vm._e()])] : [_vm._v("\n                                " + _vm._s(columnValue) + "\n                            ")]], 2)
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
    }, [_vm._v("Edit")]) : _vm._e(), _vm._v(" "), (_vm.editing.id === record.id) ? [_c('a', {
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.update($event)
        }
      }
    }, [_vm._v("Save")]), _c('br'), _vm._v(" "), _c('a', {
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.editing.id = null
        }
      }
    }, [_vm._v("Cancel")])] : _vm._e()], 2)], 2)
  }))])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "col-md-6 col-md-offset-3"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Create")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
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
     require("vue-hot-reload-api").rerender("data-v-4888336a", module.exports)
  }
}

/***/ })

});