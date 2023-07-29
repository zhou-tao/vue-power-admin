import HomeRoute from './home'
import SystemRoute from './system'
import ComponentRoute from './component'
import FeatRoute from './feat'
import PersonalRoute from './personal'
import type { AppRouteConfig } from '@/router/types'

const AdminRoutes: AppRouteConfig[] = [
  HomeRoute,
  SystemRoute,
  ComponentRoute,
  FeatRoute,
  PersonalRoute
]

export default AdminRoutes
