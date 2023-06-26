import { generatePageData } from '../util'

export const DeptResult = {
  'id|+1': 1,
  'code': '@word(2, 3)',
  'name': '@cword(2, 4)部',
  'description': '@cword(2, 6).',
  'createdBy': '@first @last',
  'createdTime': '2022-@date("MM-dd")'
}

export const deptMockApi = ({ body = {} }) => generatePageData(body, () => DeptResult)
