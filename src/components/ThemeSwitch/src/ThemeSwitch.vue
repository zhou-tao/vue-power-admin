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
    <i-emoji-sun />
    <el-switch
      :model-value="darkTheme"
      size="large"
      inline-prompt
      active-text="暗"
      inactive-text="亮"
      @click="settingStore.toggleDark()"
    />
    <i-emoji-crescent-moon />
  </div>
  <span v-else @click="settingStore.toggleDark()" class="icon-view" text="xl! regular" cursor="pointer">
    <i-app-sun v-if="darkTheme" />
    <i-app-moon v-else />
  </span>
</template>

<style lang="scss" scoped>
:deep(.el-switch) {
  --el-switch-on-color: var(--el-switch-off-color);
}
</style>
