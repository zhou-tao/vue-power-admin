<script setup lang="ts" name="ThemeSwitch">
  import { useSettingStore } from '@/store/modules/setting'

  const props = withDefaults(defineProps<{
    type: 'base' | 'switch'
  }>(), {
    type: 'base'
  })

  const { isDark, toggleDark } = $(useSettingStore())

</script>

<template>
  <div v-if="props.type === 'switch'" text="2xl" flex items="center" gap="4">
    <i-emoji-sun />
    <el-switch
      v-model="isDark"
      size="large"
      inline-prompt
      active-text="暗"
      inactive-text="亮"
    />
    <i-emoji-crescent-moon />
  </div>
  <span v-else @click="toggleDark()" text="regular xl" cursor="pointer" leading="none">
    <i-app-sun v-if="isDark" />
    <i-app-moon v-else />
  </span>
</template>

<style lang="scss" scoped>
:deep(.el-switch) {
  --el-switch-on-color: var(--el-switch-off-color);
}
</style>
