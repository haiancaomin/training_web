<template>
  <div id="news_detail_body">
    <div class="file-container">
      
      <h1 class="text-center news-title">{{newsContent.title}}</h1>
      <div class="news-tags text-center">
        <span class="mr15">发布时间：{{newsContent.createdate}}</span>
        
      </div>
      <div class="preview" v-html="newsContent.content"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newsContent: {}
    };
  },
  props: ["id"],
  mounted() {
    this.getNewsDetail();
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
#news_detail_body {
  width: 100%;
  min-width: 1220px;
  max-width: 1920px;
  margin-top: 80px;
  background: #ffffff;
  padding: 20px;
}
.el-row {
  padding: 20px 0;
}
.file-container {
  width:1220px;
  margin:0px auto;
  padding: 0px 20px 20px 20px;
  background: #fff;
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
  margin: 40px 30px;
  overflow: hidden;
}
.text-center {
  text-align: center;
}
.news-title {
  margin: 20px 30px;
  font-weight: bold;
}
.news-tags {
  color: #999;
  margin: 0 30px;
}
.mr15 {
  margin-right: 15px;
}
</style>