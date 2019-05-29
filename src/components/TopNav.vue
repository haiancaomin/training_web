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
    <div class="message_board_outline">
      <div class="message_board">
        <div
          class="to_message_board"
          @mouseenter="enter_to_message_board"
          @mouseleave="leave_to_message_board"
        >
          <p class="iconfont" v-show="show_to_message_board">&#xe602;</p>
          <div class="hover_to_message_board" v-show="!show_to_message_board">尽情留言</div>
        </div>
        <div class="split_line">
          <div class="line"></div>
        </div>
        <div
          class="get_contact_info"
          @mouseenter="enter_get_contact_info"
          @mouseleave="leave_get_contact_info"
        >
          <p class="el-icon-phone-outline" v-show="show_get_contact_info"></p>
          <div class="hover_get_contact_info" v-show="!show_get_contact_info">联系我们</div>
        </div>
        <div class="split_line">
          <div class="line"></div>
        </div>
        <div class="erweima" @mouseenter="enter_erweima" @mouseleave="leave_erweima">
          <p class="iconfont" v-show="show_erweima">&#xe607;</p>
          <div class="hover_erweima" v-show="!show_erweima">关注我们</div>
        </div>
      </div>
      <div class="contact_us" v-show="!show_get_contact_info">
        <p>电话：</p>
        <p>0513-81055866</p>
        <p>&nbsp;</p>
        <p>邮箱：</p>
        <p>MKT_Dept@zhjcx.cn</p>
      </div>
      <div class="contact_us_arrow" v-show="!show_get_contact_info"></div>
      <div class="check_erweima" v-show="!show_erweima">
        <img src="../assets/erweima.jpg">
      </div>
      <div class="check_erweima_arrow" v-show="!show_erweima"></div>
    </div>
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
        <el-dropdown :show-timeout="0" :hide-timeout="500" @command="handleCommand">
          <div class="underline_text">
            <span class="el-dropdown-link">欢迎回来，{{userName}}</span>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="personalCenter">个人中心</el-dropdown-item>
            <el-dropdown-item command="logOut">注销</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
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
        <el-menu-item index="/MessageBoard">
          <a href="javascript:;">留言板</a>
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
      showUser: false,
      show_to_message_board: true,
      show_get_contact_info: true,
      show_erweima: true
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
    enter_to_message_board() {
      this.show_to_message_board = false;
    },
    leave_to_message_board() {
      this.show_to_message_board = true;
    },
    enter_get_contact_info() {
      this.show_get_contact_info = false;
    },
    leave_get_contact_info() {
      this.show_get_contact_info = true;
    },
    enter_erweima() {
      this.show_erweima = false;
    },
    leave_erweima() {
      this.show_erweima = true;
    },
    handleCommand(command) {
      if (command == "logOut") {
        this.logOut();
      } else if (command == "personalCenter") {
        this.$router.push({ path: `/PersonalCenter/PersonalCenterAllOrder` });
      }
    },
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
    logOut: function() {
      sessionStorage.removeItem("user");
      this.$router.push({ path: "/index" });
      location.reload();
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
.el-dropdown-link:hover {
  color: #ffd04b;
}
.el-dropdown-link {
  color: #fff;
  cursor: pointer;
  text-decoration: underline;
}
.logout {
  color: rgb(255, 208, 75);
  margin-left: 10px;
}

.message_board {
  width: 62px;
  height: 223px;
  border: 1px solid #ccc;
  border-radius: 6px;
  position: fixed;
  margin: 200px 20px 0px 0px;
  background: #fff;
  right: 0;
  z-index: 100;
  padding: 1px;
}
.to_message_board,
.get_contact_info,
.erweima {
  width: 60px;
  height: 60px;
  text-align: center;
  cursor: pointer;
}
.line {
  width: 50px;
  border-top: 1px solid #ccc;
  margin: 0px auto;
}
.split_line {
  height: 20px;
  text-align: center;
  padding: 10px 0px 0px 0px;
}
.get_contact_info p {
  font-size: 30px;
  padding: 19px 0px 0px 0px;
  color: #666;
}
.to_message_board p {
  font-size: 30px;
  padding: 19px 0px 0px 0px;
  color: #666;
}
.erweima p {
  font-size: 30px;
  padding: 10px 0px 0px 0px;
  color: #666;
}
.hover_to_message_board {
  background: #49af4f;
  color: #fff;
  padding: 10px;
  width: 58px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.hover_get_contact_info {
  background: #49af4f;
  color: #fff;
  width: 58px;
  padding: 10px;
}
.hover_erweima {
  background: #49af4f;
  color: #fff;
  padding: 10px;
  width: 58px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
.contact_us {
  position: fixed;
  width: 150px;
  height: 100px;
  margin: 262px 79px 0px 0px;
  right: 0;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: #fff;
  z-index: 101;
  text-align: center;
  padding:8px 0px 0px 0px;
}
.contact_us p{
 font-size: 12px;
 font-weight: bold;
}
.contact_us_arrow {
  border: 1px solid #ccc;
  border-style: solid;
  border-width: 7px 4px;
  border-color: transparent transparent transparent #fff;
  width: 0px;
  height: 0px;
  position: fixed;
  margin: 302px 72px 0px 0px;
  z-index: 102;

  right: 0;
}
.check_erweima {
  position: fixed;
  width: 105px;
  height: 105px;
  margin: 337px 79px 0px 0px;
  right: 0;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: #fff;
  z-index: 101;
  padding:2px;
}
.check_erweima img {
  width: 100px;
  height: 100px;
}
.check_erweima_arrow {
  border: 1px solid #ccc;
  border-style: solid;
  border-width: 7px 4px;
  border-color: transparent transparent transparent #fff;
  width: 0px;
  height: 0px;
  position: fixed;
  margin: 382px 72px 0px 0px;
  z-index: 102;
  right: 0;
}
@font-face {
  font-family: "iconfont"; /* project id 1131189 */
  src: url("//at.alicdn.com/t/font_1131189_1xxz51p2g5r.eot");
  src: url("//at.alicdn.com/t/font_1131189_1xxz51p2g5r.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1131189_1xxz51p2g5r.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1131189_1xxz51p2g5r.woff") format("woff"),
    url("//at.alicdn.com/t/font_1131189_1xxz51p2g5r.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1131189_1xxz51p2g5r.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;

  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
