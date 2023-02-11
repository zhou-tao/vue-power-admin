import { ElInput, ElSelect } from 'element-plus'
import 'element-plus/theme-chalk/el-input.css'
import 'element-plus/theme-chalk/el-select.css'

export type ComponentType =
  typeof ElInput |
  typeof ElSelect

export const useComponent = () => ({
  ElInput,
  ElSelect
})
