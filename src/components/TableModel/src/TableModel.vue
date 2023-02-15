<script setup lang="ts" name="TableModel">
  import type { Slot } from 'vue'

  interface Column {
    prop?: string,
    label?: string,
    width?: string | number,
    align?: string,
    slot?: Slot
  }

  interface Pagination {
    current: number,
    size: number,
    total: number
  }

  defineProps<{
    loading?: boolean,
    data: Array<Object>,
    rowKey: string,
    columns: Column[],
    pagination: Pagination
  }>()

</script>

<template>
  <el-table
    size="large"
    v-loading="loading"
    :data="data"
    :row-key="rowKey"
    stripe
    border
    w-full
    mt-4
  >
    <el-table-column v-for="(col, i) in columns" :key="i" v-bind="col" />
  </el-table>
  <div mt-4 flex justify-end>
    <el-pagination
      :current-page="pagination.current"
      :page-size="pagination.size"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :page-sizes="[10, 20, 50, 100]"
      :total="pagination.total"
    />
  </div>
</template>

<style lang="scss" scoped></style>
