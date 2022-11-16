<template>
    <div class="login-container">
        <el-form autoComplete="on" :model="loginFormData" ref="loginForm" label-position="left" label-width="0px" class="card-box login-form">
            <h3 class="title">章鱼帝后台</h3>
            <el-form-item prop="mobile">
                <i class="iconfont">&#xe612;</i>
                <el-input name="username" type="text" onkeyup="value=value.replace(/[^\d]/g,'')" v-model="loginFormData.mobile" autoComplete="on" placeholder="手机号" />
            </el-form-item>
            <el-form-item prop="password">
                <i class="iconfont">&#xe638;</i>
                <el-input @keyup.enter.native="handleLogin" v-model="loginFormData.password" placeholder="密码" type="password"> </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width: 100%; height: 44px" :loading="loading" @click.native.prevent="handleLogin"> 登录 </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/main'
import { ref, reactive } from 'vue'
import { login } from '@/api/login'
const loading = ref(false)
const loginFormData = reactive({
    mobile: '',
    password: '',
    countryAreaCode: '86',
})
const mainStore = useMainStore()
// console.log(mainStore)
const updateName = () => {
    mainStore.$patch({
        name: '名称被修改了,nameLength也随之改变了',
    })
}
function handleLogin() {
    login(loginFormData)
        .then((response) => {
            if (response) {
                console.log(response)
            }
        })
        .catch((error) => {})
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #23463e;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: $bg;

    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px #293444 inset !important;
        -webkit-text-fill-color: #fff !important;
    }
    .el-input {
        display: inline-block;
        height: 47px;
        width: 85%;
        input {
            background: 0;
            border: 0;
            -webkit-appearance: none;
            border-radius: 0;
            padding: 12px 5px 12px 15px;
            color: #fff;
            height: 100%;
        }
    }
    .title {
        font-size: 26px;
        color: $light_gray;
        margin: 0 auto 40px auto;
        text-align: center;
        font-weight: bold;
    }

    .login-form {
        position: absolute;
        left: 0;
        right: 0;
        width: 500px;
        padding: 35px 35px 15px 35px;
        margin: 120px auto;
    }

    .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        color: #454545;

        i {
            color: #fff;
            margin-left: 10px;
        }
        .el-input__wrapper {
            background: transparent;
            width: 100%;
            border: none;
            box-shadow: none;
            input {
                outline: none;
                border: none;
            }
            &.is-focus {
                box-shadow: none;
            }
        }
    }

    .show-pwd {
        display: inline-block;
        position: absolute;
        right: 0;
        top: 0;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
        user-select: none;
        button {
            height: 47px;
        }
    }
}
</style>
