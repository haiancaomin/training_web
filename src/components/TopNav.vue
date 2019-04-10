<template>
  <div>
    <user-login :dialogVisible="dialogVisible" v-on:closed="closeDialog" v-on:goToReg="goToRegist"></user-login>
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
      <div class="login-self" @click="clickLogin">
        <span class="el-icon-mobile-phone"></span>
        <span>登录/注册</span>
      </div>

      <el-menu
        :default-active="$route.path"
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
        <!-- <el-menu-item index="/teacher">
          <a href="javascript:;">师资力量</a>
        </el-menu-item>-->
        <el-menu-item index="/Inspection">
          <a href="javascript:;">高端考察</a>
        </el-menu-item>
        <el-menu-item index="/PesronalScoreSearch">
          <a href="javascript:;">证书公示</a>
        </el-menu-item>
        <el-menu-item index="/PersonalCenter">
          <a href="javascript:;">客户中心</a>
        </el-menu-item>
        <!-- <el-submenu index="2">
        <template slot="title">关于我们</template>
        <el-menu-item index="2-1">机构介绍</el-menu-item>
        <el-menu-item index="2-2">培训理念</el-menu-item>
        <el-menu-item index="2-3">培训定位</el-menu-item>
        <el-menu-item index="2-4">资质荣誉</el-menu-item>
        <el-menu-item index="2-5">管理体系</el-menu-item>
        <el-menu-item index="2-6">招贤纳士</el-menu-item>
        </el-submenu>-->
        <!-- <el-submenu index="3">
        <template slot="title">课程分类</template>
        <el-submenu index="3-1">
          <template slot="title">生产</template>
          <el-menu-item index="3-1-1">质量员</el-menu-item>
          <el-menu-item index="3-1-2">工艺员</el-menu-item>
          <el-menu-item index="3-3-3">资料员</el-menu-item>
        </el-submenu>
        <el-submenu index="3-2">
          <template slot="title">施工</template>
          <el-menu-item index="3-2-1">灌浆</el-menu-item>
          <el-menu-item index="3-2-2">吊装</el-menu-item>
          <el-menu-item index="3-2-3">打胶</el-menu-item>
        </el-submenu>
        </el-submenu>-->
        <el-menu-item index="/newsList">
          <a href="javascript:;">资讯</a>
        </el-menu-item>
        <!-- <el-menu-item index="/HRServiceTypeChoice">
          <a href="javascript:;">人力资源服务</a>
        </el-menu-item>-->
        <el-menu-item index="/download">
          <a href="javascript:;">资料下载</a>
        </el-menu-item>

        <!-- <el-menu-item index="/contact">
          <a href="javascript:;">联系我们</a>
        </el-menu-item>-->
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
      regDialogVisible: false
    };
  },
  components: {
    UserLogin,
    UserRegister
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath, this.$route.path);
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
</style>
