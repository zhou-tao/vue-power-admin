import type { DepartmentModel } from './model/departmentModel'
import { useFetch } from '@/utils/http'
import { ListQuery, ListResult } from '../model/baseModel'

export enum Api {
  DEPARTMENT_LIST = '/sysadmin/department/list',
}

export const getDepartmentList = (data: ListQuery) => {
  return useFetch.POST<ListResult<DepartmentModel>>({
    url: Api.DEPARTMENT_LIST,
    useMock: true,
    data
  })
}
