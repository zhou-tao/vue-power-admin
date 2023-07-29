import type { PluginOption, Connect } from 'vite'

import Mock from 'mockjs'
import mockTemplates from '../../../mock'

interface MockOptions {
  base?: string
  isBuild?: boolean
}

const MOCK_DEFAULT_BASE = '/mock'

const mockPlugin: (options?: MockOptions) => PluginOption = ({
  base = MOCK_DEFAULT_BASE,
  isBuild = false
} = {
  base: MOCK_DEFAULT_BASE,
  isBuild: false
}) => {
  return {
    name: '@vue-power-admin/vite-plugin-mock',
    configureServer(server) {
      return () => {
        server.middlewares.use(base, mockMiddleware)
      }
    },
    transform(src, id) {
      if (id.endsWith('/src/main.ts')) {
        if (isBuild) {
          const codeWithMockInjected = `
import __injectMock from '../mock/production-inject';
${src}
__injectMock('${base}');
`
          return codeWithMockInjected
        }
      }
    }
  }
}

const mockMiddleware: Connect.NextHandleFunction = function (req, res, next) {
  const writeJson = (body: Record<string, any> = {}) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({
      code: 0,
      data: Mock.mock(typeof mockTemplate === 'function' ? mockTemplate({ body }) : mockTemplate),
      message: 'mock response success'
    }))
  }

  // Accepted mock http methods
  const acceptMethods = ['POST', 'GET']

  const url = req.url?.split('?')[0] ?? ''

  if (req.method && !acceptMethods.includes(req.method)) {
    next()
    return
  }

  const mockTemplate = mockTemplates[url]

  // If the url not in mock templates. Do nothing
  if (!mockTemplate) {
    next()
    return
  }

  let reqChunk = ''

  if (req.headers['content-type']?.includes('application/json')) {
    req.on('data', (chunk) => {
      reqChunk += chunk
    })
    req.on('end', () => {
      writeJson(JSON.parse(reqChunk))
    })
    return
  }

  writeJson()
}

export default mockPlugin
