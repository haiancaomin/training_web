<template>
  <div class="CompanySignUp">
    <div calss="batch-sign-up">
      <el-dialog :visible.sync="noEmpShow" width="500px" class="no_emp_dialog">
        <div>
          <p>您尚未添加公司人员，请先前往客户中心-公司人员添加公司人员</p>
        </div>
        <div class="operation_noemp">
          <router-link to="/personalCenter/PersonalCenterAddPerson">
            <el-button type="primary">立即前往</el-button>
          </router-link>
          <el-button type="primary" plain @click="noEmpShow=false">稍等一下</el-button>
        </div>
      </el-dialog>
      <div class="batch-sign-up-notice">
        <p class="info-notice" id="signup-no-info-notice2">注：请仔细确认报名人员，付款成功后，无法更换！如报名人数已满，请联系 0513-81055866 协调！</p>
      </div>
      <el-form class="demo-ruleForm" :model="ruleForm" ref="ruleForm">
        <ol>
          <div class="up-div">
            <div class="div-zone">
              <!-- <el-col :span="12" v-if="form1" id="divZone1"> -->
                <div class="form1">
                  <div class="info-need">
                    <el-form-item label="课程选择" prop="course1">
                      <el-select
                        v-model="ruleForm.course1"
                        placeholder="请选择课程"
                        @change="getCity1(ruleForm.course1),getMealList1(ruleForm.course1),clearAll1()"
                      >
                        <el-option
                          v-for="item in selectCourseData"
                          :key="item.courseid"
                          :label="item.coursename"
                          :value="item.courseid"
                        ></el-option>
                      </el-select>
                      <!-- <span class="el-icon-plus" id="el-icon-plus1" @click="addNew1" v-if="but1"></span>
                      <span
                        class="el-icon-minus"
                        id="el-icon-minus1"
                        @click="deletes1()"
                        v-if="del1"
                      ></span> -->
                    </el-form-item>

                    <el-form-item label="培训地点" prop="Address1">
                      <el-select
                        placeholder="请先选择课程"
                        :disabled="true"
                        v-if="ruleForm.course1==''"
                        value
                      ></el-select>
                      <el-col :span="5">
                        <el-select
                          class="choose_city"
                          v-model="city1"
                          placeholder="城市"
                          v-if="!ruleForm.course1==''"
                          @change="getAddressList1(ruleForm.course1)"
                        >
                          <el-option
                            v-for="(index,item) in selectCity1Data1"
                            :key="index"
                            :label="item[index]"
                            :value="index"
                          ></el-option>
                        </el-select>
                      </el-col>
                      <el-col :span="12">
                        <el-select
                          class="choose_city_address"
                          placeholder="请先选择城市"
                          :disabled="true"
                          v-if="!ruleForm.course1==''&&(city1==''||city1==null)"
                          value
                        ></el-select>
                      </el-col>
                      <el-col :span="12">
                        <el-select
                          class="choose_city_address"
                          v-model="ruleForm.Address1"
                          placeholder="请选择培训地点"
                          v-if="!ruleForm.course1==''&&!city1==''"
                          @change="getTimeList1(ruleForm.course1)"
                        >
                          <el-option
                            v-for="(index,item) in selectAddressData1"
                            :key="index"
                            :label="item[index]"
                            :value="index"
                          ></el-option>
                        </el-select>
                      </el-col>
                    </el-form-item>

                    <el-form-item label="时间选择" prop="time1">
                      <el-select
                        placeholder="请先选择课程"
                        :disabled="true"
                        v-if="ruleForm.course1==''"
                        value
                      ></el-select>
                      <el-select
                        placeholder="请先选择培训地点"
                        :disabled="true"
                        v-if="!ruleForm.course1==''&&(ruleForm.Address1==''||ruleForm.Address1==null)"
                        value
                      ></el-select>
                      <el-select
                        v-model="ruleForm.time1"
                        placeholder="请选择培训时间"
                        v-if="ruleForm.course1!=''&&ruleForm.Address1!=''&&ruleForm.Address1!=null"
                        @change="change_traintime1"
                      >
                        <el-option
                          v-for="item in selectTimeData1"
                          :key="item.timeid"
                          :label="item.traintime"
                          :value="item.timeid"
                        ></el-option>
                      </el-select>
                      <div
                        class="left_num"
                        :class="{'warning_color':warningColor1}"
                        v-if="leftNum1>0&&showLeftNum1"
                      >该批次剩余可报名人数：{{leftNum1}}</div>
                      <div class="warning_color" v-if="leftNum1<1&&showLeftNum1">报名人数已满</div>
                      <div class="warning_color" v-if="checkSame1">有相同的报名条件</div>
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
                          max-height="350"
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
                        <el-button type="primary" @click="chooseEmp1" class="choose-person">选择人员</el-button>
                      </div>
                    </el-form-item>
                  </div>
                </div>
              <!-- </el-col> -->
            </div>

            <!-- <div class="div-zone">
              <el-col :span="12" v-if="form2">
                <li class="form2">
                  <div class="info-need">
                    <el-form-item label="课程选择" prop="course2">
                      <el-select
                        v-model="ruleForm.course2"
                        placeholder="请选择课程"
                        @change="getCity2(ruleForm.course2),getMealList2(ruleForm.course2),clearAll2()"
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
                      <el-col :span="5">
                        <el-select
                          class="choose_city"
                          v-model="city2"
                          placeholder="城市"
                          v-if="!ruleForm.course2==''"
                          @change="getAddressList2(ruleForm.course2)"
                        >
                          <el-option
                            v-for="(index,item) in selectCity1Data2"
                            :key="index"
                            :label="item[index]"
                            :value="index"
                          ></el-option>
                        </el-select>
                      </el-col>
                      <el-col :span="12">
                        <el-select
                          class="choose_city_address"
                          placeholder="请先选择城市"
                          :disabled="true"
                          v-if="!ruleForm.course2==''&&(city2==''||city2==null)"
                          value
                        ></el-select>
                      </el-col>
                      <el-col :span="12">
                        <el-select
                          class="choose_city_address"
                          v-model="ruleForm.Address2"
                          placeholder="请选择培训地点"
                          v-if="!ruleForm.course2==''&&!city2==''"
                          @change="getTimeList2(ruleForm.course2)"
                        >
                          <el-option
                            v-for="(index,item) in selectAddressData2"
                            :key="index"
                            :label="item[index]"
                            :value="index"
                          ></el-option>
                        </el-select>
                      </el-col>
                    </el-form-item>

                    <el-form-item label="时间选择" prop="time2">
                      <el-select
                        placeholder="请先选择课程"
                        :disabled="true"
                        v-if="ruleForm.course2==''"
                        value
                      ></el-select>
                      <el-select
                        placeholder="请先选择培训地点"
                        :disabled="true"
                        v-if="!ruleForm.course2==''&&(ruleForm.Address2==''||ruleForm.Address2==null)"
                        value
                      ></el-select>
                      <el-select
                        v-model="ruleForm.time2"
                        placeholder="请选择培训时间"
                        v-if="ruleForm.course2!=''&&ruleForm.Address2!=''&&ruleForm.Address2!=null"
                        @change="change_traintime2"
                      >
                        <el-option
                          v-for="item in selectTimeData2"
                          :key="item.timeid"
                          :label="item.traintime"
                          :value="item.timeid"
                        ></el-option>
                      </el-select>
                      <div
                        class="left_num"
                        :class="{'warning_color':warningColor2}"
                        v-if="leftNum2>0&&showLeftNum2"
                      >该批次剩余可报名人数：{{leftNum2}}</div>
                      <div class="warning_color" v-if="leftNum2<1&&showLeftNum2">报名人数已满</div>
                      <div class="warning_color" v-if="checkSame2">有相同的报名条件</div>
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
                        <el-button type="primary" @click="chooseEmp2">选择人员</el-button>
                      </div>
                    </el-form-item>
                  </div>
                </li>
              </el-col>
            </div> -->
          </div>

          <!-- <div class="down-div">
            <div class="div-zone">
              <el-col :span="12" v-if="form3">
                <li class="form3">
                  <div class="info-need">
                    <el-form-item label="课程选择" prop="course3" id="education">
                      <el-select
                        v-model="ruleForm.course3"
                        placeholder="请选择课程"
                        @change="getCity3(ruleForm.course3),getMealList3(ruleForm.course3),clearAll3()"
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
                      <el-col :span="5">
                        <el-select
                          class="choose_city"
                          v-model="city3"
                          placeholder="城市"
                          v-if="!ruleForm.course3==''"
                          @change="getAddressList3(ruleForm.course3)"
                        >
                          <el-option
                            v-for="(index,item) in selectCity1Data3"
                            :key="index"
                            :label="item[index]"
                            :value="index"
                          ></el-option>
                        </el-select>
                      </el-col>
                      <el-col :span="12">
                        <el-select
                          class="choose_city_address"
                          placeholder="请先选择城市"
                          :disabled="true"
                          v-if="!ruleForm.course3==''&&(city3==''||city3==null)"
                          value
                        ></el-select>
                      </el-col>
                      <el-col :span="12">
                        <el-select
                          class="choose_city_address"
                          v-model="ruleForm.Address3"
                          placeholder="请选择培训地点"
                          v-if="!ruleForm.course3==''&&!city3==''"
                          @change="getTimeList3(ruleForm.course3)"
                        >
                          <el-option
                            v-for="(index,item) in selectAddressData3"
                            :key="index"
                            :label="item[index]"
                            :value="index"
                          ></el-option>
                        </el-select>
                      </el-col>
                    </el-form-item>

                    <el-form-item label="时间选择" prop="time3">
                      <el-select
                        placeholder="请先选择课程"
                        :disabled="true"
                        v-if="ruleForm.course3==''"
                        value
                      ></el-select>
                      <el-select
                        placeholder="请先选择培训地点"
                        :disabled="true"
                        v-if="!ruleForm.course3==''&&(ruleForm.Address3==''||ruleForm.Address3==null)"
                        value
                      ></el-select>
                      <el-select
                        v-model="ruleForm.time3"
                        placeholder="请选择培训时间"
                        v-if="ruleForm.course3!=''&&ruleForm.Address3!=''&&ruleForm.Address3!=null"
                        @change="change_traintime3"
                      >
                        <el-option
                          v-for="item in selectTimeData3"
                          :key="item.timeid"
                          :label="item.traintime"
                          :value="item.timeid"
                        ></el-option>
                      </el-select>
                      <div
                        class="left_num"
                        :class="{'warning_color':warningColor3}"
                        v-if="leftNum3>0&&showLeftNum3"
                      >该批次剩余可报名人数：{{leftNum3}}</div>
                      <div class="warning_color" v-if="leftNum3<1&&showLeftNum3">报名人数已满</div>
                      <div class="warning_color" v-if="checkSame3">有相同的报名条件</div>
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
                        <el-button type="primary" @click="chooseEmp3">选择人员</el-button>
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
                        @change="getCity4(ruleForm.course4),getMealList4(ruleForm.course4),clearAll4()"
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
                      <el-col :span="5">
                        <el-select
                          class="choose_city"
                          v-model="city4"
                          placeholder="城市"
                          v-if="!ruleForm.course4==''"
                          @change="getAddressList4(ruleForm.course4)"
                        >
                          <el-option
                            v-for="(index,item) in selectCity1Data4"
                            :key="index"
                            :label="item[index]"
                            :value="index"
                          ></el-option>
                        </el-select>
                      </el-col>
                      <el-col :span="12">
                        <el-select
                          class="choose_city_address"
                          placeholder="请先选择城市"
                          :disabled="true"
                          v-if="!ruleForm.course4==''&&(city4==''||city4==null)"
                          value
                        ></el-select>
                      </el-col>
                      <el-col :span="12">
                        <el-select
                          class="choose_city_address"
                          v-model="ruleForm.Address4"
                          placeholder="请选择培训地点"
                          v-if="!ruleForm.course4==''&&!city4==''"
                          @change="getTimeList4(ruleForm.course4)"
                        >
                          <el-option
                            v-for="(index,item) in selectAddressData4"
                            :key="index"
                            :label="item[index]"
                            :value="index"
                          ></el-option>
                        </el-select>
                      </el-col>
                    </el-form-item>

                    <el-form-item label="时间选择" prop="time1">
                      <el-select
                        placeholder="请先选择课程"
                        :disabled="true"
                        v-if="ruleForm.course4==''"
                        value
                      ></el-select>
                      <el-select
                        placeholder="请先选择培训地点"
                        :disabled="true"
                        v-if="!ruleForm.course4==''&&(ruleForm.Address4==''||ruleForm.Address4==null)"
                        value
                      ></el-select>
                      <el-select
                        v-model="ruleForm.time4"
                        placeholder="请选择培训时间"
                        v-if="ruleForm.course4!=''&&ruleForm.Address4!=''&&ruleForm.Address4!=null"
                        @change="change_traintime4"
                      >
                        <el-option
                          v-for="item in selectTimeData4"
                          :key="item.timeid"
                          :label="item.traintime"
                          :value="item.timeid"
                        ></el-option>
                      </el-select>
                      <div
                        class="left_num"
                        :class="{'warning_color':warningColor4}"
                        v-if="leftNum4>0&&showLeftNum4"
                      >该批次剩余可报名人数：{{leftNum4}}</div>
                      <div class="warning_color" v-if="leftNum4<1&&showLeftNum4">报名人数已满</div>
                      <div class="warning_color" v-if="checkSame4">有相同的报名条件</div>
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
                        <el-button type="primary" @click="chooseEmp4">选择人员</el-button>
                      </div>
                    </el-form-item>
                  </div>
                </li>
              </el-col>
            </div>
          </div> -->
          <el-col :span="24">
            <div class="nextPage1-batch">
              <el-form-item>
                <el-button type="primary" @click.prevent="submitForm1('ruleForm')">下一步</el-button>
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
      checkSame1:false,
      checkSame2:false,
      checkSame3:false,
      checkSame4:false,
      city1: "",
      city2: "",
      city3: "",
      city4: "",
      active: 0,
      signUpPage: 1,
      accountsPage: 0,
      noEmpShow: false,
      selectCity1Data1: [],
      selectCity1Data2: [],
      selectCity1Data3: [],
      selectCity1Data4: [],
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
      tableData1: [],
      leftNum1: 0,
      leftNum2: 0,
      leftNum3: 0,
      leftNum4: 0,
      showLeftNum1: false,
      showLeftNum2: false,
      showLeftNum3: false,
      showLeftNum4: false,
      choose_traintime1: "",
      choose_traintime2: "",
      choose_traintime3: "",
      choose_traintime4: "",
      warningColor1: false,
      warningColor2: false,
      warningColor3: false,
      warningColor4: false,
      empids1:"",
      checkRepeatEmp: true
    };
  },
  methods: {
    chooseEmp1() {
      if (this.tableData1.length > 0) {
        this.centerDialogVisible1 = true;
      } else {
        this.$message({
          message: "请先前往客户中心-公司人员添加公司人员",
          center: true,
          type: "warning",
          customClass: "zZindex"
        });
        this.noEmpShow = true;
      }
    },
    chooseEmp2() {
      if (this.tableData1.length > 0) {
        this.centerDialogVisible2 = true;
      } else {
        this.$message({
          message: "请先前往客户中心-公司人员添加公司人员",
          center: true,
          type: "warning",
          customClass: "zZindex"
        });
        this.noEmpShow = true;
      }
    },
    chooseEmp3() {
      if (this.tableData1.length > 0) {
        this.centerDialogVisible3 = true;
      } else {
        this.$message({
          message: "请先前往客户中心-公司人员添加公司人员",
          center: true,
          type: "warning",
          customClass: "zZindex"
        });
        this.noEmpShow = true;
      }
    },
    chooseEmp4() {
      if (this.tableData1.length > 0) {
        this.centerDialogVisible4 = true;
      } else {
        this.$message({
          message: "请先前往客户中心-公司人员添加公司人员",
          center: true,
          type: "warning",
          customClass: "zZindex"
        });
        this.noEmpShow = true;
      }
    },
    submitForm1(formName) {
      var from1Empty = 0;
      var from2Empty = 0;
      var from3Empty = 0;
      var from4Empty = 0;
      console.log(this.ruleForm.course1);
      console.log(this.ruleForm.Address1);
      console.log(this.ruleForm.time1 == null);
      console.log(this.ruleForm.meal1 == null);
      console.log(this.personSize1);
      if (
        this.ruleForm.course1 == "" ||
        this.ruleForm.course1 == null ||
        this.ruleForm.Address1 == "" ||
        this.ruleForm.Address1 == null ||
        this.ruleForm.time1 == "" ||
        this.ruleForm.time1 == null ||
        this.ruleForm.meal1 == "" ||
        this.ruleForm.meal1 == null ||
        this.personSize1 < 1
      ) {
        from1Empty = 1;
      }
      if (
        this.ruleForm.course2 == "" ||
        this.ruleForm.course2 == null ||
        this.ruleForm.Address2 == "" ||
        this.ruleForm.Address2 == null ||
        this.ruleForm.time2 == "" ||
        this.ruleForm.time2 == null ||
        this.ruleForm.meal2 == "" ||
        this.ruleForm.meal2 == null ||
        this.personSize2 < 1
      ) {
        from2Empty = 1;
      }
      if (
        this.ruleForm.course3 == "" ||
        this.ruleForm.course3 == null ||
        this.ruleForm.Address3 == "" ||
        this.ruleForm.Address3 == null ||
        this.ruleForm.time3 == "" ||
        this.ruleForm.time3 == null ||
        this.ruleForm.meal3 == "" ||
        this.ruleForm.meal3 == null ||
        this.personSize3 < 1
      ) {
        from3Empty = 1;
      }
      
      if (
        this.ruleForm.course4 == "" ||
        this.ruleForm.course4 == null ||
        this.ruleForm.Address4 == "" ||
        this.ruleForm.Address4 == null ||
        this.ruleForm.time4 == "" ||
        this.ruleForm.time4 == null ||
        this.ruleForm.meal4 == "" ||
        this.ruleForm.meal4 == null ||
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
          type: "error",
          center: true
        });
      } 
      // }else if (
      //   this.ruleForm.course1 == this.ruleForm.course2 && this.ruleForm.course2 == this.ruleForm.course3 && this.ruleForm.course3 == this.ruleForm.course4 &&
      //   this.ruleForm.time1 == this.ruleForm.time2 && this.ruleForm.time2 == this.ruleForm.time3 && this.ruleForm.time3 == this.ruleForm.time4 &&
      //   this.ruleForm.meal1 == this.ruleForm.meal2 && this.ruleForm.meal2 == this.ruleForm.meal3 && this.ruleForm.meal3 == this.ruleForm.meal4 
      //   && from1Empty == 0
      //   && from2Empty == 0
      //   && from3Empty == 0
      //   && from4Empty == 0
      // ) {
      //   this.checkSame1 = this.checkSame2 = this.checkSame3 = this.checkSame4 = true;
      //   this.showLeftNum1 = this.showLeftNum2 = this.showLeftNum3 = this.showLeftNum4 = false;
      //   this.$message({
      //     message: "有条件相同的报名信息！",
      //     type: "error",
      //     center: true
      //   });
      // }
      // else if (
      //   this.ruleForm.course1 == this.ruleForm.course2 && this.ruleForm.course2 == this.ruleForm.course3 &&
      //   this.ruleForm.time1 == this.ruleForm.time2 && this.ruleForm.time2 == this.ruleForm.time3 &&
      //   this.ruleForm.meal1 == this.ruleForm.meal2 && this.ruleForm.meal2 == this.ruleForm.meal3
      //   && from1Empty == 0
      //   && from2Empty == 0
      //   && from3Empty == 0
        
      // ) {
      //   this.checkSame1 = this.checkSame2 = this.checkSame3 = true;
      //   this.showLeftNum1 = this.showLeftNum2 = this.showLeftNum3 = false;
      //   this.$message({
      //     message: "有条件相同的报名信息！",
      //     type: "error",
      //     center: true
      //   });
      // }
      // else if (
      //   this.ruleForm.course1 == this.ruleForm.course2 && this.ruleForm.course2 == this.ruleForm.course4 &&
      //   this.ruleForm.time1 == this.ruleForm.time2 && this.ruleForm.time2 == this.ruleForm.time4 &&
      //   this.ruleForm.meal1 == this.ruleForm.meal2 && this.ruleForm.meal2 == this.ruleForm.meal4
      //   && from1Empty == 0
      //   && from2Empty == 0
      //   && from4Empty == 0
      // ) {
      //   this.checkSame1 = this.checkSame2 = this.checkSame4 = true;
      //   this.showLeftNum1 = this.showLeftNum2 = this.showLeftNum4 = false;
      //   this.$message({
      //     message: "有条件相同的报名信息！",
      //     type: "error",
      //     center: true
      //   });
      // }
      // else if (
      //   this.ruleForm.course1 == this.ruleForm.course3 && this.ruleForm.course3 == this.ruleForm.course4 &&
      //   this.ruleForm.time1 == this.ruleForm.time3 && this.ruleForm.time3 == this.ruleForm.time4 &&
      //   this.ruleForm.meal1 == this.ruleForm.meal3 && this.ruleForm.meal3 == this.ruleForm.meal4
      //   && from1Empty == 0
      //   && from3Empty == 0
      //   && from4Empty == 0
      // ) {
      //   this.checkSame1 = this.checkSame3 = this.checkSame4 = true;
      //   this.showLeftNum1 = this.showLeftNum3 = this.showLeftNum4 = false;
      //   this.$message({
      //     message: "有条件相同的报名信息！",
      //     type: "error",
      //     center: true
      //   });
      // }
      // else if (
      //   this.ruleForm.course2 == this.ruleForm.course3 && this.ruleForm.course3 == this.ruleForm.course4 &&
      //   this.ruleForm.time2 == this.ruleForm.time3 && this.ruleForm.time3 == this.ruleForm.time4 &&
      //   this.ruleForm.meal2 == this.ruleForm.meal3 && this.ruleForm.meal3 == this.ruleForm.meal4
      //   && from2Empty == 0
      //   && from3Empty == 0
      //   && from4Empty == 0
      // ) {
      //   this.checkSame2 = this.checkSame3 = this.checkSame4 = true;
      //   this.showLeftNum2 = this.showLeftNum3 = this.showLeftNum4 = false;
      //   this.$message({
      //     message: "有条件相同的报名信息！",
      //     type: "error",
      //     center: true
      //   });
      // }
      // else if (
      //   this.ruleForm.course1 == this.ruleForm.course2 &&
      //   this.ruleForm.time1 == this.ruleForm.time2 &&
      //   this.ruleForm.meal1 == this.ruleForm.meal2
      //   && from1Empty == 0
      //   && from2Empty == 0
      // ) {
      //   if (
      //   this.ruleForm.course3 == this.ruleForm.course4 &&
      //   this.ruleForm.time3 == this.ruleForm.time4 &&
      //   this.ruleForm.meal3 == this.ruleForm.meal4 
      //   && from3Empty == 0
      //   && from4Empty == 0
      // ) {
      //   this.checkSame3 = this.checkSame4 = true;
      //   this.showLeftNum3 = this.showLeftNum4 = false;
      // }
      //   this.checkSame1 = this.checkSame2 = true;
      //   this.showLeftNum1 = this.showLeftNum2 = false;
      //   this.$message({
      //     message: "有条件相同的报名信息！",
      //     type: "error",
      //     center: true
      //   });
      // }
      // else if (
      //   this.ruleForm.course1 == this.ruleForm.course3 &&
      //   this.ruleForm.time1 == this.ruleForm.time3 &&
      //   this.ruleForm.meal1 == this.ruleForm.meal3
      //   && from1Empty == 0
      //   && from3Empty == 0
      // ) {
      //   if (
      //   this.ruleForm.course2 == this.ruleForm.course4 &&
      //   this.ruleForm.time2 == this.ruleForm.time4 &&
      //   this.ruleForm.meal2 == this.ruleForm.meal4
      //   && from2Empty == 0
      //   && from4Empty == 0
      // ) {
      //   this.checkSame2 = this.checkSame4 = true;
      //   this.showLeftNum2 = this.showLeftNum4 = false;
      // }
      //   this.checkSame1 = this.checkSame3 = true;
      //   this.showLeftNum1 = this.showLeftNum3 = false;
      //   this.$message({
      //     message: "有条件相同的报名信息！",
      //     type: "error",
      //     center: true
      //   });
      // }
      // else if (
      //   this.ruleForm.course1 == this.ruleForm.course4 &&
      //   this.ruleForm.time1 == this.ruleForm.time4 &&
      //   this.ruleForm.meal1 == this.ruleForm.meal4
      //   && from1Empty == 0
      //   && from4Empty == 0
      // ) {
      //   if (
      //   this.ruleForm.course2 == this.ruleForm.course3 &&
      //   this.ruleForm.time2 == this.ruleForm.time3 &&
      //   this.ruleForm.meal2 == this.ruleForm.meal3
      //   && from2Empty == 0
      //   && from3Empty == 0

      // ) {
      //   this.checkSame2 = this.checkSame3 = true;
      //   this.showLeftNum2 = this.showLeftNum3 = false;
      // }
      //   this.checkSame1 = this.checkSame4 = true;
      //   this.showLeftNum1 = this.showLeftNum4 = false;
      //   this.$message({
      //     message: "有条件相同的报名信息！",
      //     type: "error",
      //     center: true
      //   });
      // }
      // else if (
      //   this.ruleForm.course2 == this.ruleForm.course3 &&
      //   this.ruleForm.time2 == this.ruleForm.time3 &&
      //   this.ruleForm.meal2 == this.ruleForm.meal3
      //   && from2Empty == 0
      //   && from3Empty == 0
      // ) {
      //   if (
      //   this.ruleForm.course1 == this.ruleForm.course4 &&
      //   this.ruleForm.time1 == this.ruleForm.time4 &&
      //   this.ruleForm.meal1 == this.ruleForm.meal4
      //   && from1Empty == 0
      //   && from4Empty == 0
      // ) {
      //   this.checkSame1 = this.checkSame4 = true;
      //   this.showLeftNum1 = this.showLeftNum4 = false;
      // }
      //   this.checkSame2 = this.checkSame3 = true;
      //   this.showLeftNum2 = this.showLeftNum3 = false;
      //   this.$message({
      //     message: "有条件相同的报名信息！",
      //     type: "error",
      //     center: true
      //   });
      // }
      // else if (
      //   this.ruleForm.course2 == this.ruleForm.course4 &&
      //   this.ruleForm.time2 == this.ruleForm.time4 &&
      //   this.ruleForm.meal2 == this.ruleForm.meal4      
      //   && from2Empty == 0
      //   && from4Empty == 0
      // ) {
      //   if (
      //   this.ruleForm.course1 == this.ruleForm.course3 &&
      //   this.ruleForm.time1 == this.ruleForm.time3 &&
      //   this.ruleForm.meal1 == this.ruleForm.meal3
      //   && from1Empty == 0
      //   && from3Empty == 0
      // ) {
      //   this.checkSame1 = this.checkSame3 = true;
      //   this.showLeftNum1 = this.showLeftNum3 = false;
      // }
      //   this.checkSame2 = this.checkSame4 = true;
      //   this.showLeftNum2 = this.showLeftNum4 = false;
      //   this.$message({
      //     message: "有条件相同的报名信息！",
      //     type: "error",
      //     center: true
      //   });
      // }
      // else if (
      //   this.ruleForm.course3 == this.ruleForm.course4 &&
      //   this.ruleForm.time3 == this.ruleForm.time4 &&
      //   this.ruleForm.meal3 == this.ruleForm.meal4
      //   && from3Empty == 0
      //   && from4Empty == 0
      // ) {
      //   if (
      //   this.ruleForm.course1 == this.ruleForm.course2 &&
      //   this.ruleForm.time1 == this.ruleForm.time2 &&
      //   this.ruleForm.meal1 == this.ruleForm.meal2
      //   && from1Empty == 0
      //   && from2Empty == 0
      // ) {
      //   this.checkSame1 = this.checkSame2 = true;
      //   this.showLeftNum1 = this.showLeftNum2 = false;
      // }
      //   this.checkSame3 = this.checkSame4 = true;
      //   this.showLeftNum3 = this.showLeftNum4 = false;
      //   this.$message({
      //     message: "有条件相同的报名信息！",
      //     type: "error",
      //     center: true
      //   });
      // }
      else if (from1Empty == 0 && this.personSize1 > this.leftNum1) {
        if (from2Empty == 0 && this.personSize2 > this.leftNum2) {
          this.warningColor2 = true;
        }
        if (from3Empty == 0 && this.personSize3 > this.leftNum3) {
          this.warningColor3 = true;
        }
        if (from4Empty == 0 && this.personSize4 > this.leftNum4) {
          this.warningColor4 = true;
        }
        this.warningColor1 = true;
        this.$message({
          message: "您的报名人数超过了剩余名额！",
          type: "error",
          center: true
        });
      } else if (from2Empty == 0 && this.personSize2 > this.leftNum2) {
        if (from1Empty == 0 && this.personSize1 > this.leftNum1) {
          this.warningColor1 = true;
        }
        if (from3Empty == 0 && this.personSize3 > this.leftNum3) {
          this.warningColor3 = true;
        }
        if (from4Empty == 0 && this.personSize4 > this.leftNum4) {
          this.warningColor4 = true;
        }
        this.warningColor2 = true;
        this.$message({
          message: "您的报名人数超过了剩余名额！",
          type: "error",
          center: true
        });
      } else if (from3Empty == 0 && this.personSize3 > this.leftNum3) {
        if (from2Empty == 0 && this.personSize2 > this.leftNum2) {
          this.warningColor2 = true;
        }
        if (from1Empty == 0 && this.personSize1 > this.leftNum1) {
          this.warningColor1 = true;
        }
        if (from4Empty == 0 && this.personSize4 > this.leftNum4) {
          this.warningColor4 = true;
        }
        this.warningColor3 = true;
        this.$message({
          message: "您的报名人数超过了剩余名额！",
          type: "error",
          center: true
        });
      } else if (from4Empty == 0 && this.personSize4 > this.leftNum4) {
        if (from2Empty == 0 && this.personSize2 > this.leftNum2) {
          this.warningColor2 = true;
        }
        if (from3Empty == 0 && this.personSize3 > this.leftNum3) {
          this.warningColor3 = true;
        }
        if (from1Empty == 0 && this.personSize1 > this.leftNum1) {
          this.warningColor1 = true;
        }
        this.warningColor4 = true;
        this.$message({
          message: "您的报名人数超过了剩余名额！",
          type: "error",
          center: true
        });
      } else {
        this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_validateEmployee.do?timeid=${this.ruleForm.time1}&employeeids=${this.empids1}`
      })
        .then(res => {
          this.checkRepeatEmp = res.data.data;
          if (this.checkRepeatEmp) {
             this.warningColor1 = this.warningColor2 = this.warningColor3 = this.warningColor4 = false;
        this.signUpPage = 0;
        this.accountsPage = 1;
        this.active = 1;
        this.$emit("ToAccountsPage", {
          signUpPage: this.firstPage,
          accountsPage: this.accountsPage,
          active: this.active
        });
        this.bus.$emit("todata", {
          type: "4",
          city1: this.city1,
          city2: this.city2,
          city3: this.city3,
          city4: this.city4,
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
          } else {
            this.$message({
          message: "您有报名人员已经报名本批次，请重新选择人员!",
          type: "error",
          center: true
        });
          }
        })
        .catch(function(err) {
          console.log(err);
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
      this.showLeftNum1 = false;
      this.leftNum1 = 0;
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
      this.showLeftNum2 = false;
      this.leftNum2 = 0;
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
      this.showLeftNum3 = false;
      this.leftNum3 = 0;
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
      this.showLeftNum4 = false;
      this.leftNum4 = 0;
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
    clearAll1() {
      this.city1 = null;
      this.ruleForm.time1 = null;
      this.ruleForm.Address1 = null;
      this.ruleForm.meal1 = null;
      this.showLeftNum1 = false;
    },
    clearAll2() {
      this.city2 = null;
      this.ruleForm.time2 = null;
      this.ruleForm.Address2 = null;
      this.ruleForm.meal2 = null;
      this.showLeftNum2 = false;
    },
    clearAll3() {
      this.city3 = null;
      this.ruleForm.time3 = null;
      this.ruleForm.Address3 = null;
      this.ruleForm.meal3 = null;
      this.showLeftNum3 = false;
    },
    clearAll4() {
      this.city4 = null;
      this.ruleForm.time4 = null;
      this.ruleForm.Address4 = null;
      this.ruleForm.meal4 = null;
      this.showLeftNum4 = false;
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
    getCity1(course) {
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/course_getCityList.do?courseid=${course}`
      })
        .then(res => {
          this.selectCity1Data1 = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getCity2(course) {
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/course_getCityList.do?courseid=${course}`
      })
        .then(res => {
          this.selectCity1Data2 = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getCity3(course) {
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/course_getCityList.do?courseid=${course}`
      })
        .then(res => {
          this.selectCity1Data3 = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getCity4(course) {
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/course_getCityList.do?courseid=${course}`
      })
        .then(res => {
          this.selectCity1Data4 = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getAddressList1(course) {
      this.showLeftNum1 = false;
      this.ruleForm.Address1 = null;
      this.ruleForm.time1 = null;
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_getTrainAddressList.do?courseid=${course}&city=${
          this.city1
        }`
      })
        .then(res => {
          this.selectAddressData1 = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getTimeList1(course) {
      this.showLeftNum1 = false;
      this.ruleForm.time1 = null;
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_getTimeList.do?courseid=${course}&city=${
          this.city1
        }&address=${this.ruleForm.Address1}`
      })
        .then(res => {
          this.selectTimeData1 = res.data.data;
          console.log(this.selectTimeData1);
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
      this.empids1 = "";
      this.multipleSelection1 = val;
       if (this.multipleSelection1.length >= 1) {
        for (var i = 0; i < this.multipleSelection1.length - 1; i++) {
          this.empids1 += this.multipleSelection1[i].empid + ",";
        }
        var last1 = this.multipleSelection1.length - 1;
        this.empids1 += this.multipleSelection1[last1].empid;
      }

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
      this.showLeftNum2 = false;
      this.ruleForm.Address2 = null;
      this.ruleForm.time2 = null;
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_getTrainAddressList.do?courseid=${course}&city=${
          this.city2
        }`
      })
        .then(res => {
          this.selectAddressData2 = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getTimeList2(course) {
      this.showLeftNum2 = false;
      this.ruleForm.time2 = null;
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_getTimeList.do?courseid=${course}&city=${
          this.city2
        }&address=${this.ruleForm.Address2}`
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
      this.showLeftNum3 = false;
      this.ruleForm.Address3 = null;
      this.ruleForm.time3 = null;
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_getTrainAddressList.do?courseid=${course}&city=${
          this.city3
        }`
      })
        .then(res => {
          this.selectAddressData3 = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getTimeList3(course) {
      this.showLeftNum3 = false;
      this.ruleForm.time3 = null;
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_getTimeList.do?courseid=${course}&city=${
          this.city3
        }&address=${this.ruleForm.Address3}`
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
      this.showLeftNum4 = false;
      this.ruleForm.Address4 = null;
      this.ruleForm.time4 = null;
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_getTrainAddressList.do?courseid=${course}&city=${
          this.city4
        }`
      })
        .then(res => {
          this.selectAddressData4 = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getTimeList4(course) {
      this.showLeftNum4 = false;
      this.ruleForm.time4 = null;
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_getTimeList.do?courseid=${course}&city=${
          this.city4
        }&address=${this.ruleForm.Address4}`
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
    },
    change_traintime1(val) {
      if(this.ruleForm.time1 != ""&& this.ruleForm.time1 != null && this.ruleForm.time1 != undefined) {
        this.showLeftNum1 = true;
      }
      if(this.ruleForm.time2 != ""&& this.ruleForm.time2 != null && this.ruleForm.time2 != undefined) {
        this.showLeftNum2 = true;
      }
      if(this.ruleForm.time3 != ""&& this.ruleForm.time3 != null && this.ruleForm.time3 != undefined) {
        this.showLeftNum3 = true;
      }
      if(this.ruleForm.time4 != ""&& this.ruleForm.time4 != null && this.ruleForm.time4 != undefined) {
        this.showLeftNum4 = true;
      }
      this.checkSame1 = false;
      this.checkSame2 = false;
      this.checkSame3 = false;
      this.checkSame4 = false;
      this.warningColor1 = false;
      this.choose_traintime1 = val;
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/course_getRemainderByTime.do?timeid=${val}`
      })
        .then(res => {
          this.leftNum1 = res.data.data;
          this.showLeftNum1 = true;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    change_traintime2(val) {
      if(this.ruleForm.time1 != ""&& this.ruleForm.time1 != null && this.ruleForm.time1 != undefined) {
        this.showLeftNum1 = true;
      }
      if(this.ruleForm.time2 != ""&& this.ruleForm.time2 != null && this.ruleForm.time2 != undefined) {
        this.showLeftNum2 = true;
      }
      if(this.ruleForm.time3 != ""&& this.ruleForm.time3 != null && this.ruleForm.time3 != undefined) {
        this.showLeftNum3 = true;
      }
      if(this.ruleForm.time4 != ""&& this.ruleForm.time4 != null && this.ruleForm.time4 != undefined) {
        this.showLeftNum4 = true;
      }
      this.checkSame1 = false;
      this.checkSame2 = false;
      this.checkSame3 = false;
      this.checkSame4 = false;
      this.warningColor2 = false;
      this.choose_traintime2 = val;
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/course_getRemainderByTime.do?timeid=${val}`
      })
        .then(res => {
          this.leftNum2 = res.data.data;
          this.showLeftNum2 = true;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    change_traintime3(val) {
      if(this.ruleForm.time1 != ""&& this.ruleForm.time1 != null && this.ruleForm.time1 != undefined) {
        this.showLeftNum1 = true;
      }
      if(this.ruleForm.time2 != ""&& this.ruleForm.time2 != null && this.ruleForm.time2 != undefined) {
        this.showLeftNum2 = true;
      }
      if(this.ruleForm.time3 != ""&& this.ruleForm.time3 != null && this.ruleForm.time3 != undefined) {
        this.showLeftNum3 = true;
      }
      if(this.ruleForm.time4 != ""&& this.ruleForm.time4 != null && this.ruleForm.time4 != undefined) {
        this.showLeftNum4 = true;
      }
      this.checkSame1 = false;
      this.checkSame2 = false;
      this.checkSame3 = false;
      this.checkSame4 = false;
      this.warningColor3 = false;
      this.choose_traintime3 = val;
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/course_getRemainderByTime.do?timeid=${val}`
      })
        .then(res => {
          this.leftNum3 = res.data.data;
          this.showLeftNum3 = true;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    change_traintime4(val) {
      if(this.ruleForm.time1 != ""&& this.ruleForm.time1 != null && this.ruleForm.time1 != undefined) {
        this.showLeftNum1 = true;
      }
      if(this.ruleForm.time2 != ""&& this.ruleForm.time2 != null && this.ruleForm.time2 != undefined) {
        this.showLeftNum2 = true;
      }
      if(this.ruleForm.time3 != ""&& this.ruleForm.time3 != null && this.ruleForm.time3 != undefined) {
        this.showLeftNum3 = true;
      }
      if(this.ruleForm.time4 != ""&& this.ruleForm.time4 != null && this.ruleForm.time4 != undefined) {
        this.showLeftNum4 = true;
      }
      this.checkSame1 = false;
      this.checkSame2 = false;
      this.checkSame3 = false;
      this.checkSame4 = false;
      this.warningColor4 = false;
      this.choose_traintime4 = val;
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/course_getRemainderByTime.do?timeid=${val}`
      })
        .then(res => {
          this.leftNum4 = res.data.data;
          this.showLeftNum4 = true;
        })
        .catch(function(err) {
          console.log(err);
        });
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
.div-zone .choose_city {
  width: 80px;
}
.div-zone .choose_city_address {
  width: 164px;
}
.sign-submit {
  margin: 20px 0px 0px 240px;
}
#signup-no-info-notice1 {
  margin: 10px 0px 0px 60px;
}
#signup-no-info-notice2 {
  margin: 20px 0px 30px 60px;
}
.operation_noemp {
  margin: 30px 0px 0px 0px;
}
.operation_noemp .el-button {
  margin: 0px 20px;
}
.no_emp_dialog {
  text-align: center;
}
.left_num {
  position: absolute;
  margin: -10px 0px 0px 70px;
  font-size: 12px;
  color: #67c23a;
}
.warning_color {
  position: absolute;
  margin: -10px 0px 0px 70px;
  font-size: 12px;
  color: #f56c6c;
  font-weight: bold;
  animation: warnNum 0.5s;
  -moz-animation: warnNum 0.5s; /* Firefox */
  -webkit-animation: warnNum 0.5s; /* Safari and Chrome */
  -o-animation: warnNum 0.5s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes warnNum {
  0% {
    margin-left: 70px;
  }
  25% {
    margin-left: 80px;
  }
  50% {
    margin-left: 60px;
  }
  75% {
    margin-left: 80px;
  }
  100% {
    margin-left: 70px;
  }
}

@-moz-keyframes warnNum /* Firefox */ {
  0% {
    margin-left: 70px;
  }
  25% {
    margin-left: 80px;
  }
  50% {
    margin-left: 60px;
  }
  75% {
    margin-left: 80px;
  }
  100% {
    margin-left: 70px;
  }
}
@-webkit-keyframes warnNum /* Safari and Chrome */ {
  0% {
    margin-left: 70px;
  }
  25% {
    margin-left: 80px;
  }
  50% {
    margin-left: 60px;
  }
  75% {
    margin-left: 80px;
  }
  100% {
    margin-left: 70px;
  }
}
@-o-keyframes warnNum /* Opera */ {
  0% {
    margin-left: 70px;
  }
  25% {
    margin-left: 80px;
  }
  50% {
    margin-left: 60px;
  }
  75% {
    margin-left: 80px;
  }
  100% {
    margin-left: 70px;
  }
}
.form1 {
  width:465px;
  margin:0px auto;
}
</style>