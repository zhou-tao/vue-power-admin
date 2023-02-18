import type { RouteRecordName } from 'vue-router'
import { ElSubMenu, ElMenuItem } from 'element-plus'
import { AppRouteConfig } from '@/router/types'

export type MenuItemComponent = typeof ElSubMenu | typeof ElMenuItem

export interface Menu {
  component: MenuItemComponent
  title: string
  index: RouteRecordName | undefined
  icon?: string | undefined,
  children?: Menu[]
}

export const resolveFullPath = (route: AppRouteConfig): string => {
  if (!route.path) return ''
  const router = useRouter()
  const resolvedRoute = router.resolve(route)
  return resolvedRoute.fullPath
}

export const routeToMenu = (routes: AppRouteConfig[]): Menu[] => {
  return routes.filter(route => !route?.meta?.hide).map(r => {
    const childMenu = r.children && r.children.filter(child => !child.meta?.hideMenu)
    return {
      title: r?.meta?.title || 'title',
      index: resolveFullPath(r) || r.name,
      component: childMenu?.length ? ElSubMenu : ElMenuItem,
      icon: r?.meta?.icon,
      ...(childMenu?.length && { children: routeToMenu(childMenu) })
    }
  })
}
