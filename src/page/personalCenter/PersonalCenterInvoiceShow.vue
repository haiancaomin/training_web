<template>
  <div id="PersonalCenterInvoiceShow">
    <div class="crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">客户中心</el-breadcrumb-item>
        <el-breadcrumb-item>发票信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div v-if="ifEdit" class="table-body">
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
              maxlength="5"
              class="person-add-input"
            ></el-input>
          </td>
        </tr>
        <tr>
          <td class="invoice-show-table-td-info1">
            <span>*</span>公司开户行
          </td>
          <td class="invoice-show-table-td-input2">
            <el-input v-model="bank" placeholder="请输入公司开户行" maxlength="20" class="person-add-input"></el-input>
          </td>
          <td class="invoice-show-table-td-info2">
            <span>*</span>联系电话
          </td>
          <td class="invoice-show-table-td-input3">
            <el-input v-model="phone" placeholder="请输入联系电话" maxlength="11" class="person-add-input"></el-input>
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
        <tr>
          <td class="invoice-show-table-td-info3">可开具的发票内容</td>
          <td colspan="3" class="invoice-show-table-td-input1">
            <el-input
              v-model="otherContent"
              maxlength="50"
              class="person-add-input"
              id="otherContent"
            ></el-input>
          </td>
        </tr>
      </table>
      <div class="info-edit">
        <el-button type="success" @click="saveHaveInvoice" v-if="haveInvoice">点击保存</el-button>
        <el-button type="success" @click="saveNoInvoice" v-if="!haveInvoice">点击保存</el-button>
      </div>
    </div>
    <div v-if="!ifEdit" class="table-body">
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
        <tr>
          <td class="invoice-show-table-td-info3">可开具的发票内容</td>
          <td colspan="3" class="invoice-show-table-td-input1">{{otherContent}}</td>
        </tr>
      </table>
      <div class="info-save">
        <el-button type="primary" @click="editInvoice">点击编辑</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalCenterInvoiceShow",
  data() {
    return {
      ifEdit: false,
      focusBoolean: true,
      companyName: "",
      companyAddress: "",
      taxerID: "",
      contactPerson: "",
      bank: "",
      phone: "",
      account: "",
      otherContent: "",
      invoiceid: "",
      haveEdit: false,
      haveInvoice: false
    };
  },
  methods: {
    editInvoice() {
      this.ifEdit = true;
      if (
        this.companyName == "" &&
        this.companyAddress == "" &&
        this.taxerID == "" &&
        this.contactPerson == "" &&
        this.bank == "" &&
        this.phone == "" &&
        this.account == "" &&
        this.otherContent == ""
      ) {
        this.haveEdit = false;
      } else {
        this.haveEdit = true;
      }
    },
    saveHaveInvoice() {
      var userInfo = JSON.parse(sessionStorage.getItem("user"));
      if (userInfo) {
        var userid = userInfo.userid;
      }
      if (this.companyName == "") {
        this.$message({
          message: "公司名称不能为空！",
          type: 'error',
          center: true
        });
      } else if (this.companyAddress == "") {
        this.$message({
          message: "公司地址不能为空！",
          type: 'error',
          center: true
        });
      } else if (this.taxerID == "") {
        this.$message({
          message: "纳税人识别号不能为空！",
          type: 'error',
          center: true
        });
      } else if (
        this.taxerID.length != 15 &&
        this.taxerID.length != 17 &&
        this.taxerID.length != 18 &&
        this.taxerID.length != 20
      ) {
        this.$message({
          message: "纳税人识别号位数不正确！",
          type: 'error',
          center: true
        });
      } else if (this.contactPerson == "") {
        this.$message({
          message: "联系人不能为空！",
          type: 'error',
          center: true
        });
      } else if (this.bank == "") {
        this.$message({
          message: "公司开户行不能为空！",
          type: 'error',
          center: true
        });
      } else if (this.phone == "") {
        this.$message({
          message: "联系电话不能为空！",
          type: 'error',
          center: true
        });
      } else if (this.account == "") {
        this.$message({
          message: "公司账号不能为空！",
          type: 'error',
          center: true
        });
      } else {
        this.$ajax({
          method: "post",
          url: `${
            this.baseURL
          }/zjsxpt/invoice_updateInvoice.do?invoice={invoiceid:"${
            this.invoiceid
          }",company:
            "${this.companyName}",address:"${
            this.companyAddress
          }",taxpayerno:"${this.taxerID}",person:"${this.contactPerson}",
            bank:"${this.bank}",mobilephone:"${this.phone}",account:"${
            this.account
          }",content:"${this.otherContent}"}&userid=${userid}`
        })
          .then(res => {
            this.$message({
              message: "修改成功！",
              type: 'success',
              center: true
            });
            this.ifEdit = false;
          })
          .catch(function(err) {
            console.log(err);
          });
      }
    },
    saveNoInvoice() {
      var userInfo = JSON.parse(sessionStorage.getItem("user"));
      if (userInfo) {
        var userid = userInfo.userid;
      }
      if (this.companyName == "") {
        this.$message({
          message: "公司名称不能为空！",
          type: 'error',
          center: true
        });
      } else if (this.companyAddress == "") {
        this.$message({
          message: "公司地址不能为空！",
          type: 'error',
          center: true
        });
      } else if (this.taxerID == "") {
        this.$message({
          message: "纳税人识别号不能为空！",
          type: 'error',
          center: true
        });
      } else if (this.contactPerson == "") {
        this.$message({
          message: "联系人不能为空！",
          type: 'error',
          center: true
        });
      } else if (this.bank == "") {
        this.$message({
          message: "公司开户行不能为空！",
          type: 'error',
          center: true
        });
      } else if (this.phone == "") {
        this.$message({
          message: "联系电话不能为空！",
          type: 'error',
          center: true
        });
      } else if (this.account == "") {
        this.$message({
          message: "公司账号不能为空！",
          type: 'error',
          center: true
        });
      } else {
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
          }",content:"${this.otherContent}"}&userid=${userid}`
        })
          .then(res => {
            this.$message({
              message: "添加成功！",
              type: 'success',
              center: true
            });
            this.ifEdit = false;
          })
          .catch(function(err) {
            console.log(err);
          });
      }
    }
  },
  mounted() {
    var userInfo = JSON.parse(sessionStorage.getItem("user"));
    if (userInfo) {
      var userid = userInfo.userid;
    }
    this.$ajax({
      method: "post",
      url: `${this.baseURL}//zjsxpt/invoice_getInvoiceById.do?userid=${userid}`
    })
      .then(res => {
        if (res.data.data == "false") {
          this.haveInvoice = false;
        } else {
          this.haveInvoice = true;
          this.companyName = res.data.data.company;
          this.companyAddress = res.data.data.address;
          this.taxerID = res.data.data.taxpayerno;
          this.contactPerson = res.data.data.person;
          this.bank = res.data.data.bank;
          this.phone = res.data.data.mobilephone;
          this.account = res.data.data.account;
          this.otherContent = res.data.data.content;
          this.invoiceid = res.data.data.invoiceid;
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  updated: function() {
    if (this.ifEdit && this.focusBoolean) {
      this.focusBoolean = false;
      document.getElementById("companyNameInputFocus").focus();
    }
    if (!this.ifEdit) {
      this.focusBoolean = true;
    }
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
.invoice-show-table-td-info3 {
  height: 80px;
}
.invoice-show-table-td-input2 {
  width: 250px;
}
.invoice-show-table-td-input3 {
  width: 150px;
  word-break: break-all;
}
input {
  width: 100%;
  padding: 0px 10px;
  text-align: center;
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
</style>
<style>
#otherContent {
  height: 80px;
}
</style>


