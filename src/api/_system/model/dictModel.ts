import { DateLogModel } from '@/api/model/baseModel'

export interface DictOption {
  label: string
  value: string | number
}

export interface DictModel extends DateLogModel {
  id: number
  code: string
  name: string
  options: DictOption[]
  description?: string
}
