import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import WindiCSS from 'vite-plugin-windicss'
import VitePluginCertificate from 'vite-plugin-mkcert'
import { configMockPlugin } from './mock'
import { configVisualizer } from './visualizer'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

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
    WindiCSS() as any,

    // 开发环境时https证书
    VitePluginCertificate({
      source: 'coding'
    }),

    AutoImport({
      // 自动引入 vue 相关函数（ref、reactive...）
      imports: ['vue'],

      resolvers: [
        // 自动导入 element-plus
        ElementPlusResolver(),

        // 自动导入 @element-plus/icons-vue
        IconsResolver({
          prefix: 'Icon'
        })
      ]
    }),
    Components({
      resolvers: [
        // 自动注册 element-plus
        ElementPlusResolver(),

        // 自动注册 @element-plus/icons-vue
        IconsResolver({
          enabledCollections: ['ep']
        })
      ]
    }),
    Icons({
      autoInstall: true
    })
  ]

  // vite-plugin-mock: mock插件
  VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild))

  // rollup-plugin-visualizer: vite打包体积分析
  process.env.REPORT === 'true' && vitePlugins.push(configVisualizer())

  if (isBuild) {
    // 打包后兼容不支持原生ES Modules浏览器
    VITE_USE_LEGACY && vitePlugins.push(legacy())
  }

  return vitePlugins
}
