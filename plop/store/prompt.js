const { notEmpty } = require('../utils.js')

module.exports = {
  description: '生成store基础模板',
  prompts: [{
    type: 'input',
    name: 'name',
    message: '请输入module名称',
    validate: notEmpty('name')
  },
  {
    type: 'list',
    name: 'persist',
    message: '请选择持久化方式',
    choices: [
      { name: 'no persist', value: 'no' },
      { name: 'session storage', value: 'session' },
      { name: 'local storage', value: 'local' }
    ],
    default: 'no'
  }],
  actions({ name, persist }) {
    const actions = [{
      type: 'add',
      path: `src/store/modules/${name}.ts`,
      templateFile: 'plop/store/module.hbs',
      data: {
        name,
        persist,
        hasPersist: persist !== 'no'
      }
    }
    ]

    return actions
  }
}
