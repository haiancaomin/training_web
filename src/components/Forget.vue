<template>
  <div id="Forget">
     <h1 class="file-title">忘记密码</h1>
    <div class="PersonalPassword-change">
      <el-form :model="ruleForm" ref="ruleForm" class="demo-ruleForm" id="loginForm">
        <el-form-item prop="newPassword">
          <el-input
            :type="inputType"
            placeholder="请输入密码"
            v-model="ruleForm.newPassword"
            id="newPassword1"
          >
            <i slot="prefix" class="iconfont">&#xe7c9;</i>
          </el-input>
          <div class="input-icon" @click="changeType">
            <i class="iconfont" v-if="showNewPassword">&#xe76c;</i>
            <i class="iconfont" v-if="!showNewPassword">&#xe604;</i>
          </div>
        </el-form-item>

        <el-form-item prop="reNewPassword">
          <el-input :type="inputType2" placeholder="请再次输入密码" v-model="ruleForm.reNewPassword">
            <i slot="prefix" class="iconfont">&#xe7c9;</i>
          </el-input>
          <div class="input-icon" @click="changeType2">
            <i class="iconfont" v-if="showNewPassword2">&#xe76c;</i>
            <i class="iconfont" v-if="!showNewPassword2">&#xe604;</i>
          </div>
        </el-form-item>

        <el-form-item prop="phone">
          <el-input placeholder="请输入注册手机号" v-model="ruleForm.phone">
            <i slot="prefix" class="iconfont">&#xe745;</i>
          </el-input>
        </el-form-item>

        <el-form-item prop="verificationCode">
          <el-input
            :type="inputType"
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
  data() {
    return {
      showNewPassword: false,
      showNewPassword2: false,
      inputType: "password",
      inputType2:"password",
      iconColor: "",
      show: true,
      input21: "",
      count: "",
      timer: null,
      ruleForm: {
        newPassword: "",
        reNewPassword: "",
        phone: "",
        verificationCode: ""
      }
    };
  },
  mounted() {
    document.getElementById("newPassword1").focus();
  },
  methods: {
    reNewPassword() {
      if (this.ruleForm.newPassword == "") {
        this.$message({
          message: "请输入新密码",
          center: true
        });
      } else if (this.ruleForm.reNewPassword == "") {
        this.$message({
          message: "请确认新密码",
          center: true
        });
      } else if (this.ruleForm.verificationCode == "") {
        this.$message({
          message: "请输入手机验证码",
          center: true
        });
      } else if (this.ruleForm.newPassword != this.ruleForm.reNewPassword) {
        this.$message({
          message: "两次输入的密码不一致",
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
            this.checkAgain = false;
            this.$message({
              message: "修改成功！",
              center: true
            });
            this.ruleForm = {};
          })
          .catch(function(err) {
            console.log(err);
          });
      }
    },
    changeType() {
      if (this.inputType == "text") {
        this.inputType = "password";
        this.showNewPassword = false;
      } else {
        this.inputType = "text";
        this.showNewPassword = true;
      }
    },
    changeType2() {
      if (this.inputType2 == "text") {
        this.inputType2 = "password";
        this.showNewPassword2 = false;
      } else {
        this.inputType2 = "text";
        this.showNewPassword2 = true;
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
  }
};
</script>

<style scoped>
#Forget {
  width: 1000px;
  margin: 0px auto;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fff;
  border: 1px solid #e7e7e7;
  padding: 0px 30px 30px 30px;
  margin-top:80px;
}
.file-title {
  font-size: 18px;
  line-height: 40px;
  border: 1px solid #e4e7ed;
  background: #e4e7ed;
  padding: 0 15px;
  border-radius: 3px;
  border-left: 2px solid #409eff;
  margin:20px 0px 0px 0px;
}
.PersonalPassword-change {
  margin: 30px 0px 0px 0px;
  text-align: center;
}

.get-button {
  display: inline-block;
}
.wait-button-con {
  display: inline-block;
}
.test-but1 {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 180px;
  width: 120px;
  height: 36px;
  margin: auto;
  line-height: 36px;
  text-align: center;
}
.test-but2 {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 180px;
  width: 120px;
  height: 36px;
  margin: auto;
  line-height: 36px;
  text-align: center;
}

.input-input {
  border: 1px solid #c5cddb;
  width: 358px;
  border-radius: 2px;
  height: 44px;
  line-height: 44px;
  background: #fff;
  font-size: 14px;
  padding: 0px 10px;
}
.input-icon {
  position: absolute;
  font-size: 18px;
  margin: -42px 0px 0px 608px;
  -webkit-user-select:none;
   -moz-user-select:none;
   -ms-user-select:none;
   user-select:none;
}
.input-icon:hover {
  color: #409eff;
  cursor: pointer;
}

.input-input:hover {
  border: 1px solid #409eff;
}
.input-input:focus {
  border: 1px solid #409eff;
}
.el-icon-view {
  font-size: 18px;
}
.verification {
  width: 242px !important;
}
.get-button-con {
  height: 44px;
  width: 112px;
}
.wait-button-con {
  height: 44px;
  width: 112px;
}
.com-upload {
  padding: 0px 200px;
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



