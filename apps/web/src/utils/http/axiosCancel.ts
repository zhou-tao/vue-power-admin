import type { AxiosRequestConfig, Canceler } from 'axios'
import { isFunction } from '@/utils/is'
import axios from 'axios'

// 存储 pending中的请求
let pendingMap = new Map<string, Canceler>()

export const getPendingUrl = (config: AxiosRequestConfig) =>
  [config.method, config.url].join('&')

/**
 * AxiosCanceler
 * @description: 作用：1.取消多次重复请求，保留最后一个 2.取消切换路由后上个页面未完成的请求
 */
export class AxiosCanceler {
  /**
   * @description: 添加 pending状态的请求
   * @param {AxiosRequestConfig} config
   */
  addPending(config: AxiosRequestConfig) {
    // 移除上一个重复请求
    this.removePending(config)
    const url = getPendingUrl(config)
    config.cancelToken =
      config.cancelToken ||
      new axios.CancelToken(cancel => {
        if (!pendingMap.has(url)) {
          // If there is no current request in pending, add it
          pendingMap.set(url, cancel)
        }
      })
  }

  /**
   * @description: 清除所有 pending请求
   */
  removeAllPending() {
    pendingMap.forEach(cancel => {
      cancel && isFunction(cancel) && cancel()
    })
    pendingMap.clear()
  }

  /**
   * @description: 移除 pending请求
   * @param {Object} config
   */
  removePending(config: AxiosRequestConfig) {
    const url = getPendingUrl(config)
    if (pendingMap.has(url)) {
      const cancel = pendingMap.get(url)
      cancel && cancel(url)
      pendingMap.delete(url)
    }
  }

  /**
   * @description: 重置 pendingMap
   */
  reset(): void {
    pendingMap = new Map<string, Canceler>()
  }
}
