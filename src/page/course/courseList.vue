<template>
  <el-main>
    <div class="course-container">
      <el-tabs type="border-card" stretch>
        <el-tab-pane label="生产类">
          <el-row :gutter="20" class="bottom-line">
            <el-col :span="7">
              <div class="grid-content">
                <img
                  src="http://www.axfc.cn/uploads/20190222/8470b0cd14194545b6a04a4768184ef6.jpg"
                  class="full-width"
                >
              </div>
            </el-col>
            <el-col :span="17">
              <div class="grid-content">
                <el-row :gutter="20" class="no-pad">
                  <el-col :span="3">
                    <div class="grid-content bold text-right">课程介绍</div>
                  </el-col>
                  <el-col :span="17">
                    <div
                      class="grid-content"
                    >课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介</div>
                  </el-col>
                  <el-col :span="4">
                    <div class="grid-content">
                      <router-link to="/SignUp">
                        <el-button type="primary">点我报名</el-button>
                      </router-link>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="3">
                    <div class="grid-content bold text-right">培训时长</div>
                  </el-col>
                  <el-col :span="3">
                    <div class="grid-content">2天</div>
                  </el-col>
                  <el-col :span="3">
                    <div class="grid-content bold text-right">其他标题</div>
                  </el-col>
                  <el-col :span="3">
                    <div class="grid-content">其他内容</div>
                  </el-col>
                </el-row>
                <el-collapse v-model="activeNames" @change="handleChange">
                  <el-collapse-item name="1">
                    <template slot="title">
                      <el-col :span="3">
                        <div class="grid-content bold text-right">授课老师</div>
                      </el-col>
                      <el-col :span="3" v-for='(val,key) in teachers' :key='key'>
                        <div class="grid-content">{{val}}</div>
                      </el-col>
                    </template>
                    <div class="clearfix teacher-box" v-for='(val,key) in teachers' :key='key'>
                      <div class="teacher-img">
                        <img src="https://www.swiper.com.cn/demo/tfboys/images/p1.jpg" alt>
                      </div>
                      <div class="teacher-info">
                        <el-row :gutter="20">
                          <el-col :span="4">
                            <div class="grid-content bold text-right">姓名</div>
                          </el-col>
                          <el-col :span="4">
                            <div class="grid-content">{{val}}</div>
                          </el-col>
                          <el-col :span="4">
                            <div class="grid-content bold text-right">授课老师</div>
                          </el-col>
                          <el-col :span="4">
                            <div class="grid-content">赵日天</div>
                          </el-col>
                          <el-col :span="4">
                            <div class="grid-content bold text-right">其他标题</div>
                          </el-col>
                          <el-col :span="4">
                            <div class="grid-content">其他内容</div>
                          </el-col>
                        </el-row>
                        <el-row :gutter="20" class="no-pad">
                          <el-col :span="4">
                            <div class="grid-content bold text-right">教师介绍</div>
                          </el-col>
                          <el-col :span="20">
                            <div
                              class="grid-content"
                            >程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介</div>
                          </el-col>
                        </el-row>
                      </div>
                    </div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="bottom-line">
            <el-col :span="7">
              <div class="grid-content">
                <img
                  src="http://www.axfc.cn/uploads/20190222/8470b0cd14194545b6a04a4768184ef6.jpg"
                  class="full-width"
                >
              </div>
            </el-col>
            <el-col :span="17">
              <div class="grid-content">
                <el-row :gutter="20" class="no-pad">
                  <el-col :span="3">
                    <div class="grid-content bold text-right">课程介绍</div>
                  </el-col>
                  <el-col :span="17">
                    <div
                      class="grid-content"
                    >课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介</div>
                  </el-col>
                  <el-col :span="4">
                    <div class="grid-content">
                      <router-link to="/SignUp">
                        <el-button type="primary">点我报名</el-button>
                      </router-link>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="3">
                    <div class="grid-content bold text-right">培训时长</div>
                  </el-col>
                  <el-col :span="3">
                    <div class="grid-content">2天</div>
                  </el-col>
                  <el-col :span="3">
                    <div class="grid-content bold text-right">其他标题</div>
                  </el-col>
                  <el-col :span="3">
                    <div class="grid-content">其他内容</div>
                  </el-col>
                </el-row>
                <el-collapse v-model="activeNames" @change="handleChange">
                  <el-collapse-item name="2">
                    <template slot="title">
                      <el-col :span="3">
                        <div class="grid-content bold text-right">授课老师</div>
                      </el-col>
                      <el-col :span="3" v-for='(val,key) in teachers' :key='key'>
                        <div class="grid-content">{{val}}</div>
                      </el-col>
                    </template>
                    <div class="clearfix teacher-box" v-for='(val,key) in teachers' :key='key'>
                      <div class="teacher-img">
                        <img src="https://www.swiper.com.cn/demo/tfboys/images/p1.jpg" alt>
                      </div>
                      <div class="teacher-info">
                        <el-row :gutter="20">
                          <el-col :span="4">
                            <div class="grid-content bold text-right">姓名</div>
                          </el-col>
                          <el-col :span="4">
                            <div class="grid-content">{{val}}</div>
                          </el-col>
                          <el-col :span="4">
                            <div class="grid-content bold text-right">授课老师</div>
                          </el-col>
                          <el-col :span="4">
                            <div class="grid-content">赵日天</div>
                          </el-col>
                          <el-col :span="4">
                            <div class="grid-content bold text-right">其他标题</div>
                          </el-col>
                          <el-col :span="4">
                            <div class="grid-content">其他内容</div>
                          </el-col>
                        </el-row>
                        <el-row :gutter="20" class="no-pad">
                          <el-col :span="4">
                            <div class="grid-content bold text-right">教师介绍</div>
                          </el-col>
                          <el-col :span="20">
                            <div
                              class="grid-content"
                            >程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介</div>
                          </el-col>
                        </el-row>
                      </div>
                    </div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="施工类">
          <el-row :gutter="20" class="bottom-line">
            <el-col :span="7">
              <div class="grid-content">
                <img
                  src="http://www.axfc.cn/uploads/20190222/8470b0cd14194545b6a04a4768184ef6.jpg"
                  class="full-width"
                >
              </div>
            </el-col>
            <el-col :span="17">
              <div class="grid-content">
                <el-row :gutter="20" class="no-pad">
                  <el-col :span="3">
                    <div class="grid-content bold text-right">课程介绍</div>
                  </el-col>
                  <el-col :span="17">
                    <div
                      class="grid-content"
                    >课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介</div>
                  </el-col>
                  <el-col :span="4">
                    <div class="grid-content">
                      <router-link to="/SignUp">
                        <el-button type="primary">点我报名</el-button>
                      </router-link>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="3">
                    <div class="grid-content bold text-right">培训时长</div>
                  </el-col>
                  <el-col :span="3">
                    <div class="grid-content">2天</div>
                  </el-col>
                  <el-col :span="3">
                    <div class="grid-content bold text-right">其他标题</div>
                  </el-col>
                  <el-col :span="3">
                    <div class="grid-content">其他内容</div>
                  </el-col>
                </el-row>
                <el-collapse v-model="activeNames" @change="handleChange">
                  <el-collapse-item name="3">
                    <template slot="title">
                      <el-col :span="3">
                        <div class="grid-content bold text-right">授课老师</div>
                      </el-col>
                      <el-col :span="3" v-for='(val,key) in teachers' :key='key'>
                        <div class="grid-content">{{val}}</div>
                      </el-col>
                    </template>
                    <div class="clearfix teacher-box" v-for='(val,key) in teachers' :key='key'>
                      <div class="teacher-img">
                        <img src="https://www.swiper.com.cn/demo/tfboys/images/p1.jpg" alt>
                      </div>
                      <div class="teacher-info">
                        <el-row :gutter="20">
                          <el-col :span="4">
                            <div class="grid-content bold text-right">姓名</div>
                          </el-col>
                          <el-col :span="4">
                            <div class="grid-content">{{val}}</div>
                          </el-col>
                          <el-col :span="4">
                            <div class="grid-content bold text-right">授课老师</div>
                          </el-col>
                          <el-col :span="4">
                            <div class="grid-content">赵日天</div>
                          </el-col>
                          <el-col :span="4">
                            <div class="grid-content bold text-right">其他标题</div>
                          </el-col>
                          <el-col :span="4">
                            <div class="grid-content">其他内容</div>
                          </el-col>
                        </el-row>
                        <el-row :gutter="20" class="no-pad">
                          <el-col :span="4">
                            <div class="grid-content bold text-right">教师介绍</div>
                          </el-col>
                          <el-col :span="20">
                            <div
                              class="grid-content"
                            >程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介</div>
                          </el-col>
                        </el-row>
                      </div>
                    </div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </div>
  </el-main>
</template>
<script>
export default {
  data() {
    return {
      activeNames: [],
      teachers: ["张三", "李四"]
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>

<style scoped>
.el-main {
  padding-top: 60px;
  width: 1100px;
  margin: 0 auto;
}
.el-row {
  padding: 20px 0;
}
.bottom-line {
  border-bottom: 1px solid #eee;
}
.course-container {
  padding: 20px;
  background: #fff;
  margin-top: 20px;
}
.teacher {
  cursor: pointer;
  color: #409eff;
}
.teacher-img {
  float: left;
  margin-right: 10px;
}
.teacher-img img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.teacher-info {
  flex: 1;
}
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
.teacher-box {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  display: flex;
}
.teacher-box:last-child {
  border-bottom: 0;
}
.full-width {
  width: 100%;
}
.bold {
  font-weight: bold;
}
.text-right {
  text-align: right;
}
.no-pad {
  padding: 0;
}
</style>
<style>
.course-container .el-tabs__item {
  font-size: 18px;
  height: 55px;
  line-height: 55px;
}
.course-container .el-collapse-item__header {
  font-size: 14px;
  margin: 0 -10px;
}
.course-container .el-collapse-item__content {
  padding-bottom: 0;
}
</style>




