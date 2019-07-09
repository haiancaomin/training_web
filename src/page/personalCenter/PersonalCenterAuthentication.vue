<template>
  <div id="PersonalCenterAuthentication">
    <el-tabs type="border-card" @tab-click='tabSwitch'>
      <el-tab-pane label="企业认证">
        <div class="PersonalPassword-change" v-if="authenticationStatus == '0'">
          <P class="authentication_notice">完成公司认证后，您可以在招聘功能上线后发布招聘信息，其它功能也尽请期待。</P>
          <el-form :model="ruleForm" ref="ruleForm" :rules="rules" class="demo-ruleForm">
            <el-form-item prop="companyName">
              <div class="input-body" id="loginForm">
                <el-input
                  type="text"
                  placeholder="请输入公司名称"
                  v-model="ruleForm.companyName"
                  class="companyNameFocus"
                >
                  <i slot="prefix" class="el-icon-edit-outline"></i>
                </el-input>
              </div>
            </el-form-item>

            <el-form-item>
              <div class="com-upload">
                <el-upload
                  class="upload-demo"
                  ref="upload"
                  drag
                  :action="uploadUrl"
                  :on-success="uploadSuccess"
                  :on-remove="removeUpload"
                  :on-exceed="noticeOut"
                  :before-upload="checkSize"
                  accept=".jpg, .png"
                  :limit="2"
                  multiple
                >
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">
                    请上传
                    <em>法人身份照扫描件</em>和
                    <em>营业执照扫描件</em>
                  </div>
                  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过1MB</div>
                </el-upload>
              </div>
            </el-form-item>

            <div class="PersonalPassword-change-commit">
              <el-form-item>
                <el-button type="primary" @click="submitUpload('ruleForm')" class="login-self">立即认证</el-button>
              </el-form-item>
            </div>
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="校园认证">
        <div class="PersonalPassword-change" v-if="authenticationStatus == '0'">
          <P class="authentication_notice">完成校园认证后，您可以在招聘功能上线后发布招聘信息，其它功能也尽请期待。</P>
          <el-form :model="ruleForm3" ref="ruleForm3" :rules="rules3" class="demo-ruleForm">
            <el-form-item prop="companyName">
              <div class="input-body" id="loginForm">
                <el-input
                  type="text"
                  placeholder="请输入学校名称"
                  v-model="ruleForm3.companyName"
                  class="companyNameFocus"
                >
                  <i slot="prefix" class="el-icon-edit-outline"></i>
                </el-input>
              </div>
            </el-form-item>

            <el-form-item>
              <div class="com-upload">
                <el-upload
                  class="upload-demo"
                  ref="upload"
                  drag
                  :action="uploadUrl"
                  :on-success="uploadSuccess"
                  :on-remove="removeUpload"
                  :on-exceed="noticeOut"
                  :before-upload="checkSize"
                  accept=".jpg, .png"
                  :limit="2"
                  multiple
                >
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">
                    请上传
                    <em>学生证</em>
                  </div>
                  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过1MB</div>
                </el-upload>
              </div>
            </el-form-item>

            <div class="PersonalPassword-change-commit">
              <el-form-item>
                <el-button type="primary" @click="submitUpload('ruleForm3')" class="login-self">立即认证</el-button>
              </el-form-item>
            </div>
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="个人认证">
        <div class="PersonalPassword-change" v-if="authenticationStatus == '0'">
          <P class="authentication_notice">完成个人认证后，您可以在招聘功能上线后发布招聘信息，其它功能也尽请期待。</P>
          <el-form :model="ruleForm2" ref="ruleForm2" :rules="rules2" class="demo-ruleForm">
            <el-form-item prop="companyName">
              <div class="input-body" id="loginForm">
                <el-input
                  type="text"
                  placeholder="请输入姓名"
                  v-model="ruleForm2.companyName"
                  class="companyNameFocus"
                >
                  <i slot="prefix" class="el-icon-edit-outline"></i>
                </el-input>
              </div>
            </el-form-item>

            <el-form-item>
              <div class="com-upload">
                <el-upload
                  class="upload-demo"
                  ref="upload"
                  drag
                  :action="uploadUrl"
                  :on-success="uploadSuccess"
                  :on-remove="removeUpload"
                  :on-exceed="noticeOut"
                  :before-upload="checkSize"
                  accept=".jpg, .png"
                  :limit="2"
                  multiple
                >
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">
                    请上传
                    <em>身份证照片</em>
                  </div>
                  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过1MB</div>
                </el-upload>
              </div>
            </el-form-item>

            <div class="PersonalPassword-change-commit">
              <el-form-item>
                <el-button type="primary" @click="submitUpload('ruleForm2')" class="login-self">立即认证</el-button>
              </el-form-item>
            </div>
          </el-form>
        </div>
      </el-tab-pane>
      
    </el-tabs>

    <div class="haveSubmit" v-if="authenticationStatus == '1'">
      <el-dialog title="联系方式" :visible.sync="contact" width="400px" id="contact">
        <p>电话：0513-81055866</p>
        <p>邮箱：MKT_Dept@zhjcx.cn</p>
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

    <div class="authenticationFailed" v-if="authenticationStatus == '2'">
      <p>
        <i class="iconfont">&#xe7bd;</i>抱歉，您提交的材料认证失败了
      </p>
      <el-button type="primary" @click="authenticationAgain">重新认证</el-button>
    </div>

    <div class="authenticationSuccess" v-if="authenticationStatus == '3'">
      <p>
        <i class="iconfont" id="happy">&#xe60b;</i>您的公司认证已完成！
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalCenterAuthentication",
  data() {
    return {
      type:1,
      contact: false,
      countFocus: 0,
      ruleForm: {
        companyName: ""
      },
      ruleForm2: {
        companyName: ""
      },
      ruleForm3: {
        companyName: ""
      },
      rules: {
        companyName: [
          { required: true, message: "请输入公司名称", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ]
      },
      rules2: {
        companyName: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ]
      },
      rules3: {
        companyName: [
          { required: true, message: "请输入学校名称", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ]
      },
      fileUid: "",
      authenticationStatus: ""
    };
  },
  computed: {
    uploadUrl: function() {
      return this.baseURL + "/zjsxpt/attachment_upload.do";
    }
  },
  methods: {
    tabSwitch:function(tab){
      this.type=tab.index+1
    },
    invoiceEmpty() {
      var userInfo = JSON.parse(sessionStorage.getItem("user"));
      if (userInfo) {
        var userid = userInfo.userid;
      }
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/invoice_getInvoiceByUserId.do?userid=${userid}`
      })
        .then(res => {
          var that = this;
          if (res.data.data) {
            console.log(res.data.data);
          } else {
            this.$message({
              message:
                "您还未填写开票信息，请在“客户中心——>发票管理”先完善开票信息！",
              type: "error",
              center: true,
              onClose: function() {
                that.$router.push({
                  path: "/PersonalCenter/PersonalCenterInvoiceShow"
                });
              }
            });
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    checkSize(file) {
      if (file.size / 1024 > 1024) {
        this.$message({
          message: "文件不能大于1MB！",
          type: "error",
          center: true
        });
        return false;
      } else if (
        file.name.split(".")[file.name.split(".").length - 1] != "jpg" &&
        file.name.split(".")[file.name.split(".").length - 1] != "png"
      ) {
        this.$message({
          message: "只能上传jpg/png文件",
          type: "error",
          center: true
        });
        return false;
      }
    },
    authenticationAgain() {
      var userInfo = JSON.parse(sessionStorage.getItem("user"));
      if (userInfo) {
        var userid = userInfo.userid;
      }
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/invoice_resetStatus.do?userid=${userid}`
      })
        .then(res => {
          if (res.data.data) {
            this.authenticationStatus = "0";
          } else {
            this.$message({
              message: "获取客户信息失败或网络异常！",
              type: "error",
              center: true
            });
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    submitUpload(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$refs.upload.submit();
          if (this.fileUid == "") {
            this.$message({
              message: "请上传文件！",
              type: "error",
              center: true
            });
          } else {
            var userInfo = JSON.parse(sessionStorage.getItem("user"));
            if (userInfo) {
              var userid = userInfo.userid;
            }
            this.$ajax({
              method: "post",
              url: `${this.baseURL}/zjsxpt/invoice_identifyCompany.do?companyname=${this.ruleForm.companyName}&attachmentids=${this.fileUid}&userid=${userid}&type=${this.type}`
            })
              .then(res => {
                this.$message({
                  message: "上传成功！",
                  type: "success",
                  center: true
                });
                this.authenticationStatus = 1;
              })
              .catch(function(err) {
                console.log(err);
              });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    splitFileUid(uid) {
      if (this.fileUid.split(uid + ",")[0] != "") {
        this.fileUid = this.fileUid.split(uid + ",")[0];
      } else {
        this.fileUid = this.fileUid.split(uid + ",")[1];
      }
    },
    uploadSuccess(response, file, fileList) {
      this.fileUid += response.data + ",";
      console.log(file);
      console.log(fileList);
    },
    removeUpload(file, fileList) {
      if (file.response) {
        this.splitFileUid(file.response.data);
      }
    },
    noticeOut(files, fileList) {
      this.$message({
        message: "最多上传两个文件！",
        type: "error",
        center: true
      });
    }
  },
  mounted() {
    this.invoiceEmpty();
    var userInfo = JSON.parse(sessionStorage.getItem("user"));
    if (userInfo) {
      var userid = userInfo.userid;
    }
    this.$ajax({
      method: "get",
      url: `${this.baseURL}/zjsxpt/invoice_findCompanyStatusById.do?userid=${userid}`
    })
      .then(res => {
        this.authenticationStatus = res.data.data;
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  // updated: function() {
  //   this.countFocus++;
  //   if (this.authenticationStatus == 0 && this.countFocus < 2) {
  //     document.querySelectorAll(".companyNameFocus").focus();
  //   }
  // }
};
</script>

<style scoped>
#PersonalCenterAuthentication {
  width: 730px;
  /* box-shadow: 0 0 2px #c7c5c5; */
  background: #fffffd;
  /* border: 1px solid #e7e7e7; */
  margin: 0px 0px 0px 20px;
  padding: 0px 0px 20px 0px;
}
.PersonalPassword-change {
  margin: 30px 179px 0px 190px;
}
.haveSubmit {
  margin: 100px 0px 0px 150px;
}
.PersonalPassword-change-commit {
  text-align: center;
  margin: 0px 0px 0px 0px;
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
  margin: 0px 0px 0px 80px;
}
.operation {
  margin: 70px 0px 20px 148px;
}
#contact {
  text-align: center;
}
.el-input {
  width: 360px;
}
.login-self {
  width: 360px;
  font-size: 16px;
  height: 44px;
}
.el-icon-edit-outline {
  line-height: 44px;
  margin: 0px 0px 0px 2px;
  font-size: 18px;
}
.authenticationFailed {
  text-align: center;
  margin: 120px 0px 0px 0px;
}
.authenticationFailed > p {
  font-size: 20px;
  color: #f56c6c;
  margin: 0px 0px 40px 0px;
}
.authenticationSuccess {
  text-align: center;
  margin: 150px 0px 0px 0px;
}
.authenticationSuccess > p {
  font-size: 24px;
  color: #67c23a;
}
#happy {
  font-size: 28px;
}
@font-face {
  font-family: "iconfont"; /* project id 1131189 */
  src: url("//at.alicdn.com/t/font_1131189_kt4thveua8j.eot");
  src: url("//at.alicdn.com/t/font_1131189_kt4thveua8j.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1131189_kt4thveua8j.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1131189_kt4thveua8j.woff") format("woff"),
    url("//at.alicdn.com/t/font_1131189_kt4thveua8j.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1131189_kt4thveua8j.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 22px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px 5px 0px 0px;
}
.authentication_notice {
  font-size: 12px;
  color: #f56c6c;
  margin: 0px 0px 20px 0px;
}
</style>
<style>
#loginForm .el-input__inner {
  height: 44px;
}
</style>