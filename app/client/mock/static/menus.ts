export const buildMenus = [
  {
    id: 1,
    title: 'menu.dynamic.root',
    path: '/dynamic',
    name: 'Dynamic',
    icon: 'ep:promotion',
    leaf: false,
    order: 1,
    component: 'Layout',
    parentId: null,
    redirect: '/dynamic/first',
    children: [
      {
        id: 2,
        title: 'menu.dynamic.first',
        path: 'first',
        name: 'First',
        icon: '',
        leaf: true,
        order: 1,
        component: 'dynamic/first/index',
        parentId: null,
        children: [],
        permissions: ['add', 'update', 'delete']
      },
      {
        id: 3,
        title: 'menu.dynamic.second',
        path: 'second',
        name: 'Second',
        icon: '',
        leaf: true,
        order: 1,
        component: 'dynamic/second/index',
        parentId: null,
        children: [],
        permissions: ['update']
      }
    ]
  }
]
