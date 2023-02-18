import AdminLayout from '@/layouts/admin/index.vue'

export default {
  path: '/component',
  name: 'component',
  component: AdminLayout,
  meta: {
    title: '组件'
  },
  children: [{
    path: 'form',
    name: 'form',
    meta: {
      title: '表单'
    },
    children: [{
      path: 'search-form',
      name: 'search-form',
      component: () => import('@/views/admin/component/form/search-form/index.vue'),
      meta: {
        title: '查询表单'
      },
    },
    {
      path: 'submit-form',
      name: 'submit-form',
      component: () => import('@/views/admin/component/form/submit-form/index.vue'),
      meta: {
        title: '操作表单'
      },
    }]
  },
  {
    path: 'table',
    name: 'table',
    component: () => import('@/views/admin/component/table/index.vue'),
    meta: {
      title: '表格'
    }
  },
  {
    path: 'icon',
    name: 'icon',
    component: () => import('@/views/admin/component/icon/index.vue'),
    meta: {
      title: '图标'
    }
  },
  {
    path: 'editor',
    name: 'editor',
    component: () => import('@/views/admin/component/editor/index.vue'),
    meta: {
      title: '编辑器'
    }
  },
  {
    path: 'chart',
    name: 'chart',
    component: () => import('@/views/admin/component/chart/index.vue'),
    meta: {
      title: '图表'
    }
  }]
}
