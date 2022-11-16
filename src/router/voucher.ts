import layOut from '@/pages/layout/index.vue'
const voucher = [
    {
        path: '/voucher',
        component: layOut,
        meta: { title: '支付凭证', icon: '&#xe602;', key: 'MENU_MONEY' },
        children: [{
            path: 'voucherDetail',
            name: 'voucherDetail',
            component: () =>
                import('@/pages/voucherModule/index.vue'),
            meta: {
                keepAlive: false,
                key: 'MENU_PRODUCT_MONEY',
                title: '支付凭证',
                icon: '',
            },
        },
        ]
    }
]
export default voucher