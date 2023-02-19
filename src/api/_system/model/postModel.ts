import { DateLogModel } from '@/api/model/baseModel'

export interface PostModel extends DateLogModel {
  id: number
  code: string
  name: string
  description?: string
}
