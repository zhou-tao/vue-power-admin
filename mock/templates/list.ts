import type { Mock, MockTemplate, } from '../types'

const DefaultTotal = 100

export const useListTemplate = (api: string, result: (q: MockTemplate) => MockTemplate): Mock => ({
  [api]: ({ body = {} }) => {
    const { size = 10, current, query } = body
    const maxPage = Math.ceil(DefaultTotal/size)
    const overSize = size*current - DefaultTotal
    const cur = overSize < size ? current : maxPage
    const sz = overSize > 0 && overSize < size ? overSize : size
    return {
      [`list|${sz}`]: [result(query)],
      size,
      current: cur,
      total: DefaultTotal
    }
  }
})
