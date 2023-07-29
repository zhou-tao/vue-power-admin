import type { SearchItemConfig } from '@/components/SearchModel'
import { useComponent } from '@/components/SearchModel'

const { ElInput } = useComponent()

export enum SubmitTypeEnum {
  ADD = '新增',
  UPDATE = '编辑'
}

// search model config
export const config: SearchItemConfig[] = [
  { component: ElInput, label: '名称', field: 'name', placeholder: '请输入' }
]

// table model static column config
export const staticColumns = [
  { fixed: true, type: 'selection', width: '50' },
  { fixed: true, prop: 'id', label: '编号', width: '70', align: 'center' },
  { prop: 'name', label: '名称', width: '180' },
  { prop: 'code', label: '代码', width: '140' },
  { prop: 'description', label: '描述' },
  { prop: 'createdBy', label: '创建人' },
  { prop: 'createdTime', label: '创建时间' }
]
