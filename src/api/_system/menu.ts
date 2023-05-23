import type { BuildMenuModel, MenuModel } from './model/menuModel'
import { useFetch } from '@/utils/http'
import { ListQuery, ListResult } from '../model/baseModel'

enum Api {
  BUILD_MENU = '/sysadmin/menu/build',
  MENU_LIST = '/sysadmin/menu/list',
}

export const buildMenuApi = () => {
  return useFetch.GET<BuildMenuModel[]>({
    url: Api.BUILD_MENU,
    useMock: true
  })
}

export const getMenuList = (data: ListQuery) => {
  return useFetch.POST<ListResult<MenuModel>>({
    url: Api.MENU_LIST,
    useMock: true,
    data
  })
}
