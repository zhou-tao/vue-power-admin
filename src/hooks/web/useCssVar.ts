import type { CSSVarEnum } from '@/enums/appEnum'

const RootEl = document.documentElement

export const getCssVar = (name: CSSVarEnum) => {
  const value = getComputedStyle(RootEl).getPropertyValue(name)
  return value?.trim()
}

export const setCssVar = (name: CSSVarEnum, value: string) => {
  RootEl.style.setProperty(name, value)
}
