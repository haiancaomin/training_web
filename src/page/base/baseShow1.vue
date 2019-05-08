<template>
  <div class="base-box">
    <el-collapse v-model="activeNames" @change="handleChange" v-if="swipershow">
      <el-collapse-item :title="baseInfo.basename" name="1" class="base-intro">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="(item,key) in baseInfo.pictureUrl" :key="key">
            <img :src="item" class="base-intro-pic">
          </swiper-slide>
        </swiper>
        <div class="base-content base-show-intro">{{baseInfo.summary}}</div>
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
          <!-- <h1>Title</h1>
          <h2>Subtitle</h2>-->
          {{item.area_summary}}
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ["1"],
      baseInfo: [],
      areaList0: {},
      arealistrest: [],
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
  // computed: {
  //   swiperOption: function() {
  //     return [this.swiperOption2, this.swiperOption3];
  //   }
  // },
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
          // this.areaList0 = res.data.data.arealist.length
          //   ? res.data.data.arealist[0]
          //   : {};
          // this.arealistrest = res.data.data.arealist.length
          //   ? res.data.data.arealist.slice(1)
          //   : [];
          this.swipershow = true;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    handleChange(val) {
      console.log(val);
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
.base-show-intro {
  text-indent: 30px;
  line-height: 25px;
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

/* .guanjiang-content h1 {
  font-size: 41px;
}
.guanjiang-content h2 {
  font-size: 14px;
} */
.guanjiang-content{
  padding: 5px 10px;
}
.clearfix:after {
  content: "";
  display: block;
  clear: both;
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