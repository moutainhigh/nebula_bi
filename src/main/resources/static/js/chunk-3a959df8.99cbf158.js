(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a959df8"],{"1fda":function(e,t,i){"use strict";var s=i("f3ff9"),r=i.n(s);r.a},3898:function(e,t,i){},"67c9":function(e,t,i){"use strict";var s=i("3898"),r=i.n(s);r.a},"7f7f":function(e,t,i){var s=i("86cc").f,r=Function.prototype,a=/^\s*function ([^ (]*)/,o="name";o in r||i("9e1e")&&s(r,o,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},"9a8d":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"chart-container"},[i("el-col",{staticClass:"toolbar1",staticStyle:{height:"50px","padding-left":"10px","padding-top":"5px"},attrs:{span:24}},[i("el-form",{attrs:{inline:!0,model:e.filters}},[i("el-form-item",{attrs:{label:"角色:"}},[i("el-input",{attrs:{placeholder:"请输入角色名称",size:"small"},model:{value:e.filters.queryVal,callback:function(t){e.$set(e.filters,"queryVal",t)},expression:"filters.queryVal"}})],1),i("el-form-item",[i("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-search"},on:{click:e.getRoles}},[e._v("查询")])],1),i("el-form-item",{staticStyle:{float:"right"}},[i("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-circle-plus-outline"},on:{click:e.addRole}},[e._v("新增角色")])],1)],1)],1),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loadTable,expression:"loadTable"}],staticStyle:{width:"100%","padding-top":"10px"},attrs:{data:e.tableData,"highlight-current-row":"",stripe:"","header-cell-style":{color:"#3a8ee6"}}},[i("el-table-column",{attrs:{prop:"id",label:"序号"}}),i("el-table-column",{attrs:{prop:"name",label:"角色名称"}}),i("el-table-column",{attrs:{prop:"description",label:"描述"}}),i("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit-outline"},on:{click:function(i){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),i("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(i){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),i("el-dialog",{attrs:{title:"编辑角色",visible:e.editFormVisible,"close-on-click-modal":!1,width:"550px"},on:{"update:visible":function(t){e.editFormVisible=t}}},[i("el-form",{ref:"editForm",attrs:{model:e.editForm,"label-width":"80px",rules:e.editFormRules}},[i("el-form-item",{attrs:{label:"名称",prop:"name"}},[i("el-input",{model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),i("el-form-item",{attrs:{label:"描述"}},[i("el-input",{model:{value:e.editForm.description,callback:function(t){e.$set(e.editForm,"description",t)},expression:"editForm.description"}})],1),i("el-form-item",{attrs:{label:"权限"}},[i("el-tree",{ref:"authEditTree",attrs:{data:e.treeList,props:e.defaultProps,"node-key":"id","show-checkbox":"","default-checked-keys":e.editForm.checkedList,"default-expanded-keys":e.editForm.checkedList,"highlight-current":""}})],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{nativeOn:{click:function(t){e.editFormVisible=!1}}},[e._v("取消")]),i("el-button",{attrs:{type:"primary",loading:e.editLoading},nativeOn:{click:function(t){return e.editSubmit(t)}}},[e._v("确定")])],1)],1),i("el-dialog",{attrs:{title:"新增角色",visible:e.addFormVisible,"close-on-click-modal":!1,width:"550px"},on:{"update:visible":function(t){e.addFormVisible=t}}},[i("el-form",{ref:"addForm",attrs:{model:e.addForm,"label-width":"80px",rules:e.addFormRules}},[i("el-form-item",{attrs:{label:"名称",prop:"name"}},[i("el-input",{model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1),i("el-form-item",{attrs:{label:"描述"}},[i("el-input",{model:{value:e.addForm.description,callback:function(t){e.$set(e.addForm,"description",t)},expression:"addForm.description"}})],1),i("el-form-item",{attrs:{label:"权限列表"}},[i("el-scrollbar",{staticStyle:{height:"200px"}},[i("el-tree",{ref:"authAddTree",attrs:{data:e.treeList,"show-checkbox":"","node-key":"id",props:e.defaultProps,"highlight-current":""}})],1)],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{nativeOn:{click:function(t){e.addFormVisible=!1}}},[e._v("取消")]),i("el-button",{attrs:{type:"primary",loading:e.addLoading},nativeOn:{click:function(t){return e.addSubmit(t)}}},[e._v("确定")])],1)],1)],1)},r=[],a=(i("7f7f"),i("4ec3")),o={data:function(){return{tApp:"",filters:{queryVal:""},tableData:[],addForm:{name:"",description:""},treeList:[],defaultProps:{children:"children",label:"name"},addFormRules:{name:[{required:!0,message:"请输入角色名称",trigger:"blur"}]},editForm:{id:"",name:"",description:"",checkedList:[]},editFormRules:{name:[{required:!0,message:"请输入角色名称",trigger:"blur"}]},loadTable:!1,addLoading:!1,editLoading:!1,editFormVisible:!1,addFormVisible:!1}},methods:{getRoles:function(){var e=this;this.loadTable=!0,Object(a["L"])({queryVal:this.filters.queryVal}).then(function(t){var i=t.businessCode,s=t.resultSet;if(e.loadTable=!1,"unauthenticated"===i)return e.$message({message:"未授权，请联系管理员！",type:"error"}),!1;"success"!==i?e.$message({message:"角色数据加载失败，请联系管理员！",type:"error"}):e.tableData=s})},addRole:function(){var e=this;this.addFormVisible=!0,0===this.treeList.length&&Object(a["m"])().then(function(t){var i=t.businessCode,s=t.resultSet;"success"!==i?e.$message({message:"权限树加载失败，请联系管理员！",type:"error"}):e.treeList=s})},addSubmit:function(){var e=this,t="";this.$refs.authAddTree.getCheckedKeys().forEach(function(e){e&&(t+=e+",")}),t=t.substr(0,t.length-1),this.$refs.addForm.validate(function(i){if(!i)return!1;e.addLoading=!0,Object(a["b"])({roleName:e.addForm.name,roleDescription:e.addForm.description,chooseKeys:t}).then(function(t){e.addLoading=!1;var i=t.businessCode;"success"!==i?e.$message({message:"编辑失败,请联系管理员！",type:"error"}):(e.addFormVisible=!1,e.getRoles(),e.$message({message:"新增角色成功！",type:"success"}))})})},handleEdit:function(e,t){var i=this;Object(a["v"])({roleId:t.id}).then(function(e){var t=e.businessCode,s=e.resultSet;"success"!==t?i.$message({message:"角色加载失败，请联系管理员！",type:"error"}):(i.editForm.id=s[0].id,i.editForm.name=s[0].name,i.editForm.description=s[0].description,i.editForm.checkedList=s[0].roleAuths,i.editFormVisible=!0)})},editSubmit:function(){var e=this,t="";this.$refs.authEditTree.getCheckedKeys().forEach(function(e){e&&(t+=e+",")}),t=t.substr(0,t.length-1),this.$refs.editForm.validate(function(i){if(!i)return!1;e.editLoading=!0,Object(a["j"])({roleId:e.editForm.id,roleName:e.editForm.name,roleDescription:e.editForm.description,chooseKeys:t}).then(function(t){e.editLoading=!1;var i=t.businessCode;"success"!==i?e.$message({message:"编辑失败,请联系管理员！",type:"error"}):(e.editFormVisible=!1,e.getRoles(),e.$message({message:"更新角色成功！",type:"success"}))})})},handleDelete:function(e,t){var i=this;if(!t.id)return this.$message({message:"请选择角色进行删除！",type:"error"}),!1;Object(a["h"])({roleId:t.id}).then(function(e){var t=e.businessCode;"success"!==t?i.$message({message:"角色加载失败，请联系管理员！",type:"error"}):(i.getRoles(),i.$message({message:"角色删除成功！",type:"success"}))})}},created:function(){var e=this;this.getRoles(),0===this.treeList.length&&Object(a["m"])().then(function(t){var i=t.businessCode,s=t.resultSet;"success"!==i?e.$message({message:"权限树加载失败，请联系管理员！",type:"error"}):e.treeList=s})},mounted:function(){},updated:function(){}},l=o,n=(i("67c9"),i("1fda"),i("2877")),d=Object(n["a"])(l,s,r,!1,null,"428ca2aa",null);t["default"]=d.exports},f3ff9:function(e,t,i){}}]);