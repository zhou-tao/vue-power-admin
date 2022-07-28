import type { RouteMeta, RouteRecordRaw } from 'vue-router'

export type AppRouteConfig = Omit<RouteRecordRaw, 'meta' | 'children'> & {
  id?: number
  hidden?: boolean
  showRoot?: boolean
  meta?: RouteMeta
  children?: AppRouteConfig[]
}
