<template>
  <div>
    <el-header>
      <div class="logo">
        <img src="../assets/favicon.png" alt>
      </div>
      <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-menu-item index="/index">
          <a href="javascript:;">主页</a>
        </el-menu-item>
        <el-menu-item index="/course">
          <a href="javascript:;">课程分类</a>
        </el-menu-item>
        <el-menu-item index="/base">
          <a href="javascript:;">基地展示</a>
        </el-menu-item>
        <el-menu-item index="/teacher">
          <a href="javascript:;">师资力量</a>
        </el-menu-item>
        <el-menu-item index="2">
          <a href="javascript:;">证书查询</a>
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
        <el-menu-item index="/Inspection">
          <a href="javascript:;">高端考察</a>
        </el-menu-item>
        <el-menu-item index="5">
          <a href="javascript:;">资讯</a>
        </el-menu-item>
        <el-menu-item index="5">
          <a href="javascript:;">人力资源服务</a>
        </el-menu-item>
        <el-menu-item index="/download">
          <a href="javascript:;">资料下载</a>
        </el-menu-item>

        <el-menu-item index="8">
          <a href="javascript:;">联系我们</a>
        </el-menu-item>
      </el-menu>
    </el-header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath, this.$route.path);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  background: #545c64;
  color: #fff;
  line-height: 60px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 99;
}

.logo {
  float: left;
}
.el-menu {
  float: right;
}
</style>
