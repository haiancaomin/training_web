<template>
  <div id="PersonalCenter">
    <el-col :span="24">
      <h1 class="personal-center-label">个人中心</h1>
    </el-col>

    <el-row class="tac">
      <el-col :span="5">
        <el-menu
          default-active="11"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          

          <el-menu-item @click="activeScore" index="11">
            <i class="el-icon-search"></i>
            <span slot="title">成绩查询</span>
          </el-menu-item>
          <el-menu-item @click="activeExpress" index="22">
            <i class="el-icon-document"></i>
            <span slot="title">历史单号查询</span>
          </el-menu-item>
          <el-menu-item @click="activeInvoice" index="33">
            <i class="el-icon-tickets"></i>
            <span slot="title">索要发票</span>
          </el-menu-item>
          <el-menu-item @click="activePassword" index="444">
            <i class="el-icon-setting"></i>
            <span slot="title">修改密码</span>
          </el-menu-item>
        </el-menu>
      </el-col>

      <el-col :span="1">&nbsp;</el-col>

      <el-col :span="18">

        <!-- page2 成绩查询 -->
        <div class="personal-score" v-show="personalScore == 1">
          <el-col :span="24">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>个人中心</el-breadcrumb-item>
            <el-breadcrumb-item>信息查询</el-breadcrumb-item>
            <el-breadcrumb-item>成绩查询</el-breadcrumb-item>
          </el-breadcrumb>
          </el-col>

          <PesronalScoreSearch></PesronalScoreSearch>
          
          
        </div>

        <!-- page3 历史单号查询 -->
        <div class="personal-express" v-if="personalExpress==1">
          <el-col :span="24">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>个人中心</el-breadcrumb-item>
            <el-breadcrumb-item>信息查询</el-breadcrumb-item>
            <el-breadcrumb-item>历史单号查询</el-breadcrumb-item>
          </el-breadcrumb>
          </el-col>
          <PersonalExpressSearch></PersonalExpressSearch>
        </div>

        <!-- page4 索要发票 -->
        <div class="personal-invoice" v-if="personalInvoice==1">
          <el-col :span="24">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>个人中心</el-breadcrumb-item>
            <el-breadcrumb-item>索要发票</el-breadcrumb-item>
          </el-breadcrumb>
          </el-col>
          <PersonalInvoice></PersonalInvoice>

        </div>

        <!-- page5 修改密码 -->
        <div class="personal-password" v-if="personalPassword==1">
          <el-col :span="24">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>个人中心</el-breadcrumb-item>
            <el-breadcrumb-item>修改密码</el-breadcrumb-item>
          </el-breadcrumb>
          </el-col>
          <PersonalPassword></PersonalPassword>
        </div>
      </el-col>
    </el-row>
    <el-badge :value="12" class="item">
      <router-link to="/PersonalMail">
      <el-button size="small">
        <i class="el-icon-bell"></i>
      </el-button>
      </router-link>
    </el-badge>
  </div>
</template>

<script>
import PesronalScoreSearch from '@/page/personalCenter/PesronalScoreSearch';
import PersonalExpressSearch from '@/page/personalCenter/PersonalExpressSearch';
import PersonalInvoice from '@/page/personalCenter/PersonalInvoice';
import PersonalPassword from '@/page/personalCenter/PersonalPassword'
export default {
  
  name: "PersonalCenter",
  data() {
    return {
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
     
      personalScore: 1,
      personalExpress: 0,
      personalInvoice: 0,
      personalPassword: 0
    };
  },
  components: {
    PesronalScoreSearch,
    PersonalExpressSearch,
    PersonalInvoice,
    PersonalPassword
  },
  methods: {
    activeScore() {
      (this.personalIndex = 0),
        (this.personalScore = 1),
        (this.personalExpress = 0),
        (this.personalInvoice = 0),
        (this.personalPassword = 0);
    },
    activeExpress() {
      (this.personalIndex = 0),
        (this.personalScore = 0),
        (this.personalExpress = 1),
        (this.personalInvoice = 0),
        (this.personalPassword = 0);
    },
    activeInvoice() {
      (this.personalIndex = 0),
        (this.personalScore = 0),
        (this.personalExpress = 0),
        (this.personalInvoice = 1),
        (this.personalPassword = 0);
    },
    activePassword() {
      (this.personalIndex = 0),
        (this.personalScore = 0),
        (this.personalExpress = 0),
        (this.personalInvoice = 0),
        (this.personalPassword = 1);
    }
  }
};
</script>

<style scoped>
#PersonalCenter {
  width: 1000px;
  margin: 80px auto;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fffffd;
  border: 1px solid #e7e7e7;
  padding: 20px 20px 20px 20px;
}

.personal-index {
  height: 590px;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fffffd;
  border: 1px solid #e7e7e7;
  padding: 20px 20px 0px 20px;
}
.personal-score {
  height: 590px;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fffffd;
  border: 1px solid #e7e7e7;
  padding: 20px 20px 0px 20px;
}
.personal-express {
  height: 590px;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fffffd;
  border: 1px solid #e7e7e7;
  padding: 20px 20px 0px 20px;
}
.personal-invoice {
  height: 590px;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fffffd;
  border: 1px solid #e7e7e7;
  padding: 20px 20px 0px 20px;
}
.personal-password {
  height: 590px;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fffffd;
  border: 1px solid #e7e7e7;
  padding: 20px 20px 0px 20px;
}
.el-button {
  font-size: 28px;
  padding: 5px;
  margin: 0px 0px 10px 897px;
}
.personal-center-label {
  font-size: 18px;
  line-height: 40px;
  border: 1px solid #e4e7ed;
  background: #e4e7ed;
  padding: 0 15px;
  border-radius: 3px;
  margin: 0px 0px 10px 0px;
}
.el-badge {
  float: left;
  margin: -641px 0px 0px 20px;
}
</style>


