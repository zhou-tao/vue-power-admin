import type { PluginOption, Connect } from 'vite'
// @ts-ignore
import Mock from 'mockjs'
import mockTemplates from '../../../mock'

interface MockOptions {
  base?: string
}

const MOCK_DEFAULT_BASE = '/mock'

const mockPlugin: (options?: MockOptions) => PluginOption = ({
  base = MOCK_DEFAULT_BASE
} = {
  base: MOCK_DEFAULT_BASE
}) => {

  return {
    name: '@vue-power-admin/vite-plugin-mock',
    configureServer(server) {

      return () => {
        server.middlewares.use(base, mockMiddleware)
      }
    }
  }
}

const mockMiddleware: Connect.NextHandleFunction = function (req, res, next) {
  // 接受的 MOCK 请求的 HTTP 方法列表
  const acceptMethods = ['POST', 'GET']

  const url = req.url?.split('?')[0] ?? ''

  if(req.method && !acceptMethods.includes(req.method)) {
    next()
    return
  }

  const mockTemplate = mockTemplates[url]

  // 请求的路由不在 mock 的配置路由中，不做任何处理
  if(!mockTemplate) {
    next()
    return
  }

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({
    code: 0,
    data: Mock.mock(mockTemplate),
    message: 'mock response success'
  }))

}

export default mockPlugin
