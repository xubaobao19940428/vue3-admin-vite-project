import router from '@/router'
import { ElMessage } from 'element-plus'
import axios from 'axios'

const BASE = import.meta.env.VITE_APP_API + 'api/'
const httpService = axios.create({
    timeout: 45000,
})
/**
 * @param {*} method get post
 * @param {*} url 服务名称
 * @param {*} interfaceName 接口名称
 * @param {*} data 入参
 * @param {*} $header 额外请求头
 * @param {*} baseUrl 请求地址
 * @param {*} versionCode api版本
 * @param {*} group 用户群组
 */
interface requestParams {
    method?: any
    url: string
    data?: Object,
    params?: Object,
    $header?: any
    baseUrl?: string
    group?: string
}
interface responseParams {
    code: number
    message: string
    data: any
}
function request(config: requestParams) {
    let headersConfig = {}
    return new Promise((resolve, reject) => {
        httpService({
            baseURL: config.baseUrl ? config.baseUrl : `${BASE}${config.url}`,
            method: config.method || 'post',
            data: config.data,
            params: config.params,
            headers: Object.assign(headersConfig, config.$header),
        })
            .then((res) => {
                console.log(res.data)
                if (res.status !== 200) {
                    const err = new Error('服务器异常')
                    throw err
                }
                // 响应数据
                let result: responseParams = res.data
                if (
                    result.code == 200 ||
                    result.code == 201
                ) {
                    resolve(result)
                } else {
                    if (result.code == 401) {
                        localStorage.clear()
                        router.push({
                            name: 'login',
                        })
                    } else {
                        ElMessage.error(
                            `ErrorMsg: ${result.message}, ErrorCode: ${result.code}`
                        )
                        reject(result)
                    }
                }
            })
            .catch((err) => {
                reject(err)
            })
    })
}

export default request