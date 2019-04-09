<template>
  <div id="PersonalCenterCertificate">
      <el-dialog  :visible.sync="showCertificateDialog" width="1000px">
        <div class="print">
            <span class="el-icon-printer"></span>
            <span>打印</span>
        </div>
        <div class="certificate">
        </div>
        <div class="page">
        <el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
        </div>
      </el-dialog>
    <div class="crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">客户中心</el-breadcrumb-item>
        <el-breadcrumb-item>证书查询</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="get-certificate-list">
        <el-table
    ref="multipleTable"
    :data="tableData3"
    height="450"
    tooltip-effect="dark"
    style="width: 100%"
    >
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="id"
      label="身份证号"
      width="220">
      
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="course"
      label="课程"
       width="120"
      >
    </el-table-column>
    <el-table-column
      prop="date"
      label="获取时间"
      show-overflow-tooltip
     >
    </el-table-column>
  </el-table>
    </div>
   <div class="check">
        <el-button type="primary" @click="showCertificate">查询证书</el-button>
      </div>
  </div>
</template>

<script>
export default {
  name: "PersonalCenterCertificate",
  data() {
    return {
        showCertificateDialog:false,
      tableData3: [{
          id: '124141414124141',
          name: '王小虎',
          course: '资料员',
          date: '2016-05-03'
        },{
          id: '124141414124141',
          name: '王小虎',
          course: '资料员',
          date: '2016-05-03'
        },{
          id: '124141414124141',
          name: '王小虎',
          course: '资料员',
          date: '2016-05-03'
        },{
          id: '124141414124141',
          name: '王小虎',
          course: '资料员',
          date: '2016-05-03'
        },{
          id: '124141414124141',
          name: '王小虎',
          course: '资料员',
          date: '2016-05-03'
        },{
          id: '124141414124141',
          name: '王小虎',
          course: '资料员',
          date: '2016-05-03'
        },{
          id: '124141414124141',
          name: '王小虎',
          course: '资料员',
          date: '2016-05-03'
        },{
          id: '124141414124141',
          name: '王小虎',
          course: '资料员',
          date: '2016-05-03'
        },{
          id: '124141414124141',
          name: '王小虎',
          course: '资料员',
          date: '2016-05-03'
        }],
        multipleSelection: []
    };
  },
  methods: {
      showCertificate() {
          this.showCertificateDialog = true;
      }
  }
};
</script>

<style scoped>
#PersonalCenterCertificate {
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
.get-certificate-list {
    padding: 0px 20px;
}
.check {
    text-align: center;
    margin: 20px 0px 0px 0px;
}
.print {
    font-size: 18px;
    margin:0px 0px 20px 90px;
}
.print:hover {
    font-size: 18px;
    color:#409EFF;
    cursor: pointer;
}
.certificate {
    margin:0px auto;
    height:1000px;
    width:800px;
    border: 1px solid #e4e7ed;
}
.page {
   text-align: center;
   margin:20px 0px 0px 0px;
}
</style>


