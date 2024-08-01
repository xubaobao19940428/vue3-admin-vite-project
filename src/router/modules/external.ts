import layOut from '@/layout/index.vue'
const Table = [
    {
        path: '/table',
        component: layOut,
        meta: { title: '外部链接', icon: '&#xe60e;', key: 'MENU_EXTERNAL' },
        children: [{
            path: 'https://github.com/xubaobao19940428/vue3-admin-vite-project',
            name: 'github',
            isExternal: true,
            meta: {
                keepAlive: false,
                key: 'MENU_EXTERNAL_GITHUB',
                title: 'GitHub',
                icon: '',
            },
        },
        {
            path: 'https://www.baidu.com',
            name: 'externalLinks',
            isExternal: true,
            meta: {
                keepAlive: false,
                key: 'MENU_EXTERNAL_BAIDU',
                title: '百度',
                icon: '',
            },
        },
        ]
    }
]
export default Table