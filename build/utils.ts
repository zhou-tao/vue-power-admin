/**
 * 环境变量类型转化
 * @param env vite暴露的string类型环境变量
 */
export const envParse: (env: ImportMetaEnv) => ViteEnv = env => {
  const metaEnv: any = {}
  Object.keys(env).forEach(key => {
    const targetEnv = env[key]
    if (['true', 'false'].includes(targetEnv as string)) {
      metaEnv[key] = JSON.parse(targetEnv as string)
    } else if (!isNaN(targetEnv as any)) {
      metaEnv[key] = Number(targetEnv)
    } else if (key === 'VITE_PROXY_PREFIX' && typeof targetEnv === 'string') {
      let value
      try {
        value = JSON.parse(targetEnv.replace(/'/g, '"'))
      } catch (err) {
        value = ''
      }
      metaEnv[key] = value
    } else {
      metaEnv[key] = targetEnv
    }
  })
  return metaEnv
}
