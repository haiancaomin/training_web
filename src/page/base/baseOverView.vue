<template>
  <div class="base-box">
    <el-row>
      <h1 class="base-intro">基地概览</h1>
      <el-carousel :interval="4000" type="card" height="370px" width="650px" class="overview-box">
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
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550816702991&di=a99af2609be2beb8e2db46b5b30e8297&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01481559841b3da801215603a36220.jpg%402o.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550816702989&di=77e855c8efc558aea5a71b254fc9d7c9&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01edb3555ea8100000009af0ba36f5.jpg%401280w_1l_2o_100sh.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550816702991&di=a99af2609be2beb8e2db46b5b30e8297&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01481559841b3da801215603a36220.jpg%402o.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550816702989&di=77e855c8efc558aea5a71b254fc9d7c9&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01edb3555ea8100000009af0ba36f5.jpg%401280w_1l_2o_100sh.jpg"
     
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
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
.base-content {
  padding-top: 30px;
}
</style>
