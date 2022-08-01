import Unocss from 'unocss/vite'
import presetUno from '@unocss/preset-uno'

export const configUnocss = () => {
  return Unocss({
    presets: [presetUno()]
  })
}
