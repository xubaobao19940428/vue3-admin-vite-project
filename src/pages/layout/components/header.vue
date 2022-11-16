<!-- 头部 -->
<template>
    <div class="memall_admin_header">
        <div class="hread-l">
            <div class="nav_header_fold">
                <el-icon @click="openCollapse(true)" v-if="!isCollapse"><Fold /></el-icon>
                <el-icon @click="openCollapse(false)" v-else><Expand /></el-icon>
                <!-- <i class="el-icon-s-fold" @click="openCollapse(true)" v-if="!isCollapse"></i>
                <i class="el-icon-s-unfold" @click="openCollapse(false)" v-else></i> -->
            </div>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item v-for="(item, i) in levelList" :to="{ name: item.name }" :key="i">{{ item.meta.title }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="header-r">
            <el-dropdown class="avatar-container" trigger="click">
                <div class="avatar-wrapper">
                    <img src="@/assets/user-header.png" />
                    <span>{{ 'MeiMiao' }}</span>
                    <i class="iconfont">&#xe8ec;</i>
                </div>
                <template #dropdown>
                    <el-dropdown-menu class="user-dropdown">
                        <router-link to="">
                            <el-dropdown-item>首页</el-dropdown-item>
                        </router-link>
                        <!-- <el-dropdown-item>修改密码</el-dropdown-item>
                        <el-dropdown-item>设置</el-dropdown-item> -->
                        <el-dropdown-item><span @click="logout">退出</span></el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import { systemState } from '@/store/system'
import { mapState } from 'pinia'
export default {
    name: 'HeaderNav',
    // setup() {
    //     var systemState = systemState
    //     function openCollapse(value) {
    //         console.log(value)
    //         systemState.insertPost({ 'isCollapse': value })
    //     }
    // },
    data() {
        return {
            userInfo: {
                nickName: '',
                mobile: '',
            },
        }
    },
    watch: {},
    components: {},

    computed: {
        // ...mapState({
        //     isCollapse: state => state.nav.isCollapse,
        //     username: state => state.user.username,
        //     lang: state => state.system.lang,
        // }),
        ...mapState(systemState, ['isCollapse']),
        levelList() {
            return this.$route.matched
        },
        languageList() {
            return this.$store.state.system.languageList.length ? this.$store.state.system.languageList : JSON.parse(localStorage.getItem('languageList'))
        },
    },

    mounted() {},

    methods: {
        openCollapse(value) {
            this._pStores.systemState.insertPost(value)
        },
        logout() {
            this.$store.dispatch('LogOut')
        },
    },
}
</script>
<style lang="scss" scoped>
.memall_admin_header {
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
