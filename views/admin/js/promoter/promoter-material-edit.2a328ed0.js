(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promoter/promoter-material-edit"],{"34c2":function(e,t,i){"use strict";i("d0f3")},7365:function(e,t,i){"use strict";i.r(t);var o,r,l=i("2638"),s=i.n(l),c=(i("159b"),i("d81d"),i("b0c0"),i("9932")),a=i.n(c),n=i("c208"),d=i.n(n),f=i("5a02"),m=i.n(f),u=i("ffa4"),p=i.n(u),v=i("8b43"),_=i("b76a"),g=i.n(_),b=i("0e28"),h={name:"material-edit",components:{vuedraggable:g.a,goodsSelect:v["a"]},data:function(){return{loading:!1,form:{name:"",type:1,content:"",pic_list:[],video_list:[],goods:{}},rules:{name:[{required:!0,message:"素材名称不能为空",trigger:"blur"}],content:[{required:!0,message:"素材文案不能为空",trigger:"blur"}],pic_list:[{required:!0,message:"图片不能为空",trigger:"change"}],video_list:[{required:!0,message:"视频不能为空",trigger:"change"}],video_cover:[{required:!0,message:"视频封面不能为空",trigger:"change"}]}}},methods:{routerBack:function(){this.$router.back(-1)},submit:function(){var e=this;this.$refs["form"].validate((function(t){if(!t)return!1;e.loading=!0;var i=e.$_.cloneDeep(e.form);e.$_.isEmpty(i.goods)?i.goods_id=0:i.goods_id=i.goods.id;var o=e.$route.query.id;o?Object(b["i"])(o,i).then((function(){e.loading=!1,e.routerBack()})):Object(b["d"])(i).then((function(){e.loading=!1,e.routerBack()}))}))},arrayConcat:function(e){var t=this;this.$refs["form"].clearValidate("pic_list"),e.forEach((function(e){t.form.pic_list.push(e)}))},deleteImg:function(e){event.stopPropagation(),this.$delete(this.form.pic_list,e)},getDetail:function(){var e=this;Object(b["C"])(parseInt(this.$route.query.id)).then((function(t){t.goods=t.goods?t.goods:{},e.form=t}))}},mounted:function(){this.$route.query.id&&this.getDetail()},render:function(){var e=this,t=arguments[0],i=this,o=[{name:"全部",type:0},{name:"图片",type:1},{name:"视频",type:2}];return t("div",{class:"le-main"},[t("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",[t("a",{on:{click:i.routerBack}},["素材中心"])]),t("el-breadcrumb-item",[i.$route.query.id?"编辑素材":"添加素材"])]),t("el-form",s()([{ref:"form",directives:[{name:"loading",value:i.loading}]},{props:{model:i.form,rules:i.rules}},{class:"flex le-content",attrs:{"label-width":"124px"}}]),[t("div",{class:"le-left le-card"},[t("div",{class:"le-left--content"},[t("div",{class:"le-text"},["素材中心"]),t("img",{attrs:{src:a.a,alt:"",width:"338",height:"80"}}),t("img",{attrs:{src:d.a,width:"338",height:"50",alt:""}}),t("div",{class:"le-switch flex"},[o.map((function(e,o){return t("div",{key:o,class:[{active:i.form.type===e.type},"flex-sub","le-switch--item"]},[e.name,t("span",{class:"le-line"})])}))]),t("div",{class:"le-left--list"},[t("div",{class:"le-content--text"},[function(){return i.form.content?i.form.content:"素材文案"}()]),function(){return 1===i.form.type?t("div",{class:"le-picture flex flex-wrap"},[function(){return i.form.pic_list.length>0?i.form.pic_list.map((function(e,i){return t("img",{class:"le-image",attrs:{src:e,width:"98",height:"98"},key:i})})):t("img",{attrs:{src:m.a,width:"98",height:"98"}})}()]):(e=i.$_.isEmpty(i.form.video_cover)?p.a:i.form.video_cover,t("img",{class:"le-video",attrs:{src:e,width:"312",height:"176"}}));var e}(),t("div",{class:"flex align-center le-footer justify-between"},[t("div",[function(){if(!i.$_.isEmpty(i.form.goods))return t("span",{class:"le-more"},["查看商品"])}(),t("span",["分享0"])]),t("div",{class:"le-button"},[t("el-button",{attrs:{type:"primary",plain:!0,round:!0}},["一键发圈"]),t("el-button",{attrs:{type:"primary",plain:!0,round:!0}},["发动态"])])])])])]),t("div",{class:"le-right le-card flex-sub"},[t("div",{class:"le-card-head flex align-center"},[t("span",{class:"le-card-line"}),t("span",["编辑素材"])]),t("el-form-item",{attrs:{label:"素材名称",prop:"name"}},[t("el-input",{attrs:{placeholder:"请输入素材名称","show-word-limit":!0,maxlength:10},model:{value:i.form.name,callback:function(t){e.$set(i.form,"name",t)}}})]),t("el-form-item",{attrs:{label:"素材类型"}},[t("el-radio-group",{on:{change:function(){i.$refs["form"].clearValidate("pic_list")}},model:{value:i.form.type,callback:function(t){e.$set(i.form,"type",t)}}},[t("el-radio",{attrs:{label:1}},["图片"]),t("el-radio",{attrs:{label:2}},["视频"])])]),t("el-form-item",{attrs:{label:"素材文案",prop:"content"},class:"le-textarea"},[t("el-input",{attrs:{resize:"none",rows:13,placeholder:"请输入素材文案",type:"textarea","show-word-limit":!0},model:{value:i.form.content,callback:function(t){e.$set(i.form,"content",t)}}})]),function(){return 1===i.form.type?t("el-form-item",{attrs:{label:"图片",prop:"pic_list"},class:"le-pic_list",key:"pic_list"},[t("div",[t(g.a,{model:{value:i.form.pic_list,callback:function(t){e.$set(i.form,"pic_list",t)}}},[i.form.pic_list.map((function(o,r){return t("div",{key:r,class:[{"le-label__require-image":0===r},"le-label__require-item"]},[t("div",{class:"select-cover__120"},[t("pictureDialog",{scopedSlots:{upload:function(){return t("div",{class:"select-cover__120-add"},[t("i",{class:"le-icon le-icon-add select-cover__120-icon"}),t("span",{class:"select-cover__120-text"},["添加图片"])])},preview:function(e){return t("div",{class:"select-cover__120-edit"},[t("el-image",{attrs:{src:e.url,fit:"cover"}}),t("div",{class:"select-cover__120-tips"},[t("span",["替换"])," |",t("span",{on:{click:i.deleteImg.bind(i,r)}},["删除"])])])}},model:{value:i.form.pic_list[r],callback:function(t){e.$set(i.form.pic_list,r,t)}}})])])})),function(){if(i.form.pic_list.length<9)return t("div",{class:"select-cover__120 le-label__require-item"},[t("pictureDialog",{on:{confirm:i.arrayConcat},attrs:{limit:9-i.form.pic_list.length,max:9},scopedSlots:{upload:function(){return t("div",{class:"select-cover__120-add"},[t("i",{class:"le-icon le-icon-add select-cover__120-icon"}),t("span",{class:"select-cover__120-text"},["添加图片"])])},preview:function(){return t("div",[t("i",{class:"le-icon le-icon-add select-cover__120-icon"}),t("span",{class:"select-cover__120-text"},["添加图片"])])}}})])}()])]),t("div",{class:"le-prompt-text"},["建议尺寸：1000像素 * 1000像素，可拖拽改变图片顺序，最多上传9张"])]):[[t("el-form-item",{attrs:{label:"视频",prop:"video_list"},key:"video_list"},[t("div",{class:"select-cover__120"},[t("videoDialog",{on:{confirm:function(){i.$refs.form.validateField("video_list")}},scopedSlots:{upload:function(){return t("div",{class:"select-cover__120-add"},[t("i",{class:"le-icon le-icon-add select-cover__120-icon"}),t("span",{class:"select-cover__120-text"},["添加视频"])])},preview:function(e){return t("div",{class:"select-cover__120-edit"},[t("el-image",{attrs:{src:e.url.cover,fit:"cover"}}),t("div",{class:"select-cover__120-tips"},["替换视频"])])}},model:{value:i.form.video_list,callback:function(t){e.$set(i.form,"video_list",t)}}})]),t("div",{class:"le-prompt-text"},["建议时长：10~30秒，宽高比 16:9"])])],[t("el-form-item",{attrs:{label:"视频封面",prop:"video_cover"},key:"video_cover"},[t("div",{class:"select-cover__120"},[t("pictureDialog",{on:{confirm:function(){i.$refs.form.validateField("video_cover")}},attrs:{limit:1},scopedSlots:{upload:function(){return t("div",{class:"select-cover__120-add"},[t("i",{class:"le-icon le-icon-add select-cover__120-icon"}),t("span",{class:"select-cover__120-text"},["添加图片"])])},preview:function(e){return t("div",{class:"select-cover__120-edit"},[t("el-image",{attrs:{src:e.url,fit:"cover"}}),t("div",{class:"select-cover__120-tips"},[t("span",["替换"])," |",t("span",{on:{click:function(e){e.stopPropagation(),i.form.video_cover=""}}},["删除"])])])}},model:{value:i.form.video_cover,callback:function(t){e.$set(i.form,"video_cover",t)}}})]),t("div",{class:"le-prompt-text"},["建议尺寸：750像素 * 422像素"])])]]}(),t("el-form-item",{attrs:{label:"关联商品"}},[!i.$_.isEmpty(i.form.goods),t("el-button",{attrs:{type:"primary",disabled:!i.$_.isEmpty(i.form.goods),plain:!0},on:{click:function(){i.$refs.goodsSelect.handleClick()}},class:"le-related--products"},["选择商品"]),t("goods-select",{ref:"goodsSelect",attrs:{"is-tips":!1,type:"radio","select-style":{backgroundColor:"#ffffff"}},model:{value:i.form.goods,callback:function(t){e.$set(i.form,"goods",t)}}}),function(){if(!i.$_.isEmpty(i.form.goods))return t("div",{class:"le-goods flex align-center"},[t("el-image",{attrs:{src:i.form.goods.slideshow[0]}}),t("div",{class:"flex-sub goods-name"},[i.form.goods.name]),t("el-button",{attrs:{type:"text"},on:{click:function(){return i.form.goods={}}}},["移除"])])}()])])]),t("div",{class:"le-cardpin"},[t("el-button",{attrs:{type:"primary",loading:i.loading},on:{click:i.submit}},["保存"])])])}},y=h,k=(i("34c2"),i("2877")),x=Object(k["a"])(y,o,r,!1,null,"e9604510",null);t["default"]=x.exports},c208:function(e,t,i){e.exports=i.p+"img/mobile-input.204a0d6b.png"},d0f3:function(e,t,i){}}]);