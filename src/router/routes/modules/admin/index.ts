import type { AppRouteConfig } from '@/router/types'
import HomeRoute from './home'
import SystemRoute from './system'
import ComponentRoute from './component'
import FeatRoute from './feat'
import GuideRoute from './guide'

const AdminRoutes: AppRouteConfig[] = [
  HomeRoute,
  SystemRoute,
  ComponentRoute,
  FeatRoute,
  GuideRoute
]

export default AdminRoutes
