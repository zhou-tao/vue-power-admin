import type { Mock } from './types'
import { useListTemplate } from './templates/list'

const RoleTemplate = {
  'id|+1': 1,
  'code|+1': ['ADMIN', 'USER', 'GUEST'],
  'name|+1': ['管理员', '用户', '访客'],
  'menu|1-5': '@integer(1, 100)',
  'description': '@cword(6, 12).',
  'createdBy': '@first @last',
  'createdTime': '2022-@date("MM-dd")'
}

const PostTemplate = {
  'id|+1': 1,
  'code|+1': 1,
  'name|+1': ['前端', '后端', '产品', '测试', 'UI', '项目经理'],
  'description': '@cword(6, 12).',
  'createdBy': '@first @last',
  'createdTime': '2022-@date("MM-dd")'
}

const mockTemplates: Mock = {
  ...useListTemplate('/sysadmin/user/list', query => {
    const { username, name } = query
    return {
      'id|+1': 1,
      'username': username ? `${username} @last` : '@first @last',
      'name': name ? `@cword(2)${name}@cword(2)` : '@cname',
      'gender': '@pick(["1", "0"])',
      'mobile': /1[1-9]{2}\d{8}/,
      'roles': [RoleTemplate],
      'deptName': '@cword(3,5)部',
      'posts': [PostTemplate]
    }
  }),
  ...useListTemplate('/sysadmin/menu/list', () => ({
    'id|+1': 1,
    'title': '@cword(2, 4)',
    'path': '/system/@word(2, 4)',
    'name': '@word(2, 4)',
    'icon': '@pick(["ri:dashboard-fill", "ep:home-filled", "ri:settings-4-fill", "ri:rocket-2-fill", "ri:checkbox-multiple-fill"])',
    'leaf|1': true,
    'order|+1': 1,
    'component': 'src/views/admin/@word(2,4)',
    'parentId|+1': 100,
    'redirect': '/system/@word(2, 4)/index',
    'children': []
  })),
  ...useListTemplate('/sysadmin/role/list', () => RoleTemplate),
  ...useListTemplate('/sysadmin/dict/list', () => ({
    'id|+1': 1,
    'code': '@word(2, 5)',
    'name': '@cword(2, 4)',
    'description': '@cword(2, 6).',
    'options|2-4': [{
      'label': '@cword(2, 4)',
      'value|+1': 1
    }],
    'createdBy': '@first @last',
    'createdTime': '2022-@date("MM-dd")'
  })),
  ...useListTemplate('/sysadmin/department/list', () => ({
    'id|+1': 1,
    'code': '@word(2, 3)',
    'name': '@cword(2, 4)部',
    'description': '@cword(2, 6).',
    'createdBy': '@first @last',
    'createdTime': '2022-@date("MM-dd")'
  })),
  ...useListTemplate('/sysadmin/post/list', () => PostTemplate)
}

export default mockTemplates
