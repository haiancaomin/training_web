<template>
  <div id="signup">
    <el-steps :active="active" finish-status="success" simple style="margin-top: 80px">
      <el-step title="报名信息"></el-step>
      <el-step title="信息预览"></el-step>
      <el-step title="费用"></el-step>
      <el-step title="开具发票"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>

    <!-- 报名信息页面page1 -->
    <div class="sign-up-info" v-show="firstPage == 1">
      <el-tabs type="border-card">
        <el-tab-pane label="个人报名">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="350px"
            class="demo-ruleForm"
          >
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

        <el-tab-pane label="批量报名">
          <div calss="batch-sign-up">
            <a class="download" href="javascript:;" download title="下载">点击下载模板</a>
            <el-form class="demo-ruleForm">
              <ol>
                <el-button type="primary" @click="addNew0" v-if="but0">添加</el-button>
                <div class="div-zone">
                  <el-col :span="12" v-if="form1" id="divZone1">
                    <li class="form1">
                      <div class="info-need">
                        <el-form-item label="培训地点" prop="region" id="education">
                          <el-select v-model="ruleForm.region" placeholder="请选择学历">
                            <el-option label="地点1" value="shanghai"></el-option>
                            <el-option label="地点2" value="beijing"></el-option>
                          </el-select>
                        </el-form-item>

                        <el-form-item label="课程选择" prop="region" id="education">
                          <el-select v-model="ruleForm.region" placeholder="请选择学历">
                            <el-option label="课程1" value="shanghai"></el-option>
                            <el-option label="课程2" value="beijing"></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item label="套餐选择" prop="region" id="education">
                          <el-select v-model="ruleForm.region" placeholder="请选择学历">
                            <el-option label="套餐1" value="shanghai"></el-option>
                            <el-option label="套餐2" value="beijing"></el-option>
                          </el-select>
                        </el-form-item>
                      </div>

                      <div class="div-upload">
                        <el-form-item>
                          <el-upload
                            class="upload-demo"
                            drag
                            action="https://jsonplaceholder.typicode.com/posts/"
                            multiple
                          >
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">
                              将文件拖到此处，或
                              <em>点击上传</em>
                            </div>
                            <div class="el-upload__tip" slot="tip">请按照批量上传模板要求上传，文件大小不得超过20M</div>
                          </el-upload>
                          <div class="div-delete">
                            <el-button type="primary" @click="deletes1()" class="div-delete">删除</el-button>
                            <el-button
                              type="primary"
                              @click="addNew1"
                              v-if="but1"
                              class="div-add"
                            >添加</el-button>
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
                          <el-select v-model="ruleForm.region" placeholder="请选择学历">
                            <el-option label="地点1" value="shanghai"></el-option>
                            <el-option label="地点2" value="beijing"></el-option>
                          </el-select>
                        </el-form-item>

                        <el-form-item label="课程选择" prop="region" id="education">
                          <el-select v-model="ruleForm.region" placeholder="请选择学历">
                            <el-option label="课程1" value="shanghai"></el-option>
                            <el-option label="课程2" value="beijing"></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item label="套餐选择" prop="region" id="education">
                          <el-select v-model="ruleForm.region" placeholder="请选择学历">
                            <el-option label="套餐1" value="shanghai"></el-option>
                            <el-option label="套餐2" value="beijing"></el-option>
                          </el-select>
                        </el-form-item>
                      </div>

                      <div class="div-upload">
                        <el-form-item>
                          <el-upload
                            class="upload-demo"
                            drag
                            action="https://jsonplaceholder.typicode.com/posts/"
                            multiple
                          >
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">
                              将文件拖到此处，或
                              <em>点击上传</em>
                            </div>
                            <div class="el-upload__tip" slot="tip">请按照批量上传模板要求上传，文件大小不得超过20M</div>
                          </el-upload>
                          <div class="div-delete">
                            <el-button type="primary" @click="deletes2()" class="div-delete">删除</el-button>
                            <el-button
                              type="primary"
                              @click="addNew2"
                              v-if="but2"
                              class="div-add"
                            >添加</el-button>
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
                          <el-select v-model="ruleForm.region" placeholder="请选择学历">
                            <el-option label="地点1" value="shanghai"></el-option>
                            <el-option label="地点2" value="beijing"></el-option>
                          </el-select>
                        </el-form-item>

                        <el-form-item label="课程选择" prop="region" id="education">
                          <el-select v-model="ruleForm.region" placeholder="请选择学历">
                            <el-option label="课程1" value="shanghai"></el-option>
                            <el-option label="课程2" value="beijing"></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item label="套餐选择" prop="region" id="education">
                          <el-select v-model="ruleForm.region" placeholder="请选择学历">
                            <el-option label="套餐1" value="shanghai"></el-option>
                            <el-option label="套餐2" value="beijing"></el-option>
                          </el-select>
                        </el-form-item>
                      </div>

                      <div class="div-upload">
                        <el-form-item>
                          <el-upload
                            class="upload-demo"
                            drag
                            action="https://jsonplaceholder.typicode.com/posts/"
                            multiple
                          >
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">
                              将文件拖到此处，或
                              <em>点击上传</em>
                            </div>
                            <div class="el-upload__tip" slot="tip">请按照批量上传模板要求上传，文件大小不得超过20M</div>
                          </el-upload>
                          <div class="div-delete">
                            <el-button type="primary" @click="deletes3()" class="div-delete">删除</el-button>
                            <el-button
                              type="primary"
                              @click="addNew3"
                              v-if="but3"
                              class="div-add"
                            >添加</el-button>
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
                          <el-select v-model="ruleForm.region" placeholder="请选择学历">
                            <el-option label="地点1" value="shanghai"></el-option>
                            <el-option label="地点2" value="beijing"></el-option>
                          </el-select>
                        </el-form-item>

                        <el-form-item label="课程选择" prop="region" id="education">
                          <el-select v-model="ruleForm.region" placeholder="请选择学历">
                            <el-option label="课程1" value="shanghai"></el-option>
                            <el-option label="课程2" value="beijing"></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item label="套餐选择" prop="region" id="education">
                          <el-select v-model="ruleForm.region" placeholder="请选择学历">
                            <el-option label="套餐1" value="shanghai"></el-option>
                            <el-option label="套餐2" value="beijing"></el-option>
                          </el-select>
                        </el-form-item>
                      </div>

                      <div class="div-upload">
                        <el-form-item>
                          <el-upload
                            class="upload-demo"
                            drag
                            action="https://jsonplaceholder.typicode.com/posts/"
                            multiple
                          >
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">
                              将文件拖到此处，或
                              <em>点击上传</em>
                            </div>
                            <div class="el-upload__tip" slot="tip">请按照批量上传模板要求上传，文件大小不得超过20M</div>
                          </el-upload>
                          <div class="div-delete">
                            <el-button type="primary" @click="deletes4()" class="div-delete">删除</el-button>
                            <el-button
                              type="primary"
                              @click="addNew4"
                              v-if="but4"
                              class="div-add"
                            >添加</el-button>
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
      <div class="test-info-scan">
        <div class="info-scan">
          <el-col :span="12">
            <div class="training-project">
            <label>报名项目</label>
            <el-input placeholder="灌浆工" :disabled="true"></el-input>
            </div>
          </el-col>

          <el-col :span="12">
            <label>预计培训开始时间</label>
            <el-input placeholder="2019-3-2" :disabled="true"></el-input>
          </el-col>

          <el-col :span="12">
            <div class="scan-meal">
            <label>选择套餐</label>
            <el-input placeholder="培训+考试" :disabled="true" id="test-input2"></el-input>
            </div>
          </el-col>

          <el-col :span="12">
            <div class="training-time">
              <label>培训时长</label>
              <el-input placeholder="10天" :disabled="true" id="test-input2"></el-input>
            </div>
          </el-col>

          <el-col :span="12">
            <div class="test-scan-money">
              <label>费用</label>
              <el-input placeholder="2000元" :disabled="true"></el-input>
            </div>
          </el-col>

          <el-col :span="12">
            <div class="scan-test-time">
              <label>预计考试时间</label>
              <el-input placeholder="2019-3-15" :disabled="true"></el-input>
            </div>
          </el-col>
          
          <el-col :span="12">
            <div class="scan-mobile">
              <label>联系方式</label>
              <el-input placeholder="123456789" :disabled="true"></el-input>
            </div>
          </el-col>

          <el-col :span="12">
            <div class="test-place">
              <label>考试地点</label>
              <el-input placeholder="智聚" :disabled="true"></el-input>
            </div>
          </el-col>
        </div>
        <el-col :span="24">
        <div class="test-notice">这里是公告位，正式上线后根据用户选择动态生成信息</div>
        </el-col>

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
        <div>
          <el-radio-group v-model="radio2">
            <div class="radio1zhifubao">
              <el-radio :label="1" id="payZhifubao">
                <div class="zhifubao-radio">
                  <img src="../assets/zhifubao.jpg">
                </div>
              </el-radio>
            </div>

            <div class="radio2weixin">
              <el-radio :label="2">
                <div class="weixin-radio">
                  <img src="../assets/weixin.jpg">
                </div>
              </el-radio>
            </div>
            <!-- <div>
              <el-radio :label="3" class="radio3wangyin">
                <div class="wangyin-radio">
                  <img src="../assets/jianshe.gif">
                </div>
              </el-radio>

              <el-radio :label="4" class="radio3wangyin">
                <div class="wangyin-radio">
                  <img src="../assets/zhongguo.jpg">
                </div>
              </el-radio>

              <el-radio :label="5" class="radio3wangyin">
                <div class="wangyin-radio">
                  <img src="../assets/gongshang.gif">
                </div>
              </el-radio>

              <el-radio :label="6" class="radio3wangyin">
                <div class="wangyin-radio">
                  <img src="../assets/nongye.gif">
                </div>
              </el-radio>

              <el-radio :label="7" class="radio3wangyin">
                <div class="wangyin-radio">
                  <img src="../assets/jiaotong.gif">
                </div>
              </el-radio>
            </div>
            <div>
              <el-radio :label="8" class="radio3wangyin">
                <div class="wangyin-radio">
                  <img src="../assets/guangda.gif">
                </div>
              </el-radio>

              <el-radio :label="9" class="radio3wangyin">
                <div class="wangyin-radio">
                  <img src="../assets/zhaoshang.gif">
                </div>
              </el-radio>
              <el-radio :label="10" class="radio3wangyin">
                <div class="wangyin-radio">
                  <img src="../assets/minsheng.gif">
                </div>
              </el-radio>

              <el-radio :label="11" class="radio3wangyin">
                <div class="wangyin-radio">
                  <img src="../assets/guangfa.jpg">
                </div>
              </el-radio>

              <el-radio :label="12" class="radio3wangyin">
                <div class="wangyin-radio">
                  <img src="../assets/xingye.jpg">
                </div>
              </el-radio>
            </div>
            <div>
              <el-radio :label="13" class="radio3wangyin">
                <div class="wangyin-radio">
                  <img src="../assets/pufa.gif">
                </div>
              </el-radio>

              <el-radio :label="14" class="radio3wangyin">
                <div class="wangyin-radio">
                  <img src="../assets/huaxia.jpg">
                </div>
              </el-radio>

              <el-radio :label="15" class="radio3wangyin">
                <div class="wangyin-radio">
                  <img src="../assets/fazhan.gif">
                </div>
              </el-radio>

              <el-radio :label="16" class="radio3wangyin">
                <div class="wangyin-radio">
                  <img src="../assets/pingan.gif">
                </div>
              </el-radio>

              <el-radio :label="17" class="radio3wangyin">
                <div class="wangyin-radio">
                  <img src="../assets/youzheng.gif">
                </div>
              </el-radio>
            </div> -->
          </el-radio-group>
        </div>
        <div class="zhifubao">
          <strong>1、支付宝</strong>
        </div>
        <div class="weixinzhifu">
          <strong>2、微信支付</strong>
        </div>
        <!-- <div class="wangyinzhifu">
          <strong>3、网银支付</strong>
        </div> -->

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
    <div class="Invoice" v-show="fifthPage == 1">
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
    </div>

    <!-- 报名成功 page6 -->
    <div class="success" v-show="sixth == 1">
      <div class="suc">
        <p class="sign-up-suc-notice">报名成功！</p>
        <p class="success-context">我们会在确认具体开课时间后会联系您，请保持电话或邮箱畅通</p>
      </div>
      <div class="success-other">
        <el-button type="primary" @click="onliePayment">返回首页</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      but0: false,
      form1: true,
      but1: true,
      form2: false,
      but2: false,
      form3: false,
      but3: false,
      form4: false,
      but4: false,
      sites: [{}],
      radio2: 1,
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
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },

  methods: {
    addNew0() {
      this.but0 = false;

      this.form1 = true;
      this.but1 = true;
    },
    addNew1() {
      this.but1 = false;

      this.form2 = true;
      this.but2 = true;
    },
    deletes1() {
      this.form1 = false;
      this.but1 = false;

      if (this.form4 == true) {
        this.but4 = true;
      } else if (this.form3 == true) {
        this.but3 = true;
      } else if (this.form2 == true) {
        this.but2 = true;
      } else {
        this.but0 = true;
      }
    },
    addNew2() {
      if (this.form1 == false) {
        this.form1 = true;
      } else if (this.form3 == false) {
        this.but2 = false;
        this.form3 = true;
        this.but3 = true;
      } else {
        this.form4 = true;
        this.but2 = false;
      }
    },
    deletes2() {
      this.form2 = false;
      this.but2 = false;

      if (this.form4 == true) {
        this.but4 = true;
      } else if (this.form3 == true) {
        this.but3 = true;
      } else if (this.form1 == true) {
        this.but1 = true;
      } else {
        this.but0 = true;
      }
    },
    addNew3() {
      if (this.form1 == false) {
        this.form1 = true;
      } else if (this.form2 == false) {
        this.form2 = true;
      } else {
        this.form4 = true;
        this.but3 = false;
      }
    },
    deletes3() {
      this.form3 = false;
      this.but3 = false;

      if (this.form4 == true) {
        this.but4 = true;
      } else if (this.form2 == true) {
        this.but2 = true;
      } else if (this.form1 == true) {
        this.but1 = true;
      } else {
        this.but0 = true;
      }
    },
    addNew4() {
      if (this.form1 == false) {
        this.form1 = true;
      } else if (this.form2 == false) {
        this.form2 = true;
      } else if (this.form3 == false) {
        this.form3 = true;
      }
      if (this.form1 == true && this.form2 == true && this.form3 == true) {
        this.but4 = false;
      }
    },
    deletes4() {
      this.form4 = false;
      this.but4 = false;

      if (this.form3 == true) {
        this.but3 = true;
      } else if (this.form2 == true) {
        this.but2 = true;
      } else if (this.form1 == true) {
        this.but1 = true;
      } else {
        this.but0 = true;
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
          if (this.active++ > this.maxSetp) this.active = this.maxSetp;
          this.firstPage = 0;
          this.secondPage = 0;
          this.thirdPage = 0;
          this.fourthPage = 0;
          this.fifthPage = 1;
          this.sixth = 0;
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
    submitForm5(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("发票信息提交成功！");
          this.active = this.active + 2;
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
    skip5() {
      alert("您没有选择开具发票，如要开具发票可以前往个人中心索取。");
      this.active = this.active + 2;
      this.firstPage = 0;
      this.secondPage = 0;
      this.thirdPage = 0;
      this.fourthPage = 0;
      this.fifthPage = 0;
      this.sixth = 1;
    },
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
  height: 630px;
  margin: 0px auto;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fff;
  border: 1px solid #e7e7e7;
  padding: 30px 0px 0px 30px;
  margin: 10px 0px 0px 0px;
}

.pay {
  width: 1000px;
  height: 560px;
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
  width: 790px;
  height: 280px;
  margin: 23px 0px 0px 109px;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fff;
  border: 1px solid #e7e7e7;
  padding: 23px 0px 0px 10px;
  
}

.nextPage3 {
  text-align: center;
  margin: 0px 0px 0px 0px;
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
  margin: 173px 150px 0px 0px;
  text-align: center;
}
.nextPage4-2 {
  margin: 237px 150px 0px 0px;
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
  margin: 10px 0px 0px 0px;
}

.success-other {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 14px;
  margin: 200px 0px 0px 0px;
}
.upload-demo {
  text-align: center;
  height: 300px;
  margin: 0px 0px 0px 0px;
}
.div-delete {
  text-align: center;
  margin: 0px 0px 30px 0px;
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
.info-scan>.el-col {
  margin: 0px 0px 12px 0px;
}
    
</style>


