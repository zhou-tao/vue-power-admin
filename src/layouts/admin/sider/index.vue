<script setup lang="ts" name="LayoutSider">
  import Menu from './components/Menu.vue'
  import LogoView from './components/LogoView.vue'
  import { useSettingStore } from '@/store/modules/setting'

  const { isVerticalMenu, menuCollapsed } = $(useSettingStore())
</script>

<template>
  <el-aside
    v-if="isVerticalMenu"
    :width="menuCollapsed ? '54px' : '260px'"
    border-r="solid lbg"
    dark:border-r="dbg"
    overflow="hidden"
    box="border"
    bg="white"
    dark:bg="#222338"
    transition-width
    duration-400
    ease-in-out
  >
    <LogoView />
    <Menu />
  </el-aside>
</template>
