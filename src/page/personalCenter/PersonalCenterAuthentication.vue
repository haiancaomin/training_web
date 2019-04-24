<template>
  <div id="PersonalCenterAuthentication">
    <div class="crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">客户中心</el-breadcrumb-item>
        <el-breadcrumb-item>企业认证</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="PersonalPassword-change" v-if="!haveSubmit">
      <el-form :model="ruleForm" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="companyName">
          <div class="input-body" id="loginForm">
            <el-input type="text" placeholder="请输入公司名称" v-model="ruleForm.companyName">
              <i slot="prefix" class="el-icon-edit-outline"></i>
            </el-input>
          </div>
        </el-form-item>

        <el-form-item>
          <div class="com-upload">
            <el-upload class="upload-demo" ref="upload" drag :action="uploadUrl" 
            :on-success="uploadSuccess"
            :on-remove="removeUpload"
            :on-exceed="noticeOut"
            :limit="2"
            multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">
                请上传<em>法人身份照扫描件</em>和<em>营业执照扫描件</em>
              </div>
            </el-upload>

            
          </div>
        </el-form-item>

        <div class="PersonalPassword-change-commit">
          <el-form-item>
            <el-button type="primary" @click="submitUpload" class="login-self">立即认证</el-button>
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
        companyName: ""
      },
      fileUid: ""
    };
  },
  computed: {
    uploadUrl: function() {
      return this.baseURL + "/zjsxpt/attachment_upload.do";
    }
  },
  methods: {
    checkCompany() {
      alert(
        "信息提交成功，我们会在一个工作日内完成验证，您也可以联系我们，加速认证进度"
      );
      this.haveSubmit = true;
    },
    submitUpload() {
      this.$refs.upload.submit();
      if (this.fileUid == ''||this.ruleForm.companyName == '') {
        this.$message({
            message: "请上传完整信息！",
            center: true
          });
      } else {
        
        var userInfo = JSON.parse(sessionStorage.getItem("user"));
      if (userInfo) {
        var userid = userInfo.userid;
      }
      this.$ajax({
        method: "post",
        url: `${this.baseURL}/zjsxpt/invoice_identifyCompany.do?companyname=${
          this.ruleForm.companyName
        }&attachmentids=${this.fileUid}&userid=${userid}`
      })
        .then(res => {
          this.haveSubmit = true;
          this.$message({
            message: "上传成功！",
            center: true
          });
        })
        .catch(function(err) {
          console.log(err);
        });
      }
    },
    splitFileUid(uid) {
      if(this.fileUid.split(uid+",")[0] != '') {
        this.fileUid = this.fileUid.split(uid+",")[0];
      } else {
        this.fileUid = this.fileUid.split(uid+",")[1];
      }
      
     
    },
    uploadSuccess(response, file, fileList) {
      this.fileUid += response.data + ",";
      console.log(file);
      console.log(fileList);
    },
    removeUpload(file, fileList) {
      console.log(file.response.data);
      console.log(fileList);
      this.splitFileUid(file.response.data)
      alert(this.fileUid);
    },
    noticeOut(files, fileList) {
      this.$message({
            message: "最多上传两个文件！",
            center: true
          });
    }
  }
};
</script>

<style scoped>
#PersonalCenterAuthentication {
  width: 730px;
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
  margin: 30px 170px 0px 200px;
}

.haveSubmit {
  margin: 100px 0px 0px 150px;
}

.PersonalPassword-change-commit {
  text-align: center;
  margin: 0px 0px 0px 0px;
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

.el-upload__tip {
  margin: 0px 0px 0px 70px;
}
.operation {
  margin: 70px 0px 20px 148px;
}
#contact {
  text-align: center;
}
.input-icon1 {
  position: absolute;
  font-size: 18px;
  margin: 1px 0px 0px 12px;
}
.el-input {
  width: 358px;
}
.login-self {
  width: 358px;
  font-size: 16px;
  height: 44px;
}
.el-icon-edit-outline {
  line-height: 44px;
  margin: 0px 0px 0px 2px;
  font-size: 18px;
}
</style>
<style>
#loginForm .el-input__inner {
  height: 44px;
}
</style>








