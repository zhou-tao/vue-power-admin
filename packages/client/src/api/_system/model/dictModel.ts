import { DateLogModel } from '@/api/model/baseModel'

export interface DictOption {
  label: string
  value: string | number
}

export interface DictModel extends DateLogModel {
  id: number
  typeName: string
  typeCode: string
  name: string
  code: string
  options: DictOption[]
  description?: string
}
