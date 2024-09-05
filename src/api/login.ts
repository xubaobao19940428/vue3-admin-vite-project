import request from './request'
interface loginParams {
    username: string
    password: string
}
interface sendCodeParams {
    phonenumber: string
}
//获取验证码
interface loginWithCodeParams extends sendCodeParams {
    code: string
}
//登录
export function loginAdmin(data: loginParams) {
    console.log(data)
    return request({
        url: '/login',
        method: 'post',
        data: data,
    });
}
// 发送验证吗
export function sendCodeFunc(data: sendCodeParams) {
    console.log(data)
    return request({
        url: '/sendCode',
        method: 'post',
        data: data,
    });
}
//短信验证吗登录

export function loginWithCode(data: loginWithCodeParams) {
    console.log(data)
    return request({
        url: '/loginWithCode',
        method: 'post',
        data: data,
        
    });
}
