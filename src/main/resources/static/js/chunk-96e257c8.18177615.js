(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96e257c8"],{"0a0d":function(e,t,a){e.exports=a("e829")},"2f37":function(e,t,a){var n=a("63b6");n(n.S,"Date",{now:function(){return(new Date).getTime()}})},8994:function(e,t,a){"use strict";var n=a("9c48"),r=a.n(n);r.a},"9c48":function(e,t,a){},b00d:function(e,t,a){"use strict";var n=a("b35f"),r=a.n(n);r.a},b35f:function(e,t,a){},dd33:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"chart-container"},[a("el-col",{staticClass:"toolbar1",staticStyle:{height:"50px","padding-left":"10px","padding-top":"5px"},attrs:{span:24}},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"日期范围"}},[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"daterange","value-format":"yyyy-MM-dd",size:"small",align:"center","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},model:{value:e.queryDate,callback:function(t){e.queryDate=t},expression:"queryDate"}})],1)]),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-search"},on:{click:e.getSearchDetail}},[e._v("查询")])],1),a("el-form-item",{staticStyle:{float:"right"}},[a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-download"},on:{click:e.handleExport}},[e._v("导出")])],1)],1)],1),a("el-table",{staticStyle:{width:"100%","padding-top":"10px"},attrs:{data:e.searchDetails.slice((e.curpage-1)*e.pageSize,e.curpage*e.pageSize),"highlight-current-row":"",stripe:"","header-cell-style":{color:"#3a8ee6"}}},[a("el-table-column",{attrs:{prop:"keyword",label:"关键字",align:"center"}}),a("el-table-column",{attrs:{prop:"sum_num",sortable:"",label:"搜索量",align:"center"}}),a("el-table-column",{attrs:{prop:"accept_num",sortable:"",label:"采纳量",align:"center"}}),a("el-table-column",{attrs:{prop:"accept_per",sortable:"",label:"采纳量占比",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{color:"#1d8ce0","font-weight":"bold"}},[e._v(e._s(null==t.row.accept_per?"":t.row.accept_per+"%"))])]}}])})],1),a("el-col",{attrs:{span:24}},[a("el-pagination",{staticStyle:{float:"right"},attrs:{background:"","page-size":e.pageSize,total:e.totalSize,layout:"prev, pager, next"},on:{"current-change":e.handleCurrentChange}})],1)],1)},r=[],i=a("0a0d"),s=a.n(i),c=a("4ec3"),l={data:function(){return{queryDate:[new Date((new Date).getTime()-6048e5),new Date((new Date).getTime()-864e5)],pickerOptions:{disabledDate:function(e){return e.getTime()>s()()},shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}}]},tApp:"",searchDetails:[],totalSize:0,curpage:1,pageSize:20}},methods:{handleCurrentChange:function(e){this.curpage=e},getSearchDetail:function(){var e=this;return this.queryDate?this.queryDate[1]<this.queryDate[0]?(this.$message({showClose:!0,message:"结束日期必须大于开始日期！",type:"error"}),!1):void Object(c["M"])({startDate:this.queryDate[0],endDate:this.queryDate[1],platFormId:this.tApp.id}).then(function(t){var a=t.businessCode,n=t.resultSet;if("unauthenticated"===a)return e.$message({message:"未授权，请联系管理员！",type:"error"}),!1;"success"!==a?e.$message({message:"关键字搜索数据加载失败，请联系管理员！",type:"error"}):(e.searchDetails=n,e.totalSize=e.searchDetails.length,e.curpage=1)}):(this.$message({showClose:!0,message:"请选择查询日期范围！",type:"warning"}),!1)},handleExport:function(){var e=this;if(0===this.searchDetails.length)return this.$message({message:"表格无数据，导出异常！",type:"warning"}),!1;Promise.all([a.e("chunk-61154d27"),a.e("chunk-0156a942")]).then(function(){var t=a("39a0"),n=t.exportExcel,r=["关键字","搜索量","采纳量","采纳量占比"],i=["keyword","sum_num","accept_num","accept_per"],s=e.searchDetails,c=e.formatJson(i,s);n(r,c,"搜索关键字排行excel")}.bind(null,a)).catch(a.oe)},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return t[e]})})}},created:function(){this.tApp=JSON.parse(sessionStorage.getItem("tApp")),this.getSearchDetail()},mounted:function(){},updated:function(){}},o=l,u=(a("8994"),a("b00d"),a("2877")),p=Object(u["a"])(o,n,r,!1,null,"a5b8c602",null);t["default"]=p.exports},e829:function(e,t,a){a("2f37"),e.exports=a("584a").Date.now}}]);