<script setup lang="ts" name="Area">
  import { initChart } from '../useECharts'
  import { useOption } from './options'

  const areaChartRef = ref<HTMLDivElement>()
  onMounted(() => {
    const option = useOption()
    initChart(areaChartRef.value!, option)
  })
</script>

<template>
  <div w-full h-full ref="areaChartRef"></div>
</template>
