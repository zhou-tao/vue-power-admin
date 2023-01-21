import type { AppRouteConfig } from '@/router/types'
import AdminLayout from '@/layouts/admin/index.vue'

const AdminRoutes: AppRouteConfig[] = [
  {
    path: '/admin',
    component: AdminLayout,
    redirect: '/admin/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/admin/dashboard/index.vue')
      }
    ]
  }
]

export default AdminRoutes
