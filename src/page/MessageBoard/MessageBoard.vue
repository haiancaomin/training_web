<template>
  <div id="MessageBoard">
    <div class="messageBoard_div">
      <h1 class="my_suggest_h1_label">我的反馈</h1>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column label="序号" type="index" width="50"></el-table-column>
        <el-table-column prop="question" label="问题描述" width="400"></el-table-column>
        <el-table-column prop="createdate" label="提交时间" width="180"></el-table-column>
        <el-table-column prop="answer" label="查看回复"></el-table-column>
      </el-table>

      <div v-if="count">
        <div class="suggest-page">
          <el-pagination
            background
            layout="prev, pager, next, jumper"
            :page-size="10"
            :total="count"
            @current-change="handleCurrentChange"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageBoard",
  data() {
    return {
      count: 0,
      textarea: "",
      tableData: []
    };
  },

  methods: {
    getFeedbackList(selectIndex) {
      var userInfo = JSON.parse(sessionStorage.getItem("user"));
      if (userInfo) {
        var userid = userInfo.userid;
      }
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/feedback_findFeedbackList.do?pageIndex=${(selectIndex - 1) *
          10}&selectIndex=${selectIndex}&userid=${userid}`
      })
        .then(res => {
          console.log(res);
          this.tableData = res.data.data;
          this.count = res.data.count;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    handleCurrentChange(val) {
      this.getFeedbackList(val);
    }
  },
  mounted() {
    this.getFeedbackList(1);
  }
};
</script>

<style scoped>
#MessageBoard {
  width: 100%;
  min-width: 1220px;
  max-width: 1920px;
  margin-top: 80px;
  background: #fffffd;
  padding: 20px;
}
.messageBoard_div {
  width: 1220px;
  margin: 0px auto;
}
.my_suggest_h1_label {
  font-size: 18px;
  line-height: 40px;
  border: 1px solid #e4e7ed;
  background: #e4e7ed;
  padding: 0 15px;
  border-radius: 3px;
  margin: 0px 0px 10px 0px;
  border-left: 2px solid #409eff;
}
.borad_content,
.board_picture,
.board_mobile,
.board_submit {
  margin: 20px 200px;
}
.borad_content p {
  margin: 0px 0px 10px 0px;
}
.borad_content span {
  color: #f56c6c;
}
.board_picture span {
  margin-left: 10px;
}
.board_mobile p {
  margin-bottom: 10px;
}
.board_submit {
  text-align: center;
}
.suggest-page {
  text-align: center;
  margin-top: 20px;
}
</style>
<style>
.borad_content textarea {
  height: 100px;
}
</style>