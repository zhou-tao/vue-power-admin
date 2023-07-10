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
    <div i-fluent-emoji-flat-sun></div>
    <el-switch
      :model-value="darkTheme"
      size="large"
      inline-prompt
      active-text="暗"
      inactive-text="亮"
      @click="settingStore.toggleDark()"
    />
    <div i-fluent-emoji-flat-crescent-moon></div>
  </div>
  <span v-else @click="settingStore.toggleDark()" class="icon-view" text="xl! regular" cursor="pointer">
    <div i-app-sun v-if="darkTheme"></div>
    <div i-app-moon v-else></div>
  </span>
</template>

<style lang="scss" scoped>
:deep(.el-switch) {
  --el-switch-on-color: var(--el-switch-off-color);
}
</style>
