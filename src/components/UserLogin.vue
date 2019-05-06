<template>
  <div class="User-Login">
    <el-dialog title="账号登录" :visible.sync="logshow" width="500px" @closed="closeDialog">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" id="loginForm">
        <el-form-item prop="name">
          <el-input placeholder="请输入用户名" v-model="ruleForm.name">
            <i slot="prefix" class="iconfont">&#xe614;</i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input :type="inputType" placeholder="请输入密码" v-model="ruleForm.password">
            <i slot="prefix" class="iconfont">&#xe7c9;</i>
          </el-input>
          <div class="input-icon" @click="changeType">
            <i class="iconfont" v-if="showNewPassword">&#xe76c;</i>
            <i class="iconfont" v-if="!showNewPassword">&#xe604;</i>
          </div>
        </el-form-item>

        <el-form-item prop="inputVerificationCode" v-if="errorCount>2">

          <div class="drag" ref="dragDiv">
            <div class="drag_bg"></div>
            <div class="drag_text">{{confirmWords}}</div>
            <div
              ref="moveDiv"
              @mousedown="mousedownFn($event)"
              :class="{'handler_ok_bg':confirmSuccess}"
              class="handler handler_bg"
              style="position: absolute;top: 0px;left: 0px;"
            ></div>
          </div>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
            class="login-self"
          >登&nbsp;&nbsp;&nbsp;&nbsp;录</el-button>
        </el-form-item>
      </el-form>
      <a class="forgetpwd" href="#">忘记密码？</a>
      <a class="register" href="javascript:;" @click="clickRegister">
        去注册
        <span class="el-icon-arrow-right"></span>
      </a>
    </el-dialog>
  </div>
</template>

<script>
import UserRegister from "@/components/UserRegister";
export default {
  data() {
    return {
      beginClientX: 0 /*距离屏幕左端距离*/,
      mouseMoveStata: false /*触发拖动状态  判断*/,
      maxwidth: 220 /*拖动最大宽度，依据滑块宽度算出来的*/,
      confirmWords: "拖动滑块验证" /*滑块文字*/,
      confirmSuccess: false,

      showNewPassword: false,
      inputType: "password",
      logshow: false,
      errorCount: 0,
      ruleForm: {
        name: "",
        password: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "长度在 6 到 12 个字符", trigger: "blur" }
        ]
      }
    };
  },
  watch: {
    dialogVisible: function(val) {
      this.logshow = val;
      if (!val) {
        this.confirmSuccess = false;
        if (
          document.getElementsByClassName("handler")[0] &&
          document.getElementsByClassName("drag_bg")[0]
        ) {
          document.getElementsByClassName("handler")[0].style.left = 0 + "px";
          document.getElementsByClassName("drag_bg")[0].style.width = 0 + "px";
        }

        this.confirmWords = "拖动滑块验证";
        this.mouseMoveStata = false;
        if (document.getElementsByClassName("drag_text")[0]) {
          document.getElementsByClassName("drag_text")[0].style.color = "";
        }

        document
          .getElementsByTagName("html")[0]
          .addEventListener("mousemove", this.mouseMoveFn);
        document
          .getElementsByTagName("html")[0]
          .addEventListener("mouseup", this.moseUpFn);
      }
    }
  },
  methods: {
    mousedownFn: function(e) {
      
      if (!this.confirmSuccess) {
        e.preventDefault && e.preventDefault(); //阻止文字选中等 浏览器默认事件
        this.mouseMoveStata = true;
        this.beginClientX = e.clientX;
      }
    }, //mousedoen 事件
    successFunction() {
      if(this.errorCount >2) {
this.confirmSuccess = true;
      this.confirmWords = "验证通过";
      if (window.addEventListener) {
        document
          .getElementsByTagName("html")[0]
          .removeEventListener("mousemove", this.mouseMoveFn);
        document
          .getElementsByTagName("html")[0]
          .removeEventListener("mouseup", this.moseUpFn);
      } else {
        document
          .getElementsByTagName("html")[0]
          .removeEventListener("mouseup", () => {});
      }

      document.getElementsByClassName("drag_text")[0].style.color = "#fff";
      document.getElementsByClassName("handler")[0].style.left =
        this.maxwidth + "px";
      document.getElementsByClassName("drag_bg")[0].style.width =
        this.maxwidth + "px";
      }
      
    }, //验证成功函数
    mouseMoveFn(e) {
      if(this.errorCount >2) {
if (this.mouseMoveStata) {
        let width = e.clientX - this.beginClientX;
        console.log(width);
        // if (width > 0 && width <= this.maxwidth) {
        //   document.getElementsByClassName("handler")[0].style.left =
        //     width + "px";
        //   document.getElementsByClassName("drag_bg")[0].style.width =
        //     width + "px";
        // } else if (width > this.maxwidth) {
        //   this.successFunction();
        // }
        if (width > 0 && width <= this.maxwidth+100) {
          document.getElementsByClassName("handler")[0].style.left =
            width + "px";
          document.getElementsByClassName("drag_bg")[0].style.width =
            width + "px";
        }
      }
      }
      
    }, //mousemove事件
    moseUpFn(e) {
      if(this.errorCount >2) {
this.mouseMoveStata = false;
      
      var width = e.clientX - this.beginClientX;
     
      if (
        (width < this.maxwidth-10 || width > this.maxwidth+10) &&
        document.getElementsByClassName("handler")[0] &&
        document.getElementsByClassName("drag_bg")[0]
      ) {
        document.getElementsByClassName("handler")[0].style.left = 0 + "px";
        document.getElementsByClassName("drag_bg")[0].style.width = 0 + "px";
      } else if (width > this.maxwidth-10 && width < this.maxwidth+10){
        this.successFunction();
      }
      }
      
      
    },

    changeType() {
      if (this.inputType == "text") {
        this.inputType = "password";
        this.showNewPassword = false;
        console.log(this.inputType);
      } else {
        this.inputType = "text";
        this.showNewPassword = true;
        console.log(this.inputType);
      }
    },
    closeDialog: function() {
      this.$emit("closed", false);
    },
    clickRegister: function() {
      this.logshow = false;
      this.$emit("goToReg", true);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (
            this.errorCount < 3 ||
            (this.errorCount > 2 && this.confirmSuccess)
          ) {
            
          this.$ajax({
            method: "get",
            url: `${this.baseURL}/zjsxpt/login_Login.do?name=${
              this.ruleForm.name
            }&password=${this.ruleForm.password}`
          })
            .then(res => {
              if(res.data.data != false) {
                this.$message({
                message: "登录成功！",
                center: true
              });
              sessionStorage.setItem("user", JSON.stringify(res.data.data));
              this.logshow = false;
              this.$emit("logSuccess", {
                showUser: true,
                user: res.data.data.name
              });
              this.$router.push({
                path: sessionStorage.getItem('redirect')
              });
              } else {
                this.$message({
                message: "用户名不存在或密码错误！",
                center: true
              });
              }             
            })
              .catch(function(err) {
                console.log(err);
              });
          } else {
            this.$message({
              message: "请将滑动条拖至最右侧！",
              center: true
            });
          }
        } else {
          console.log("error submit!!");
          this.errorCount++;
          return false;
        }
      });
    }
  },
  mounted() {
    document
      .getElementsByTagName("html")[0]
      .addEventListener("mousemove", this.mouseMoveFn);
    document
      .getElementsByTagName("html")[0]
      .addEventListener("mouseup", this.moseUpFn);
  },
  components: {
    UserRegister
  },
  props: ["dialogVisible"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
  text-decoration: none;
}

.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}

.bg-purple-light {
  background: #e5e9f2;
  padding: 20px 0px 20px 0px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.forgetpwd {
  color: darkgrey;
  font-size: 12px;

  margin: 0px 90px 0px 0px;
}
.register {
  font-size: 12px;
  margin: 0 0 0 120px;
}
.User-Login {
  text-align: center;
}

.login-self {
  width: 358px;
  font-size: 18px;
  height: 44px;
}
.input-icon {
  position: absolute;
  font-size: 18px;
  margin: -42px 0px 0px 320px;
}

.el-icon-view {
  font-size: 18px;
}
.input-icon:hover {
  color: #409eff;
  cursor: pointer;
}

.el-form {
  padding: 0px 50px;
}
@font-face {
  font-family: "iconfont"; /* project id 1131189 */
  src: url("//at.alicdn.com/t/font_1131189_b13898ksm7.eot");
  src: url("//at.alicdn.com/t/font_1131189_b13898ksm7.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1131189_b13898ksm7.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1131189_b13898ksm7.woff") format("woff"),
    url("//at.alicdn.com/t/font_1131189_b13898ksm7.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1131189_b13898ksm7.svg#iconfont") format("svg");
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
.verificationCode {
  width: 110px;
  height: 44px;
  background: url(../assets/yzm.png) no-repeat;
  cursor: pointer;
  background-size: cover;
  position: absolute;
  margin: -44px 0px 0px 248px;
  border-radius: 4px;
}
.verificationCode > p {
  line-height: 44px;
  font-size: 28px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.identifying {
  width: 230px;
  margin: 0px 0px 0px -129px;
}
.drag {
  position: relative;
  background-color: #e8e8e8;
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
}
.handler {
  width: 40px;
  height: 44px;
  border: 1px solid #ccc;
  cursor: move;
}
.handler_bg {
  background: #fff
    url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDhlNWY5My05NmI0LTRlNWQtOGFjYi03ZTY4OGYyMTU2ZTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTEyNTVEMURGMkVFMTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTEyNTVEMUNGMkVFMTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MTc5NzNmZS02OTQxLTQyOTYtYTIwNi02NDI2YTNkOWU5YmUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGQ4ZTVmOTMtOTZiNC00ZTVkLThhY2ItN2U2ODhmMjE1NmU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YiRG4AAAALFJREFUeNpi/P//PwMlgImBQkA9A+bOnfsIiBOxKcInh+yCaCDuByoswaIOpxwjciACFegBqZ1AvBSIS5OTk/8TkmNEjwWgQiUgtQuIjwAxUF3yX3xyGIEIFLwHpKyAWB+I1xGSwxULIGf9A7mQkBwTlhBXAFLHgPgqEAcTkmNCU6AL9d8WII4HOvk3ITkWJAXWUMlOoGQHmsE45ViQ2KuBuASoYC4Wf+OUYxz6mQkgwAAN9mIrUReCXgAAAABJRU5ErkJggg==")
    no-repeat center;
}
.handler_ok_bg {
  background: #fff
    url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDhlNWY5My05NmI0LTRlNWQtOGFjYi03ZTY4OGYyMTU2ZTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDlBRDI3NjVGMkQ2MTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDlBRDI3NjRGMkQ2MTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphNWEzMWNhMC1hYmViLTQxNWEtYTEwZS04Y2U5NzRlN2Q4YTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGQ4ZTVmOTMtOTZiNC00ZTVkLThhY2ItN2U2ODhmMjE1NmU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+k+sHwwAAASZJREFUeNpi/P//PwMyKD8uZw+kUoDYEYgloMIvgHg/EM/ptHx0EFk9I8wAoEZ+IDUPiIMY8IN1QJwENOgj3ACo5gNAbMBAHLgAxA4gQ5igAnNJ0MwAVTsX7IKyY7L2UNuJAf+AmAmJ78AEDTBiwGYg5gbifCSxFCZoaBMCy4A4GOjnH0D6DpK4IxNSVIHAfSDOAeLraJrjgJp/AwPbHMhejiQnwYRmUzNQ4VQgDQqXK0ia/0I17wJiPmQNTNBEAgMlQIWiQA2vgWw7QppBekGxsAjIiEUSBNnsBDWEAY9mEFgMMgBk00E0iZtA7AHEctDQ58MRuA6wlLgGFMoMpIG1QFeGwAIxGZo8GUhIysmwQGSAZgwHaEZhICIzOaBkJkqyM0CAAQDGx279Jf50AAAAAABJRU5ErkJggg==")
    no-repeat center;
}
.drag_bg {
  background-color: #7ac23c;
  height: 44px;
  width: 0px;
}
.drag_text {
  position: absolute;
  top: 0px;
  width: 100%;
  text-align: center;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  -o-user-select: none;
  -ms-user-select: none;
}
</style>
<style>
#loginForm .el-input__inner {
  height: 44px;
}
</style>


