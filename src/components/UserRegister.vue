<template>
  <div class="User-Register">
    <el-dialog
      title="账号注册"
      :visible.sync="regshow"
      width="500px"
      id="regDialog"
      @closed="closeDialog"
    >
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" id="loginForm">
        <el-form-item prop="name">
          <el-input placeholder="请输入用户名" v-model="ruleForm.name" id="nameRegFocus">
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

        <el-form-item prop="password2">
          <el-input :type="inputType2" placeholder="请再次输入密码" v-model="ruleForm.password2">
            <i slot="prefix" class="iconfont">&#xe7c9;</i>
          </el-input>
          <div class="input-icon" @click="changeType2">
            <i class="iconfont" v-if="showNewPassword2">&#xe76c;</i>
            <i class="iconfont" v-if="!showNewPassword2">&#xe604;</i>
          </div>
        </el-form-item>

        <el-form-item prop="phone">
          <el-input placeholder="请输入手机号" v-model="ruleForm.phone">
            <i slot="prefix" class="iconfont">&#xe745;</i>
          </el-input>
        </el-form-item>

        <el-form-item>
          <div class="drag1" ref="dragDiv">
            <div class="drag_bg1"></div>
            <div class="drag_text1">{{confirmWords}}</div>
            <div
              ref="moveDiv"
              @mousedown="mousedownFn($event)"
              :class="{'handler_ok_bg1':confirmSuccess}"
              class="handler1 handler_bg1"
              style="position: absolute;top: 0px;left: 0px;"
            ></div>

            <div class="checkPoint1"></div>
          </div>
        </el-form-item>

        <el-form-item prop="code" id="regVerification">
          <el-input placeholder="请输入短信新密码" id="identifying" v-model="ruleForm.code"></el-input>
          <el-button
            type="primary"
            plain
            class="get-button-con"
            v-if="show"
            @click="getCode('ruleForm')"
          >获取验证码</el-button>
          <el-button
            type="primary"
            plain
            disabled
            class="wait-button-con"
            v-if="!show"
          >{{count}} 秒后重发</el-button>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
            class="regist-self"
          >注&nbsp;&nbsp;&nbsp;&nbsp;册</el-button>
        </el-form-item>
      </el-form>
      <a class="register" href="#" @click="go">
        去登录
        <span class="el-icon-arrow-right"></span>
      </a>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      beginClientX: 0 /*距离屏幕左端距离*/,
      mouseMoveStata: false /*触发拖动状态  判断*/,
      maxwidth: 320 /*拖动最大宽度，依据滑块宽度算出来的*/,
      checkWidth: 0,
      confirmWords: "拖动滑块完成拼图" /*滑块文字*/,
      confirmSuccess: false,
      countFocus: 0,

      showNewPassword: false,
      showNewPassword2: false,
      inputType: "password",
      inputType2: "password",
      iconColor: "",
      show: true,
      count: "",
      regshow: false,
      ruleForm: {
        name: "",
        password: "",
        password2: "",
        phone: "",
        code: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 30 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            pattern: /^(\w){6,12}$/,
            message: "只能输入6-12个字母、数字、下划线",
            trigger: "blur"
          }
        ],
        password2: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
          {
            validator: validatePass,
            trigger: "blur"
          }
        ],
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            message: "请输入正确的手机号",
            pattern: /^1[34578]\d{9}$/,
            trigger: "blur"
          }
        ],
        code: [
          { required: true, message: "请输入短信验证码", trigger: "blur" },
          { min: 6, max: 6, message: "验证码错误", trigger: "blur" }
        ]
      }
    };
  },
  props: ["regDialogVisible"],
  watch: {
    regDialogVisible: function(val) {
      this.regshow = val;
      if (!val) {
        this.confirmSuccess = false;
        if (
          document.getElementsByClassName("handler1")[0] &&
          document.getElementsByClassName("drag_bg1")[0]
        ) {
          document.getElementsByClassName("handler1")[0].style.left = 0 + "px";
          document.getElementsByClassName("drag_bg1")[0].style.width = 0 + "px";
        }

        this.confirmWords = "拖动滑块完成拼图";
        this.mouseMoveStata = false;
        if (document.getElementsByClassName("drag_text1")[0]) {
          document.getElementsByClassName("drag_text1")[0].style.color = "";
        }

        document
          .getElementsByTagName("html")[0]
          .addEventListener("mousemove", this.mouseMoveFn);
        document
          .getElementsByTagName("html")[0]
          .addEventListener("mouseup", this.moseUpFn);
        this.setCheckPoint();
        document.getElementsByClassName("checkPoint1")[0].style.visibility =
          "visible";
      }
    }
  },

  methods: {
    mousedownFn: function(e) {
      if (!this.confirmSuccess) {
        e.preventDefault && e.preventDefault(); //阻止文字选中等 浏览器默认事件
        this.mouseMoveStata = true;
        this.beginClientX = e.clientX;
        document
          .getElementsByTagName("html")[0]
          .addEventListener("mousemove", this.mouseMoveFn);
      }
      document
        .getElementsByTagName("html")[0]
        .addEventListener("mouseup", this.moseUpFn);
    }, //mousedoen 事件
    successFunction() {
      this.confirmSuccess = true;
      this.confirmWords = "验证通过";
      document.getElementsByClassName("checkPoint1")[0].style.visibility =
        "hidden";
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

      document.getElementsByClassName("drag_text1")[0].style.color = "#fff";
      document.getElementsByClassName("handler1")[0].style.left =
        this.maxwidth + "px";
      document.getElementsByClassName("drag_bg1")[0].style.width =
        this.maxwidth + "px";
    }, //验证成功函数
    mouseMoveFn(e) {
      if (this.mouseMoveStata) {
        let width = e.clientX - this.beginClientX;

        if (width > 0 && width <= this.maxwidth) {
          document.getElementsByClassName("handler1")[0].style.left =
            width + "px";
          document.getElementsByClassName("drag_bg1")[0].style.width =
            width + "px";
        }
      }
    }, //mousemove事件
    moseUpFn(e) {
      this.mouseMoveStata = false;
      var width = e.clientX - this.beginClientX;

      if (
        (width < this.checkWidth - 10 || width > this.checkWidth + 10) &&
        document.getElementsByClassName("handler1")[0] &&
        document.getElementsByClassName("drag_bg1")[0]
      ) {
        document.getElementsByClassName("handler1")[0].style.left = 0 + "px";
        document.getElementsByClassName("drag_bg1")[0].style.width = 0 + "px";
      } else if (
        width >= this.checkWidth - 10 &&
        width <= this.checkWidth + 10
      ) {
        this.successFunction();
      }
      document
        .getElementsByTagName("html")[0]
        .removeEventListener("mousemove", this.mouseMoveFn);
      document
        .getElementsByTagName("html")[0]
        .removeEventListener("mouseup", this.moseUpFn);
    },
    changeType() {
      if (this.inputType == "text") {
        this.inputType = "password";
        this.showNewPassword = false;
      } else {
        this.inputType = "text";
        this.showNewPassword = true;
      }
    },
    changeType2() {
      if (this.inputType2 == "text") {
        this.inputType2 = "password";
        this.showNewPassword2 = false;
      } else {
        this.inputType2 = "text";
        this.showNewPassword2 = true;
      }
    },
    getCode(formName) {
      this.$refs[formName].validateField("phone", error => {
        if (!error) {
          if (this.confirmSuccess) {
            this.$ajax({
              method: "get",
              url: `${this.baseURL}/zjsxpt/login_sendMessage.do?phone=${
                this.ruleForm.phone
              }`
            })
              .then(res => {
                const TIME_COUNT = 60;
                if (!this.timer) {
                  this.count = TIME_COUNT;
                  this.show = false;
                  this.timer = setInterval(() => {
                    if (this.count > 0 && this.count <= TIME_COUNT) {
                      this.count--;
                    } else {
                      this.show = true;
                      clearInterval(this.timer);
                      this.timer = null;
                    }
                  }, 1000);
                }
              })
              .catch(function(err) {
                console.log(err);
              });
          } else {
            this.$message({
              message: "请拖动滑块完成拼图！",
              center: true
            });
          }
        } else {
          return false;
        }
      });
    },
    closeDialog: function() {
      this.$emit("regclosed", false);
    },
    go() {
      this.regshow = false;
      this.$emit("goToLog", true);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$ajax({
            method: "get",
            url: `${this.baseURL}/zjsxpt/login_register.do?name=${
              this.ruleForm.name
            }&password=${this.ruleForm.password}&phone=${
              this.ruleForm.phone
            }&code=${this.ruleForm.code}`
          })
            .then(res => {
              var that = this;
              this.$message({
                message: "注册成功！",
                center: true,
                onClose: function() {
                  that.regshow = false;
                  that.go();
                }
              });
            })
            .catch(function(err) {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    setCheckPoint() {
      this.checkWidth = Math.floor(Math.random() * 200 + 50);
    }
  },
  mounted() {
    this.setCheckPoint();
  },
  updated() {
    document.getElementsByClassName("checkPoint1")[0].style.left =
      this.checkWidth + "px";
    this.countFocus++;
    if (this.regshow && this.countFocus < 2) {
      document.getElementById("nameRegFocus").focus();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
  text-decoration: none;
}
.el-form {
  padding: 0px 50px;
}

.forgetpwd {
  color: darkgrey;
  font-size: 12px;
  padding: 0 40px 0 0;
  margin: 0 0 0 25px;
}
.register {
  font-size: 12px;
  margin: 0 0 0 300px;
}
.User-Register {
  white-space: nowrap;
}

.el-radio-group {
  padding: 0px 300px 0px 0px;
}
.User-Register {
  text-align: center;
}
.test-but {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 42px;
  width: 120px;
  height: 36px;
  margin: auto;
  line-height: 36px;
  text-align: center;
}

.input-icon {
  position: absolute;
  font-size: 18px;
  margin: -42px 0px 0px 320px;
  -webkit-user-select:none;
   -moz-user-select:none;
   -ms-user-select:none;
   user-select:none;
}

.el-icon-view {
  font-size: 18px;
}
.input-icon:hover {
  color: #409eff;
  cursor: pointer;
}

.get-button-con {
  height: 44px;
  width: 112px;
}
.wait-button-con {
  height: 44px;
  width: 112px;
}
.regist-self {
  width: 358px;
  font-size: 18px;
  height: 44px;
}
#regDialog {
  text-align: center;
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
.drag1 {
  position: relative;
  background-color: #e8e8e8;
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
}
.handler1 {
  width: 40px;
  height: 44px;
  border: 1px solid #ccc;
  cursor: move;
}
.handler_bg1 {
  background: #fff
    url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDhlNWY5My05NmI0LTRlNWQtOGFjYi03ZTY4OGYyMTU2ZTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTEyNTVEMURGMkVFMTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTEyNTVEMUNGMkVFMTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MTc5NzNmZS02OTQxLTQyOTYtYTIwNi02NDI2YTNkOWU5YmUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGQ4ZTVmOTMtOTZiNC00ZTVkLThhY2ItN2U2ODhmMjE1NmU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YiRG4AAAALFJREFUeNpi/P//PwMlgImBQkA9A+bOnfsIiBOxKcInh+yCaCDuByoswaIOpxwjciACFegBqZ1AvBSIS5OTk/8TkmNEjwWgQiUgtQuIjwAxUF3yX3xyGIEIFLwHpKyAWB+I1xGSwxULIGf9A7mQkBwTlhBXAFLHgPgqEAcTkmNCU6AL9d8WII4HOvk3ITkWJAXWUMlOoGQHmsE45ViQ2KuBuASoYC4Wf+OUYxz6mQkgwAAN9mIrUReCXgAAAABJRU5ErkJggg==")
    no-repeat center;
}
.handler_ok_bg1 {
  background: #fff
    url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDhlNWY5My05NmI0LTRlNWQtOGFjYi03ZTY4OGYyMTU2ZTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDlBRDI3NjVGMkQ2MTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDlBRDI3NjRGMkQ2MTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphNWEzMWNhMC1hYmViLTQxNWEtYTEwZS04Y2U5NzRlN2Q4YTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGQ4ZTVmOTMtOTZiNC00ZTVkLThhY2ItN2U2ODhmMjE1NmU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+k+sHwwAAASZJREFUeNpi/P//PwMyKD8uZw+kUoDYEYgloMIvgHg/EM/ptHx0EFk9I8wAoEZ+IDUPiIMY8IN1QJwENOgj3ACo5gNAbMBAHLgAxA4gQ5igAnNJ0MwAVTsX7IKyY7L2UNuJAf+AmAmJ78AEDTBiwGYg5gbifCSxFCZoaBMCy4A4GOjnH0D6DpK4IxNSVIHAfSDOAeLraJrjgJp/AwPbHMhejiQnwYRmUzNQ4VQgDQqXK0ia/0I17wJiPmQNTNBEAgMlQIWiQA2vgWw7QppBekGxsAjIiEUSBNnsBDWEAY9mEFgMMgBk00E0iZtA7AHEctDQ58MRuA6wlLgGFMoMpIG1QFeGwAIxGZo8GUhIysmwQGSAZgwHaEZhICIzOaBkJkqyM0CAAQDGx279Jf50AAAAAABJRU5ErkJggg==")
    no-repeat center;
}
.drag_bg1 {
  background-color: #7ac23c;
  height: 44px;
  width: 0px;
}
.drag_text1 {
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
.checkPoint1 {
  width: 44px;
  height: 44px;
  background-color: #fff;
  opacity: 0.5;
  position: absolute;
  margin: -44px 0px 0px 0px;
  box-shadow: 0px 0px 5px 0 rgba(0, 0, 0, 0.8) inset;
  border-radius: 5px;
  border: 1px solid #dddddd;
}
</style>
<style>
#regVerification .el-input__inner {
  width: 242px;
  padding: 0px 10px;
}
#regVerification .el-input {
  width: auto;
}
#loginForm > .el-input__inner {
  height: 44px;
}
</style>



