<script setup lang="ts" name="Lazy">
  import { vLazy } from '@/directives/lazy'

  const list = Array(15).fill(0).map((_, i) => ({
    id: i,
    title: '我是占位的列表',
    description: '请一直往下滚动，并打开F12观察图片加载请求，直到滚动到图片出现时，请求才会真正发出。'
  }))
</script>

<template>
  <div page-card>
    <PageTitle description="使用 v-lazy 指令，完成对指定图片资源懒加载。" />
    <List :data="list" mt="2" />
    <img v-lazy="{ src: 'https://picsum.photos/seed/picsum/400/260?random=1' }" alt="懒加载图片">
  </div>
</template>

<style lang="scss" scoped></style>
