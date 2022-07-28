<script setup lang="ts" name="PageNotFound">
  import { useRouter } from 'vue-router'
  const router = useRouter()
</script>

<template>
  <div class="h-full bg-white flex justify-center items-center">
    <div class="w-2/5 flex justify-center">
      <img src="@/assets/images/boat.png" alt="banner" class="w-[78%]" />
    </div>
    <div class="w-2/5 flex flex-col">
      <img src="@/assets/images/404.png" alt="404" class="w-3/5" />
      <h2 class="mt-60px text-4xl text-[#5A6275] tracking-8px">
        糟糕，页面飘走了...
      </h2>
      <span class="text-xl text-[#b1b1b1] tracking-2px"
        >THE PAGE YOU ARE LOOKING FOR NOT AVAILABLE!</span
      >
      <a-button type="primary" @click="router.replace('/login?redirect=404')">
        返回首页
      </a-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
  :deep(.ant-btn) {
    @apply mt-24 w-48 h-12 text-xl tracking-3px;
  }
</style>
