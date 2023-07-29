import AdminLayout from '@/layouts/admin/index.vue'
import type { AppRouteConfig } from '@/router/types'

const SystemRoute: AppRouteConfig = {
  path: '/system',
  name: 'system',
  component: AdminLayout,
  meta: {
    title: 'menu.system.root',
    icon: 'ri:settings-4-fill'
  },
  children: [{
    path: 'menu',
    name: 'menu',
    component: () => import('@/views/admin/_system/menu/index.vue'),
    meta: {
      title: 'menu.system.menu'
    }
  },
  {
    path: 'role',
    name: 'role',
    component: () => import('@/views/admin/_system/role/index.vue'),
    meta: {
      title: 'menu.system.role'
    }
  },
  {
    path: 'dict',
    name: 'dict',
    component: () => import('@/views/admin/_system/dict/index.vue'),
    meta: {
      title: 'menu.system.dict'
    }
  },
  {
    path: 'user',
    name: 'user',
    component: () => import('@/views/admin/_system/user/index.vue'),
    meta: {
      title: 'menu.system.user'
    }
  },
  {
    path: 'user/detail/:id',
    name: 'user_detail',
    component: () => import('@/views/admin/_system/user/detail.vue'),
    meta: {
      title: 'menu.system.userDetail',
      hideMenu: true,
      activeMenu: '/system/user'
    }
  },
  {
    path: 'department',
    name: 'department',
    component: () => import('@/views/admin/_system/department/index.vue'),
    meta: {
      title: 'menu.system.department'
    }
  },
  {
    path: 'post',
    name: 'post',
    component: () => import('@/views/admin/_system/post/index.vue'),
    meta: {
      title: 'menu.system.post'
    }
  }]
}

export default SystemRoute
