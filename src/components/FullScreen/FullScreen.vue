<template>
    <div>
        <i class="iconfont screenfull-svg" :class="[isFullscreen ? 'icon-tuichuquanping' : 'icon-quanping']" @click="click"></i>
    </div>
</template>

<script lang="ts" setup name="FullScreen">
import { onMounted, ref, onBeforeMount, computed } from 'vue'
import { useSystemStore } from '@/store/system'
import { mapState } from 'pinia'
import screenfull from 'screenfull'
import { ElMessage } from 'element-plus'
const systemStore = useSystemStore()
const click = () => {
    if (!screenfull.isEnabled) {
        ElMessage({
            message: '您的浏览器不支持全屏',
            type: 'warning',
        })
        return false
    }
    screenfull.toggle()
}

const isFullscreen = computed(() => systemStore.isFullscreen)
/**
 * @description 全屏
 */
const change = () => {
    systemStore.changeFullScreen(screenfull.isFullscreen)
}
/**
 * @description 全屏初始化
 */
const init = () => {
    if (screenfull.isEnabled) {
        screenfull.on('change', change)
    }
}
/**
 * @description 全屏销毁
 */
const destroy = () => {
    if (screenfull.isEnabled) {
        screenfull.off('change', change)
    }
}
onMounted(() => {
    init()
})
onBeforeMount(() => {
    destroy()
})
</script>

<style scoped>
.screenfull-svg {
    cursor: pointer;
    font-size: 25px;
    margin: 0 20px;
}
</style>
