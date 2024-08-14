import layOut from '@/layout/index.vue'
const VueFlow = [
    {
        path: '/vueFlow',
        component: layOut,
        meta: { title: 'Flow流程图', icon: '&#xe628;', key: 'MENU_FLOW' },
        children: [{
            path: 'index',
            name: 'index',
            component: () =>
                import('@/pages/vueFlow/vueFlow.vue'),
            meta: {
                keepAlive: false,
                key: 'MENU_VUE_FLOW',
                title: '流程图',
                icon: '',
            },
        },
        ]
    }
]
export default VueFlow