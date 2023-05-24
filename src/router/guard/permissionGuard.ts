import type { RouteLocationNormalized, Router } from 'vue-router'
import { useUserStore } from '@/store/modules/user'
import { useMenuStore } from '@/store/modules/menu'
import {
  addAsyncRoutes,
  checkAccessToken,
  isRequiresAuthRoute
} from '@/router/helper'
import { BConsole } from '@/utils/console'
import { ConsoleTypeEnum } from '@/enums/consoleEnum'

export const createPermissionGuard = (router: Router) => {
  BConsole.SUCCESS(ConsoleTypeEnum.ROUTER, 'create permission guard')
  router.beforeEach(async (to, from, next) => {
    const { invalid, setUserInfo, reLogin } = $(useUserStore())
    const menuStore = useMenuStore()
    // fix async route 404 after refresh page
    const goAsyncRoute = (route: RouteLocationNormalized) => route.matched.length ? next() : next({ ...to, replace: true })
    if (isRequiresAuthRoute(to)) {
      if (!checkAccessToken()) {
        await reLogin()
        await addAsyncRoutes()
        goAsyncRoute(to)
      } else {
        invalid && (await setUserInfo())
        if (!menuStore.hasRoutes) {
          await addAsyncRoutes()
          goAsyncRoute(to)
        } else {
          next()
        }
      }
    } else {
      next()
    }
  })
}
