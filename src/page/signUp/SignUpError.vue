<template>
  <div class="SignUpError">
    <div class="top_head"></div>
    <div class="step_div">
    <el-steps :active=3 finish-status="success" simple>
        <el-step title="报名信息"></el-step>
        <el-step title="订单确认"></el-step>
        <el-step title="费用"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>
    </div>
    <div class="suc">
      <p class="sign-up-suc-notice">支付失败啦！</p>
      <p class="success-context">您在支付过程中遇到了一些问题，请前往
        <router-link to="/personalCenter/PersonalCenterAllOrder">
          <a href="javascript:;" class="to-center">客户中心</a>
        </router-link> -
        <router-link to="/personalCenter/PersonalCenterAllOrder">
          <a href="javascript:;" class="to-center">我的订单</a>
        </router-link> 重新支付，如有问题请联系我们 0513-81055866！
      </p>
    </div>
    <div class="success-other">
      <router-link to="/index">
        <el-button type="danger" @click="onliePayment">返回首页</el-button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped>
.sign-up-suc-notice {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 40px;
  font-weight: bold;
  color: #F56C6C;
  margin: 80px 0px 0px 0px;
}
.success-context {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 14px;
  margin: 40px 0px 0px 0px;
}
.success-other {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 14px;
  margin: 100px 0px 0px 0px;
}
.to-center {
  color: #F56C6C;
}

.el-steps {
  box-shadow: 0 0 2px #c7c5c5;
  background: #fff;
  border: 1px solid #e7e7e7;
}
.top_head {
  height:10px;
  margin:80px 0px 0px 0px;
}
</style>