<template>
  <div id="test">
    <el-form ref="form" :model="form" label-width="80px">
    <ol>
                
                <div class="div-zone">
                  <el-col :span="12" id="divZone1">
                    <li class="forms" v-for="(todo, index) in todos" :key="index">
                      <div :id="index">
                        <el-form-item label="培训地点" prop="region" id="education">
                          <el-select  placeholder="请选择学历">
                            <el-option label="地点1" value="shanghai"></el-option>
                            <el-option label="地点2" value="beijing"></el-option>
                          </el-select>
                        </el-form-item>

                        <el-form-item label="课程选择" prop="region" >
                          <el-select  placeholder="请选择学历">
                            <el-option label="课程1" value="shanghai"></el-option>
                            <el-option label="课程2" value="beijing"></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item label="套餐选择" prop="region" >
                          <el-select  placeholder="请选择学历">
                            <el-option label="套餐1" value="shanghai"></el-option>
                            <el-option label="套餐2" value="beijing"></el-option>
                          </el-select>
                        </el-form-item>
                      </div>

                      <div class="div-upload">
                        <el-form-item>
                          <el-upload
                            class="upload-demo"
                            drag
                            action="https://jsonplaceholder.typicode.com/posts/"
                            multiple
                          >
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">
                              将文件拖到此处，或
                              <em>点击上传</em>
                            </div>
                            <div class="el-upload__tip" slot="tip">请按照批量上传模板要求上传，文件大小不得超过20M</div>
                          </el-upload>
                          <div class="div-delete">
                            <el-button type="primary" v-on:click="remove(index)" class="div-delete">删除</el-button>
                          </div>
                        </el-form-item>
                      </div>
                    </li>
                    <el-button type="primary" @click="addNew()">添加</el-button>
                  </el-col>
                </div>   
              </ol>
              
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {   
      todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],

    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    addNew() {

    },
    remove(index) {
      this.todos.splice(index,1 )
    }
  },
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
#map {
  height: 400px;
}
</style>


