<template>
  <div id="InspectionDetail">
    <el-col :span="23">
    <h1 class="inspection-detail-label">考察详情</h1>
    <a href="javascript:;">邀请函</a>
    <a href="javascript:;">回执表</a>
    <div id="filescan">
      <p>这里是文件预览</p>
    <iframe align="middle" frameborder="0" height="800" scrolling="no" 
    src="" width="800">
      
    </iframe>
    </div>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "InspectionDetail",
  data() {
    return {};
  },

  methods: {}
};
</script>

<style scoped>
  #InspectionDetail {
  width: 1000px;
  height: 940px;
  margin: 80px auto;
  box-shadow: 0 0 2px #c7c5c5;
  background: #ffffff;
  border: 1px solid #e7e7e7;
  padding: 20px 0px 0px 20px;
}
.inspection-detail-label {
    font-size: 18px;
    line-height: 40px;
    border: 1px solid #e4e7ed;
    background: #e4e7ed;
    padding: 0 15px;
    border-radius: 3px;
    margin: 0px 0px 10px 0px;
}
#filescan {
  width: 900px;
  height: 700px;
  margin: 80px auto;
  box-shadow: 0 0 2px #c7c5c5;
  background: #ffffff;
  border: 1px solid #e7e7e7;
  padding: 20px 0px 0px 20px;
}
</style>


