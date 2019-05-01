<template>
  <section ilab-SharedLibrary-SharedLibrary>
    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true" :model="filters">
        <el-form-item>
          <label>产品分类：</label>
          <el-select v-model="value1" placeholder="名称，Email,电话">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value1">
              </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <label>供应商：</label>
          <el-select v-model="value1" placeholder="名称，Email,电话">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value1">
              </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <label>品牌：</label>
          <el-select v-model="value1" placeholder="名称，Email,电话">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value1">
              </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <label>存放地：</label>
          <el-select v-model="value1" placeholder="名称，Email,电话">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value1">
              </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="getUsers">查询1</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <!--列表-->


    

   
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
      jobList:[],
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

      editLoading: false,
     
      
      addLoading: false,
      lingFormVisible: false,//产品领用界面是否显示
      editFormVisible: false,//修改界面是否显示
      addFormVisible: false,//详情界面是否显示
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
      //修改界面数据
				editForm: {
					id: 0,
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
        },
      editFormRules: {
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

    //显示领用界面
			lingEdit: function (index, row) {
				this.lingFormVisible = true;
				this.editForm = Object.assign({}, row);
			},
    //显示修改界面
			handleEdit: function (index, row) {
				this.editFormVisible = true;
				this.editForm = Object.assign({}, row);
			},
      
    //新增
			addSubmit: function () {
				this.$refs.addForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.addLoading = true;
							//NProgress.start();
							let para = Object.assign({}, this.addForm);
							para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
							addUser(para).then((res) => {
								this.addLoading = false;
								//NProgress.done();
								this.$message({
									message: '提交成功',
									type: 'success'
								});
								this.$refs['addForm'].resetFields();
								this.addFormVisible = false;
								this.getUsers();
							});
						});
					}
				});
			},
   
  },
  mounted() {
    this.getUsers();
    this.onLoad();
  }
};
</script>

<style lang="scss">
@import "../../assets/style/SharedLibrary/SharedLibrary.scss";
</style>