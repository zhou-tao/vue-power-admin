import AdminLayout from '@/layouts/admin/index.vue'
import { AppRouteConfig } from '@/router/types'

const AboutRoute: AppRouteConfig = {
  path: '/about',
  name: 'about',
  component: AdminLayout,
  redirect: '/about/index',
  meta: {
    title: '关于',
    icon: 'mdi:about'
  },
  children: [{
    path: 'index',
    name: 'about_page',
    component: () => import('@/views/admin/about/index.vue'),
    meta: {
      title: '关于',
      hideMenu: true
    }
  }]
}

export default AboutRoute
