<template>
  <div id="PersonalInvoice">
      
      <div class="Invoice-info">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <div class="Invoice-company">
            <el-form-item label="公司名称" prop="naxxme">
              <el-input v-model="ruleForm.ss"></el-input>
            </el-form-item>
          </div>

          <div class="Invoice-taxpayer-num">
            <el-form-item label="纳税人识别号" prop="naxxme">
              <el-input v-model="ruleForm.ss"></el-input>
            </el-form-item>
          </div>
          <div class="Invoice-company-bank">
            <el-form-item label="公司开户行" prop="naxxme">
              <el-input v-model="ruleForm.ss"></el-input>
            </el-form-item>
          </div>
          <div class="Invoice-company-account">
            <el-form-item label="公司账户" prop="naxxme">
              <el-input v-model="ruleForm.ss"></el-input>
            </el-form-item>
          </div>

          <div class="Invoice-tax-context">
            <el-form-item label="可开发票内容" prop="desssc">
              <el-input type="textarea" v-model="ruleForm.sss"></el-input>
            </el-form-item>
          </div>

          <p class="info-notice">注：请认真填写相关信息，发票一经开具，不得修改，谢谢！</p>

          <div class="Invoice-company-address">
            <el-form-item label="公司地址" prop="naxxme">
              <el-input v-model="ruleForm.ss"></el-input>
            </el-form-item>
          </div>
          <div class="Invoice-contact">
            <el-form-item label="联系人" prop="naxxme">
              <el-input v-model="ruleForm.ss"></el-input>
            </el-form-item>
          </div>
          <div class="Invoice-telphone">
            <el-form-item label="联系电话" prop="naxxme">
              <el-input v-model="ruleForm.ss"></el-input>
            </el-form-item>
          </div>
          <div class="Invoice-tax-money">
            <el-form-item label="开票金额" prop="naxxme">
              <el-input v-model="ruleForm.ss"></el-input>
            </el-form-item>
          </div>

          <div class="Invoice-complete">
            <el-form-item>
              <el-button type="primary" @click="submitForm5('ruleForm')">提交</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
  </div>
</template>

<script>
export default {
    name: "PersonalInvoice",
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
      submitForm5(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("发票信息提交成功！");
          this.active = this.active + 2;
          this.firstPage = 0;
          this.secondPage = 0;
          this.thirdPage = 0;
          this.fourthPage = 0;
          this.fifthPage = 0;
          this.sixth = 1;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
 
};
</script>

<style scoped>
   .Invoice-company-address {
  float: right;
  margin: -343px 30px 0px 0px;
}
.Invoice-contact {
  float: right;
  margin: -281px 30px 0px 0px;
}

.Invoice-telphone {
  float: right;
  margin: -219px 30px 0px 0px;
}

.Invoice-tax-money {
  float: right;
  margin: -157px 30px 0px 0px;
}
.el-input {
    width: 200px;
}
.Invoice-tax-context {
    width:646px;
}
.Invoice-complete {
    text-align: center;
    margin:10px 80px 0px 0px;
}
.info-notice {
  font-family: "微软雅黑";
  font-size: 12px;
  color: #ee5f5b;
}
#PersonalInvoice {
    margin: 50px 0px 0px 0px;
}
</style>


