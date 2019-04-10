<template>
  <div class="news-container">
    <el-row class="pad20 mt20 bg-white">
      <el-col :span="9">
        <div class="grid-content hot-box">
          <div class="hot-news-tag">热点</div>
          <img
            src="http://www.axfc.cn/uploads/20190111/eb61c398f043ff50bdedd937647ec513.png"
            class="hot-news-img"
          >
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide>
              <router-link to="newsDetail">
                <p>“双料明星”即将来通？</p>
                <span>2019-3-22</span>
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link to="newsDetail">
                <p>“双料明星”即将来通？一夜之间</p>
                <span>2019-3-22</span>
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link to="newsDetail">
                <p>“双料明星”即将来通？一夜之间，全通城都在猜测这张图！</p>
                <span>2019-3-22</span>
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link to="newsDetail">
                <p>“双料明星”即将来通？</p>
                <span>2019-3-22</span>
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link to="newsDetail">
                <p>“双料明星”即将来通？一夜之间</p>
                <span>2019-3-22</span>
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link to="newsDetail">
                <p>“双料明星”即将来通？一夜之间，全通城都在猜测这张图！</p>
                <span>2019-3-22</span>
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link to="newsDetail">
                <p>“双料明星”即将来通？一夜之间</p>
                <span>2019-3-22</span>
              </router-link>
            </swiper-slide>
          </swiper>
        </div>
      </el-col>
    </el-row>
    <el-row class="pad20 mt20 bg-white">
      <el-col class="news-list">
        <div class="grid-content">
          <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
            <el-tab-pane label="行业政策" name="first">
              <router-link to="/newsDetail">
                <div class="list-row">
                  <div class="news-img">
                    <img
                      src="http://www.axfc.cn/uploads/20190222/8470b0cd14194545b6a04a4768184ef6.jpg"
                    >
                  </div>
                  <div class="news-overview">
                    <h3>新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题</h3>
                    <div>内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览</div>
                    <p>2019-2-22</p>
                  </div>
                </div>
              </router-link>
              <router-link to="/newsDetail">
                <div class="list-row">
                  <div class="news-img">
                    <img
                      src="http://www.axfc.cn/uploads/20190222/8470b0cd14194545b6a04a4768184ef6.jpg"
                    >
                  </div>
                  <div class="news-overview">
                    <h3>新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题</h3>
                    <div>内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览</div>
                    <p>2019-2-22</p>
                  </div>
                </div>
              </router-link>
              <router-link to="/newsDetail">
                <div class="list-row">
                  <div class="news-img">
                    <img
                      src="http://www.axfc.cn/uploads/20190222/8470b0cd14194545b6a04a4768184ef6.jpg"
                    >
                  </div>
                  <div class="news-overview">
                    <h3>新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题</h3>
                    <div>内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览内容预览</div>
                    <p>2019-2-22</p>
                  </div>
                </div>
              </router-link>
              <el-row>
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :total="1000"
                  class="text-right"
                ></el-pagination>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="地方动态" name="second"></el-tab-pane>
            <el-tab-pane label="企业新闻" name="third"></el-tab-pane>
            <el-tab-pane label="国际信息" name="fourth"></el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        autoplay: {
          disableOnInteraction: false
        },
        direction: "vertical",
        slidesPerView: 7, //页面分组显示，这里显示为3组
        height: 200,
        loop: true
      },
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style scoped>
.news-container {
  width: 1000px;
  margin: 0 auto;
  padding-top: 60px;
}
.hot-box{
  position: relative;
}
.hot-news-tag{
  position: absolute;
  width: 50px;
  height: 30px;
  line-height: 30px;
  background:rgba(1,173,100,.8);
  text-align: center;
  color: #fff;
}
.bg-white {
  background: #fff;
}
.text-right {
  text-align: right;
}
.pad20 {
  padding: 20px;
}
.mt20 {
  margin-top: 20px;
}
.hot-news-img {
  width: 100%;
}
.swiper-container {
  height: 195px;
  margin-top: 10px;
}

.swiper-slide a {
  color: #333;
  display: flex;
  justify-content: space-between;
}
.swiper-slide a p {
  width: 280px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
}
.swiper-slide a:hover {
  color: #409eff;
}
.news-overview h3,
.news-overview div,
.news-overview p {
  margin-bottom: 20px;
  text-align: left;
  color: #333;
}
.list-row:hover .news-overview h3 {
  color: #409eff;
}
.list-row:hover .news-img img {
  transform: scale(1.05);
}
.news-overview {
  flex: 1;
}
.news-overview h3 {
  font-weight: bold;
  /* white-space: nowrap; */
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 20px;
}
.news-overview p {
  margin-bottom: 0;
  text-align: right;
}
.news-overview div {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.5;
}
.news-list .list-row {
  margin-bottom: 20px;
  display: flex;
}
.news-list .list-row .news-img {
  width: 250px;
  height: 155px;
  margin-right: 20px;
  overflow: hidden;
}
.news-list .list-row .news-img img {
  width: 100%;
  height: 100%;
  transition: all linear 0.3s;
}
/* .news-list .list-row:last-child {
  margin-bottom: 0;
} */
</style>
<style>
.news-container .el-tabs__item {
  font-size: 18px;
  height: 55px;
  line-height: 55px;
}
</style>

