<template>
  <div class="success">
    <div class="SignUpPageWait">
      <div class="suc">
        <p class="sign-up-suc-notice2">支付成功！</p>
        <p class="success-context">
          如需开具发票，请前往
          <router-link to="/PersonalCenter/PersonalCenterInvoiceShow">
            <a href="javascript:;" class="to-center2">客户中心</a>
          </router-link>-
          <router-link to="/PersonalCenter/PersonalCenterInvoiceShow">
            <a href="javascript:;" class="to-center2">发票列表</a>
          </router-link>填写发票信息
        </p>
      </div>
      <div class="success-other">
        <router-link to="/PersonalCenter/PersonalCenterUncompletedOrder">
          <el-button type="primary" @click="onliePayment">我的订单</el-button>
        </router-link>
      </div>
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
.success {
  width: 1000px;
  height: 560px;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fff;
  border: 1px solid #e7e7e7;
  margin: 80px auto 0 auto;
}
.sign-up-suc-notice2 {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 40px;
  font-weight: bold;
  color: #67c23a;
  margin-top: 150px;
}

.success-context {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 16px;
  margin-top: 20px;
}

.success-other {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 14px;
  margin-top: 100px;
}
.to-center2 {
  color: #409eff;
}
</style>