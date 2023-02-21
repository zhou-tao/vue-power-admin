import { DateLogModel } from '@/api/model/baseModel'

export interface DepartmentModel extends DateLogModel {
  id: number
  code: string
  name: string
  description?: string
}
