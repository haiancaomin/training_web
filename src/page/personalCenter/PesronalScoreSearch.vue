<template>
  <div id="PesronalScoreSearch">
    <div class="order-dialog">
      <el-dialog :visible.sync="showCertificateDialog" title="证书展示" width="1000px">
        <p class="count_certificate">{{ruleForm.name}}共有{{pictueUrl.length}}张证书</p>
        <div class="certificate-page">
          <el-pagination
            background
            layout="prev, pager, next"
            :page-size="1"
            :total="pictueUrl.length"
            @current-change="handleCurrentChange"
          ></el-pagination>
        </div>
        <div class="certificate">
          <iframe
            align="middle"
            frameborder="0"
            height="800"
            scrolling="no"
            width="800"
            :src="pictueUrl[currentPage-1]"
          ></iframe>
        </div>
      </el-dialog>
    </div>
    <div class="score_search_div">
      <div class="left_line"></div>
      <div class="right_line"></div>
      <div class="split_line"></div>
      <router-link to="/course">
        <div class="scan_course">
          <div class="goto_course">了解课程</div>
          <img src="../../assets/course_scan_img.jpg" />
        </div>
      </router-link>
      <router-link to="/base">
      <div class="scan_base">
        <div class="goto_base">了解基地</div>
          <img src="../../assets/base_scan_img.jpg" />
      </div>
      </router-link>
      <div class="certificate_title">证书查询</div>
      <div class="PesronalScoreSearch-info">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" id="certificate_form">
          <el-form-item prop="name">
            <el-input placeholder="请输入姓名" v-model="ruleForm.name" name="name" id="nameFocus">
              <i slot="prefix" class="iconfont">&#xe614;</i>
            </el-input>
          </el-form-item>

          <el-form-item prop="cardno">
            <el-input placeholder="请输入身份证号码" v-model="ruleForm.cardno" name="cardno">
              <i slot="prefix" class="iconfont">&#xe706;</i>
            </el-input>
          </el-form-item>

          <el-form-item>
            <el-button
              type="primary"
              class="login-self"
              @click="submitForm('ruleForm')"
            >查&nbsp;&nbsp;&nbsp;&nbsp;询</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="index-footer-outline-body">
      <div class="index-footer">
        <p>
          <a href="http://www.beian.miit.gov.cn" target="_blank" class="beian">苏ICP备18020368号-2</a>
        </p>
        <p>
          <a
            href="http://www.zhjcx.cn/"
            target="_blank"
            class="our_company"
          >©2018-2019 All Rights Reserved 智聚装配式绿色建筑创新中心南通有限公司 版权所有</a>
        </p>
        <p>
          <span class="our_company_address">地址：南通市开发区通盛大道188号C座6楼</span>
          <span>联系电话： 0513-81055866</span>
          <span>(工作时间：工作日10点--17点)</span>
        </p>
        <p class="index-mobile"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PesronalScoreSearch",
  data() {
    return {
      showCertificateDialog: false,
      currentPage: 1,
      pictueUrl: [],
      ruleForm: {
        name: "",
        cardno: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        cardno: [
          { required: true, message: "请输入身份证号", trigger: "blur" },
          {
            message: "请输入正确的身份证号",
            pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$ajax({
            method: "get",
            url: `${this.baseURL}/zjsxpt/invoice_getCertificateByParams.do?name=${this.ruleForm.name}&cardno=${this.ruleForm.cardno}`
          })
            .then(res => {
              if (res.data.data != false) {
                this.pictueUrl = res.data.data;
                this.showCertificateDialog = true;
              } else {
                this.$message({
                  message: "未查询到此人证书！",
                  type: "error",
                  center: true
                });
              }
            })
            .catch(function(err) {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  mounted() {
    document.getElementById("nameFocus").focus();
  }
};
</script>

<style scoped>
#PesronalScoreSearch {
  width: 100%;
  min-width: 1220px;
  max-width: 1920px;
  background: #ffffff;
  margin: 80px auto 0px auto;
  padding: 20px 0px 0px 0px;
}
.score_search_div {
  width: 1220px;
  margin: 0px auto;
}
.PesronalScoreSearch-info {
  height: 480px;
  padding: 150px 0px 50px 735px;
}
.order-dialog {
  text-align: center;
}
.score-label {
  font-size: 18px;
  line-height: 40px;
  border: 1px solid #e4e7ed;
  background: #e4e7ed;
  padding: 0 15px;
  border-radius: 3px;
  margin: 0px 0px 10px 0px;
  border-left: 2px solid #409eff;
}
.login-self {
  width: 418px;
  font-size: 18px;
  height: 44px;
}
.el-input {
  width: 418px;
}
.certificate {
  margin: 0px auto;
  width: 800px;
  border: 1px solid #e4e7ed;
}
@font-face {
  font-family: "iconfont"; /* project id 1131189 */
  src: url("//at.alicdn.com/t/font_1131189_8wpzxd8vwx7.eot");
  src: url("//at.alicdn.com/t/font_1131189_8wpzxd8vwx7.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1131189_8wpzxd8vwx7.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1131189_8wpzxd8vwx7.woff") format("woff"),
    url("//at.alicdn.com/t/font_1131189_8wpzxd8vwx7.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1131189_8wpzxd8vwx7.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 18px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  line-height: 44px;
  margin: 0px 0px 0px 2px;
}
.count_certificate {
  text-align: left;
  margin: 0px 0px 0px 85px;
  font-size: 16px;
  font-weight: bold;
}
.certificate-page {
  text-align: left;
  margin: 20px 0px 20px 75px;
}
.index-footer-outline-body {
  background: #242e68;
  width: 100%;
  min-width: 1220px;
  max-width: 1920px;
}
.index-footer {
  width: 1220px;
  height: 150px;
  background: #242e68;
  text-align: left;
  padding: 40px 0px 0px 300px;
  margin: 0px auto;
}
.beian:hover,
.our_company:hover {
  color: #fff;
}
.index-footer p,
.index-footer a,
.index-footer span {
  color: #ddd;
  font-size: 13px;
}
.index-footer p {
  margin-bottom: 10px;
}
.our_company_address {
  margin-right: 10px;
}
.left_line {
  position: absolute;
  height: 2px;
  width: 450px;
  border-top: 1px solid #e7e7e7;
  margin: 50px 0px 0px 50px;
}
.right_line {
  position: absolute;
  height: 2px;
  width: 450px;
  border-top: 1px solid #e7e7e7;
  margin: 50px 0px 0px 720px;
}
.split_line {
  position: absolute;
  height: 350px;
  width: 2px;
  border-left: 1px solid #e7e7e7;
  margin: 90px 0px 0px 610px;
}
.certificate_title {
  font-size: 25px;
  position: absolute;
  margin: 30px 0px 0px 561px;
}
.scan_course {
  position: absolute;
  width: 500px;
  height: 130px;
  margin: 100px 0px 0px 50px;
  border-radius: 8px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.4);
}
.scan_base {
  position: absolute;
  width: 500px;
  height: 130px;
  margin: 300px 0px 0px 50px;
  border-radius: 8px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.4);
}
.scan_course:hover,.scan_base:hover {
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.4);
}

.scan_course img, .scan_base img{
  width: 100%;
  height: 100%;
  border-radius: 5px;
  opacity: 0.8;
  object-fit: cover;
}
.scan_course:hover img,.scan_base:hover img{
  opacity: 0.7;
}
.goto_course, .goto_base{
  position: absolute;
  z-index: 9;
  width: 160px;
  height: 44px;
  font-size: 18px;
  line-height: 44px;
  text-align: center;
  color: #fff;
  background-color: #e6804e;
  margin:67px 0px 0px 320px;
}
.goto_course:hover, .goto_base:hover{
 background-color: rgba(230, 128, 78,0.8);
}
</style>
<style>
#certificate_form .el-input__inner {
  height: 44px;
}
</style>