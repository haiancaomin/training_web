<template>
  <div class="User-Register">
    <el-dialog
      title="账号注册"
      :visible.sync="regshow"
      width="500px"
      id="regDialog"
      @closed="closeDialog"
    >
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item prop="name">
          <el-input placeholder="请输入用户名" v-model="ruleForm.name">
            <i slot="prefix" class="iconfont">&#xe75f;</i>
          </el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input :type="inputType" placeholder="请输入密码" v-model="ruleForm.password">
            <i slot="prefix" class="iconfont pwd-lock">&#xe62b;</i>
          </el-input>
          <div class="input-icon" @click="changeType">
            <i class="el-icon-view" v-if="showNewPassword"></i>
            <i class="iconfont" v-if="!showNewPassword">&#xe723;</i>
          </div>
        </el-form-item>

        <el-form-item prop="password">
          <el-input :type="inputType" placeholder="请再次输入密码" v-model="ruleForm.password">
            <i slot="prefix" class="iconfont pwd-lock">&#xe62b;</i>
          </el-input>
          <div class="input-icon" @click="changeType">
            <i class="el-icon-view" v-if="showNewPassword"></i>
            <i class="iconfont" v-if="!showNewPassword">&#xe723;</i>
          </div>
        </el-form-item>

        <el-form-item prop="phone">
          <el-input placeholder="请输入手机号" v-model="ruleForm.phone">
            <i slot="prefix" class="iconfont">&#xe704;</i>
          </el-input>
        </el-form-item>
        <el-form-item prop="code" id="regVerification">
          <el-input placeholder="请输入短信新密码" id="identifying"></el-input>
          <el-button type="primary" plain class="get-button-con" v-if="show" @click="getCode">获取验证码</el-button>
          <el-button
            type="primary"
            plain
            disabled
            class="wait-button-con"
            v-if="!show"
          >{{count}} 秒后重发</el-button>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
            class="regist-self"
          >注&nbsp;&nbsp;&nbsp;&nbsp;册</el-button>
        </el-form-item>
      </el-form>
      <a class="register" href="#" @click="go">
        去登录
        <span class="el-icon-arrow-right"></span>
      </a>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNewPassword: false,
      inputType: "password",
      iconColor: "",
      show: true,
      count: "",
      regshow: false,
      ruleForm: {
        name: "",
        password:'',
        password2:'',
        phone:'',
        code:''
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入身份证号码", trigger: "blur" },
          { min: 18, max: 18, message: "请输入18位身份证号码", trigger: "blur" }
        ],
        
      }
    };
  },
  props: ["regDialogVisible"],
  watch: {
    regDialogVisible: function(val) {
      this.regshow = val;
    }
  },
  methods: {
    changeType() {
      if (this.inputType == "text") {
        this.inputType = "password";
        this.showNewPassword = false;
        console.log(this.inputType);
      } else {
        this.inputType = "text";
        this.showNewPassword = true;
        console.log(this.inputType);
      }
    },
    getCode() {
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
    },
    closeDialog: function() {
      this.$emit("regclosed", false);
    },
    go() {
      this.regshow = false;
      this.$emit("goToLog", true);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
  text-decoration: none;
}
.el-form {
  padding: 0px 50px;
}

.forgetpwd {
  color: darkgrey;
  font-size: 12px;
  padding: 0 40px 0 0;
  margin: 0 0 0 25px;
}
.register {
  font-size: 12px;
  margin: 0 0 0 300px;
}
.User-Register {
  white-space: nowrap;
}

.el-radio-group {
  padding: 0px 300px 0px 0px;
}
.User-Register {
  text-align: center;
}
.test-but {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 42px;
  width: 120px;
  height: 36px;
  margin: auto;
  line-height: 36px;
  text-align: center;
}

.input-icon {
  position: absolute;
  font-size: 18px;
  margin: -42px 0px 0px 320px;
}

.el-icon-view {
  font-size: 18px;
}
.input-icon:hover {
  color: #409eff;
  cursor: pointer;
}

.iconfont.pwd-lock {
  font-size: 28px;
}

.get-button-con {
  height: 44px;
  width: 112px;
}
.wait-button-con {
  height: 44px;
  width: 112px;
}
.regist-self {
  width: 358px;
  font-size: 18px;
  height: 44px;
}
#regDialog {
  text-align: center;
}
@font-face {
  font-family: "iconfont"; /* project id 1121282 */
  src: url("//at.alicdn.com/t/font_1121282_moohvn72vvf.eot");
  src: url("//at.alicdn.com/t/font_1121282_moohvn72vvf.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1121282_moohvn72vvf.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1121282_moohvn72vvf.woff") format("woff"),
    url("//at.alicdn.com/t/font_1121282_moohvn72vvf.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1121282_moohvn72vvf.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 18px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<style>
#regVerification .el-input__inner {
  width: 242px;
  padding: 0px 10px;
}
#regVerification .el-input {
  width: auto;
}
</style>



