<template>
  <div id="PersonalCenterAuthentication">
    <div class="crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">客户中心</el-breadcrumb-item>
        <el-breadcrumb-item>企业认证</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="PersonalPassword-change" v-if="!haveSubmit">
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="信息1:  " prop="IDCardNuM">
          <el-input v-model="ruleForm.IDCardNuM"></el-input>
        </el-form-item>

        <el-form-item label="信息2:  " prop="workingSpace">
          <el-input v-model="ruleForm.workingSpace"></el-input>
        </el-form-item>

        <el-form-item label="信息3:  " prop="workingSpace">
          <el-input v-model="ruleForm.workingSpace"></el-input>
        </el-form-item>

        <el-form-item label="信息4:  " prop="workingSpace">
          <el-input v-model="ruleForm.workingSpace"></el-input>
        </el-form-item>

        <!-- <el-form-item label="手机号码:  " prop="mobile">
          <el-input v-model="ruleForm.mobile"></el-input>
        </el-form-item> -->
        
        <el-form-item>
          <div class="com-upload">
        <el-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">请上传公司认证文件，<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
          </div>
        </el-form-item>
        <div class="PersonalPassword-change-commit">
          <el-form-item>
            <el-button type="primary" @click="checkCompany">立即认证</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>

    <div class="haveSubmit" v-if="haveSubmit">

<el-dialog title="联系方式" :visible.sync="contact" width="400px" id="contact">
        <p>电话：845923412</p>
        <p>邮箱：231231332@dd.com</p>
      </el-dialog>

        <el-steps :space="200" :active="1" finish-status="success">
  <el-step title="提交材料"></el-step>
  <el-step title="人工审核" description="预计需要一个工作日"></el-step>
  <el-step title="完成"></el-step>
</el-steps>

<div class="operation">
        <el-button type="primary" round @click="contact = true">联系我们</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalCenterAuthentication",
  data() {
    return {
        contact: false,
      haveSubmit: false,
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
  methods: {
    checkCompany() {
        alert("信息提交成功，我们会在一个工作日内完成验证，您也可以联系我们，加速认证进度");
        this.haveSubmit = true;
    }
  }
};
</script>

<style scoped>

#PersonalCenterAuthentication {
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
  margin: 30px 0px 0px 150px;
 
}

.haveSubmit {
    margin: 100px 0px 0px 150px;
   
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
.operation {
    margin: 70px 0px 20px 148px;
}
#contact {
  text-align: center;
}
</style>








