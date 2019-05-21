<template>
  <div id="SignUpPay">
    <div>
      <div clsss="pay-online">
        <el-dialog title="报名人员信息" :visible.sync="showTable" width="500px" center>
          <el-table :data="tableData" border max-height="400" style="width: 100%">
            <el-table-column prop="empname" label="姓名" width="100"></el-table-column>
            <el-table-column prop="cardno" label="身份证"></el-table-column>
          </el-table>
          <el-button type="primary" class="sign-submit1" @click="showTable=false">确认</el-button>
        </el-dialog>
        <el-dialog title="用户付费协议" :visible.sync="showProtocol" width="600px" center>用户付费协议文案</el-dialog>

        <el-dialog title="汇款信息" :visible.sync="showAccountDialog" width="600px" center>
          <div class="offline-context">
          <p class="offline-notice">转账汇款成功后，请在工作日9:30-17:00致电进行款项确认。电话：1234567890</p>
          <p>&nbsp;</p>
          <strong>对公帐户：</strong>（可通过网银转帐或银行柜台电汇）
          <br>
          <p>开 户 行：中国**银行股份有限公司**支行</p>
          <p>收款户名：***</p>
          <p>帐 号：1234567890</p>
        </div>
        <div class="check_operation">
          <el-button type="primary" class="sign-submit" @click="payWait">我已确认</el-button>
          <el-button type="primary" class="sign-submit" @click="showAccountDialog=false">稍等一会</el-button>
        </div>
        </el-dialog>

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
          

          <div class="meal-body">
            <div class="pay-meal">购买套餐</div>

            <el-collapse accordion  v-for="orderItem in orderDetail.dlist"
                    :key="orderItem.detailid">
              <el-collapse-item id="meal-body-collapse">
                <template slot="title">
                  <div
                    class="pay-meal-body"
                   
                  >
                    <div class="pay-meal-body">
                      <div class="meal_img f-fl">
                        <img :src="orderItem.picurl" alt>
                      </div>
                      <div class="meal_body f-fl">
                        <p class="title">
                          <span>{{orderItem.coursename}}（{{orderItem.menuname}}）</span>
                        </p>

                        <div class="promotion">
                          报名人数：
                          <span>{{orderItem.personcount}}</span>
                        </div>
                      </div>
                      <div class="meal_price">￥{{orderItem.money}}</div>
                    </div>
                  </div>
                </template>
                <div class="more_info">
                  <div class="more_info_up">
                <el-col :span="4">
                <div>预计考试时间</div>
                </el-col>
                <el-col :span="4">
                <div>预计开课时间</div>
                </el-col>
                <el-col :span="4">
                <div>培训时长</div>
                </el-col>
                <el-col :span="6">
                <div>考试地点</div>
                </el-col>
                <el-col :span="2">
                <div>单价</div>
                </el-col>
                <el-col :span="4">
                <div>查看人员</div>
                </el-col>
                  </div>

                 <div class="more_info_down">
                <el-col :span="4">
                <div class="down_cell">{{orderItem.examtime}}</div>
                </el-col>
                <el-col :span="4">
                <div class="down_cell">{{orderItem.traintime}}</div>
                </el-col>
                <el-col :span="4">
                <div class="down_cell">{{orderItem.coursehour}}</div>
                </el-col>
                <el-col :span="6">
                <div class="down_cell">
                  <el-tooltip content="Top center" placement="bottom">
                            <div slot="content">{{orderItem.examaddress}}</div>
                            <h3>{{orderItem.examaddress}}</h3>
                          </el-tooltip>
                </div>
                </el-col>
                <el-col :span="2">
                <div class="down_cell">{{orderItem.price}}</div>
                </el-col>
                <el-col :span="4">
                <div class="down_cell">
                  <el-button type="primary" @click="checkEmp(orderItem.employeeids)" class="check_emp_btn">查看</el-button>
                </div>
                </el-col> 
                 </div>
                </div>

              </el-collapse-item>
            </el-collapse>
          </div>

          <div class="pay-type">支付方式</div>
          <el-collapse accordion id="pay_choose">
            <el-collapse-item>
              <template slot="title">
                <div v-if="radio2==3" class="choose-zhifubao">
                  <img src="../../assets/zhifubao_mini.png" class="icon-mini">支付宝
                </div>
                <div v-if="radio2==6" class="choose-weixin">
                  <img src="../../assets/weixin_mini.png" class="icon-mini">微信支付
                </div>
                <div v-if="radio2==9" class="choose-bank">
                  <img src="../../assets/zhuanzhuang.png" class="icon-mini">转账汇款
                </div>
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
                      <img src="../../assets/huikuan_big.png" class="pay-img">
                    </el-radio>
                  </div>
                </el-radio-group>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>

        <div class="payment-body" v-if="radio2==3||radio2==6">
          <div class="payment-sub-body">
            <el-col :span="18">
              <div class="agreement-con">
                完成支付则表示您同意
                <span class="agreement" @click="showProtocol = true">《智聚用户付费协议》</span>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="pay-price-btn f-fr">
                <div class="pay-price-btn_price">
                  <span class="price_title">待付款:</span>
                  <span class="price_account">
                    <span class="price_account_icon">￥</span>
                    {{orderDetail.summoney}}
                  </span>
                </div>
                <span class="pay-price-btn_btn" @click="payNow">立即支付</span>
                <div>
                  <span class="pay-price-btn_wait" @click="payWait">稍后支付</span>
                </div>
              </div>
            </el-col>
          </div>
        </div>
        <div class="payment-body" v-if="radio2==9">
          <div class="payment-sub-body2">
            <el-col :span="18">
              <div class="agreement-con2">
                完成支付则表示您同意
                <span class="agreement" @click="showProtocol = true">《智聚用户付费协议》</span>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="pay-price-btn f-fr">
                <div class="pay-price-btn_price">
                  <span class="price_title">待付款:</span>
                  <span class="price_account">
                    <span class="price_account_icon">￥</span>
                    {{orderDetail.summoney}}
                  </span>
                </div>
                
                <div>
                  <span class="pay-price-btn_btn2" @click="showAccountDialog=true">汇款账户</span>
                </div>
              </div>
            </el-col>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isIndeterminate: true,
      showPersonInfo: false,
      enterCount: 0,
      radio2: 9,
      SignUpPayPage: 0,
      SignUpSuccessPage: 0,
      SignUpPageWaitPage: 0,
      userName: "",
      active: 0,
      showAccountDialog: false,
      showTable: false,
      showProtocol: false,

      tableData: [],
      orderDetail: []
    };
  },

  mounted() {
    var userInfo = JSON.parse(sessionStorage.getItem("user")),
      that = this;
    if (userInfo) {
      this.userName = userInfo.name;
    }
    this.bus.$on("toNextPage", function(val) {
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/course_findOrderInfoByOrderid.do?orderid=${
          val.orderID
        }`
      })
        .then(res => {
          that.orderDetail = res.data.data;
          console.log(that.orderDetail);
        })
        .catch(function(err) {
          console.log(err);
        });
    });
  },
  methods: {
    checkEmp(empList) {
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_getEmployeeByEmpIds.do?employeeids=${empList}`
      })
        .then(res => {
          this.tableData = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
      this.showTable = true;
    },
  
    payNow() {
      this.SignUpPayPage = 0;
      this.SignUpSuccessPage = 1;
      this.active = 4;
      this.$emit("ToSignUpSuccessPage", {
        SignUpPayPage: this.SignUpPayPage,
        SignUpSuccessPage: this.SignUpSuccessPage,
        active: this.active
      });
    },
    payWait() {
      this.showAccountDialog = false;
      this.SignUpPayPage = 0;
      this.SignUpPageWaitPage = 1;
      this.active = 4;
      this.$emit("ToSignUpPageWaitPage", {
        SignUpPayPage: this.SignUpPayPage,
        SignUpPageWaitPage: this.SignUpPageWaitPage,
        active: this.active
      });
    }
  }
};
</script>

<style scoped>
.pay-online-body {
  width: 900px;
  margin: 0px 20px 0px 20px;
  padding: 20px;
}

.pay-online-check {
  padding: 0px 0px 20px 0px;
  line-height: 24px;
  border-bottom: solid 1px #eee;
  box-sizing: border-box;
  color: #333333;
}
.pay-online-check h1 {
  display: inline-block;
  font-size: 18px;
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
.user-info {
  width: 880px;
  margin: 0 auto;
  padding: 20px 0 10px 0;
}
.pay-zhifubao {
  margin: 25px 0px 80px 0px;
}
.pay-weixin {
  margin: 0px 0px 15px 0px;
}
.pay-img {
  height: 40px;
  width: 100px;
  border: solid 1px #eee;
}
.pay-type {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  margin-top:30px;
}
.choose-zhifubao {
  border-bottom: solid 1px #eee;
  width: 860px;
  margin: 0px -40px 0px 0px;
  font-size: 14px;
  color: #409eff;
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
.icon-mini {
  height: 25px;
  width: 25px;
  margin: 0px 3px 3px 0px;
}
.meal-body {
  padding-top: 20px;
}
.pay-meal {
  color: #333;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
}
.pay-meal-body {
  height: 108px;
  
  margin:0px -20px 0px 0px;
  width:100%
}
.f-fl {
  float: left;
}
.pay-meal-body img {
  width: 120px;
  height: 68px;
  object-fit: cover;
  margin:-3px 0px 0px 0px;
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
  margin:21px 0px 0px 0px;
}
.meal_body .promotion {
  line-height:20px;
  margin:30px 0px 0px 0px;
  color: #ff6600;
 
 
}
.meal_price {
  font-weight: 600;
  font-size: 14px;
  color: #333;
  float: right;
  margin:0px 40px 0px 0px;
}
.payment-sub-body {
  width: 860px;
  height: 160px;
  box-sizing: border-box;
  background: #fefcef;
  border: 1px solid #ddd;
  padding: 15px 40px;
  margin: 0px 40px;
  color: #666;
  font-size: 14px;
}
.payment-sub-body2 {
  width: 860px;
  height: 125px;
  box-sizing: border-box;
  background: #fefcef;
  border: 1px solid #ddd;
  padding: 15px 40px;
  margin: 0px 40px;
  color: #666;
  font-size: 14px;
}
.agreement-con {
  padding: 100px 0px 0px 0px;
  text-align: left;
}
.agreement-con2 {
  padding: 65px 0px 0px 0px;
  text-align: left;
}
.agreement {
  cursor: pointer;
  color: #49af4f;
}
.f-fr {
  float: right;
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
.pay-price-btn_btn2 {
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
  margin: 5px 0px;
}
.pay-price-btn_wait {
  cursor: pointer;
  display: inline-block;
  height: 44px;
  width: 160px;
  line-height: 44px;
  font-size: 18px;
  color: #ffffff;
  background: #909399;
  border-radius: 2px;
  text-align: center;
  margin: 5px 0px;
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
.sign-submit {
  margin: 30px 50px 0px 50px;
}
.sign-submit1 {
  margin: 30px 0px 0px 190px;
}
.more_info {
  text-align: center; 
  padding:0px 0px 20px 0px;
}
.more_info_up {
  margin:0px 0px 0px 0px;
  padding:10px 0px 10px 0px;
  height:42px;
  border-bottom: 1px solid #e4e4e4;
  border-top: 1px solid #e4e4e4;
  background: #eee;
}
.more_info_down{
  height:41px;
  padding:5px 0px 0px 0px;
  background: #f8f8f8;
  border-bottom: 1px solid #e4e4e4;
}
.check_emp_btn{
  padding:0px;
  width:50px;
  height:31px;
  font-size:13px;
}
.down_cell {
  height:31px;
  line-height:31px;
    overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size:11px;
}
.check_operation {
  text-align: center
  }
@font-face {
  font-family: 'iconfont';  /* project id 1131189 */
  src: url('//at.alicdn.com/t/font_1131189_lmmwd56qp1.eot');
  src: url('//at.alicdn.com/t/font_1131189_lmmwd56qp1.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1131189_lmmwd56qp1.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1131189_lmmwd56qp1.woff') format('woff'),
  url('//at.alicdn.com/t/font_1131189_lmmwd56qp1.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1131189_lmmwd56qp1.svg#iconfont') format('svg');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  
  
}
.bank_pay_type {
  font-size: 14px;
  margin:0px 0px 0px 3px;
}
</style>
<style>
#meal-body-collapse .el-collapse-item__header {
  height: 108px;
  line-height: 108px;
}
#meal-body-collapse .el-collapse-item__content {
  padding:0px;
}

</style>