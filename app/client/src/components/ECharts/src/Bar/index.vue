<script setup lang="ts" name="Bar">
  import { vChart } from '@/directives/echarts'
  import { ChartDataset } from '../useECharts'
  import { option } from './option'

  const props = defineProps<{
    modelValue: ChartDataset
  }>()

  const emit = defineEmits(['update:modelValue'])

  const data = computed({
    set: v => {
      emit('update:modelValue', v)
    },
    get: () => props.modelValue
  })

</script>

<template>
  <div h-full v-chart="{ option, data }"></div>
</template>
