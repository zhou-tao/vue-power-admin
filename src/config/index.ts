import { defineConfig } from './utils'

export default defineConfig({
  // 系统设置
  APP: {
    // 业务中心侧边菜单标题
    title: 'Vue Power Admin',
    // 密码安全检查
    security: false
  },
  // http相关
  HTTP: {
    timeout: 10000
  },
  OAUTH: {
    // 是否执行Auth登录（包括路由、接口检查token有效性）
    execute: true,
    // oauth中请求头内需加密的client_id
    client_id: 'client',
    // oauth中请求头内需加密的client_secret
    client_secret: '123456'
  }
})
