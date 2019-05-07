<template>
  <el-main>
    <div class="file-container">
      <h1 class="file-title">文件列表</h1>
      <ul class="file-box">
        <li v-for="(item,key) in fileLists.data" :key="key" class="clearfix">
          <a :href="item.fileurl">{{item.name}}</a>
          <span class="date">{{item.createdate}}</span>
        </li>
      </ul>
      <el-row>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="fileLists.count"
          :page-size="8"
          @current-change="handleCurrentChange"
          class="text-right"
          v-if="fileLists.count"
        ></el-pagination>
      </el-row>
    </div>
  </el-main>
</template>
<script>
export default {
  data() {
    return {
      currentPage: 1,
      fileLists: {}
    };
  },
  mounted() {
    this.getFileList();
  },
  methods: {
    getFileList() {
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/news_findFilesList.do?pageIndex=${(this
          .currentPage -
          1) *
          8}&selectIndex=${this.currentPage}`
      })
        .then(res => {
          this.fileLists = res.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getFileList();
    }
  }
};
</script>

<style scoped>
.el-main {
  padding-top: 60px;
  width: 1000px;
  margin: 0 auto;
}
.el-row {
  padding: 20px 0;
}

.file-container {
  padding: 20px;
  background: #fff;
  margin-top: 20px;
}
.file-title {
  font-size: 18px;
  line-height: 40px;
  border: 1px solid #e4e7ed;
  background: #e4e7ed;
  padding: 0 15px;
  border-radius: 3px;
}
.file-box {
  padding-top: 30px;
}

.file-box li a {
  float: left;
  line-height: 30px;
  color: #333;
}
.file-box li a:hover {
  color: #409eff;
}
.date {
  float: right;
  color: #999;
}
.text-right {
  text-align: right;
}
.clearfix:after{
  content: '';
  display: block;
  clear: both;
}
</style>



