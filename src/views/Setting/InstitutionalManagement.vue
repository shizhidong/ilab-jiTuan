<template>
  <section ilab-Setting-InstitutionalManagement>
    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true" :model="filters">
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
          <el-button type="primary" v-on:click="getUsers">查询</el-button>
        </el-form-item>
        <el-form-item class="Inst-right">
          <label class="text1">共可管理10个子机构</label>
          <label class="text2">当前已管理6个子机构</label>
					<el-button type="primary" @click="handleAdd">增加子机构数</el-button>
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
      <el-table-column prop="name" label="子机构名称" width="130"></el-table-column>
      <el-table-column prop="Brand" label="别名" width="100"></el-table-column>
      <el-table-column prop="ItemNumber" label="iLab机构编号" width="150"></el-table-column>
      <el-table-column prop="CAS" label="加入时间" width="120"></el-table-column>
      <el-table-column prop="specification" label="管理员账号" width="130"></el-table-column>
      <el-table-column prop="inStock" label="状态" min-width="100"></el-table-column>
      <el-table-column label="操作" width="150">
				<template slot-scope="scope">
					<el-button size="small" @click="handleEdit(scope.$index, scope.row)">同意</el-button>
					<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">拒绝</el-button>
				</template>
			</el-table-column>
    </el-table>

    <!--新增界面-->
		<el-dialog title="新增" v-model="addFormVisible" :close-on-click-modal="false">
			<el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
				<el-form-item label="邮箱账号" prop="name">
					<el-input v-model="addForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="姓名">
					<el-input v-model="addForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="电话">
					<el-input v-model="addForm.name" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="addFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
			</div>
		</el-dialog>


   
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

      addFormVisible: false,//新增界面是否显示
      addLoading: false,

      //新增界面数据
				addForm: {
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
        },
      addFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
			},
     
   
      
    
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

    //显示新增界面
			handleAdd: function () {
				this.addFormVisible = true;
				this.addForm = {
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
				};
      },

   
  },
  mounted() {
    this.getUsers();
    this.onLoad();
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/Setting/InstitutionalManagement.scss";
</style>