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
        <div class="certificate" >
          
          <iframe align="middle" frameborder="0" height="800" scrolling="no" 
     width="800" :src="pictueUrl[currentPage-1]" >
    </iframe>
        </div>
      </el-dialog>
    </div>

    <div class="crumb">
      <h1 class="score-label">证书查询</h1>
    </div>
    <div class="PesronalScoreSearch-info">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
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
</template>

<script>
export default {
  name: "PesronalScoreSearch",
  data() {
    return {
      showCertificateDialog: false,
      countFocus: 0,
      currentPage: 1,
      pictueUrl:[],
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
            url: `${
              this.baseURL
            }/zjsxpt/invoice_getCertificateByParams.do?name=${
              this.ruleForm.name
            }&cardno=${this.ruleForm.cardno}`
          })
            .then(res => {
              if (res.data.data != false) {
    
                this.pictueUrl = res.data.data;
                this.showCertificateDialog = true;
              } else {
                this.$message({
                  message: "未查询到此人证书！",
                  type: 'error',
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
  width: 1000px;

  box-shadow: 0 0 2px #c7c5c5;
  background: #fffffd;
  border: 1px solid #e7e7e7;
  margin: 80px auto;
  padding: 20px;
}
.PesronalScoreSearch-info {
  padding: 40px 0px 50px 300px;
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
  border: 1px solid #c5cddb;
  width: 358px;
  border-radius: 2px;
  height: 44px;
  line-height: 44px;
  background: #fff;
  font-size: 14px;
  padding: 0px 10px 0px 40px;
}
.input-input:hover {
  border: 1px solid #409eff;
}
.input-input:focus {
  border: 1px solid #409eff;
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
.el-input {
  width: 358px;
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
  margin:0px 0px 0px 85px;
  font-size:16px;
  font-weight:bold;
}
.certificate-page {
  text-align: left;
  margin:20px 0px 20px 75px;
}
</style>


