<script setup lang="ts" name="VerificationCode">
  import { VerificationCode, VerifyDialog } from '@c/VerificationCode'
  import { useMessage } from '@/hooks/web/useMessage'

  const { $message } = useMessage()
  const showVerifyDialog = ref(false)

  function handleSucceed(v: boolean) {
    if (v) {
      $message.success('验证通过！')
      showVerifyDialog.value = false
    }
    else {
      $message.error('验证失败！')
    }
  }
</script>

<template>
  <div page-card>
    <PageTitle description="通用滑动验证码组件。" />
    <VerificationCode @change="handleSucceed" />
    <el-button type="primary" class="mt-4" @click="showVerifyDialog = true">
      开启弹窗验证
    </el-button>
    <VerifyDialog v-model="showVerifyDialog" @change="handleSucceed" />
  </div>
</template>

<style lang="scss" scoped></style>
