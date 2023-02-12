export default {
  '/sysadmin/user/list':  {
    'list|10': [{
      'id|+1': 1,
      'username': '@first @last',
      'name': '@cname',
      'gender': '@pick(["男", "女"])',
      'mobile': /1[1-9]{2}\d{8}/,
      'roles': '@pick(["用户", "管理员"])',
      'deptName': '@cword(3,5)部',
      'posts': '@cword(3,5)'
    }]
  }
} as any
