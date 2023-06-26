import { generatePageData } from '../util'

export const DictResult = {
  'id|+1': 1,
  'typeCode': '@pick(["GENDER", "JOB_LEVEL", "POST", "MENU_TYPE", "AUTH_TYPE"])',
  'typeName': '@pick(["性别", "职级", "岗位", "菜单", "角色"])',
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
