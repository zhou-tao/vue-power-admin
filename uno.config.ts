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
      primary: '#377dff',
      dtl: '#333333', // dark-text-l
      dtm: '#666666',
      dts: '#999999',
      lbg: '#f5f6fa',
      dbg: '#1B1C31',
      regular: 'var(--el-text-color-regular)',
      secondary: 'var(--el-text-color-secondary)',
      placeholder: 'var(--el-text-color-placeholder)',
    },
    height: {
      header: '4rem',
      footer: '3rem'
    }
  },
  shortcuts: [
    {
      'transition-base': 'transition-all duration-150 ease-in-out'
    },
    {
      'full-page': 'min-h-full rounded px-6 py-5 bg-white dark:bg-#222338 overflow-x-hidden box-border'
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
