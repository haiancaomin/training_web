<template>
  <div id="PersonalCenterjieye">
    <el-dialog :visible.sync="showCertificateDialog" width="1000px">
      <div class="certificate">
        <img :src="pictueUrl" alt>
      </div>
    </el-dialog>
    <div class="crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">客户中心</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/PersonalCenter/PersonalCenterCertificate' }">证书查询</el-breadcrumb-item>
        <el-breadcrumb-item>结业证明</el-breadcrumb-item>
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
        <el-table-column prop="cardno" label="证书编号" width="170"></el-table-column>
        <el-table-column prop="empname" label="姓名" width="100"></el-table-column>
        <el-table-column prop="coursename" label="身份证号" width="300"></el-table-column>
        <el-table-column prop="ispass" label="课程" width="100" :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
      :filter-method="filterHandler" :filter-multiple="false"></el-table-column>
        <el-table-column prop="acceptdate" label="批次" width="180"></el-table-column>
        <el-table-column prop="acceptdate" label="获取时间" width="180"></el-table-column>
        <el-table-column fixed="right" label="证明预览" width="90">
          <template slot-scope="scope">
            <el-button
              type="primary"
              prop="zsid"
              @click="showCertificate(scope.row.zsid)"
              class="search-btn2"
            >证明预览</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalCenterjieye",
  data() {
    return {
      showCertificateDialog: false,
      pictueUrl: "",
      searchKey: "",
      ruleForm1: {
        keyWord: ""
      },
      tableData: []
      // courseType:[]
    };
  },
  methods: {
    // filterTag(value, row) {
    //     return row.tag === value;
    //   },
    showCertificate(zsid) {
      this.$ajax({
        method: "post",
        url: `${this.baseURL}/zjsxpt/invoice_getCertificateById.do?zsid=${zsid}`
      })
        .then(res => {
          if (res.data.data != false) {
            this.pictueUrl = res.data.data;
            this.showCertificateDialog = true;
          } else {
            this.$message({
              message: "接口异常！",
              type: "error",
              center: true
            });
          }
        })
        .catch(function(err) {
          console.log(err);
        });
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
          // for(var i=0;i<this.tableData.length;i++) {

          //   this.courseType.push(this.tableData[i].coursename);
          //   console.log(this.courseType);
          // }
          // var x = new Set(this.courseType);
          // console.log(x);
          // let zz = Array.from(x);
          // console.log(zz);
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getCertificateList("");
    document.getElementById("searchInput").focus();
  }
};
</script>

<style scoped>
#PersonalCenterjieye {
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
.certificate {
  margin: 0px auto;
  height: 1000px;
  width: 800px;
  border: 1px solid #e4e7ed;
}
.el-input {
  width: 250px;
  margin: 0px 0px 0px 382px;
}
.search-btn2 {
  width: 70px;
  text-align: center;
  height: 35px;
  padding: 0px;
}
</style>