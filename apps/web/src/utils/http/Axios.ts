import type { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import type { RequestConfig, ResponseError, Result } from '#/http'
import { ContentTypeEnum, HttpMethodEnum } from '@/enums/httpEnum'
import { TokenTypeEnum } from '@/enums/authEnum'
import { useCookie } from '@h/web/useCookie'
import { AxiosCanceler } from '@/utils/http/axiosCancel'
import { useUserStore } from '@/store/modules/user'
import checkStatus from '@/utils/http/checkStatus'
import appConfig from '@/config'
import {
  generateBaseToken,
  transformRequest,
  transformResponse
} from '@/utils/http/helper'
import axios from 'axios'
import qs from 'qs'

/**
 *  @description: axios 实例化封装
 */
export class CustomAxios {
  private axiosInstance: AxiosInstance
  // 初始化 axios实例默认配置时，无需设置 url
  constructor(private readonly options?: Omit<RequestConfig, 'url'>) {
    this.axiosInstance = axios.create(options)
    // 设置拦截器
    this.setupInterceptors()
  }

  private createAxios(config: RequestConfig): void {
    this.axiosInstance = axios.create(config)
  }

  /**
   * @description: 获取实例
   * @returns axiosInstance
   */
  getAxios(): AxiosInstance {
    return this.axiosInstance
  }

  /**
   * @description: 配置 axios
   * @param {RequestConfig} config
   */
  configAxios(config: RequestConfig): void {
    if (!this.axiosInstance) return
    this.createAxios(config)
  }

  /**
   * @description: 设置 axios拦截器
   */
  private setupInterceptors(): void {
    const axiosCanceler = new AxiosCanceler()
    // 请求拦截
    this.axiosInstance.interceptors.request.use(
      async (config: InternalAxiosRequestConfig) => {
        // @ts-ignore
        const { headers, withToken, ignoreCancelToken } = config
        // 当请求函数内未设置 ignoreCancelToken 时才采用默认初始化配置
        const ignoreCancel =
          ignoreCancelToken !== undefined
            ? ignoreCancelToken
            : this.options?.ignoreCancelToken
        !ignoreCancel && axiosCanceler.addPending(config)
        if (appConfig.OAUTH.execute && withToken) {
          let accessToken = useCookie(TokenTypeEnum.ACCESS_TOKEN)
          if (!accessToken) {
            // 取消上次请求
            axiosCanceler.removePending(config)
            const userStore = useUserStore()
            const { access_token } = await userStore.reLogin()
            accessToken = access_token
          }
          // @ts-ignore
          headers.Authorization = generateBaseToken(accessToken)
        }
        return config
      },
      undefined
    )

    // 响应拦截
    this.axiosInstance.interceptors.response.use(
      res => {
        axiosCanceler.removePending(res.config)
        return res
      },
      async err => {
        const response: AxiosResponse<Result, any> = err.response
        // 满足 isAxiosError 或 isCancel 的请求均已被 axios取消
        const canBeRemove = !axios.isAxiosError(err) && !axios.isCancel(err)
        canBeRemove && axiosCanceler.removePending(response.config)
        checkStatus(
          response?.status,
          response?.data?.message || err?.message || '',
          axios.isCancel(err)
        )
        return Promise.reject(err)
      }
    )
  }

  /**
   * @description: content-type 为 application/x-www-form-urlencoded 时进行数据 qs转换
   * @param {RequestConfig} config
   * @returns config
   */
  supportFormData = (config: RequestConfig) => {
    const { headers } = config || this.options
    const contentType = headers?.['Content-Type'] || headers?.['content-type']
    if (
      contentType !== ContentTypeEnum.FORM_URLENCODED ||
      !Reflect.has(config, 'data') ||
      config.method === HttpMethodEnum.GET
    ) {
      return config
    }
    return {
      ...config,
      data: qs.stringify(config.data, { arrayFormat: 'brackets' })
    }
  }

  uploadFile() {}

  downloadFile() {}

  GET<T = any>(config: RequestConfig): Promise<T> {
    return this.request({ ...config, method: HttpMethodEnum.GET })
  }

  POST<T = any>(config: RequestConfig): Promise<T> {
    return this.request({ ...config, method: HttpMethodEnum.POST })
  }

  PUT<T = any>(config: RequestConfig): Promise<T> {
    return this.request({ ...config, method: HttpMethodEnum.PUT })
  }

  DELETE<T = any>(config: RequestConfig): Promise<T> {
    return this.request({ ...config, method: HttpMethodEnum.DELETE })
  }

  request<T = any>(config: RequestConfig): Promise<T> {
    // 合并请求配置，优先级由低到高为：options(初始化实例参数) -> config(具体请求参数)
    let conf: RequestConfig = Object.assign({}, this.options, config)
    conf = this.supportFormData(conf)
    conf = transformRequest(conf)
    if(conf.useMock) {
      conf.url = `/mock${conf.url}`
    }
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request<any, AxiosResponse<Result>>(conf)
        .then((res: AxiosResponse<Result>) => {
          try {
            resolve(transformResponse(res, conf) as unknown as T)
          } catch (err) {
            reject(err || new Error('请求失败!'))
          }
        })
        .catch((err: ResponseError) => {
          reject(err)
        })
    })
  }
}
