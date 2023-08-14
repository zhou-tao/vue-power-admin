import { notEmpty } from '../utils.js'

export default {
  description: '生成组件基础模版',
  prompts: [{
    type: 'input',
    name: 'name',
    message: '请输入组件名称',
    validate: notEmpty('name')
  }, {
    type: 'confirm',
    name: 'multiple',
    message: '是否新建组件目录',
    default: false
  }],
  actions({ name, multiple }) {
    const defaultActions = [{
      type: 'add',
      path: `src/components/${name}.vue`,
      templateFile: 'plop/component/component.hbs',
      data: {
        name
      }
    }]
    const multipleActions = [{
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
    return multiple ? multipleActions : defaultActions
  }
}
