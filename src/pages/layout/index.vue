<!--  -->
<template>
    <div class="layout">
        <div class="layout_left">
            <sideBar :routers="routers"></sideBar>
        </div>
        <div class="layout_right">
            <HeaderNav></HeaderNav>
            <router-view class="layout_view"></router-view>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'pinia'
import { systemState } from '@/store/system'
import sideBar from './components/sideBar.vue'
import router from '@/router/index'
import HeaderNav from './components/header.vue'
export default defineComponent({
    setup() {},
    data() {
        return {}
    },

    components: {
        sideBar,
        HeaderNav
    },

    computed: {
        ...mapState(systemState, ['isCollapse']),
        routers() {
            let newRoute = router.getRoutes().filter((item) => {
                return item.children.length > 0
            })
            return newRoute
        },
    },

    mounted() {
        console.log(this.isCollapse)
    },

    methods: {},
})
</script>
<style lang="scss" scoped>
.layout{
    width: 100%;
    height: 100%;
    display: flex;
    .layout_left {
        height: 100%;
        // min-width:64px;
        // max-width:200px;
    }
    .layout_right {
        flex: 1;
        height: 100%;
        overflow: hidden;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        .layout_view {
            // padding: 10px;
            box-sizing: border-box;
            flex: 1;
        }
    }

}
</style>
