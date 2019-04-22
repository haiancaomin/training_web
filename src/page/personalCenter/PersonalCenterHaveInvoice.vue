<template>
  <div id="PersonalCenterHaveInvoice">
    <div class="order-dialog">

      <el-dialog title="联系方式" :visible.sync="contact" width="400px" id="contact">
        <p>电话：845923412</p>
        <p>邮箱：231231332@dd.com</p>
      </el-dialog>
      <el-dialog title="物流编号" :visible.sync="num" width="400px">顺丰快递：84592341112412</el-dialog>
    </div>
    <div class="crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">客户中心</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">我的订单</el-breadcrumb-item>
        <el-breadcrumb-item>已开票订单</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="order-card">
      <div class="order-head">
        <img src="../../assets/favicon.png" alt class="order-head-img">
        <span class="order-head-title">智聚培训</span>
      </div>
      <div class="order-picture">
        <el-col :span="7">
          <img src="../../assets/inspection1.jpg" alt class="order-img">
        </el-col>
        <el-col :span="17">
          <div class="order-detail">
            <p>质量员+考试培训+南通，资料员+考试培训+南通，灌浆工+考试+南通</p>
          </div>
          <p class="order-time">下单时间：2019-03-08 09:52:06</p>
          <p class="order-num">订单号：84562792862</p>
        </el-col>
      </div>
      <div class="order-pay">
        <p class="order-pay-info">报名11人，实付款：
          <span class="order-payment">¥5000</span>
        </p>
      </div>
      <div class="order-operation">
        <el-button type="primary" round @click="contact = true">联系我们</el-button>
        <el-button type="primary" round @click="num = true">发票物流</el-button>
      </div>
    </div>

    <div class="order-card">
      <div class="order-head">
        <img src="../../assets/favicon.png" alt class="order-head-img">
        <span class="order-head-title">智聚培训</span>
      </div>
      <div class="order-picture">
        <el-col :span="8">
          <img src="../../assets/inspection2.png" alt class="order-img">
        </el-col>
        <el-col :span="16">
          <div class="order-detail">
            <p>质量员+考试培训+南通，资料员+考试培训+南通</p>
          </div>
          <p class="order-time">下单时间：2019-03-08 09:52:06</p>
          <p class="order-num">订单号：84562792862</p>
        </el-col>
      </div>
      <div class="order-pay">
        <p class="order-pay-info">报名11人，实付款：
          <span class="order-payment">¥5000</span>
        </p>
      </div>
      <div class="order-operation">
        <el-button type="primary" round @click="contact = true">联系我们</el-button>
        <el-button type="primary" round @click="num = true">发票物流</el-button>
      </div>
    </div>

    <div class="order-card">
      <div class="order-head">
        <img src="../../assets/favicon.png" alt class="order-head-img">
        <span class="order-head-title">智聚培训</span>
      </div>
      <div class="order-picture">
        <el-col :span="8">
          <img src="../../assets/inspection1.jpg" alt class="order-img">
        </el-col>
        <el-col :span="16">
          <div class="order-detail">
            <p>质量员+考试培训+南通，资料员+考试培训+南通，灌浆工+考试+南通</p>
          </div>
          <p class="order-time">下单时间：2019-03-08 09:52:06</p>
          <p class="order-num">订单号：84562792862</p>
        </el-col>
      </div>
      <div class="order-pay">
        <p class="order-pay-info">报名11人，实付款：
          <span class="order-payment">¥5000</span>
        </p>
      </div>
      <div class="order-operation">
        <el-button type="primary" round @click="contact = true">联系我们</el-button>
        <el-button type="primary" round @click="num = true">发票物流</el-button>
      </div>
    </div>
    <div class="order-page">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalCenterHaveInvoice",
  data() {
    return {
      contact: false,
      num: false
    };
  },
  methods: {}
};
</script>

<style scoped>
#PersonalCenterHaveInvoice {
  width: 830px;

  box-shadow: 0 0 2px #c7c5c5;
  border: 1px solid #e7e7e7;
  margin: 0px 0px 0px 20px;
  padding: 20px;
}
.order-card {
  height: 320px;
  width: 640px;
  margin: 10px auto;
  box-shadow: 0 0 6px #c7c5c5;
  margin: 20px auto 0px auto;
}
.order-card:hover {
  width: 640px;
  margin: 10px auto;
  box-shadow: 0 0 10px #c7c5c5;
  margin: 20px auto 0px auto;
}
.order-head {
  height: 50px;
  padding: 11px 0px 0px 0px;
}
.order-head-img {
  width: 30px;
  height: 30px;
  margin: 0px 5px 0px 15px;
}
.order-head-title {
  font-weight: bold;
  font-size: 18px;
}
.order-img {
  width: 141px;
  height: 141px;
  margin: 0px 0px 0px 10px;
}
.order-picture {
  height: 162px;
  padding: 10px 10px 10px 0px;
  background-color: #f4f4f4;
}
.order-detail {
  font-size: 17px;
  margin: 10px 0px 0px 0px;
  color: #333;
  height: 85px;
}
.order-time {
  text-align: left;
  margin: 0px 10px 0px 0px;
  font-size: 13px;
  color: #333;
}
.order-num {
  text-align: left;
  margin: 5px 10px 0px 0px;
  font-size: 13px;
  color: #333;
}
.order-pay {
  height: 50px;
  border-bottom: 1px solid #eee;
  padding: 14px;
  text-align: right;
}
.order-pay-info {
  font: 14px;
}
.order-payment {
  font-weight: bold;
}
.order-operation {
  padding: 10px;
  text-align: right;
}
.order-page {
  text-align: center;
  margin: 30px 0px 10px 0px;
}
.order-dialog {
  text-align: center;
}
.crumb {
  padding: 10px 0px 10px 0px;
  font-size: 20px;
  text-align: left;

  border-left: 2px solid #409eff;
  line-height: 40px;
  padding-left: 15px;
  background: #e4e7ed;
}
.el-breadcrumb {
  background: #e4e7ed;
}
</style>











