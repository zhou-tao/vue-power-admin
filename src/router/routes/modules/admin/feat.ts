import AdminLayout from '@/layouts/admin/index.vue'
import type { AppRouteConfig } from '@/router/types'

const FeatRoute: AppRouteConfig = {
  path: '/feat',
  name: 'feat',
  component: AdminLayout,
  meta: {
    title: 'menu.feat.root',
    icon: 'ri:rocket-2-fill'
  },
  children: [{
    path: 'guide',
    name: 'guide',
    component: () => import('@/views/admin/feat/guide/index.vue'),
    meta: {
      title: 'menu.feat.guide'
    }
  },
  {
    path: 'watermark',
    name: 'watermark',
    component: () => import('@/views/admin/feat/watermark/index.vue'),
    meta: {
      title: 'menu.feat.watermark'
    }
  },
  {
    path: 'image-preview',
    name: 'image_preview',
    component: () => import('@/views/admin/feat/image-preview/index.vue'),
    meta: {
      title: 'menu.feat.imagePreview'
    }
  },
  {
    path: 'lazy',
    name: 'lazy',
    component: () => import('@/views/admin/feat/lazy/index.vue'),
    meta: {
      title: 'menu.feat.lazyLoad'
    }
  }]
}

export default FeatRoute
