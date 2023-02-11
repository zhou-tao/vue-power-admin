<script setup lang="ts" name="SearchForm">
  import { SearchItemConfig } from './useSearchModel'

  const props = defineProps<{
    model: object,
    config: SearchItemConfig[]
  }>()

  const SELECT_COMP_NAME = 'ElSelect'

</script>

<template>
  <el-form :inline="true" :model="props.model" label-position="top">
    <el-row :gutter="24" flex-1>
      <el-col :span="6" v-for="({ component, field, label, options, ...attrs }) in props.config" :key="field">
        <el-form-item :label="label">
          <component :is="component" v-bind="attrs">
            <template v-if="component.name === SELECT_COMP_NAME">
              <el-option
                v-for="({ name, value }) in options"
                :key="value"
                :label="name"
                :value="value"
              />
            </template>
          </component>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item>
          <div flex h="15.5" items="end">
            <el-button type="primary">
              <i-ri-search-line />查询
            </el-button>
            <el-button>
              <i-ri-refresh-line />重置
            </el-button>
          </div>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<style lang="scss" scoped>
:deep(.el-row) {
  .el-form-item {
    @apply mr-0;

    .el-input,
    .el-select {
      @apply w-full max-w-75;
    }
  }
}
</style>
