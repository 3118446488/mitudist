(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230c0a"],{ee2f:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"serviceadmin"},[a("el-row",{attrs:{gutter:30,type:"flex"}},[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"input-name"},[e._v("反馈人优号：")]),a("el-input",{model:{value:e.searchKeywords.name,callback:function(t){e.$set(e.searchKeywords,"name",t)},expression:"searchKeywords.name"}})],1),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"input-name"},[e._v("反馈人昵称：")]),a("el-input",{model:{value:e.searchKeywords.name,callback:function(t){e.$set(e.searchKeywords,"name",t)},expression:"searchKeywords.name"}})],1),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"input-name"},[e._v("状态：")]),a("el-select",{attrs:{placeholder:"全部"},model:{value:e.searchKeywords.status,callback:function(t){e.$set(e.searchKeywords,"status",t)},expression:"searchKeywords.status"}},[a("el-option",{attrs:{label:"下架",value:"0"}}),a("el-option",{attrs:{label:"申请通过",value:"1"}}),a("el-option",{attrs:{label:"全部",value:"2"}})],1)],1)],1),a("el-row",{attrs:{gutter:30,type:"flex"}},[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"input-name"},[e._v("反馈时间：")]),a("el-date-picker",{staticStyle:{width:"660px"},attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.searchKeywords.applicationTime,callback:function(t){e.$set(e.searchKeywords,"applicationTime",t)},expression:"searchKeywords.applicationTime"}})],1),a("el-col",{attrs:{span:4}},[a("el-button",[e._v("查询")]),a("el-button",[e._v("重置")]),a("el-button",[e._v("导出")])],1)],1),a("el-table",{staticStyle:{width:"100%","text-align":"center"},attrs:{data:e.tableData,size:"mini",border:""}},[a("el-table-column",{attrs:{fixed:"",prop:"id",label:"编号",width:"150"}}),a("el-table-column",{attrs:{prop:"entryTime",label:"反馈时间",width:"150"}}),a("el-table-column",{attrs:{prop:"chargePerMinute",label:"反馈人优号",width:"150"}}),a("el-table-column",{attrs:{prop:"chargePerMinute",label:"反馈人昵称",width:"150"}}),a("el-table-column",{attrs:{prop:"chargePerMinute",label:"联系方式",width:"150"}}),a("el-table-column",{attrs:{prop:"chargePerMinute",label:"反馈意见",width:"150"}}),a("el-table-column",{attrs:{prop:"chargePerMinute",label:"状态",width:"150"}}),a("el-table-column",{attrs:{prop:"chargePerMinute",label:"操作人",width:"150"}}),a("el-table-column",{attrs:{prop:"chargePerMinute",label:"操作时间",width:"150"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleFeedback(t.row)}}},[e._v("处理反馈")])]}}])})],1),a("div",{staticClass:"footer"},[a("div",[e._v(" 每页记录 "),a("el-input",{staticStyle:{width:"50px"},attrs:{size:"mini"},model:{value:e.record,callback:function(t){e.record=t},expression:"record"}}),e._v("共43条记录！ 服务方人数：2000人 ")],1),a("div",[a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("首页")]),a("el-pagination",{attrs:{background:"","page-size":10,layout:"  pager, next, jumper",total:400}}),a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("尾页")])],1)])],1)},l=[],n={methods:{handleFeedback:function(e){console.log(e),this.$router.push({path:"/handle",query:{type:"feedback",id:1}})}},data:function(){return{record:"5",searchKeywords:{applicationTime:"",chargePerMinute:"50",status:"男",name:"王大拿",phone:"15979885659"},tableData:[{id:"999",name:"王大拿",rname:"王小虎",phone:"15979885659",onlineStatus:"在线",chargePerMinute:"50",percentage:"60",num:"20",score:"4.5",position:"旅游商贸附近500M内",serviceDuration:"1000",probability:"100",total:"1000",surplus:"1000",withdrawn:"1000",withdrawalAmount:"500",entryTime:"2019/12/30",fans:"5000",status:"申请通过"},{id:"999",name:"王大拿",rname:"王小虎",phone:"15979885659",onlineStatus:"在线",chargePerMinute:"50",percentage:"60",num:"20",score:"4.5",position:"旅游商贸附近500M内",serviceDuration:"1000",probability:"100",total:"1000",surplus:"1000",withdrawn:"1000",withdrawalAmount:"500",entryTime:"2019/12/30",fans:"5000",status:"申请通过"},{id:"999",name:"王大拿",rname:"王小虎",phone:"15979885659",onlineStatus:"在线",chargePerMinute:"50",percentage:"60",num:"20",score:"4.5",position:"旅游商贸附近500M内",serviceDuration:"1000",probability:"100",total:"1000",surplus:"1000",withdrawn:"1000",withdrawalAmount:"500",entryTime:"2019/12/30",fans:"5000",status:"申请通过"},{id:"999",name:"王大拿",rname:"王小虎",phone:"15979885659",onlineStatus:"在线",chargePerMinute:"50",percentage:"60",num:"20",score:"4.5",position:"旅游商贸附近500M内",serviceDuration:"1000",probability:"100",total:"1000",surplus:"1000",withdrawn:"1000",withdrawalAmount:"500",entryTime:"2019/12/30",fans:"5000",status:"申请通过"}]}}},s=n,i=a("2877"),o=Object(i["a"])(s,r,l,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d230c0a.608991b3.js.map