import { defineStore } from 'pinia'
import router from '@/router'
export const useUserStore = defineStore({
    id: 'main',
    state: () => ({
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo') as string) : {
            username: '',
            name: '',
            avatar: ''
        },
        token: localStorage.getItem('token') || '',
    }),
    getters: {
        // nameLength: (state) => state.name.length,
    },
    actions: {
        async loginIn(data) {
            this.userInfo = data
            localStorage.setItem('userInfo', JSON.stringify(data))
            localStorage.setItem('token', data.token)
            router.push({
                path: '/'
            })
        },
    },
})
