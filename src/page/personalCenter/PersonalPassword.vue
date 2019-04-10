<template>
  <div id="PersonalPassword">

    
    <div class="crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">客户中心</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalPassword' }">账户信息</el-breadcrumb-item>
        <el-breadcrumb-item>修改密码</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="PersonalPassword-change">
      <el-form :model="ruleForm" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="IDCardNuM">
         
            
            <div class="input-body">
              <input :type="inputType" placeholder="请输入新密码" class="input-input" maxlength="12">
              <div class="input-icon" @click="changeType">
              <i class="el-icon-view" v-if="showNewPassword"></i>
              <i class="iconfont" v-if="!showNewPassword">&#xe723;</i>
            </div>
            </div>
            
            
        
        </el-form-item>

        <el-form-item  prop="workingSpace">
           <div class="input-body">
              <input :type="inputType" placeholder="请再次确认新密码" class="input-input" maxlength="12">
              <div class="input-icon" @click="changeType">
              <i class="el-icon-view" v-if="showNewPassword"></i>
              <i class="iconfont" v-if="!showNewPassword">&#xe723;</i>
            </div>
            </div>
        </el-form-item>

        <!-- <el-form-item label="手机号码:  " prop="mobile">
          <el-input v-model="ruleForm.mobile"></el-input>
        </el-form-item> -->
        <el-form-item  prop="verification">
          <input :type="inputType" placeholder="请输入短信新密码" class="input-input" maxlength="12" id="identifying">
          <el-button type="primary" plain class="get-button-con" v-if="show" @click="getCode">获取验证码</el-button>
          <el-button type="primary" plain disabled class="wait-button-con" v-if="!show">{{count}} 秒后重发</el-button>
          
        </el-form-item>
        
        <div class="PersonalPassword-change-commit">
          <el-form-item>
            <el-button type="primary" class="login-self">确认更改</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalPassword",
  data() {
    return {
      showNewPassword: false,
      inputType: 'password',
      iconColor: '',
      show: true,
      input21: '',
   count: '',
   timer: null,
      ruleForm: {
        name: "",
        IDCardNuM: "",
        sex: "",
        birthday: "",
        native: "",
        workingSpace: "",
        education: "",
        graduteSchool: "",
        position: "",
        workType: "",
        mobile: "",
        verification: "",
        mail: "",
        company: "",
        qualification: ""
      }
    };
  },
  methods: {
    
    changeType() {
      if(this.inputType == 'text') {
        this.inputType = 'password';
        this.showNewPassword =false;
        console.log(this.inputType)
      } else {
        this.inputType = 'text';
        this.showNewPassword =true;
        console.log(this.inputType)
      }
    },
    getCode(){
     const TIME_COUNT = 60;
     if (!this.timer) {
       this.count = TIME_COUNT;
       this.show = false;
       this.timer = setInterval(() => {
       if (this.count > 0 && this.count <= TIME_COUNT) {l
         this.count--;
        } else {
         this.show = true;
         clearInterval(this.timer);
         this.timer = null;
        }
       }, 1000)
      }
   }
  }
};
</script>

<style scoped>

#PersonalPassword {
  width: 830px;

  box-shadow: 0 0 2px #c7c5c5;
  background: #fffffd;
  border: 1px solid #e7e7e7;
  margin: 0px 0px 0px 20px;
  padding: 0px 0px 20px 0px;
}

.PersonalPassword-change {
  text-align: center;
}

.get-button{
  display: inline-block;
}
.wait-button-con {
  
  display: inline-block;
}
.test-but1 {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 180px;
  width: 120px;
  height: 36px;
  margin: auto;
  line-height: 36px;
  text-align: center;
}
.test-but2 {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 180px;
  width: 120px;
  height: 36px;
  margin: auto;
  line-height: 36px;
  text-align: center;
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


.input-input {
  border:1px solid #c5cddb;
  width: 358px;
border-radius: 2px;
height: 44px;
line-height: 44px;
background: #fff;
    font-size:14px;
    padding:0px 10px;
}
.input-icon {
  position: absolute;
  font-size: 18px;
  margin: -42px 0px 0px 515px;
}
.input-icon:hover {
  color: #409EFF;
  cursor: pointer;
}

.input-input:hover {
  border:1px solid #409EFF;
}
.input-input:focus {
  border:1px solid #409EFF;
}
.el-icon-view {
  font-size:18px;
}
#identifying {
  width:242px;
}
.get-button-con {
  height:44px;
  width:112px;
}
.wait-button-con {
  height:44px;
  width:112px;
}
.com-upload {
  padding:0px 200px;
}
.login-self {
  width: 358px;
font-size: 16px;
height: 44px;
}
@font-face {
  font-family: 'iconfont';  /* project id 1121282 */
  src: url('//at.alicdn.com/t/font_1121282_yrupv69b5jk.eot');
  src: url('//at.alicdn.com/t/font_1121282_yrupv69b5jk.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1121282_yrupv69b5jk.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1121282_yrupv69b5jk.woff') format('woff'),
  url('//at.alicdn.com/t/font_1121282_yrupv69b5jk.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1121282_yrupv69b5jk.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:18px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;}
</style>




