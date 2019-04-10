<template>
  <div id="PersonalCenterCertificate">
    <el-dialog :visible.sync="showCertificateDialog" width="1000px">
      <div class="print">
        <span class="el-icon-printer"></span>
        <span>打印</span>
      </div>
      <div class="certificate"></div>
      <div class="page">
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
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
        :data="tableData3"
        height="450"
       
        style="width: 700px"
      >
       
        <el-table-column prop="id" label="序号" width="50"></el-table-column>
        <el-table-column prop="idCard" label="身份证号" width="170"></el-table-column>
        <el-table-column prop="name" label="姓名" width="100"></el-table-column>
        <el-table-column prop="course" label="通过课程" width="100"></el-table-column>
        <el-table-column prop="ifPass" label="是否通过" width="100"></el-table-column>
        <el-table-column prop="date" label="获取时间" width="120"></el-table-column>
        <el-table-column fixed="right" label="证书查询" width="120">
          <el-button type="primary" @click="showCertificate">查询证书</el-button>
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
      tableData3: [
        {
          id: "1",
          idCard: "878765456798763457",
          name: "诸葛孔明",
          course: "资料员",
          ifPass: "是",
          date: "2019-05-08"
        },
        {
          id: "2",
          idCard: "878765456798763457",
          name: "诸葛孔明",
          course: "资料员",
          ifPass: "是",
          date: "2019-05-08"
        },
        {
          id: "3",
          idCard: "878765456798763457",
          name: "诸葛孔明",
          course: "资料员",
          ifPass: "是",
          date: "2019-05-08"
        },
        {
          id: "4",
          idCard: "878765456798763457",
          name: "诸葛孔明",
          course: "资料员",
          ifPass: "是",
          date: "2019-05-08"
        },
        {
          id: "5",
          idCard: "878765456798763457",
          name: "诸葛孔明",
          course: "资料员",
          ifPass: "是",
          date: "2019-05-08"
        },
        {
          id: "6",
          idCard: "878765456798763457",
          name: "诸葛孔明",
          course: "资料员",
          ifPass: "是",
          date: "2019-05-08"
        },
        {
          id: "7",
          idCard: "878765456798763457",
          name: "诸葛孔明",
          course: "资料员",
          ifPass: "是",
          date: "2019-05-08"
        },
        {
          id: "8",
          idCard: "878765456798763457",
          name: "诸葛孔明",
          course: "资料员",
          ifPass: "是",
          date: "2019-05-08"
        },
        {
          id: "9",
          idCard: "878765456798763457",
          name: "诸葛孔明",
          course: "资料员",
          ifPass: "是",
          date: "2019-05-08"
        },
        {
          id: "10",
          idCard: "878765456798763457",
          name: "诸葛孔明",
          course: "资料员",
          ifPass: "是",
          date: "2019-05-08"
        },
      ],
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
</style>


