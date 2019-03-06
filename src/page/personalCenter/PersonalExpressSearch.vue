<template>
  <div id="PersonalExpressSearch">
    <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="开票时间"
      width="100">
    </el-table-column>
    <el-table-column
      prop="address"
      label="收货地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="people"
      label="收件人">
    </el-table-column>
    <el-table-column
      prop="expressId"
      label="快递单号">
    </el-table-column>
  </el-table>
    
    <div class="page-grpup">
        <el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
    </div>
  </div>
</template>

<script>
export default {
    name: "PersonalExpressSearch",
  data() {
    return { 
       tableData: [{
          date: '2016-05-02',
          address: '上海市普陀区金沙江路 1518 弄',
          people: '王小虎',
          expressId: '123456'
        }, {
          date: '2016-05-02',
          address: '上海市普陀区金沙江路 1518 弄',
          people: '王小虎',
          expressId: '123456'
        }, {
          date: '2016-05-02',
          address: '上海市普陀区金沙江路 1518 弄',
          people: '王小虎',
          expressId: '123456'
        }, {
          date: '2016-05-02',
          address: '上海市普陀区金沙江路 1518 弄',
          people: '王小虎',
          expressId: '123456'
        }]

    };
  },
  methods: {
      
  },
 
};
</script>

<style scoped>
   #PersonalExpressSearch {
       margin: 50px 0px 0px 0px;
       
   }
   .page-grpup {
       margin: 50px 0px 0px 0px;
       text-align: center
   }
</style>


