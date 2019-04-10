<template>
  <div id="PersonalCenterPersonInfo">
    <div class="crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">客户中心</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">公司人员</el-breadcrumb-item>
        <el-breadcrumb-item>人员信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-input placeholder="输入关键字搜索" id="searchInput"/>

    <el-table :data="tableData" border height="450" style="width: 700px">
      <el-table-column prop="id" label="序号" width="50"></el-table-column>
      <el-table-column prop="date" label="录入时间" sortable width="110"></el-table-column>
      <el-table-column prop="name" label="姓名" width="80"></el-table-column>
      <el-table-column prop="sex" label="性别" width="50"></el-table-column>
      <el-table-column prop="age" label="年龄" width="50"></el-table-column>
      <el-table-column prop="worktype" label="工种" width="80"></el-table-column>
      <el-table-column prop="idcard" label="身份证号" width="180"></el-table-column>
      <el-table-column prop="mobile" label="手机" width="120"></el-table-column>
      <el-table-column prop="workspace" label="工作地" width="120"></el-table-column>
      <el-table-column prop="testID" label="考试编号" width="120"></el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "PersonalCenterPersonInfo",
  data() {
    return {
      tableData: [
        {
          id: "1",
          date: "2019-04-01",
          name: "诸葛孔明",
          sex: "男",
          age: "24",
          worktype: "资料员",
          idcard: "320876789876567876",
          mobile: "87678765678",
          workspace: "江苏省南通市",
          testID: "1313131312"
        },
        {
          id: "2",
          date: "2019-04-01",
          name: "诸葛孔明",
          sex: "男",
          age: "24",
          worktype: "资料员",
          idcard: "320876789876567876",
          mobile: "87678765678",
          workspace: "江苏省南通市",
          testID: "1313131312"
        },
        {
          id: "3",
          date: "2019-04-01",
          name: "诸葛孔明",
          sex: "男",
          age: "24",
          worktype: "资料员",
          idcard: "320876789876567876",
          mobile: "87678765678",
          workspace: "江苏省南通市",
          testID: "1313131312"
        },
        {
          id: "4",
          date: "2019-04-01",
          name: "诸葛孔明",
          sex: "男",
          age: "24",
          worktype: "资料员",
          idcard: "320876789876567876",
          mobile: "87678765678",
          workspace: "江苏省南通市",
          testID: "1313131312"
        },
        {
          id: "5",
          date: "2019-04-01",
          name: "诸葛孔明",
          sex: "男",
          age: "24",
          worktype: "资料员",
          idcard: "320876789876567876",
          mobile: "87678765678",
          workspace: "江苏省南通市",
          testID: "1313131312"
        },
        {
          id: "6",
          date: "2019-04-01",
          name: "诸葛孔明",
          sex: "男",
          age: "24",
          worktype: "资料员",
          idcard: "320876789876567876",
          mobile: "87678765678",
          workspace: "江苏省南通市",
          testID: "1313131312"
        },
        {
          id: "7",
          date: "2019-04-01",
          name: "诸葛孔明",
          sex: "男",
          age: "24",
          worktype: "资料员",
          idcard: "320876789876567876",
          mobile: "87678765678",
          workspace: "江苏省南通市",
          testID: "1313131312"
        },
        {
          id: "8",
          date: "2019-04-01",
          name: "诸葛孔明",
          sex: "男",
          age: "24",
          worktype: "资料员",
          idcard: "320876789876567876",
          mobile: "87678765678",
          workspace: "江苏省南通市",
          testID: "1313131312"
        },
        {
          id: "9",
          date: "2019-04-01",
          name: "诸葛孔明",
          sex: "男",
          age: "24",
          worktype: "资料员",
          idcard: "320876789876567876",
          mobile: "87678765678",
          workspace: "江苏省南通市",
          testID: "1313131312"
        },
        {
          id: "10",
          date: "2019-04-01",
          name: "诸葛孔明",
          sex: "男",
          age: "24",
          worktype: "资料员",
          idcard: "320876789876567876",
          mobile: "87678765678",
          workspace: "江苏省南通市",
          testID: "1313131312"
        },
      ]
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
    }
  }
};
</script>

<style scoped>
#PersonalCenterPersonInfo {
  width: 830px;

  box-shadow: 0 0 2px #c7c5c5;
  background: #fffffd;
  border: 1px solid #e7e7e7;
  margin: 0px 0px 0px 20px;
  padding: 0px 0px 20px 0px;
}

.crumb {
  padding: 10px 0px 10px 0px;
  font-size: 20px;
  text-align: left;
  margin: 20px;
  border-left: 2px solid #409eff;
  line-height: 40px;
  padding-left: 15px;
  background: #e4e7ed;
}
.el-breadcrumb {
  background: #e4e7ed;
}
.el-table {
  margin: 20px;
}
.el-input {
  width: 250px;
  margin: 0px 0px 0px 470px;
}

</style>


