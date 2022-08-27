import type { UserInfoModel } from './model/userModel'
import { useFetch } from '@/utils/http'

enum Api {
  ACCOUNT_INFO = '/sysadmin/user/info',
  USER_LIST = '/sysadmin/user/list',
  USER_PRE = '/sysadmin/user',
  USER_ROLE_PRE = '/sysadmin/user/role',
  UPDATE_USER_PASSWORD = '/sysadmin/user/changePassword'
}

export const getAccountInfo = () => {
  return useFetch.GET<UserInfoModel>({
    url: Api.ACCOUNT_INFO
  })
}
