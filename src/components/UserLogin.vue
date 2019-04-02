<template>
  <div class="User-Login">
    <el-dialog title="账号登录" :visible.sync="logshow" width="500px" @closed="closeDialog">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        
        class="demo-ruleForm"
      >
        <el-form-item  prop="name">
          <div class="input-body">
            <div class="input-icon1">
              <i class="iconfont">&#xe75f;</i>
            </div>
              <input :type="inputType" placeholder="请输入用户名" class="input-input" maxlength="12">
              
            </div>
        </el-form-item>
        <el-form-item  prop="password">
          <div class="input-body">
            <div class="input-icon2">
              <i class="iconfont" id="pwd-lock">&#xe62b;</i>
            </div>
              <input :type="inputType" placeholder="请输入密码" class="input-input" maxlength="12">
              <div class="input-icon" @click="changeType">
              <i class="el-icon-view" v-if="showNewPassword"></i>
              <i class="iconfont" v-if="!showNewPassword">&#xe723;</i>
            </div>
            </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" class="login-self">登&nbsp;&nbsp;&nbsp;&nbsp;录</el-button>
        </el-form-item>
      </el-form>
      <a class="forgetpwd" href="#">忘记密码？</a>
      <a class="register" href="javascript:;" @click="clickRegister">去注册
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
      inputType: 'password',
      iconColor: '',
      show: true,
      logshow: false,
      ruleForm: {
        name: "",
        password: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
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
      if(this.inputType == 'text') {
        this.inputType = 'password';
        this.showNewPassword =false;
        console.log(this.inputType)
      } else {
        this.inputType = 'text';
        this.showNewPassword =true;
        console.log(this.inputType)
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
          alert("submit!");
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
.input-input {
  border:1px solid #c5cddb;
  width: 358px;
border-radius: 2px;
height: 44px;
line-height: 44px;
background: #fff;
    font-size:14px;
    padding:0px 10px 0px 40px;
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
.input-icon1 {
  position: absolute;
  font-size: 18px;
  margin: 1px 0px 0px 14px;
}
.input-icon2 {
  position: absolute;
 
  margin: 2px 0px 0px 9px;
}
.el-icon-view {
  font-size:18px;
}
.input-icon:hover {
  color: #409EFF;
  cursor: pointer;
}

.input-input:hover {
  border:1px solid #409EFF;
}
.input-input:focus {
  border:1px solid #409EFF;
}
#pwd-lock {
  font-size: 28px;
  

}
.el-form {
  padding:0px 50px;
}
@font-face {
  font-family: 'iconfont';  /* project id 1121282 */
  src: url('//at.alicdn.com/t/font_1121282_d56wxpgz5d.eot');
  src: url('//at.alicdn.com/t/font_1121282_d56wxpgz5d.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1121282_d56wxpgz5d.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1121282_d56wxpgz5d.woff') format('woff'),
  url('//at.alicdn.com/t/font_1121282_d56wxpgz5d.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1121282_d56wxpgz5d.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:18px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;}
</style>

