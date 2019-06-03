<template>
  <div id="fileList_body">
    <div class="file-container">
      <h1 class="file-title">资料下载</h1>
      <ul class="file-box">
        <li v-for="(item,key) in fileLists.data" :key="key" class="clearfix">
          <div>
            <span
              v-if="item.name.split('.')[item.name.split('.').length-1] == 'doc'||item.name.split('.')[item.name.split('.').length-1] == 'docx'"
            >
              <i class="iconfont doc_icon">&#xe64e;</i>
            </span>
            <span v-if="item.name.split('.')[item.name.split('.').length-1] == 'pdf'">
              <i class="iconfont pdf_icon">&#xe740;</i>
            </span>
            <span
              v-if="item.name.split('.')[item.name.split('.').length-1] == 'xls'||item.name.split('.')[item.name.split('.').length-1] == 'xlsx'"
            >
              <i class="iconfont xls_icon">&#xe615;</i>
            </span>
            <a :href="item.fileurl" target="_blank">{{item.name}}</a>
          </div>
          <div class="update_date">
            <span class="date">更新时间：{{item.createdate}}</span>
          </div>

          <div class="download">
            <a :href="item.fileurl" target="_blank">
              <el-button type="primary" class="download_btn">
                <i class="iconfont download_icon">&#xe682;</i>下载
              </el-button>
            </a>
          </div>
        </li>
      </ul>
      <el-row>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="fileLists.count"
          :page-size="10"
          @current-change="handleCurrentChange"
          class="text-right"
          v-if="fileLists.count"
        ></el-pagination>
      </el-row>
    </div>
  </div>
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
          10}&selectIndex=${this.currentPage}`
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
#fileList_body {
  width: 1000px;
  margin: 0px auto;
  margin-top: 80px;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fffffd;
  border: 1px solid #e7e7e7;
  padding: 0px 20px 20px 20px;
}
.el-row {
  padding: 20px 0;
}
.file-container {
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
  border-left: 2px solid #409eff;
}
.file-box {
  padding: 10px 30px 0px 30px;
}
.file-box li {
  margin: 10px 0px 0px 0px;
  border-bottom: 1px dashed #9e9e9e;
  padding: 0px 10px;
}

.file-box li a {
  line-height: 30px;
  color: #3e3e3e;
  font-size: 14px;
  font-weight: bold;
}
.file-box li a:hover {
  color: #409eff;
}
.date {
  color: #999;
  font-size: 12px;
}
.update_date {
  margin: 0px 0px 10px 0px;
}
.text-right {
  text-align: right;
  padding: 0px 30px 0px 0px;
}
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
@font-face {
  font-family: "iconfont"; /* project id 1131189 */
  src: url("//at.alicdn.com/t/font_1131189_fbkfz3vz02m.eot");
  src: url("//at.alicdn.com/t/font_1131189_fbkfz3vz02m.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1131189_fbkfz3vz02m.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1131189_fbkfz3vz02m.woff") format("woff"),
    url("//at.alicdn.com/t/font_1131189_fbkfz3vz02m.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1131189_fbkfz3vz02m.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 18px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.pdf_icon {
  color: #f56c6c;
  font-size: 16px;
}
.doc_icon {
  color: #409eff;
}
.xls_icon {
  color: #67c23a;
  font-size: 16px;
}
.download_icon {
  line-height: 14px;
  font-size: 14px;
  margin: 0px 2px 0px 0px;
}
.download {
  position: absolute;
  margin: -52px 0px 0px 765px;
}
.download_btn {
  height: 35px;
  width: 70px;
  padding: 0px;
  line-height: 14px;
  font-size: 14px;
}
</style>