import { generatePageData } from '../util'

export const DictResult = {
  'id|+1': 1,
  'code': '@word(2, 5)',
  'name': '@cword(2, 4)',
  'description': '@cword(2, 6).',
  'options|2-4': [{
    'label': '@cword(2, 4)',
    'value|+1': 1
  }],
  'createdBy': '@first @last',
  'createdTime': '2022-@date("MM-dd")'
}

export const dictMockApi = ({ body = {} }) => generatePageData(body, () => DictResult)
