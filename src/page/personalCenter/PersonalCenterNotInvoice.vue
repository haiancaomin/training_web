<template>
  <div id="PersonalCenterNotInvoice">
    
    <div class="order-dialog">
      
      <el-dialog title="联系方式" :visible.sync="contact" width="400px" id="contact">
        <p>电话：845923412</p>
        <p>邮箱：231231332@dd.com</p>
      </el-dialog>
      <el-dialog title="开票进度" :visible.sync="schedule" width="600px" id="schedule1">
        <div class="schedule-body">
        <el-steps :space="250" :active="1" finish-status="success">
  <el-step title="提交材料"></el-step>
  <el-step title="人工审核" description="预计需要一个工作日"></el-step>
  <el-step title="完成"></el-step>
</el-steps>
        </div>
      </el-dialog>

      <el-dialog :visible.sync="deleteOrderShow" width="400px" class="deleteOrderNotice">
        <p>是否确认删除，删除执行后将无法撤销</p>
        <div class="delete-order-operation">
          <el-button type="primary" @click="deleteOrderShow=false">取消</el-button>
          <el-button type="primary" plain @click="deleteOrder">确认</el-button>
        </div>
      </el-dialog>

      <el-dialog :visible.sync="checkAgain" width="400px" class="checkAgain">
        <p>开具发票上传后将无法修改，是否再次确认发票信息</p>
        <div class="delete-order-operation">
          <el-button type="primary" @click="checkAgainMore">再次确认</el-button>
          <el-button type="primary" plain @click="checkSubmit">我要提交</el-button>
        </div>
      </el-dialog>

      <el-dialog :visible.sync="noInvoice" width="400px" class="noInvoice">
        <p>您尚未填写发票信息，点击<router-link to="/personalCenter/PersonalCenterInvoiceShow"><el-button type="primary" 
        class="click-here">这里</el-button></router-link>填写发票信息</p>
      </el-dialog>

      <el-dialog title="开票进度" :visible.sync="scheduleSuccess" width="600px" id="schedule2">
        <div class="schedule-body">
        <el-steps :space="250" :active="3" finish-status="success">
  <el-step title="提交材料"></el-step>
  <el-step title="人工审核" description="预计需要一个工作日"></el-step>
  <el-step title="完成"></el-step>
</el-steps>
        </div>
      </el-dialog>

      <el-dialog title="发票预览" :visible.sync="dialogVisible" width="800px">
        <div class="table-body">
          <table border="1" cellspacing="0">
            <tr>
              <th colspan="4" class="invoice-show-table-th">开票信息表</th>
            </tr>
            <tr>
              <td class="invoice-show-table-td-info1">公司名称</td>
              <td colspan="3" class="invoice-show-table-td-input1">{{companyName}}</td>
            </tr>
            <tr>
              <td class="invoice-show-table-td-info1">公司地址</td>
              <td colspan="3" class="invoice-show-table-td-input1">{{companyAddress}}</td>
            </tr>
            <tr>
              <td class="invoice-show-table-td-info1">纳税人识别号</td>
              <td class="invoice-show-table-td-input2">{{taxerID}}</td>
              <td class="invoice-show-table-td-info2">联系人</td>
              <td class="invoice-show-table-td-input3">{{contactPerson}}</td>
            </tr>
            <tr>
              <td class="invoice-show-table-td-info1">公司开户行</td>
              <td class="invoice-show-table-td-input2">{{bank}}</td>
              <td class="invoice-show-table-td-info2">联系电话</td>
              <td class="invoice-show-table-td-input3">{{phone}}</td>
            </tr>
            <tr>
              <td class="invoice-show-table-td-info1">公司账号</td>
              <td colspan="3" class="invoice-show-table-td-input1">{{account}}</td>
            </tr>
            <tr>
              <td class="invoice-show-table-td-info1">开票总金额</td>
              <td colspan="3" class="invoice-show-table-td-input1">{{orderMoney}}</td>
            </tr>
            <tr>
              <td class="invoice-show-table-td-info3">可开具的发票内容</td>
              <td colspan="3" class="invoice-show-table-td-input1">{{otherContent}}</td>
            </tr>
          </table>
          <div class="info-save">
            <el-button type="primary" @click="checkOK">确认开票</el-button>
          </div>
        </div>
      </el-dialog>

       <el-dialog title="物流单号" :visible.sync="expressShow" width="400px" center >
         <div class="expressShow">
           <p>物流单号：{{expressID}}</p>          
        </div>
     </el-dialog>

    </div>
    <div class="crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">客户中心</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">我的订单</el-breadcrumb-item>
        <el-breadcrumb-item>订单发票</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div v-if="count">
    <div class="order-card" v-for="orderItem in orderlist" :key="orderItem.orderid">
      <div class="order-head">
        <img src="../../assets/favicon.png" alt class="order-head-img">
        <span class="order-head-title">智聚实训</span>
        <span class="el-icon-delete" @click="showNotice(orderItem.orderid)"></span>
      </div>
      <div class="order-picture">
        <el-col :span="7">
          <img :src="orderItem.picurl" alt class="order-img">
        </el-col>
        <el-col :span="17">
          <div class="order-detail">
            <p v-for="(menuname,index) in orderItem.dlist" :key="index">{{menuname.coursename}}（{{menuname.menuname}}）</p>
          </div>
          <p class="order-time">下单时间：{{orderItem.createdate}}</p>
          <p class="order-num">订单号：{{orderItem.orderno}}</p>
        </el-col>
      </div>
      <div class="order-pay">
        <p class="order-pay-info">报名{{orderItem.personcount}}人，实付款：
          <span class="order-payment">¥{{orderItem.summoney}}</span>
        </p>
      </div>
      <div class="order-operation">
        <el-button type="primary" round plain @click="contact = true">联系我们</el-button>
        <router-link :to="'/PersonalCenterOrderDetail/'+orderItem.orderid"><el-button type="primary" round plain>订单详情</el-button></router-link>
        <el-button type="primary" round @click="getInvoice(orderItem.orderid,orderItem.summoney)" v-if="orderItem.status==1">开具发票</el-button>
        <el-button type="success" round @click="schedule = true" v-if="orderItem.status==2">开票进度</el-button>
        <el-button type="primary" round plain @click="scheduleSuccess = true" v-if="orderItem.status==3">开票进度</el-button>
        <el-button type="success" round @click="checkExpress(orderItem.orderid)" v-if="orderItem.status==3">发票物流</el-button>
      </div>
    </div>
    </div>
    <div v-if="count">
    <div class="order-page">
      <el-pagination background layout="prev, pager, next, jumper" :page-size="3" :total="count" @current-change="handleCurrentChange"></el-pagination>
    </div>
    </div>
     <div v-if="!count" class="noOrder">
      <img src="../../assets/favicon.png" alt class="order-head-img">
      <p class="no-order-content">您还没有相关的订单</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalCenterNotInvoice",
  data() {
    return {
      contact: false,
      schedule: false,
      scheduleSuccess: false,
      dialogVisible: false,
      orderlist: [],
      count:0,
     
      showEmpDia: false,
      deleteOrderShow: false,
      deleteOrderID: "",
      currentPage: 1,
      noInvoice: false,
      companyName: '',
      companyAddress:'',
      taxerID:'',
      contactPerson:'',
      bank:'',
      phone:'',
      account:'',
      otherContent:'',
      invoiceid:'',
      orderMoney:'',
      checkAgain: false,
      orderID:'',
      expressID:'',
      expressShow: false
    };
  },
  methods: {
    checkExpress(id) {
      this.$ajax({
          method: "get",
          url: `${
            this.baseURL
          }/zjsxpt/course_findLognoByOrderid.do?orderid=${id}`
        })
          .then(res => {
            this.expressID = res.data.data;
          })
          .catch(function(err) {
            console.log(err);
          });
      this.expressShow = true;
    },
    checkSubmit() {
      this.$ajax({
        method: "post",
        url: `${this.baseURL}/zjsxpt/course_confirmInvoice.do?orderid=${this.orderID}&invoiceid=${this.invoiceid}`
      })
        .then(res => {
          this.checkAgain = false;
          this.$message({
            message: "提交成功！",
            center: true
          });
          this.getNotPayOrderList(this.currentPage);
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    checkAgainMore() {
       this.dialogVisible = true;
      this.checkAgain = false;
    },
    getInvoice(id,money) {
      this.orderID = id;
      this.orderMoney = money;
      var userInfo = JSON.parse(sessionStorage.getItem("user"));
      if (userInfo) {
        var userid = userInfo.userid;
      }
      this.$ajax({
          method: "get",
          url: `${
            this.baseURL
          }/zjsxpt/invoice_getInvoiceById.do?userid=${userid}`
        })
          .then(res => {
            if(res.data.data == "false") {
              this.noInvoice = true;
            } else {
              this.companyName= res.data.data.company;
              this.companyAddress=res.data.data.address;
              this.taxerID=res.data.data.taxpayerno;
              this.contactPerson=res.data.data.person;
              this.bank=res.data.data.bank;
              this.phone=res.data.data.mobilephone;
              this.account=res.data.data.account;
              this.otherContent=res.data.data.content;
              this.invoiceid = res.data.data.invoiceid;
              this.dialogVisible = true;
            }
          })
          .catch(function(err) {
            console.log(err);
          });
      
    },
    checkOK() {
      this.dialogVisible = false;
      this.checkAgain = true;
    },
    handleCurrentChange(val) {
        this.getNotPayOrderList(val);
        this.currentPage = val;
    },
    getNotPayOrderList(selectIndex) {
      var pageIndex = (selectIndex - 1)*3
      var userInfo = JSON.parse(sessionStorage.getItem("user"));
      if (userInfo) {
        var userid = userInfo.userid;
      }
      this.$ajax({
          method: "get",
          url: `${
            this.baseURL
          }/zjsxpt/course_findOrderList.do?userid=${userid}&status=1&pageIndex=${pageIndex}&selectIndex=${selectIndex}`
        })
          .then(res => {
            this.orderlist = res.data.data;
            this.count = res.data.count;    
          })
          .catch(function(err) {
            console.log(err);
          });
    },
    showNotice(id) {
      this.deleteOrderID = id;
      this.deleteOrderShow = true;
    },
    deleteOrder() {
      this.$ajax({
        method: "post",
        url: `${this.baseURL}/zjsxpt/course_deleteOrderById.do?orderid=${
          this.deleteOrderID
        }`
      })
        .then(res => {
          this.deleteOrderShow = false;
          this.$message({
            message: "删除成功！",
            center: true
          });
          this.getNotPayOrderList(this.currentPage);
        })
        .catch(function(err) {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getNotPayOrderList(1);
  }
};
</script>

<style scoped>
#PersonalCenterNotInvoice {
  width: 730px;
  box-shadow: 0 0 2px #c7c5c5;
  border: 1px solid #e7e7e7;
  margin: 0px 0px 0px 20px;
  padding: 20px;
}
.order-card {
  height: 320px;
  width: 600px;
  margin: 20px auto 0px auto;
  box-shadow: 0 0 6px #c7c5c5;
  border: 1px solid #fff;
}
.order-card:hover {
  box-shadow: 0 0 20px #c7c5c5;
  border: 1px solid #409eff;
}
.order-head {
  height: 50px;
  padding: 11px 0px 0px 0px;
}
.order-head-img {
  width: 30px;
  height: 30px;
  margin: 0px 5px 0px 15px;
}
.order-head-title {
  font-weight: bold;
  font-size: 18px;
}
.order-img {
  width: 141px;
  height: 141px;
  margin: 0px 0px 0px 10px;
   object-fit:cover;
}
.order-picture {
  height: 162px;
  padding: 10px 10px 10px 0px;
  background-color: #f4f4f4;
}
.order-detail {
  font-size: 16px;
  margin: 0px 0px 0px 0px;
  color: #333;
  height: 100px;
}
.order-time {
  text-align: left;
  margin: 0px 10px 0px 0px;
  font-size: 13px;
  color: #888;
}
.order-num {
  text-align: left;
  margin: 5px 10px 0px 0px;
  font-size: 13px;
  color: #888;
}
.order-pay {
  height: 50px;
  border-bottom: 1px solid #eee;
  padding: 14px;
  text-align: right;
}
.order-pay-info {
  font: 14px;
}
.order-payment {
  font-weight: bold;
}
.order-operation {
  padding: 10px;
  text-align: right;
}
.order-page {
  text-align: center;
  margin: 30px 0px 10px 0px;
}

table {
  text-align: center;
  margin: 0px auto;
}
.invoice-show-table-th {
  height: 60px;
}
.invoice-show-table-td-info1 {
  height: 40px;
  width: 150px;
}
.invoice-show-table-td-info2 {
  height: 40px;
  width: 100px;
}
.invoice-show-table-td-info3 {
  height: 80px;
}
.invoice-show-table-td-input2 {
  width: 250px;
}
.invoice-show-table-td-input3 {
  width: 150px;
  word-break: break-all;
}
input {
  width: 100%;
  padding: 0px 10px;
  text-align: center;
}
.info-edit,
.info-save {
  margin: 20px 0px 0px 0px;
  text-align: center;
}

.order-dialog {
  text-align: center;
}
.crumb {
  padding: 10px 0px 10px 0px;
  font-size: 20px;
  text-align: left;

  border-left: 2px solid #409eff;
  line-height: 40px;
  padding-left: 15px;
  background: #e4e7ed;
}
.el-breadcrumb {
  background: #e4e7ed;
}
.schedule-body {
  text-align: left;
  padding:0px 0px 0px 115px;
}
#schedule1,#schedule2 {
  text-align: center;
}
.sign-submit {
  text-align: center;
  margin: 20px 0px 0px 0px;
}
.el-icon-delete {
  float: right;
  font-size: 18px;
  margin: 6px 15px 0px 0px;
}
.el-icon-delete:hover {
  color: #409eff;
  cursor: pointer;
}
.deleteOrderNotice,.checkAgain,.expressShow {
  text-align: center;
}
.delete-order-operation {
  margin:30px 0px 0px 0px;
}
.click-here {
  margin:0px 5px;
}
.noOrder {
  margin: 120px 0px 0px 0px; 
  text-align: center;
}
.no-order-content {
  margin: 20px 0px 0px 0px;
  color: #999;
  font-size: 18px;
}
</style>








