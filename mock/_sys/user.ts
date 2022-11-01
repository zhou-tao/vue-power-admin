import { MockMethod } from 'vite-plugin-mock'
import { createFakeUserList } from 'mock/_auth'
import { resultSuccess } from 'mock/utils'

export default [
  {
    url: '/sysadmin/user/info',
    method: 'get',
    response: () => {
      return resultSuccess(createFakeUserList()[0])
    }
  }
] as MockMethod[]
