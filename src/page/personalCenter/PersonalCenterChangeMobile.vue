<template>
  <div id="PersonalCenterChangeMobile">

     <div class="crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">客户中心</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalPassword' }">账户信息</el-breadcrumb-item>
        <el-breadcrumb-item>联系方式</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="change-mobile-form">
        <el-form :model="ruleForm" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="IDCardNuM">
         
            
            <div class="input-body">
                <div class="input-icon1">
              <i class="el-icon-mobile-phone"></i>
            </div>
              <input type="text" placeholder="请输入新手机号" class="input-input" maxlength="12">
            </div>
          
            
            
        
        </el-form-item>

<el-form-item>
        <el-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将<em>法人身份照扫描件</em>拖到此处，或<em>点击上传</em></div>
  
</el-upload>
 </el-form-item>

 <el-form-item>
        <el-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将<em>营业执照扫描件</em>拖到此处，或<em>点击上传</em></div>
 
</el-upload>
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
  name: "PersonalCenterChangeMobile",
  data() {
    return {
     
    };
  },
  methods: {
    
   
  }
};
</script>

<style scoped>

#PersonalCenterChangeMobile {
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
.input-input {
  border:1px solid #c5cddb;
  width: 358px;
border-radius: 2px;
height: 44px;
line-height: 44px;
background: #fff;
    font-size:14px;
    padding:0px 10px 0px 40px;
}
.input-input:hover {
  border:1px solid #409EFF;
}
.input-input:focus {
  border:1px solid #409EFF;
}
.input-icon1 {
  position: absolute;
  font-size: 18px;
  margin: 1px 0px 0px 12px;
}
.change-mobile-form {
    padding:0px 190px 0px 190px;
}
.login-self {
  width: 358px;
font-size: 16px;
height: 44px;
}

</style>




