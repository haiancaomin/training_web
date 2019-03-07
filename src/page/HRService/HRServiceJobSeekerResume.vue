<template>
  <div id="HRServiceJobSeekerResume">
    
    
    <div class="HRServiceJobSeekerResume-nav">
            <div class="HRServiceJobSeekerResume-nav-header">
                <div class="HRServiceJobSeekerResume-my-resume">
                    <span>我的简历</span>
                </div>
                <div class="HRServiceJobSeekerResume-updateDT">
                    <span id="updateDT">更新时间：</span><span id="date">2019-03-06</span>
                </div>
                <div class="HRServiceJobSeekerResume-preview">
                    <el-button type="primary" id="preview">预览</el-button>
                </div>
            </div>	
			<div class="HRServiceJobSeekerResume-nav-body">
                
				<a href="javascript:;">
                    <span class="el-icon-tickets"></span>
                    <span class="base-info">基本信息</span>
                    <span class="el-icon-check" id="checkOK11" v-if="checkOK11"></span>
                    <span class="el-icon-check" id="checkOK12" v-if="checkOK12"></span>
                </a>
				<a href="javascript:;">
                    <span class="el-icon-rank"></span>
                    <span class="job-intension">求职意向</span>
                    <span class="el-icon-check" id="checkOK21" v-if="checkOK21"></span>
                    <span class="el-icon-check" id="checkOK22" v-if="checkOK22"></span>
                </a>
				<a href="javascript:;">
                    <span class="el-icon-menu"></span>
                    <span class="experience">工作经验</span>
                    <span class="el-icon-check" id="checkOK31" v-if="checkOK31"></span>
                    <span class="el-icon-check" id="checkOK32" v-if="checkOK32"></span>
                </a>
				<a href="javascript:;">
                    <span class="el-icon-view"></span>
                    <span class="project-experience">项目经验</span>
                    <span class="el-icon-check" id="checkOK41" v-if="checkOK41"></span>
                    <span class="el-icon-check" id="checkOK42" v-if="checkOK42"></span> 
                </a>
				<a href="javascript:;">
                    <span class="el-icon-star-on"></span>
                    <span class="edu-experience">教育经历</span>
                    <span class="el-icon-check" id="checkOK51" v-if="checkOK51"></span>
                    <span class="el-icon-check" id="checkOK52" v-if="checkOK52"></span>  
                </a>
				<a href="javascript:;">
                    <span class="el-icon-news"></span>
                    <span class="school">在校情况</span>
                    <span class="el-icon-check" id="checkOK61" v-if="checkOK61"></span>
                    <span class="el-icon-check" id="checkOK62" v-if="checkOK62"></span>
                </a>
				<a href="javascript:;">
                    <span class="el-icon-star-off"></span>
                    <span class="speciality">技能特长</span>
                    <span class="el-icon-check" id="checkOK71" v-if="checkOK71"></span>
                    <span class="el-icon-check" id="checkOK72" v-if="checkOK72"></span>
                </a>
				<a href="javascript:;">
                    <span class="el-icon-document"></span>
                    <span class="additional">附加信息</span>
                    <span class="el-icon-check" id="checkOK81" v-if="checkOK81"></span>
                    <span class="el-icon-check" id="checkOK82" v-if="checkOK82"></span>
                </a>
			</div>
		</div>

        <div class="Resume-right">
            <div class="HRServiceJobSeekerResumeInfo">
            <HRServiceJobSeekerResumeInfo></HRServiceJobSeekerResumeInfo>
            </div>
        </div>
  </div>
</template>

<script>
import HRServiceJobSeekerResumeInfo from '@/page/HRService/HRServiceJobSeekerResumeInfo'
export default {
  
  name: "HRServiceJobSeekerResume",
  data() {
    return {
      checkOK11: false,
      checkOK12: true,
      checkOK21: false,
      checkOK22: true,
      checkOK31: true,
      checkOK32: false,
      checkOK41: true,
      checkOK42: false,
      checkOK51: true,
      checkOK52: false,
      checkOK61: true,
      checkOK62: false,
      checkOK71: true,
      checkOK72: false,
      checkOK81: true,
      checkOK82: false,
    };
  },
  components: {
    HRServiceJobSeekerResumeInfo
  },
  methods: {
    
  }
};
</script>

<style scoped>
#HRServiceJobSeekerResume {
  width: 1000px;
  height: 618px;
  margin: 80px auto;
  box-shadow: 0 0 2px #c7c5c5;
  background: #fffffd;
  border: 1px solid #e7e7e7;
  padding: 20px 20px 0px 20px;
}
.HRServiceJobSeekerResume-nav {
    position: fixed;
    float: left;
    width: 210px;
    background-color: #fafafa;
    border-top: 2px solid #ff6000;
    margin:10px 0px 0px 0px;
}

.HRServiceJobSeekerResume-nav-body {
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
}
.HRServiceJobSeekerResume-nav-body a {
    position: relative;
    display: block;
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
    border-bottom: 1px solid #e4eaee;
    color: #333;
}

.HRServiceJobSeekerResume-nav-body a:hover {
    color: #ff6000;
    border-left: 2px solid #ff6000;
}
.HRServiceJobSeekerResume-nav-header {
    width: 210px;
    border: 1px solid #ddd;
    border-top: none;
    padding:20px 15px 10px 15px;
}
.HRServiceJobSeekerResume-my-resume {
    font-size: 18px;
}
#updateDT{
    font-size: 12px;
    color: #999
}
#date {
    font-size: 12px;
}
.HRServiceJobSeekerResume-updateDT {
    margin:15px 15px 15px 0px;
}

#preview {
    height: 30px;
    padding:0px 12px;

}

.el-icon-tickets, .el-icon-rank, .el-icon-menu, .el-icon-view, .el-icon-star-on, .el-icon-news, .el-icon-star-off, .el-icon-document{
    font-size: 20px;
    position: absolute;
    display: block;
    top: 50%;
    left: 30px;
    margin-top: -10px;
}

.base-info, .job-intension, .experience, .project-experience, .edu-experience, .school, .speciality, .additional{
    margin: 0px 0px 0px 35px;
}
#checkOK11, #checkOK21, #checkOK31, #checkOK41, #checkOK51, #checkOK61, #checkOK71, #checkOK81{
    color: #333;
    margin:0px 0px 0px 60px;
    font-size: 20px
}
#checkOK12, #checkOK22, #checkOK32, #checkOK42, #checkOK52, #checkOK62, #checkOK72, #checkOK82 {
    color:#ff6000;
    margin:0px 0px 0px 60px;
    font-size: 20px
}
.HRServiceJobSeekerResumeInfo {
    position: absolute;
    margin:-69px 0px 0px 230px;
}
</style>


