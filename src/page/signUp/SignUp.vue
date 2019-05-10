<template>
  <div id="signup">
    <el-steps :active="active" finish-status="success" simple style="margin-top: 80px">
      <el-step title="报名信息"></el-step>
      <el-step title="订单确认"></el-step>
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

    <!-- 考试信息选择页面 -->
    <div class="test-info-choice" v-show="accountsPage">
      <accounts v-on:ToSignUpPayPage="gotoSignUpPayPage"></accounts>
    </div>

    <!-- 支付页面 -->
    <div class="pay" v-if="SignUpPayPage">
      <SignUpPay v-on:ToSignUpSuccessPage="gotoSignUpSuccessPage" v-on:ToSignUpPageWaitPage="gotoSignUpPageWaitPage"></SignUpPay>
    </div>

    <div class="success" v-if="SignUpSuccessPage == 1">
      <SignUpSuccess></SignUpSuccess>
    </div>
    <div class="success" v-if="SignUpPageWaitPage == 1">
      <SignUpPageWait></SignUpPageWait>
    </div>
  </div>
</template>

<script>
import CompanySignUp from "@/page/signUp/CompanySignUp";
import SchoolSignUp from '@/page/signUp/SchoolSignUp';
import PersonalSignUp from '@/page/signUp/PersonalSignUp';
import Accounts from '@/page/signUp/Accounts';
import SignUpPay from '@/page/signUp/SignUpPay';
import SignUpSuccess from '@/page/signUp/SignUpSuccess';
import SignUpPageWait from '@/page/signUp/SignUpPageWait';

export default {
  name: "SignUp",
  components: {
    CompanySignUp,
    SchoolSignUp,
    PersonalSignUp,
    Accounts,
    SignUpPay,
    SignUpSuccess,
    SignUpPageWait
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
      SignUpSuccessPage:0,
      SignUpPageWaitPage:0,
  
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
    gotoAccountsPage: function(msg) {
      (this.active = msg.active),
        (this.signUpPage = msg.signUpPage),
        (this.accountsPage = msg.accountsPage);
    },
    gotoSignUpPayPage: function(msg) {
      (this.active = msg.active),
        (this.accountsPage = msg.accountsPage),
        (this.SignUpPayPage = msg.SignUpPayPage);
    },
    gotoSignUpSuccessPage: function(msg) {
      (this.active = msg.active),
        (this.SignUpPayPage = msg.SignUpPayPage),
        (this.SignUpSuccessPage = msg.SignUpSuccessPage);
    },
    gotoSignUpPageWaitPage: function(msg) {
      (this.active = msg.active),
        (this.SignUpPayPage = msg.SignUpPayPage),
        (this.SignUpPageWaitPage = msg.SignUpPageWaitPage);
    },
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

</style>


