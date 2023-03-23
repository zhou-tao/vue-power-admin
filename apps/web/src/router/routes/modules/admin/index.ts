import type { AppRouteConfig } from '@/router/types'
import HomeRoute from './home'
import SystemRoute from './system'
import ComponentRoute from './component'
import FeatRoute from './feat'
import PersonalRoute from './personal'

const AdminRoutes: AppRouteConfig[] = [
  HomeRoute,
  SystemRoute,
  ComponentRoute,
  FeatRoute,
  PersonalRoute
]

export default AdminRoutes
