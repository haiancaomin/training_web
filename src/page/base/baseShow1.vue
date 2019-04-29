<template>
  <div class="base-box">
    <el-collapse v-model="activeNames" @change="handleChange" v-if="swipershow">
      <el-collapse-item :title="baseInfo.basename" name="1" class="base-intro">
        <swiper :options="swiperOption1" ref="mySwiper1">
          <!-- slides -->
          <swiper-slide v-for="(item,key) in baseInfo.pictureUrl" :key="key">
            <img :src="item" class="base-intro-pic">
          </swiper-slide>
        </swiper>
        <div class="base-content">{{baseInfo.summary}}</div>
      </el-collapse-item>
      <el-collapse-item :title="areaList0.areaname" name="2" class="guanjiang" v-if='JSON.stringify(areaList0)!="{}"'>
        <el-carousel :interval="5000">
          <el-carousel-item v-for="(item,key) in areaList0.areapictureUrl" :key="key">
            <img :src="item" class="guanjiang-pic">
            <div class="guanjiang-content">
              <!-- <h1>Title</h1>
              <h2>Subtitle</h2>-->
              <p>{{areaList0.area_summary}}</p>
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-collapse-item>
      <el-collapse-item
        :title="item.areaname"
        :name="key+3"
        class="quality-worker"
        v-for="(item,key) in arealistrest"
        :key="key"
      >
        <div class="quality-worker-pic clearfix">
          <swiper :options="swiperOption[key]" :ref="'mySwiper'+(key+2)">
            <!-- slides -->
            <swiper-slide v-for="(v,k) in item.areapictureUrl" :key="k">
              <img :src="v">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="quality-worker-content">{{item.area_summary}}</div>
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
      swiperOption1: {
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
      swiperOption2: {
        autoplay: {
          disableOnInteraction: false
        },
        observer: true,
        observeParents: true,
        loop: true,
        effect: "flip",
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination"
        }
      },
      swiperOption3: {
        autoplay: {
          disableOnInteraction: false
        },
        observer: true,
        observeParents: true,
        loop: true,
        effect: "cube",
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {
    swiperOption: function() {
      return [this.swiperOption2, this.swiperOption3];
    }
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
          this.areaList0 = res.data.data.arealist.length?res.data.data.arealist[0]:{};
          this.arealistrest = res.data.data.arealist.length?res.data.data.arealist.slice(1):[];
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
  max-width: 920px;
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
}
.base-intro .swiper-container {
  width: 100%;
  height: 100%;
}
.base-content {
  padding-top: 30px;
}
.guanjiang-content {
  color: #000;
  position: absolute;
  top: 40px;
  left: 60px;
}

/* .guanjiang-content h1 {
  font-size: 41px;
}
.guanjiang-content h2 {
  font-size: 14px;
} */
.guanjiang-content p {
  width: 400px;
}
.quality-worker img {
  width: 100%;
  height: 100%;
}
.quality-worker .swiper-container {
  float: left;
  position: relative;
  padding: 50px;
  width: 400px;
  height: 400px;
}
.quality-worker-pic {
  float: left;
}
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
.quality-worker-content {
  padding-top: 50px;
}
</style>
<style>
.base-box .el-collapse-item__header {
  font-size: 15px;
}
.base-box .el-collapse-item__content {
  font-size: 14px;
}
</style>