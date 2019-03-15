<template>
  <div id="PersonalCenterAddPerson">
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

            <el-form-item label="出生日期" required id="add-birthday">
              <el-form-item prop="date1">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="ruleForm.date1"
                  style="width: 300px;"
                ></el-date-picker>
              </el-form-item>
            </el-form-item>

            <el-form-item label="籍贯" prop="native" id="native">
              <el-col :span="8">
                <el-select v-model="ruleForm.native" placeholder="省份">
                  <el-option label="省份1" value="shanghai"></el-option>
                  <el-option label="省份2" value="beijing"></el-option>
                </el-select>
              </el-col>
              <el-col :span="2">&nbsp;</el-col>
              <el-col :span="5">
                <el-select v-model="ruleForm.native" placeholder="城市" id="city">
                  <el-option label="城市1" value="shanghai"></el-option>
                  <el-option label="城市2" value="beijing"></el-option>
                </el-select>
              </el-col>
            </el-form-item>

            <el-form-item label="现工作地" prop="native" id="add-workspace">
              <el-input v-model="ruleForm.native"></el-input>
            </el-form-item>

            <el-form-item label="学历" prop="region" id="education">
              <el-select v-model="ruleForm.region" placeholder="请选择学历">
                <el-option label="省份1" value="shanghai"></el-option>
                <el-option label="省份2" value="beijing"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="毕业学校" prop="native" id="add-school"> 
              <el-input v-model="ruleForm.native"></el-input>
            </el-form-item>

            <el-form-item label="职位" prop="native">
              <el-input v-model="ruleForm.native"></el-input>
            </el-form-item>

            <el-form-item label="工种" prop="name" id="add-workType">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="移动电话" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="邮箱" prop="name" id="add-mail">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="所在公司" prop="native">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="从业资格证书" prop="native" id="add-qualification">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item>
              <div class="nextPage1">
                <el-button type="primary" @click="submitForm('ruleForm')">下一步</el-button>
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
  methods: {
      
  },
 
};
</script>

<style scoped>
   #native .el-select {
  width: 119px;
  margin:0px 100px 0px 0px;
}
#add-id {
    float:right;
    margin:-100px 0px 0px 0px;
}
#add-birthday {
    float:right;
    margin:-100px 0px 0px 0px;
}
#add-workspace {
    float:right;
    margin:-100px 0px 0px 0px;
}
#add-school {
    float:right;
    margin:-100px 0px 0px 0px;
}
#add-workType {
    float:right;
    margin:-100px 0px 0px 0px;
}
#add-mail {
    float:right;
    margin:-100px 0px 0px 0px;
}
#add-qualification {
    float:right;
    margin:-100px 0px 0px 0px;
}
.el-input {
    width: 220px;
}
.el-form {
    margin: 50px 0px 0px 0px;
}
</style>


