import AdminLayout from '@/layouts/admin/index.vue'
import { AppRouteConfig } from '@/router/types'

const GuideRoute: AppRouteConfig = {
  path: '/guide',
  name: 'guide',
  component: AdminLayout,
  redirect: '/guide/index',
  meta: {
    title: '向导',
    icon: 'ri:checkbox-multiple-fill'
  },
  children: [{
    path: 'index',
    name: 'guide_page',
    component: () => import('@/views/admin/guide/index.vue'),
    meta: {
      title: '引导页',
      hideMenu: true
    }
  }]
}

export default GuideRoute
