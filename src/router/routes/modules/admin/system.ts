import AdminLayout from '@/layouts/admin/index.vue'
import { AppRouteConfig } from '@/router/types'

const SystemRoute: AppRouteConfig = {
  path: '/system',
  name: 'system',
  component: AdminLayout,
  meta: {
    title: '系统管理',
    icon: 'ri:settings-4-fill'
  },
  children: [{
    path: 'menu',
    name: 'menu',
    component: () => import('@/views/admin/_system/menu/index.vue'),
    meta: {
      title: '菜单管理'
    }
  },
  {
    path: 'role',
    name: 'role',
    component: () => import('@/views/admin/_system/role/index.vue'),
    meta: {
      title: '权限管理'
    }
  },
  {
    path: 'dict',
    name: 'dict',
    component: () => import('@/views/admin/_system/dict/index.vue'),
    meta: {
      title: '字典管理'
    }
  },
  {
    path: 'user',
    name: 'user',
    component: () => import('@/views/admin/_system/user/index.vue'),
    meta: {
      title: '用户管理'
    }
  },
  {
    path: 'user/detail/:id',
    name: 'user_detail',
    component: () => import('@/views/admin/_system/user/detail.vue'),
    meta: {
      title: '用户详情',
      hideMenu: true,
      activeMenu: '/system/user'
    }
  },
  {
    path: 'department',
    name: 'department',
    component: () => import('@/views/admin/_system/department/index.vue'),
    meta: {
      title: '部门管理'
    }
  },
  {
    path: 'post',
    name: 'post',
    component: () => import('@/views/admin/_system/post/index.vue'),
    meta: {
      title: '岗位管理'
    }
  }]
}

export default SystemRoute
