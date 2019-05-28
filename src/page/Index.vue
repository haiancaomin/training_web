<template>
  <div>
    <div class="index-body">
      <div class="company-show" :style="{backgroundImage: 'url(' + picurl + ')' }">
        <div class="more" v-show="showDown" @click="scrollAnimation(0, 731)">
          <i class="el-icon-arrow-down"></i>
        </div>
        <div class="login-sign">
          <div class="logo">
            <img src="../assets/favicon.png" alt>
            <span class="logo-words">智聚实训</span>
          </div>
          <div class="feature">
            <span class="feature-detail">求是</span>
            <span class="feature-detail">创新</span>
            <span class="feature-detail">共享</span>
            <span class="feature-detail-last">共赢</span>
          </div>
          <div class="sign-up-main">
            <router-link to="/SignUp">
              <p class="index-sign-up2">报名入口&gt;&gt;</p>
            </router-link>
            <router-link to="/PesronalScoreSearch">
              <p class="index-sign-up1">证书公示&gt;&gt;</p>
            </router-link>
          </div>
        </div>
        <!-- <div class="login-self" @click="clickLogin">
          <span class="el-icon-mobile-phone" ></span>
          <span >登录/注册</span>
        </div>-->
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
              <div v-for="courseItem in courseList" :key="courseItem.courseid">
                <el-col :span="6">
                  <router-link to="/course">
                    <div class="course-outbody">
                      <div class="course-img-body">
                        <img :src="courseItem.picurl" class="course-show-img">
                      </div>

                      <div class="course-info">
                        <img src="../assets/contentBack.png">
                        <div class="course-name" v-if="courseItem.coursename.length>11">
                          <marquee
                            behavior="alternate"
                            direction="left"
                            loop="infinite"
                            scrollamount="1"
                          >
                            <h3 class="big_h3">{{courseItem.coursename}}</h3>
                          </marquee>
                        </div>
                        <div class="course-name" v-if="courseItem.coursename.length<=11">
                          <h3 class="little_h3">{{courseItem.coursename}}</h3>
                        </div>
                        <div class="course-description" v-if="courseItem.description.length>15">
                          <el-tooltip content="Top center" placement="bottom">
                            <div slot="content">{{courseItem.description}}</div>
                            <h3>{{courseItem.description}}</h3>
                          </el-tooltip>
                        </div>
                        <div class="course-description" v-if="courseItem.description.length<=15">
                          <h3>{{courseItem.description}}</h3>
                        </div>
                      </div>
                    </div>
                  </router-link>
                </el-col>
              </div>

              <el-col :span="6">
                <router-link to="/course">
                  <div v-if="courseList.length < 8" class="course-no-over">
                    <p class="more-course">更多课程，尽情期待！</p>
                    <div class="course-hover-show">
                      <img src="../assets/favicon.png" alt>
                      <span class="logo-words">智聚实训</span>
                    </div>
                  </div>
                </router-link>
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
                <h1 class="title-type1">基地展示</h1>
              </div>
            </el-col>
          </el-row>

          <div id="certify">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide>
                  <img src="../assets/certify01.png">
                  <p>非常难得又值钱的认证证书</p>
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/certify02.png">
                  <p>深圳市优秀互联网企业认定证书</p>
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/certify03.png">
                  <p>质量管理体系认证荣誉证书</p>
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/certify04.png">
                  <p>计算机软件著作权登记证书</p>
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/certify05.png">
                  <p>增值电信业务经营许可证</p>
                </swiper-slide>
                </swiper>
              </div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
          <!-- <div class="base-body-list">
            <el-row class="pad20 bg-white" id="index-base-background">
              <div v-for="baseItem in baseList" :key="baseItem.pid">
                <el-col :span="6">
                  <router-link to="/base">
                    <div class="index-base-list">
                      <div class="index-base-img-div">
                        <img :src="baseItem.picurl" class="index-base-img">
                      </div>
                      <div class="index-base-name">{{baseItem.name}}</div>
                      <div class="index-base-con">{{baseItem.description}}</div>
                    </div>
                  </router-link>
                </el-col>
              </div>
            </el-row>
          </div>-->
        </div>
      </div>
      <div class="contact-outline-body">
        <div class="contact">
          <el-row class="no-margin-b">
            <el-col :span="24">
              <div class="grid-content" id="contact">
                <h1 class="title-type2">联系我们</h1>
              </div>
            </el-col>
          </el-row>
          <div class="index-contact">
            <span class="contact-mobile">电话：0513-81055866</span>
            <span class="contact-mail">邮箱：MKT_Dept@zhjcx.cn</span>
            <span class="contact-address">地址：南通市开发区通盛大道188号C座6楼</span>
          </div>
          <div id="map"></div>
        </div>
      </div>
      <div class="friend-url-outline-body">
        <div class="friend-url">
          <div class="friend-title">
            <div class="friend-title-con">
              <span>友情链接</span>
            </div>
          </div>
          <el-row class="no-margin-b">
            <div class="index-friend">
              <a
                href="http://www.gczlsh.com/DesktopModules/HT/chinese/home/index.aspx"
                target="_blank"
                class="friend-a"
              >
                <img src="../assets/zhiliangxiehui.png" alt class="friend-img">
              </a>

              <a href="http://prefabcenter.tongji.edu.cn/" target="_blank" class="friend-a">
                <img src="../assets/guojiazhongxin.png" alt class="friend-img">
              </a>

              <a href="http://tjprefab.com.cn/" target="_blank" class="friend-a">
                <img src="../assets/tongjilvjian.png" alt class="friend-img">
              </a>

              <a href="http://www.ntadi.cc/" target="_blank" class="friend-a-last">
                <img src="../assets/nantongshiyuan.png" alt class="friend-img-last">
              </a>
            </div>
          </el-row>
        </div>
      </div>
    </div>
    <div class="index-footer-outline-body">
      <div class="index-footer">
        <a href="#" class="beian">版权所有@智聚装配式绿色建筑创新中心南通有限公司</a>
        <p class="index-mobile">联系电话： 0513-81055866</p>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  data() {
    return {
      dialogVisible: false,
      regDialogVisible: false,
      showDown: true,
      picurl: "",
      courseList: [],
      baseList: [],
      swiperOption: {
        watchSlidesProgress: true,
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        loopedSlides: 5,
        autoplay: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination"
          //clickable :true,
        },
        on: {
          progress: function(progress) {
            for (var i = 0; i < this.slides.length; i++) {
              var slide = this.slides.eq(i);
              var slideProgress = this.slides[i].progress;
              var modify = 1;
              if (Math.abs(slideProgress) > 1) {
                modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
              }
              var translate = slideProgress * modify * 260 + "px";
              var scale = 1 - Math.abs(slideProgress) / 5;
              var zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
              slide.transform(
                "translateX(" + translate + ") scale(" + scale + ")"
              );
              slide.css("zIndex", zIndex);
              slide.css("opacity", 1);
              if (Math.abs(slideProgress) > 3) {
                slide.css("opacity", 0);
              }
            }
          },
          setTransition: function(transition) {
            for (var i = 0; i < this.slides.length; i++) {
              var slide = this.slides.eq(i);
              slide.transition(transition);
            }
          }
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted() {
    this.getIndexPicture();
    this.initMap();
    var that = this;
    window.addEventListener("scroll", function() {
      if (
        document.documentElement.clientHeight +
          document.documentElement.scrollTop >
        880
      ) {
        that.showDown = false;
      } else {
        that.showDown = true;
      }
    });
    this.getCourseList();
    this.getBaseList();
  },
  methods: {
    getIndexPicture() {
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/base_findIndexPic.do`
      })
        .then(res => {
          this.picurl = res.data.picurl;
          console.log(this.picurl);
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getBaseList() {
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/base_showBaseIndex.do`
      })
        .then(res => {
          this.baseList = res.data.data;
          console.log(this.baseList);
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getCourseList() {
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/course_findIndexCourseList.do`
      })
        .then(res => {
          this.courseList = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    scrollAnimation(currentY, targetY) {
      // 获取当前位置方法
      // const currentY = document.documentElement.scrollTop || document.body.scrollTop

      // 计算需要移动的距离
      let needScrollTop = targetY - currentY;
      let _currentY = currentY;
      setTimeout(() => {
        // 一次调用滑动帧数，每次调用会不一样
        const dist = Math.ceil(needScrollTop / 10);
        _currentY += dist;
        window.scrollTo(_currentY, currentY);
        // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
        if (needScrollTop > 10 || needScrollTop < -10) {
          this.scrollAnimation(_currentY, targetY);
        } else {
          window.scrollTo(_currentY, targetY);
        }
      }, 1);
    },
    initMap() {
      var map = new BMap.Map("map");
      var point = new BMap.Point(120.9622853521, 31.9312175342);
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
      map.addControl(new BMap.NavigationControl());

      map.setCurrentCity("南通市"); // 设置地图显示的城市 此项是必须设置的
      // map.enableScrollWheelZoom(true);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index-sign-up1 {
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
  margin: 40px 0px 0px 0px;
}

.index-sign-up1:hover {
  background: #0a6998;
  color: #fff;
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
.index-course-list:hover .index-course-img1 {
  animation: borderRadius 1s;
  -moz-animation: borderRadius 1s; /* Firefox */
  -webkit-animation: borderRadius 1s; /* Safari and Chrome */
  -o-animation: borderRadius 1s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
  border-radius: 0px;
}
@keyframes borderRadius {
  0% {
    border-radius: 50%;
  }
  100% {
    border-radius: 0px;
  }
}

@-moz-keyframes borderRadius /* Firefox */ {
  0% {
    border-radius: 50%;
  }
  100% {
    border-radius: 0px;
  }
}

@-webkit-keyframes borderRadius /* Safari and Chrome */ {
  0% {
    border-radius: 50%;
  }
  100% {
    border-radius: 0px;
  }
}

@-o-keyframes borderRadius /* Opera */ {
  0% {
    border-radius: 50%;
  }
  100% {
    border-radius: 0px;
  }
}
.index-course-tit {
  position: relative;
  margin: 15px 0px 10px 0px;
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
#index-course-list1 {
  border: 1px solid #fff;
}
.index-base-img {
  display: block;
  width: 280px;
  height: 200px;
  transition: all ease-in-out 0.5s;
}
.index-base-img-div {
  width: 280px;
  height: 200px;
  overflow: hidden;
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
.index-friend {
  margin: 20px 0px 0px 0px;
}

.friend-img {
  height: 80px;
  width: 286px;
  border: solid 1px #eee;

  object-fit: scale-down;
}
.friend-img-last {
  height: 80px;
  width: 286px;
  border: solid 1px #eee;
}
.friend-a {
  margin: 0px 20px 0px 0px;
}
.index-footer {
  width: 1220px;
  height: 150px;
  background: #242e68;
  color: #fff;
  text-align: center;
  font-weight: bold;
  padding: 50px 0px 0px 0px;
  margin: 0px auto;
}
.index-footer-outline-body {
  background: #242e68;
}
.index-mobile {
  margin: 10px 0px 0px 0px;
}
.index-course-list:hover {
  box-shadow: -2px 2px 5px #c7c5c5;
}

.index-base-list:hover {
  box-shadow: 0 0 8px #c7c5c5;
}
.index-base-list:hover .index-base-img {
  transform: scale(1.1);
}
.company-show {
  height: 810px;
  width: 100%;

  /* background: url(../assets/company.jpg) no-repeat; */
  background-size: 100% 810px;
}

.login-sign {
  float: right;
  background: rgba(255, 255, 255, 0.6);
  height: 810px;
  width: 360px;
  padding: 0px 20px;
  margin: 0px 13% 0px 0px;
}

.logo {
  padding: 240px 0px 20px 0px;
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

.el-icon-mobile-phone {
  margin: 0px 5px 0px 0px;
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
.title-type2 h1 {
  font-family: "Fira Sans", "Helvetica Neue", Arial, sans-serif;
  font-size: 28px;
  font-weight: 500;
}
.course-body {
  margin: 20px 0px 0px 0px;
  text-align: center;
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
  margin: 50px 0px 50px 0px;
}
.friend-url {
  background: #fff;
  padding: 80px 0px 20px 0px;
  width: 1220px;
  margin: 0px auto;
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

  width: 1220px;
  margin: 0px auto;
}
.contact-outline-body {
  background: #fff;
}
#contact {
  margin: 50px 0px;
}
.contact-mobile {
  margin: 0px 30px 0px 0px;
}
.contact-mail {
  margin: 0px 30px 0px 0px;
}
.index-contact {
  margin: 0px 0px 20px 0px;
}
.friend-title {
  width: 100%;
  background: #f4f4f4;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.friend-title-con {
  width: 100px;
  background: #409eff;
  padding: 10px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  font-size: 16px;
  color: #fff;
}
.friend-title-con > span {
  font-weight: bold;
}
.more {
  cursor: pointer;
  margin: 0px 50%;
  float: left;
  font-size: 50px;
  font-weight: 900;
  color: #fff;
  position: fixed;
  animation: myfirst 2s;
  -moz-animation: myfirst 2s; /* Firefox */
  -webkit-animation: myfirst 2s; /* Safari and Chrome */
  -o-animation: myfirst 2s; /* Opera */
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
}
.course-type {
  width: 1220px;
  background: #fff;
  padding: 50px 0px 100px 0px;
  margin: 0px auto;
}
.course-info {
  position: absolute;
  margin: -95px 0px 0px 22.5px;
}
.course-info img {
  width: 240px;
  height: 76px;
}
.course-show-img {
  width: 100%;
  height: 100%;

  transition: all ease-in-out 0.5s;
}
.course-img-body {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
}
.course-outbody {
  width: 280px;
  height: 170px;
  margin: 20px 10px 5px 10px;
  border-radius: 4px;
}
.course-outbody:hover .course-show-img {
  transform: scale(1.2);
}

.course-name {
  position: absolute;
  width: 200px;
  height: 30px;
  margin: -75px 0px 0px 19px;
  text-align: center;
}
.big_h3 {
  font-size: 18px;
  height: 24px;
  line-height: 24px;
  margin: 14px 0 3px;
  color: #333;
  padding: 0px 15px;
  font-weight: normal;
}
.little_h3 {
  font-size: 18px;
  height: 24px;
  line-height: 24px;
  margin: 14px 0 3px;
  color: #333;

  font-weight: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.course-description {
  position: absolute;
  width: 220px;
  height: 30px;
  margin: -30px 0px 0px 10px;
  text-align: center;
}
.course-description h3 {
  font-size: 14px;
  height: 19px;
  line-height: 19px;
  margin: 0;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.course-no-over {
  width: 280px;
  height: 170px;
  border: 1px solid #409eff;
  margin: 20px 10px 5px 10px;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
}
.course-no-over p {
  line-height: 170px;
  font-size: 20px;
  font-weight: 400;
  color: #666;
}
.course-hover-show {
  opacity: 0;
  margin-top: -27px;
  transition: all ease-in-out 0.3s;
}
.course-hover-show > img {
  margin: -5px 0px 0px 0px;
  width: 25px;
  height: 25px;
}
.course-hover-show > span {
  font-size: 20px;
  font-weight: 600;
  color: #666;
}
.course-no-over:hover .course-hover-show {
  opacity: 1;
  margin-top: -100px;
}

.more-course {
  opacity: 1;
  transition: all ease-in-out 0.3s;
}
.course-no-over:hover .more-course {
  opacity: 0;
}

@keyframes myfirst {
  0% {
    bottom: 30px;
  }
  50% {
    bottom: 60px;
  }
  100% {
    bottom: 30px;
  }
}

@-moz-keyframes myfirst /* Firefox */ {
  0% {
    bottom: 30px;
  }
  50% {
    bottom: 60px;
  }
  100% {
    bottom: 30px;
  }
}
@-webkit-keyframes myfirst /* Safari and Chrome */ {
  0% {
    bottom: 30px;
  }
  50% {
    bottom: 60px;
  }
  100% {
    bottom: 30px;
  }
}
@-o-keyframes myfirst /* Opera */ {
  0% {
    bottom: 30px;
  }
  50% {
    bottom: 60px;
  }
  100% {
    bottom: 30px;
  }
}
.beian {
  color: #fff;
}

#certify {
  position: relative;
  width: 1200px;
  margin: 0 auto;
}

#certify .swiper-container {
  padding-bottom: 60px;
}

#certify .swiper-slide {
  width: 520px;
  height: 408px;
  background: #fff;
  box-shadow: 0 8px 30px #ddd;
}
#certify .swiper-slide img {
  display: block;
}
#certify .swiper-slide p {
  line-height: 98px;
  padding-top: 0;
  text-align: center;
  color: #636363;
  font-size: 1.1em;
  margin: 0;
}

#certify .swiper-pagination {
  width: 100%;
  bottom: 20px;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 5px;
  border: 3px solid #fff;
  background-color: #d5d5d5;
  width: 10px;
  height: 10px;
  opacity: 1;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet-active {
  border: 3px solid #00aadc;
  background-color: #fff;
}

#certify .swiper-button-prev {
  left: -30px;
  width: 45px;
  height: 45px;
  background: url(../assets/wm_button_icon.png) no-repeat;
  background-position: 0 0;
  background-size: 100%;
}

#certify .swiper-button-prev:hover {
  background-position: 0 -46px;
  background-size: 100%;
}

#certify .swiper-button-next {
  right: -30px;
  width: 45px;
  height: 45px;
  background: url(../assets/wm_button_icon.png) no-repeat;
  background-position: 0 -93px;
  background-size: 100%;
}

#certify .swiper-button-next:hover {
  background-position: 0 -139px;
  background-size: 100%;
}
</style>

