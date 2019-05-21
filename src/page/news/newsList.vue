<template>
  <div class="news-container">
    <el-row class="pad20 mt20 bg-white" v-if="hotNews.length">
      <el-col :span="9" class="hot-img">
        <div class="grid-content hot-box">
          <div class="hot-news-tag">热点</div>
          <img :src="hotNews[0].picurl" class="hot-news-img">
        </div>
      </el-col>
      <el-col :span="15">
        <div class="grid-content hot-box">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(item,key) in hotNews" :key="key">
              <router-link :to="'/newsDetail/'+item.newsid">
                <p>{{item.title}}</p>
                <span>{{item.createdate}}</span>
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
            <el-tab-pane :label="v.label" :name="v.name" v-for="(v,k) in tabs" :key="k">
              <router-link
                :to="'/newsDetail/'+item.newsid"
                v-for="(item,key) in newsLists"
                :key="key"
              >
                <div class="list-row">
                  <div class="news-img">
                    <img :src="item.picurl">
                  </div>
                  <div class="news-overview">
                    <h3>{{item.title}}</h3>
                    <div>{{item.preview}}</div>
                    <p>{{item.createdate}}</p>
                  </div>
                </div>
              </router-link>
            </el-tab-pane>
            <el-row>
              <el-pagination
                background
                layout="prev, pager, next"
                :total="newsList.count"
                :page-size="8"
                @current-change="handleCurrentChange"
                class="text-right"
                v-if="newsList.count"
              ></el-pagination>
            </el-row>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"
import "swiper/dist/css/swiper.css"
export default {
  data() {
    return {
      tabs: [
        { label: "行业政策", name: "first" },
        { label: "地方动态", name: "second" },
        { label: "企业新闻", name: "third" },
        { label: "国际信息", name: "fourth" }
      ],
      hotNews: [],
      newsList: {},
      newsLists:[],
      type: "0",
      currentPage: 1,
      swiperOption: {
        autoplay: {
          disableOnInteraction: false
        },
        direction: "vertical",
        slidesPerView: 7,
        height: 200,
        loop: true
      },
      activeName: "first"
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted() {
    this.getHotNews();
    this.getNewsList(this.type);
  },
  methods: {
    getHotNews() {
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/news_findNewsList.do`
      })
        .then(res => {
          this.hotNews = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getNewsList(type) {
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/news_findNewsList.do?type=${type}&pageIndex=${(this
          .currentPage -
          1) *
          8}&selectIndex=${this.currentPage}`
      })
        .then(res => {
          this.newsList = res.data;
          this.newsLists = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    handleClick(tab, event) {
      this.type = tab.index;
      this.currentPage = 1;
      this.getNewsList(this.type);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getNewsList(this.type);
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
.hot-box {
  position: relative;
}
.hot-img {
  padding-right: 20px;
}
.hot-news-tag {
  position: absolute;
  width: 50px;
  height: 30px;
  line-height: 30px;
  background: rgba(1, 173, 100, 0.8);
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
  width: 400px;
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

