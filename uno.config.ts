import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'
import transformerDirective from '@unocss/transformer-directives'

export default {
  // 添加 windicss 预设、属性化模式
  presets: [presetUno(), presetAttributify()],
  // 提供指令功能
  transformers: [transformerDirective()],
  theme: {
    colors: {
      root_light: '#f5f6fa', // 最底层背景
      root_dark: '#1c1c1e',
      page_light: '#ffffff', // 基础布局背景
      page_dark: '#18181B',
      primary: 'var(--el-color-primary)',
      regular: 'var(--el-text-color-regular)',
      secondary: 'var(--el-text-color-secondary)',
      placeholder: 'var(--el-text-color-placeholder)',
    },
    height: {
      header: '4rem',
      footer: '3rem',
    },
    minHeight: {
      content: 'calc(100vh - 170px)'
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
      'full-page': 'min-h-content rounded px-6 py-5 bg-page overflow-x-hidden box-border'
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
}
