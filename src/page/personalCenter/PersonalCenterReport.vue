<template>
  <div id="PersonalCenterReport">
      <el-dialog title="2019年第2季度汇报" :visible.sync="report" width="800px" id="report">
        <div class="report-con">
        <p>汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案</p>
        <p>汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案</p>
        <p>汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案</p>
        <p>汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案</p>
        <p>汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案</p>
        <p>汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案</p>
        <p>汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案</p>
        <p>汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案</p>
        <p>汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案</p>
        <p>汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案</p>
        <p>汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案</p>
        <p>汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案汇报文案</p>
        </div>

        <div class="operation">
        <el-button type="primary" round @click="contact = true">关闭</el-button>
      </div>
      </el-dialog>

    <div class="crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/personalCenter/PersonalCenterAllOrder' }">客户中心</el-breadcrumb-item>
        <el-breadcrumb-item>统计汇报</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="show-body">
      <div id="echarts">
      </div>
      
    </div>
    <div class="list-body">
        <div class="report-body"> 
            <div class="report-title" @click="report = true">
                

           
                <span>2019年第2季度汇报</span>  
                <el-badge value="new" :hidden=false class="item">
                </el-badge>
            </div>
            <div class="report-date">
                <span>2019-07-07</span>
            </div>
        </div>

        <div class="report-body"> 
            <div class="report-title" @click="report = true">
                <span>2019年第1季度汇报</span>  
            </div>
            <div class="report-date">
                <span>2019-04-07</span>
            </div>
        </div>

        <div class="report-body"> 
            <div class="report-title" @click="report = true">
                <span>2018年年度汇报</span>  
            </div>
            <div class="report-date">
                <span>2019-07-07</span>
            </div>
        </div>

        <div class="report-body"> 
            <div class="report-title" @click="report = true">
                <span>2019年第2季度汇报</span>  
            </div>
            <div class="report-date">
                <span>2019-07-07</span>
            </div>
        </div>

        <div class="report-body"> 
            <div class="report-title" @click="report = true">
                <span>2019年第2季度汇报</span>  
            </div>
            <div class="report-date">
                <span>2019-07-07</span>
            </div>
        </div>

        
    </div>

    <div class="page">
    <el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "PersonalCenterReport",
  data() {
    return {
      report: false
    };
  },
   mounted() {
    var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/pie');
require('echarts/lib/chart/line');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echarts"));
    // 绘制图表
    myChart.setOption({
      title: {
        // text: "ECharts 入门示例"
      },
      tooltip: {},
      // xAxis: {
      //   data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      // },
      // yAxis: {},
      series: [
        {
          // name: "销量",
          type: "pie",
          data: [{name: '历史考试通过人数', value: 1000},
                    {name: '历史未通过人数', value: 50}]
                  
        }
      ]
    });

  },
  methods: {}
};
</script>

<style scoped>
#PersonalCenterReport {
  width: 730px;

  box-shadow: 0 0 2px #c7c5c5;
  background: #fffffd;
  border: 1px solid #e7e7e7;
  margin: 0px 0px 0px 20px;
  padding: 0px 0px 20px 0px;
}
.crumb {
  padding: 10px 0px 10px 0px;
  font-size: 20px;
  text-align: left;
  margin: 20px;
  border-left: 2px solid #409eff;
  line-height: 40px;
  padding-left: 15px;
  background: #e4e7ed;
}
.el-breadcrumb {
  background: #e4e7ed;
}
.report-body {
  border-bottom: 1px dashed #e7e7e7;
  margin:40px;
}
.report-title {
    margin:-30px 0px 0px 0px;
    float:left;
}
.report-date {
    margin:-30px 0px 0px 0px;
    float:right;
    color: #999;
    font-size: 13px;
}
.report-title:hover {
    color: #409EFF;
    cursor:pointer;
}
.list-body {
    margin:60px 0px 0px 0px;
}
#report {
  text-align: center;
}
.report-con {
    padding: 0px  40px;
}
#report p {
    text-align: left  
}
.operation {
    margin:20px 0px 0px 0px;
}
.page {
    text-align: center;
} 
#echarts {
  height: 280px;
}

</style>


