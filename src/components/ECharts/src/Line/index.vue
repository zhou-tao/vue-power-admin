<script setup lang="ts" name="Area">
  import { initChart } from '../useECharts'
  import { options } from './options'

  const areaChartRef = ref<HTMLDivElement>()
  onMounted(() => {
    initChart(areaChartRef.value!, options)
  })
</script>

<template>
  <div w-full h-full ref="areaChartRef"></div>
</template>
