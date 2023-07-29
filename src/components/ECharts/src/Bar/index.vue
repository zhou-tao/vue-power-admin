<script setup lang="ts" name="Bar">
  import type { ChartDataset } from '../useECharts'
  import { option } from './option'
  import { vChart } from '@/directives/echarts'

  const props = defineProps<{
    modelValue: ChartDataset
  }>()

  const emit = defineEmits(['update:modelValue'])

  const data = computed({
    set: (v) => {
      emit('update:modelValue', v)
    },
    get: () => props.modelValue
  })
</script>

<template>
  <div v-chart="{ option, data }" h-full />
</template>
