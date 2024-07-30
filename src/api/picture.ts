import request from './request'
//登录
export function pictureGet() {

    return request({
        url: 'picture/getAll',
        method: 'get',

    });
}