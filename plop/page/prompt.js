const { notEmpty } = require('../utils.js')

module.exports = {
  description: '生成页面基础模版',
  prompts: [{
    type: 'input',
    name: 'name',
    message: '请输入页面名称(eg. user)',
    validate: notEmpty('name')
  },
  {
    type: 'input',
    name: 'api',
    message: '请输入列表请求方法名(eg. getUserList)',
    default: 'YourApi'
  },
  {
    type: 'input',
    name: 'model',
    message: '请输入列表数据类型名(eg. UserInfoModel)',
    default: 'YourModel'
  }, {
    type: 'confirm',
    name: 'isSystemPage',
    message: '是否为系统设置功能页面',
    default: false
  }],
  actions({ name, api, model, isSystemPage }) {
    const actions = [{
      type: 'add',
      path: `src/views/admin/${isSystemPage ? '_sys/' : ''}${name}/index.vue`,
      templateFile: 'plop/page/page.hbs',
      data: {
        name,
        api,
        model
      }
    }]
    return actions
  }
}
