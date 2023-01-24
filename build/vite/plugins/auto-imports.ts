import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

export const configAutoImportPlugins = () => [
  AutoImport({
    // 自动引入 vue 相关函数（ref、reactive...）
    imports: ['vue'],

    dts: 'types/auto-imports.d.ts',

    resolvers: [
      // 自动导入 element-plus
      ElementPlusResolver(),

      // 自动导入图标组件
      IconsResolver({
        // 图标使用：<{prefix}-{collection}-{icon} />
        prefix: 'i',
      })
    ],

    vueTemplate: true
  }),

  Components({
    dts: 'types/components.d.ts',
    resolvers: [
      // 自动注册 element-plus
      ElementPlusResolver({
        importStyle: 'sass'
      }),

      // 自动注册图标组件
      IconsResolver({
        enabledCollections: ['ep', 'ri', 'fluent-emoji-flat'],
        alias: {
          emoji: 'fluent-emoji-flat'
        }
      }),
    ]
  }),

  Icons({
    autoInstall: true,
    defaultClass: 'icon'
  })
]
