<script setup lang="ts" name="SearchModel">
  import { SearchItemConfig } from './useSearchModel'
  import { ComponentName, getElComponent, isRadio } from './useComponent'
  import type { FormInstance } from 'element-plus'

  const props = withDefaults(defineProps<{
    collapse?: boolean,
    showLines?: number,
    perLineCount?: number,
    modelValue: any,
    config: SearchItemConfig[]
  }>(), {
    collapse: true, // 开启收缩功能
    showLines: 1, // 显示行数
    perLineCount: 4, // 每行显示个数
    modelValue: () => ({}), // 搜索表单数据
    config: () => [] // 表单项配置
  })
  const emit = defineEmits(['update:modelValue', 'query', 'reset'])

  const searchFormRef = ref<FormInstance>()
  const collapsed = ref(false)
  const colSpan = computed(() => 24 / props.perLineCount)
  const showCollapseBtn = computed(() => props.collapse && props.config.length > 3)

  const formData = computed({
    set: v => {
      emit('update:modelValue', v)
    },
    get: () => props.modelValue
  })

  const showConfigCount = computed(() => {
    if (!props.collapse || !collapsed.value) return props.config.length
    return props.showLines*props.perLineCount - 1
  })

  function handleChange(field: string, value: string | number) {
    formData.value[field] = value
  }

  function handleReset() {
    searchFormRef.value!.resetFields()
    emit('reset')
  }

</script>

<template>
  <el-form ref="searchFormRef" inline :model="formData" label-position="top">
    <el-row :gutter="24" flex-1>
      <template v-for="({ component, field, label, options, ...attrs }, index) in config" :key="field">
        <el-col :span="colSpan" v-show="showConfigCount > index">
          <el-form-item :label="label" :prop="field">
            <component :is="getElComponent(component)" :model-value="formData[field]" v-bind="attrs" @input="handleChange(field, $event)" @change="handleChange(field, $event)">
              <template v-if="component.name === ComponentName.ElSelect">
                <el-option
                  v-for="opt in options"
                  :key="opt.value"
                  :label="opt.label"
                  :value="opt.value"
                />
              </template>
              <template v-else-if="isRadio(component)">
                <component
                  :is="component"
                  v-for="opt in options"
                  :key="opt.value.toString()"
                  :label="opt.value"
                >
                  {{ opt.label }}
                </component>
              </template>
            </component>
          </el-form-item>
        </el-col>
      </template>
      <el-col :span="colSpan" ml="auto">
        <el-form-item>
          <div flex h="15.5" items="end">
            <el-button type="primary" @click="emit('query')">
              <i-ri-search-line />查询
            </el-button>
            <el-button @click="handleReset">
              <i-ri-refresh-line />重置
            </el-button>
            <el-button
              v-if="showCollapseBtn"
              type="primary"
              link
              m="l-1! b-1!"
              @click="collapsed = !collapsed"
            >
              <i-ep-arrow-down-bold v-show="collapsed" text="xs!" />
              <i-ep-arrow-up-bold v-show="!collapsed" text="xs!" />
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
