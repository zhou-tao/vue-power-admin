<script setup lang="ts" name="ShortCut">
  import { Icon } from '@iconify/vue'
  defineProps<{
    title: string,
    icon: string
  }>()
</script>

<template>
  <div flex="~ col" items="center" m="4">
    <div
      w-12
      h-12
      rounded
      bg-light
      center
      mb="4"
    >
      <Icon :icon="icon" text="2xl" />
    </div>
    <span>{{ title }}</span>
  </div>
</template>

<style lang="scss" scoped></style>
