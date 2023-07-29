// 登录账号
export const userAccounts = [
  { username: 'admin', password: '123456' }
]

// 用户信息
export const userInfo = {
  id: 0,
  name: 'admin',
  userId: 1,
  username: 'Toryz',
  gender: '1',
  avatar: 'https://avatars.githubusercontent.com/u/36221207?v=4',
  deptCode: '007',
  deptName: '开发部',
  mobile: '18812345678',
  posts: [
    { id: 1, code: 'FRONT-END', name: '前端' },
    { id: 4, code: 'OPEN-SOURCE', name: '开源' }
  ],
  roles: [
    { id: 0, code: 'ADMIN', name: '管理员', menu: [] }
  ],
  security: true // 密码安全性
}
