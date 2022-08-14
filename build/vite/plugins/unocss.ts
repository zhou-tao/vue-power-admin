import Unocss from 'unocss/vite'
import UnocssConfig from '../../../uno.config'

export const configUnocss = () => {
  return Unocss(UnocssConfig as any)
}
