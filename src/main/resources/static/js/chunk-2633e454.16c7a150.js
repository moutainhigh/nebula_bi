(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2633e454"],{"1a07":function(e,t,a){"use strict";var r=a("7668"),s=a.n(r);s.a},"52e6":function(e,t,a){"use strict";var r=a("c7bb"),s=a.n(r);s.a},"5c3a8":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"chart-container"},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-card",{staticStyle:{"font-weight":"bold",color:"rgba(0,0,0,.45)"},attrs:{shadow:"hover"}},[a("div",{staticStyle:{"font-size":"14px"},attrs:{slot:"header"},slot:"header"},[a("span",[e._v(e._s(this.moment(new Date).format("YYYY/MM/DD HH:mm")))]),a("span",{staticStyle:{float:"right"}},[e._v("在线用户")])]),a("div",{staticStyle:{height:"80px","line-height":"80px","text-align":"center"}},[a("span",{staticStyle:{color:"#40c9c6","font-size":"48px","padding-right":"30px"}},[a("svg-icon",{attrs:{"icon-class":"peoples"}})],1),a("span",{staticStyle:{"font-size":"32px"}},[e._v(e._s(e._f("formaterNumber")(e.onlineUser)))])])])],1),a("el-col",{attrs:{span:8}},[a("el-card",{staticStyle:{"font-weight":"bold",color:"rgba(0,0,0,.45)"},attrs:{shadow:"hover"}},[a("div",{staticStyle:{"font-size":"14px"},attrs:{slot:"header"},slot:"header"},[a("span",[e._v(e._s(this.moment(new Date).format("YYYY/MM/DD HH:mm")))]),a("span",{staticStyle:{float:"right"}},[e._v("实时订购")])]),a("div",{staticStyle:{height:"80px","line-height":"80px","text-align":"center"}},[a("span",{staticStyle:{color:"#f4516c","font-size":"48px","padding-right":"30px"}},[a("svg-icon",{attrs:{"icon-class":"shopping"}})],1),a("span",{staticStyle:{"font-size":"32px"}},[e._v(e._s(e._f("formaterNumber")(e.onlineOrder)))])])])],1),a("el-col",{attrs:{span:8}},[a("el-card",{staticStyle:{"font-weight":"bold",color:"rgba(0,0,0,.45)"},attrs:{shadow:"hover"}},[a("div",{staticStyle:{"font-size":"14px"},attrs:{slot:"header"},slot:"header"},[a("span",[e._v(e._s(this.moment(new Date).format("YYYY/MM/DD HH:mm")))]),a("span",{staticStyle:{float:"right"}},[e._v("异常消息")])]),a("div",{staticStyle:{height:"80px","line-height":"80px","text-align":"center"}},[a("span",{staticStyle:{color:"#36a3f7","font-size":"48px","padding-right":"30px"}},[a("svg-icon",{attrs:{"icon-class":"message"}})],1),a("span",{staticStyle:{"font-size":"32px"}},[e._v(e._s(e.onlineErr))])])])],1),a("el-col",{attrs:{span:24}},[a("el-card",{attrs:{shadow:"always"}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.weekUserLoading,expression:"weekUserLoading"}],staticStyle:{width:"100%",height:"400px",padding:"10px 20px"},attrs:{id:"weekUserChart"}})])],1),a("el-col",{attrs:{span:10}},[a("el-card",{attrs:{shadow:"hover"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dayOrderLoading,expression:"dayOrderLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dayOrderDatas}},[a("el-table-column",{attrs:{prop:"day",label:"日期"}}),a("el-table-column",{attrs:{prop:"hour",label:"小时"}}),a("el-table-column",{attrs:{prop:"online_num",label:"订购数据"}})],1)],1)],1),a("el-col",{attrs:{span:14}},[a("el-card",{attrs:{shadow:"hover"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dayLogLoading,expression:"dayLogLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dayLogDatas}},[a("el-table-column",{attrs:{prop:"job_uniname",label:"Job名称"}}),a("el-table-column",{attrs:{prop:"job_execute_time",label:"Job执行日期"}}),a("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.status?a("div",{staticStyle:{cursor:"pointer"}},[a("el-tag",{attrs:{size:"danger"},on:{click:function(a){return e.showDetailErr(t.row.err_out)}}},[e._v("异常")])],1):a("div",[a("el-tag",{attrs:{size:"success"}},[e._v("成功")])],1)]}}])}),a("el-table-column",{attrs:{prop:"create_time",label:"执行时间",formatter:e.formaterText,width:160}})],1)],1)],1)],1),a("el-dialog",{attrs:{title:"异常信息",visible:e.showErrVisiable,width:"50%"},on:{"update:visible":function(t){e.showErrVisiable=t}}},[a("el-scrollbar",{staticStyle:{height:"300px"}},[e._v("\n      "+e._s(e.showErr)+"\n    ")])],1)],1)},s=[],n=a("e814"),i=a.n(n),o=a("313e"),l=a.n(o),c=a("4ec3"),d={data:function(){return{tApp:"",onlineUser:0,onlineUserTimer:"",onlineOrder:0,onlineOrderTimer:"",onlineErr:0,onlineErrTimer:"",weekUserDatas:[],weekUserLoading:!1,dayOrderDatas:[],dayOrderLoading:!1,dayLogDatas:[],dayLogLoading:!1,showErr:"",showErrVisiable:!1}},methods:{showDetailErr:function(e){this.showErr=e,this.showErrVisiable=!0},formaterText:function(e,t,a){return this.moment(a).format("YYYY-MM-DD HH:mm:ss")},getOnlineUser:function(){var e=this;Object(c["s"])({nowData:this.moment(new Date).format("YYYY-MM-DD HH:mm:ss"),platFormId:this.tApp.id}).then(function(t){var a=t.businessCode,r=t.resultSet;if("unauthenticated"===a)return e.$message({message:"未授权，请联系管理员！",type:"error"}),!1;"success"!==a?e.$message({message:"实时用户数据加载失败，请联系管理员！",type:"error"}):null!=r&&r.length>0&&(e.onlineUser=i()(r[0].online_num))})},getOnlineOrder:function(){var e=this;Object(c["r"])({nowData:this.moment(new Date).format("YYYY-MM-DD HH:mm:ss"),platFormId:this.tApp.id}).then(function(t){var a=t.businessCode,r=t.resultSet;if("unauthenticated"===a)return e.$message({message:"未授权，请联系管理员！",type:"error"}),!1;"success"!==a?e.$message({message:"实时订购数据加载失败，请联系管理员！",type:"error"}):null!=r&&r.length>0&&(e.onlineOrder=i()(r[0].online_num))})},getOnlineErr:function(){var e=this;Object(c["z"])({nowDate:new Date,platFormId:this.tApp.id}).then(function(t){var a=t.businessCode,r=t.resultSet;if("unauthenticated"===a)return e.$message({message:"未授权，请联系管理员！",type:"error"}),!1;"success"!==a?e.$message({message:"异常数据加载失败，请联系管理员！",type:"error"}):null!=r&&r.length>0&&(e.onlineErr=r.length)})},getWeekUser:function(){var e=this;this.weekUserLoading=!0,Object(c["R"])({nowDate:new Date,platFormId:this.tApp.id}).then(function(t){e.weekUserLoading=!1;var a=t.businessCode,r=t.resultSet;if("unauthenticated"===a)return e.$message({message:"未授权，请联系管理员！",type:"error"}),!1;"success"!==a?e.$message({message:"最近一周用户数据加载失败，请联系管理员！",type:"error"}):(e.weekUserDatas=r,e.weekUserDraw())})},weekUserDraw:function(){var e=["UV","新增用户"],t=[],a=[],r=[];for(var s in this.weekUserDatas)t.push(this.weekUserDatas[s].day),a.push(null==this.weekUserDatas[s].uv?0:i()(this.weekUserDatas[s].uv)),r.push(null==this.weekUserDatas[s].newAddNum?0:i()(this.weekUserDatas[s].newAddNum));var n={border:!1,legend:{orient:"horizontal",x:"center",y:"top",data:e},grid:{left:"1%",right:"7%",bottom:"5%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,name:"日期",data:t,axisLine:{lineStyle:{color:"#54B1F9",width:1}}},yAxis:{type:"value",name:"人数",axisLine:{lineStyle:{color:"#54B1F9",width:1}}},series:[{name:"UV",type:"line",smooth:!0,data:a},{name:"新增用户",type:"line",smooth:!0,data:r}],tooltip:{trigger:"axis"}};this.chartColumn=l.a.init(document.getElementById("weekUserChart")),this.chartColumn.clear(),this.chartColumn.setOption(n),window.onresize=this.chartColumn.resize},getDayOrder:function(){var e=this;this.dayOrderLoading=!0,Object(c["u"])({nowDate:new Date,platFormId:this.tApp.id}).then(function(t){e.dayOrderLoading=!1;var a=t.businessCode,r=t.resultSet;if("unauthenticated"===a)return e.$message({message:"未授权，请联系管理员！",type:"error"}),!1;"success"!==a?e.$message({message:"当日订购数据加载失败，请联系管理员！",type:"error"}):e.dayOrderDatas=r})},getDayLog:function(){var e=this;this.dayLogLoading=!0,Object(c["t"])({nowDate:new Date,platFormId:this.tApp.id}).then(function(t){e.dayLogLoading=!1;var a=t.businessCode,r=t.resultSet;if("unauthenticated"===a)return e.$message({message:"未授权，请联系管理员！",type:"error"}),!1;"success"!==a?e.$message({message:"日志数据加载失败，请联系管理员！",type:"error"}):e.dayLogDatas=r})}},created:function(){this.tApp=JSON.parse(sessionStorage.getItem("tApp")),this.getWeekUser(),this.getDayOrder(),this.getDayLog(),this.getOnlineUser(),this.onlineUserTimer=setInterval(this.getOnlineUser,6e5),this.getOnlineOrder(),this.onlineOrderTimer=setInterval(this.getOnlineOrder,6e5),this.getOnlineErr(),this.onlineErrTimer=setInterval(this.getOnlineErr,6e5)},mounted:function(){},updated:function(){},destroyed:function(){clearInterval(this.onlineUserTimer),clearInterval(this.onlineOrderTimer),clearInterval(this.onlineErrTimer)}},h=d,u=(a("1a07"),a("52e6"),a("2877")),p=Object(u["a"])(h,r,s,!1,null,"56eaa5e5",null);t["default"]=p.exports},"5d6b":function(e,t,a){var r=a("e53d").parseInt,s=a("a1ce").trim,n=a("e692"),i=/^[-+]?0[xX]/;e.exports=8!==r(n+"08")||22!==r(n+"0x16")?function(e,t){var a=s(String(e),3);return r(a,t>>>0||(i.test(a)?16:10))}:r},7445:function(e,t,a){var r=a("63b6"),s=a("5d6b");r(r.G+r.F*(parseInt!=s),{parseInt:s})},7668:function(e,t,a){},a1ce:function(e,t,a){var r=a("63b6"),s=a("25eb"),n=a("294c"),i=a("e692"),o="["+i+"]",l="​",c=RegExp("^"+o+o+"*"),d=RegExp(o+o+"*$"),h=function(e,t,a){var s={},o=n(function(){return!!i[e]()||l[e]()!=l}),c=s[e]=o?t(u):i[e];a&&(s[a]=c),r(r.P+r.F*o,"String",s)},u=h.trim=function(e,t){return e=String(s(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(d,"")),e};e.exports=h},b9e9:function(e,t,a){a("7445"),e.exports=a("584a").parseInt},c7bb:function(e,t,a){},e692:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e814:function(e,t,a){e.exports=a("b9e9")}}]);