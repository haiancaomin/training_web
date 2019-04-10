<template>
  <div class="base-container">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          :default-active="$route.path"
          :default-openeds="menuopen"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <span>实训基地</span>
            </template>
            <el-menu-item index="/base/overview">实训基地概览</el-menu-item>
            <el-menu-item index="/base/show1">实训基地1</el-menu-item>
            <el-menu-item index="1-2">实训基地2</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <span>实地基地</span>
            </template>
            <el-menu-item index="2-1">实地基地概览</el-menu-item>
            <el-menu-item index="2-1">实地基地1</el-menu-item>
            <el-menu-item index="2-2">实地基地2</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuopen: ["1"]
    };
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
  width: 1200px;
  margin: 0 auto;
  padding-top: 80px;
  display: flex;
}
.tac .el-col {
  width: 250px;
}
</style>

