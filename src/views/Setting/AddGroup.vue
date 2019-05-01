<template>
	<el-form ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">
		<p>请完善机构信息，以便iLab为您提供个性化的服务</p>
		<el-form-item label="集团名">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
    <el-form-item label="所属">
			<el-select v-model="form.region" placeholder="请选择活动区域">
				<el-option label="区域一" value="shanghai"></el-option>
				<el-option label="区域二" value="beijing"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="地址">
			<el-select v-model="form.region" placeholder="请选择活动区域">
				<el-option label="区域一" value="shanghai"></el-option>
				<el-option label="区域二" value="beijing"></el-option>
			</el-select>
		</el-form-item>
        <el-form-item label="网址">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
        <el-form-item label="管理员姓名">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
        <el-form-item label="管理员邮箱">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
        <el-form-item label="管理员电话">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
        <el-form-item label="子机构数">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
    <el-form-item label="有效期">
			<el-select v-model="form.region" placeholder="请选择活动区域">
				<el-option label="区域一" value="shanghai"></el-option>
				<el-option label="区域二" value="beijing"></el-option>
			</el-select>
		</el-form-item>
		
		<el-form-item>
			<el-button type="primary">保存</el-button>
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