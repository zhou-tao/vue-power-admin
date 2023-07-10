<script setup lang="ts" name="PageNotFound">
  import { useRouter } from 'vue-router'
  const router = useRouter()
</script>

<template>
  <div
    h-full
    bg-root
    flex="center col"
  >
    <img src="@/assets/images/not_found.svg" width="600" alt="not_found" />
    <el-button
      mt-12
      round
      size="large"
      type="primary"
      @click="router.replace('/login?redirect=404')"
    >
      返回首页
    </el-button>
  </div>
</template>
