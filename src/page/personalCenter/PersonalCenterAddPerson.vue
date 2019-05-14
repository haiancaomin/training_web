<template>
  <div id="PersonalCenterAddPerson">
    <div class="crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">客户中心</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">公司人员</el-breadcrumb-item>
        <el-breadcrumb-item>人员信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="add-head">
      <span>您可以选择</span>
      <el-button type="primary" @click="addOne">逐个添加</el-button>
      <span>或者</span>
      <el-button type="success" @click="addBatch">批量添加</el-button>
    </div>

    <div v-if="oneAdd" class="form-body">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm" id="form_box">
        <el-form-item prop="empname">
          <el-input
            v-model="ruleForm.empname"
            placeholder="请输入姓名"
            class="person-add-input"
            id="empNameFocus"
          >
            <i slot="prefix" class="iconfont" id="iconName">&#xe614;</i>
          </el-input>
        </el-form-item>

        <el-form-item prop="sex">
          <el-select v-model="ruleForm.sex" placeholder="请选择性别" class="person-add-select">
            <el-option label="男" value="0"></el-option>
            <el-option label="女" value="1"></el-option>
            <i slot="prefix" class="iconfont" id="iconSex">&#xe65c;</i>
          </el-select>
        </el-form-item>

        <el-form-item prop="age">
          <el-input v-model.number="ruleForm.age" placeholder="请输入年龄" class="person-add-input">
            <i slot="prefix" class="iconfont" id="iconAge">&#xe73b;</i>
          </el-input>
        </el-form-item>

        <el-form-item prop="worktype">
          <el-input v-model="ruleForm.worktype" placeholder="请输入工种" class="person-add-input">
            <i slot="prefix" class="iconfont" id="iconWorktype">&#xe626;</i>
          </el-input>
        </el-form-item>

        <el-form-item prop="education">
          <el-select v-model="ruleForm.education" placeholder="请输入学历" class="person-add-select">
            <el-option label="小学及以下" value="小学及以下"></el-option>
            <el-option label="初中" value="初中"></el-option>
            <el-option label="中专" value="中专"></el-option>
            <el-option label="高中" value="高中"></el-option>
            <el-option label="大专" value="大专"></el-option>
            <el-option label="本科" value="本科"></el-option>
            <el-option label="硕士" value="硕士"></el-option>
            <el-option label="博士及以上" value="博士及以上"></el-option>
            <i slot="prefix" class="iconfont" id="iconSex">&#xe8c8;</i>
          </el-select>
        </el-form-item>

        <el-form-item prop="cardno">
          <el-input v-model="ruleForm.cardno" placeholder="请输入身份证号" class="person-add-input">
            <i slot="prefix" class="iconfont" id="iconCardno">&#xe7de;</i>
          </el-input>
        </el-form-item>

        <el-form-item prop="phone">
          <el-input v-model="ruleForm.phone" placeholder="请输入手机号码" class="person-add-input">
            <i slot="prefix" class="iconfont" id="iconPhone">&#xe745;</i>
          </el-input>
        </el-form-item>

        <el-form-item prop="address">
          <el-input v-model="ruleForm.address" placeholder="请输入工作地" class="person-add-input">
            <i slot="prefix" class="iconfont" id="iconAddress">&#xe601;</i>
          </el-input>
        </el-form-item>

        <el-form-item>
          <div class="worker-add">
            <el-button
              type="primary"
              @click="submitForm('ruleForm')"
              class="login-self"
            >添&nbsp;&nbsp;&nbsp;&nbsp;加</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div v-if="batchAdd" class="batch-add">
      <div class="batch-model">
        <a href="../../../static/employee.xlsx" class="batch-model-text">点击下载批量添加模板</a>
      </div>
      <div class="batch-file-upload">
        <el-upload
          class="upload-demo"
          drag
          ref="fileUpload"
          :action="uploadUrl"
          :on-success="uploadSuccess"
          :on-error="uploadError"
          :before-upload="checkSize"
          :limit="1"
          accept=".xlsx"
          multiple
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip" slot="tip">只能上传Excel文件，且不超过100kb</div>
        </el-upload>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalCenterAddPerson",
  data() {
    return {
      fileUid: "",
      oneAdd: false,
      batchAdd: false,
      countFocus: 0,
      ruleForm: {
        empname: "",
        sex: "",
        age: "",
        worktype: "",
        education: "",
        cardno: "",
        phone: "",
        address: ""
      },
      rules: {
        empname: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5个字符", trigger: "blur" }
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "blur" }],
        age: [{ required: true, message: "年龄不能为空", trigger: "blur" }],
        worktype: [
          { required: true, message: "请输入工种", trigger: "blur" },
          { min: 1, max: 5, message: "长度在 1 到 5个字符", trigger: "blur" }
        ],
        cardno: [
          { required: true, message: "请输入身份证号", trigger: "blur" },
          {
            message: "请输入正确的身份证号",
            pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
            trigger: "blur"
          }
        ],
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            message: "请输入正确的手机号",
            pattern: /^1[34578]\d{9}$/,
            trigger: "blur"
          }
        ],
        address: [
          { required: true, message: "请输入工作地", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 1 到 20个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    checkSize(file) {
      if (file.size / 1024 > 100) {
        return false;
        this.$message({
          message: "文件不能大于100kb！",
          center: true
        });
      }
    },
    uploadError(err, file, fileList) {
      this.$message({
        message: "请使用模板文件上传！",
        center: true
      });
    },
    uploadSuccess(response, file, fileList) {
      this.$message({
        message: "上传成功！人员信息已更新",
        center: true
      });
    },
    addOne() {
      this.oneAdd = true;
      this.batchAdd = false;
    },
    addBatch() {
      this.oneAdd = false;
      this.batchAdd = true;
    },
    submitForm(formName) {
      var userInfo = JSON.parse(sessionStorage.getItem("user"));
      if (userInfo) {
        var userid = userInfo.userid;
      }

      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$ajax({
            method: "post",
            url: `${
              this.baseURL
            }/zjsxpt/employee_saveEmployee.do?employee={empname:'${
              this.ruleForm.empname
            }',sex:${this.ruleForm.sex},age:'${this.ruleForm.age}',worktype:'${
              this.ruleForm.worktype
            }',cardno:'${this.ruleForm.cardno}',phone:'${
              this.ruleForm.phone
            }',address:'${this.ruleForm.address}',education:'${this.ruleForm.education}'}&userid=${userid}`
          })
            .then(res => {
              this.$message({
                message: "添加成功！",
                center: true
              });
              this.ruleForm = {};
              console.log(res);
            })
            .catch(function(err) {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  computed: {
    uploadUrl: function() {
      var userInfo = JSON.parse(sessionStorage.getItem("user"));
      if (userInfo) {
        var userid = userInfo.userid;
      }
      return (
        this.baseURL + "/zjsxpt/employee_batchAddEmployee.do?userid=" + userid
      );
    }
  },
  updated: function() {
    this.countFocus++;
    if (this.oneAdd && this.countFocus < 2) {
      document.getElementById("empNameFocus").focus();
    }
  },
  mounted: function() {
    this.oneAdd = true;
  }
};
</script>

<style scoped>
#PersonalCenterAddPerson {
  width: 730px;

  box-shadow: 0 0 2px #c7c5c5;
  background: #fffffd;
  border: 1px solid #e7e7e7;
  margin: 0px 0px 0px 20px;
  padding: 0px 0px 20px 0px;
}
#native .el-select {
  width: 119px;
  margin: 0px 100px 0px 0px;
}

#add-birthday {
  float: right;
  margin: -100px 0px 0px 0px;
}
#add-workspace {
  float: right;
  margin: -100px 0px 0px 0px;
}
#add-school {
  float: right;
  margin: -100px 0px 0px 0px;
}
#add-workType {
  float: right;
  margin: -100px 0px 0px 0px;
}
#add-mail {
  float: right;
  margin: -100px 0px 0px 0px;
}
#add-qualification {
  float: right;
  margin: -100px 0px 0px 0px;
}
.el-input,
.el-select {
  width: 358px;
}

.el-form {
  margin: 30px 0px 0px 0px;
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
.worker-add {
  text-align: center;
}
.add-head {
  margin: 0px 0px 0px 20px;
}
.batch-model-text {
  color: #409eff;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
}
.batch-model {
  margin: 30px 0px 0px 0px;
  text-align: center;
}
.batch-file-upload {
  margin: 20px 0px;
  text-align: center;
  padding: 0px 180px;
}
.batch-submit {
  margin: 0px 0px 20px 0px;
  text-align: center;
}
#iconAge,
#iconWorktype,
#iconName,
#iconCardno,
#iconPhone,
#iconAddress,
#iconSex {
  margin: 0px 0px 0px 2px;
  line-height: 44px;
}
.login-self {
  width: 358px;
  font-size: 18px;
  height: 44px;
}
.form-body {
  width: 358px;
  margin: 0px auto;
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
}
</style>
<style>
#form_box .person-add-input .el-input__inner {
  height: 44px;
}
#form_box .person-add-select .el-input__inner {
  height: 44px;
}
</style>
</style>


