import type { AppRouteConfig } from '@/router/types'
import AdminLayout from '@/layouts/admin/index.vue'

const AdminRoutes: AppRouteConfig[] = [
  {
    path: '/admin',
    component: AdminLayout,
    redirect: '/admin/dashboard',
    meta: {
      title: '首页'
    },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/admin/dashboard/index.vue')
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/admin/_sys/user/index.vue'),
        meta: {
          title: '用户管理'
        }
      },
      {
        path: 'user/detail/:id',
        name: 'user_detail',
        component: () => import('@/views/admin/_sys/user/detail.vue'),
        meta: {
          title: '用户详情'
        }
      },
      {
        path: 'role',
        name: 'role',
        component: () => import('@/views/admin/_sys/roles/index.vue'),
        meta: {
          title: '权限管理'
        }
      },
      {
        path: 'menu',
        name: 'menu',
        component: () => import('@/views/admin/_sys/menu/index.vue'),
        meta: {
          title: '菜单管理'
        }
      },
      {
        path: 'setting',
        name: 'setting',
        component: () => import('@/views/admin/_sys/setting/index.vue'),
        meta: {
          title: '系统设置'
        }
      }
    ]
  }
]

export default AdminRoutes
