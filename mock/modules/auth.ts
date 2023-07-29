import { userAccounts } from '../static/users'
import { authToken } from '../static/auth'

export const authMockApi = ({ body = {} }: Record<string, any>) => {
  const { grant_type, username, password } = body
  if (grant_type === 'refresh_token') return authToken // 仅用于模拟，真实场景下可能存在refresh_token失效，需返回401状态
  if (userAccounts.some(u => u.username === username && u.password === password)) {
    return authToken
  }
  else {
    return null
  }
}
