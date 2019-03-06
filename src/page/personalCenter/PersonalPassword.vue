<template>
  <div id="PersonalPassword">
    <div class="PersonalPassword-change">
        <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      > 
        <el-form-item label="新密码:  " prop="IDCardNuM">
          <el-input v-model="ruleForm.IDCardNuM"></el-input>
        </el-form-item>
        
        <el-form-item label="确认新密码:  " prop="workingSpace">
          <el-input v-model="ruleForm.workingSpace"></el-input>
        </el-form-item>
       
        <el-form-item label="手机号码:  " prop="mobile">
          <el-input v-model="ruleForm.mobile"></el-input>
        </el-form-item>
        <el-form-item label="验证码:  " prop="verification" id="regVerification"> 

          <el-input v-model="ruleForm.verification" class="identification-num"></el-input> 
          <button type="button" class="test-but">获取验证码</button>
        </el-form-item>
        
        <div class="PersonalPassword-change-commit">
        <el-form-item>
          <el-button type="primary">确认更改</el-button>
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
      
    };
  },
  methods: {
      
  },
 
};
</script>

<style scoped>
 .el-input {
     width: 300px;
 }
 .PersonalPassword-change {
     margin: 50px 0px 0px 100px;
 }
 .PersonalPassword-change-commit {
     text-align: center;
     margin: 0px 170px 0px 0px;
 }
 .test-but {
      position: absolute;
    top: 0;
    bottom: 0;
    right: 178px;
    width: 120px;
    height: 36px;
    margin: auto;
    line-height: 36px;
    text-align: center;
    
}
</style>


