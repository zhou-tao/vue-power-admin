import type { AppRouteConfig } from '../types'
import AdminRoutes from './modules/admin'
import { PageNotFoundRoute } from './modules/error'
import ScreenRoute from './modules/screen'

const RootRoute: AppRouteConfig = {
  path: '/',
  name: 'Root',
  redirect: '/login',
  meta: {
    title: 'Root'
  }
}

const LoginRoute: AppRouteConfig = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/login/index.vue'),
  meta: {
    title: '登陆',
    requiresAuth: false
  }
}

export const basicRoutes = [
  RootRoute,
  LoginRoute,
  ScreenRoute,
  ...AdminRoutes,
  PageNotFoundRoute
]
