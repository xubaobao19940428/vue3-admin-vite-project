import layOut from '@/layout/index.vue'
const Dashboard = [
    {
        path: '/home',
        component: layOut,
        meta: { title: '欢迎页', icon: '&#xe61d;', key: 'MENU_HOME' },
        children: [{
            path: 'dashboard',
            name: 'dashboard',
            component: () =>
                import('@/pages/dashboard/index.vue'),
            meta: {
                keepAlive: false,
                key: 'MENU_HOME_DASHBOARD',
                title: '欢迎页',
                icon: '',
            },
        },
        ]
    }
]
export default Dashboard