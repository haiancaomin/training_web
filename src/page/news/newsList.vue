<template>
  <div class="news-container">
    <div class="news_body">
    
    <el-col :span="17">
    <div class ="list_outline_body">
      <div class="list_body">
        <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
          <el-tab-pane :label="v.label" :name="v.name" v-for="(v,k) in tabs" :key="k">
            <router-link
              :to="'/newsDetail/'+item.newsid"
              v-for="(item,key) in newsLists"
              :key="key"
            >
              <div class="list-row">
                <div class="news-img">
                  <img :src="item.picurl" />
                </div>
                <div class="news-overview">
                  <div class="news_type">
                    <el-tag v-if="type==0">行业政策</el-tag>
                  </div>
                  <div class="news_type">
                    <el-tag v-if="type==1">地方动态</el-tag>
                  </div>
                  <div class="news_type">
                    <el-tag v-if="type==2">企业新闻</el-tag>
                  </div>
                  <div class="news_type">
                    <el-tag v-if="type==3">国际信息</el-tag>
                  </div>
                  <p>发布时间：{{item.createdate}}</p>
                  <h3>{{item.title}}</h3>
                </div>
              </div>
            </router-link>
          </el-tab-pane>

          <el-pagination
            background
            layout="prev, pager, next, jumper"
            :total="newsList.count"
            :page-size="8"
            @current-change="handleCurrentChange"
            v-if="newsList.count"
          ></el-pagination>
        </el-tabs>
      </div>
    </div>
    </el-col>
    <el-col :span="7">
     <div class="hot_news_body" v-if="hotNews.length">
      <div class="hot_news_title_div">热点新闻</div>
      <div class="hot-box">
        
      </div>
      <div class="hot-box">
          <div v-for="(item,key) in hotNews" :key="key" class="hot_single">
            <div class="title_dot" v-if="key!=0"></div>
            <router-link :to="'/newsDetail/'+item.newsid">
            <p :class="{'hot_first':key==0}" class="hot_news_title">{{item.title}}</p> 
              <img v-if="key==0" :src="hotNews[0].picurl" class="hot-news-img" />
            </router-link>
          </div>
      </div>
    </div>
    </el-col>
    </div>
    <div class="fix_div"></div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
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
      newsLists: [],
      type: "0",
      currentPage: 1,
      swiperOption: {
        autoplay: {
          disableOnInteraction: false
        },
        direction: "vertical",
        slidesPerView: 10,
        height: 300,
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
  width: 100%;
  min-width: 1220px;
  max-width: 1920px;
  margin-top: 80px;
  background: #fff;
  padding:0px 0px 50px 0px;
}
.news_body {
  width:1220px;
  margin:0px auto;
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
.hot-news-img {
  width: 140px;
  height: 90px;
}
.swiper-container {
  height: 300px;
  margin-top: 10px;
}
.swiper-slide a {
  color: #333;
  display: flex;
  justify-content: space-between;
}
.hot_news_title {
  width: 360px;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left; */
}
.hot_news_date {
  width: 140px;
  font-size: 14px;
  text-align: right;
}
.news-overview h3 {
  margin-bottom: 20px;
  text-align: left;
  color: #333;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 5px;
  font-size: 18px;
}
.swiper-slide a:hover {
  color: #409eff;
}
.list-row:hover .news-overview h3 {
  color: #409eff;
}
.list-row:hover .news-img img {
  transform: scale(1.1);
}
.news-overview {
  flex: 1;
}
.list-row {
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 20px 0px;
}
.list-row .news-img {
  width: 250px;
  height: 155px;
  margin-right: 20px;
  overflow: hidden;
}
.list-row .news-img img {
  width: 100%;
  height: 100%;
  transition: all linear 0.3s;
}
.news-overview p {
  position: absolute;
  margin: 135px 0px 0px 0px;
  color: #666;
  font-size: 12px;
}
.news_type {
  position: absolute;
  margin: 85px 0px 0px 0px;
}
.el-pagination {
  margin-top: 20px;
}
.list_body {
   width:820px;
}
.hot_news_body {
  width:380px;
  margin:55px 0px 0px 0px;
  background:rgb(247,248,249);
  padding:10px;
}
.fix_div {
  clear:both;
}
.hot-box .hot_first {
  width:210px;
  position: absolute;
  margin:0px 0px 0px 150px;
  padding:0px 0px 0px 0px;
}
.hot_news_title_div {
  border-left: 4px solid #409eff;
  margin:0px 0px 0px -10px;
  padding:0px 0px 0px 6px;
  color:#333;
  font-size: 18px;
  font-weight: bold;
  font-family: "KaiTi";
}
.hot_single {
  margin:15px 0px;
  line-height: 20px;
}
.hot_single p{
  color:#333;
  padding:0px 0px 0px 15px;
}
.hot_single p:hover{
  color:#409eff;
}
.title_dot {
  height:7px;
  width: 7px;
  border-radius: 50%;
  background: #409eff;
  position: absolute;
  margin-top:7px;
}
.el-pagination {
  text-align: center;
}
</style>
<style>
.news-container .el-tabs__item {
  font-size: 18px;
  height: 55px;
  line-height: 55px;
}
</style>