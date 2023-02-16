const { notEmpty } = require('../utils.js')

module.exports = {
  description: '生成组件基础模版',
  prompts: [{
    type: 'input',
    name: 'name',
    message: '请输入组件名称',
    validate: notEmpty('name')
  }],
  actions ({ name }) {
    const actions = [{
      type: 'add',
      path: `src/components/${name}/src/${name}.vue`,
      templateFile: 'plop/component/component.hbs',
      data: {
        name
      }
    }, {
      type: 'add',
      path: `src/components/${name}/index.ts`,
      templateFile: 'plop/component/index.hbs',
      data: {
        name
      }
    }]
    return actions
  }
}
