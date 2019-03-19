<template>
  <div id="PersonalCenterAddPerson">
    <div class="crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">客户中心</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">公司人员</el-breadcrumb-item>
        <el-breadcrumb-item>人员信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>

      <el-form-item label="身份证号" prop="name" id="add-id">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>

      <el-form-item label="性别" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <div class="worker-add">
          <el-button type="primary">添加</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "PersonalCenterAddPerson",
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        // name: "",
        // identification:"",
        // sex: "",
        // birthday: "",
        native: ""
        // workspace:"",
        // education:"",
        // school:"",
        // position:"",
        // workType:"",
        // mobile:"",
        // mail:"",
        // company:"",
        // qualification:""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {}
};
</script>

<style scoped>
#PersonalCenterAddPerson {
  width: 830px;

  box-shadow: 0 0 2px #c7c5c5;
  background: #fffffd;
  border: 1px solid #e7e7e7;
  margin: 0px 0px 0px 20px;
  padding: 0px 0px 20px 0px;
}
#native .el-select {
  width: 119px;
  margin: 0px 100px 0px 0px;
}

#add-birthday {
  float: right;
  margin: -100px 0px 0px 0px;
}
#add-workspace {
  float: right;
  margin: -100px 0px 0px 0px;
}
#add-school {
  float: right;
  margin: -100px 0px 0px 0px;
}
#add-workType {
  float: right;
  margin: -100px 0px 0px 0px;
}
#add-mail {
  float: right;
  margin: -100px 0px 0px 0px;
}
#add-qualification {
  float: right;
  margin: -100px 0px 0px 0px;
}
.el-input {
  width: 220px;
}
.el-form {
  margin: 50px 0px 0px 180px;
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
.worker-add {
  text-align: center;
  margin: 0px 250px 0px 0px;
}
</style>


