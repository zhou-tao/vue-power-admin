import { userAccounts } from '../static/users'

export const authMockApi = ({ body = {} }: Record<string, any>) => {
  const { username, password } = body
  if(userAccounts.some(u => u.username === username && u.password === password)) {
    return {
      access_token: 'mock_access_token',
      refresh_token: 'mock_refresh_token',
      expires_in: '999999',
      token_type: ''
    }
  } else {
    return null
  }
}
