<template>
  <div class="User-Login">
    <el-dialog title="账号登录" :visible.sync="logshow" width="500px" @closed="closeDialog">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" id="loginForm">
        <el-form-item prop="name">
          <el-input placeholder="请输入用户名" v-model="ruleForm.name">
            <i slot="prefix" class="iconfont">&#xe614;</i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input :type="inputType" placeholder="请输入密码" v-model="ruleForm.password">
            <i slot="prefix" class="iconfont" >&#xe7c9;</i>
          </el-input>
          <div class="input-icon" @click="changeType">
            <i class="iconfont" v-if="showNewPassword">&#xe76c;</i>
            <i class="iconfont" v-if="!showNewPassword">&#xe604;</i>
          </div>
         
        </el-form-item>

        <el-form-item prop="inputVerificationCode" v-if="errorCount>2">
        <el-input placeholder="请输入验证码"  v-model="ruleForm.inputVerificationCode" class="identifying"></el-input>
        <div @click="createCode" class="verificationCode">
          <p><span :style="{'color': color1 }">{{code1}}</span><span :style="{'color': color2 }">{{code2}}</span><span :style="{'color': color3 }">{{code3}}</span><span :style="{'color': color4 }">{{code4}}</span></p>
        </div>
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
    var validatePass = (rule, value, callback) => {
      if (value !== this.checkCode) {
        callback(new Error("验证码错误！"));
      } else {
        callback();
      }
    };
    return {
      showNewPassword: false,
      inputType: "password",
      logshow: false,
      checkCode:"",
      code1:"",
      code2:"",
      code3:"",
      code4:"",
      color1:"",
      color2:"",
      color3:"",
      color4:"",
      errorCount:0,
      ruleForm: {
        name: "",
        password: "",
        inputVerificationCode:"",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "长度在 6 到 12 个字符", trigger: "blur" }
        ],
        inputVerificationCode: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            validator: validatePass,
            trigger: "blur"
          }
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
              this.$message({
                message: "登录成功！",
                center:true
              });
              sessionStorage.setItem('user',JSON.stringify(res.data.data))
              this.logshow=false
              this.$emit("logSuccess", {showUser:true,user:res.data.data.name});
            })
            .catch(function(err) {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          this.errorCount++;
          return false;
        }
      });
    },
    createCode(){
     var code = "";    
     var codeLength = 4; 
     var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',   
                 'S','T','U','V','W','X','Y','Z'); 
     for(var i = 0; i < codeLength; i++) { 
           var index = Math.floor(Math.random()*36);
           code += random[index]; 
     }   
     this.checkCode = code; 
     this.code1 = this.checkCode.substring(0,1);
     this.code2 = this.checkCode.substring(1,2);
     this.code3 = this.checkCode.substring(2,3);
     this.code4 = this.checkCode.substring(3,4);

     var random = new Array('#409EFF','#67C23A','#E6A23C','#F56C6C','#909399','#303133','#DCDFE6');
     var indexColor = Math.floor(Math.random()*7);
     this.color1 = random[indexColor];
     var indexColor = Math.floor(Math.random()*7);
     this.color2 = random[indexColor];
     var indexColor = Math.floor(Math.random()*7);
     this.color3 = random[indexColor];
     var indexColor = Math.floor(Math.random()*7);
     this.color4 = random[indexColor]; 
     
}
  },
  mounted() {
    this.createCode();
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

.el-form {
  padding: 0px 50px;
}
@font-face {
  font-family: 'iconfont';  /* project id 1131189 */
  src: url('//at.alicdn.com/t/font_1131189_b13898ksm7.eot');
  src: url('//at.alicdn.com/t/font_1131189_b13898ksm7.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1131189_b13898ksm7.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1131189_b13898ksm7.woff') format('woff'),
  url('//at.alicdn.com/t/font_1131189_b13898ksm7.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1131189_b13898ksm7.svg#iconfont') format('svg');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 18px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  line-height: 44px;
  margin:0px 0px 0px 2px;
}
.verificationCode {
  width:110px;
  height:44px;
  background:url(../assets/yzm.png) no-repeat;
   cursor: pointer;
   background-size:cover;
   position: absolute;
   margin: -44px 0px 0px 248px;
   border-radius: 4px;
}
.verificationCode>p {
  line-height: 44px;
  font-size: 28px;
  -webkit-user-select:none;
   -moz-user-select:none;
   -ms-user-select:none;
   user-select:none;
}
.identifying {
  width:230px;
   margin: 0px 0px 0px -129px;
}
</style>
<style>
#loginForm .el-input__inner {
  height: 44px;
}
</style>


