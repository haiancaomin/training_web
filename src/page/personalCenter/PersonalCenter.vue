<template>
  <div id="personal_center_div">
    <div class="base-container">
      <el-row class="tac">
        <el-col :span="12">
          <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :unique-opened="true"
            router
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-tickets"></i>
                <span>我的订单</span>
              </template>
              <el-menu-item index="/PersonalCenter/PersonalCenterAllOrder">
                <span class="in-submenu">全部</span>
              </el-menu-item>
              <el-menu-item index="/PersonalCenter/PersonalCenterUncompletedOrder">
                <span class="in-submenu">待付款</span>
              </el-menu-item>
              <el-menu-item index="/PersonalCenter/PersonalCenterNotInvoice">
                <span class="in-submenu">订单发票</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>公司人员</span>
              </template>
              <el-menu-item index="/PersonalCenter/PersonalCenterPersonInfo">
                <span class="in-submenu">人员信息</span>
              </el-menu-item>
              <el-menu-item index="/PersonalCenter/PersonalCenterAddPerson">
                <span class="in-submenu">人员添加</span>
              </el-menu-item>
            </el-submenu>

            <el-menu-item index="/PersonalCenter/PersonalCenterInvoiceShow">
              <i class="el-icon-document"></i>
              <span slot="title">发票管理</span>
            </el-menu-item>

            <el-menu-item index="/PersonalCenter/PersonalCenterAuthentication">
              <i class="el-icon-success"></i>
              <span slot="title">账号认证</span>
            </el-menu-item>

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>证书查询</span>
              </template>
              <el-menu-item index="/PersonalCenter/PersonalCenterCertificate">
                <span class="in-submenu">实训证书</span>
              </el-menu-item>
              <el-menu-item index="/PersonalCenter/PersonalCenterjieye">
                <span class="in-submenu">结业证明</span>
              </el-menu-item>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>账户信息</span>
              </template>
              <el-menu-item index="/PersonalCenter/PersonalPassword">
                <span class="in-submenu">修改密码</span>
              </el-menu-item>
              <el-menu-item index="/PersonalCenter/PersonalCenterChangeMobile">
                <span class="in-submenu">修改电话</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalCenter",
  data() {
    return {};
  },
  mounted() {
    if (this.global.personalCenterShowFlag == "0") {
      this.showDefault();
    }
    this.global.setPersonalCenterShowFlag("1");
  },
  destroyed() {
    this.global.setPersonalCenterShowFlag("0");
  },
  watch: {
    $route(to, from) {
      if (
        to.path == "/PersonalCenter" &&
        this.global.personalCenterShowFlag == "0"
      ) {
        this.showDefault();
      } else if (
        to.path == "/PersonalCenter" &&
        this.global.personalCenterShowFlag == "1"
      ) {
        window.history.back(-1);
      }
    }
  },
  methods: {
    showDefault() {
      this.$router.push({
        path:
          this.$route.path == "/PersonalCenter"
            ? "/PersonalCenter/PersonalCenterAllOrder"
            : this.$route.path
      });
    }
  }
};
</script>

<style scoped>
#personal_center_div {
  width:100%;
 
  min-width: 1220px;
  max-width: 1920px;
  background: #fff;

}
.base-container {
  width: 1220px;

  margin: 0px auto;
  margin-top:80px;
  padding: 20px;
  display: flex;
  
}
.tac .el-col {
  width: 210px;
}
.router-view {
  margin: 0px 0px 0px 1000px;
}
span {
  padding: 0px 0px 0px 10px;
}
i {
  padding: 0px 0px 0px 0px;
}
.in-submenu {
  padding: 0px 0px 0px 35px;
}
</style>