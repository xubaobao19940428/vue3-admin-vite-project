import layOut from '@/layout/index.vue'
const Component = [
    {
        path: '/component',
        component: layOut,
        meta: { title: '组件', icon: '&#xe637;', key: 'MENU_TABLE' },
        children: [{
            path: 'index',
            name: 'table',
            component: () =>
                import('@/pages/table/index.vue'),
            meta: {
                keepAlive: false,
                key: 'MENU_TABLE_INDEX',
                title: '表格',
                icon: '',
            },
        },
        {
            path: 'wangEditor',
            name: 'wangEditor',
            component: () =>
                import('@/pages/table/wangEditor.vue'),
            meta: {
                keepAlive: false,
                key: 'MENU_WANGEDITOR',
                title: 'wangEditor富文本',
                icon: '',
            },
        },
        ]
    }
]
export default Component