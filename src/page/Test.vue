<template>
  <div id="test">
      <p>sss</p>
  <p>sss</p>
  <p>sss</p>
  <p>sss</p>
  <p>sss</p>
  <p>sss</p>
  <p>sss</p>

  <el-row :gutter="12">
  
 
  
    
    <el-card shadow="hover">
      <div class="test">
        <img
                    src="http://www.axfc.cn/uploads/20190222/8470b0cd14194545b6a04a4768184ef6.jpg"
                    class="full-width"
                  >
        </div>
    </el-card>
    
 
  
</el-row>
  

  
  </div>
</template>

<script>
export default {
  data() {
    return {    
      but4: false
    };
  },
  methods: {
      addNew0() {
        this.but0=false;

        this.form1=true;
        this.but1=true;
      },
      
  },
  mounted: function() {},
  updated: function() {}
};
</script>

<style scoped>
.test {
  height:300px;
  width:100px;
}
.card {
   width:100px;
}
</style>


