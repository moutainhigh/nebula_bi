(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3970ee7a"],{"0a49":function(e,t,n){var s=n("9b43"),r=n("626a"),a=n("4bf8"),i=n("9def"),o=n("cd1c");e.exports=function(e,t){var n=1==e,l=2==e,c=3==e,u=4==e,f=6==e,p=5==e||f,d=t||o;return function(t,o,m){for(var h,v,g=a(t),b=r(g),y=s(o,m,3),w=i(b.length),C=0,x=n?d(t,w):l?d(t,0):void 0;w>C;C++)if((p||C in b)&&(h=b[C],v=y(h,C,g),e))if(n)x[C]=v;else if(v)switch(e){case 3:return!0;case 5:return h;case 6:return C;case 2:x.push(h)}else if(u)return!1;return f?-1:c||u?u:x}}},1169:function(e,t,n){var s=n("2d95");e.exports=Array.isArray||function(e){return"Array"==s(e)}},"1f38":function(e,t,n){e.exports=n.p+"img/userW.0127515e.png"},"20d6":function(e,t,n){"use strict";var s=n("5ca1"),r=n("0a49")(6),a="findIndex",i=!0;a in[]&&Array(1)[a](function(){i=!1}),s(s.P+s.F*i,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(a)},"268f":function(e,t,n){e.exports=n("fde4")},"29ce":function(e,t,n){"use strict";var s=n("913f"),r=n.n(s);r.a},"32a6":function(e,t,n){var s=n("241e"),r=n("c3a1");n("ce7e")("keys",function(){return function(e){return r(s(e))}})},"454f":function(e,t,n){n("46a7");var s=n("584a").Object;e.exports=function(e,t,n){return s.defineProperty(e,t,n)}},"46a7":function(e,t,n){var s=n("63b6");s(s.S+s.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"5ced":function(e,t,n){},"7f7f":function(e,t,n){var s=n("86cc").f,r=Function.prototype,a=/^\s*function ([^ (]*)/,i="name";i in r||n("9e1e")&&s(r,i,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},"85f2":function(e,t,n){e.exports=n("454f")},"8aae":function(e,t,n){n("32a6"),e.exports=n("584a").Object.keys},"913f":function(e,t,n){},a21f:function(e,t,n){var s=n("584a"),r=s.JSON||(s.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}},a4bb:function(e,t,n){e.exports=n("8aae")},b240:function(e,t,n){"use strict";var s=n("c95a"),r=n.n(s);r.a},bb51:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{staticClass:"container"},[n("el-col",{staticClass:"header",attrs:{span:24}},[n("el-col",{staticClass:"logo",class:e.collapsed?"logo-collapse-width":"logo-width",attrs:{span:10}},[n("i",{staticClass:"el-icon-coin"}),e._v(e._s(e.collapsed?"":e.sysName)+"\n      ")]),n("el-col",{attrs:{span:1}},[n("div",{staticClass:"tools",on:{click:function(t){return t.preventDefault(),e.collapse(t)}}},[e.collapsed?n("svg-icon",{staticClass:"shink",attrs:{"icon-class":"ushink"}}):e._e(),e.collapsed?e._e():n("svg-icon",{staticClass:"shink",attrs:{"icon-class":"shink"}})],1)]),n("el-col",{attrs:{span:9}},[n("label",{staticStyle:{color:"#1d8ce0","font-size":"16px","font-weight":"bold"}},[e._v("产品视图：")]),n("el-cascader",{staticStyle:{width:"180px"},attrs:{size:"small",options:e.appOptions,placeholder:"请选择"},on:{change:e.handleChangeApp},model:{value:e.selectedAppOption,callback:function(t){e.selectedAppOption=t},expression:"selectedAppOption"}})],1),n("el-col",{staticClass:"userinfo",attrs:{span:4}},[n("el-dropdown",{attrs:{trigger:"hover"}},[n("span",{staticClass:"el-dropdown-link userinfo-inner"},[n("img",{attrs:{src:this.sysUserImg}}),e._v(" "+e._s(e.sysUserName))]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{nativeOn:{click:function(t){return e.editForm(t)}}},[e._v("我的资料")]),n("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(t){return e.logout(t)}}},[e._v("退出登录")])],1)],1)],1)],1),n("el-dialog",{attrs:{title:"我的资料",visible:e.myFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.myFormVisible=t}}},[n("el-form",{ref:"myForm",attrs:{model:e.myForm,rules:e.rules,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"姓名",prop:"name"}},[n("el-input",{model:{value:e.myForm.realname,callback:function(t){e.$set(e.myForm,"realname",t)},expression:"myForm.realname"}})],1),n("el-form-item",{attrs:{label:"性别"}},[n("el-radio-group",{model:{value:e.myForm.gender,callback:function(t){e.$set(e.myForm,"gender",t)},expression:"myForm.gender"}},[n("el-radio",{attrs:{label:1}},[e._v("男")]),n("el-radio",{attrs:{label:0}},[e._v("女")])],1)],1),n("el-form-item",{attrs:{label:"账号",prop:"username"}},[n("el-input",{model:{value:e.myForm.username,callback:function(t){e.$set(e.myForm,"username",t)},expression:"myForm.username"}})],1),n("el-form-item",{attrs:{label:"密码",prop:"password"}},[n("el-input",{model:{value:e.myForm.password,callback:function(t){e.$set(e.myForm,"password",t)},expression:"myForm.password"}})],1),n("el-form-item",{attrs:{label:"分组"}},[n("el-select",{attrs:{placeholder:"请选择分组"},model:{value:e.myForm.group_id,callback:function(t){e.$set(e.myForm,"group_id",t)},expression:"myForm.group_id"}},[n("el-option",{attrs:{label:"市场销售部",value:1}}),n("el-option",{attrs:{label:"技术研发部",value:2}}),n("el-option",{attrs:{label:"综合管理部",value:3}}),n("el-option",{attrs:{label:"领导层",value:4}})],1)],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{nativeOn:{click:function(t){e.myFormVisible=!1}}},[e._v("取消")]),n("el-button",{attrs:{type:"primary",loading:e.editLoading},nativeOn:{click:function(t){return e.submitMyForm(t)}}},[e._v("提交")])],1)],1),n("el-col",{staticClass:"main",attrs:{span:24}},[n("aside",{class:e.collapsed?"menu-collapsed":"menu-expanded"},[n("el-menu",{directives:[{name:"show",rawName:"v-show",value:!e.collapsed,expression:"!collapsed"}],staticClass:"el-menu-vertical-demo",staticStyle:{"background-color":"#2d3a4b"},attrs:{"default-active":e.$route.path,"unique-opened":"",router:""},on:{open:e.handleopen,close:e.handleclose,select:e.handleselect}},[e._l(e.routes,function(t,s){return[!t.leaf&&t.children.length>1?n("el-submenu",{key:t.name,attrs:{index:s+""}},[n("template",{slot:"title"},[n("i",{class:t.iconCls}),e._v(e._s(t.name))]),e._l(e.routeChildren(t),function(s){return n("el-menu-item",{key:t.path+s.path,attrs:{index:t.path+s.path}},[n("i",{class:s.iconCls}),e._v(e._s(s.name)+"\n              ")])})],2):e._e(),t.leaf||1!=t.children.length?e._e():n("el-menu-item",{key:t.path+t.children[0].path,attrs:{index:t.path+t.children[0].path}},[n("i",{class:t.iconCls,staticStyle:{color:"#fff"}}),e._v(e._s(t.children[0].name)+"\n            ")])]})],2),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.collapsed,expression:"collapsed"}],ref:"menuCollapsed",staticClass:"el-menu el-menu-vertical-demo collapsed",staticStyle:{"background-color":"#2d3a4b"}},e._l(e.routes,function(t,s){return n("li",{key:t.name,staticClass:"el-submenu item"},[t.leaf?[n("li",{staticClass:"el-submenu"},[n("div",{staticClass:"el-submenu__title el-menu-item",class:e.$route.path===t.path+t.children[0].path?"is-active":"",staticStyle:{height:"56px","line-height":"56px",padding:"0 20px"},on:{click:function(n){return e.$router.push(t.children[0].path)}}},[n("i",{class:t.iconCls})])])]:[n("div",{staticClass:"el-submenu__title",staticStyle:{"padding-left":"20px",color:"#f0f0f0"},on:{mouseover:function(t){return e.showMenu(s,!0)},mouseout:function(t){return e.showMenu(s,!1)}}},[n("i",{class:t.iconCls})]),n("ul",{staticClass:"el-menu submenu",class:"submenu-hook-"+s,staticStyle:{"background-color":"#2d3a4b"},on:{mouseover:function(t){return e.showMenu(s,!0)},mouseout:function(t){return e.showMenu(s,!1)}}},e._l(t.children,function(s){return n("li",{key:s.path,staticClass:"el-menu-item",class:e.$route.path===t.path+s.path?"is-active":"",staticStyle:{"padding-left":"40px",color:"#fff"},on:{click:function(t){return e.$router.push(s.path)}}},[e._v(e._s(s.name)+"\n                ")])}),0)]],2)}),0)],1),n("section",{staticClass:"content-container"},[n("el-col",{attrs:{span:24}},[e.needTagsView?n("tags-view"):e._e()],1),n("div",{staticClass:"grid-content bg-purple-light"},[n("el-col",{staticClass:"content-wrapper",attrs:{span:24}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("keep-alive",[e.$route.meta.keepAlive?n("router-view"):e._e()],1)],1),n("transition",{attrs:{name:"fade",mode:"out-in"}},[e.$route.meta.keepAlive?e._e():n("router-view")],1)],1)],1)],1)])],1)},r=[],a=n("f499"),i=n.n(a),o=(n("7f7f"),n("cebc")),l=n("4ec3"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tags-view-container",attrs:{id:"tags-view-container"}},[n("scroll-pane",{ref:"scrollPane",staticClass:"tags-view-wrapper"},e._l(e.visitedViews,function(t){return n("router-link",{key:t.path,ref:"tag",refInFor:!0,staticClass:"tags-view-item",class:e.isActive(t)?"active":"",attrs:{to:{path:t.path,query:t.query,fullPath:t.fullPath},tag:"span"},nativeOn:{mouseup:function(n){return"button"in n&&1!==n.button?null:e.closeSelectedTag(t)},contextmenu:function(n){return n.preventDefault(),e.openMenu(t,n)}}},[e._v("\n      "+e._s(t.title)+"\n      "),t.meta.affix?e._e():n("span",{staticClass:"el-icon-close",on:{click:function(n){return n.preventDefault(),n.stopPropagation(),e.closeSelectedTag(t)}}})])}),1)],1)},u=[],f=(n("a481"),n("5d73")),p=n.n(f),d=n("75fc"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-scrollbar",{ref:"scrollContainer",staticClass:"scroll-container",attrs:{vertical:!1},nativeOn:{wheel:function(t){return t.preventDefault(),e.handleScroll(t)}}},[e._t("default")],2)},h=[],v=(n("20d6"),4),g={name:"ScrollPane",data:function(){return{left:0}},computed:{scrollWrapper:function(){return this.$refs.scrollContainer.$refs.wrap}},methods:{handleScroll:function(e){var t=e.wheelDelta||40*-e.deltaY,n=this.scrollWrapper;n.scrollLeft=n.scrollLeft+t/4},moveToTarget:function(e){var t=this.$refs.scrollContainer.$el,n=t.offsetWidth,s=this.scrollWrapper,r=this.$parent.$refs.tag,a=null,i=null;if(r.length>0&&(a=r[0],i=r[r.length-1]),a===e)s.scrollLeft=0;else if(i===e)s.scrollLeft=s.scrollWidth-n;else{var o=r.findIndex(function(t){return t===e}),l=r[o-1],c=r[o+1],u=c.$el.offsetLeft+c.$el.offsetWidth+v,f=l.$el.offsetLeft-v;u>s.scrollLeft+n?s.scrollLeft=u-n:f<s.scrollLeft&&(s.scrollLeft=f)}}}},b=g,y=(n("29ce"),n("2877")),w=Object(y["a"])(b,m,h,!1,null,"08faa0dc",null),C=w.exports,x=n("df7c"),_=n.n(x),$={components:{ScrollPane:C},data:function(){return{visible:!1,top:0,left:0,selectedTag:{},affixTags:[]}},computed:{visitedViews:function(){return this.$store.state.visitedViews},routes:function(){return this.$router.options.routes}},watch:{$route:function(){this.addTags()}},methods:{isActive:function(e){return e.path===this.$route.path},filterAffixTags:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",s=[];return e.forEach(function(e){if(e.meta&&e.meta.affix){var r=_.a.resolve(n,e.path);s.push({fullPath:r,path:r,name:e.name,meta:Object(o["a"])({},e.meta)})}if(e.children){var a=t.filterAffixTags(e.children,e.path);a.length>=1&&(s=[].concat(Object(d["a"])(s),Object(d["a"])(a)))}}),s},initTags:function(){var e=this.affixTags=this.filterAffixTags(this.routes),t=!0,n=!1,s=void 0;try{for(var r,a=p()(e);!(t=(r=a.next()).done);t=!0){var i=r.value;i.name&&this.$store.dispatch("addVisitedView",i)}}catch(o){n=!0,s=o}finally{try{t||null==a.return||a.return()}finally{if(n)throw s}}},addTags:function(){var e=this.$route.name;return e&&this.$store.dispatch("addVisitedView",this.$route),!1},closeSelectedTag:function(e){var t=this;this.$store.dispatch("delVisitedView",e).then(function(n){var s=n.visitedViews;t.isActive(e)&&t.toLastView(s,e)})},toLastView:function(e,t){var n=e.slice(-1)[0];n?this.$router.push(n):"Dashboard"===t.name?this.$router.replace({path:t.fullPath}):this.$router.push("/")},openMenu:function(e,t){var n=105,s=this.$el.getBoundingClientRect().left,r=this.$el.offsetWidth,a=r-n,i=t.clientX-s+15;this.left=i>a?a:i,this.top=t.clientY,this.selectedTag=e}},mounted:function(){this.initTags(),this.addTags()}},k=$,A=(n("df6f"),n("de9f"),Object(y["a"])(k,c,u,!1,null,"29f248f0",null)),O=A.exports,F=n("2f62"),S={inject:["reload"],components:{TagsView:O},data:function(){return{sysName:"BI管理系统",collapsed:!1,sysUserName:"",sysUserImg:"",selectedAppOption:[],appOptions:[{value:"GS.CMCC",label:"甘肃移动",children:[{value:"GS.CMCC.All",label:"所有平台"},{value:"GS.CMCC.Children",label:"少儿平台"}]},{value:"HB.Telecom",label:"河北电信",children:[{value:"HB.Telecom.All",label:"所有平台"},{value:"HB.Telecom.Music",label:"音乐平台"}]}],tApp:"",myFormVisible:!1,editLoading:!1,myForm:{id:"",realname:"",gender:"",username:"",password:"",group_id:""},rules:{realname:[{required:!0,message:"请输入姓名",trigger:"change"}],username:[{required:!0,message:"请输入账号",trigger:"change"}],password:[{required:!0,message:"请输入密码",trigger:"change"}]}}},computed:Object(o["a"])({routes:function(){return this.$router.options.routes.filter(function(e){return!e.hidden})},routeChildren:function(e){return function(e){return e.children.filter(function(e){return!e.hidden})}}},Object(F["b"])({needTagsView:function(e){return e.visitedViews}})),methods:{testf:function(){console.log(111)},onSubmit:function(){console.log("submit!")},handleopen:function(){},handleclose:function(){},handleselect:function(e,t){},changeApp:function(e){if(this.tApp.name===e.name)return!1;this.tApp=e,sessionStorage.setItem("tApp",i()(this.tApp)),this.reload()},handleChangeApp:function(e){if(this.tApp.code===e[1])return!1;var t=this.apps.filter(function(t){return t.code===e[1]});t&&(this.tApp=t[0],sessionStorage.setItem("tApp",i()(this.tApp)),console.log(this.tApp),this.reload())},editForm:function(){this.myFormVisible=!0},submitMyForm:function(){var e=this;this.$refs.myForm.validate(function(t){if(!t)return!1;e.editLoading=!0,Object(l["k"])(e.myForm).then(function(t){e.editLoading=!1;var n=t.businessCode,s=t.resultSet;"success"!==n?e.$message({message:"编辑失败,请联系管理员！",type:"error"}):(sessionStorage.setItem("user",i()(s[0])),e.myForm=s[0],e.sysUserName=s[0].realname,e.myFormVisible=!1,e.$message({message:"编辑成功！",type:"success"}))})})},logout:function(){var e=this;this.$confirm("确认退出吗?","提示",{}).then(function(){sessionStorage.removeItem("user"),e.$router.push("/login")}).catch(function(){})},collapse:function(){this.collapsed=!this.collapsed},showMenu:function(e,t){this.$refs.menuCollapsed.getElementsByClassName("submenu-hook-"+e)[0].style.display=t?"block":"none"}},mounted:function(){var e=sessionStorage.getItem("user");e&&(e=JSON.parse(e),this.myForm=e,this.sysUserName=e.realname);var t=sessionStorage.getItem("apps");t&&(t=JSON.parse(t),this.apps=t);var s=sessionStorage.getItem("tApp");s&&(this.tApp=JSON.parse(s)),this.selectedAppOption=[this.tApp.code.substring(0,this.tApp.code.lastIndexOf(".")),this.tApp.code],this.sysUserImg=1===this.myForm.gender?n("c9e6"):n("1f38")}},T=S,V=(n("cccb"),n("b240"),Object(y["a"])(T,s,r,!1,null,"48f74403",null));t["default"]=V.exports},bf90:function(e,t,n){var s=n("36c3"),r=n("bf0b").f;n("ce7e")("getOwnPropertyDescriptor",function(){return function(e,t){return r(s(e),t)}})},c18c:function(e,t,n){},c95a:function(e,t,n){},c9e6:function(e,t,n){e.exports=n.p+"img/userM2.10b8e5b5.png"},cccb:function(e,t,n){"use strict";var s=n("5ced"),r=n.n(s);r.a},cd1c:function(e,t,n){var s=n("e853");e.exports=function(e,t){return new(s(e))(t)}},ce7e:function(e,t,n){var s=n("63b6"),r=n("584a"),a=n("294c");e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],i={};i[e]=t(n),s(s.S+s.F*a(function(){n(1)}),"Object",i)}},cebc:function(e,t,n){"use strict";var s=n("268f"),r=n.n(s),a=n("e265"),i=n.n(a),o=n("a4bb"),l=n.n(o),c=n("85f2"),u=n.n(c);function f(e,t,n){return t in e?u()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=l()(n);"function"===typeof i.a&&(s=s.concat(i()(n).filter(function(e){return r()(n,e).enumerable}))),s.forEach(function(t){f(e,t,n[t])})}return e}n.d(t,"a",function(){return p})},d1df:function(e,t,n){},de9f:function(e,t,n){"use strict";var s=n("c18c"),r=n.n(s);r.a},df6f:function(e,t,n){"use strict";var s=n("d1df"),r=n.n(s);r.a},e265:function(e,t,n){e.exports=n("ed33")},e853:function(e,t,n){var s=n("d3f4"),r=n("1169"),a=n("2b4c")("species");e.exports=function(e){var t;return r(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!r(t.prototype)||(t=void 0),s(t)&&(t=t[a],null===t&&(t=void 0))),void 0===t?Array:t}},ed33:function(e,t,n){n("014b"),e.exports=n("584a").Object.getOwnPropertySymbols},f499:function(e,t,n){e.exports=n("a21f")},fde4:function(e,t,n){n("bf90");var s=n("584a").Object;e.exports=function(e,t){return s.getOwnPropertyDescriptor(e,t)}}}]);