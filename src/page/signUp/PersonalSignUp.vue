<template>
  <div class="PersonalSignUp">
    <el-form :model="ruleForm" ref="ruleForm" :rules="rules" class="demo-ruleForm">
      <div class="form-left">
        <div class="left-title">
          <h1>报名项目</h1>
        </div>
        <el-form-item prop="course1">
          <el-select
            v-model="ruleForm.course1"
            placeholder="请选择课程"
            @change="getCity1(ruleForm.course1),getMealList1(ruleForm.course1),clearAll1()"
          >
            <el-option
              v-for="item in selectCourseData"
              :key="item.courseid"
              :label="item.coursename"
              :value="item.courseid"
            ></el-option>
            <i slot="prefix" class="iconfont">&#xe60a;</i>
          </el-select>
        </el-form-item>

        <el-form-item prop="Address1">
          <el-select placeholder="请先选择课程" :disabled="true" v-if="ruleForm.course1==''" value>
            <i slot="prefix" class="iconfont">&#xe601;</i>
          </el-select>
          <el-col :span="4">
            <el-select
              class="choose_city"
              v-model="city1"
              placeholder="城市"
              v-if="!ruleForm.course1==''"
              @change="getAddressList1(ruleForm.course1)"
            >
              <el-option
                v-for="(index,item) in selectCity1Data1"
                :key="index"
                :label="item[index]"
                :value="index"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :span="12">
            <el-select
              class="choose_city_address"
              placeholder="请先选择城市"
              :disabled="true"
              v-if="!ruleForm.course1==''&&(city1==''||city1==null)"
              value
            ></el-select>
          </el-col>
          <el-col :span="12">
            <el-select
              class="choose_city_address"
              v-model="ruleForm.Address1"
              placeholder="请选择培训地点"
              v-if="!ruleForm.course1==''&&!city1==''"
              @change="getTimeList1(ruleForm.course1)"
            >
              <el-option
                v-for="(index,item) in selectAddressData1"
                :key="index"
                :label="item[index]"
                :value="index"
              ></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <el-form-item prop="time1">
          <el-select placeholder="请先选择课程" :disabled="true" v-if="ruleForm.course1==''" value>
            <i slot="prefix" class="iconfont">&#xe6e0;</i>
          </el-select>
          <el-select
            placeholder="请先选择培训地点"
            :disabled="true"
            v-if="!ruleForm.course1==''&&(ruleForm.Address1==''||ruleForm.Address1==null)"
            value
          >
            <i slot="prefix" class="iconfont">&#xe6e0;</i>
          </el-select>
          <el-select
            v-model="ruleForm.time1"
            placeholder="请选择培训时间"
            v-if="ruleForm.course1!=''&&ruleForm.Address1!=''&&ruleForm.Address1!=null"
             @change="change_traintime1"
          >
            <el-option
              v-for="item in selectTimeData1"
              :key="item.timeid"
              :label="item.traintime"
              :value="item.timeid"
            ></el-option>
            <i slot="prefix" class="iconfont">&#xe6e0;</i>
          </el-select>
          <div
            class="left_num"
            v-if="leftNum1>0&&showLeftNum1"
          >该批次剩余可报名人数：{{leftNum1}}</div>
          <div class="warning_color" v-if="leftNum1<1&&showLeftNum1">报名人数已满</div>
        </el-form-item>

        <el-form-item prop="meal1">
          <el-select placeholder="请先选择课程" :disabled="true" v-if="ruleForm.course1==''" value>
            <i slot="prefix" class="iconfont">&#xe671;</i>
          </el-select>
          <el-select v-model="ruleForm.meal1" placeholder="请选择套餐" v-if="!ruleForm.course1==''">
            <el-option
              v-for="item in selectMealData1"
              :key="item.menuid"
              :label="item.menuname"
              :value="item.menuid"
            ></el-option>
            <i slot="prefix" class="iconfont">&#xe671;</i>
          </el-select>
        </el-form-item>
      </div>

      <div class="form-right">
        <div class="right-title">
          <h1>基本信息</h1>
        </div>
        <el-form-item prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入姓名" class="person-add-input">
            <i slot="prefix" class="iconfont">&#xe614;</i>
          </el-input>
        </el-form-item>

        <el-form-item prop="cardno">
          <el-input v-model="ruleForm.cardno" placeholder="请输入身份证号" class="person-add-input">
            <i slot="prefix" class="iconfont">&#xe7de;</i>
          </el-input>
        </el-form-item>

        <el-form-item prop="education">
          <el-select v-model="ruleForm.education" placeholder="请选择学历" class="person-add-select">
            <el-option label="小学及以下" value="小学及以下"></el-option>
            <el-option label="初中" value="初中"></el-option>
            <el-option label="中专" value="中专"></el-option>
            <el-option label="高中" value="高中"></el-option>
            <el-option label="大专" value="大专"></el-option>
            <el-option label="本科" value="本科"></el-option>
            <el-option label="硕士" value="硕士"></el-option>
            <el-option label="博士及以上" value="博士及以上"></el-option>
            <i slot="prefix" class="iconfont">&#xe8c8;</i>
          </el-select>
        </el-form-item>

        <el-form-item prop="phone">
          <el-input v-model="ruleForm.phone" placeholder="请输入手机号码" class="person-add-input">
            <i slot="prefix" class="iconfont">&#xe745;</i>
          </el-input>
        </el-form-item>
      </div>

      <el-form-item>
        <div class="nextPage1">
          <el-button type="primary" @click="submitForm('ruleForm')">下一步</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      signUpPage: 1,
      accountsPage: 0,
      warningColor1: false,
       leftNum1: 0,
      showLeftNum1: false,
      selectCourseData: [{}],
      selectAddressData1: [{}],
      selectTimeData1: [{}],
      selectMealData1: [{}],
      selectCity1Data1: [],
      city1: "",
      ruleForm: {
        course1: "",
        Address1: "",
        time1: "",
        meal1: "",
        name: "",
        cardno: "",
        education: "",
        phone: ""
      },
      rules: {
        course1: [{ required: true, message: "请选择课程", trigger: "blur" }],
        Address1: [
          { required: true, message: "请选择培训地点", trigger: "blur" }
        ],
        time1: [{ required: true, message: "请选择培训时间", trigger: "blur" }],
        meal1: [{ required: true, message: "请选择套餐", trigger: "blur" }],
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5个字符", trigger: "blur" }
        ],
        education: [{ required: true, message: "请选择学历", trigger: "blur" }],
        cardno: [
          { required: true, message: "请输入身份证号", trigger: "blur" },
          {
            message: "请输入正确的身份证号",
            pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
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
        ]
      }
    };
  },
  methods: {
    change_traintime1(val) {
      this.warningColor1 = false;
      this.choose_traintime1 = val;
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/course_getRemainderByTime.do?timeid=${val}`
      })
        .then(res => {
          this.leftNum1 = res.data.data;
          this.showLeftNum1 = true;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    submitForm(formName) {
      if(this.leftNum1<1) {
        this.$message({
          message: "您的报名信息不完整！",
          type: "error",
          center: true
        });
      } else {
        this.$refs[formName].validate(valid => {
        if (valid) {
          this.signUpPage = 0;
          this.accountsPage = 1;
          this.active = 1;
          this.$emit("ToAccountsPage", {
            signUpPage: this.firstPage,
            accountsPage: this.accountsPage,
            active: this.active
          });
          this.bus.$emit("todata", {
            city1: this.city1,
            course1: this.ruleForm.course1,
            Address1: this.ruleForm.Address1,
            time1: this.ruleForm.time1,
            meal1: this.ruleForm.meal1,
            name: this.ruleForm.name,
            cardno: this.ruleForm.cardno,
            education: this.ruleForm.education,
            phone: this.ruleForm.phone
          });
        } else {
          console.log("error submit!!");
        }
      });
      }
      
    },
    getCourseList() {
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/course_getCourseList.do`
      })
        .then(res => {
          this.selectCourseData = res.data.data;
          console.log(this.selectCourseData);
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getAddressList1(course) {
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_getTrainAddressList.do?courseid=${course}&city=${
          this.city1
        }`
      })
        .then(res => {
          this.selectAddressData1 = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getTimeList1(course) {
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_getTimeList.do?courseid=${course}&city=${
          this.city1
        }&address=${this.ruleForm.Address1}`
      })
        .then(res => {
          this.selectTimeData1 = res.data.data;
          console.log(this.selectTimeData1);
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getMealList1(course) {
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_getSetMenuList.do?courseid=${course}`
      })
        .then(res => {
          this.selectMealData1 = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getCity1(course) {
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/course_getCityList.do?courseid=${course}`
      })
        .then(res => {
          this.selectCity1Data1 = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    clearAll1() {
      this.city1 = null;
      this.ruleForm.time1 = null;
      this.ruleForm.Address1 = null;
      this.ruleForm.meal1 = null;
    }
  },
  mounted() {
    this.getCourseList();
  }
};
</script>
<style scoped>
.el-input {
  width: 300px;
}
.el-select {
  width: 300px;
}
.nextPage1 {
  margin: 20px auto 0px auto;
  width: 98px;
}
.form-left {
  margin: 30px 0px 0px 150px;
}
.form-right {
  position: absolute;
  margin: -283.3px 0px 0px 520px;
}
.right-title,
.left-title {
  border-left: 2px solid #409eff;
  margin: 0px 0px 15px 0px;
  padding: 0px 0px 0px 5px;
}
h1 {
  font-size: 16px;
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
  line-height: 40px;
  margin: 0px 0px 0px 2px;
}
.demo-ruleForm .choose_city {
  width: 120px;
}
.demo-ruleForm .choose_city_address {
  width: 164px;
}
.left_num {
  position: absolute;
  margin: -10px 0px 0px 0px;
  font-size: 12px;
  color: #67c23a;
}
.warning_color {
  position: absolute;
  margin: -10px 0px 0px 0px;
  font-size: 12px;
  color: #f56c6c;
  font-weight: bold;
  animation: warnNum 0.5s;
  -moz-animation: warnNum 0.5s; /* Firefox */
  -webkit-animation: warnNum 0.5s; /* Safari and Chrome */
  -o-animation: warnNum 0.5s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes warnNum {
  0% {
    margin-left: 0px;
  }
  25% {
    margin-left: 10px;
  }
  50% {
    margin-left: -10px;
  }
  75% {
    margin-left: 10px;
  }
  100% {
    margin-left: 0px;
  }
}

@-moz-keyframes warnNum /* Firefox */ {
  0% {
    margin-left: 0px;
  }
  25% {
    margin-left: 10px;
  }
  50% {
    margin-left: -10px;
  }
  75% {
    margin-left: 10px;
  }
  100% {
    margin-left: 0px;
  }
}
@-webkit-keyframes warnNum /* Safari and Chrome */ {
  0% {
    margin-left: 0px;
  }
  25% {
    margin-left: 10px;
  }
  50% {
    margin-left: -10px;
  }
  75% {
    margin-left: 10px;
  }
  100% {
    margin-left: 0px;
  }
}
@-o-keyframes warnNum /* Opera */ {
  0% {
    margin-left: 0px;
  }
  25% {
    margin-left: 10px;
  }
  50% {
    margin-left: -10px;
  }
  75% {
    margin-left: 10px;
  }
  100% {
    margin-left: 0px;
  }
}
</style>