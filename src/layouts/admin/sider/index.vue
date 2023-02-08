<script setup lang="ts" name="LayoutSider">
  import LogoView from './components/LogoView.vue'
  import Menu from './components/Menu.vue'
  import { useMenuCollapsed, useMenuLayout } from '@h/setting/useSetting'

  const { collapsed } = useMenuCollapsed()
  const { isVertical } = useMenuLayout()
</script>

<template>
  <el-aside v-if="isVertical" :width="collapsed ? '54px' : '260px'" border-r="solid lbg" dark:border-r="dbg" overflow="hidden" box="border" bg="white" dark:bg="#222338" transition-width duration-400 ease-in-out>
    <LogoView />
    <Menu />
  </el-aside>
</template>
