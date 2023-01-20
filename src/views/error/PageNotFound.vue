<script setup lang="ts" name="PageNotFound">
  import { ArrowLeftBold } from '@element-plus/icons-vue'
  import { useRouter } from 'vue-router'
  const router = useRouter()
</script>

<template>
  <div h-full bg-white flex flex-col justify-center items-center>
    <img src="@/assets/images/not_found.svg" width="600" alt="not_found" />
    <el-button
      mt-12
      round
      size="large"
      type="primary"
      :icon="ArrowLeftBold"
      @click="router.replace('/login?redirect=404')"
    >返回首页</el-button
    >
  </div>
</template>
