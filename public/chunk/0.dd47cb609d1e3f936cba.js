webpackJsonp([0],{173:function(t,o,e){var a=e(6)(e(222),e(223),null,null,null);t.exports=a.exports},222:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){return{totalAmount:0,totalProductCost:0,totalPostageCost:0,month:"current",firstLoad:!0,loading:!1}},mounted:function(){this.load()},props:["scopeApi"],computed:{netAmount:function(){return this.totalAmount-(this.totalProductCost+this.totalPostageCost)}},methods:{load:function(){var t=this;this.loading=!0,axios.get(this.scopeApi+"/net/amount?net="+this.month).then(function(o){t.totalAmount=parseInt(o.data.totalAmount),t.totalProductCost=parseInt(o.data.totalProductCost),t.totalPostageCost=parseInt(o.data.totalPostageCost),t.firstLoad=!1,t.loading=!1}).catch(function(o){if(t.loading=!1,t.firstLoad)return t.firstLoad=!1,0;t.$notify({group:"notice",type:"error",title:"Error ",text:"Something Went Wrong",duration:1e4,speed:1e3}),t.firstLoad=!1})}}}},223:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"row"},[e("table",{staticClass:"table table-hover"},[e("caption",[e("div",{staticClass:"col-sm-6"},[t._v("\n                STATISTIC\n            ")]),t._v(" "),e("div",{staticClass:"col-sm-4 col-sm-offset-2"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.month,expression:"month"}],staticClass:"form-control",on:{change:[function(o){var e=Array.prototype.filter.call(o.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.month=o.target.multiple?e:e[0]},t.load]}},[e("option",{attrs:{value:"current"}},[t._v("This Month")]),t._v(" "),e("option",{attrs:{value:"last"}},[t._v("Last Month")]),t._v(" "),e("option",{attrs:{value:"last-three"}},[t._v("Last Three Month")])])])]),t._v(" "),e("tbody",[e("tr",[e("th",[t._v(" Total Sales ")]),t._v(" "),e("td",{domProps:{textContent:t._s("$"+t.totalAmount)}})]),t._v(" "),e("tr",[e("th",[t._v(" Total Product Cost ")]),t._v(" "),e("td",{domProps:{textContent:t._s("$"+t.totalProductCost)}})]),t._v(" "),e("tr",[e("th",[t._v(" Total Postage Cost ")]),t._v(" "),e("td",{domProps:{textContent:t._s("$"+t.totalPostageCost)}})]),t._v(" "),e("tr",[e("th",[t._v("Net")]),t._v(" "),e("td",{domProps:{textContent:t._s("$"+t.netAmount)}})])])]),t._v(" "),t.loading?e("div",{staticClass:"overlay"},[e("loader")],1):t._e()])},staticRenderFns:[]}}});