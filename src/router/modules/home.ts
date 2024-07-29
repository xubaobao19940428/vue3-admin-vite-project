import layOut from '@/layout/index.vue'
const Home = [
    {
        path: '/index',
        component: layOut,
        meta: { title: '首页', icon: '&#xe62a;', key: 'MENU_INDEX' },
        children: [{
            path: 'home',
            name: 'Home',
            component: () =>
                import('@/pages/home/home.vue'),
            meta: {
                keepAlive: false,
                key: 'MENU_INDEX_HOME',
                title: '欢迎页',
                icon: '',
            },
        },
        ]
    }
]
export default Home