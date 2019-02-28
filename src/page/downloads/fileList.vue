<template>
  <el-container>
    <el-main>
      <div class="file-container">
        <h1 class="file-title">文件列表</h1>
        <ul class="file-box">
          <li>
            <a href="/download">江苏省住房和城乡建设厅装配式文件</a>
            <span class="date">2019-2-28</span>
          </li>
          <li>
            <a href="javascript:;">江苏省住房和城乡建设厅装配式文件江苏省住房和城乡建设厅装配式文件</a>
            <span class="date">2019-2-28</span>
          </li>
          <li>
            <a href="javascript:;">江苏省住房和城乡建设厅装配式文件江苏省住房和城乡建设厅装配式文件江苏省住房和城乡建设厅装配式文件</a>
            <span class="date">2019-2-28</span>
          </li>
        </ul>
        <el-row>
          <el-pagination background layout="prev, pager, next" :total="1000" class="text-right"></el-pagination>
        </el-row>
      </div>
    </el-main>
  </el-container>
</template>
<script>

export default {
  data() {
    return {};
  },
  
};
</script>

<style scoped>
.el-main {
  padding-top: 60px;
}
.el-row {
  padding: 20px 0;
}
.bottom-line {
  border-bottom: 1px solid #eee;
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
.file-box{
  padding-top: 30px;
}

.file-box li a{
  line-height: 30px;
  color: #333;
}
.file-box li a:hover{
  color:#409eff;
}
.date{
  color:#999;
  margin-left: 30px;
}
.text-right{
  text-align: right
}


</style>



