(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["setup/setup-features"],{"00c0":function(t,e,a){},"02e1":function(t,e,a){},1525:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"le-marin"},[a("div",{staticClass:"le-card"},[a("el-tabs",[a("el-tab-pane",{attrs:{label:"接口设置"}},[a("Interface")],1),a("el-tab-pane",{attrs:{label:"定时任务"}},[a("Timing")],1),a("el-tab-pane",{attrs:{label:"定位服务"}},[a("Position")],1)],1)],1)])},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{ref:"ruleForm",staticClass:"le-main",attrs:{"label-width":"200px",model:t.form,rules:t.rules}},[a("div",{staticClass:"le-card"},[a("div",{staticClass:"le-card--header flex align-center"},[a("span",{staticClass:"le-sign"}),a("span",[t._v("采集接口")])]),a("el-form-item",{attrs:{label:"接口来源"}},[t._v(" 99api")]),a("el-form-item",{attrs:{label:"接口购买地址"}},[a("a",{staticStyle:{color:"#623ceb"},attrs:{target:"_blank",href:"https://www.99api.com/Login?log=5&referee=2262"}},[t._v("https://www.99api.com/Login?log=5&referee=2262")]),a("div",{staticClass:"he-tips"},[t._v("使用此链接注册99api账号，接口将自动开通")])]),a("el-form-item",{attrs:{label:"99api apikey",prop:"apikey_99"}},[a("el-input",{attrs:{placeholder:"请输入99api  apikey"},model:{value:t.form.apikey_99,callback:function(e){t.$set(t.form,"apikey_99",e)},expression:"form.apikey_99"}}),a("div",{staticClass:"he-tips"},[t._v("用于商品采集和评价助手")])],1)],1),a("div",{staticClass:"le-cardpin"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.save()}}},[t._v("保存")])],1)])},o=[],l=(a("61d9"),a("877e"),{name:"interface",data:function(){return{form:{apikey_99:""},rules:{apikey_99:[{required:!0,message:"请填写apikey",trigger:"blur"}]},loading:!0}},mounted:function(){this.getDetail()},methods:{getDetail:function(){var t=this;this.$heshop.search("post",{include:"setting"},{keyword:"apikey_99"}).then((function(e){t.form=e.content})),t.loading=!1},save:function(){var t=this;this.loading=!0;var e=this;this.$refs["ruleForm"].validate((function(a){a?e.$heshop.setting("post",{keyword:"apikey_99",content:{apikey_99:e.form.apikey_99}}).then((function(){e.loading=!1,e.$message.success("保存成功")})).catch((function(t){e.loading=!1,e.$message.error(t.data.message)})):t.loading=!1}))}}}),r=l,c=(a("8684"),a("cba8")),u=Object(c["a"])(r,i,o,!1,null,"87b19c6a",null),d=u.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{ref:"ruleForm",staticClass:"le-main",attrs:{"label-width":"200px",model:t.form}},[a("div",{staticClass:"le-card"},[a("div",{staticClass:"le-card--header flex align-center"},[a("span",{staticClass:"le-sign"}),a("span",[t._v("定时任务")])]),a("el-form-item",{attrs:{label:"定时任务"}},[a("el-input",{attrs:{disabled:"",value:t.form.crontab}}),a("span",{staticClass:"le-copy",on:{click:function(e){return t.copy(t.form.crontab)}}},[t._v("复制链接")]),a("div",{staticClass:"he-tips"},[t._v(" 请将定时任务链接，配置到服务器。 "),a("span",{staticClass:"le-copy"},[a("a",{staticStyle:{color:"inherit"},attrs:{href:"https://www.leadshop.vip/thread/235",target:"_blank"}},[t._v("查看配置教程")])])])],1)],1)])},p=[],m={name:"timing",data:function(){return{form:{crontab:""},loading:!0}},mounted:function(){this.getCrontab()},methods:{getCrontab:function(){var t=this;this.$heshop.crontab("post").then((function(e){t.form.crontab=e})).catch((function(){}))},copy:function(t){var e=document.createElement("div");e.innerText=t,e.style.position="absolute",e.style.top="0px",e.style.right="-9999px",document.body.appendChild(e);var a=document.createRange();a.selectNode(e),window.getSelection().removeAllRanges(),window.getSelection().addRange(a);document.execCommand("copy");e.parentNode.removeChild(e),this.$message.success("复制成功")}}},h=m,g=(a("9f1b"),Object(c["a"])(h,f,p,!1,null,"2b2bc018",null)),v=g.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{ref:"ruleForm",staticClass:"le-main",attrs:{"label-width":"200px",model:t.form}},[a("div",{staticClass:"le-card"},[a("div",{staticClass:"le-card--header flex align-center"},[a("span",{staticClass:"le-sign"}),a("span",[t._v("定位服务")])]),a("el-form-item",{attrs:{label:"开发者秘钥(key)"}},[a("el-input",{model:{value:t.form.tencent_key,callback:function(e){t.$set(t.form,"tencent_key",e)},expression:"form.tencent_key"}}),a("div",{staticClass:"he-tips"},[t._v(" 使用腾讯定位服务，商品详情页预估运费根据定位地址计算。 "),a("span",{staticClass:"le-copy"},[a("a",{staticStyle:{color:"inherit"},attrs:{href:"https://lbs.qq.com/miniProgram/jsSdk/jsSdkGuide/jsSdkOverview",target:"_blank"}},[t._v("申请秘钥")])])])],1)],1),a("div",{staticClass:"le-cardpin"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.save()}}},[t._v("保存")])],1)])},_=[],y={name:"position",data:function(){return{form:{tencent_key:""},loading:!0}},mounted:function(){this.getDetail()},methods:{getDetail:function(){var t=this;this.$heshop.search("post",{include:"setting"},{keyword:"setting_collection",content_key:"location_setting"}).then((function(e){t.form=e})),t.loading=!1},save:function(){var t=this;this.loading=!0;var e=this;this.$refs["ruleForm"].validate((function(a){a?e.$heshop.setting("post",{keyword:"setting_collection",content:{location_setting:{tencent_key:e.form.tencent_key}}}).then((function(){e.loading=!1,e.$message.success("保存成功")})).catch((function(t){e.loading=!1,e.$message.error(t.data.message)})):t.loading=!1}))}}},k=y,C=(a("a4a6"),Object(c["a"])(k,b,_,!1,null,"534920d0",null)),w=C.exports,$={name:"features",components:{Interface:d,Timing:v,Position:w}},x=$,S=(a("b682"),Object(c["a"])(x,n,s,!1,null,"8c3c6ba6",null));e["default"]=S.exports},8684:function(t,e,a){"use strict";a("f901")},"9f1b":function(t,e,a){"use strict";a("c19c")},a4a6:function(t,e,a){"use strict";a("02e1")},b682:function(t,e,a){"use strict";a("00c0")},c19c:function(t,e,a){},f901:function(t,e,a){}}]);