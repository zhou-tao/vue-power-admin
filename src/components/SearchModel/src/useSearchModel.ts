import { ComponentType } from './useComponent'

export interface SearchConfig<T> {
  model: T,
  config: SearchItemConfig[]
}

interface SelectOptions {
  name: string,
  value: string | number
}

export interface SearchItemConfig {
  component: ComponentType,
  label: string,
  field: string,
  options?: SelectOptions[]
  [key: string]: any
}
