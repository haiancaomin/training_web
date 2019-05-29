<template>
  <div id="MessageBoard">
    <div class="borad_content">
        <p>反馈内容<span>（*必填）</span></p>
        <el-input
  type="textarea"
  :rows="2"
  placeholder="欢迎提出您在使用过程中遇到的问题或宝贵建议，感谢您对智聚实训的支持。"
  v-model="textarea">
</el-input>
    </div>
    <div class="board_picture">
        <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="3"
  :on-exceed="handleExceed"
  >
  <el-button size="small" type="primary">点击上传</el-button>
  <span slot="tip" class="el-upload__tip">您可以上传反馈图片</span>
</el-upload>
    </div>
    <div class="board_mobile">
        <p>联系方式</p>
        <el-input v-model="input" placeholder="如您方便，请留下您的联系方式，以便我们及时回复您。"></el-input>
    </div>
    <div class="board_submit">
        <el-button type="primary">提交反馈</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageBoard",
  data() {
    return {
      textarea:""
    };
  },

  methods: {
    handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
  },
  mounted() {
    
  }
};
</script>

<style scoped>
#MessageBoard {
  width: 1000px;
  margin: 0px auto;
  margin-top:80px;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fffffd;
  border: 1px solid #e7e7e7;
  padding: 20px;
}
.borad_content,.board_picture,.board_mobile,.board_submit {
  margin:20px 200px;
}
.borad_content p{
  margin:0px 0px 10px 0px;
}
.borad_content span{
  color: #F56C6C;
}

.board_picture span{
  margin-left:10px;;
}
.board_mobile p{
  margin-bottom: 10px;
}
.board_submit {
  text-align: center;
}
</style>
<style>
.borad_content textarea {
  height:100px;
}
</style>


