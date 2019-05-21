<template>
  <div class="SignUpPageWait">
    <div class="suc">
        <p class="sign-up-suc-notice2">下单成功！</p>

        <p class="success-context">
          请尽快前往
          <router-link to="/PersonalCenter/PersonalCenterAllOrder">
            <a href="javascript:;" class="to-center2">客户中心</a>
          </router-link>-
          <router-link to="/PersonalCenter/PersonalCenterAllOrder">
            <a href="javascript:;" class="to-center2">我的订单</a>
          </router-link>支付
        </p>
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
</template>
<script>
export default {
  data() {
    return {
     
    };
  },
  methods: {
  },
  mounted() { 
  }
};
</script>
<style scoped>


.sign-up-suc-notice2 {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 40px;
  font-weight: bold;
  color: #409eff;
  margin: 150px 0px 0px 0px;
}

.success-context {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 16px;
  margin: 20px 0px 0px 0px;
}

.success-other {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 14px;
  margin: 100px 0px 0px 0px;
}
.to-center2 {
  color: #409eff;
}
</style>

