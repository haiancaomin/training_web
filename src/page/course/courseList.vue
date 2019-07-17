<template>
  <div class="out_body">
    <div id="course_body">
      <div class="course-container">
        <el-tabs stretch @tab-click="handleClick" v-model="activeNames[0]" id="course_tab">
          <el-tab-pane label="生产类" name="0">
            <el-row v-if="prodCourseLists.length==0" class="no-data">暂无数据</el-row>

            <div class="outline_body">
              <div class="course_list_outlinebody" v-for="(val,key) in prodCourseLists" :key="key">
                <div class="course_split_title">
                  <div class="split_line_left"></div>
                  <div class="split_title">{{val.coursename}}</div>
                  <div class="split_line_right"></div>
                </div>

                <div class="teacher_div">
                  <div class="course_back" @click="closeShowTeacher(key)">返回</div>
                  <el-col :span="8" v-for="(v,k) in val.tlist" :key="k">
                    <div class="teacher_detail_body">
                      <el-col :span="7">
                        <div class="teacher-img">
                          <img :src="v.picurl" alt />
                        </div>
                      </el-col>
                      <el-col :span="17">
                        <div class="teacher-info">
                          <div class="teacher_name_div">
                            <span class="teacher_name_span">{{v.teachername}}</span>
                            <span class="teacher_split_span">|</span>
                            <span class="teacher_direction_span">{{v.direction}}</span>
                          </div>
                          <div class="teacher_summary_div" v-if="v.summary.length<=34">{{v.summary}}</div>
                          <el-tooltip
                            content="Top center"
                            placement="bottom"
                            v-if="v.summary.length>34"
                          >
                            <div slot="content">{{v.summary}}</div>
                            <div class="teacher_summary_div">{{v.summary.substring(0,33)}}...</div>
                          </el-tooltip>
                          <div class="teacher_coursename_div">{{val.coursename}}</div>
                        </div>
                      </el-col>
                    </div>
                  </el-col>
                </div>
                <div class="fix_div"></div>
                <div class="course_list_body">
                  <div class="course_picture_div">
                    <img :src="val.picurl" class="course_picture_img" />
                  </div>
                  <div class="course_detail_div">
                    <div class="check_teacher" @click="showTeacher(key)">讲师一览</div>
                    <router-link to="/SignUp">
                      <div class="signup_now" v-if="val.flag=='true'">立即报名</div>
                    </router-link>
                    <div class="hava_no_course" v-if="val.flag=='false'">暂未开课</div>
                    <div class="course_name_div">{{val.coursename}}</div>
                    <div class="course_introdtction_div">{{val.introdtction}}</div>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="施工类" name="1">
            <el-row v-if="workCourseLists.length==0" class="no-data">暂无数据</el-row>

            <div class="outline_body">
              <div class="course_list_outlinebody" v-for="(val,key) in workCourseLists" :key="key">
                <div class="course_split_title">
                  <div class="split_line_left"></div>
                  <div class="split_title">{{val.coursename}}</div>
                  <div class="split_line_right"></div>
                </div>

                <div class="teacher_div">
                  <div class="course_back" @click="closeShowTeacherWork(key)">返回</div>
                  <el-col :span="8" v-for="(v,k) in val.tlist" :key="k">
                    <div class="teacher_detail_body">
                      <el-col :span="7">
                        <div class="teacher-img">
                          <img :src="v.picurl" alt />
                        </div>
                      </el-col>
                      <el-col :span="17">
                        <div class="teacher-info">
                          <div class="teacher_name_div">
                            <span class="teacher_name_span">{{v.teachername}}</span>
                            <span class="teacher_split_span">|</span>
                            <span class="teacher_direction_span">{{v.direction}}</span>
                          </div>
                          <div class="teacher_summary_div" v-if="v.summary.length<=34">{{v.summary}}</div>
                          <el-tooltip
                            content="Top center"
                            placement="bottom"
                            v-if="v.summary.length>34"
                          >
                            <div slot="content">{{v.summary}}</div>
                            <div class="teacher_summary_div">{{v.summary.substring(0,33)}}...</div>
                          </el-tooltip>
                          <div class="teacher_coursename_div">{{val.coursename}}</div>
                        </div>
                      </el-col>
                    </div>
                  </el-col>
                </div>
                <div class="fix_div"></div>
                <div class="course_list_body">
                  <div class="course_picture_div">
                    <img :src="val.picurl" class="course_picture_img" />
                  </div>
                  <div class="course_detail_div">
                    <div class="check_teacher" @click="showTeacherWork(key)">讲师一览</div>
                    <router-link to="/SignUp">
                      <div class="signup_now" v-if="val.flag=='true'">立即报名</div>
                    </router-link>
                    <div class="hava_no_course" v-if="val.flag=='false'">暂未开课</div>
                    <div class="course_name_div">{{val.coursename}}</div>
                    <div class="course_introdtction_div">{{val.introdtction}}</div>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="设计类" name="2">
            <el-row v-if="designCourseLists.length==0" class="no-data">暂无数据</el-row>

            <div class="outline_body">
              <div
                class="course_list_outlinebody"
                v-for="(val,key) in designCourseLists"
                :key="key"
              >
                <div class="course_split_title">
                  <div class="split_line_left"></div>
                  <div class="split_title">{{val.coursename}}</div>
                  <div class="split_line_right"></div>
                </div>

                <div class="teacher_div">
                  <div class="course_back" @click="closeShowTeacherDesign(key)">返回</div>
                  <el-col :span="8" v-for="(v,k) in val.tlist" :key="k">
                    <div class="teacher_detail_body">
                      <el-col :span="7">
                        <div class="teacher-img">
                          <img :src="v.picurl" alt />
                        </div>
                      </el-col>
                      <el-col :span="17">
                        <div class="teacher-info">
                          <div class="teacher_name_div">
                            <span class="teacher_name_span">{{v.teachername}}</span>
                            <span class="teacher_split_span">|</span>
                            <span class="teacher_direction_span">{{v.direction}}</span>
                          </div>
                          <div class="teacher_summary_div" v-if="v.summary.length<=34">{{v.summary}}</div>
                          <el-tooltip
                            content="Top center"
                            placement="bottom"
                            v-if="v.summary.length>34"
                          >
                            <div slot="content">{{v.summary}}</div>
                            <div class="teacher_summary_div">{{v.summary.substring(0,33)}}...</div>
                          </el-tooltip>
                          <div class="teacher_coursename_div">{{val.coursename}}</div>
                        </div>
                      </el-col>
                    </div>
                  </el-col>
                </div>
                <div class="fix_div"></div>
                <div class="course_list_body">
                  <div class="course_picture_div">
                    <img :src="val.picurl" class="course_picture_img" />
                  </div>
                  <div class="course_detail_div">
                    <div class="check_teacher" @click="showTeacherDesign(key)">讲师一览</div>
                    <router-link to="/SignUp">
                      <div class="signup_now" v-if="val.flag=='true'">立即报名</div>
                    </router-link>
                    <div class="hava_no_course" v-if="val.flag=='false'">暂未开课</div>
                    <div class="course_name_div">{{val.coursename}}</div>
                    <div class="course_introdtction_div">{{val.introdtction}}</div>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="校园课程" name="3">
            <el-row v-if="schoolCourseLists.length==0" class="no-data">暂无数据</el-row>

            <div class="outline_body">
              <div
                class="course_list_outlinebody"
                v-for="(val,key) in schoolCourseLists"
                :key="key"
              >
                <div class="course_split_title">
                  <div class="split_line_left"></div>
                  <div class="split_title">{{val.coursename}}</div>
                  <div class="split_line_right"></div>
                </div>

                <div class="teacher_div">
                  <div class="course_back" @click="closeShowTeacherSchool(key)">返回</div>
                  <el-col :span="8" v-for="(v,k) in val.tlist" :key="k">
                    <div class="teacher_detail_body">
                      <el-col :span="7">
                        <div class="teacher-img">
                          <img :src="v.picurl" alt />
                        </div>
                      </el-col>
                      <el-col :span="17">
                        <div class="teacher-info">
                          <div class="teacher_name_div">
                            <span class="teacher_name_span">{{v.teachername}}</span>
                            <span class="teacher_split_span">|</span>
                            <span class="teacher_direction_span">{{v.direction}}</span>
                          </div>
                          <div class="teacher_summary_div" v-if="v.summary.length<=34">{{v.summary}}</div>
                          <el-tooltip
                            content="Top center"
                            placement="bottom"
                            v-if="v.summary.length>34"
                          >
                            <div slot="content">{{v.summary}}</div>
                            <div class="teacher_summary_div">{{v.summary.substring(0,33)}}...</div>
                          </el-tooltip>
                          <div class="teacher_coursename_div">{{val.coursename}}</div>
                        </div>
                      </el-col>
                    </div>
                  </el-col>
                </div>
                <div class="fix_div"></div>
                <div class="course_list_body">
                  <div class="course_picture_div">
                    <img :src="val.picurl" class="course_picture_img" />
                  </div>
                  <div class="course_detail_div">
                    <div class="check_teacher" @click="showTeacherSchool(key)">讲师一览</div>
                    <router-link to="/SignUp">
                      <div class="signup_now" v-if="val.flag=='true'">立即报名</div>
                    </router-link>
                    <div class="hava_no_course" v-if="val.flag=='false'">暂未开课</div>
                    <div class="course_name_div">{{val.coursename}}</div>
                    <div class="course_introdtction_div">{{val.introdtction}}</div>
                  </div>
                </div>
              </div>
            </div>
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
    showTeacher(key) {
      document.getElementsByClassName("course_list_body")[key].style.display =
        "none";
      document.getElementsByClassName("teacher_div")[key].style.display =
        "block";
    },
    closeShowTeacher(key) {
      document.getElementsByClassName("course_list_body")[key].style.display =
        "block";
      document.getElementsByClassName("teacher_div")[key].style.display =
        "none";
    },
    showTeacherWork(key) {
      document.getElementsByClassName("course_list_body")[
        key + this.prodCourseLists.length
      ].style.display = "none";
      document.getElementsByClassName("teacher_div")[
        key + this.prodCourseLists.length
      ].style.display = "block";
    },
    closeShowTeacherWork(key) {
      document.getElementsByClassName("course_list_body")[
        key + this.prodCourseLists.length
      ].style.display = "block";
      document.getElementsByClassName("teacher_div")[
        key + this.prodCourseLists.length
      ].style.display = "none";
    },
    showTeacherDesign(key) {
      document.getElementsByClassName("course_list_body")[
        key + this.prodCourseLists.length + this.workCourseLists.length
      ].style.display = "none";
      document.getElementsByClassName("teacher_div")[
        key + this.prodCourseLists.length + this.workCourseLists.length
      ].style.display = "block";
    },
    closeShowTeacherDesign(key) {
      document.getElementsByClassName("course_list_body")[
        key + this.prodCourseLists.length + this.workCourseLists.length
      ].style.display = "block";
      document.getElementsByClassName("teacher_div")[
        key + this.prodCourseLists.length + this.workCourseLists.length
      ].style.display = "none";
    },
    showTeacherSchool(key) {
      document.getElementsByClassName("course_list_body")[
        key +
          this.prodCourseLists.length +
          this.workCourseLists.length +
          this.designCourseLists.length
      ].style.display = "none";
      document.getElementsByClassName("teacher_div")[
        key +
          this.prodCourseLists.length +
          this.workCourseLists.length +
          this.designCourseLists.length
      ].style.display = "block";
    },
    closeShowTeacherSchool(key) {
      document.getElementsByClassName("course_list_body")[
        key +
          this.prodCourseLists.length +
          this.workCourseLists.length +
          this.designCourseLists.length
      ].style.display = "block";
      document.getElementsByClassName("teacher_div")[
        key +
          this.prodCourseLists.length +
          this.workCourseLists.length +
          this.designCourseLists.length
      ].style.display = "none";
    },
    getCourses(type) {
      this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/course_findCourseList.do?coursetype=${type}`
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
  width: 100%;
  min-width: 1220px;
  max-width: 1920px;
  margin: 0px auto;
  margin-top: 80px;
  box-shadow: 0 0 2px #c7c5c5;
  background: #ffffff;
  border: 1px solid #e7e7e7;
  padding: 10px 0px 60px 0px;
}
.el-row {
  padding: 20px 0;
}
.bottom-line {
  border-bottom: 1px solid #eee;
}
.course-container {
  width: 1220px;
  padding: 0px 20px 20px 20px;
  background: #fff;
  margin: 0px auto;
}
.teacher-img {
  float: left;
  margin: 4px 0px 0px 10px;
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
  height: 255px;
  border-radius: 5px;
}
.bold {
  font-weight: bold;
}
.text-right {
  text-align: right;
  font-size: 16px;
  line-height: 25px;
  font-family: "Arial", "Hiragino Sans GB", \5fae\8f6f\96c5\9ed1, "Helvetica",
    "sans-serif";
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
  padding: 13px 0px 32px 0px;
}
.course_introdtction_row {
  padding: 0px 0px 32px 0px;
}
.course_coursehour_row {
  padding: 0px 0px 32px 0px;
}
.click_me_signUp .el-button {
  padding: 12px;
  margin: 5px 0px 0px 5px;
}
.teacher_name_div {
  margin: 9px 0px 10px 0px;
}
.teacher_summary_div {
  font-size: 15px;
  line-height: 24px;
  color: #333;
  margin: 0px 0px 8px 0px;
}

.teacher_detail_body {
  height: 120px;
  margin: 5px 0px 0px 0px;

  width: 370px;
  border-radius: 8px;
}
.teacher_detail_body:hover {
  box-shadow: 0 0 5px #bbb;
}
.teacher_name_span {
  color: #333;
  font-size: 14px;
}
.teacher_split_span {
  color: #999;
  font-size: 14px;
}
.teacher_direction_span {
  color: #49af4f;
  font-size: 14px;
}
.teacher_coursename_div {
  font-size: 12px;
  margin: 8px 0px 0px 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #666;
}

.detail_con {
  font-size: 16px;
  line-height: 25px;
  font-family: "Arial", "Hiragino Sans GB", \5fae\8f6f\96c5\9ed1, "Helvetica",
    "sans-serif";
  color: #555;
}
.course_list_body {
  margin: 50px 0px 0px 0px;
}
.course_list_body:hover .course_detail_div {
  background-color: rgba(94, 69, 255, 0.9);
}
.course_picture_img {
  width: 260px;
  height: 160px;
  animation: course_picture_div 1s;
  -moz-animation: course_picture_div 1s; /* Firefox */
  -webkit-animation: course_picture_div 1s; /* Safari and Chrome */
  -o-animation: course_picture_div 1s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes course_picture_div {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes course_picture_div /* Firefox */ {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes course_picture_div /* Safari and Chrome */ {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-o-keyframes course_picture_div /* Opera */ {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.course_detail_div {
  width: 785px;
  height: 180px;
  background-color: rgb(9, 185, 125);
  margin: 0px 0px 0px 130px;
  padding: 30px 0px 0px 150px;
  transition: all ease-in-out 0.3s;
  animation: course_detail_div 1.5s;
  -moz-animation: course_detail_div 1.5s; /* Firefox */
  -webkit-animation: course_detail_div 1.5s; /* Safari and Chrome */
  -o-animation: course_detail_div 1.5s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes course_detail_div {
  0% {
    width: 0px;
    padding: 0px 0px 0px 0px;
    background-color: rgba(94, 69, 255, 0);
  }
  33% {
    width: 0px;
    padding: 0px 0px 0px 0px;
    background-color: rgba(94, 69, 255, 0);
  }
  67% {
    width: 785px;
    padding: 30px 0px 0px 150px;
    background-color: rgba(94, 69, 255, 0.9);
  }
  100% {
    width: 785px;
    padding: 30px 0px 0px 150px;
    background-color: #09b97d;
  }
}

@-moz-keyframes course_detail_div /* Firefox */ {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes course_detail_div /* Safari and Chrome */ {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-o-keyframes course_detail_div /* Opera */ {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.course_picture_div {
  position: absolute;
  margin: 10px 0px 0px 0px;
}

.course_name_div {
  font-size: 24px;
  line-height: 32px;
  color: #fff;
  margin: 0px 0px 0px 10px;
  transition: all ease-in-out 0.3s;
  animation: course_name_div 1.5s;
  -moz-animation: course_name_div 1.5s; /* Firefox */
  -webkit-animation: course_name_div 1.5s; /* Safari and Chrome */
  -o-animation: course_name_div 1.5s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes course_name_div {
  0% {
    opacity: 0;
  }
  67% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes course_name_div /* Firefox */ {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes course_name_div /* Safari and Chrome */ {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-o-keyframes course_name_div /* Opera */ {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.course_introdtction_div {
  height: 70px;
  margin: 15px 0px 0px 10px;
  line-height: 23px;
  font-size: 12px;
  color: #fff;
  transition: all ease-in-out 0.3s;
  animation: course_name_div 1.5s;
  -moz-animation: course_name_div 1.5s; /* Firefox */
  -webkit-animation: course_name_div 1.5s; /* Safari and Chrome */
  -o-animation: course_name_div 1.5s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
.split_line_left {
  position: absolute;
  height: 2px;
  border-top: 2px solid #f0f0f0;
  width: 200px;
  margin: 60px 0px 0px 0px;
  animation: split_line 1s;
  -moz-animation: split_line 1s; /* Firefox */
  -webkit-animation: split_line 1s; /* Safari and Chrome */
  -o-animation: split_line 1s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
@keyframes split_line {
  0% {
    border-top: 2px solid #09b97d;
    width: 0px;
  }
  67% {
    border-top: 2px solid #09b97d;
    width: 200px;
  }
  100% {
    border-top: 2px solid #f0f0f0;
    width: 200px;
  }
}

@-moz-keyframes split_line /* Firefox */ {
  0% {
    border-top: 2px solid rgba(94, 69, 255, 0.9);
    width: 0px;
  }
  67% {
    border-top: 2px solid rgba(94, 69, 255, 0.9);
    width: 200px;
  }
  100% {
    border-top: 2px solid #f0f0f0;
    width: 200px;
  }
}
@-webkit-keyframes split_line /* Safari and Chrome */ {
  0% {
    border-top: 2px solid rgba(94, 69, 255, 0.9);
    width: 0px;
  }
  67% {
    border-top: 2px solid rgba(94, 69, 255, 0.9);
    width: 200px;
  }
  100% {
    border-top: 2px solid #f0f0f0;
    width: 200px;
  }
}
@-o-keyframes split_line /* Opera */ {
  0% {
    border-top: 2px solid rgba(94, 69, 255, 0.9);
    width: 0px;
  }
  67% {
    border-top: 2px solid rgba(94, 69, 255, 0.9);
    width: 200px;
  }
  100% {
    border-top: 2px solid #f0f0f0;
    width: 200px;
  }
}
.split_line_right {
  position: absolute;
  height: 2px;
  border-top: 2px solid #f0f0f0;
  width: 200px;
  margin: 60px 0px 0px 715px;
  animation: split_line 1s;
  -moz-animation: split_line 1s; /* Firefox */
  -webkit-animation: split_line 1s; /* Safari and Chrome */
  -o-animation: split_line 1s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
.split_title {
  position: absolute;
  width: 515px;
  margin: 51px 0px 0px 200px;
  font-size: 18px;
  text-align: center;
}
.course_split_title {
  height: 60px;
}
.course_type_title {
  width: 100%;
  font-size: 40px;
  line-height: 55px;
  text-align: center;
  margin: 30px 0px 0px 0px;
}
.teacher_div {
  display: none;
  width: 1200px;
  margin: 40px 0px 0px -130px;
}
.fix_div {
  clear: both;
}
.check_teacher {
  position: absolute;
  width: 100px;
  height: 38px;
  background: #fff;
  border-radius: 19px;
  margin: 100px 0px 0px 390px;
  animation: course_name_div 1.5s;
  -moz-animation: course_name_div 1.5s; /* Firefox */
  -webkit-animation: course_name_div 1.5s; /* Safari and Chrome */
  -o-animation: course_name_div 1.5s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
  padding: 9px 0px 0px 21px;
  color: #49af4f;
  font-weight: bold;
  transition: all ease-in-out 0.3s;
  cursor: pointer;
}
.course_list_body:hover .check_teacher {
  color: rgba(94, 69, 255, 0.9);
}
.signup_now {
  position: absolute;
  width: 100px;
  height: 38px;
  background: #fff;
  border-radius: 19px;
  margin: 100px 0px 0px 500px;
  animation: course_name_div 1.5s;
  -moz-animation: course_name_div 1.5s; /* Firefox */
  -webkit-animation: course_name_div 1.5s; /* Safari and Chrome */
  -o-animation: course_name_div 1.5s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
  padding: 9px 0px 0px 21px;
  color: #49af4f;
  font-weight: bold;
  transition: all ease-in-out 0.3s;
  cursor: pointer;
}
.hava_no_course {
  position: absolute;
  width: 100px;
  height: 38px;
  background: #fff;
  border-radius: 19px;
  margin: 100px 0px 0px 500px;
  animation: course_name_div 1.5s;
  -moz-animation: course_name_div 1.5s; /* Firefox */
  -webkit-animation: course_name_div 1.5s; /* Safari and Chrome */
  -o-animation: course_name_div 1.5s; /* Opera */
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
  padding: 9px 0px 0px 21px;
  color: #49af4f;
  font-weight: bold;
  transition: all ease-in-out 0.3s;
  cursor: not-allowed;
}
.course_list_body:hover .signup_now,.course_list_body:hover .hava_no_course {
  color: rgba(94, 69, 255, 0.9);
}
.outline_body {
  width: 100%;
  padding: 0px 0px 10px 0px;
}
.course_list_outlinebody {
  width: 915px;
  margin: 0px auto;
}
.course_back {
  position: absolute;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  letter-spacing: 10px;
  width: 100px;
  height: 38px;
  background: rgb(9, 185, 125, 0.7);
  border-radius: 19px;
  margin: 200px 0px 0px 1060px;
  padding: 10px 0px 0px 30px;
  box-shadow: 0 0 5px #bbb;
  animation: course_back 2s;
  -moz-animation: course_back 2s; /* Firefox */
  -webkit-animation: course_back 2s; /* Safari and Chrome */
  -o-animation: course_back 2s; /* Opera */
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
}
@keyframes course_back {
  0% {
    margin: 190px 0px 0px 1060px;
  }
  50% {
    margin: 210px 0px 0px 1060px;
  }
  100% {
    margin: 190px 0px 0px 1060px;
  }
}

@-moz-keyframes course_back /* Firefox */ {
  0% {
    margin: 190px 0px 0px 1060px;
  }
  50% {
    margin: 210px 0px 0px 1060px;
  }
  100% {
    margin: 190px 0px 0px 1060px;
  }
}
@-webkit-keyframes course_back /* Safari and Chrome */ {
  0% {
    margin: 190px 0px 0px 1060px;
  }
  50% {
    margin: 210px 0px 0px 1060px;
  }
  100% {
    margin: 190px 0px 0px 1060px;
  }
}
@-o-keyframes course_back /* Opera */ {
  0% {
    margin: 190px 0px 0px 1060px;
  }
  50% {
    margin: 210px 0px 0px 1060px;
  }
  100% {
    margin: 190px 0px 0px 1060px;
  }
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
#course_tab .el-tabs__header {
  margin: 0px;
}
</style>




