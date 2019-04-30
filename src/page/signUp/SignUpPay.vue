<template>
  <div id="SignUpPay">
    <div>
      <div class="pay-head">
        <span>您可以选择</span>
        <el-button type="primary" @click="onliePayment">在线支付</el-button>
        <span>或者</span>
        <el-button type="success" @click="offliePayment">转账汇款</el-button>
      </div>

      <div clsss="pay-online" v-if="payOnline == 1">
        <el-dialog title="报名人员信息" :visible.sync="showTable" width="600px" center>
          <el-table :data="tableData" border height="400px" style="width: 100%">
            <el-table-column prop="name" label="姓名" width="80"></el-table-column>
            <el-table-column prop="id" label="身份证" width="280"></el-table-column>
            <el-table-column prop="course" label="课程"></el-table-column>
          </el-table>
          <el-button type="primary" class="sign-submit">关闭</el-button>
        </el-dialog>
        <el-dialog title="用户付费协议" :visible.sync="showProtocol" width="600px" center>用户付费协议文案</el-dialog>

        <div class="pay-online-body">
          <div class="pay-online-check">
            <h1>确认订单信息</h1>
            <h4>请在2小时内完成支付，否则订单会被自动取消</h4>
          </div>

          <div class="user-info">
            <div class="user-name">
              购买帐号：
              <span>zeroandx</span>
            </div>
            <div class="pay-online-tips">注意：购买后不支持退款、转让，请确认开课时间或考试时间后再提交订单</div>
          </div>
          <div class="pay-type">支付方式</div>
          <el-collapse accordion>
            <el-collapse-item>
              <template slot="title">
                <div v-if="radio2==3" class="choose-zhifubao">
                  <img src="../../assets/zhifubao_mini.png" class="icon-mini">支付宝
                </div>
                <span v-if="radio2==6" class="choose-weixin">
                  <img src="../../assets/weixin_mini.png" class="icon-mini">微信支付
                </span>
              </template>
              <div class="pay-choose">
                <el-radio-group v-model="radio2">
                  <div class="pay-zhifubao">
                    <el-col :span="24">
                      <el-radio :label="3">
                        <img src="../../assets/zhifubao.jpg" class="pay-img">
                      </el-radio>
                    </el-col>
                  </div>
                  <div class="pay-weixin">
                    <el-radio :label="6">
                      <img src="../../assets/weixin.jpg" class="pay-img">
                    </el-radio>
                  </div>
                </el-radio-group>
              </div>
            </el-collapse-item>
          </el-collapse>

          <div class="meal-body">
            <div class="pay-meal">购买套餐</div>
            <div class="pay-meal-body">
              <div class="pay-meal-body">
                <div class="meal_img f-fl">
                  <img src="../../assets/inspection1.jpg" alt>
                </div>
                <div class="meal_body f-fl">
                  <a class="title">
                    <span>质量员+考试培训+南通</span>
                  </a>

                  <div class="promotion" @click="showTable = true">
                    报名人数：
                    <span>11</span>
                  </div>
                </div>
                <div class="meal_price">￥2000.00</div>
              </div>
            </div>
            <div class="pay-meal-body">
              <div class="pay-meal-body">
                <div class="meal_img f-fl">
                  <img src="../../assets/inspection2.png" alt>
                </div>
                <div class="meal_body f-fl">
                  <a class="title">
                    <span>灌浆工+考试+南通</span>
                  </a>

                  <div class="promotion" @click="showTable = true">
                    报名人数：
                    <span>12</span>
                  </div>
                </div>
                <div class="meal_price">￥3000.00</div>
              </div>
            </div>
          </div>
        </div>

        <div class="payment-body">
          <div class="payment-sub-body">
            <el-col :span="18">
              <div class="agreement-con">
                提交订单则表示您同意
                <span class="agreement" @click="showProtocol = true">《智聚用户付费协议》</span>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="pay-price-btn f-fr">
                <div class="pay-price-btn_price">
                  <span class="price_title">实付:</span>
                  <span class="price_account">
                    <span class="price_account_icon">￥</span>5000.00
                  </span>
                </div>
                <span class="pay-price-btn_btn" @click="payNow">立即支付</span>
                <div>
                  <span class="pay-price-btn_wait" @click="payWait">稍后支付</span>
                </div>
              </div>
            </el-col>
          </div>
        </div>
      </div>

      <div calss="pay-offline" v-if="payOffline == 1">
        <div class="offline-context">
          <p class="offline-notice">转账汇款成功后，请在正常工作时间9:30-5:30致电进行款项确认，汇款成功后可在个人中心索取发票。电话：1234567890</p>
          <p>&nbsp;</p>
          <strong>对公帐户：</strong>（可通过网银转帐或银行柜台电汇）
          <br>
          <p>开 户 行：中国**银行股份有限公司**支行</p>
          <p>收款户名：***</p>
          <p>帐 号：1234567890</p>
        </div>

        <div class="nextPage4-2">
          <el-button type="primary" @click="payWait">下一步</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isIndeterminate: true,
      showPersonInfo: false,

      radio2: 3,
      SignUpPayPage: 1,
      SignUpSuccessPage: 0,
      SignUpPageWaitPage:0,

      payOnline: 1,
      payOffline: 0,
      active: 0,
      
      showTable: false,
      showProtocol: false,
      
      tableData: [{}]
    };
  },
  mounted() {
    
  },
  methods: {
   onliePayment() {
      this.payOnline = 1;
      this.payOffline = 0;
    },
    offliePayment() {
      this.payOnline = 0;
      this.payOffline = 1;
    },
    payNow() {
        this.SignUpPayPage = 0;
        this.SignUpSuccessPage =1
        this.active = 4;
        this.$emit("ToSignUpSuccessPage", {
          SignUpPayPage: this.SignUpPayPage,
          SignUpSuccessPage: this.SignUpSuccessPage,
          active: this.active
        });
    },
    payWait() {
        this.SignUpPayPage = 0;
        this.SignUpPageWaitPage =1
        this.active = 4;
        this.$emit("ToSignUpPageWaitPage", {
          SignUpPayPage: this.SignUpPayPage,
          SignUpPageWaitPage: this.SignUpPageWaitPage,
          active: this.active
        });
    }
  }
};
</script>

<style scoped>
.pay-online-body {
  width: 900px;
  margin: 10px 20px 0px 20px;
  padding: 20px;
}

.pay-online-check {
  padding: 0px 0px 20px 0px;
  line-height: 24px;
  border-bottom: solid 1px #eee;
  box-sizing: border-box;
  color: #333333;
}
.pay-online-check h1 {
  display: inline-block;
  font-size: 18px;
}
.pay-online-check h4 {
  color: #666666;
  display: inline-block;
  line-height: 24px;
  height: 24px;
  font-size: 14px;
  position: relative;
  top: -1px;
  margin-left: 20px;
}
.user-name {
  font-size: 14px;
  color: #333;
}
.pay-online-tips {
  margin-top: 5px;
  font-size: 12px;
  color: #999;
  line-height: 16px;
}
.user-info {
  width: 880px;
  margin: 0 auto;
  padding: 20px 0 30px 0;
}
.pay-zhifubao {
  margin: 25px 0px 80px 0px;
}
.pay-img {
  height: 40px;
  width: 100px;
  border: solid 1px #eee;
}
.pay-type {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
}
.choose-zhifubao {
  border-bottom: solid 1px #eee;
  width: 860px;
  margin: 0px -40px 0px 0px;
  font-size: 14px;
  color: #409eff;
}
.choose-weixin {
  border-bottom: solid 1px #eee;
  width: 860px;
  margin: 0px -40px 0px 0px;
  font-size: 14px;
  color: #67c23a;
}
.icon-mini {
  height: 25px;
  width: 25px;
  margin: 0px 3px 3px 0px;
}
.meal-body {
  padding-top: 20px;
}
.pay-meal {
  color: #333;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
}
.pay-meal-body {
  height: 88px;
  border-bottom: 1px solid #eee;
  margin: 20px 0px 0px 0px;
}
.f-fl {
  float: left;
}
.pay-meal-body img {
  width: 120px;
  height: 68px;
}
.meal_body {
  margin-left: 12px;
  font-size: 12px;
}
.meal_body .title {
  display: block;
  font-size: 14px;
  color: #333;
  line-height: 19px;
  text-decoration: none;
}
.meal_body .time {
  margin-top: 8px;
  color: #999;
}
.meal_body .promotion {
  margin-top: 28px;
  color: #ff6600;
  cursor: pointer;
}
.meal_price {
  font-weight: 600;
  font-size: 14px;
  color: #333;
  float: right;
}
.payment-sub-body {
  width: 860px;
  height: 160px;
  box-sizing: border-box;
  background: #fefcef;
  border: 1px solid #ddd;
  padding: 15px 40px;
  margin: 0px 40px;
  color: #666;
  font-size: 14px;
}
.agreement-con {
  padding: 100px 0px 0px 0px;
  text-align: left;
}
.agreement {
  cursor: pointer;
  color: #49af4f;
}
.f-fr {
  float: right;
}
.pay-price-btn_price {
  text-align: right;
  margin-bottom: 5px;
}
.pay-price-btn_btn {
  cursor: pointer;
  display: inline-block;
  height: 44px;
  width: 160px;
  line-height: 44px;
  font-size: 18px;
  color: #ffffff;
  background: #ff6600;
  border-radius: 2px;
  text-align: center;
}
.pay-price-btn_wait {
  cursor: pointer;
  display: inline-block;
  height: 44px;
  width: 160px;
  line-height: 44px;
  font-size: 18px;
  color: #ffffff;
  background: #909399;
  border-radius: 2px;
  text-align: center;
  margin: 5px 0px;
}
.pay-price-btn_price {
  text-align: right;
  margin-bottom: 5px;
}
.pay-price-btn_price .price_account {
  font-size: 24px;
  font-weight: 600;
  color: #ff6600;
}
.pay-price-btn_price .price_account_icon {
  font-weight: 300;
  font-size: 14px;
}
</style>