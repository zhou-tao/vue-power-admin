import { generatePageData } from '../util'
import { buildMenus } from '../static/menus'

export const MenuResult = {
  'id|+1': 1,
  'title': '@cword(2, 4)',
  'path': '/system/@word(2, 4)',
  'name': '@word(2, 4)',
  'icon': '@pick(["ri:dashboard-fill", "ep:home-filled", "ri:settings-4-fill", "ri:rocket-2-fill", "ri:checkbox-multiple-fill"])',
  'leaf|1': true,
  'order|+1': 1,
  'component': 'src/views/admin/@word(2,4)',
  'parentId|+1': 100,
  'redirect': '/system/@word(2, 4)/index',
  'children': []
}

export const menuMockApi = ({ body = {} }) => generatePageData(body, () => MenuResult)

export const menuBuildMockApi = () => buildMenus
