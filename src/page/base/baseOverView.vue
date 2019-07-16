<template>
  <div class="base-box">
    <div class="over_view_body">
    <el-row>
      <h1 class="base-intro">{{baseOverView.basename}}</h1>
      <div class="base_carousel">
      <el-carousel :interval="4000" type="card" class="overview-box" height="357px">
        <el-carousel-item v-for="(item,key) in picurl" :key="key">      
          <div class="overview-img">
            <div class="base_hover_div"><pre>{{baseOverView.summary}}</pre></div>
            <img :src="item">
          </div>
        </el-carousel-item>
      </el-carousel>
      </div>
    </el-row>
    
    </div>
    <div class="base-content">
      <div class="base_instruction">
      <pre>{{baseOverView.summary}}</pre>
      </div>
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
          console.log(this.baseOverView);
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
.base-box {
  width:100%;
  min-width: 1220px;
  max-width:1920px;
  background: #fff;
}
.over_view_body {
  width:1220px;
  margin:0px auto;
}
.base-intro {
  font-size: 27px;
  line-height: 40px;
  text-align: center;
  padding: 0 15px;
  margin: 35px 0px 0px 0px;
  font-family: "Microsoft YaHei";
 
}
.overview-box {
  position: relative;
  text-align: left;
}
.overview-img {
 height:350px;
  box-shadow: -5px 5px 7px #aaa;
  border-radius: 8px;
  margin:0px 10px 10px 10px;
}
.overview-img:hover .base_hover_div{
  opacity: 1;
}
.base_hover_div {
  position: absolute;
  color:#fff;
  width:480px;
  height:350px;
  border-radius: 8px;
  margin:0px 10px 10px 0px;
  background: rgba(9,185,125,0.8);
  transition: all ease-in-out 0.3s;
  opacity: 0;
  padding:30px;
  line-height: 20px;
}
.base_hover_div pre {
 
  white-space: pre-wrap;
  text-align: justify;
  line-height: 30px;
  font-size: 15px;
  color:#fff;
  font-family: "youyuan";
  font-weight: bold;
}
.overview-img img{
  height: 100%;
  width: 100%;
  border-radius: 8px;
}
.base-content {
  background: #1d2939;
  margin:30px 0px 0px 0px;
}
pre {
  white-space: pre-wrap;
  text-align: justify;
  line-height: 30px;
  font-size: 15px;
  color:#fff;
  font-family: "youyuan";
  
}
.base_carousel {
  width:1000px;
  margin:0px auto;
  margin-top:35px;
}
.base_instruction {
  width:1220px;
  margin:0px auto;
  padding: 30px 80px;
}

</style>