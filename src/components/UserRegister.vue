<template>
  <div class="User-Register">
    <el-dialog title="账号注册" :visible.sync="regshow" width="480px" id="regDialog" @closed="closeDialog">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名: " prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
       
        <el-form-item label="密码:  " prop="IDCardNuM">
          <el-input v-model="ruleForm.IDCardNuM"></el-input>
        </el-form-item>
        
        <el-form-item label="确认密码:  " prop="workingSpace">
          <el-input v-model="ruleForm.workingSpace"></el-input>
        </el-form-item>
       
        <el-form-item label="手机号码:  " prop="mobile">
          <el-input v-model="ruleForm.mobile"></el-input>
        </el-form-item>
        <el-form-item label="验证码:  " prop="verification" id="regVerification"> 

          <el-input v-model="ruleForm.verification" class="identification-num"></el-input> 
          <button type="button" class="test-but">获取验证码</button>
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">注&nbsp;&nbsp;&nbsp;&nbsp;册</el-button>
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
      regshow:false,
      ruleForm: {
        name: "",
        IDCardNuM: "",
        sex: "",
        birthday: "",
        native: "",
        workingSpace: "",
        education: "",
        graduteSchool: "",
        position: "",
        workType: "",
        mobile: "",
        verification: "",
        mail: "",
        company: "",
        qualification: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        IDCardNuM: [
          { required: true, message: "请输入身份证号码", trigger: "blur" },
          { min: 18, max: 18, message: "请输入18位身份证号码", trigger: "blur" }
        ],
        sex: [{ required: true, message: "请输入性别", trigger: "blur" }],
        birthday: [{ required: true, message: "请输入生日", trigger: "blur" }],

        education: [{ required: true, message: "请输入密码", trigger: "blur" }],

        workType: [{ required: true, message: "请输入密码", trigger: "blur" }],
        mobile: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 11, max: 11, message: "请输入11位手机号", trigger: "blur" }
        ],
        verification: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 4, max: 4, message: "验证码不正确", trigger: "blur" }
        ],
        mail: [{ required: true, message: "请输入邮箱", trigger: "blur" }]
      }
    };
  },
  props:['regDialogVisible'],
  watch:{
    regDialogVisible:function(val){
      this.regshow=val
    }
  },
  methods: {
    closeDialog:function(){
      this.$emit('regclosed', false)
    },
    go() {
      this.regshow=false
      this.$emit('goToLog',true)
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
.el-input {
  width: 300px;
  margin: 0px 55px 0px 0px;
  display: block;
}

.el-select {
  width: 300px;
  margin: 0px 55px 0px 0px;
  display: block;
}

.el-date-picker {
  width: 80%;
  margin: 0px 55px 0px 0px;
}

.el-button {
  width: 300px;
  font-size: 18px;
  font-family: fantasy;
  font-weight: bold;
  margin: 0px 55px 0px 0px;
  display: block;
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
  padding: 0 40px 0 0;
  margin: 0 0 0 25px;
}
.register {
  font-size: 12px;
  padding: 0 0 0 300px;
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
</style>
<style>
  #regDialog .el-dialog__title {
  /* font-size: 25px ; */
  /* font-weight: bold; */
  /* color: royalblue; */
  /* text-align:center; */
}
</style>

