<!-- 头部 -->
<template>
    <div class="x-admin-header">
        <div class="hread-l">
            <div class="nav_header_fold">
                <el-icon @click="openCollapse(true)" v-if="!isCollapse"><Fold /></el-icon>
                <el-icon @click="openCollapse(false)" v-else><Expand /></el-icon>
            </div>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item v-for="(item, i) in levelList" :to="{ name: item.name }" :key="i">{{ item.meta.title }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="header-r">
            <i class="iconfont icon-shezhi" @click="changeDrawer"></i>
            <FullScreen></FullScreen>
            <el-dropdown class="avatar-container" trigger="click">
                <div class="avatar-wrapper">
                    <img :src="userInfo.avatar || '@/assets/user-header.png'" />
                    <span>{{ userInfo.name || 'xAdmin' }}</span>
                    <i class="iconfont">&#xe630;</i>
                </div>
                <template #dropdown>
                    <el-dropdown-menu class="user-dropdown">
                        <router-link to="">
                            <el-dropdown-item>首页</el-dropdown-item>
                        </router-link>
                        <el-dropdown-item><span @click="logout">退出</span></el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup lang="ts" name="HeaderNav">
import { ref, reactive, computed } from 'vue'

import { useSystemStore } from '@/store/system'
import { useUserStore } from '@/store/user'
import { useRoute } from 'vue-router'
import FullScreen from '@/components/FullScreen/FullScreen.vue'
const systemStore = useSystemStore()
const userStore = useUserStore()

const route = useRoute()

const isCollapse = computed(() => systemStore.isCollapse)
const levelList = computed(() => route.matched)
const userInfo = computed(() => userStore.userInfo)
const openCollapse = (value) => {
    systemStore.insertPost(value)
}
const logout = () => {
    systemStore.loginOut()
}
const changeDrawer = () => {
    systemStore.changeDrawer(true)
}
</script>
<style lang="scss" scoped>
.x-admin-header {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .hread-l {
        display: flex;
        align-items: center;

        .nav_header_fold {
            display: inline-block;
            i {
                font-size: 20px;
                cursor: pointer;
                margin-right: 20px;
            }
        }
        .el-breadcrumb {
            display: inline-block;
        }
    }
    .header-r {
        display: flex;
        align-items: center;
        .iconfont {
            cursor: pointer;
            font-size: 20px;
            transition: all 0.3s;
            &:hover {
                transform: rotate(45deg);
            }
        }
        .avatar-wrapper {
            display: flex;
            align-items: center;
            cursor: pointer;

            img {
                width: 40px;
                margin-right: 10px;
                border-radius: 50%;
            }
        }
        .language-wrapper {
            display: flex;
            align-items: center;
            height: 100%;
            margin-right: 10px;
            cursor: pointer;
            img {
                width: 20px;
                margin-right: 5px;
            }
        }
    }
}
</style>
