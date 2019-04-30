<template>
  <div id="PersonalCenterUncompletedOrder">
    <div class="order-dialog" id="orderDialog">
      <el-dialog title="报名人员信息" :visible.sync="showEmpDia" width="600px" center>
        <el-table :data="tableData" border max-height="400" style="width: 100%">
          <el-table-column prop="empname" label="姓名" width="80"></el-table-column>
          <el-table-column prop="cardno" label="身份证" width="280"></el-table-column>
          <el-table-column prop="coursename" label="课程"></el-table-column>
        </el-table>
        <div class="sign-submit">
          <el-button type="primary" @click="showEmpDia=false">关闭</el-button>
        </div>
      </el-dialog>

      <el-dialog title="联系方式" :visible.sync="contact" width="400px" id="contact">
        <p>电话：845923412</p>
        <p>邮箱：231231332@dd.com</p>
      </el-dialog>

      <el-dialog :visible.sync="deleteOrderShow" width="400px" class="deleteOrderNotice">
        <p>是否确认删除，删除执行后将无法撤销</p>
        <div class="delete-order-operation">
          <el-button type="primary" @click="deleteOrderShow=false">取消</el-button>
          <el-button type="primary" plain @click="deleteOrder">确认</el-button>
        </div>
      </el-dialog>

      <el-dialog :visible.sync="payShow" width="1000px" id="payNow">
        <div class="pay">
          <div class="pay-head">
            <span>您可以选择</span>
            <el-button type="primary" @click="onliePayment">在线支付</el-button>
            <span>或者</span>
            <el-button type="success" @click="offliePayment">转账汇款</el-button>
          </div>

          <div class="pay-online" v-show="payOnline == 1">
            <div class="pay-online-body">
              <div class="pay-online-check">
                <h1>确认订单信息</h1>
              </div>

              <div class="user-info">
                <div class="user-name">
                  购买帐号：
                  <span>zeroandx</span>
                </div>
                <div class="pay-online-tips">注意：购买后不支持退款、转让，请确认开课时间或考试时间后再提交订单</div>
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
                    </el-radio-group>
                  </div>
                </el-collapse-item>
              </el-collapse>

              <div class="meal-body">
                <div class="pay-meal">购买套餐</div>
                <div class="pay-meal-body">
                  <div class="pay-meal-body">
                    <div class="meal_img f-fl">
                      <img src="../../assets/inspection1.jpg" alt>
                    </div>
                    <div class="meal_body f-fl">
                      <a class="title">
                        <span>质量员+考试培训+南通</span>
                      </a>

                      <div class="promotion">
                        报名人数：
                        <span>11</span>
                      </div>
                    </div>
                    <div class="meal_price">￥2000.00</div>
                  </div>
                </div>
                <div class="pay-meal-body">
                  <div class="pay-meal-body">
                    <div class="meal_img f-fl">
                      <img src="../../assets/inspection2.png" alt>
                    </div>
                    <div class="meal_body f-fl">
                      <a class="title">
                        <span>灌浆工+考试+南通</span>
                      </a>

                      <div class="promotion">
                        报名人数：
                        <span>12</span>
                      </div>
                    </div>
                    <div class="meal_price">￥3000.00</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="payment-body">
              <div class="payment-sub-body">
                <el-col :span="18">
                  <div class="agreement-con"></div>
                </el-col>
                <el-col :span="6">
                  <div class="pay-price-btn f-fr">
                    <div class="pay-price-btn_price">
                      <span class="price_title">实付:</span>
                      <span class="price_account">
                        <span class="price_account_icon">￥</span>5000.00
                      </span>
                    </div>
                    <span class="pay-price-btn_btn">立即支付</span>
                  </div>
                </el-col>
              </div>
            </div>
          </div>

          <div calss="pay-offline" v-show="payOffline == 1">
            <div class="offline-context">
              <p
                class="offline-notice"
              >转账汇款成功后，请在正常工作时间9:30-5:30致电进行款项确认，汇款成功后可在个人中心索取发票。电话：1234567890</p>
              <p>&nbsp;</p>
              <strong>对公帐户：</strong>（可通过网银转帐或银行柜台电汇）
              <br>
              <p>开 户 行：中国**银行股份有限公司**支行</p>
              <p>收款户名：***</p>
              <p>帐 号：1234567890</p>
            </div>
          </div>
        </div>
      </el-dialog>
    </div>

    <div class="crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">客户中心</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">我的订单</el-breadcrumb-item>
        <el-breadcrumb-item>待完成订单</el-breadcrumb-item>
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
            <span v-for="(menuname,index) in orderItem.dlist" :key="index"><i v-if="index > 0">+</i>{{menuname.menuname}}</span>
          </div>
          <p class="order-time">下单时间：{{orderItem.createdate}}</p>
          <p class="order-num">订单号：{{orderItem.orderno}}</p>
        </el-col>
      </div>
      <div class="order-pay">
        <p class="order-pay-info">报名{{orderItem.personcount}}人，待付款：<span class="order-payment">¥{{orderItem.summoney}}</span></p>
      </div>
      <div class="order-operation">
        <el-button type="primary" round plain @click="contact = true">联系我们</el-button>
        <el-button type="primary" round plain @click="checkEmp(orderItem.orderid)">报名员工</el-button>
        <el-button type="primary" round @click="payShow = true">立即支付</el-button>
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
  name: "PersonalCenterUncompletedOrder",
  data() {
    return {
      contact: false,
      payShow: false,
      showEmpDia: false,
      payOnline: 1,
      payOffline: 0,
      radio2: 3,
      orderlist: [{}],
      count:0,
      tableData: [{}],
      deleteOrderShow: false,
      deleteOrderID: "",
      currentPage: 1
    };
  },
  methods: {
    onliePayment() {
      this.payOnline = 1;
      this.payOffline = 0;
    },
    offliePayment() {
      this.payOnline = 0;
      this.payOffline = 1;
    },
     handleCurrentChange(val) {
        this.getNotPayOrderList(val);
        this.currentPage = val;
    },
    checkEmp(orderid) {
      this.tableData = [{}];
      this.$ajax({
          method: "get",
          url: `${
            this.baseURL
          }/zjsxpt/course_findPersonListByOrderid.do?orderid=${orderid}`
        })
          .then(res => {
            this.tableData = res.data.data;
          })
          .catch(function(err) {
            console.log(err);
          });
      this.showEmpDia = true;
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
          }/zjsxpt/course_findOrderList.do?userid=${userid}&status=0&pageIndex=${pageIndex}&selectIndex=${selectIndex}`
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
#PersonalCenterUncompletedOrder {
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
}
.order-picture {
  height: 162px;
  padding: 10px 10px 10px 0px;
  background-color: #f4f4f4;
}
.order-detail {
  font-size: 17px;
  margin: 10px 0px 0px 0px;
  color: #333;
  height: 85px;
}
.order-time {
  text-align: left;
  margin: 0px 10px 0px 0px;
  font-size: 13px;
  color: #333;
}
.order-num {
  text-align: left;
  margin: 5px 10px 0px 0px;
  font-size: 13px;
  color: #333;
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
  padding: 50px 0px 0px 0px;
  text-align: right;
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
.offline-context {
  margin: 20px 0px 0px 0px;
}

.offline-context p {
  font-family: "微软雅黑";

  padding: 0px;
  margin: 5px 0px;
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
#payNow {
  text-align: left;
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
.deleteOrderNotice {
  text-align: center;
}
.delete-order-operation {
  margin:30px 0px 0px 0px;
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


