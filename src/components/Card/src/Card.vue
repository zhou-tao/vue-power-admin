<script setup lang="ts" name="Card">
  withDefaults(defineProps<{
    title?: string
    height?: string
    padding?: boolean
  }>(), {
    height: 'auto',
    padding: true
  })
</script>

<template>
  <div bg="page" rounded :style="{ height, padding: padding ? '16px 24px' : '0' }">
    <div v-if="title" flex="center" justify="between">
      <h5 m="0" text="regular xl">
        {{ title }}
      </h5>
      <slot name="right" />
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped></style>
