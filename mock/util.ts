import type { MockTemplate } from './types'

const DefaultTotal = 100

export const generatePageData = (body: Record<string, any>, result: (q: MockTemplate) => MockTemplate) => {
  const { size = 10, current, query } = body
  const maxPage = Math.ceil(DefaultTotal / size)
  const overSize = size * current - DefaultTotal
  const cur = overSize < size ? current : maxPage
  const sz = overSize > 0 && overSize < size ? overSize : size
  return {
    [`list|${sz}`]: [result(query)],
    size,
    current: cur,
    total: DefaultTotal
  }
}
