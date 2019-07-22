<template>
  <div id="PersonalCenterCertificate">
    <el-dialog title="证书预览" :visible.sync="showCertificateDialog" width="1000px" center>
      <div class="certificate">
        <iframe
            align="middle"
            frameborder="0"
            height="800"
            scrolling="no"
            width="800"
            :src="pictueUrl"
          ></iframe>
      </div>
    </el-dialog>
    <div class="crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">客户中心</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/PersonalCenter/PersonalCenterCertificate' }">证书查询</el-breadcrumb-item>
        <el-breadcrumb-item>实训证书</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="fifter_term_show">
      <el-form :model="ruleForm" ref="ruleForm" :rules="rules" class="demo-ruleForm">
        <div class="select_course">
        <el-form-item prop="course1">
          <el-select
            v-model="ruleForm.course1"
            placeholder="选择课程"
            @change="getTimeList1(ruleForm.course1)"
          >
            <el-option
              v-for="item in courseList"
              :key="item.courseid"
              :label="item.coursename"
              :value="item.courseid"
            ></el-option>
            <i slot="prefix" class="iconfont">&#xe60a;</i>
          </el-select>
        </el-form-item>
        </div>

        <div class="select_batch">
        <el-form-item prop="time1">
          <el-select placeholder="选择批次（先选择课程）" :disabled="true" v-if="ruleForm.course1==''" value>
            <i slot="prefix" class="iconfont">&#xe6e0;</i>
          </el-select>
          <el-select v-model="ruleForm.time1" placeholder="请选择批次" v-if="!ruleForm.course1==''">
            <el-option
              v-for="item in selectTimeData1"
              :key="item.timeid"
              :label="item.traintime"
              :value="item.timeid"
            ></el-option>
            <i slot="prefix" class="iconfont">&#xe6e0;</i>
          </el-select>
        </el-form-item>
        </div>

        <div class="select_submit">
        <el-form-item>
          <div class="nextPage1">
            <el-button type="primary" @click="submitForm1('ruleForm')">筛选</el-button>
          </div>
        </el-form-item>
        </div>
      </el-form>
    </div>
    <el-form :model="ruleForm1" ref="ruleForm1">
      <el-form-item prop="keyWord">
        <el-input placeholder="输入身份证号/姓名搜索" id="searchInput" v-model="searchKey"/>
        <el-button
          type="primary"
          class="search-btn"
          @click.prevent="submitForm('ruleForm1',searchKey)"
        >搜索</el-button>
      </el-form-item>
    </el-form>
    <div class="get-certificate-list">
      <el-table :data="tableData" max-height="450"  v-loading="loading" stripe border
        :highlight-current-row="true">
        <el-table-column label="序号" type="index" width="50"></el-table-column>
        <el-table-column prop="cardno" label="身份证号" width="170"></el-table-column>
        <el-table-column prop="empname" label="姓名" width="120"></el-table-column>
        <el-table-column prop="coursename" label="通过课程" width="340"></el-table-column>
        <el-table-column prop="ispass" label="是否通过" width="100"></el-table-column>
        <el-table-column prop="batchStr" label="批次" width="200"></el-table-column>
        <el-table-column fixed="right" label="实训证书" width="90">
          <template slot-scope="scope">
            <el-button
              type="primary"
              prop="zsid"
              size="mini"
              @click="showCertificate(scope.row.zsid)"
              class="search-btn2"
            >查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="searchAll_div" v-if="need_search_all">
        <el-button type="primary" @click="getCertificateList" class="searchAll_btn">查看全部</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalCenterCertificate",
  data() {
    return {
      showCertificateDialog: false,
      pictueUrl: "",
      searchKey: "",
      ruleForm1: {
        keyWord: ""
      },
      tableData: [],
      loading: true,
      coursename:"",
      batchStr:"",
      need_search_all: false,
      ruleForm: {
        course1: "",
        time1: ""
      },
      courseList:[],
      selectTimeData1:[]
      // courseType:[]
    };
  },
  methods: {
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
      this.coursename = ""
      this.batchStr = "";
      
      this.ruleForm.course1 = "";
      this.ruleForm.time1 = "";
      
      this.searchKey = searchKey;
      this.getCertificateList();
    },
    getCertificateList() {
      this.loading = true;
      var userInfo = JSON.parse(sessionStorage.getItem("user"));
      if (userInfo) {
        var userid = userInfo.userid;
      }
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/invoice_findCertificateList.do?userid=${userid}&coursename=${
          this.coursename
        }&batch=${this.batchStr}&value=${this.searchKey}`
      })
      
        .then(res => {
          
          this.tableData = res.data.data;
          this.loading = false;
          if (
            this.coursename == "" &&
            this.batchStr == "" &&
            this.searchKey == ""
          ) {
            this.need_search_all = false;
          } else {
            this.need_search_all = true;
          }
          this.coursename = "";
          this.batchStr = "";
          this.searchKey = "";
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getCertificateListFromInfo(empid) {
      this.loading = true;
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/employee_getZsInfoByEid.do?employeeId=${empid}&type=2`
      })
        .then(res => {
          this.tableData = res.data.data;
          console.log(this.tableData);
          this.loading = false;
          this.need_search_all = true;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getCourseList() {
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/course_getCourseList.do`
      })
        .then(res => {
          this.courseList = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getTimeList1(course) {
      this.ruleForm.time1="";
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_getTrainTimeList.do?courseid=${course}`
      })
        .then(res => {
          this.selectTimeData1 = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    submitForm1(formName) {
      if(this.ruleForm.course1 != "" && this.ruleForm.course1 != null && this.ruleForm.course1 != undefined) {
        this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/course_getCourseById.do?courseid=${
          this.ruleForm.course1
        }`
      })
        .then(res => {
          this.coursename = res.data.data.coursename;
          this.batchStr = this.ruleForm.time1;
      this.getCertificateList();
        })
        .catch(function(err) {
          console.log(err);
        });
      } else {
        this.coursename = "";
          this.batchStr = "";
      this.getCertificateList();
      }
      
      
    },
  },
  mounted() {
    if (this.global.editEmpId == "") {
      this.getCertificateList();
    } else {
      this.getCertificateListFromInfo(this.global.editEmpId);
    }
    this.global.setGlobalEmpId("");
    this.getCourseList();


    document.getElementById("searchInput").focus();
  }
};
</script>

<style scoped>
#PersonalCenterCertificate {
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
.get-certificate-list {
  padding: 0px 20px;
}
.certificate {
  margin: 0px auto;
 
  width: 800px;
  border: 1px solid #e4e7ed;
}
.el-input {
  width: 250px;
  margin: 0px 0px 0px 604px;
}
.search-btn2 {
  padding: 8px 10px;
}
.searchAll_btn {
  padding: 10px;
}
.searchAll_div {
  text-align: center;
  margin-top: 20px;
}
.select_course {
  position: absolute;
  margin:0px 0px 0px 481px;
}
.select_course .el-select{
  width:150px;
}
.select_batch {
  position: absolute;
  margin:0px 0px 0px 635px;
}
.select_submit {
  position: absolute;
  margin:0px 0px 0px 858px;
}
.fifter_term_show {
  height: 50px;
}

@font-face {
  font-family: 'iconfont';  /* project id 1131189 */
  src: url('//at.alicdn.com/t/font_1131189_4d5jvooav36.eot');
  src: url('//at.alicdn.com/t/font_1131189_4d5jvooav36.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1131189_4d5jvooav36.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1131189_4d5jvooav36.woff') format('woff'),
  url('//at.alicdn.com/t/font_1131189_4d5jvooav36.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1131189_4d5jvooav36.svg#iconfont') format('svg');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 18px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  line-height: 40px;
  margin: 0px 0px 0px 2px;
}
</style>
<style>
.cell {
  text-align: center;
}
</style>