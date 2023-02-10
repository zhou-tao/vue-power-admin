import { defineStore } from 'pinia'
import { ThemeEnum } from '@/enums/appEnum'
import { MenuLayout } from '@/enums/menuEnum'
import { useDark } from '@vueuse/core'

const isDark = useDark()
const computedTheme = (dark: boolean) => dark ? ThemeEnum.DARK : ThemeEnum.LIGHT

interface SettingState {
  theme: ThemeEnum,
  menuLayout: MenuLayout,
  menuCollapsed: boolean,
  hasBreadcrumb: boolean,
  hasTagsView: boolean,
  hasFooter: boolean,
  hasLocales: boolean,
  hasFpLoading: boolean,
  hasPageAnimate: boolean,
  hasProgress: boolean
}

export const useSettingStore = defineStore('setting', {
  state: (): SettingState => ({
    theme: computedTheme(isDark.value),
    menuLayout: MenuLayout.VERTICAL,
    menuCollapsed: false,
    hasBreadcrumb: true,
    hasTagsView: true,
    hasFooter: true,
    hasLocales: true,
    hasFpLoading: true,
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
      this.menuLayout = layout
    },

    toggleCollapse() {
      this.menuCollapsed = !this.menuCollapsed
    },

    toggleFpLoading() {
      this.hasFpLoading = !this.hasFpLoading
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
