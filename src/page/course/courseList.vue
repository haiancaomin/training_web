<template>
  <div id="course_body">
    <div class="course-container">
      <el-tabs type="border-card" stretch @tab-click="handleClick" v-model="activeNames[0]">
        <el-tab-pane label="生产类" name="0">
          <el-row v-if="prodCourseLists.length==0" class="no-data">暂无数据</el-row>
          <el-row :gutter="20" class="bottom-line" v-for="(val,key) in prodCourseLists" :key="key">
            <el-col :span="7">
              <div class="grid-content">
                <img :src="val.picurl" class="full-width">
              </div>
            </el-col>
            <el-col :span="17">
              <div class="grid-content">
                <el-row :gutter="20" class="no-pad">
                  <el-col :span="3">
                    <div class="grid-content bold text-right">课程介绍</div>
                  </el-col>
                  <el-col :span="17">
                    <div class="grid-content">{{val.introdtction}}</div>
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
                    <div class="grid-content bold text-right">课时</div>
                  </el-col>
                  <el-col :span="3">
                    <div class="grid-content">{{val.coursehour}}</div>
                  </el-col>
                </el-row>
                <el-collapse>
                  <el-collapse-item>
                    <template slot="title">
                      <el-col :span="3">
                        <div class="grid-content bold text-right">授课老师</div>
                      </el-col>
                      <el-col :span="3" v-for="(v,k) in val.tlist" :key="k">
                        <div class="grid-content">{{v.teachername}}</div>
                      </el-col>
                    </template>
                    <div class="clearfix teacher-box" v-for="(v,k) in val.tlist" :key="k">
                      <div class="teacher-img">
                        <img :src="v.picurl" alt>
                      </div>
                      <div class="teacher-info">
                        <el-row :gutter="20">
                          <el-col :span="4">
                            <div class="grid-content bold text-right">姓名</div>
                          </el-col>
                          <el-col :span="4">
                            <div class="grid-content">{{v.teachername}}</div>
                          </el-col>
                          <el-col :span="4">
                            <div class="grid-content bold text-right">方向</div>
                          </el-col>
                          <el-col :span="8">
                            <div class="grid-content">{{v.direction}}</div>
                          </el-col>
                        </el-row>
                        <el-row :gutter="20" class="no-pad">
                          <el-col :span="4">
                            <div class="grid-content bold text-right">简介</div>
                          </el-col>
                          <el-col :span="20">
                            <div class="grid-content">{{v.summary}}</div>
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
        <el-tab-pane label="施工类" name="1">
          <el-row v-if="workCourseLists.length==0" class="no-data">暂无数据</el-row>

          <el-row :gutter="20" class="bottom-line" v-for="(val,key) in workCourseLists" :key="key">
            <el-col :span="7">
              <div class="grid-content">
                <img :src="val.picurl" class="full-width">
              </div>
            </el-col>
            <el-col :span="17">
              <div class="grid-content">
                <el-row :gutter="20" class="no-pad">
                  <el-col :span="3">
                    <div class="grid-content bold text-right">课程介绍</div>
                  </el-col>
                  <el-col :span="17">
                    <div class="grid-content">{{val.introdtction}}</div>
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
                    <div class="grid-content bold text-right">课时</div>
                  </el-col>
                  <el-col :span="3">
                    <div class="grid-content">{{val.coursehour}}</div>
                  </el-col>
                </el-row>
                <el-collapse>
                  <el-collapse-item>
                    <template slot="title">
                      <el-col :span="3">
                        <div class="grid-content bold text-right">授课老师</div>
                      </el-col>
                      <el-col :span="3" v-for="(v,k) in val.tlist" :key="k">
                        <div class="grid-content">{{v.teachername}}</div>
                      </el-col>
                    </template>
                    <div class="clearfix teacher-box" v-for="(v,k) in val.tlist" :key="k">
                      <div class="teacher-img">
                        <img :src="v.picurl" alt>
                      </div>
                      <div class="teacher-info">
                        <el-row :gutter="20">
                          <el-col :span="4">
                            <div class="grid-content bold text-right">姓名</div>
                          </el-col>
                          <el-col :span="4">
                            <div class="grid-content">{{v.teachername}}</div>
                          </el-col>
                          <el-col :span="4">
                            <div class="grid-content bold text-right">方向</div>
                          </el-col>
                          <el-col :span="8">
                            <div class="grid-content">{{v.direction}}</div>
                          </el-col>
                        </el-row>
                        <el-row :gutter="20" class="no-pad">
                          <el-col :span="4">
                            <div class="grid-content bold text-right">简介</div>
                          </el-col>
                          <el-col :span="20">
                            <div class="grid-content">{{v.summary}}</div>
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

        <el-tab-pane label="设计类" name="2">
          <el-row v-if="designCourseLists.length==0" class="no-data">暂无数据</el-row>

          <el-row
            :gutter="20"
            class="bottom-line"
            v-for="(val,key) in designCourseLists"
            :key="key"
          >
            <el-col :span="7">
              <div class="grid-content">
                <img :src="val.picurl" class="full-width">
              </div>
            </el-col>
            <el-col :span="17">
              <div class="grid-content">
                <el-row :gutter="20" class="no-pad">
                  <el-col :span="3">
                    <div class="grid-content bold text-right">课程介绍</div>
                  </el-col>
                  <el-col :span="17">
                    <div class="grid-content">{{val.introdtction}}</div>
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
                    <div class="grid-content bold text-right">课时</div>
                  </el-col>
                  <el-col :span="3">
                    <div class="grid-content">{{val.coursehour}}</div>
                  </el-col>
                </el-row>
                <el-collapse>
                  <el-collapse-item>
                    <template slot="title">
                      <el-col :span="3">
                        <div class="grid-content bold text-right">授课老师</div>
                      </el-col>
                      <el-col :span="3" v-for="(v,k) in val.tlist" :key="k">
                        <div class="grid-content">{{v.teachername}}</div>
                      </el-col>
                    </template>
                    <div class="clearfix teacher-box" v-for="(v,k) in val.tlist" :key="k">
                      <div class="teacher-img">
                        <img :src="v.picurl" alt>
                      </div>
                      <div class="teacher-info">
                        <el-row :gutter="20">
                          <el-col :span="4">
                            <div class="grid-content bold text-right">姓名</div>
                          </el-col>
                          <el-col :span="4">
                            <div class="grid-content">{{v.teachername}}</div>
                          </el-col>
                          <el-col :span="4">
                            <div class="grid-content bold text-right">方向</div>
                          </el-col>
                          <el-col :span="8">
                            <div class="grid-content">{{v.direction}}</div>
                          </el-col>
                        </el-row>
                        <el-row :gutter="20" class="no-pad">
                          <el-col :span="4">
                            <div class="grid-content bold text-right">简介</div>
                          </el-col>
                          <el-col :span="20">
                            <div class="grid-content">{{v.summary}}</div>
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
        <el-tab-pane label="校园课程" name="3">
          <el-row v-if="schoolCourseLists.length==0" class="no-data">暂无数据</el-row>

          <el-row
            :gutter="20"
            class="bottom-line"
            v-for="(val,key) in schoolCourseLists"
            :key="key"
          >
            <el-col :span="7">
              <div class="grid-content">
                <img :src="val.picurl" class="full-width">
              </div>
            </el-col>
            <el-col :span="17">
              <div class="grid-content">
                <el-row :gutter="20" class="no-pad">
                  <el-col :span="3">
                    <div class="grid-content bold text-right">课程介绍</div>
                  </el-col>
                  <el-col :span="17">
                    <div class="grid-content">{{val.introdtction}}</div>
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
                    <div class="grid-content bold text-right">课时</div>
                  </el-col>
                  <el-col :span="3">
                    <div class="grid-content">{{val.coursehour}}</div>
                  </el-col>
                </el-row>
                <el-collapse>
                  <el-collapse-item>
                    <template slot="title">
                      <el-col :span="3">
                        <div class="grid-content bold text-right">授课老师</div>
                      </el-col>
                      <el-col :span="3" v-for="(v,k) in val.tlist" :key="k">
                        <div class="grid-content">{{v.teachername}}</div>
                      </el-col>
                    </template>
                    <div class="clearfix teacher-box" v-for="(v,k) in val.tlist" :key="k">
                      <div class="teacher-img">
                        <img :src="v.picurl" alt>
                      </div>
                      <div class="teacher-info">
                        <el-row :gutter="20">
                          <el-col :span="4">
                            <div class="grid-content bold text-right">姓名</div>
                          </el-col>
                          <el-col :span="4">
                            <div class="grid-content">{{v.teachername}}</div>
                          </el-col>
                          <el-col :span="4">
                            <div class="grid-content bold text-right">方向</div>
                          </el-col>
                          <el-col :span="8">
                            <div class="grid-content">{{v.direction}}</div>
                          </el-col>
                        </el-row>
                        <el-row :gutter="20" class="no-pad">
                          <el-col :span="4">
                            <div class="grid-content bold text-right">简介</div>
                          </el-col>
                          <el-col :span="20">
                            <div class="grid-content">{{v.summary}}</div>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ["0", "1", "2", "3"],
      prodCourseLists: [],
      workCourseLists: [],
      designCourseLists: [],
      schoolCourseLists: []
    };
  },
  mounted() {
    this.getCourses("0");
  },
  methods: {
    getCourses(type) {
      this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/course_findCourseList.do?coursetype=${type}`
      })
        .then(res => {
          if (type == "0") {
            this.prodCourseLists = res.data.data;
          } else if (type == "1") {
            this.workCourseLists = res.data.data;
          } else if (type == "2") {
            this.designCourseLists = res.data.data;
          } else {
            this.schoolCourseLists = res.data.data;
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    handleClick(tab, event) {
      this.getCourses(tab.name);
    }
  }
};
</script>

<style scoped>
#course_body {
  width: 1100px;
  margin: 0px auto;
  margin-top: 80px;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fffffd;
  border: 1px solid #e7e7e7;
  padding: 20px;
}
.el-row {
  padding: 20px 0;
}
.bottom-line {
  border-bottom: 1px solid #eee;
}
.course-container {
  padding: 0px 20px 20px 20px;
  background: #fff;
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
.no-data {
  text-align: center;
  color: #666;
  font-size: 18px;
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




