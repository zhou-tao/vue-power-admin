<script setup lang="ts" name="ImagePreview">
  import Previewer from '@/utils/previewer'

  const images = ref<HTMLElement>()

  onMounted(() => {
    // eslint-disable-next-line no-new
    new Previewer(images.value!)
  })
</script>

<template>
  <div page-card>
    <PageTitle description="基于Viewer.js封装的图片预览插件，简单易用。" />
    <ul ref="images" list-none p="0" m="0">
      <li><img src="https://picsum.photos/seed/picsum/240/120?random=1" alt="Picture 1"></li>
      <li><img src="https://picsum.photos/seed/picsum/240/120?random=2" alt="Picture 2"></li>
      <li><img src="https://picsum.photos/seed/picsum/240/120?random=3" alt="Picture 3"></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
img {
  @apply cursor-pointer;
}
</style>
