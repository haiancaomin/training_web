<template>
  <div id="Forget">
    <h1 class="file-title">忘记密码</h1>
    <div class="form_outline_body">
      <div class="PersonalPassword-change">
        <el-form
          :model="ruleForm"
          ref="ruleForm"
          :rules="rules"
          class="demo-ruleForm"
          id="loginForm"
        >
          <el-form-item prop="newPassword">
            <el-input
              type="password"
              placeholder="请输入密码"
              v-model="ruleForm.newPassword"
              id="newPassword1"
            >
              <i slot="prefix" class="iconfont">&#xe7c9;</i>
            </el-input>
          </el-form-item>

          <el-form-item prop="reNewPassword">
            <el-input type="password" placeholder="请再次输入密码" v-model="ruleForm.reNewPassword">
              <i slot="prefix" class="iconfont">&#xe7c9;</i>
            </el-input>
          </el-form-item>

          <el-form-item prop="phone">
            <el-input placeholder="请输入注册手机号" v-model="ruleForm.phone">
              <i slot="prefix" class="iconfont">&#xe745;</i>
            </el-input>
          </el-form-item>

          <el-form-item prop="verificationCode">
            <el-input
              placeholder="请输入短信验证码"
              v-model="ruleForm.verificationCode"
              maxlength="12"
              class="verification"
            ></el-input>
            <el-button
              type="primary"
              plain
              class="get-button-con"
              v-if="show"
              @click="getCode('ruleForm')"
            >获取验证码</el-button>
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
              <el-button type="primary" class="login-self" @click="submitForm('ruleForm')">确认更改</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value !== this.ruleForm.newPassword) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      show: true,
      count: "",
      timer: null,
      ruleForm: {
        newPassword: "",
        reNewPassword: "",
        phone: "",
        verificationCode: ""
      },
      rules: {
        newPassword: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            pattern: /^(\w){6,12}$/,
            message: "只能输入6-12个字母、数字、下划线",
            trigger: "blur"
          }
        ],
        reNewPassword: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
          {
            validator: validatePass,
            trigger: "blur"
          }
        ],
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            message: "请输入正确的手机号",
            pattern: /^1[3456789]\d{9}$/,
            trigger: "blur"
          }
        ],
        verificationCode: [
          { required: true, message: "请输入短信验证码", trigger: "blur" },
          { min: 6, max: 6, message: "验证码错误", trigger: "blur" }
        ]
      }
    };
  },
  mounted() {
    document.getElementById("newPassword1").focus();
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$ajax({
            method: "get",
            url: `${this.baseURL}/zjsxpt/login_modifyPwd.do?phone=${
              this.ruleForm.phone
            }&newpassword=${this.ruleForm.newPassword}&code=${
              this.ruleForm.verificationCode
            }`
          })
            .then(res => {
              if (res.data.data == 0) {
                this.$message({
                  message: "修改成功！",
                  type: "success",
                  center: true
                });
                this.$router.push({ path: `/index` });
                document.getElementById('loginBtn').click();
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
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    getCode(formName) {
      this.$refs[formName].validateField("phone", error => {
        if (!error) {
          this.$ajax({
            method: "get",
            url: `${this.baseURL}/zjsxpt/login_getPwdCode.do?phone=${
              this.ruleForm.phone
            }`
          })
            .then(res => {
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
        } else {
          return false;
        }
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
  margin-top: 80px;
}
.file-title {
  font-size: 18px;
  line-height: 40px;
  border: 1px solid #e4e7ed;
  background: #e4e7ed;
  padding: 0 15px;
  border-radius: 3px;
  border-left: 2px solid #409eff;
  margin: 20px 0px 0px 0px;
}
.PersonalPassword-change {
  text-align: center;
  margin: 0px 288px;
  margin-top: 30px;
}
.form_outline_body {
  margin: 0px auto;
}
.wait-button-con {
  display: inline-block;
  height: 44px;
  width: 112px;
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