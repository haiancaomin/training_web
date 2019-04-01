<template>
  <div>
    <user-login :dialogVisible="dialogVisible" v-on:closed="closeDialog" v-on:goToReg="goToRegist"></user-login>
    <user-register
      :regDialogVisible="regDialogVisible"
      v-on:regclosed="closeRegDialog"
      v-on:goToLog="goToLogin"
    ></user-register>
    <div class="index-body">
      <div class="company-show">
        <div class="login-sign">
          <div class="logo">
            <img src="../assets/favicon.png" alt>
            <span class="logo-words">智聚实训</span>
          </div>
          <div class="feature">
            <span class="feature-detail">快速</span>
            <span class="feature-detail">全面</span>
            <span class="feature-detail">方便</span>
            <span class="feature-detail-last">质量</span>
          </div>
          <div class="sign-up-main">
            <router-link to="/SignUp">
              <p class="index-sign-up2">报名入口&gt;&gt;</p>
            </router-link>
          </div>
        </div>
        <div class="login-self" @click="clickLogin">
          <span class="el-icon-mobile-phone" ></span>
          <span >登录/注册</span>
        </div>
      </div>
      
      <div class="course-outline-body">
      <div class="course-type">
        <el-row class="no-margin-b">
          <el-col :span="24">
            <div class="grid-content">
              <h1 class="title-type">培训课程</h1>
            </div>
          </el-col>
        </el-row>
        <el-row class="no-margin-b">
          <div class="course-body">
            <el-col :span="8">
              <div class="index-course-list" id="index-course-list1">
                <router-link to="/course">
                  <a href="javascript:;">
                    <div class="index-course-img">
                      <img src="../assets/inspection1.jpg" class="index-course-img1">
                    </div>
                    <div class="index-course-tit">
                      <span>工艺员</span>
                      <span>|</span>
                      <router-link to="/SignUp">
                        <span class="index-signup-but">点击报名</span>
                      </router-link>
                    </div>
                    <div class="index-course-content">工艺就是把产品设计者的意图转化成产品的行业规范</div>
                    <div class="index-course-other">最近开课时间： 2019-04-01</div>
                  </a>
                </router-link>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="index-course-list" id="index-course-list2">
                <router-link to="/course">
                  <a href="javascript:;">
                    <div class="index-course-img">
                      <img src="../assets/inspection2.png" class="index-course-img1">
                    </div>
                    <div class="index-course-tit">
                      <span>质量员</span>
                      <span>|</span>
                      <router-link to="/SignUp">
                        <span class="index-signup-but">点击报名</span>
                      </router-link>
                    </div>
                    <div class="index-course-content">质量员是企业生产第一线的质量哨兵和忠诚战士</div>
                    <div class="index-course-other">最近开课时间： 2019-04-01</div>
                  </a>
                </router-link>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="index-course-list" id="index-course-list3">
                <router-link to="/course">
                  <a href="javascript:;">
                    <div class="index-course-img">
                      <img src="../assets/inspection1.jpg" class="index-course-img1">
                    </div>
                    <div class="index-course-tit">
                      <span>资料员</span>
                      <span>|</span>
                      <router-link to="/SignUp">
                        <span class="index-signup-but">点击报名</span>
                      </router-link>
                    </div>
                    <div class="index-course-content">资料员是负责工程项目管理工作的技术人员</div>
                    <div class="index-course-other">最近开课时间： 2019-04-01</div>
                  </a>
                </router-link>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="index-course-list" id="index-course-list4">
                <router-link to="/course">
                  <a href="javascript:;">
                    <div class="index-course-img">
                      <img src="../assets/inspection2.png" class="index-course-img1">
                    </div>
                    <div class="index-course-tit">
                      <span>深化员</span>
                      <span>|</span>
                      <router-link to="/SignUp">
                        <span class="index-signup-but">点击报名</span>
                      </router-link>
                    </div>
                    <div class="index-course-content">深化员是技术人员技术人员技术人员</div>
                    <div class="index-course-other">最近开课时间： 2019-04-01</div>
                  </a>
                </router-link>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="index-course-list" id="index-course-list5">
                <router-link to="/course">
                  <a href="javascript:;">
                    <div class="index-course-img">
                      <img src="../assets/inspection1.jpg" class="index-course-img1">
                    </div>
                    <div class="index-course-tit">
                      <span>灌浆工</span>
                      <span>|</span>
                      <router-link to="/SignUp">
                        <span class="index-signup-but">点击报名</span>
                      </router-link>
                    </div>
                    <div class="index-course-content">灌浆工灌浆工灌浆工灌浆工灌浆工灌浆工</div>
                    <div class="index-course-other">最近开课时间： 2019-04-01</div>
                  </a>
                </router-link>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="index-course-list" id="index-course-list6">
                <router-link to="/course">
                  <a href="javascript:;">
                    <div class="index-course-img">
                      <img src="../assets/inspection2.png" class="index-course-img1">
                    </div>
                    <div class="index-course-tit">
                      <span>吊装工</span>
                      <span>|</span>
                      <router-link to="/SignUp">
                        <span class="index-signup-but">点击报名</span>
                      </router-link>
                    </div>
                    <div class="index-course-content">吊装工吊装工吊装工吊装工吊装工</div>
                    <div class="index-course-other">最近开课时间： 2019-04-01</div>
                  </a>
                </router-link>
              </div>
            </el-col>
          </div>
        </el-row>
      </div>
    </div>
    <div class="base-list-outline-body">
      <div class="base-list">
        <el-row class="no-margin-b">
          <el-col :span="24">
            <div class="grid-content">
              <h1 class="title-type1">
                基地展示
               
              </h1>
            </div>
          </el-col>
        </el-row>

        <div class="base-body-list">
          <el-row class="pad20 bg-white" id="index-base-background">
          <el-col :span="6">
            <router-link to="/base">
              <a href="javascript:;">
                <div class="index-base-list" id="index-base-list1">
                  <img src="../assets/inspection1.jpg" class="index-base-img">

                  <div class="index-base-name">南通实训基地</div>
                  <div class="index-base-con">南通实训基地位于南通，主要培训项目有工艺员、质量员等。</div>
                </div>
              </a>
            </router-link>
          </el-col>
          <el-col :span="6">
            <router-link to="/base">
              <a href="javascript:;">
                <div class="index-base-list" id="index-base-list2">
                  <img src="../assets/inspection2.png" class="index-base-img">

                  <div class="index-base-name">南通实地基地</div>
                  <div class="index-base-con">南通实训基地位于南通，主要培训项目有灌浆工、吊装工等。</div>
                </div>
              </a>
            </router-link>
          </el-col>
          <el-col :span="6">
            <router-link to="/base">
              <a href="javascript:;">
                <div class="index-base-list" id="index-base-list3">
                  <img src="../assets/inspection1.jpg" class="index-base-img">

                  <div class="index-base-name">徐州实训基地</div>
                  <div class="index-base-con">徐州实训基地位于南通，主要培训项目有工艺员、质量员等。</div>
                </div>
              </a>
            </router-link>
          </el-col>
          <el-col :span="6">
            <router-link to="/base">
              <a href="javascript:;">
                <div class="index-base-list" id="index-base-list4">
                  <img src="../assets/inspection2.png" class="index-base-img">

                  <div class="index-base-name">徐州实地基地</div>
                  <div class="index-base-con">徐州实地基地位于南通，主要培训项目有灌浆工、吊装工等。</div>
                </div>
              </a>
            </router-link>
          </el-col>
        </el-row>
        

        
        </div>
      </div>
      </div>
      <div class="contact-outline-body">
      <div class="contact">
        <el-row class="no-margin-b">
          <el-col :span="24">
            <div class="grid-content" id="contact">
              <h1 class="title-type2">
                联系我们
               
              </h1>
            </div>
          </el-col>
        </el-row>
      <div id="map"></div>
      </div>
    </div>
      <div class="friend-url-outline-body">
      <div class="friend-url">
        <el-row class="no-margin-b">
          <div class="index-friend">
            <el-col :span="5">
              <div class="index-friend1">
                <a href="http://www.zhongnangroup.cn" target="_blank">
                  <img
                    src="http://www.zhjcx.cn/uploads/image/20180424/20180424140846_75890.png"
                    alt
                    width="190"
                    height="38"
                    border="0"
                  >
                </a>
              </div>
            </el-col>
            <el-col :span="7">
              <div class="index-friend2">
                <a href="http://prefabcenter.tongji.edu.cn/" target="_blank">
                  <img
                    src="http://www.zhjcx.cn/uploads/image/20180424/20180424140855_45488.png"
                    alt
                    width="260"
                    height="46"
                    border="0"
                  >
                </a>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="index-friend3">
                <a href="http://www.tjprefab.com.cn" target="_blank">
                  <img
                    src="http://www.zhjcx.cn/uploads/image/20180424/20180424140910_98094.png"
                    alt
                    width="170"
                    height="72"
                    border="0"
                  >
                </a>
              </div>
            </el-col>

            <el-col :span="6">
              <div class="index-friend4">
                <a href="http://www.ntadi.cc/index.html" target="_blank">
                  <img
                    src="http://www.zhjcx.cn/uploads/image/20180424/20180424140932_39452.png"
                    alt
                    width="190"
                    height="83"
                    border="0"
                  >
                </a>
              </div>
            </el-col>
          </div>
        </el-row>
      </div>
      </div>
     
    </div>
    <div class="index-footer-outline-body">
    <div class="index-footer">
      <p>©2018-2019 智聚 版权所有</p>
      <p class="index-mobile">联系电话： 18234211234</p>
    </div>
    </div>
  </div>
</template>

<script>
import UserLogin from "@/components/UserLogin";
import UserRegister from "@/components/UserRegister";
export default {
  data() {
    return {
      dialogVisible: false,
      regDialogVisible: false,
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
    UserLogin,
    UserRegister
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // this.swiper.slideTo(3, 1000, false);
    this.initMap();
  },
  methods: {
    initMap() {
      var map = new BMap.Map("map");
      var point = new BMap.Point(120.9622853521,31.9312175342);
      map.centerAndZoom(point, 17);
      var marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker);
      marker.setAnimation(BMAP_ANIMATION_BOUNCE); 
      //添加地图类型控件
      map.addControl(
        new BMap.MapTypeControl({
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
        })
      );
      map.setCurrentCity("南通市"); // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    clickRegister: function() {
      this.dialogVisible = false;
      this.regDialogVisible = true;
    },
    clickLogin: function() {
      this.regDialogVisible = false;
      this.dialogVisible = true;
    },
    closeDialog: function(msg) {
      this.dialogVisible = msg;
    },
    closeRegDialog: function(msg) {
      this.regDialogVisible = msg;
    },
    goToRegist: function(msg) {
      this.regDialogVisible = msg;
    },
    goToLogin: function(msg) {
      this.dialogVisible = msg;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-main {
  color: #333;
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
  
  margin: 10px 0px;
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
  margin: 25px 25px 0px 25px;
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

.teacher-box .el-carousel__item {
  background-color: #fff;
  box-shadow: 10px 10px 12px 0 rgba(0, 0, 0, 0.1);
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
.el-main {
  width: 1240px;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fffffd;
  border: 1px solid #e7e7e7;
  margin: 80px auto 0px auto;
}

.index-sign-up1 {
  width: 177px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  border: 1px solid #fff;
  border-radius: 6px;
  display: block;
  position: relative;
  left: 260px;
  top: 230px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.1);
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  z-index: 1;
}
.index-sign-up1 a {
  text-decoration: none;
  color: #393939;
  cursor: pointer;
}
.index-sign-up1:hover {
  background: #fff;
  color: #393939;
}
.index-sign-up2 {
  width: 160px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #0a6998;
  font-size: 20px;
  border: 1px solid #0a6998;
  border-radius: 25px;
  display: block;

  cursor: pointer;
  background: #fff;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  z-index: 1;
}

.index-sign-up2:hover {
  background: #0a6998;
  color: #fff;
}

.el-carousel {
  z-index: 0;
}
#index-carousel {
  margin: -50px 0px 0px 0px;
}
.sign-up-main {
  height: 115px;
  margin: 70px 0px 0px 0px;
  padding: 0px 73px;
}
.login-welcome {
  height: 115px;
}
.index-login-signup {
  margin: -50px 0px 0px 0px;
}

.signip-con {
  color: #aaa;
  font-size: 13px;
  position: relative;
  top: 50px;
}
.index-course-list {
  display: inline-block;
  padding: 12px;
  margin-right: 24px;
  width: 340px;
  height: 140px;
  font-size: 0;
  vertical-align: top;
  margin-bottom: 4px;
}

.index-course-img {
  float: left;

  height: 80px;
  width: 80px;
  font-size: 0;
  margin: 15px 20px 0px 0px;
}
.index-course-img1 {
  height: 100%;
  width: 100%;
  border-radius: 50%;
}
.index-course-tit {
  position: relative;
  margin: 7px 0px 10px 0px;
  font-size: 14px;
  line-height: 19px;
  color: #333;
  text-align: left;
}
.index-course-content {
  position: relative;
  margin: 0px 0px 10px 100px;
  font-size: 16px;
  line-height: 24px;
  word-break: break-all;
  color: #333;
  width: 220px;
  text-align: left;
}
.index-course-other {
  position: relative;
  font-size: 12px;
  line-height: 16px;
  color: #666;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 0px 0px 0px 100px;
  text-align: left;
}
.index-signup-but {
  color: #49af4f;
  cursor: pointer;
}
.index-register {
  text-align: center;
}
#index-course-list1,
#index-course-list2,
#index-course-list3,
#index-course-list4,
#index-course-list5,
#index-course-list6 {
  border: 1px solid #fff;
}
.index-base-img {
  display: block;
  width: 280px;
  height: 200px;
  transition: all ease-in-out 0.5s;
}
.index-base-con {
  width: 180px;
  font-size: 14px;
  color: #888;
  line-height: 22px;
  margin: 10px auto;
  height: 62px;
  text-align: center;
}
.index-base-name {
  font-size: 16px;
  color: #333333;
  margin: 20px 0px 10px 0px;
  height: 31px;
  text-align: center;
}
.index-base-list {
  width: 280px;
  height: 350px;
  background: #fff;
  box-shadow: 0 0 2px #c7c5c5;
  overflow: hidden;
}
#index-base-background {
  padding: 0px 0px 0px 20px;
  background: #1d2939;
}
.index-base-more {
  margin: 0px 50px 0px 0px;
  float: right;
  color: #666;
  font-size: 14px;
  line-height: 31px;
}
.index-base-more:hover {
  color: #0a6995;
  font-weight: bold;
}
.index-friend1 {
  margin: 40px 0px 0px 0px;
  box-shadow: 0 0 2px #c7c5c5;
  width: 200px;
  height: 42px;
}
.index-friend2 {
  margin: 37px 0px 0px 50px;
  box-shadow: 0 0 2px #c7c5c5;
  width: 260px;
  height: 47px;
}
.index-friend3 {
  margin: 20px 0px 0px 42px;
  box-shadow: 0 0 2px #c7c5c5;
  width: 200px;
  height: 77px;
  padding: 0px 0px 0px 18px;
}
.index-friend4 {
  margin: 20px 0px 20px 24px;
  box-shadow: 0 0 2px #c7c5c5;
  width: 200px;
  height: 77px;
  padding: 0px 0px 0px 4px;
}
.index-footer {
  width: 1220px;
  height: 150px;
  background: #242e68;
  color: #fff;
  text-align: center;
  font-weight: bold;
  padding: 50px 0px 0px 0px;
  margin:0px auto;
}
.index-footer-outline-body {
  background: #242e68;
}
.index-mobile {
  margin: 10px 0px 0px 0px;
}
.index-course-list:hover {
  box-shadow: 0 0 2px #c7c5c5;
}
.index-base-list:hover {
  box-shadow: 0 0 8px #c7c5c5;
}
.index-base-list:hover .index-base-img {
  transform: scale(1.04);
}
.company-show {
  height: 810px;

  width: 100%;

  background: url(../assets/company.jpg) no-repeat;
  background-size: 100% 810px;
  padding: 0px 200px 0px 0px;
}

.login-sign {
  float: right;
  background: rgba(255, 255, 255, 0.6);
  height: 810px;
  width: 360px;
  padding: 0px 20px;
}
.logo {
  padding: 260px 0px 20px 0px;
  text-align: center;
}
.logo-words {
  font-size: 32px;
  font-weight: 700;
  color: #343a40;
  text-shadow: 5px 5px 10px #c7c5c5;
}
.logo img {
  width: 40px;
  padding: 0px 0px 10px 0px;
  margin: 0px 5px 0px 0px;
}
.feature-detail {
  padding: 0px 25px 0px 0px;
  font-size: 16px;
  font-weight: 600;
}
.feature-detail-last {
  font-size: 16px;
  font-weight: 600;
}
.feature {
  text-align: center;
  margin: 20px 0px;
}
.login {
  padding: 0px 20px;
}
.login-self {
  float: right;
  margin: 95px -510px 0px 0px;
  font-size: 15px;
  color: #666;
}
.login-self:hover {
  float: right;
  margin: 95px -510px 0px 0px;
  font-size: 15px;
  color: #409eff;
  cursor: pointer;
}
.el-icon-mobile-phone {
  margin: 0px 5px 0px 0px;
}
.course-type {
  width: 1220px;
  height: 500px;
  background: #fff;
  padding: 50px 0px 0px 0px;
  margin:0px auto;
}
.course-outline-body {

  background: #fff;
}

.grid-content {
  text-align: center;
}
.title-type h1 {
  font-family: "Fira Sans", "Helvetica Neue", Arial, sans-serif;
  font-size: 28px;
  font-weight: 500;
}
.title-type1 {
  font-family: "Fira Sans", "Helvetica Neue", Arial, sans-serif;
  font-size: 28px;
  font-weight: 500;
  color: #fff;
}
.title-type2 h1{
  font-family: "Fira Sans", "Helvetica Neue", Arial, sans-serif;
  font-size: 28px;
  font-weight: 500;
  
}
.course-body {
  margin: 20px 0px 0px 0px;
  text-align: center
}
.base-list {

  width: 1220px;
  height: 620px;
  background: #1d2939;
  padding: 50px 0px 0px 0px;
  margin: 0px auto;
  text-align: center;
}
.base-list-outline-body {

  background: #1d2939;
}
.base-body-list {
  margin:50px 0px 50px 0px;
}
.friend-url {
  background: #fff;
  padding:20px 0px 20px 62px;
  width:1220px;
  margin:0px auto;
  text-align: center;
}
.friend-url-outline-body {
  background: #fff;
}
#map {
  height: 450px;
  
 
}
.contact {
  background: #fff;

  width:1220px;
  margin:0px auto;
  
}
.contact-outline-body {
  background: #fff;

}
#contact {
  margin: 50px 0px;
}


</style>

