import type { RouteLocationNormalized } from 'vue-router'
import { useMenuStore } from '@/store/modules/menu'
import { TokenTypeEnum } from '@/enums/authEnum'
import { useCookie } from '@h/web/useCookie'
import { basicRoutes } from '@/router/routes'
import { router } from '@/router'
import config from '@/config'

export function checkAccessToken() {
  return !config.OAUTH.execute || useCookie(TokenTypeEnum.ACCESS_TOKEN)
}

export function isBasicRoute(route: RouteLocationNormalized) {
  if (route.matched?.length > 0) {
    return basicRoutes.map(r => r.path).includes(route.matched[0]?.path)
  } else {
    return false
  }
}

export function isRequiresAuthRoute(route: RouteLocationNormalized) {
  const matched = route.matched.filter(r => r.name !== 'PageNotFound')
  return !matched.some(r => r.meta?.requiresAuth === false)
}

export async function addAsyncRoutes() {
  const { routes, generateRoutes } = $(useMenuStore())
  if (!routes || routes.length === 0) {
    await generateRoutes()
  }
  routes.forEach(route => router.addRoute(route as any))
}
