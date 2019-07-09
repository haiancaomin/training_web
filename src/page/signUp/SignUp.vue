<template>
  <div class="out_body">
    <div id="signup">
      <el-steps :active="active" finish-status="success" simple>
        <el-step title="报名信息"></el-step>
        <el-step title="订单确认"></el-step>
        <el-step title="费用"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>

      <!-- 报名信息页面 -->
      <div class="sign-up-info" v-if="signUpPage">
        <el-tabs type="border-card">
          <!-- 公司报名 -->
          <el-tab-pane label="公司报名" v-if="type==1">
            <company-signUp v-on:ToAccountsPage="gotoAccountsPage"></company-signUp>
          </el-tab-pane>

          <!-- 校园报名 -->
          <el-tab-pane label="校园报名" v-if="type==2">
            <school-signUp v-on:ToAccountsPage="gotoAccountsPage"></school-signUp>
          </el-tab-pane>

          <!-- 个人报名 -->
          <!-- <el-tab-pane label="个人报名" v-if="type==3">
            <personal-signUp v-on:ToAccountsPage="gotoAccountsPage"></personal-signUp>
          </el-tab-pane> -->

          <!-- 团队报名 -->
          <el-tab-pane label="团队报名" v-if="type==3">
            <team-signUp v-on:ToAccountsPage="gotoAccountsPage"></team-signUp>
          </el-tab-pane>
        </el-tabs>
      </div>

      <!-- 考试信息选择页面 -->
      <div class="test-info-choice" v-show="accountsPage">
        <accounts v-on:ToSignUpPayPage="gotoSignUpPayPage"></accounts>
      </div>

      <!-- 支付页面 -->
      <div class="pay" v-show="SignUpPayPage">
        <SignUpPay
          v-on:ToSignUpSuccessPage="gotoSignUpSuccessPage"
          v-on:ToSignUpPageWaitPage="gotoSignUpPageWaitPage"
        ></SignUpPay>
      </div>

      <div class="success" v-if="SignUpSuccessPage == 1">
        <SignUpSuccess></SignUpSuccess>
      </div>
      <div class="success" v-if="SignUpPageWaitPage == 1">
        <SignUpPageWait></SignUpPageWait>
      </div>
    </div>
  </div>
</template>

<script>
import CompanySignUp from "@/page/signUp/CompanySignUp";
import SchoolSignUp from "@/page/signUp/SchoolSignUp";
// import PersonalSignUp from "@/page/signUp/PersonalSignUp";
import TeamSignUp from "@/page/signUp/TeamSignUp";
import Accounts from "@/page/signUp/Accounts";
import SignUpPay from "@/page/signUp/SignUpPay";
import SignUpSuccess from "@/page/signUp/SignUpSuccess";
import SignUpPageWait from "@/page/signUp/SignUpPageWait";

export default {
  name: "SignUp",
  components: {
    CompanySignUp,
    SchoolSignUp,
    PersonalSignUp,
    TeamSignUp,
    Accounts,
    SignUpPay,
    SignUpSuccess,
    SignUpPageWait
  },
  data() {
    return {
      signUpPage: 1,
      accountsPage: 0,
      SignUpPayPage: 0,
      SignUpSuccessPage: 0,
      SignUpPageWaitPage: 0,
      active: 0,
      type: 1
    };
  },
  mounted() {
    this.getUserAuth();
  },
  methods: {
    getUserAuth: function() {
      var userInfo = JSON.parse(sessionStorage.getItem("user"));
      if (userInfo) {
        var userid = userInfo.userid;
      }
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/login_getUserById.do?userid=${userid}`
      })
        .then(res => {
          if (res.data.data != false) {
            this.type=res.data.data.type
            sessionStorage.setItem("user", JSON.stringify(res.data.data));
          } else {
            console.log(res);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
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
    }
  }
};
</script>

<style scoped>
#signup {
  width: 1000px;
  margin: 80px auto 0px auto;
  padding: 10px 0px 10px 0px;
}

.sign-up-info {
  width: 1000px;
  height: 570px;
  margin: 0px auto;
  padding: 10px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
}
.test-info-choice {
  width: 1000px;
  margin: 10px auto;
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
  padding: 10px 30px 30px 30px;
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
.el-steps {
  box-shadow: 0 0 2px #c7c5c5;
  background: #fff;
  border: 1px solid #e7e7e7;
}
</style>