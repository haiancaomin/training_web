<template>
  <div id="InspectionDetail">
    <router-link to="/Inspection">
    <div class="back_btn">点击返回</div>
    </router-link>
    <div class="inspection_detail_body">

    <div class="title_date">
      <h3>{{title}}</h3>
      <p>发布时间：{{createdate}}</p>
    </div>
    <div class="sigun_up">
      <a :href="link" target="_blank">
        <div class="see-detail">立即报名</div>
      </a>
    </div>
    <div class="table_download">
      <p class="file_download">
        <a :href="invitationUrl" target="_blank" v-if="invitationUrl != ''">邀请函</a>
      </p>
      <p class="file_download">
        <a :href="receiptFormUrl" target="_blank" v-if="receiptFormUrl != ''">回执表</a>
      </p>
    </div>

    <iframe
      align="middle"
      frameborder="0"
      height="800"
      scrolling="no"
      width="800"
      :src="invitationUrl"
    ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "InspectionDetail",
  data() {
    return {
      invitationName: "",
      invitationUrl: "",
      receiptFormName: "",
      receiptFormUrl: "",
      title: "",
      createdate: "",
      link: ""
    };
  },
  props: ["eid"],
  methods: {},
  mounted() {
    this.$ajax({
      method: "get",
      url: `${this.baseURL}/zjsxpt/news_getInspectById.do?eid=${this.eid}`
    })
      .then(res => {
        this.link = res.data.data.link;
        this.title = res.data.data.title;
        this.createdate = res.data.data.createdate;
        if (res.data.data.volist[0].attname) {
          if (
            res.data.data.volist[0].attname.split(".")[
              res.data.data.volist[0].attname.split(".").length - 1
            ] == "pdf"
          ) {
            this.invitationName = res.data.data.volist[0].attname;
            this.invitationUrl = res.data.data.volist[0].atturl;
          } else if (
            res.data.data.volist[0].attname.split(".")[
              res.data.data.volist[0].attname.split(".").length - 1
            ] == "doc" ||
            res.data.data.volist[0].attname.split(".")[
              res.data.data.volist[0].attname.split(".").length - 1
            ] == "docx"
          ) {
            this.receiptFormName = res.data.data.volist[0].attname;
            this.receiptFormUrl = res.data.data.volist[0].atturl;
          }
        }
        if (res.data.data.volist[1].attname) {
          if (
            res.data.data.volist[1].attname.split(".")[
              res.data.data.volist[1].attname.split(".").length - 1
            ] == "pdf"
          ) {
            this.invitationName = res.data.data.volist[1].attname;
            this.invitationUrl = res.data.data.volist[1].atturl;
          } else if (
            res.data.data.volist[1].attname.split(".")[
              res.data.data.volist[1].attname.split(".").length - 1
            ] == "doc" ||
            res.data.data.volist[1].attname.split(".")[
              res.data.data.volist[1].attname.split(".").length - 1
            ] == "docx"
          ) {
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
  width: 100%;
  min-width: 1220px;
  max-width: 1920px;
  
  margin-top: 80px;
  
  background: #fff;
  padding:20px 0px 50px 0px;
}
.inspection_detail_body {
  width:1220px;
  background: #fff;
  margin: 0px auto;
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
  margin: 0px 0px 0px 210px;
}
.file_download a {
  color: #409eff;
  font-weight: bold;
}
.file_download a:hover {
  color: #67c23a;
}
.file_download a {
  text-decoration: underline;
}
.file_download {
  margin: 10px 0px 10px 210px;
  text-decoration: underline;
}
.title_date {
  text-align: center;
}
.title_date h3 {
  font-size: 18px;
  font-weight: bold;
  margin: 30px 0px 20px 0px;
}
.title_date p {
  font-size: 13px;
  color: #999;
  margin: 0px 0px 10px 0px;
}
.el-button {
  width: 122px;
  height: 34px;
  padding: 0px;
}
.sigun_up {
  text-align: center;
  margin: 20px 0px;
}
.back_btn{
position: fixed;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  letter-spacing: 5px;
  width: 130px;
  height: 38px;
  background: rgb(9, 185, 125, 0.7);
  border-radius: 19px;
  margin: 400px 0px 0px 1160px;
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
    margin: 490px 0px 0px 1160px;
  }
  50% {
    margin: 510px 0px 0px 1160px;
  }
  100% {
    margin: 490px 0px 0px 1160px;
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
.see-detail {
  width: 150px;
  height: 44px;
  font-size: 18px;
  line-height: 44px;
  text-align: center;
  color: #fff;
  background-color: rgb(9, 185, 125, 0.7);
  margin:0px auto;
  border-radius: 3px;
}
.see-detail:hover {
  background-color: rgb(9, 185, 125, 0.5);
}
</style>