<template>
  <div id="PersonalCenterCertificate">
    <el-dialog :visible.sync="showCertificateDialog" width="1000px">
      <div class="print">
        <span class="el-icon-printer"></span>
        <span>打印</span>
      </div>
      <div class="certificate">
        <div>{{cardno}}</div>
        <div>{{name}}</div>
      </div>
      
    </el-dialog>
    <div class="crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">客户中心</el-breadcrumb-item>
        <el-breadcrumb-item>证书查询</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-form :model="ruleForm1" ref="ruleForm1">
      <el-form-item prop="keyWord">
        <el-input placeholder="输入身份证号搜索" id="searchInput" v-model="searchKey"/>
        <el-button
          type="primary"
          class="search-btn"
          @click.prevent="submitForm('ruleForm1',searchKey)"
        >搜索</el-button>
      </el-form-item>
    </el-form>
    <div class="get-certificate-list">
      <el-table :data="tableData" max-height="450" style="width: 700px">
        <el-table-column label="序号" type="index" width="50"></el-table-column>
        <el-table-column prop="cardno" label="身份证号" width="170"></el-table-column>
        <el-table-column prop="empname" label="姓名" width="100"></el-table-column>
        <el-table-column prop="coursename" label="通过课程" width="100"></el-table-column>
        <el-table-column prop="ispass" label="是否通过" width="100"></el-table-column>
        <el-table-column prop="acceptdate" label="获取时间" width="180"></el-table-column>
        <el-table-column fixed="right" label="证书查询" width="90">
          <template slot-scope="scope">
          <el-button type="primary" prop="zsid" @click="showCertificate(scope.row.zsid)" class="search-btn2">查询证书</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalCenterCertificate",
  data() {
    return {
      showCertificateDialog: false,
      cardno:"",
      name:"",
      searchKey: "",
      ruleForm1: {
        keyWord: ""
      },
      tableData: [{}],
      multipleSelection: []
    };
  },
  methods: {
    showCertificate(zsid) {
      this.$ajax({
        method: "post",
        url: `${
          this.baseURL
        }/zjsxpt/invoice_getCertificateById.do?zsid=${zsid}`
      })
        .then(res => {
          this.cardno = res.data.data[0];
          this.name = res.data.data[1];
          
        })
        .catch(function(err) {
          console.log(err);
        });
      this.showCertificateDialog = true;
    },
    submitForm(formName, searchKey) {
      this.getCertificateList(searchKey);
    },
    getCertificateList(searchKey) {
      var userInfo = JSON.parse(sessionStorage.getItem("user"));
      if (userInfo) {
        var userid = userInfo.userid;
      }
      this.$ajax({
        method: "post",
        url: `${
          this.baseURL
        }/zjsxpt/invoice_findCertificateList.do?userid=${userid}&cardno=${searchKey}`
      })
        .then(res => {
          this.tableData = res.data.data;
        
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getCertificateList("");
  }
};
</script>

<style scoped>
#PersonalCenterCertificate {
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
  margin: 20px;
  border-left: 2px solid #409eff;
  line-height: 40px;
  padding-left: 15px;
  background: #e4e7ed;
}
.el-breadcrumb {
  background: #e4e7ed;
}
.get-certificate-list {
  padding: 0px 20px;
}
.check {
  text-align: center;
  margin: 20px 0px 0px 0px;
}
.print {
  font-size: 18px;
  margin: 0px 0px 20px 90px;
}
.print:hover {
  font-size: 18px;
  color: #409eff;
  cursor: pointer;
}
.certificate {
  margin: 0px auto;
  height: 1000px;
  width: 800px;
  border: 1px solid #e4e7ed;
}
.page {
  text-align: center;
  margin: 20px 0px 0px 0px;
}
.el-input {
  width: 250px;
  margin: 0px 0px 0px 382px;
}
.search-btn2 {
  width:70px;
  text-align: center;
  height:35px;
  padding:0px;
}
</style>


