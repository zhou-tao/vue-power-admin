import type { Router } from 'vue-router'
import { createPermissionGuard } from '@/router/guard/permissionGuard'
import { isBasicRoute } from '@/router/helper'
import { AxiosCanceler } from '@/utils/http/axiosCancel'
import NProgress from 'nprogress'
import config from '@/config'

/**
 * @description 设置路由守卫
 * @param router
 */
export function setupRouterGuard(router: Router) {
  createPermissionGuard(router)
  createTitleGuard(router)
  createHttpGuard(router)
  createNProgressGuard(router)
}

/**
 * @description 动态标题守卫
 * @param router
 */
const createTitleGuard = (router: Router) => {
  router.beforeEach(to => {
    document.title = (to.meta.title || config.APP.title) as string
  })
}

/**
 * @description 取消上一个页面未完成请求
 * @param router
 */
const createHttpGuard = (router: Router) => {
  router.beforeEach(() => {
    new AxiosCanceler().removeAllPending()
  })
}

/**
 * @description 进度条守卫
 * @param router
 */
const createNProgressGuard = (router: Router) => {
  router.beforeEach((to, from) => {
    !isBasicRoute(from) && NProgress.start()
  })
  router.afterEach(() => {
    NProgress.done()
  })
}
