<template>
  <div id="PersonalCenterNotInvoice">
    <div class="order-dialog">
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

      <el-dialog :visible.sync="deleteOrderShow" width="400px" class="deleteOrderNotice">
        <p>是否确认删除，删除执行后将无法撤销</p>
        <div class="delete-order-operation">
          <el-button type="primary" @click="deleteOrderShow=false">取消</el-button>
          <el-button type="primary" plain @click="deleteOrder">确认</el-button>
        </div>
      </el-dialog>

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

      <el-dialog title="开票进度" :visible.sync="scheduleSuccess" width="600px" id="schedule2">
        <div class="schedule-body">
          <el-steps :space="250" :active="3" finish-status="success">
            <el-step title="提交材料"></el-step>
            <el-step title="人工审核" description="预计需要一个工作日"></el-step>
            <el-step title="完成"></el-step>
          </el-steps>
        </div>
      </el-dialog>

      <el-dialog title="发票选择" :visible.sync="dialogVisible" width="1000px" height="300px">
        <div class="user_choose_invoice" v-show="showChooseInvoice">
          <div class="choose_head">
            <span>请选择发票类型</span>
            <el-select v-model="selectInvoiceType" placeholder="请输入学历" class="choose_invoice_type">
              <el-option label="普通发票" value="0"></el-option>
              <el-option label="专用发票" value="1"></el-option>
              <el-option label="电子发票" value="2"></el-option>
            </el-select>
          </div>
          <div>
            <el-col :span="12" v-for="invoiceItem in invoiceList" :key="invoiceItem[0]">
              <div
                class="invoice_body"
                :class="{'pupiao':selectInvoiceType=='0','gongpiao':selectInvoiceType=='1','dianzi':selectInvoiceType=='2'}"
                @click="chooseid=invoiceItem[0]"
              >
                <div v-if="invoiceItem[0]==chooseid" class="choose_this"></div>
                <div v-if="invoiceItem[0]==chooseid" class="choose_icon">
                  <span class="el-icon-check"></span>
                </div>
                <div class="invoice_picture" v-if="selectInvoiceType=='0'">
                  <img src="../../assets/pupiao.png" />
                </div>
                <div class="invoice_picture" v-if="selectInvoiceType=='1'">
                  <img src="../../assets/zhuanpiao.png" />
                </div>
                <div class="invoice_picture" v-if="selectInvoiceType=='2'">
                  <img src="../../assets/dianzi.png" />
                </div>

                <div class="invoice_title">{{invoiceItem[1]}}</div>
                <div class="invoice_type" v-if="selectInvoiceType=='0'">普通发票</div>
                <div class="invoice_type" v-if="selectInvoiceType=='1'">专用发票</div>
                <div class="invoice_type" v-if="selectInvoiceType=='2'">电子发票</div>

                <div class="invoice_account">{{invoiceItem[3]}}</div>
              </div>
            </el-col>
          </div>

          <div style="clear: both;"></div>
          <div>
            <el-button type="primary" @click="gotoShowChooseInvoiceDetail">下一步</el-button>
          </div>
        </div>
        <div class="table-body" v-show="showChooseInvoiceDetail">
          <h3 class="pupiao_title" v-if="selectInvoiceType==0">增值税普通发票</h3>
          <h3 class="zhuanyong_title" v-if="selectInvoiceType==1">增值税专用发票</h3>
          <h3 class="dianzi_title" v-if="selectInvoiceType==2">增值税电子普通发票</h3>
          <div class="pupiao_underline" v-if="selectInvoiceType==0"></div>
          <div class="zhuanyong_underline" v-if="selectInvoiceType==1"></div>
          <div class="dianzi_underline" v-if="selectInvoiceType==2"></div>

          <table
            cellspacing="0"
            :class="{'pupiao_table':selectInvoiceType==0,'zhuanyong_table':selectInvoiceType==1,'dianzi_table':selectInvoiceType==2}"
          >
            <tr>
              <td class="td11">
                <div>购买方</div>
              </td>
              <td class="td12">
                <div>
                  <p>
                    <span class="td12_span1">名</span>称：
                  </p>
                  <p>纳税人识别号：</p>
                  <p>
                    <span class="td12_span3">地</span>
                    <span class="td12_span3">址、</span>
                    <span class="td12_span3">电</span>话：
                  </p>
                  <p>开发行及账号：</p>
                </div>
              </td>
              <td colspan="5" class="td13">
                <div>
                  <p>{{companyName}}</p>
                  <p>{{taxerID}}</p>
                  <p>
                    <span class="info_left">{{companyAddress}}</span>
                    {{phone}}
                  </p>
                  <p>
                    <span class="info_left">{{bank}}</span>
                    {{account}}
                  </p>
                </div>
              </td>
              <td class="td14">
                <div>密码区</div>
              </td>
              <td colspan="4" class="td15">
                <div></div>
              </td>
            </tr>
            <tr>
              <td colspan="3" class="td21">
                <div>
                  <p>货物或应税劳务、服务名称</p>
                </div>
              </td>
              <td class="td22">
                <div>
                  <p>规格型号</p>
                </div>
              </td>
              <td class="td23">
                <div>
                  <p>单位</p>
                </div>
              </td>
              <td class="td24">
                <div>
                  <p>数量</p>
                </div>
              </td>
              <td colspan="3" class="td25">
                <div>
                  <p>单价</p>
                </div>
              </td>
              <td class="td26">
                <div>
                  <p>金额</p>
                </div>
              </td>
              <td class="td27">
                <div>
                  <p>税率</p>
                </div>
              </td>
              <td class="td28">
                <div>
                  <p>税额</p>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="3" class="td31">
                <div></div>
              </td>
              <td class="td32">
                <div></div>
              </td>
              <td class="td33">
                <div></div>
              </td>
              <td class="td34">
                <div></div>
              </td>
              <td colspan="3" class="td35">
                <div></div>
              </td>
              <td class="td36">
                <div>
                  <p>{{orderMoney}}</p>
                </div>
              </td>
              <td class="td37">
                <div></div>
              </td>
              <td class="td38">
                <div></div>
              </td>
            </tr>
            <tr>
              <td colspan="3" class="td41">
                <div>
                  <p>合计</p>
                </div>
              </td>
              <td class="td42">
                <div></div>
              </td>
              <td class="td43">
                <div></div>
              </td>
              <td class="td44">
                <div></div>
              </td>
              <td colspan="3" class="td45">
                <div></div>
              </td>
              <td class="td46">
                <div>
                  <p>
                    <span class="td_money">¥</span>
                    {{orderMoney}}
                  </p>
                </div>
              </td>
              <td class="td47">
                <div></div>
              </td>
              <td class="td48">
                <div></div>
              </td>
            </tr>
            <tr>
              <td colspan="3" class="td51">
                <div>
                  <p>价税合计（大写）</p>
                </div>
              </td>
              <td colspan="6" class="td52">
                <div></div>
              </td>
              <td class="td53">
                <div>
                  <p>小写</p>
                </div>
              </td>
              <td class="td54">
                <div>
                  <p></p>
                </div>
              </td>
              <td class="td55">
                <div>
                  <p>
                    <span class="td_money">¥</span>
                    {{orderMoney}}
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td class="td11">
                <div>销售方</div>
              </td>
              <td class="td12">
                <div>
                  <p>
                    <span class="td12_span1">名</span>称：
                  </p>
                  <p>纳税人识别号：</p>
                  <p>
                    <span class="td12_span3">地</span>
                    <span class="td12_span3">址、</span>
                    <span class="td12_span3">电</span>话：
                  </p>
                  <p>开发行及账号：</p>
                </div>
              </td>
              <td colspan="5" class="td13">
                <div></div>
              </td>
              <td class="td14">
                <div>备注</div>
              </td>
              <td colspan="4" class="td15">
                <div></div>
              </td>
            </tr>
          </table>

          <div class="info-save">
            <el-button type="primary" @click="checkOK">确认开票</el-button>
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
        <el-breadcrumb-item>订单发票</el-breadcrumb-item>
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
            <p class="order-num">订单号：{{orderItem.orderno}}</p>
          </el-col>
        </div>
        <div class="order-pay">
          <p class="order-pay-info">
            报名{{orderItem.personcount}}人，实付款：
            <span class="order-payment">¥{{orderItem.summoney}}</span>
          </p>
        </div>
        <div class="order-operation">
          <el-button type="primary" round plain @click="contact = true">联系我们</el-button>
          <router-link :to="'/PersonalCenterOrderDetail/'+orderItem.orderid">
            <el-button type="primary" round plain>订单详情</el-button>
          </router-link>
          <el-button
            type="primary"
            round
            @click="getInvoice(orderItem.orderid,orderItem.summoney)"
            v-if="orderItem.status==1"
          >开具发票</el-button>
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
  name: "PersonalCenterNotInvoice",
  data() {
    return {
      selectInvoiceType: "0",
      chooseid: "",
      contact: false,
      schedule: false,
      scheduleSuccess: false,
      dialogVisible: false,
      orderlist: [],
      count: 0,
      invoiceList: [],
      deleteOrderShow: false,
      deleteOrderID: "",
      currentPage: 1,
      noInvoice: false,
      companyName: "",
      companyAddress: "",
      taxerID: "",
      contactPerson: "",
      bank: "",
      phone: "",
      account: "",
      orderMoney: "",
      checkAgain: false,
      orderID: "",
      expressID: "",
      expressShow: false,
      showChooseInvoice: false,
      showChooseInvoiceDetail: false
    };
  },
  watch: {
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
          this.contactPerson = res.data.data.person;
          this.bank = res.data.data.bank;
          this.phone = res.data.data.mobilephone;
          this.account = res.data.data.account;
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
    checkOK() {
      this.dialogVisible = false;
      this.checkAgain = true;
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
        url: `${this.baseURL}/zjsxpt/course_findOrderList.do?userid=${userid}&status=1&pageIndex=${pageIndex}&selectIndex=${selectIndex}`
      })
        .then(res => {
          this.orderlist = res.data.data;
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
    }
  },
  mounted() {
    this.getNotPayOrderList(1);
  }
};
</script>

<style scoped>
#PersonalCenterNotInvoice {
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
  height: 100px;
}
.order-time {
  text-align: left;
  margin: 0px 10px 0px 0px;
  font-size: 13px;
  color: #888;
}
.order-num {
  text-align: left;
  margin: 5px 10px 0px 0px;
  font-size: 13px;
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
.schedule-body {
  text-align: left;
  padding: 0px 0px 0px 115px;
}
#schedule1,
#schedule2 {
  text-align: center;
}
.el-icon-delete {
  float: right;
  font-size: 18px;
  margin: 2px 15px 0px 0px;
}
.el-icon-delete:hover {
  color: #409eff;
  cursor: pointer;
}
.deleteOrderNotice,
.checkAgain,
.expressShow {
  text-align: center;
}
.delete-order-operation {
  margin: 30px 0px 0px 0px;
}
.click-here {
  margin: 0px 5px;
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
#contact p {
  margin-bottom: 10px;
}
</style>