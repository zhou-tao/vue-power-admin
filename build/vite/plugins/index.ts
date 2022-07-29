import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import WindiCSS from 'vite-plugin-windicss'
import VitePluginCertificate from 'vite-plugin-mkcert'
import { configMockPlugin } from './mock'
import { configVisualizer } from './visualizer'
import { configAutoImportPlugins } from './auto-imports'

export const createVitePlugins = (viteEnv: ViteEnv, isBuild: boolean) => {
  const { VITE_USE_LEGACY, VITE_USE_MOCK } = viteEnv

  const vitePlugins: Plugin[] = [
    vue({
      reactivityTransform: true
    }),

    // 支持jsx
    vueJsx(),

    // 使setup标签支持name属性配置
    vueSetupExtend(),

    // 样式辅助插件：https://windicss.org/
    WindiCSS(),

    // 开发环境时https证书
    VitePluginCertificate({
      source: 'coding'
    }),

    // element-plus 自动导入
    ...configAutoImportPlugins()
  ]

  // vite-plugin-mock: mock插件
  VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild))

  // rollup-plugin-visualizer: vite打包体积分析
  process.env.REPORT === 'true' && vitePlugins.push(configVisualizer())

  if (isBuild) {
    // 生产环境兼容不支持原生ES Modules浏览器（vite兼容而非vue3）
    VITE_USE_LEGACY && vitePlugins.push(legacy() as unknown as Plugin)
  }

  return vitePlugins
}
