<template>
  <div id="Accounts">
    <div>
      <div class="order-info-title">
        <el-col :span="8">
          <div class="order-meal-title1">
            <span>课程</span>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="order-meal-title5">
            <span>套餐</span>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="order-meal-title2">
            <span>预计开课时间</span>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="order-meal-title3">
            <span>培训时长</span>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="order-meal-title4">
            <span>预计考试时间</span>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="order-meal-title5">
            <span>考试地点</span>
          </div>
        </el-col>

        <el-col :span="2">
          <div class="order-meal-title6">
            <span>单价</span>
          </div>
        </el-col>
        <el-col :span="1">
          <div class="order-meal-title7">
            <span>删除</span>
          </div>
        </el-col>
      </div>

      <div class="order-group" v-if="orderShow1">
        <div class="order-info-body">
          <el-col :span="8">
            <div class="order-meal-info">
              <el-col :span="8">
                <div class="order-img-meal">
                  <img :src="picurl1" class="order-img" alt>
                </div>
              </el-col>
              <el-col :span="16">
                <div class="order-meal-name">
                  <span>{{coursename1}}</span>
                </div>
                <div class="order-meal-person-num" v-if="!personalFlag">
                  报名人数：
                  <span>{{empSize1}}</span>
                  <el-button class="emp-edit" type="danger" @click="scanEmp1">编辑</el-button>
                </div>
              </el-col>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="order-meal-property-outbody">
              <div class="order-meal-property">
                <span>{{menuname1}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="order-meal-property-outbody">
              <div class="order-meal-property">
                <span>{{trainDate1}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="order-meal-property-outbody">
              <div class="order-meal-property">
                <span>{{coursehour1}}小时</span>
              </div>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="order-meal-property-outbody">
              <div class="order-meal-property">
                <span>{{examtime1}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="order-meal-property-outbody">
              <div class="order-meal-property">
                <span>{{examaddress1}}</span>
              </div>
            </div>
          </el-col>

          <el-col :span="2">
            <div class="order-meal-property-outbody">
              <div class="order-meal-property">
                <span>{{price1}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="order-meal-property-outbody">
              <div class="order-meal-property">
                <span class="el-icon-delete" @click="deleteOrder1"></span>
              </div>
            </div>
          </el-col>
        </div>
        <div class="order-subtotal">
          <span v-if="!personalFlag">小计：¥{{subtotal1}}</span>
          <span v-else>小计：¥{{price1}}</span>
        </div>

        <el-dialog
          title="报名人员信息"
          :visible.sync="showPersonInfo1"
          width="600px"
          center
          @open="chooseAll1"
        >
          <el-table
            :data="tableData1"
            border
            max-height="400px"
            ref="table1"
            style="width: 100%"
            @selection-change="handleSelectionChange1"
          >
            <el-table-column type="selection" width="35"></el-table-column>
            <el-table-column prop="empname" label="姓名" width="200"></el-table-column>
            <el-table-column prop="cardno" label="身份证"></el-table-column>
          </el-table>
          <div class="operation-zone">
            <el-button type="primary" class="sign-submit" @click="showPersonInfofun1">确定</el-button>
            <el-button type="primary" class="sign-submit" @click="ReChoose1">重选人员</el-button>
          </div>
        </el-dialog>

        <el-dialog title="请勾选选择该套餐的人员" :visible.sync="reChoose1" width="600px" center>
          <el-table
            ref="reTable1"
            :data="tableDataRe"
            max-height="400px"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChangeRe1"
          >
            <el-table-column type="selection" width="100"></el-table-column>
            <el-table-column prop="empname" label="姓名" width="150"></el-table-column>
            <el-table-column prop="cardno" label="身份证号" show-overflow-tooltip></el-table-column>
          </el-table>
          <div class="operation-zone">
            <el-button type="primary" class="sign-submit" @click="reChoosefunction1">确定</el-button>
            <el-button type="primary" class="sign-submit" @click="reChoose1 = false">取消</el-button>
          </div>
        </el-dialog>
      </div>

      <div class="order-group" v-if="orderShow2">
        <div class="order-info-body">
          <el-col :span="8">
            <div class="order-meal-info">
              <el-col :span="8">
                <div class="order-img-meal">
                  <img :src="picurl2" class="order-img" alt>
                </div>
              </el-col>
              <el-col :span="16">
                <div class="order-meal-name">
                  <span>{{coursename2}}</span>
                </div>
                <div class="order-meal-person-num">
                  报名人数：
                  <span>{{empSize2}}</span>
                  <el-button class="emp-edit" type="danger" @click="scanEmp2">编辑</el-button>
                </div>
              </el-col>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="order-meal-property-outbody">
              <div class="order-meal-property">
                <span>{{menuname2}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="order-meal-property-outbody">
              <div class="order-meal-property">
                <span>{{trainDate2}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="order-meal-property-outbody">
              <div class="order-meal-property">
                <span>{{coursehour2}}小时</span>
              </div>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="order-meal-property-outbody">
              <div class="order-meal-property">
                <span>{{examtime2}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="order-meal-property-outbody">
              <div class="order-meal-property">
                <span>{{examaddress2}}</span>
              </div>
            </div>
          </el-col>

          <el-col :span="2">
            <div class="order-meal-property-outbody">
              <div class="order-meal-property">
                <span>{{price2}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="order-meal-property-outbody">
              <div class="order-meal-property">
                <span class="el-icon-delete" @click="deleteOrder2"></span>
              </div>
            </div>
          </el-col>
        </div>
        <div class="order-subtotal">
          <span>小计：¥{{subtotal2}}</span>
        </div>

        <el-dialog
          title="报名人员信息"
          :visible.sync="showPersonInfo2"
          width="600px"
          center
          @open="chooseAll2"
        >
          <el-table
            :data="tableData2"
            border
            max-height="400px"
            ref="table2"
            style="width: 100%"
            @selection-change="handleSelectionChange2"
          >
            <el-table-column type="selection" width="35"></el-table-column>
            <el-table-column prop="empname" label="姓名" width="200"></el-table-column>
            <el-table-column prop="cardno" label="身份证"></el-table-column>
          </el-table>
          <div class="operation-zone">
            <el-button type="primary" class="sign-submit" @click="showPersonInfofun2">确定</el-button>
            <el-button type="primary" class="sign-submit" @click="ReChoose2">重选人员</el-button>
          </div>
        </el-dialog>

        <el-dialog title="请勾选选择该套餐的人员" :visible.sync="reChoose2" width="600px" center>
          <el-table
            ref="reTable2"
            :data="tableDataRe"
            max-height="400px"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChangeRe2"
          >
            <el-table-column type="selection" width="100"></el-table-column>
            <el-table-column prop="empname" label="姓名" width="150"></el-table-column>
            <el-table-column prop="cardno" label="身份证号" show-overflow-tooltip></el-table-column>
          </el-table>
          <div class="operation-zone">
            <el-button type="primary" class="sign-submit" @click="reChoosefunction2">确定</el-button>
            <el-button type="primary" class="sign-submit" @click="reChoose2 = false">取消</el-button>
          </div>
        </el-dialog>
      </div>

      <div class="order-group" v-if="orderShow3">
        <div class="order-info-body">
          <el-col :span="8">
            <div class="order-meal-info">
              <el-col :span="8">
                <div class="order-img-meal">
                  <img :src="picurl3" class="order-img" alt>
                </div>
              </el-col>
              <el-col :span="16">
                <div class="order-meal-name">
                  <span>{{coursename3}}</span>
                </div>
                <div class="order-meal-person-num">
                  报名人数：
                  <span>{{empSize3}}</span>
                  <el-button class="emp-edit" type="danger" @click="scanEmp3">编辑</el-button>
                </div>
              </el-col>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="order-meal-property-outbody">
              <div class="order-meal-property">
                <span>{{menuname3}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="order-meal-property-outbody">
              <div class="order-meal-property">
                <span>{{trainDate3}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="order-meal-property-outbody">
              <div class="order-meal-property">
                <span>{{coursehour3}}小时</span>
              </div>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="order-meal-property-outbody">
              <div class="order-meal-property">
                <span>{{examtime3}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="order-meal-property-outbody">
              <div class="order-meal-property">
                <span>{{examaddress3}}</span>
              </div>
            </div>
          </el-col>

          <el-col :span="2">
            <div class="order-meal-property-outbody">
              <div class="order-meal-property">
                <span>{{price3}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="order-meal-property-outbody">
              <div class="order-meal-property">
                <span class="el-icon-delete" @click="deleteOrder3"></span>
              </div>
            </div>
          </el-col>
        </div>
        <div class="order-subtotal">
          <span>小计：¥{{subtotal3}}</span>
        </div>

        <el-dialog
          title="报名人员信息"
          :visible.sync="showPersonInfo3"
          width="600px"
          center
          @open="chooseAll3"
        >
          <el-table
            :data="tableData3"
            border
            max-height="400px"
            ref="table3"
            style="width: 100%"
            @selection-change="handleSelectionChange3"
          >
            <el-table-column type="selection" width="35"></el-table-column>
            <el-table-column prop="empname" label="姓名" width="200"></el-table-column>
            <el-table-column prop="cardno" label="身份证"></el-table-column>
          </el-table>
          <div class="operation-zone">
            <el-button type="primary" class="sign-submit" @click="showPersonInfofun3">确定</el-button>
            <el-button type="primary" class="sign-submit" @click="ReChoose3">重选人员</el-button>
          </div>
        </el-dialog>

        <el-dialog title="请勾选选择该套餐的人员" :visible.sync="reChoose3" width="600px" center>
          <el-table
            ref="reTable3"
            :data="tableDataRe"
            max-height="400px"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChangeRe3"
          >
            <el-table-column type="selection" width="100"></el-table-column>
            <el-table-column prop="empname" label="姓名" width="150"></el-table-column>
            <el-table-column prop="cardno" label="身份证号" show-overflow-tooltip></el-table-column>
          </el-table>
          <div class="operation-zone">
            <el-button type="primary" class="sign-submit" @click="reChoosefunction3">确定</el-button>
            <el-button type="primary" class="sign-submit" @click="reChoose3 = false">取消</el-button>
          </div>
        </el-dialog>
      </div>

      <div class="order-group" v-if="orderShow4">
        <div class="order-info-body">
          <el-col :span="8">
            <div class="order-meal-info">
              <el-col :span="8">
                <div class="order-img-meal">
                  <img :src="picurl4" class="order-img" alt>
                </div>
              </el-col>
              <el-col :span="16">
                <div class="order-meal-name">
                  <span>{{coursename4}}</span>
                </div>
                <div class="order-meal-person-num">
                  报名人数：
                  <span>{{empSize4}}</span>
                  <el-button class="emp-edit" type="danger" @click="scanEmp4">编辑</el-button>
                </div>
              </el-col>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="order-meal-property-outbody">
              <div class="order-meal-property">
                <span>{{menuname4}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="order-meal-property-outbody">
              <div class="order-meal-property">
                <span>{{trainDate4}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="order-meal-property-outbody">
              <div class="order-meal-property">
                <span>{{coursehour4}}小时</span>
              </div>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="order-meal-property-outbody">
              <div class="order-meal-property">
                <span>{{examtime4}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="order-meal-property-outbody">
              <div class="order-meal-property">
                <span>{{examaddress4}}</span>
              </div>
            </div>
          </el-col>

          <el-col :span="2">
            <div class="order-meal-property-outbody">
              <div class="order-meal-property">
                <span>{{price4}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="order-meal-property-outbody">
              <div class="order-meal-property">
                <span class="el-icon-delete" @click="deleteOrder4"></span>
              </div>
            </div>
          </el-col>
        </div>
        <div class="order-subtotal">
          <span>小计：¥{{subtotal4}}</span>
        </div>

        <el-dialog
          title="报名人员信息"
          :visible.sync="showPersonInfo4"
          width="600px"
          center
          @open="chooseAll4"
        >
          <el-table
            :data="tableData4"
            border
            max-height="400px"
            ref="table4"
            style="width: 100%"
            @selection-change="handleSelectionChange4"
          >
            <el-table-column type="selection" width="35"></el-table-column>
            <el-table-column prop="empname" label="姓名" width="200"></el-table-column>
            <el-table-column prop="cardno" label="身份证"></el-table-column>
          </el-table>
          <div class="operation-zone">
            <el-button type="primary" class="sign-submit" @click="showPersonInfofun4">确定</el-button>
            <el-button type="primary" class="sign-submit" @click="ReChoose4">重选人员</el-button>
          </div>
        </el-dialog>

        <el-dialog title="请勾选选择该套餐的人员" :visible.sync="reChoose4" width="600px" center>
          <el-table
            ref="reTable4"
            :data="tableDataRe"
            max-height="400px"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChangeRe4"
          >
            <el-table-column type="selection" width="100"></el-table-column>
            <el-table-column prop="empname" label="姓名" width="150"></el-table-column>
            <el-table-column prop="cardno" label="身份证号" show-overflow-tooltip></el-table-column>
          </el-table>
          <div class="operation-zone">
            <el-button type="primary" class="sign-submit" @click="reChoosefunction4">确定</el-button>
            <el-button type="primary" class="sign-submit" @click="reChoose4 = false">取消</el-button>
          </div>
        </el-dialog>
      </div>

      <div class="order-total-price">
        <el-col :span="20">
          <div class="total">
            合计：
            <span class="total-price" v-if="!personalFlag">¥ {{totalPrice}}</span>
            <span class="total-price" v-else>¥{{price1}}</span>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="chekout" @click="account">去结算</div>
        </el-col>
      </div>

      <div class="test-info-scan"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderShow1: false,
      orderShow2: false,
      orderShow3: false,
      orderShow4: false,
      clickOnce1: false,
      clickOnce2: false,
      clickOnce3: false,
      clickOnce4: false,
      course1: "",
      course2: "",
      course3: "",
      course4: "",
      coursehour1: "",
      coursehour2: "",
      coursehour3: "",
      coursehour4: "",

      picurl1: "",
      picurl2: "",
      picurl3: "",
      picurl4: "",
      Address1: "",
      Address2: "",
      Address3: "",
      Address4: "",
      time1: "",
      time2: "",
      time3: "",
      time4: "",
      trainDate1: "",
      trainDate2: "",
      trainDate3: "",
      trainDate4: "",
      meal1: "",
      meal2: "",
      meal3: "",
      meal4: "",
      menuname1: "",
      menuname2: "",
      menuname3: "",
      menuname4: "",
      coursename1: "",
      coursename2: "",
      coursename3: "",
      coursename4: "",
      examtime1: "",
      examtime2: "",
      examtime3: "",
      examtime4: "",
      examaddress1: "",
      examaddress2: "",
      examaddress3: "",
      examaddress4: "",
      price1: "",
      price2: "",
      price3: "",
      price4: "",
      empids1: "",
      empids2: "",
      empids3: "",
      empids4: "",
      empSize1: "",
      empSize2: "",
      empSize3: "",
      empSize4: "",
      subtotal1: "",
      subtotal2: "",
      subtotal3: "",
      subtotal4: "",
      multipleSelection1: [],
      multipleSelection2: [],
      multipleSelection3: [],
      multipleSelection4: [],
      showPersonInfo1: false,
      showPersonInfo2: false,
      showPersonInfo3: false,
      showPersonInfo4: false,
      reChoose1: false,
      reChoose2: false,
      reChoose3: false,
      reChoose4: false,
      tableData1: [],
      tableData2: [],
      tableData3: [],
      tableData4: [],

      tableDataRe: [],
      totalPrice: 0,
      accountsPage: 1,
      SignUpPayPage: 0,
      active: 1,
      personalFlag: false,
      name:"",
      cardno:"",
      education:"",
      phone:"",
      signUpType:""
    };
  },
  mounted() {
    this.getEmpData();

    let accountsThis = this;
    this.bus.$on("todata", function(res) {
      
        
      console.log(res);
      if (
        res.multipleSelection1 ||
        res.multipleSelection2 ||
        res.multipleSelection3 ||
        res.multipleSelection4
      ) {
        accountsThis.signUpType = res.type;
        if (
          res.course1 != "" &&
          res.Address1 != "" &&
          res.time1 != "" &&
          res.meal1 != "" &&
          res.multipleSelection1 != ""
        ) {
          accountsThis.orderShow1 = true;
          accountsThis.course1 = res.course1;
          accountsThis.Address1 = res.Address1;
          accountsThis.time1 = res.time1;
          accountsThis.meal1 = res.meal1;
          accountsThis.empSize1 = res.multipleSelection1.length;
          for (var i = 0; i < res.multipleSelection1.length - 1; i++) {
            accountsThis.empids1 += res.multipleSelection1[i].empid + ",";
          }
          var last1 = res.multipleSelection1.length - 1;
          accountsThis.empids1 += res.multipleSelection1[last1].empid;
          this.$ajax({
            method: "get",
            url: `${this.baseURL}/zjsxpt/course_getSetMenuById.do?menuid=${
              accountsThis.meal1
            }`
          })
            .then(res => {
              accountsThis.menuname1 = res.data.data.menuname;
              accountsThis.coursename1 = res.data.data.coursename;
              accountsThis.examtime1 = res.data.data.examtime;
              accountsThis.examaddress1 = res.data.data.examaddress;
              accountsThis.price1 = res.data.data.price;
              accountsThis.subtotal1 =
                Number(accountsThis.empSize1) * Number(res.data.data.price);
              accountsThis.totalPrice =
                Number(accountsThis.totalPrice) +
                Number(accountsThis.subtotal1);
            })
            .catch(function(err) {
              console.log(err);
            });

          this.$ajax({
            method: "get",
            url: `${this.baseURL}/zjsxpt/course_getCourseById.do?courseid=${
              accountsThis.course1
            }`
          })
            .then(res => {
              accountsThis.coursehour1 = res.data.data.coursehour;
              accountsThis.coursename1 = res.data.data.coursename;
              accountsThis.picurl1 = res.data.data.picurl;
            })
            .catch(function(err) {
              console.log(err);
            });

          this.$ajax({
            method: "get",
            url: `${this.baseURL}/zjsxpt/course_getTrainTimeById.do?timeid=${
              accountsThis.time1
            }`
          })
            .then(res => {
              accountsThis.trainDate1 = res.data.data.traintime;
            })
            .catch(function(err) {
              console.log(err);
            });

          this.$ajax({
            method: "get",
            url: `${
              this.baseURL
            }/zjsxpt/course_getEmployeeByEmpIds.do?employeeids=${
              accountsThis.empids1
            }`
          })
            .then(res => {
              accountsThis.tableData1 = res.data.data;
            })
            .catch(function(err) {
              console.log(err);
            });
        }

        if (
          res.course2 != "" &&
          res.Address2 != "" &&
          res.time2 != "" &&
          res.meal2 != "" &&
          res.multipleSelection2 != ""
        ) {
          accountsThis.orderShow2 = true;
          accountsThis.course2 = res.course2;
          accountsThis.Address2 = res.Address2;
          accountsThis.time2 = res.time2;
          accountsThis.meal2 = res.meal2;
          accountsThis.empSize2 = res.multipleSelection2.length;
          for (var i = 0; i < res.multipleSelection2.length - 1; i++) {
            accountsThis.empids2 += res.multipleSelection2[i].empid + ",";
          }
          var last2 = res.multipleSelection2.length - 1;
          accountsThis.empids2 += res.multipleSelection2[last2].empid;
          this.$ajax({
            method: "get",
            url: `${this.baseURL}/zjsxpt/course_getSetMenuById.do?menuid=${
              accountsThis.meal2
            }`
          })
            .then(res => {
              accountsThis.menuname2 = res.data.data.menuname;
              accountsThis.coursename2 = res.data.data.coursename;
              accountsThis.examtime2 = res.data.data.examtime;
              accountsThis.examaddress2 = res.data.data.examaddress;
              accountsThis.price2 = res.data.data.price;
              accountsThis.subtotal2 =
                Number(accountsThis.empSize2) * Number(res.data.data.price);
              accountsThis.totalPrice =
                Number(accountsThis.totalPrice) +
                Number(accountsThis.subtotal2);
            })
            .catch(function(err) {
              console.log(err);
            });

          this.$ajax({
            method: "get",
            url: `${this.baseURL}/zjsxpt/course_getCourseById.do?courseid=${
              accountsThis.course2
            }`
          })
            .then(res => {
              accountsThis.coursehour2 = res.data.data.coursehour;
              accountsThis.coursename2 = res.data.data.coursename;
              accountsThis.picurl2 = res.data.data.picurl;
            })
            .catch(function(err) {
              console.log(err);
            });

          this.$ajax({
            method: "get",
            url: `${this.baseURL}/zjsxpt/course_getTrainTimeById.do?timeid=${
              accountsThis.time2
            }`
          })
            .then(res => {
              accountsThis.trainDate2 = res.data.data.traintime;
            })
            .catch(function(err) {
              console.log(err);
            });

          this.$ajax({
            method: "get",
            url: `${
              this.baseURL
            }/zjsxpt/course_getEmployeeByEmpIds.do?employeeids=${
              accountsThis.empids2
            }`
          })
            .then(res => {
              accountsThis.tableData2 = res.data.data;
            })
            .catch(function(err) {
              console.log(err);
            });
        }

        if (
          res.course3 != "" &&
          res.Address3 != "" &&
          res.time3 != "" &&
          res.meal3 != "" &&
          res.multipleSelection3 != ""
        ) {
          accountsThis.orderShow3 = true;
          accountsThis.course3 = res.course3;
          accountsThis.Address3 = res.Address3;
          accountsThis.time3 = res.time3;
          accountsThis.meal3 = res.meal3;
          accountsThis.empSize3 = res.multipleSelection3.length;
          for (var i = 0; i < res.multipleSelection3.length - 1; i++) {
            accountsThis.empids3 += res.multipleSelection3[i].empid + ",";
          }
          var last3 = res.multipleSelection3.length - 1;
          accountsThis.empids3 += res.multipleSelection3[last3].empid;
          this.$ajax({
            method: "get",
            url: `${this.baseURL}/zjsxpt/course_getSetMenuById.do?menuid=${
              accountsThis.meal3
            }`
          })
            .then(res => {
              accountsThis.menuname3 = res.data.data.menuname;
              accountsThis.coursename3 = res.data.data.coursename;
              accountsThis.examtime3 = res.data.data.examtime;
              accountsThis.examaddress3 = res.data.data.examaddress;
              accountsThis.price3 = res.data.data.price;
              accountsThis.subtotal3 =
                Number(accountsThis.empSize3) * Number(res.data.data.price);
              accountsThis.totalPrice =
                Number(accountsThis.totalPrice) +
                Number(accountsThis.subtotal3);
            })
            .catch(function(err) {
              console.log(err);
            });

          this.$ajax({
            method: "get",
            url: `${this.baseURL}/zjsxpt/course_getCourseById.do?courseid=${
              accountsThis.course3
            }`
          })
            .then(res => {
              accountsThis.coursehour3 = res.data.data.coursehour;
              accountsThis.coursename3 = res.data.data.coursename;
              accountsThis.picurl3 = res.data.data.picurl;
            })
            .catch(function(err) {
              console.log(err);
            });

          this.$ajax({
            method: "get",
            url: `${this.baseURL}/zjsxpt/course_getTrainTimeById.do?timeid=${
              accountsThis.time3
            }`
          })
            .then(res => {
              accountsThis.trainDate3 = res.data.data.traintime;
            })
            .catch(function(err) {
              console.log(err);
            });

          this.$ajax({
            method: "get",
            url: `${
              this.baseURL
            }/zjsxpt/course_getEmployeeByEmpIds.do?employeeids=${
              accountsThis.empids3
            }`
          })
            .then(res => {
              accountsThis.tableData3 = res.data.data;
            })
            .catch(function(err) {
              console.log(err);
            });
        }

        if (
          res.course4 != "" &&
          res.Address4 != "" &&
          res.time4 != "" &&
          res.meal4 != "" &&
          res.multipleSelection4 != ""
        ) {
          accountsThis.orderShow4 = true;
          accountsThis.course4 = res.course4;
          accountsThis.Address4 = res.Address4;
          accountsThis.time4 = res.time4;
          accountsThis.meal4 = res.meal4;
          accountsThis.empSize4 = res.multipleSelection4.length;
          for (var i = 0; i < res.multipleSelection4.length - 1; i++) {
            accountsThis.empids4 += res.multipleSelection4[i].empid + ",";
          }
          var last4 = res.multipleSelection4.length - 1;
          accountsThis.empids4 += res.multipleSelection4[last4].empid;
          this.$ajax({
            method: "get",
            url: `${this.baseURL}/zjsxpt/course_getSetMenuById.do?menuid=${
              accountsThis.meal4
            }`
          })
            .then(res => {
              accountsThis.menuname4 = res.data.data.menuname;
              accountsThis.coursename4 = res.data.data.coursename;
              accountsThis.examtime4 = res.data.data.examtime;
              accountsThis.examaddress4 = res.data.data.examaddress;
              accountsThis.price4 = res.data.data.price;
              accountsThis.subtotal4 =
                Number(accountsThis.empSize4) * Number(res.data.data.price);
              accountsThis.totalPrice =
                Number(accountsThis.totalPrice) +
                Number(accountsThis.subtotal4);
            })
            .catch(function(err) {
              console.log(err);
            });

          this.$ajax({
            method: "get",
            url: `${this.baseURL}/zjsxpt/course_getCourseById.do?courseid=${
              accountsThis.course4
            }`
          })
            .then(res => {
              accountsThis.coursehour4 = res.data.data.coursehour;
              accountsThis.coursename4 = res.data.data.coursename;
              accountsThis.picurl4 = res.data.data.picurl;
            })
            .catch(function(err) {
              console.log(err);
            });

          this.$ajax({
            method: "get",
            url: `${this.baseURL}/zjsxpt/course_getTrainTimeById.do?timeid=${
              accountsThis.time4
            }`
          })
            .then(res => {
              accountsThis.trainDate4 = res.data.data.traintime;
            })
            .catch(function(err) {
              console.log(err);
            });

          this.$ajax({
            method: "get",
            url: `${
              this.baseURL
            }/zjsxpt/course_getEmployeeByEmpIds.do?employeeids=${
              accountsThis.empids4
            }`
          })
            .then(res => {
              accountsThis.tableData4 = res.data.data;
            })
            .catch(function(err) {
              console.log(err);
            });
        }
      } else {
        accountsThis.personalFlag = true;
        
        accountsThis.course1 = res.course1,
          accountsThis.Address1 = res.Address1,
          accountsThis.time1 = res.time1,
          accountsThis.meal1 = res.meal1,
          accountsThis.name = res.name,
        accountsThis.cardno = res.cardno,
        accountsThis.education =res.education,
        accountsThis.phone = res.phone
        this.$ajax({
            method: "get",
            url: `${this.baseURL}/zjsxpt/course_getSetMenuById.do?menuid=${
              res.meal1
            }`
          })
            .then(res => {
              accountsThis.menuname1 = res.data.data.menuname;
              accountsThis.coursename1 = res.data.data.coursename;
              accountsThis.examtime1 = res.data.data.examtime;
              accountsThis.examaddress1 = res.data.data.examaddress;
              accountsThis.price1 = res.data.data.price;
              accountsThis.subtotal1 =
                Number(accountsThis.empSize1) * Number(res.data.data.price);
              accountsThis.totalPrice =
                Number(accountsThis.totalPrice) +
                Number(accountsThis.subtotal1);
            })
            .catch(function(err) {
              console.log(err);
            });

          this.$ajax({
            method: "get",
            url: `${this.baseURL}/zjsxpt/course_getCourseById.do?courseid=${
              res.course1
            }`
          })
            .then(res => {
              accountsThis.coursehour1 = res.data.data.coursehour;
              accountsThis.coursename1 = res.data.data.coursename;
              accountsThis.picurl1 = res.data.data.picurl;
            })
            .catch(function(err) {
              console.log(err);
            });

          this.$ajax({
            method: "get",
            url: `${this.baseURL}/zjsxpt/course_getTrainTimeById.do?timeid=${
              res.time1
            }`
          })
            .then(res => {
              accountsThis.trainDate1 = res.data.data.traintime;
            })
            .catch(function(err) {
              console.log(err);
            });
            accountsThis.orderShow1 = true;
      }
    });
  },
  methods: {
    deleteOrder1() {
      this.orderShow1 = false;
      this.totalPrice = Number(this.totalPrice) - Number(this.subtotal1);
    },
    deleteOrder2() {
      this.orderShow2 = false;
      this.totalPrice = Number(this.totalPrice) - Number(this.subtotal2);
    },
    deleteOrder3() {
      this.orderShow3 = false;
      this.totalPrice = Number(this.totalPrice) - Number(this.subtotal3);
    },
    deleteOrder4() {
      this.orderShow4 = false;
      this.totalPrice = Number(this.totalPrice) - Number(this.subtotal4);
    },
    getEmpData() {
      var userInfo = JSON.parse(sessionStorage.getItem("user"));
      if (userInfo) {
        var userid = userInfo.userid;
      }
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/employee_findEmployeeList.do?userid=${userid}`
      })
        .then(res => {
          this.tableDataRe = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    scanEmp1() {
      if (this.empSize1 >= 1) {
        this.showPersonInfo1 = true;
      } else {
        this.reChoose1 = true;
        this.$nextTick(function() {
          this.tableDataRe.forEach(item => {
            this.$refs.reTable1.toggleRowSelection(item, true);
          });
        });
      }
    },
    showPersonInfofun1() {
      this.showPersonInfo1 = false;
      this.empSize1 = this.multipleSelection1.length;
      this.totalPrice = Number(this.totalPrice) - Number(this.subtotal1);
      this.subtotal1 = Number(this.empSize1) * Number(this.price1);
      this.totalPrice = Number(this.totalPrice) + Number(this.subtotal1);
    },
    chooseAll1() {
      let that = this;
      if (!this.clickOnce1) {
        this.$nextTick(function() {
          this.tableData1.forEach(item => {
            this.$refs.table1.toggleRowSelection(item, true);
          });
        });
        this.clickOnce1 = true;
      }
    },
    ReChoose1() {
      this.showPersonInfo1 = false;

      this.reChoose1 = true;
      this.$nextTick(function() {
        this.tableDataRe.forEach(item => {
          this.$refs.reTable1.toggleRowSelection(item, true);
        });
      });
    },
    handleSelectionChange1(val) {
      this.multipleSelection1 = val;
    },
    handleSelectionChangeRe1(val) {
      this.multipleSelection1 = val;
    },
    reChoosefunction1() {
      this.empSize1 = this.multipleSelection1.length;
      this.totalPrice = Number(this.totalPrice) - Number(this.subtotal1);
      this.subtotal1 = Number(this.empSize1) * Number(this.price1);
      this.totalPrice = Number(this.totalPrice) + Number(this.subtotal1);
      this.reChoose1 = false;
      this.tableData1 = [{}];
      this.empids1 = "";
      if (this.multipleSelection1.length >= 1) {
        for (var i = 0; i < this.multipleSelection1.length - 1; i++) {
          this.empids1 += this.multipleSelection1[i].empid + ",";
        }
        var last1 = this.multipleSelection1.length - 1;
        this.empids1 += this.multipleSelection1[last1].empid;
      }
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_getEmployeeByEmpIds.do?employeeids=${this.empids1}`
      })
        .then(res => {
          this.tableData1 = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
      this.clickOnce1 = false;
    },
    scanEmp2() {
      if (this.empSize2 >= 1) {
        this.showPersonInfo2 = true;
      } else {
        this.reChoose2 = true;
        this.$nextTick(function() {
          this.tableDataRe.forEach(item => {
            this.$refs.reTable2.toggleRowSelection(item, true);
          });
        });
      }
    },
    showPersonInfofun2() {
      this.showPersonInfo2 = false;
      this.empSize2 = this.multipleSelection2.length;
      this.totalPrice = Number(this.totalPrice) - Number(this.subtotal2);
      this.subtotal2 = Number(this.empSize2) * Number(this.price2);
      this.totalPrice = Number(this.totalPrice) + Number(this.subtotal2);
    },
    chooseAll2() {
      let that = this;
      if (!this.clickOnce2) {
        this.$nextTick(function() {
          this.tableData2.forEach(item => {
            this.$refs.table2.toggleRowSelection(item, true);
          });
        });
        this.clickOnce2 = true;
      }
    },
    ReChoose2() {
      this.showPersonInfo2 = false;

      this.reChoose2 = true;
      this.$nextTick(function() {
        this.tableDataRe.forEach(item => {
          this.$refs.reTable2.toggleRowSelection(item, true);
        });
      });
    },
    handleSelectionChange2(val) {
      this.multipleSelection2 = val;
    },
    handleSelectionChangeRe2(val) {
      this.multipleSelection2 = val;
    },
    reChoosefunction2() {
      this.empSize2 = this.multipleSelection2.length;
      this.totalPrice = Number(this.totalPrice) - Number(this.subtotal2);
      this.subtotal2 = Number(this.empSize2) * Number(this.price2);
      this.totalPrice = Number(this.totalPrice) + Number(this.subtotal2);
      this.reChoose2 = false;
      this.tableData2 = [{}];
      this.empids2 = "";
      if (this.multipleSelection2.length >= 1) {
        for (var i = 0; i < this.multipleSelection2.length - 1; i++) {
          this.empids2 += this.multipleSelection2[i].empid + ",";
        }
        var last2 = this.multipleSelection2.length - 1;
        this.empids2 += this.multipleSelection2[last2].empid;
      }
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_getEmployeeByEmpIds.do?employeeids=${this.empids2}`
      })
        .then(res => {
          this.tableData2 = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
      this.clickOnce2 = false;
    },
    scanEmp3() {
      if (this.empSize3 >= 1) {
        this.showPersonInfo3 = true;
      } else {
        this.reChoose3 = true;
        this.$nextTick(function() {
          this.tableDataRe.forEach(item => {
            this.$refs.reTable3.toggleRowSelection(item, true);
          });
        });
      }
    },
    showPersonInfofun3() {
      this.showPersonInfo3 = false;
      this.empSize3 = this.multipleSelection3.length;
      this.totalPrice = Number(this.totalPrice) - Number(this.subtotal3);
      this.subtotal3 = Number(this.empSize3) * Number(this.price3);
      this.totalPrice = Number(this.totalPrice) + Number(this.subtotal3);
    },
    chooseAll3() {
      let that = this;
      if (!this.clickOnce3) {
        this.$nextTick(function() {
          this.tableData3.forEach(item => {
            this.$refs.table3.toggleRowSelection(item, true);
          });
        });
        this.clickOnce3 = true;
      }
    },
    ReChoose3() {
      this.showPersonInfo3 = false;
      this.reChoose3 = true;
      this.$nextTick(function() {
        this.tableDataRe.forEach(item => {
          this.$refs.reTable3.toggleRowSelection(item, true);
        });
      });
    },
    handleSelectionChange3(val) {
      this.multipleSelection3 = val;
    },
    handleSelectionChangeRe3(val) {
      this.multipleSelection3 = val;
    },
    reChoosefunction3() {
      this.empSize3 = this.multipleSelection3.length;
      this.totalPrice = Number(this.totalPrice) - Number(this.subtotal3);
      this.subtotal3 = Number(this.empSize3) * Number(this.price3);
      this.totalPrice = Number(this.totalPrice) + Number(this.subtotal3);
      this.reChoose3 = false;
      this.tableData3 = [{}];
      this.empids3 = "";
      if (this.multipleSelection3.length >= 1) {
        for (var i = 0; i < this.multipleSelection3.length - 1; i++) {
          this.empids3 += this.multipleSelection3[i].empid + ",";
        }
        var last3 = this.multipleSelection3.length - 1;
        this.empids3 += this.multipleSelection3[last3].empid;
      }
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_getEmployeeByEmpIds.do?employeeids=${this.empids3}`
      })
        .then(res => {
          this.tableData3 = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
      this.clickOnce3 = false;
    },
    scanEmp4() {
      if (this.empSize4 >= 1) {
        this.showPersonInfo4 = true;
      } else {
        this.reChoose4 = true;
        this.$nextTick(function() {
          this.tableDataRe.forEach(item => {
            this.$refs.reTable4.toggleRowSelection(item, true);
          });
        });
      }
    },
    showPersonInfofun4() {
      this.showPersonInfo4 = false;
      this.empSize4 = this.multipleSelection4.length;
      this.totalPrice = Number(this.totalPrice) - Number(this.subtotal4);
      this.subtotal4 = Number(this.empSize4) * Number(this.price4);
      this.totalPrice = Number(this.totalPrice) + Number(this.subtotal4);
    },
    chooseAll4() {
      let that = this;
      if (!this.clickOnce4) {
        this.$nextTick(function() {
          this.tableData4.forEach(item => {
            this.$refs.table4.toggleRowSelection(item, true);
          });
        });
        this.clickOnce4 = true;
      }
    },
    ReChoose4() {
      this.showPersonInfo4 = false;
      this.reChoose4 = true;
      this.$nextTick(function() {
        this.tableDataRe.forEach(item => {
          this.$refs.reTable4.toggleRowSelection(item, true);
        });
      });
    },
    handleSelectionChange4(val) {
      this.multipleSelection4 = val;
    },
    handleSelectionChangeRe4(val) {
      this.multipleSelection4 = val;
    },
    reChoosefunction4() {
      this.empSize4 = this.multipleSelection4.length;
      this.totalPrice = Number(this.totalPrice) - Number(this.subtotal4);
      this.subtotal4 = Number(this.empSize4) * Number(this.price4);
      this.totalPrice = Number(this.totalPrice) + Number(this.subtotal4);
      this.reChoose4 = false;
      this.tableData4 = [{}];
      this.empids4 = "";
      if (this.multipleSelection4.length >= 1) {
        for (var i = 0; i < this.multipleSelection4.length - 1; i++) {
          this.empids4 += this.multipleSelection4[i].empid + ",";
        }
        var last4 = this.multipleSelection4.length - 1;
        this.empids4 += this.multipleSelection4[last4].empid;
      }
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_getEmployeeByEmpIds.do?employeeids=${this.empids4}`
      })
        .then(res => {
          this.tableData4 = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
      this.clickOnce4 = false;
    },
    account() {
      var userInfo = JSON.parse(sessionStorage.getItem("user"));
      if (userInfo) {
        var userid = userInfo.userid;
      }
      if(!this.personalFlag){
 var courseids = "";
      var menuids = "";
      var traintimeids = "";
      var employeeids = "";
      if (this.orderShow1 && this.empSize1 > 0) {
        courseids += this.course1 + ",";
        menuids += this.meal1 + ",";
        traintimeids += this.time1 + ",";
        employeeids += this.empids1 + ";";
      }
      if (this.orderShow2 && this.empSize2 > 0) {
        courseids += this.course2 + ",";
        menuids += this.meal2 + ",";
        traintimeids += this.time2 + ",";
        employeeids += this.empids2 + ";";
      }
      if (this.orderShow3 && this.empSize3 > 0) {
        courseids += this.course3 + ",";
        menuids += this.meal3 + ",";
        traintimeids += this.time3 + ",";
        employeeids += this.empids3 + ";";
      }
      if (this.orderShow4 && this.empSize4 > 0) {
        courseids += this.course4 + ",";
        menuids += this.meal4 + ",";
        traintimeids += this.time4 + ",";
        employeeids += this.empids4 + ";";
      }
      if (
        this.empSize1 < 1 &&
        this.empSize2 < 1 &&
        this.empSize3 < 1 &&
        this.empSize4 < 1
      ) {
        this.$message({
          message: "网络延迟或选择人员为0!",
          center: true
        });
      } else if (
        !this.orderShow1 &&
        !this.orderShow2 &&
        !this.orderShow3 &&
        !this.orderShow4
      ) {
        this.$message({
          message: "没有任何订单!",
          center: true
        });
      } else {
        this.$ajax({
          method: "post",
          url: `${this.baseURL}/zjsxpt/course_saveOrder.do?order={"summoney":"${
            this.totalPrice
          }","courseids":"${courseids}",
        "menuids":"${menuids}","traintimeids":"${traintimeids}","employeeids":"${employeeids}"}&userid=${userid}&type=${this.signUpType}`
        })
          .then(res => {
            this.accountsPage = 0;
            this.SignUpPayPage = 1;
            this.active = 2;
            this.$emit("ToSignUpPayPage", {
              accountsPage: this.accountsPage,
              SignUpPayPage: this.SignUpPayPage,
              active: this.active
            });
            this.bus.$emit("toNextPage", {
              orderID: res.data.orderid
            });
          })
          .catch(function(err) {
            console.log(err);
          });
      }
      } else {

        if(this.orderShow1) {
          this.$ajax({
          method: "post",
          url: `${this.baseURL}/zjsxpt/course_saveOrder.do?order={"summoney":"${this.price1}",
          "courseids":"${this.course1}",
          "menuids":"${this.meal1}",
          "traintimeids":"${this.time1}",
          "employeeids":""}&userid=${userid}&type=3&emp=
          {"name":"${this.name}","cardno":"${this.cardno}","education":"${this.education}","phone":"${this.phone}"}`

        })
          .then(res => {
            this.accountsPage = 0;
            this.SignUpPayPage = 1;
            this.active = 2;
            this.$emit("ToSignUpPayPage", {
              accountsPage: this.accountsPage,
              SignUpPayPage: this.SignUpPayPage,
              active: this.active
            });
            this.bus.$emit("toNextPage", {
              orderID: res.data.orderid
            });
          })
          .catch(function(err) {
            console.log(err);
          });
        } else {
          this.$message({
          message: "没有任何订单!",
          center: true
        });
        }
      }
     
    }
  }
};
</script>

<style scoped>
.order-info-body {
  width: 940px;
  height: 110px;
  background-color: #f8f8f8;
  border: 1px solid #e4e4e4;
  font-size: 12px;
  color: #666;
  text-align: center;
  padding: 10px;
}
.order-subtotal {
  width: 940px;
  height: 45px;
  background-color: #eee;
  border-bottom: 1px solid #e4e4e4;
  border-left: 1px solid #e4e4e4;
  border-right: 1px solid #e4e4e4;
}
.order-img {
  width: 120px;
  height: 87px;
  object-fit: cover;
}
.order-subtotal {
  text-align: right;
  padding: 12px;
  font-size: 14px;
  color: #333;
}
.order-info-title {
  width: 940px;
  height: 40px;
  background-color: #f8f8f8;
  border: 1px solid #e4e4e4;
  margin: 0px 0px 20px 0px;
  font-size: 12px;
  color: #666;
  text-align: center;
  padding: 11px 10px 0px 10px;
}
.order-meal-name {
  font-size: 14px;
  color: #333;
  text-align: left;
  margin: 5px 0px 0px 30px;
  height: 40px;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.order-meal-person-num {
  margin-top: 28px;
  color: #ff6600;
  text-align: left;
  margin: 10px 0px 0px 30px;
}
.emp-edit {
  margin: 5px 0px 0px 10px;
  height: 25px;
  width: 50px;
  line-height: 25px;
  padding: 0px;
  font-size: 12px;
}
.order-meal-property {
  height: 90px;
  display: table-cell;
  vertical-align: middle;
}
.order-meal-property-outbody {
  display: table;
  margin: 0px auto;
}
.el-icon-delete {
  font-size: 16px;
  cursor: pointer;
}
.el-icon-delete:hover {
  color: #409eff;
}
.order-group {
  margin: 20px 0px 0px 0px;
}
.order-total-price {
  height: 60px;
  width: 940px;
  margin: 30px 0px 0px 0px;
  background-color: #eee;
  border: 1px solid #e4e4e4;
  border-right: 0;
}
.chekout {
  background-color: #ff8000;
  border: 1px solid #ff8000;
  font-size: 20px;
  text-align: center;
  line-height: 58px;
  width: 120px;
  margin: -1px 0px 0px 36px;
  color: #fff;
  cursor: pointer;
}
.total {
  text-align: right;
  font-size: 14px;
  color: #444;
  padding: 15px 0px 0px 0px;
}
.total-price {
  font-size: 20px;
  color: #ff3900;
}
.operation-zone {
  text-align: center;
  margin: 30px 0px 0px 0px;
}
.operation-zone > .el-button {
  width: 100px;
  margin: 0px 20px;
}
</style>
<style>
.cell {
  text-align: center;
}
</style>