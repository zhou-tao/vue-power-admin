import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

const modules = import.meta.glob('./**/*.ts', {
  import: 'default'
})

const mockModules: any[] = []

for (const path in modules) {
  if (!path.includes('/_')) {
    modules[path]().then(mod => {
      mockModules.push(mod)
    })
  }
}

export function setupProdMockServer() {
  createProdMockServer(mockModules)
}
