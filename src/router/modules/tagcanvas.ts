import layOut from '@/layout/index.vue'
const Tagcanvas = [
    {
        path: '/tagcanvas',
        component: layOut,
        meta: { title: 'Tagcanvas', icon: '&#xe608;', key: 'MENU_TAGCANVAS' },
        children: [{
            path: 'index',
            name: 'index',
            component: () =>
                import('@/pages/tagcanvas/tagcanvas.vue'),
            meta: {
                keepAlive: false,
                key: 'MENU_TAGCANVAS_INDEX',
                title: '词云',
                icon: '',
            },
        },
        ]
    }
]
export default Tagcanvas