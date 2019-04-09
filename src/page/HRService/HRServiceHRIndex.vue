<template>
  <div id="HRServiceHRIndex">
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="certificate"
      label="获得证书"
      width="180">
    </el-table-column>
    <el-table-column
      prop="mobile"
      label="联系方式">
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
  
  name: "HRServiceHRIndex",
  data() {
    return {
      tableData: [{
          name: '老王',
          certificate: '灌浆工',
          mobile: '1212323423'
        }, {
           name: '老王',
          certificate: '灌浆工',
          mobile: '1212323423'
        }, {
           name: '老王',
          certificate: '灌浆工',
          mobile: '1212323423'
        }, {
          name: '老王',
          certificate: '灌浆工',
          mobile: '1212323423'
        }, {
          name: '老王',
          certificate: '灌浆工',
          mobile: '1212323423'
        }, {
          name: '老王',
          certificate: '灌浆工',
          mobile: '1212323423'
        }, {
          name: '老王',
          certificate: '灌浆工',
          mobile: '1212323423'
        }, {
          name: '老王',
          certificate: '灌浆工',
          mobile: '1212323423'
        }, {
          name: '老王',
          certificate: '灌浆工',
          mobile: '1212323423'
        }]
    };
  },
  components: {
    
  },
  methods: {
    
  }
};
</script>

<style scoped>
#HRServiceHRIndex {
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


