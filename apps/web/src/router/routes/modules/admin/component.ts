import AdminLayout from '@/layouts/admin/index.vue'
import { AppRouteConfig } from '@/router/types'

const ComponentRoute: AppRouteConfig = {
  path: '/component',
  name: 'component',
  component: AdminLayout,
  meta: {
    title: 'menu.component.root',
    icon: 'ri:dashboard-fill'
  },
  children: [{
    path: 'form',
    name: 'form',
    component: () => import('@/views/admin/component/form/index.vue'),
    meta: {
      title: 'menu.component.form'
    }
  },
  {
    path: 'table',
    name: 'table',
    component: () => import('@/views/admin/component/table/index.vue'),
    meta: {
      title: 'menu.component.table'
    }
  },
  {
    path: 'split-pane',
    name: 'split_pane',
    component: () => import('@/views/admin/component/split-pane/index.vue'),
    meta: {
      title: 'menu.component.splitPane'
    }
  },
  {
    path: 'icon',
    name: 'icon',
    component: () => import('@/views/admin/component/icon/index.vue'),
    meta: {
      title: 'menu.component.icon'
    }
  },
  {
    path: 'editor',
    name: 'editor',
    component: () => import('@/views/admin/component/editor/index.vue'),
    meta: {
      title: 'menu.component.editor'
    }
  }]
}

export default ComponentRoute
