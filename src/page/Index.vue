<template>
  <el-container>
    <top-nav></top-nav>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="16">
          <div class="grid-content">
            <el-carousel :interval="5000">
              <el-carousel-item v-for="(item,key) in bannerLists" :key="key">
                <img :src="item" class="banner-img">
              </el-carousel-item>
            </el-carousel>
          </div>
		  
		  ffffffffggggggggggggggggggggggggggggggggggggggggggg
        </el-col>
        <el-col :span="8">
          <div class="grid-content login-box">
            <template v-if="1">
              <el-row>
                <el-button type="primary" class="login-btn">登录</el-button>
              </el-row>
              <el-row class="regist">
                还没账号？
                <a href class="regist-now">立即注册</a>
              </el-row>
            </template>
            <template v-if="0">
              <el-row>
                <p class="welcome">欢迎回来，test！</p>
              </el-row>
            </template>
          </div>
        </el-col>
      </el-row>
      <el-row class="no-margin-b">
        <el-col :span="24">
          <div class="grid-content">
            <h1 class="index-floor-title">资讯</h1>
          </div>
        </el-col>
      </el-row>
      <el-row class="pad20 bg-white">
        <el-col :span="9">
          <div class="grid-content">
            <img
              src="http://www.axfc.cn/uploads/20190111/eb61c398f043ff50bdedd937647ec513.png"
              class="hot-news-img"
            >
            <swiper :options="swiperOption" ref="mySwiper">
              <!-- slides -->
              <swiper-slide>“双料明星”即将来通？一夜之间，全通城都在猜测这张图！</swiper-slide>
              <swiper-slide>“双料明星”即将来通？一夜之间，全通城都在猜测这张图！</swiper-slide>
              <swiper-slide>“双料明星”即将来通？一夜之间，全通城都在猜测这张图！</swiper-slide>
              <swiper-slide>“双料明星”即将来通？一夜之间，全通城都在猜测这张图！</swiper-slide>
              <swiper-slide>“双料明星”即将来通？一夜之间，全通城都在猜测这张图！</swiper-slide>
              <swiper-slide>“双料明星”即将来通？一夜之间，全通城都在猜测这张图！</swiper-slide>
              <swiper-slide>“双料明星”即将来通？一夜之间，全通城都在猜测这张图！</swiper-slide>
            </swiper>
          </div>
        </el-col>
        <el-col :span="15" class="index-news-list">
          <div class="grid-content">
            <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
              <el-tab-pane label="行业政策" name="first">
                <el-row :gutter="20">
                  <el-col :span="16">
                    <div class="grid-content news-overview">
                      <h3>新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题</h3>
                      <div>内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览</div>
                      <p>2019-2-22</p>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content">
                      <img
                        src="http://www.axfc.cn/uploads/20190222/8470b0cd14194545b6a04a4768184ef6.jpg"
                        class="full-width"
                      >
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="16">
                    <div class="grid-content news-overview">
                      <h3>新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题</h3>
                      <div>内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览</div>
                      <p>2019-2-22</p>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content">
                      <img
                        src="http://www.axfc.cn/uploads/20190222/8470b0cd14194545b6a04a4768184ef6.jpg"
                        class="full-width"
                      >
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="16">
                    <div class="grid-content news-overview">
                      <h3>新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题</h3>
                      <div>内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览</div>
                      <p>2019-2-22</p>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content">
                      <img
                        src="http://www.axfc.cn/uploads/20190222/8470b0cd14194545b6a04a4768184ef6.jpg"
                        class="full-width"
                      >
                    </div>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="地方动态" name="second">
                <el-row :gutter="20">
                  <el-col :span="16">
                    <div class="grid-content news-overview">
                      <h3>新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题</h3>
                      <div>内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览</div>
                      <p>2019-2-26</p>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content">
                      <img
                        src="http://www.axfc.cn/uploads/20190222/8470b0cd14194545b6a04a4768184ef6.jpg"
                        class="full-width"
                      >
                    </div>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="企业新闻" name="third">
                <el-row :gutter="20">
                  <el-col :span="16">
                    <div class="grid-content news-overview">
                      <h3>新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题</h3>
                      <div>内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览</div>
                      <p>2019-2-24</p>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content">
                      <img
                        src="http://www.axfc.cn/uploads/20190222/8470b0cd14194545b6a04a4768184ef6.jpg"
                        class="full-width"
                      >
                    </div>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="国际信息" name="fourth">
                <el-row :gutter="20">
                  <el-col :span="16">
                    <div class="grid-content news-overview">
                      <h3>新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题</h3>
                      <div>内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览</div>
                      <p>2019-2-23</p>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content">
                      <img
                        src="http://www.axfc.cn/uploads/20190222/8470b0cd14194545b6a04a4768184ef6.jpg"
                        class="full-width"
                      >
                    </div>
                  </el-col>
                </el-row>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
      </el-row>
      <el-row class="no-margin-b">
        <el-col :span="24">
          <div class="grid-content">
            <h1 class="index-floor-title">基地展示</h1>
          </div>
        </el-col>
      </el-row>
      <el-row class="pad20 bg-white">
        <el-col :span="6" v-for="o in 4" :key="o" class="teacher-wall">
          <el-card :body-style="{ padding: '0px' }">
            <img src="http://element-cn.eleme.io/static/hamburger.50e4091.png" class="image">
            <div style="padding: 14px;">
              <span>好吃的汉堡好吃的汉堡好吃的汉堡好吃的汉堡好吃的汉堡好吃的汉堡好吃的汉堡好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row class="no-margin-b">
        <el-col :span="24">
          <div class="grid-content">
            <h1 class="index-floor-title">师资力量</h1>
          </div>
        </el-col>
      </el-row>
      <el-row class="pad20 bg-white">
        <el-carousel :interval="4000" type="card" height="370px" width="650px" class="teacher-box">
          <el-carousel-item v-for="(item,key) in teachers" :key="key">
            <img :src="item" class="index-teacher-img">
            <div class="title">TFBOYS成员、男歌手、舞者、演员</div>
            <div class="name">易烊千玺</div>
            <p class="detail">2005年首登电视荧屏，开始参演各类综艺节目</p>
          </el-carousel-item>
        </el-carousel>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import TopNav from "../components/TopNav";
export default {
  data() {
    return {
      bannerLists: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550816702991&di=a99af2609be2beb8e2db46b5b30e8297&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01481559841b3da801215603a36220.jpg%402o.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550816702989&di=77e855c8efc558aea5a71b254fc9d7c9&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01edb3555ea8100000009af0ba36f5.jpg%401280w_1l_2o_100sh.jpg"
      ],
      currentDate: new Date(),
      swiperOption: {
        autoplay: true,
        direction: "vertical",
        slidesPerView: 7, //页面分组显示，这里显示为3组
        height: 200,
        loop: true
      },
      activeName: "first",
      teachers: [
        "https://www.swiper.com.cn/demo/tfboys/images/p1.jpg",
        "https://www.swiper.com.cn/demo/tfboys/images/p2.jpg",
        "https://www.swiper.com.cn/demo/tfboys/images/p3.jpg"
      ]
    };
  },
  components: {
    TopNav
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // this.swiper.slideTo(3, 1000, false);
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-main {
  color: #333;
  text-align: center;
  padding-top: 60px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  background: #fff;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.banner-img {
  width: 100%;
  height: 100%;
}
.login-box {
  height: 300px;
}
.login-btn {
  width: 80%;
  margin-top: 100px;
}

.welcome {
  margin-top: 100px;
}
.index-floor-title {
  font-size: 20px;
  text-align: left;
  border-bottom: 1px solid #eee;
  border-left: 2px solid #409eff;
  line-height: 40px;
  padding-left: 15px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.pad20 {
  padding: 20px;
}
.bg-white {
  background: #fff;
}
.teacher-wall {
  padding: 0 40px;
}
.no-margin-b {
  margin-bottom: 0;
}
.hot-news-img {
  width: 100%;
}
.swiper-container {
  height: 195px;
  margin-top: 20px;
}
.swiper-slide {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
}
.index-news-list {
  padding-left: 40px;
}
.full-width {
  width: 100%;
}
.news-overview h3,
.news-overview div,
.news-overview p {
  margin-bottom: 20px;
  text-align: left;
}
.news-overview h3 {
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.news-overview p {
  margin-bottom: 0;
}
.news-overview div {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.5;
}
.index-news-list .el-row:last-child {
  margin-bottom: 0;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item {
  background-color: #fff;
  box-shadow:10px 10px 12px 0 rgba(0,0,0,.1);
  border-radius: 10px;
}

.teacher-box {
  position: relative;
  text-align: left;
}
.index-teacher-img {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 300px;
}
.title {
  padding-top: 70px;
  margin-left: 45px;
  /* height: 29px; */
  line-height: 29px;
  position: relative;
  font-size: 18px;
  color: #666;
  text-align: left;
}
.name {
  margin-left: 45px;
  height: 55px;
  display: inline-block;
  position: relative;
  line-height: 55px;
  padding-bottom: 9px;
  padding-right: 55px;
  border-bottom: 1px solid #dddddd;
  font-size: 36px;
  color: #333;
  text-align: left;
}
.detail {
  margin-left: 45px;
  width: 275px;
  margin-top: 30px;
  padding-right: 5px;
  position: relative;
  line-height: 24px;
  color: #bbb;
  font-size: 14px;
  text-align: left;
}
</style>

