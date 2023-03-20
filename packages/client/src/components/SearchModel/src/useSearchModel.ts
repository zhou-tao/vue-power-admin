import { ComponentType } from './useComponent'

interface Option {
  label: string,
  value: string | number | boolean
}

export interface SearchItemConfig {
  component: ComponentType,
  label: string,
  field: string,
  options?: Option[]
  [key: string]: any
}
