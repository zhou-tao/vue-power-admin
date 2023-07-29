<script setup lang="ts" name="Watermark">
  import { vWatermark } from '@/directives/watermark'
</script>

<template>
  <div v-watermark="{ text: 'Toryz', color: '#be185d40' }" page-card>
    <PageTitle description="使用 v-watermark 指令对指定DOM添加自定义水印功能。支持自定义水印文本、颜色等属性配置。" />
  </div>
</template>

<style lang="scss" scoped></style>
