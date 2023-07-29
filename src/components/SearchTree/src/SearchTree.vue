<script setup lang="ts" name="SearchTree">
  defineProps<{
    enableFilter?: boolean
    data: Record<string, any>[]
  }>()

  interface Tree {
    id: number
    label: string
    children?: Tree[]
  }
  const keywords = ref('')
  const treeRef = ref()

  watch(keywords, (val) => {
    treeRef.value!.filter(val)
  })

  const filterNode = (value: string, data: Tree) => {
    if (!value) return true
    return data.label.includes(value)
  }
</script>

<template>
  <el-input
    v-if="enableFilter"
    v-model="keywords"
    placeholder="请输入关键字搜索"
    class="mb-3"
  >
    <template #suffix>
      <div i-ep-search />
    </template>
  </el-input>
  <el-tree
    ref="treeRef"
    :data="data"
    v-bind="$attrs"
    :filter-node-method="filterNode"
  />
</template>

<style lang="scss" scoped>
:deep(.el-tree-node__content) {
  @apply py-1;
}
</style>
