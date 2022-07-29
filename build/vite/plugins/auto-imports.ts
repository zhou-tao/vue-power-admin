import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export const configAutoImportPlugins = () => [
  AutoImport({
    // 自动引入 vue 相关函数（ref、reactive...）
    imports: ['vue'],

    dts: 'types/auto-imports.d.ts',

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
    dts: 'types/components.d.ts',
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
