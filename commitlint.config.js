module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0],
    'type-enum': [
      2,
      'always',
      [
        'feat', //新增功能
        'fix', //修复BUG
        'perf', //性能优化
        'style', //代码格式
        'docs', //文档变更
        'test', //添加测试或测试改动
        'refactor', //代码重构
        'build', //构建相关、外部依赖变更(如升级 npm 包、修改打包配置等)
        'ci', //修改 CI 配置、脚本
        'chore', //架构变动
        'revert', //代码回退
        'wip', //正在开发中
        'workflow', //工作流修改
        'types' //类型定义文件修改
      ]
    ]
  },
  prompt: {
    useEmoji: true,
    typesAppend: [
      { value: 'wip', name: 'wip:      work in process' }
    ]
  }
}
