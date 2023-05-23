import type { RoleModel } from './model/roleModel'
import { useFetch } from '@/utils/http'
import { ListQuery, ListResult } from '../model/baseModel'

export enum Api {
  ROLE_LIST = '/sysadmin/role/list',
}

export const getRoleList = (data: ListQuery) => {
  return useFetch.POST<ListResult<RoleModel>>({
    url: Api.ROLE_LIST,
    useMock: true,
    data
  })
}
