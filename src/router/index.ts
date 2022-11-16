import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import voucher from './voucher'
const routes: RouteRecordRaw[] = [
    {
        path:'/',
        redirect:'voucher/voucherDetail'
    },
    ...voucher,
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/pages/login/Login.vue'),
    },
   
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
