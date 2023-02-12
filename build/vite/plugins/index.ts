import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import { configUnocss } from './unocss'
import { configAutoImportPlugins } from './auto-imports'
import mockPlugin from './mock'

export const createVitePlugins = (viteEnv: ViteEnv, isBuild: boolean) => {
  const { VITE_USE_LEGACY, VITE_USE_MOCK } = viteEnv

  const vitePlugins: PluginOption = [
    vue({
      reactivityTransform: true
    }),

    // 使setup标签支持name属性配置
    vueSetupExtend(),

    // unocss 配置
    configUnocss(),

    // element-plus 自动导入
    ...configAutoImportPlugins()
  ]

  if(VITE_USE_MOCK) {
    vitePlugins.push(mockPlugin())
  }

  if (isBuild) {
    // 生产环境兼容不支持ESM浏览器以及内置babel
    VITE_USE_LEGACY &&
      vitePlugins.push(
        legacy({
          // 无需对IE11进行polyfill 因为vue3无法支持
          targets: ['defaults', 'not IE 11']
        })
      )
  }

  return vitePlugins
}
