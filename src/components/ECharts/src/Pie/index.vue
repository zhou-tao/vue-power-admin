<script setup lang="ts" name="Pie">
  import { initChart } from '../useECharts'
  import { options } from './options'

  const pieChartRef = ref<HTMLDivElement>()
  onMounted(() => {
    initChart(pieChartRef.value!, options)
  })
</script>

<template>
  <div w-full h-full ref="pieChartRef"></div>
</template>
