webpackJsonp([3],{186:function(e,t,i){var r=i(6)(i(214),i(215),null,null,null);e.exports=r.exports},190:function(e,t,i){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=i(191),a=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),n=function(){function e(t){r(this,e),this.originalData=t;for(var i in t)this[i]=t[i];this.errors=new s.a}return a(e,[{key:"data",value:function(){var e={};for(var t in this.originalData)e[t]=this[t];return e}},{key:"reset",value:function(){for(var e in this.originalData)this[e]="";this.errors.clear()}},{key:"post",value:function(e){return this.submit("post",e)}},{key:"put",value:function(e){return this.submit("put",e)}},{key:"patch",value:function(e){return this.submit("patch",e)}},{key:"delete",value:function(e){return this.submit("delete",e)}},{key:"submit",value:function(e,t){var i=this;return new Promise(function(r,s){axios[e](t,i.data()).then(function(e){i.onSuccess(e.data),r(e.data)}).catch(function(e){i.onFail(e.response.data),s(e.response.data)})})}},{key:"onSuccess",value:function(e){}},{key:"onFail",value:function(e){this.errors.record(e)}}]),e}();t.a=n},191:function(e,t,i){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),a=function(){function e(){r(this,e),this.errors={}}return s(e,[{key:"has",value:function(e){return this.errors.hasOwnProperty(e)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(e){if(this.errors[e])return this.errors[e][0]}},{key:"record",value:function(e){this.errors=e}},{key:"clear",value:function(e){if(e)return void delete this.errors[e];this.errors={}}}]),e}();t.a=a},192:function(e,t){e.exports={current_page:null,first_page:1,last_page:null,total:null,next_page_url:null,prev_page_url:null}},193:function(e,t,i){var r=i(6)(i(194),i(195),null,null,null);e.exports=r.exports},194:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(15),s=i.n(r);t.default={data:function(){return{}},props:["pageInfo"],mounted:function(){},computed:{pages:function(){for(var e=[],t=1;t<=this.totalPages;t++)e.push(t);return e},totalPages:function(){return this.pageInfo.total_pages||this.pageInfo.last_page}},methods:{prev:function(){if(1==this.pageInfo.current_page)return 0;var e=this.pageInfo.current_page-1;s.a.$emit("load-page",e)},next:function(){if(this.pageInfo.current_page==this.totalPages)return 0;var e=this.pageInfo.current_page+1;s.a.$emit("load-page",e)},singlePage:function(e){s.a.$emit("load-page",e)}}}},195:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("nav",{attrs:{"aria-label":"Page navigation"}},[i("ul",{staticClass:"pagination"},[i("li",{class:{disabled:1==e.pageInfo.current_page},on:{click:function(t){t.preventDefault(),e.prev(t)}}},[e._m(0)]),e._v(" "),e._l(e.pages,function(t){return i("li",{class:{active:t==e.pageInfo.current_page},on:{click:function(i){i.preventDefault(),e.singlePage(t)}}},[i("a",{attrs:{href:"#"},domProps:{textContent:e._s(t)}})])}),e._v(" "),i("li",{class:{disabled:e.pageInfo.current_page==e.totalPages},on:{click:function(t){t.preventDefault(),e.next(t)}}},[e._m(1)])],2)])},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a",{attrs:{href:"#","aria-label":"Previous"}},[i("span",{attrs:{"aria-hidden":"true"}},[e._v("«")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a",{attrs:{href:"#","aria-label":"Next"}},[i("span",{attrs:{"aria-hidden":"true"}},[e._v("»")])])}]}},196:function(e,t){function i(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var r;e.exports=(r={created_at:"",id:"",receiver_address:"",receiver_email:"",receiver_name:"",receiver_phone:"",receiver_postcode:"",receiver_product:"",sender_address:"",amount:"",sender_id:"",sender_email:"",sender_name:"",sender_phone:"",sender_postcode:"",tracking:""},i(r,"receiver_product",""),i(r,"updated_at",""),i(r,"user_id",""),r)},197:function(e,t,i){"use strict";var r=i(15),s=i.n(r);t.a={methods:{loadReceipts:function(){var e=this;axios.get(this.scopeApi+"/receipts").then(function(t){e.receipts=t.data.data,e.updatePageInfo(t.data)}).catch(function(e){alert(e)})},printSingleReceipt:function(e){var t=this;this.loading=!0,axios.get(this.scope+"/receipts/print/"+e).then(function(e){t.loadSinglePdf(e.data.pdfName)})},loadSinglePdf:function(e){var t="";window.isMobile()?(t="/pdf/"+e+"/download",this.loading=!1):t="/pdf/"+e,$("#print-frame").attr("src",t)},loadingComplete:function(){window.isMobile()||(this.loading=!1,0!==this.loadCount&&(window.frames.frame.print(),this.loadCount++),this.loadCount++)},loadingFail:function(){this.loading=!1,alert("Loading Failed")},addToPrintList:function(e){this.printList.push(e)},removeFromPrintList:function(e){var t=this.printList.indexOf(e);this.printList.splice(t,1)},print:function(){var e=this;this.printList.length?(this.loading=!0,axios.post(this.scope+"/receipts/print",{receipts:this.printList}).then(function(t){e.loadSinglePdf(t.data.pdfName)})):alert("please select atleast on receipt")},updatePageInfo:function(e){this.pageInfo.current_page=e.current_page,this.pageInfo.last_page=e.last_page,this.pageInfo.total=e.total,this.pageInfo.next_page_url=e.next_page_url,this.pageInfo.prev_page_url=e.prev_page_url},reload:function(e){var t=this;axios.get(this.scopeApi+"/receipts?search="+this.search+"&records="+this.records+"&page="+e).then(function(e){t.receipts=e.data.data,t.updatePageInfo(e.data)}).catch(function(e){alert(e)})},editReceipt:function(e){this.editIndex=this.receipts.map(function(e){return e.id}).indexOf(e),this.copyToEdit(this.receipts[this.editIndex]),$("#edit-receipt").modal("show")},copyToEdit:function(e){this.edit.id=e.id,this.edit.receiver_address=e.receiver_address.replace("|","\n"),this.edit.receiver_email=e.receiver_email,this.edit.receiver_name=e.receiver_name,this.edit.receiver_phone=e.receiver_phone,this.edit.receiver_postcode=e.receiver_postcode,this.edit.receiver_product=e.receiver_product,this.edit.sender_address=e.sender_address.replace("|","\n"),this.edit.sender_id=e.sender_id,this.edit.sender_email=e.sender_email,this.edit.sender_name=e.sender_name,this.edit.sender_phone=e.sender_phone,this.edit.sender_postcode=e.sender_postcode,this.edit.amount=e.amount,this.edit.tracking=e.tracking},copyFromEdit:function(){var e=this.receipts[this.editIndex];e.id=this.edit.id,e.receiver_address=this.edit.receiver_address,e.receiver_email=this.edit.receiver_email,e.receiver_name=this.edit.receiver_name,e.receiver_phone=this.edit.receiver_phone,e.receiver_postcode=this.edit.receiver_postcode,e.receiver_product=this.edit.receiver_product,e.sender_address=this.edit.sender_address,e.sender_id=this.edit.sender_id,e.sender_email=this.edit.sender_email,e.sender_name=this.edit.sender_name,e.sender_phone=this.edit.sender_phone,e.sender_postcode=this.edit.sender_postcode,e.amount=this.edit.amount,e.tracking=this.edit.tracking},update:function(){var e=this;this.loading=!0,this.edit.post(this.scope+"/receipts/"+this.edit.id).then(function(t){e.loading=!1,e.copyFromEdit(),$("#edit-receipt").modal("hide"),s.a.$emit("alert-show",{message:"receipt successfully edited",status:"success"})}).catch(function(t){e.loading=!1;var i=[];for(var r in e.edit.errors.errors)i.push(e.edit.errors.get(r));console.log,s.a.$emit("alert-show",{message:i,status:"error"})})},clearPrintList:function(){s.a.$emit("clear-every-receipt"),this.printList=[]},downloadCsv:function(){if(this.printList.length){this.loading=!0;var e="";this.printList.forEach(function(t){e+='<input name="receipts[]" value="'+t+'">'},this),jQuery('<form action="'+this.scope+'/receipts/csv" method="post" target="csv-frame">\n                      <input name="_token" value="'+Laravel.csrfToken+'">\n                     '+e+"\n                  </form>").appendTo("body").submit().remove(),this.loading=!1}else alert("please select atleast on receipt")},selectAll:function(){this.selectAllReceipts?s.a.$emit("select-all"):s.a.$emit("deselect-all")}}}},198:function(e,t,i){var r=i(6)(i(199),i(200),null,null,null);e.exports=r.exports},199:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(15),s=i.n(r);t.default={data:function(){return{addToPrintList:!1,localReceipt:""}},props:["receipt"],computed:{address:function(){return this.receipt.receiver_address.replace(/\|/g,", ")}},mounted:function(){this.localReceipt=this.receipt,s.a.$on("clear-every-receipt",this.clearedFromPrintList),s.a.$on("select-all",this.selectAll),s.a.$on("deselect-all",this.deselectAll)},methods:{print:function(){s.a.$emit("print-single-receipt",this.receipt.id)},toggleFromPrintList:function(){this.addToPrintList?s.a.$emit("add-to-print-list",this.receipt.id):s.a.$emit("remove-from-print-list",this.receipt.id)},clearedFromPrintList:function(){this.addToPrintList=!1},edit:function(){s.a.$emit("edit-receipt",this.receipt.id)},deleteReceipt:function(){s.a.$emit("delete-receipt",this.receipt.id)},selectAll:function(){this.addToPrintList=!0,this.toggleFromPrintList()},deselectAll:function(){this.addToPrintList=!1,this.toggleFromPrintList()}}}},200:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("tr",[i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.addToPrintList,expression:"addToPrintList"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.addToPrintList)?e._i(e.addToPrintList,null)>-1:e.addToPrintList},on:{change:e.toggleFromPrintList,__c:function(t){var i=e.addToPrintList,r=t.target,s=!!r.checked;if(Array.isArray(i)){var a=e._i(i,null);s?a<0&&(e.addToPrintList=i.concat(null)):a>-1&&(e.addToPrintList=i.slice(0,a).concat(i.slice(a+1)))}else e.addToPrintList=s}}})]),e._v(" "),i("td",{domProps:{textContent:e._s(e.receipt.sender_name)}}),e._v(" "),i("td",{domProps:{textContent:e._s(e.receipt.sender_id)}}),e._v(" "),i("td",{domProps:{textContent:e._s(e.receipt.sender_email)}}),e._v(" "),i("td",{domProps:{textContent:e._s(e.receipt.receiver_name)}}),e._v(" "),i("td",{domProps:{textContent:e._s(e.receipt.receiver_email)}}),e._v(" "),i("td",{domProps:{textContent:e._s(e.address)}}),e._v(" "),i("td",{domProps:{textContent:e._s(e.receipt.receiver_postcode)}}),e._v(" "),i("td",{domProps:{textContent:e._s(e.receipt.receiver_phone)}}),e._v(" "),i("td",{domProps:{textContent:e._s(e.receipt.receiver_product)}}),e._v(" "),i("td",{domProps:{textContent:e._s(e.receipt.amount)}}),e._v(" "),i("td",{domProps:{textContent:e._s(e.receipt.tracking)}}),e._v(" "),i("td",[i("span",{staticClass:"pointer",on:{click:e.edit}},[i("i",{staticClass:"fa fa-edit",attrs:{title:"edit"}})]),e._v(" "),i("span",{staticClass:"pointer",on:{click:e.print}},[i("i",{staticClass:"fa fa-print text-primary",attrs:{title:"print"}})]),e._v(" "),i("span",{staticClass:"pointer",on:{click:e.deleteReceipt}},[i("i",{staticClass:"fa fa-trash-o text-danger",attrs:{title:"print"}})])])])},staticRenderFns:[]}},214:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(0),s=i.n(r),a=i(190),n=i(15),o=i.n(n),d=i(197),c=i(196),l=i.n(c),p=i(192),v=i.n(p);t.default={data:function(){return{receipts:[],loadCount:0,loading:!1,printList:[],selectAllReceipts:!1,from:s.a().subtract(7,"days").format("YYYY-MM-DD"),to:s.a().format("YYYY-MM-DD"),order:"latest",records:10,pageInfo:v.a,edit:new a.a(l.a),editIndex:"",scope:"/admin",scopeApi:"/api/admin"}},mixins:[d.a],components:{receipt:i(198),paginator:i(193)},mounted:function(){this.loadReceipts(),o.a.$on("print-single-receipt",this.printSingleReceipt),o.a.$on("add-to-print-list",this.addToPrintList),o.a.$on("remove-from-print-list",this.removeFromPrintList),o.a.$on("load-page",this.reload),o.a.$on("edit-receipt",this.editReceipt),o.a.$on("delete-receipt",this.deleteReceipt)},methods:{loadReceipts:function(){var e=this;axios.get(this.scopeApi+"/receipts/date?from="+this.from+"&to="+this.to+"&records="+this.records).then(function(t){e.receipts=t.data.data,e.receipts.length<=0&&o.a.$emit("alert-show",{message:"No Receipts Between "+e.from+" and "+e.to,status:"success"}),e.updatePageInfo(t.data)}).catch(function(e){alert(e)})},reload:function(e){var t=this;axios.get(this.scopeApi+"/receipts/date?from="+this.from+"&to="+this.to+"&records="+this.records+"&page="+e).then(function(e){t.receipts=e.data.data,t.receipts.length<=0&&o.a.$emit("alert-show",{message:"No Receipts Between "+t.from+" and "+t.to,status:"success"}),t.updatePageInfo(e.data)}).catch(function(e){alert(e)})},reloadFromFirstPage:function(){var e=this;axios.get(this.scopeApi+"/receipts/date?from="+this.from+"&to="+this.to+"&records="+this.records).then(function(t){e.receipts=t.data.data,e.receipts.length<=0&&o.a.$emit("alert-show",{message:"No Receipts Between "+e.from+" and "+e.to,status:"success"}),e.updatePageInfo(t.data)}).catch(function(e){alert(e)})}}}},215:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"row"},[i("alert"),e._v(" "),i("div",{staticClass:"col-sm-12"},[i("form",{staticClass:"form-inline",on:{submit:function(t){t.preventDefault(),e.reloadFromFirstPage(t)}}},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"from"}},[e._v("From")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.from,expression:"from"}],staticClass:"form-control",attrs:{type:"date",id:"from"},domProps:{value:e.from},on:{input:function(t){t.target.composing||(e.from=t.target.value)}}})]),e._v(" "),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"to"}},[e._v("To")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.to,expression:"to"}],staticClass:"form-control",attrs:{type:"date",id:"to"},domProps:{value:e.to},on:{input:function(t){t.target.composing||(e.to=t.target.value)}}})]),e._v(" "),i("button",{staticClass:"btn btn-default",attrs:{type:"submit"}},[e._v("Go!")])])]),e._v(" "),i("div",{staticClass:"col-sm-4 margin-20"},[i("div",{staticClass:"input-group"},[e._m(0),e._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:e.records,expression:"records"}],staticClass:"form-control",on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.records=t.target.multiple?i:i[0]},e.reloadFromFirstPage]}},[i("option",{attrs:{value:"5"}},[e._v("5")]),e._v(" "),i("option",{attrs:{value:"10"}},[e._v("10")]),e._v(" "),i("option",{attrs:{value:"25"}},[e._v("25")]),e._v(" "),i("option",{attrs:{value:"100"}},[e._v("100")]),e._v(" "),i("option",{attrs:{value:"100"}},[e._v("500")]),e._v(" "),i("option",{attrs:{value:"100"}},[e._v("1000")])])])])],1),e._v(" "),i("br"),e._v(" "),i("div",{staticClass:"table-responsive"},[e.receipts.length>0?i("table",{staticClass:"table table-bordered"},[i("tbody",[i("tr",[i("th",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.selectAllReceipts,expression:"selectAllReceipts"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.selectAllReceipts)?e._i(e.selectAllReceipts,null)>-1:e.selectAllReceipts},on:{click:e.selectAll,__c:function(t){var i=e.selectAllReceipts,r=t.target,s=!!r.checked;if(Array.isArray(i)){var a=e._i(i,null);s?a<0&&(e.selectAllReceipts=i.concat(null)):a>-1&&(e.selectAllReceipts=i.slice(0,a).concat(i.slice(a+1)))}else e.selectAllReceipts=s}}})]),e._v(" "),i("th",[e._v("Sender Name")]),e._v(" "),i("th",[e._v("Sender ID")]),e._v(" "),i("th",[e._v("Sender Email")]),e._v(" "),i("th",[e._v("Receiver Name")]),e._v(" "),i("th",[e._v("Receiver Email")]),e._v(" "),i("th",[e._v("Receiver Address")]),e._v(" "),i("th",[e._v("Postcode")]),e._v(" "),i("th",[e._v("Phone Number")]),e._v(" "),i("th",[e._v("Item")]),e._v(" "),i("th",[e._v("Amount")]),e._v(" "),i("th",[e._v("Tracking")]),e._v(" "),i("th",[e._v("Actions")])]),e._v(" "),e._l(e.receipts,function(e){return i("receipt",{key:e.id,attrs:{receipt:e}})})],2)]):e._e()]),e._v(" "),i("paginator",{attrs:{"page-info":e.pageInfo}}),e._v(" "),i("div",{staticClass:"form-group"},[i("span",{staticClass:"btn btn-primary",on:{click:e.print}},[e._v("Print\n      "),e.printList.length?i("span",{domProps:{textContent:e._s("("+e.printList.length+")")}}):e._e()]),e._v(" "),e.printList.length?i("span",{staticClass:"btn btn-danger",on:{click:e.clearPrintList}},[e._v("Clear Print List")]):e._e(),e._v(" "),i("span",{staticClass:"btn btn-primary",on:{click:e.downloadCsv}},[e._v("Export")])]),e._v(" "),i("iframe",{staticClass:"hide",attrs:{id:"print-frame",name:"frame",src:"",frameborder:"0"},on:{load:e.loadingComplete}}),e._v(" "),i("iframe",{staticClass:"hide",attrs:{id:"csv-frame",name:"csv-frame",src:"",frameborder:"0"}}),e._v(" "),e.loading?i("div",{staticClass:"overlay"},[i("loader",{attrs:{color:"#337ab7"}})],1):e._e(),e._v(" "),i("div",{staticClass:"modal fade",attrs:{id:"edit-receipt",tabindex:"-1",role:"dialog"}},[i("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[i("div",{staticClass:"modal-content"},[e._m(1),e._v(" "),i("div",{staticClass:"modal-body"},[i("form",{staticClass:"form-horizontal",attrs:{action:""}},[i("h3",[e._v("Sender Info")]),e._v(" "),i("div",{},[i("div",{staticClass:"col-xs-12"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"sender-id"}},[e._v("Sender ID")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.edit.sender_id,expression:"edit.sender_id"}],staticClass:"form-control",attrs:{id:"sender-id",placeholder:"Sender ID (Optional)"},domProps:{value:e.edit.sender_id},on:{input:function(t){t.target.composing||(e.edit.sender_id=t.target.value)}}})])])]),e._v(" "),i("div",{},[i("div",{staticClass:"col-xs-6"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"sender-name"}},[e._v("Sender Name")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.edit.sender_name,expression:"edit.sender_name"}],staticClass:"form-control",attrs:{type:"text",id:"sender-name",placeholder:"Sender Name"},domProps:{value:e.edit.sender_name},on:{input:function(t){t.target.composing||(e.edit.sender_name=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"col-xs-6"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"sender-email"}},[e._v("Sender Email")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.edit.sender_email,expression:"edit.sender_email"}],staticClass:"form-control",attrs:{type:"text",id:"sender-email",placeholder:"Sender Email"},domProps:{value:e.edit.sender_email},on:{input:function(t){t.target.composing||(e.edit.sender_email=t.target.value)}}})])])]),e._v(" "),i("div",{},[i("div",{staticClass:"col-xs-6"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"sender-phone"}},[e._v("Sender Phone")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.edit.sender_phone,expression:"edit.sender_phone"}],staticClass:"form-control",attrs:{type:"text",id:"sender-phone",placeholder:"Sender PhoneNumber"},domProps:{value:e.edit.sender_phone},on:{input:function(t){t.target.composing||(e.edit.sender_phone=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"col-xs-6"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"sender-postcode"}},[e._v("Sender Postcode")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.edit.sender_postcode,expression:"edit.sender_postcode"}],staticClass:"form-control",attrs:{type:"text",id:"sender-postcode",placeholder:"Sender Postcode"},domProps:{value:e.edit.sender_postcode},on:{input:function(t){t.target.composing||(e.edit.sender_postcode=t.target.value)}}})])])]),e._v(" "),i("div",{},[i("div",{staticClass:"col-xs-12"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"sender-address"}},[e._v("Sender Address")]),e._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.edit.sender_address,expression:"edit.sender_address"}],staticClass:"form-control",attrs:{id:"sender-address",placeholder:"Sender Name"},domProps:{value:e.edit.sender_address},on:{input:function(t){t.target.composing||(e.edit.sender_address=t.target.value)}}})])])]),e._v(" "),i("br"),e._v(" "),i("h3",[e._v("Receiver Info")]),e._v(" "),i("div",{},[i("div",{staticClass:"col-xs-6"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"receiver-name"}},[e._v("Receiver Name")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.edit.receiver_name,expression:"edit.receiver_name"}],staticClass:"form-control",attrs:{type:"text",id:"receiver-name",placeholder:"receiver Name"},domProps:{value:e.edit.receiver_name},on:{input:function(t){t.target.composing||(e.edit.receiver_name=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"col-xs-6"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"receiver-email"}},[e._v("Receiver Email")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.edit.receiver_email,expression:"edit.receiver_email"}],staticClass:"form-control",attrs:{type:"text",id:"receiver-email",placeholder:"receiver Email"},domProps:{value:e.edit.receiver_email},on:{input:function(t){t.target.composing||(e.edit.receiver_email=t.target.value)}}})])])]),e._v(" "),i("div",{},[i("div",{staticClass:"col-xs-6"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"receiver-phone"}},[e._v("Receiver Phone")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.edit.receiver_phone,expression:"edit.receiver_phone"}],staticClass:"form-control",attrs:{type:"text",id:"receiver-phone",placeholder:"receiver PhoneNumber"},domProps:{value:e.edit.receiver_phone},on:{input:function(t){t.target.composing||(e.edit.receiver_phone=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"col-xs-6"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"receiver-postcode"}},[e._v("Receiver Postcode")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.edit.receiver_postcode,expression:"edit.receiver_postcode"}],staticClass:"form-control",attrs:{type:"text",id:"receiver-postcode",placeholder:"receiver Postcode"},domProps:{value:e.edit.receiver_postcode},on:{input:function(t){t.target.composing||(e.edit.receiver_postcode=t.target.value)}}})])])]),e._v(" "),i("div",{},[i("div",{staticClass:"col-xs-12"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"receiver-address"}},[e._v("Receiver Address")]),e._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.edit.receiver_address,expression:"edit.receiver_address"}],staticClass:"form-control",attrs:{id:"receiver-address",placeholder:"Sender Name"},domProps:{value:e.edit.receiver_address},on:{input:function(t){t.target.composing||(e.edit.receiver_address=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"col-xs-12"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"receiver-product"}},[e._v("Item")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.edit.receiver_product,expression:"edit.receiver_product"}],staticClass:"form-control",attrs:{id:"receiver-product",placeholder:"Item"},domProps:{value:e.edit.receiver_product},on:{input:function(t){t.target.composing||(e.edit.receiver_product=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"col-xs-12"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"amount"}},[e._v("Amount")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.edit.amount,expression:"edit.amount"}],staticClass:"form-control",attrs:{id:"amount",placeholder:"Amount"},domProps:{value:e.edit.amount},on:{input:function(t){t.target.composing||(e.edit.amount=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"col-xs-12"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"tracking"}},[e._v("Tracking")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.edit.tracking,expression:"edit.tracking"}],staticClass:"form-control",attrs:{id:"tracking",placeholder:"Tracking"},domProps:{value:e.edit.tracking},on:{input:function(t){t.target.composing||(e.edit.tracking=t.target.value)}}})])])])]),e._v(" "),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[e._v("Close")]),e._v(" "),i("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.update}},[e._v("Save changes")])])])])])])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"input-group-btn"},[i("button",{staticClass:"btn btn-default",attrs:{type:"button"}},[i("span",{staticClass:"small"},[e._v(" RECORDS")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"modal-header"},[i("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[i("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])]),e._v(" "),i("h4",{staticClass:"modal-title"},[e._v("Edit Receipt")])])}]}}});