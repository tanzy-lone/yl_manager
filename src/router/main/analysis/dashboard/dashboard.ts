const dashboard = () => import('@/views/main/analysis/dashboard/dashboard.vue')
export default {
	path: '/main/analysis/dashboard',
	name: 'dashboard',
	component: dashboard,
	children: [],
	meta: {
		title: '核心技术'
	}
}
