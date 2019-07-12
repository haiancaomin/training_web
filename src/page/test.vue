<template>
  <div id="test_vue">
   <p>ssssssss</p>
   <p>ssssssss</p>
   <p>ssssssss</p>
   <p>ssssssss</p>
   <p>ssssssss</p>
   <p>ssssssss</p>
   <el-button type="primary" @click="pay()">支付</el-button>
   <div class="testtest" v-html="htmls"></div>
  
  </div>
</template>

<script>

export default {
  data() {
    return {
      htmls:""
    };
  },

  mounted() {
    
  },
  methods: {
    pay() {
        this.$ajax({
        method: "get",
        url: `${this.baseURL}/zjsxpt/course_doPost.do?WIDout_trade_no=1231&WIDtotal_amount=0.01&WIDsubject=测试1&WIDbody=`
      })
        .then(res => {
          const div = document.createElement('div'); // 创建div
                            div.innerHTML = res.data; // 将返回的form 放入div
                            document.body.appendChild(div);
                            document.forms[0].submit();
        })
        .catch(function(err) {
         
        });
    }
  }
};
</script>

<style scoped>
.testtest {
  height:200px;
  width:100%;
}
</style>
