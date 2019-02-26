<template>
  <div class="User-Login">

    <!-- <el-button type="text" @click="dialogVisible = true">登录</el-button> -->

    <el-dialog title="账号登录" :visible.sync="dialogVisible" width="450px">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
        
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
      <a class='forgetpwd' href='#'>忘记密码？</a>
      <a class='register' href='#' @click="clickRegister">去注册<span class='el-icon-arrow-right'></span></a>
      
     
    </el-dialog>


  </div>
</template>

<script>
import UserRegister from "@/components/UserRegister";
export default {
  name: "UserLogin",

  data() {
    return {
      // dialogVisible:true,
      regDialogVisible:false,
      ruleForm: {
        name: '',
        password: ''
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
  methods: {
    
    clickRegister: function() {
      this.dialogVisible= false;
      this.regDialogVisible = false;
      this.regDialogVisible = true;
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
    openReg: function() {
      this.$emit("clickRegister",true)
    }
    

  },
  components: {
    // TopNav
    
    UserRegister
  },
  // props: {
  //   dialogVisible: {
  //     type:bool,
  //     required:true
  //   }
  // }
  props: ['dialogVisible']
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
.el-input {
  width: 80%;
  margin: 0px 55px 0px 0px
}

.el-button {
  width: 80%;
  font-size: 18px;
  font-family: fantasy;
  font-weight: bold;
  margin: 0px 55px 0px 0px
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
  margin: 0 0 0 25px
}
.register {
  font-size: 12px;
  padding: 0 0 0 120px
}
a{ text-decoration:none} 

</style>
