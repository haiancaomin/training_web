<template>
  <div id="PersonalPassword">
    <div class="crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">客户中心</el-breadcrumb-item>
        <el-breadcrumb-item>修改密码</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="PersonalPassword-change">
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="新密码:  " prop="IDCardNuM">
          <el-input v-model="ruleForm.IDCardNuM"></el-input>
        </el-form-item>

        <el-form-item label="确认新密码:  " prop="workingSpace">
          <el-input v-model="ruleForm.workingSpace"></el-input>
        </el-form-item>

        <!-- <el-form-item label="手机号码:  " prop="mobile">
          <el-input v-model="ruleForm.mobile"></el-input>
        </el-form-item> -->
        <el-form-item label="验证码:  " prop="verification" id="regVerification">
          <el-input v-model="ruleForm.verification" class="identification-num"></el-input>
          <button type="button" class="test-but">获取验证码</button>
        </el-form-item>
        <el-form-item>
          <div class="com-upload">
        <el-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">请上传公司认证，<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
          </div>
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
      }
    };
  },
  methods: {}
};
</script>

<style scoped>
#PersonalPassword {
  width: 830px;

  box-shadow: 0 0 2px #c7c5c5;
  background: #fffffd;
  border: 1px solid #e7e7e7;
  margin: 0px 0px 0px 20px;
  padding: 0px 0px 20px 0px;
}
.el-input {
  width: 300px;
}
.PersonalPassword-change {
  margin: 50px 0px 0px 150px;
}
.PersonalPassword-change-commit {
  text-align: center;
  margin: 0px 250px 0px 0px;
}
.test-but {
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
.com-upload {
 margin:0px 0px 0px -60px;;
}
.el-upload__tip {
  margin:0px 0px 0px 70px;
}
</style>


