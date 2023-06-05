<script setup lang="ts" name="LayoutContent">
  import { useSettingStore } from '@/store/modules/setting'
  import { useRefresh } from './useContent'

  const settingStore = useSettingStore()

  const { componentKey } = useRefresh()

</script>

<template>
  <el-main
    p="3"
    pb="0"
    relative
  >
    <router-view v-slot="{ Component }">
      <transition :name="settingStore.hasPageAnimate ? 'fade-slide' : ''">
        <component :is="Component" :key="componentKey" />
      </transition>
    </router-view>
  </el-main>
</template>

<style lang="scss" scoped></style>
