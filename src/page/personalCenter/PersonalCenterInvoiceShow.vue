<template>
  <div id="PersonalCenterInvoiceShow">
    <div v-if="ifEdit" class="table-body">
    <table border="1" cellspacing="0" >
      <tr>
        <th colspan="4" class="invoice-show-table-th">开票信息表</th>
      </tr>
      <tr>
        <td class="invoice-show-table-td-info1"><span>*</span>公司名称</td>
        <td colspan="3" class="invoice-show-table-td-input1"><input type="text" maxlength="30"></td>
      </tr>
      <tr>
        <td class="invoice-show-table-td-info1"><span>*</span>公司地址</td>
        <td colspan="3" class="invoice-show-table-td-input1"><input type="text" maxlength="30"></td>
      </tr>
      <tr>
        <td class="invoice-show-table-td-info1"><span>*</span>纳税人识别号</td>
        <td class="invoice-show-table-td-input2"><input type="text" maxlength="35"></td>
        <td class="invoice-show-table-td-info2"><span>*</span>联系人</td>
        <td class="invoice-show-table-td-input3"><input type="text" maxlength="10"></td>
      </tr>
      <tr>
        <td class="invoice-show-table-td-info1"><span>*</span>公司开户行</td>
        <td class="invoice-show-table-td-input2"><input type="text" maxlength="20"></td>
        <td class="invoice-show-table-td-info2"><span>*</span>联系电话</td>
        <td class="invoice-show-table-td-input3"><input type="text" maxlength="11"></td>
      </tr>
      <tr>
        <td class="invoice-show-table-td-info1"><span>*</span>公司账号</td>
        <td colspan="3" class="invoice-show-table-td-input1"><input type="text" maxlength="20"></td>
      </tr>
      <tr>
        <td class="invoice-show-table-td-info3">可开具的发票内容</td>
        <td colspan="3" class="invoice-show-table-td-input1"><input type="text" maxlength="35"></td>
      </tr>
    </table>
    <div class="info-edit">
    <el-button type="success" @click="toShow">保存</el-button>
    </div>
    </div>
    <div v-if="!ifEdit" class="table-body">
    <table border="1" cellspacing="0" >
      <tr>
        <th colspan="4" class="invoice-show-table-th">开票信息表</th>
      </tr>
      <tr>
        <td class="invoice-show-table-td-info1">公司名称</td>
        <td colspan="3" class="invoice-show-table-td-input1">某某公司</td>
      </tr>
      <tr>
        <td class="invoice-show-table-td-info1">公司地址</td>
        <td colspan="3" class="invoice-show-table-td-input1">江苏省南通市崇川区街道门牌号</td>
      </tr>
      <tr>
        <td class="invoice-show-table-td-info1">纳税人识别号</td>
        <td class="invoice-show-table-td-input2">123123123</td>
        <td class="invoice-show-table-td-info2">联系人</td>
        <td class="invoice-show-table-td-input3">老王</td>
      </tr>
      <tr>
        <td class="invoice-show-table-td-info1">公司开户行</td>
        <td class="invoice-show-table-td-input2">建设银行</td>
        <td class="invoice-show-table-td-info2">联系电话</td>
        <td class="invoice-show-table-td-input3">2312312312313</td>
      </tr>
      <tr>
        <td class="invoice-show-table-td-info1">公司账号</td>
        <td colspan="3" class="invoice-show-table-td-input1">123123123123123</td>
      </tr>
      <tr>
        <td class="invoice-show-table-td-info3">可开具的发票内容</td>
        <td colspan="3" class="invoice-show-table-td-input1"></td>
      </tr>
    </table>
    <div class="info-save">
    <el-button type="primary" @click="toEdit">编辑</el-button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalCenterInvoiceShow",
  data() {
    return {
        ifEdit: false
    };
  },
  methods: {
      toEdit() {
         this.ifEdit = true; 
      },
      toShow() {
         this.ifEdit = false; 
      }
  }
};
</script>

<style scoped>
#PersonalCenterInvoiceShow {
     width: 830px;
     
  box-shadow: 0 0 2px #c7c5c5;
  background: #fffffd;
  border: 1px solid #e7e7e7;
  margin: 0px 0px 0px 20px;
  padding: 0px 0px 20px 0px;
}
table {
    text-align: center;
    margin: 0px auto;;
}
.invoice-show-table-th {
    height: 60px;
}
.invoice-show-table-td-info1{
    height: 40px;
    width: 150px;
}
.invoice-show-table-td-info2{
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
    Word-break: break-all;
}
input {
    width:100%;
    padding:0px 10px;
    text-align: center;
    
}
span {
    color:red;
    
}
.info-edit, .info-save {
    margin:20px 0px 0px 0px;
    text-align: center;
}
.table-body {
    margin: 40px 0px 0px 0px;
}
.el-button {
    padding: 12px 30px;
}
</style>


