<template>
  <div class="base-box">
    <div class="block">
      <div class="base_name_outline_body">
        <div class="base_name">
          <router-link to="/SignUp">
            <div class="signup_btn">前往报名</div>
          </router-link>
          <p>{{baseInfo.basename}}</p>
        </div>
      </div>
      <img :src="baseInfo.pictureUrl[0]" class="base-scan-img" v-if="baseInfo.pictureUrl" />
      <div class="base_summary_outline_body">
        <div class="base_summary">
          <pre>{{baseInfo.summary}}</pre>
        </div>
      </div>
    </div>
    <div class="base_zone" v-for="(item,key) in baseInfo.arealist" :key="key">
      <div v-if="key%2==0" class="back_blue">
        <div class="split_div" v-if="key != baseInfo.arealist.length-1"></div>
        <div class="back_blue_inline_body">
        <div class="back_blue_areaname">{{item.areaname}}</div>
        <div class="back_blue_summary">{{item.area_summary}}</div>
        <div class="back_blue_img">
          <el-carousel height="470px" :interval="3000">
            <el-carousel-item v-for="(v,k) in item.areapictureUrl" :key="k">
              <div class="img_div">
                <img :src="v" class="img_carousel" />
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      </div>
      <div v-if="key%2==1" class="back_white">
        <div class="split_div" v-if="key != baseInfo.arealist.length-1"></div>
        <div class="back_white_inline_body">
        <div class="back_white_areaname">{{item.areaname}}</div>
        <div class="back_white_summary">{{item.area_summary}}</div>
        <div class="back_white_img">
          <el-carousel height="470px" :interval="3000">
            <el-carousel-item v-for="(v,k) in item.areapictureUrl" :key="k">
              <div class="img_div">
                <img :src="v" class="img_carousel" />
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  data() {
    return {
      activeNames: ["1"],
      baseInfo: [],
      swipershow: false,
      swiperOption: {
        autoplay: {
          disableOnInteraction: false
        },
        observer: true,
        observeParents: true,
        loop: true,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }
      },
      hover_status: 0
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  props: ["id"],
  mounted() {
    this.getBaseInfoById();
  },
  watch: {
    id: function() {
      this.swipershow = false;
      this.getBaseInfoById();
    }
  },
  methods: {
    back_pre() {
      window.history.back(-1);
    },
    change_status_to_1() {
      this.hover_status = 1;
    },
    change_status_to_0() {
      this.hover_status = 0;
    },
    getBaseInfoById() {
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/base_getBaseAreaById.do?baseid=${this.id}`
      })
        .then(res => {
          this.baseInfo = res.data.data;
          this.swipershow = true;
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
  z-index: 1;
}
.base-box {
  max-width: 1920px;
  min-width: 1220px;
  overflow: hidden;
}
.el-collapse-item {
  font-size: 14px;
  z-index: 1;
}
.base-intro .swiper-slide {
  width: 300px;
  height: 300px;
  z-index: 1;
}
.base-intro-pic {
  width: 100%;
  height: 100%;
  z-index: 1;
}
.guanjiang-pic {
  width: 100%;
  height: 300px;
  z-index: 1;
}
.base-intro .swiper-container {
  width: 100%;
  height: 100%;
  z-index: 1;
}
.base-content {
  padding-top: 30px;
  z-index: 1;
}
.guanjiang-content {
  padding: 5px 10px;
  z-index: 1;
}
#base-scan {
  width: 100%;
  margin: 0 auto;
  z-index: 1;
}
.base-scan-img {
  width: 1920px;
  height: 440px;
  overflow: hidden;
}
.base_summary_outline_body {
  width: 100%;
  min-width: 1220px;
  max-width: 1920px;
  background: #fff;
}
.base_summary {
  background: #fff;
  width: 1220px;
  margin: 0px auto;
  padding: 90px 0px 30px 0px;
}
.base_summary pre {
  color: #333;
  font-size: 17px;
  line-height: 30px;
  font-family: "SimSun";
}
.base_name_outline_body {
  width: 100%;
  min-width: 1220px;
  max-width: 1920px;
  position: absolute;
  margin-top: 370px;
}
.base_name {
  width: 1020px;
  background: #fff;
  height: 140px;
  margin: 0px auto;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e7e7e7;
}
.base_name p {
  font-size: 30px;
  margin: 48px 0px 0px 45px;
  letter-spacing: 10px;
  color: #151515;
  font-family: "Microsoft YaHei";
}
.back_blue {
  background: rgb(79, 83, 209);
  width: 100%;
  min-width: 1220px;
  max-width: 1920px;
  overflow: hidden;
  height: 600px;
}
.back_blue_inline_body,.back_white_inline_body {
  width:1220px;
  margin:0px auto;
}
.back_blue_img {
  position: absolute;
  margin: 60px 0px 0px 50px;
  width: 620px;
  height: 470px;
  z-index: 1;
}
.back_blue_img img {
  width: 600px;
  height: 450px;
  border-radius: 8px;
  z-index: 1;
}
.back_blue_areaname {
  width: 400px;
  text-align: center;
  position: absolute;
  margin: 100px 0px 0px 735px;
  color: #fff;
  font-size: 30px;
  font-family: "YouYuan";
  font-weight: bold;
  z-index: 1;
}
.back_blue_summary {
  position: absolute;
  width: 400px;
  margin: 220px 0px 0px 735px;
  color: #fff;
  font-size: 18px;
  line-height: 30px;
  font-family: "SimSun";
  text-indent: 35px;
  z-index: 1;
}

.back_white {
  background: #fff;
  width: 100%;
  min-width: 1220px;
  max-width: 1920px;
  overflow: hidden;
  height: 600px;
}
.back_white_img {
  position: absolute;
  margin: 60px 0px 0px 530px;
  width: 620px;
  height: 470px;
  z-index: 1;
}
.back_white_img img {
  width: 600px;
  height: 450px;
  border-radius: 8px;
  z-index: 1;
}
.back_white_areaname {
  width: 400px;
  text-align: center;
  position: absolute;
  margin: 50px 0px 0px 70px;
  color: #2c2c2c;
  font-size: 30px;
  font-family: "YouYuan";
  font-weight: bold;
  z-index: 1;
}
.back_white_summary {
  position: absolute;
  width: 400px;
  margin: 170px 0px 0px 70px;
  color: #2c2c2c;
  font-size: 18px;
  line-height: 30px;
  font-family: "SimSun";
  text-indent: 35px;
  z-index: 1;
}
.img_div {
  box-shadow: 0 0 12px #aaa;
  margin: 10px;
  border-radius: 8px;
  z-index: 1;
}
.back_blue .split_div {
  width:100%;
  min-width: 1220px;
  max-width: 1920px;
  border-style: solid;
  border-width: 100px 610px;
  border-color: transparent transparent #fff #fff;
  position: absolute;
  margin: 400px 0px 0px 0px;
  overflow: hidden;
}
.back_white .split_div {
  width:100%;
  min-width: 1220px;
  max-width: 1920px;
  border-style: solid;
  border-width: 100px 600px;
  border-color: transparent transparent rgb(79, 83, 209) rgb(79, 83, 209);
  position: absolute;
  margin: 400px 0px 0px 0px;
   overflow: hidden;
}
.el-icon-back {
  font-size: 25px;
  margin: 11px 0px 0px 11px;
  font-weight: bold;
  color: #666;
  z-index: 1;
}
.back_btn_hover {
  background: #49af4f;
  color: #fff;
  width: 48px;
  height: 48px;
  padding: 5px 5px 5px 10px;
  border-radius: 8px;
  z-index: 1;
}
.zhiju_connect {
  position: absolute;
  width:100%;
  min-width: 1220px;
  max-width: 1920px;
  margin: -29px 0px 0px 0px;
}
.connect_inline_body {
  width:150px;
  margin:0px auto;
}
.connect_top {
  height: 30px;
  width: 150px;
  background: rgb(79, 83, 209);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.connect_bottom {
  height: 30px;
  width: 150px;
  background: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.back_btn {
  border: 1px solid #ccc;
  position: fixed;
  z-index: 8;
  margin: 500px 15% 0px 0px;
  right: 0;
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 8px;
  cursor: pointer;
  z-index: 2;
  animation: myfirst 2s;
  -moz-animation: myfirst 2s; /* Firefox */
  -webkit-animation: myfirst 2s; /* Safari and Chrome */
  -o-animation: myfirst 2s; /* Opera */
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
}
@keyframes myfirst {
  0% {
    bottom: 40px;
  }
  50% {
    bottom: 60px;
  }
  100% {
    bottom: 40px;
  }
}

@-moz-keyframes myfirst /* Firefox */ {
  0% {
    bottom: 20px;
  }
  50% {
    bottom: 40px;
  }
  100% {
    bottom: 20px;
  }
}
@-webkit-keyframes myfirst /* Safari and Chrome */ {
  0% {
    bottom: 20px;
  }
  50% {
    bottom: 40px;
  }
  100% {
    bottom: 20px;
  }
}
@-o-keyframes myfirst /* Opera */ {
  0% {
    bottom: 20px;
  }
  50% {
    bottom: 40px;
  }
  100% {
    bottom: 20px;
  }
}
.signup_btn {
  position: absolute;
  text-align: center;
  width: 200px;
  height: 56px;
  border-radius: 3px;
  box-sizing: border-box;
  background-color: #ff632a;
  margin: 41px 0px 0px 770px;
  font-size: 20px;
  line-height: 26px;
  color: #fff;
  padding: 14px 0px 0px 0px;
  letter-spacing: 1px;
}
</style>
<style>
.base-box .el-collapse-item__header {
  font-size: 17px;
  height: 70px;
  line-height: 70px;
}
.base-box .el-collapse-item__content {
  font-size: 14px;
}
</style>