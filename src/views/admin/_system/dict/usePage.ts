import type { SearchItemConfig } from '@/components/SearchModel'
import { useComponent } from '@/components/SearchModel'

const { ElInput } = useComponent()

export enum SubmitTypeEnum {
  ADD = '新增',
  UPDATE = '编辑'
}

// search model config
export const config: SearchItemConfig[] = [
  { component: ElInput, label: '字典名称', field: 'name', placeholder: '请输入' },
  { component: ElInput, label: '字典值', field: 'code', placeholder: '请输入' }
]

// table model static column config
export const staticColumns = [
  { fixed: true, type: 'selection', width: '50' },
  { fixed: true, prop: 'id', label: '编号', width: '70', align: 'center' },
  { prop: 'typeName', label: '字典类型', width: '100' },
  { prop: 'typeCode', label: '类型代码', width: '120' },
  { prop: 'name', label: '字典名称', width: '100' },
  { prop: 'code', label: '字典值', width: '80' },
  { prop: 'description', label: '描述' },
  { prop: 'createdBy', label: '创建人' },
  { prop: 'createdTime', label: '创建时间' }
]
