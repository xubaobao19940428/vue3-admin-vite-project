<template>
    <div class="global-setting">
        <el-drawer v-model="drawer" title="系统设置" :before-close="handleClose" :close-on-click-modal="false">
            <template #title>
                <div class="title-left">
                    <img src="@/assets/logo.png" alt="" />
                    <span>系统设置</span>
                </div>
            </template>
            <!-- <div class="global-setting-body">
                <div class="global-setting-body-item">
                    <span>灰白模式：</span>
                    <el-switch></el-switch>
                </div>
            </div> -->
        </el-drawer>
    </div>
</template>

<script setup lang="ts" name="SystemSetting">
import { computed, onMounted, onUnmounted } from 'vue'
import { useSystemStore } from '@/store/system'
const systemStore = useSystemStore()
const drawer = computed(() => systemStore.drawer)

const showSetting = () => {
    systemStore.changeDrawer(true)
}
const handleClose = () => {
    systemStore.changeDrawer(false)
}

onMounted(() => {})
onUnmounted(() => {})
</script>

<style lang="scss" scoped>
.global-setting {
    .iconfont {
        cursor: pointer;
        font-size: 24px;
        margin: 0 10px;
    }

    :deep(.el-drawer) {
        --font-color: #fff;
        width: 500px !important;

        .el-drawer__header {
            padding: 8px 12px;
            margin-bottom: 0;
            border-bottom: 1px solid #ccc;
            .title-left {
                display: flex;
                align-items: center;
                font-size: 16px;
                font-weight: 500;

                img {
                    width: 40px;
                    margin-right: 10px;
                }
            }
        }
    }
}
</style>
