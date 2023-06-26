import type { DictModel } from './model/dictModel'
import { useFetch } from '@/utils/http'
import { ListQuery, ListResult } from '../model/baseModel'

export enum Api {
  DICT_LIST = '/sysadmin/dict/list',
}

export const getDictList = (data: ListQuery) => {
  return useFetch.POST<ListResult<DictModel>>({
    url: Api.DICT_LIST,
    useMock: true,
    data
  })
}
