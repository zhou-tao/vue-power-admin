import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export const configAutoImportPlugins = () => [
  AutoImport({
    // 自动引入 vue 相关函数（ref、reactive...）
    imports: ['vue', 'vue-router', 'pinia'],

    dts: 'types/auto-imports.d.ts',

    resolvers: [
      // 自动导入 element-plus
      ElementPlusResolver()
    ],

    vueTemplate: true
  }),

  Components({
    dts: 'types/components.d.ts',
    resolvers: [
      // 自动注册 element-plus
      ElementPlusResolver({
        importStyle: 'sass'
      })
    ]
  })
]
