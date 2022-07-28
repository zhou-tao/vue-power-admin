import type { Router } from 'vue-router'
import { useUserStore } from '@/store/modules/user'
import { useMenuStore } from '@/store/modules/menu'
import {
  addAsyncRoutes,
  checkAccessToken,
  isRequiresAuthRoute
} from '@/router/helper'
import { iconsole } from '@/utils/console'
import { ConsoleTypeEnum } from '@/enums/consoleEnum'

export const createPermissionGuard = (router: Router) => {
  iconsole.SUCCESS(ConsoleTypeEnum.ROUTER, 'create permission guard')
  router.beforeEach(async (to, from, next) => {
    const userStore = useUserStore()
    const menuStore = useMenuStore()
    if (isRequiresAuthRoute(to)) {
      if (!checkAccessToken()) {
        console.error('token expires')
        await userStore.reLogin()
        await addAsyncRoutes()
        next(to.fullPath)
      } else {
        userStore.invalid && (await userStore.setUserInfo())
        if (menuStore.hasRoutes) {
          await addAsyncRoutes()
          next(to.fullPath)
        } else {
          next()
        }
      }
    } else {
      next()
    }
  })
}
