import type { ProxyOptions } from 'vite'

type ProxyPrefixList = string[]

type ProxyTargetList = Record<string, ProxyOptions>

const httpsRE = /^https:\/\//

export function createProxy(prefixList: ProxyPrefixList = [], target: string) {
  const isHttps = httpsRE.test(target)
  const proxy: ProxyTargetList = {}
  prefixList.forEach(prefix => {
    proxy[prefix] = {
      target,
      changeOrigin: true,
      ws: true,
      // rewrite: path => path.replace(new RegExp(`^${prefix}`), ''),
      // https is require secure=false
      ...(isHttps ? { secure: false } : {})
    }
  })
  return proxy
}
