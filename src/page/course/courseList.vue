<template>
<div class="out_body">
  <div id="course_body">
    <div class="course-container">
      <el-tabs type="border-card" stretch @tab-click="handleClick" v-model="activeNames[0]">
        <el-tab-pane label="生产类" name="0">
          <el-row v-if="prodCourseLists.length==0" class="no-data">暂无数据</el-row>
          <el-row :gutter="20" class="bottom-line" v-for="(val,key) in prodCourseLists" :key="key">
            <el-col :span="8">
              <div class="grid-content">
                <img :src="val.picurl" class="full-width">
              </div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content">
                <el-row :gutter="20" class="course_name_row">
                  <el-col :span="4">
                    <div class="grid-content bold text-right">课程名称：</div>
                  </el-col>
                  <el-col :span="12">
                    <div class="grid-content detail_con">{{val.coursename}}</div>
                  </el-col>
                </el-row>
                <el-row :gutter="20" class="no-pad course_introdtction_row">
                  <el-col :span="4">
                    <div class="grid-content bold text-right">课程介绍：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="grid-content detail_con">{{val.introdtction}}</div>
                  </el-col>
                  <el-col :span="4">
                    <div class="click_me_signUp">
                      <router-link to="/SignUp">
                        <el-button type="primary">点我报名</el-button>
                      </router-link>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20" class="no-pad course_coursehour_row">
                  <el-col :span="4">
                    <div class="grid-content bold text-right">课时：</div>
                  </el-col>
                  <el-col :span="3">
                    <div class="grid-content detail_con">{{val.coursehour}}</div>
                  </el-col>
                </el-row>
                <el-collapse id="teacher_el-collapse">
                  <el-collapse-item>
                    <template slot="title">
                      <el-col :span="4">
                        <div class="grid-content bold text-right">授课老师：</div>
                      </el-col>
                      <el-col :span="3" v-for="(v,k) in val.tlist" :key="k">
                        <div class="grid-content detail_con">{{v.teachername}}</div>
                      </el-col>
                    </template>

                    <el-col :span="8" v-for="(v,k) in val.tlist" :key="k">
                      <div class="teacher_detail_body">
                        <el-col :span="7">
                          <div class="teacher-img">
                            <img :src="v.picurl" alt>
                          </div>
                        </el-col>
                        <el-col :span="17">
                          <div class="teacher-info">
                            <div class="teacher_name_div">
                              <span class="teacher_name_span">{{v.teachername}}</span>
                              <span class="teacher_split_span">|</span>
                              <span class="teacher_direction_span">{{v.direction}}</span>
                            </div>
                            <div
                              class="teacher_summary_div"
                              v-if="v.summary.length<=28"
                            >{{v.summary}}</div>
                            <el-tooltip
                              content="Top center"
                              placement="bottom"
                              v-if="v.summary.length>28"
                            >
                              <div slot="content">{{v.summary}}</div>
                              <div class="teacher_summary_div">{{v.summary.substring(0,27)}}...</div>
                            </el-tooltip>
                            <div
                              class="teacher_coursename_div"
                              v-if="val.coursename.length<=16"
                            >{{val.coursename}}</div>
                            <el-tooltip
                              content="Top center"
                              placement="bottom"
                              v-if="val.coursename.length>16"
                            >
                              <div slot="content">{{val.coursename}}</div>
                              <div class="teacher_coursename_div">{{val.coursename}}</div>
                            </el-tooltip>
                          </div>
                        </el-col>
                      </div>
                    </el-col>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="施工类" name="1">
          <el-row v-if="workCourseLists.length==0" class="no-data">暂无数据</el-row>
          <el-row :gutter="20" class="bottom-line" v-for="(val,key) in workCourseLists" :key="key">
            <el-col :span="8">
              <div class="grid-content">
                <img :src="val.picurl" class="full-width">
              </div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content">
                <el-row :gutter="20" class="course_name_row">
                  <el-col :span="4">
                    <div class="grid-content bold text-right">课程名称：</div>
                  </el-col>
                  <el-col :span="12">
                    <div class="grid-content detail_con">{{val.coursename}}</div>
                  </el-col>
                </el-row>
                <el-row :gutter="20" class="no-pad course_introdtction_row">
                  <el-col :span="4">
                    <div class="grid-content bold text-right">课程介绍：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="grid-content detail_con">{{val.introdtction}}</div>
                  </el-col>
                  <el-col :span="4">
                    <div class="click_me_signUp">
                      <router-link to="/SignUp">
                        <el-button type="primary">点我报名</el-button>
                      </router-link>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20" class="no-pad course_coursehour_row">
                  <el-col :span="4">
                    <div class="grid-content bold text-right">课时：</div>
                  </el-col>
                  <el-col :span="3">
                    <div class="grid-content detail_con">{{val.coursehour}}</div>
                  </el-col>
                </el-row>
                <el-collapse id="teacher_el-collapse">
                  <el-collapse-item>
                    <template slot="title">
                      <el-col :span="4">
                        <div class="grid-content bold text-right">授课老师：</div>
                      </el-col>
                      <el-col :span="3" v-for="(v,k) in val.tlist" :key="k">
                        <div class="grid-content detail_con">{{v.teachername}}</div>
                      </el-col>
                    </template>

                    <el-col :span="8" v-for="(v,k) in val.tlist" :key="k">
                      <div class="teacher_detail_body">
                        <el-col :span="7">
                          <div class="teacher-img">
                            <img :src="v.picurl" alt>
                          </div>
                        </el-col>
                        <el-col :span="17">
                          <div class="teacher-info">
                            <div class="teacher_name_div">
                              <span class="teacher_name_span">{{v.teachername}}</span>
                              <span class="teacher_split_span">|</span>
                              <span class="teacher_direction_span">{{v.direction}}</span>
                            </div>
                            <div
                              class="teacher_summary_div"
                              v-if="v.summary.length<=28"
                            >{{v.summary}}</div>
                            <el-tooltip
                              content="Top center"
                              placement="bottom"
                              v-if="v.summary.length>28"
                            >
                              <div slot="content">{{v.summary}}</div>
                              <div class="teacher_summary_div">{{v.summary.substring(0,27)}}...</div>
                            </el-tooltip>
                            <div
                              class="teacher_coursename_div"
                              v-if="val.coursename.length<=16"
                            >{{val.coursename}}</div>
                            <el-tooltip
                              content="Top center"
                              placement="bottom"
                              v-if="val.coursename.length>16"
                            >
                              <div slot="content">{{val.coursename}}</div>
                              <div class="teacher_coursename_div">{{val.coursename}}</div>
                            </el-tooltip>
                          </div>
                        </el-col>
                      </div>
                    </el-col>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>

        <el-tab-pane label="设计类" name="2">
          <el-row v-if="designCourseLists.length==0" class="no-data">暂无数据</el-row>
          <el-row :gutter="20" class="bottom-line" v-for="(val,key) in designCourseLists" :key="key">
            <el-col :span="8">
              <div class="grid-content">
                <img :src="val.picurl" class="full-width">
              </div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content">
                <el-row :gutter="20" class="course_name_row">
                  <el-col :span="4">
                    <div class="grid-content bold text-right">课程名称：</div>
                  </el-col>
                  <el-col :span="12">
                    <div class="grid-content detail_con">{{val.coursename}}</div>
                  </el-col>
                </el-row>
                <el-row :gutter="20" class="no-pad course_introdtction_row">
                  <el-col :span="4">
                    <div class="grid-content bold text-right">课程介绍：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="grid-content detail_con">{{val.introdtction}}</div>
                  </el-col>
                  <el-col :span="4">
                    <div class="click_me_signUp">
                      <router-link to="/SignUp">
                        <el-button type="primary">点我报名</el-button>
                      </router-link>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20" class="no-pad course_coursehour_row">
                  <el-col :span="4">
                    <div class="grid-content bold text-right">课时：</div>
                  </el-col>
                  <el-col :span="3">
                    <div class="grid-content detail_con">{{val.coursehour}}</div>
                  </el-col>
                </el-row>
                <el-collapse id="teacher_el-collapse">
                  <el-collapse-item>
                    <template slot="title">
                      <el-col :span="4">
                        <div class="grid-content bold text-right">授课老师：</div>
                      </el-col>
                      <el-col :span="3" v-for="(v,k) in val.tlist" :key="k">
                        <div class="grid-content detail_con">{{v.teachername}}</div>
                      </el-col>
                    </template>

                    <el-col :span="8" v-for="(v,k) in val.tlist" :key="k">
                      <div class="teacher_detail_body">
                        <el-col :span="7">
                          <div class="teacher-img">
                            <img :src="v.picurl" alt>
                          </div>
                        </el-col>
                        <el-col :span="17">
                          <div class="teacher-info">
                            <div class="teacher_name_div">
                              <span class="teacher_name_span">{{v.teachername}}</span>
                              <span class="teacher_split_span">|</span>
                              <span class="teacher_direction_span">{{v.direction}}</span>
                            </div>
                            <div
                              class="teacher_summary_div"
                              v-if="v.summary.length<=28"
                            >{{v.summary}}</div>
                            <el-tooltip
                              content="Top center"
                              placement="bottom"
                              v-if="v.summary.length>28"
                            >
                              <div slot="content">{{v.summary}}</div>
                              <div class="teacher_summary_div">{{v.summary.substring(0,27)}}...</div>
                            </el-tooltip>
                            <div
                              class="teacher_coursename_div"
                              v-if="val.coursename.length<=16"
                            >{{val.coursename}}</div>
                            <el-tooltip
                              content="Top center"
                              placement="bottom"
                              v-if="val.coursename.length>16"
                            >
                              <div slot="content">{{val.coursename}}</div>
                              <div class="teacher_coursename_div">{{val.coursename}}</div>
                            </el-tooltip>
                          </div>
                        </el-col>
                      </div>
                    </el-col>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="校园课程" name="3">
          <el-row v-if="schoolCourseLists.length==0" class="no-data">暂无数据</el-row>
          <el-row :gutter="20" class="bottom-line" v-for="(val,key) in schoolCourseLists" :key="key">
            <el-col :span="8">
              <div class="grid-content">
                <img :src="val.picurl" class="full-width">
              </div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content">
                <el-row :gutter="20" class="course_name_row">
                  <el-col :span="4">
                    <div class="grid-content bold text-right">课程名称：</div>
                  </el-col>
                  <el-col :span="12">
                    <div class="grid-content detail_con">{{val.coursename}}</div>
                  </el-col>
                </el-row>
                <el-row :gutter="20" class="no-pad course_introdtction_row">
                  <el-col :span="4">
                    <div class="grid-content bold text-right">课程介绍：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="grid-content detail_con">{{val.introdtction}}</div>
                  </el-col>
                  <el-col :span="4">
                    <div class="click_me_signUp">
                      <router-link to="/SignUp">
                        <el-button type="primary">点我报名</el-button>
                      </router-link>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20" class="no-pad course_coursehour_row">
                  <el-col :span="4">
                    <div class="grid-content bold text-right">课时：</div>
                  </el-col>
                  <el-col :span="3">
                    <div class="grid-content detail_con">{{val.coursehour}}</div>
                  </el-col>
                </el-row>
                <el-collapse id="teacher_el-collapse">
                  <el-collapse-item>
                    <template slot="title">
                      <el-col :span="4">
                        <div class="grid-content bold text-right">授课老师：</div>
                      </el-col>
                      <el-col :span="3" v-for="(v,k) in val.tlist" :key="k">
                        <div class="grid-content detail_con">{{v.teachername}}</div>
                      </el-col>
                    </template>

                    <el-col :span="8" v-for="(v,k) in val.tlist" :key="k">
                      <div class="teacher_detail_body">
                        <el-col :span="7">
                          <div class="teacher-img">
                            <img :src="v.picurl" alt>
                          </div>
                        </el-col>
                        <el-col :span="17">
                          <div class="teacher-info">
                            <div class="teacher_name_div">
                              <span class="teacher_name_span">{{v.teachername}}</span>
                              <span class="teacher_split_span">|</span>
                              <span class="teacher_direction_span">{{v.direction}}</span>
                            </div>
                            <div
                              class="teacher_summary_div"
                              v-if="v.summary.length<=28"
                            >{{v.summary}}</div>
                            <el-tooltip
                              content="Top center"
                              placement="bottom"
                              v-if="v.summary.length>28"
                            >
                              <div slot="content">{{v.summary}}</div>
                              <div class="teacher_summary_div">{{v.summary.substring(0,27)}}...</div>
                            </el-tooltip>
                            <div
                              class="teacher_coursename_div"
                              v-if="val.coursename.length<=16"
                            >{{val.coursename}}</div>
                            <el-tooltip
                              content="Top center"
                              placement="bottom"
                              v-if="val.coursename.length>16"
                            >
                              <div slot="content">{{val.coursename}}</div>
                              <div class="teacher_coursename_div">{{val.coursename}}</div>
                            </el-tooltip>
                          </div>
                        </el-col>
                      </div>
                    </el-col>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ["0"],
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
  width: 1200px;
  margin: 0px auto;
  margin-top: 80px;
  box-shadow: 0 0 2px #c7c5c5;
  background: #ffffff;
  border: 1px solid #e7e7e7;
  padding: 10px 0px 20px 0px;
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
  margin: 14px 0px 0px 0px;
}
.teacher-img img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-top: 10px;
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
  height: 235px;
  border-radius: 5px;
}
.bold {
  font-weight: bold;
}
.text-right {
  text-align: right;
  font-size:16px;
  line-height: 25px;
  font-family: "Arial","Hiragino Sans GB", \5fae\8f6f\96c5\9ed1, "Helvetica", "sans-serif";
  font-weight: bold;

}
.no-pad {
  padding: 0;
}
.no-data {
  text-align: center;
  color: #666;
  font-size: 18px;
}
.course_name_row {
  padding: 13px 0px 25px 0px;
}
.course_introdtction_row {
  padding: 0px 0px 25px 0px;
}
.course_coursehour_row {
  padding: 0px 0px 25px 0px;
}
.click_me_signUp .el-button {
  padding: 12px;
  margin:5px 0px 0px 5px;
}
.teacher_name_div {
  margin: 9px 0px 8px 0px;
}
.teacher_summary_div {
  font-size: 15px;
  line-height: 24px;
  color: #333;
  margin: 0px 0px 8px 0px;
}

.teacher_detail_body {
  height: 130px;
  margin: 25px 0px 0px 0px;
  border: 1px solid #eee;
  width: 339px;
  border-radius: 8px;
}
.teacher_detail_body:hover {
  box-shadow: 0 0 2px #409eff;
}
.teacher_name_span {
  color: #333;
  font-size: 13px;
}
.teacher_split_span {
  color: #999;
  font-size: 13px;
}
.teacher_direction_span {
  color: #49af4f;
  font-size: 13px;
}
.teacher_coursename_div {
  margin: 8px 0px 0px 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
      color: #666
}

.detail_con {
  font-size: 16px;
  line-height: 25px;
  font-family: "Arial","Hiragino Sans GB", \5fae\8f6f\96c5\9ed1, "Helvetica", "sans-serif";
  color:#555
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
#teacher_el-collapse .el-collapse-item__wrap {
  margin-left: -370px;
  padding-bottom: 20px;
}
</style>




