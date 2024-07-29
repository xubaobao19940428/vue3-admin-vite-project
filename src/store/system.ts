
import { defineStore } from 'pinia'

import router from '@/router'

export const useSystemState = defineStore({
    id: 'systemState',
    state: () => ({
        isCollapse: false,
        isFullScreen: false,
    }),
    actions: {
        insertPost(data: boolean):void {
            // 可以做异步
            // await doAjaxRequest(data);
            this.isCollapse = data
        },
        changeFullScreen(data: boolean):void {
            this.isFullScreen = data
        },
        loginOut(): void {
            router.push({
                name: 'login'
            })
        }
    },
})
