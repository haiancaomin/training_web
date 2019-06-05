<template>
  <div id="PersonalCenterjieye">
    <el-dialog
      title="结业证明"
      :visible.sync="showCertificateDialog"
      width="840px"
      center
      id="jieye_dialog"
    >
      <div class="certificate">
        <div class="dialog_print" @click="printJieye">
          <el-tooltip class="item" effect="dark" content="打印结业证明" placement="right">
            <span class="el-icon-printer"></span>
          </el-tooltip>
        </div>
        <div id="certificate_div">
          <!-- <div class="dialog_batch">{{dialog_batch}}</div> -->
          <div class="dialog_cardno">ID Card:{{dialog_cardno}}</div>
          <div class="dialog_dno">No：{{dialog_dno}}</div>
          <div class="dialog_empname">{{dialog_empname}}</div>
          <div class="dialog_detail">
            <span class="gray_style">您于</span>
            2018年06月01日-2018年06月03日
            <span class="gray_style">参与了</span>
            {{dialog_coursename}}
            <span class="gray_style">培养项目，特此证明。期待您在为日来发展道路上有更好的表现！</span>
          </div>
          <div class="dialog_coursename">
            <span class="first_word">上</span>海市装配式建筑构件生产专项岗<span class="first_last">位</span>
            技术研修班——{{dialog_coursename}}
          </div>
          <div class="dialog_createdate">{{dialog_createdate}}</div>
          <img src="../../assets/jieye_img.png" alt class="jieye_img">
        </div>
      </div>
    </el-dialog>
    <div class="crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">客户中心</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/PersonalCenter/PersonalCenterCertificate' }">证书查询</el-breadcrumb-item>
        <el-breadcrumb-item>结业证明</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="fifter_term_show" v-if="resultCount>0">
      筛选条件:
      <div v-if="ispassTerm!=''">是否通过{{ispassTerm}}</div>
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
      <el-table
        :data="tableData"
        max-height="450"
        @filter-change="clearCount"
        v-loading="loading"
        stripe
        style="width: 700px"
        ref="ss"
      >
        <el-table-column label="序号" type="index" width="50"></el-table-column>
        <el-table-column prop="dno" label="证书编号" width="100"></el-table-column>
        <el-table-column prop="empname" label="姓名" width="100"></el-table-column>
        <el-table-column prop="cardno" label="身份证号" width="200"></el-table-column>
        <el-table-column prop="coursename" label="课程" width="320"
        :filters="couseTerm"
          :filter-method="filterTag"
          :filter-multiple="false"
          filter-placement="bottom"
        ></el-table-column>
        <el-table-column
          prop="ispass"
          label="是否通过"
          width="100"
          :filters="[{ text: '是', value: '是' }, { text: '否', value: '否' }]"
          :filter-method="filterTag"
          :filter-multiple="false"
          filter-placement="bottom"
        ></el-table-column>
        <el-table-column prop="batch" label="批次" width="180"></el-table-column>
        <el-table-column fixed="right" label="结业证明" width="90">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              prop="did"
              @click="showjieye(scope.row.did)"
              class="search-btn2"
            >查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="searchAll_div" v-if="need_search_all">
        <el-button type="primary" @click="getJieYeListBySearch" class="searchAll_btn">查看全部</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalCenterjieye",
  data() {
    return {
      showCertificateDialog: false,
      loading: true,
      pictueUrl: "",
      searchKey: "",
      coursename: "",
      need_search_all: "",
      batch: "",
      ispass: "",
      dialog_batch: "",
      dialog_cardno: "",
      dialog_dno: "",
      dialog_empname: "",
      dialog_coursename: "",
      dialog_createdate: "",
      count: 0,
      resultCount: 0,
      courseList: [],
      couseTerm: [],
      ispassTerm: "",
      checkIfAll: false,
      ruleForm1: {
        keyWord: ""
      },
      tableData: [],
      
     
    }
    
  },
   computed: {
    
  },
  methods: {
    
    getCourseList() {
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/course_getCourseList.do`
      })
        .then(res => {
          
          this.courseList = res.data.data;
          
          for (var i = 0; i < this.courseList.length; i++) {
            var courseFifter={};
            console.log(this.courseList[i].coursename);
            courseFifter.text = this.courseList[i].coursename;
            courseFifter.value = this.courseList[i].coursename;
            console.log(this.courseList[i].coursename);
            console.log(i);
            console.log(courseFifter);
            this.couseTerm.push(courseFifter);
            
          }
          
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    filterTag(value, row) {
      this.ispassTerm = value;
      if (row.ispass === value) {
        this.count++;
      } 
      this.checkIfAll = true;
      return row.ispass === value;
    },
    clearCount() {
      if (this.count == 0 && this.checkIfAll == true) {
        this.$notify({
          title: "无筛选结果",
          message: "筛选结果为空！",
          duration: 0,
          type: "error"
        });
        this.$refs.ss.clearFilter();
      }
      this.checkIfAll = false;
      this.resultCount = this.count;
      this.count = 0;
      
    },
    printJieye() {
      let subOutputRankPrint = document.getElementById("certificate_div");
      console.log(subOutputRankPrint.innerHTML);
      let newContent = subOutputRankPrint.innerHTML;
      let oldContent = document.body.innerHTML;
      document.body.innerHTML = newContent;
      window.print();
      window.location.reload();
      document.body.innerHTML = oldContent;
      return false;
    },
    showjieye(did) {
      console.log(did);
      this.$ajax({
        method: "post",
        url: `${this.baseURL}/zjsxpt/invoice_getHtDiplomaById.do?did=${did}`
      })
        .then(res => {
          if (res.data.data != false) {
            this.showCertificateDialog = true;
            this.dialog_batch = res.data.data.batch;
            this.dialog_cardno = res.data.data.cardno;
            this.dialog_dno = res.data.data.dno;
            this.dialog_empname = res.data.data.empname;
            this.dialog_coursename = res.data.data.coursename;
            this.dialog_createdate = res.data.data.createdate;
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
      this.searchKey = searchKey;
      this.getJieYeListBySearch();
    },
    getJieYeList(empid) {
      this.loading = true;
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/employee_getZsInfoByEid.do?employeeId=${empid}&type=1`
      })
        .then(res => {
          this.tableData = res.data.data;
          this.loading = false;
          this.need_search_all = true;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getJieYeListBySearch() {
      this.loading = true;
      var userInfo = JSON.parse(sessionStorage.getItem("user"));
      if (userInfo) {
        var userid = userInfo.userid;
      }
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/invoice_findDiplomaList.do?userid=${userid}&coursename=${
          this.coursename
        }&batch=${this.batch}&ispass=${this.ispass}&value=${this.searchKey}`
      })
        .then(res => {
          this.tableData = res.data.data;
          this.loading = false;
          if (
            this.coursename == "" &&
            this.batch == "" &&
            this.ispass == "" &&
            this.searchKey == ""
          ) {
            this.need_search_all = false;
          } else {
            this.need_search_all = true;
          }
          this.coursename = "";
          this.batch = "";
          this.ispass = "";
          this.searchKey = "";
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  mounted() {
    if (this.global.editEmpId == "") {
      this.getJieYeListBySearch();
    } else {
      this.getJieYeList(this.global.editEmpId);
    }
    this.global.setGlobalEmpId("");
    this.getCourseList();

    // for(var i=0;i<this.tableData.length;i++) {

    //   this.courseType.push(this.tableData[i].coursename);
    //   console.log(this.courseType);
    // }
    // var x = new Set(this.courseType);
    // console.log(x);
    // let zz = Array.from(x);
    // console.log(zz);
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
}
.el-input {
  width: 250px;
  margin: 0px 0px 0px 382px;
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
.jieye_img {
  width: 800px;
  height: 1100px;
}
.dialog_batch {
  position: absolute;
}
.dialog_cardno {
  width: 400px;
  text-align: center;
  position: absolute;
  margin: 635px 0px 0px 190px;
  color: #a6a8ab;
  font-family: "DFKai-SB";
  font-size: 15px;
}
.dialog_dno {
  position: absolute;
  margin: 100px 0px 0px 580px;
  color: #f8b62d;
  font-family: "DFKai-SB";
}
.dialog_empname {
  color: #040000;
  position: absolute;
  margin: 567px 0px 0px 195px;
  font-size: 40px;
  text-align: center;
  width: 400px;
  letter-spacing: 9px;
  font-family: "SimSun";
}
.dialog_coursename {
  position: absolute;
  width: 580px;
  margin: 220px 0px 0px 117px;
  letter-spacing: 9px;
  text-align: center;
  color: #040000;
  font-size: 24px;
  line-height: 33px;
  font-family: "Microsoft YaHei";
}
.dialog_coursename span {
  font-family: "Microsoft YaHei";
}
.dialog_detail {
  position: absolute;
  margin: 767px 0px 0px 140px;
  text-align: left;
  width: 520px;
  color: #040000;
  letter-spacing: 2.5px;
  font-family: "SimSun";
  line-height: 20px;
  font-weight: bold;
  font-size: 15px;
}
.gray_style {
  color: #a6a8ab;
  font-family: "SimSun";
  font-weight: bold;
  font-size: 15px;
}
.dialog_createdate {
  position: absolute;
  margin: 937px 0px 0px 535px;
  color: #040000;
  font-family: "DFKai-SB";
  font-size: 16px;
}
.dialog_print {
  font-size: 20px;
  cursor: pointer;
  margin: 0px 0px 0px 20px;
  font-weight: bold;
}
.dialog_print:hover {
  color: #409eff;
}
.first_word {
  margin-left: 10px;
}
.first_last {
  margin-right: 10px;
}
</style>
<style>
.cell {
  text-align: center;
}
#jieye_dialog .el-dialog__body {
  padding-top: 0px;
}
</style>