import AdminLayout from '@/layouts/admin/index.vue'
import { AppRouteConfig } from '@/router/types'

const PersonalRoute: AppRouteConfig = {
  path: '/personal',
  name: 'personal',
  component: AdminLayout,
  redirect: '/personal/index',
  meta: {
    title: '个人中心',
    icon: 'ri:checkbox-multiple-fill'
  },
  children: [{
    path: 'index',
    name: 'personal_page',
    component: () => import('@/views/admin/personal/index.vue'),
    meta: {
      title: '个人中心',
      hideMenu: true
    }
  }]
}

export default PersonalRoute
