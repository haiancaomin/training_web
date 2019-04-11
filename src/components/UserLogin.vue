<template>
  <div class="User-Login">
    <el-dialog title="账号登录" :visible.sync="logshow" width="500px" @closed="closeDialog">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm" id="loginForm">
        <el-form-item prop="name">
          <el-input placeholder="请输入用户名" v-model="ruleForm.name">
            <i slot="prefix" class="iconfont">&#xe75f;</i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input :type="inputType" placeholder="请输入密码" v-model="ruleForm.password">
            <i slot="prefix" class="iconfont" id="pwd-lock">&#xe62b;</i>
          </el-input>
          <div class="input-icon" @click="changeType">
            <i class="el-icon-view" v-if="showNewPassword"></i>
            <i class="iconfont" v-if="!showNewPassword">&#xe723;</i>
          </div>
          <!-- </div> -->
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
            class="login-self"
          >登&nbsp;&nbsp;&nbsp;&nbsp;录</el-button>
        </el-form-item>
      </el-form>
      <a class="forgetpwd" href="#">忘记密码？</a>
      <a class="register" href="javascript:;" @click="clickRegister">
        去注册
        <span class="el-icon-arrow-right"></span>
      </a>
    </el-dialog>
    
  </div>
</template>

<script>
import UserRegister from "@/components/UserRegister";
export default {
  data() {
    return {
      showNewPassword: false,
      inputType: "password",
      iconColor: "",
      show: true,
      logshow: false,
      ruleForm: {
        name: "",
        password: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "长度在 6 到 12 个字符", trigger: "blur" }
        ]
      }
    };
  },
  watch: {
    dialogVisible: function(val) {
      this.logshow = val;
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
    closeDialog: function() {
      this.$emit("closed", false);
    },
    clickRegister: function() {
      this.logshow = false;
      this.$emit("goToReg", true);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$ajax({
            method: "get",
            url: `${this.baseURL}/zjsxpt/login_Login.do?name=${
              this.ruleForm.name
            }&password=${this.ruleForm.password}`
          })
            .then(res => {
              this.$message('登陆成功')
              this.logshow=false
              this.$emit("logSuccess", {showUser:true,user:res.data.data.name});
              console.log(res);
            })
            .catch(function(err) {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  components: {
    UserRegister
  },
  props: ["dialogVisible"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
  text-decoration: none;
}

.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}

.bg-purple-light {
  background: #e5e9f2;
  padding: 20px 0px 20px 0px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.forgetpwd {
  color: darkgrey;
  font-size: 12px;

  margin: 0px 90px 0px 0px;
}
.register {
  font-size: 12px;
  margin: 0 0 0 120px;
}
.User-Login {
  text-align: center;
}

.login-self {
  width: 358px;
  font-size: 18px;
  height: 44px;
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

#pwd-lock {
  font-size: 28px;
}
.el-form {
  padding: 0px 50px;
}
@font-face {
  font-family: "iconfont";
  src: url("//at.alicdn.com/t/font_1121282_d56wxpgz5d.eot");
  src: url("//at.alicdn.com/t/font_1121282_d56wxpgz5d.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1121282_d56wxpgz5d.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1121282_d56wxpgz5d.woff") format("woff"),
    url("//at.alicdn.com/t/font_1121282_d56wxpgz5d.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1121282_d56wxpgz5d.svg#iconfont") format("svg");
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
#loginForm .el-input__inner {
  height: 44px;
}
</style>


