<script setup lang="ts" name="ShortCut">
  import { Icon } from '@iconify/vue'

  defineProps<{
    title: string
    icon: string
  }>()
</script>

<template>
  <div flex="~ col" items="center" my="4" style="flex: 0 0 33.3%">
    <div
      w-12
      h-12
      rounded
      bg="light hover:light_hover"
      flex="center"
      mb="4"
      cursor="pointer"
    >
      <Icon :icon="icon" text="2xl" />
    </div>
    <span text="sm regular">{{ title }}</span>
  </div>
</template>

<style lang="scss" scoped></style>
