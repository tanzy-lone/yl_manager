<template>
	<div>
		<el-row :gutter="2">
			<el-col :md="12" class="card">
				<CountTo :endVal="999" />
			</el-col>
			<el-col :md="12" class="card">
				<CountTo :cutting="true" :endVal="1000000" />
			</el-col>
			<el-col :md="12" class="card">
				<CountTo prefix="￥" :endVal="999" />
			</el-col>
			<el-col :md="12" class="card">
				<CountTo :duration="4000" :endVal="999" />
			</el-col>
		</el-row>
	</div>
</template>
<script lang="ts" setup>
import CountTo from '@/components/countTo/countTo.vue'
</script>

<style lang="less" scoped>
.card {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 200px;
	background: #fff;
	box-shadow: 0 0 3px #ccc;
}
</style>
