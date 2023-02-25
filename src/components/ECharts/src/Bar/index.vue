<script setup lang="ts" name="Bar">
  import { initChart } from '../useECharts'
  import { options } from './options'

  const barChartRef = ref<HTMLDivElement>()
  onMounted(() => {
    initChart(barChartRef.value!, options)
  })
</script>

<template>
  <div w-full h-full ref="barChartRef"></div>
</template>
