<template>
  <div id="inspection">
    
      <h1 class="inspection-label">高端考察</h1>
   
      <el-card shadow="hover" v-for="inspectionItem in inspectionList" :key="inspectionItem.eid">
        <img :src="inspectionItem.picurl" class="inspection-picture">
        <div class="inspection_info">
        <p class="inspection-title">{{inspectionItem.title}}</p>
        <p class="inspection-time">考察时间：{{inspectionItem.inspectdate}}</p>
        <p class="inspection-end-time">报名截止时间：{{inspectionItem.deadline}}</p>
       </div>
        <div class="operation_btn">
        <router-link :to="'/InspectionDetail/'+inspectionItem.eid">
          <el-button type="primary" class="see-detail">查看详情</el-button>
        </router-link>
        </div>
       
        
        
      </el-card>
    
      <div class="order-page">
        <el-pagination
          background
          layout="prev, pager, next, jumper"
          :page-size="3"
          :total="count"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </div>
    
  </div>
</template>

<script>
export default {
  name: "Inspection",
  data() {
    return {
      count: 0,
      inspectionList: []
    };
  },

  methods: {
    handleCurrentChange(val) {
      this.getInspection(val);
    },
    getInspection(selectIndex) {
      var pageIndex = (selectIndex - 1) * 3;
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/news_findInpectList.do?pageIndex=${pageIndex}&selectIndex=${selectIndex}`
      })
        .then(res => {
          this.inspectionList = res.data.data;
          this.count = res.data.count;
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getInspection(1);
  }
};
</script>

<style scoped>
#inspection {
  width: 1000px;
  margin: 0px auto;
  margin-top:80px;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fffffd;
  border: 1px solid #e7e7e7;
  padding: 20px;
}
.el-card {
  height: 300px;
  margin: 0px 0px 10px 0px;
}
.inspection-picture {
  height: 257px;
  width: 380px;
}
.inspection_info {
  float:right;
}
.inspection-title {
  width:480px;
  font-size: 18px;
  font-weight: bold;
  margin:5px 0px 22px 0px;
}
.inspection-time {
  font-weight: 530;
  margin:5px 0px 22px 0px;
}
.inspection-end-time {
  color: #F56C6C;
  font-weight: bold;
  margin:5px 0px 22px 0px;
}
.el-button {
  width:122px;
  height:40px;
  padding:0px;
  
}
.operation_btn {
position: absolute;
 margin:-45px 0px 0px 750px;
 
 
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


