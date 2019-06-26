<template>
  <div class="animation">
    <div class="outline_body">
      <el-col :span="12">
        <div class="big_img">
          <div class="big_img_arrow"></div>
          <div class="big_img_bottom"></div>
          <div class="big_img_word">TOP PART</div>
          <div class="back_div_comment"></div>
          <div class="back_div_comment_boottom"></div>
          <div class="vertical_scroll">VERTICAL SCROLL</div>
          <div class="big_img_height"></div>
          <div class="big_img_height_comment">HEIGHT:720PX</div>
          <div class="back_img_arrow"></div>
          <div class="back_img_bottom"></div>
          <div class="back_img_word">FULL SIZE BACKGROUND PICTURE</div>
          <div class="back_div">
            <div class="logo"></div>
            <div class="logo_comment"></div>
            <div class="logo_bottom"></div>
            <div class="logo_word">LOGO</div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="course_list">
          <div class="course_list_arrow"></div>
          <div class="course_list_bottom"></div>
          <div class="course_list_word">COURSE PREVIEW PART</div>
          <div class="course_width_left"></div>
          <div class="course_width_right"></div>
          <div class="course_width"></div>
          <div class="course_width_comment">WIDTH:280PX</div>
          <div class="course_height_top"></div>
          <div class="course_height_bottom"></div>
          <div class="course_height"></div>
          <div class="course_height_comment">HEIGHT:170PX</div>
          <div class="course_tap_arrow"></div>
          <div class="course_tap_bottom"></div>
          <div class="course_tap_word">COURSE PICTURE AND COURSE NAME</div>
          <div class="course_list_left"></div>
          <div class="course_list_right"></div>
          <div class="course_list_width"></div>
          <div class="course_list_comment">MAX-SIZE:7 + MORE:1</div>
          <div class="course_div1"></div>
          <div class="course_div2"></div>
          <div class="course_div3"></div>
          <div class="course_div4"></div>
          <div class="course_div5"></div>
          <div class="course_div6"></div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="base_list">
          <div class="base_list_arrow"></div>
          <div class="base_list_bottom"></div>
          <div class="base_list_word">BASE PREVIEW PART</div>
          <div class="base_center"></div>
          <div class="base_left1"></div>
          <div class="base_right1"></div>
          <div class="base_left2"></div>
          <div class="base_right2"></div>
          <div class="base_img_arrow"></div>
          <div class="base_img_bottom"></div>
          <div class="base_img_word">BASE PICTURE AND BASE INFORMATION</div>
          <div class="base_width_left"></div>
          <div class="base_width_right"></div>
          <div class="base_width"></div>
          <div class="base_width_comment">MAX-SIZE:5 CENTER PART IS THE BIGGEST</div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="map">
          <div class="map_part_arrow"></div>
          <div class="map_part_bottom"></div>
          <div class="map_part_word">COMPANY INFORMATION PART</div>
          <div class="map_information_div"></div>
          <div class="map_div"></div>
          <div class="company_info_arrow"></div>
          <div class="company_info_bottom"></div>
          <div class="company_info_word">COMPANY CONTACT</div>
          <div class="map_info_arrow"></div>
          <div class="map_info_bottom"></div>
          <div class="map_info_word">MAP ADDRESS</div>
          <div class="map_height_top"></div>
          <div class="map_height_bottom"></div>
          <div class="map_height"></div>
          <div class="map_height_comment">HEIGHT:450PX</div>
          <div class="map_width_left"></div>
          <div class="map_width_right"></div>
          <div class="map_width"></div>
          <div class="map_width_comment">WIDTH:1220PX</div>
        </div>
      </el-col>
    </div>
    <div class="transition">
      <div class="zhiju">
            <img src="../assets/favicon.png" alt>
            <span class="zhiju_words">智聚实训</span>
          </div>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.global.setFirstEnter(true);
    let that = this;
    setTimeout( function(){
     that.$router.push({ path: `/index` });
}, 3200 );
  },
  methods: {}
};
</script>

<style scoped>
.animation {
  width: 100%;
  height: 800px;
  background: #000;
}
.outline_body {
  width: 1200px;
  margin: 0px auto;
}
.transition {
  width: 100%;
  height: 800px;
  background: #000;
  z-index: 999;
  position: absolute;
  animation: transition 3s;
  -moz-animation: transition 3s; /* Firefox */
  -webkit-animation: transition 3s; /* Safari and Chrome */
  -o-animation: transition 3s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes transition {
  0% {
    z-index: -1;
  }
  66% {
    z-index: -1;
  }
  67% {
    z-index: 999;
    background: rgba(0, 0, 0, 0);
  }
  100% {
    z-index: 999;
    background: rgba(0, 0, 0, 1);
  }
}

@-moz-keyframes transition /* Firefox */ {
   0% {
    z-index: -1;
  }
  66% {
    z-index: -1;
  }
  67% {
    z-index: 999;
    background: rgba(0, 0, 0, 0);
  }
  100% {
    z-index: 999;
    background: rgba(0, 0, 0, 1);
  }
}
@-webkit-keyframes transition /* Safari and Chrome */ {
   0% {
    z-index: -1;
  }
  66% {
    z-index: -1;
  }
  67% {
    z-index: 999;
    background: rgba(0, 0, 0, 0);
  }
  100% {
    z-index: 999;
    background: rgba(0, 0, 0, 1);
  }
}
@-o-keyframes transition /* Opera */ {
  0% {
    z-index: -1;
  }
  66% {
    z-index: -1;
  }
  67% {
    z-index: 999;
    background: rgba(0, 0, 0, 0);
  }
  100% {
    z-index: 999;
    background: rgba(0, 0, 0, 1);
  }
}
.zhiju {
  width:500px;
  margin:0px auto;
  text-align: center;
  margin-top:330px;
}
.zhiju img {
  height:50px;
  width:50px;
  margin:-20px 20px 0px 0px;
  animation: zhiju_img 3s;
  -moz-animation: zhiju_img 3s; /* Firefox */
  -webkit-animation: zhiju_img 3s; /* Safari and Chrome */
  -o-animation: zhiju_img 3s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes zhiju_img {
  0% {
    opacity:0;
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  66% {
    opacity:0;
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  100% {
   opacity:1;
   -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
}

@-moz-keyframes zhiju_img /* Firefox */ {
   0% {
    opacity:0;
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  66% {
    opacity:0;
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  100% {
   opacity:1;
   -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes zhiju_img /* Safari and Chrome */ {
   0% {
    opacity:0;
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  66% {
    opacity:0;
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  100% {
   opacity:1;
   -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
}
@-o-keyframes zhiju_img /* Opera */ {
  0% {
    opacity:0;
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  66% {
    opacity:0;
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  100% {
   opacity:1;
   -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
}
.zhiju_words {
  color:#fff;
  font-size: 48px;
  letter-spacing:6px;
  font-family: "Microsoft YaHei";
  animation: zhiju_words 3s;
  -moz-animation: zhiju_words 3s; /* Firefox */
  -webkit-animation: zhiju_words 3s; /* Safari and Chrome */
  -o-animation: zhiju_words 3s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes zhiju_words {
  0% {
    color:rgba(255, 255, 255, 0);
    letter-spacing:0px;
  }
  66% {
    color:rgba(255, 255, 255, 0);
    letter-spacing:0px;
  }
  100% {
   color:rgba(255, 255, 255, 1);
   letter-spacing:6px;
  }
}

@-moz-keyframes zhiju_words /* Firefox */ {
   0% {
    color:rgba(255, 255, 255, 0);
    letter-spacing:0px;
  }
  66% {
    color:rgba(255, 255, 255, 0);
    letter-spacing:0px;
  }
  100% {
   color:rgba(255, 255, 255, 1);
   letter-spacing:6px;
  }
}
@-webkit-keyframes zhiju_words /* Safari and Chrome */ {
   0% {
    color:rgba(255, 255, 255, 0);
    letter-spacing:0px;
  }
  66% {
    color:rgba(255, 255, 255, 0);
    letter-spacing:0px;
  }
  100% {
   color:rgba(255, 255, 255, 1);
   letter-spacing:6px;
  }
}
@-o-keyframes zhiju_words /* Opera */ {
  0% {
    color:rgba(255, 255, 255, 0);
    letter-spacing:0px;
  }
  66% {
    color:rgba(255, 255, 255, 0);
    letter-spacing:0px;
  }
  100% {
   color:rgba(255, 255, 255, 1);
   letter-spacing:6px;
  }
}
.big_img {
  width: 570px;
  height: 350px;
  border: 1px solid #fff;
  margin: 0px auto;
  margin-top: 20px;
  background: #222;
}
.course_list {
  width: 570px;
  height: 350px;
  border: 1px solid #fff;
  margin: 0px auto;
  margin-top: 20px;
}
.base_list {
  width: 570px;
  height: 350px;
  border: 1px solid #fff;
  margin: 0px auto;
  margin-top: 20px;
}
.map {
  width: 570px;
  height: 350px;
  border: 1px solid #fff;
  margin: 0px auto;
  margin-top: 20px;
}
.back_div {
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  height: 100%;
  width: 200px;
  margin: 0px 0px 0px 260px;
  background: rgba(255, 255, 255, 0.6);
  animation: back_div 2s;
  -moz-animation: back_div 2s; /* Firefox */
  -webkit-animation: back_div 2s; /* Safari and Chrome */
  -o-animation: back_div 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes back_div {
  0% {
    background: rgba(255, 255, 255, 0);
  }
  100% {
    background: rgba(255, 255, 255, 0.6);
  }
}

@-moz-keyframes back_div /* Firefox */ {
  0% {
    background: rgba(255, 255, 255, 0);
  }
  100% {
    background: rgba(255, 255, 255, 0.6);
  }
}
@-webkit-keyframes back_div /* Safari and Chrome */ {
  0% {
    background: rgba(255, 255, 255, 0);
  }
  100% {
    background: rgba(255, 255, 255, 0.6);
  }
}
@-o-keyframes back_div /* Opera */ {
  0% {
    background: rgba(255, 255, 255, 0);
  }
  100% {
    background: rgba(255, 255, 255, 0.6);
  }
}
.back_div_comment {
  width: 40px;
  height: 0px;
  border-bottom: 1px solid #bbb;
  -webkit-transform: rotate(135deg); /*Safari 4+,Google Chrome 1+  */
  -moz-transform: rotate(135deg); /*Firefox 3.5+*/
  filter: progid:DXImageTransform.Microsoft.BasicImage(Rotation=0.45);
  position: absolute;
  margin: 100px 0px 0px 456px;
  animation: back_div_comment 1s;
  -moz-animation: back_div_comment 1s; /* Firefox */
  -webkit-animation: back_div_comment 1s; /* Safari and Chrome */
  -o-animation: back_div_comment 1s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes back_div_comment {
  0% {
    width: 0px;
  }
  100% {
    width: 40px;
  }
}

@-moz-keyframes back_div_comment /* Firefox */ {
  0% {
    width: 0px;
  }
  100% {
    width: 40px;
  }
}
@-webkit-keyframes back_div_comment /* Safari and Chrome */ {
  0% {
    width: 0px;
  }
  100% {
    width: 40px;
  }
}
@-o-keyframes back_div_comment /* Opera */ {
  0% {
    width: 0px;
  }
  100% {
    width: 40px;
  }
}
.back_div_comment_boottom {
  width: 68px;
  height: 0px;
  border-bottom: 1px solid #999;
  position: absolute;
  margin: 86px 0px 0px 490px;
  animation: back_div_comment_boottom 1s;
  -moz-animation: back_div_comment_boottom 1s; /* Firefox */
  -webkit-animation: back_div_comment_boottom 1s; /* Safari and Chrome */
  -o-animation: back_div_comment_boottom 1s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes back_div_comment_boottom {
  0% {
    width: 0px;
  }
  100% {
    width: 68px;
  }
}

@-moz-keyframes back_div_comment_boottom /* Firefox */ {
  0% {
    width: 0px;
  }
  100% {
    width: 68px;
  }
}
@-webkit-keyframes back_div_comment_boottom /* Safari and Chrome */ {
  0% {
    width: 0px;
  }
  100% {
    width: 68px;
  }
}
@-o-keyframes back_div_comment_boottom /* Opera */ {
  0% {
    width: 0px;
  }
  100% {
    width: 68px;
  }
}
.vertical_scroll {
  color: #fff;
  margin: 71px 0px 0px 490px;
  position: absolute;
  font-size: 8px;
  animation: vertical_scroll 2s;
  -moz-animation: vertical_scroll 2s; /* Firefox */
  -webkit-animation: vertical_scroll 2s; /* Safari and Chrome */
  -o-animation: vertical_scroll 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes vertical_scroll {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  50% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}

@-moz-keyframes vertical_scroll /* Firefox */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  50% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
@-webkit-keyframes vertical_scroll /* Safari and Chrome */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  50% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
@-o-keyframes vertical_scroll /* Opera */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  50% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
/* .vertical_scroll_height_arrow {
  border-style: solid;
  border-width: 2px 2px;
  border-color: transparent transparent #fff #fff;
  position: absolute;
  margin:170px 0px 0px 256px; 
} */
.big_img_height {
  height: 350px;
  width: 2px;
  border-left: 1px solid #999;
  position: absolute;
  margin: 0px 0px 0px 246px;
  animation: big_img_height 1s;
  -moz-animation: big_img_height 1s; /* Firefox */
  -webkit-animation: big_img_height 1s; /* Safari and Chrome */
  -o-animation: big_img_height 1s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes big_img_height {
  0% {
    height: 0px;
  }
  100% {
    height: 350px;
  }
}

@-moz-keyframes big_img_height /* Firefox */ {
  0% {
    height: 0px;
  }
  100% {
    height: 350px;
  }
}
@-webkit-keyframes big_img_height /* Safari and Chrome */ {
  0% {
    height: 0px;
  }
  100% {
    height: 350px;
  }
}
@-o-keyframes big_img_height /* Opera */ {
  0% {
    height: 0px;
  }
  100% {
    height: 350px;
  }
}
.big_img_height_comment {
  color: #fff;
  font-size: 8px;
  -moz-transform: rotate(270deg);
  -webkit-transform: rotate(270deg);
  display: block;
  position: absolute;
  margin: 160px 0px 0px 210px;
  animation: big_img_height_comment 2s;
  -moz-animation: big_img_height_comment 2s; /* Firefox */
  -webkit-animation: big_img_height_comment 2s; /* Safari and Chrome */
  -o-animation: big_img_height_comment 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes big_img_height_comment {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  50% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}

@-moz-keyframes big_img_height_comment /* Firefox */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  50% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
@-webkit-keyframes big_img_height_comment /* Safari and Chrome */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  50% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
@-o-keyframes big_img_height_comment /* Opera */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  50% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
.logo {
  height: 50px;
  width: 140px;
  border: 1px solid #fff;
  position: absolute;
  margin: 60px 0px 0px 30px;
  animation: logo 2s;
  -moz-animation: logo 2s; /* Firefox */
  -webkit-animation: logo 2s; /* Safari and Chrome */
  -o-animation: logo 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes logo {
  0% {
    border: 1px solid rgba(255, 255, 255, 0);
  }
  50% {
    border: 1px solid rgba(255, 255, 255, 0);
  }
  100% {
    border: 1px solid #fff;
  }
}

@-moz-keyframes logo /* Firefox */ {
  0% {
    border: 1px solid rgba(255, 255, 255, 0);
  }
  50% {
    border: 1px solid rgba(255, 255, 255, 0);
  }
  100% {
    border: 1px solid #fff;
  }
}
@-webkit-keyframes logo /* Safari and Chrome */ {
  0% {
    border: 1px solid rgba(255, 255, 255, 0);
  }
  50% {
    border: 1px solid rgba(255, 255, 255, 0);
  }
  100% {
    border: 1px solid #fff;
  }
}
@-o-keyframes logo /* Opera */ {
  0% {
    border: 1px solid rgba(255, 255, 255, 0);
  }
  50% {
    border: 1px solid rgba(255, 255, 255, 0);
  }
  100% {
    border: 1px solid #fff;
  }
}
.logo_comment {
  width: 40px;
  height: 0px;
  border-bottom: 1px solid #fff;
  -webkit-transform: rotate(45deg); /*Safari 4+,Google Chrome 1+  */
  -moz-transform: rotate(45deg); /*Firefox 3.5+*/

  position: absolute;
  margin: 124px 0px 0px 66px;
  animation: logo_comment 1.5s;
  -moz-animation: logo_comment 1.5s; /* Firefox */
  -webkit-animation: logo_comment 1.5s; /* Safari and Chrome */
  -o-animation: logo_comment 1.5s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes logo_comment {
  0% {
    width: 0px;
  }
  66% {
    width: 0px;
  }
  100% {
    width: 40px;
  }
}

@-moz-keyframes logo_comment /* Firefox */ {
  0% {
    width: 0px;
  }
  66% {
    width: 0px;
  }
  100% {
    width: 40px;
  }
}
@-webkit-keyframes logo_comment /* Safari and Chrome */ {
  0% {
    width: 0px;
  }
  66% {
    width: 0px;
  }
  100% {
    width: 40px;
  }
}
@-o-keyframes logo_comment /* Opera */ {
  0% {
    width: 0px;
  }
  66% {
    width: 0px;
  }
  100% {
    width: 40px;
  }
}
.logo_bottom {
  width: 68px;
  height: 0px;
  border-bottom: 1px solid #ddd;
  position: absolute;
  margin: 139px 0px 0px 100px;
  animation: logo_bottom 1.5s;
  -moz-animation: logo_bottom 1.5s; /* Firefox */
  -webkit-animation: logo_bottom 1.5s; /* Safari and Chrome */
  -o-animation: logo_bottom 1.5s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes logo_bottom {
  0% {
    width: 0px;
  }
  66% {
    width: 0px;
  }
  100% {
    width: 68px;
  }
}

@-moz-keyframes logo_bottom /* Firefox */ {
  0% {
    width: 0px;
  }
  66% {
    width: 0px;
  }
  100% {
    width: 68px;
  }
}
@-webkit-keyframes logo_bottom /* Safari and Chrome */ {
  0% {
    width: 0px;
  }
  66% {
    width: 0px;
  }
  100% {
    width: 68px;
  }
}
@-o-keyframes logo_bottom /* Opera */ {
  0% {
    width: 0px;
  }
  66% {
    width: 0px;
  }
  100% {
    width: 68px;
  }
}
.logo_word {
  color: #fff;
  margin: 126px 0px 0px 125px;
  position: absolute;
  font-size: 8px;
  animation: logo_word 2s;
  -moz-animation: logo_word 2s; /* Firefox */
  -webkit-animation: logo_word 2s; /* Safari and Chrome */
  -o-animation: logo_word 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes logo_word {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  50% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}

@-moz-keyframes logo_word /* Firefox */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  50% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
@-webkit-keyframes logo_word /* Safari and Chrome */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  50% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
@-o-keyframes logo_word /* Opera */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  50% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
.back_img_arrow {
  width: 40px;
  height: 0px;
  border-bottom: 1px solid #fff;
  -webkit-transform: rotate(45deg); /*Safari 4+,Google Chrome 1+  */
  -moz-transform: rotate(45deg); /*Firefox 3.5+*/
  position: absolute;
  margin: 224px 0px 0px 26px;
  animation: back_img_arrow 1s;
  -moz-animation: back_img_arrow 1s; /* Firefox */
  -webkit-animation: back_img_arrow 1s; /* Safari and Chrome */
  -o-animation: back_img_arrow 1s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes back_img_arrow {
  0% {
    width: 0px;
  }
  100% {
    width: 40px;
  }
}

@-moz-keyframes back_img_arrow /* Firefox */ {
  0% {
    width: 0px;
  }
  100% {
    width: 40px;
  }
}
@-webkit-keyframes back_img_arrow /* Safari and Chrome */ {
  0% {
    width: 0px;
  }
  100% {
    width: 40px;
  }
}
@-o-keyframes back_img_arrow /* Opera */ {
  0% {
    width: 0px;
  }
  100% {
    width: 40px;
  }
}
.back_img_bottom {
  width: 133px;
  height: 0px;
  border-bottom: 1px solid #999;
  position: absolute;
  margin: 238px 0px 0px 60px;
  animation: back_img_bottom 1s;
  -moz-animation: back_img_bottom 1s; /* Firefox */
  -webkit-animation: back_img_bottom 1s; /* Safari and Chrome */
  -o-animation: back_img_bottom 1s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes back_img_bottom {
  0% {
    width: 0px;
  }
  100% {
    width: 133px;
  }
}

@-moz-keyframes back_img_bottom /* Firefox */ {
  0% {
    width: 0px;
  }
  100% {
    width: 133px;
  }
}
@-webkit-keyframes back_img_bottom /* Safari and Chrome */ {
  0% {
    width: 0px;
  }
  100% {
    width: 133px;
  }
}
@-o-keyframes back_img_bottom /* Opera */ {
  0% {
    width: 0px;
  }
  100% {
    width: 133px;
  }
}
.back_img_word {
  color: #fff;
  margin: 223px 0px 0px 61px;
  position: absolute;
  font-size: 8px;
  animation: back_img_word 2s;
  -moz-animation: back_img_word 2s; /* Firefox */
  -webkit-animation: back_img_word 2s; /* Safari and Chrome */
  -o-animation: back_img_word 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes back_img_word {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  50% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}

@-moz-keyframes back_img_word /* Firefox */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  50% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
@-webkit-keyframes back_img_word /* Safari and Chrome */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  50% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
@-o-keyframes back_img_word /* Opera */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  50% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
.big_img_arrow {
  width: 40px;
  height: 0px;
  border-bottom: 1px solid #fff;
  -webkit-transform: rotate(45deg); /*Safari 4+,Google Chrome 1+  */
  -moz-transform: rotate(45deg); /*Firefox 3.5+*/
  position: absolute;
  margin: 94px 0px 0px 26px;
  animation: big_img_arrow 1s;
  -moz-animation: big_img_arrow 1s; /* Firefox */
  -webkit-animation: big_img_arrow 1s; /* Safari and Chrome */
  -o-animation: big_img_arrow 1s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes big_img_arrow {
  0% {
    width: 0px;
  }
  100% {
    width: 40px;
  }
}

@-moz-keyframes big_img_arrow /* Firefox */ {
  0% {
    width: 0px;
  }
  100% {
    width: 40px;
  }
}
@-webkit-keyframes big_img_arrow /* Safari and Chrome */ {
  0% {
    width: 0px;
  }
  100% {
    width: 40px;
  }
}
@-o-keyframes big_img_arrow /* Opera */ {
  0% {
    width: 0px;
  }
  100% {
    width: 40px;
  }
}
.big_img_bottom {
  width: 68px;
  height: 0px;
  border-bottom: 1px solid #999;
  position: absolute;
  margin: 108px 0px 0px 60px;
  animation: big_img_bottom 1s;
  -moz-animation: big_img_bottom 1s; /* Firefox */
  -webkit-animation: big_img_bottom 1s; /* Safari and Chrome */
  -o-animation: big_img_bottom 1s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes big_img_bottom {
  0% {
    width: 0px;
  }
  100% {
    width: 68px;
  }
}

@-moz-keyframes big_img_bottom /* Firefox */ {
  0% {
    width: 0px;
  }
  100% {
    width: 68px;
  }
}
@-webkit-keyframes big_img_bottom /* Safari and Chrome */ {
  0% {
    width: 0px;
  }
  100% {
    width: 68px;
  }
}
@-o-keyframes big_img_bottom /* Opera */ {
  0% {
    width: 0px;
  }
  100% {
    width: 68px;
  }
}
.big_img_word {
  color: #fff;
  margin: 93px 0px 0px 76px;
  position: absolute;
  font-size: 8px;
  animation: big_img_word 2s;
  -moz-animation: big_img_word 2s; /* Firefox */
  -webkit-animation: big_img_word 2s; /* Safari and Chrome */
  -o-animation: big_img_word 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes big_img_word {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  50% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}

@-moz-keyframes big_img_word /* Firefox */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  50% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
@-webkit-keyframes big_img_word /* Safari and Chrome */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  50% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
@-o-keyframes big_img_word /* Opera */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  50% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
.course_div1 {
  background: #222;
  width: 120px;
  height: 70px;
  border: 1px solid #fff;
  position: absolute;
  margin: 80px 0px 0px 17px;
  animation: course_div1 1s;
  -moz-animation: course_div1 1s; /* Firefox */
  -webkit-animation: course_div1 1s; /* Safari and Chrome */
  -o-animation: course_div1 1s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes course_div1 {
  0% {
    border: 1px solid rgba(255, 255, 255, 0);
    background: #000;
  }
  16% {
    border: 1px solid #fff;
    background: #222;
  }
  100% {
    border: 1px solid #fff;
    background: #222;
  }
}

@-moz-keyframes course_div1 /* Firefox */ {
  0% {
    border: 1px solid rgba(255, 255, 255, 0);
    background: #000;
  }
  16% {
    border: 1px solid #fff;
    background: #222;
  }
  100% {
    border: 1px solid #fff;
    background: #222;
  }
}
@-webkit-keyframes course_div1 /* Safari and Chrome */ {
  0% {
    border: 1px solid rgba(255, 255, 255, 0);
    background: #000;
  }
  16% {
    border: 1px solid #fff;
    background: #222;
  }
  100% {
    border: 1px solid #fff;
    background: #222;
  }
}
@-o-keyframes course_div1 /* Opera */ {
  0% {
    border: 1px solid rgba(255, 255, 255, 0);
    background: #000;
  }
  16% {
    border: 1px solid #fff;
    background: #222;
  }
  100% {
    border: 1px solid #fff;
    background: #222;
  }
}
.course_div2 {
  background: #222;
  width: 120px;
  height: 70px;
  border: 1px solid #fff;
  position: absolute;
  margin: 80px 0px 0px 154px;
  animation: course_div2 1s;
  -moz-animation: course_div2 1s; /* Firefox */
  -webkit-animation: course_div2 1s; /* Safari and Chrome */
  -o-animation: course_div2 1s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes course_div2 {
  0% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  16% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  33% {
    background: #222;
    border: 1px solid #fff;
  }
  100% {
    background: #222;
    border: 1px solid #fff;
  }
}

@-moz-keyframes course_div2 /* Firefox */ {
  0% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  16% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  33% {
    background: #222;
    border: 1px solid #fff;
  }
  100% {
    background: #222;
    border: 1px solid #fff;
  }
}
@-webkit-keyframes course_div2 /* Safari and Chrome */ {
  0% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  16% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  33% {
    background: #222;
    border: 1px solid #fff;
  }
  100% {
    background: #222;
    border: 1px solid #fff;
  }
}
@-o-keyframes course_div2 /* Opera */ {
  0% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  16% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  33% {
    background: #222;
    border: 1px solid #fff;
  }
  100% {
    background: #222;
    border: 1px solid #fff;
  }
}
.course_div3 {
  background: #222;
  width: 120px;
  height: 70px;
  border: 1px solid #fff;
  position: absolute;
  margin: 80px 0px 0px 291px;
  animation: course_div3 1s;
  -moz-animation: course_div3 1s; /* Firefox */
  -webkit-animation: course_div3 1s; /* Safari and Chrome */
  -o-animation: course_div3 1s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes course_div3 {
  0% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  33% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  50% {
    background: #222;
    border: 1px solid #fff;
  }
  100% {
    background: #222;
    border: 1px solid #fff;
  }
}

@-moz-keyframes course_div3 /* Firefox */ {
  00% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  33% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  50% {
    background: #222;
    border: 1px solid #fff;
  }
  100% {
    background: #222;
    border: 1px solid #fff;
  }
}
@-webkit-keyframes course_div3 /* Safari and Chrome */ {
  0% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  33% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  50% {
    background: #222;
    border: 1px solid #fff;
  }
  100% {
    background: #222;
    border: 1px solid #fff;
  }
}
@-o-keyframes course_div3 /* Opera */ {
  0% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  33% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  50% {
    background: #222;
    border: 1px solid #fff;
  }
  100% {
    background: #222;
    border: 1px solid #fff;
  }
}
.course_div4 {
  background: #222;
  width: 120px;
  height: 70px;
  border: 1px solid #fff;
  position: absolute;
  margin: 80px 0px 0px 428px;
  animation: course_div4 1s;
  -moz-animation: course_div4 1s; /* Firefox */
  -webkit-animation: course_div4 1s; /* Safari and Chrome */
  -o-animation: course_div4 1s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes course_div4 {
  0% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  50% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  66% {
    background: #222;
    border: 1px solid #fff;
  }
  100% {
    background: #222;
    border: 1px solid #fff;
  }
}

@-moz-keyframes course_div4 /* Firefox */ {
  0% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  50% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  66% {
    background: #222;
    border: 1px solid #fff;
  }
  100% {
    background: #222;
    border: 1px solid #fff;
  }
}
@-webkit-keyframes course_div4 /* Safari and Chrome */ {
  0% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  50% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  66% {
    background: #222;
    border: 1px solid #fff;
  }
  100% {
    background: #222;
    border: 1px solid #fff;
  }
}
@-o-keyframes course_div4 /* Opera */ {
  0% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  50% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  66% {
    background: #222;
    border: 1px solid #fff;
  }
  100% {
    background: #222;
    border: 1px solid #fff;
  }
}
.course_div5 {
  background: #222;
  width: 120px;
  height: 70px;
  border: 1px solid #fff;
  position: absolute;
  margin: 180px 0px 0px 17px;
  animation: course_div5 1s;
  -moz-animation: course_div5 1s; /* Firefox */
  -webkit-animation: course_div5 1s; /* Safari and Chrome */
  -o-animation: course_div5 1s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes course_div5 {
  0% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  66% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  83% {
    background: #222;
    border: 1px solid #fff;
  }
  100% {
    background: #222;
    border: 1px solid #fff;
  }
}

@-moz-keyframes course_div5 /* Firefox */ {
  0% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  66% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  83% {
    background: #222;
    border: 1px solid #fff;
  }
  100% {
    background: #222;
    border: 1px solid #fff;
  }
}
@-webkit-keyframes course_div5 /* Safari and Chrome */ {
  0% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  66% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  83% {
    background: #222;
    border: 1px solid #fff;
  }
  100% {
    background: #222;
    border: 1px solid #fff;
  }
}
@-o-keyframes course_div5 /* Opera */ {
  0% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  66% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  83% {
    background: #222;
    border: 1px solid #fff;
  }
  100% {
    background: #222;
    border: 1px solid #fff;
  }
}
.course_div6 {
  background: #222;
  width: 120px;
  height: 70px;
  border: 1px solid #fff;
  position: absolute;
  margin: 180px 0px 0px 154px;
  animation: course_div6 1s;
  -moz-animation: course_div6 1s; /* Firefox */
  -webkit-animation: course_div6 1s; /* Safari and Chrome */
  -o-animation: course_div6 1s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes course_div6 {
  0% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  83% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  100% {
    background: #222;
    border: 1px solid #fff;
  }
}

@-moz-keyframes course_div6 /* Firefox */ {
  0% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  83% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  100% {
    background: #222;
    border: 1px solid #fff;
  }
}
@-webkit-keyframes course_div6 /* Safari and Chrome */ {
  0% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  83% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  100% {
    background: #222;
    border: 1px solid #fff;
  }
}
@-o-keyframes course_div6 /* Opera */ {
  0% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  83% {
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  100% {
    background: #222;
    border: 1px solid #fff;
  }
}
.course_list_arrow {
  width: 40px;
  height: 0px;
  border-bottom: 1px solid #fff;
  -webkit-transform: rotate(45deg); /*Safari 4+,Google Chrome 1+  */
  -moz-transform: rotate(45deg); /*Firefox 3.5+*/
  position: absolute;
  margin: 38px 0px 0px 26px;
  animation: course_list_arrow 1s;
  -moz-animation: course_list_arrow 1s; /* Firefox */
  -webkit-animation: course_list_arrow 1s; /* Safari and Chrome */
  -o-animation: course_list_arrow 1s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes course_list_arrow {
  0% {
    width: 0px;
  }
  100% {
    width: 40px;
  }
}

@-moz-keyframes course_list_arrow /* Firefox */ {
  0% {
    width: 0px;
  }
  100% {
    width: 40px;
  }
}
@-webkit-keyframes course_list_arrow /* Safari and Chrome */ {
  0% {
    width: 0px;
  }
  100% {
    width: 40px;
  }
}
@-o-keyframes course_list_arrow /* Opera */ {
  0% {
    width: 0px;
  }
  100% {
    width: 40px;
  }
}

.course_list_bottom {
  width: 100px;
  height: 0px;
  border-bottom: 1px solid #999;
  position: absolute;
  margin: 52px 0px 0px 60px;
  animation: course_list_bottom 1s;
  -moz-animation: course_list_bottom 1s; /* Firefox */
  -webkit-animation: course_list_bottom 1s; /* Safari and Chrome */
  -o-animation: course_list_bottom 1s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes course_list_bottom {
  0% {
    width: 0px;
  }
  100% {
    width: 100px;
  }
}

@-moz-keyframes course_list_bottom /* Firefox */ {
  0% {
    width: 0px;
  }
  100% {
    width: 100px;
  }
}
@-webkit-keyframes course_list_bottom /* Safari and Chrome */ {
  0% {
    width: 0px;
  }
  100% {
    width: 100px;
  }
}
@-o-keyframes course_list_bottom /* Opera */ {
  0% {
    width: 0px;
  }
  100% {
    width: 100px;
  }
}
.course_list_word {
  color: #fff;
  margin: 37px 0px 0px 64px;
  position: absolute;
  font-size: 8px;
  animation: course_list_word 2s;
  -moz-animation: course_list_word 2s; /* Firefox */
  -webkit-animation: course_list_word 2s; /* Safari and Chrome */
  -o-animation: course_list_word 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes course_list_word {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  50% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}

@-moz-keyframes course_list_word /* Firefox */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  50% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
@-webkit-keyframes course_list_word /* Safari and Chrome */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  50% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
@-o-keyframes course_list_word /* Opera */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  50% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
.course_width_left {
  height: 20px;
  width: 2px;
  border-left: 1px solid #999;
  position: absolute;
  margin: 50px 0px 0px 291px;
  animation: course_width_left 2s;
  -moz-animation: course_width_left 2s; /* Firefox */
  -webkit-animation: course_width_left 2s; /* Safari and Chrome */
  -o-animation: course_width_left 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes course_width_left {
  0% {
    height: 0px;
  }
  50% {
    height: 0px;
  }
  75% {
    height: 20px;
  }
  100% {
    height: 20px;
  }
}

@-moz-keyframes course_width_left /* Firefox */ {
  0% {
    height: 0px;
  }
  50% {
    height: 0px;
  }
  75% {
    height: 20px;
  }
  100% {
    height: 20px;
  }
}
@-webkit-keyframes course_width_left /* Safari and Chrome */ {
  0% {
    height: 0px;
  }
  50% {
    height: 0px;
  }
  75% {
    height: 20px;
  }
  100% {
    height: 20px;
  }
}
@-o-keyframes course_width_left /* Opera */ {
  0% {
    height: 0px;
  }
  50% {
    height: 0px;
  }
  75% {
    height: 20px;
  }
  100% {
    height: 20px;
  }
}
.course_width_right {
  height: 20px;
  width: 2px;
  border-left: 1px solid #999;
  position: absolute;
  margin: 50px 0px 0px 411px;
  animation: course_width_right 2s;
  -moz-animation: course_width_right 2s; /* Firefox */
  -webkit-animation: course_width_right 2s; /* Safari and Chrome */
  -o-animation: course_width_right 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes course_width_right {
  0% {
    height: 0px;
  }
  50% {
    height: 0px;
  }
  75% {
    height: 20px;
  }
  100% {
    height: 20px;
  }
}

@-moz-keyframes course_width_right /* Firefox */ {
  0% {
    height: 0px;
  }
  50% {
    height: 0px;
  }
  75% {
    height: 20px;
  }
  100% {
    height: 20px;
  }
}
@-webkit-keyframes course_width_right /* Safari and Chrome */ {
  0% {
    height: 0px;
  }
  50% {
    height: 0px;
  }
  75% {
    height: 20px;
  }
  100% {
    height: 20px;
  }
}
@-o-keyframes course_width_right /* Opera */ {
  0% {
    height: 0px;
  }
  50% {
    height: 0px;
  }
  75% {
    height: 20px;
  }
  100% {
    height: 20px;
  }
}
.course_width {
  height: 2px;
  width: 120px;
  border-top: 1px solid #999;
  position: absolute;
  margin: 60px 0px 0px 291px;
  animation: course_width 2s;
  -moz-animation: course_width 2s; /* Firefox */
  -webkit-animation: course_width 2s; /* Safari and Chrome */
  -o-animation: course_width 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes course_width {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 120px;
  }
  100% {
    width: 120px;
  }
}

@-moz-keyframes course_width /* Firefox */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 120px;
  }
  100% {
    width: 120px;
  }
}
@-webkit-keyframes course_width /* Safari and Chrome */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 120px;
  }
  100% {
    width: 120px;
  }
}
@-o-keyframes course_width /* Opera */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 120px;
  }
  100% {
    width: 120px;
  }
}
.course_width_comment {
  color: #fff;
  font-size: 8px;
  position: absolute;
  margin: 46px 0px 0px 324px;
  animation: course_width_comment 2s;
  -moz-animation: course_width_comment 2s; /* Firefox */
  -webkit-animation: course_width_comment 2s; /* Safari and Chrome */
  -o-animation: course_width_comment 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes course_width_comment {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  75% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}

@-moz-keyframes course_width_comment /* Firefox */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  75% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
@-webkit-keyframes course_width_comment /* Safari and Chrome */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  75% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
@-o-keyframes course_width_comment /* Opera */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  75% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
.course_height_top {
  height: 2px;
  width: 20px;
  border-top: 1px solid #999;
  position: absolute;
  margin: 180px 0px 0px 284px;
  animation: course_height_top 2s;
  -moz-animation: course_height_top 2s; /* Firefox */
  -webkit-animation: course_height_top 2s; /* Safari and Chrome */
  -o-animation: course_height_top 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes course_height_top {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 20px;
  }
  100% {
    width: 20px;
  }
}

@-moz-keyframes course_height_top /* Firefox */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 20px;
  }
  100% {
    width: 20px;
  }
}
@-webkit-keyframes course_height_top /* Safari and Chrome */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 20px;
  }
  100% {
    width: 20px;
  }
}
@-o-keyframes course_height_top /* Opera */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 20px;
  }
  100% {
    width: 20px;
  }
}
.course_height_bottom {
  height: 2px;
  width: 20px;
  border-top: 1px solid #999;
  position: absolute;
  margin: 250px 0px 0px 284px;
  animation: course_height_bottom 2s;
  -moz-animation: course_height_bottom 2s; /* Firefox */
  -webkit-animation: course_height_bottom 2s; /* Safari and Chrome */
  -o-animation: course_height_bottom 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes course_height_bottom {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 20px;
  }
  100% {
    width: 20px;
  }
}

@-moz-keyframes course_height_bottom /* Firefox */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 20px;
  }
  100% {
    width: 20px;
  }
}
@-webkit-keyframes course_height_bottom /* Safari and Chrome */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 20px;
  }
  100% {
    width: 20px;
  }
}
@-o-keyframes course_height_bottom /* Opera */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 20px;
  }
  100% {
    width: 20px;
  }
}
.course_height {
  height: 70px;
  width: 2px;
  border-left: 1px solid #999;
  position: absolute;
  margin: 180px 0px 0px 294px;
  animation: course_height 2s;
  -moz-animation: course_height 2s; /* Firefox */
  -webkit-animation: course_height 2s; /* Safari and Chrome */
  -o-animation: course_height 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes course_height {
  0% {
    height: 0px;
  }
  50% {
    height: 0px;
  }
  75% {
    height: 70px;
  }
  100% {
    height: 70px;
  }
}

@-moz-keyframes course_height /* Firefox */ {
  0% {
    height: 0px;
  }
  50% {
    height: 0px;
  }
  75% {
    height: 70px;
  }
  100% {
    height: 70px;
  }
}
@-webkit-keyframes course_height /* Safari and Chrome */ {
  0% {
    height: 0px;
  }
  50% {
    height: 0px;
  }
  75% {
    height: 70px;
  }
  100% {
    height: 70px;
  }
}
@-o-keyframes course_height /* Opera */ {
  0% {
    height: 0px;
  }
  50% {
    height: 0px;
  }
  75% {
    height: 70px;
  }
  100% {
    height: 70px;
  }
}
.course_height_comment {
  color: #fff;
  font-size: 8px;
  -moz-transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  display: block;
  position: absolute;
  margin: 210px 0px 0px 275px;
  animation: course_height_comment 2s;
  -moz-animation: course_height_comment 2s; /* Firefox */
  -webkit-animation: course_height_comment 2s; /* Safari and Chrome */
  -o-animation: course_height_comment 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes course_height_comment {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  75% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}

@-moz-keyframes course_height_comment /* Firefox */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  75% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
@-webkit-keyframes course_height_comment /* Safari and Chrome */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  75% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
@-o-keyframes course_height_comment /* Opera */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  75% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
.course_tap_arrow {
  width: 40px;
  height: 0px;
  border-bottom: 1px solid #ddd;
  -webkit-transform: rotate(45deg); /*Safari 4+,Google Chrome 1+  */
  -moz-transform: rotate(45deg); /*Firefox 3.5+*/
  position: absolute;
  margin: 164px 0px 0px 300px;
  animation: course_tap_arrow 2s;
  -moz-animation: course_tap_arrow 2s; /* Firefox */
  -webkit-animation: course_tap_arrow 2s; /* Safari and Chrome */
  -o-animation: course_tap_arrow 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes course_tap_arrow {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  100% {
    width: 40px;
  }
}

@-moz-keyframes course_tap_arrow /* Firefox */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  100% {
    width: 40px;
  }
}
@-webkit-keyframes course_tap_arrow /* Safari and Chrome */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  100% {
    width: 40px;
  }
}
@-o-keyframes course_tap_arrow /* Opera */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  100% {
    width: 40px;
  }
}

.course_tap_bottom {
  width: 150px;
  height: 0px;
  border-bottom: 1px solid #999;
  position: absolute;
  margin: 178px 0px 0px 334px;
  animation: course_tap_bottom 2s;
  -moz-animation: course_tap_bottom 2s; /* Firefox */
  -webkit-animation: course_tap_bottom 2s; /* Safari and Chrome */
  -o-animation: course_tap_bottom 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes course_tap_bottom {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  100% {
    width: 150px;
  }
}

@-moz-keyframes course_tap_bottom /* Firefox */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  100% {
    width: 150px;
  }
}
@-webkit-keyframes course_tap_bottom /* Safari and Chrome */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  100% {
    width: 150px;
  }
}
@-o-keyframes course_tap_bottom /* Opera */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  100% {
    width: 150px;
  }
}
.course_tap_word {
  color: #fff;
  margin: 165px 0px 0px 335px;
  position: absolute;
  font-size: 8px;
  animation: course_tap_word 2s;
  -moz-animation: course_tap_word 2s; /* Firefox */
  -webkit-animation: course_tap_word 2s; /* Safari and Chrome */
  -o-animation: course_tap_word 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes course_tap_word {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  75% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}

@-moz-keyframes course_tap_word /* Firefox */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  75% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
@-webkit-keyframes course_tap_word /* Safari and Chrome */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  75% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
@-o-keyframes course_tap_word /* Opera */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  75% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
.course_list_left {
  height: 20px;
  width: 2px;
  border-left: 1px solid #999;
  position: absolute;
  margin: 280px 0px 0px 17px;
  animation: course_list_left 2s;
  -moz-animation: course_list_left 2s; /* Firefox */
  -webkit-animation: course_list_left 2s; /* Safari and Chrome */
  -o-animation: course_list_left 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes course_list_left {
  0% {
    height: 0px;
  }
  50% {
    height: 0px;
  }
  75% {
    height: 20px;
  }
  100% {
    height: 20px;
  }
}

@-moz-keyframes course_list_left /* Firefox */ {
  0% {
    height: 0px;
  }
  50% {
    height: 0px;
  }
  75% {
    height: 20px;
  }
  100% {
    height: 20px;
  }
}
@-webkit-keyframes course_list_left /* Safari and Chrome */ {
  0% {
    height: 0px;
  }
  50% {
    height: 0px;
  }
  75% {
    height: 20px;
  }
  100% {
    height: 20px;
  }
}
@-o-keyframes course_list_left /* Opera */ {
  0% {
    height: 0px;
  }
  50% {
    height: 0px;
  }
  75% {
    height: 20px;
  }
  100% {
    height: 20px;
  }
}
.course_list_right {
  height: 20px;
  width: 2px;
  border-left: 1px solid #999;
  position: absolute;
  margin: 280px 0px 0px 547px;
  animation: course_width_right 2s;
  -moz-animation: course_width_right 2s; /* Firefox */
  -webkit-animation: course_width_right 2s; /* Safari and Chrome */
  -o-animation: course_width_right 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes course_width_right {
  0% {
    height: 0px;
  }
  50% {
    height: 0px;
  }
  75% {
    height: 20px;
  }
  100% {
    height: 20px;
  }
}

@-moz-keyframes course_width_right /* Firefox */ {
  0% {
    height: 0px;
  }
  50% {
    height: 0px;
  }
  75% {
    height: 20px;
  }
  100% {
    height: 20px;
  }
}
@-webkit-keyframes course_width_right /* Safari and Chrome */ {
  0% {
    height: 0px;
  }
  50% {
    height: 0px;
  }
  75% {
    height: 20px;
  }
  100% {
    height: 20px;
  }
}
@-o-keyframes course_width_right /* Opera */ {
  0% {
    height: 0px;
  }
  50% {
    height: 0px;
  }
  75% {
    height: 20px;
  }
  100% {
    height: 20px;
  }
}
.course_list_width {
  height: 2px;
  width: 530px;
  border-top: 1px solid #999;
  position: absolute;
  margin: 290px 0px 0px 17px;
  animation: course_list_width 2s;
  -moz-animation: course_list_width 2s; /* Firefox */
  -webkit-animation: course_list_width 2s; /* Safari and Chrome */
  -o-animation: course_list_width 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes course_list_width {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 530px;
  }
  100% {
    width: 530px;
  }
}

@-moz-keyframes course_list_width /* Firefox */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 530px;
  }
  100% {
    width: 530px;
  }
}
@-webkit-keyframes course_list_width /* Safari and Chrome */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 530px;
  }
  100% {
    width: 530px;
  }
}
@-o-keyframes course_list_width /* Opera */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 530px;
  }
  100% {
    width: 530px;
  }
}
.course_list_comment {
  color: #fff;
  font-size: 8px;
  position: absolute;
  margin: 276px 0px 0px 237px;
  animation: course_width_comment 2s;
  -moz-animation: course_width_comment 2s; /* Firefox */
  -webkit-animation: course_width_comment 2s; /* Safari and Chrome */
  -o-animation: course_width_comment 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes course_width_comment {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  75% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}

@-moz-keyframes course_width_comment /* Firefox */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  75% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
@-webkit-keyframes course_width_comment /* Safari and Chrome */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  75% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
@-o-keyframes course_width_comment /* Opera */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  75% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
.base_list_arrow {
  width: 40px;
  height: 0px;
  border-bottom: 1px solid #fff;
  -webkit-transform: rotate(45deg); /*Safari 4+,Google Chrome 1+  */
  -moz-transform: rotate(45deg); /*Firefox 3.5+*/
  position: absolute;
  margin: 38px 0px 0px 26px;
  animation: course_list_arrow 1s;
  -moz-animation: course_list_arrow 1s; /* Firefox */
  -webkit-animation: course_list_arrow 1s; /* Safari and Chrome */
  -o-animation: course_list_arrow 1s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
.base_list_bottom {
  width: 87px;
  height: 0px;
  border-bottom: 1px solid #999;
  position: absolute;
  margin: 52px 0px 0px 60px;
  animation: base_list_bottom 1s;
  -moz-animation: base_list_bottom 1s; /* Firefox */
  -webkit-animation: base_list_bottom 1s; /* Safari and Chrome */
  -o-animation: base_list_bottom 1s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes base_list_bottom {
  0% {
    width: 0px;
  }
  100% {
    width: 87px;
  }
}

@-moz-keyframes base_list_bottom /* Firefox */ {
  0% {
    width: 0px;
  }
  100% {
    width: 87px;
  }
}
@-webkit-keyframes base_list_bottom /* Safari and Chrome */ {
  0% {
    width: 0px;
  }
  100% {
    width: 87px;
  }
}
@-o-keyframes base_list_bottom /* Opera */ {
  0% {
    width: 0px;
  }
  100% {
    width: 87px;
  }
}
.base_list_word {
  color: #fff;
  margin: 37px 0px 0px 64px;
  position: absolute;
  font-size: 8px;
  animation: course_list_word 2s;
  -moz-animation: course_list_word 2s; /* Firefox */
  -webkit-animation: course_list_word 2s; /* Safari and Chrome */
  -o-animation: course_list_word 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
.base_center {
  position: absolute;
  border: 1px solid #fff;
  width:200px;
  height:150px;
  background: #222;
  margin: 100px 0px 0px 185px;
animation: base_center 1s;
  -moz-animation: base_center 1s; /* Firefox */
  -webkit-animation: base_center 1s; /* Safari and Chrome */
  -o-animation: base_center 1s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes base_center {
  0% {
    border: 1px solid #000;
    background: #000;
  }
  33% {
    border: 1px solid #fff;
  background: #222;
  }
}

@-moz-keyframes base_center /* Firefox */ {
  0% {
    border: 1px solid #000;
    background: #000;
  }
  33% {
    border: 1px solid #fff;
  background: #222;
  }
}
@-webkit-keyframes base_center /* Safari and Chrome */ {
  0% {
    border: 1px solid #000;
    background: #000;
  }
  33% {
    border: 1px solid #fff;
  background: #222;
  }
}
@-o-keyframes base_center /* Opera */ {
  0% {
    border: 1px solid #000;
    background: #000;
  }
  33% {
    border: 1px solid #fff;
  background: #222;
  }
}
.base_left1 {
  position: absolute;
  border: 1px solid #fff;
  border-right: 0px;
  width:50px;
  height:120px;
  background: #555;
  margin: 115px 0px 0px 135px;
  animation: base_left1 1s;
  -moz-animation: base_left1 1s; /* Firefox */
  -webkit-animation: base_left1 1s; /* Safari and Chrome */
  -o-animation: base_left1 1s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes base_left1 {
  0% {
    border: 1px solid #000;
    border-right: 0px;
    background: #000;
    width:0px;
  }
  33% {
    border: 1px solid #000;
    border-right: 0px;
    background: #000;
    width:0px;
  }
  66% {
    border: 1px solid #fff;
    border-right: 0px;
  background: #555;
  width:50px;
  }
  100% {
    border: 1px solid #fff;
    border-right: 0px;
  background: #555;
  width:50px;
  }
}

@-moz-keyframes base_left1 /* Firefox */ {
  0% {
    border: 1px solid #000;
    border-right: 0px;
    background: #000;
    width:0px;
  }
  33% {
    border: 1px solid #000;
    border-right: 0px;
    background: #000;
    width:0px;
  }
  66% {
    border: 1px solid #fff;
    border-right: 0px;
  background: #555;
  width:50px;
  }
  100% {
    border: 1px solid #fff;
    border-right: 0px;
  background: #555;
  width:50px;
  }
}
@-webkit-keyframes base_left1 /* Safari and Chrome */ {
  0% {
    border: 1px solid #000;
    border-right: 0px;
    background: #000;
    width:0px;
  }
  33% {
    border: 1px solid #000;
    border-right: 0px;
    background: #000;
    width:0px;
  }
  66% {
    border: 1px solid #fff;
    border-right: 0px;
  background: #555;
  width:50px;
  }
  100% {
    border: 1px solid #fff;
    border-right: 0px;
  background: #555;
  width:50px;
  }
}
@-o-keyframes base_left1 /* Opera */ {
 0% {
    border: 1px solid #000;
    border-right: 0px;
    background: #000;
    width:0px;
  }
  33% {
    border: 1px solid #000;
    border-right: 0px;
    background: #000;
    width:0px;
  }
  66% {
    border: 1px solid #fff;
    border-right: 0px;
  background: #555;
  width:50px;
  }
  100% {
    border: 1px solid #fff;
    border-right: 0px;
  background: #555;
  width:50px;
  }
}
.base_right1 {
  position: absolute;
  border: 1px solid #fff;
   border-left: 0px;
  width:50px;
  height:120px;
  background: #555;
  margin: 115px 0px 0px 385px;
animation: base_right1 1s;
  -moz-animation: base_right1 1s; /* Firefox */
  -webkit-animation: base_right1 1s; /* Safari and Chrome */
  -o-animation: base_right1 1s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes base_right1 {
  0% {
    border: 1px solid #000;
    border-left: 0px;
    background: #000;
    height:0px;
  }
  33% {
    border: 1px solid #000;
    border-left: 0px;
    background: #000;
    height:0px;
  }
  66% {
    border: 1px solid #fff;
    border-left: 0px;
  background: #555;
  height:120px;
  }
  100% {
    border: 1px solid #fff;
    border-left: 0px;
  background: #555;
  height:120px;
  }
}

@-moz-keyframes base_right1 /* Firefox */ {
  0% {
    border: 1px solid #000;
    border-left: 0px;
    background: #000;
    height:0px;
  }
  33% {
    border: 1px solid #000;
    border-left: 0px;
    background: #000;
    height:0px;
  }
  66% {
    border: 1px solid #fff;
    border-left: 0px;
  background: #555;
  height:120px;
  }
  100% {
    border: 1px solid #fff;
    border-left: 0px;
  background: #555;
  height:120px;
  }
}
@-webkit-keyframes base_right1 /* Safari and Chrome */ {
  0% {
    border: 1px solid #000;
    border-left: 0px;
    background: #000;
    height:0px;
  }
  33% {
    border: 1px solid #000;
    border-left: 0px;
    background: #000;
    height:0px;
  }
  66% {
    border: 1px solid #fff;
    border-left: 0px;
  background: #555;
  height:120px;
  }
  100% {
    border: 1px solid #fff;
    border-left: 0px;
  background: #555;
  height:120px;
  }
}
@-o-keyframes base_right1 /* Opera */ {
  0% {
    border: 1px solid #000;
    border-left: 0px;
    background: #000;
    height:0px;
  }
  33% {
    border: 1px solid #000;
    border-left: 0px;
    background: #000;
    height:0px;
  }
  66% {
    border: 1px solid #fff;
    border-left: 0px;
  background: #555;
  height:120px;
  }
  100% {
    border: 1px solid #fff;
    border-left: 0px;
  background: #555;
  height:120px;
  }
}
.base_left2 {
  position: absolute;
  border: 1px solid #fff;
  border-right: 0px;
  width:30px;
  height:70px;
  background: #888;
  margin: 140px 0px 0px 105px;
animation: base_left2 1s;
  -moz-animation: base_left2 1s; /* Firefox */
  -webkit-animation: base_left2 1s; /* Safari and Chrome */
  -o-animation: base_left2 1s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes base_left2 {
  0% {
    border: 1px solid #000;
    border-right: 0px;
    background: #000;
    height:0px;
  }
  66% {
    border: 1px solid #000;
    border-right: 0px;
    background: #000;
    height:0px;
  }
  100% {
    border: 1px solid #fff;
    border-right: 0px;
  background: #888;
  height:70px;
  }
}

@-moz-keyframes base_left2 /* Firefox */ {
  0% {
    border: 1px solid #000;
    border-right: 0px;
    background: #000;
    height:0px;
  }
  66% {
    border: 1px solid #000;
    border-right: 0px;
    background: #000;
    height:0px;
  }
  100% {
    border: 1px solid #fff;
    border-right: 0px;
  background: #888;
  height:70px;
  }
}
@-webkit-keyframes base_left2 /* Safari and Chrome */ {
  0% {
    border: 1px solid #000;
    border-right: 0px;
    background: #000;
    height:0px;
  }
  66% {
    border: 1px solid #000;
    border-right: 0px;
    background: #000;
    height:0px;
  }
  100% {
    border: 1px solid #fff;
    border-right: 0px;
  background: #888;
  height:70px;
  }
}
@-o-keyframes base_left2 /* Opera */ {
 0% {
    border: 1px solid #000;
    border-right: 0px;
    background: #000;
    height:0px;
  }
  66% {
    border: 1px solid #000;
    border-right: 0px;
    background: #000;
    height:0px;
  }
  100% {
    border: 1px solid #fff;
    border-right: 0px;
  background: #888;
  height:70px;
  }
}
.base_right2 {
  position: absolute;
  border: 1px solid #fff;
  border-left: 0px;
  width:30px;
  height:70px;
  background: #888;
  margin: 140px 0px 0px 435px;
animation: base_right2 1s;
  -moz-animation: base_right2 1s; /* Firefox */
  -webkit-animation: base_right2 1s; /* Safari and Chrome */
  -o-animation: base_right2 1s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes base_right2 {
  0% {
    border: 1px solid #000;
    border-left: 0px;
    background: #000;
    width:0px;
  }
  66% {
    border: 1px solid #000;
    border-left: 0px;
    background: #000;
    width:0px;
  }
  100% {
    border: 1px solid #fff;
    border-left: 0px;
  background: #888;
  width:30px;
  }
}

@-moz-keyframes base_right2 /* Firefox */ {
 0% {
    border: 1px solid #000;
    border-left: 0px;
    background: #000;
    width:0px;
  }
  66% {
    border: 1px solid #000;
    border-left: 0px;
    background: #000;
    width:0px;
  }
  100% {
    border: 1px solid #fff;
    border-left: 0px;
  background: #888;
  width:30px;
  }
}
@-webkit-keyframes base_right2 /* Safari and Chrome */ {
  0% {
    border: 1px solid #000;
    border-left: 0px;
    background: #000;
    width:0px;
  }
  66% {
    border: 1px solid #000;
    border-left: 0px;
    background: #000;
    width:0px;
  }
  100% {
    border: 1px solid #fff;
    border-left: 0px;
  background: #888;
  width:30px;
  }
}
@-o-keyframes base_right2 /* Opera */ {
0% {
    border: 1px solid #000;
    border-left: 0px;
    background: #000;
    width:0px;
  }
  66% {
    border: 1px solid #000;
    border-left: 0px;
    background: #000;
    width:0px;
  }
  100% {
    border: 1px solid #fff;
    border-left: 0px;
  background: #888;
  width:30px;
  }
}
.base_img_arrow {
width: 40px;
  height: 0px;
  border-bottom: 1px solid #bbb;
  -webkit-transform: rotate(135deg); /*Safari 4+,Google Chrome 1+  */
  -moz-transform: rotate(135deg); /*Firefox 3.5+*/
  position: absolute;
  margin: 85px 0px 0px 256px;
  animation: base_img_arrow 2s;
  -moz-animation: base_img_arrow 2s; /* Firefox */
  -webkit-animation: base_img_arrow 2s; /* Safari and Chrome */
  -o-animation: base_img_arrow 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes base_img_arrow {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 40px;
  }
  100% {
    width: 40px;
  }
}

@-moz-keyframes base_img_arrow /* Firefox */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 40px;
  }
  100% {
    width: 40px;
  }
}
@-webkit-keyframes base_img_arrow /* Safari and Chrome */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 40px;
  }
  100% {
    width: 40px;
  }
}
@-o-keyframes base_img_arrow /* Opera */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 40px;
  }
  100% {
    width: 40px;
  }
}
.base_img_bottom {
  width: 158px;
  height: 0px;
  border-bottom: 1px solid #999;
  position: absolute;
  margin: 71px 0px 0px 291px;
  animation: base_img_bottom 2s;
  -moz-animation: base_img_bottom 2s; /* Firefox */
  -webkit-animation: base_img_bottom 2s; /* Safari and Chrome */
  -o-animation: base_img_bottom 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes base_img_bottom {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 158px;
  }
  100% {
    width: 158px;
  }
}

@-moz-keyframes base_img_bottom /* Firefox */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 158px;
  }
  100% {
    width: 158px;
  }
}
@-webkit-keyframes base_img_bottom /* Safari and Chrome */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 158px;
  }
  100% {
    width: 158px;
  }
}
@-o-keyframes base_img_bottom /* Opera */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 158px;
  }
  100% {
    width: 158px;
  }
}
.base_img_word {
  color: #fff;
  margin: 57px 0px 0px 291px;;
  position: absolute;
  font-size: 8px;
  animation: vertical_scroll 2s;
  -moz-animation: vertical_scroll 2s; /* Firefox */
  -webkit-animation: vertical_scroll 2s; /* Safari and Chrome */
  -o-animation: vertical_scroll 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes vertical_scroll {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  75% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}

@-moz-keyframes vertical_scroll /* Firefox */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  75% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
@-webkit-keyframes vertical_scroll /* Safari and Chrome */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  75% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
@-o-keyframes vertical_scroll /* Opera */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  75% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
.base_width_left {
height: 20px;
  width: 2px;
  border-left: 1px solid #999;
  position: absolute;
  margin: 280px 0px 0px 105px;
  animation: course_width_left 2s;
  -moz-animation: course_width_left 2s; /* Firefox */
  -webkit-animation: course_width_left 2s; /* Safari and Chrome */
  -o-animation: course_width_left 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
.base_width_right {
  height: 20px;
  width: 2px;
  border-left: 1px solid #999;
  position: absolute;
  margin: 280px 0px 0px 464px;
  animation: course_width_right 2s;
  -moz-animation: course_width_right 2s; /* Firefox */
  -webkit-animation: course_width_right 2s; /* Safari and Chrome */
  -o-animation: course_width_right 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
.base_width {
  height: 2px;
  width: 359px;
  border-top: 1px solid #999;
  position: absolute;
  margin: 290px 0px 0px 105px;
  animation: base_width 2s;
  -moz-animation: base_width 2s; /* Firefox */
  -webkit-animation: base_width 2s; /* Safari and Chrome */
  -o-animation: base_width 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes base_width {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 359px;
  }
  100% {
    width: 359px;
  }
}

@-moz-keyframes base_width /* Firefox */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 359px;
  }
  100% {
    width: 359px;
  }
}
@-webkit-keyframes base_width /* Safari and Chrome */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 359px;
  }
  100% {
    width: 359px;
  }
}
@-o-keyframes base_width /* Opera */ {
 0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 359px;
  }
  100% {
    width: 359px;
  }
}
.base_width_comment {
  color: #fff;
  font-size: 8px;
  position: absolute;
  margin: 277px 0px 0px 205px;
  animation: course_width_comment 2s;
  -moz-animation: course_width_comment 2s; /* Firefox */
  -webkit-animation: course_width_comment 2s; /* Safari and Chrome */
  -o-animation: course_width_comment 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
.map_div {
  width:320px;
  height:180px;
  border: 1px solid #fff;
  position: absolute;
  background: #333;
  margin:120px 0px 0px 125px;
  animation: map_div 2s;
  -moz-animation: map_div 2s; /* Firefox */
  -webkit-animation: map_div 2s; /* Safari and Chrome */
  -o-animation: map_div 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes map_div {
  0% {
    width: 0px;
  }
  50% {
    width: 320px;
  }
  100% {
    width: 320px;
  }
}

@-moz-keyframes map_div /* Firefox */ {
  0% {
    width: 0px;
  }
  50% {
    width: 320px;
  }
  100% {
    width: 320px;
  }
}
@-webkit-keyframes map_div /* Safari and Chrome */ {
  0% {
    width: 0px;
  }
  50% {
    width: 320px;
  }
  100% {
    width: 320px;
  }
}
@-o-keyframes map_div /* Opera */ {
 0% {
    width: 0px;
  }
  50% {
    width: 320px;
  }
  100% {
    width: 320px;
  }
}
.map_information_div {
  width:200px;
  height:30px;
  border: 1px solid #fff;
  position: absolute;
  background: #777;
  margin:80px 0px 0px 125px;
animation: map_information_div 2s;
  -moz-animation: map_information_div 2s; /* Firefox */
  -webkit-animation: map_information_div 2s; /* Safari and Chrome */
  -o-animation: map_information_div 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes map_information_div {
  0% {
    background: #000;
  }
  50% {
    background: #777;
  }
  100% {
    background: #777;
  }
}

@-moz-keyframes map_information_div /* Firefox */ {
  0% {
    background: #000;
  }
  50% {
    background: #777;
  }
  100% {
    background: #777;
  }
}
@-webkit-keyframes map_information_div /* Safari and Chrome */ {
  0% {
    background: #000;
  }
  50% {
    background: #777;
  }
  100% {
    background: #777;
  }
}
@-o-keyframes map_information_div /* Opera */ {
 0% {
    background: #000;
  }
  50% {
    background: #777;
  }
  100% {
    background: #777;
  }
}
.map_part_arrow{
width: 40px;
  height: 0px;
  border-bottom: 1px solid #fff;
  -webkit-transform: rotate(45deg); /*Safari 4+,Google Chrome 1+  */
  -moz-transform: rotate(45deg); /*Firefox 3.5+*/
  position: absolute;
  margin: 38px 0px 0px 26px;
  animation: course_list_arrow 1s;
  -moz-animation: course_list_arrow 1s; /* Firefox */
  -webkit-animation: course_list_arrow 1s; /* Safari and Chrome */
  -o-animation: course_list_arrow 1s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
.map_part_bottom {
  width: 132px;
  height: 0px;
  border-bottom: 1px solid #999;
  position: absolute;
  margin: 52px 0px 0px 60px;
  animation: map_part_bottom 1s;
  -moz-animation: map_part_bottom 1s; /* Firefox */
  -webkit-animation: map_part_bottom 1s; /* Safari and Chrome */
  -o-animation: map_part_bottom 1s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes map_part_bottom {
  0% {
    width: 0px;
  }
  100% {
    width: 132px;
  }
}

@-moz-keyframes map_part_bottom /* Firefox */ {
  0% {
    width: 0px;
  }
  100% {
    width: 132px;
  }
}
@-webkit-keyframes map_part_bottom /* Safari and Chrome */ {
  0% {
    width: 0px;
  }
  100% {
    width: 132px;
  }
}
@-o-keyframes map_part_bottom /* Opera */ {
  0% {
    width: 0px;
  }
  100% {
    width: 132px;
  }
}
.map_part_word {
  color: #fff;
  margin: 37px 0px 0px 64px;
  position: absolute;
  font-size: 8px;
  animation: course_list_word 2s;
  -moz-animation: course_list_word 2s; /* Firefox */
  -webkit-animation: course_list_word 2s; /* Safari and Chrome */
  -o-animation: course_list_word 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
.company_info_arrow {
width: 40px;
  height: 0px;
  border-bottom: 1px solid #bbb;
  -webkit-transform: rotate(135deg); /*Safari 4+,Google Chrome 1+  */
  -moz-transform: rotate(135deg); /*Firefox 3.5+*/
  position: absolute;
  margin: 65px 0px 0px 256px;
  animation: base_img_arrow 2s;
  -moz-animation: base_img_arrow 2s; /* Firefox */
  -webkit-animation: base_img_arrow 2s; /* Safari and Chrome */
  -o-animation: base_img_arrow 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
.company_info_bottom {
  width: 83px;
  height: 0px;
  border-bottom: 1px solid #999;
  position: absolute;
  margin: 50px 0px 0px 291px;
  animation: company_info_bottom 2s;
  -moz-animation: company_info_bottom 2s; /* Firefox */
  -webkit-animation: company_info_bottom 2s; /* Safari and Chrome */
  -o-animation: company_info_bottom 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes company_info_bottom {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 83px;
  }
  100% {
    width: 83px;
  }
}

@-moz-keyframes company_info_bottom /* Firefox */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 83px;
  }
  100% {
    width: 83px;
  }
}
@-webkit-keyframes company_info_bottom /* Safari and Chrome */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 83px;
  }
  100% {
    width: 83px;
  }
}
@-o-keyframes company_info_bottom /* Opera */ {
 0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 83px;
  }
  100% {
    width: 83px;
  }
}
.company_info_word {
  color: #fff;
  margin: 37px 0px 0px 291px;;
  position: absolute;
  font-size: 8px;
  animation: vertical_scroll 2s;
  -moz-animation: vertical_scroll 2s; /* Firefox */
  -webkit-animation: vertical_scroll 2s; /* Safari and Chrome */
  -o-animation: vertical_scroll 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
.map_info_arrow {
width: 40px;
  height: 0px;
  border-bottom: 1px solid #bbb;
  -webkit-transform: rotate(135deg); /*Safari 4+,Google Chrome 1+  */
  -moz-transform: rotate(135deg); /*Firefox 3.5+*/
  position: absolute;
  margin: 105px 0px 0px 406px;
  animation: base_img_arrow 2s;
  -moz-animation: base_img_arrow 2s; /* Firefox */
  -webkit-animation: base_img_arrow 2s; /* Safari and Chrome */
  -o-animation: base_img_arrow 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
.map_info_bottom {
  width: 58px;
  height: 0px;
  border-bottom: 1px solid #999;
  position: absolute;
  margin: 90px 0px 0px 440px;
  animation: map_info_bottom 2s;
  -moz-animation: map_info_bottom 2s; /* Firefox */
  -webkit-animation: map_info_bottom 2s; /* Safari and Chrome */
  -o-animation: map_info_bottom 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes map_info_bottom {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 58px;
  }
  100% {
    width: 58px;
  }
}

@-moz-keyframes map_info_bottom /* Firefox */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 58px;
  }
  100% {
    width: 58px;
  }
}
@-webkit-keyframes map_info_bottom /* Safari and Chrome */ {
   0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 58px;
  }
  100% {
    width: 58px;
  }
}
@-o-keyframes map_info_bottom /* Opera */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 58px;
  }
  100% {
    width: 58px;
  }
}
.map_info_word {
  color: #fff;
  margin: 77px 0px 0px 440px;;
  position: absolute;
  font-size: 8px;
  animation: vertical_scroll 2s;
  -moz-animation: vertical_scroll 2s; /* Firefox */
  -webkit-animation: vertical_scroll 2s; /* Safari and Chrome */
  -o-animation: vertical_scroll 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
.map_height_top {
height: 2px;
  width: 20px;
  border-top: 1px solid #999;
  position: absolute;
  margin: 120px 0px 0px 80px;
  animation: course_height_top 2s;
  -moz-animation: course_height_top 2s; /* Firefox */
  -webkit-animation: course_height_top 2s; /* Safari and Chrome */
  -o-animation: course_height_top 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
.map_height_bottom {
  height: 2px;
  width: 20px;
  border-top: 1px solid #999;
  position: absolute;
  margin: 300px 0px 0px 80px;
  animation: course_height_bottom 2s;
  -moz-animation: course_height_bottom 2s; /* Firefox */
  -webkit-animation: course_height_bottom 2s; /* Safari and Chrome */
  -o-animation: course_height_bottom 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
.map_height {
  height: 180px;
  width: 2px;
  border-left: 1px solid #999;
  position: absolute;
  margin: 120px 0px 0px 90px;
  animation: map_height 2s;
  -moz-animation: map_height 2s; /* Firefox */
  -webkit-animation: map_height 2s; /* Safari and Chrome */
  -o-animation: map_height 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes map_height {
  0% {
    height: 0px;
  }
  50% {
    height: 0px;
  }
  75% {
    height: 180px;
  }
  100% {
    height: 180px;
  }
}

@-moz-keyframes map_height /* Firefox */ {
  0% {
    height: 0px;
  }
  50% {
    height: 0px;
  }
  75% {
    height: 180px;
  }
  100% {
    height: 180px;
  }
}
@-webkit-keyframes map_height /* Safari and Chrome */ {
  0% {
    height: 0px;
  }
  50% {
    height: 0px;
  }
  75% {
    height: 180px;
  }
  100% {
    height: 180px;
  }
}
@-o-keyframes map_height /* Opera */ {
  0% {
    height: 0px;
  }
  50% {
    height: 0px;
  }
  75% {
    height: 180px;
  }
  100% {
    height: 180px;
  }
}
.map_height_comment {
  color: #fff;
  font-size: 8px;
  -moz-transform: rotate(270deg);
  -webkit-transform: rotate(270deg);
  display: block;
  position: absolute;
  margin: 210px 0px 0px 53px;
  animation: course_height_comment 2s;
  -moz-animation: course_height_comment 2s; /* Firefox */
  -webkit-animation: course_height_comment 2s; /* Safari and Chrome */
  -o-animation: course_height_comment 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes course_height_comment {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  75% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}

@-moz-keyframes course_height_comment /* Firefox */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  75% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
@-webkit-keyframes course_height_comment /* Safari and Chrome */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  75% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
@-o-keyframes course_height_comment /* Opera */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  75% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
.map_width_left {
height: 20px;
  width: 2px;
  border-left: 1px solid #999;
  position: absolute;
  margin: 315px 0px 0px 125px;
  animation: course_width_left 2s;
  -moz-animation: course_width_left 2s; /* Firefox */
  -webkit-animation: course_width_left 2s; /* Safari and Chrome */
  -o-animation: course_width_left 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
.map_width_right {
  height: 20px;
  width: 2px;
  border-left: 1px solid #999;
  position: absolute;
  margin: 315px 0px 0px 444px;
  animation: course_width_right 2s;
  -moz-animation: course_width_right 2s; /* Firefox */
  -webkit-animation: course_width_right 2s; /* Safari and Chrome */
  -o-animation: course_width_right 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
.map_width {
  height: 2px;
  width: 320px;
  border-top: 1px solid #999;
  position: absolute;
  margin: 325px 0px 0px 125px;;
  animation: map_width 2s;
  -moz-animation: map_width 2s; /* Firefox */
  -webkit-animation: map_width 2s; /* Safari and Chrome */
  -o-animation: map_width 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes map_width {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 320px;
  }
  100% {
    width: 320px;
  }
}

@-moz-keyframes map_width /* Firefox */ {
 0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 320px;
  }
  100% {
    width: 320px;
  }
}
@-webkit-keyframes map_width /* Safari and Chrome */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 320px;
  }
  100% {
    width: 320px;
  }
}
@-o-keyframes map_width /* Opera */ {
  0% {
    width: 0px;
  }
  50% {
    width: 0px;
  }
  75% {
    width: 320px;
  }
  100% {
    width: 320px;
  }
}
.map_width_comment {
  color: #fff;
  font-size: 8px;
  position: absolute;
  margin: 311px 0px 0px 255px;;
  animation: course_width_comment 2s;
  -moz-animation: course_width_comment 2s; /* Firefox */
  -webkit-animation: course_width_comment 2s; /* Safari and Chrome */
  -o-animation: course_width_comment 2s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes course_width_comment {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  75% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}

@-moz-keyframes course_width_comment /* Firefox */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  75% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
@-webkit-keyframes course_width_comment /* Safari and Chrome */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  75% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
@-o-keyframes course_width_comment /* Opera */ {
  0% {
    color: rgba(255, 255, 255, 0);
  }
  75% {
    color: rgba(255, 255, 255, 0);
  }
  100% {
    color: rgba(255, 255, 255, 1);
  }
}
</style>