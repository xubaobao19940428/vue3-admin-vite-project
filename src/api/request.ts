import router from '@/router'
import { ElMessage } from 'element-plus'
import { param } from '@/utils'
import md5 from 'js-md5'
import axios from 'axios'

const BASE = import.meta.env.VITE_APP_NEW_JSON_API + 'meta/'
const httpService = axios.create({
    timeout: 45000,
})

function getMd5(headers_config: Object, url_config: Object, secret: string) {
    let signData: { [key: string]: any } = {}
    Object.assign(signData, headers_config, url_config)
    const _url_ =
        param(Object.keys(signData).sort().reduce((a: any, v: string) => {
            a[v] = signData[v]
            return a
        }, {})
        ) + `&appsecret=${secret}`

    return md5(_url_)
}

function randomString(code: any) {
    let len = code
    let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789'
    let maxLen = $chars.length
    let pwd = ''
    for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxLen))
    }
    return pwd
}
/**
 * @param {*} method get post
 * @param {*} serverName 服务名称
 * @param {*} interfaceName 接口名称
 * @param {*} data 入参
 * @param {*} $header 额外请求头
 * @param {*} baseUrl 请求地址
 * @param {*} versionCode api版本
 * @param {*} group 用户群组
 */
interface requestParams {
    method?: any
    serverName: string
    methodName: string
    interfaceName: string
    data?: Object
    $header?: any
    baseUrl?: string
    group?: string
}
function request(params: requestParams) {
    let secret = 'tQJWp1pSR1qSCrUh'
    interface headersConfigParams {
        'X-Version-Code': string
        'X-Device-Info': string
        'X-Device-Id': string
        'X-Auth-Token': any
        'X-Timestamp': string | number
        'X-Appkey': string,
        'X-sign'?: string
    }
    const headersConfig: headersConfigParams = {
        'X-Version-Code': localStorage.getItem('versionCode') || (import.meta.env.VITE_APP_NODE_ENV == 'pre' ? '1.0.0.pre' : '1.0.0'),
        'X-Device-Info': randomString(32),
        'X-Device-Id': new DeviceUUID().get(),
        'X-Auth-Token': localStorage.getItem('adminToken') || '',
        'X-Timestamp': new Date().getTime(),
        'X-Appkey': '1009',
    }
    if (!headersConfig['X-Auth-Token']) {
        delete headersConfig['X-Auth-Token']
    }

    const urlConfig = {
        api: params.interfaceName,
        method: params.methodName,
        version: localStorage.getItem('versionCode') ||
            (import.meta.env.VITE_APP_NODE_ENV == 'pre' ? '1.0.0.pre' : '1.0.0'),
        group: params.group || 'memall',
    }
    headersConfig['X-sign'] = getMd5(headersConfig, urlConfig, secret)
    return new Promise((resolve, reject) => {
        httpService({
            baseURL: params.baseUrl ? params.baseUrl : `${BASE}${params.serverName}?${param(urlConfig)}`,
            method: params.method || 'post',
            data: params.data,
            headers: Object.assign(headersConfig, params.$header),
        })
            .then((res) => {
                console.log(params.methodName, res.data)
                if (res.status !== 200) {
                    const err = new Error('服务器异常')
                    throw err
                }
                let result = res.data
                if (
                    result.resultCode.code == '200' ||
                    result.resultCode.code == '201'
                ) {
                    resolve(result)
                } else {
                    if (result.resultCode.code == '401') {
                        if (localStorage.getItem('adminToken')) {
                            ElMessage.warning(
                                `ErrorMsg: ${result.resultCode.message}, ErrorCode: ${result.resultCode.code}`
                            )
                        }
                        localStorage.clear()
                        router.push({
                            name: 'login',
                        })
                    } else {
                        ElMessage.error(
                            `ErrorMsg: ${result.resultCode.message}, ErrorCode: ${result.resultCode.code}`
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