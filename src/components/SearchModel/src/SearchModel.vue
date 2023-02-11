<script setup lang="ts" name="SearchForm">
  import { SearchItemConfig } from './useSearchModel'

  const props = withDefaults(defineProps<{
    collapse?: boolean,
    showLines?: number,
    modelValue: any,
    config: SearchItemConfig[]
  }>(), {
    collapse: true,
    showLines: 1,
    modelValue: () => ({}),
    config: () => []
  })
  const emit = defineEmits(['update:modelValue', 'query', 'reset'])

  const SELECT_COMP_NAME = 'ElSelect'
  const collapsed = ref(false)
  const showCollapseBtn = computed(() => props.collapse && props.config.length > 3)
  const formData = computed({
    set: v => {
      emit('update:modelValue', v)
    },
    get: () => props.modelValue
  })
  const formConfig = computed(() => {
    if (!props.collapse || !collapsed.value) return props.config
    const LINE_PER_COUNT = 4
    return props.config.slice(0, props.showLines*LINE_PER_COUNT - 1)
  })

  function handleChange(field: string, value: string | number) {
    formData.value[field] = value
  }

</script>

<template>
  <el-form :inline="true" :model="formData" label-position="top">
    <el-row :gutter="24" flex-1>
      <el-col :span="6" v-for="({ component, field, label, options, ...attrs }) in formConfig" :key="field">
        <el-form-item :label="label">
          <component :is="component" :model-value="formData[field]" v-bind="attrs" @input="handleChange(field, $event)" @change="handleChange(field, $event)">
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
      <el-col :span="6" ml="auto">
        <el-form-item>
          <div flex h="15.5" items="end">
            <el-button type="primary" @click="emit('query')">
              <i-ri-search-line />查询
            </el-button>
            <el-button @click="emit('reset')">
              <i-ri-refresh-line />重置
            </el-button>
            <el-button
              v-if="showCollapseBtn"
              type="primary"
              link
              m="l-1! b-1!"
              text-xs
              @click="collapsed = !collapsed"
            >
              <i-ep-arrow-down-bold v-show="collapsed" />
              <i-ep-arrow-up-bold v-show="!collapsed" />
              {{ collapsed ? '展开' : '收起' }}
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
