import type { AppRouteConfig } from '@/router/types'
import ScreenLayout from '@/layouts/screen/index.vue'

const ScreenRoute: AppRouteConfig = {
  path: '/screen',
  name: 'Screen',
  component: ScreenLayout,
  redirect: '/screen/index',
  meta: {
    title: '数据大屏'
  },
  children: [
    {
      path: 'index',
      name: 'MainScreen',
      component: () => import('@/views/screen/index.vue'),
      meta: {
        title: '首页'
      }
    }
  ]
}

export default ScreenRoute
