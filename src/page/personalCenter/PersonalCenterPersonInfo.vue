<template>
  <div id="PersonalCenterPersonInfo">

    <div class="crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">客户中心</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">公司人员</el-breadcrumb-item>
        <el-breadcrumb-item>人员信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-form :model="ruleForm" ref="ruleForm">
      <el-form-item prop="keyWord">
        <el-input placeholder="输入关键字搜索" id="searchInput" v-model="searchKey"/>
        <el-button type="primary" class="search-btn" @click="submitForm('ruleForm')">搜索</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" border max-height="450" style="width: 700px">
      <el-table-column label="序号" type="index" width="50"></el-table-column>
      <el-table-column prop="create_date" label="录入时间" sortable width="110"></el-table-column>
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
          <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
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
      searchKey: "",
      ruleForm: {
        keyWord: ""
      },
      tableData: [{}]
    };
  },
  methods: {
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
    handleClick(row) {
      console.log(row);
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
</style>


