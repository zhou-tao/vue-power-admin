import { ElInput, ElRadioGroup, ElRadio, ElRadioButton, ElSelect } from 'element-plus'
import 'element-plus/theme-chalk/el-input.css'
import 'element-plus/theme-chalk/el-select.css'
import 'element-plus/theme-chalk/el-radio.css'
import 'element-plus/theme-chalk/el-radio-button.css'

export type ComponentType =
  typeof ElInput |
  typeof ElSelect |
  typeof ElRadio |
  typeof ElRadioButton

export enum ComponentName {
  ElSelect = 'ElSelect',
  ElRadio = 'ElRadio',
  ElRadioButton = 'ElRadioButton'
}

export const isRadio = (component: ComponentType) =>
  component.name === ComponentName.ElRadio ||
    component.name === ComponentName.ElRadioButton

// 组件转化
export const getElComponent = (component: ComponentType) => {
  if (isRadio(component)) return ElRadioGroup
  return component || 'div'
}

export const useComponent = () => ({
  ElInput,
  ElSelect,
  ElRadio,
  ElRadioButton
})
