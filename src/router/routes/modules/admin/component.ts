import AdminLayout from '@/layouts/admin/index.vue'
import { AppRouteConfig } from '@/router/types'

const ComponentRoute: AppRouteConfig = {
  path: '/component',
  name: 'component',
  component: AdminLayout,
  meta: {
    title: '组件',
    icon: 'ri:dashboard-fill'
  },
  children: [{
    path: 'form',
    name: 'form',
    component: () => import('@/views/admin/component/form/index.vue'),
    meta: {
      title: '表单'
    }
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
    path: 'split-pane',
    name: 'split_pane',
    component: () => import('@/views/admin/component/split-pane/index.vue'),
    meta: {
      title: '分栏器'
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
  }]
}

export default ComponentRoute
