<template>
  <div class="base-box">
    <el-collapse v-model="activeNames" v-if="swipershow">
      <el-collapse-item :title="baseInfo.basename" name="1" class="base-intro">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(item,key) in baseInfo.pictureUrl" :key="key">
            <img :src="item" class="base-intro-pic">
          </swiper-slide>
        </swiper>
        <div class="base-content">
          <pre>{{baseInfo.summary}}</pre>
        </div>
      </el-collapse-item>
      <el-collapse-item
        :title="item.areaname"
        :name="key+2"
        class="guanjiang"
        v-for="(item,key) in baseInfo.arealist"
        :key="key"
      >
        <el-carousel :interval="5000">
          <el-carousel-item v-for="(v,k) in item.areapictureUrl" :key="k">
            <img :src="v" class="guanjiang-pic">
          </el-carousel-item>
        </el-carousel>
        <div class="guanjiang-content">
          <pre>{{item.area_summary}}</pre>
        </div>
      </el-collapse-item>
    </el-collapse>
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
      }
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
}
.base-box {
  margin-left: 30px;
  flex: 1;
  padding: 15px;
  background: #fff;
  max-width: 870px;
}
.el-collapse-item {
  font-size: 14px;
}
.base-intro .swiper-slide {
  width: 300px;
  height: 300px;
}
.base-intro-pic {
  width: 100%;
  height: 100%;
}
.guanjiang-pic {
  width: 100%;
  height: 300px;
}
.base-intro .swiper-container {
  width: 100%;
  height: 100%;
}
.base-content {
  padding-top: 30px;
}
.guanjiang-content {
  padding: 5px 10px;
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