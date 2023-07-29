import { generatePageData } from '../util'
import { userInfo } from '../static/users'
import { MenuResult } from './menu'
import { PostResult } from './post'
import { RoleResult } from './role'

export const userResult = {
  'id|+1': 1,
  'username': '@first @last',
  'name': '@cname',
  'gender': '@pick(["1", "0"])',
  'mobile': /1[1-9]{2}\d{8}/,
  'roles': [RoleResult],
  'deptName': '@cword(3,5)部',
  'posts': [PostResult],
  'menu': [MenuResult]
}

export const userMockApi = ({ body = {} }) => generatePageData(body, () => userResult)

export const userInfoMockApi = () => userInfo
