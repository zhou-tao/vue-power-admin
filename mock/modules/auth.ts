// 默认mock登录账号

export const userList = [
  { username: 'admin', password: '123456' },
  { username: 'tooz', password: '123456' }
]

export const authMockApi = ({ body = {} }: Record<string, any>) => {
  const { username, password } = body
  if(userList.some(u => u.username === username && u.password === password)) {
    return {
      access_token: 'sioweijdkxciuhek',
      refresh_token: 'xjdisjeirjdsjd',
      expires_in: '999999',
      token_type: ''
    }
  } else {
    return null
  }
}
