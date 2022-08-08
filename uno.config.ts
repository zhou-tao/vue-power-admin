import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'
import transformerDirective from '@unocss/transformer-directives'

export default {
  // 添加 windicss 预设、属性化模式
  presets: [presetUno(), presetAttributify()],
  // 提供指令功能
  transformers: [transformerDirective()]
}
