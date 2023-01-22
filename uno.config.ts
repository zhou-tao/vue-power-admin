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
      dts: '#999999'
    }
  },
  shortcuts: [
    {
      'transition-base': 'transition-all duration-150 ease-in-out'
    }
  ],
  // 自定义规则
  rules: [
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
