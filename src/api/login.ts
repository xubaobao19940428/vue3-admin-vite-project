import request from './request'
interface loginParams {
    username: string
    password: string
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