<template>
  <section ilab-Review-CollarUse-01>
    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true" :model="filters">
        <label>筛选：</label>
        <el-form-item>
          <el-select v-model="value1" placeholder="请选择">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value1">
              </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="value2" placeholder="请选择">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value2">
              </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input v-model="filters.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="getUsers">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <!--列表-->
    <el-table
      :data="jobList"
      highlight-current-row
      v-loading="listLoading"
      style="width: 100%;"
    >
      <el-table-column type="selection" width="40"></el-table-column>
      <el-table-column prop="name" label="产品名" width="100"></el-table-column>
      <el-table-column prop="Brand" label="品牌" width="100"></el-table-column>
      <el-table-column prop="ItemNumber" label="货号" width="80"></el-table-column>
      <el-table-column prop="CAS" label="CAS" width="80"></el-table-column>
      <el-table-column prop="specification" label="规格" width="100"></el-table-column>
      <el-table-column prop="inStock" label="库存数量" min-width="100"></el-table-column>
      <el-table-column prop="Use" label="领用数量" min-width="100"></el-table-column>
      <el-table-column prop="mechanism" label="领用机构" min-width="180"></el-table-column>
      <el-table-column prop="Employer" label="领用人" min-width="100"></el-table-column>
      <el-table-column prop="data" label="领用日期" min-width="180"></el-table-column>
      <el-table-column prop="Remarks" label="备注" min-width="180"></el-table-column>
      <el-table-column prop="status" label="状态" min-width="90"></el-table-column>
    </el-table>

    
    <el-form :inline="true" class="operating" :model="filters">
        <el-form-item>
          <el-button type="primary" v-on:click="getUsers">同意</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="getUsers">拒绝</el-button>
        </el-form-item>
    </el-form>

   
  </section>
</template>

<script>
import store from "@/vuex/store.js";
import { getPersonInfo } from "@/api/index";
import util from "../../common/js/util";
//import NProgress from 'nprogress'
import {
  getUserListPage,
  removeUser,
  batchRemoveUser,
  editUser,
  addUser
} from "../../api/api";

export default {
  data() {
    return {
      filters: {
        name: ""
      },

      users: [],
      total: 0,
      page: 1,
      listLoading: false,
      jobList: [],
      sels: [], //列表选中列

      options1: [{
          value: '选项1',
          label: '全部子结构'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value1: '',
        options2: [{
          value: '选项1',
          label: '待审核'
        }, {
          value: '选项2',
          label: '已审核'
        }],
        value2: '',

      editLoading: false,
     
   
      
  
    };
  },
  store,
  methods: {
    //表格数据
    onLoad() {
      // 调用api接口，并且提供了两个参数
      let data={
        user_name:"15800820556",
	      password:"123456"
      }
      getPersonInfo(data).then(res => {
        console.log("32423423423",res)
         localStorage.setItem("token",res.headers['authentication-info'])//保存token信息
        // 获取数据成功后的其他操作
      });
    },


    //获取用户列表
    getUsers() {
      let para = {
        // page: this.page,
        name: this.filters.name
      };
      this.listLoading = true;
      //NProgress.start();
      getUserListPage(para).then(res => {
        // this.total = res.data.total;
        this.users = res.data.users;
        this.listLoading = false;
        //NProgress.done();
      });
    },


   
  },
  mounted() {
    this.getUsers();
    this.onLoad();
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/Review/CollarUse.scss";
</style>