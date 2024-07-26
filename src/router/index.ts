import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import voucher from './voucher'
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: 'voucher/voucherDetail'
    },
    // ...voucher,
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/pages/login/Login.vue'),
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
        hidden: true,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
