import { generatePageData } from '../util'

export const PostResult = {
  'id|+1': 1,
  'code|+1': 1,
  'name|+1': ['前端', '后端', '产品', '测试', 'UI', '项目经理'],
  'description': '@cword(6, 12).',
  'createdBy': '@first @last',
  'createdTime': '2022-@date("MM-dd")'
}

export const postMockApi = ({ body = {} }) => generatePageData(body, () => PostResult)
