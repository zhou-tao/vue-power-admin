<script setup lang="ts" name="Avatar">
  defineProps<{
    src: string
  }>()
</script>

<template>
  <div class="avatar shadow-lg" b="solid light opacity-40">
    <img class="avatar" :src="src" alt="avatar">
  </div>
</template>

<style lang="scss" scoped>
.avatar {
  @apply w-10 h-10 rounded-full;
}
</style>
