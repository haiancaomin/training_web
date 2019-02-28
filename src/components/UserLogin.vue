<template>
  <div class="User-Login">
    <el-dialog title="账号登录" :visible.sync="logshow" width="450px" @closed="closeDialog">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="80px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名: " prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码: " prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登&nbsp;&nbsp;&nbsp;&nbsp;录</el-button>
        </el-form-item>
      </el-form>
      <a class="forgetpwd" href="#">忘记密码？</a>
      <a class="register" href="javascript:;" @click="clickRegister">去注册
        <span class="el-icon-arrow-right"></span>
      </a>
    </el-dialog>
  </div>
</template>

<script>
import UserRegister from "@/components/UserRegister";
export default {
  data() {
    return {
      logshow: false,
      ruleForm: {
        name: "",
        password: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  watch: {
    dialogVisible: function(val) {
      this.logshow = val;
    }
  },
  methods: {
    closeDialog: function() {
      this.$emit("closed", false);
    },
    clickRegister: function() {
      this.logshow = false;
      this.$emit("goToReg", true);
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
    }
  },
  components: {
    UserRegister
  },
  props: ["dialogVisible"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
  text-decoration: none;
}
.el-input {
  width: 80%;
  margin: 0px 55px 0px 0px;
}

.el-button {
  width: 80%;
  font-size: 18px;
  font-family: fantasy;
  font-weight: bold;
  margin: 0px 55px 0px 0px;
}

.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}

.bg-purple-light {
  background: #e5e9f2;
  padding: 20px 0px 20px 0px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.forgetpwd {
  color: darkgrey;
  font-size: 12px;
  padding: 0 40px 0 0;
  margin: 0 0 0 25px;
}
.register {
  font-size: 12px;
  padding: 0 0 0 120px;
}
.User-Login {
  text-align: center;
}
</style>

