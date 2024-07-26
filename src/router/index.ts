import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: 'voucher/voucherDetail'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/login/login.vue'),
    },
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
