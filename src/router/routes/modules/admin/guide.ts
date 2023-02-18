import AdminLayout from '@/layouts/admin/index.vue'

export default {
  path: '/guide',
  name: 'guide',
  component: AdminLayout,
  meta: {
    title: '向导'
  },
  children: [{
    path: '',
    name: 'guide_page',
    component: () => import('@/views/admin/guide/index.vue'),
    meta: {
      title: '引导页'
    }
  }]
}
