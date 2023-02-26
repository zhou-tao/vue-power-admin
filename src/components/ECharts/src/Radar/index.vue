<script setup lang="ts" name="Radar">
  import { vChart } from '@/directives/echarts'
  import { option } from './option'
</script>

<template>
  <div h-full v-chart="{ option }"></div>
</template>
