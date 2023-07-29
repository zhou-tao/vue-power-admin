import type { RouteLocationNormalized, RouteRecordName, RouteRecordRaw } from 'vue-router'
import { useCookie } from '@h/web/useCookie'
import { useMenuStore } from '@/store/modules/menu'
import { TokenTypeEnum } from '@/enums/authEnum'
import { basicRoutes } from '@/router/routes'
import { router } from '@/router'
import config from '@/config'

export function checkAccessToken() {
  return !config.OAUTH.execute || useCookie(TokenTypeEnum.ACCESS_TOKEN)
}

export function isBasicRoute(route: RouteLocationNormalized) {
  if (route.matched?.length > 0) {
    return basicRoutes.map(r => r.path).includes(route.matched[0]?.path)
  }
  else {
    return false
  }
}

export function isRequiresAuthRoute(route: RouteLocationNormalized) {
  const matched = route.matched.filter(r => r.name !== 'PageNotFound')
  return !matched.some(r => r.meta?.requiresAuth === false)
}

export async function addAsyncRoutes() {
  const menuStore = useMenuStore()
  if (!menuStore.routes?.length) {
    await menuStore.generateRoutes()
  }
  menuStore.routes.forEach((route) => {
    const routeName = route.name as RouteRecordName
    const hasRoute = router.hasRoute(routeName)
    if (hasRoute) router.removeRoute(routeName) // if already exists, remove it before adding
    router.addRoute(toRaw(route) as RouteRecordRaw)
  })
}
