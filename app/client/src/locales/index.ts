import type { App } from 'vue'
import { createI18n, I18nOptions } from 'vue-i18n'

export interface LocaleType {
  name: string
  value: string
}

export const i18n = createI18n({
  legacy: false,
  locale: 'zh-cn',
  fallbackLocale: 'en',
  messages: getLocaleData()
})

export function setupI18n(app: App) {
  app.use(i18n)
}

function getLocaleData(): I18nOptions['messages'] {
  const modules = import.meta.glob('./lang/*.ts', { eager: true })
  const lang: Record<string, any> = {}
  for (const path in modules) {
    const name: string = path.match(/lang\/(\S*).ts/)![1]
    // @ts-ignore
    lang[name] = modules[path].default
  }
  return lang
}

export function getLocaleTypes(): LocaleType[] {
  const modules = import.meta.glob('./lang/*.ts', { eager: true })
  const localeTypes: LocaleType[] = []
  for (const path in modules) {
    const value: string = path.match(/lang\/(\S*).ts/)![1]
    // @ts-ignore
    localeTypes.push({
      value,
      // @ts-ignore
      name: modules[path].default.name
    })
  }
  return localeTypes
}
