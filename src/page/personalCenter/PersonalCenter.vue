<template>
<div class="base-container">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          :default-active="$route.path"
          
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        > 
        <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span>我的订单</span>
            </template>
            <el-menu-item index="/personalCenter/PersonalCenterAllOrder"><span class="in-submenu">全部</span></el-menu-item>
            <el-menu-item index="/personalCenter/PersonalCenterUncompletedOrder"><span class="in-submenu">待完成</span></el-menu-item>
            <el-menu-item index="/personalCenter/PersonalCenterNotInvoice"><span class="in-submenu">未开发票</span></el-menu-item>
            <el-menu-item index="/personalCenter/PersonalCenterHaveInvoice"><span class="in-submenu">已开发票</span></el-menu-item>
          </el-submenu>
        <el-menu-item index="/personalCenter/PesronalScoreSearch">
        <i class="el-icon-search"></i>
            <span slot="title">成绩查询</span>
      </el-menu-item>
<el-menu-item index="/personalCenter/PersonalCenterAddPerson">
        <i class="el-icon-circle-plus-outline"></i>
            <span slot="title">人员添加</span>
      </el-menu-item>

      <el-menu-item index="/personalCenter/PersonalCenterInvoiceShow">
        <i class="el-icon-tickets"></i>
            <span slot="title">发票信息</span>
      </el-menu-item>
          
          <el-menu-item index="/personalCenter/PersonalPassword">
        <i class="el-icon-setting"></i>
            <span slot="title">修改密码</span>
      </el-menu-item>

        </el-menu>
      </el-col>
    </el-row>
    <router-view></router-view>
  </div>
  
</template>

<script>
export default {
  
  name: "PersonalCenter",
  data() {
    return {
       menuopen: ["1"]
    };
  },
  components: {
    
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.base-container {
  width: 1000px;
  margin: 80px auto;
  padding: 20px;
  display: flex;
  background: #fffffd;
  box-shadow: 0 0 2px #c7c5c5;
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


