<template>
  <div id="signup">
    <el-steps :active="active" finish-status="success" simple style="margin-top: 80px">
      <el-step title="报名信息"></el-step>
      <el-step title="信息预览"></el-step>
      <el-step title="费用"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>

    <!-- 报名信息页面page1 -->
    <div class="sign-up-info" v-show="firstPage == 1">
      <el-tabs type="border-card">
        <el-tab-pane label="公司报名">
          <div calss="batch-sign-up">
            <div class="batch-sign-up-notice">
              <p id="signup-no-info-notice1">企业报名请先确认已在客户中心添加过报名人员的信息, 如您还未添加过报名人员信息,请点击
                <router-link to="/PersonalCenter">
                  <span class="signup-here">这里</span>
                </router-link>进入客户中心填写。
              </p>
              <p class="info-notice" id="signup-no-info-notice2">注：如报名条件不同，可以通过点击添加按钮选择新的报名条件进行报名。</p>
            </div>
            <el-form class="demo-ruleForm">
              <ol>
                <span class="el-icon-plus" id="el-icon-plus1" @click="addNew0" v-if="but0"></span>
                <div class="div-zone">
                  <el-col :span="12" v-if="form1" id="divZone1">
                    <li class="form1">
                      <div class="info-need">
                        <el-form-item label="培训地点" prop="region" id="education">
                          <el-select v-model="ruleForm.region" placeholder="请选择培训地点">
                            <el-option label="地点1" value="shanghai"></el-option>
                            <el-option label="地点2" value="beijing"></el-option>
                          </el-select>
                        </el-form-item>

                        <el-form-item label="课程选择" prop="region" id="education">
                          <el-select v-model="ruleForm.region" placeholder="请选择课程">
                            <el-option label="课程1" value="shanghai"></el-option>
                            <el-option label="课程2" value="beijing"></el-option>
                          </el-select>
                          <span
                            class="el-icon-plus"
                            id="el-icon-plus1"
                            @click="addNew1"
                            v-if="but1"
                          ></span>
                          <span
                            class="el-icon-minus"
                            id="el-icon-minus1"
                            @click="deletes1()"
                            v-if="del1"
                          ></span>
                        </el-form-item>
                        <el-form-item label="套餐选择" prop="region" id="education">
                          <el-select v-model="ruleForm.region" placeholder="请选择套餐">
                            <el-option label="套餐1" value="shanghai"></el-option>
                            <el-option label="套餐2" value="beijing"></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item>
                          <label class="sign-num">报名人数</label>
                          <el-input-number
                            v-model="num2"
                            :min="1"
                            :max="9999"
                            label="描述文字"
                            :disabled="true"
                          ></el-input-number>
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
                              :data="tableData"
                              height="400px"
                              tooltip-effect="dark"
                              style="width: 100%"
                            >
                              <el-table-column type="selection" width="55"></el-table-column>
                              <el-table-column label="日期" width="120">
                                <template slot-scope="scope">{{ scope.row.date }}</template>
                              </el-table-column>
                              <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                              <el-table-column prop="address" label="身份证号" show-overflow-tooltip></el-table-column>
                            </el-table>
                            <el-button type="primary" class="sign-submit">确定</el-button>
                          </el-dialog>
                          <div class="div-delete">
                            <el-button type="primary" @click="centerDialogVisible1 = true">选择人员</el-button>
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
                        <el-form-item label="培训地点" prop="region" id="education">
                          <el-select v-model="ruleForm.region" placeholder="请选择培训地点">
                            <el-option label="地点1" value="shanghai"></el-option>
                            <el-option label="地点2" value="beijing"></el-option>
                          </el-select>
                        </el-form-item>

                        <el-form-item label="课程选择" prop="region" id="education">
                          <el-select v-model="ruleForm.region" placeholder="请选择课程">
                            <el-option label="课程1" value="shanghai"></el-option>
                            <el-option label="课程2" value="beijing"></el-option>
                          </el-select>
                          <span
                            class="el-icon-plus"
                            id="el-icon-plus2"
                            @click="addNew2"
                            v-if="but2"
                          ></span>
                          <span
                            class="el-icon-minus"
                            id="el-icon-minus2"
                            @click="deletes2()"
                            v-if="del2"
                          ></span>
                        </el-form-item>
                        <el-form-item label="套餐选择" prop="region" id="education">
                          <el-select v-model="ruleForm.region" placeholder="请选择套餐">
                            <el-option label="套餐1" value="shanghai"></el-option>
                            <el-option label="套餐2" value="beijing"></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item>
                          <label class="sign-num">报名人数</label>
                          <el-input-number
                            v-model="num2"
                            :min="1"
                            :max="9999"
                            label="描述文字"
                            :disabled="true"
                          ></el-input-number>
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
                              :data="tableData"
                              height="400px"
                              tooltip-effect="dark"
                              style="width: 100%"
                            >
                              <el-table-column type="selection" width="55"></el-table-column>
                              <el-table-column label="日期" width="120">
                                <template slot-scope="scope">{{ scope.row.date }}</template>
                              </el-table-column>
                              <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                              <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
                            </el-table>
                            <el-button type="primary" class="sign-submit">确定</el-button>
                          </el-dialog>
                          <div class="div-delete">
                            <el-button type="primary" @click="centerDialogVisible2 = true">选择人员</el-button>
                          </div>
                        </el-form-item>
                      </div>
                    </li>
                  </el-col>
                </div>

                <div class="div-zone">
                  <el-col :span="12" v-if="form3">
                    <li class="form3">
                      <div class="info-need">
                        <el-form-item label="培训地点" prop="region" id="education">
                          <el-select v-model="ruleForm.region" placeholder="请选择培训地点">
                            <el-option label="地点1" value="shanghai"></el-option>
                            <el-option label="地点2" value="beijing"></el-option>
                          </el-select>
                        </el-form-item>

                        <el-form-item label="课程选择" prop="region" id="education">
                          <el-select v-model="ruleForm.region" placeholder="请选择课程">
                            <el-option label="课程1" value="shanghai"></el-option>
                            <el-option label="课程2" value="beijing"></el-option>
                          </el-select>
                          <span
                            class="el-icon-plus"
                            id="el-icon-plus3"
                            @click="addNew3"
                            v-if="but3"
                          ></span>
                          <span
                            class="el-icon-minus"
                            id="el-icon-minus3"
                            @click="deletes3()"
                            v-if="del3"
                          ></span>
                        </el-form-item>
                        <el-form-item label="套餐选择" prop="region" id="education">
                          <el-select v-model="ruleForm.region" placeholder="请选择套餐">
                            <el-option label="套餐1" value="shanghai"></el-option>
                            <el-option label="套餐2" value="beijing"></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item>
                          <label class="sign-num">报名人数</label>
                          <el-input-number
                            v-model="num3"
                            :min="1"
                            :max="9999"
                            label="描述文字"
                            :disabled="true"
                          ></el-input-number>
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
                              :data="tableData"
                              height="400px"
                              tooltip-effect="dark"
                              style="width: 100%"
                            >
                              <el-table-column type="selection" width="55"></el-table-column>
                              <el-table-column label="日期" width="120">
                                <template slot-scope="scope">{{ scope.row.date }}</template>
                              </el-table-column>
                              <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                              <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
                            </el-table>
                            <el-button type="primary" class="sign-submit">确定</el-button>
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
                        <el-form-item label="培训地点" prop="region" id="education">
                          <el-select v-model="ruleForm.region" placeholder="请选择培训地点">
                            <el-option label="地点1" value="shanghai"></el-option>
                            <el-option label="地点2" value="beijing"></el-option>
                          </el-select>
                        </el-form-item>

                        <el-form-item label="课程选择" prop="region" id="education">
                          <el-select v-model="ruleForm.region" placeholder="请选择课程">
                            <el-option label="课程1" value="shanghai"></el-option>
                            <el-option label="课程2" value="beijing"></el-option>
                          </el-select>
                          <span
                            class="el-icon-plus"
                            id="el-icon-plus4"
                            @click="addNew4"
                            v-if="but4"
                          ></span>
                          <span
                            class="el-icon-minus"
                            id="el-icon-minus4"
                            @click="deletes4()"
                            v-if="del4"
                          ></span>
                        </el-form-item>
                        <el-form-item label="套餐选择" prop="region" id="education">
                          <el-select v-model="ruleForm.region" placeholder="请选择套餐">
                            <el-option label="套餐1" value="shanghai"></el-option>
                            <el-option label="套餐2" value="beijing"></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item>
                          <label class="sign-num">报名人数</label>
                          <el-input-number
                            v-model="num4"
                            :min="1"
                            :max="9999"
                            label="描述文字"
                            :disabled="true"
                          ></el-input-number>
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
                              :data="tableData"
                              height="400px"
                              tooltip-effect="dark"
                              style="width: 100%"
                            >
                              <el-table-column type="selection" width="55"></el-table-column>
                              <el-table-column label="日期" width="120">
                                <template slot-scope="scope">{{ scope.row.date }}</template>
                              </el-table-column>
                              <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                              <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
                            </el-table>
                            <el-button type="primary" class="sign-submit">确定</el-button>
                          </el-dialog>
                          <div class="div-delete">
                            <el-button type="primary" @click="centerDialogVisible4 = true">选择人员</el-button>
                          </div>
                        </el-form-item>
                      </div>
                    </li>
                  </el-col>
                </div>
                <el-col :span="24">
                  <div class="nextPage1-batch">
                    <el-form-item>
                      <el-button type="primary" @click="submitForm('ruleForm')">下一步</el-button>
                    </el-form-item>
                  </div>
                </el-col>
              </ol>
            </el-form>
          </div>
        </el-tab-pane>

        <el-tab-pane label="个人报名">
          <el-form :model="ruleForm" ref="ruleForm" label-width="350px" class="demo-ruleForm">
            <el-form-item label="培训地点" prop="region" id="education">
              <el-select v-model="ruleForm.region" placeholder="请选择培训地点">
                <el-option label="地点1" value="shanghai"></el-option>
                <el-option label="地点2" value="beijing"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="课程选择" prop="region" id="education">
              <el-select v-model="ruleForm.region" placeholder="请选择课程">
                <el-option label="课程1" value="shanghai"></el-option>
                <el-option label="课程2" value="beijing"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="套餐选择" prop="region" id="education">
              <el-select v-model="ruleForm.region" placeholder="请选择套餐">
                <el-option label="套餐1" value="shanghai"></el-option>
                <el-option label="套餐2" value="beijing"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="姓名" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="身份证号" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="性别" prop="resource">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item label="出生日期" required>
              <el-form-item prop="date1">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="ruleForm.date1"
                  style="width: 300px;"
                ></el-date-picker>
              </el-form-item>
            </el-form-item>

            <el-form-item label="籍贯" prop="native" id="native">
              <el-col :span="5">
                <el-select v-model="ruleForm.native" placeholder="省份">
                  <el-option label="省份1" value="shanghai"></el-option>
                  <el-option label="省份2" value="beijing"></el-option>
                </el-select>
              </el-col>
              <el-col :span="2">&nbsp;</el-col>
              <el-col :span="5">
                <el-select v-model="ruleForm.native" placeholder="城市" id="city">
                  <el-option label="城市1" value="shanghai"></el-option>
                  <el-option label="城市2" value="beijing"></el-option>
                </el-select>
              </el-col>
            </el-form-item>

            <el-form-item label="现工作地" prop="native">
              <el-input v-model="ruleForm.native"></el-input>
            </el-form-item>

            <el-form-item label="学历" prop="region" id="education">
              <el-select v-model="ruleForm.region" placeholder="请选择学历">
                <el-option label="省份1" value="shanghai"></el-option>
                <el-option label="省份2" value="beijing"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="毕业学校" prop="native">
              <el-input v-model="ruleForm.native"></el-input>
            </el-form-item>

            <el-form-item label="职位" prop="native">
              <el-input v-model="ruleForm.native"></el-input>
            </el-form-item>

            <el-form-item label="工种" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="移动电话" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="邮箱" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="所在公司" prop="native">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="从业资格证书" prop="native">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item>
              <div class="nextPage1">
                <el-button type="primary" @click="submitForm('ruleForm')">下一步</el-button>
              </div>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- 套餐选择页面page2 -->
    <!-- <div class="meal-choice" v-show="secondPage == 1">
      <div class="main-meal">
        <el-col :span="6">
          <div class="choose-meal" id="trainTest">
            <p class="meal-type">
              培训+考试
              <strong>热门</strong>
            </p>
            <h1>¥1100</h1>
            <div class="meal-sign-up">
              <a href="javascript:;" class="btn" @click="nextpage2">立即报名</a>
            </div>
            <ul>
              <li>
                <i>1267</i>已完成人数
              </li>
              <li>
                <i>两周</i>平均完成时常
              </li>
              <li>
                <i>3月1日</i>最近开课时间
              </li>
            </ul>
          </div>
        </el-col>

        <el-col :span="6">
          <div class="choose-meal" id="train">
            <p class="meal-type">培训</p>
            <h1>¥1000</h1>
            <div class="meal-sign-up">
              <a href="javascript:;" class="btn" @click="nextpage2">立即报名</a>
            </div>
            <ul>
              <li>
                <i>543</i>已完成人数
              </li>
              <li>
                <i>一周</i>平均完成时常
              </li>
              <li>
                <i>3月1日</i>最近开课时间
              </li>
            </ul>
          </div>
        </el-col>

        <el-col :span="6">
          <div class="choose-meal" id="test">
            <p class="meal-type">考试</p>
            <h1>¥200</h1>
            <div class="meal-sign-up">
              <a href="javascript:;" class="btn" @click="nextpage2">立即报名</a>
            </div>
            <ul>
              <li>
                <i>878</i>已完成人数
              </li>
              <li>
                <i>一天</i>平均完成时常
              </li>
              <li>
                <i>3月2日</i>最近考试时间
              </li>
            </ul>
          </div>
        </el-col>

        <el-col :span="6">
          <div class="choose-meal" id="makeup">
            <p class="meal-type">补考</p>
            <h1>¥300</h1>
            <div class="meal-sign-up">
              <a href="javascript:;" class="btn" @click="nextpage2">立即报名</a>
            </div>
            <ul>
              <li>
                <i>9</i>已完成人数
              </li>
              <li>
                <i>一天</i>平均完成时常
              </li>
              <li>
                <i>3月2日</i>最近开课时间
              </li>
            </ul>
          </div>
        </el-col>
      </div>
      <div class="primary-page">
        <el-button style="margin-top: 40px;" @click="page2Primary">上一步</el-button>
      </div>
    </div>-->
    <!-- 考试信息选择页面page3 -->
    <div class="test-info-choice" v-show="thirdPage == 1">
      <el-dialog
                            title="报名人员信息"
                            :visible.sync="showPersonInfo"
                            width="600px"
                            center
                          >
                            <el-table
    :data="tableData1"
    border
    height="400px"
    style="width: 100%">
    <el-table-column
      prop="name"
      label="姓名"
      width="80">
    </el-table-column>
    <el-table-column
      prop="id"
      label="身份证"
      width="280">
    </el-table-column>
    <el-table-column
      prop="course"
      label="课程">
    </el-table-column>
  </el-table>
                            <el-button type="primary" class="sign-submit">关闭</el-button>
                          </el-dialog>
      <div class="order-info-title">
          <el-col :span="8">
            <div class="order-meal-title1">
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
          <el-col :span="4">
            <div class="order-meal-title5">
              <span>考试地点</span>
            </div>
          </el-col>
          <el-col :span="3">
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
                  <img src="../assets/inspection1.jpg" class="order-img" alt>
                </div>
              </el-col>
              <el-col :span="16">
                <div class="order-meal-name">         
                    <span>灌浆工+考试+南通</span>
                </div>
                  <div class="order-meal-person-num" @click="showPersonInfo = true">报名人数：<span>12</span></div>
                
              </el-col>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="order-meal-property">
              <span>2019-05-05</span>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="order-meal-property">
              <span>10天</span>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="order-meal-property">
              <span>2019-05-25</span>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="order-meal-property-space">
              <span>江苏省南通市创业外包服务中心-C座</span>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="order-meal-property">
              <span>1000.00</span>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="order-meal-property">
              <span class="el-icon-delete" @click="orderShow1=false"></span>
            </div>
          </el-col>
        </div>
        <div class="order-subtotal">
          <span>小计：¥2000.00</span>
        </div>
      </div>

      <div class="order-group" v-if="orderShow2">
        <div class="order-info-body">
          <el-col :span="8">
            <div class="order-meal-info">
              <el-col :span="8">
              <div class="order-img-meal">
                  <img src="../assets/inspection2.png" class="order-img" alt>
                </div>
              </el-col>
              <el-col :span="16">
                <div class="order-meal-name">         
                    <span>灌浆工+考试+南通</span>
                </div>
                  <div class="order-meal-person-num" @click="showPersonInfo = true">报名人数：<span>12</span></div>
                
              </el-col>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="order-meal-property">
              <span>2019-05-05</span>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="order-meal-property">
              <span>10天</span>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="order-meal-property">
              <span>2019-05-25</span>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="order-meal-property-space">
              <span>江苏省南通市创业外包服务中心-C座</span>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="order-meal-property">
              <span>1000.00</span>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="order-meal-property">
              <span class="el-icon-delete" @click="orderShow2=false"></span>
            </div>
          </el-col>
        </div>
        <div class="order-subtotal">
          <span>小计：¥2000.00</span>
        </div>
      </div>

      <div class="order-group" v-if="orderShow3">
        <div class="order-info-body">
          <el-col :span="8">
            <div class="order-meal-info">
              <el-col :span="8">
              <div class="order-img-meal">
                  <img src="../assets/inspection1.jpg" class="order-img" alt>
                </div>
              </el-col>
              <el-col :span="16">
                <div class="order-meal-name">         
                    <span>灌浆工+考试+南通</span>
                </div>
                  <div class="order-meal-person-num" @click="showPersonInfo = true">报名人数：<span>12</span></div>
                
              </el-col>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="order-meal-property">
              <span>2019-05-05</span>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="order-meal-property">
              <span>10天</span>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="order-meal-property">
              <span>2019-05-25</span>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="order-meal-property-space">
              <span>江苏省南通市创业外包服务中心-C座</span>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="order-meal-property">
              <span>1000.00</span>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="order-meal-property">
              <span class="el-icon-delete" @click="orderShow3=false"></span>
            </div>
          </el-col>
        </div>
        <div class="order-subtotal">
          <span>小计：¥2000.00</span>
        </div>
      </div>

      <div class="order-group" v-if="orderShow4">
        <div class="order-info-body">
          <el-col :span="8">
            <div class="order-meal-info">
              <el-col :span="8">
              <div class="order-img-meal">
                  <img src="../assets/inspection2.png" class="order-img" alt>
                </div>
              </el-col>
              <el-col :span="16">
                <div class="order-meal-name">         
                    <span>灌浆工+考试+南通</span>
                </div>
                  <div class="order-meal-person-num" @click="showPersonInfo = true">报名人数：<span>12</span></div>
                
              </el-col>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="order-meal-property">
              <span>2019-05-05</span>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="order-meal-property">
              <span>10天</span>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="order-meal-property">
              <span>2019-05-25</span>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="order-meal-property-space">
              <span>江苏省南通市创业外包服务中心-C座</span>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="order-meal-property">
              <span>1000.00</span>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="order-meal-property">
              <span class="el-icon-delete" @click="orderShow4=false"></span>
            </div>
          </el-col>
        </div>
        <div class="order-subtotal">
          <span>小计：¥2000.00</span>
        </div>
      </div>
      
      <div class="order-total-price">
        <el-col :span="20">
        <div class="total">
          合计：<span class="total-price">¥ 8000</span>
        </div>
        </el-col>
        <el-col :span="4">
        <div class="chekout" @click="submitForm3('ruleForm')">去结算</div>
        </el-col>
      </div>

      <div class="test-info-scan">
        
        

        <div class="nextPage3">
          <el-button style="margin-top: 12px;" @click="page3Primary">上一步</el-button>
          <el-button type="primary" @click="submitForm3('ruleForm')">下一步</el-button>
        </div>
      </div>
    </div>

    <!-- 支付页面page4 -->
    <div class="pay" v-show="fourthPage == 1">
      <div class="pay-head">
        <span>您可以选择</span>
        <el-button type="primary" @click="onliePayment">在线支付</el-button>
        <span>或者</span>
        <el-button type="success" @click="offliePayment">转账汇款</el-button>
      </div>

      <div calss="pay-online" v-show="payOnline == 1">
        <el-dialog
                            title="报名人员信息"
                            :visible.sync="centerDialogVisible4"
                            width="600px"
                            center
                          >
                            <el-table
    :data="tableData1"
    border
    height="400px"
    style="width: 100%">
    <el-table-column
      prop="name"
      label="姓名"
      width="80">
    </el-table-column>
    <el-table-column
      prop="id"
      label="身份证"
      width="280">
    </el-table-column>
    <el-table-column
      prop="course"
      label="课程">
    </el-table-column>
  </el-table>
                            <el-button type="primary" class="sign-submit">关闭</el-button>
                          </el-dialog>
                          <el-dialog
                            title="用户付费协议"
                            :visible.sync="centerDialogVisible3"
                            width="600px"
                            center
                          >
                            用户付费协议文案
                          </el-dialog>
                        
        <div class="pay-online-body">
          <div class="pay-online-check">
            <h1>确认订单信息</h1>
            <h4>请在2小时内完成支付，否则订单会被自动取消</h4>
          </div>

          <div class="user-info">
            <div class="user-name">购买帐号：<span>zeroandx</span></div>
            <div class="pay-online-tips">注意：购买后不支持退款、转让，请确认开课时间或考试时间后再提交订单</div>
          </div>
          <div class="pay-type">支付方式</div>
          <el-collapse accordion>
            <el-collapse-item>
              <template slot="title">
                <div v-if="radio2==3" class="choose-zhifubao">
                  <img src="../assets/zhifubao_mini.png" class="icon-mini">支付宝
                </div>
                <span v-if="radio2==6" class="choose-weixin">
                  <img src="../assets/weixin_mini.png" class="icon-mini">微信支付
                </span>
              </template>
              <div class="pay-choose">
                <el-radio-group v-model="radio2">
                  <div class="pay-zhifubao">
                    <el-col :span="24">
                      <el-radio :label="3">
                        <img src="../assets/zhifubao.jpg" class="pay-img">
                      </el-radio>
                    </el-col>
                  </div>
                  <div class="pay-weixin">
                    <el-radio :label="6">
                      <img src="../assets/weixin.jpg" class="pay-img">
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
                  <img src="../assets/inspection1.jpg" alt>
                </div>
                <div class="meal_body f-fl">
                  <a class="title">
                    <span>质量员+考试培训+南通</span>
                  </a>
                  
                  <div class="promotion" @click="centerDialogVisible4 = true">报名人数：<span>11</span></div>
                </div>
                <div class="meal_price">￥2000.00</div>
              </div>
            </div>
            <div class="pay-meal-body">
              <div class="pay-meal-body">
                <div class="meal_img f-fl">
                  <img src="../assets/inspection2.png" alt>
                </div>
                <div class="meal_body f-fl">
                  <a class="title">
                    <span>灌浆工+考试+南通</span>
                  </a>
                  
                  <div class="promotion" @click="centerDialogVisible4 = true">报名人数：<span>12</span></div>
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
        <span class="agreement" @click="centerDialogVisible3 = true">《智聚用户付费协议》</span>
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
        <span class="pay-price-btn_btn">立即支付</span>
    </div>
    </el-col>
</div>
    </div>



        <div class="nextPage4">
          <el-button style="margin-top: 12px;" @click="page4Primary">上一步</el-button>
          <el-button type="primary" @click="submitForm4('ruleForm')">下一步</el-button>
        </div>
      </div>

      <div calss="pay-offline" v-show="payOffline == 1">
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
          <el-button style="margin-top: 12px;" @click="page42Primary">上一步</el-button>
          <el-button type="primary" @click="submitForm42('ruleForm')">下一步</el-button>
        </div>
      </div>
    </div>

    <!-- 发票开具 page5 -->
    <!-- <div class="Invoice" v-show="fifthPage == 1">
      <div class="Invoice-notice">
        <p>
          如需开具发票请填写下列信息，如无此需求请点击
          <a href="javascript:;" @click="skip5" class="skip-a">跳过</a>，稍后您也可以进入
          <a href="javascript:;" class="person-a">个人中心</a>索取发票
        </p>
      </div>
      <div class="Invoice-info">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <div class="Invoice-company">
            <el-form-item label="公司名称" prop="naxxme">
              <el-input v-model="ruleForm.ss"></el-input>
            </el-form-item>
          </div>

          <div class="Invoice-taxpayer-num">
            <el-form-item label="纳税人识别号" prop="naxxme">
              <el-input v-model="ruleForm.ss"></el-input>
            </el-form-item>
          </div>
          <div class="Invoice-company-bank">
            <el-form-item label="公司开户行" prop="naxxme">
              <el-input v-model="ruleForm.ss"></el-input>
            </el-form-item>
          </div>
          <div class="Invoice-company-account">
            <el-form-item label="公司账户" prop="naxxme">
              <el-input v-model="ruleForm.ss"></el-input>
            </el-form-item>
          </div>

          <div class="Invoice-tax-context">
            <el-form-item label="可开发票内容" prop="desssc">
              <el-input type="textarea" v-model="ruleForm.sss"></el-input>
            </el-form-item>
          </div>

          <p class="info-notice">注：请认真填写相关信息，发票一经开具，不得修改，谢谢！</p>

          <div class="Invoice-company-address">
            <el-form-item label="公司地址" prop="naxxme">
              <el-input v-model="ruleForm.ss"></el-input>
            </el-form-item>
          </div>
          <div class="Invoice-contact">
            <el-form-item label="联系人" prop="naxxme">
              <el-input v-model="ruleForm.ss"></el-input>
            </el-form-item>
          </div>
          <div class="Invoice-telphone">
            <el-form-item label="联系电话" prop="naxxme">
              <el-input v-model="ruleForm.ss"></el-input>
            </el-form-item>
          </div>
          <div class="Invoice-tax-money">
            <el-form-item label="开票金额" prop="naxxme">
              <el-input v-model="ruleForm.ss"></el-input>
            </el-form-item>
          </div>

          <div class="Invoice-complete">
            <el-form-item>
              <el-button type="primary" @click="submitForm5('ruleForm')">提交</el-button>
              <el-button style="margin-top: 12px;" @click="skip5">跳过</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>-->
    <!-- 报名成功 page6 -->
    <div class="success" v-show="sixth == 1">
      <div class="suc">
        <p class="sign-up-suc-notice">报名成功！</p>
        <p class="success-context">我们会在确认具体开课时间后联系您，请保持电话或邮箱畅通</p>
        <p class="success-context">您可以前往
          <router-link to="/personalCenter/PersonalCenterAllOrder">
            <a href="javascript:;" class="to-center">客户中心</a>
          </router-link>-
          <router-link to="/personalCenter/PersonalCenterAllOrder">
            <a href="javascript:;" class="to-center">我的订单</a>
          </router-link>开具发票
        </p>
      </div>
      <div class="success-other">
        <router-link to="/index">
          <el-button type="primary" @click="onliePayment">返回首页</el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
const cityOptions = ["张三", "李四", "王五", "赵六"];

export default {
  name: "Signup",
  data() {
    return {
      orderShow1: true,
      orderShow2: true,
      orderShow3: true,
      orderShow4: true,
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true,
      showPersonInfo: false,
      centerDialogVisible1: false,
      centerDialogVisible2: false,
      centerDialogVisible3: false,
      centerDialogVisible4: false,
      but0: false,
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

      radio2: 3,
      firstPage: 1,
      secondPage: 0,
      thirdPage: 0,
      fourthPage: 0,
      fifthPage: 0,
      sixth: 0,
      payOnline: 1,
      payOffline: 0,
      active: 0,
      maxSetp: 6,
      num1: 1,
      num2: 1,
      num3: 1,
      num4: 1,
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        // name: "",
        // identification:"",
        // sex: "",
        // birthday: "",
        native: ""
        // workspace:"",
        // education:"",
        // school:"",
        // position:"",
        // workType:"",
        // mobile:"",
        // mail:"",
        // company:"",
        // qualification:""
      },
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "512341341414141241233"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "512341341414141241233"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "512341341414141241233"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "512341341414141241233"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "512341341414141241233"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "512341341414141241233"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "512341341414141241233"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "512341341414141241233"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "512341341414141241233"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "512341341414141241233"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "512341341414141241233"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "512341341414141241233"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "512341341414141241233"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "512341341414141241233"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "512341341414141241233"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "512341341414141241233"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "512341341414141241233"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "512341341414141241233"
        }
      ],
      tableData1: [
        {
          name: "张飞",
          id: "342423434232323133",
          course: "资料员"
        },{
          name: "张飞",
          id: "342423434232323133",
          course: "资料员"
        },{
          name: "张飞",
          id: "342423434232323133",
          course: "资料员"
        },{
          name: "张飞",
          id: "342423434232323133",
          course: "资料员"
        },{
          name: "张飞",
          id: "342423434232323133",
          course: "资料员"
        },{
          name: "张飞",
          id: "342423434232323133",
          course: "资料员"
        },{
          name: "张飞",
          id: "342423434232323133",
          course: "资料员"
        },{
          name: "张飞",
          id: "342423434232323133",
          course: "资料员"
        },{
          name: "张飞",
          id: "342423434232323133",
          course: "资料员"
        },{
          name: "张飞",
          id: "342423434232323133",
          course: "资料员"
        },{
          name: "张飞",
          id: "342423434232323133",
          course: "资料员"
        },{
          name: "张飞",
          id: "342423434232323133",
          course: "资料员"
        },{
          name: "张飞",
          id: "342423434232323133",
          course: "资料员"
        },{
          name: "张飞",
          id: "342423434232323133",
          course: "资料员"
        },{
          name: "张飞",
          id: "342423434232323133",
          course: "资料员"
        },{
          name: "张飞",
          id: "342423434232323133",
          course: "资料员"
        },{
          name: "张飞",
          id: "342423434232323133",
          course: "资料员"
        },{
          name: "张飞",
          id: "342423434232323133",
          course: "资料员"
        },{
          name: "张飞",
          id: "342423434232323133",
          course: "资料员"
        },{
          name: "张飞",
          id: "342423434232323133",
          course: "资料员"
        },{
          name: "张飞",
          id: "342423434232323133",
          course: "资料员"
        }
        
      ]
    };
  },

  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
    addNew0() {
      this.but0 = false;

      this.form1 = true;
      this.but1 = true;
    },
    addNew1() {
      this.but1 = false;
      this.del1 = true;
      this.form2 = true;
      this.but2 = true;
      this.del2 = true;
    },
    deletes1() {
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
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.active = this.active + 1;
          this.firstPage = 0;
          this.secondPage = 0;
          this.thirdPage = 1;
          this.fourthPage = 0;
          this.fifthPage = 0;
          this.sixth = 0;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    submitForm3(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.active++ > this.maxSetp) this.active = this.maxSetp;
          this.firstPage = 0;
          this.secondPage = 0;
          this.thirdPage = 0;
          this.fourthPage = 1;
          this.fifthPage = 0;
          this.sixth = 0;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    submitForm4(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.active = this.active + 3;
          this.firstPage = 0;
          this.secondPage = 0;
          this.thirdPage = 0;
          this.fourthPage = 0;
          this.fifthPage = 0;
          this.sixth = 1;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    submitForm42(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("报名成功！请及时转账！汇款成功后可在个人中心索取发票。");
          this.active = this.active + 3;
          this.firstPage = 0;
          this.secondPage = 0;
          this.thirdPage = 0;
          this.fourthPage = 0;
          this.fifthPage = 0;
          this.sixth = 1;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // submitForm5(formName) {
    //   this.$refs[formName].validate(valid => {
    //     if (valid) {
    //       alert("发票信息提交成功！");
    //       this.active = this.active + 2;
    //       this.firstPage = 0;
    //       this.secondPage = 0;
    //       this.thirdPage = 0;
    //       this.fourthPage = 0;
    //       this.fifthPage = 0;
    //       this.sixth = 1;
    //     } else {
    //       console.log("error submit!!");
    //       return false;
    //     }
    //   });
    // },
    // skip5() {
    //   alert("您没有选择开具发票，如要开具发票可以前往个人中心索取。");
    //   this.active = this.active + 2;
    //   this.firstPage = 0;
    //   this.secondPage = 0;
    //   this.thirdPage = 0;
    //   this.fourthPage = 0;
    //   this.fifthPage = 0;
    //   this.sixth = 1;
    // },
    page2Primary() {
      if (this.active-- < 0) this.active = 0;
      this.firstPage = 1;
      this.secondPage = 0;
      this.thirdPage = 0;
      this.fourthPage = 0;
      this.fifthPage = 0;
      this.sixth = 0;
    },
    page3Primary() {
      if (this.active-- < 0) this.active = 0;
      this.firstPage = 1;
      this.secondPage = 0;
      this.thirdPage = 0;
      this.fourthPage = 0;
      this.fifthPage = 0;
      this.sixth = 0;
    },
    page4Primary() {
      if (this.active-- < 0) this.active = 0;
      this.firstPage = 0;
      this.secondPage = 0;
      this.thirdPage = 1;
      this.fourthPage = 0;
      this.fifthPage = 0;
      this.sixth = 0;
    },
    page42Primary() {
      if (this.active-- < 0) this.active = 0;
      this.firstPage = 0;
      this.secondPage = 0;
      this.thirdPage = 1;
      this.fourthPage = 0;
      this.fifthPage = 0;
      this.sixth = 0;
    },
    nextpage2() {
      if (this.active++ > this.maxSetp) this.active = this.maxSetp;
      this.firstPage = 0;
      this.secondPage = 0;
      this.thirdPage = 1;
      this.fourthPage = 0;
      this.fifthPage = 0;
      this.sixth = 0;
    },
    onliePayment() {
      this.payOnline = 1;
      this.payOffline = 0;
    },
    offliePayment() {
      this.payOnline = 0;
      this.payOffline = 1;
    }
  }
};
</script>

<style scoped>
#signup {
  width: 1000px;
  margin: auto;
}
.sign-up-info {
  width: 1000px;
  height: 950px;
  margin: 0px auto;

  padding: 10px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
}
.el-input {
  width: 300px;
}

.el-select {
  width: 300px;
}

#native .el-select {
  width: 119px;
}

#test-region .el-select {
  width: 120px;
}

.test-demo-ruleForm {
  margin: 20px 0px 0px 0px;
}

#test-course {
  margin: 0;
}

.nextPage1 {
  margin: 0px 0px 0px 100px;
}
.nextPage1-2 {
  margin: 0px 0px 0px 0px;
  text-align: center;
}

.meal-choice {
  width: 1000px;
  height: 500px;
  margin: 0px auto;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fff;
  border: 1px solid #e7e7e7;
  padding: 20px 0px 0px 10px;
  margin: 10px 0px 0px 0px;
}

.test-info-choice {
  width: 1000px;
  
  margin: 0px auto;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fff;
  border: 1px solid #e7e7e7;
  padding: 30px 0px 0px 30px;
  margin: 10px 0px 0px 0px;
}

.pay {
  width: 1000px;
  margin: 0px auto;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fff;
  border: 1px solid #e7e7e7;
  padding: 30px 0px 0px 30px;
  margin: 10px 0px 0px 0px;
}

.Invoice {
  width: 1000px;
  height: 560px;
  margin: 0px auto;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fff;
  border: 1px solid #e7e7e7;
  padding: 30px 0px 0px 30px;
  margin: 10px 0px 0px 0px;
}

.success {
  width: 1000px;
  height: 560px;
  margin: 0px auto;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fff;
  border: 1px solid #e7e7e7;
  padding: 30px 0px 0px 30px;
  margin: 10px 0px 0px 0px;
}

.choose-meal {
  height: 300px;
  width: 230px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #eee;
  border: 1px solid rgba(0, 0, 0, 0.05);
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  word-wrap: break-word;
}

.meal-type {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
  color: #1da9e2;
  text-align: center;
  line-height: 25px;
  margin-top: 15px;
}

.choose-meal h1 {
  font-size: 40px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
  margin-bottom: 0;
  text-align: center;
  color: #2f2f2f;
}

.choose-meal a {
  background: #da4f49;

  height: 30px;
  line-height: 30px;
  padding: 0 15px;
  font-size: 16px;
  color: white;
  display: inline-block;
  text-decoration: none;
}

.choose-meal a:hover {
  background: #e77272;

  height: 30px;
  line-height: 30px;
  padding: 0 15px;
  font-size: 16px;
  color: white;
  display: inline-block;
  text-decoration: none;
}

.choose-meal ul {
  padding: 20px 0 10px 0;
  list-style: none;
  display: block;
}

.choose-meal li {
  font-size: 14px;
  border-bottom: 1px dotted #ddd !important;
  padding: 5px 0px 5px 0px;

  list-style: none;
  display: list-item;
  text-align: -webkit-match-parent;
}

.choose-meal i {
  font-weight: bold;
  width: 95px;
  text-align: right;
  float: right;
  margin-right: 8px;
  font-style: normal;
  line-height: 22px;
  color: #1da9e2;
}

.meal-sign-up {
  text-align: center;
  margin: 20px 0px 0px 0px;
}

.choose-meal strong {
  vertical-align: super;
  color: #ee5f5b;
  margin-left: 3px;
  font-weight: bold;
  font-size: 12px;
}
.main-meal {
  margin: 30px 0px 0px 0px;
}

.primary-page {
  text-align: center;
}

.test-notice {
  width: 854px;
  height: 280px;
  margin: 23px 0px 15px 50px;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fff;
  border: 1px solid #e7e7e7;
  padding: 23px 0px 0px 10px;
}

.nextPage3 {
  text-align: center;
  margin: 20px 0px;
}

.test-result {
  float: right;
  margin: -535px 20px 0px 0px;
}

#test-label1 {
  padding: 0px 23px 0px 0px;
}

#test-label2 {
  padding: 0px 13px 0px 28px;
}

#test-label3 {
  padding: 0px 13px 0px 28px;
}

#test-label4 {
  padding: 0px 13px 0px 28px;
}
#test-input2 {
  padding: 0px 200px 0px 0px;
}
.show-result {
  margin: 20px 0px 0px 0px;
}
.test-title1 {
  padding: 20px 0px 0px 20px;
}
#payZhifubao {
  margin: 80px 0px 50px 0px;
}
.zhifubao {
  float: left;
  margin: -185px 0px 0px 0px;
  font-weight: bold;
}
.weixinzhifu {
  float: left;
  margin: -92px 0px 0px 0px;
}
.wangyinzhifu {
  float: left;
  margin: -152px 0px 0px 0px;
}

.zhifubao-radio {
  float: left;
  border: 1px solid #228b22;
  margin: -15px -2000px 0px 20px;
}
.weixin-radio {
  float: left;
  border: 1px solid #228b22;
  margin: -15px -2000px 0px 20px;
}
.wangyin-radio {
  float: left;
  border: 1px solid #228b22;
  margin: -5px -2000px 0px 20px;
}
.radio2weixin {
  margin: 0px 0px 15px 0px;
}
.radio1zhifubao {
  margin: 0px 0px 10px 0px;
}
.radio3wangyin {
  margin: 30px 140px 0px 0px;
}
.nextPage4 {
  margin: 13px 0px 20px 0px;
  text-align: center;
}
.nextPage4-2 {
  margin: 77px 0px 20px 0px;
  text-align: center;
}
.offline-context {
  margin: 20px 0px 0px 0px;
}

.offline-context p {
  font-family: "微软雅黑";

  padding: 0px;
  margin: 5px 0px;
}
.offline-notice {
  font-family: "微软雅黑";
  font-size: 12px;
  padding: 0px;
  margin: 0px;
}
.info-notice {
  font-family: "微软雅黑";
  font-size: 12px;
  color: #ee5f5b;
}
.Invoice-company-address {
  float: right;
  margin: -340px 100px 0px 0px;
}
.Invoice-contact {
  float: right;
  margin: -278px 100px 0px 0px;
}

.Invoice-telphone {
  float: right;
  margin: -216px 100px 0px 0px;
}

.Invoice-tax-money {
  float: right;
  margin: -154px 100px 0px 0px;
}
.Invoice-info {
  margin: 35px 0px 0px 0px;
}
.Invoice-tax-context {
  width: 867px;
}
.Invoice-complete {
  margin: 30px 150px 0px 0px;
  text-align: center;
}
.skip-a {
  color: #42b983;
  font-weight: bold;
  font-size: 17px;
}
.person-a {
  color: #616bf7;
  font-weight: bold;
  font-size: 17px;
}
#show-result2 {
  margin: 20px 37px;
}
#show-result3 {
  margin: 20px 9px;
}
#show-result4 {
  margin: 20px 36px;
}
.sign-up-suc-notice {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 40px;
  font-weight: bold;
  color: #42b983;
  margin: 100px 0px 0px 0px;
}

.success-context {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 18px;
  margin: 20px 0px 0px 0px;
}

.success-other {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 14px;
  margin: 140px 0px 0px 0px;
}
.upload-demo {
  text-align: center;
  height: 300px;
  margin: 0px 0px 0px 0px;
}
.div-delete {
  text-align: center;
  margin: 0px 0px 10px 0px;
}
.info-need {
  margin: 0px 0px 0px 49px;
}
.nextPage1-batch {
  text-align: center;
}
.training-project {
  margin: 0px 0px 0px 50px;
}
.scan-meal {
  margin: 0px 0px 0px 50px;
}
.test-scan-money {
  padding: 0px 0px 0px 28px;
  margin: 0px 0px 0px 50px;
}
.scan-mobile {
  margin: 0px 0px 0px 50px;
}
.training-time {
  padding: 0px 0px 0px 56px;
}
.scan-test-time {
  padding: 0px 0px 0px 28px;
}
.test-place {
  padding: 0px 0px 0px 56px;
}
.info-scan > .el-col {
  margin: 0px 0px 12px 0px;
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
  width: 250px;
}
.batch-sign-up-notice {
  margin: 0px 0px 15px 0px;
}
.test-info-label {
  margin: 0px 5px 0px 0px;
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
  margin: 10px 0px 0px 220px;
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
.to-center {
  color: #67C23A;
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
  cursor:pointer;
}
.meal_price {
  font-weight: 600;
  font-size: 14px;
  color: #333;
  float: right;
}
.payment-sub-body {
    width: 860px;
    height: 120px;
    box-sizing: border-box;
    background: #FEFCEF;
    border: 1px solid #DDD;
    padding: 15px 40px;
    margin: 0px 40px;
    color: #666;
    font-size: 14px;
}
.agreement-con {
   
    padding: 50px 0px 0px 0px;
    text-align: right;
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
    color: #FFFFFF;
    background: #FF6600;
    border-radius: 2px;
    text-align: center;
}
.pay-price-btn_price {
    text-align: right;
    margin-bottom: 5px;
}
.pay-price-btn_price .price_account {
    font-size: 24px;
    font-weight: 600;
    color: #FF6600;
}
.pay-price-btn_price .price_account_icon {
    font-weight: 300;
    font-size: 14px;
}
.order-info-body {
  width: 940px;
  height: 110px;
  background-color: #F8F8F8;
  border: 1px solid #E4E4E4;
  font-size: 12px;
    color: #666;
    text-align: center;
    padding:20px;
}
.order-subtotal {
  width: 940px;
  height: 45px;
      background-color: #eee;
    border-bottom: 1px solid #E4E4E4;
    border-left: 1px solid #E4E4E4;
    border-right: 1px solid #E4E4E4;
}
.order-img {
  width:120px;
  height:70px;
}
.order-subtotal {
  text-align: right;
  padding:12px;
  font-size: 14px;
  color: #333;
}

.order-info-title {
  width: 940px;
  height: 40px;
  background-color: #F8F8F8;
  border: 1px solid #E4E4E4;
  margin: 0px 0px 20px 0px;
  font-size: 12px;
    color: #666;
    text-align: center;
    padding: 11px 20px 0px 20px;
}
.order-meal-name {
  font-size: 14px;
    color: #333;
    text-align: left;
    padding: 0px 0px 0px 30px;
}
.order-meal-person-num {
  margin-top: 28px;
  color: #ff6600;
  cursor:pointer;
  text-align: left;
  padding: 0px 0px 0px 30px;
}
.order-meal-property {
 line-height:70px ;
 
  vertical-align:middle;
  text-align: center;
}
.order-meal-property-space {
  height: 70px;
 display: table-cell;
  vertical-align: middle;
}
.el-icon-delete {
  font-size: 16px;
}
.el-icon-delete:hover {
  color:#409EFF;
}
.order-group {
  margin:20px 0px 0px 0px;
}
.order-total-price {
  height:60px;
  width: 940px;
  margin:30px 0px 0px 0px;
      background-color: #eee;
    border: 1px solid #E4E4E4;
    border-right: 0;
}
.chekout {
    background-color: #FF8000;
    border: 1px solid #FF8000;
    font-size: 20px;
    text-align: center;
    line-height: 58px;
    width: 120px;
    margin:-1px 0px 0px 36px;
    color: #fff;
    cursor:pointer;
}
.total {
  text-align: right;
  font-size: 14px;
    color: #444;
    padding:15px  0px 0px 0px;
}
.total-price {
  font-size: 20px;
    color: #FF3900;
}

</style>


