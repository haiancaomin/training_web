<template>
  <div>
    <user-login
      :dialogVisible="dialogVisible"
      v-on:closed="closeDialog"
      v-on:goToReg="goToRegist"
      v-on:logSuccess="logOK"
    ></user-login>
    <user-register
      :regDialogVisible="regDialogVisible"
      v-on:regclosed="closeRegDialog"
      v-on:goToLog="goToLogin"
    ></user-register>
    <el-header>
      <router-link to="/index">
        <div class="logo">
          <img src="../assets/favicon.png" alt>
          <span class="logo-words">智聚实训</span>
        </div>
      </router-link>
      <div id="loginBtn" class="login-self" @click="clickLogin" v-if="!showUser">
        <span class="el-icon-mobile-phone"></span>
        <span>登录/注册</span>
      </div>
      <div class="login-self-success" v-if="showUser">
        欢迎回来，
        <span>{{userName}}</span>
        <a href="javascript:;" class="logout" @click="logOut">退出</a>
      </div>

      <el-menu
        :default-active="defaultActive"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-menu-item index="/index">
          <a href="javascript:;">主页</a>
        </el-menu-item>
        <el-menu-item index="/course">
          <a href="javascript:;">培训课程</a>
        </el-menu-item>
        <el-menu-item index="/base">
          <a href="javascript:;">基地介绍</a>
        </el-menu-item>
        <el-menu-item index="/Inspection">
          <a href="javascript:;">高端考察</a>
        </el-menu-item>
        <el-menu-item index="/PesronalScoreSearch">
          <a href="javascript:;">证书公示</a>
        </el-menu-item>
        <el-menu-item index="/PersonalCenter">
          <a href="javascript:;">客户中心</a>
        </el-menu-item>
        <el-menu-item index="/newsList">
          <a href="javascript:;">资讯</a>
        </el-menu-item>
        <el-menu-item index="/download">
          <a href="javascript:;">资料下载</a>
        </el-menu-item>
      </el-menu>
    </el-header>
    <router-view></router-view>
  </div>
</template>

<script>
import UserLogin from "@/components/UserLogin";
import UserRegister from "@/components/UserRegister";
export default {
  data() {
    return {
      dialogVisible: false,
      regDialogVisible: false,
      userName: "",
      showUser: false
    };
  },
  components: {
    UserLogin,
    UserRegister
  },
  mounted() {
    this.addUserInfo();
  },
  computed: {
    defaultActive() {
      return "/" + this.$route.path.split("/")[1];
    }
  },
  methods: {
    addUserInfo() {
      var userInfo = JSON.parse(sessionStorage.getItem("user"));
      if (userInfo) {
        this.showUser = true;
        this.userName = userInfo.name;
      }
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath, this.defaultActive);
    },
    clickRegister: function() {
      this.dialogVisible = false;
      this.regDialogVisible = true;
    },
    clickLogin: function() {
      this.regDialogVisible = false;
      this.dialogVisible = true;
    },
    closeDialog: function(msg) {
      this.dialogVisible = msg;
    },
    closeRegDialog: function(msg) {
      this.regDialogVisible = msg;
    },
    goToRegist: function(msg) {
      this.regDialogVisible = msg;
    },
    goToLogin: function(msg) {
      this.dialogVisible = msg;
    },
    logOK: function(msg) {
      this.showUser = msg.showUser;
      this.userName = msg.user;
    },
    logOut:function(){
      sessionStorage.removeItem('user');
      this.$router.push({ path: '/index' });
      location.reload()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  background: rgba(36, 46, 104, 0.8);
  color: #fff;
  line-height: 80px !important;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 99;
  height: 80px !important;
}

.logo {
  float: left;
}

.logo-words {
  font-size: 18px;
  margin-left: 10px;
  color: #fff;
}
.el-menu {
  background: rgba(36, 46, 104, 0) !important                     ;
  float: right;
  height: 80px !important;
  line-height: 80px !important;
  border-bottom: 1px solid rgba(36, 46, 104, 0) !important;
}
.el-menu-item {
  background: rgba(36, 46, 104, 0) !important;
  height: 80px !important;
  line-height: 80px !important;
  width: 100px !important;
  text-align: center;
  font-size: 15px;
}
.login-self {
  float: left;
  margin: 0px 0px 0px 40px;
  color: #fff;
  cursor: pointer;
}
.login-self:hover {
  color: #ffd04b;
}
.login-self-success {
  float: left;
  margin: 0px 0px 0px 40px;
  color: #fff;
}
.logout{
  color:rgb(255, 208, 75);
  margin-left: 10px;
}
</style>
