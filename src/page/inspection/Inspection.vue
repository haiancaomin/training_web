<template>
  <div id="inspection">
    <div class="inspection_list_body">
      <div class="inspection_list_title">高端专业考察</div>
      <div class="inspection_list_undertake">同济大学国家土建结构预制装配化工程技术研究中心主办</div>
      <div
        class="inspection_info_body"
        v-for="inspectionItem in inspectionList"
        :key="inspectionItem.eid"
      >
        <div class="inspection_info">
          <p class="inspection-time">考察时间：{{inspectionItem.inspectdate}}</p>
          <p class="inspection-end-time">报名截止时间：{{inspectionItem.deadline}}</p>
          <p class="inspection-title">{{inspectionItem.title}}</p>
        </div>
        <div class="operation_btn">
          <router-link :to="'/InspectionDetail/'+inspectionItem.eid">
            <div class="see-detail">查看详情</div>
          </router-link>
        </div>
        <img :src="inspectionItem.picurl" class="inspection-picture" />
      </div>

      <div class="order-page" id="inspection_page">
        <el-pagination
          background
          layout="prev, pager, next, jumper"
          :page-size="3"
          :total="count"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </div>
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
        url: `${this.baseURL}/zjsxpt/news_findInpectList.do?pageIndex=${pageIndex}&selectIndex=${selectIndex}`
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
  width: 100%;
  min-width: 1220px;
  max-width: 1920px;
  margin-top: 80px;
  background: rgb(46, 61, 75);
  padding: 0px 0px 100px 0px;
}
.inspection_list_body {
  width: 1220px;
  margin: 0px auto;
  padding: 50px 0px 0px 0px;
}
.inspection_info_body {
  width: 1100px;
  height: 230px;
  margin: 50px auto;

  background: #fff;
}
.inspection-picture {
  height: 190px;
  width: 340px;
  margin: 20px 0px 0px 20px;
}
.inspection_info {
  position: absolute;
  margin-left: 385px;
}
.inspection-title {
  width: 700px;
  font-size: 24px;
  color: #333;
  font-weight: bold;
  margin: 20px 0px 15px 0px;
}
.inspection-time {
  position: absolute;
  color: #666;
  margin: 65px 0px 22px 0px;
  font-family: "Microsoft YaHei";
}
.inspection-end-time {
  position: absolute;
  color: #666;
  margin: 65px 0px 22px 225px;
}
.el-button {
  width: 122px;
  height: 40px;
  padding: 0px;
}
.operation_btn {
  position: absolute;
  margin: 166px 0px 0px 385px;
}
.see-detail {
  width: 180px;
  height: 44px;
  font-size: 18px;
  line-height: 44px;
  text-align: center;
  color: #fff;
  background-color: #e6804e;
}
.see-detail:hover {
  background-color: rgba(230, 128, 78,0.8);
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
.inspection_list_title {
  width: 1000px;
  margin: 0px auto;
  text-align: center;
  font-size: 40px;
  color: #fff;
  letter-spacing: 2px;
}
.inspection_list_undertake {
  width: 1000px;
  margin: 0px auto;
  text-align: center;
  font-size: 18px;
  color: #fff;
  letter-spacing: 2px;
  margin-top:18px;
}
</style>
<style>
#inspection_page .el-pagination__jump {
  color: #ddd;
}
</style>