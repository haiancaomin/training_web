<template>
  <div id="PersonalCenterAllOrder">
    <el-dialog :visible.sync="deleteOrderShow" width="400px" class="deleteOrderNotice">
        <p>是否确认删除，删除执行后将无法撤销</p>
        <div class="delete-order-operation">
          <el-button type="primary" @click="deleteOrderShow=false">取消</el-button>
          <el-button type="primary" plain @click="deleteOrder">确认</el-button>
        </div>
      </el-dialog>
      
      <el-dialog title="汇款须知" :visible.sync="noticeComment" width="600px" center class="noticeComment_dialog">
        <p class="noticeComment_p">您汇款时是否备注了订单号 <span class="noticeComment_span">{{payCommentOrderID}}</span> </p>
        <p class="noticeComment_p">如您忘记备注，请联系电话 0513-81055866！！</p>
        <div class="noticeComment_operation">
          <el-button type="primary"  class="operation_left"  @click="noticeComment=false">忘备注了</el-button>
          <el-button type="primary" plain class="operation_right" @click="havaComment()">我备注了</el-button>
        </div>
      </el-dialog>

      <el-dialog title="汇款信息" :visible.sync="account_info" center width="620px">
        <p>
                        <span style="color:#e4393c">汇款须知：</span>汇款请务必填写备注，备注信息为订单号 <span class="notice_must" style="color:#e4393c">{{accountInfoOrderId}}</span> ，便于财务核实。
                      </p>
                     
                      <p>&nbsp;</p>

                      <p>
                        <span>户名：</span>上海汇绿电子商务有限公司
                      </p>
                      <!-- <p>
                        <span>统一社会信用代码：</span>91320691MA1W0DXN1N
                      </p>
                      <p>
                        <span>地 址：</span>南通市开发区通盛大道188号创业外包服务中心C座606室
                      </p>
                      <p>
                        <span>电 话：</span>0513-81055866
                      </p> -->
                      <p>
                        <span>开户银行：</span>建设银行上海市第二支行
                      </p>
                      <p>
                        <span>账 号：</span>31001502500050057342
                      </p>
                      <p>&nbsp;</p>
                       <p >
                        <span style="color:#e4393c">汇款须知：</span>汇款请务必填写备注，备注信息为订单号 <span class="notice_must" style="color:#e4393c">{{accountInfoOrderId}}</span> ，便于财务核实。
                      </p>
        <div class="account_info_operation">
          <el-button type="primary" @click="account_info=false">取消</el-button>
          <el-button type="primary" plain @click="account_info=false">确认</el-button>
        </div>
      </el-dialog>

      <el-dialog title="汇款须知" :visible.sync="noticeOnce" width="600px" center class="noticeOnce_dialog">
        <p class="noticeOnce_p">如您使用转账汇款方式支付，请在</p>
        <p class="noticeOnce_p">
          汇款时备注订单编号
          <span class="noticeOnce_span">{{noticeOrderNum}}</span>。
        </p>
        <p class="noticeOnce_p">如果您未备注此订单编号，汇款可能被退回，</p>
        <p class="noticeOnce_p"><span class="noticeOnce_span">{{noticeLeftDay}}天{{noticeLeftHour}}小时{{noticeLeftMinute}}分{{noticeLeftSecond}}秒后未支付</span>, 
     您的订单将被自动取消。</p>
        <div class="noticeOnce_operation">
          <el-button type="primary" @click="noticeOnce=false" class="operation_left">稍后再付</el-button>
          <el-button type="primary" plain @click="IKnowOnce()" v-if="allowOperation" class="operation_right">我知道了</el-button>
          <el-button
            type="primary"
            plain
            disabled
            v-if="!allowOperation"
            class="operation_right"
          >等待{{timeCount}}秒</el-button>
        </div>
      </el-dialog>

    <el-dialog title="物流单号" :visible.sync="expressShow" width="400px" center>
        <div class="expressShow">
          <p>物流单号：{{expressID}}</p>
        </div>
      </el-dialog>

    <div class="order-dialog" id="orderDialog" center>
      <el-dialog :visible.sync="checkAgain" width="400px" class="checkAgain">
        
        <p>开具发票上传后将无法修改，是否再次确认发票信息</p>
        <div class="delete-order-operation">
          <el-button type="primary" @click="checkAgainMore">再次确认</el-button>
          <el-button type="primary" plain @click="checkSubmit">我要提交</el-button>
        </div>
      </el-dialog>

      <el-dialog :visible.sync="noInvoice" width="400px" class="noInvoice">
        <p>
          您尚未填写发票信息，点击
          <router-link to="/personalCenter/PersonalCenterInvoiceShow">
            <el-button type="primary" class="click-here">这里</el-button>
          </router-link>填写发票信息
        </p>
      </el-dialog>
      <el-dialog title="联系方式" :visible.sync="contact" width="400px" id="contact">
        <p>电话：0513-81055866</p>
        <p>邮箱：MKT_Dept@zhjcx.cn</p>
      </el-dialog>
      <el-dialog title="开票进度" :visible.sync="schedule" width="600px" id="schedule1">
        <div class="schedule-body">
          <el-steps :space="250" :active="1" finish-status="success">
            <el-step title="提交材料"></el-step>
            <el-step title="人工审核" description="预计需要一个工作日"></el-step>
            <el-step title="完成"></el-step>
          </el-steps>
        </div>
      </el-dialog>

      <el-dialog title="开票进度" :visible.sync="scheduleSuccess" width="600px" id="schedule2">
        <div class="schedule-body">
          <el-steps :space="250" :active="3" finish-status="success">
            <el-step title="提交材料"></el-step>
            <el-step title="人工审核" description="预计需要一个工作日"></el-step>
            <el-step title="完成"></el-step>
          </el-steps>
        </div>
      </el-dialog>

      <el-dialog :visible.sync="deleteOrderShow" width="400px" class="deleteOrderNotice">
        <p>是否确认删除，删除执行后将无法撤销</p>
        <div class="delete-order-operation">
          <el-button type="primary" @click="deleteOrderShow=false">取消</el-button>
          <el-button type="primary" plain @click="deleteOrder">确认</el-button>
        </div>
      </el-dialog>

      <el-dialog title="联系方式" :visible.sync="contact" width="400px" id="contact">
        <p>电话：0513-81055866</p>
        <p>邮箱：MKT_Dept@zhjcx.cn</p>
      </el-dialog>

      <el-dialog :visible.sync="payShow" width="1000px" id="payNow">
        <el-dialog
          title="用户付费协议"
          :visible.sync="showProtocol"
          width="600px"
          append-to-body
          center
          class="pay_agreement"
        >
          <p>1、考点接受报名人员以报名开始前通知为准，报满即止。</p>
          <p>2、如需取消考试，请提前3个工作日邮件通知。</p>
          <p>3、培训日前5天未支付培训费用的，报名名额取消</p>
          <p>4、如有公司需要变更参训学员的，请最晚在培训日前3个工作日，邮件通知变更，培训前3个工作日内变更的，需另支付保险费用。</p>
          <p>5、主办方收到报名信息后将尽快与您取得联系，在收到“付款通知书”五个工作日内将培训费用汇入指定账户</p>
        </el-dialog>
        <el-dialog title="汇款须知" :visible.sync="noticeTwice" width="600px" append-to-body center class="noticeTwice_dialog">
        <p class="noticeTwice_p">您汇款时是否备注了订单号 <span class="noticeTwice_span">{{noticeOrderNum}}</span> </p>
        <p class="noticeTwice_p">如您忘记备注，请联系电话 0513-81055866！！</p>

        <div class="noticeTwice_operation">
          <el-button type="primary"  class="operation_left" @click="noticeTwice=false">忘备注了</el-button>
          <el-button type="primary" plain class="operation_right" @click="pay_and_comment()">我备注了</el-button>
        </div>
      </el-dialog>
        <div class="pay">
          <div class="pay-online">
            <div class="pay-online-body">
              <div class="pay-online-check">
                <h1>确认订单信息</h1>
              </div>

              <div class="user-info">
                <div class="user-name">
                  购买帐号：
                  <span>{{userName}}</span>
                </div>
                <div class="pay-online-tips">注意：购买后不支持转让，请确认订单信息后再支付，并在48小时内支付。</div>
                <p class="info-notice">注：请仔细确认报名人员，付款成功后，无法更换！</p>
              </div>

              <!-- <div class="meal-body">
                <div class="pay-meal">购买套餐</div>

                <div
                  class="pay-meal-body"
                  v-for="orderItem in orderDetail.dlist"
                  :key="orderItem.detailid"
                >
                  <div class="meal_img f-fl">
                    <img :src="orderItem.picurl" alt />
                  </div>
                  <div class="meal_body f-fl">
                    <a class="title">
                      <span>{{orderItem.coursename}}（{{orderItem.menuname}}）</span>
                    </a>

                    <div class="promotion">
                      报名人数：
                      <span>{{orderItem.personcount}}</span>
                    </div>
                  </div>
                  <div class="meal_price">￥{{orderItem.money}}</div>
                </div>
              </div> -->

              <div class="pay-type">支付方式</div>
              <el-collapse accordion id="pay_choose">
                <el-collapse-item>
                  <template slot="title">
                    <!-- <div v-if="radio2==3" class="choose-zhifubao">
                      <img src="../../assets/zhifubao_mini.png" class="icon-mini">支付宝
                    </div>
                    <span v-if="radio2==6" class="choose-weixin">
                      <img src="../../assets/weixin_mini.png" class="icon-mini">微信支付
                    </span>-->
                    <span v-if="radio2==9" class="choose-bank">
                      <img src="../../assets/zhuanzhuang.png" class="icon-mini" />转账汇款
                    </span>
                  </template>
                  <div class="pay-choose">
                    <el-radio-group v-model="radio2">
                      <!-- <div class="pay-zhifubao">
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
                      </div>-->
                      <div class="pay-bank">
                        <el-radio :label="9">
                          <img src="../../assets/huikuan_big.png" class="pay-img" />
                        </el-radio>
                      </div>
                    </el-radio-group>
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>

            <div class="payment-body" v-if="radio2==3||radio2==6">
              <div class="payment-sub-body">
                <el-col :span="18">
                  <div class="agreement-con">&nbsp;</div>
                </el-col>
                <el-col :span="6">
                  <div class="pay-price-btn f-fr">
                    <div class="pay-price-btn_price">
                      <span class="price_title">待付款:</span>
                      <span class="price_account">
                        <span class="price_account_icon">￥</span>
                        {{orderDetail.summoney}}
                      </span>
                    </div>
                    <span class="pay-price-btn_btn">立即支付</span>
                  </div>
                </el-col>
              </div>
            </div>
            <div class="payment-body" v-if="radio2==9">
              <div class="payment-sub-body">
                <div class="agreement_check">
                  完成支付则表示您同意
                  <span class="agreement" @click="showProtocol=true">《智聚用户付费协议》</span>
                </div>
                <el-col :span="18">
                  <div class="agreement-con">
                    <div class="offline-context">
                      <p style="margin-top:40px">
                        <span style="color:#e4393c">汇款须知：</span>汇款请务必填写备注，备注信息为订单号 <span class="notice_must" style="color:#e4393c">{{noticeOrderNum}}</span> ，便于财务核实。
                      </p>
                     
                      <p>&nbsp;</p>

                      <p>
                        <span>户名：</span>上海汇绿电子商务有限公司
                      </p>
                      <!-- <p>
                        <span>统一社会信用代码：</span>91320691MA1W0DXN1N
                      </p>
                      <p>
                        <span>地 址：</span>南通市开发区通盛大道188号创业外包服务中心C座606室
                      </p>
                      <p>
                        <span>电 话：</span>0513-81055866
                      </p> -->
                      <p>
                        <span>开户银行：</span>建设银行上海市第二支行
                      </p>
                      <p>
                        <span>账 号：</span>31001502500050057342
                      </p>
                      <p>&nbsp;</p>
                       <p >
                        <span style="color:#e4393c">汇款须知：</span>汇款请务必填写备注，备注信息为订单号 <span class="notice_must" style="color:#e4393c">{{noticeOrderNum}}</span> ，便于财务核实。
                      </p>
                     
                      
                    </div>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="pay-price-btn f-fr">
                    <div class="pay-price-btn_price bank_pay">
                      <span class="price_title">待付款:</span>
                      <span class="price_account">
                        <span class="price_account_icon">￥</span>
                        {{orderDetail.summoney}}
                      </span>
                    </div>
                    <span class="pay-price-btn_btn" @click="havaPay()">我已汇款</span>
                  </div>
                </el-col>
              </div>
            </div>
          </div>
        </div>
      </el-dialog>

      <el-dialog title="物流单号" :visible.sync="expressShow" width="400px" center>
        <div class="expressShow">
          <p>物流单号：{{expressID}}</p>
        </div>
      </el-dialog>
    </div>

    <div class="crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">客户中心</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">我的订单</el-breadcrumb-item>
        <el-breadcrumb-item>全部订单</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div v-if="count">
      <div class="order-card" v-for="orderItem in orderlist" :key="orderItem.orderid">
        <div class="order-head">
          <img src="../../assets/favicon.png" alt class="order-head-img" />
          <span class="order-head-title">智聚实训</span>
          <span class="el-icon-delete" @click="showNotice(orderItem.orderid)"></span>
        </div>
        <div class="order-picture">
          <el-col :span="7">
            <img :src="orderItem.picurl" alt class="order-img" />
          </el-col>
          <el-col :span="17">
            <div class="order-detail">
              <p
                v-for="(menuname,index) in orderItem.dlist"
                :key="index"
              >{{menuname.coursename}}（{{menuname.menuname}}）</p>
            </div>
            <p class="order-time">下单时间：{{orderItem.createdate}}</p>
            <p class="order-lost-time">付款失效时间：{{getLoseEfficacyTime(orderItem.createdate)}}</p>
            <p class="order-num">订单号：{{orderItem.orderno}}</p>
          </el-col>
        </div>
        <div class="order-pay">
          <p class="order-pay-info" v-if="orderItem.status==0">
            报名{{orderItem.personcount}}人，待付款：
            <span class="order-payment">¥{{orderItem.summoney}}</span>
          </p>
          <p class="order-pay-info" v-else>
            报名{{orderItem.personcount}}人，实付款：
            <span class="order-payment">¥{{orderItem.summoney}}</span>
          </p>
        </div>
        <div class="order-operation">
          <el-button type="primary" round plain @click="contact = true">联系我们</el-button>
          <router-link :to="'/PersonalCenterOrderDetail/'+orderItem.orderid">
            <el-button type="primary" round plain>订单详情</el-button>
          </router-link>
          <el-button type="primary" round @click="payNowShow(orderItem.orderid)"  v-if="orderItem.status==0">立即支付</el-button>
          <el-button type="success" round v-if="orderItem.status==0" @click="payComment(orderItem.orderno,orderItem.orderid)">我已汇款</el-button>
          <el-button type="primary" round @click="check_info(orderItem.orderno)"  v-if="orderItem.status==1">汇款信息</el-button>
          <el-button type="success" round disabled v-if="orderItem.status==1">等待确认</el-button>
          <el-button type="success" round @click="schedule = true" v-if="orderItem.status==2">开票进度</el-button>
          <el-button
            type="success"
            round
            @click="checkExpress(orderItem.orderid)"
            v-if="orderItem.status==3"
          >发票物流</el-button>
        </div>
      </div>
    </div>

    <div v-if="count">
      <div class="order-page">
        <el-pagination
          background
          layout="prev, pager, next, jumper"
          :page-size="3"
          :total="count"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </div>
    </div>
    <div v-if="!count" class="noOrder">
      <img src="../../assets/favicon.png" alt class="order-head-img" />
      <p class="no-order-content">您还没有相关的订单</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalCenterAllOrder",
  data() {
    return {
      selectInvoiceType: "2",
      contact: false,
      showProtocol: false,
      count: 0,
      dialogVisible: false,
      radio2: 9,
      num: false,
      payShow: false,
      scheduleSuccess: false,
      schedule: false,
      orderlist: [],
      invoiceList: [],
      orderDetail: [],
      userName: "",
      deleteOrderShow: false,
      deleteOrderID: "",
      currentPage: 1,
      orderID: "",
      checkAgain: false,
      noInvoice: false,
      companyName: "",
      companyAddress: "",
      taxerID: "",
      bank: "",
      phone: "",
      account: "",
      orderMoney: "",
      expressID: "",
      expressShow: false,
      chooseid: "",
      showChooseInvoice: false,
      showChooseInvoiceDetail: false,
      noticeOrderNum: "",
      noticeOnce: false,
      allowOperation: false,
      timeCount:0,
      timer:false,
      noticeTwice:false,
      payAndCommentOrderID:"",
      account_info:false,
      accountInfoOrderId:"",
      noticeComment:false,
      payCommentOrderID:"",
      userSubmitOrderID:"",
      noticeCreateDate:"",
      noticeLeftDay:"",
      noticeLeftHour:"",
      noticeLeftMinute:"",
      noticeLeftSecond:"",
    };
  },
  watch: {
    noticeOnce: function(val) {
      if(!val) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    checkAgain: function(val) {
      if (!val && !this.dialogVisible) {
        this.showChooseInvoiceDetail = false;
        this.chooseid = "";
      }
    },
    dialogVisible: function(val) {
      if (!val && !this.checkAgain) {
        this.showChooseInvoiceDetail = false;
        this.chooseid = "";
      }
    }
  },
  methods: {
    getLoseEfficacyTime(timeString) {
      var loseEfficacyTime = Date.parse(new Date(timeString)) + 86400000*2;
      var d = new Date(loseEfficacyTime);   
      var year = d.getFullYear();
      var month = d.getMonth()+1;
     
       if(month<10) {
        month = "0"+month;
      }
      var day = d.getDate();
      if(day<10) {
        day += "0";
      }
      var hour = d.getHours();
      if(hour<10) {
        hour += "0";
      }
      var minute = d.getMinutes();
      if(minute<10) {
        minute += "0";
      }
      var second = d.getSeconds();
      if(second<10) {
        second += "0";
      }

var loseTime = year + "-" + 
           month + "-" +
           day + " " + 
          hour + ":" + 
           minute + ":" + 
           second;
      return loseTime;
    },
    havaComment() {
      this.$ajax({
        method: "post",
        url: `${this.baseURL}/zjsxpt/course_confirmPay.do?orderid=${this.userSubmitOrderID}`
      })
        .then(res => {
          this.noticeComment = false;
          this.$message({
            message: "确认信息已收到，请耐心等待本公司财务确认！",
            type: "success",
            center: true
          });
          this.count--;
          this.currentPage =
            this.count % 3 == 0 ? this.currentPage - 1 : this.currentPage;
          this.getNotPayOrderList(this.currentPage);
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    payComment(orderno,orderid) {
      
      this.noticeComment=true;
      this.userSubmitOrderID = orderid;
      this.payCommentOrderID = orderno;
    },
    check_info(orderno) {
      this.account_info=true;
      this.accountInfoOrderId = orderno;
    },
    pay_and_comment() {
      this.$ajax({
        method: "post",
        url: `${this.baseURL}/zjsxpt/course_confirmPay.do?orderid=${this.payAndCommentOrderID}`
      })
        .then(res => {
          this.payShow = false;
          this.noticeTwice = false;
          this.$message({
            message: "确认信息已收到，请耐心等待本公司财务确认！",
            type: "success",
            center: true
          });
          this.count--;
          this.currentPage =
            this.count % 3 == 0 ? this.currentPage - 1 : this.currentPage;
          this.getNotPayOrderList(this.currentPage);
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    havaPay() {
      this.noticeTwice = true;
    },
    IKnowOnce() {
      this.payShow=true;
      this.noticeOnce=false;
    },
    getInvoiceInfo(chooseid) {
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/invoice_getInvoiceById.do?invoiceid=${chooseid}`
      })
        .then(res => {
          console.log(res.data.data);
          this.companyName = res.data.data.company;
          this.companyAddress = res.data.data.address;
          this.taxerID = res.data.data.taxpayerno;

          this.bank = res.data.data.bank;
          this.phone = res.data.data.mobilephone;
          this.account = res.data.data.account;
          this.selectType = res.data.data.type;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    gotoShowChooseInvoiceDetail() {
      if (this.chooseid == "") {
        this.$message({
          message: "请先选择发票",
          center: true,
          type: "warning",
          customClass: "zZindex"
        });
      } else {
        this.showChooseInvoice = false;
        this.showChooseInvoiceDetail = true;
        this.getInvoiceInfo(this.chooseid);
      }
    },
    payNowShow(orderid) {
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/course_findOrderInfoByOrderid.do?orderid=${orderid}`
      })
        .then(res => {
          this.payAndCommentOrderID=orderid;
          this.orderDetail = res.data.data;
          console.log(this.orderDetail);
          this.noticeOnce = true;
          this.noticeOrderNum = this.orderDetail.orderno;
          this.noticeCreateDate = this.orderDetail.createdate;
           var loseEfficacyTime = Date.parse(new Date(this.orderDetail.createdate)) + 86400000*2;
           var now = (new Date()).getTime();
          var leftTime = loseEfficacyTime - now;
          var leftDay = parseInt(leftTime/(3600*24*1000));
          var leftHour = parseInt(leftTime/(3600*1000)-leftDay*24);
          var leftMinute = parseInt(leftTime/(60*1000)-leftDay*24*60-leftHour*60);
          var leftSecond = parseInt(leftTime/1000-leftDay*24*3600-leftHour*3600-leftMinute*60);
     
           this.noticeLeftDay = leftDay;
      this.noticeLeftHour= leftHour;
      this.noticeLeftMinute=leftMinute;
      this.noticeLeftSecond=leftSecond;
          const TIME_COUNT = 5;
          
          if (!this.timer) {
            this.timeCount = TIME_COUNT;
            this.allowOperation = false;
            this.timer = setInterval(() => {
              if (this.timeCount > 0 && this.timeCount <= TIME_COUNT) {
                this.timeCount--;
              } else {
                this.allowOperation = true;
                clearInterval(this.timer);
                this.timer = null;
              }
            }, 1000);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    checkExpress(id) {
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/course_findLognoByOrderid.do?orderid=${id}`
      })
        .then(res => {
          this.expressID = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
      this.expressShow = true;
    },
    checkSubmit() {
      this.$ajax({
        method: "post",
        url: `${this.baseURL}/zjsxpt/course_confirmInvoice.do?orderid=${this.orderID}&invoiceid=${this.chooseid}&invoicekind=${this.selectInvoiceType}`
      })
        .then(res => {
          this.checkAgain = false;
          this.$message({
            message: "提交成功！",
            type: "success",
            center: true
          });
          this.getNotPayOrderList(this.currentPage);
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    checkAgainMore() {
      this.dialogVisible = true;
      this.checkAgain = false;
      this.showChooseInvoiceDetail = true;
    },
    getInvoice(id, money) {
      this.orderID = id;
      this.orderMoney = money;
      var userInfo = JSON.parse(sessionStorage.getItem("user"));
      if (userInfo) {
        var userid = userInfo.userid;
      }
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/invoice_findInvoiceListByUserid.do?userid=${userid}`
      })
        .then(res => {
          if (res.data.data.length == 0) {
            this.noInvoice = true;
          } else {
            this.invoiceList = res.data.data;
            this.dialogVisible = true;
            this.showChooseInvoice = true;
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    handleCurrentChange(val) {
      this.getNotPayOrderList(val);
      this.currentPage = val;
    },
    getNotPayOrderList(selectIndex) {
      var pageIndex;
      if (selectIndex == 0) {
        pageIndex = 0;
        selectIndex = 1;
      } else {
        pageIndex = (selectIndex - 1) * 3;
      }

      var userInfo = JSON.parse(sessionStorage.getItem("user"));
      if (userInfo) {
        var userid = userInfo.userid;
      }
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/course_findOrderList.do?userid=${userid}&pageIndex=${pageIndex}&selectIndex=${selectIndex}`
      })
        .then(res => {
          this.orderlist = res.data.data;
          console.log(this.orderlist);
          this.count = res.data.count;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    showNotice(id) {
      this.deleteOrderID = id;
      this.deleteOrderShow = true;
    },
    deleteOrder() {
      this.$ajax({
        method: "post",
        url: `${this.baseURL}/zjsxpt/course_deleteOrderById.do?orderid=${this.deleteOrderID}`
      })
        .then(res => {
          this.deleteOrderShow = false;
          this.$message({
            message: "删除成功！",
            type: "success",
            center: true
          });
          this.count--;
          this.currentPage =
            this.count % 3 == 0 ? this.currentPage - 1 : this.currentPage;
          this.getNotPayOrderList(this.currentPage);
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    checkOK() {
      this.dialogVisible = false;
      this.checkAgain = true;
    }
  },
  mounted() {
    var userInfo = JSON.parse(sessionStorage.getItem("user")),
      that = this;
    if (userInfo) {
      this.userName = userInfo.name;
    }
    this.getNotPayOrderList(1);
  }
};
</script>

<style scoped>
#PersonalCenterAllOrder {
  width: 730px;
  box-shadow: 0 0 2px #c7c5c5;
  border: 1px solid #e7e7e7;
  margin: 0px 0px 0px 20px;
  padding: 20px;
}
.order-card {
  height: 320px;
  width: 600px;
  margin: 20px auto 0px auto;
  box-shadow: 0 0 6px #c7c5c5;
  border: 1px solid #c7c5c5;
}
.order-card:hover {
  box-shadow: 0 0 20px #c7c5c5;
  border: 1px solid #409eff;
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
  object-fit: cover;
}
.order-picture {
  height: 162px;
  padding: 10px 10px 10px 0px;
  background-color: #f4f4f4;
}
.order-detail {
  font-size: 16px;
  margin: 0px 0px 0px 0px;
  color: #333;
  height: 70px;
}
.order-time {
  text-align: left;
  margin: 0px 0px 5px 0px;
  color: #888;
}
.order-lost-time {
  text-align: left;
  margin: 0px 0px 0px 0px;

  color: #888;
}
.order-num {
  text-align: left;
  margin: 5px 10px 0px 0px;
  font-weight: bold;
  color: #f56c6c;
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
  padding: 8px 10px 0px 10px;
  text-align: right;
}
.order-page {
  text-align: center;
  margin: 30px 0px 10px 0px;
}
table {
  text-align: center;
  margin: 0px auto;
}
.info-save {
  margin: 20px 0px 0px 0px;
  text-align: center;
}
.order-dialog {
  text-align: center;
}
#orderDialog {
  text-align: left;
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
.user-info {
  width: 880px;
  margin: 0 auto;
  padding: 20px 0px 10px 0px;
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
.pay-type {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  margin-top: 20px;
}
.choose-zhifubao {
  border-bottom: solid 1px #eee;
  width: 860px;
  margin: 0px -40px 0px 0px;
  font-size: 14px;
  color: #409eff;
}
.icon-mini {
  height: 25px;
  width: 25px;
  margin: 0px 3px 3px 0px;
}
.choose-weixin {
  border-bottom: solid 1px #eee;
  width: 860px;
  margin: 0px -40px 0px 0px;
  font-size: 14px;
  color: #67c23a;
}
.choose-bank {
  border-bottom: solid 1px #eee;
  width: 860px;
  margin: 0px -40px 0px 0px;
  font-size: 14px;
  color: #e6a23c;
}
.pay-zhifubao {
  margin: 25px 0px 80px 0px;
}
.pay-img {
  height: 40px;
  width: 100px;
  border: solid 1px #eee;
}
.meal-body {
  padding-top: 20px;
}
.pay-meal-body {
  height: 88px;
  border-bottom: 1px solid #eee;
  margin: 20px 0px 0px 0px;
}
.f-fl {
  float: left;
}
.f-fr {
  float: right;
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
.meal_body .promotion {
  margin-top: 28px;
  color: #ff6600;
}
.meal_price {
  font-weight: 600;
  font-size: 14px;
  color: #333;
  float: right;
}
.payment-sub-body {
  width: 860px;
  height: 290px;
  box-sizing: border-box;
  background: #fefcef;
  border: 1px solid #ddd;
  padding: 15px 40px;
  margin: 0px 40px;
  color: #666;
  font-size: 14px;
}
.agreement-con {
  text-align: left;
}
.pay-meal-body img {
  width: 120px;
  height: 68px;
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
.pay-price-btn_price .price_account {
  font-size: 24px;
  font-weight: 600;
  color: #ff6600;
}
.pay-price-btn_price .price_account_icon {
  font-weight: 300;
  font-size: 14px;
}
.offline-context p {
  font-family: "微软雅黑";
  font-size: 14px;
  line-height: 24px;
  padding: 0px;
}
.offline-notice {
  font-family: "微软雅黑";
  font-size: 12px;
  padding: 0px;
  margin: 0px;
}
.pay-online-check h1 {
  display: inline-block;
  font-size: 18px;
}
#contact {
  text-align: center;
}
.el-icon-delete {
  float: right;
  font-size: 18px;
  margin: 6px 15px 0px 0px;
}
.el-icon-delete:hover {
  color: #409eff;
  cursor: pointer;
}
#schedule1,
#schedule2 {
  text-align: center;
}
.schedule-body {
  text-align: left;
  padding: 0px 0px 0px 115px;
}
.delete-order-operation {
  margin: 30px 0px 0px 0px;
}
.deleteOrderNotice,
.checkAgain {
  text-align: center;
}
.noOrder {
  margin: 120px 0px 0px 0px;
  text-align: center;
}
.no-order-content {
  margin: 20px 0px 0px 0px;
  color: #999;
  font-size: 18px;
}
.pay-weixin {
  margin: 0px 0px 0px 0px;
}
.pay-bank {
  margin: 15px 0px 0px 0px;
}
.margin_height {
  font-size: 8px;
  line-height: 8px;
  height: 8px;
}
.bank_pay {
  margin: 48px 0px 0px 0px;
}
.invoice_body {
  width: 310px;
  height: 146px;
  margin: 0px auto 20px auto;
  border-radius: 8px;
  box-shadow: 0px 0px 12px #c7c5c5;
  cursor: pointer;
}
.invoice_body:hover {
  box-shadow: 0px 0px 12px #807e7e;
}
.pupiao {
  background: -webkit-linear-gradient(to right, #67c23a, rgb(67, 197, 2));
  background: -o-linear-gradient(to right, #67c23a, rgb(67, 197, 2));
  background: -moz-linear-gradient(to right, #67c23a, rgb(67, 197, 2));
  background: linear-gradient(to right, #67c23a, rgb(67, 197, 2));
}
.gongpiao {
  background: -webkit-linear-gradient(to right, #409eff, rgb(0, 128, 255));
  background: -o-linear-gradient(to right, #409eff, rgb(0, 128, 255));
  background: -moz-linear-gradient(to right, #409eff, rgb(0, 128, 255));

  background: linear-gradient(to right, #409eff, rgb(0, 128, 255));
}
.dianzi {
  background: -webkit-linear-gradient(to right, #e6a23c, rgb(228, 137, 0));
  background: -o-linear-gradient(to right, #e6a23c, rgb(228, 137, 0));
  background: -moz-linear-gradient(to right, #e6a23c, rgb(228, 137, 0));
  background: linear-gradient(to right, #e6a23c, rgb(228, 137, 0));
}
.invoice_title {
  position: absolute;
  width: 235px;
  height: 40px;
  margin: 20px 0px 0px 60px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #fff;
  text-align: left;
}
.invoice_type {
  position: absolute;
  margin: 65px 0px 0px 60px;
  color: #fff;
  font-size: 12px;
  border: 1px solid #fff;
  padding: 3px;
}
.invoice_account {
  position: absolute;
  margin: 110px 0px 0px 60px;
  color: #fff;
  font-weight: bold;
  font-size: 13px;
}
.invoice_picture {
  position: absolute;
  width: 40px;
  height: 40px;
  margin: 20px 0px 0px 10px;
}
.invoice_picture img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.choose_this {
  position: absolute;
  border: 25px solid rgba(36, 46, 104, 0.6);
  border-left: 25px solid transparent;
  border-top: 25px solid transparent;
  border-bottom-right-radius: 8px;
  margin: 96px 0px 0px 260px;
  width: 0;
}
.choose_icon {
  position: absolute;
}
.el-icon-check {
  color: #fff;
  margin: 119px 0px 0px 282px;
  font-weight: bold;
  font-size: 22px;
}
.user_choose_invoice {
  padding: 0px 45px;
}
.td11 {
  width: 40px;
  height: 100px;
}
.td11 div {
  font-family: "kaiti";
  padding: 10px;
  line-height: 20px;
}
.td12 {
  width: 105px;
  height: 100px;
  border-right: 0px !important;
}
.td12 div {
  margin: 7px 0px 0px 0px;
}
.td12 p {
  font-family: "kaiti";
  margin: 0px 0px 8px 0px;
}
.td12 span {
  font-family: "kaiti";
}
.td12_span1 {
  margin: 0px 56px 0px 0px;
}
.td13 {
  width: 380px;
  height: 100px;
  border-left: 0px !important;
}
.td13 div {
  margin: 7px 0px 0px 0px;
}
.td13 p {
  margin: 0px 0px 8px 0px;
  font-family: "kaiti";
  text-align: left;
  color: #000;
}
.td14 {
  width: 30px;
  height: 100px;
}
.td14 div {
  font-family: "kaiti";
  padding: 10px;
  line-height: 20px;
}
.td15 {
  width: 350px;
  height: 100px;
}
.td21 {
  width: 245px;
  height: 32px;
  border-bottom: 0px !important;
}
.td21 p,
.td22 p,
.td23 p,
.td24 p,
.td25 p,
.td26 p,
.td27 p,
.td28 p,
.td41 p,
.td51 p,
.td53 p {
  font-family: "kaiti";
}
.td22 {
  width: 115px;
  height: 32px;
  border-bottom: 0px !important;
}
.td23 {
  width: 60px;
  height: 32px;
  border-bottom: 0px !important;
}
.td24 {
  width: 105px;
  height: 32px;
  border-bottom: 0px !important;
}
.td25 {
  width: 110px;
  height: 32px;
  border-bottom: 0px !important;
}
.td26 {
  width: 125px;
  height: 32px;
  border-bottom: 0px !important;
}
.td27 {
  width: 50px;
  height: 32px;
  border-bottom: 0px !important;
}
.td28 {
  width: 125px;
  height: 32px;
  border-bottom: 0px !important;
}
.td31 {
  width: 245px;
  height: 150px;
  border-bottom: 0px !important;
  border-top: 0px !important;
}
.td32 {
  width: 115px;
  height: 150px;
  border-bottom: 0px !important;
  border-top: 0px !important;
}
.td33 {
  width: 60px;
  height: 150px;
  border-bottom: 0px !important;
  border-top: 0px !important;
}
.td34 {
  width: 105px;
  height: 150px;
  border-bottom: 0px !important;
  border-top: 0px !important;
}
.td35 {
  width: 110px;
  height: 150px;
  border-bottom: 0px !important;
  border-top: 0px !important;
}
.td36 {
  width: 125px;
  height: 150px;
  border-bottom: 0px !important;
  border-top: 0px !important;
  vertical-align: top;
}
.td36 p {
  font-family: "kaiti";
  color: #000;
}
.td37 {
  width: 50px;
  height: 150px;
  border-bottom: 0px !important;
  border-top: 0px !important;
}
.td38 {
  width: 125px;
  height: 150px;
  border-bottom: 0px !important;
  border-top: 0px !important;
}
.td41 {
  width: 245px;
  height: 32px;
  border-top: 0px !important;
}
.td42 {
  width: 115px;
  height: 32px;
  border-top: 0px !important;
}
.td43 {
  width: 60px;
  height: 32px;
  border-top: 0px !important;
}
.td44 {
  width: 105px;
  height: 32px;
  border-top: 0px !important;
}
.td45 {
  width: 110px;
  height: 32px;
  border-top: 0px !important;
}
.td46 {
  width: 125px;
  height: 32px;
  border-top: 0px !important;
}
.td46 p {
  font-family: "kaiti";
  color: #000;
}
.td47 {
  width: 50px;
  height: 32px;
  border-top: 0px !important;
}
.td48 {
  width: 125px;
  height: 30px;
  border-top: 0px !important;
}
.td51 {
  width: 245px;
  height: 32px;
}
.td52 {
  width: 390px;
  height: 32px;
  border-right: 0px !important;
}
.td53 {
  width: 125px;
  height: 32px;
  border-left: 0px !important;
  border-right: 0px !important;
}
.td54 {
  width: 50px;
  height: 32px;
  border-left: 0px !important;
  border-right: 0px !important;
}
.td55 {
  width: 125px;
  height: 32px;
  border-left: 0px !important;
}
.td55 p {
  font-family: "kaiti";
  color: #000;
}
.pupiao_table,
.pupiao_table tr,
.pupiao_table td {
  border: 1px solid #67c23a;
}
.pupiao_table {
  color: #67c23a;
}
.zhuanyong_table,
.zhuanyong_table tr,
.zhuanyong_table td {
  border: 1px solid #409eff;
}
.zhuanyong_table {
  color: #409eff;
}
.dianzi_table,
.dianzi_table tr,
.dianzi_table td {
  border: 1px solid #e6a23c;
}
.dianzi_table {
  color: #e6a23c;
}
.td_money {
  margin: 0px 5px 0px 0px;
}
.info_left {
  margin: 0px 10px 0px 0px;
  font-family: "kaiti";
  color: #000;
}
.pupiao_title {
  font-family: "kaiti";
  font-size: 26px;
  color: #67c23a;
  font-weight: bold;
}
.zhuanyong_title {
  font-family: "kaiti";
  font-size: 26px;
  color: #409eff;
  font-weight: bold;
}
.dianzi_title {
  font-family: "kaiti";
  font-size: 26px;
  color: #e6a23c;
  font-weight: bold;
}
.pupiao_underline {
  width: 182px;
  height: 10px;
  border-top: 2px solid #67c23a;
  border-bottom: 2px solid #67c23a;
  margin: 20px auto;
}
.zhuanyong_underline {
  width: 182px;
  height: 10px;
  border-top: 2px solid #409eff;
  border-bottom: 2px solid #409eff;
  margin: 20px auto;
}
.dianzi_underline {
  width: 236px;
  height: 10px;
  border-top: 2px solid #e6a23c;
  border-bottom: 2px solid #e6a23c;
  margin: 20px auto;
}
.choose_invoice_type {
  width: 120px;
  margin: 0px 0px 0px 5px;
}
.choose_head {
  text-align: left;
  margin: 0px 0px 30px 65px;
}
.offline-context p span {
  font-weight: bold;
}
.pay_agreement p {
  margin-bottom: 10px;
}
.agreement {
  cursor: pointer;
  color: #49af4f;
}
.agreement_check {
  position: absolute;
  margin: 137px 0px 0px 507px;
}
#contact p {
  margin-bottom: 10px;
}
.expressShow {
  text-align: center;
}
.notice20190702 {
  color:#F56C6C;
}
.info-notice {
  font-family: "微软雅黑";
  font-size: 12px;
  color: #ee5f5b;
}
.noticeOnce_p {
  font-size: 20px;
  line-height: 35px;
  text-align: center;
}
.noticeOnce_span {
  color: #f56c6c;
  font-weight: bold;
}
.operation_left {
  margin-right: 100px;
}
.notice_must {
  font-size: 16px;
}
.noticeTwice_dialog p{
  text-align: center;
  font-size: 16px;
}
.noticeTwice_span {
  color: #f56c6c;
  font-weight: bold;
}
.noticeTwice_operation .operation_left{
  margin-left: 125px;
}
.noticeTwice_operation{
  margin-top: 50px;
}
.account_info_operation .el-button{
  margin-right:100px;
}
.account_info_operation {
  margin-left:140px;
  margin-top:40px;
}
.noticeComment_p {
  text-align: center;
  font-size: 16px;
}
.noticeComment_p span{
  color: #f56c6c;
  font-weight: bold;
}
.noticeComment_operation {
  margin:40px 0px 0px 120px;
}
.noticeOnce_operation {
  margin: 40px 0px 0px 120px;
}
</style>
<style>
#payNow .el-dialog__header {
  padding: 0px 20px 10px;
}
#payNow .el-dialog__body {
  padding: 0px 20px 30px 20px;
  color: #606266;
  font-size: 14px;
}
#pay_choose .el-collapse-item__content {
  padding-bottom: 15px;
}
.el-button + .el-button {
  margin-left: 0px;
}
</style>