(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["goods/service"],{"2c0d":function(t,e,n){},4106:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"le-card"},[n("div",{staticClass:"le-header"},[n("el-input",{staticClass:"le-input",attrs:{placeholder:"请输入服务名称搜索",clearable:""},on:{clear:t.getList},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList.apply(null,arguments)}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.getList},slot:"append"})],1),n("el-button",{staticClass:"le-header__btn",attrs:{type:"primary"},on:{click:function(e){return t.routerEdit()}}},[t._v("添加商品服务")])],1),n("el-table",{staticClass:"le-table",attrs:{data:t.list}},[n("el-table-column",{attrs:{prop:"title",label:"服务名称"}}),n("el-table-column",{attrs:{prop:"goods_number",label:"商品数"}}),n("el-table-column",{attrs:{prop:"time",label:"创建时间","min-width":"180px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("timeFormat")(e.row.created_time,"yyyy-mm-dd hh:MM:ss"))+" ")]}}])}),n("el-table-column",{attrs:{prop:"sort",label:"排序","render-header":t.hintRender},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"le_goods__main-goodstitle le_goods__main-sort"},[t._v(" "+t._s(e.row.sort)+" "),n("el-popover",t._b({attrs:{title:" ",trigger:"click"},model:{value:e.row.popover,callback:function(n){t.$set(e.row,"popover",n)},expression:"scope.row.popover"}},"el-popover",t.$attrs,!1),[n("div",{staticClass:"el-popconfirm"},[n("p",{staticClass:"el-popconfirm__main"},[n("el-input",{model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}})],1),n("div",{staticClass:"el-popconfirm__action"},[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:t.cancel}},[t._v("取消")]),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.sortChange}},[t._v("确定")])],1)]),n("span",{attrs:{slot:"reference"},on:{click:function(n){return t.editSort(e.row,e.$index)}},slot:"reference"},[n("he-icon",{staticClass:"le_goods__main-sortedit",attrs:{type:"le-icon-editor"}})],1)])],1)]}}])}),n("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(n){return t.editChange(n,e.row.id,e.$index)}},model:{value:e.row.status,callback:function(n){t.$set(e.row,"status",n)},expression:"scope.row.status"}})]}}])}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"flex align-center le-edit"},[n("el-button",{attrs:{type:"text"},on:{click:function(n){return t.routerEdit({id:e.row.id})}}},[t._v(" 编辑 ")]),n("span",{staticClass:"le-edit-line"}),n("popconfirm",{attrs:{width:"330px",title:"确认删除该条商品服务？"},on:{confirm:function(n){return t.deleteService({id:e.row.id,index:e.$index})}}},[n("el-button",{attrs:{type:"text"}},[t._v("删除")])],1)],1)]}}])})],1),n("div",{staticClass:"le-footer flex justify-end"},[n("el-pagination",{attrs:{"current-page":t.page.current,background:"",layout:"prev, pager, next, jumper","page-count":t.page.count},on:{"current-change":t.currentChange}})],1)],1)},r=[],o=n("9d6b"),i=(n("61d9"),n("877e"),n("f667"),n("dc87"),n("e186"),n("c0b5")),a=n("d8df"),c={components:{HelpHint:i["a"],popconfirm:a["a"]},data:function(){return{list:[],page:{current:1,count:1,size:10,total:1},search:"",sort:0,loading:!1,sortIndex:0}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getList();case 1:case"end":return e.stop()}}),e)})))()},methods:{getList:function(){var t=this;this.loading=!0,this.$heshop.service("get",{search:this.search}).page(this.page.current,this.page.size).then((function(e){var n=e.data,s=e.headers;n.forEach((function(t){t.popover=!1})),t.list=n,t.page={current:+s["x-pagination-current-page"],count:+s["x-pagination-page-count"],size:+s["x-pagination-per-page"],total:+s["x-pagination-total-count"]},t.loading=!1})).catch((function(){t.loading=!1,t.$message.error("获取失败")}))},currentChange:function(t){this.page.current=t,this.getList()},hintRender:function(){return this.$createElement("HelpHint",{props:{content:"序号越大，排序越靠前"}},"排序")},editSort:function(t,e){this.sort=t.sort,this.sortIndex=e},sortChange:function(){var t=this,e=this.list[this.sortIndex].id;this.$heshop.service("put",e,{sort:this.sort}).then((function(){t.list[t.sortIndex].popover=!1,t.list[t.sortIndex].sort=t.sort})).catch((function(e){t.$message.error(e.data[0].message)}))},cancel:function(){this.list[this.sortIndex].popover=!1},editChange:function(t,e,n){var s=this;this.$heshop.service("put",e,{status:t}).then((function(){})).catch((function(e){s.list[n].status=1===t?0:1,s.$message.error(e.data.message)}))},deleteService:function(t){var e=this;this.$heshop.service("delete",t.id).then((function(){e.$message.success("删除成功"),e.$delete(e.list,t.index)})).catch((function(t){e.$message.error(t.data.message)}))},routerEdit:function(t){var e={path:"/goods/servicePublish"};t&&(e.query=t),this.$router.push(e)}}},l=c,u=(n("6eca"),n("cba8")),p=Object(u["a"])(l,s,r,!1,null,"70d13bd0",null);e["default"]=p.exports},"6eca":function(t,e,n){"use strict";n("2c0d")}}]);