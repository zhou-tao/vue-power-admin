import type { RouteMeta, RouteRecordRaw } from 'vue-router'

export type AppRouteConfig = Omit<RouteRecordRaw, 'meta' | 'children'> & {
  id?: number
  meta?: RouteMeta
  children?: AppRouteConfig[]
}
