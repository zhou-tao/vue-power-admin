<script setup lang="ts" name="VerificationCode">
  import { useMessage } from '@/hooks/web/useMessage'
  import { SlideBlockCode } from '@c/VerificationCode'

  const { $message } = useMessage()

  function handleSucceed () {
    $message.success('验证通过！')
  }
</script>

<template>
  <div page-card>
    <PageTitle description="通用验证码组件。" />
    <SlideBlockCode @succeed="handleSucceed" />
  </div>
</template>

<style lang="scss" scoped></style>
