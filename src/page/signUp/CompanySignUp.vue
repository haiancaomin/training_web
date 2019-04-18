<template>
  <div class="CompanySignUp">
    <div calss="batch-sign-up">
      <div class="batch-sign-up-notice">
        <p id="signup-no-info-notice1">
          企业报名请先确认已在客户中心添加过报名人员的信息, 如您还未添加过报名人员信息,请点击
          <router-link to="/personalCenter/PersonalCenterAddPerson">
            <span class="signup-here">这里</span>
          </router-link>进入客户中心填写。
        </p>
        <p class="info-notice" id="signup-no-info-notice2">注：如报名条件不同，请点击添加按钮选择新的报名条件进行报名。</p>
      </div>
      <el-form class="demo-ruleForm" :model="ruleForm" ref="ruleForm">
        <ol>
          <div class="up-div">
            <div class="div-zone">
              <el-col :span="12" v-if="form1" id="divZone1">
                <li class="form1">
                  <div class="info-need">
                    <el-form-item label="课程选择" prop="course1">
                      <el-select
                        v-model="ruleForm.course1"
                        placeholder="请选择课程"
                        @change="getAddressList1(ruleForm.course1),getTimeList1(ruleForm.course1),getMealList1(ruleForm.course1)"
                      >
                        <el-option
                          v-for="item in selectCourseData"
                          :key="item.courseid"
                          :label="item.coursename"
                          :value="item.courseid"
                        ></el-option>
                      </el-select>
                      <span class="el-icon-plus" id="el-icon-plus1" @click="addNew1" v-if="but1"></span>
                      <span
                        class="el-icon-minus"
                        id="el-icon-minus1"
                        @click="deletes1()"
                        v-if="del1"
                      ></span>
                    </el-form-item>

                    <el-form-item label="培训地点" prop="Address1">
                      <el-select
                        placeholder="请先选择课程"
                        :disabled="true"
                        v-if="ruleForm.course1==''"
                        value
                      ></el-select>
                      <el-select
                        v-model="ruleForm.Address1"
                        placeholder="请选择培训地点"
                        v-if="!ruleForm.course1==''"
                      >
                        <el-option
                          v-for="item in selectAddressData1"
                          :key="item.addrid"
                          :label="item.address"
                          :value="item.address"
                        ></el-option>
                      </el-select>
                    </el-form-item>

                    <el-form-item label="时间选择" prop="time1">
                      <el-select
                        placeholder="请先选择课程"
                        :disabled="true"
                        v-if="ruleForm.course1==''"
                        value
                      ></el-select>
                      <el-select
                        v-model="ruleForm.time1"
                        placeholder="请选择培训时间"
                        v-if="!ruleForm.course1==''"
                      >
                        <el-option
                          v-for="item in selectTimeData1"
                          :key="item.timeid"
                          :label="item.traintime"
                          :value="item.timeid"
                        ></el-option>
                      </el-select>
                    </el-form-item>

                    <el-form-item label="套餐选择" prop="meal1">
                      <el-select
                        placeholder="请先选择课程"
                        :disabled="true"
                        v-if="ruleForm.course1==''"
                        value
                      ></el-select>
                      <el-select
                        v-model="ruleForm.meal1"
                        placeholder="请选择套餐"
                        v-if="!ruleForm.course1==''"
                      >
                        <el-option
                          v-for="item in selectMealData1"
                          :key="item.menuid"
                          :label="item.menuname"
                          :value="item.menuid"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item>
                      <label class="sign-num">报名人数</label>
                      <el-input-number v-model="personSize1" :min="0" label="描述文字" :disabled="true"></el-input-number>
                    </el-form-item>
                  </div>

                  <div class="div-upload">
                    <el-form-item>
                      <el-dialog
                        title="请勾选选择该套餐的人员"
                        :visible.sync="centerDialogVisible1"
                        width="600px"
                        center
                      >
                        <el-table
                          ref="multipleTable"
                          :data="tableData1"
                          max-height="400px"
                          tooltip-effect="dark"
                          style="width: 100%"
                          @selection-change="handleSelectionChange1"
                        >
                          <el-table-column type="selection" width="100"></el-table-column>
                          <el-table-column prop="empname" label="姓名" width="150"></el-table-column>
                          <el-table-column prop="cardno" label="身份证号" show-overflow-tooltip></el-table-column>
                        </el-table>
                        <el-button
                          type="primary"
                          class="sign-submit"
                          @click="centerDialogVisible1 = false"
                        >确定</el-button>
                      </el-dialog>
                      <div class="div-delete">
                        <el-button
                          type="primary"
                          @click="centerDialogVisible1 = true"
                          class="choose-person"
                        >选择人员</el-button>
                      </div>
                    </el-form-item>
                  </div>
                </li>
              </el-col>
            </div>

            <div class="div-zone">
              <el-col :span="12" v-if="form2">
                <li class="form2">
                  <div class="info-need">
                    <el-form-item label="课程选择" prop="course2">
                      <el-select
                        v-model="ruleForm.course2"
                        placeholder="请选择课程"
                        @change="getAddressList2(ruleForm.course2),getTimeList2(ruleForm.course2),getMealList2(ruleForm.course2)"
                      >
                        <el-option
                          v-for="item in selectCourseData"
                          :key="item.courseid"
                          :label="item.coursename"
                          :value="item.courseid"
                        ></el-option>
                      </el-select>
                      <span class="el-icon-plus" id="el-icon-plus2" @click="addNew2" v-if="but2"></span>
                      <span
                        class="el-icon-minus"
                        id="el-icon-minus2"
                        @click="deletes2()"
                        v-if="del2"
                      ></span>
                    </el-form-item>

                    <el-form-item label="培训地点" prop="Address2">
                      <el-select
                        placeholder="请先选择课程"
                        :disabled="true"
                        v-if="ruleForm.course2==''"
                        value
                      ></el-select>
                      <el-select
                        v-model="ruleForm.Address2"
                        placeholder="请选择培训地点"
                        v-if="!ruleForm.course2==''"
                      >
                        <el-option
                          v-for="item in selectAddressData2"
                          :key="item.addrid"
                          :label="item.address"
                          :value="item.address"
                        ></el-option>
                      </el-select>
                    </el-form-item>

                    <el-form-item label="时间选择" prop="time2">
                      <el-select
                        placeholder="请先选择课程"
                        :disabled="true"
                        v-if="ruleForm.course2==''"
                        value
                      ></el-select>
                      <el-select
                        v-model="ruleForm.time2"
                        placeholder="请选择培训时间"
                        v-if="!ruleForm.course2==''"
                      >
                        <el-option
                          v-for="item in selectTimeData2"
                          :key="item.timeid"
                          :label="item.traintime"
                          :value="item.timeid"
                        ></el-option>
                      </el-select>
                    </el-form-item>

                    <el-form-item label="套餐选择" prop="meal2">
                      <el-select
                        placeholder="请先选择课程"
                        :disabled="true"
                        v-if="ruleForm.course2==''"
                        value
                      ></el-select>
                      <el-select
                        v-model="ruleForm.meal2"
                        placeholder="请选择套餐"
                        v-if="!ruleForm.course2==''"
                      >
                        <el-option
                          v-for="item in selectMealData2"
                          :key="item.menuid"
                          :label="item.menuname"
                          :value="item.menuid"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item>
                      <label class="sign-num">报名人数</label>
                      <el-input-number v-model="personSize2" :min="0" label="描述文字" :disabled="true"></el-input-number>
                    </el-form-item>
                  </div>

                  <div class="div-upload">
                    <el-form-item>
                      <el-dialog
                        title="请勾选选择该套餐的人员"
                        :visible.sync="centerDialogVisible2"
                        width="600px"
                        center
                      >
                        <el-table
                          ref="multipleTable"
                          :data="tableData1"
                          max-height="400px"
                          tooltip-effect="dark"
                          style="width: 100%"
                          @selection-change="handleSelectionChange2"
                        >
                          <el-table-column type="selection" width="100"></el-table-column>
                          <el-table-column prop="empname" label="姓名" width="150"></el-table-column>
                          <el-table-column prop="cardno" label="身份证号" show-overflow-tooltip></el-table-column>
                        </el-table>
                        <el-button
                          type="primary"
                          class="sign-submit"
                          @click="centerDialogVisible2 = false"
                        >确定</el-button>
                      </el-dialog>
                      <div class="div-delete">
                        <el-button type="primary" @click="centerDialogVisible2 = true">选择人员</el-button>
                      </div>
                    </el-form-item>
                  </div>
                </li>
              </el-col>
            </div>
          </div>

          <div class="down-div">
            <div class="div-zone">
              <el-col :span="12" v-if="form3">
                <li class="form3">
                  <div class="info-need">
                    <el-form-item label="课程选择" prop="course3" id="education">
                      <el-select
                        v-model="ruleForm.course3"
                        placeholder="请选择课程"
                        @change="getAddressList3(ruleForm.course3),getTimeList3(ruleForm.course3),getMealList3(ruleForm.course3)"
                      >
                        <el-option
                          v-for="item in selectCourseData"
                          :key="item.courseid"
                          :label="item.coursename"
                          :value="item.courseid"
                        ></el-option>
                      </el-select>
                      <span class="el-icon-plus" id="el-icon-plus3" @click="addNew3" v-if="but3"></span>
                      <span
                        class="el-icon-minus"
                        id="el-icon-minus3"
                        @click="deletes3()"
                        v-if="del3"
                      ></span>
                    </el-form-item>

                    <el-form-item label="培训地点" prop="Address3">
                      <el-select
                        placeholder="请先选择课程"
                        :disabled="true"
                        v-if="ruleForm.course3==''"
                        value
                      ></el-select>
                      <el-select
                        v-model="ruleForm.Address3"
                        placeholder="请选择培训地点"
                        v-if="!ruleForm.course3==''"
                      >
                        <el-option
                          v-for="item in selectAddressData3"
                          :key="item.addrid"
                          :label="item.address"
                          :value="item.address"
                        ></el-option>
                      </el-select>
                    </el-form-item>

                    <el-form-item label="时间选择" prop="time3">
                      <el-select
                        placeholder="请先选择课程"
                        :disabled="true"
                        v-if="ruleForm.course3==''"
                        value
                      ></el-select>
                      <el-select
                        v-model="ruleForm.time3"
                        placeholder="请选择培训时间"
                        v-if="!ruleForm.course3==''"
                      >
                        <el-option
                          v-for="item in selectTimeData3"
                          :key="item.timeid"
                          :label="item.traintime"
                          :value="item.timeid"
                        ></el-option>
                      </el-select>
                    </el-form-item>

                    <el-form-item label="套餐选择" prop="meal3">
                      <el-select
                        placeholder="请先选择课程"
                        :disabled="true"
                        v-if="ruleForm.course3==''"
                        value
                      ></el-select>
                      <el-select
                        v-model="ruleForm.meal3"
                        placeholder="请选择套餐"
                        v-if="!ruleForm.course3==''"
                      >
                        <el-option
                          v-for="item in selectMealData3"
                          :key="item.menuid"
                          :label="item.menuname"
                          :value="item.menuid"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item>
                      <label class="sign-num">报名人数</label>
                      <el-input-number v-model="personSize3" :min="0" label="描述文字" :disabled="true"></el-input-number>
                    </el-form-item>
                  </div>

                  <div class="div-upload">
                    <el-form-item>
                      <el-dialog
                        title="请勾选选择该套餐的人员"
                        :visible.sync="centerDialogVisible3"
                        width="600px"
                        center
                      >
                        <el-table
                          ref="multipleTable"
                          :data="tableData1"
                          max-height="400px"
                          tooltip-effect="dark"
                          style="width: 100%"
                          @selection-change="handleSelectionChange3"
                        >
                          <el-table-column type="selection" width="100"></el-table-column>
                          <el-table-column prop="empname" label="姓名" width="150"></el-table-column>
                          <el-table-column prop="cardno" label="身份证号" show-overflow-tooltip></el-table-column>
                        </el-table>
                        <el-button
                          type="primary"
                          class="sign-submit"
                          @click="centerDialogVisible3 = false"
                        >确定</el-button>
                      </el-dialog>
                      <div class="div-delete">
                        <el-button type="primary" @click="centerDialogVisible3 = true">选择人员</el-button>
                      </div>
                    </el-form-item>
                  </div>
                </li>
              </el-col>
            </div>

            <div class="div-zone">
              <el-col :span="12" v-if="form4">
                <li class="form4">
                  <div class="info-need">
                    <el-form-item label="课程选择" prop="course4" id="education">
                      <el-select
                        v-model="ruleForm.course4"
                        placeholder="请选择课程"
                        @change="getAddressList4(ruleForm.course4),getTimeList4(ruleForm.course4),getMealList4(ruleForm.course4)"
                      >
                        <el-option
                          v-for="item in selectCourseData"
                          :key="item.courseid"
                          :label="item.coursename"
                          :value="item.courseid"
                        ></el-option>
                      </el-select>
                      <span class="el-icon-plus" id="el-icon-plus4" @click="addNew4" v-if="but4"></span>
                      <span
                        class="el-icon-minus"
                        id="el-icon-minus4"
                        @click="deletes4()"
                        v-if="del4"
                      ></span>
                    </el-form-item>

                    <el-form-item label="培训地点" prop="Address4">
                      <el-select
                        placeholder="请先选择课程"
                        :disabled="true"
                        v-if="ruleForm.course4==''"
                        value
                      ></el-select>
                      <el-select
                        v-model="ruleForm.Address4"
                        placeholder="请选择培训地点"
                        v-if="!ruleForm.course4==''"
                      >
                        <el-option
                          v-for="item in selectAddressData4"
                          :key="item.addrid"
                          :label="item.address"
                          :value="item.address"
                        ></el-option>
                      </el-select>
                    </el-form-item>

                    <el-form-item label="时间选择" prop="time4">
                      <el-select
                        placeholder="请先选择课程"
                        :disabled="true"
                        v-if="ruleForm.course4==''"
                        value
                      ></el-select>
                      <el-select
                        v-model="ruleForm.time4"
                        placeholder="请选择培训时间"
                        v-if="!ruleForm.course4==''"
                      >
                        <el-option
                          v-for="item in selectTimeData4"
                          :key="item.timeid"
                          :label="item.traintime"
                          :value="item.timeid"
                        ></el-option>
                      </el-select>
                    </el-form-item>

                    <el-form-item label="套餐选择" prop="meal4">
                      <el-select
                        placeholder="请先选择课程"
                        :disabled="true"
                        v-if="ruleForm.course4==''"
                        value
                      ></el-select>
                      <el-select
                        v-model="ruleForm.meal4"
                        placeholder="请选择套餐"
                        v-if="!ruleForm.course4==''"
                      >
                        <el-option
                          v-for="item in selectMealData4"
                          :key="item.menuid"
                          :label="item.menuname"
                          :value="item.menuid"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item>
                      <label class="sign-num">报名人数</label>
                      <el-input-number v-model="personSize4" :min="0" label="描述文字" :disabled="true"></el-input-number>
                    </el-form-item>
                  </div>

                  <div class="div-upload">
                    <el-form-item>
                      <el-dialog
                        title="请勾选选择该套餐的人员"
                        :visible.sync="centerDialogVisible4"
                        width="600px"
                        center
                      >
                        <el-table
                          ref="multipleTable"
                          :data="tableData1"
                          max-height="400px"
                          tooltip-effect="dark"
                          style="width: 100%"
                          @selection-change="handleSelectionChange4"
                        >
                          <el-table-column type="selection" width="100"></el-table-column>
                          <el-table-column prop="empname" label="姓名" width="150"></el-table-column>
                          <el-table-column prop="cardno" label="身份证号" show-overflow-tooltip></el-table-column>
                        </el-table>
                        <el-button
                          type="primary"
                          class="sign-submit"
                          @click="centerDialogVisible4 = false"
                        >确定</el-button>
                      </el-dialog>
                      <div class="div-delete">
                        <el-button type="primary" @click="centerDialogVisible4 = true">选择人员</el-button>
                      </div>
                    </el-form-item>
                  </div>
                </li>
              </el-col>
            </div>
          </div>
          <el-col :span="24">
            <div class="nextPage1-batch">
              <el-form-item>
                <el-button type="primary" @click.prevent="submitForm('ruleForm')">下一步</el-button>
              </el-form-item>
            </div>
          </el-col>
        </ol>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form1: true,
      but1: true,
      del1: false,
      form2: false,
      but2: false,
      del2: false,
      form3: false,
      but3: false,
      del3: false,
      form4: false,
      but4: false,
      del4: false,

      active: 0,
      signUpPage: 1,
      accountsPage: 0,

      selectCourseData: [{}],
      selectAddressData1: [{}],
      selectTimeData1: [{}],
      selectMealData1: [{}],
      multipleSelection1: [],
      personSize1: 0,
      centerDialogVisible1: false,
      selectAddressData2: [{}],
      selectTimeData2: [{}],
      selectMealData2: [{}],
      multipleSelection2: [],
      personSize2: 0,
      centerDialogVisible2: false,
      selectAddressData3: [{}],
      selectTimeData3: [{}],
      selectMealData3: [{}],
      multipleSelection3: [],
      personSize3: 0,
      centerDialogVisible3: false,
      selectAddressData4: [{}],
      selectTimeData4: [{}],
      selectMealData4: [{}],
      multipleSelection4: [],
      personSize4: 0,
      centerDialogVisible4: false,
      ruleForm: {
        course1: "",
        Address1: "",
        time1: "",
        meal1: "",
        course2: "",
        Address2: "",
        time2: "",
        meal2: "",
        course3: "",
        Address3: "",
        time3: "",
        meal3: "",
        course4: "",
        Address4: "",
        time4: "",
        meal4: ""
      },
      tableData1: [{}]
    };
  },
  methods: {
    submitForm(formName) {
      var from1Empty = 0;
      var from2Empty = 0;
      var from3Empty = 0;
      var from4Empty = 0;
      if (
        this.ruleForm.course1 == "" ||
        this.ruleForm.Address1 == "" ||
        this.ruleForm.time1 == "" ||
        this.ruleForm.meal1 == "" ||
        this.personSize1 < 1
      ) {
        from1Empty = 1;
      }
      if (
        this.ruleForm.course2 == "" ||
        this.ruleForm.Address2 == "" ||
        this.ruleForm.time2 == "" ||
        this.ruleForm.meal2 == "" ||
        this.personSize2 < 1
      ) {
        from2Empty = 1;
      }
      if (
        this.ruleForm.course3 == "" ||
        this.ruleForm.Address3 == "" ||
        this.ruleForm.time3 == "" ||
        this.ruleForm.meal3 == "" ||
        this.personSize3 < 1
      ) {
        from3Empty = 1;
      }
      if (
        this.ruleForm.course4 == "" ||
        this.ruleForm.Address4 == "" ||
        this.ruleForm.time4 == "" ||
        this.ruleForm.meal4 == "" ||
        this.personSize4 < 1
      ) {
        from4Empty = 1;
      }

      if (
        from1Empty == 1 &&
        from2Empty == 1 &&
        from3Empty == 1 &&
        from4Empty == 1
      ) {
        this.$message({
          message: "您的报名信息不完整！",
          center: true
        });
      } else {
        this.signUpPage = 0;
        this.accountsPage = 1;
        this.active = 1;
        this.$emit("ToAccountsPage", {
          signUpPage: this.firstPage,
          accountsPage: this.accountsPage,
          active: this.active
        });
        this.bus.$emit("todata", {
          course1: this.ruleForm.course1,
          Address1: this.ruleForm.Address1,
          time1: this.ruleForm.time1,
          meal1: this.ruleForm.meal1,
          multipleSelection1: this.multipleSelection1,
          course2: this.ruleForm.course2,
          Address2: this.ruleForm.Address2,
          time2: this.ruleForm.time2,
          meal2: this.ruleForm.meal2,
          multipleSelection2: this.multipleSelection2,
          course3: this.ruleForm.course3,
          Address3: this.ruleForm.Address3,
          time3: this.ruleForm.time3,
          meal3: this.ruleForm.meal3,
          multipleSelection3: this.multipleSelection3,
          course4: this.ruleForm.course4,
          Address4: this.ruleForm.Address4,
          time4: this.ruleForm.time4,
          meal4: this.ruleForm.meal4,
          multipleSelection4: this.multipleSelection4
        });
      }
    },
    addNew1() {
      this.but1 = false;
      this.del1 = true;
      this.form2 = true;
      this.but2 = true;
      this.del2 = true;
    },
    deletes1() {
      this.ruleForm.course1 = "";
      this.personSize1 = 0;
      this.form1 = false;
      this.but1 = false;
      this.del1 = false;

      if (this.form4 == true) {
        this.but4 = true;
        if (this.form3 == false && this.form2 == false) {
          this.del4 = false;
        }
      } else if (this.form3 == true) {
        this.but3 = true;
        if (this.form4 == false && this.form2 == false) {
          this.del3 = false;
        }
      } else if (this.form2 == true) {
        this.but2 = true;
        if (this.form3 == false && this.form4 == false) {
          this.del2 = false;
        }
      }
    },
    addNew2() {
      this.del2 = true;
      if (this.form1 == false) {
        this.form1 = true;
        this.del1 = true;
      } else if (this.form3 == false) {
        this.but2 = false;
        this.form3 = true;
        this.but3 = true;
        this.del3 = true;
      } else {
        this.form4 = true;
        this.but2 = false;
        this.del4 = true;
      }
    },
    deletes2() {
      this.ruleForm.course2 = "";
      this.personSize2 = 0;
      this.form2 = false;
      this.but2 = false;
      this.del2 = false;
      if (this.form4 == true) {
        this.but4 = true;
        if (this.form3 == false && this.form1 == false) {
          this.del4 = false;
        }
      } else if (this.form3 == true) {
        this.but3 = true;
        if (this.form4 == false && this.form2 == false) {
          this.del3 = false;
        }
      } else if (this.form1 == true) {
        this.but1 = true;
        if (this.form3 == false && this.form4 == false) {
          this.del1 = false;
        }
      }
    },
    addNew3() {
      this.del3 = true;
      if (this.form1 == false) {
        this.form1 = true;
        this.del1 = true;
      } else if (this.form2 == false) {
        this.form2 = true;
        this.del2 = true;
      } else {
        this.form4 = true;
        this.del4 = true;
        this.but3 = false;
      }
    },
    deletes3() {
      this.ruleForm.course3 = "";
      this.personSize3 = 0;
      this.form3 = false;
      this.but3 = false;
      this.del3 = false;
      if (this.form4 == true) {
        this.but4 = true;
        if (this.form1 == false && this.form2 == false) {
          this.del4 = false;
        }
      } else if (this.form2 == true) {
        this.but2 = true;
        if (this.form1 == false && this.form4 == false) {
          this.del2 = false;
        }
      } else if (this.form1 == true) {
        this.but1 = true;
        if (this.form4 == false && this.form2 == false) {
          this.del1 = false;
        }
      }
    },
    addNew4() {
      this.del4 = true;
      if (this.form1 == false) {
        this.form1 = true;
        this.del1 = true;
      } else if (this.form2 == false) {
        this.form2 = true;
        this.del2 = true;
      } else if (this.form3 == false) {
        this.form3 = true;
        this.del3 = true;
      }
      if (this.form1 == true && this.form2 == true && this.form3 == true) {
        this.but4 = false;
      }
    },
    deletes4() {
      this.ruleForm.course4 = "";
      this.personSize4 = 0;
      this.form4 = false;
      this.but4 = false;
      this.del4 = false;
      if (this.form3 == true) {
        this.but3 = true;
        if (this.form1 == false && this.form2 == false) {
          this.del3 = false;
        }
      } else if (this.form2 == true) {
        this.but2 = true;
        if (this.form3 == false && this.form1 == false) {
          this.del2 = false;
        }
      } else if (this.form1 == true) {
        this.but1 = true;
        if (this.form3 == false && this.form2 == false) {
          this.del1 = false;
        }
      }
    },
    getCourseList() {
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/course_getCourseList.do`
      })
        .then(res => {
          this.selectCourseData = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getAddressList1(course) {
      this.ruleForm.time1 = null;
      this.ruleForm.Address1 = null;
      this.ruleForm.meal1 = null;
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_getTrainAddressList.do?courseid=${course}`
      })
        .then(res => {
          this.selectAddressData1 = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getTimeList1(course) {
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_getTrainTimeList.do?courseid=${course}`
      })
        .then(res => {
          this.selectTimeData1 = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getMealList1(course) {
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_getSetMenuList.do?courseid=${course}`
      })
        .then(res => {
          this.selectMealData1 = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    handleSelectionChange1(val) {
      this.multipleSelection1 = val;
      this.personSize1 = this.multipleSelection1.length;
    },
    getDiaTableData1() {
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
          this.tableData1 = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getAddressList2(course) {
      this.ruleForm.time2 = null;
      this.ruleForm.Address2 = null;
      this.ruleForm.meal2 = null;
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_getTrainAddressList.do?courseid=${course}`
      })
        .then(res => {
          this.selectAddressData2 = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getTimeList2(course) {
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_getTrainTimeList.do?courseid=${course}`
      })
        .then(res => {
          this.selectTimeData2 = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getMealList2(course) {
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_getSetMenuList.do?courseid=${course}`
      })
        .then(res => {
          this.selectMealData2 = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    handleSelectionChange2(val) {
      this.multipleSelection2 = val;
      this.personSize2 = this.multipleSelection2.length;
    },
    getAddressList3(course) {
      this.ruleForm.time3 = null;
      this.ruleForm.Address3 = null;
      this.ruleForm.meal3 = null;
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_getTrainAddressList.do?courseid=${course}`
      })
        .then(res => {
          this.selectAddressData3 = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getTimeList3(course) {
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_getTrainTimeList.do?courseid=${course}`
      })
        .then(res => {
          this.selectTimeData3 = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getMealList3(course) {
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_getSetMenuList.do?courseid=${course}`
      })
        .then(res => {
          this.selectMealData3 = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    handleSelectionChange3(val) {
      this.multipleSelection3 = val;
      this.personSize3 = this.multipleSelection3.length;
    },
    getAddressList4(course) {
      this.ruleForm.time4 = null;
      this.ruleForm.Address4 = null;
      this.ruleForm.meal4 = null;
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_getTrainAddressList.do?courseid=${course}`
      })
        .then(res => {
          this.selectAddressData4 = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getTimeList4(course) {
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_getTrainTimeList.do?courseid=${course}`
      })
        .then(res => {
          this.selectTimeData4 = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getMealList4(course) {
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_getSetMenuList.do?courseid=${course}`
      })
        .then(res => {
          this.selectMealData4 = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    handleSelectionChange4(val) {
      this.multipleSelection4 = val;
      this.personSize4 = this.multipleSelection4.length;
    }
  },
  mounted() {
    this.getCourseList();
    this.getDiaTableData1();
  }
};
</script>
<style scoped>
.info-notice {
  font-family: "微软雅黑";
  font-size: 12px;
  color: #ee5f5b;
}
.div-delete {
  text-align: center;
  margin: -63px 0px 10px 268px;
  position: absolute;
}
.info-need {
  margin: 0px 0px 0px 49px;
}
.nextPage1-batch {
  text-align: center;
}
.sign-num {
  text-align: right;
  float: left;
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.el-input-number {
  width: 145px;
}
#el-icon-plus1,
#el-icon-plus2,
#el-icon-plus3,
#el-icon-plus4 {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 12px;
  cursor: pointer;
}
#el-icon-minus1,
#el-icon-minus2,
#el-icon-minus3,
#el-icon-minus4 {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 12px;
  cursor: pointer;
}
.div-zone .el-select {
  width: 250px;
}
.sign-submit {
  margin: 20px 0px 0px 240px;
}
.signup-here {
  color: #616bf7;
  font-weight: bold;
  font-size: 17px;
}
#signup-no-info-notice1 {
  margin: 10px 0px 0px 60px;
}
#signup-no-info-notice2 {
  margin: 20px 0px 30px 60px;
}
</style>

