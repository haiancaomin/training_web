<template>
  <div id="MessageBoard">
    <h1 class="my_suggest_h1_label">我的反馈</h1>
    <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
    label="序号"
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      prop="date"
      label="问题描述"
      width="480">
    </el-table-column>
    <el-table-column
      prop="name"
      label="提交时间"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="查看回复">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  name: "MessageBoard",
  data() {
    return {
      textarea:"",
      tableData: [{
          date: '案说法大师的去问驱蚊器恶趣味·1',
          name: '2018-01-01 01:09:22',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
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


