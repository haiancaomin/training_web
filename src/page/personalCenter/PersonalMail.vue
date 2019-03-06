<template>
  <div id="PersonalMail">
    <el-col :span="24">
    <h1 class="PersonalMail-title">个人邮箱</h1>
    </el-col>
    <el-col :span="24">
    <div class="PersonalMail-List">
        <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="date"
      label="日期"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="标题"
      
      >
    </el-table-column>
    
  </el-table>

    </div>
    </el-col>
    <el-col :span="24">

    <div class="page-grpup">
        <el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
    </div>
    </el-col>
    <div class="goto-personal-center">
        <router-link to="/PersonalCenter">
    <el-button type="primary">返回个人中心</el-button>
    </router-link>
    </div>
  </div>

  
</template>

<script>
export default {
    name: "PersonalMail",
  data() {
    return { 
      tableData: [{
          date: '2016-05-02',
          name: '您最近开具的发票已派送，快递单号是“12344”'
          
        }, {
          date: '2016-05-04',
          name: '您最近开具的发票已派送，快递单号是“12345”'
          
        }, {
          date: '2016-05-01',
          name: '您最近开具的发票已派送，快递单号是“12346”'
         
        }, {
          date: '2016-05-03',
          name: '您最近开具的发票已派送，快递单号是“12347”'
          
        }]

    };
  },
  methods: {
      formatter(row, column) {
        return row.address;
      }

  },
 
};
</script>

<style scoped>
 #PersonalMail {
  width: 1000px;
  height: 780px;
  margin: 80px auto;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fffffd;
  border: 1px solid #e7e7e7;
  padding: 20px 20px 20px 20px;
}
.PersonalMail-List {
    margin:20px;
}
.PersonalMail-title {
    font-size: 18px;
    line-height: 40px;
    border: 1px solid #e4e7ed;
    background: #e4e7ed;
    padding: 0 15px;
    border-radius: 3px;
    margin: 0px 0px 10px 0px;
}
.page-grpup {
    text-align: center;
    margin: 50px 0px;
}
.goto-personal-center {
    text-align: center;
}
</style>


