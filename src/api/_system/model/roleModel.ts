import { DateLogModel } from '@/api/model/baseModel'

export interface RoleModel extends DateLogModel {
  id: number
  code: string
  name: string
  parentId: number
  description?: string
}
