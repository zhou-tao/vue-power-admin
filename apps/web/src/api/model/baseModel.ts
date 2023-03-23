export type ApiParam = Record<string, any>

export interface ListQuery<T = any> {
  current: number
  size: number
  query?: Partial<T>
}

export interface ListResult<T = any> {
  current: number
  size: number
  total: number
  list: T[]
}

export interface DateLogModel {
  createTime: string
  createdBy: string
  updateTime: string
  updatedBy: string
}
