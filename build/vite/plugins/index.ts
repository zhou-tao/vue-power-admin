import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
// import VitePluginCertificate from 'vite-plugin-mkcert'
import { configUnocss } from './unocss'
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

    // 开发环境时https证书
    // VitePluginCertificate({
    //   source: 'coding'
    // }),

    // unocss 配置
    configUnocss(),

    // element-plus 自动导入
    ...configAutoImportPlugins()
  ]

  // vite-plugin-mock: mock插件
  VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild))

  // rollup-plugin-visualizer: vite打包体积分析
  process.env.REPORT === 'true' &&
    vitePlugins.push(configVisualizer() as Plugin)

  if (isBuild) {
    // 生产环境兼容不支持ESM浏览器以及内置babel
    VITE_USE_LEGACY &&
      vitePlugins.push(
        legacy({
          // 无需对IE11进行polyfill 因为vue3无法支持
          targets: ['defaults', 'not IE 11']
        }) as unknown as Plugin
      )
  }

  return vitePlugins
}
