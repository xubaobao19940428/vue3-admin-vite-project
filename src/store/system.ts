
import { defineStore } from 'pinia'

import router from '@/router'
const html = document.documentElement
export const useSystemStore = defineStore({
    id: 'systemStore',
    state: () => ({
        isCollapse: false,
        isFullScreen: false,
        drawer: false,
        theme: localStorage.getItem('theme') || 'light',
    }),
    actions: {
        insertPost(data: boolean): void {
            // 可以做异步
            // await doAjaxRequest(data);
            this.isCollapse = data
        },
        changeFullScreen(data: boolean): void {
            this.isFullScreen = data
        },
        loginOut(): void {
            router.push({
                name: 'login'
            })
        },
        changeDrawer(data: boolean): void {
            this.drawer = data
        },
        changeTheme(data: string): void {
            html.setAttribute('data-theme', data)
            localStorage.setItem('theme', data)
            this.theme = data
        }
    },
})
