<template>
  <div id="InspectionDetail">
  
    <h1 class="inspection-detail-label">考察详情</h1>
      <div class="title_date">
        <h3>{{title}}</h3>
        <p>发布时间：{{createdate}}</p>
      </div>
      <div class="sigun_up">
        <a :href="link" target="_blank"><el-button type="primary">立即报名</el-button></a>
      </div>
      <div class="table_download">
       <p class="file_download"><a :href="invitationUrl" v-if="invitationUrl != ''">邀请函</a></p>
    <p class="file_download"><a :href="receiptFormUrl" v-if="receiptFormUrl != ''">回执表</a></p>
    </div>
   
 
     
    <iframe align="middle" frameborder="0" height="800" scrolling="no" 
     width="800" :src="invitationUrl" >
    </iframe>


  </div>
</template>

<script>
export default {
  name: "InspectionDetail",
  data() {
    return {
      invitationName:"",
      invitationUrl:"",
      receiptFormName:"",
      receiptFormUrl:"",
      title:"",
      createdate:"",
      link:""
    };
  },
  props:['eid'],
  methods: {},
  mounted() {
    this.$ajax({
        method: "get",
        url: `${
          this.baseURL
        }/zjsxpt/news_getInspectById.do?eid=${this.eid}`
      })
        .then(res => {
          this.link = res.data.data.link;
          this.title = res.data.data.title;
          this.createdate = res.data.data.createdate;
          if(res.data.data.volist[0].attname) {
            if(res.data.data.volist[0].attname.split(".")[res.data.data.volist[0].attname.split(".").length-1] == "pdf") {
              this.invitationName = res.data.data.volist[0].attname;
              this.invitationUrl = res.data.data.volist[0].atturl;
            } else if (res.data.data.volist[0].attname.split(".")[res.data.data.volist[0].attname.split(".").length-1] == "doc"||res.data.data.volist[0].attname.split(".")[res.data.data.volist[0].attname.split(".").length-1] == "docx") {
              this.receiptFormName = res.data.data.volist[0].attname;
              this.receiptFormUrl = res.data.data.volist[0].atturl;
            }
          }
          if(res.data.data.volist[1].attname) {
            if(res.data.data.volist[1].attname.split(".")[res.data.data.volist[1].attname.split(".").length-1] == "pdf") {
              this.invitationName = res.data.data.volist[1].attname;
              this.invitationUrl = res.data.data.volist[1].atturl;
            } else if (res.data.data.volist[1].attname.split(".")[res.data.data.volist[1].attname.split(".").length-1] == "doc"||res.data.data.volist[1].attname.split(".")[res.data.data.volist[1].attname.split(".").length-1] == "docx") {
              this.receiptFormName = res.data.data.volist[1].attname;
              this.receiptFormUrl = res.data.data.volist[1].atturl;
            }
          }
        })
        .catch(function(err) {
          console.log(err);
        });
  }
};
</script>

<style scoped>
  #InspectionDetail {
  width: 1000px;
  margin: 0px auto;
  margin-top:80px;
  box-shadow: 0 0 2px #c7c5c5;
  background: #ffffff;
  border: 1px solid #e7e7e7;
  padding: 20px;
}
.inspection-detail-label {

  font-size: 18px;
  line-height: 40px;
  border: 1px solid #e4e7ed;
  background: #e4e7ed;
  padding: 0 15px;
  border-radius: 3px;
  margin: 0px 0px 10px 0px;
  border-left: 2px solid #409eff;

}
.table_download {
  
  text-align: left;
}
iframe {
  margin:0px 0px 0px 80px;
}
.file_download a{
  color:#409EFF;
  font-weight: bold;
}

.file_download a:hover{
  color:#67C23A;
}
.file_download a{
 
  text-decoration : underline
}
.file_download{
  margin:10px 0px 10px 80px;
  text-decoration : underline
}
.title_date {
  text-align: center;
}
.title_date h3{
  font-size: 18px;
      font-weight: bold;
      margin:30px 0px 20px 0px;
}
.title_date p{
  font-size: 13px;
     color: #999;
      margin:0px 0px 10px 0px;
}
.el-button {
  width:122px;
  height:34px;
  padding:0px;
  
}
.sigun_up {
  text-align: center;
  margin:20px 0px;
}
</style>


