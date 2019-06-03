<template>
  <div class="base-box">
    <el-row>
      <h1 class="base-intro">{{baseOverView.basename}}</h1>
      <el-carousel :interval="4000" type="card" class="overview-box">
        <el-carousel-item v-for="(item,key) in picurl" :key="key">
          <img :src="item" class="overview-img">
        </el-carousel-item>
      </el-carousel>
    </el-row>
    <div class="base-content">
      <pre>{{baseOverView.summary}}</pre>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      baseOverView: {},
      picurl: []
    };
  },
  props: ["id"],
  mounted() {
    this.getBaseInfoById();
  },
  watch: {
    id: function() {
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
          this.baseOverView = res.data.data;
          this.picurl = res.data.data.pictureUrl;
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
pre {
  white-space: pre-wrap;
  text-align: justify;
}
.base-box {
  margin-left: 30px;
  flex: 1;
  padding: 15px;
  background: #fff;
  max-width: 870px;
}
.base-intro {
  font-size: 17px;
  height: 70px;
  line-height: 70px;
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