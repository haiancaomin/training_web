<template>
  <div id="PersonalCenterChangeMobile">
    <div class="crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">客户中心</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalPassword' }">账户信息</el-breadcrumb-item>
        <el-breadcrumb-item>修改电话</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="change-mobile-form" v-if="changeMobileStatus == '0'">
      <el-form :model="ruleForm" ref="ruleForm" :rules="rules" class="demo-ruleForm">
        <el-form-item prop="mobile">
          <div class="input-body" id="loginForm">
            <el-input type="text" placeholder="请输入新手机号" v-model="ruleForm.mobile" id="newMobile1">
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
               accept=".jpg,.png"
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
            <el-button type="primary" @click="submitUpload('ruleForm')" class="login-self">提交申请</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>

    <div class="haveSubmit" v-if="changeMobileStatus == '1'">
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

    <div class="changeMobileFailed" v-if="changeMobileStatus == '2'">
      <p>
        <i class="iconfont">&#xe7bd;</i>抱歉，您提交的材料认证失败了
      </p>
      <el-button type="primary" @click="changeMobileAgain">重新认证</el-button>
    </div>

    <div class="changeMobileSuccess" v-if="changeMobileStatus == '3'">
      <p>
        <i class="iconfont" id="happy">&#xe60b;</i>您的公司联系电话已修改完成！
      </p>
      <el-button type="primary" @click="changeMobileAgain">知道了</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalCenterChangeMobile",
  data() {
    return {
      ruleForm: {
        mobile: ""
      },
      rules: {
        mobile: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            message: "请输入正确的手机号",
            pattern: /^1[34578]\d{9}$/,
            trigger: "blur"
          }
        ]
      },
      changeMobileStatus: "",
      countFocus: 0,
      contact: false,
      fileUid: ""
    };
  },
  computed: {
    uploadUrl: function() {
      return this.baseURL + "/zjsxpt/attachment_upload.do";
    }
  },
  methods: {
    checkSize(file) {
      if (file.size / 1024 > 1024) {
        this.$message({
          message: "文件不能大于1MB！",
          center: true
        });
        return false;
      } else if(file.name.split(".")[file.name.split(".").length-1] != "jpg"&&file.name.split(".")[file.name.split(".").length-1] != "png") {
        this.$message({
          message: "只能上传jpg/png文件",
          center: true
        });
        return false;
      }
    },
    changeMobileAgain() {
      var userInfo = JSON.parse(sessionStorage.getItem("user"));
      if (userInfo) {
        var userid = userInfo.userid;
      }
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/invoice_resetPhoneStatus.do?userid=${userid}`
      })
        .then(res => {
          if (res.data.data) {
            this.changeMobileStatus = "0";
          } else {
            this.$message({
              message: "获取客户信息失败或网络异常！",
              center: true
            });
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    uploadSuccess(response, file, fileList) {
      this.fileUid += response.data + ",";
     
    },
    removeUpload(file, fileList) {
      if (file.response) {
        this.splitFileUid(file.response.data);
      }
    },
    noticeOut(files, fileList) {
      this.$message({
        message: "最多上传两个文件！",
        center: true
      });
    },
    splitFileUid(uid) {
      if (this.fileUid.split(uid + ",")[0] != "") {
        this.fileUid = this.fileUid.split(uid + ",")[0];
      } else {
        this.fileUid = this.fileUid.split(uid + ",")[1];
      }
    },
    submitUpload(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$refs.upload.submit();
          if (this.fileUid == "") {
            this.$message({
              message: "请上传文件！",
              center: true
            });
          } else {
            var userInfo = JSON.parse(sessionStorage.getItem("user"));
            if (userInfo) {
              var userid = userInfo.userid;
            }
            this.$ajax({
              method: "post",
              url: `${
                this.baseURL
              }/zjsxpt/invoice_updatePhone.do?userid=${userid}&newphone=${
                this.ruleForm.mobile
              }&attachmentids=${this.fileUid}`
            })
              .then(res => {
                this.$message({
                  message: "上传成功！",
                  center: true
                });
                this.changeMobileStatus = 1;
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
    }
  },
  mounted() {
    var userInfo = JSON.parse(sessionStorage.getItem("user"));
    if (userInfo) {
      var userid = userInfo.userid;
    }
    this.$ajax({
      method: "get",
      url: `${
        this.baseURL
      }/zjsxpt/invoice_findPhoneStatusById.do?userid=${userid}`
    })
      .then(res => {
        this.changeMobileStatus = res.data.data;
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  updated: function() {
    this.countFocus++;
    if (this.changeMobileStatus == 0 && this.countFocus < 2) {
      document.getElementById("newMobile1").focus();
    }
  }
};
</script>

<style scoped>
#PersonalCenterChangeMobile {
  width: 730px;

  box-shadow: 0 0 2px #c7c5c5;
  background: #fffffd;
  border: 1px solid #e7e7e7;
  margin: 0px 0px 0px 20px;
  padding: 0px 0px 20px 0px;
}
.crumb {
  padding: 10px 0px 10px 0px;
  font-size: 20px;
  text-align: left;
  margin: 20px 20px 30px 20px;
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
.input-input {
  border: 1px solid #c5cddb;
  width: 358px;
  border-radius: 2px;
  height: 44px;
  line-height: 44px;
  background: #fff;
  font-size: 14px;
  padding: 0px 10px 0px 40px;
}
.input-input:hover {
  border: 1px solid #409eff;
}
.input-input:focus {
  border: 1px solid #409eff;
}
.input-icon1 {
  position: absolute;
  font-size: 18px;
  margin: 1px 0px 0px 12px;
}
.change-mobile-form {
  padding: 0px 179px 0px 190px;
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
.el-input {
  width: 360px;
}
.haveSubmit {
  margin: 100px 0px 0px 150px;
}
.operation {
  margin: 70px 0px 20px 148px;
}
#contact {
  text-align: center;
}
.changeMobileFailed {
  text-align: center;
  margin: 120px 0px 0px 0px;
}
.changeMobileFailed > p {
  font-size: 20px;
  color: #f56c6c;
  margin: 0px 0px 40px 0px;
}
.changeMobileSuccess {
  text-align: center;
  margin: 120px 0px 0px 0px;
}
.changeMobileSuccess > p {
  font-size: 24px;
  color: #67c23a;
  margin: 0px 0px 40px 0px;
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
</style>




