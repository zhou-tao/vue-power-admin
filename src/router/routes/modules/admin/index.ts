import type { AppRouteConfig } from '@/router/types'
import HomeRoute from './home'
import SystemRoute from './system'
import ComponentRoute from './component'
import FeatRoute from './feat'
import AboutRoute from './about'
import PersonalRoute from './personal'

const AdminRoutes: AppRouteConfig[] = [
  HomeRoute,
  SystemRoute,
  ComponentRoute,
  FeatRoute,
  PersonalRoute,
  AboutRoute
]

export default AdminRoutes
