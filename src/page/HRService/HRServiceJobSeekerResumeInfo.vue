<template>
  <div id="HRServiceJobSeekerResumeInfo" @mouseenter="enter()" @mouseleave="leave()">
    <div id="resumePicture">
        <img src="../../assets/inspection1.jpg" id="pictureShow" alt>
    </div>
     <span class="el-icon-edit-outline" v-if="showedit"></span>
    <div id="resumeName">
        <p>张三</p>
    </div>
    <div id="resumeInfo">
        <p>现居住南通 │ 2年工作经验 │ 男 │ 24 岁 (1994/05/18) │ 我目前不想换工作</p>
    </div>
    <div id="resumeMail">
        <span class="el-icon-message"></span><span class="mail-con">126732293@qq.com</span>
    </div>
    <div id="resumeMobile">
        <span class="el-icon-mobile-phone"></span><span class="mobile-con">189213123123</span>
    </div>
  </div>
</template>

<script>

export default {
  
  name: "HRServiceJobSeekerResumeInfo",
  data() {
    return {
      showedit: false
    };
  },
  components: {
    
  },
  methods: {
    enter() {
        document.getElementById("HRServiceJobSeekerResumeInfo").style.borderColor='#ff6000';
        this.showedit=true;
    },
     leave() {
        document.getElementById("HRServiceJobSeekerResumeInfo").style.borderColor='#e7e7e7';
        this.showedit=false;
    }
  }
};
</script>

<style scoped>
    #HRServiceJobSeekerResumeInfo {
        width: 725px;
  height: 145px;
  margin: 80px auto;
  
  background: #fffffd;
  border: 1px solid #e7e7e7;
  padding: 20px 20px 0px 20px;
    }
.el-icon-edit-outline{
    font-size: 20px;
    position: absolute;
    margin: -110px 0px 0px 670px;
    color:#409EFF;

}
#pictureShow {
    height: 104px;
    width:85px;
    
}
#resumeName {
    font-size: 24px;
    position: absolute;
    margin: -110px 0px 0px 120px;
    
}
#resumeInfo {
    position: absolute;
    margin: -60px 0px 0px 120px;
}
#resumeMail {
    position: absolute;
    margin: -20px 0px 0px 120px;
}
#resumeMobile {
    position: absolute;
    margin: -20px 0px 0px 400px;
}
.el-icon-message {
    
    font-size: 20px;
    position: absolute;
    margin:-1px 0px 0px 0px;
}
.mail-con {
    margin:0px 0px 0px 23px;
}
.el-icon-mobile-phone {
    font-size: 20px;
    position: absolute;
    margin:-1px 0px 0px 0px;
}
.mobile-con {
    margin:0px 0px 0px 23px;
}
</style>


