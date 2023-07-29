<script setup lang="ts" name="Table">
  import type { ColumnAttrs } from '@/components/TableModel'
  import { useSlotButton } from '@/components/TableModel'
  import { useMessage } from '@/hooks/web/useMessage'

  interface TableDemoModel {
    id: number
    field1: string
    field2: string
    field3: string
    field4: string
  }

  const { $message } = useMessage()

  const loading = ref(false)
  const columns = ref([
    { fixed: true, type: 'selection', width: '50' },
    { fixed: true, prop: 'id', label: '编号', width: '70', align: 'center' },
    { prop: 'field1', label: '字段一', width: '180' },
    { prop: 'field2', label: '字段二', width: '140' },
    { prop: 'field3', label: '字段三' },
    { prop: 'field4', label: '字段四' },
    {
      fixed: 'right',
      label: '操作',
      width: '160',
      slot: ({ row }: ColumnAttrs<TableDemoModel>) =>
        [
          useSlotButton('详情', () => {
            $message.success(`detail: ${row.id}`)
          }),
          useSlotButton('编辑', () => {
            $message.warning(`update: ${row.id}`)
          }),
          useSlotButton('删除', () => {
            $message.error(`delete: ${row.id}`)
          }, { type: 'danger' })
        ]
    }
  ])
  const tableData = ref<TableDemoModel[]>(Array(10).fill(0).map((_, i) => ({
    id: i + 1, field1: '静态数据一', field2: '静态数据二', field3: '静态数据三', field4: '静态数据四'
  })))
  const selectedData = ref<TableDemoModel[]>([])

  const pagination = reactive({
    current: 1,
    size: 10,
    total: 100
  })

  function handleSelectionChange(rows: TableDemoModel[]) {
    selectedData.value = rows
  }

  function handlePageChange(current: number) {
    pagination.current = current
  }

  function handleSizeChange(size: number) {
    pagination.size = size
  }
</script>

<template>
  <div page-card>
    <PageTitle description="表格通用组件，支持表格内每列字段通过配置项与slot形式进行传入来生成表格。规范统一的表格、分页器样式与统一的分页等事件处理流程。" />
    <TableModel
      v-model:pagination="pagination"
      :loading="loading"
      :columns="columns"
      :data="tableData"
      row-key="id"
      @selection-change="handleSelectionChange"
      @page-change="handlePageChange"
      @size-change="handleSizeChange"
    />
  </div>
</template>

<style lang="scss" scoped></style>
