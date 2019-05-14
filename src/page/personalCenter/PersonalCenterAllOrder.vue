<template>
  <div id="PersonalCenterAllOrder">
    <div class="order-dialog">
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
    </div>

    <div class="order-dialog">
      <el-dialog title="物流编号" :visible.sync="num" width="400px">顺丰快递：84592341112412</el-dialog>
    </div>

    <div class="order-dialog" id="orderDialog">
    
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

      <el-dialog title="开票进度" :visible.sync="scheduleSuccess" width="600px" id="schedule2">
        <div class="schedule-body">
          <el-steps :space="250" :active="3" finish-status="success">
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

      <el-dialog title="联系方式" :visible.sync="contact" width="400px" id="contact">
        <p>电话：845923412</p>
        <p>邮箱：231231332@dd.com</p>
      </el-dialog>

      <el-dialog :visible.sync="payShow" width="1000px" id="payNow">
        <div class="pay">
          <div class="pay-online">
            <div class="pay-online-body">
              <div class="pay-online-check">
                <h1>确认订单信息</h1>
              </div>

              <div class="user-info">
                <div class="user-name">
                  购买帐号：
                  <span>{{userName}}</span>
                </div>
                <div class="pay-online-tips">注意：购买后不支持退款、转让，请确认订单信息后再支付</div>
              </div>
              <div class="pay-type">支付方式</div>
              <el-collapse accordion>
                <el-collapse-item>
                  <template slot="title">
                    <div v-if="radio2==3" class="choose-zhifubao">
                      <img src="../../assets/zhifubao_mini.png" class="icon-mini">支付宝
                    </div>
                    <span v-if="radio2==6" class="choose-weixin">
                      <img src="../../assets/weixin_mini.png" class="icon-mini">微信支付
                    </span>
                    <span v-if="radio2==9" class="choose-bank">
                  <img src="../../assets/weixin_mini.png" class="icon-mini">转账汇款
                </span>
                  </template>
                  <div class="pay-choose">
                    <el-radio-group v-model="radio2">
                      <div class="pay-zhifubao">
                        <el-col :span="24">
                          <el-radio :label="3">
                            <img src="../../assets/zhifubao.jpg" class="pay-img">
                          </el-radio>
                        </el-col>
                      </div>
                      <div class="pay-weixin">
                        <el-radio :label="6">
                          <img src="../../assets/weixin.jpg" class="pay-img">
                        </el-radio>
                      </div>
                      <div class="pay-bank">
                    <el-radio :label="9">
                      <img src="../../assets/weixin.jpg" class="pay-img">
                    </el-radio>
                  </div>
                    </el-radio-group>
                  </div>
                </el-collapse-item>
              </el-collapse>

              <div class="meal-body">
                <div class="pay-meal">购买套餐</div>
                
                  <div class="pay-meal-body" v-for="orderItem in orderDetail.dlist" :key="orderItem.detailid">
                    <div class="meal_img f-fl">
                      <img :src="orderItem.picurl" alt>
                    </div>
                    <div class="meal_body f-fl">
                      <a class="title">
                        <span>{{orderItem.coursename}}（{{orderItem.menuname}}）</span>
                      </a>

                      <div class="promotion">
                        报名人数：
                        <span>{{orderItem.personcount}}</span>
                      </div>
                    </div>
                    <div class="meal_price">￥{{orderItem.money}}</div>
                  </div>
               
              </div>
            </div>

            <div class="payment-body" v-if="radio2==3||radio2==6">
              <div class="payment-sub-body">
                <el-col :span="18">
                  <div class="agreement-con">&nbsp;</div>
                </el-col>
                <el-col :span="6">
                  <div class="pay-price-btn f-fr">
                    <div class="pay-price-btn_price">
                      <span class="price_title">待付款:</span>
                      <span class="price_account">
                        <span class="price_account_icon">￥</span> {{orderDetail.summoney}}
                      </span>
                    </div>
                    <span class="pay-price-btn_btn">立即支付</span>
                  </div>
                </el-col>
              </div>
            </div>
            <div class="payment-body" v-if="radio2==9">
              <div class="payment-sub-body">
                <el-col :span="18">
                  <div class="agreement-con">
                    <div class="offline-context">
              <p
                class="offline-notice"
              >转账汇款成功后，请在工作日9:30-17:00致电进行款项确认。电话：1234567890</p>
              <p class="margin_height">&nbsp;</p>
              <strong>对公帐户：</strong>（可通过网银转帐或银行柜台电汇）
              <br>
              <p>开 户 行：中国**银行股份有限公司**支行</p>
              <p>收款户名：***</p>
              <p>帐 号：1234567890</p>
            </div>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="pay-price-btn f-fr">
                    <div class="pay-price-btn_price bank_pay">
                      <span class="price_title">待付款:</span>
                      <span class="price_account">
                        <span class="price_account_icon">￥</span> {{orderDetail.summoney}}
                      </span>
                    </div>
                  
                  </div>
                </el-col>
              </div>
            </div>
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
        <el-breadcrumb-item>全部订单</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div v-if="count">
      <div class="order-card" v-for="orderItem in orderlist" :key="orderItem.orderid">
        <div class="order-head">
          <img src="../../assets/favicon.png" alt class="order-head-img">
          <span class="order-head-title">智聚培训</span>
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
          <p class="order-pay-info" v-if="orderItem.status==0">
            报名{{orderItem.personcount}}人，待付款：
            <span class="order-payment">¥{{orderItem.summoney}}</span>
          </p>
          <p class="order-pay-info" v-else>
            报名{{orderItem.personcount}}人，实付款：
            <span class="order-payment">¥{{orderItem.summoney}}</span>
          </p>
        </div>
        <div class="order-operation">
          <el-button type="primary" round plain @click="contact = true">联系我们</el-button>
          <router-link :to="'/PersonalCenterOrderDetail/'+orderItem.orderid"><el-button type="primary" round plain>订单详情</el-button></router-link>
          <el-button type="primary" round @click="payNowShow(orderItem.orderid)" v-if="orderItem.status==0">立即支付</el-button>
          <el-button
            type="primary"
            round
            @click="getInvoice(orderItem.orderid,orderItem.summoney)" v-if="orderItem.status==1"
          >开具发票</el-button>
          <el-button type="success" round @click="schedule = true" v-if="orderItem.status==2">开票进度</el-button>
          <el-button
            type="primary"
            round
            plain
            @click="scheduleSuccess = true"
            v-if="orderItem.status==3"
          >开票进度</el-button>
          <el-button type="success" round @click="checkExpress(orderItem.orderid)" v-if="orderItem.status==3">发票物流</el-button>
        </div>
      </div>
    </div>

    <div v-if="count">
      <div class="order-page">
        <el-pagination
          background
          layout="prev, pager, next, jumper"
          :page-size="3"
          :total="count"
          @current-change="handleCurrentChange"
        ></el-pagination>
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
  name: "PersonalCenterAllOrder",
  data() {
    return {
      contact: false,
      count: 0,
      dialogVisible: false,
      radio2: 9,
      num: false,
      payShow: false,
     
      showEmpDia: false,
      scheduleSuccess: false,
      schedule: false,
      dialogVisibleAgreement: false,
      dialogVisibleInfo: false,
      orderlist: [],
     
      orderDetail: [],
      userName:"",
      deleteOrderShow: false,
      deleteOrderID: "",
      currentPage: 1,
      orderID:"",
      checkAgain: false,
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
       expressID:'',
      expressShow: false
    };
  },
  methods: {
    payNowShow(orderid) {
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/course_findOrderInfoByOrderid.do?orderid=${
          orderid
        }`
      })
        .then(res => {
          this.orderDetail = res.data.data;
          console.log(this.orderDetail);
        })
        .catch(function(err) {
          console.log(err);
        });
      this.payShow = true;
    },
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
          url: `${this.baseURL}/zjsxpt/invoice_getInvoiceById.do?userid=${userid}`
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
    handleCurrentChange(val) {
      this.getNotPayOrderList(val);
      this.currentPage = val;
    },
    getNotPayOrderList(selectIndex) {
      var pageIndex = (selectIndex - 1) * 3;
      var userInfo = JSON.parse(sessionStorage.getItem("user"));
      if (userInfo) {
        var userid = userInfo.userid;
      }
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_findOrderList.do?userid=${userid}&pageIndex=${pageIndex}&selectIndex=${selectIndex}`
      })
        .then(res => {
          this.orderlist = res.data.data;
          console.log(this.orderlist);
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
    checkOK() {
      this.dialogVisible = false;
      this.checkAgain = true;
    },
  
  
  },
  mounted() {
    var userInfo = JSON.parse(sessionStorage.getItem("user")),
      that = this;
    if (userInfo) {
      this.userName = userInfo.name;
    }
    this.getNotPayOrderList(1);
  }
};
</script>

<style scoped>
#PersonalCenterAllOrder {
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
  object-fit:cover
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
#orderDialog {
  text-align: left;
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
.pay-online-body {
  width: 900px;

  margin: 10px 20px 0px 20px;
  padding: 20px;
}
.pay-online-check {
  padding: 0px 0px 20px 0px;
  line-height: 24px;
  border-bottom: solid 1px #eee;
  box-sizing: border-box;
  color: #333333;
}
.user-info {
  width: 880px;
  margin: 0 auto;
  padding: 20px 0 30px 0;
}
.user-name {
  font-size: 14px;
  color: #333;
}
.pay-online-tips {
  margin-top: 5px;
  font-size: 12px;
  color: #999;
  line-height: 16px;
}
.pay-type {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
}
.choose-zhifubao {
  border-bottom: solid 1px #eee;
  width: 860px;
  margin: 0px -40px 0px 0px;
  font-size: 14px;
  color: #409eff;
}
.icon-mini {
  height: 25px;
  width: 25px;
  margin: 0px 3px 3px 0px;
}
.choose-weixin {
  border-bottom: solid 1px #eee;
  width: 860px;
  margin: 0px -40px 0px 0px;
  font-size: 14px;
  color: #67c23a;
}
.choose-bank {
  border-bottom: solid 1px #eee;
  width: 860px;
  margin: 0px -40px 0px 0px;
  font-size: 14px;
  color: #E6A23C;
}
.pay-zhifubao {
  margin: 25px 0px 80px 0px;
}
.pay-img {
  height: 40px;
  width: 100px;
  border: solid 1px #eee;
}
.meal-body {
  padding-top: 20px;
}
.pay-meal-body {
  height: 88px;
  border-bottom: 1px solid #eee;
  margin: 20px 0px 0px 0px;
}
.f-fl {
  float: left;
}
.f-fr {
  float: right;
}
.pay-meal-body {
  height: 88px;
  border-bottom: 1px solid #eee;
  margin: 20px 0px 0px 0px;
}
.meal_body {
  margin-left: 12px;
  font-size: 12px;
}
.meal_body .title {
  display: block;
  font-size: 14px;
  color: #333;
  line-height: 19px;
  text-decoration: none;
}
.meal_body .time {
  margin-top: 8px;
  color: #999;
}
.meal_body .promotion {
  margin-top: 28px;
  color: #ff6600;
}
.meal_price {
  font-weight: 600;
  font-size: 14px;
  color: #333;
  float: right;
}
.payment-sub-body {
  width: 860px;
  height: 120px;
  box-sizing: border-box;
  background: #fefcef;
  border: 1px solid #ddd;
  padding: 15px 40px;
  margin: 0px 40px;
  color: #666;
  font-size: 14px;
}
.agreement-con {

  text-align: left;
}
.agreement {
  cursor: pointer;
  color: #49af4f;
}
.pay-meal-body img {
  width: 120px;
  height: 68px;
}
.pay-price-btn_price {
  text-align: right;
  margin-bottom: 5px;
}
.pay-price-btn_btn {
  cursor: pointer;
  display: inline-block;
  height: 44px;
  width: 160px;
  line-height: 44px;
  font-size: 18px;
  color: #ffffff;
  background: #ff6600;
  border-radius: 2px;
  text-align: center;
}

.pay-price-btn_price {
  text-align: right;
  margin-bottom: 5px;
}
.pay-price-btn_price .price_account {
  font-size: 24px;
  font-weight: 600;
  color: #ff6600;
}
.pay-price-btn_price .price_account_icon {
  font-weight: 300;
  font-size: 14px;
}


.offline-context p {
  font-family: "微软雅黑";
  font-size:12px;
  padding: 0px;
}
.offline-notice {
  font-family: "微软雅黑";
  font-size: 12px;
  padding: 0px;
  margin: 0px;
}
.pay-online-check h4 {
  color: #666666;
  display: inline-block;
  line-height: 24px;
  height: 24px;
  font-size: 14px;
  position: relative;
  top: -1px;
  margin-left: 20px;
}
.pay-online-check h1 {
  display: inline-block;
  font-size: 18px;
}
.sign-submit {
  text-align: center;
  margin: 20px 0px 0px 0px;
}
#contact {
  text-align: center;
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
#schedule1,
#schedule2 {
  text-align: center;
}
.schedule-body {
  text-align: left;
  padding: 0px 0px 0px 115px;
}
.deleteOrderNotice {
  text-align: center;
}
.delete-order-operation {
  margin:30px 0px 0px 0px;
}
.deleteOrderNotice,.checkAgain {
  text-align: center;
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
.pay-price-btn_price2 {
  text-align: right;
  margin: 28px 0px 0px 0px;
}
.pay-weixin {
  margin: 0px 0px 15px 0px;
}
.margin_height {
  font-size:8px;
  line-height: 8px;
  height:8px;
}
.bank_pay {
  margin:28px 0px 0px 0px;
}
</style>
<style>
#payNow .el-dialog__header {
    padding: 0px 20px 10px;
}
#payNow .el-dialog__body {
    padding: 0px 20px 30px 20px;
    color: #606266;
    font-size: 14px;
}

</style>

