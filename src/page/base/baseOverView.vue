<template>
  <div class="base-box">
    <el-row>
      <h1 class="base-intro">{{baseOverView.basename}}</h1>
      <el-carousel :interval="4000" type="card" class="overview-box">
        <el-carousel-item v-for="(item,key) in picurl" :key="key">      
          <div class="overview-img"><img :src="item"></div>
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
  margin:0px 0px 20px 30px;
  flex: 1;
  padding: 15px;
  background: #fff;
  max-width: 870px;
  box-shadow: 0 0 2px #c7c5c5;
  border: 1px solid #e7e7e7;
}

.base-intro {
  font-size: 18px;
  line-height: 40px;
  border: 1px solid #e4e7ed;
  background: #e4e7ed;
  padding: 0 15px;
  border-radius: 3px;
  margin: 0px 0px 30px 0px;
  border-left: 2px solid #409eff;
}
.overview-box {
  position: relative;
  text-align: left;
}
.overview-img {
  height: 290px;
  width: 410px;
  box-shadow: -5px 5px 6px #bbb;
  border-radius: 8px;
  margin:0px 10px 10px 10px;
}
.overview-img img{
  height: 100%;
  width: 100%;
  border-radius: 8px;
}
.base-content {
  padding-top: 30px;
}
pre {
  line-height: 26px;
  font-size: 14px;
  color:#555;
  font-family: "Microsoft JhengHei";

}
</style>