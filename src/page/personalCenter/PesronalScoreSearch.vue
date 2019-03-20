<template>
  <div id="PesronalScoreSearch">
    <div class="order-dialog">
      <el-dialog title="查询结果" :visible.sync="dialogVisible" width="800px">
        <div class="PesronalScoreSearch-result">
          <el-table :data="tableData" height="400" border style="width: 100%">
            <el-table-column prop="name" label="姓名" width="100"></el-table-column>
            <el-table-column prop="id" label="身份证号" width="180"></el-table-column>
            <el-table-column prop="subject" label="科目" width="80"></el-table-column>
            <el-table-column prop="testDate" label="考试日期"></el-table-column>
            <el-table-column prop="score" label="分数" width="60"></el-table-column>
            <el-table-column prop="passFlag" label="是否及格" width="100"></el-table-column>
          </el-table>
          <el-button type="primary" class="pull-out">导出结果</el-button>
        </div>
      </el-dialog>
    </div>

    <div class="crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">客户中心</el-breadcrumb-item>
        <el-breadcrumb-item>成绩查询</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="PesronalScoreSearch-info">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="条件1">
          <el-select v-model="form.region" placeholder="请选择条件1">
            <el-option label="条件1-1" value="shanghai"></el-option>
            <el-option label="条件1-2" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="条件2">
          <el-select v-model="form.region" placeholder="请选择条件2">
            <el-option label="条件2-1" value="shanghai"></el-option>
            <el-option label="条件2-2" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="条件3">
          <el-select v-model="form.region" placeholder="请选择条件3">
            <el-option label="条件3-1" value="shanghai"></el-option>
            <el-option label="条件3-2" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <div class="PesronalScoreSearch-search">
          <el-form-item>
            <el-button type="primary" @click="dialogVisible = true">查询</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "PesronalScoreSearch",
  data() {
    return {
      dialogVisible: false,
      tableData: [
        {
          name: "老王",
          id: "320999888877656765",
          subject: "灌浆工",
          testDate: "2019-03-05",
          score: "99",
          passFlag: "是"
        },
        {
          name: "老王",
          id: "320999888877656765",
          subject: "灌浆工",
          testDate: "2019-03-05",
          score: "99",
          passFlag: "是"
        },
        {
          name: "老王",
          id: "320999888877656765",
          subject: "灌浆工",
          testDate: "2019-03-05",
          score: "99",
          passFlag: "是"
        },
        {
          name: "老王",
          id: "320999888877656765",
          subject: "灌浆工",
          testDate: "2019-03-05",
          score: "99",
          passFlag: "是"
        },
        {
          name: "老王",
          id: "320999888877656765",
          subject: "灌浆工",
          testDate: "2019-03-05",
          score: "99",
          passFlag: "是"
        },
        {
          name: "老王",
          id: "320999888877656765",
          subject: "灌浆工",
          testDate: "2019-03-05",
          score: "99",
          passFlag: "是"
        },
        {
          name: "老王",
          id: "320999888877656765",
          subject: "灌浆工",
          testDate: "2019-03-05",
          score: "99",
          passFlag: "是"
        },
        {
          name: "老王",
          id: "320999888877656765",
          subject: "灌浆工",
          testDate: "2019-03-05",
          score: "99",
          passFlag: "是"
        },
        {
          name: "老王",
          id: "320999888877656765",
          subject: "灌浆工",
          testDate: "2019-03-05",
          score: "99",
          passFlag: "是"
        },
        {
          name: "老王",
          id: "320999888877656765",
          subject: "灌浆工",
          testDate: "2019-03-05",
          score: "99",
          passFlag: "是"
        },
        {
          name: "老王",
          id: "320999888877656765",
          subject: "灌浆工",
          testDate: "2019-03-05",
          score: "99",
          passFlag: "是"
        },
        {
          name: "老王",
          id: "320999888877656765",
          subject: "灌浆工",
          testDate: "2019-03-05",
          score: "99",
          passFlag: "是"
        }
      ],

      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {}
};
</script>

<style scoped>
#PesronalScoreSearch {
  width: 830px;
  
  box-shadow: 0 0 2px #c7c5c5;
  background: #fffffd;
  border: 1px solid #e7e7e7;
  margin: 0px 0px 0px 20px;
  padding: 0px 0px 20px 0px;
}
.PesronalScoreSearch-info {
  margin: 30px 0px 0px 170px;
}
.PesronalScoreSearch-search {
  margin: 0px 0px 0px 60px;
}
.PesronalScoreSearch-result {
}
.el-table th > .cell {
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
.order-dialog {
  text-align: center;
}
.pull-out {
  margin: 20px 0px 0px 0px;
}
</style>


