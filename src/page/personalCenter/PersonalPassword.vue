<template>
  <div id="PersonalPassword">
    <div class="crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">客户中心</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalPassword' }">账户信息</el-breadcrumb-item>
        <el-breadcrumb-item>修改密码</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="PersonalPassword-change">
      <el-form :model="ruleForm" ref="ruleForm" class="demo-ruleForm" id="loginForm">
        <el-form-item prop="newPassword">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="ruleForm.newPassword"
            id="newPassword1"
            autocomplete="off"
          >
            <i slot="prefix" class="iconfont">&#xe7c9;</i>
          </el-input>
        </el-form-item>

        <el-form-item prop="reNewPassword">
          <el-input type="password" placeholder="请再次输入密码" v-model="ruleForm.reNewPassword">
            <i slot="prefix" class="iconfont">&#xe7c9;</i>
          </el-input>
        </el-form-item>

        <el-form-item prop="verificationCode">
          <el-input
            placeholder="请输入短信验证码"
            v-model="ruleForm.verificationCode"
            maxlength="12"
            class="verification"
          ></el-input>
          <el-button type="primary" plain class="get-button-con" v-if="show" @click="getCode">获取验证码</el-button>
          <el-button
            type="primary"
            plain
            disabled
            class="wait-button-con"
            v-if="!show"
          >{{count}} 秒后重发</el-button>
        </el-form-item>

        <div class="PersonalPassword-change-commit">
          <el-form-item>
            <el-button type="primary" class="login-self" @click="reNewPassword">确认更改</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalPassword",
  data() {
    return {
      show: true,
      count: "",
      timer: null,
      ruleForm: {
        newPassword: "",
        reNewPassword: "",
        verificationCode: ""
      }
    };
  },
  methods: {
    reNewPassword() {
      if (this.ruleForm.newPassword == "") {
        this.$message({
          message: "请输入新密码",
          type: "error",
          center: true
        });
      } else if (this.ruleForm.reNewPassword == "") {
        this.$message({
          message: "请确认新密码",
          type: "error",
          center: true
        });
      } else if (this.ruleForm.verificationCode == "") {
        this.$message({
          message: "请输入手机验证码",
          type: "error",
          center: true
        });
      } else if (this.ruleForm.newPassword != this.ruleForm.reNewPassword) {
        this.$message({
          message: "两次输入的密码不一致",
          type: "error",
          center: true
        });
      } else {
        var userInfo = JSON.parse(sessionStorage.getItem("user"));
        if (userInfo) {
          var userid = userInfo.userid;
        }
        this.$ajax({
          method: "post",
          url: `${
            this.baseURL
          }/zjsxpt/login_updatePassword.do?userid=${userid}&newpassword=${
            this.ruleForm.newPassword
          }&code=${this.ruleForm.verificationCode}`
        })
          .then(res => {
            if (res.data.data == 0) {
              this.checkAgain = false;
              this.$message({
                message: "修改成功！",
                type: "success",
                center: true
              });
              this.ruleForm = {};
            } else {
              this.$message({
                message: "验证码错误！",
                type: "error",
                center: true
              });
            }
          })
          .catch(function(err) {
            console.log(err);
          });
      }
    },
    getCode() {
      var userInfo = JSON.parse(sessionStorage.getItem("user"));
      if (userInfo) {
        var userid = userInfo.userid;
      }
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/login_getCode.do?userid=${userid}`
      })
        .then(res => {
          console.log(res);
          const TIME_COUNT = 60;
          if (!this.timer) {
            this.count = TIME_COUNT;
            this.show = false;
            this.timer = setInterval(() => {
              if (this.count > 0 && this.count <= TIME_COUNT) {
                this.count--;
              } else {
                this.show = true;
                clearInterval(this.timer);
                this.timer = null;
              }
            }, 1000);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  mounted: function() {
    document.getElementById("newPassword1").focus();
  }
};
</script>

<style scoped>
#PersonalPassword {
  width: 730px;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fffffd;
  border: 1px solid #e7e7e7;
  margin: 0px 0px 0px 20px;
  padding: 0px 0px 20px 0px;
}

.PersonalPassword-change {
  margin: 40px 0px 0px 0px;
  text-align: center;
}
.wait-button-con {
  height: 44px;
  width: 112px;
  display: inline-block;
}
.crumb {
  padding: 10px 0px 10px 0px;
  font-size: 20px;
  text-align: left;
  margin: 20px;
  border-left: 2px solid #409eff;
  line-height: 40px;
  padding-left: 15px;
  background: #e4e7ed;
}
.el-breadcrumb {
  background: #e4e7ed;
}
.verification {
  width: 242px !important;
}
.get-button-con {
  height: 44px;
  width: 112px;
}
.login-self {
  width: 358px;
  font-size: 16px;
  height: 44px;
}
.el-input {
  width: 358px;
}
@font-face {
  font-family: "iconfont"; /* project id 1131189 */
  src: url("//at.alicdn.com/t/font_1131189_b13898ksm7.eot");
  src: url("//at.alicdn.com/t/font_1131189_b13898ksm7.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1131189_b13898ksm7.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1131189_b13898ksm7.woff") format("woff"),
    url("//at.alicdn.com/t/font_1131189_b13898ksm7.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1131189_b13898ksm7.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 18px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  line-height: 44px;
  margin: 0px 0px 0px 2px;
}
</style>
<style>
#loginForm .el-input__inner {
  height: 44px;
}
</style>