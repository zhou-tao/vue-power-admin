import { generatePageData } from '../util'

export const RoleResult = {
  'id|+1': 1,
  'code|+1': ['ADMIN', 'USER', 'GUEST'],
  'name|+1': ['管理员', '用户', '访客'],
  'menu|1-5': '@integer(1, 100)',
  'description': '@cword(6, 12).',
  'createdBy': '@first @last',
  'createdTime': '2022-@date("MM-dd")'
}

export const roleMockApi = ({ body = {} }) => generatePageData(body, () => RoleResult)
