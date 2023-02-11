import { ComponentType } from './useComponent'

interface SelectOptions {
  name: string,
  value: string | number | boolean
}

export interface SearchItemConfig {
  component: ComponentType,
  label: string,
  field: string,
  options?: SelectOptions[]
  [key: string]: any
}
