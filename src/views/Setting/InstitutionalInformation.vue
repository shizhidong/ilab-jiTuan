<template>
	<el-form ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">
		<p>请完善机构信息，以便iLab为您提供个性化的服务</p>
		<el-form-item label="集团代码">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
    <el-form-item label="单位名称">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
    <el-form-item label="联系电话">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
		<el-form-item label="地址">
			<el-select v-model="form.region" placeholder="请选择活动区域">
				<el-option label="区域一" value="shanghai"></el-option>
				<el-option label="区域二" value="beijing"></el-option>
			</el-select>
		</el-form-item>
    <el-form-item label="机构所属">
			<el-select v-model="form.region" placeholder="请选择活动区域">
				<el-option label="区域一" value="shanghai"></el-option>
				<el-option label="区域二" value="beijing"></el-option>
			</el-select>
		</el-form-item>
    <el-form-item label="网址">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
		
		<el-form-item>
			<el-button type="primary">修改</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				}
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			}
		}
	}

</script>