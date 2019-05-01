<template>
  <section ilab-Review-CollarUse-01>
    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true" :model="filters">
        <label>开放</label>
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
        <label>库存为共享库</label>
      </el-form>
    </el-col>
    
    <el-col>开放后该机构的库存可以被集团内其他机构查看并领用，申购</el-col>
    <!--列表-->
    
    
    <el-form :inline="true" class="operating" :model="filters">
        <el-form-item>
          <el-button type="primary" v-on:click="getUsers">保存</el-button>
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
      getPersonInfo().then(res => {
        this.$store.commit("joblistObj",res.data.data.results);
        this.jobList = this.$store.state.jobList;
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