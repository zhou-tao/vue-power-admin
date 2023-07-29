import AdminLayout from '@/layouts/admin/index.vue'
import type { AppRouteConfig } from '@/router/types'

const PersonalRoute: AppRouteConfig = {
  path: '/personal',
  name: 'personal',
  component: AdminLayout,
  redirect: '/personal/index',
  meta: {
    title: 'menu.personal',
    icon: 'ri:checkbox-multiple-fill'
  },
  children: [{
    path: 'index',
    name: 'personal_page',
    component: () => import('@/views/admin/personal/index.vue'),
    meta: {
      title: 'menu.personal',
      hideMenu: true
    }
  }]
}

export default PersonalRoute
