<script setup lang="ts" name="VerifyDialog">
  import VerificationCode from './VerificationCode.vue'

  const props = defineProps<{
    modelValue: boolean
  }>()

  const emit = defineEmits(['update:modelValue', 'change'])

  const visible = computed({
    set: (v) => {
      emit('update:modelValue', v)
    },
    get: () => props.modelValue
  })

  const failed = ref(false)

  function handleChange(success: boolean) {
    failed.value = !success
    setTimeout(() => {
      emit('change', success)
      failed.value = false
    }, 500)
  }
</script>

<template>
  <el-dialog
    v-model="visible" class="verify--dialog"
    :class="[failed ? 'animate-shake-x animate-duration-0.5s' : '']"
    width="360"
    :close-on-press-escape="false"
    :show-close="false"
    destroy-on-close
  >
    <VerificationCode mode="modal" @change="handleChange" />
  </el-dialog>
</template>

<style lang="scss">
.verify--dialog {
  .el-dialog__header {
    display: none;
  }
  .el-dialog__body {
    padding: 24px;
  }
}
</style>
