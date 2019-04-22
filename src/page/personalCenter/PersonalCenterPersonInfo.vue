<template>
  <div id="PersonalCenterPersonInfo">
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

       <el-form-item  prop="age">
        <el-input v-model.number="ruleForm.age" placeholder="请输入年龄" class="person-add-input">
          <i slot="prefix" class="iconfont" id="iconAge">&#xe73b;</i>
        </el-input>
      </el-form-item>

       <el-form-item  prop="worktype" >
        <el-input v-model="ruleForm.worktype" placeholder="请输入工种" class="person-add-input">
          <i slot="prefix" class="iconfont" id="iconWorktype">&#xe626;</i>
        </el-input>
      </el-form-item>

       <el-form-item  prop="cardno" >
        <el-input v-model="ruleForm.cardno" placeholder="请输入身份证号" class="person-add-input">
          <i slot="prefix" class="iconfont" id="iconCardno">&#xe7de;</i>
        </el-input>
      </el-form-item>

       <el-form-item  prop="phone">
        <el-input v-model="ruleForm.phone" placeholder="请输入手机号码" class="person-add-input">
          <i slot="prefix" class="iconfont" id="iconPhone">&#xe745;</i>
        </el-input>
      </el-form-item>

       <el-form-item  prop="address" >
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
        <el-input placeholder="输入关键字搜索" id="searchInput" v-model="searchKey"/>
        <el-button type="primary" class="search-btn" @click.prevent="submitForm('ruleForm1')">搜索</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" border max-height="450" style="width: 700px">
      <el-table-column label="序号" type="index" width="50"></el-table-column>
      <el-table-column prop="create_date" label="录入时间" sortable width="160"></el-table-column>
      <el-table-column prop="empname" label="姓名" width="80"></el-table-column>
      <el-table-column prop="sex" label="性别" width="50">
        <template slot-scope="scope">
                <i v-if="scope.row.sex==0">男</i>
                <i v-if="scope.row.sex==1">女</i>
            </template>
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="50"></el-table-column>
      <el-table-column prop="worktype" label="工种" width="80"></el-table-column>
      <el-table-column prop="cardno" label="身份证号" width="180"></el-table-column>
      <el-table-column prop="phone" label="手机" width="120"></el-table-column>
      <el-table-column prop="address" label="工作地" width="120"></el-table-column>
      <el-table-column prop="examno" label="考试编号" width="120"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="editPerson(scope.row.empid)">编辑</el-button>
          <el-button type="text" size="small" prop="empid" @click="deletePerson(scope.row.empid)">删除</el-button>
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
      tableDataLength: 0,
      showEditDia: false,
      searchKey: "",
      ruleForm1: {
        keyWord: ""
      },
       ruleForm: {
        empid: "",
        empname: "",
        sex: "",
        age: 0,
        worktype: "",
        cardno: "",
        phone: "",
        address: "",
      },
      rules: {
        
        empname: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5个字符", trigger: "blur" }
        ],
       sex: [
          { required: true, message: "请选择性别", trigger: "blur" },
       ],
       age: [
          { required: true, message: '年龄不能为空' , trigger: "blur"},
       ],
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
      },
      tableData: [{}]
    };
  },
  methods: {
    editPerson(empid) {
      this.showEditDia=true;
       this.$ajax({
            method: "get",      
            url: `${this.baseURL}/zjsxpt/employee_getEmployeeById.do?employeeId=${empid}`
          })
            .then(res => {
              this.ruleForm.empid = res.data.data.empid;
              this.ruleForm.empname = res.data.data.empname;
              this.ruleForm.sex = res.data.data.sex
              this.ruleForm.age = Number(res.data.data.age)
              this.ruleForm.worktype = res.data.data.worktype
              this.ruleForm.cardno = res.data.data.cardno
              this.ruleForm.phone = res.data.data.phone
              this.ruleForm.address = res.data.data.address
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
            url: `${this.baseURL}/zjsxpt/employee_updateEmployee.do?employee={empid:'${this.ruleForm.empid}',empname:'${this.ruleForm.empname}',sex:${this.ruleForm.sex},age:'${this.ruleForm.age}',worktype:'${this.ruleForm.worktype}',cardno:'${this.ruleForm.cardno}',phone:'${this.ruleForm.phone}',address:'${this.ruleForm.address}'}&userid=${userid}`
          })
            .then(res => {
              this.showEditDia = false;
      this.getPersonInfo();
              this.$message({
                message: "修改成功！",
                center:true
              });         
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
    deletePerson(empid) {
     
      this.$ajax({
            method: "post",      
            url: `${this.baseURL}/zjsxpt/employee_deleteEmployeeById.do?employeeId=${empid}`
          })
            .then(res => {
              this.$message({
                message: "删除成功！",
                center:true
              });
              console.log("delete success!");
            })
            .catch(function(err) {
              console.log(err);
            });
      this.getPersonInfo();
    },
    getPersonInfo() {
      var userInfo = JSON.parse(sessionStorage.getItem("user"));
    if (userInfo) {
      var userid = userInfo.userid;
    }
    this.$ajax({
      method: "post",
      url: `${
        this.baseURL
      }/zjsxpt/employee_findEmployeeList.do?keyword=&userid=${userid}`
    })
      .then(res => {
        this.tableData = res.data.data;
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
            url: `${this.baseURL}/zjsxpt/employee_findEmployeeList.do?keyword=${
              this.searchKey
            }&userid=${userid}`
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
  }
};
</script>

<style scoped>
#PersonalCenterPersonInfo {
  width: 830px;

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
  margin: 0px 0px 0px 395px;
}
.search-btn {
  margin: 0px 0px 0px 0px;
}
#editForm .el-input {
  width: 358px;
  margin:0px;
}
#editForm .el-select {
  width: 358px;
  margin:0px;
}
#editForm {
  text-align: center;
}
.operation-btn {
  width: 100px;
  margin:0px 30px;;
}
.edit-body {
  margin:0 auto;
  width:358px;
}
@font-face {
  font-family: 'iconfont';  /* project id 1131189 */
  src: url('//at.alicdn.com/t/font_1131189_b13898ksm7.eot');
  src: url('//at.alicdn.com/t/font_1131189_b13898ksm7.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1131189_b13898ksm7.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1131189_b13898ksm7.woff') format('woff'),
  url('//at.alicdn.com/t/font_1131189_b13898ksm7.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1131189_b13898ksm7.svg#iconfont') format('svg');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 18px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  line-height: 44px;
  margin:0px 0px 0px 2px;
}
</style>
<style>
  .person-add-input .el-input__inner {
  height: 44px;
}
.person-add-select .el-input__inner {
  height: 44px;
}
</style>


