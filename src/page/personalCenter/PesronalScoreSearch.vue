<template>
  <div id="PesronalScoreSearch">
    <div class="order-dialog">
      <el-dialog  :visible.sync="showCertificateDialog" title="证书展示" width="1000px">
        <div class="certificate">
        </div>
        
      </el-dialog>
    </div>

    <div class="crumb">
      <h1 class="score-label">证书查询</h1>
    </div>
    <div class="PesronalScoreSearch-info">
      <el-form ref="form" :model="form">
        <el-form-item  prop="name">
          <div class="input-body">
            <div class="input-icon1">
              <i class="iconfont">&#xe614;</i>
            </div>
              <input :type="inputType" placeholder="请输入姓名" class="input-input" maxlength="12">
              
            </div>
        </el-form-item>

        <el-form-item  prop="name">
          <div class="input-body">
            <div class="input-icon1">
              <i class="iconfont">&#xe706;</i>
            </div>
              <input :type="inputType" placeholder="请输入身份证号码" class="input-input" maxlength="12">
              
            </div>
        </el-form-item>

        <el-form-item>
          <el-button type="primary"  class="login-self" @click="showCertificate">查&nbsp;&nbsp;&nbsp;&nbsp;询</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "PesronalScoreSearch",
  data() {
    return {
      showCertificateDialog:false,
      tableData: [
        {
          name: "老王",
          id: "320999888877656765",
          subject: "灌浆工",
          testDate: "2019-03-05",
          score: "99",
          passFlag: "是"
        },
        {
          name: "老王",
          id: "320999888877656765",
          subject: "灌浆工",
          testDate: "2019-03-05",
          score: "99",
          passFlag: "是"
        },
        {
          name: "老王",
          id: "320999888877656765",
          subject: "灌浆工",
          testDate: "2019-03-05",
          score: "99",
          passFlag: "是"
        },
        {
          name: "老王",
          id: "320999888877656765",
          subject: "灌浆工",
          testDate: "2019-03-05",
          score: "99",
          passFlag: "是"
        },
        {
          name: "老王",
          id: "320999888877656765",
          subject: "灌浆工",
          testDate: "2019-03-05",
          score: "99",
          passFlag: "是"
        },
        {
          name: "老王",
          id: "320999888877656765",
          subject: "灌浆工",
          testDate: "2019-03-05",
          score: "99",
          passFlag: "是"
        },
        {
          name: "老王",
          id: "320999888877656765",
          subject: "灌浆工",
          testDate: "2019-03-05",
          score: "99",
          passFlag: "是"
        },
        {
          name: "老王",
          id: "320999888877656765",
          subject: "灌浆工",
          testDate: "2019-03-05",
          score: "99",
          passFlag: "是"
        },
        {
          name: "老王",
          id: "320999888877656765",
          subject: "灌浆工",
          testDate: "2019-03-05",
          score: "99",
          passFlag: "是"
        },
        {
          name: "老王",
          id: "320999888877656765",
          subject: "灌浆工",
          testDate: "2019-03-05",
          score: "99",
          passFlag: "是"
        },
        {
          name: "老王",
          id: "320999888877656765",
          subject: "灌浆工",
          testDate: "2019-03-05",
          score: "99",
          passFlag: "是"
        },
        {
          name: "老王",
          id: "320999888877656765",
          subject: "灌浆工",
          testDate: "2019-03-05",
          score: "99",
          passFlag: "是"
        }
      ],

      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    showCertificate() {
          this.showCertificateDialog = true;
      }
  }
};
</script>

<style scoped>
#PesronalScoreSearch {
  width: 1000px;
  
  box-shadow: 0 0 2px #c7c5c5;
  background: #fffffd;
  border: 1px solid #e7e7e7;
  margin: 80px auto;
  padding: 20px;
}
.PesronalScoreSearch-info {
  padding: 40px 0px 50px 300px
}
.PesronalScoreSearch-search {
  margin: 0px 0px 0px 60px;
}

.el-table th > .cell {
  text-align: center;
}


.order-dialog {
  text-align: center;
}
.pull-out {
  margin: 20px 0px 0px 0px;
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
.input-input {
  border:1px solid #c5cddb;
  width: 358px;
border-radius: 2px;
height: 44px;
line-height: 44px;
background: #fff;
    font-size:14px;
    padding:0px 10px 0px 40px;
}
.input-input:hover {
  border:1px solid #409EFF;
}
.input-input:focus {
  border:1px solid #409EFF;
}
.input-icon1 {
  position: absolute;
  font-size: 16px;
  margin: 2px 0px 0px 14px;
}
.login-self {
  width: 358px;
font-size: 18px;
height: 44px;
}
.certificate {
    margin:0px auto;
    height:1000px;
    width:800px;
    border: 1px solid #e4e7ed;
}
@font-face {
  font-family: 'iconfont';  /* project id 1131189 */
  src: url('//at.alicdn.com/t/font_1131189_8wpzxd8vwx7.eot');
  src: url('//at.alicdn.com/t/font_1131189_8wpzxd8vwx7.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1131189_8wpzxd8vwx7.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1131189_8wpzxd8vwx7.woff') format('woff'),
  url('//at.alicdn.com/t/font_1131189_8wpzxd8vwx7.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1131189_8wpzxd8vwx7.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:18px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;}
</style>


