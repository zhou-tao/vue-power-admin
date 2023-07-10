import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  // 添加 windicss 预设、属性化模式
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      warn: true,
      collections: {
        app: FileSystemIconLoader('./src/assets/icons')
      }
    })
  ],
  // 提供指令功能
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    colors: {
      root_light: '#f5f6fa', // 最底层背景
      root_dark: '#272727',
      page_light: '#ffffff', // 基础布局背景
      page_dark: '#18181B',
      primary: 'var(--el-color-primary)',
      main: 'var(--el-text-color-primary)',
      regular: 'var(--el-text-color-regular)',
      secondary: 'var(--el-text-color-secondary)',
      placeholder: 'var(--el-text-color-placeholder)',
      light: 'var(--el-color-info-light-9)',
      light_hover: 'var(--el-color-info-light-8)'
    },
    height: {
      header: '64px',
      footer: '50px',
      tab: 'var(--tab-view-height)',
      content: 'var(--content-base-height)'
    },
    minHeight: {
      content: 'var(--content-base-height)'
    }
  },
  shortcuts: [
    {
      'bg-root': 'bg-root_light dark:bg-root_dark'
    },
    {
      'bg-page': 'bg-page_light dark:bg-page_dark'
    },
    {
      'transition-base': 'transition-all duration-150 ease-in-out'
    },
    {
      'page-base': 'min-h-content overflow-x-hidden box-border'
    },
    {
      'page-card': 'page-base bg-page rounded px-6 py-5'
    },
    {
      'page-pure': 'page-base bg-page rounded h-content'
    },
    {
      'flex-center': 'flex items-center justify-center'
    }
  ],
  // 自定义规则
  rules: [
    [
      'text-brand-gradient',
      {
        'color': 'transparent',
        'background-image': 'linear-gradient(to right, #00ff8f, #00a1ff)',
        'background-clip': 'text'
      }
    ],
    [
      'bg-gradient-light',
      {
        'background-image':
          'linear-gradient( 135deg, #ABDCFF30 20%, #0396FF20 100%)'
      }
    ],
    [
      'bg-gradient-dark',
      {
        'background-image':
          'linear-gradient( 135deg, #2A5470 20%, #4C4177 100%)'
      }
    ],
    [
      'shadow-card-dark',
      {
        'box-shadow': '0 0 12px 0 rgb(0 0 0 / 9%)'
      }
    ]
  ]
})
