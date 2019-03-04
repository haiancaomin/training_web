<template>
  <div class="base-container">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#fff"
          text-color="#333"
          active-text-color="#409eff"
        >
          <el-menu-item index="1">
            <span slot="title">基地一名称</span>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">基地二名称</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
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
        <el-collapse-item title="质量员实训区" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="吊装实训模拟区" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
      </el-collapse>
    </div>
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
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>

<style scoped>
.base-container {
  width: 1200px;
  margin: 0 auto;
  padding-top: 80px;
  display: flex;
}
.tac .el-col {
  width: 250px;
}
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
</style>
<style>
.base-box .el-collapse-item__header {
  font-size: 15px;
}
.base-box .el-collapse-item__content {
  font-size: 14px;
}
</style>

