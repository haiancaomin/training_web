<template>
  <div id="HRServiceTypeChoice">
    <div class="logo">
      <img src="../../assets/favicon.png" alt class="logo-picture"><span class="logo-label">智聚人力资源服务</span>
    </div>
    <div class="HRServiceTypeChoice-choice">
      <h1 class="HRServiceTypeChoice-I">我是</h1>
      <router-link to="/HRServiceJobSeekerIndex">
      <el-button type="primary">求职者</el-button>
      </router-link>
      <router-link to="/HRServiceHRIndex">
      <el-button type="success">HR</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  
  name: "HRServiceTypeChoice",
  data() {
    return {
      
    };
  },
  components: {
    
  },
  methods: {
    
  }
};
</script>

<style scoped>
#HRServiceTypeChoice {
  width: 500px;
  height: 300px;
  margin: 150px auto;
  box-shadow: 0 0 2px #c7c5c5;
  background: #ffffff;
  border: 1px solid #e7e7e7;
  padding: 20px 20px 20px 20px;
}
.el-button {
  width: 80px;
  margin: 0px 70px;
}
.HRServiceTypeChoice-choice {
  text-align: center;
}
.logo {
  text-align: center;
  margin: 10px 0px 0px 0px;
}
.logo-label {
  font-size: 28px;
  font-weight: bold;
  
}
.logo-picture {
  height: 40px;
  width: 40px;
  margin: 0px 10px 10px 0px;
}
.HRServiceTypeChoice-I {
  font-weight: bold;
  margin: 80px 0px 20px 0px;
}
</style>


