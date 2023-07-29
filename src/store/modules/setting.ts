import { defineStore } from 'pinia'
import { useDark } from '@vueuse/core'
import { ThemeEnum } from '@/enums/appEnum'
import { MenuLayout } from '@/enums/menuEnum'
import { getLocalStorage, setLocalStorage } from '@/hooks/web/useStorage'
import { LocalStorageEnum } from '@/enums/storageEnum'

const isDark = useDark()
const computedTheme = (dark: boolean) => dark ? ThemeEnum.DARK : ThemeEnum.LIGHT

interface SettingState {
  theme: ThemeEnum
  menuLayout: MenuLayout
  menuCollapsed: boolean
  hasBreadcrumb: boolean
  hasTabView: boolean
  hasFooter: boolean
  hasLocales: boolean
  hasFpLoading: boolean
  hasPageAnimate: boolean
  hasProgress: boolean
}

export const useSettingStore = defineStore('setting', {
  state: (): SettingState => ({
    theme: computedTheme(isDark.value),
    menuLayout: MenuLayout.VERTICAL,
    menuCollapsed: false,
    hasBreadcrumb: true,
    hasTabView: true,
    hasFooter: true,
    hasLocales: true,
    hasFpLoading: getLocalStorage(LocalStorageEnum.VP_HAS_FP_LOADING),
    hasPageAnimate: true,
    hasProgress: true
  }),
  getters: {
    isDark: () => isDark,
    isVerticalMenu: state => state.menuLayout === MenuLayout.VERTICAL
  },
  actions: {
    toggleDark() {
      isDark.value = !isDark.value
      this.theme = computedTheme(isDark.value)
    },

    setLayout(layout: MenuLayout) {
      if (layout === MenuLayout.HORIZONTAL) {
        // 菜单为水平时避免折叠
        this.menuCollapsed = false
      }
      this.menuLayout = layout
    },

    toggleCollapse() {
      this.menuCollapsed = !this.menuCollapsed
    },

    toggleFpLoading() {
      this.hasFpLoading = !this.hasFpLoading
      setLocalStorage(LocalStorageEnum.VP_HAS_FP_LOADING, this.hasFpLoading)
    },

    togglePageAnimate() {
      this.hasPageAnimate = !this.hasPageAnimate
    },

    toggleProgress() {
      this.hasProgress = !this.hasProgress
    }
  },
  persist: {
    key: 'SETTING_STORE',
    storage: window.sessionStorage
  }
})
