<template>
  <el-main>
    <div class="file-container">
      <h1 class="file-title">资料下载</h1>
      <ul class="file-box">
        <li v-for="(item,key) in fileLists.data" :key="key" class="clearfix">
          <div>
          <span v-if="item.name.split('.')[1] == 'doc'||item.name.split('.')[1] == 'docx'"><i class="iconfont doc_icon">&#xe64e;</i></span>
          <span v-if="item.name.split('.')[1] == 'pdf'"><i class="iconfont pdf_icon">&#xe740;</i></span>
          <a :href="item.fileurl">{{item.name.split('.')[0]}}</a>
          </div>
          <div class="update_date">
            <span class="date">更新时间：{{item.createdate}}</span>
          </div>

          <div class="download">
            <a :href="item.fileurl">
            <el-button type="primary" class="download_btn"><i class="iconfont download_icon">&#xe682;</i>下载</el-button>
            </a>
          </div>
          
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
  border-left: 2px solid #409eff;
}
.file-box {
  padding: 30px 30px 0px 30px;
}
.file-box li {
  margin:10px 0px 0px 0px;
  border-bottom: 1px dashed  #9e9e9e;
  padding:0px 10px;
}

.file-box li a {
  line-height: 30px;
  color: #3e3e3e;
  font-size:14px;
  font-weight: bold;
}
.file-box li a:hover {
  color: #409eff;
}
.date {
  color: #999;
  font-size:12px;
}
.update_date {
  margin:0px 0px 10px 0px;
}
.text-right {
  text-align: right;
  padding:0px 30px 0px 0px;
}
.clearfix:after{
  content: '';
  display: block;
  clear: both;
}
@font-face {
  font-family: 'iconfont';  /* project id 1131189 */
  src: url('//at.alicdn.com/t/font_1131189_aqgbpfdqk5t.eot');
  src: url('//at.alicdn.com/t/font_1131189_aqgbpfdqk5t.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1131189_aqgbpfdqk5t.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1131189_aqgbpfdqk5t.woff') format('woff'),
  url('//at.alicdn.com/t/font_1131189_aqgbpfdqk5t.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1131189_aqgbpfdqk5t.svg#iconfont') format('svg');
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
  color:#F56C6C;
  font-size:16px;
}
.doc_icon {
  color:#409EFF;
}
.download_icon {
  line-height: 14px;
  font-size: 14px;
  margin:0px 2px 0px 0px;
}
.download {
  position: absolute;
  margin:-52px 0px 0px 765px;
}
.download_btn {
  height:35px;
  width:70px;
  padding: 0px;
  line-height: 14px;
  font-size: 14px;
}
</style>



