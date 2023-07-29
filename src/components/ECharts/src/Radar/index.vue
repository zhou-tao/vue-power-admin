<script setup lang="ts" name="Radar">
  import { option } from './option'
  import { vChart } from '@/directives/echarts'
</script>

<template>
  <div v-chart="{ option }" h-full />
</template>
