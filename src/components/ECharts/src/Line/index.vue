<script setup lang="ts" name="AreaLine">
  import type { ChartDataset } from '../useECharts'
  import { getOption } from './option'
  import { vChart } from '@/directives/echarts'

  const props = withDefaults(defineProps<{
    modelValue: ChartDataset
    colors?: string[][]
  }>(), {
    colors: () => [
      ['#00ffa2', '#00f0ff'],
      ['#ffba00', '#fff600']
    ]
  })

  const emit = defineEmits(['update:modelValue'])

  const data = computed({
    set: (v) => {
      emit('update:modelValue', v)
    },
    get: () => props.modelValue
  })

  const option = computed(() => getOption(props.colors))
</script>

<template>
  <div v-chart="{ option, data }" h-full />
</template>
