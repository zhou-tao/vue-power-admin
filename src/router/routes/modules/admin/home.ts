import AdminLayout from '@/layouts/admin/index.vue'
import type { AppRouteConfig } from '@/router/types'

const HomeRoute: AppRouteConfig = {
  path: '/home',
  name: 'home',
  component: AdminLayout,
  redirect: '/home/dashboard',
  meta: {
    title: 'menu.home.root',
    icon: 'ep:home-filled'
  },
  children: [{
    path: 'dashboard',
    name: 'dashboard',
    component: () => import('@/views/admin/home/dashboard/index.vue'),
    meta: {
      title: 'menu.home.dashboard'
    }
  }, {
    path: 'workbench',
    name: 'workbench',
    component: () => import('@/views/admin/home/workbench/index.vue'),
    meta: {
      title: 'menu.home.workbench'
    }
  }]
}

export default HomeRoute
