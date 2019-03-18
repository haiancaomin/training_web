<template>
  <div id="PesronalScoreSearch">
  <div class="PesronalScoreSearch-info">
  <el-form ref="form" :model="form" label-width="80px">
  
  <el-form-item label="考试科目">
    <el-select v-model="form.region" placeholder="请选择考试科目">
      <el-option label="科目1" value="shanghai"></el-option>
      <el-option label="科目2" value="beijing"></el-option>
    </el-select>
  </el-form-item>

  <el-form-item label="条件1">
    <el-select v-model="form.region" placeholder="请选择条件1">
      <el-option label="条件1-1" value="shanghai"></el-option>
      <el-option label="条件1-2" value="beijing"></el-option>
    </el-select>
  </el-form-item>

  <el-form-item label="条件2">
    <el-select v-model="form.region" placeholder="请选择条件2">
      <el-option label="条件2-1" value="shanghai"></el-option>
      <el-option label="条件2-2" value="beijing"></el-option>
    </el-select>
  </el-form-item>
    <div class="PesronalScoreSearch-search">
  <el-form-item>
    <el-button type="primary" >查询</el-button>
  </el-form-item>
    </div>
</el-form>
  </div>

  <div class="PesronalScoreSearch-result">
      <el-table
      :data="tableData"
      border
    style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名"
        width="100">
      </el-table-column>
      <el-table-column
        prop="id"
        label="身份证号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="subject"
        label="科目"
        width="80"
        >
      </el-table-column>
      <el-table-column
        prop="testDate"
        label="考试日期">
      </el-table-column>
      <el-table-column
        prop="score"
        label="分数"
        width="60">
      </el-table-column>
      <el-table-column
        prop="passFlag"
        label="是否及格"
        width="100">
      </el-table-column>
    </el-table>

  </div>
  
  </div>
</template>

<script>
export default {
    name: "PesronalScoreSearch",
  data() {
    return { 
        tableData: [{
            name: '老王',
            id: '320999888877656765',
            subject: '灌浆工',
            testDate: '2019-03-05',
            score: '99',
            passFlag: '是'
          }],
  
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
    };
  },
  methods: {
      
  },
 
};
</script>

<style scoped>
#PesronalScoreSearch {
     width: 830px;
     
  box-shadow: 0 0 2px #c7c5c5;
  background: #fffffd;
  border: 1px solid #e7e7e7;
  margin: 0px 0px 0px 20px;
  padding: 0px 0px 20px 0px;
  
}
    .PesronalScoreSearch-info {
        margin: 50px 0px 0px 170px;
    }
    .PesronalScoreSearch-search{
        margin: 0px 0px 0px 60px;
    }
    .PesronalScoreSearch-result {
        margin: 50px 20px 0px 20px;
    }
    .el-table th>.cell {
      text-align: center;
    }
</style>


