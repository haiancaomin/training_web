<template>
  <div class="SignUpSuccess">
    <div class="suc">
      <p class="sign-up-suc-notice">报名成功！</p>
      <p class="success-context">我们会在确认具体开课时间后联系您，请保持电话或邮箱畅通</p>
      <p class="success-context">
        您可以前往
        <router-link to="/personalCenter/PersonalCenterAllOrder">
          <a href="javascript:;" class="to-center">客户中心</a>
        </router-link>-
        <router-link to="/personalCenter/PersonalCenterAllOrder">
          <a href="javascript:;" class="to-center">我的订单</a>
        </router-link>开具发票
      </p>
    </div>
    <div class="success-other">
      <router-link to="/index">
        <el-button type="success" @click="onliePayment">返回首页</el-button>
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
  color: #42b983;
  margin: 150px 0px 0px 0px;
}
.success-context {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 14px;
  margin: 20px 0px 0px 0px;
}
.success-other {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 14px;
  margin: 100px 0px 0px 0px;
}
.to-center {
  color: #67c23a;
}
</style>