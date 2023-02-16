type MockTemplate = Record<string, any>
interface MockInput {
  body: Record<string, any>
}
interface Mock {
  [key: string]: ((input: MockInput) => MockTemplate) | MockTemplate
}

const mockTemplates: Mock = {
  '/sysadmin/user/list': ({ body = {} }) => {
    const { size = 10, username, name } = body
    return {
      [`list|${size}`]: [{
        'id|+1': 1,
        'username': username ? `${username} @last` : '@first @last',
        'name': name ? `@cword(2)${name}@cword(2)` : '@cname',
        'gender': '@pick(["男", "女"])',
        'mobile': /1[1-9]{2}\d{8}/,
        'roles': '@pick(["用户", "管理员"])',
        'deptName': '@cword(3,5)部',
        'posts': '@cword(3,5)'
      }]
    }
  }
}

export default mockTemplates
