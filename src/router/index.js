import Vue from 'vue';
import Router from 'vue-router';
import App from '../App';
import Home from '@/components/page/home/home';
import TakeAway from '@/components/page/home/takeAway/index';
import SearchList from '@/components/page/home/list/index';
import OrderList from '@/components/page/home/order/index';
import UserInfo from '@/components/page/home/user/index';
import Example from '@/components/example';
Vue.use(Router);

export default new Router({
	mode: 'history',
	linkActiveClass: 'link-active',
	// scrollBehavior (to, from, savedPosition) {
	// 	if (savedPosition) {
	// 		console.log(savedPosition)
	// 		return savedPosition
	// 	} else {
	// 		return { x: 0, y: 0 }
	// 	}
    // },
	routes: [
		{
			path: '/',
			component: Home,
			children: [
				{
					path: '/',
					name: 'TakeAway',
					component: TakeAway
				},
				{	
					path: 'list',
					name: 'SearchList',
					component: SearchList
				},
				{
					path: 'order',
					name: 'OrderList',
					component: OrderList
				},
				{
					path: 'user',
					name: 'UserInfo',
					component: UserInfo
				},
				
			]
		},
		{
			path: '/example',
			name: 'Example',
			component: Example
		}
	]
})
