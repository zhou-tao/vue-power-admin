import AdminLayout from '@/layouts/admin/index.vue'

export default {
  path: '/home',
  name: 'home',
  component: AdminLayout,
  redirect: '/home/dashboard',
  meta: {
    title: '首页'
  },
  children: [{
    path: 'dashboard',
    name: 'dashboard',
    component: () => import('@/views/admin/home/dashboard/index.vue'),
    meta: {
      title: '仪表盘'
    }
  },{
    path: 'workbench',
    name: 'workbench',
    component: () => import('@/views/admin/home/workbench/index.vue'),
    meta: {
      title: '工作台'
    }
  }]
}
