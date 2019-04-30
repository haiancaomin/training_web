<template>
  <el-main>
    <div class="file-container">
      <h1 class="file-title">资讯详情</h1>
      <h1 class="text-center news-title">{{newsContent.title}}</h1>
      <div class="news-tags text-center">
        <span class="mr15">时间：{{newsContent.createdate}}</span>
        <span>作者：{{newsContent.createuser}}</span>
      </div>
      <div class="preview" v-html='newsContent.content'></div>
    </div>
  </el-main>
</template>
<script>
export default {
  data() {
    return {
      newsContent:{}
    };
  },
  props:['id'],
  mounted(){
    this.getNewsDetail()
  },
  methods: {
    getNewsDetail() {
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/news_getNewsById.do?newsid=${this.id}`
      })
        .then(res => {
          this.newsContent = res.data.data;
          console.log(this.newsContent);
        })
        .catch(function(err) {
          console.log(err);
        });
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
.preview {
  /* width: 1000px;
  margin: 0 auto; */
  margin: 40px 30px;
  overflow: hidden;
}
.text-center{
  text-align: center
}
.news-title{
  margin: 20px 30px;
  font-weight: bold
}
.news-tags{
  color:#999;
  margin: 0 30px;
}
.mr15{
  margin-right: 15px;
}

</style>



