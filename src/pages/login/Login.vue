<template>
    <div class="login-container">
        <div className="login-box">
            <el-switch v-model="theme" class="theme-change" width="60" inline-prompt active-value="dark" inactive-value="light" active-text="🌞" inactive-text="🌛" @change="changeTheme" />
            <div className="login-left">
                <img src="@/assets/images/login_left.png" alt="login" />
            </div>
            <div className="login-form">
                <div className="login-logo">
                    <img className="login-icon" src="@/assets/logo.png" alt="logo" />
                    <span className="logo-text">Vue-Vite-Admin</span>
                </div>
                <el-form autoComplete="on" :model="loginFormData" ref="loginForm" label-position="left" label-width="0px" class="card-box">
                    <el-form-item prop="username" style="border: 1px solid #ccc; padding: 0 10px; border-radius: 5px">
                        <i class="iconfont">&#xe618;</i>
                        <el-input name="username" type="text" v-model="loginFormData.username" autoComplete="on" placeholder="账号" />
                    </el-form-item>
                    <el-form-item prop="password" style="border: 1px solid #ccc; padding: 0 10px; border-radius: 5px">
                        <i class="iconfont">&#xe658;</i>
                        <el-input @keyup.enter.native="handleLogin" v-model="loginFormData.password" placeholder="密码" type="password"> </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" style="width: 100%; height: 44px" :loading="loading" @click.native.prevent="handleLogin"> 登录 </el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useUserStore } from '@/store/user'
import { useSystemStore } from '@/store/system'
import { loginAdmin } from '@/api/login'
import { ElMessage } from 'element-plus'
const loading = ref(false)
const loginFormData = reactive({
    username: '',
    password: '',
})
const userStore = useUserStore()
const systemStore = useSystemStore()

const theme = computed(() => systemStore.theme)
const updateUserInfo = (userInfo) => {
    userStore.loginIn(userInfo)
}
/**
 * @description 登录
 */
function handleLogin() {
    loginAdmin(loginFormData)
        .then((response: any) => {
            if (response) {
                ElMessage.success(response.message)
                updateUserInfo(response.data)
            }
        })
        .catch((error) => {
            ElMessage.error(error.message)
        })
}
function changeTheme(value:string) {
    systemStore.changeTheme(value)
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #23463e;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 550px;
    height: 100%;
    min-height: 500px;
    background-image: url('@/assets/images/login_bg.svg');
    background-position: 50%;
    background-size: 100% 100%;
    background-size: cover;
    // background-color: $light_gray;
    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px #293444 inset !important;
        -webkit-text-fill-color: #fff !important;
    }
    .el-input {
        // display: inline-block;
        height: 47px;
        flex: 1;
        :deep().el-input__wrapper {
            background-color: transparent;
            box-shadow: none;
        }
        :deep()input {
            border: 0;
            -webkit-appearance: none;
            border-radius: 0;
            padding: 12px 5px 12px 15px;
            height: 100%;
            font-size: 16px;
        }
    }
    .dark {
        position: absolute;
        top: 5%;
        right: 3.2%;
    }

    .login-box {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 96%;
        height: 94%;
        padding: 0 4% 0 20px;
        overflow: hidden;
        border-radius: 10px;

        position: relative;
        .theme-change {
            position: absolute;
            right: 20px;
            top: 0;
        }
        .login-left {
            width: 750px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .login-form {
            padding: 40px 45px 25px;
            border-radius: 10px;
            background-color: transparent !important;
            .login-logo {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 40px;
                .login-icon {
                    width: 100px;
                }

                .logo-text {
                    padding-left: 25px;
                    font-size: 48px;
                    font-weight: bold;
                    white-space: nowrap;
                    background: linear-gradient(270deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8b00ff);
                    background-clip: text;
                    // color: transparent;
                }
            }
        }
    }
    .iconfont {
        font-size: 30px;
    }
}
</style>
