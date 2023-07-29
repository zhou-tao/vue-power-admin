import { Icon } from '@iconify/vue'
import type { SearchItemConfig } from '@/components/SearchModel'
import { useComponent } from '@/components/SearchModel'
import type { MenuModel } from '@/api/_system/model/menuModel'
import type { ColumnAttrs } from '@/components/TableModel'
import { useSlotTag } from '@/components/TableModel'

const { ElInput, ElSelect } = useComponent()

export enum SubmitTypeEnum {
  ADD = '新增',
  UPDATE = '编辑'
}

// search model config
export const config: SearchItemConfig[] = [
  { component: ElInput, label: '名称', field: 'title', placeholder: '请输入' },
  { component: ElSelect, label: '类型', field: 'leaf', clearable: true, options: [{ label: '目录', value: false }, { label: '菜单', value: true }] }
]

// table model static column config
export const staticColumns = [
  { fixed: true, type: 'selection', width: '50' },
  { fixed: true, prop: 'id', label: '编号', width: '70', align: 'center' },
  { prop: 'title', label: '名称', width: '120' },
  { prop: 'leaf', label: '类型', width: '140', slot: ({ row }: ColumnAttrs<MenuModel>) => [useSlotTag(row?.leaf ? '菜单' : '目录')] },
  { prop: 'icon', label: '图标', width: '80', slot: ({ row }: ColumnAttrs<MenuModel>) => [h(Icon, { icon: row.icon })] },
  { prop: 'component', label: '组件目录', width: '220' },
  { prop: 'path', label: '路由地址' },
  { prop: 'redirect', label: '重定向' }
]
