<template>
  <div class="base-box">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="基地简介" name="1" class="base-intro">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide>
            <img src="https://www.swiper.com.cn/demo/img/nature1.jpg" alt class="base-intro-pic">
          </swiper-slide>
          <swiper-slide>
            <img src="https://www.swiper.com.cn/demo/img/nature2.jpg" alt class="base-intro-pic">
          </swiper-slide>
          <swiper-slide>
            <img src="https://www.swiper.com.cn/demo/img/nature3.jpg" alt class="base-intro-pic">
          </swiper-slide>
          <swiper-slide>
            <img src="https://www.swiper.com.cn/demo/img/nature4.jpg" alt class="base-intro-pic">
          </swiper-slide>
          <swiper-slide>
            <img src="https://www.swiper.com.cn/demo/img/nature5.jpg" alt class="base-intro-pic">
          </swiper-slide>
        </swiper>
        <div
          class="base-content"
        >基地总体介绍基地总体介绍基地总体介绍基地总体介绍基地总体介绍基地总体介绍基地总体介绍基地总体介绍基地总体介绍基地总体介绍基地总体介绍基地总体介绍基地总体介绍基地总体介绍基地总体介绍基地总体介绍基地总体介绍</div>
      </el-collapse-item>
      <el-collapse-item title="灌浆区" name="2" class="guanjiang">
        <el-carousel :interval="5000">
          <el-carousel-item v-for="(item,key) in guanjiangPic" :key="key">
            <img :src="item" class="guanjiang-pic">
            <div class="guanjiang-content">
              <h1>Title</h1>
              <h2>Subtitle</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, alias ipsa expedita eum perspiciatis molestias nihil libero voluptatibus ipsum distinctio similique veritatis sapiente veniam praesentium explicabo enim inventore unde placeat!</p>
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-collapse-item>
      <el-collapse-item title="质量员实训区" name="3" class="quality-worker">
        <div class="quality-worker-pic clearfix">
          <swiper :options="swiperOption2" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>
              <img src="https://www.swiper.com.cn/demo/img/nature1.jpg" alt>
            </swiper-slide>
            <swiper-slide>
              <img src="https://www.swiper.com.cn/demo/img/nature2.jpg" alt>
            </swiper-slide>
            <swiper-slide>
              <img src="https://www.swiper.com.cn/demo/img/nature3.jpg" alt>
            </swiper-slide>
            <swiper-slide>
              <img src="https://www.swiper.com.cn/demo/img/nature4.jpg" alt>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="quality-worker-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis harum cumque facere et debitis. Voluptatum totam eligendi, accusantium suscipit at magni possimus maxime facere doloribus praesentium aspernatur ea qui commodi?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis harum cumque facere et debitis. Voluptatum totam eligendi, accusantium suscipit at magni possimus maxime facere doloribus praesentium aspernatur ea qui commodi?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis harum cumque facere et debitis. Voluptatum totam eligendi, accusantium suscipit at magni possimus maxime facere doloribus praesentium aspernatur ea qui commodi?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis harum cumque facere et debitis. Voluptatum totam eligendi, accusantium suscipit at magni possimus maxime facere doloribus praesentium aspernatur ea qui commodi?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis harum cumque facere et debitis. Voluptatum totam eligendi, accusantium suscipit at magni possimus maxime facere doloribus praesentium aspernatur ea qui commodi?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis harum cumque facere et debitis. Voluptatum totam eligendi, accusantium suscipit at magni possimus maxime facere doloribus praesentium aspernatur ea qui commodi?
        </div>
      </el-collapse-item>
      <el-collapse-item title="吊装实训模拟区" name="4" class="quality-worker">
        <div class="quality-worker-pic clearfix">
          <swiper :options="swiperOption3" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>
              <img src="https://www.swiper.com.cn/demo/img/nature1.jpg" alt>
            </swiper-slide>
            <swiper-slide>
              <img src="https://www.swiper.com.cn/demo/img/nature2.jpg" alt>
            </swiper-slide>
            <swiper-slide>
              <img src="https://www.swiper.com.cn/demo/img/nature3.jpg" alt>
            </swiper-slide>
            <swiper-slide>
              <img src="https://www.swiper.com.cn/demo/img/nature4.jpg" alt>
            </swiper-slide>
            <swiper-slide>
              <img src="https://www.swiper.com.cn/demo/img/nature5.jpg" alt>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="quality-worker-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis harum cumque facere et debitis. Voluptatum totam eligendi, accusantium suscipit at magni possimus maxime facere doloribus praesentium aspernatur ea qui commodi?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis harum cumque facere et debitis. Voluptatum totam eligendi, accusantium suscipit at magni possimus maxime facere doloribus praesentium aspernatur ea qui commodi?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis harum cumque facere et debitis. Voluptatum totam eligendi, accusantium suscipit at magni possimus maxime facere doloribus praesentium aspernatur ea qui commodi?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis harum cumque facere et debitis. Voluptatum totam eligendi, accusantium suscipit at magni possimus maxime facere doloribus praesentium aspernatur ea qui commodi?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis harum cumque facere et debitis. Voluptatum totam eligendi, accusantium suscipit at magni possimus maxime facere doloribus praesentium aspernatur ea qui commodi?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis harum cumque facere et debitis. Voluptatum totam eligendi, accusantium suscipit at magni possimus maxime facere doloribus praesentium aspernatur ea qui commodi?
        </div>
      </el-collapse-item>
      <!-- <el-collapse-item title="吊装实训模拟区" name="5">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </el-collapse-item>-->
    </el-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ["1"],
      guanjiangPic: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550816702991&di=a99af2609be2beb8e2db46b5b30e8297&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01481559841b3da801215603a36220.jpg%402o.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550816702989&di=77e855c8efc558aea5a71b254fc9d7c9&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01edb3555ea8100000009af0ba36f5.jpg%401280w_1l_2o_100sh.jpg"
      ],
      swiperOption: {
        autoplay: {
          disableOnInteraction: false
        },
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
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94
        },
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  methods: {
   
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
  color: #fff;
  position: absolute;
  top: 40px;
  left: 60px;
}

.guanjiang-content h1 {
  font-size: 41px;
}
.guanjiang-content h2 {
  font-size: 14px;
}
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