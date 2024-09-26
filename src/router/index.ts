import { createRouter, createWebHashHistory } from 'vue-router'

import { RouterObject } from './interface/index'

import NProgress from '@/utils/nprogress'
// * 导入所有router
const metaRouters = import.meta.globEager("./modules/*.ts");
import Dashboard from './modules/dashboard'
import Tagcanvas from './modules/tagcanvas';
import VueFlow from './modules/vueFlow';
import Component from './modules/component';
import Home from './modules/home';
import External from './modules/external'
// * 处理路由
export const routerArray: RouterObject[] = [];
Object.keys(metaRouters).forEach(item => {
    Object.keys(metaRouters[item]).forEach((key: any) => {
        routerArray.push(...metaRouters[item][key]);
    });
});

const routes: RouterObject[] = [
    {
        path: '/',
        redirect: 'home/dashboard'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/login/login.vue'),
    },
    ...Dashboard,
    ...Home,
    ...Tagcanvas,
    ...VueFlow,
    ...Component,
    ...External,
    // ...routerArray,
    {
        path: '/404',
        name: '404',
        component: () => import('@/pages/404.vue'),
        meta: {
            title: '404',
            noPermission: true,
        },
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
    },
]
console.log(routes)
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
router.beforeEach((to, _from, next) => {
	NProgress.start()
	next()
})

router.afterEach((to, _from) => {
	NProgress.done()
})
export default router
