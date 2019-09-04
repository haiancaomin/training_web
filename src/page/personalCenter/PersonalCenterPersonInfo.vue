<template>
  <div id="PersonalCenterPersonInfo">
    <el-dialog
      title="学员照片添加/更换"
      :visible.sync="addEmpImgShow"
      width="600px"
      class="addEmpImg_dialog"
      center
    >
      <div class="notice_detail1">照片要求：2寸照片（长宽比 7：5 ），白底，正装。</div>
      <div class="notice_detail1">细节要求：图片 72 DPI，文件大小 1MB 以内。</div>
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
          :limit="1"
          multiple
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            请上传
            <em>两寸照片</em>
          </div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过1MB</div>
        </el-upload>
      </div>
      <div class="emp_add_img_operation">
        <el-button type="primary" @click="submitEmpImg" class="submit_emp_img">上传</el-button>
        <el-button type="primary" plain @click="addEmpImgShow=false" class="cancel_emp_img">取消</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="deleteCheckDialog" width="300px" class="deleteCheck_dialog">
      <p>确认删除吗？</p>
      <div class="delete_check_operation">
        <el-button type="primary" @click="deletePerson">确认</el-button>
        <el-button type="primary" plain @click="deleteCheckDialog=false">取消</el-button>
      </div>
    </el-dialog>
    <el-dialog title="人员信息修改" :visible.sync="showEditDia" width="600px" center>
      <div class="edit-body">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm"
          id="editForm"
        >
          <el-form-item prop="empname">
            <el-input v-model="ruleForm.empname" placeholder="请输入姓名" class="person-add-input">
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
            <el-input
              v-model.number="ruleForm.age"
              placeholder="请输入年龄"
              class="person-add-input"
              type="number"
            >
              <i slot="prefix" class="iconfont" id="iconAge">&#xe73b;</i>
            </el-input>
          </el-form-item>

          <el-form-item prop="worktype">
            <el-select v-model="ruleForm.worktype" placeholder="请输入工种" class="person-add-select">
              <el-option label="施工员（测量员）" value="施工员（测量员）"></el-option>
              <el-option label="质量员" value="质量员"></el-option>
              <el-option label="安全员" value="安全员"></el-option>
              <el-option label="标准员" value="标准员"></el-option>
              <el-option label="材料员" value="材料员"></el-option>
              <el-option label="机械员" value="机械员"></el-option>
              <el-option label="劳务员(预算员)" value="劳务员(预算员)"></el-option>
              <el-option label="资料员" value="资料员"></el-option>
              <el-option label="项目经理" value="项目经理"></el-option>
              <el-option label="其它" value="其它"></el-option>
              <i slot="prefix" class="iconfont" id="iconWorktype">&#xe626;</i>
            </el-select>
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
            <div class="sign-submit">
              <el-button type="primary" @click="submitNewInfo('ruleForm')" class="operation-btn">确认</el-button>
              <el-button type="primary" @click="showEditDia=false" class="operation-btn">取消</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
    <div class="crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">客户中心</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">公司人员</el-breadcrumb-item>
        <el-breadcrumb-item>人员信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-form :model="ruleForm1" ref="ruleForm1">
      <el-form-item prop="keyWord">
        <el-input placeholder="输入关键字搜索" id="searchInput" v-model="searchKey" />
        <el-button type="primary" class="search-btn" @click.prevent="submitForm('ruleForm1')">搜索</el-button>
      </el-form-item>
    </el-form>

    <div class="add_notice">学员的2寸照片请尽量上传，在学员通过考试后，我们需要使用学员照片制证。感谢您的配合！</div>
    <el-table
      :data="tableData"
      border
      max-height="450"
      stripe
      v-loading="loading"
      id="personal_info_el_table"
    >
      <el-table-column label="序号" type="index" width="50"></el-table-column>
      <el-table-column prop="picurl" label="2寸照片" width="120">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="mini"
            v-if="scope.row.picurl==''"
            class="dflag_true"
            @click="addEmpImg(scope.row.empid)"
          >添加照片</el-button>
          <img
            :src="scope.row.picurl"
            v-else
            class="emp_picture"
            @click="addEmpImg(scope.row.empid)"
          />
        </template>
      </el-table-column>
      <el-table-column prop="empname" label="姓名" width="80"></el-table-column>
      <el-table-column prop="cardno" label="身份证号" width="180"></el-table-column>
      <el-table-column prop="examno" label="结业证明" width="120">
        <template slot-scope="scope">
          <el-button
            type="primary"
            plain
            size="mini"
            v-if="scope.row.dflag"
            class="dflag_true"
            @click="gotoPersonalCenterjieye(scope.row.empid)"
          >结业证明</el-button>
          <el-tag type="info" disable-transitions v-else>暂无证明</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="examno" label="实训证书" width="120">
        <template slot-scope="scope">
          <el-button
            type="success"
            plain
            size="mini"
            v-if="scope.row.cflag"
            class="cflag_true"
            @click="PersonalCenterCertificate(scope.row.empid)"
          >实训证书</el-button>
          <el-tag type="info" disable-transitions v-else>暂无证书</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="sex" label="性别" width="50">
        <template slot-scope="scope">
          <i v-if="scope.row.sex==0">男</i>
          <i v-if="scope.row.sex==1">女</i>
        </template>
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="50"></el-table-column>
      <el-table-column prop="worktype" label="工种" width="80"></el-table-column>

      <el-table-column prop="phone" label="手机" width="120"></el-table-column>
      <el-table-column prop="address" label="工作地" width="120"></el-table-column>
      <el-table-column prop="education" label="学历" width="120"></el-table-column>
      <el-table-column prop="create_date" label="录入时间" sortable width="160"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="editPerson(scope.row.empid)">编辑</el-button>
          <el-button
            type="text"
            size="small"
            prop="empid"
            @click="deletePersonClick(scope.row.empid)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "PersonalCenterPersonInfo",
  data() {
    return {
      loading: true,
      showEditDia: false,
      deleteCheckDialog: false,
      searchKey: "",
      addEmpImgShow: false,
      addEmpImgEmpID: "",
      fileUid: "",
      ruleForm1: {
        keyWord: ""
      },
      ruleForm: {
        empid: "",
        empname: "",
        sex: "",
        age: 0,
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
        worktype: [{ required: true, message: "请选择工种", trigger: "blur" }],
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
            pattern: /^1[3456789]\d{9}$/,
            trigger: "blur"
          }
        ],
        address: [
          { required: true, message: "请输入工作地", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 1 到 20个字符", trigger: "blur" }
        ]
      },
      tableData: []
    };
  },
  computed: {
    uploadUrl: function() {
      return this.baseURL + "/zjsxpt/attachment_uploadFileForPhoto.do";
    }
  },
  watch: {
    addEmpImgShow: function(val) {
      if (!val) {
        this.$refs.upload.clearFiles("upload");
        this.addEmpImgEmpID="";
      this.fileUid="";
      }
    }
  },
  methods: {
    submitEmpImg() {
      if (this.fileUid == "") {
        this.$message({
          message: "请上传文件！",
          type: "error",
          center: true
        });
      } else if (this.fileUid.split(",").length != 2) {
        this.$message({
          message: "请上传文件！",
          type: "error",
          center: true
        });
      } else {
        this.$ajax({
          method: "post",
          url: `${this.baseURL}/zjsxpt/employee_bindPersonPhotoById.do?empid=${
            this.addEmpImgEmpID
          }&fileid=${this.fileUid.split(",")[0]}`
        })
          .then(res => {
            this.$message({
              message: "上传成功！",
              type: "success",
              center: true
            });
            this.getPersonInfo();
            this.addEmpImgShow = false;
          })
          .catch(function(err) {
            console.log(err);
          });
      }
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
        message: "最多上传一个文件！",
        type: "error",
        center: true
      });
    },
    addEmpImg(empid) {
      this.addEmpImgShow = true;
      this.addEmpImgEmpID = empid;
    },
    PersonalCenterCertificate(empid) {
      this.global.setGlobalEmpId(empid);
      this.$router.push({ path: `/PersonalCenter/PersonalCenterCertificate` });
    },
    gotoPersonalCenterjieye(empid) {
      this.global.setGlobalEmpId(empid);
      this.$router.push({ path: `/PersonalCenter/PersonalCenterjieye` });
    },
    editPerson(empid) {
      this.showEditDia = true;
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/employee_getEmployeeById.do?employeeId=${empid}`
      })
        .then(res => {
          this.ruleForm.empid = res.data.data.empid;
          this.ruleForm.empname = res.data.data.empname;
          this.ruleForm.sex = res.data.data.sex;
          this.ruleForm.age = Number(res.data.data.age);
          this.ruleForm.worktype = res.data.data.worktype;
          this.ruleForm.education = res.data.data.education;
          this.ruleForm.cardno = res.data.data.cardno;
          this.ruleForm.phone = res.data.data.phone;
          this.ruleForm.address = res.data.data.address;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    submitNewInfo(formName) {
      var userInfo = JSON.parse(sessionStorage.getItem("user"));
      if (userInfo) {
        var userid = userInfo.userid;
      }
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$ajax({
            method: "post",
            url: `${this.baseURL}/zjsxpt/employee_updateEmployee.do?employee={empid:'${this.ruleForm.empid}',empname:'${this.ruleForm.empname}',sex:${this.ruleForm.sex},age:'${this.ruleForm.age}',worktype:'${this.ruleForm.worktype}',education:'${this.ruleForm.education}',cardno:'${this.ruleForm.cardno}',phone:'${this.ruleForm.phone}',address:'${this.ruleForm.address}'}&userid=${userid}`
          })
            .then(res => {
              if (res.data.data == 0) {
                this.getPersonInfo();
                this.$message({
                  message: "修改成功！",
                  type: "success",
                  center: true
                });
                this.showEditDia = false;
              } else if (res.data.data == 2) {
                this.$message({
                  message: "该身份证的员工已在本平台录入！",
                  type: "error",
                  center: true
                });
              } else if (res.data.data == 1) {
                this.$message({
                  message: "修改异常！",
                  type: "error",
                  center: true
                });
              } else if (res.data.data == 3) {
                alert(
                  "该身份证号已存在于系统中，您可以通过添加学员来添加该学员！"
                );
              }
            })
            .catch(function(err) {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    deletePersonClick(empid) {
      this.deleteEmPID = empid;
      this.deleteCheckDialog = true;
    },
    deletePerson() {
      this.$ajax({
        method: "post",
        url: `${this.baseURL}/zjsxpt/employee_deleteEmployeeById.do?employeeId=${this.deleteEmPID}`
      })
        .then(res => {
          this.$message({
            message: "删除成功！",
            type: "success",
            center: true
          });
          this.deleteCheckDialog = false;
          this.getPersonInfo();
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getPersonInfo() {
      var userInfo = JSON.parse(sessionStorage.getItem("user"));
      if (userInfo) {
        var userid = userInfo.userid;
      }
      this.$ajax({
        method: "post",
        url: `${this.baseURL}/zjsxpt/employee_findEmployeeList.do?keyword=&userid=${userid}`
      })
        .then(res => {
          this.tableData = res.data.data;
          this.loading = false;
          console.log("success");
        })
        .catch(function(err) {
          console.log(err);
        });
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
            url: `${this.baseURL}/zjsxpt/employee_findEmployeeList.do?keyword=${this.searchKey}&userid=${userid}`
          })
            .then(res => {
              this.tableData = res.data.data;
              console.log("success");
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
  mounted() {
    this.getPersonInfo();
    document.getElementById("searchInput").focus();
  }
};
</script>

<style scoped>
#PersonalCenterPersonInfo {
  width: 950px;
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
  margin: 20px;
  border-left: 2px solid #409eff;
  line-height: 40px;
  padding-left: 15px;
  background: #e4e7ed;
}
.el-breadcrumb {
  background: #e4e7ed;
}
.el-table {
  margin: 20px;
}
.el-input {
  width: 250px;
  margin: 0px 0px 0px 602px;
}
.search-btn {
  margin: 0px 0px 0px 0px;
}
#editForm .el-input {
  width: 358px;
  margin: 0px;
}
#editForm .el-select {
  width: 358px;
  margin: 0px;
}
#editForm {
  text-align: center;
}
.operation-btn {
  width: 100px;
  margin: 0px 30px;
}
.edit-body {
  margin: 0 auto;
  width: 358px;
}
.deleteCheck_dialog {
  text-align: center;
}
.delete_check_operation {
  margin-top: 40px;
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
  line-height: 44px;
  margin: 0px 0px 0px 2px;
}
.can_Operation {
  cursor: pointer;
}
.dflag_true,
.cflag_true {
  padding: 9px 10px;
}
#personal_info_el_table {
  width: 907px;
}
.emp_picture {
  width: 75px;
  height: 105px;
  cursor: pointer;
}
.com-upload {
  margin-top:30px;
  text-align: center;
}
.emp_add_img_operation {
  width: 100%;
  margin-top: 30px;
}
.submit_emp_img {
  margin-left: 150px;
}
.cancel_emp_img {
  margin-left: 100px;
}
.notice_detail1 {
  font-size: 13px;
  color:#F56C6C;
  padding-left:90px;
  line-height: 20px;
}
.add_notice {
  padding-left:20px;
  font-size:13px;
  color:#F56C6C;
  font-weight: bold;
}
</style>
<style>
#editForm .person-add-input .el-input__inner {
  height: 44px;
}
#editForm .person-add-select .el-input__inner {
  height: 44px;
}
.cell {
  text-align: center;
}
</style>