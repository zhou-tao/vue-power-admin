import type { DictModel } from './model/dictModel'
import { useFetch } from '@/utils/http'
import { ListQuery, ListResult } from '../model/baseModel'

enum Api {
  ROLE_LIST = '/sysadmin/dict/list',
}

export const getDictList = (data: ListQuery) => {
  return useFetch.POST<ListResult<DictModel>>({
    url: Api.ROLE_LIST,
    withToken: false,
    useMock: true,
    data
  })
}
