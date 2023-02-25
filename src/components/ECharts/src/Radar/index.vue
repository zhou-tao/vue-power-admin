<script setup lang="ts" name="Radar">
  import { initChart } from '../useECharts'
  import { options } from './options'

  const radarChartRef = ref<HTMLDivElement>()
  onMounted(() => {
    initChart(radarChartRef.value!, options)
  })
</script>

<template>
  <div w-full h-full ref="radarChartRef"></div>
</template>
