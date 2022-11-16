import { defineStore } from 'pinia'

export const systemState = defineStore({
    id: 'systemState',
    state: () => ({
        isCollapse: false,
    }),
    actions: {
        insertPost(data: boolean) {
            // 可以做异步
            // await doAjaxRequest(data);
            this.isCollapse = data
        },
    },
})
