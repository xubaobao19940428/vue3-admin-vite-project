import { createRouter, createWebHashHistory } from 'vue-router'

import { RouterObject } from './interface/index'

// * 导入所有router
const metaRouters = import.meta.globEager("./modules/*.ts");

// * 处理路由
export const routerArray: RouterObject[] = [];
Object.keys(metaRouters).forEach(item => {
    Object.keys(metaRouters[item]).forEach((key: any) => {
        routerArray.push(...metaRouters[item][key]);
    });
});
console.log(routerArray)
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
    ...routerArray,
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

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
