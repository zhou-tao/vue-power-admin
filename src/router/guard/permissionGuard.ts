import type { Router } from 'vue-router'
import { useUserStore } from '@/store/modules/user'
import { useMenuStore } from '@/store/modules/menu'
import {
  addAsyncRoutes,
  checkAccessToken,
  isRequiresAuthRoute
} from '@/router/helper'

export const createPermissionGuard = (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    const userStore = useUserStore()
    const menuStore = useMenuStore()
    // fix async route 404 after refresh page
    const nextRoute = to.matched[0].name === 'PageNotFound' ? { path: to.fullPath } : to
    if (isRequiresAuthRoute(to)) {
      if (!checkAccessToken()) {
        await userStore.reLogin()
        await addAsyncRoutes()
        next({ replace: true, ...nextRoute })
      }
      else {
        userStore.invalid && (await userStore.setUserInfo())
        if (!menuStore.hasRoutes) {
          await addAsyncRoutes()
          next({ replace: true, ...nextRoute })
        }
        else {
          next()
        }
      }
    }
    else {
      next()
    }
  })
}
