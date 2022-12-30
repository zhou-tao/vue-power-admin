import { MenuType } from '@/enums/menuEnum'
import { resultSuccess } from 'mock/utils'
import { MockMethod } from 'vite-plugin-mock'

export const createMenuData = () => [
  {
    path: '/home',
    name: 'Home',
    component: 'Layout',
    type: MenuType.CATALOG,
    hidden: true,
    showRoot: false,
    orderNum: 1,
    meta: {
      requiresAuth: true,
      permission: ['ROLE_ADMIN']
    },
    children: [
      {
        path: 'index',
        name: 'Home',
        component: 'home/index',
        type: MenuType.MENU,
        hidden: false,
        showRoot: false,
        orderNum: 1,
        meta: {
          title: '首页',
          icon: 'home',
          requiresAuth: true,
          permission: ['ROLE_ADMIN']
        }
      }
    ]
  }
]

export default [
  {
    url: '/sysadmin/menu/build',
    method: 'get',
    response: () => {
      return resultSuccess(createMenuData())
    }
  }
] as MockMethod[]
