// import type { Ref } from 'vue'
import { ThemeEnum } from '@/enums/appEnum'
import { MenuLayout } from '@/enums/menuEnum'
import { useDark } from '@vueuse/core'

const SETTING_THEME_KEY = 'theme'

export interface AppSetting {
  theme: ThemeEnum,
  menuLayout: MenuLayout,
  menuCollapsed: boolean,
  hasBreadcrumb: boolean,
  hasTagsView: boolean,
  hasFooter: boolean,
  hasLocales: boolean
}

const appSettings = reactive<AppSetting>({
  theme: ThemeEnum.DARK,
  menuLayout: MenuLayout.VERTICAL,
  menuCollapsed: false,
  hasBreadcrumb: true,
  hasTagsView: true,
  hasFooter: true,
  hasLocales: true
})

const isDark = useDark()

watch(isDark, v => {
  appSettings.theme = v ? ThemeEnum.DARK : ThemeEnum.LIGHT
}, {
  immediate: true
})

export default () => appSettings

export const useAppTheme = () => ({
  isDark,
  theme: computed(() => appSettings.theme),
  toggleDark: (dark: MaybeRef<boolean>) => {
    isDark.value = isRef(dark) ? !dark.value : !dark
  }
})
export const useMenuLayout = () => computed(() => appSettings.menuLayout)
export const useMenuCollapsed = () => computed(() => appSettings.menuCollapsed)
export const useBreadcrumb = () => computed(() => appSettings.hasBreadcrumb)
export const useFooter = () => computed(() => appSettings.hasFooter)
export const useLocales = () => computed(() => appSettings.hasLocales)

export function setAppSetting(settings: Partial<AppSetting>) {
  Object.keys(settings).forEach(key => {
    if (key === SETTING_THEME_KEY) {
      isDark.value = settings[key] === ThemeEnum.DARK
    } else {
      // @ts-ignore
      appSettings[key] = settings[key]
    }
  })
}
