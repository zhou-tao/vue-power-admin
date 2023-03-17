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
  const modules = import.meta.glob('./locales/*.ts', { eager: true })
  const locales: Record<string, any> = {}
  for (const path in modules) {
    const name: string = path.match(/locales\/(\S*).ts/)![1]
    // @ts-ignore
    locales[name] = modules[path].default
  }
  return locales
}

export function getLocaleTypes(): LocaleType[] {
  const modules = import.meta.glob('./locales/*.ts', { eager: true })
  const localeTypes: LocaleType[] = []
  for (const path in modules) {
    const value: string = path.match(/locales\/(\S*).ts/)![1]
    // @ts-ignore
    localeTypes.push({
      value,
      // @ts-ignore
      name: modules[path].default.name
    })
  }
  return localeTypes
}
