export function resultSuccess<T = Recordable>(
  data: T,
  { message = 'ok' } = {}
) {
  return {
    resultCode: 0,
    data,
    message,
    detailMessage: null
  }
}

export function resultPageSuccess<T = any>(
  pageNumber: number,
  pageSize: number,
  searchCount: boolean,
  list: T[],
  { message = 'ok' } = {}
) {
  const pageData = pagination(pageNumber, pageSize, list)

  return {
    ...resultSuccess({
      records: pageData,
      current: pageNumber,
      size: pageData.length,
      total: searchCount ? list.length : 0
    }),
    message
  }
}

export function resultError(
  message = 'Request failed',
  { resultCode = -1, data = null } = {}
) {
  return {
    resultCode,
    data,
    message,
    detailMessage: null
  }
}

// 获取分页请求 records 列表
export function pagination<T = any>(
  pageNumber: number,
  pageSize: number,
  array: T[]
): T[] {
  const offset = (pageNumber - 1) * Number(pageSize)
  const ret =
    offset + Number(pageSize) >= array.length
      ? array.slice(offset, array.length)
      : array.slice(offset, offset + Number(pageSize))
  return ret
}

export interface requestParams {
  method: string
  body: any
  headers?: { authorization?: string }
  query: any
}

export function checkAuth({ headers }: requestParams): string | undefined {
  return headers?.authorization
}
