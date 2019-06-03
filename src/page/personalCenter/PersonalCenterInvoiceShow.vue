<template>
  <div id="PersonalCenterInvoiceShow">
    <div class="crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">客户中心</el-breadcrumb-item>
        <el-breadcrumb-item>发票管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="deleteCheck_dialog">
      <el-dialog :visible.sync="deleteCheck" width="300px">
        <p class="check_contnt">确认删除？</p>
        <el-button type="primary" @click="deleteInvoice(deleteInvoiceId)">确认</el-button>
        <el-button type="primary" plain @click="deleteCheck=false">取消</el-button>
      </el-dialog>
    </div>
    <div v-if="showInvoice">
      <el-col :span="12" v-for="invoiceItem in invoiceList" :key="invoiceItem[0]">
        <div class="invoice_body pupiao" @click="showInvoiceDetail(invoiceItem[0])">
          <div class="invoice_picture">
            <img src="../../assets/fapiao.png">
          </div>
          <div class="invoice_delete">
            <span class="el-icon-delete" @click.stop="deleteCheckFun(invoiceItem[0])"></span>
          </div>
          <div class="invoice_title">{{invoiceItem[1]}}</div>
          <div class="invoice_account">银行账号：{{invoiceItem[7]}}</div>
          <div class="invoice_type">税号：{{invoiceItem[3]}}</div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="invoice_body_add" @click="addInvoice" v-if="this.invoiceList.length<10">
          <div class="add_new_invoice">
            <span class="el-icon-plus"></span>
          </div>
        </div>
      </el-col>
    </div>

    <div v-if="addNewInvoice" class="table-body">
      <div class="putongfapiao">
        <table border="1" cellspacing="0">
          <tr>
            <th colspan="4" class="invoice-show-table-th">开票信息表</th>
          </tr>
          <tr>
            <td class="invoice-show-table-td-info1">
              <span>*</span>公司名称
            </td>
            <td colspan="3" class="invoice-show-table-td-input1">
              <el-input
                v-model="companyName"
                placeholder="请输入公司名称"
                maxlength="30"
                class="person-add-input"
                id="companyNameInputFocus"
              ></el-input>
            </td>
          </tr>
          <tr>
            <td class="invoice-show-table-td-info1">
              <span>*</span>公司地址
            </td>
            <td colspan="3" class="invoice-show-table-td-input1">
              <el-input
                v-model="companyAddress"
                placeholder="请输入公司地址"
                maxlength="50"
                class="person-add-input"
              ></el-input>
            </td>
          </tr>
          <tr>
            <td class="invoice-show-table-td-info1">
              <span>*</span>社会统一信用编码
            </td>
            <td class="invoice-show-table-td-input2">
              <el-input
                v-model="taxerID"
                placeholder="请输入纳税人识别号"
                maxlength="30"
                class="person-add-input"
              ></el-input>
            </td>
            <td class="invoice-show-table-td-info2">
              <span>*</span>联系人
            </td>
            <td class="invoice-show-table-td-input3">
              <el-input
                v-model="contactPerson"
                placeholder="请输入联系人"
                maxlength="6"
                class="person-add-input"
              ></el-input>
            </td>
          </tr>
          <tr>
            <td class="invoice-show-table-td-info1">
              <span>*</span>公司开户行
            </td>
            <td class="invoice-show-table-td-input2">
              <el-input
                v-model="bank"
                placeholder="请输入公司开户行"
                maxlength="20"
                class="person-add-input"
              ></el-input>
            </td>
            <td class="invoice-show-table-td-info2">
              <span>*</span>联系电话
            </td>
            <td class="invoice-show-table-td-input3">
              <el-input
                v-model="phone"
                placeholder="请输入联系电话"
                maxlength="11"
                class="person-add-input"
              ></el-input>
            </td>
          </tr>
          <tr>
            <td class="invoice-show-table-td-info1">
              <span>*</span>公司账号
            </td>
            <td colspan="3" class="invoice-show-table-td-input1">
              <el-input
                v-model="account"
                placeholder="请输入公司账号"
                maxlength="20"
                class="person-add-input"
              ></el-input>
            </td>
          </tr>
        </table>
        <div class="info-edit">
          <el-button type="primary" @click="saveNoInvoice" class="save_new_invoice">保存</el-button>
          <el-button type="primary" plain @click="cancelEdit" class="cancel_new_invoice">放弃</el-button>
        </div>
      </div>
    </div>

    <div v-if="InvoiceDetail" class="table-body">
      <table border="1" cellspacing="0">
        <tr>
          <th colspan="4" class="invoice-show-table-th">开票信息表</th>
        </tr>
        <tr>
          <td class="invoice-show-table-td-info1">公司名称</td>
          <td colspan="3" class="invoice-show-table-td-input1">{{companyName}}</td>
        </tr>
        <tr>
          <td class="invoice-show-table-td-info1">公司地址</td>
          <td colspan="3" class="invoice-show-table-td-input1">{{companyAddress}}</td>
        </tr>
        <tr>
          <td class="invoice-show-table-td-info1">社会统一信用编码</td>
          <td class="invoice-show-table-td-input2">{{taxerID}}</td>
          <td class="invoice-show-table-td-info2">联系人</td>
          <td class="invoice-show-table-td-input3">{{contactPerson}}</td>
        </tr>
        <tr>
          <td class="invoice-show-table-td-info1">公司开户行</td>
          <td class="invoice-show-table-td-input2">{{bank}}</td>
          <td class="invoice-show-table-td-info2">联系电话</td>
          <td class="invoice-show-table-td-input3">{{phone}}</td>
        </tr>
        <tr>
          <td class="invoice-show-table-td-info1">公司账号</td>
          <td colspan="3" class="invoice-show-table-td-input1">{{account}}</td>
        </tr>
      </table>
      <div class="info-save">
        <el-button type="primary" @click="showEditInvoice" class="save_new_invoice">编辑</el-button>
        <el-button type="primary" plain @click="cancelEdit" class="cancel_new_invoice">取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalCenterInvoiceShow",
  data() {
    return {
      invoiceList: [],
      showInvoice: true,
      addNewInvoice: false,
      InvoiceDetail: false,
      companyName: "",
      companyAddress: "",
      taxerID: "",
      contactPerson: "",
      bank: "",
      phone: "",
      account: "",
      deleteCheck: false,
      deleteInvoiceId: "",
      ifEditInvoice: false,
      editInvoiceId: ""
    };
  },
  methods: {
    showInvoiceDetail(invoiceId) {
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/invoice_getInvoiceById.do?invoiceid=${invoiceId}`
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

          this.showInvoice = false;
          this.addNewInvoice = false;
          this.InvoiceDetail = true;
          this.editInvoiceId = invoiceId;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    showEditInvoice() {
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/invoice_getInvoiceById.do?invoiceid=${
          this.editInvoiceId
        }`
      })
        .then(res => {
          this.companyName = res.data.data.company;
          this.companyAddress = res.data.data.address;
          this.taxerID = res.data.data.taxpayerno;
          this.contactPerson = res.data.data.person;
          this.bank = res.data.data.bank;
          this.phone = res.data.data.mobilephone;
          this.account = res.data.data.account;

          this.showInvoice = false;
          this.addNewInvoice = true;
          this.ifEditInvoice = true;
          this.InvoiceDetail = false;
          this.editInvoiceId = invoiceId;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    deleteCheckFun(invoiceId) {
      this.deleteCheck = true;
      this.deleteInvoiceId = invoiceId;
    },
    saveNoInvoice() {
      var userInfo = JSON.parse(sessionStorage.getItem("user"));
      if (userInfo) {
        var userid = userInfo.userid;
      }
      if (this.companyName == "") {
        this.$message({
          message: "公司名称不能为空！",
          type: "error",
          center: true
        });
      } else if (this.companyAddress == "") {
        this.$message({
          message: "公司地址不能为空！",
          type: "error",
          center: true
        });
      } else if (this.taxerID == "") {
        this.$message({
          message: "纳税人识别号不能为空！",
          type: "error",
          center: true
        });
      } else if (this.taxerID.match("[0-9A-Z]{18}") != this.taxerID) {
        this.$message({
          message: "请输入正确的纳税人识别号！",
          type: "error",
          center: true
        });
      } else if (this.contactPerson == "") {
        this.$message({
          message: "联系人不能为空！",
          type: "error",
          center: true
        });
      } else if (this.bank == "") {
        this.$message({
          message: "公司开户行不能为空！",
          type: "error",
          center: true
        });
      } else if (this.phone == "") {
        this.$message({
          message: "联系电话不能为空！",
          type: "error",
          center: true
        });
      } else if (this.phone.match("1[34578][0-9]{9}") != this.phone) {
        this.$message({
          message: "请输入正确的联系电话！",
          type: "error",
          center: true
        });
      } else if (this.account == "") {
        this.$message({
          message: "公司账号不能为空！",
          type: "error",
          center: true
        });
      } else if (this.account.match("^[0-9]{16,19}") != this.account) {
        this.$message({
          message: "请输入正确的公司账号！",
          type: "error",
          center: true
        });
      } else if (!this.ifEditInvoice) {
        this.$ajax({
          method: "post",
          url: `${
            this.baseURL
          }/zjsxpt/invoice_saveInvoice.do?invoice={"company":
            "${this.companyName}",address:"${
            this.companyAddress
          }",taxpayerno:"${this.taxerID}",person:"${this.contactPerson}",
            bank:"${this.bank}",mobilephone:"${this.phone}",account:"${
            this.account
          }"}&userid=${userid}`
        })
          .then(res => {
            this.$message({
              message: "添加成功！",
              type: "success",
              center: true
            });
            this.showInvoice = true;
            this.addNewInvoice = false;
            this.InvoiceDetail = false;
            this.companyName = "";
            this.companyAddress = "";
            this.taxerID = "";
            this.contactPerson = "";
            this.bank = "";
            this.phone = "";
            this.account = "";

            this.getInvoiceList();
          })
          .catch(function(err) {
            console.log(err);
          });
      } else if (this.ifEditInvoice) {
        this.$ajax({
          method: "post",
          url: `${
            this.baseURL
          }/zjsxpt/invoice_updateInvoice.do?invoice={invoiceid:"${
            this.editInvoiceId
          }",company:
            "${this.companyName}",address:"${
            this.companyAddress
          }",taxpayerno:"${this.taxerID}",person:"${this.contactPerson}",
            bank:"${this.bank}",mobilephone:"${this.phone}",account:"${
            this.account
          }"}&userid=${userid}`
        })
          .then(res => {
            this.$message({
              message: "修改成功！",
              type: "success",
              center: true
            });
            this.showInvoice = true;
            this.addNewInvoice = false;
            this.InvoiceDetail = false;
            this.companyName = "";
            this.companyAddress = "";
            this.taxerID = "";
            this.contactPerson = "";
            this.bank = "";
            this.phone = "";
            this.account = "";

            this.ifEditInvoice = false;
            this.getInvoiceList();
          })
          .catch(function(err) {
            console.log(err);
          });
      }
    },
    getInvoiceList() {
      var userInfo = JSON.parse(sessionStorage.getItem("user"));
      if (userInfo) {
        var userid = userInfo.userid;
      }
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/invoice_findInvoiceListByUserid.do?userid=${userid}`
      })
        .then(res => {
          if (res.data.data != "false") {
            console.log(res.data.data);
            this.invoiceList = res.data.data;
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    addInvoice() {
      this.showInvoice = false;
      this.addNewInvoice = true;
      this.InvoiceDetail = false;
    },
    cancelEdit() {
      this.showInvoice = true;
      this.addNewInvoice = false;
      this.InvoiceDetail = false;
      this.companyName = "";
      this.companyAddress = "";
      this.taxerID = "";
      this.contactPerson = "";
      this.bank = "";
      this.phone = "";
      this.account = "";

      this.ifEditInvoice = false;
    },
    deleteInvoice(invoiceid) {
      this.$ajax({
        method: "post",
        url: `${
          this.baseURL
        }/zjsxpt/invoice_deleteInvoiceById.do?invoiceid=${invoiceid}`
      })
        .then(res => {
          this.$message({
            message: "删除成功！",
            type: "success",
            center: true
          });
          console.log(res.data);
          this.getInvoiceList();
          this.deleteCheck = false;
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getInvoiceList();
  }
};
</script>

<style scoped>
#PersonalCenterInvoiceShow {
  width: 730px;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fffffd;
  border: 1px solid #e7e7e7;
  margin: 0px 0px 0px 20px;
  padding: 20px;
}
table {
  text-align: center;
  margin: 0px auto;
}
.invoice-show-table-th {
  height: 60px;
}
.invoice-show-table-td-info1 {
  height: 40px;
  width: 150px;
}
.invoice-show-table-td-info2 {
  height: 40px;
  width: 100px;
}
.invoice-show-table-td-input2 {
  width: 250px;
}
.invoice-show-table-td-input3 {
  width: 150px;
  word-break: break-all;
}
span {
  color: red;
}
.info-edit,
.info-save {
  margin: 20px 0px 0px 0px;
  text-align: center;
}
.table-body {
  margin: 20px 0px 0px 0px;
}
.el-button {
  padding: 12px 30px;
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
.invoice-show-table-td-input1 {
  text-overflow: ellipsis;
}
.invoice_body {
  width: 310px;
  height: 146px;
  margin: 20px auto 0px auto;
  border-radius: 8px;
  box-shadow: 0px 0px 12px #c7c5c5;
  cursor: pointer;
}
.invoice_body:hover {
  box-shadow: 0px 0px 12px #807e7e;
}
.invoice_body_add {
  width: 310px;
  height: 146px;
  margin: 20px auto 0px auto;
  border-radius: 8px;
  border: 1px dashed #c7c5c5;
  cursor: pointer;
}
.invoice_body_add:hover {
  box-shadow: 0px 0px 12px #807e7e;
}
.pupiao {
  background: -webkit-linear-gradient(to right, #67c23a, rgb(67, 197, 2));
  background: -o-linear-gradient(to right, #67c23a, rgb(67, 197, 2));
  background: -moz-linear-gradient(to right, #67c23a, rgb(67, 197, 2));
  background: linear-gradient(
    to right,
    rgba(36, 46, 104, 0.8),
    rgba(36, 46, 104, 0.9)
  );
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
}
.invoice_type {
  position: absolute;
  margin: 110px 0px 0px 60px;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
}
.invoice_account {
  position: absolute;
  margin: 70px 0px 0px 60px;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
}
.el-icon-delete {
  color: #fff;
  font-size: 14px;
  margin: 0px 0px 0px 25px;
}
.el-icon-delete:hover {
  color: #fff;
  cursor: pointer;
  font-weight: bold;
}
.invoice_delete {
  position: absolute;
  margin: 115px 0px 0px 260px;
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
.add_new_invoice {
  text-align: center;
  height: 146px;
  line-height: 146px;
}
.el-icon-plus {
  color: #c7c5c5;
  font-size: 26px;
}
.invoice_body_add:hover .el-icon-plus {
  color: #807e7e;
}
.save_new_invoice {
  padding: 12px 22px;
  margin: 0px 80px 0px 0px;
}
.cancel_new_invoice {
  padding: 12px 22px;
}
.deleteCheck_dialog {
  text-align: center;
}
.check_contnt {
  margin: 0px 0px 25px 0px;
}
</style>