export const buildMenus = [
  {
    id: 1,
    title: '动态路由',
    path: '/dynamic',
    name: 'Dynamic',
    icon: '',
    leaf: false,
    order: 1,
    component: 'Layout',
    parentId: null,
    redirect: '/dynamic/first',
    children: [
      {
        id: 2,
        title: '子路由1',
        path: 'first',
        name: 'First',
        icon: 'ri:rocket-2-fill',
        leaf: true,
        order: 1,
        component: 'dynamic/first',
        parentId: null,
        children: []
      },
      {
        id: 3,
        title: '子路由2',
        path: 'second',
        name: 'Second',
        icon: 'ri:rocket-2-fill',
        leaf: true,
        order: 1,
        component: 'dynamic/second',
        parentId: null,
        children: []
      }
    ]
  }
]
