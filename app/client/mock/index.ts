import type { Mock } from './types'

// mock api
import { MockApi } from './api'

// mock methods
import { authMockApi } from './modules/auth'
import { userMockApi, userInfoMockApi } from './modules/user'
import { menuMockApi, menuBuildMockApi } from './modules/menu'
import { roleMockApi } from './modules/role'
import { dictMockApi } from './modules/dict'
import { deptMockApi } from './modules/department'
import { postMockApi } from './modules/post'

// mock entry
const mockTemplates: Mock = {
  [MockApi.AUTH]: authMockApi,
  [MockApi.USER_LIST]: userMockApi,
  [MockApi.USER_INFO]: userInfoMockApi,
  [MockApi.MENU_LIST]: menuMockApi,
  [MockApi.MENU_BUILD]: menuBuildMockApi,
  [MockApi.ROLE_LIST]: roleMockApi,
  [MockApi.DICT_LIST]: dictMockApi,
  [MockApi.DEPT_LIST]: deptMockApi,
  [MockApi.POST_LIST]: postMockApi
}

export default mockTemplates
