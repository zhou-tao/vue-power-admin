import Unocss from 'unocss/vite'
import path from 'node:path'

export const configUnocss = () => {
  return Unocss(path.resolve(process.cwd(), 'uno.config.ts'))
}
