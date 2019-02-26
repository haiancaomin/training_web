<template>
  <div id="signup">
    <!-- <el-steps :active="active" finish-status="success">
      <el-step title="报名信息"></el-step>
      <el-step title="套餐类型"></el-step>
      <el-step title="考试信息"></el-step>
      <el-step title="费用"></el-step>
      <el-step title="开具发票"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>-->
    <top-nav></top-nav>
    <el-steps :active="active" finish-status="success" simple style="margin-top: 80px">
      <el-step title="报名信息"></el-step>
      <el-step title="套餐选择"></el-step>
      <el-step title="考试信息"></el-step>
      <el-step title="费用"></el-step>
      <el-step title="开具发票"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>

    <div class="sign-up-info">
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

        <el-form-item label="身份证号" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="性别" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="出生日期" required>        
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
        </el-form-item>

        <el-form-item label="籍贯" prop="region">
            <el-col :span="11">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option label="省份1" value="shanghai"></el-option>
            <el-option label="省份2" value="beijing"></el-option>
          </el-select>
            </el-col>
            <el-col :span="11">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option label="城市1" value="shanghai"></el-option>
            <el-option label="城市2" value="beijing"></el-option>
          </el-select>
            </el-col>
        </el-form-item>


        <el-form-item label="性别" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker
                type="fixed-time"
                placeholder="选择时间"
                v-model="ruleForm.date2"
                style="width: 100%;"
              ></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送" prop="delivery">
          <el-switch v-model="ruleForm.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        
        <el-form-item label="活动形式" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>

      <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    </div>
  </div>
</template>

<script>
import TopNav from "../components/TopNav";
export default {
  name: "Signup",
  data() {
    return {
      active: 0,
      maxSetp: 6,
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
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
  components: {
    TopNav
  },
  methods: {
    next() {
      if (this.active++ > this.maxSetp) this.active = this.maxSetp;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
.el-step {
}
#signup {
  width: 1000px;
  margin: auto;
}
.sign-up-info {
  width: 1000px;
  height: 600px;
  margin: 0px auto;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fff;
  border: 1px solid #e7e7e7;
}
</style>
