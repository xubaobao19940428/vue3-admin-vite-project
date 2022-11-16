import request from './request'
interface loginParams{
    mobile:string
    password:string
    countryAreaCode:string
}
//登录
export function login(data: loginParams) {
    return request({
        serverName: 'metashop',
        interfaceName: 'com.metashop.user.server.api.UserService',
        methodName: 'login',
        data: data,
        // method: '',
        // group: ''
    });
}