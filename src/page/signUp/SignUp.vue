<template>
  <div id="signup">
    <el-steps :active="active" finish-status="success" simple style="margin-top: 80px">
      <el-step title="报名信息"></el-step>
      <el-step title="信息预览"></el-step>
      <el-step title="费用"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>

    <!-- 报名信息页面 -->

    
    <div class="sign-up-info" v-if="signUpPage">
      <el-tabs type="border-card">
        <!-- 公司报名 -->
        <el-tab-pane label="公司报名">
          <company-signUp v-on:ToAccountsPage="gotoAccountsPage"></company-signUp>
        </el-tab-pane>

        <!-- 校园报名 -->
        <el-tab-pane label="校园报名">
          <school-signUp v-on:ToAccountsPage="gotoAccountsPage"></school-signUp>
        </el-tab-pane>

        <!-- 个人报名 -->
        <el-tab-pane label="个人报名">
          <personal-signUp></personal-signUp>
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- 考试信息选择页面page3 -->
    <div class="test-info-choice" v-show="accountsPage">
      <accounts v-on:ToSignUpPayPage="gotoSignUpPayPage"></accounts>
    </div>

    <!-- 支付页面page4 -->
    <div class="pay" v-if="SignUpPayPage">
      <SignUpPay></SignUpPay>
    </div>

    <div class="success" v-if="sixth1 == 1">
      <div class="suc">
        <p class="sign-up-suc-notice">报名成功！</p>
        <p class="success-context">我们会在确认具体开课时间后联系您，请保持电话或邮箱畅通</p>
        <p class="success-context">
          您可以前往
          <router-link to="/personalCenter/PersonalCenterAllOrder">
            <a href="javascript:;" class="to-center">客户中心</a>
          </router-link>-
          <router-link to="/personalCenter/PersonalCenterAllOrder">
            <a href="javascript:;" class="to-center">我的订单</a>
          </router-link>开具发票
        </p>
      </div>
      <div class="success-other">
        <router-link to="/index">
          <el-button type="primary" @click="onliePayment">返回首页</el-button>
        </router-link>
      </div>
    </div>
    <div class="success" v-if="sixth2 == 1">
      <div class="suc">
        <p class="sign-up-suc-notice2">下单成功！</p>

        <p class="success-context">
          请尽快前往
          <router-link to="/personalCenter/PersonalCenterAllOrder">
            <a href="javascript:;" class="to-center2">客户中心</a>
          </router-link>-
          <router-link to="/personalCenter/PersonalCenterAllOrder">
            <a href="javascript:;" class="to-center2">我的订单</a>
          </router-link>支付
        </p>
      </div>
      <div class="success-other">
        <router-link to="/personalCenter/PersonalCenterUncompletedOrder">
          <el-button type="primary" @click="onliePayment">我的订单</el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CompanySignUp from "@/page/signUp/CompanySignUp";
import SchoolSignUp from '@/page/signUp/SchoolSignUp';
import PersonalSignUp from '@/page/signUp/PersonalSignUp';
import Accounts from '@/page/signUp/Accounts';
import SignUpPay from '@/page/signUp/SignUpPay';

export default {
  name: "Signup",
  components: {
    CompanySignUp,
    SchoolSignUp,
    PersonalSignUp,
    Accounts,
    SignUpPay
  },
  data() {
    return {
      orderShow1: true,
      orderShow2: true,
      orderShow3: true,
      orderShow4: true,
      checkAll: false,

      isIndeterminate: true,
      showPersonInfo: false,

      radio2: 3,
      signUpPage: 1,
      accountsPage: 0,
      SignUpPayPage: 0,
  
      thirdPage: 0,
      fourthPage: 0,
      fifthPage: 0,
      sixth1: 0,
      sixth2: 0,
      payOnline: 1,
      payOffline: 0,
      active: 0,
      maxSetp: 6,
      num1: 1,
      num2: 1,
      num3: 1,
      num4: 1,
      selectCourseData: [{}],
      selectAddressData1: [{}],
      selectTimeData1: [{}],
      selectMealData1: [{}],
      multipleSelection1: [],
      personSize1: 0,
      centerDialogVisible1: false,
      selectAddressData2: [{}],
      selectTimeData2: [{}],
      selectMealData2: [{}],
      multipleSelection2: [],
      personSize2: 0,
      centerDialogVisible2: false,
      selectAddressData3: [{}],
      selectTimeData3: [{}],
      selectMealData3: [{}],
      multipleSelection3: [],
      personSize3: 0,
      centerDialogVisible3: false,
      selectAddressData4: [{}],
      selectTimeData4: [{}],
      selectMealData4: [{}],
      multipleSelection4: [],
      personSize4: 0,
      centerDialogVisible4: false,
      ruleForm: {
        course1: "",
        Address1: "",
        time1: "",
        meal1: "",
        course2: "",
        Address2: "",
        time2: "",
        meal2: "",
        course3: "",
        Address3: "",
        time3: "",
        meal3: "",
        course4: "",
        Address4: "",
        time4: "",
        meal4: ""
      },
      tableData1: [{}]
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
    gotoAccountsPage: function(msg) {
      (this.active = msg.active),
        (this.signUpPage = msg.signUpPage),
        (this.accountsPage = msg.accountsPage);
    },
    gotoSignUpPayPage: function(msg) {
      (this.active = msg.active),
        (this.accountsPage = msg.accountsPage),
        (this.SignUpPayPage = msg.SignUpPayPage);
    }
  }
};
</script>

<style scoped>
#signup {
  width: 1000px;
  margin: auto;
}
.sign-up-info {
  width: 1000px;
  height: 950px;
  margin: 0px auto;

  padding: 10px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
}
.el-input {
  width: 300px;
}

.el-select {
  width: 300px;
}

#native .el-select {
  width: 119px;
}

#test-region .el-select {
  width: 120px;
}

.test-demo-ruleForm {
  margin: 20px 0px 0px 0px;
}

#test-course {
  margin: 0;
}

.nextPage1 {
  margin: 0px 0px 0px 100px;
}
.nextPage1-2 {
  margin: 0px 0px 0px 0px;
  text-align: center;
}

.meal-choice {
  width: 1000px;
  height: 500px;
  margin: 0px auto;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fff;
  border: 1px solid #e7e7e7;
  padding: 20px 0px 0px 10px;
  margin: 10px 0px 0px 0px;
}

.test-info-choice {
  width: 1000px;

  margin: 0px auto;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fff;
  border: 1px solid #e7e7e7;
  padding: 30px;
}

.pay {
  width: 1000px;

  box-shadow: 0 0 2px #c7c5c5;
  background: #fff;
  border: 1px solid #e7e7e7;
  padding: 30px;
  margin: 10px 0px 0px 0px;
}

.Invoice {
  width: 1000px;
  height: 560px;
  margin: 0px auto;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fff;
  border: 1px solid #e7e7e7;
  padding: 30px 0px 0px 30px;
  margin: 10px 0px 0px 0px;
}

.success {
  width: 1000px;
  height: 560px;
  margin: 0px auto;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fff;
  border: 1px solid #e7e7e7;
  padding: 30px 0px 0px 30px;
  margin: 10px 0px 0px 0px;
}

.choose-meal {
  height: 300px;
  width: 230px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #eee;
  border: 1px solid rgba(0, 0, 0, 0.05);
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  word-wrap: break-word;
}

.meal-type {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
  color: #1da9e2;
  text-align: center;
  line-height: 25px;
  margin-top: 15px;
}

.choose-meal h1 {
  font-size: 40px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
  margin-bottom: 0;
  text-align: center;
  color: #2f2f2f;
}

.choose-meal a {
  background: #da4f49;

  height: 30px;
  line-height: 30px;
  padding: 0 15px;
  font-size: 16px;
  color: white;
  display: inline-block;
  text-decoration: none;
}

.choose-meal a:hover {
  background: #e77272;

  height: 30px;
  line-height: 30px;
  padding: 0 15px;
  font-size: 16px;
  color: white;
  display: inline-block;
  text-decoration: none;
}

.choose-meal ul {
  padding: 20px 0 10px 0;
  list-style: none;
  display: block;
}

.choose-meal li {
  font-size: 14px;
  border-bottom: 1px dotted #ddd !important;
  padding: 5px 0px 5px 0px;

  list-style: none;
  display: list-item;
  text-align: -webkit-match-parent;
}

.choose-meal i {
  font-weight: bold;
  width: 95px;
  text-align: right;
  float: right;
  margin-right: 8px;
  font-style: normal;
  line-height: 22px;
  color: #1da9e2;
}

.meal-sign-up {
  text-align: center;
  margin: 20px 0px 0px 0px;
}

.choose-meal strong {
  vertical-align: super;
  color: #ee5f5b;
  margin-left: 3px;
  font-weight: bold;
  font-size: 12px;
}
.main-meal {
  margin: 30px 0px 0px 0px;
}

.primary-page {
  text-align: center;
}

.test-notice {
  width: 854px;
  height: 280px;
  margin: 23px 0px 15px 50px;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fff;
  border: 1px solid #e7e7e7;
  padding: 23px 0px 0px 10px;
}

.nextPage3 {
  text-align: center;
  margin: 20px 0px;
}

.test-result {
  float: right;
  margin: -535px 20px 0px 0px;
}

#test-label1 {
  padding: 0px 23px 0px 0px;
}

#test-label2 {
  padding: 0px 13px 0px 28px;
}

#test-label3 {
  padding: 0px 13px 0px 28px;
}

#test-label4 {
  padding: 0px 13px 0px 28px;
}
#test-input2 {
  padding: 0px 200px 0px 0px;
}
.show-result {
  margin: 20px 0px 0px 0px;
}
.test-title1 {
  padding: 20px 0px 0px 20px;
}
#payZhifubao {
  margin: 80px 0px 50px 0px;
}
.zhifubao {
  float: left;
  margin: -185px 0px 0px 0px;
  font-weight: bold;
}
.weixinzhifu {
  float: left;
  margin: -92px 0px 0px 0px;
}
.wangyinzhifu {
  float: left;
  margin: -152px 0px 0px 0px;
}

.zhifubao-radio {
  float: left;
  border: 1px solid #228b22;
  margin: -15px -2000px 0px 20px;
}
.weixin-radio {
  float: left;
  border: 1px solid #228b22;
  margin: -15px -2000px 0px 20px;
}
.wangyin-radio {
  float: left;
  border: 1px solid #228b22;
  margin: -5px -2000px 0px 20px;
}
.radio2weixin {
  margin: 0px 0px 15px 0px;
}
.radio1zhifubao {
  margin: 0px 0px 10px 0px;
}
.radio3wangyin {
  margin: 30px 140px 0px 0px;
}
.nextPage4 {
  margin: 13px 0px 20px 0px;
  text-align: center;
}
.nextPage4-2 {
  margin: 77px 0px 20px 0px;
  text-align: center;
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
.info-notice {
  font-family: "微软雅黑";
  font-size: 12px;
  color: #ee5f5b;
}
.Invoice-company-address {
  float: right;
  margin: -340px 100px 0px 0px;
}
.Invoice-contact {
  float: right;
  margin: -278px 100px 0px 0px;
}

.Invoice-telphone {
  float: right;
  margin: -216px 100px 0px 0px;
}

.Invoice-tax-money {
  float: right;
  margin: -154px 100px 0px 0px;
}
.Invoice-info {
  margin: 35px 0px 0px 0px;
}
.Invoice-tax-context {
  width: 867px;
}
.Invoice-complete {
  margin: 30px 150px 0px 0px;
  text-align: center;
}
.skip-a {
  color: #42b983;
  font-weight: bold;
  font-size: 17px;
}
.person-a {
  color: #616bf7;
  font-weight: bold;
  font-size: 17px;
}
#show-result2 {
  margin: 20px 37px;
}
#show-result3 {
  margin: 20px 9px;
}
#show-result4 {
  margin: 20px 36px;
}
.sign-up-suc-notice {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 40px;
  font-weight: bold;
  color: #42b983;
  margin: 100px 0px 0px 0px;
}
.sign-up-suc-notice2 {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 40px;
  font-weight: bold;
  color: #409eff;
  margin: 100px 0px 0px 0px;
}

.success-context {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 18px;
  margin: 20px 0px 0px 0px;
}

.success-other {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 14px;
  margin: 140px 0px 0px 0px;
}
.upload-demo {
  text-align: center;
  height: 300px;
  margin: 0px 0px 0px 0px;
}
.div-delete {
  text-align: center;
  margin: 0px 0px 10px 0px;
}
.info-need {
  margin: 0px 0px 0px 49px;
}
.nextPage1-batch {
  text-align: center;
}
.training-project {
  margin: 0px 0px 0px 50px;
}
.scan-meal {
  margin: 0px 0px 0px 50px;
}
.test-scan-money {
  padding: 0px 0px 0px 28px;
  margin: 0px 0px 0px 50px;
}
.scan-mobile {
  margin: 0px 0px 0px 50px;
}
.training-time {
  padding: 0px 0px 0px 56px;
}
.scan-test-time {
  padding: 0px 0px 0px 28px;
}
.test-place {
  padding: 0px 0px 0px 56px;
}
.info-scan > .el-col {
  margin: 0px 0px 12px 0px;
}
.sign-num {
  text-align: right;
  float: left;
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.el-input-number {
  width: 250px;
}
.batch-sign-up-notice {
  margin: 0px 0px 15px 0px;
}
.test-info-label {
  margin: 0px 5px 0px 0px;
}
#el-icon-plus1,
#el-icon-plus2,
#el-icon-plus3,
#el-icon-plus4 {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 12px;
  cursor: pointer;
}
#el-icon-minus1,
#el-icon-minus2,
#el-icon-minus3,
#el-icon-minus4 {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 12px;
  cursor: pointer;
}
.div-zone .el-select {
  width: 250px;
}
.sign-submit {
  margin: 20px 0px 0px 240px;
}
.signup-here {
  color: #616bf7;
  font-weight: bold;
  font-size: 17px;
}
#signup-no-info-notice1 {
  margin: 10px 0px 0px 60px;
}
#signup-no-info-notice2 {
  margin: 20px 0px 30px 60px;
}
.to-center {
  color: #67c23a;
}
.to-center2 {
  color: #409eff;
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
  padding: 20px 0 30px 0;
}
.pay-zhifubao {
  margin: 25px 0px 80px 0px;
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
  height: 88px;
  border-bottom: 1px solid #eee;
  margin: 20px 0px 0px 0px;
}
.f-fl {
  float: left;
}
.pay-meal-body img {
  width: 120px;
  height: 68px;
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
  cursor: pointer;
}
.meal_price {
  font-weight: 600;
  font-size: 14px;
  color: #333;
  float: right;
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
.agreement-con {
  padding: 100px 0px 0px 0px;
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
.order-info-body {
  width: 940px;
  height: 110px;
  background-color: #f8f8f8;
  border: 1px solid #e4e4e4;
  font-size: 12px;
  color: #666;
  text-align: center;
  padding: 20px;
}
.order-subtotal {
  width: 940px;
  height: 45px;
  background-color: #eee;
  border-bottom: 1px solid #e4e4e4;
  border-left: 1px solid #e4e4e4;
  border-right: 1px solid #e4e4e4;
}
.order-img {
  width: 120px;
  height: 70px;
}
.order-subtotal {
  text-align: right;
  padding: 12px;
  font-size: 14px;
  color: #333;
}

.order-info-title {
  width: 940px;
  height: 40px;
  background-color: #f8f8f8;
  border: 1px solid #e4e4e4;
  margin: 0px 0px 20px 0px;
  font-size: 12px;
  color: #666;
  text-align: center;
  padding: 11px 20px 0px 20px;
}
.order-meal-name {
  font-size: 14px;
  color: #333;
  text-align: left;
  padding: 0px 0px 0px 30px;
}
.order-meal-person-num {
  margin-top: 28px;
  color: #ff6600;
  cursor: pointer;
  text-align: left;
  padding: 0px 0px 0px 30px;
}
.order-meal-property {
  line-height: 70px;

  vertical-align: middle;
  text-align: center;
}
.order-meal-property-space {
  height: 70px;
  display: table-cell;
  vertical-align: middle;
}
.el-icon-delete {
  font-size: 16px;
}
.el-icon-delete:hover {
  color: #409eff;
}
.order-group {
  margin: 20px 0px 0px 0px;
}
.order-total-price {
  height: 60px;
  width: 940px;
  margin: 30px 0px 0px 0px;
  background-color: #eee;
  border: 1px solid #e4e4e4;
  border-right: 0;
}
.chekout {
  background-color: #ff8000;
  border: 1px solid #ff8000;
  font-size: 20px;
  text-align: center;
  line-height: 58px;
  width: 120px;
  margin: -1px 0px 0px 36px;
  color: #fff;
  cursor: pointer;
}
.total {
  text-align: right;
  font-size: 14px;
  color: #444;
  padding: 15px 0px 0px 0px;
}
.total-price {
  font-size: 20px;
  color: #ff3900;
}
</style>


