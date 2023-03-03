<script setup lang="ts" name="PageTitle">
  withDefaults(defineProps<{
    title?: string
    description?: string
  }>(), {
    description: '这个页面的一些描述文字'
  })
  const route = useRoute()
</script>

<template>
  <div>
    <h2 m="0" text="main">{{ title || route.meta?.title }}</h2>
    <p text="placeholder">{{ description }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
