(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d207918"],{a0a4:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"serviceadmin"},[a("el-row",{attrs:{gutter:30,type:"flex"}},[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"input-name"},[e._v("最近登录时间：")]),a("el-date-picker",{staticStyle:{width:"660px"},attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.searchKeywords.applicationTime,callback:function(t){e.$set(e.searchKeywords,"applicationTime",t)},expression:"searchKeywords.applicationTime"}})],1),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"input-name"},[e._v("open_id：")]),a("el-input",{model:{value:e.searchKeywords.name,callback:function(t){e.$set(e.searchKeywords,"name",t)},expression:"searchKeywords.name"}})],1),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"input-name"},[e._v("账户名称：")]),a("el-input",{model:{value:e.searchKeywords.name,callback:function(t){e.$set(e.searchKeywords,"name",t)},expression:"searchKeywords.name"}})],1)],1),a("el-row",{attrs:{gutter:30}},[a("el-col",{attrs:{span:6}},[a("el-button",[e._v("新增管理员")]),a("el-button",[e._v("查询")]),a("el-button",[e._v("重置")])],1)],1),a("el-table",{staticStyle:{width:"100%","text-align":"center"},attrs:{data:e.tableData,size:"mini",border:""}},[a("el-table-column",{attrs:{fixed:"",prop:"id",label:"编号",width:"300"}}),a("el-table-column",{attrs:{prop:"entryTime",label:"账号名称",width:"300"}}),a("el-table-column",{attrs:{prop:"chargePerMinute",label:"open_id",width:"300"}}),a("el-table-column",{attrs:{prop:"chargePerMinute",label:"最近登录时间",width:"300"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleAgree(t.row)}}},[e._v("删除用户")])]}}])})],1),a("div",{staticClass:"footer"},[a("div",[e._v(" 每页记录 "),a("el-input",{staticStyle:{width:"50px"},attrs:{size:"mini"},model:{value:e.record,callback:function(t){e.record=t},expression:"record"}}),e._v("共43条记录！ 服务方人数：2000人 ")],1),a("div",[a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("首页")]),a("el-pagination",{attrs:{background:"","page-size":10,layout:"  pager, next, jumper",total:400}}),a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("尾页")])],1)])],1)},s=[],r={methods:{handleAgree:function(e){var t=this;console.log(e),this.$confirm("是否同意?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$message({type:"success",message:"同意成功!"})})).catch((function(){t.$message({type:"info",message:"已取消同意"})}))},handleOpposition:function(e){var t=this;console.log(e),this.$prompt("请您填写反对原因","是否反对？").then((function(){t.$message({type:"success",message:"已成功反对"})})).catch((function(){t.$message({type:"info",message:"取消反对"})}))}},data:function(){return{record:"5",searchKeywords:{applicationTime:"",chargePerMinute:"50",status:"男",name:"王大拿",phone:"15979885659"},tableData:[{id:"999",name:"王大拿",rname:"王小虎",phone:"15979885659",onlineStatus:"在线",chargePerMinute:"50",percentage:"60",num:"20",score:"4.5",position:"旅游商贸附近500M内",serviceDuration:"1000",probability:"100",total:"1000",surplus:"1000",withdrawn:"1000",withdrawalAmount:"500",entryTime:"2019/12/30",fans:"5000",status:"申请通过"},{id:"999",name:"王大拿",rname:"王小虎",phone:"15979885659",onlineStatus:"在线",chargePerMinute:"50",percentage:"60",num:"20",score:"4.5",position:"旅游商贸附近500M内",serviceDuration:"1000",probability:"100",total:"1000",surplus:"1000",withdrawn:"1000",withdrawalAmount:"500",entryTime:"2019/12/30",fans:"5000",status:"申请通过"},{id:"999",name:"王大拿",rname:"王小虎",phone:"15979885659",onlineStatus:"在线",chargePerMinute:"50",percentage:"60",num:"20",score:"4.5",position:"旅游商贸附近500M内",serviceDuration:"1000",probability:"100",total:"1000",surplus:"1000",withdrawn:"1000",withdrawalAmount:"500",entryTime:"2019/12/30",fans:"5000",status:"申请通过"},{id:"999",name:"王大拿",rname:"王小虎",phone:"15979885659",onlineStatus:"在线",chargePerMinute:"50",percentage:"60",num:"20",score:"4.5",position:"旅游商贸附近500M内",serviceDuration:"1000",probability:"100",total:"1000",surplus:"1000",withdrawn:"1000",withdrawalAmount:"500",entryTime:"2019/12/30",fans:"5000",status:"申请通过"}]}}},i=r,o=a("2877"),l=Object(o["a"])(i,n,s,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d207918.111071e6.js.map