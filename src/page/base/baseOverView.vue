<template>
  <div class="base-box">
    <el-row>
      <h1 class="base-intro">{{baseOverView.basename}}</h1>
      <el-carousel :interval="4000" type="card" class="overview-box">
        <el-carousel-item v-for="(item,key) in baseOverView.pictureUrl" :key="key">
          <img :src="item" class="overview-img">
          <!-- <div class="title">TFBOYS成员、男歌手、舞者、演员</div>
            <div class="name">易烊千玺</div>
          <p class="detail">2005年首登电视荧屏，开始参演各类综艺节目</p>-->
        </el-carousel-item>
      </el-carousel>
    </el-row>
    <div
      class="base-content"
    >{{baseOverView.summary}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      baseOverView: {}
    };
  },
  props:['id'],
  mounted() {
    this.getBaseInfoById();
  },
  watch:{
    id:function(){
      this.getBaseInfoById();
    }
  },
  methods: {
    getBaseInfoById() {
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/base_getBaseAreaById.do?baseid=${this.id}`
      })
        .then(res => {
          console.log(res.data.data);
          this.baseOverView = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.base-box {
  margin-left: 30px;
  flex: 1;
  padding: 15px;
  background: #fff;
  max-width: 920px;
}
.base-intro {
  font-size: 15px;
}
.overview-box {
  position: relative;
  text-align: left;
}
.overview-img {
  height: 100%;
  width: 100%;
}
.base-content {
  padding-top: 30px;
}
</style>
