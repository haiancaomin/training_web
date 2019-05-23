<template>
  <div id="PersonalCenterOrderDetail">
      <el-dialog title="报名人员信息" :visible.sync="showTable" width="500px" center>
          <el-table :data="tableData" border max-height="400" style="width: 100%">
            <el-table-column prop="empname" label="姓名" width="100"></el-table-column>
            <el-table-column prop="cardno" label="身份证"></el-table-column>
          </el-table>
          <el-button type="primary" class="sign-submit" @click="showTable=false">确认</el-button>
        </el-dialog>
    <div class="meal-body">
          <h1 class="file-title">订单详情</h1>

            <el-collapse accordion  v-for="orderItem in orderDetail.dlist"
                    :key="orderItem.detailid" v-model="activeNames">
              <el-collapse-item id="meal-body-collapse" name="1">
                <template slot="title">
                  <div
                    class="pay-meal-body"
                   
                  >
                    <div class="pay-meal-body">
                      <div class="meal_img f-fl">
                        <img :src="orderItem.picurl" alt>
                      </div>
                      <div class="meal_body f-fl">
                        <p class="title">
                          <span>{{orderItem.coursename}}（{{orderItem.menuname}}）</span>
                        </p>

                        <div class="promotion">
                          报名人数：
                          <span>{{orderItem.personcount}}</span>
                        </div>
                      </div>
                      <div class="meal_price">￥{{orderItem.money}}</div>
                    </div>
                  </div>
                </template>
                <div class="more_info">
                  <div class="more_info_up">
                <el-col :span="4">
                <div>预计考试时间</div>
                </el-col>
                <el-col :span="4">
                <div>预计开课时间</div>
                </el-col>
                <el-col :span="4">
                <div>培训时长</div>
                </el-col>
                <el-col :span="6">
                <div>考试地点</div>
                </el-col>
                <el-col :span="2">
                <div>单价</div>
                </el-col>
                <el-col :span="4">
                <div>查看人员</div>
                </el-col>
                  </div>

                 <div class="more_info_down">
                <el-col :span="4">
                <div class="down_cell">{{orderItem.examtime}}</div>
                </el-col>
                <el-col :span="4">
                <div class="down_cell">{{orderItem.traintime}}</div>
                </el-col>
                <el-col :span="4">
                <div class="down_cell">{{orderItem.coursehour}}</div>
                </el-col>
                <el-col :span="6">
                <div class="down_cell">
                  <el-tooltip content="Top center" placement="bottom">
                            <div slot="content">{{orderItem.examaddress}}</div>
                            <h3>{{orderItem.examaddress}}</h3>
                          </el-tooltip>
                </div>
                </el-col>
                <el-col :span="2">
                <div class="down_cell">{{orderItem.price}}</div>
                </el-col>
                <el-col :span="4">
                <div class="down_cell">
                  <el-button type="primary" @click="checkEmp(orderItem.employeeids)" class="check_emp_btn">查看</el-button>
                </div>
                </el-col> 
                 </div>
                </div>

              </el-collapse-item>
            </el-collapse>

            <div class="operation_back">
              <a href="javascript:history.go(-1)"><el-button type="primary"  class="">返回</el-button></a>
            </div>
          </div>
  </div>
</template>

<script>
export default {
  name: "PersonalCenterOrderDetail",
  data() {
    return {
      activeNames: ['1'],
        showTable:false,
        tableData: [],
      orderDetail: []
    };
  },
  props:['orderid'],
  methods: {
    checkEmp(empList) {
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_getEmployeeByEmpIds.do?employeeids=${empList}`
      })
        .then(res => {
          this.tableData = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
      this.showTable = true;
    },
  },
  mounted() {
     
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/course_findOrderInfoByOrderid.do?orderid=${this.orderid}`
      })
        .then(res => {
          this.orderDetail = res.data.data;
          console.log(this.orderDetail);
        })
        .catch(function(err) {
          console.log(err);
        });
  
  }
};
</script>

<style scoped>
#PersonalCenterOrderDetail {
   width: 1000px;
  margin: 0px auto;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fff;
  border: 1px solid #e7e7e7;
  padding: 0px 30px 30px 30px;
  margin-top:80px;
}
.file-title {
  font-size: 18px;
  line-height: 40px;
  border: 1px solid #e4e7ed;
  background: #e4e7ed;
  padding: 0 15px;
  border-radius: 3px;
  border-left: 2px solid #409eff;
}
.pay-online-body {
  width: 900px;
  margin: 0px 20px 0px 20px;
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
.pay-weixin {
  margin: 0px 0px 15px 0px;
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
.choose-bank {
  border-bottom: solid 1px #eee;
  width: 860px;
  margin: 0px -40px 0px 0px;
  font-size: 14px;
  color: #E6A23C;
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
  height: 108px;
  
  margin:0px -20px 0px 0px;
  width:100%
}
.f-fl {
  float: left;
}
.pay-meal-body img {
  width: 120px;
  height: 68px;
  object-fit: cover;
  margin:-3px 0px 0px 0px;
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
  margin:21px 0px 0px 0px;
}
.meal_body .promotion {
  line-height:20px;
  margin:30px 0px 0px 0px;
  color: #ff6600;
 
 
}
.meal_price {
  font-weight: 600;
  font-size: 14px;
  color: #333;
  float: right;
  margin:0px 40px 0px 0px;
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
.payment-sub-body2 {
  width: 860px;
  height: 125px;
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
.agreement-con2 {
  padding: 65px 0px 0px 0px;
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
.pay-price-btn_btn2 {
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
  margin: 5px 0px;
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
.sign-submit {
  margin: 30px 0px 0px 190px;
}
.more_info {
  text-align: center; 
  padding:0px 0px 20px 0px;
}
.more_info_up {
  margin:0px 0px 0px 0px;
  padding:10px 0px 10px 0px;
  height:42px;
  border-bottom: 1px solid #e4e4e4;
  border-top: 1px solid #e4e4e4;
  background: #eee;
}
.more_info_down{
  height:41px;
  padding:5px 0px 0px 0px;
  background: #f8f8f8;
  border-bottom: 1px solid #e4e4e4;
}
.check_emp_btn{
  padding:0px;
  width:50px;
  height:31px;
  font-size:13px;
}
.down_cell {
  height:31px;
  line-height:31px;
    overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size:11px;
}
.check_operation {
  text-align: center
  }
.operation_back {
  margin:30px 0px 0px 0px;
  text-align: center;
}
.operation_back .el-button{
  width:90px;
}
</style>
<style>
#meal-body-collapse .el-collapse-item__header {
  height: 108px;
  line-height: 108px;
}
#meal-body-collapse .el-collapse-item__content {
  padding:0px;
}
.cell {
    text-align: center;
}
</style>

