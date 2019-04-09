<template>
  <div id="inspection">
    <el-col :span="24">
      <h1 class="inspection-label">高端考察</h1>
    </el-col>
    <el-col :span="24">
      <el-card shadow="hover">
        <img src="../../assets/inspection1.jpg" class="inspection-picture">
        <p class="inspection-title">2017年赴日装配式建筑技术高端专业考察</p>
        <p class="inspection-time">考察时间：2017 年 11 月 13‐19 日</p>
        <p class="inspection-end-time">报名截止时间：2017年10月13日</p>
        <el-button type="primary" @click="gotoDetail()" class="see-detail">查看详情</el-button>
      </el-card>

      <el-card shadow="hover">
        <img src="../../assets/inspection2.png" class="inspection-picture">
        <p class="inspection-title">2017冬赴新加坡装配式建筑技术 商务高端考察·交流</p>
        <p class="inspection-time">考察时间：2017 年 11 月 21‐24 日</p>
        <p class="inspection-end-time">报名截止时间：2017年10月10日</p>
        <el-button type="primary" @click="gotoDetail()" class="see-detail">查看详情</el-button>
      </el-card>
    </el-col>
    <el-col :span="24">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "Inspection",
  data() {
    return {};
  },

  methods: {
    gotoDetail() {
      this.$router.push("/InspectionDetail");
    }
  }
};
</script>

<style scoped>
#inspection {
  width: 1000px;
  height: 790px;
  margin: 80px auto;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fffffd;
  border: 1px solid #e7e7e7;
  padding: 20px 20px 0px 20px;
}
.el-card {
  height: 300px;
  margin: 0px 0px 10px 0px;
}
.inspection-picture {
  height: 257px;
  width: 330px;
}
.inspection-title {
  float: left;
  margin: -240px 0px 0px 450px;
  font-size: 18px;
  font-weight: bold;
}
.inspection-time {
  float: left;
  margin: -205px 0px 0px 450px;
  font-weight: 530;
}
.inspection-end-time {
  float: left;
  margin: -170px 0px 0px 450px;
  color: red;
  font-weight: bold;
}
.see-detail {
  float: left;
  margin: -60px 0px 0px 580px;
}
.el-pagination {
  text-align: center;
  margin: 30px 0px 0px 0px;
}
.inspection-label {
  font-size: 18px;
  line-height: 40px;
  border: 1px solid #e4e7ed;
  background: #e4e7ed;
  padding: 0 15px;
  border-radius: 3px;
  margin: 0px 0px 10px 0px;
  border-left: 2px solid #409eff;
}
</style>


