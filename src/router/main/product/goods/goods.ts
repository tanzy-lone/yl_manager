const goods = () => import('@/views/main/product/goods/goods.vue')
export default {
	path: '/main/product/goods',
	name: 'goods',
	component: goods,
	children: [],
	meta: {
		title: '商品信息'
	}
}
