<template>
  <div id="HRServiceJobSeekerIndex">
    

    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="name"
      label="公司名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="money"
      label="薪资水平"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
  <el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
  </div>
  
</template>

<script>

export default {
  
  name: "HRServiceJobSeekerIndex",
  data() {
    return {
      tableData: [{
          name: 'a公司',
          money: '面议',
          address: '江苏省南通市xx街道101'
        },{
          name: 'a公司',
          money: '面议',
          address: '江苏省南通市xx街道101'
        },{
          name: 'a公司',
          money: '面议',
          address: '江苏省南通市xx街道101'
        },{
          name: 'a公司',
          money: '面议',
          address: '江苏省南通市xx街道101'
        },{
          name: 'a公司',
          money: '面议',
          address: '江苏省南通市xx街道101'
        },{
          name: 'a公司',
          money: '面议',
          address: '江苏省南通市xx街道101'
        },{
          name: 'a公司',
          money: '面议',
          address: '江苏省南通市xx街道101'
        },{
          name: 'a公司',
          money: '面议',
          address: '江苏省南通市xx街道101'
        },]

    };
  },
  components: {
    
  },
  methods: {
    
  }
};
</script>

<style scoped>
#HRServiceJobSeekerIndex {
  width: 1000px;
  height: 618px;
  margin: 80px auto;
  box-shadow: 0 0 2px #c7c5c5;
  background: #ffffff;
  border: 1px solid #e7e7e7;
  padding: 20px;
}
.el-pagination {
  text-align: center;
  margin:20px 0px 0px 0px;
}
</style>


