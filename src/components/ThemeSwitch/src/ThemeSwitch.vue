<script setup lang="ts" name="ThemeSwitch">
  import { useSettingStore } from '@/store/modules/setting'

  withDefaults(defineProps<{
    type?: 'base' | 'switch'
  }>(), {
    type: 'base'
  })
  const settingStore = useSettingStore()

  const darkTheme = computed(() => settingStore.isDark.value)
</script>

<template>
  <div v-if="type === 'switch'" text="2xl" flex="center" gap="4">
    <div i-fluent-emoji-flat-sun />
    <el-switch
      :model-value="darkTheme"
      size="large"
      inline-prompt
      active-text="暗"
      inactive-text="亮"
      @click="settingStore.toggleDark()"
    />
    <div i-fluent-emoji-flat-crescent-moon />
  </div>
  <span v-else class="icon-view" text="xl! regular" cursor="pointer" @click="settingStore.toggleDark()">
    <div v-if="darkTheme" i-app-sun />
    <div v-else i-app-moon />
  </span>
</template>

<style lang="scss" scoped>
:deep(.el-switch) {
  --el-switch-on-color: var(--el-switch-off-color);
}
</style>
