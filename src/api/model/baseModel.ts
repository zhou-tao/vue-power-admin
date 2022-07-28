export interface PageParams<T = any> {
  pageNumber: number
  pageSize: number
  queryParams?: T
}

export interface DateLogModel {
  createTime: string
  createdBy: string
  updateTime: string
  updatedBy: string
}
