(function(e){function t(t){for(var i,o,r=t[0],l=t[1],u=t[2],c=0,m=[];c<r.length;c++)o=r[c],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&m.push(s[o][0]),s[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);d&&d(t);while(m.length)m.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],i=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(i=!1)}i&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var i={},s={app:0},n=[];function o(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=i,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(a,i,function(t){return e[t]}.bind(null,i));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"248a":function(e,t,a){"use strict";var i=a("a0d0"),s=a.n(i);s.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],o={name:"app"},r=o,l=a("2877"),u=Object(l["a"])(r,s,n,!1,null,null,null),d=u.exports,c=a("b676"),m=a.n(c),v=a("8c4f"),F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"invoice-box",attrs:{id:"modal-content-print"}},[a("table",{attrs:{cellpadding:"0",cellspacing:"0"}},[a("tr",{staticClass:"top"},[a("td",{attrs:{colspan:"2"}},[a("table",[a("tr",[e._m(0),a("td",[e._v(" Invoice: #"+e._s(e.invoiceData.invoiceNum)+" "),a("br"),e._v(" Date: "+e._s(e.invoiceData.invoiceDate)+" "),a("br"),e._v("Spring Garden (Ground Floor) "),a("br"),e._v("Block-1, Shahjalal Uposhohor, Sylhet. "),a("br"),e._v("Office: 01764227202, Principal: 01712361777 ")])])])])]),a("tr",{staticClass:"information"},[a("td",{attrs:{colspan:"1"}},[a("table",[a("tr",{staticClass:"info"},[a("td",[e._v("Registration Id")]),a("td",[e._v(": "+e._s(e.invoiceData.studentInfo.regId))])]),a("tr",{staticClass:"info"},[a("td",[e._v("Roll Number")]),a("td",[e._v(": "+e._s(e.invoiceData.studentInfo.rollNumber))])]),a("tr",{staticClass:"info"},[a("td",[e._v("Class")]),a("td",[e._v(": "+e._s(e.invoiceData.studentInfo.className))])])])])]),a("tr",{staticClass:"information"},[a("td",{attrs:{colspan:"1"}},[a("table",[a("tr",{staticClass:"info"},[a("td",[e._v("Full Name")]),a("td",[e._v(": "+e._s(e.invoiceData.studentInfo.fullName))])]),a("tr",{staticClass:"info"},[a("td",[e._v("Parents Name")]),a("td",[e._v(": "+e._s(e.invoiceData.studentInfo.parentName))])]),a("tr",{staticClass:"info"},[a("td",[e._v("Home Number")]),a("td",[e._v(": "+e._s(e.invoiceData.studentInfo.parentPhoneNumber))])])])])]),e.invoiceData.admissionFees.admissionFee||e.invoiceData.admissionFees.admissionFormFee||e.invoiceData.admissionFees.idCardFee?a("tr",{staticClass:"heading"},[a("td",[e._v("Admission Fee")]),a("td")]):e._e(),e.invoiceData.admissionFees.admissionFee?a("tr",{staticClass:"item"},[a("td",[e._v("Admission Fee")]),a("td",[e._v(e._s(e.invoiceData.admissionFees.admissionFee))])]):e._e(),e.invoiceData.admissionFees.admissionFormFee?a("tr",{staticClass:"item"},[a("td",[e._v("Admission Form")]),a("td",[e._v(e._s(e.invoiceData.admissionFees.admissionFormFee))])]):e._e(),e.invoiceData.admissionFees.idCardFee?a("tr",{staticClass:"item"},[a("td",[e._v("Id Card Fee")]),a("td",[e._v(e._s(e.invoiceData.admissionFees.idCardFee))])]):e._e(),e.invoiceData.tutionFees.monthlyTutionFee||e.invoiceData.tutionFees.previousDues||e.invoiceData.tutionFees.lateTutionFee||e.invoiceData.tutionFees.lateEntryFee||e.invoiceData.tutionFees.missedClassFee?a("tr",{staticClass:"heading"},[a("td",[e._v("Tuition Fee")]),a("td")]):e._e(),e.invoiceData.tutionFees.monthlyTutionFee?a("tr",{staticClass:"item"},[a("td",[e._v("Tuition Fee")]),a("td",[e._v(e._s(e.invoiceData.tutionFees.monthlyTutionFee))])]):e._e(),e.invoiceData.tutionFees.previousDues?a("tr",{staticClass:"item"},[a("td",[e._v("Previous Dues")]),a("td",[e._v(e._s(e.invoiceData.tutionFees.previousDues))])]):e._e(),e.invoiceData.tutionFees.lateTutionFee?a("tr",{staticClass:"item"},[a("td",[e._v("Late tuition Fee")]),a("td",[e._v(e._s(e.invoiceData.tutionFees.lateTutionFee))])]):e._e(),e.invoiceData.tutionFees.lateEntryFee?a("tr",{staticClass:"item"},[a("td",[e._v("Late Entry Fee")]),a("td",[e._v(e._s(e.invoiceData.tutionFees.lateEntryFee))])]):e._e(),e.invoiceData.tutionFees.missedClassFee?a("tr",{staticClass:"item"},[a("td",[e._v("Missed Class Fee")]),a("td",[e._v(e._s(e.invoiceData.tutionFees.missedClassFee))])]):e._e(),e.invoiceData.examFees.examFee||e.invoiceData.examFees.missedExamFee||e.invoiceData.examFees.otherFees?a("tr",{staticClass:"heading"},[a("td",[e._v("Exam Fee")]),a("td")]):e._e(),e.invoiceData.examFees.examFee?a("tr",{staticClass:"item"},[a("td",[e._v("Exam Fee")]),a("td",[e._v(e._s(e.invoiceData.examFees.examFee))])]):e._e(),e.invoiceData.examFees.missedExamFee?a("tr",{staticClass:"item"},[a("td",[e._v("Missed Exam Fee")]),a("td",[e._v(e._s(e.invoiceData.examFees.missedExamFee))])]):e._e(),e.invoiceData.otherFees.annualPicnicFee||e.invoiceData.otherFees.annualSportsFee||e.invoiceData.otherFees.annualMahfilFee?a("tr",{staticClass:"heading"},[a("td",[e._v("Others Fee")]),a("td")]):e._e(),e.invoiceData.otherFees.annualPicnicFee?a("tr",{staticClass:"item"},[a("td",[e._v("Annual Picnic Fee")]),a("td",[e._v(e._s(e.invoiceData.otherFees.annualPicnicFee))])]):e._e(),e.invoiceData.otherFees.annualSportsFee?a("tr",{staticClass:"item"},[a("td",[e._v("Annual Sports Fee")]),a("td",[e._v(e._s(e.invoiceData.otherFees.annualSportsFee))])]):e._e(),e.invoiceData.otherFees.annualMahfilFee?a("tr",{staticClass:"item last"},[a("td",[e._v("Annual Mahfil Fee")]),a("td",[e._v(e._s(e.invoiceData.otherFees.annualMahfilFee))])]):e._e(),a("tr",{staticClass:"total"},[a("td"),a("td",[e._v("Total Fees : "+e._s(e.invoiceData.totalFee||0)+" BDT")])])]),e._m(1)]),a("div",{staticClass:"preview-button"},[a("button",{attrs:{id:"printButton"}},[a("router-link",{attrs:{to:"/"}},[e._v("Back")])],1),a("button",{attrs:{id:"printButton"},on:{click:function(t){return t.preventDefault(),e.printInvoice(t)}}},[e._v("Print")]),a("button",{attrs:{id:"saveButton"},on:{click:function(t){return t.preventDefault(),e.saveFileAsPdf(t)}}},[e._v("Save")])]),a("div",{staticClass:"invoice-box",attrs:{id:"student-copy"}},[a("table",{attrs:{cellpadding:"0",cellspacing:"0"}},[a("tr",{staticClass:"top"},[a("td",{attrs:{colspan:"2"}},[a("table",[a("tr",[e._m(2),a("td",[e._v(" Invoice #: "+e._s(e.invoiceData.invoiceNum)+" "),a("br"),e._v(" Date: "+e._s(e.invoiceData.invoiceDate)+" "),a("br"),e._v("Spring Garden (Ground Floor) "),a("br"),e._v("Block-1, Shahjalal Uposhohor, Sylhet. "),a("br"),e._v("Office: 01764227202, Principal: 01712361777 ")])])])])]),a("tr",{staticClass:"information"},[a("td",{attrs:{colspan:"1"}},[a("table",[a("tr",{staticClass:"info"},[a("td",[e._v("Registration Id")]),a("td",[e._v(": "+e._s(e.invoiceData.studentInfo.regId))])]),a("tr",{staticClass:"info"},[a("td",[e._v("Roll Number")]),a("td",[e._v(": "+e._s(e.invoiceData.studentInfo.rollNumber))])]),a("tr",{staticClass:"info"},[a("td",[e._v("Class")]),a("td",[e._v(": "+e._s(e.invoiceData.studentInfo.className))])])])])]),a("tr",{staticClass:"information"},[a("td",{attrs:{colspan:"1"}},[a("table",[a("tr",{staticClass:"info"},[a("td",[e._v("Full Name")]),a("td",[e._v(": "+e._s(e.invoiceData.studentInfo.fullName))])]),a("tr",{staticClass:"info"},[a("td",[e._v("Parents Name")]),a("td",[e._v(": "+e._s(e.invoiceData.studentInfo.parentName))])]),a("tr",{staticClass:"info"},[a("td",[e._v("Home Number")]),a("td",[e._v(": "+e._s(e.invoiceData.studentInfo.parentPhoneNumber))])])])])]),e.invoiceData.admissionFees.admissionFee?a("tr",{staticClass:"heading"},[a("td",[e._v("Admission Fee")]),a("td")]):e._e(),e.invoiceData.admissionFees.admissionFee?a("tr",{staticClass:"item"},[a("td",[e._v("Admission Fee")]),a("td",[e._v(e._s(e.invoiceData.admissionFees.admissionFee))])]):e._e(),e.invoiceData.admissionFees.admissionFormFee?a("tr",{staticClass:"item"},[a("td",[e._v("Admission Form")]),a("td",[e._v(e._s(e.invoiceData.admissionFees.admissionFormFee))])]):e._e(),e.invoiceData.admissionFees.idCardFee?a("tr",{staticClass:"item"},[a("td",[e._v("Id Card Fee")]),a("td",[e._v(e._s(e.invoiceData.admissionFees.idCardFee))])]):e._e(),e.invoiceData.tutionFees.monthlyTutionFee?a("tr",{staticClass:"heading"},[a("td",[e._v("Tuition Fee")]),a("td")]):e._e(),e.invoiceData.tutionFees.monthlyTutionFee?a("tr",{staticClass:"item"},[a("td",[e._v("Tuition Fee")]),a("td",[e._v(e._s(e.invoiceData.tutionFees.monthlyTutionFee))])]):e._e(),e.invoiceData.tutionFees.previousDues?a("tr",{staticClass:"item"},[a("td",[e._v("Previous Dues")]),a("td",[e._v(e._s(e.invoiceData.tutionFees.previousDues))])]):e._e(),e.invoiceData.tutionFees.lateTutionFee?a("tr",{staticClass:"item"},[a("td",[e._v("Late tuition Fee")]),a("td",[e._v(e._s(e.invoiceData.tutionFees.lateTutionFee))])]):e._e(),e.invoiceData.tutionFees.lateEntryFee?a("tr",{staticClass:"item"},[a("td",[e._v("Late Entry Fee")]),a("td",[e._v(e._s(e.invoiceData.tutionFees.lateEntryFee))])]):e._e(),e.invoiceData.tutionFees.missedClassFee?a("tr",{staticClass:"item"},[a("td",[e._v("Missed Class Fee")]),a("td",[e._v(e._s(e.invoiceData.tutionFees.missedClassFee))])]):e._e(),e.invoiceData.examFees.examFee?a("tr",{staticClass:"heading"},[a("td",[e._v("Exam Fee")]),a("td")]):e._e(),e.invoiceData.examFees.examFee?a("tr",{staticClass:"item"},[a("td",[e._v("Exam Fee")]),a("td",[e._v(e._s(e.invoiceData.examFees.examFee))])]):e._e(),e.invoiceData.examFees.missedExamFee?a("tr",{staticClass:"item"},[a("td",[e._v("Missed Exam Fee")]),a("td",[e._v(e._s(e.invoiceData.examFees.missedExamFee))])]):e._e(),e.invoiceData.otherFees.annualPicnicFee?a("tr",{staticClass:"heading"},[a("td",[e._v("Others Fee")]),a("td")]):e._e(),e.invoiceData.otherFees.annualPicnicFee?a("tr",{staticClass:"item"},[a("td",[e._v("Annual Picnic Fee")]),a("td",[e._v(e._s(e.invoiceData.otherFees.annualPicnicFee))])]):e._e(),e.invoiceData.otherFees.annualSportsFee?a("tr",{staticClass:"item"},[a("td",[e._v("Annual Sports Fee")]),a("td",[e._v(e._s(e.invoiceData.otherFees.annualSportsFee))])]):e._e(),e.invoiceData.otherFees.annualMahfilFee?a("tr",{staticClass:"item last"},[a("td",[e._v("Annual Mahfil Fee")]),a("td",[e._v(e._s(e.invoiceData.otherFees.annualMahfilFee))])]):e._e(),a("tr",{staticClass:"total"},[a("td"),a("td",[e._v("Total Fees : "+e._s(e.invoiceData.totalFee||0)+" BDT")])])]),e._m(3)])])},f=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("td",{staticClass:"title"},[a("img",{staticClass:"school-logo",attrs:{src:"/img/logo.png",alt:"logo",srcset:""}}),a("h2",[e._v("Grand Pioneer School & College Sylhet")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"signature"},[a("div",{staticClass:"admin-officer"},[a("h5",[e._v("Admin Officer")]),a("hr")]),a("div",{staticClass:"account-officer"},[a("h5",[e._v("Accounts Officer")]),a("hr")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("td",{staticClass:"title"},[a("img",{staticClass:"school-logo",attrs:{src:"/img/logo.png",alt:"logo",srcset:""}}),a("h2",[e._v("Grand Pioneer School & College Sylhet")]),a("h3",[e._v("Student Copy")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"signature"},[a("div",{staticClass:"admin-officer"},[a("h5",[e._v("Admin Officer")]),a("hr")]),a("div",{staticClass:"account-officer"},[a("h5",[e._v("Accounts Officer")]),a("hr")])])}],p=(a("99af"),a("96cf"),a("1da1")),_=a("d67e"),h=a.n(_),D={data:function(){return{invoiceData:{}}},computed:{},methods:{printInvoice:function(){window.print()},saveFileAsPdf:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,document.getElementById("modal-content-print");case 2:t=e.sent,a={margin:.2,filename:"RegId-".concat(this.invoiceData.studentInfo.regId,"-").concat(this.invoiceData.studentInfo.fullName,"-roll-").concat(this.invoiceData.studentInfo.rollNumber,".pdf"),image:{type:"jpeg",quality:.98},pagebreak:{mode:["avoid-all","css","legacy"]},jsPDF:{unit:"in",format:"letter",orientation:"portrait"}},h()().set(a).from(t).save(),localStorage.removeItem("invoiceData"),this.$router.push("/");case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getDataFromLocalStoreage:function(){this.invoiceData=JSON.parse(localStorage.getItem("invoiceData"))}},created:function(){this.getDataFromLocalStoreage()}},b=D,g=(a("248a"),Object(l["a"])(b,F,f,!1,null,"712de3f8",null)),C=g.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"form-container"},[e._m(0),a("div",{staticClass:"registration-form"},[a("form",[a("h2",[e._v("Student Information")]),a("label",{attrs:{for:"Registration Id"}},[e._v("Registration ID")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.studentInfo.regId,expression:"studentInfo.regId"}],attrs:{placeholder:"Ex. 1412020028",name:"Registration Id",id:"regId",required:"",autofocus:""},domProps:{value:e.studentInfo.regId},on:{input:function(t){t.target.composing||e.$set(e.studentInfo,"regId",t.target.value)}}}),a("label",{attrs:{for:"Name"}},[e._v("Full Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.studentInfo.fullName,expression:"studentInfo.fullName"}],attrs:{type:"text",id:"name",placeholder:"Ex. John Doe",required:"",autofocus:""},domProps:{value:e.studentInfo.fullName},on:{input:function(t){t.target.composing||e.$set(e.studentInfo,"fullName",t.target.value)}}}),a("div",{staticClass:"student-info-container"},[a("div",{staticClass:"student-info"},[a("label",{attrs:{for:"Parent Name"}},[e._v("Parents Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.studentInfo.parentName,expression:"studentInfo.parentName"}],attrs:{type:"text",id:"parentName",placeholder:"Ex. Alex Andrew"},domProps:{value:e.studentInfo.parentName},on:{input:function(t){t.target.composing||e.$set(e.studentInfo,"parentName",t.target.value)}}})]),a("div",{staticClass:"student-info"},[a("label",{attrs:{for:"Roll Number"}},[e._v("Roll Number")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.studentInfo.rollNumber,expression:"studentInfo.rollNumber"}],attrs:{id:"rollNumber",placeholder:"Ex. 01"},domProps:{value:e.studentInfo.rollNumber},on:{input:function(t){t.target.composing||e.$set(e.studentInfo,"rollNumber",t.target.value)}}})]),a("div",{staticClass:"student-info"},[a("label",{attrs:{for:"Class"}},[e._v("Class")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.studentInfo.className,expression:"studentInfo.className"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.studentInfo,"className",t.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""}},[e._v("Please select one")]),a("option",{attrs:{value:"Play"}},[e._v("Play")]),a("option",{attrs:{value:"KG - 1"}},[e._v("KG-1")]),a("option",{attrs:{value:"KG - 2"}},[e._v("KG-2")]),a("option",{attrs:{value:"STD-1"}},[e._v("STD-1")]),a("option",{attrs:{value:"STD-2"}},[e._v("STD-2")]),a("option",{attrs:{value:"STD-3"}},[e._v("STD-3")]),a("option",{attrs:{value:"STD-4"}},[e._v("STD-4")]),a("option",{attrs:{value:"STD-5"}},[e._v("STD-5")]),a("option",{attrs:{value:"STD-6"}},[e._v("STD-6")]),a("option",{attrs:{value:"STD-7"}},[e._v("STD-7")]),a("option",{attrs:{value:"STD-8"}},[e._v("STD-8")]),a("option",{attrs:{value:"STD-9"}},[e._v("STD-9")]),a("option",{attrs:{value:"STD-10"}},[e._v("STD-10")]),a("option",{attrs:{value:"STD-11"}},[e._v("STD-11")]),a("option",{attrs:{value:"STD-12"}},[e._v("STD-12")])])]),a("div",{staticClass:"student-info"},[a("label",{attrs:{for:"Home Phone"}},[e._v("Home Phone")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.studentInfo.parentPhoneNumber,expression:"studentInfo.parentPhoneNumber"}],attrs:{id:"homePhone",placeholder:"Ex. 01738984932"},domProps:{value:e.studentInfo.parentPhoneNumber},on:{input:function(t){t.target.composing||e.$set(e.studentInfo,"parentPhoneNumber",t.target.value)}}})])]),a("h2",[e._v("Admission Fee")]),a("div",{staticClass:"admission-fee-container"},[a("div",{staticClass:"admission-fee"},[a("label",{attrs:{for:"Admission Fee"}},[e._v("Admission Fee")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.admissionFees.admissionFee,expression:"admissionFees.admissionFee",modifiers:{number:!0}}],attrs:{id:"admissionFee",placeholder:"Ex. 4000"},domProps:{value:e.admissionFees.admissionFee},on:{input:function(t){t.target.composing||e.$set(e.admissionFees,"admissionFee",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),a("div",{staticClass:"admission-fee"},[a("label",{attrs:{for:"Admission Form"}},[e._v("Admission Form")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.admissionFees.admissionFormFee,expression:"admissionFees.admissionFormFee",modifiers:{number:!0}}],attrs:{id:"admissionForm",placeholder:"Ex. 100"},domProps:{value:e.admissionFees.admissionFormFee},on:{input:function(t){t.target.composing||e.$set(e.admissionFees,"admissionFormFee",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),a("div",{staticClass:"admission-fee"},[a("label",{attrs:{for:"Admission Fee"}},[e._v("Id Card Fee")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.admissionFees.idCardFee,expression:"admissionFees.idCardFee",modifiers:{number:!0}}],attrs:{id:"idCardFee",placeholder:"Ex. 100"},domProps:{value:e.admissionFees.idCardFee},on:{input:function(t){t.target.composing||e.$set(e.admissionFees,"idCardFee",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])]),a("h2",[e._v("Tuition Fee")]),a("div",{staticClass:"tuition-fee-container"},[a("div",{staticClass:"tuition-fee"},[a("label",{attrs:{for:"tuition Fee"}},[e._v("Tuition Fee")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.tutionFees.monthlyTutionFee,expression:"tutionFees.monthlyTutionFee",modifiers:{number:!0}}],attrs:{id:"tutionFee",placeholder:"Ex. 1200"},domProps:{value:e.tutionFees.monthlyTutionFee},on:{input:function(t){t.target.composing||e.$set(e.tutionFees,"monthlyTutionFee",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),a("div",{staticClass:"tuition-fee"},[a("label",{attrs:{for:"tuition Fee"}},[e._v("Previous Dues")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.tutionFees.previousDues,expression:"tutionFees.previousDues",modifiers:{number:!0}}],attrs:{id:"tutionFee",placeholder:"Ex. 1200"},domProps:{value:e.tutionFees.previousDues},on:{input:function(t){t.target.composing||e.$set(e.tutionFees,"previousDues",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),a("div",{staticClass:"tuition-fee"},[a("label",{attrs:{for:"Late tuition Fee"}},[e._v("Late Tuition Fee")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.tutionFees.lateTutionFee,expression:"tutionFees.lateTutionFee",modifiers:{number:!0}}],attrs:{id:"lateTutionFee",placeholder:"Ex. 200"},domProps:{value:e.tutionFees.lateTutionFee},on:{input:function(t){t.target.composing||e.$set(e.tutionFees,"lateTutionFee",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),a("div",{staticClass:"tuition-fee"},[a("label",{attrs:{for:"Late Enter Fee"}},[e._v("Late Entry Fee")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.tutionFees.lateEntryFee,expression:"tutionFees.lateEntryFee",modifiers:{number:!0}}],attrs:{id:"lateEnterFee",placeholder:"Ex. 50"},domProps:{value:e.tutionFees.lateEntryFee},on:{input:function(t){t.target.composing||e.$set(e.tutionFees,"lateEntryFee",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),a("div",{staticClass:"tuition-fee"},[a("label",{attrs:{for:"Miss Class Fee"}},[e._v("Missed Class Fee")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.tutionFees.missedClassFee,expression:"tutionFees.missedClassFee",modifiers:{number:!0}}],attrs:{id:"missClassFee",maxlength:"4",placeholder:"Ex. 20"},domProps:{value:e.tutionFees.missedClassFee},on:{input:function(t){t.target.composing||e.$set(e.tutionFees,"missedClassFee",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])]),a("h2",[e._v("Exam Fee")]),a("div",{staticClass:"exam-fee-container"},[a("div",{staticClass:"exam-fee"},[a("label",[e._v("Exam Fee")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.examFees.examFee,expression:"examFees.examFee",modifiers:{number:!0}}],attrs:{placeholder:"Ex. 400"},domProps:{value:e.examFees.examFee},on:{input:function(t){t.target.composing||e.$set(e.examFees,"examFee",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),a("div",{staticClass:"exam-fee"},[a("label",{attrs:{for:"Miss Exam Fee"}},[e._v("Miss Exam Fee")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.examFees.missedExamFee,expression:"examFees.missedExamFee",modifiers:{number:!0}}],attrs:{id:"missExamFee",placeholder:"Ex. 50"},domProps:{value:e.examFees.missedExamFee},on:{input:function(t){t.target.composing||e.$set(e.examFees,"missedExamFee",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])]),a("h2",[e._v("Others Fee")]),a("div",{staticClass:"other-fee-container"},[a("div",{staticClass:"other-fee"},[a("label",{attrs:{for:"Annual Picnic Fee"}},[e._v("Annual Picnic Fee")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.otherFees.annualPicnicFee,expression:"otherFees.annualPicnicFee",modifiers:{number:!0}}],attrs:{id:"annualPicnicFree",placeholder:"Ex. 400"},domProps:{value:e.otherFees.annualPicnicFee},on:{input:function(t){t.target.composing||e.$set(e.otherFees,"annualPicnicFee",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),a("div",{staticClass:"other-fee"},[a("label",{attrs:{for:"Annual Sports Fee"}},[e._v("Annual Sports Fee")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.otherFees.annualSportsFee,expression:"otherFees.annualSportsFee",modifiers:{number:!0}}],attrs:{id:"annualSportFree",placeholder:"Ex. 150"},domProps:{value:e.otherFees.annualSportsFee},on:{input:function(t){t.target.composing||e.$set(e.otherFees,"annualSportsFee",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),a("div",{staticClass:"other-fee"},[a("label",{attrs:{for:"Annual Mahfil Fee"}},[e._v("Annual Mahfil Fee")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.otherFees.annualMahfilFee,expression:"otherFees.annualMahfilFee",modifiers:{number:!0}}],attrs:{id:"annualMahfilFee",placeholder:"Ex. 50"},domProps:{value:e.otherFees.annualMahfilFee},on:{input:function(t){t.target.composing||e.$set(e.otherFees,"annualMahfilFee",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])]),a("h3",[e._v("Total Fees : "+e._s(e.totalFee||0)+" BDT")]),a("div",{staticClass:"my-button"},[a("button",{attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.previewInvoice(t)}}},[e._v(" Preview ")]),a("button",{on:{click:function(t){return t.preventDefault(),e.resetFields(t)}}},[e._v(" Reset ")])])])])])])])},N=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-info"},[a("h2",[e._v("Grand Pioneer Invoice Generatior")]),a("hr")])}],I=(a("a9e3"),{data:function(){return{invoiceData:{},studentInfo:{fullName:"",regId:"",className:"",rollNumber:"",parentName:"",parentPhoneNumber:""},admissionFees:{admissionFee:"",admissionFormFee:"",idCardFee:""},examFees:{examFee:"",missedExamFee:""},tutionFees:{monthlyTutionFee:"",lateTutionFee:"",lateEntryFee:"",missedClassFee:"",previousDues:""},otherFees:{annualSportsFee:"",annualMahfilFee:"",annualPicnicFee:""},isPreview:!1,isModalActive:!1,isModalDeactive:!1,printReady:!1,isInvoiceHidden:!0}},computed:{admissionFee:function(){return Number(this.admissionFees.admissionFee)+Number(this.admissionFees.admissionFormFee)+Number(this.admissionFees.idCardFee)},tutionFee:function(){return Number(this.tutionFees.monthlyTutionFee)+Number(this.tutionFees.lateTutionFee)+Number(this.tutionFees.lateEntryFee)+Number(this.tutionFees.missedClassFee)},examFee:function(){return Number(this.examFees.examFee)+Number(this.examFees.missedExamFee)},otherFee:function(){return Number(this.otherFees.annualPicnicFee)+Number(this.otherFees.annualSportsFee)+Number(this.otherFees.annualMahfilFee)},invoiceDate:function(){var e=new Date,t=e.getDate(),a=e.getMonth()+1,i=e.getFullYear();return t<10&&(t="0".concat(t)),a<10&&(a="0".concat(a)),e="".concat(t,"-").concat(a,"-").concat(i),e},invoiceNum:function(){return Math.floor(1e5+9e5*Math.random())},totalFee:function(){return Number(this.admissionFee)+Number(this.tutionFee)+Number(this.examFee)+Number(this.otherFee)}},methods:{previewInvoice:function(){var e={};e.studentInfo=this.studentInfo,e.admissionFees=this.admissionFees,e.examFees=this.examFees,e.tutionFees=this.tutionFees,e.otherFees=this.otherFees,e.totalFee=this.totalFee,e.invoiceNum=this.invoiceNum,e.invoiceDate=this.invoiceDate,localStorage.setItem("invoiceData",JSON.stringify(e)),this.$router.push("invoice")},resetFields:function(){this.studentInfo={fullName:"",regId:"",className:"",rollNumber:"",parentName:"",parentPhoneNumber:""},this.admissionFees={admissionFee:"",admissionFormFee:"",idCardFee:""},this.examFees={examFee:"",missedExamFee:""},this.tutionFees={monthlyTutionFee:"",lateTutionFee:"",lateEntryFee:"",missedClassFee:"",previousDues:""},this.otherFees={annualSportsFee:"",annualMahfilFee:"",annualPicnicFee:""},localStorage.removeItem("invoiceData")},getDataFromLocalStoreage:function(){null!=JSON.parse(localStorage.getItem("invoiceData"))&&(this.invoiceData=JSON.parse(localStorage.getItem("invoiceData")),this.studentInfo=this.invoiceData.studentInfo,this.admissionFees=this.invoiceData.admissionFees,this.examFees=this.invoiceData.examFees,this.tutionFees=this.invoiceData.tutionFees,this.otherFees=this.invoiceData.otherFees)}},created:function(){this.getDataFromLocalStoreage()}}),P=I,S=(a("5e70"),Object(l["a"])(P,x,N,!1,null,"387b5879",null)),y=S.exports;i["a"].use(v["a"]);var E=[{path:"/",name:"Home",component:y},{path:"/invoice",name:"Invoice",component:C}],T=new v["a"]({mode:"history",base:"/",routes:E}),w=T;i["a"].config.productionTip=!1,i["a"].use(m.a),new i["a"]({router:w,render:function(e){return e(d)}}).$mount("#app")},"5e70":function(e,t,a){"use strict";var i=a("8275"),s=a.n(i);s.a},8275:function(e,t,a){},a0d0:function(e,t,a){}});
//# sourceMappingURL=app.69f0ac0f.js.map