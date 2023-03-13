import type { App } from 'vue'
import { createI18n } from 'vue-i18n'

async function getLocales() {
  const modules = await import.meta.glob('./locales/*.ts', { eager: true })
  const locales: Record<string, any> = {}
  for (const path in modules) {
    const name: string = path.match(/locales\/(\S*).ts/)![1]
    // @ts-ignore
    locales[name] = modules[path].default
  }
  return locales
}

export async function setupI18n(app: App) {
  const locales = await getLocales()
  const i18n = createI18n({
    locale: 'zh-cn',
    fallbackLocale: 'en',
    messages: locales
  })
  app.use(i18n)
}
