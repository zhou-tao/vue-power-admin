<script setup lang="ts" name="TableModel">
  import type { Slot } from 'vue'

  interface Column {
    prop?: string
    label?: string
    width?: string | number
    align?: string
    slot?: Slot
  }

  interface Pagination {
    current: number
    size: number
    total: number
  }

  const props = defineProps<{
    loading?: boolean
    columns?: Column[]
    data: Array<Object>
    rowKey: string
    pagination?: Pagination
  }>()
  const emit = defineEmits(['update:pagination', 'selectionChange', 'pageChange', 'sizeChange'])
  const slots = useSlots()
  const tableRef = ref()

  defineExpose({
    tableRef
  })

  const pageData = computed({
    set: (v) => {
      emit('update:pagination', v)
    },
    get: () => props.pagination
  })
</script>

<template>
  <el-table
    ref="tableRef"
    v-loading="loading"
    size="large"
    :data="data"
    :row-key="rowKey"
    stripe
    border
    w-full
    mt-4
    @selection-change="$emit('selectionChange', $event)"
  >
    <!-- slot(注释也算slot) 优先级高于 columns配置 -->
    <slot v-if="slots.default" />
    <template v-else-if="columns">
      <el-table-column v-for="(col, i) in columns" :key="i" v-bind="col">
        <template v-if="col.slot" #default="{ row }">
          <component :is="col.slot" :row="row" />
        </template>
      </el-table-column>
    </template>
  </el-table>
  <div mt-4 flex justify-end>
    <el-pagination
      v-if="pageData"
      v-model:current-page="pageData.current"
      v-model:page-size="pageData.size"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :page-sizes="[10, 20, 50, 100]"
      :total="pageData.total"
      @current-change="$emit('pageChange', $event)"
      @size-change="$emit('sizeChange', $event)"
    />
  </div>
</template>

<style lang="scss" scoped></style>
