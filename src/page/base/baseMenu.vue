<template>
  <div class="base-container">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          :unique-opened="true"
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <span>实训基地</span>
            </template>
            <el-menu-item
              v-for="(item,key) in baseList1"
              :key="key"
              :index="'/base/'+(key==0?'overview/':'show1/')+item.bid"
            >{{item.basename}}</el-menu-item>
            <!-- <el-menu-item index="/base/show1">实训基地1</el-menu-item>
            <el-menu-item index="1-2">实训基地2</el-menu-item>-->
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <span>实地基地</span>
            </template>
            <el-menu-item
              v-for="(item,key) in baseList2"
              :key="key"
              :index="'/base/'+(key==0?'overview/':'show1/')+item.bid"
            >{{item.basename}}</el-menu-item>
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
      baseList1: [],
      baseList2: []
    };
  },
  mounted() {
    if(this.global.baseShowFlag=="0") {
      this.getBaseList("0", this.showDefault);
    this.getBaseList("1");
    } 
    this.global.setBaseShowFlag("1");
  },
  destroyed() {
    this.global.setBaseShowFlag("0");
    
  },
  watch: {
    $route(to, from) {
      if (to.path == "/base"&&this.global.baseShowFlag=="0") {
        this.showDefault();
      } else if (to.path == "/base"&&this.global.baseShowFlag=="1") {
        window.history.back(-1);
      }
      
    }
  },
  methods: {
    getBaseList(type, fun) {
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/base_showBaseInfo.do?basetype=${type}`
      })
        .then(res => {
          if (type == 0) {
            this.baseList1 = res.data.data;
            if (fun != "undefined") {
              fun();
            }
          }
          if (type == 1) {
            this.baseList2 = res.data.data;
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    showDefault() {
      var id = this.$route.params.id;
      if (id == undefined) {
        this.$router.push({ path: `/base/overview/${this.baseList1[0].bid}` });
      }
    }
  }
};
</script>

<style scoped>
.base-container {
  width: 1200px;
  margin: 0 auto;
  margin-top: 80px;
  display: flex;
}
.tac .el-col {
  width: 300px;
}
</style>