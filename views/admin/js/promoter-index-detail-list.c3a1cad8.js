(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promoter-index-detail-list"],{"0c76":function(t,e,n){"use strict";n.r(e);var o,i,r,a,s=n("4c02"),c=n.n(s),u=(n("2769"),n("ecf1"),n("eb62"),n("3f7e"),n("57d20"),n("b12c"),n("8236")),l=n("2573"),f=n("99a5"),d=n("46d3"),h=(n("6a61"),n("b1fa"),n("c5ce"),n("0e28")),m={name:"dissolve-relationship",data:function(){return{form:{radio:0,transfer_id:""},list:[],loading:!1,showItem:null}},props:{value:{type:Boolean,default:!1},info:{type:[Object]}},computed:{showDialog:{get:function(t){var e=t.value;return e},set:function(t){this.$emit("input",t)}}},render:function(){var t=this,e=arguments[0],n=this;return e("el-dialog",c()([{attrs:{visible:n.showDialog,title:"确认解除关系",width:"496px"}},{on:Object(d["a"])({},"update:visible",(function(t){n.showDialog=t}))}]),[e("el-form",{attrs:{"label-width":"129px"},class:"le-form"},[e("el-form-item",{attrs:{label:"解除关系的处理"}},[e("el-radio-group",{model:{value:n.form.radio,callback:function(e){t.$set(n.form,"radio",e)}}},[e("div",{class:"radio-item"},[e("el-radio",{attrs:{label:0}},["自由绑定分销商"]),e("div",{class:"le-prompt-text"},["      选择后，下线用户将重新自由绑定分销商"])]),e("div",{class:"radio-item"},[e("el-radio",{attrs:{label:1}},["转移给指定分销商"]),e("div",{class:"le-prompt-text"},["      选择后，下线用户将成为新的分销商的一级下线"]),e("el-select",{attrs:{loading:n.loading,filterable:!0,remote:!0,placeholder:"请输入新分销商的手机号搜索",disabled:1!==n.form.radio,"remote-method":n.remoteMethod},on:{change:n.selectMobile},model:{value:n.form.select,callback:function(e){t.$set(n.form,"select",e)}}},[n.list.map((function(t,n){return e("el-option",{key:n,attrs:{label:t.mobile,value:t}})}))])])]),function(){if(n.showItem)return e("div",{class:"show--item"},[n.showItem.show_value])}()])]),e("div",{slot:"footer"},[e("el-button",{on:{click:function(){return n.showDialog=!1}}},["取消"]),e("el-button",{attrs:{type:"primary"},on:{click:n.submit}},["确定"])])])},methods:{remoteMethod:function(t){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(""===t){n.next=7;break}return e.loading=!0,n.next=4,Object(h["K"])({uid:e.info.UID,mobile:t});case 4:o=n.sent,e.list=o.filter((function(e){return e.mobile=e.mobile.toString(),e.mobile.indexOf(t)>-1})),e.loading=!1;case 7:case"end":return n.stop()}}),n)})))()},selectMobile:function(t){this.showItem=t,this.form.transfer_id=t.UID},submit:function(){var t=this;if(1===this.form.radio){if(!this.form.transfer_id)return void this.$message.error("请输入新分销商的手机号搜索")}else this.form.transfer_id=null;Object(h["b"])(this.info.UID,"dispense",this.form).then((function(){t.$emit("confirm"),t.$message.success("解除关系成功"),t.showDialog=!1}))}}},p=m,g=(n("11f8"),n("4ac2")),v=Object(g["a"])(p,o,i,!1,null,"54d50fce",null),b=v.exports,w={mixins:[u["a"]],components:{recruitmentPromotion:l["a"],dissolveRelationship:b},data:function(){return{list:[],type:"一级下线",children:{},children_num:0,user:{},form:{page:1,search:"",type:0},page:{size:20,total:0},showDissolveRelationship:!1,dissolveRelationshipInfo:null}},render:function(){var t=this,e=arguments[0],n=this,o=[{label:"全部",value:0},{label:"分销商",value:1},{label:"普通下线",value:2}];return e("div",[e("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[e("el-breadcrumb-item",[e("a",{on:{click:this.routerBack.bind(this,-2)}},["分销列表"])]),e("el-breadcrumb-item",[e("a",{on:{click:this.routerBack.bind(this,-1)}},["分销商详情"])]),e("el-breadcrumb-item",["下线列表"])]),e("div",{class:"le-card le-card-margin le-userinfo-box flex align-center"},[e("div",{class:"le-userinfo flex align-center"},[e("el-avatar",{attrs:{size:48,error:function(){return!0}}},[e("img",{attrs:{src:this.user.avatar}})]),e("span",{class:"le-username"},[this.user.nickname])]),e("span",{class:"le-title"},[this.type]),e("span",{class:"le-number"},[n.children_num])]),e("el-form",c()([{class:"le-card le-card-margin"},{props:{model:n.form}},{attrs:{inline:!0,"label-width":"112px"}}]),[e("el-form-item",{attrs:{label:"下线搜索"}},[e("el-input",{attrs:{placeholder:"输入昵称搜索"},model:{value:n.form.search,callback:function(e){t.$set(n.form,"search",e)}}})]),e("el-form-item",{attrs:{label:"下线类型"}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:n.form.type,callback:function(e){t.$set(n.form,"type",e)}}},[o.map((function(t,n){return e("el-option",{key:n,attrs:{label:t.label,value:t.value}})}))])]),e("div",{class:"le-button"},[e("el-button",{attrs:{type:"primary"},on:{click:this.filter}},["筛选"]),e("el-button",{on:{click:this.empty}},["清空"])])]),e("div",{class:"le-card le-card-margin le-table"},[e("el-table",c()([{},{props:{data:this.list}},{attrs:{"row-class-name":"le-table-row"}}]),[e("el-table-column",{attrs:{label:"用户","min-width":"200px"},scopedSlots:{default:function(t){return e("div",{class:"flex align-center"},[e("el-avatar",{attrs:{size:40,error:function(){return!0}}},[e("img",{attrs:{src:t.row.avatar}})]),e("i",{class:"le-icon le-userplatform-icon le-icon-".concat("weapp"===t.row.type?"xiaochengxu":"wehcat")}),e("span",[t.row.nickname])])}}}),e("el-table-column",{attrs:{label:"下级类型","min-width":"100px"},scopedSlots:{default:function(t){return t.row.status&&2==t.row.status?"分销商":"普通下线"}}}),e("el-table-column",{attrs:{label:"分销商等级","min-width":"100px"},scopedSlots:{default:function(t){return t.row.status&&2==t.row.status&&t.row.level_name?t.row.level_name:"--"}}}),e("el-table-column",{attrs:{label:"分销商品金额(元)","min-width":"130px"},scopedSlots:{default:function(t){return t.row.sales_amount}}}),e("el-table-column",{attrs:{label:"贡献佣金金额(元)","min-width":"130px"},scopedSlots:{default:function(t){return t.row.commission}}}),e("el-table-column",{attrs:{label:"成为下线时间","min-width":"150px"},scopedSlots:{default:function(e){return e.row.bind_time?t.$moment(new Date(1e3*e.row.bind_time)).format("Y-MM-DD HH:mm:ss"):"--"}}}),e("el-table-column",{attrs:{label:"操作"},scopedSlots:{default:function(o){if(o.row.id!==t.user.UID)return e("el-button",{class:"le-table-button",attrs:{type:"text"},on:{click:n.dissolveRelationship.bind(n,o.row)}},["解除关系"])}}})]),e("div",{class:"flex le-pagination justify-end"},[e("el-pagination",{attrs:{background:!0,"current-page":this.form.page,layout:"prev, pager, next, jumper","page-count":this.page.count},on:{"current-change":this.switchPage}})])]),function(){if(n.showDissolveRelationship)return e(b,{on:{confirm:n.dissolveRelationshipConfirm},attrs:{info:n.dissolveRelationshipInfo},model:{value:n.showDissolveRelationship,callback:function(e){t.$set(n,"showDissolveRelationship",e)}}})}()])},mounted:function(){var t=this.$route.params;"{}"===JSON.stringify(t)?t=JSON.parse(localStorage.getItem("promoter_children")):localStorage.setItem("promoter_children",JSON.stringify(t)),this.type=1==t.type?"一级下线数":2==t.type?"二级下线数":"三级下线数",this.children=1==t.type?t.detail.children.first:2==t.type?t.detail.children.second:t.detail.children.third,t.detail.user["UID"]=t.detail.UID,this.user=t.detail.user,this.children_num=this.children.ordinary+this.children.promoter,this.getList()},methods:{getList:function(){var t=this;this.$heshop.promoter("post",{behavior:"children_list"},{parent:this.children.parent,UID:this.user.UID,nickname:this.form.search.trim(),type:this.form.type}).page(this.form.page,this.page.size).then((function(e){var n=e.data,o=e.headers;t.list=n,t.form.page=+o["x-pagination-current-page"],t.page={count:+o["x-pagination-page-count"],size:+o["x-pagination-per-page"],total:+o["x-pagination-total-count"]}})).catch((function(e){t.$message.error(e.data.message)}))},routerBack:function(t){this.$router.go(t)},filter:function(){this.replaceQuery(),this.getList()},empty:function(){this.form={search:"",type:0,page:1},this.filter()},switchPage:function(t){this.form.page=t,this.replaceQuery(),this.getList()},dissolveRelationship:function(t){this.showDissolveRelationship=!0,this.dissolveRelationshipInfo=t,this.dissolveRelationshipInfo.UID=t.id},dissolveRelationshipConfirm:function(){var t=this,e=this.list.findIndex((function(e){return e.id===t.dissolveRelationshipInfo.id}));this.$delete(this.list,e),this.children_num--}}},y=w,P=(n("41f2"),Object(g["a"])(y,r,a,!1,null,"3b5da6a3",null));e["default"]=P.exports},"0e28":function(t,e,n){"use strict";n.d(e,"q",(function(){return c})),n.d(e,"t",(function(){return u})),n.d(e,"a",(function(){return l})),n.d(e,"L",(function(){return f})),n.d(e,"k",(function(){return d})),n.d(e,"j",(function(){return h})),n.d(e,"z",(function(){return m})),n.d(e,"x",(function(){return p})),n.d(e,"u",(function(){return g})),n.d(e,"y",(function(){return v})),n.d(e,"c",(function(){return b})),n.d(e,"v",(function(){return w})),n.d(e,"w",(function(){return y})),n.d(e,"D",(function(){return P})),n.d(e,"d",(function(){return _})),n.d(e,"i",(function(){return k})),n.d(e,"C",(function(){return I})),n.d(e,"B",(function(){return x})),n.d(e,"E",(function(){return O})),n.d(e,"e",(function(){return D})),n.d(e,"f",(function(){return N})),n.d(e,"A",(function(){return $})),n.d(e,"h",(function(){return A})),n.d(e,"F",(function(){return R})),n.d(e,"l",(function(){return j})),n.d(e,"n",(function(){return T})),n.d(e,"I",(function(){return U})),n.d(e,"m",(function(){return C})),n.d(e,"H",(function(){return S})),n.d(e,"J",(function(){return G})),n.d(e,"p",(function(){return E})),n.d(e,"b",(function(){return z})),n.d(e,"K",(function(){return L})),n.d(e,"G",(function(){return X})),n.d(e,"s",(function(){return q})),n.d(e,"g",(function(){return B})),n.d(e,"o",(function(){return J})),n.d(e,"r",(function(){return M}));n("2769"),n("ecf1"),n("f49b"),n("b1fa");var o=n("430a"),i=(n("6afd"),n("2070"),n("eb62"),["X-PAGINATION-TOTAL-COUNT","X-PAGINATION-PER-PAGE","X-PAGINATION-PAGE-COUNT","X-PAGINATION-CURRENT-PAGE"]);function r(t){Object.keys(t.headers).forEach((function(e){t.headers[e.toUpperCase()]=t.headers[e],delete t.headers[e]}));var e={current:1,pageCount:1,totalCount:1};i.forEach((function(e){Object.keys(t.headers).map((function(n){e===n&&(t.headers[n]=parseInt(t.headers[n]))}))})),e.current=t.headers["X-PAGINATION-CURRENT-PAGE"],e.pageCount=t.headers["X-PAGINATION-PAGE-COUNT"],e.totalCount=t.headers["X-PAGINATION-TOTAL-COUNT"],t.pagination=e}n("7c98");var a=o["default"].prototype.$heshop,s=o["default"].prototype.$message.error;function c(t){var e=t.tabKey,n=void 0===e?"all":e,o=t.page,i=void 0===o?1:o,c=t.search,u=void 0===c?"":c,l=t.sort,f=void 0===l?{}:l,d=t.time_start,h=void 0===d?0:d,m=t.time_end,p=void 0===m?0:m,g=t.cost_status,v=void 0===g?null:g,b=t.is_promoter,w=void 0===b?null:b,y=t.group,P=void 0===y?[]:y,_=t.price_start,k=void 0===_?"":_,I=t.price_end,x=void 0===I?"":I;return new Promise((function(t){a.search("post",{include:"goods"},{keyword:{tab_key:n,search:u,sort:f,time_start:h,time_end:p,is_promoter:w,cost_status:v,group:P,price_start:k,price_end:x}}).page(i,10).then((function(e){r(e);var n=e.data,o=e.pagination;t({data:n,pagination:o})})).catch((function(t){s(t.data.message)}))}))}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return new Promise((function(i,r){a.promotergoods("put",{type:t,id:e,tab_key:n},{is_promoter:o}).then(i).catch(r)}))}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){a.promoter("post",t).then(e).catch((function(t){s(t.data.message),n(t)}))}))}function f(t){return new Promise((function(e,n){a.promoter("get",{behavior:"add_search",search:t}).then((function(t){e(t)})).catch((function(t){s(t.data.message),n(t)}))}))}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{keyword:"",begin_time:null,end_time:null,type:null,level:null};return new Promise((function(n){a.finance("get",e).page(t,10).then((function(t){r(t);var e=t.data,o=t.pagination;n({data:e,pagination:o})})).catch((function(t){s(t.data.message)}))}))}function h(t,e,n){return t=parseInt(t),new Promise((function(o,i){a.finance("put",t,{status:e,content:n}).then(o).catch((function(t){i(t)}))}))}function m(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n){a.search("post",{include:"promoterorder"},e).page(t,10).then((function(t){r(t);var e=t.data,o=t.pagination;n({data:e,pagination:o})})).catch((function(t){s(t.data.message)}))}))}function p(){return new Promise((function(t){a.promoterlevel("get").then(t).catch((function(t){s(t.data.message)}))}))}function g(t){return t=parseInt(t),new Promise((function(e){a.promoterlevel("delete",t).then(e).catch((function(t){s(t.data.message)}))}))}function v(){return new Promise((function(t){a.promoterlevel("get",{behavior:"option"}).then(t).catch((function(t){s(t.data.message)}))}))}function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){a.promoterlevel("post",t).then(e).catch((function(t){s(t.data.message),n(t)}))}))}function w(t){return t=parseInt(t),new Promise((function(e){a.promoterlevel("get",t).then(e).catch((function(t){s(t.data.message)}))}))}function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t=parseInt(t),new Promise((function(n,o){a.promoterlevel("put",t,e).then(n).catch((function(t){s(t.data.message),o(t)}))}))}function P(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1?arguments[1]:void 0;return new Promise((function(n){a.promotermaterial("get",e).page(t,10).then((function(t){r(t);var e=t.data,o=t.pagination;n({data:e,pagination:o})})).catch((function(t){s(t.data.message)}))}))}function _(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e){a.promotermaterial("post",t).then(e).catch((function(t){s(t.data.message)}))}))}function k(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n){a.promotermaterial("put",t,e).then(n).catch((function(t){s(t.data.message)}))}))}function I(t){return new Promise((function(e){a.promotermaterial("get",t).then(e).catch((function(t){s(t.data.message)}))}))}function x(t){return new Promise((function(e){a.promotermaterial("delete",t).then(e).catch((function(t){s(t.data.message)}))}))}function O(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n){a.promoterzone("get",e).page(t,10).then((function(t){r(t);var e=t.data,o=t.pagination;n({data:e,pagination:o})})).catch((function(t){s(t.data.message)}))}))}function D(t){return new Promise((function(e){a.promoterzone("post",t).then(e).catch((function(t){s(t.data.message)}))}))}function N(t){return new Promise((function(e){a.promoterzone("delete",t).then(e).catch((function(t){s(t.data.message)}))}))}function $(t){return t=parseInt(t),new Promise((function(e){a.promoterzone("get",t).then((function(t){e(t)})).catch((function(t){s(t.data.message)}))}))}function A(t,e){return t=parseInt(t),new Promise((function(n,o){a.promoterzone("put",t,e).then(n).catch((function(t){o(t),s(t.data.message)}))}))}function R(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){a.setting("post",{keyword:"commission_setting",content:t}).then(e).catch((function(t){n(t)}))}))}function j(){return new Promise((function(t,e){a.search("post",{include:"setting"},{keyword:"commission_setting"}).then(t).catch((function(t){s(t.data.message),e()}))}))}function T(){return new Promise((function(t,e){a.search("post",{include:"setting"},{keyword:"promoter_setting"}).then(t).catch((function(t){s(t.data.message),e()}))}))}function U(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){a.setting("post",{keyword:"promoter_setting",content:t}).then(e).catch((function(t){n(t)}))}))}function C(){return new Promise((function(t,e){a.search("post",{include:"setting"},{keyword:"promoter_rank"}).then(t).catch((function(t){s(t.data.message),e()}))}))}function S(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){a.setting("post",{keyword:"promoter_rank",content:t}).then(e).catch((function(t){n(t)}))}))}function G(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){a.setting("post",{keyword:"promoter_recruit_make",content:t}).then(e).catch((function(t){n(t)}))}))}function E(){return new Promise((function(t,e){a.search("post",{include:"setting"},{keyword:"promoter_recruit_make"}).then((function(e){t(e.content)})).catch((function(t){s(t.data.message),e()}))}))}function z(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(o,i){a.promoter("put",{id:t,behavior:e},n).then(o).catch((function(t){s(t.data.message),i()}))}))}function L(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{uid:"",mobile:""};return new Promise((function(e,n){a.promoter("get",{behavior:"transfer_search",from_uid:t.uid,mobile:t.mobile}).then(e).catch((function(t){s(t.data.message),n(t)}))}))}function X(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){a.setting("post",{keyword:"promoter_page_setting",content:t}).then(e).catch((function(t){s(t.data.message),n(t)}))}))}function q(){return new Promise((function(t,e){a.search("post",{include:"setting"},{keyword:"promoter_page_setting"}).then((function(e){t(e.content)})).catch((function(t){s(t.data.message),e(t)}))}))}function B(t,e){return new Promise((function(n,o){a.promoter("put",parseInt(t),{level:e}).then(n).catch((function(t){s(t.data.message),o(t)}))}))}function J(t){return new Promise((function(e,n){a.qrcode("post",t).then(e).catch((function(t){s(t.data.message),n(t)}))}))}function M(){return new Promise((function(t,e){a.group("get",{include:"goods"}).then((function(e){t(e)})).catch((function(t){s(t.data.message),e(t)}))}))}},"11f8":function(t,e,n){"use strict";n("aad6")},2573:function(t,e,n){"use strict";var o,i,r=n("4c02"),a=n.n(r),s=n("46d3"),c=n("19e9"),u=n("0e28"),l=n("3303"),f={name:"recruitment-promotion",data:function(){return{platform:"weapp",form:{weapp:{},wechat:{}}}},props:{value:{type:Boolean,default:!1},info:{type:[Object]}},computed:{showDialog:{get:function(t){var e=t.value;return e},set:function(t){this.$emit("input",t)}}},render:function(){var t=arguments[0],e=this;return t("el-dialog",a()([{attrs:{visible:e.showDialog,title:"推广",width:"533px",top:"30vh"}},{on:Object(s["a"])({},"update:visible",(function(t){e.showDialog=t}))}]),[t("div",{class:"flex"},[t("div",{class:"left"},[t("div",{class:[{active:"weapp"===e.platform},"left-item"],on:{click:function(){return e.platform="weapp"}}},["微信小程序"]),t("div",{class:[{active:"wechat"===e.platform},"left-item"],on:{click:function(){return e.platform="wechat"}}},["公众号"])]),t("div",{class:"right"},[t("div",{class:"right--title"},["weapp"===e.platform?"小程序路径":"wechat"===e.platform?"公众号路径":null]),t("el-input",{attrs:{value:e.form[e.platform].url,disabled:!0},class:"le-input--300"},[t("el-button",{slot:"append",on:{click:function(){Object(c["a"])({content:e.form[e.platform].url,success:function(){e.$message.success("复制成功")}})}}},["复制"])]),t("el-button",{class:"download--btn",attrs:{plain:!0},on:{click:function(){Object(l["a"])(e.form[e.platform].image,"招募令")}}},["下载","weapp"===e.platform?"小程序":"wechat"===e.platform?"公众号":null,"码"])])])])},mounted:function(){var t=this,e={page:"promoter/pages/recruit",scene:"behavior=recruiting&invite_id=0"};Object(u["o"])(e).then((function(e){t.form=e}))}},d=f,h=(n("becf"),n("4ac2")),m=Object(h["a"])(d,o,i,!1,null,"55426c11",null);e["a"]=m.exports},"41f2":function(t,e,n){"use strict";n("84be")},8236:function(t,e,n){"use strict";n("2769"),n("0756"),n("6afd"),n("2070");e["a"]={data:function(){},methods:{replaceQuery:function(){var t=Object.assign({},this.$route.query,this.form);this.$router.replace({query:t})},getQuery:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["page"],e=this.$route.query;return Object.keys(e).forEach((function(n){for(var o=0;o<t.length;o++)t[o]===n&&(isNaN(e[n])?e[n]=1:e[n]=parseInt(e[n]))})),Object.assign(this.form,e)},emptyStatus:function(){this.$router.replace({query:{}})}},filters:{}}},"84be":function(t,e,n){},"886d":function(t,e,n){},aad6:function(t,e,n){},becf:function(t,e,n){"use strict";n("886d")}}]);