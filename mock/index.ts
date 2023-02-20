import type { Mock } from './types'
import { useListTemplate } from './templates/list'

const RoleTemplate = {
  'id|+1': 1,
  'code|+1': ['0', '1'],
  'name|+1': ['管理员', '用户']
}

const PostTemplate = {
  'id|+1': 1,
  'code|+1': 1,
  'name|+1': ['前端', '后端', '产品', '测试', 'UI', '项目经理']
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
  ...useListTemplate('/sysadmin/menu/list', () => {
    return {
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
    }
  })
}

export default mockTemplates
