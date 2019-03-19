<template>
  <div class="base-box">
    <el-row>
      <h1 class="base-intro">基地概览</h1>
      <el-carousel :interval="4000" type="card" class="overview-box">
        <el-carousel-item v-for="(item,key) in teachers" :key="key">
          <img :src="item" class="overview-img">
          <!-- <div class="title">TFBOYS成员、男歌手、舞者、演员</div>
            <div class="name">易烊千玺</div>
          <p class="detail">2005年首登电视荧屏，开始参演各类综艺节目</p>-->
        </el-carousel-item>
      </el-carousel>
    </el-row>
    <div class="base-content">基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览基地概览</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      teachers: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552968570026&di=3f39e24bace2d13a9b1afcf3b20e185c&imgtype=0&src=http%3A%2F%2Fres.hd.hdbs.cn%2Fa%2F10001%2F201903%2F47e27ad9b57c9e7f85df986a2c534ad4.jpeg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552968593362&di=411c94cc693d6f21032399ed9422c27d&imgtype=0&src=http%3A%2F%2Fwww.beijinglingyuan.com%2Fueditor%2Fphp%2Fupload%2Fimage%2F20190309%2F1552092004101503.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552968625770&di=80df88a96b3f572b94e53c6647a0873e&imgtype=0&src=http%3A%2F%2Fwww.fangziyou.com%2Fimages%2Fwebsite%2Fimages%2F6ae19086-8891-467f-84d7-a60a10228626_450X300.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553563363&di=46e4e0e4146eb98f9a0f5345a0da3ad9&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2F46176fefb27b3cf778f515f5a81a8fa2.png"
     
      ]
    };
  },
  methods: {}
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
.base-intro{
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
